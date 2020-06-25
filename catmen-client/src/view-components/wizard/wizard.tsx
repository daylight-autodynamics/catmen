import * as React from "react";
import {ReactElement} from "react";
import {StandardTextInput} from "../text-input/standard-text-input";
import AppButton from "../button/app-button";
import {toolTipContent} from "../../views/_common/tool-tip-content/content-tool-tips";
import {CatmanIcon} from "../../svg/icons/icons";

interface iPROPS {
    wizardButtons : ReactElement;
    sentenceInputs : ReactElement;
    classes? : string;
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

    getWizard(){
        return (
            <div className="wizard-content">
                <h3>Add Products Variants</h3>
                <div className={"interaction-area"}>
                    <div className="vert-center-area">
                        {this.props.sentenceInputs}
                    </div>
                    <div className="footer-btn-bar catman-footer">
                        {this.props.wizardButtons}
                    </div>
                </div>
            </div>
            );

    }

    render(){
        return (<>{this.getWizard()}</>)
    }
}