import React, {ReactElement} from "react";
import {MainHeaderArea} from "../_common/main-header-area/main-header-area";
import {Navigation} from "../../view-components/list-menu/intra-app-navigation";
import {mainNavConfig} from "../_catman-configuration/common-app-configuration";
import {toolTipContent} from "../tool-tip-content/content-tool-tips";
import {TitleArea} from "../../view-components/title-area/title-area";
import {CardArea} from "../../view-components/cards-area/card-area";
import {Card} from "../../view-components/card/card";
import {dataManagerMain} from "../../index";
import StickyThing from "../../view-components/sticky-panel/sticky-panel";
import {SingleMediaDetailsView} from "./media-details-view";
import {CatmanIcon} from "../../svg/icons/icons";
import AppButton from "../../view-components/button/app-button";
import {DataGrid, selectionObject} from "../../view-components/data-grid/data-grid";
import {iDataGridItem} from "../../_catman-data-types";
import {DataManager, iUpdateSet} from "../../data-components/data-manager/data-manager";
import {iColumn} from "../../_sample-data/product-columns";
import {focusInputType} from "../catalog-views/catalog-details/catalog-details-view";
import {TextInput} from "../../view-components/text-input/text-input";
import {dataSetType} from "../../data-components/data-manager/data-manager";
import {dataAttributeColumns} from "../../_sample-data/attributes-data-and-columns";
import {DataGridWithEditDrawer} from "../../view-components/data-grid/data-grid-with-edit-drawer";


type viewState = "cards-view" | "grid-view" | "mosaic-view";


interface iPROPS {
    message?: string;
    gridData : iDataGridItem[][];
    columnsData : iColumn[];
    dataManager : DataManager;
    targetDataSet : dataSetType;
}

interface iSTATE{
    mediaDetailsOpen : boolean;
    viewMode : viewState;
    editDrawerOpen : boolean;
    workingData : iDataGridItem[][];
    columnsData : iColumn[];
    focusedInput : focusInputType;
    footerOpen : boolean;
    footerMode : "default" | "has-group" | "no-group" | "multiple-selected" ;
    editDrawerMaximized : boolean;
}

export class MediaLibraryView extends React.Component<iPROPS, iSTATE>{
    constructor(props:iPROPS) {
        super(props);
        this.columnDefs = this.props.columnsData;
        this.state={
            mediaDetailsOpen : false,
            viewMode : "cards-view",
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
        console.log("mediaIndex", mediaIndex );
        this.selectedMediaIndex = mediaIndex;
        this.setState({mediaDetailsOpen : !this.state.mediaDetailsOpen})
    };

    manageViewModes(desiredState : viewState){
        this.setState({viewMode : desiredState});
    }

    getMediaDetailsView(){
        if(this.state.mediaDetailsOpen === true){
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

    getCardArea() {
        if (this.state.mediaDetailsOpen === false) {
            return (<CardArea
                containerClasses="catman-media-cards"
                cards={
                    <Card
                        cardType="media"
                        mediaData={dataManagerMain.getMediaObjectData()}
                        getDetailsFunctions={this.manageMediaDetailsPage}
                        actionToolTip={toolTipContent.mediaRelatedTooltips("media-details")}
                    />
                }
            />)
        } else {
            return (<></>)
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
            console.log("cat details view selection set: ", this.selectionSet)
        }
        console.log("inside drawer", value, " col name:", colName);
        //the minus 2 is the offset for the extra columns checkbox and edit
        for(let i =0; i < this.selectionSet.length; i++){
            if(this.selectionSet[i].columnName === colName){
                let myRow = this.selectionSet[i].row-2;
                let myCell = this.selectionSet[i].cell-2;

                //this.workingDataSet[ myRow-2][myCell-2].value = value;
                const updateSet : iUpdateSet = { row:myRow ,cell:myCell, newData:value };
                this.props.dataManager.setData("media-data", updateSet);
            }
        }

        this.setState({workingData : this.props.dataManager.getProductData()});
        console.log( "working data set:", this.state.workingData );
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

    inputFocusAction=(row : number, cell:number)=>{
        //console.log("row: ", row, " cell:", cell);
        if(this.state.editDrawerOpen === true){
            this.setState({focusedInput : { row : row, cell : cell, editDrawerOpen: this.state.editDrawerOpen}})
        }
    };



    //MANAGE GRID
    //GRID MANAGEMENT

    conditionClasses(){
        if(this.state.editDrawerOpen === true){
            return "drawer-open";
        }
    }


    getGridArea(){
        // let bla = (
        //     <DataGrid
        //         ref={this.dataGridRef}
        //         data={this.state.workingData}
        //         manageParentViews={()=>this.openEditDrawer()}
        //         selectionCallback={()=>{}}
        //         columnsData={this.state.columnsData}
        //         classes={this.conditionClasses()}
        //         addAction={()=>{}}
        //         focusedItem={this.state.focusedInput}
        //         hasDetailsActionButton={true}
        //     />
        // );

        return(
            <DataGridWithEditDrawer
                gridData={dataManagerMain.getMediaDataForGrid()}
                columnsData={dataManagerMain.getMediaColumnsForGrid()}
                dataManager={dataManagerMain}
                targetDataSet={"media-data"}
                gridHasDetailsButton={true}
            />

        );
    }

    getContentArea(){
        switch (this.state.viewMode) {
            case "grid-view":
                return this.getGridArea();
            case "cards-view":
                return this.getCardArea();
        }
    }

    getToggleBar(){

        //determine class
        const selectedClass = (stateName : viewState)=>{
          if(stateName == this.state.viewMode)
          {
              return "active";
          }
          else
          {
              return "";
          }
        };

        return(
            <div className="button-bar">
                <AppButton
                    OnClick={()=>this.manageViewModes("grid-view")}
                    buttonType="transparent-bg"
                    tooltipType="custom"
                    tooltip={toolTipContent.goBackWizard()}
                    classes={`${selectedClass("grid-view")}`}
                    iconCenter={(
                        <CatmanIcon
                            iconName={`icon-list-view`}
                            width="1rem"
                            height="100%"
                        />
                    )}
                />
                <AppButton
                    OnClick={()=>this.manageViewModes("cards-view")}
                    buttonType="transparent-bg"
                    tooltipType="custom"
                    tooltip={toolTipContent.goBackWizard()}
                    classes={`${selectedClass("cards-view")} `}
                    iconCenter={(
                        <CatmanIcon
                            iconName={`icon-card-view`}
                            width="1rem"
                            height="100%"
                        />
                    )}
                />
                <AppButton
                    OnClick={()=>this.manageViewModes("mosaic-view")}
                    buttonType="transparent-bg"
                    tooltipType="custom"
                    tooltip={ toolTipContent.goBackWizard()}
                    classes={`${selectedClass("mosaic-view")} `}
                    iconCenter={(
                        <CatmanIcon
                            iconName={`icon-mosaic-view`}
                            width="1rem"
                            height="100%"
                        />
                    )}
                />
            </div>
        )
    }

    render(){
        return(
            <>
                <MainHeaderArea
                    addItemAction={()=>{}}
                    sectionTitle="Media Library"
                    mainButtonLabel="Add Media"
                    navigationElement={<Navigation menuHelpStyle="panel" navElements={mainNavConfig} />}
                />
                <TitleArea
                    mainTitle="Media Library"
                    subTitle="Manage media to describe your products"
                    titleType="subtitle-above"
                />
                <div className="view-switch-container">{this.getToggleBar()}</div>

                {this.getContentArea()}
                {this.getMediaDetailsView()}
            </>
        );
    }
}



// BACKUP

//
//
// import React, {ReactElement} from "react";
// import {MainHeaderArea} from "../_common/main-header-area/main-header-area";
// import {Navigation} from "../../view-components/list-menu/intra-app-navigation";
// import {mainNavConfig} from "../_catman-configuration/common-app-configuration";
// import {toolTipContent} from "../tool-tip-content/content-tool-tips";
// import {TitleArea} from "../../view-components/title-area/title-area";
// import {CardArea} from "../../view-components/cards-area/card-area";
// import {Card} from "../../view-components/card/card";
// import {dataManagerMain} from "../../index";
// import StickyThing from "../../view-components/sticky-panel/sticky-panel";
// import {SingleMediaDetailsView} from "./media-details-view";
// import {CatmanIcon} from "../../svg/icons/icons";
// import AppButton from "../../view-components/button/app-button";
// import {DataGrid, selectionObject} from "../../view-components/data-grid/data-grid";
// import {iDataGridItem} from "../../_catman-data-types";
// import {DataManager, iUpdateSet} from "../../data-components/data-manager/data-manager";
// import {iColumn} from "../../_sample-data/product-columns";
// import {focusInputType} from "../catalog-views/catalog-details/catalog-details-view";
// import {TextInput} from "../../view-components/text-input/text-input";
// import {dataSetType} from "../../data-components/data-manager/data-manager";
//
//
// type viewState = "cards-view" | "grid-view" | "mosaic-view";
//
//
// interface iPROPS {
//     message?: string;
//     gridData : iDataGridItem[][];
//     columnsData : iColumn[];
//     dataManager : DataManager;
//     targetDataSet : dataSetType;
// }
//
// interface iSTATE{
//     mediaDetailsOpen : boolean;
//     viewMode : viewState;
//     editDrawerOpen : boolean;
//     workingData : iDataGridItem[][];
//     columnsData : iColumn[];
//     focusedInput : focusInputType;
//     footerOpen : boolean;
//     footerMode : "default" | "has-group" | "no-group" | "multiple-selected" ;
//     editDrawerMaximized : boolean;
// }
//
// export class MediaLibraryView extends React.Component<iPROPS, iSTATE>{
//     constructor(props:iPROPS) {
//         super(props);
//         this.columnDefs = this.props.columnsData;
//         this.state={
//             mediaDetailsOpen : false,
//             viewMode : "cards-view",
//             editDrawerOpen : false,
//             //TODO need to adjust data manager
//             columnsData : this.props.columnsData,
//             workingData : this.props.gridData,
//             focusedInput : { row:0, cell:0, editDrawerOpen : false},
//             footerOpen : false,
//             footerMode : "default",
//             editDrawerMaximized : false
//         }
//     }
//     selectedMediaIndex : number = 0;
//     dataGridRef = React.createRef<DataGrid>();
//     editDrawerRef = React.createRef<StickyThing>();
//     drawerFirstOpen : boolean = false;
//     //COLUMN DEFINITIONS:
//     columnDefs : iColumn[];
//
//     //just for the fist launch of checkbox editing
//     initialized : boolean = false;
//
//     selectionSet : selectionObject[] = [];
//     drawerInputsLength = 0;
//
//     manageMediaDetailsPage=(mediaIndex : number)=>{
//         console.log("mediaIndex", mediaIndex );
//         this.selectedMediaIndex = mediaIndex;
//         this.setState({mediaDetailsOpen : !this.state.mediaDetailsOpen})
//     };
//
//     manageViewModes(desiredState : viewState){
//         this.setState({viewMode : desiredState});
//     }
//
//     getMediaDetailsView(){
//         if(this.state.mediaDetailsOpen === true){
//             return(
//                 <StickyThing
//                     enterFromThisSide="right"
//                     lastResortClasses={"product-view"}
//                     animateIn={true}
//                     heightIncludeUnits="100vh"
//                     widthIncludeUnits={"100vw"}
//                     stickyOpen={true}
//                     bgColor={"#CECECE"}
//                     doAnimation={true}
//                 >
//                     <SingleMediaDetailsView
//                         mediaData={dataManagerMain.getMediaObjectData()[this.selectedMediaIndex]}
//                         closeSingleMediaView={()=>this.manageMediaDetailsPage(0)}
//                     />
//                 </StickyThing>
//             )
//         }
//     }
//
//     getCardArea() {
//         if (this.state.mediaDetailsOpen === false) {
//             return (<CardArea
//                 containerClasses="catman-media-cards"
//                 cards={
//                     <Card
//                         cardType="media"
//                         mediaData={dataManagerMain.getMediaObjectData()}
//                         getDetailsFunctions={this.manageMediaDetailsPage}
//                         actionToolTip={toolTipContent.mediaRelatedTooltips("media-details")}
//                     />
//                 }
//             />)
//         } else {
//             return (<></>)
//         }
//     }
//
//     getColumnLabel(colName : string) : string{
//         //utility method for getting column data obj from
//         let columnLabel = "";
//         for(let i = 0; i < this.columnDefs.length; i++){
//             if(this.columnDefs[i].columnName === colName){
//                 columnLabel = this.columnDefs[i].columnLabel;
//             }
//         }
//         return columnLabel;
//     }
//
//     updateValues=(row : number, cell:number, value:string, colName : string)=>{
//         if(this.dataGridRef.current != null && this.dataGridRef.current != undefined ){
//             this.selectionSet = this.dataGridRef.current.selectionSet;
//             console.log("cat details view selection set: ", this.selectionSet)
//         }
//         console.log("inside drawer", value, " col name:", colName);
//         //the minus 2 is the offset for the extra columns checkbox and edit
//         for(let i =0; i < this.selectionSet.length; i++){
//             if(this.selectionSet[i].columnName === colName){
//                 let myRow = this.selectionSet[i].row-2;
//                 let myCell = this.selectionSet[i].cell-2;
//
//                 //this.workingDataSet[ myRow-2][myCell-2].value = value;
//                 const updateSet : iUpdateSet = { row:myRow ,cell:myCell, newData:value };
//                 this.props.dataManager.setData("media-data", updateSet);
//             }
//         }
//
//         this.setState({workingData : this.props.dataManager.getProductData()});
//         console.log( "working data set:", this.state.workingData );
//     };
//
//     openEditDrawer( ){
//         this.drawerFirstOpen = true;
//         this.setState({editDrawerOpen : true});
//     }
//
//     //DRAWER RELATED
//     maximizeEditDrawer(){
//         this.setState({editDrawerMaximized : !this.state.editDrawerMaximized})
//     }
//
//     closeEditDrawer(){
//         this.setState({
//             editDrawerOpen : false,
//             editDrawerMaximized : false,
//             focusedInput : {row:0, cell:0, editDrawerOpen:false}
//         });
//         if(this.dataGridRef.current != null && this.dataGridRef.current != undefined){
//             this.dataGridRef.current.clearSelection();
//         }
//         this.drawerFirstOpen = false;
//     }
//
//     shiftFocus(shiftIndex: number){
//
//         console.log("shifted focus: ", shiftIndex);
//         let inputs: HTMLCollection = document.getElementsByClassName("InputBox");
//         if(inputs[0] != undefined){
//             if(shiftIndex === inputs.length-1){
//                 console.log("shifted focus on end");
//                 // @ts-ignore
//                 inputs[0].focus();
//                 // @ts-ignore
//                 inputs[0].select();
//             }
//         }
//     };
//
//     inputFocusAction=(row : number, cell:number)=>{
//         //console.log("row: ", row, " cell:", cell);
//         if(this.state.editDrawerOpen === true){
//             this.setState({focusedInput : { row : row, cell : cell, editDrawerOpen: this.state.editDrawerOpen}})
//         }
//     };
//
//     getEditDrawer():ReactElement{
//
//         if(this.state.editDrawerOpen === false){
//             return(<></>);
//         }
//
//         if(this.dataGridRef.current != null && this.dataGridRef.current != undefined ){
//             this.selectionSet = this.dataGridRef.current.selectionSet;
//             // console.log("cat details view selection set: ", this.selectionSet)
//         }
//
//         let inputs : ReactElement[] = [];
//         let selectedItems : iDataGridItem[] = [];
//
//         //Create list of selection items that need inputs (i.e. one input per column)
//         i: for(let i=0; i < this.selectionSet.length; i++){
//             j: for(let j=0; j < selectedItems.length; j++){
//                 if(this.selectionSet[i].columnName === selectedItems[j].columnName){
//                     continue i;
//                 }
//             }
//             let row = this.selectionSet[i].row;
//             let cell = this.selectionSet[i].cell;
//             //TODO this needs to be genericized
//             //let productDataItem = catmanData.productData[row-2][cell-2];
//             let productDataItem = this.props.gridData[row-2][cell-2];
//             selectedItems.push(productDataItem);
//         }
//
//         //Store number of inputs for later use
//         this.drawerInputsLength = selectedItems.length;
//
//         //CREATE INPUTS for DRAWER
//         for( let i=0; i < selectedItems.length; i++){
//             let input = (
//                 <TextInput
//                     row={this.selectionSet[i].row}
//                     cell={this.selectionSet[i].cell}
//                     columnName={this.selectionSet[i].columnName}
//                     label={this.getColumnLabel( selectedItems[i].columnName )}
//                     currentValue={ selectedItems[i].value}
//                     onChangeAction={this.updateValues}
//                     onFocusAction={this.inputFocusAction}
//                     onBlurActions={[ ()=>this.shiftFocus(i) ]}
//                 />
//             );
//             inputs.push(input)
//         }
//
//         let maximize = (valueCheck : boolean)=>{
//             if(valueCheck === true){
//                 return "maximized"
//             }else{
//                 return "catman-edit-default restored"
//             }
//         };
//
//         let restoreAndMaximizeTooltip = (valueCheck : boolean)=>{
//             if(valueCheck === false){
//                 return toolTipContent.maximizeDrawer();
//             }else{
//                 return toolTipContent.restoreDrawer();
//             }
//         };
//
//         let restoreAndMaximizeBtnIcon = (valueCheck : boolean)=>{
//             if(valueCheck === false){
//                 return "icon-maximize"
//             }else{
//                 return "icon-restore-btn"
//             }
//         }
//
//
//         let drawer = (<></>);
//         if(this.state.editDrawerOpen === true){
//             drawer = (
//                 <>
//                     <StickyThing
//                         ref = {this.editDrawerRef}
//                         enterFromThisSide="bottom"
//                         lastResortClasses={`catman-edit-drawer ${maximize(this.state.editDrawerMaximized)}`}
//                         animateIn={true}
//                         heightIncludeUnits=""
//                         widthIncludeUnits={""}
//                         stickyOpen={true}
//                         bgColor={"#CECECE"}
//                         doAnimation={true}
//                         toolBar="none"
//                     >
//                         <div className={"tool-bar"}>
//                             <div></div>
//                             <div className="drawer-controls">
//                                 <AppButton
//                                     buttonType={"secondary-action"}
//                                     buttonLabel=""
//                                     OnClick={()=>this.maximizeEditDrawer()}
//                                     tooltipType="custom"
//                                     tooltip={restoreAndMaximizeTooltip(this.state.editDrawerMaximized)}
//                                     toolTipTimeOutInMS={10000}
//                                     classes="tool-bar-btn icon-only-btn"
//                                     iconLeft={
//                                         <CatmanIcon
//                                             iconName={`${restoreAndMaximizeBtnIcon(this.state.editDrawerMaximized)}`}
//                                             classes=" "
//                                             height="100%"
//                                             width="100%"
//                                         />
//                                     }
//                                 />
//                                 <AppButton
//                                     buttonType={"secondary-action"}
//                                     buttonLabel=""
//                                     OnClick={()=>this.closeEditDrawer()}
//                                     tooltipType="custom"
//                                     tooltip={toolTipContent.closeDrawer()}
//                                     toolTipTimeOutInMS={10000}
//                                     classes="icon-only-btn"
//                                     iconLeft={
//                                         <CatmanIcon
//                                             iconName="icon-close"
//                                             classes=" "
//                                             height="100%"
//                                             width="100%"
//                                         />
//                                     }
//                                 />
//
//                             </div>
//                         </div>
//
//                         <div className="drawer-edit-area">
//                             {inputs}
//                         </div>
//                     </StickyThing>
//                 </>
//             );
//         }
//         return drawer;
//     }
//
//     //MANAGE GRID
//     //GRID MANAGEMENT
//     manageSelectionSet = (selectionSet : iDataGridItem[], checkBoxSelections : number[], message : string )=>{
//         if(checkBoxSelections.length > 0 || (this.initialized === false && checkBoxSelections.length === 0 && message === "checkbox-launched") ){
//             if(checkBoxSelections.length <= 1){
//                 this.setState({editDrawerOpen : false, footerOpen : true, footerMode: "default"});
//             }else if(checkBoxSelections.length > 1 ){
//                 this.setState({editDrawerOpen : false, footerOpen : true, footerMode: "multiple-selected"});
//             }
//             this.initialized = true;
//         }else{
//             this.setState({footerOpen : false});
//         }
//
//     };
//     conditionClasses(){
//         if(this.state.editDrawerOpen === true){
//             return "drawer-open";
//         }
//     }
//     addAction(addType:string){
//         console.log("added item or items: ", addType );
//         switch (addType) {
//             case "add-attribute":
//
//                 return(<></>);
//             case "add-products":
//
//                 return(<></>);
//
//
//
//         }
//     }
//
//     getGridArea(){
//         return (
//             <DataGrid
//                 ref={this.dataGridRef}
//                 data={this.state.workingData}
//                 manageParentViews={()=>this.openEditDrawer()}
//                 selectionCallback={this.manageSelectionSet}
//                 columnsData={this.state.columnsData}
//                 classes={this.conditionClasses()}
//                 addAction={this.addAction}
//                 focusedItem={this.state.focusedInput}
//             />
//         )
//     }
//
//     getContentArea(){
//         switch (this.state.viewMode) {
//             case "grid-view":
//                 return this.getGridArea();
//             case "cards-view":
//                 return this.getCardArea();
//         }
//     }
//
//     getToggleBar(){
//
//         //determine class
//         const selectedClass = (stateName : viewState)=>{
//             if(stateName == this.state.viewMode)
//             {
//                 return "active";
//             }
//             else
//             {
//                 return "";
//             }
//         };
//
//         return(
//             <div className="button-bar">
//                 <AppButton
//                     OnClick={()=>this.manageViewModes("grid-view")}
//                     buttonType="transparent-bg"
//                     tooltipType="custom"
//                     tooltip={toolTipContent.goBackWizard()}
//                     classes={`${selectedClass("grid-view")}`}
//                     iconCenter={(
//                         <CatmanIcon
//                             iconName={`icon-list-view`}
//                             width="1rem"
//                             height="100%"
//                         />
//                     )}
//                 />
//                 <AppButton
//                     OnClick={()=>this.manageViewModes("cards-view")}
//                     buttonType="transparent-bg"
//                     tooltipType="custom"
//                     tooltip={toolTipContent.goBackWizard()}
//                     classes={`${selectedClass("cards-view")} `}
//                     iconCenter={(
//                         <CatmanIcon
//                             iconName={`icon-card-view`}
//                             width="1rem"
//                             height="100%"
//                         />
//                     )}
//                 />
//                 <AppButton
//                     OnClick={()=>this.manageViewModes("mosaic-view")}
//                     buttonType="transparent-bg"
//                     tooltipType="custom"
//                     tooltip={ toolTipContent.goBackWizard()}
//                     classes={`${selectedClass("mosaic-view")} `}
//                     iconCenter={(
//                         <CatmanIcon
//                             iconName={`icon-mosaic-view`}
//                             width="1rem"
//                             height="100%"
//                         />
//                     )}
//                 />
//             </div>
//         )
//     }
//
//     render(){
//         return(
//             <>
//                 <MainHeaderArea
//                     addItemAction={()=>{}}
//                     sectionTitle="Media Library"
//                     mainButtonLabel="Add Media"
//                     navigationElement={<Navigation menuHelpStyle="panel" navElements={mainNavConfig} />}
//                 />
//                 <TitleArea
//                     mainTitle="Media Library"
//                     subTitle="Manage media to describe your products"
//                     titleType="subtitle-above"
//                 />
//                 <div className="view-switch-container">{this.getToggleBar()}</div>
//                 {this.getEditDrawer()}
//                 {this.getContentArea()}
//                 {this.getMediaDetailsView()}
//             </>
//         );
//     }
// }