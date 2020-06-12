import * as React from "react";
import {CatmanIcon} from "../../../svg/icons/icons";
import {ToolTipContent} from "../../../view-components/heru-tool-tip/tool-tip-content";

import addVariantIllustration from "../../../images/SVG/add-variant.svg"
import createVariantGroupIllustration from "../../../images/SVG/create-variant-group.svg"

interface iSTATE{

}

interface iPROPS{

}

export class ContentToolTips extends React.Component<iPROPS, iSTATE>{
    constructor(props : iPROPS) {
        super(props);
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let toolTip = (<></>);
        return toolTip;
    }
}


export class toolTipsLibrary {
    showSelectRow : boolean = true;
    showSingleProduct : boolean = true;
    mainNav(){
    return(<ToolTipContent
              header="Navigation"
              copy="Use this menu to access different sections of the app"
              tooltipType="deluxe"
              icon={
                  <CatmanIcon
                      iconName="compass"
                      classes=""
                      height="1.5rem"
                      width="1.5rem"
                  />
              }
        />)
    }

    footerCancel(){
        return(<ToolTipContent
            header="Cancel"
            copy="Close this menu and clear selected rows"
            tooltipType="deluxe"
            icon={
                <CatmanIcon
                    iconName="cancel"
                    classes=""
                    height="1.5rem"
                    width="1.5rem"
                />
            }
        />)
    }

    footerDelete(){
        return(<ToolTipContent
            header="Delete Selected"
            copy="Permanently destroy the selected product data"
            tooltipType="deluxe"
            icon={
                <CatmanIcon
                    iconName="icon-delete"
                    classes=""
                    height="1.5rem"
                    width="1.5rem"
                />
            }
        />)
    }

    footerEditSelection(){
        return(<ToolTipContent
            header="Edit Selected Rows"
            copy="Switch to cell-editing mode"
            tooltipType="deluxe"
            icon={
                <CatmanIcon
                    iconName="icon-edit"
                    classes=""
                    height="1.5rem"
                    width="1.5rem"
                />
            }
        />)
    }


    footerAddVariant(){
        return(<ToolTipContent
            header="Add Product as a Variant"
            copy={(
                <div>
                    <p>Create a new product and add it to the selected product's group</p>
                    <img className="tooltip-illustration" src={addVariantIllustration}/>
                </div>
            )}
            tooltipType="deluxe"
            icon={
                <CatmanIcon
                    iconName="icon-add"
                    classes=""
                    height="1.5rem"
                    width="1.5rem"
                />
            }
        />)
    }

    footerCreateVariant(){
        return(<ToolTipContent
            header="Add Product as a Variant"
            copy={(
                <div>
                    <p>Create a new product variants group</p>
                    <img className="tooltip-illustration" src={createVariantGroupIllustration}/>
                </div>
            )}
            tooltipType="deluxe"
            icon={
                <CatmanIcon
                    iconName="icon-add"
                    classes=""
                    height="1.5rem"
                    width="1.5rem"
                />
            }
        />)
    }


    singleProduct(){
        if(this.showSingleProduct === true){
            return (
                <ToolTipContent
                    header="Edit This Product"
                    copy={(
                        <div>
                            <p>Edit this row in a single page</p>
                            <ul>
                                <li>Web form style page</li>
                                <li>View and Associate Media</li>
                                <li>See variants of this product</li>
                                <li>So much more...</li>
                            </ul>
                        </div>
                    )}

                    tooltipType="deluxe"
                    icon={
                        <CatmanIcon
                            iconName="single-product"
                            classes=""
                            height="1.5rem"
                            width="1.5rem"
                        />
                    }
                />
            );
        }else{
            return (
                <ToolTipContent
                    header=""
                    copy={(
                        <div>
                            <p>Select rows to delete, create groups, add variants to groups</p>
                        </div>
                    )}

                    tooltipType="empty"

                />
            );
        }
    }

    selectRow(){
        if(this.showSelectRow === true){
            return (
                <ToolTipContent
                    header="Select Rows"
                    copy={(
                        <div>
                            <p>Select rows to perform actions on them:</p>
                            <ul>
                                <li>Delete items from catalog</li>
                                <li>Create product groupings</li>
                                <li>Add Variants to product groups</li>
                            </ul>
                        </div>
                    )}

                    tooltipType="deluxe"
                    icon={
                        <CatmanIcon
                            iconName="select-row"
                            classes=""
                            height="1.5rem"
                            width="1.5rem"
                        />
                    }
                />
            );
        }else{
            return (
                <ToolTipContent
                    header=""
                    copy={(
                        <div>
                            <p>Select rows to delete, create groups, add variants to groups</p>
                        </div>
                    )}

                    tooltipType="empty"

                />
            );
        }
    }

};

export let toolTipContent = new toolTipsLibrary();