import React from "react";
import {Navigation} from "../../../view-components/list-menu/intra-app-navigation";
import {mainNavConfig} from "../../_catman-configuration/common-app-configuration";
import {MainHeaderArea} from "../../_common/main-header-area/main-header-area";

interface iPROPS {
    message: string;
}

interface iSTATE{

}

export class ManageAttributeMappingView extends React.Component<iPROPS, iSTATE>{
    // constructor(props:iPROPS) {
    //     super(props);
    //
    // }
    render(){
        return(
            <>
                <MainHeaderArea
                    addItemAction={()=>{}}
                    sectionTitle="Landing Page"
                    navigationElement={<Navigation menuHelpStyle="panel" navElements={mainNavConfig} />}
                />
                <h2>Manage Attributes Mapping</h2>
                <h3>{this.props.message}</h3>
            </>
        );
    }
}