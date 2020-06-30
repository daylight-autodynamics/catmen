import * as React from "react";
import {ReactElement} from "react";
import {CatmanIcon} from "../../svg/icons/icons";

interface iPROPS {
    tooltipType : "deluxe" | "basic" | "empty" | "media";
    header? : string;
    subHeader? : string;
    copy? : string | ReactElement;
    icon? : ReactElement | "none";
    iconClasses? : string;
    mainClasses? : string;
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
                <div  className={`${this.props.mainClasses} app-tool-tip deluxe tt-element-main`}>
                    <div className="title-area">
                        <h3>{this.props.header}</h3>
                        <p>{this.props.subHeader}</p>
                    </div>
                    <div className="tool-tip-icon">{this.props.icon}</div>
                    <div className="tool-tip-copy">{this.props.copy}</div>
                </div>
                );

            case "media":
                return (
                    <div className={`${this.props.mainClasses} app-tool-tip deluxe media tt-element-main`}>
                        <div>
                            <h3>{this.props.header}</h3>
                            <p>{this.props.subHeader}</p>
                        </div>
                        <div className="tool-tip-icon">{this.props.icon}</div>
                        <div className="tool-tip-copy">{this.props.copy}</div>
                    </div>
                );

            case "basic":
                return(
                    <div id="toolTip" className={`${this.props.mainClasses} app-tool-tip basic tt-element-main`}>
                        <h4>{this.props.header}</h4>
                        <div className="tool-tip-copy">{this.props.copy}</div>
                    </div>
                );
            case "empty":
                return(
                <div id="toolTip" className={`${this.props.mainClasses} app-tool-tip basic tt-element-main`}/>
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