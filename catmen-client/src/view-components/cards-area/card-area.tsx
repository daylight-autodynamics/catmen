import * as React from "react";
import {ReactElement} from "react";

//**** This will jut be responsible for

interface iPROPS{
    cards : ReactElement;
}

interface iSTATE{

}

export class CardArea extends React.Component<iPROPS, iSTATE>{
    constructor(props : iPROPS) {
        super(props);
    }

    getCardArea(){
        return (
            <div className="card-area">
                {this.props.cards}
            </div>
        )
    }

    render(){

        return (<>{this.getCardArea()}</>)
    }
}