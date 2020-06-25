import * as React from "react";
import {ReactElement} from "react";
import {StandardTextInput} from "../text-input/standard-text-input";
import AppButton from "../button/app-button";
import {toolTipContent} from "../../views/tool-tip-content/content-tool-tips";
import {CatmanIcon} from "../../svg/icons/icons";
import {TitleArea} from "../title-area/title-area";



interface iSTATE{
    currentStep : number;
}

export interface iWizardStep{
    titleHeader : string;
    instructionText : string;
    panel : ReactElement;
    winCondition : boolean;
}

interface iPROPS {
    stepTitle : string;
    stepSubTitle : string;
    wizardButtons : ReactElement;
    sentenceInputs : ReactElement;
    classes? : string;
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
            <div className={`wizard-content ${this.props.classes}`}>

                <TitleArea
                    mainTitle={this.props.stepTitle}
                    subTitle={this.props.stepSubTitle}
                    titleType="subtitle-below"
                />
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