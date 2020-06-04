import * as React from "react";
import {Navigation} from "../../../view-components/list-menu/intra-app-navigation";
import {MainHeaderArea} from "../../_common/main-header-area/main-header-area";

//Configuration data:
import {mainNavConfig} from "../../_catman-configuration/common-app-configuration";
import {ReactElement} from "react";

interface iPROPS {
    message: string;
}

interface iSTATE{

}

export class CatalogOverviewView extends React.Component<iPROPS, iSTATE>{
    constructor(props:iPROPS) {
        super(props);
    }

    render(){
        return (
            <>
                <h2>Your Catalog: OverView</h2>
                <h3>{this.props.message}</h3>
            </>
        )
    }
}
