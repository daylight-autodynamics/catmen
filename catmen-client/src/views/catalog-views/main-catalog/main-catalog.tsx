import React, {ReactElement, useState} from "react";
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams, useLocation
} from "react-router-dom";

import {mainNavConfig} from "../../_catman-configuration/common-app-configuration";

import {MainHeaderArea} from "../../_common/main-header-area/main-header-area";
import {Navigation} from "../../../view-components/list-menu/intra-app-navigation";
import {CatalogOverviewView} from "../catalog-overview/catalog-overview-view";
import {CatalogDetailsView} from "../catalog-details/catalog-details-view";
import {CatalogDashboardView} from "../catalog-dashboard/catalog-dashboard-view";
import {LandingPageView} from "../../landing-page/landing-page-view";
import {ToggleMenu} from "../../../view-components/toggle-menu/toggle-component";
import {CatalogSingleProduct} from "../catalog-details/single-product-view";
import {catmanData} from "../../../_sample-data/products-data";

interface iPROPS {
    message: string;
}

interface iSTATE{

}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export function CatalogLanding() {
    let match = useRouteMatch();

    let ribbonMenu = (
        <ToggleMenu message={"toggle menu"} />
    );

    //TODO this will manage the grid
    let manageGridData = ()=>{
        console.log("manage grid data")
    };

    return(
       <>
           <MainHeaderArea
               addItemAction={manageGridData}
               sectionTitle="Landing Page"
               navigationElement={
                   <Navigation
                       menuHelpStyle="panel"
                       navElements={mainNavConfig}
                   />}
               ribbonElement={ribbonMenu}
           />

           <br/>

           <Switch>
               <Route path={`${match.path}/:bla`}>
                   <ProductViews manageGridData={manageGridData}  />
               </Route>
           </Switch>
       </>
    )
}

interface iProdView{
    manageGridData : Function;
}

export function ProductViews(props : iProdView) {
    const [gridData, setGridData] = useState(0);

    let { bla } = useParams();
    let query = useQuery();
    //console.log("query: ", query.get("product"));
    let productID = ()=>{
      if(query !== null){
          let q = query.get("product");
          return(q)
      }else{
          return "none"
      }
    };

    switch(bla){
        case "overview":
            return (<CatalogOverviewView message="this is the overviews page" />);

        case "dashboard":
            return (<CatalogDashboardView message="this is the dashboards view" />);

        case "spreadsheet":
            return (<CatalogDetailsView addAction={props.manageGridData} gridData={catmanData.productData} query={productID()}  message={bla}/>)
    }

    return (<h3>Requested topic ID: {bla}</h3>);
}

