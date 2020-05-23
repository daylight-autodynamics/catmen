import React from "react";
import {MainHeaderArea} from "../_common/main-header-area/main-header-area";
import {Navigation} from "../../view-components/list-menu/intra-app-navigation";
import {mainNavConfig} from "../_common/common-app-configuration";

interface iPROPS {
    message: string;
}

interface iSTATE{

}

export class LandingPageView extends React.Component<iPROPS, iSTATE>{
    // constructor(props:iPROPS) {
    //     super(props);
    //
    // }
    render(){
        return(
            <>
                <MainHeaderArea
                    sectionTitle="Landing Page"
                    navigationElement={<Navigation menuHelpStyle="panel" navElements={mainNavConfig} />}
                />
                <h2>Get Started</h2>
                <h3>{this.props.message}</h3>
            </>
        );
    }
}