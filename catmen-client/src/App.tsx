import React from 'react';
import './App.scss';
import {LandingPageView} from "./views/landing-page/landing-page-view";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {CatalogOverviewView} from "./views/catalog-views/catalog-overview/catalog-overview-view";
import ManageAttributesView from "./views/app-configuration-catman-views/manage-attributes/manage-attributes-view";
import DataConfigManageAttributeGroups
    from "./views/app-configuration-catman-views/manage-attribute-groups/data-config-manage-attribute-groups";
import {ManageAttributeGroupsView} from "./views/app-configuration-catman-views/manage-attribute-groups/manage-attribute-groups-view";
import {ManageAttributeMappingView} from "./views/app-configuration-catman-views/manage-attribute-mappings/manage-attribute-mapping-view";
import ManageClassesView from "./views/app-configuration-catman-views/manage-classes/manage-classes-view";

import {ToolTip, WindowLevelCapture} from "./view-components/heru-tool-tip/tool-tip";
import {navSettings} from "./views/_common/nav-settings";
import {win} from "./index";


interface iSTATE{
    mousePos : {x:number, y: number}
}

interface iPROPS {
    mousePos : {x:number, y: number}
}

class App extends React.Component<iPROPS, iSTATE>{

    constructor(props:iPROPS) {
        super(props);

    }
    getMousePosition(){

    }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
      return (
          <>
              <ToolTip toolTipPos={ {x:win.mousePos.x, y: win.mousePos.y}  }/>
              <Router>
                  <Switch>
                      <Route exact path={navSettings.catalog} component={ ()=><CatalogOverviewView message={"catalog"}/> }/>

                      <Route exact path={navSettings.manageAttributes} component={ ()=><ManageAttributesView message={"managing attributes"}/> }/>
                      <Route exact path={navSettings.manageAttributeGroups} component={ ()=><ManageAttributeGroupsView message={"jjj"}/> }/>
                      <Route exact path={navSettings.manageAttributeMappings} component={ ()=><ManageAttributeMappingView message={"attribute mappings"}/> }/>

                      <Route exact path="/manage-classes" component={ ()=><ManageClassesView message={"attribute mappings"}/> }/>

                      <Route exact path="/" component={ ()=><LandingPageView message={"this is the landing page"}/> }/>
                  </Switch>
              </Router>
          </>

      );
  }
}

export default App;
