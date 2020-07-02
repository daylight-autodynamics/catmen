import * as React from "react";
import {mediaObject} from "../../_sample-data/media-library";
import {ReactElement} from "react";
import {toolTipContent} from "../../views/tool-tip-content/content-tool-tips";
import {CatmanIcon} from "../../svg/icons/icons";
import AppButton from "../button/app-button";


interface iPROPS{
    cardType : "media" | "product";
    mediaData? : mediaObject[];
    getDetailsFunctions? : Function;
    actionToolTip : ReactElement;
}

interface iSTATE{
    selectionSet : number[];
}

export class Card extends React.Component<iPROPS, iSTATE>{
    constructor(props : iPROPS) {
        super(props);
        this.state = {
            selectionSet : []
        }
    }

    manageDetails(mediaIndex:number){
        if(this.props.getDetailsFunctions !== undefined){
            this.props.getDetailsFunctions(mediaIndex);
        }
    }

    getCard( cardTitle : string,
             thumbImageUrl : string,
             assignedToTheseProducts : string,
             mediaResolution : string,
             shotType : string,
             index : number
    ):ReactElement{

        switch(this.props.cardType){
            case "media":
                return(
                    <div className="card media-card">
                        <header>
                            <div className="card-header-menu">
                                <div className="overflow">
                                    <div className="name">{cardTitle}</div>
                                </div>
                                <AppButton
                                    OnClick={()=>{}}
                                    buttonType="transparent-bg"
                                    tooltipType="custom"
                                    tooltip={this.props.actionToolTip}
                                    classes={` `}
                                    iconCenter={(
                                        <CatmanIcon
                                            iconName={`checkbox-unchecked`}
                                            width="1rem"
                                            height="100%"
                                        />
                                    )}
                                />
                            </div>
                        </header>
                        <div
                            className="thumbnail-image"
                            style={{backgroundImage : `url(${thumbImageUrl})`}}
                        >
                         <div className="thumb-type">{shotType}</div>
                        </div>
                        <div className="data-area">
                                <ul className="data">
                                    <li>Assigned to <span className="emphasize">{assignedToTheseProducts.length.toString()}</span> </li>
                                    <li>Media resolution: {mediaResolution} </li>
                                    <li>date uploaded: June 6 2020</li>
                                </ul>
                        </div>
                        <footer>
                            <div></div>
                            <AppButton
                                OnClick={()=>this.manageDetails(index)}
                                buttonType="transparent-bg"
                                tooltipType="custom"
                                tooltip={this.props.actionToolTip}
                                classes={` `}
                                iconCenter={(
                                    <CatmanIcon
                                        iconName={`go-arrow`}
                                        width="2rem"
                                        height="1rem"
                                    />
                                )}
                            />
                        </footer>
                    </div>

                );
            case "product":
                return(<></>);
        }
    }

    getMediaCards(){
        let cardsCollections : ReactElement[] = [];
        if(this.props.mediaData !== undefined){
            for(let i=0; i < this.props.mediaData.length; i++){
                cardsCollections.push(
                    this.getCard(
                        this.props.mediaData[i].mediaName,
                        this.props.mediaData[i].mediaPath,
                        this.props.mediaData[i].productAssociations,
                        this.props.mediaData[i].resolution,
                        this.props.mediaData[i].shotType,
                        i
                    ));
            }
        }
        return cardsCollections;
    }


    render(){

        switch (this.props.cardType) {
            case "media":
                return (<>{this.getMediaCards()}</>)
        }
        return (<></>)
    }
}