import * as React from "react";

//Configuration data:

import {iDataGridItem} from "../../../_catman-data-types";
import {toolTipContent} from "../../tool-tip-content/content-tool-tips";
import {CatmanIcon} from "../../../svg/icons/icons";
import AppButton from "../../../view-components/button/app-button";

//icons and illustrations
import tempChart from "../../../images/SVG/done-pie-chart.svg"
import {StandardTextInput} from "../../../view-components/text-input/standard-text-input";

interface iPROPS  {
    uniqueID: string;
    productData : iDataGridItem[][];
    closeSingleProduct : Function;
}

interface iSTATE{
    editMode : boolean;
}

export class CatalogSingleProduct extends React.Component<iPROPS, iSTATE>{
    constructor(props:iPROPS) {
        super(props);
        this.state = {
            editMode : false
        };
        this.productData = this.singleProductData(this.props.uniqueID);
    }
    productData : iDataGridItem[];

    singleProductData = (uniqueID : string):iDataGridItem[]=>{
        let product : iDataGridItem[] = [{
            validationValue : "",
            value : "string",
            columnName : "string",
            attrType : "user-gen",
            class : "default"
        }];
        for(let i=0; i < this.props.productData.length; i++){
            for(let j=0; j < this.props.productData[i].length; j++){
                if( this.props.productData[i][j].columnName === "uniqueID" && this.props.productData[i][j].value === uniqueID){
                    product = this.props.productData[i];
                }
            }
        }

        return product;
    };

    getAttribute(name : string){
        for(let i = 0; i < this.productData.length; i++){
            if(this.productData[i].columnName === name){
                return this.productData[i].value;

            }
        }
    }

    manageEditMode(){
        this.setState({editMode : !this.state.editMode})
    }

    getDataArea(){

        if(this.state.editMode === false){
            return(
                <div className="content-area">
                    <div className="single-prod-dash-area">
                        <div className="image-thumb">
                            <img className="preview-image" src={'https://secure.img1-fg.wfcdn.com/im/46577228/resize-h800-w800%5Ecompr-r85/8736/87366205/Fallinerlea+Indoor/Outdoor+Throw+Pilow.jpg'}/>
                            <div className="data-header">
                                <div className="data-chunk data-section-readonly part-number  ">
                                    <h1 className="data-value ">
                                        109-thr-pil-1098a
                                    </h1>
                                    <p className="tiny-label">Besmira Square Pillow Cover (Set of 2)</p>
                                </div>
                                <div className="data-chunk data-section-readonly">
                                    <p className="tiny-label">Product Type: </p>
                                    <div className="data-value">
                                        Pillow
                                    </div>
                                </div>
                                <div className="data-chunk data-section-readonly">
                                    <p className="tiny-label">Source: </p>
                                    <div className="data-value">
                                        M1-123-111
                                    </div>
                                </div>
                                <div className="data-chunk data-section-readonly">
                                    <p className="tiny-label">Manufacturer Contact: </p>
                                    <div className="data-value">
                                        1-(212)-331-3000 ext 45
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="single-general-data">
                            <img className="temp-chart" src={tempChart} />
                        </div>
                    </div>

                    <div className="product-card">

                        <h3>Weight & Dimensions</h3>
                        <div className="data-container">
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Overall</div>
                                <div className={"data-value"}>20'' H x 20'' W x 5'' D </div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Height</div>
                                <div className={"data-value"}>3.5 lb.</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Width </div>
                                <div className={"data-value"}>20''</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Depth </div>
                                <div className={"data-value"}>5''</div>
                            </div>
                        </div>
                        <AppButton
                            classes={"hi-contrast primary"}
                            buttonType={"secondary-action"}
                            buttonLabel="edit"
                            OnClick={()=>this.manageEditMode()}
                            tooltipType="custom"
                            tooltip={toolTipContent.singleProductSwitchToEditMode()}
                            toolTipTimeOutInMS={10000}
                            tooltipXOffset={0}
                            tooltipYOffset={20}
                            iconLeft={
                                <CatmanIcon
                                    iconName={`icon-edit`}
                                    classes=" "
                                    height="100%"
                                    width="100%"
                                />
                            }
                        />
                    </div>

                    <div className="product-card">
                        <h3>Material</h3>
                        <div className="data-container">
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Outer Material</div>
                                <div className={"data-value"}>Polyester/Polyester blend</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Outer Material Details</div>
                                <div className={"data-value"}>Polyester/Polyester blend</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Insert Included </div>
                                <div className={"data-value"}>Yes</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Fill Material </div>
                                <div className={"data-value"}>Polyester/Polyfill</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Insert Included? </div>
                                <div className={"data-value"}>No</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Inner Material Details </div>
                                <div className={"data-value"}>Felt</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Reverse Material </div>
                                <div className={"data-value"}>Imitation Velvet</div>
                            </div>
                        </div>
                        <footer>
                            <AppButton
                                classes={"hi-contrast primary"}
                                buttonType={"secondary-action"}
                                buttonLabel="edit"
                                OnClick={()=>this.manageEditMode()}
                                tooltipType="custom"
                                tooltip={toolTipContent.singleProductSwitchToEditMode()}
                                toolTipTimeOutInMS={10000}
                                tooltipXOffset={0}
                                tooltipYOffset={20}
                                iconLeft={
                                    <CatmanIcon
                                        iconName={`icon-edit`}
                                        classes=" "
                                        height="100%"
                                        width="100%"
                                    />
                                }
                            />
                        </footer>
                    </div>

                    <div className="product-card">
                        <h3>Shipping</h3>
                        <div className="data-container">
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Number of Pieces Included</div>
                                <div className={"data-value"}>2</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Pieces Included</div>
                                <div className={"data-value"}>2 Pillow cases </div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Double Cap? </div>
                                <div className={"data-value"}>Yes</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Reverse Cap?  </div>
                                <div className={"data-value"}>No</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Add-Ons  </div>
                                <div className={"data-value"}>No Decorative Addition</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Storage </div>
                                <div className={"data-value"}>Drawstring Bag</div>
                            </div>
                        </div>
                    </div>

                    <div className="product-card">
                        <h3>Set Related</h3>
                        <div className="data-container">
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Number of Cartons</div>
                                <div className={"data-value"}>1</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Warehouses</div>
                                <div className={"data-value"}>Dockerville, Decatur</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Warehouse Contact Person</div>
                                <div className={"data-value"}>John Trivaliago</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Warehouse Contact Number</div>
                                <div className={"data-value"}>1-(231)-972-1300</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Packing Material </div>
                                <div className={"data-value"}>Dust protector</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Include in package</div>
                                <div className={"data-value"}>Care instructions id 32a</div>
                            </div>
                        </div>
                    </div>

                </div>
            );
        }else{
            return(
                <div className="content-area">
                    <div className="single-prod-dash-area">
                        <div className="image-thumb">
                            <img className="preview-image" src={'https://secure.img1-fg.wfcdn.com/im/46577228/resize-h800-w800%5Ecompr-r85/8736/87366205/Fallinerlea+Indoor/Outdoor+Throw+Pilow.jpg'}/>
                            <div className="data-header">
                                <div className="data-chunk data-section-readonly part-number  ">

                                    <StandardTextInput
                                        label={"Part Number"}
                                        currentValue={"109-thr-pil-1098a"}
                                        onChangeAction={()=>{}}
                                    />
                                    <StandardTextInput
                                        label={"Product Name"}
                                        currentValue={"Besmira Square Pillow Cover (Set of 2)"}
                                        onChangeAction={()=>{}}
                                    />
                                </div>

                                <div className="data-chunk data-section-readonly">
                                    <StandardTextInput
                                        label={"Product Type:"}
                                        currentValue={"Pillow"}
                                        onChangeAction={()=>{}}
                                    />
                                </div>
                                <div className="data-chunk data-section-readonly">
                                    <StandardTextInput
                                        label={"Source"}
                                        currentValue={"M1-123-111"}
                                        onChangeAction={()=>{}}
                                    />

                                </div>
                                <div className="data-chunk data-section-readonly">
                                    <StandardTextInput
                                        label={"Manufacturer Contact"}
                                        currentValue={"1-(212)-331-3000 ext 45"}
                                        onChangeAction={()=>{}}
                                    />
                                </div>

                            </div>
                        </div>
                        <div className="single-general-data">
                            <img className="temp-chart" src={tempChart} />
                        </div>
                    </div>

                    <div className="product-card">
                        <h3>Weight & Dimensions</h3>
                        <div className="data-container">
                            <div className="data-section-readonly">
                                <StandardTextInput
                                    label={"Overall"}
                                    currentValue={"20'' H x 20'' W x 5'' D"}
                                    onChangeAction={()=>{}}
                                />
                            </div>

                            <div className="data-section-readonly">
                                <StandardTextInput
                                    label={"Height"}
                                    currentValue={"3.5 lb."}
                                    onChangeAction={()=>{}}
                                />
                            </div>

                            <div className="data-section-readonly">
                                <StandardTextInput
                                    label={"Width"}
                                    currentValue={"20''"}
                                    onChangeAction={()=>{}}
                                />
                            </div>
                            <div className="data-section-readonly">
                                <StandardTextInput
                                    label={"Depth"}
                                    currentValue={"5''"}
                                    onChangeAction={()=>{}}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="product-card">
                        <h3>Material</h3>
                        <div className="data-container">
                            <div className="data-section-readonly">
                                <StandardTextInput
                                    label={"Outer Material"}
                                    currentValue={"Polyester/Polyester blend"}
                                    onChangeAction={()=>{}}
                                />
                            </div>

                            <div className="data-section-readonly">
                                <StandardTextInput
                                    label={"Outer Material Details"}
                                    currentValue={"Polyester/Polyester blend"}
                                    onChangeAction={()=>{}}
                                />
                            </div>
                            <div className="data-section-readonly">
                                <StandardTextInput
                                    label={"Insert Included"}
                                    currentValue={"Yes"}
                                    onChangeAction={()=>{}}
                                />
                            </div>


                            <div className="data-section-readonly">
                                <StandardTextInput
                                    label={"Fill Material"}
                                    currentValue={"Polyester/Polyfill"}
                                    onChangeAction={()=>{}}
                                />
                            </div>

                            <div className="data-section-readonly">
                                <StandardTextInput
                                    label={"Insert Included?"}
                                    currentValue={"No"}
                                    onChangeAction={()=>{}}
                                />
                            </div>
                            <div className="data-section-readonly">
                                <StandardTextInput
                                    label={"Inner Material Details"}
                                    currentValue={"Felt"}
                                    onChangeAction={()=>{}}
                                />
                            </div>
                            <div className="data-section-readonly">
                                <StandardTextInput
                                    label={"Reverse Material"}
                                    currentValue={"Imitation Velvet"}
                                    onChangeAction={()=>{}}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="product-card">
                        <h3>Shipping</h3>
                        <div className="data-container">
                            <div className="data-section-readonly">
                                <StandardTextInput
                                    label={"Number of Pieces Included"}
                                    currentValue={"2"}
                                    onChangeAction={()=>{}}
                                />
                            </div>
                            <div className="data-section-readonly">
                                <StandardTextInput
                                    label={"Pieces Included"}
                                    currentValue={"2 Pillow cases"}
                                    onChangeAction={()=>{}}
                                />

                            </div>
                            <div className="data-section-readonly">
                                <StandardTextInput
                                    label={"Double Cap?"}
                                    currentValue={"Yes"}
                                    onChangeAction={()=>{}}
                                />
                            </div>
                            <div className="data-section-readonly">
                                <StandardTextInput
                                    label={"Reverse Cap?"}
                                    currentValue={"No"}
                                    onChangeAction={()=>{}}
                                />
                            </div>
                            <div className="data-section-readonly">
                                <StandardTextInput
                                    label={"Add-Ons"}
                                    currentValue={"Add-Ons"}
                                    onChangeAction={()=>{}}
                                />
                            </div>
                            <div className="data-section-readonly">
                                <StandardTextInput
                                    label={"Storage"}
                                    currentValue={"Drawstring Bag"}
                                    onChangeAction={()=>{}}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="product-card">
                        <h3>Set Related</h3>
                        <div className="data-container">
                            <div className="data-section-readonly">
                                <StandardTextInput
                                    label={"Number of Cartons"}
                                    currentValue={"1"}
                                    onChangeAction={()=>{}}
                                />

                            </div>
                            <div className="data-section-readonly">
                                <StandardTextInput
                                    label={"Warehouses"}
                                    currentValue={"Dockerville, Decatur"}
                                    onChangeAction={()=>{}}
                                />
                            </div>
                            <div className="data-section-readonly">
                                <StandardTextInput
                                    label={"Warehouse Contact Person"}
                                    currentValue={"John Trivaliago"}
                                    onChangeAction={()=>{}}
                                />
                            </div>
                            <div className="data-section-readonly">
                                <StandardTextInput
                                    label={"Warehouse Contact Number"}
                                    currentValue={"1-(231)-972-1300"}
                                    onChangeAction={()=>{}}
                                />
                            </div>
                            <div className="data-section-readonly">
                                <StandardTextInput
                                    label={"Packing Material"}
                                    currentValue={"Dust protector"}
                                    onChangeAction={()=>{}}
                                />
                            </div>
                            <div className="data-section-readonly">
                                <StandardTextInput
                                    label={"Include in package"}
                                    currentValue={"Care instructions id 32a"}
                                    onChangeAction={()=>{}}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            );
        }

    }

    getProductPage(){
        let myProduct = this.singleProductData(this.props.uniqueID);

        let editLabel = (valueCheck : boolean)=>{
            if(valueCheck === false){
                return "Edit Mode"
            }else{
                return "Read Mode"
            }
        };

        let editIcon = (valueCheck : boolean)=>{
            if(valueCheck == false){
                return "icon-edit"
            }else{
                return "icon-read-mode"
            }
        };

        let modeToolTip = (valueCheck : boolean) =>{
            if(valueCheck == false){
                return toolTipContent.singleProductSwitchToEditMode();
            }else{
                return toolTipContent.singleProductSwitchToReadMode();
            }
        };

        let introArea = (
            <div className="single-product-view">
                <div className="single-prod-menu">
                    <div>
                        <AppButton
                            buttonType="nav-link"
                            classes="single-product-back"
                            buttonLabel={"Back"}
                            navPath={`/catalog/spreadsheet`}
                            tooltipType="custom"
                            tooltip={toolTipContent.goBackToSpreadsheet()}
                            OnClick={()=>this.props.closeSingleProduct()}
                            iconLeft={(
                                <CatmanIcon
                                    iconName="go-back-arrow"
                                    width="1rem"
                                    height="100%"
                                />
                            )}
                        />
                    </div>
                    <AppButton
                        classes={"hi-contrast primary"}
                        buttonType={"secondary-action"}
                        buttonLabel={editLabel(this.state.editMode)}
                        OnClick={()=>this.manageEditMode()}
                        tooltipType="custom"
                        tooltip={modeToolTip(this.state.editMode)}
                        toolTipTimeOutInMS={10000}
                        tooltipXOffset={0}
                        tooltipYOffset={20}
                        iconLeft={
                            <CatmanIcon
                                iconName={`${editIcon(this.state.editMode)}`}
                                classes=" "
                                height="100%"
                                width="100%"
                            />
                        }
                    />
                    <div className="menu-area">

                        <ul>
                            <li>General Info</li>
                            <li>Weight & Dimensions</li>
                            <li>Material</li>
                            <li>Set Related</li>
                            <li>Shipping</li>
                            <li>Romance Copy</li>
                            <li>Notes</li>
                        </ul>
                        <ul>
                            <li>Variants Group</li>
                            <li>Related Products</li>
                        </ul>
                        <ul>
                            <li>Pricing</li>
                            <li>other Integrations</li>
                            <li>Another Integration</li>
                        </ul>

                    </div>
                </div>
                <div className="spacer"></div>

                {this.getDataArea()}
            </div>
        );

        return(<>{introArea}</>)
    }


    render(){
        return (
            <>
                {this.getProductPage()}
            </>
        )
    }
}
