import React from "react";
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

interface iPROPS {
    message?: string;
}

interface iSTATE{
    mediaDetailsOpen : boolean;
}

export class MediaLibraryView extends React.Component<iPROPS, iSTATE>{
    constructor(props:iPROPS) {
        super(props);
        this.state={
            mediaDetailsOpen : false
        }
    }
    selectedMediaIndex : number = 0;

    manageMediaDetailsPage=(mediaIndex : number)=>{
        console.log("mediaIndex", mediaIndex );
        this.selectedMediaIndex = mediaIndex;
        this.setState({mediaDetailsOpen : !this.state.mediaDetailsOpen})
    };

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
                        mediaData={dataManagerMain.getMediaData()[this.selectedMediaIndex]}
                        closeSingleMediaView={()=>this.manageMediaDetailsPage(0)}
                    />
                </StickyThing>
            )
        }
    }

    getCardArea() {
        if (this.state.mediaDetailsOpen === false) {
            return (<CardArea
                cards={
                    <Card
                        cardType="media"
                        mediaData={dataManagerMain.getMediaData()}
                        getDetailsFunctions={this.manageMediaDetailsPage}
                    />
                }
            />)
        } else {
            return (<></>)
        }
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
                <TitleArea
                    mainTitle="Media Library"
                    subTitle="Manage media to describe your products"
                    titleType="subtitle-above"
                />
                {this.getCardArea()}
                {this.getMediaDetailsView()}
            </>
        );
    }
}