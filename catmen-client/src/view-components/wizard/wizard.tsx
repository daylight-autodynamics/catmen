import * as React from "react";
import {ReactElement} from "react";

interface iPROPS {
    steps : iWizardStep[]
}

interface iSTATE{
    currentStep : number;
}

export interface iWizardStep{
    titleHeader : string;
    instructionText : string;
    panel : ReactElement;
    winCondition : boolean;
}



export class Wizard extends React.Component<iPROPS, iSTATE>{
    constructor(props:iPROPS) {
        super(props);
        this.state = {
            currentStep : 0
        }
    }

    getStep(){
        return (
            <>
                <div className={"wizard-content"}>
                    {this.props.steps[this.state.currentStep].panel}
                </div>
            </>
        );
    }

    render(){
        return (<>{this.getStep()}</>)
    }
}