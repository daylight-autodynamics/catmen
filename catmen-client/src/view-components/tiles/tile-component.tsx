import * as React from "react";
import {ReactElement} from "react";
import {ToolTip} from "../heru-tool-tip/tool-tip";
import {CatmanIcon} from "../../svg/icons/icons";
import {toolTipContent} from "../../views/tool-tip-content/content-tool-tips";
import AppButton from "../button/app-button";

export type selectedStateType = "selected" | "active" | "inactive" | "";
interface iPROPS{
    tileType : string;
    tileLabel : string;
    tileCustomElement? : ReactElement;
    mouseDownActions? : Function[];
    mouseUpActions? : Function[];
    hoverActions? : Function[];
    mouseOutActions? : Function[];
    selectedClass : selectedStateType;
    classes? : string;
    action? : Function;
    toolTip? :  ReactElement | string;
    toolTipTimeOut? : number;
}

interface iSTATE{

}

export class Tile extends React.Component<iPROPS, iSTATE>{
    constructor(props:iPROPS) {
        super(props);
    }


    mouseDownAction(){
        if(this.props.mouseDownActions !== null && this.props.mouseDownActions !== undefined){
            for(let i=0; i < this.props.mouseDownActions.length; i++){
                this.props.mouseDownActions[i]();
            }
        }
    }

    mouseUpAction(){
        if(this.props.mouseUpActions !== null && this.props.mouseUpActions !== undefined){
            for(let i=0; i < this.props.mouseUpActions.length; i++){
                this.props.mouseUpActions[i]();
            }
        }
    }

    doHoverActions(){

            if(this.props.hoverActions != null){
                for(let i=0; i < this.props.hoverActions.length; i++){
                    this.props.hoverActions[i]();
                }
            }
    }

    doMouseOutActions(){
        if(this.props.mouseOutActions != null){
            for(let i=0; i < this.props.mouseOutActions.length; i++){
                this.props.mouseOutActions[i]();
            }
        }
    }

    doClickActions(){
        if(this.props.action !== undefined){
            this.props.action();
        }
    }

    getTile(){
        switch (this.props.tileType) {
            case "column-header":
                return (
                    <div
                        draggable={"true"}
                        onMouseUp={()=>this.mouseUpAction()}
                        onMouseDown={()=>this.mouseDownAction()}
                        className={`${this.props.selectedClass} column-header`}
                    >
                        <AppButton
                            buttonType="button-custom"
                            classes={`column-header-btn`}
                            buttonLabel={`${this.props.tileLabel} `}
                            OnClick={()=>this.doClickActions()}
                            tooltipType="custom"
                            tooltip={this.props.toolTip}
                            toolTipTimeOutInMS={this.props.toolTipTimeOut}
                            iconRight={(
                                <CatmanIcon
                                    iconName="carat-down"
                                    width="0.5rem"
                                    height="100%"
                                    classes={"column-carat"}
                                />
                            )}
                        />
                        <div className={`affordance ${this.props.selectedClass}`}></div>

                    </div>
                );

            case "header-active":
                return (
                    <div
                        draggable={"true"}
                        onMouseUp={()=>this.mouseUpAction()}
                        onMouseDown={()=>this.mouseDownAction()}
                        className={`${this.props.selectedClass} column-header active-col`}
                    >
                        <AppButton
                            buttonType="button-custom"
                            classes={`column-header-btn`}
                            buttonLabel={`${this.props.tileLabel} `}
                            OnClick={()=>this.doClickActions()}
                            tooltipType="custom"
                            tooltip={this.props.toolTip}
                            toolTipTimeOutInMS={this.props.toolTipTimeOut}
                            iconRight={(
                                <CatmanIcon
                                    iconName="carat-down"
                                    width="0.5rem"
                                    height="100%"
                                    classes={"column-carat"}
                                />
                            )}
                        />
                        <div className={`affordance active-indicator ${this.props.selectedClass}`}></div>

                    </div>
                );


            case "text-input":
                return (
                    <div
                        draggable={"false"}
                        onClick={()=>this.doClickActions()}
                        onMouseUp={()=>this.mouseUpAction()}
                        onMouseDown={()=>this.mouseDownAction()}
                        onMouseOver={()=>this.doHoverActions()}
                        onMouseOut={()=>this.doMouseOutActions()}
                        className={`${this.props.selectedClass} cell-editable`}
                    >
                        <p className={`${this.props.selectedClass}`}>{`${this.props.tileLabel}`}&nbsp;</p>
                        <div className={`affordance ${this.props.selectedClass}`}></div>

                    </div>
                );
            case "media":
                return(
                    <div className={`media-cell `}>
                        <AppButton
                            buttonType="transparent-bg"
                            tooltipType="custom"
                            tooltip={toolTipContent.imageThumbnailPreview(this.props.tileLabel)}
                            classes={``}
                        />
                        <div className="thumb" style={{backgroundImage : `url(${this.props.tileLabel})` }}>
                            <p></p>
                        </div>
                        <div className={`affordance ${this.props.selectedClass}`}></div>
                    </div>
                );

            case "hidden":
                return(
                    <div draggable={false} className="hidden-cell">

                    </div>
                );

            case "read-only-cell":
                return (
                    <div draggable={false}>
                        <p>{this.props.tileLabel}</p>
                    </div>
                )
        }
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (<>{this.getTile()}</>);
    }
}