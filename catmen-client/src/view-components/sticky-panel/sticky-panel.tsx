import * as React from "react";
import {ReactElement} from "react";
export type stickyPosition = "top" | "bottom" | "left" | "right";

interface iStickyPROPS{
    enterFromThisSide : stickyPosition;
    lastResortClasses : string;
    animateIn : boolean;
    toolBar? : ReactElement;
    heightIncludeUnits : string;
    widthIncludeUnits : string;
    stickyOpen : boolean
    bgColor : string;
    doAnimation : boolean;
}

interface iStickySTATE{
    isOpen : boolean;
    isMaximized : boolean;
    doAnimation : boolean;
}

export class StickyThing extends React.Component<iStickyPROPS, iStickySTATE>{
    constructor(props : iStickyPROPS) {
        super(props);
        this.state = {
            isMaximized : false,
            isOpen : this.props.stickyOpen,
            doAnimation : this.props.doAnimation
        }
    }

    openSticky(){
        this.setState({
            isOpen : true
        })
    }

    closeSticky(){
        this.setState({
            isOpen : false
        })
    };

    toggleAnimations(){
        this.setState({
            doAnimation : !this.state.doAnimation
        })
    }

    toolBar(){
        let toolBar : ReactElement = (<></>);
        if(this.props.toolBar != null){
            toolBar = (this.props.toolBar);
        }
        return toolBar;
    }

    classes(){
        let classes : string = "";
        let checkAnimationToggle = (classIfTrue : string)=>{
            if(this.state.doAnimation === true){
                return classIfTrue;
            }
            return "";
        };
        switch (this.props.enterFromThisSide) {
            case "top":
                classes += "from-top";
                classes += checkAnimationToggle(" anim-top");
                break;
            case "bottom":
                classes += "from-bottom";
                classes += checkAnimationToggle(" anim-bottom");
                break;
            case "left":
                classes += "from-left";
                classes += checkAnimationToggle(" anim-left");
                break;
            case "right":
                classes += "from-right";
                classes += checkAnimationToggle(" anim-right");
                break;
        }

        classes += (` ${this.props.lastResortClasses}`);
        return classes;
    }

    render(){
        let baseSticky : ReactElement = (<></>);
        if(this.state.isOpen === true){
            let style = {
                height : this.props.heightIncludeUnits,
                width : this.props.widthIncludeUnits,
                backgroundColor : this.props.bgColor
            };

            baseSticky = (
                <div style={style}  className={`wf-sticky-drawer ${this.classes()}`}>
                    <div className={'tool-bar'}>{this.toolBar()}</div>
                    {this.props.children}
                </div>
            );
        }
        return(baseSticky)
    }
}

export default StickyThing;