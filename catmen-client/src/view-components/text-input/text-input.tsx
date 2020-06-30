import * as React from "react";
import {ChangeEvent} from "react";


interface iPROPS {
    label : string;
    currentValue : string;
    onChangeAction : Function
    row? : number;
    cell? : number;
    columnName? : string;
    onFocusAction? : Function;
}

interface iSTATE{
    value : string;
}

export class TextInput extends React.Component<iPROPS, iSTATE>{
    constructor(props : iPROPS) {
        super(props);
        this.state = {
            value : this.props.currentValue
        }
    }

    onChangeActions(e: React.ChangeEvent){
        let keyVal = e.target as HTMLInputElement;
        console.log("inside input box", keyVal.value);
        //this.setState({value : keyVal.value});
        this.props.onChangeAction(this.props.row, this.props.cell, keyVal.value, this.props.columnName);
    }

    onFocusActions(){
        if(this.props.onFocusAction !== undefined){
            this.props.onFocusAction(this.props.row, this.props.cell);
        }
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="pl-TextInput-wrapper" >
                <div className="pl-FloatLabel-text">{this.props.label}</div>
                <input onFocus={()=>this.onFocusActions()} onChange={(evt:React.ChangeEvent)=>this.onChangeActions(evt as React.ChangeEvent)}  type="text" value={this.props.currentValue || ''} placeholder="" className="InputBox pl-TextInput-input has-text pl-FloatLabel-input" />

            </div>
        );
    }
}