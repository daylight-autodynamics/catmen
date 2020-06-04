import React from "react";
import {Navigation} from "../../../view-components/list-menu/intra-app-navigation";
import {MainHeaderArea} from "../../_common/main-header-area/main-header-area";

//Configuration data:
import {mainNavConfig} from "../../_catman-configuration/common-app-configuration";

interface iPROPS {
    message: string;
}

interface iSTATE{

}

export class ManageAttributeGroupsView extends React.Component<iPROPS, iSTATE>{

    render(){
        return(
            <>
                <MainHeaderArea
                    sectionTitle="Landing Page"
                    navigationElement={<Navigation menuHelpStyle="panel" navElements={mainNavConfig} />}
                />
                <h2>Manage Attribute Group</h2>
                <h3>{this.props.message}</h3>
            </>
        );
    }
}