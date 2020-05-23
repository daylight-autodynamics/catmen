import * as React from "react";
import {Navigation} from "../../../view-components/list-menu/intra-app-navigation";
import {MainHeaderArea} from "../../_common/main-header-area/main-header-area";

//Configuration data:
import {mainNavConfig} from "../../_common/common-app-configuration";

interface iPROPS {
    message: string;
}

interface iSTATE{

}

export class CatalogDetailsView extends React.Component<iPROPS, iSTATE>{
    constructor(props:iPROPS) {
        super(props);
    }

    render(){
        return (
            <>
                <MainHeaderArea
                    sectionTitle="Landing Page"
                    navigationElement={<Navigation menuHelpStyle="panel" navElements={mainNavConfig} />}
                />
                <h2>Your Catalog: Detailed View</h2>
                <h3>{this.props.message}</h3>
            </>
        )
    }
}
