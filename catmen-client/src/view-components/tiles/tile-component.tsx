import * as React from "react";
import {ReactElement} from "react";

export type selectedStateType = "selected" | "active" | "inactive" | "";
interface iPROPS{
    tileType : string;
    tileLabel : string;
    tileCustomElement? : ReactElement;
    mouseDownAction? : Function;
    mouseUpAction? : Function;
    selectedClass : selectedStateType;
}

interface iSTATE{

}

export class Tile extends React.Component<iPROPS, iSTATE>{
    constructor(props:iPROPS) {
        super(props);
    }

    mouseDownAction(){
        if(this.props.mouseDownAction !== null && this.props.mouseDownAction !== undefined){
            this.props.mouseDownAction();

        }
    }

    mouseUpAction(){
        if(this.props.mouseUpAction !== null && this.props.mouseUpAction !== undefined){
            this.props.mouseUpAction();
        }
    }

    getTile(){
        switch (this.props.tileType) {
            case "edit-cell":
                return (
                    <div
                        draggable={"false"}
                        onMouseUp={()=>this.mouseUpAction()}
                        onMouseDown={()=>this.mouseDownAction()} className={`${this.props.selectedClass} cell-editable`}
                    >
                        <p className={`${this.props.selectedClass}`}>{this.props.tileLabel}</p>
                        <div className={`affordance ${this.props.selectedClass}`}></div>
                    </div>
                );
            case "read-only-cell":
                return (
                    <div>
                        <p>{this.props.tileLabel}</p>
                    </div>
                )
        }
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (<>{this.getTile()}</>);
    }
}