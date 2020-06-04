import * as React from "react";
import {ReactElement} from "react";

interface iPROPS{
    header : string;
    copy : string;
    image : ReactElement;
}

interface iSTATE {

}

export class InfoPanel extends React.Component<iPROPS, iSTATE>{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="info-panel-container">
                <h2 className="info-panel-item">{this.props.header}</h2>
                <p className="info-panel-item">
                    {this.props.copy}
                </p>
                <div className="info-panel-item info-panel-illustration">
                    {this.props.image}
                </div>
            </div>
        );
    }
}