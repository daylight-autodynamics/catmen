import * as React from "react";
import {ChangeEvent} from "react";


interface iPROPS {
    label : string;
    currentValue : string;
    onChangeAction : Function
    row? : number;
    cell? : number;
    columnName? : string;
    controlType?: "with-label" | "no-label" | undefined
}

interface iSTATE{
    value : string;
}

export class StandardTextInput extends React.Component<iPROPS, iSTATE>{
    constructor(props : iPROPS) {
        super(props);
        this.state = {
            value : this.props.currentValue
        }
    }
    value = this.props.currentValue;

    getInputVal(e: React.ChangeEvent){
        console.log(this.props.row, this.props.cell, this.state.value, this.props.columnName);
        let keyVal = e.target as HTMLInputElement;
        this.value = keyVal.value
        this.setState({value : keyVal.value});
        this.reportCurrentValue();
    }

    reportCurrentValue=()=>this.props.onChangeAction(this.props.row, this.props.cell, this.value, this.props.columnName);

    getElements(){
        switch (this.props.controlType) {
            case "with-label":
                return(
                    <div className="pl-TextInput-wrapper" >
                        <div className="pl-FloatLabel-text">{this.props.label}</div>
                        <input onChange={(evt:React.ChangeEvent)=>this.getInputVal(evt as React.ChangeEvent)}  type="text" value={this.state.value || ''} placeholder="" className="InputBox pl-TextInput-input has-text pl-FloatLabel-input" />
                    </div>
                );
            case "no-label":
                return(
                    <div className="pl-TextInput-wrapper" >
                        <input onChange={(evt:React.ChangeEvent)=>this.getInputVal(evt as React.ChangeEvent)}  type="text" value={this.state.value || ''} placeholder="" className="InputBox pl-TextInput-input has-text pl-FloatLabel-input" />
                    </div>);
            case undefined:
                return(
                    <div className="pl-TextInput-wrapper" >
                        <div className="pl-FloatLabel-text">{this.props.label}</div>
                        <input onChange={(evt:React.ChangeEvent)=>this.getInputVal(evt as React.ChangeEvent)}  type="text" value={this.state.value || ''} placeholder="" className="InputBox pl-TextInput-input has-text pl-FloatLabel-input" />
                    </div>);
        }
    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <>{this.getElements()}</>
        );
    }
}