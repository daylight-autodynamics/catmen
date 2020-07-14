import * as React from "react";
import {Navigation} from "../../../view-components/list-menu/intra-app-navigation";
import {MainHeaderArea} from "../../_common/main-header-area/main-header-area";

//Configuration data:
import {mainNavConfig} from "../../_catman-configuration/common-app-configuration";
import {CatmanIcon} from "../../../svg/icons/icons";
import {ToolTipContent} from "../../../view-components/heru-tool-tip/tool-tip-content";
import {DataGrid, selectionObject} from "../../../view-components/data-grid/data-grid";
import {catmanData} from "../../../_sample-data/products-data";
import {TitleArea} from "../../../view-components/title-area/title-area";
import {Route, RouteComponentProps, Switch, useRouteMatch} from "react-router-dom";
import StickyThing from "../../../view-components/sticky-panel/sticky-panel";
import {ReactElement} from "react";
import {iDataGridItem} from "../../../_catman-data-types";
import {toolTipContent} from "../../tool-tip-content/content-tool-tips";
import AppButton from "../../../view-components/button/app-button";
import {iColumn} from "../../../_catman-data-types";
import {CatalogSingleProduct} from "./single-product-view";
import {TextInput} from "../../../view-components/text-input/text-input";

import {DataManager, dataSetType, iUpdateSet} from "../../../data-components/data-manager/data-manager";
import {ModalView} from "../../../view-components/modal/modal";
import {AddVariantsWizard} from "../../wizards/create-product-group/add-variants-wizard";
import {dataManagerMain} from "../../../index";

import {CreateProductGroupWizard} from "../../wizards/create-product-group/create-product-group-wizard";
import {DataGridWithEditDrawer} from "../../../view-components/data-grid/data-grid-with-edit-drawer";


interface iPROPS   {
    message: string;
    query:string | null;
    gridData : DataManager;
    columnsData : DataManager;
    targetDataSet : dataSetType;
}

export type modalStateType = "closed" | "add-to-product-group" | "create-product-group" | "delete-confirmation";
//TODO need to make these types into a definitions file
export type focusInputType = { row : number, cell : number, editDrawerOpen : boolean};

interface iSTATE{
    productViewOpen : boolean;
    editDrawerOpen : boolean;
    editDrawerMaximized : boolean;
    modalState : modalStateType;
    footerOpen : boolean;
    footerMode : "default" | "has-group" | "no-group" | "multiple-selected" ;
    selectionSet : selectionObject[];
    workingData : iDataGridItem[][];
    columnsData : iColumn[];
    focusedInput : focusInputType;
}

export class CatalogDetailsView extends React.Component<iPROPS, iSTATE>{
     constructor(props:iPROPS) {
         super(props);
         this.columns = this.props.columnsData.getProductColumns();
         this.state = {
             workingData : this.props.gridData.getProductData(),
             columnsData : this.props.columnsData.getProductColumns(),
             productViewOpen : false,
             editDrawerOpen : false,
             editDrawerMaximized : false,
             footerOpen : false,
             footerMode : "default",
             selectionSet : [],
             modalState : "closed",
             focusedInput : { row:0, cell:0, editDrawerOpen : false}
         };

         this.workingDataSet = this.props.gridData.getProductData();
     }
     workingDataSet : iDataGridItem[][];
     //just for the fist launch of checkbox editing
     initialized:boolean = false;
     dataGridRef = React.createRef<DataGridWithEditDrawer>();
     editDrawerRef = React.createRef<StickyThing>();
     editDrawer : ReactElement = (<></>);
     selectionSet : selectionObject[] = [];
     columns : iColumn[];
     //manage selection in the drawer
     drawerFirstOpen = false;
     drawerInputsLength = 0;
     inputsControls: any;


    getCheckBoxesSelection(){
        if(this.dataGridRef.current !== null && this.dataGridRef.current !== undefined){
            return this.dataGridRef.current.getCheckedRows();
        }
    }

     closeSingleProductEdit = ()=>{
        window.history.back();
    };

     getProductViewDrawer( ){
         if(this.props.query != "none" && this.props.query != null && this.props.query != undefined ){

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
                    <CatalogSingleProduct
                        uniqueID={this.props.query}
                        productData={this.state.workingData}
                        closeSingleProduct={this.closeSingleProductEdit}
                    />

                 </StickyThing>
             )
         }
     }

     getColumnLabel(colName : string) : string{
         //utility method for getting column data obj from
         let columnLabel = "";
         for(let i = 0; i < this.columns.length; i++){
             if(this.columns[i].columnName === colName){
                 columnLabel = this.columns[i].columnLabel;
             }
         }
         return columnLabel;
     }

     updateValues=(row : number, cell:number, value:string, colName : string)=>{
         if(this.dataGridRef.current != null && this.dataGridRef.current != undefined ){
             this.selectionSet = this.dataGridRef.current.selectionSet;
             console.log("cat details view selection set: ", this.selectionSet)
         }
         console.log("inside drawer", value, " col name:", colName);
         //the minus 2 is the offset for the extra columns checkbox and edit
         for(let i =0; i < this.selectionSet.length; i++){
             if(this.selectionSet[i].columnName === colName){
                 let myRow = this.selectionSet[i].row-2;
                 let myCell = this.selectionSet[i].cell-2;

                 //this.workingDataSet[ myRow-2][myCell-2].value = value;
                 const updateSet : iUpdateSet = { row:myRow ,cell:myCell, newData:value }
                 //this.props.gridData.setProductData = updateSet
                 this.props.gridData.setData("product-data", updateSet)
             }

         }

         //TODO remove all of these .getProductData() and replace with generic version
         this.setState({workingData : this.props.gridData.getProductData()});
         console.log( "working data set:", this.state.workingData );
     };

     inputFocusAction=(row : number, cell:number)=>{
         //console.log("row: ", row, " cell:", cell);
         if(this.state.editDrawerOpen === true){
             this.setState({focusedInput : { row : row, cell : cell, editDrawerOpen: this.state.editDrawerOpen}})
         }
     };

     //TODO this should be a generic method
     shiftFocus(shiftIndex: number){

         console.log("shifted focus: ", shiftIndex);
             let inputs: HTMLCollection = document.getElementsByClassName("InputBox");
             if(inputs[0] != undefined){
                 if(shiftIndex === inputs.length-1){
                     console.log("shifted focus on end");
                     // @ts-ignore
                     inputs[0].focus();
                     // @ts-ignore
                     inputs[0].select();
                 }
         }
     };

     getEditDrawer():ReactElement{

         if(this.state.editDrawerOpen === false){
             return(<></>);
         }

         if(this.dataGridRef.current != null && this.dataGridRef.current != undefined ){
             this.selectionSet = this.dataGridRef.current.selectionSet;
            // console.log("cat details view selection set: ", this.selectionSet)
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
                 let productDataItem = catmanData.productData[row-2][cell-2];
                 selectedItems.push(productDataItem);
        }

        //Store number of inputs for later use
         this.drawerInputsLength = selectedItems.length;

         for( let i=0; i < selectedItems.length; i++){
             let input = (
                 <TextInput
                     row={this.selectionSet[i].row}
                     cell={this.selectionSet[i].cell}
                     columnName={this.selectionSet[i].columnName}
                     label={this.getColumnLabel( selectedItems[i].columnName )}
                     currentValue={ selectedItems[i].value}
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
         }


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

     openEditDrawer( ){
         this.drawerFirstOpen = true;
         this.setState({editDrawerOpen : true});
     }

     //FOOTER RELATED
     getFooterMenu(){
        let footer = (<></>);
        let buttons = (<></>);

        switch(this.state.footerMode){
            case "default":
                buttons = (
                    <div className="footer-btn-bar catman-footer">
                        <AppButton
                            classes={"separate-left"}
                            buttonType={"secondary-action"}
                            buttonLabel="Edit Selected"
                            OnClick={()=>this.switchToEditMode()}
                            tooltipType="custom"
                            tooltip={toolTipContent.footerEditSelection()}
                            toolTipTimeOutInMS={10000}
                            iconLeft={
                                <CatmanIcon
                                    iconName="icon-edit"
                                    classes=" "
                                    height="100%"
                                    width="100%"
                                />
                            }
                        />
                        <AppButton
                            classes={" "}
                            buttonType={"secondary-action"}
                            buttonLabel="Add Variant"
                            OnClick={()=>this.manageModals("add-to-product-group")}
                            tooltipType="custom"
                            tooltip={toolTipContent.footerAddVariant()}
                            toolTipTimeOutInMS={10000}
                            iconLeft={
                                <CatmanIcon
                                    iconName="icon-add"
                                    classes=" "
                                    height="100%"
                                    width="100%"
                                />
                            }
                        />
                        <AppButton
                            buttonType={"secondary-action"}
                            buttonLabel="Clear Selection"
                            OnClick={()=>this.footerActions("cancel")}
                            tooltipType="custom"
                            tooltip={toolTipContent.clearSelection()}
                            toolTipTimeOutInMS={10000}
                            iconLeft={
                                <CatmanIcon
                                    iconName="clear"
                                    classes=" "
                                    height="100%"
                                    width="100%"
                                />
                            }
                        />
                        <AppButton
                            buttonType={"secondary-action"}
                            buttonLabel="Delete Selected"
                            OnClick={()=>this.footerActions("cancel")}
                            tooltipType="custom"
                            tooltip={toolTipContent.footerDelete()}
                            toolTipTimeOutInMS={10000}
                            iconLeft={
                                <CatmanIcon
                                    iconName="icon-delete"
                                    classes=" "
                                    height="100%"
                                    width="100%"
                                />
                            }
                        />


                    </div>
                );
                break;

            case "multiple-selected":
                buttons = (
                    <div className="footer-btn-bar catman-footer">
                        <AppButton
                            classes={""}
                            buttonType={"secondary-action"}
                            buttonLabel="Edit Selected"
                            OnClick={()=>this.switchToEditMode()}
                            tooltipType="custom"
                            tooltip={toolTipContent.footerEditSelection()}
                            toolTipTimeOutInMS={10000}
                            tooltipXOffset={0}
                            tooltipYOffset={20}
                            iconLeft={
                                <CatmanIcon
                                    iconName="icon-edit"
                                    classes=" "
                                    height="100%"
                                    width="100%"
                                />
                            }
                        />
                        <AppButton
                            classes={" "}
                            buttonType={"secondary-action"}
                            buttonLabel="Make Into a Variant Group"
                            OnClick={()=>this.manageModals("create-product-group")}
                            tooltipType="custom"
                            tooltip={toolTipContent.footerCreateVariant()}
                            toolTipTimeOutInMS={10000}
                            tooltipXOffset={0}
                            tooltipYOffset={20}
                            iconLeft={
                                <CatmanIcon
                                    iconName="icon-add"
                                    classes=" "
                                    height="100%"
                                    width="100%"
                                />
                            }
                        />
                        <AppButton
                            buttonType={"secondary-action"}
                            buttonLabel="Clear Selection"
                            OnClick={()=>this.footerActions("cancel")}
                            tooltipType="custom"
                            tooltip={toolTipContent.clearSelection()}
                            toolTipTimeOutInMS={10000}
                            iconLeft={
                                <CatmanIcon
                                    iconName="clear"
                                    classes=" "
                                    height="100%"
                                    width="100%"
                                />
                            }
                        />
                        <AppButton
                            buttonType={"secondary-action"}
                            buttonLabel="Delete Selected"
                            OnClick={()=>this.footerActions("cancel")}
                            tooltipType="custom"
                            tooltip={toolTipContent.footerDelete()}
                            toolTipTimeOutInMS={10000}
                            iconLeft={
                                <CatmanIcon
                                    iconName="icon-delete"
                                    classes=" "
                                    height="100%"
                                    width="100%"
                                />
                            }
                        />
                    </div>
                );
                break;

            case "has-group":
                buttons = (<AppButton
                    buttonType={"secondary-action"}
                    buttonLabel="catalog manager"
                    OnClick={()=>this.footerActions("cancel")}
                    tooltipType="custom"
                    tooltip={toolTipContent.mainNav()}
                    toolTipTimeOutInMS={10000}
                    iconRight={
                        <CatmanIcon
                            iconName="down-arrow"
                            classes="ui-icon"
                            height="100%"
                            width="100%"
                        />
                    }
                />)
        }

        if(this.state.footerOpen === true){

            let buttonBar : ReactElement = (<>
            </>);

            footer = (
                <>
                    <StickyThing
                        enterFromThisSide="bottom"
                        lastResortClasses={"catman-footer-container"}
                        animateIn={true}
                        heightIncludeUnits="3.75rem"
                        widthIncludeUnits={"100%"}
                        stickyOpen={true}
                        bgColor={"rgba(0,0,0,0)"}
                        doAnimation={true}
                    >
                        {buttons}
                    </StickyThing>
                </>
            );
        }
        return footer;
    }

     footerActions(action : "cancel" | "add-group" | "edit"){
         switch (action) {

             case "cancel":
                 this.setState({footerOpen : false});
                 this.initialized = false;
                 if(this.dataGridRef.current !== null && this.dataGridRef.current !== undefined){
                     this.dataGridRef.current.clearSelection();
                 }
                 break;
             case "add-group":

                 break;
             case "edit":
                 this.setState({footerOpen : false});
                 this.initialized = false;

                 break;
         }
     }

     addAction(addType:string){
         console.log("added item or items: ", addType );
         switch (addType) {
             case "add-attribute":

                 return(<></>);
             case "add-products":

                 return(<></>);



         }
     }

        //FOOTER ACTIONS
     switchToEditMode(){
         if(this.dataGridRef.current !== null && this.dataGridRef.current !== undefined){
             this.dataGridRef.current.switchToEditMode();
         }
     }

     //MODALS modalStateType = "closed" | "add-to-product-group" | "create-product-group" | "delete-confirmation";
    manageModals(modalState : modalStateType){
         console.log("close the dang modal!!!!", modalState);
          this.setState({modalState : modalState});
    }

     getModals(){

         switch(this.state.modalState){
             case "add-to-product-group":
                 return(
                 <>
                     <ModalView
                         closeModalFunc={()=>this.manageModals("closed")}
                         modalTitle=""
                     >
                        <AddVariantsWizard
                            addAction={dataManagerMain.addToProductGroup}
                            groups={dataManagerMain.getGroups()}
                            selectedCheckBoxes={this.getCheckBoxesSelection()}
                            manageModal = {()=>this.manageModals("closed")}
                        />

                     </ModalView>
                 </>

                     );
             case "create-product-group":
                 return(
                     <>
                         <ModalView
                             closeModalFunc={()=>this.manageModals("closed")}
                             modalTitle=""
                         >
                             <CreateProductGroupWizard
                                 addAction={dataManagerMain.addToProductGroup}
                                 groups={dataManagerMain.getGroups()}
                                 selectedCheckBoxes={this.getCheckBoxesSelection()}
                                 manageModal = {()=>this.manageModals("closed")}
                             />

                         </ModalView>
                     </>

                  )
         }
     }

     //SELECTION ACTIONS from grid
    openFooter = ()=>
    {

        if(this.dataGridRef.current != undefined)
        {
            let checkedCount : number = 0;


            if(this.dataGridRef.current.getCheckedRows() != undefined && this.dataGridRef.current != undefined ){
                // @ts-ignore
                checkedCount = this.dataGridRef.current.getCheckedRows().length;
            }
            if
            (checkedCount > 0)
            {
                console.log("checked from selection Actions: ", checkedCount);
                this.setState({footerOpen : true});
            }
            else if
            (checkedCount === 0)
            {
                this.setState({footerOpen : false});
            }
        }
    };

     //RENDERING AND PORTALS


    render(){
         return (
             <>
                 <TitleArea
                     mainTitle="Spreadsheet View"
                     subTitle="My Catalog"
                     titleType="subtitle-above"
                 />
                 <DataGridWithEditDrawer
                     gridData={dataManagerMain.getProductData()}
                     columnsData={dataManagerMain.getProductColumns()}
                     dataManager={dataManagerMain}
                     targetDataSet={"product-data"}
                     selectionActions={[ this.openFooter ]}
                     ref={this.dataGridRef}
                     gridHasDetailsButton={true}
                 />
                 {this.getEditDrawer() }
                 {this.getFooterMenu() }
                 {this.getProductViewDrawer()}
                 {this.getModals()}
                 <button onClick={()=>this.switchToEditMode()}>Switch</button>
             </>
         )
     }
}
