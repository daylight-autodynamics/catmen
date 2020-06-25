import * as React from "react";
import {iWizardStep} from "../../../view-components/wizard/wizard";
import {ReactElement} from "react";
import {toolTipContent} from "../../_common/tool-tip-content/content-tool-tips";
import {CatmanIcon} from "../../../svg/icons/icons";
import AppButton from "../../../view-components/button/app-button";
import {DividerLine} from "../../../view-components/divider-line/divider-line";
import {TextInput} from "../../../view-components/text-input/text-input";
import {Illustration} from "../../../svg/illustrations/illustrations";


interface iPROPS{
    addAction : Function
}

interface iSTATE{
    wizardPanel : "upload-1" | "upload-2" | "upload-3";
}

export class UploadWizard extends React.Component<iPROPS, iSTATE>{

    constructor(props:iPROPS) {
        super(props);
        this.state={
            wizardPanel : "upload-1"
        }
    }

    element(){
        switch (this.state.wizardPanel) {
            case "upload-1":
                return(
                        <div>
                            <AppButton
                                buttonType={"drag-area-large"}
                                buttonLabel="Drag Files Here"
                                tooltipType="custom"
                                classes={"upload-files"}
                                buttonHelp={(
                                    <>
                                        <p>Upload Images, Excel Sheets, PDFs, and we will try to add them to existing products or
                                            create new products based.</p>
                                    </>
                                )}
                                tooltip={toolTipContent.dragUploadFiles()}
                                toolTipTimeOutInMS={10000}
                                OnClick={()=>this.props.addAction}
                                iconLeft={
                                    <Illustration
                                        illustrationName={"illustration-upload"}
                                        specialClasses={""}
                                        heightWithUnits={"100%"}
                                        widthWithUnits={"100%"}
                                        />
                                    }
                                iconRight={
                                    <CatmanIcon
                                        iconName="icon-add-invert"
                                        classes=" "
                                        height="100%"
                                        width="5rem"
                                    />
                                }
                            />
                            <DividerLine
                                dividerType={"labeled"}
                                labelText={"OR"}
                                classes="upload-wizard-divider"
                            />
                            <h3>Add Products Manually</h3>
                            <div className={"add-blank-stubs-area"}>
                                <p>Add</p>
                                <TextInput
                                    label={""}
                                    currentValue={"1"}
                                    onChangeAction={()=>{}}
                                />
                                <p>new blank product stubs</p>
                                <AppButton
                                    buttonType={"secondary-action"}
                                    buttonLabel="Go"
                                    OnClick={()=>{}}
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