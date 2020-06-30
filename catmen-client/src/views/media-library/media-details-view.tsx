import * as React from "react";

//Configuration data:

import {iDataGridItem} from "../../view-components/data-grid/data-types-for-data-grid";
import {toolTipContent} from "../tool-tip-content/content-tool-tips";
import {CatmanIcon} from "../../svg/icons/icons";
import AppButton from "../../view-components/button/app-button";

//icons and illustrations
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
        const assignedProducts =(<div className="temp-associations">
            <div className="cell-read-only" style={{gridColumn : 1, gridRow : 1, zIndex : 100 }}>sof-121-111</div>
            <div className="cell-read-only" style={{gridColumn : 2, gridRow : 1, zIndex : 100 }}>Rosina classic convertible sofa - deluxe</div>
            <div className="cell details" style={{gridColumn : 3, gridRow : 1, zIndex : 100 }}>
                <AppButton
                    buttonType="transparent-bg"
                    tooltipType="custom"
                    tooltip={toolTipContent.singleProduct()}
                    iconCenter={(
                        <CatmanIcon
                            iconName="go-arrow"
                            width="1rem"
                            height="100%"
                        />
                    )}
                />
            </div>

            <div className="cell-read-only" style={{gridColumn : 1, gridRow : 2, zIndex : 100 }}>sof-121-112</div>
            <div className="cell-read-only" style={{gridColumn : 2, gridRow : 2, zIndex : 100 }}>Rosina classic convertible sofa - basic</div>
            <div className="cell details" style={{gridColumn : 3, gridRow : 2, zIndex : 100 }}>
                <AppButton
                    buttonType="transparent-bg"
                    tooltipType="custom"
                    tooltip={toolTipContent.singleProduct()}
                    iconCenter={(
                        <CatmanIcon
                            iconName="go-arrow"
                            width="1rem"
                            height="100%"
                        />
                    )}
                />


            </div>

            <div className="cell-read-only" style={{gridColumn : 1, gridRow : 3, zIndex : 100 }}>sof-121-113</div>
            <div className="cell-read-only" style={{gridColumn : 2, gridRow : 3, zIndex : 100 }}>Rosina classic convertible sofa - davinci</div>
            <div className="cell details" style={{gridColumn : 3, gridRow : 3, zIndex : 100 }}>
                <AppButton
                    classes="go-button"
                    buttonType="transparent-bg"
                    tooltipType="custom"
                    tooltip={toolTipContent.singleProduct()}
                    iconCenter={(
                        <CatmanIcon
                            iconName="go-arrow"
                            width="1rem"
                            height="100%"
                        />
                    )}
                />


            </div>
        </div>)

        if(this.state.editMode === false){
            return(
                <div className="content-area">

                    <h3>Manage Media Details</h3>
                    <div className="preview-image-large"
                         style={{backgroundImage:`url(${this.props.mediaData.mediaPath})` }}
                     />

                    <div className="product-card">
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
                        <footer>
                            <AppButton
                                classes={"hi-contrast primary"}
                                buttonType={"secondary-action"}
                                buttonLabel="Read-Only"
                                OnClick={()=>{}}
                                tooltipType="custom"
                                tooltip={toolTipContent.singleProductSwitchToEditMode()}
                                toolTipTimeOutInMS={10000}
                                tooltipXOffset={0}
                                tooltipYOffset={20}
                                iconLeft={
                                    <CatmanIcon
                                        iconName={``}
                                        classes=" "
                                        height="100%"
                                        width="100%"
                                    />
                                }
                            />
                        </footer>
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
                            <h3>Assigned to These Catalog Items</h3>
                            {assignedProducts}
                        </div>
                </div>
            );
        }else{
            return(
                <div className="content-area">
                    <h3>Manage Media Details</h3>
                    <div className="preview-image-large"
                         style={{backgroundImage:`url(${this.props.mediaData.mediaPath})` }}
                    />
                    <div className="product-card">
                        <h3>General Info</h3>
                        <div className="data-section-readonly">
                            <StandardTextInput
                                label={"Description"}
                                currentValue={"hasellus laoreet neque vitae elit consequat hendrerit. Nulla facilisi. Suspendisse congue metus neque, vitae varius eros ultrices vel.  "}
                                onChangeAction={()=>{}}
                            />
                        </div>
                        <div className="data-container">
                            <StandardTextInput
                                label={"Shot Type"}
                                currentValue={this.props.mediaData.shotType}
                                onChangeAction={()=>{}}
                            />
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Date Uploaded</div>
                                <div className={"data-value"}>June 4 2020</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Last Updated</div>
                                <div className={"data-value"}>June 5 2020</div>
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
                        <h3>Assigned to These Catalog Items</h3>
                        {assignedProducts}
                    </div>

                </div>
            );
        }

    }

    getProductPage(){
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

        const backBtn = (
            <AppButton
                buttonType="transparent-bg"
                classes="single-product-back"
                buttonLabel={"Back"}
                navPath={`/media-library`}
                tooltipType="custom"
                tooltip={toolTipContent.goBackToSpreadsheet()}
                OnClick={()=>this.props.closeSingleMediaView()}
                iconLeft={(
                    <CatmanIcon
                        iconName="go-back-arrow"
                        width="1rem"
                        height="100%"
                    />
                )}
            />
        );

        let introArea = (
            <div className="single-product-view">
                <div className="single-prod-menu">
                    <div>
                        {backBtn}
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
