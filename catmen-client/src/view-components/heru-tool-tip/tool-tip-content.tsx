import * as React from "react";
import {ReactElement} from "react";
import {CatmanIcon} from "../../svg/icons/icons";

interface iPROPS {
    tooltipType : "deluxe" | "basic"
    header : string;
    copy : string;
    icon : ReactElement | "none";
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
                <div className="app-tool-tip deluxe">
                    <h3>{this.props.header}</h3>
                    <div className="tool-tip-icon">{this.props.icon}</div>
                    <p className="tool-tip-copy">{this.props.copy}</p>
                </div>
                );
            case "basic":
                return(
                    <div className="app-tool-tip basic">
                        <h4>{this.props.header}</h4>
                        <p className="tool-tip-copy">{this.props.copy}</p>
                    </div>
                )
        }
    }

    render(){
        return(
            <>
                {this.getToolTip()}
            </>)
    }
}