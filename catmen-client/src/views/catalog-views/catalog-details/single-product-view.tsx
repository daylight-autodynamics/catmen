import * as React from "react";
import {
    match,
    RouteComponentProps
} from "react-router-dom";

//Configuration data:

import {DataGrid} from "../../../view-components/data-grid/data-grid";
import {catmanData} from "../../../_sample-data/products-data";
import {TitleArea} from "../../../view-components/title-area/title-area";
import StickyThing from "../../../view-components/sticky-panel/sticky-panel";


interface RouteInfo {
    product? :string;
}


interface iPROPS extends RouteComponentProps<RouteInfo> {
    message: string;
}

interface iSTATE{

}

export class CatalogSingleProduct extends React.Component<iPROPS, iSTATE>{
    constructor(props:iPROPS) {
        super(props);
    }

    getProduct(){

    }

    manageDrawer(){

    }

    render(){
        return (
            <>
                <TitleArea mainTitle="Detailed Spreadsheet View" subTitle="My Catalog" />
                <DataGrid manageParentViews={()=>this.manageDrawer()} data={catmanData.productData} />
            </>
        )
    }
}
