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
import {iDataGridItem} from "../../../view-components/data-grid/data-types-for-data-grid";
import {toolTipContent} from "../../_common/tool-tip-content/content-tool-tips";
import AppButton from "../../../view-components/button/app-button";
import {appColumns, iColumn} from "../../../_sample-data/columns";
import {CatalogSingleProduct} from "./single-product-view";
import {TextInput} from "../../../view-components/text-input/text-input";
import app from "../../../../../catmen-server/src/Server";



interface iPROPS   {
    message: string;
    query:string | null;
    gridData : iDataGridItem[][];
}

interface iSTATE{
    productViewOpen : boolean;
    editDrawerOpen : boolean;
    editDrawerMaximized : boolean;
    footerOpen : boolean;
    footerMode : "default" | "has-group" | "no-group" | "multiple-selected" ;
    selectionSet : selectionObject[];
    workingData : iDataGridItem[][];

}

export class CatalogDetailsView extends React.Component<iPROPS, iSTATE>{
     constructor(props:iPROPS) {
         super(props);
         this.columns = appColumns.getColumns();
         this.state = {
             workingData : this.props.gridData,
             productViewOpen : false,
             editDrawerOpen : false,
             editDrawerMaximized : false,
             footerOpen : false,
             footerMode : "default",
             selectionSet : [],
         };
         this.workingDataSet = this.props.gridData;
     }
     workingDataSet : iDataGridItem[][];
     //just for the fist launch of checkbox editing
     initialized:boolean = false;
     dataGridRef = React.createRef<DataGrid>();
     editDrawer : ReactElement = (<></>);
     selectionSet : selectionObject[] = [];
     columns : iColumn[];


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
                 let myRow = this.selectionSet[i].row;
                 let myCell = this.selectionSet[i].cell;
                 console.log( "working data set:", this.workingDataSet[ myRow-2][myCell-2] );
                 this.workingDataSet[ myRow-2][myCell-2].value = value;
             }

         }
         //this.workingDataSet[ row-2][cell-2].value = value;


         this.setState({workingData : this.workingDataSet});
         console.log( "working data set:", this.state.workingData );
     };

     getEditDrawer():ReactElement{

         if(this.state.editDrawerOpen === false){
             return(<></>);
         }

         if(this.dataGridRef.current != null && this.dataGridRef.current != undefined ){
             this.selectionSet = this.dataGridRef.current.selectionSet;
             console.log("cat details view selection set: ", this.selectionSet)
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
                 let productDataItem = catmanData.productData[row-2][cell-2];
                 selectedItems.push(productDataItem);
        }

         for( let i=0; i < selectedItems.length; i++){
             let input = (
                 <TextInput
                     row={this.selectionSet[i].row}
                     cell={this.selectionSet[i].cell}
                     columnName={this.selectionSet[i].columnName}
                     label={this.getColumnLabel( selectedItems[i].columnName )}
                     currentValue={ selectedItems[i].value}
                     onChangeAction={this.updateValues}
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

         let drawer = (<></>);
             if(this.state.editDrawerOpen === true){
                 drawer = (
                     <>
                         <StickyThing
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
                                                 iconName="icon-maximize"
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
             editDrawerMaximized : false
         });
         if(this.dataGridRef.current != null && this.dataGridRef.current != undefined){
             this.dataGridRef.current.clearSelection();
         }
     }

     openEditDrawer( ){
         this.setState({editDrawerOpen : true});



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

     getFooterMenu(){
         let footer = (<></>);
         let buttons = (<></>);

         switch(this.state.footerMode){
             case "default":
                 buttons = (
                     <div className="footer-btn-bar catman-footer">
                         <AppButton
                             buttonType={"secondary-action"}
                             buttonLabel="Cancel"
                             OnClick={()=>this.footerActions("cancel")}
                             tooltipType="custom"
                             tooltip={toolTipContent.footerCancel()}
                             toolTipTimeOutInMS={10000}
                             iconLeft={
                                 <CatmanIcon
                                     iconName="cancel"
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
                         <AppButton
                             classes={"separate-left"}
                             buttonType={"secondary-action"}
                             buttonLabel="Edit Selected"
                             OnClick={()=>this.footerActions("cancel")}
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
                             OnClick={()=>this.footerActions("cancel")}
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
                     </div>
                 );
                 break;

             case "multiple-selected":
                 buttons = (
                     <div className="footer-btn-bar catman-footer">
                         <AppButton
                             buttonType={"secondary-action"}
                             buttonLabel="Cancel"
                             OnClick={()=>this.footerActions("cancel")}
                             tooltipType="custom"
                             tooltip={toolTipContent.footerCancel()}
                             toolTipTimeOutInMS={10000}
                             tooltipXOffset={0}
                             tooltipYOffset={20}
                             iconLeft={
                                 <CatmanIcon
                                     iconName="cancel"
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
                             tooltipXOffset={0}
                             tooltipYOffset={20}
                             iconLeft={
                                 <CatmanIcon
                                     iconName="icon-delete"
                                     classes=" "
                                     height="100%"
                                     width="100%"
                                 />
                             }
                         />
                         <AppButton
                             classes={"separate-left"}
                             buttonType={"secondary-action"}
                             buttonLabel="Edit Selected"
                             OnClick={()=>this.footerActions("cancel")}
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
                             OnClick={()=>this.footerActions("cancel")}
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

     manageSelectionSet = (selectionSet : iDataGridItem[], checkBoxSelections : number[], message : string )=>{
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

     };

     conditionClasses(){
         if(this.state.editDrawerOpen === true){
             return "drawer-open";
         }
     }

     render(){

         return (
             <>
                 <TitleArea mainTitle="Spreadsheet View" subTitle="My Catalog" />
                 <DataGrid
                     ref={this.dataGridRef}
                     data={this.state.workingData}
                     manageParentViews={()=>this.openEditDrawer()}
                     selectionCallback={this.manageSelectionSet}
                     columns={appColumns.getColumns()}
                     classes={this.conditionClasses()}
                 />
                 {this.getEditDrawer() }
                 {this.getFooterMenu() }
                 {this.getProductViewDrawer()}
             </>
         )
     }
}
