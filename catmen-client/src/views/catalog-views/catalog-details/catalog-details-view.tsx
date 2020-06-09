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



interface iPROPS   {
    message: string;
    query:string | null;

}

interface iSTATE{
    productViewOpen : boolean;
    editDrawerOpen : boolean;
    selectionSet : selectionObject[]
}


export class CatalogDetailsView extends React.Component<iPROPS, iSTATE>{
     constructor(props:iPROPS) {
         super(props);
         this.state = {
             productViewOpen : false,
             editDrawerOpen : false,
             selectionSet : []
         }
     }
     dataGridRef = React.createRef();
     editDrawer : ReactElement = (<></>);

     getProductViewDrawer( ){
         if(this.props.query != "none" && this.props.query != null && this.props.query != undefined ){
             return(
                 <StickyThing
                     enterFromThisSide="right"
                     lastResortClasses={"catman-main-nav"}
                     animateIn={true}
                     heightIncludeUnits="100vh"
                     widthIncludeUnits={"auto"}
                     stickyOpen={true}
                     bgColor={"#CECECE"}
                     doAnimation={true}
                 >
                     <p>{this.props.query}</p>

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
                             lastResortClasses={"catman-main-nav"}
                             animateIn={true}
                             heightIncludeUnits="40vh"
                             widthIncludeUnits={"100vw"}
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

     manageEditDrawer(){
         this.setState({editDrawerOpen : true});
         console.log("drawer opens here")
     }

     manageSelectionSet(selectionSet : iDataGridItem[]){

        console.log("!!!!!!!!!! this is callback selection set",selectionSet)
     }

     render(){
            console.log("this.props.query");
            console.log(this.props.query);

         return (
             <>
                 <TitleArea mainTitle="Spreadsheet View" subTitle="My Catalog" />
                 <DataGrid
                     data={catmanData.productData}
                     manageParentViews={()=>this.manageEditDrawer()}
                     selectionCallback={this.manageSelectionSet}
                 />
                 {this.getEditDrawer()}
                 {this.getProductViewDrawer()}
             </>
         )
     }





}
