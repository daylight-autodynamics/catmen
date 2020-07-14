import * as React from "react";
import {MainHeaderArea} from "../../_common/main-header-area/main-header-area";
import {Navigation} from "../../../view-components/list-menu/intra-app-navigation";
import {mainNavConfig} from "../../_catman-configuration/common-app-configuration";
import {DataGridWithEditDrawer} from "../../../view-components/data-grid/data-grid-with-edit-drawer";
import {
    dataAttributeColumns,
    dataAttributesLibrary,
    standardAttributes
} from "../../../_sample-data/attributes-data-and-columns";
import {dataManagerMain} from "../../../index";
import {TitleArea} from "../../../view-components/title-area/title-area";

interface iPROPS{
    message : string;
}

interface iSTATE{

}

export class AttributeGroupsView extends React.Component<iPROPS, iSTATE>{

    getDataGrid(){
        return(<DataGridWithEditDrawer
                gridData={dataManagerMain.getAttributeGroupsData()}
                columnsData={dataManagerMain.getAttributeGroupsColumns()}
                dataManager={dataManagerMain}
                targetDataSet={"attribute-groups-data"}
                gridHasDetailsButton={true}
            />
        )

    }
    render(){
        return(
            <>
                <MainHeaderArea
                    mainButtonLabel="Add Attributes Group"
                    addItemAction={()=>{}}
                    sectionTitle="Attribute Groups"
                    navigationElement={<Navigation menuHelpStyle="panel" navElements={mainNavConfig} />}
                />
                <TitleArea
                    mainTitle="Manage Attribute Groups"
                    titleType="subtitle-above"
                    subTitle="e your products"
                />
                {this.getDataGrid()}
            </>
        );
    }
}

export default AttributeGroupsView;