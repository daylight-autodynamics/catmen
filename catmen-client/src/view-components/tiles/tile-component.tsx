import * as React from "react";
import {ReactElement} from "react";


interface iPROPS{
    tileType : string;
    tileLabel : string;
    tileCustomElement? : ReactElement;

}

interface iSTATE{

}

export class Tile extends React.Component<iPROPS, iSTATE>{
    constructor(props:iPROPS) {
        super(props);
    }

    getTile(){
        switch (this.props.tileType) {
            case "edit-cell":
                return (
                    <div className="cell-editable">
                        <p>{this.props.tileLabel}</p>
                        <div className="affordance"></div>
                    </div>
                );
            case "read-only-cell":
                return (
                    <div>

                    </div>
                )
        }
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (<>{this.getTile()}</>);
    }
}