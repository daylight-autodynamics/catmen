import * as React from "react";
import {CatmanIcon} from "../../svg/icons/icons";
import {ToolTipContent} from "../../view-components/heru-tool-tip/tool-tip-content";

import addVariantIllustrationIllustration from "../../images/SVG/add-variant.svg"
import createVariantGroupIllustrationIllustration from "../../images/SVG/create-variant-group.svg"
import maximizeDrawerIllustration from "../../images/SVG/maximize-drawer.svg"
import closeDrawerIllustration from "../../images/SVG/close-drawer.svg"
import restoreDrawerIllustration from "../../images/SVG/restore-drawer.svg"
import closeModalIllustration from "../../images/SVG/close-modal-and-cancel.svg"
import dragFilesIllustration from "../../images/SVG/drag-files.svg"
import backToSpreadsheetIllustration from "../../images/SVG/back-to-spreadsheet.svg"
import singleProductSwitchToEditModeIllustration from "../../images/SVG/sitch-to-edit-mode.svg"
import singleProductSwitchToReadModeIllustration from "../../images/SVG/switch-to-read-only.svg"
import insertColumnIllustration from "../../images/SVG/illustration-insert.svg"
import partNumberIllustration from "../../images/SVG/tooltip-part-number.svg"
import productGroupsIllustration from "../../images/SVG/tooltip-product-groups.svg"
import referenceImageIllustration from "../../images/SVG/tooltip-reference-image.svg"
import classesIllustrationIllustration from "../../images/SVG/illustration-classes.svg"
import clearSelectionIllustration from "../../images/SVG/illustration-clear-selection.svg"
import deleteItemIllustration from "../../images/SVG/illustration-delete-items.svg"
import deleteRowIllustration from "../../images/SVG/illustration-delete-rows.svg"
import editItemIllustration from "../../images/SVG/illustration-edit.svg"
import insertFromStagingIllustration from "../../images/SVG/illustration-insert-from-staging.svg"
import continueWizardIllustration from "../../images/SVG/illustration-continue-next-step.svg"
import goBackWizardIllustration from "../../images/SVG/illustration-wizard-go-back.svg"
import productNamingIllustration from "../../images/SVG/illustration-product-name.svg"
import clickDragGridCells from "../../images/SVG/illustration-click-drag-cells.svg"
import mediaCardsIllustration from "../../images/SVG/illustration-card-view.svg"
import mediaGridIllustration from "../../images/SVG/illustration-media-grid.svg"

import tutBulkEdit from "../../images/SVG/illustration-bulk-edit.svg"
import tutEditWithDrawer from "../../images/SVG/illustration-edit-with-drawer.svg"
import tutFooter from "../../images/SVG/illustration-footer-menu.svg"



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

    gridIntroTutorial : number = 0;

    gridDragTutorial : number = 0;
    bulkEditTutorial : number = 0;

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
            subHeader="Permanently destroy the product data in selected rows"
            copy={(
                <div>
                    <img className="tooltip-illustration" src={deleteRowIllustration}/>
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

    deleteItem(){
        return(<ToolTipContent
            header="Delete Selected"
            subHeader="Permanently destroy the selected product data"
            copy={(
                <div>
                    <img className="tooltip-illustration" src={deleteItemIllustration}/>
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
                    <img className="tooltip-illustration" src={editItemIllustration}/>
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
                    <img className="tooltip-illustration" src={addVariantIllustrationIllustration}/>
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
                    <img className="tooltip-illustration" src={createVariantGroupIllustrationIllustration}/>
                </div>
            )}
            tooltipType="deluxe"
            icon={
                <CatmanIcon
                    iconName="info-icon-product-group"
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
                            <img className="tooltip-illustration" src={closeDrawerIllustration}/>
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
                            <img className="tooltip-illustration" src={closeModalIllustration}/>
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
                        <img className="tooltip-illustration" src={restoreDrawerIllustration}/>
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
                        <img className="tooltip-illustration" src={maximizeDrawerIllustration}/>
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
                        <img className="tooltip-illustration" src={dragFilesIllustration}/>
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
                    <img className="tooltip-illustration" src={backToSpreadsheetIllustration}/>
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
                    <img className="tooltip-illustration" src={singleProductSwitchToEditModeIllustration}/>
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
                    <img className="tooltip-illustration" src={singleProductSwitchToReadModeIllustration}/>
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
                    <img className="tooltip-illustration" src={insertColumnIllustration}/>
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

    mediaCardView(){
        return(<ToolTipContent
            header="Media Card View"
            subHeader="View media assets as cards, good for inspection and review"
            copy={
                <div>
                    <img className="tooltip-illustration" src={mediaCardsIllustration}/>
                </div>
            }
            tooltipType="deluxe"
            icon={
                <CatmanIcon
                    iconName="media-nav-icon"
                    classes=""
                    height="1.5rem"
                    width="1.5rem"
                />
            }
        />)
    }

    mediaGridView(){
        return(<ToolTipContent
            header="Media Grid View"
            subHeader="View media assets in a grid, good for bulk actions"
            copy={
                <div>
                    <img className="tooltip-illustration" src={mediaGridIllustration}/>
                </div>
            }
            tooltipType="deluxe"
            icon={
                <CatmanIcon
                    iconName="media-nav-icon"
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
                        <img className="tooltip-illustration" src={clearSelectionIllustration}/>
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

    continueWizard(){
        return(
            <ToolTipContent
                header="Continue To Next Step"
                subHeader="We'll walk you through a few steps to help you a bit."
                copy={
                    <div>
                        <img className="tooltip-illustration" src={continueWizardIllustration}/>
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

    goBackWizard(){
        return(
            <ToolTipContent
                header="Go Back To Last Step"
                subHeader="Whoops! Nevermind... let's go back a bit."
                copy={
                    <div>
                        <img className="tooltip-illustration" src={goBackWizardIllustration}/>
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

    insertFromStagingArea(){
        return(
            <ToolTipContent
                header="Insert Into Catalog"
                subHeader="Insert these items into your catalog"
                copy={
                    <div>
                        <img className="tooltip-illustration" src={insertFromStagingIllustration}/>
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

    clickDragGrid(){
        if(this.gridDragTutorial <= 2 ){
            return(
                <ToolTipContent
                    header=""
                    subHeader="Click & drag to select & edit multiple cells"
                    mainClasses="embedded-tip"
                    copy={
                        <div>
                            <img className="tooltip-illustration" src={clickDragGridCells}/>
                        </div>
                    }
                    tooltipType="deluxe"

                />
            )
        }else if(this.gridDragTutorial > 2 && this.gridDragTutorial < 5){
            return(
                <ToolTipContent
                    header=""
                    subHeader="Click & drag to select & edit multiple cells"
                    mainClasses="embedded-tip"
                    tooltipType="deluxe"
                />
            )
        }
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
                                <img className="tooltip-illustration" src={referenceImageIllustration}/>
                            </div>
                        }
                        tooltipType="deluxe"
                        icon={
                            <CatmanIcon
                                iconName="info-icon-image"
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
                                <img className="tooltip-illustration" src={partNumberIllustration}/>
                            </div>
                        }
                        tooltipType="deluxe"
                        icon={
                            <CatmanIcon
                                iconName="info-icon-part-number"
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
                                <img className="tooltip-illustration" src={productGroupsIllustration}/>
                            </div>
                        }
                        tooltipType="deluxe"
                        icon={
                            <CatmanIcon
                                iconName="info-icon-product-group"
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
                                <img className="tooltip-illustration" src={productNamingIllustration}/>
                            </div>
                        }
                        tooltipType="deluxe"
                        icon={
                            <CatmanIcon
                                iconName="info-icon-product-name"
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
                                <img className="tooltip-illustration" src={classesIllustrationIllustration}/>
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

    mediaRelatedTooltips(tipName : string){
        switch(tipName){
            case "media-details":
                return(
                    <ToolTipContent
                        header="Media Details"
                        subHeader="See all of the detailed information about this piece of media"
                        copy={
                            <div>
                                <img className="tooltip-illustration" src={referenceImageIllustration}/>
                                <div>
                                    <ul>
                                        <li>File information</li>
                                        <li>Manage associated products</li>
                                        <li>Manage media tags</li>
                                    </ul>
                                </div>
                            </div>
                        }
                        tooltipType="deluxe"
                        icon={
                            <CatmanIcon
                                iconName="info-icon-image"
                                classes=""
                                height="1.5rem"
                                width="1.5rem"
                            />
                        }
                    />
                )
        }

        return (<></>);
    }

    tutorialEditGrid(){
        if(this.gridDragTutorial < 1){
            return(
                <ToolTipContent
                    header="You Can Edit Right in This Grid!"
                    subHeader="This grid is editable, click in to try it (don't worry you can undo/redo)"
                    copy={
                        <div className="tutorial-group">
                            <img className="tooltip-illustration" src={goBackWizardIllustration}/>
                            <img className="tooltip-illustration" src={goBackWizardIllustration}/>
                            <img className="tooltip-illustration" src={goBackWizardIllustration}/>
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
    }
};


export let toolTipContent = new toolTipsLibrary();