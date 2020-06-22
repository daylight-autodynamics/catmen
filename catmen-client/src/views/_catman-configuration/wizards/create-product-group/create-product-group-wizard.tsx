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
import {RefObject} from "react";
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

export class CreateProductGroupWizard extends React.Component<iPROPS, iSTATE>{

    constructor(props:iPROPS) {
        super(props);
        this.state={
            wizardPanel : "start"
        }
    }

    groupNameValue : string = "";

    groupNameRef:RefObject<StandardTextInput> = React.createRef<StandardTextInput>();

    createVariantGroup(){

        if(this.props.selectedCheckBoxes != null){
            for(let i=0; i < this.props.selectedCheckBoxes.length; i++){
                let currentCheckIndex : number = this.props.selectedCheckBoxes[i];
                for(let j=0; j < dataManagerMain.productData[currentCheckIndex].length; j++){
                    if(dataManagerMain.productData[currentCheckIndex][j].columnName === "ProductGroup" ){
                        dataManagerMain.productData[currentCheckIndex][j].value = this.groupNameValue;
                    }
                }
            }
        }
        console.log(dataManagerMain.productData);

        this.props.manageModal();
    }

    getInputValue = (row:number, cell:number, value:string )=>{
         console.log("input value", row, " ", cell, " ", value);
        this.groupNameValue = value;
    };

    element(){
        switch (this.state.wizardPanel) {
            case "closed":
                return(<></>);
            case "start":
                return(
                    <div>
                        <h3>Create Product Group from Selection</h3>
                        <div className={"add-blank-stubs-area"}>
                            <p>Add</p>
                            <StandardTextInput
                                label={"Variant Group Name"}
                                currentValue={""}
                                onChangeAction={this.getInputValue}
                                row={0}
                                cell={0}
                            />
                            <p>Name Product Group: </p>
                            <AppButton
                                buttonType={"secondary-action"}
                                buttonLabel="Go"
                                OnClick={()=>this.createVariantGroup()}
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