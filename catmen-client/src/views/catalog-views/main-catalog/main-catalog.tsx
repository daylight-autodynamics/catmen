import React, {ReactElement} from "react";
import {Switch,
        Route,
        Link,
        useRouteMatch,
        useParams
        } from "react-router-dom";

import {mainNavConfig} from "../../_common/common-app-configuration";

import {MainHeaderArea} from "../../_common/main-header-area/main-header-area";
import {Navigation} from "../../../view-components/list-menu/intra-app-navigation";
import {CatalogOverviewView} from "../catalog-overview/catalog-overview-view";
import {CatalogDetailsView} from "../catalog-details/catalog-details-view";
import {CatalogDashboardView} from "../catalog-dashboard/catalog-dashboard-view";
import {LandingPageView} from "../../landing-page/landing-page-view";

interface iPROPS {
    message: string;
}

interface iSTATE{

}

export function CatalogLanding() {
    let match = useRouteMatch();

    let ribbonMenu = (
        <>
            <Link to={`${match.url}/overview`}>Overview</Link>
            <Link to={`${match.url}/dashboard`}>Dash</Link>
            <Link to={`${match.url}/spreadsheet`}>Spreadsheet</Link>
        </>
    );

    return(
       <div>
           <MainHeaderArea
               sectionTitle="Landing Page"
               navigationElement={<Navigation menuHelpStyle="panel" navElements={mainNavConfig} />}
               ribbonElement={ribbonMenu}
           />

           <br/>

           <Switch>
               <Route path={`${match.path}/:bla`}>
                   <ProductViews />
               </Route>
           </Switch>
       </div>
    )
}

interface iProdView{
    ribbon : ReactElement;
}

export function ProductViews() {
    let { bla } = useParams();
    console.log("topic id: ", bla);
    switch(bla){
        case "overview":
            return (<CatalogOverviewView message="this is the overviews page" />);

        case "dashboard":
            return (<CatalogDashboardView message="this is the dashboards view" />);

        case "spreadsheet":
            return (<CatalogDetailsView message="this is the spreadsheets view"/>)
    }

    return (<h3>Requested topic ID: {bla}</h3>);
}

export class CatalogLandingPageView extends React.Component<iPROPS, iSTATE>{
    constructor(props:iPROPS) {
        super(props);
    }

    render(){


        return(
            <>
                <MainHeaderArea
                    sectionTitle="Landing Page"
                    navigationElement={<Navigation menuHelpStyle="panel" navElements={mainNavConfig} />}
                />
                <Link to={`overview`}>Overview</Link>
                <Link to={`dashboard`}>Dash</Link>
                <Link to={`spreadsheet`}>Spreadsheet</Link>

                <Switch>
                    <Route exact path={`/overview`} component={()=><LandingPageView message={"this is the overview page"}/>} />

                    <Route path={`/catalog/spreadsheet`} component={()=><CatalogDetailsView message="nested spreadsheet"/>} />
                </Switch>

                <h2>Your Catalog</h2>
                <h3>{this.props.message}</h3>
            </>
        );
    }
}