import React, {ReactElement} from "react";
import {MainHeaderArea} from "../_common/main-header-area/main-header-area";
import {Navigation} from "../../view-components/list-menu/intra-app-navigation";
import {mainNavConfig} from "../_catman-configuration/common-app-configuration";
import {toolTipContent} from "../tool-tip-content/content-tool-tips";
import {TitleArea} from "../../view-components/title-area/title-area";
import {CardArea} from "../../view-components/cards-area/card-area";
import {Card} from "../../view-components/card/card";
import {dataManagerMain} from "../../index";
import StickyThing from "../../view-components/sticky-panel/sticky-panel";
import {SingleMediaDetailsView} from "./media-details-view";
import {CatmanIcon} from "../../svg/icons/icons";
import AppButton from "../../view-components/button/app-button";
import {DataGrid, selectionObject} from "../../view-components/data-grid/data-grid";
import {iDataGridItem} from "../../_catman-data-types";
import {DataManager, iUpdateSet} from "../../data-components/data-manager/data-manager";
import {iColumn} from "../../_catman-data-types";
import {focusInputType} from "../catalog-views/catalog-details/catalog-details-view";
import {TextInput} from "../../view-components/text-input/text-input";
import {dataSetType} from "../../data-components/data-manager/data-manager";
import {dataAttributeColumns} from "../../_sample-data/attributes-data-and-columns";
import {DataGridWithEditDrawer} from "../../view-components/data-grid/data-grid-with-edit-drawer";
import {iToggleMenuItem, ToggleMenu} from "../../view-components/toggle-menu/toggle-component";


type viewState = "cards-view" | "grid-view" | "mosaic-view";


interface iPROPS {
    message?: string;
    gridData : iDataGridItem[][];
    columnsData : iColumn[];
    dataManager : DataManager;
    targetDataSet : dataSetType;
}

interface iSTATE{
    mediaDetailsOpen : boolean;
    viewMode : viewState;
    editDrawerOpen : boolean;
    workingData : iDataGridItem[][];
    columnsData : iColumn[];
    focusedInput : focusInputType;
    footerOpen : boolean;
    footerMode : "default" | "has-group" | "no-group" | "multiple-selected" ;
    editDrawerMaximized : boolean;
}

export class MediaLibraryView extends React.Component<iPROPS, iSTATE>{
    constructor(props:iPROPS) {
        super(props);
        this.columnDefs = this.props.columnsData;
        this.state={
            mediaDetailsOpen : false,
            viewMode : "grid-view",
            editDrawerOpen : false,
            //TODO need to adjust data manager
            columnsData : this.props.columnsData,
            workingData : this.props.gridData,
            focusedInput : { row:0, cell:0, editDrawerOpen : false},
            footerOpen : false,
            footerMode : "default",
            editDrawerMaximized : false
        }
    }
    selectedMediaIndex : number = 0;
    dataGridRef = React.createRef<DataGrid>();
    editDrawerRef = React.createRef<StickyThing>();
    drawerFirstOpen : boolean = false;
    //COLUMN DEFINITIONS:
    columnDefs : iColumn[];

    //just for the fist launch of checkbox editing
    initialized : boolean = false;

    selectionSet : selectionObject[] = [];
    drawerInputsLength = 0;

    manageMediaDetailsPage=(mediaIndex : number)=>{
        console.log("mediaIndex", mediaIndex );
        this.selectedMediaIndex = mediaIndex;
        this.setState({mediaDetailsOpen : !this.state.mediaDetailsOpen})
    };

    manageViewModes(desiredState : viewState){
        this.setState({viewMode : desiredState});
    }

    getMediaDetailsView(){
        if(this.state.mediaDetailsOpen === true){
            return(
                <StickyThing
                    enterFromThisSide="right"
                    lastResortClasses={"product-view"}
                    animateIn={true}
                    heightIncludeUnits="100vh"
                    widthIncludeUnits={"100vw"}
                    stickyOpen={true}
                    bgColor={"#CECECE"}
                    doAnimation={true}
                >
                    <SingleMediaDetailsView
                        mediaData={dataManagerMain.getMediaObjectData()[this.selectedMediaIndex]}
                        closeSingleMediaView={()=>this.manageMediaDetailsPage(0)}
                    />
                </StickyThing>
            )
        }
    }

    getCardArea() {
        if (this.state.mediaDetailsOpen === false) {
            return (<CardArea
                containerClasses="catman-media-cards"
                cards={
                    <Card
                        cardType="media"
                        mediaData={dataManagerMain.getMediaObjectData()}
                        getDetailsFunctions={this.manageMediaDetailsPage}
                        actionToolTip={toolTipContent.mediaRelatedTooltips("media-details")}
                    />
                }
            />)
        } else {
            return (<></>)
        }
    }

    getColumnLabel(colName : string) : string{
        //utility method for getting column data obj from
        let columnLabel = "";
        for(let i = 0; i < this.columnDefs.length; i++){
            if(this.columnDefs[i].columnName === colName){
                columnLabel = this.columnDefs[i].columnLabel;
            }
        }
        return columnLabel;
    }

    updateValues=(row : number, cell:number, value:string, colName : string)=>{
        if(this.dataGridRef.current != null && this.dataGridRef.current != undefined ){
            this.selectionSet = this.dataGridRef.current.selectionSet;
            console.log("cat details view selection set: ", this.selectionSet)
        }
        console.log("inside drawer", value, " col name:", colName);
        //the minus 2 is the offset for the extra columns checkbox and edit
        for(let i =0; i < this.selectionSet.length; i++){
            if(this.selectionSet[i].columnName === colName){
                let myRow = this.selectionSet[i].row-2;
                let myCell = this.selectionSet[i].cell-2;

                //this.workingDataSet[ myRow-2][myCell-2].value = value;
                const updateSet : iUpdateSet = { row:myRow ,cell:myCell, newData:value };
                this.props.dataManager.setData("media-data", updateSet);
            }
        }

        this.setState({workingData : this.props.dataManager.getProductData()});
        console.log( "working data set:", this.state.workingData );
    };

    openEditDrawer( ){
        this.drawerFirstOpen = true;
        this.setState({editDrawerOpen : true});
    }

    //DRAWER RELATED
    maximizeEditDrawer(){
        this.setState({editDrawerMaximized : !this.state.editDrawerMaximized})
    }

    closeEditDrawer(){
        this.setState({
            editDrawerOpen : false,
            editDrawerMaximized : false,
            focusedInput : {row:0, cell:0, editDrawerOpen:false}
        });
        if(this.dataGridRef.current != null && this.dataGridRef.current != undefined){
            this.dataGridRef.current.clearSelection();
        }
        this.drawerFirstOpen = false;
    }

    inputFocusAction=(row : number, cell:number)=>{
        //console.log("row: ", row, " cell:", cell);
        if(this.state.editDrawerOpen === true){
            this.setState({focusedInput : { row : row, cell : cell, editDrawerOpen: this.state.editDrawerOpen}})
        }
    };

    //MANAGE GRID
    //GRID MANAGEMENT

    conditionClasses(){
        if(this.state.editDrawerOpen === true){
            return "drawer-open";
        }
    }


    getGridArea(){
        return(
            <DataGridWithEditDrawer
                gridData={dataManagerMain.getMediaDataForGrid()}
                columnsData={dataManagerMain.getMediaColumnsForGrid()}
                dataManager={dataManagerMain}
                targetDataSet={"media-data"}
                gridHasDetailsButton={true}
            />

        );
    }

    getContentArea(){
        switch (this.state.viewMode) {
            case "grid-view":
                return this.getGridArea();
            case "cards-view":
                return this.getCardArea();
        }
    }

    getToggleBar(){

        //determine class
        const selectedClass = (stateName : viewState)=>{
          if(stateName == this.state.viewMode)
          {
              return "active";
          }
          else
          {
              return "";
          }
        };

        let bla = (
            <div className="button-bar">
                <AppButton
                    OnClick={()=>this.manageViewModes("grid-view")}
                    buttonType="transparent-bg"
                    tooltipType="custom"
                    tooltip={<div>Tooltip</div>}
                    classes={`${selectedClass("grid-view")}`}
                    iconCenter={(
                        <CatmanIcon
                            iconName={`icon-list-view`}
                            width="1rem"
                            height="100%"
                        />
                    )}
                />
                <AppButton
                    OnClick={()=>this.manageViewModes("cards-view")}
                    buttonType="transparent-bg"
                    tooltipType="custom"
                    tooltip={toolTipContent.goBackWizard()}
                    classes={`${selectedClass("cards-view")} `}
                    iconCenter={(
                        <CatmanIcon
                            iconName={`icon-card-view`}
                            width="1rem"
                            height="100%"
                        />
                    )}
                />
                <AppButton
                    OnClick={()=>this.manageViewModes("mosaic-view")}
                    buttonType="transparent-bg"
                    tooltipType="custom"
                    tooltip={ toolTipContent.goBackWizard()}
                    classes={`${selectedClass("mosaic-view")} `}
                    iconCenter={(
                        <CatmanIcon
                            iconName={`icon-mosaic-view`}
                            width="1rem"
                            height="100%"
                        />
                    )}
                />
            </div>
        );

        let buttonBarConfig : iToggleMenuItem[] = [
            {
                element : <></>,
                label : "",
                toggleItemType : "nav",
                function : ()=>this.manageViewModes("grid-view"),
                icon : (
                    <CatmanIcon
                        iconName={`icon-list-view`}
                        width="1rem"
                        height="100%"
                    />
                ),
                toolTip : toolTipContent.mediaGridView(),
                classes : ""
            },
            {
                element : <></>,
                label : "",
                toggleItemType : "nav",
                function : ()=>this.manageViewModes("cards-view"),
                toolTip : toolTipContent.mediaCardView(),
                icon : (
                    <CatmanIcon
                        iconName={`icon-card-view`}
                        width="1rem"
                        height="100%"
                    />
                ),
                classes : ""
            },
            {
                element : <></>,
                label : "",
                toggleItemType : "nav",
                function : ()=>this.manageViewModes("mosaic-view"),
                toolTip : toolTipContent.goBackWizard(),
                icon : (
                    <CatmanIcon
                        iconName={`icon-mosaic-view`}
                        width="1rem"
                        height="100%"
                    />
                ),
                classes : ""
            }
        ];

        let buttonBar  = (
            <ToggleMenu
                buttons={buttonBarConfig}
                containerClasses="view-switcher"
            />
        );

        return buttonBar;

    }

    render(){
        return(
            <>
                <MainHeaderArea
                    addItemAction={()=>{}}
                    sectionTitle="Media Library"
                    mainButtonLabel="Add Media"
                    navigationElement={<Navigation menuHelpStyle="panel" navElements={mainNavConfig} />}
                />
                <div className="base-grid-8 menu-area">
                    <TitleArea
                        mainTitle="Media Library"
                        subTitle="Manage media to describe your products"
                        titleType="subtitle-above"
                    />
                     {this.getToggleBar()}
                </div>

                {this.getContentArea()}
                {this.getMediaDetailsView()}
            </>
        );
    }
}
