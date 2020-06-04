import * as React from "react";
import {Navigation} from "../../../view-components/list-menu/intra-app-navigation";
import {MainHeaderArea} from "../../_common/main-header-area/main-header-area";

//Configuration data:
import {mainNavConfig} from "../../_catman-configuration/common-app-configuration";
import {CatmanIcon} from "../../../svg/icons/icons";
import {ToolTipContent} from "../../../view-components/heru-tool-tip/tool-tip-content";
import {DataGrid} from "../../../view-components/data-grid/data-grid";
import {catmanData} from "../../../_sample-data/products-data";
import {TitleArea} from "../../../view-components/title-area/title-area";

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
                <TitleArea mainTitle="Detailed Spreadsheet View" subTitle="My Catalog" />
                <DataGrid data={catmanData.productData} />
            </>
        )
    }
}
