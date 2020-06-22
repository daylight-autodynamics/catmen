import * as React from "react";
import {iWizardStep} from "../../../../view-components/wizard/wizard";
import {ReactElement} from "react";
import {toolTipContent} from "../../../_common/tool-tip-content/content-tool-tips";
import {CatmanIcon} from "../../../../svg/icons/icons";
import AppButton from "../../../../view-components/button/app-button";
import {DividerLine} from "../../../../view-components/divider-line/divider-line";
import {TextInput} from "../../../../view-components/text-input/text-input";
import {Illustration} from "../../../../svg/illustrations/illustrations";
import {dataManagerMain} from "../../../../index";
import {iDataGridItem} from "../../../../view-components/data-grid/data-types-for-data-grid";
import {StandardTextInput} from "../../../../view-components/text-input/standard-text-input";

interface iPROPS{
    addAction : Function
    selectedCheckBoxes? : number[];
    groups : string[];
    manageModal : Function;
}

interface iSTATE{
    wizardPanel : "closed" | "start" | "upload-2" | "upload-3";
}

export class AddVariantsWizard extends React.Component<iPROPS, iSTATE>{

    constructor(props:iPROPS) {
        super(props);
        this.state={
            wizardPanel : "start"
        }
    }

    numberOfVariants = 0;

    addVariants(){
        console.log(this.props.selectedCheckBoxes);
        let newItem : iDataGridItem[] = [];
        if(this.props.selectedCheckBoxes !== undefined){
            if(this.props.selectedCheckBoxes.length === 1){
                newItem = JSON.parse(JSON.stringify(dataManagerMain.productData[ this.props.selectedCheckBoxes[0]]) );
                let newItems = [];

                for(let i=0; i < this.numberOfVariants-1; i++){
                    newItems.push( JSON.parse(JSON.stringify(newItem)) );

                }

                dataManagerMain.productData.splice(this.props.selectedCheckBoxes[0], 0,...newItems);
            }else{

            }
        }
        console.log("added variant",dataManagerMain.productData);
        this.props.manageModal();
    }

    getInputValue = (row:number, cell:number, value:string )=>{
        console.log("input value", row, " ", cell, " ", value);
        this.numberOfVariants = parseInt(value);
    };

    element(){
        switch (this.state.wizardPanel) {
            case "closed":
                return(<></>);
            case "start":
                return(
                    <div>
                        <h3>Add Products Variants</h3>
                        <div className={"add-blank-stubs-area"}>
                            <p>Add</p>
                            <StandardTextInput
                                label={"Number of variants"}
                                onChangeAction={this.getInputValue}
                                currentValue={"1"}
                            />
                            <p>New blank product stubs as variants: </p>
                            <AppButton
                                buttonType={"secondary-action"}
                                buttonLabel="Go"
                                OnClick={()=>this.addVariants()}
                                tooltipType="custom"
                                tooltip={toolTipContent.addBlankStubs()}
                                toolTipTimeOutInMS={10000}
                                tooltipXOffset={0}
                                tooltipYOffset={20}
                                iconLeft={
                                    <CatmanIcon
                                        iconName="icon-add-invert"
                                        classes="reverse"
                                        height="100%"
                                        width="100%"
                                    />
                                }
                            />
                        </div>
                    </div>
                );
            case "upload-2":
                return(<></>)
        }
    }

    render(){
        return(this.element())
    }
}

// export let uploadWizard : iWizardStep[] = [
//     {
//         titleHeader : "string;",
//         instructionText : "string;",
//         panel : (<UploadWizard wizardActions={[]}/>),
//         winCondition : (1 > 0)
//     },
//     {
//         titleHeader : "string;",
//         instructionText : "string;",
//         panel : (<UploadWizard wizardActions={[]}/>),
//         winCondition : (1 > 0)
//     },
//     {
//         titleHeader : "string;",
//         instructionText : "string;",
//         panel : (<UploadWizard  wizardActions={[]}/>),
//         winCondition : (1 > 0)
//     }
// ];