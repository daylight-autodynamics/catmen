import React from "react";
import {MainHeaderArea} from "../_common/main-header-area/main-header-area";
import {Navigation} from "../../view-components/list-menu/intra-app-navigation";
import {mainNavConfig} from "../_catman-configuration/common-app-configuration";
import {toolTipContent} from "../tool-tip-content/content-tool-tips";

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
                    mainButtonLabel="Add Products"
                    addItemAction={()=>{}}
                    sectionTitle="Landing Page"
                    navigationElement={<Navigation menuHelpStyle="panel" navElements={mainNavConfig} />}
                />
                <h2>Get Started</h2>
                <h3>{toolTipContent.mainNav}</h3>
            </>
        );
    }
}