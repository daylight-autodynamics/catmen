import * as React from "react";
import {CatmanIcon} from "../../../svg/icons/icons";
import {ToolTipContent} from "../../../view-components/heru-tool-tip/tool-tip-content";

import addVariantIllustration from "../../../images/SVG/add-variant.svg"
import createVariantGroupIllustration from "../../../images/SVG/create-variant-group.svg"
import maximizeDrawer from "../../../images/SVG/maximize-drawer.svg"
import closeDrawer from "../../../images/SVG/close-drawer.svg"
import restoreDrawer from "../../../images/SVG/restore-drawer.svg"

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
    showCloseDrawer : number = 0;
    showMaximizeDrawer : number = 0;
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
            subHeader="Create a new product and add it to the selected product's group"
            copy={(
                <div>
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
            subHeader="Create a new product variants group from the selected items."
            copy={(
                <div>
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
                    subHeader="Edit this row in a single page."
                    copy={(
                        <div>
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
                    header="Edit This Product"
                    subHeader="Select rows to delete, create groups, add variants to groups"
                    copy=""
                    tooltipType="empty"
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
        }
    }

    selectRow(){
        if(this.showSelectRow === true){
            return (
                <ToolTipContent
                    header="Select Rows"
                    subHeader="Select rows to perform actions on them."
                    copy={(
                        <div>
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

    closeDrawer(){
        if(this.showCloseDrawer < 4){
            return(
                <ToolTipContent
                    header="Close Drawer"
                    subHeader="Close edit drawer and clear cell selection set"
                    copy={(
                        <div>
                            <img className="tooltip-illustration" src={closeDrawer}/>
                        </div>
                    )}
                    tooltipType="deluxe"
                    icon={
                        <CatmanIcon
                            iconName="close-icon"
                            classes=""
                            height="1.5rem"
                            width="1.5rem"
                        />
                    }
                />
                )
        }else{
            return(<ToolTipContent
                header="Close Drawer"
                copy={(
                    <div>
                        <p>Close drawer and clear selection.</p>
                    </div>
                )}
                tooltipType="deluxe"
                icon={
                    <CatmanIcon
                        iconName="icon-close"
                        classes=""
                        height="1.5rem"
                        width="1.5rem"
                    />
                }
            />)
        }
    }

    restoreDrawer(){
        return(
            <ToolTipContent
                header="Restore Drawer"
                subHeader="Restore drawer so the grid is in view again."
                copy={(
                    <div>
                        <img className="tooltip-illustration" src={restoreDrawer}/>
                    </div>
                )}
                tooltipType="deluxe"
                icon={
                    <CatmanIcon
                        iconName="icon-restore-tooltip"
                        classes=""
                        height="1.5rem"
                        width="1.5rem"
                    />
                }
            />
        )
    }

    maximizeDrawer(){
        if(this.showMaximizeDrawer < 4){
            return(<ToolTipContent
                header="Maximize Drawer"
                subHeader="Expand the edit area"
                copy={(
                    <div>
                        <img className="tooltip-illustration" src={maximizeDrawer}/>
                    </div>
                )}
                tooltipType="deluxe"
                icon={
                    <CatmanIcon
                        iconName="icon-maximize-tooltip"
                        classes=""
                        height="1.5rem"
                        width="1.5rem"
                    />
                }
            />)
        }else{
            return(<ToolTipContent
                header="Maximize Drawer"
                copy={(
                    <div>
                        <p>Expand the edit area.</p>
                    </div>
                )}
                tooltipType="deluxe"
                icon={
                    <CatmanIcon
                        iconName="icon-maximize-tooltip"
                        classes=""
                        height="1.5rem"
                        width="1.5rem"
                    />
                }
            />)
        }
    }

};

export let toolTipContent = new toolTipsLibrary();