import React, {ReactElement} from "react";

import {toolTipContent} from "../../views/tool-tip-content/content-tool-tips";
import {dataManagerMain} from "../../index";
import StickyThing from "../../view-components/sticky-panel/sticky-panel";
import {SingleMediaDetailsView} from "../../views/media-library/media-details-view";
import {CatmanIcon} from "../../svg/icons/icons";
import AppButton from "../../view-components/button/app-button";
import {DataGrid, selectionObject} from "../../view-components/data-grid/data-grid";
import {iDataGridItem} from "../../_catman-data-types";
import {DataManager, iUpdateSet} from "../../data-components/data-manager/data-manager";
import {iColumn} from "../../_catman-data-types";
import {focusInputType} from "../../views/catalog-views/catalog-details/catalog-details-view";
import {TextInput} from "../../view-components/text-input/text-input";
import {dataSetType} from "../../data-components/data-manager/data-manager";

type viewState = "cards-view" | "grid-view" | "mosaic-view";


interface iPROPS {
    message?: string;
    gridData : iDataGridItem[][];
    columnsData : iColumn[];
    dataManager : DataManager;
    targetDataSet : dataSetType;
    selectionActions? : Function[];
    gridHasDetailsButton : boolean;
}

interface iSTATE{
    detailsOpen : boolean;
    editDrawerOpen : boolean;
    workingData : iDataGridItem[][];
    columnsData : iColumn[];
    focusedInput : focusInputType;
    footerOpen : boolean;
    footerMode : "default" | "has-group" | "no-group" | "multiple-selected" ;
    editDrawerMaximized : boolean;
}

export class DataGridWithEditDrawer extends React.Component<iPROPS, iSTATE>{
    constructor(props:iPROPS) {
        super(props);
        this.columnDefs = this.props.columnsData;
        this.state={
            detailsOpen : false,
            editDrawerOpen : false,
            //TODO need to adjust data manager
            columnsData : this.props.columnsData,
            workingData : this.props.gridData,
            focusedInput : { row:0, cell:0, editDrawerOpen : false},
            footerOpen : false,
            footerMode : "default",
            editDrawerMaximized : false
        }
    }

    selectedMediaIndex : number = 0;
    dataGridRef = React.createRef<DataGrid>();
    editDrawerRef = React.createRef<StickyThing>();
    drawerFirstOpen : boolean = false;
    //COLUMN DEFINITIONS:
    columnDefs : iColumn[];

    //just for the fist launch of checkbox editing
    initialized : boolean = false;

    selectionSet : selectionObject[] = [];
    drawerInputsLength = 0;

    manageMediaDetailsPage=(mediaIndex : number)=>{
        this.selectedMediaIndex = mediaIndex;
        this.setState({detailsOpen : !this.state.detailsOpen})
    };

    getMediaDetailsView(){
        if(this.state.detailsOpen === true){
            return(
                <StickyThing
                    enterFromThisSide="right"
                    lastResortClasses={"product-view"}
                    animateIn={true}
                    heightIncludeUnits="100vh"
                    widthIncludeUnits={"100vw"}
                    stickyOpen={true}
                    bgColor={"#CECECE"}
                    doAnimation={true}
                >
                    <SingleMediaDetailsView
                        mediaData={dataManagerMain.getMediaObjectData()[this.selectedMediaIndex]}
                        closeSingleMediaView={()=>this.manageMediaDetailsPage(0)}
                    />
                </StickyThing>
            )
        }
    }

    getColumnLabel(colName : string) : string{
        //utility method for getting column data obj from
        let columnLabel = "";
        for(let i = 0; i < this.columnDefs.length; i++){
            if(this.columnDefs[i].columnName === colName){
                columnLabel = this.columnDefs[i].columnLabel;
            }
        }
        return columnLabel;
    }

    updateValues=(row : number, cell:number, value:string, colName : string)=>{
        if(this.dataGridRef.current != null && this.dataGridRef.current != undefined ){
            this.selectionSet = this.dataGridRef.current.selectionSet;

        }
        //console.log("inside drawer", value, " col name:", colName);
        //the minus 2 is the offset for the extra columns checkbox and edit
        for(let i =0; i < this.selectionSet.length; i++){
            if(this.selectionSet[i].columnName === colName){
                let myRow = this.selectionSet[i].row-2;
                let myCell = this.selectionSet[i].cell-2;

                //this.workingDataSet[ myRow-2][myCell-2].value = value;
                const updateSet : iUpdateSet = { row:myRow ,cell:myCell, newData:value };
                if(this.props.targetDataSet === "custom-data"){
                    //if it's custom we need to pass along the grid data package
                    this.props.dataManager.setData(this.props.targetDataSet, updateSet, this.props.gridData);
                }else{
                    this.props.dataManager.setData(this.props.targetDataSet, updateSet);
                }
            }
        }
        this.setState({workingData : this.props.dataManager.getProductData()});
    };

    openEditDrawer( ){
        this.drawerFirstOpen = true;
        this.setState({editDrawerOpen : true});
    }

    //DRAWER RELATED
    maximizeEditDrawer(){
        this.setState({editDrawerMaximized : !this.state.editDrawerMaximized})
    }

    closeEditDrawer(){
        this.setState({
            editDrawerOpen : false,
            editDrawerMaximized : false,
            focusedInput : {row:0, cell:0, editDrawerOpen:false}
        });
        if(this.dataGridRef.current != null && this.dataGridRef.current != undefined){
            this.dataGridRef.current.clearSelection();
        }
        this.drawerFirstOpen = false;
    }

    shiftFocus(shiftIndex: number){
        let inputs: HTMLCollection = document.getElementsByClassName("InputBox");

        if(inputs[0] != undefined){
            if(shiftIndex === inputs.length-1){
                // @ts-ignore
                inputs[0].focus();
                // @ts-ignore
                inputs[0].select();
            }
        }
    };

    inputFocusAction=(row : number, cell:number)=>{
        if(this.state.editDrawerOpen === true){
            this.setState({focusedInput : { row : row, cell : cell, editDrawerOpen: this.state.editDrawerOpen}})
        }
    };

    getEditDrawer():ReactElement{

        if(this.state.editDrawerOpen === false){
            return(<></>);
        }

        if(this.dataGridRef.current != null && this.dataGridRef.current != undefined ){
            this.selectionSet = this.dataGridRef.current.selectionSet;
        }

        let inputs : ReactElement[] = [];
        let selectedItems : iDataGridItem[] = [];

        //Create list of selection items that need inputs (i.e. one input per column)
        i: for(let i=0; i < this.selectionSet.length; i++){

            j: for(let j=0; j < selectedItems.length; j++){
                if(this.selectionSet[i].columnName === selectedItems[j].columnName){
                    continue i;
                }
            }
            let row = this.selectionSet[i].row;
            let cell = this.selectionSet[i].cell;
            //TODO this needs to be genericized
            //let productDataItem = catmanData.productData[row-2][cell-2];
            let productDataItem = this.props.gridData[row-2][cell-2];
            selectedItems.push(productDataItem);
        }

        //Store number of inputs for later use
        this.drawerInputsLength = selectedItems.length;

        //CREATE INPUTS for DRAWER

        let checkValue = "";
        for( let i=0; i < selectedItems.length; i++){
            //check for duplicate values
            //make a list of all the items that match column name
            let sameColumn : iDataGridItem[] = [];
            j: for(let j = 0; j < this.selectionSet.length; j++)
            {
                    if(selectedItems[i].columnName === this.selectionSet[j].columnName)
                    {
                        sameColumn.push( this.state.workingData[this.selectionSet[j].row-2][this.selectionSet[j].cell-2]);
                    }
            }
            //go over each item in the selection set and compare its corresponding value

            k: for(let k = 0; k < sameColumn.length; k++)
            {
                if(k == 0)
                {
                    checkValue = sameColumn[k].value;
                    continue k;
                }

                if(checkValue == sameColumn[k].value)
                {
                    continue k;
                }
                else
                {
                    checkValue = "--multiple values selected";
                    break k;
                }

            }
            console.log("sameColumn",sameColumn);
            console.log("selectedItems",selectedItems);
            console.log("checkValue",checkValue);

            let input = (
                <TextInput
                    row={this.selectionSet[i].row}
                    cell={this.selectionSet[i].cell}
                    columnName={this.selectionSet[i].columnName}
                    label={this.getColumnLabel( selectedItems[i].columnName )}
                    currentValue={ checkValue}
                    onChangeAction={this.updateValues}
                    onFocusAction={this.inputFocusAction}
                    onBlurActions={[ ()=>this.shiftFocus(i) ]}
                />
            );
            inputs.push(input)
        }

        let maximize = (valueCheck : boolean)=>{
            if(valueCheck === true){
                return "maximized"
            }else{
                return "catman-edit-default restored"
            }
        };

        let restoreAndMaximizeTooltip = (valueCheck : boolean)=>{
            if(valueCheck === false){
                return toolTipContent.maximizeDrawer();
            }else{
                return toolTipContent.restoreDrawer();
            }
        };

        let restoreAndMaximizeBtnIcon = (valueCheck : boolean)=>{
            if(valueCheck === false){
                return "icon-maximize"
            }else{
                return "icon-restore-btn"
            }
        };


        let drawer = (<></>);
        if(this.state.editDrawerOpen === true){
            drawer = (
                <>
                    <StickyThing
                        ref = {this.editDrawerRef}
                        enterFromThisSide="bottom"
                        lastResortClasses={`catman-edit-drawer ${maximize(this.state.editDrawerMaximized)}`}
                        animateIn={true}
                        heightIncludeUnits=""
                        widthIncludeUnits={""}
                        stickyOpen={true}
                        bgColor={"#CECECE"}
                        doAnimation={true}
                        toolBar="none"
                    >
                        <div className={"tool-bar"}>
                            <div></div>
                            <div className="drawer-controls">
                                <AppButton
                                    buttonType={"secondary-action"}
                                    buttonLabel=""
                                    OnClick={()=>this.maximizeEditDrawer()}
                                    tooltipType="custom"
                                    tooltip={restoreAndMaximizeTooltip(this.state.editDrawerMaximized)}
                                    toolTipTimeOutInMS={10000}
                                    classes="tool-bar-btn icon-only-btn"
                                    iconLeft={
                                        <CatmanIcon
                                            iconName={`${restoreAndMaximizeBtnIcon(this.state.editDrawerMaximized)}`}
                                            classes=" "
                                            height="100%"
                                            width="100%"
                                        />
                                    }
                                />
                                <AppButton
                                    buttonType={"secondary-action"}
                                    buttonLabel=""
                                    OnClick={()=>this.closeEditDrawer()}
                                    tooltipType="custom"
                                    tooltip={toolTipContent.closeDrawer()}
                                    toolTipTimeOutInMS={10000}
                                    classes="icon-only-btn"
                                    iconLeft={
                                        <CatmanIcon
                                            iconName="icon-close"
                                            classes=" "
                                            height="100%"
                                            width="100%"
                                        />
                                    }
                                />

                            </div>
                        </div>
                        <div className="drawer-edit-area">
                            {inputs}
                        </div>
                    </StickyThing>
                </>
            );
        }
        return drawer;
    }

    //GRID MANAGEMENT
    getGridArea(){
        return (
            <DataGrid
                ref={this.dataGridRef}
                data={this.state.workingData}
                manageParentViews={()=>this.openEditDrawer()}
                selectionCallback={this.manageSelectionSet}
                columnsData={this.state.columnsData}
                classes={this.conditionClasses()}
                addAction={this.addAction}
                focusedItem={this.state.focusedInput}
                hasDetailsActionButton={this.props.gridHasDetailsButton}
            />
        )
    }

    manageSelectionSet = (selectionSet : iDataGridItem[], checkBoxSelections : number[], message : string, row:number, cell:number )=>{
        if(checkBoxSelections.length > 0 || (this.initialized === false && checkBoxSelections.length === 0 && message === "checkbox-launched") ){
            if(checkBoxSelections.length <= 1){
                this.setState({editDrawerOpen : false, footerOpen : true, footerMode: "default"});
            }else if(checkBoxSelections.length > 1 ){
                this.setState({editDrawerOpen : false, footerOpen : true, footerMode: "multiple-selected"});
            }
            this.initialized = true;
        }else{
            this.setState({footerOpen : false});
        }

        //this is a catch all for parent objects to do something when...
        //... a selection has occurred

        if(this.props.selectionActions != undefined){
            for(let i=0; i < this.props.selectionActions.length; i++){
                this.props.selectionActions[i]();
            }
        }

        //manage focus events
        //we'll use the row & cell data here to manage the focus widget
        if(this.state.editDrawerOpen === true){
            this.setState({focusedInput : { row : row, cell : cell, editDrawerOpen:true}})
        }

    };
    conditionClasses(){
        if(this.state.editDrawerOpen === true){
            return "drawer-open";
        }
    }
    addAction(addType:string){

        switch (addType) {
            case "add-attribute":

                return(<></>);
            case "add-products":

                return(<></>);
        }
    }

    switchToEditMode(){
        if(this.dataGridRef.current !== null && this.dataGridRef.current !== undefined){
            this.dataGridRef.current.switchToEditModeFromCheckBoxMode();
            this.openEditDrawer();
            this.initialized = false;
            this.setState({footerOpen : false})
        }
    }

    // Grid
    clearSelection(){
        if(this.dataGridRef.current !== null && this.dataGridRef.current !== undefined){
            this.dataGridRef.current.clearSelection();
        }
    }
    getCheckedRows(){
        if(this.dataGridRef.current != undefined)
        {
            return this.dataGridRef.current._checkedRows
        }
    }
    switchToEditModeFromCheckBoxMode(){
        if(this.dataGridRef.current !== null && this.dataGridRef.current !== undefined){
            this.dataGridRef.current.switchToEditModeFromCheckBoxMode();
            this.openEditDrawer();
            this.initialized = false;
            this.setState({footerOpen : false})
        }
    }

    //Life Cycle
    componentDidUpdate(): void {
        let inputs : any = document.getElementsByClassName("InputBox");

        if(this.drawerFirstOpen === true ){
            if(inputs[0] != undefined){
                inputs[0].focus();
                inputs[0].select();
                this.drawerFirstOpen = false;
            }
        }
    }

    render(){
        return(
            <>
                {this.getEditDrawer()}
                {this.getGridArea()}
                {this.getMediaDetailsView()}
            </>
        );
    }
}