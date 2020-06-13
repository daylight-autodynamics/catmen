import * as React from "react";


interface iPROPS {
    label : string;
    currentValue : string;
    onChangeAction : Function
}

interface iSTATE{

}

export class TextInput extends React.Component<iPROPS, iSTATE>{
    constructor(props : iPROPS) {
        super(props);
    }

    onChangeActions(){
        this.props.onChangeAction();
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="pl-TextInput-wrapper" >
                <input onChange={()=>this.onChangeActions()}  type="text" value={this.props.currentValue || ''} placeholder="" className="InputBox pl-TextInput-input has-text pl-FloatLabel-input" />
                 <span className="pl-FloatLabel-text"></span>
            </div>

        );
    }
}