import * as React from "react";

//Configuration data:

import {iDataGridItem} from "../../view-components/data-grid/data-types-for-data-grid";
import {toolTipContent} from "../tool-tip-content/content-tool-tips";
import {CatmanIcon} from "../../svg/icons/icons";
import AppButton from "../../view-components/button/app-button";

//icons and illustrations
import tempChart from "../../images/SVG/done-pie-chart.svg"
import {StandardTextInput} from "../../view-components/text-input/standard-text-input";
import {mediaObject} from "../../_sample-data/media-library";

interface iPROPS  {
    mediaData : mediaObject;
    closeSingleMediaView : Function;
}

interface iSTATE{
    editMode : boolean;
}

export class SingleMediaDetailsView  extends React.Component<iPROPS, iSTATE>{
    constructor(props:iPROPS) {
        super(props);
        this.state = {
            editMode : false
        };

    }



    manageEditMode(){
        this.setState({editMode : !this.state.editMode})
    }

    getDataArea(){
        if(this.state.editMode === false){
            return(
                <div className="content-area">
                    <h3>Manage Media Details</h3>
                    <div className="preview-image-large"
                         style={{backgroundImage:`url(${this.props.mediaData.mediaPath})` }}
                     />



                    <div className="product-card">
                        <h3>General Info</h3>
                        <div className="data-section-readonly">
                            <div className={"tiny-label"}>Description</div>
                            <div className={"data-value"}>hasellus laoreet neque vitae elit consequat hendrerit. Nulla facilisi. Suspendisse congue metus neque, vitae varius eros ultrices vel.  </div>
                        </div>
                        <div className="data-container">

                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Shot Type</div>
                                <div className={"data-value"}>{this.props.mediaData.shotType}</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Date Uploaded</div>
                                <div className={"data-value"}>June 4 2020</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Last Updated</div>
                                <div className={"data-value"}>June 5 2020</div>
                            </div>
                        </div>
                    </div>

                    <div className="product-card">
                        <h3>Media Properties</h3>
                        <div className="data-container">
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Resolution</div>
                                <div className={"data-value"}>1200x1200</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>File Format</div>
                                <div className={"data-value"}>JPEG</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>File Size</div>
                                <div className={"data-value"}>1.23meg</div>
                            </div>
                        </div>
                    </div>

                    <div className="product-card">
                        <h3>Product Associations</h3>
                        <div className="data-container">
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Number of Associated Products </div>
                                <div className={"data-value"}>0</div>
                            </div>
                        </div>
                    </div>

                    <div className="product-card">
                        <h3>Related Media</h3>
                        <div className="data-container">
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Number of Related Media</div>
                                <div className={"data-value"}>0</div>
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

        let introArea = (
            <div className="single-product-view">
                <div className="single-prod-menu">
                    <div>
                        <AppButton
                            OnClick={ ()=>this.props.closeSingleMediaView()}
                            buttonType="transparent-bg"
                            tooltipType="custom"
                            tooltip={toolTipContent.selectRow()}
                            classes={` `}
                            iconCenter={(
                                <CatmanIcon
                                    iconName={`go-back-arrow`}
                                    width="2rem"
                                    height="1rem"
                                />
                            )}
                        />

                    </div>
                    <AppButton
                        classes={"hi-contrast primary"}
                        buttonType={"secondary-action"}
                        buttonLabel={"edit"}
                        OnClick={()=>this.manageEditMode()}
                        tooltipType="custom"
                        tooltip={""}
                        toolTipTimeOutInMS={10000}
                        tooltipXOffset={0}
                        tooltipYOffset={20}
                        iconLeft={
                            <CatmanIcon
                                iconName={`edit`}
                                classes=" "
                                height="100%"
                                width="100%"
                            />
                        }
                    />
                    <div className="menu-area">
                        <ul>
                            <li>General Info</li>
                            <li>Media Properties</li>
                            <li>Product Associations</li>
                            <li>Related Media</li>
                        </ul>

                        <ul>
                            <li>Media Quality</li>
                            <li>Media Services</li>
                            <li>Media Usage</li>
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
