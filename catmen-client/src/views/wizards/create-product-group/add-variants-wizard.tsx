import * as React from "react";
import {iWizardStep, Wizard} from "../../../view-components/wizard/wizard";
import {ReactElement} from "react";
import {toolTipContent} from "../../tool-tip-content/content-tool-tips";
import {CatmanIcon} from "../../../svg/icons/icons";
import AppButton from "../../../view-components/button/app-button";
import {DividerLine} from "../../../view-components/divider-line/divider-line";
import {TextInput} from "../../../view-components/text-input/text-input";
import {Illustration} from "../../../svg/illustrations/illustrations";
import {dataManagerMain} from "../../../index";
import {iDataGridItem} from "../../../view-components/data-grid/data-types-for-data-grid";
import {StandardTextInput} from "../../../view-components/text-input/standard-text-input";
import {DataGrid} from "../../../view-components/data-grid/data-grid";

interface iPROPS{
    addAction : Function
    selectedCheckBoxes? : number[];
    groups : string[];
    manageModal : Function;
}

type addVariantWizardNav = "closed" | "start" | "staging-area" | "upload-3";

interface iSTATE{
    wizardPanel : addVariantWizardNav;
}

export class AddVariantsWizard extends React.Component<iPROPS, iSTATE>{

    constructor(props:iPROPS) {
        super(props);
        this.state={
            wizardPanel : "start"
        }
    }
    stagingAreaProducts : iDataGridItem[][] = [];
    numberOfVariants = 1;

    addVariantsStaging(){
        console.log(this.props.selectedCheckBoxes);
        let newItem : iDataGridItem[] = [];
        if(this.props.selectedCheckBoxes !== undefined){
            if(this.props.selectedCheckBoxes.length === 1){
                newItem = JSON.parse(JSON.stringify(dataManagerMain.productData[ this.props.selectedCheckBoxes[0]]) );
                let newItems = [];

                for(let i=0; i < this.numberOfVariants; i++){
                    newItems.push( JSON.parse(JSON.stringify(newItem)) );
                }
                this.stagingAreaProducts = newItems;


            }else{

            }
        }
        console.log("added variant",dataManagerMain.productData);
       // this.props.manageModal();
    }

    acceptVariants(){
        if(this.props.selectedCheckBoxes != null){
            dataManagerMain.productData.splice(this.props.selectedCheckBoxes[0], 0,...this.stagingAreaProducts);
        }
        this.props.manageModal();
    }

    getInputValue = (row:number, cell:number, value:string )=>{
        console.log("input value", row, " ", cell, " ", value);
        this.numberOfVariants = parseInt(value);
    };

    wizardNavigation(panelName : addVariantWizardNav){
        this.setState({wizardPanel : panelName});
        switch (panelName) {
            case "staging-area":
                this.addVariantsStaging();
                break;

        }
    }

    elements(){
        switch (this.state.wizardPanel) {
            case "start":
                const startButtons = (
                    <>
                        <AppButton
                            buttonType="secondary-action"
                            buttonLabel="Cancel"
                            OnClick={ ()=>{} }
                            tooltipType="custom"
                            tooltip={toolTipContent.footerCancel()}
                            toolTipTimeOutInMS={10000}
                            iconLeft={
                                <CatmanIcon
                                    iconName="cancel"
                                    classes=" "
                                    height="100%"
                                    width="100%"
                                />
                            }
                        />
                        <AppButton
                            buttonType={"secondary-action"}
                            buttonLabel="Continue"
                            OnClick={()=>this.wizardNavigation("staging-area")}
                            tooltipType="custom"
                            tooltip={toolTipContent.footerDelete()}
                            toolTipTimeOutInMS={10000}
                            iconLeft={
                                <CatmanIcon
                                    iconName="icon-delete"
                                    classes=" "
                                    height="100%"
                                    width="100%"
                                />
                            }
                        />
                    </>
                );

                const startSentences = (
                    <div className="sentence-input">
                        <p>Add</p>
                        <StandardTextInput
                            controlType="no-label"
                            label={"Number of variants"}
                            onChangeAction={this.getInputValue}
                            currentValue={"1"}
                        />
                        <p>New blank product stubs as variants: </p>

                    </div>
                );
                return(
                    <Wizard
                        stepTitle={"Add Products Variants"}
                        stepSubTitle={"Variants can be used to quickly set up different colors and sizes of your products."}
                        wizardButtons={startButtons}
                        sentenceInputs={startSentences}
                    />
                );
            case "staging-area":
                const stagingButtons = (
                    <>
                        <AppButton
                            buttonType="secondary-action"
                            buttonLabel="Back"
                            OnClick={ ()=>this.wizardNavigation("start") }
                            tooltipType="custom"
                            tooltip={toolTipContent.footerCancel()}
                            toolTipTimeOutInMS={10000}
                            iconLeft={
                                <CatmanIcon
                                    iconName="cancel"
                                    classes=" "
                                    height="100%"
                                    width="100%"
                                />
                            }
                        />
                        <AppButton
                            buttonType="secondary-action"
                            buttonLabel="Delete Selected"
                            OnClick={ ()=>this.wizardNavigation("start") }
                            tooltipType="custom"
                            tooltip={toolTipContent.footerCancel()}
                            toolTipTimeOutInMS={10000}
                            iconLeft={
                                <CatmanIcon
                                    iconName="icon-delete"
                                    classes=" "
                                    height="100%"
                                    width="100%"
                                />
                            }
                        />
                        <AppButton
                            buttonType={"secondary-action"}
                            buttonLabel="Confirm & Add to Catalog"
                            OnClick={()=>this.acceptVariants()}
                            tooltipType="custom"
                            tooltip={toolTipContent.footerDelete()}
                            toolTipTimeOutInMS={10000}
                            iconLeft={
                                <CatmanIcon
                                    iconName="icon-add"
                                    classes=" "
                                    height="100%"
                                    width="100%"
                                />
                            }
                        />
                    </>
                );

                const stagingSentences = (
                    <DataGrid
                        data={this.stagingAreaProducts}
                        manageParentViews={()=>{}}
                        columnsData={dataManagerMain.getColumns}
                        addAction={()=>{}}
                    />
                );
                return(<Wizard
                    stepTitle={"Confirm Variants"}
                    stepSubTitle={"Verify and make changes before adding new product variants to your catalog"}
                    wizardButtons={stagingButtons}
                    sentenceInputs={stagingSentences}
                    classes="expand-size"
                />)
        }
    }

    render(){
        return(this.elements())
    }
}

