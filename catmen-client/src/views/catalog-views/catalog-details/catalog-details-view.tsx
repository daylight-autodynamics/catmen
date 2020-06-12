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
import {appColumns} from "../../../_sample-data/columns";
import {CatalogSingleProduct} from "./single-product-view";



interface iPROPS   {
    message: string;
    query:string | null;
}

interface iSTATE{
    productViewOpen : boolean;
    editDrawerOpen : boolean;
    footerOpen : boolean;
    footerMode : "default" | "has-group" | "no-group" | "multiple-selected" ;
    selectionSet : selectionObject[]
}

export class CatalogDetailsView extends React.Component<iPROPS, iSTATE>{
     constructor(props:iPROPS) {
         super(props);
         this.state = {
             productViewOpen : false,
             editDrawerOpen : false,
             footerOpen : false,
             footerMode : "default",
             selectionSet : [],
         }
     }

     //just for the fist launch of checkbox editing
     initialized:boolean = false;
     dataGridRef = React.createRef<DataGrid>();
     editDrawer : ReactElement = (<></>);



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
                        productData={catmanData.productData}
                        closeSingleProduct={this.closeSingleProductEdit}
                    />
                 </StickyThing>
             )
         }
     }

     getEditDrawer():ReactElement{
         let drawer = (<></>);
             if(this.state.editDrawerOpen === true){
                 drawer = (
                     <>
                         <StickyThing
                             enterFromThisSide="bottom"
                             lastResortClasses={"catman-edit-drawer"}
                             animateIn={true}
                             heightIncludeUnits="40vh"
                             widthIncludeUnits={"97vw"}
                             stickyOpen={true}
                             bgColor={"#CECECE"}
                             doAnimation={true}
                         >
                             <p>Drawer!</p>
                         </StickyThing>
                     </>
                 );
             }
         return drawer;
     }

     manageEditDrawer( ){
         this.setState({editDrawerOpen : true});
         console.log("drawer opens here")
     }

     footerActions(action : "cancel" | "add-group" | "edit"){
         switch (action) {
             case "cancel":
                 console.log("cancel");
                 this.setState({footerOpen : false});
                 this.initialized = false;
                 if(this.dataGridRef.current !== null && this.dataGridRef.current !== undefined){
                     this.dataGridRef.current.clearSelection();
                 }
                 break;
             case "add-group":

                 break;
             case "edit":
                 console.log("cancel");
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
                             buttonLabel="Make Into a Variant Group"
                             OnClick={()=>this.footerActions("cancel")}
                             tooltipType="custom"
                             tooltip={toolTipContent.mainNav()}
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
                         heightIncludeUnits="3rem"
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
        console.log("!!!!!!!!!! MESSAGE",message);
     };

     render(){
            console.log("this.props.query");
            console.log(this.props.query);

         return (
             <>
                 <TitleArea mainTitle="Spreadsheet View" subTitle="My Catalog" />
                 <DataGrid
                     ref={this.dataGridRef}
                     data={catmanData.productData}
                     manageParentViews={()=>this.manageEditDrawer()}
                     selectionCallback={this.manageSelectionSet}
                     columns={appColumns.getColumns()}
                 />
                 {this.getEditDrawer() }
                 {this.getFooterMenu() }
                 {this.getProductViewDrawer()}
             </>
         )
     }


}
