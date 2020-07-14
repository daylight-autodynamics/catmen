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
import {classesLibraryColumns} from "../../../_sample-data/classes-library";

interface iPROPS{
    message : string;
}

interface iSTATE{

}
export class ManageClassesView extends React.Component<iPROPS, iSTATE>{


    getDataGrid(){

        return(<DataGridWithEditDrawer
                gridData={dataManagerMain.getClassesData()}
                columnsData={classesLibraryColumns}
                dataManager={dataManagerMain}
                targetDataSet={"classes-data"}
                gridHasDetailsButton={true}
            />
        )

    }
    render(){
        return(
            <>
                <MainHeaderArea
                    mainButtonLabel="Add Class"
                    addItemAction={()=>{}}
                    sectionTitle="Landing Page"
                    navigationElement={<Navigation menuHelpStyle="panel" navElements={mainNavConfig} />}
                />
                <TitleArea
                    mainTitle="Manage Classes"
                    titleType="subtitle-above"
                    subTitle="Manage the column-heads/attributes you use to describe your products"
                />
                {this.getDataGrid()}
            </>
        );
    }
}

export default ManageClassesView;