import * as React from "react";
import {CatmanIcon} from "../../svg/icons/icons";
import {ToolTipContent} from "../../view-components/heru-tool-tip/tool-tip-content";

import addVariantIllustration from "../../images/SVG/add-variant.svg"
import createVariantGroupIllustration from "../../images/SVG/create-variant-group.svg"
import maximizeDrawer from "../../images/SVG/maximize-drawer.svg"
import closeDrawer from "../../images/SVG/close-drawer.svg"
import restoreDrawer from "../../images/SVG/restore-drawer.svg"
import closeModal from "../../images/SVG/close-modal-and-cancel.svg"
import dragFiles from "../../images/SVG/drag-files.svg"
import backToSpreadsheet from "../../images/SVG/back-to-spreadsheet.svg"
import singleProductSwitchToEditMode from "../../images/SVG/sitch-to-edit-mode.svg"
import singleProductSwitchToReadMode from "../../images/SVG/switch-to-read-only.svg"
import insertColumn from "../../images/SVG/illustration-insert.svg"
import partNumber from "../../images/SVG/tooltip-part-number.svg"
import productGroups from "../../images/SVG/tooltip-product-groups.svg"
import referenceImage from "../../images/SVG/tooltip-reference-image.svg"
import classesIllustration from "../../images/SVG/illustration-classes.svg"
import clearSelection from "../../images/SVG/illustration-clear-selection.svg"
import deleteItem from "../../images/SVG/illustration-delete-items.svg"
import editItem from "../../images/SVG/illustration-edit.svg"

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
            subHeader="Permanently destroy the selected product data"
            copy={(
                <div>
                    <img className="tooltip-illustration" src={deleteItem}/>
                </div>
            )}
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
            subHeader="Switch to cell-editing mode"
            copy={(
                <div>
                    <img className="tooltip-illustration" src={editItem}/>
                </div>
            )}
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
            header="Create New Product Group from Selection"
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

    closeModal(){
        if(this.showCloseDrawer < 4){
            return(
                <ToolTipContent
                    header="Close & Cancel"
                    subHeader="Close this window, you'll lose any work you've done in the window."
                    copy={(
                        <div>
                            <img className="tooltip-illustration" src={closeModal}/>
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

    addProducts(){
        return(
            <ToolTipContent
                header="Add or Update Products"
                subHeader="Add or update product data in YOUR catalog and then publish to Wayfair when you're ready."
                copy={(
                    <div>
                        <ul>
                            <li>Add new blank products as stubs</li>
                            <li>Extract product data from files like Excel sheets and images</li>
                            <li>Upload media like photos and associate to products</li>
                            <li>Add product variants for groups (like a red, yellow and green versions of a product).</li>
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
        )
    }

    addBlankStubs(){
        return(<ToolTipContent
            header="Add Blank Product Stubs"
            copy="This functionality available yet"
            tooltipType="deluxe"
            icon={
                <CatmanIcon
                    iconName="icon-add-invert"
                    classes=""
                    height="1.5rem"
                    width="1.5rem"
                />
            }
        />)
    }

    dragUploadFiles(){
        return(<ToolTipContent
            header="Upload Files Here"
            subHeader="Drag files from your computer's folder onto this to upload them, or click to browse your computer."
            copy={
                    <div>
                        <img className="tooltip-illustration" src={dragFiles}/>
                    </div>
                }
            tooltipType="deluxe"
            icon={
                <CatmanIcon
                    iconName="icon-add-invert"
                    classes=""
                    height="1.5rem"
                    width="1.5rem"
                />
            }
        />)
    }

    goBackToSpreadsheet(){
        return(<ToolTipContent
            header="Go back to the Spreadsheet View"
            subHeader="Any edits you made in the Single Product view will be saved"
            copy={
                <div>
                    <img className="tooltip-illustration" src={backToSpreadsheet}/>
                </div>
            }
            tooltipType="deluxe"
            icon={
                <CatmanIcon
                    iconName="icon-add-invert"
                    classes=""
                    height="1.5rem"
                    width="1.5rem"
                />
            }
        />)
    }

    singleProductSwitchToEditMode(){
        return(<ToolTipContent
            header="Switch to edit Mode"
            subHeader="this will turn this view into a web form style page with textboxes, dop-downs and such so you can edit this product's data"
            copy={
                <div>
                    <img className="tooltip-illustration" src={singleProductSwitchToEditMode}/>
                </div>
            }
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

    singleProductSwitchToReadMode(){
        return(<ToolTipContent
            header="Switch to Read Mode"
            subHeader="this will turn off all the the web form text boxes, drop-downs and such so you can read this easier."
            copy={
                <div>
                    <img className="tooltip-illustration" src={singleProductSwitchToReadMode}/>
                </div>
            }
            tooltipType="deluxe"
            icon={
                <CatmanIcon
                    iconName="icon-read-mode"
                    classes=""
                    height="1.5rem"
                    width="1.5rem"
                />
            }
        />)
    }

    insertColumn(){
        return(<ToolTipContent
            header="Insert new Attribute/Column"
            subHeader="Insert a new attribute, this will make a new column."
            copy={
                <div>
                    <img className="tooltip-illustration" src={insertColumn}/>
                </div>
            }
            tooltipType="deluxe"
            icon={
                <CatmanIcon
                    iconName="icon-add-invert"
                    classes=""
                    height="1.5rem"
                    width="1.5rem"
                />
            }
        />)
    }

    clearSelection(){
        return(
            <ToolTipContent
                header="Clear Selection"
                subHeader="Unselect items & cancel current activity."
                copy={
                    <div>
                        <img className="tooltip-illustration" src={clearSelection}/>
                    </div>
                }
                tooltipType="deluxe"
                icon={
                    <CatmanIcon
                        iconName="clear"
                        classes=""
                        height="1.5rem"
                        width="1.5rem"
                    />
                }
            />
        )
    }

    imageThumbnailPreview(imagePath : string){
        return(<ToolTipContent
            header=""
            subHeader=""
            copy={
                <div>
                    <img className="tooltip-photo" src={imagePath}/>
                </div>
            }
            tooltipType="media"

        />)
    }

    columnHeaderToolTips(tipName : string) {
        switch (tipName) {
            case "ReferenceImage":
                return(
                    <ToolTipContent
                        header="Reference Image"
                        subHeader="This is just to help you identify the product visually while you're working"
                        copy={
                            <div>
                                <img className="tooltip-illustration" src={referenceImage}/>
                            </div>
                        }
                        tooltipType="deluxe"
                        icon={
                            <CatmanIcon
                                iconName="icon-add-invert"
                                classes=""
                                height="1.5rem"
                                width="1.5rem"
                            />
                        }
                    />
                );

            case "PartNumber":
                return(
                    <ToolTipContent
                        header="Part Number"
                        subHeader="Must be unique, ideally you would use your existing descriptive part number"
                        copy={
                            <div>
                                <img className="tooltip-illustration" src={partNumber}/>
                            </div>
                        }
                        tooltipType="deluxe"
                        icon={
                            <CatmanIcon
                                iconName="icon-add-invert"
                                classes=""
                                height="1.5rem"
                                width="1.5rem"
                            />
                        }
                    />
                );

            case "ProductGroup":
                return(
                    <ToolTipContent
                        header="Product Group"
                        subHeader="To group products give items that have a relationship the same product name"
                        copy={
                            <div>
                                <img className="tooltip-illustration" src={productGroups}/>
                            </div>
                        }
                        tooltipType="deluxe"
                        icon={
                            <CatmanIcon
                                iconName="icon-add-invert"
                                classes=""
                                height="1.5rem"
                                width="1.5rem"
                            />
                        }
                    />
                );

            case "ProductName":
                return(
                    <ToolTipContent
                        header="Product Name"
                        subHeader="Give each item a friendly human-readable name, this may or may not be used by Wayfair in the white-labeling process"
                        copy={
                            <div>
                                <img className="tooltip-illustration" src={productGroups}/>
                            </div>
                        }
                        tooltipType="deluxe"
                        icon={
                            <CatmanIcon
                                iconName="icon-add-invert"
                                classes=""
                                height="1.5rem"
                                width="1.5rem"
                            />
                        }
                    />
                );

            case "Class":
                return(
                    <ToolTipContent
                        header="Class"
                        subHeader="The Product Class is the species of product, by selecting a class you will define a set of attributes/column heads to describe that product"
                        copy={
                            <div>
                                <img className="tooltip-illustration" src={classesIllustration}/>
                            </div>
                        }
                        tooltipType="deluxe"
                        icon={
                            <CatmanIcon
                                iconName="icon-add-invert"
                                classes=""
                                height="1.5rem"
                                width="1.5rem"
                            />
                        }
                    />
                );

        }

        return(
            <ToolTipContent
                subHeader=""
                copy={tipName}
                tooltipType="basic"
                icon={
                    <CatmanIcon
                        iconName="icon-add-invert"
                        classes=""
                        height="1.5rem"
                        width="1.5rem"
                    />
                }
            />
        );
    }
};





export let toolTipContent = new toolTipsLibrary();