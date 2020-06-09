import * as React from "react";
import {ReactElement} from "react";

export type selectedStateType = "selected" | "active" | "inactive" | "";
interface iPROPS{
    tileType : string;
    tileLabel : string;
    tileCustomElement? : ReactElement;
    mouseDownActions? : Function[];
    mouseUpActions? : Function[];
    selectedClass : selectedStateType;
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

    getTile(){
        switch (this.props.tileType) {
            case "edit-cell":
                return (
                    <div
                        draggable={"false"}
                        onMouseUp={()=>this.mouseUpAction()}
                        onMouseDown={()=>this.mouseDownAction()}
                        className={`${this.props.selectedClass} cell-editable`}
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