import * as React from "react";
import {ReactElement} from "react";
import {CatmanIcon} from "../../svg/icons/icons";

interface iPROPS {
    tooltipType : "deluxe" | "basic" | "empty";
    header? : string;
    copy? : string | ReactElement;
    icon? : ReactElement | "none";
    iconClasses? : string;
    toolTipContainerClasses?:string;
}

interface iSTATE {

}

export class ToolTipContent extends React.Component<iPROPS, iSTATE>{
    constructor(props:iPROPS) {
        super(props)
    }

    getToolTip(){
        switch (this.props.tooltipType){
            case "deluxe":
                return (
                <div id="toolTip" className="app-tool-tip deluxe tt-element-main">
                    <h3>{this.props.header}</h3>
                    <div className="tool-tip-icon">{this.props.icon}</div>
                    <div className="tool-tip-copy">{this.props.copy}</div>
                </div>
                );
            case "basic":
                return(
                    <div id="toolTip" className="app-tool-tip basic tt-element-main">
                        <h4>{this.props.header}</h4>
                        <div className="tool-tip-copy">{this.props.copy}</div>
                    </div>
                );
            case "empty":
                return(
                <div id="toolTip" className="app-tool-tip basic tt-element-main"/>
                );
        }
    }

    render(){
        return(
            <>
                {this.getToolTip()}
            </>)
    }
}