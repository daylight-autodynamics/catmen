import * as React from "react";
import {ReactElement} from "react";
import {ToolTip} from "../view-components/heru-tool-tip/tool-tip";
import {ToolTipContent} from "../view-components/heru-tool-tip/tool-tip-content";
import {validationActions} from "../data-components/data-manager/data-manager";
import {toolTipContent} from "../views/tool-tip-content/content-tool-tips";

export interface iColumn {
    columnLabel : string;
    columnName : string;
    columnMenu : ReactElement;
    columnType : "hidden" | "standard" | "required" | "user-gen";
    control : "text-input" | "pick-list" | "list-editor" | "read-only" | "media" | "hidden";
    toolTip : ReactElement | string;
    tooltipType : "custom" | "basic";
    validationAction : validationActions[];
}

export class ProductColumns{

    testMenu(){
        return (<div style={{backgroundColor : "#cecece"}}>Menu</div>);
    }

    get productColumns(){
        return  (
            [
                {
                    validationAction : [],
                    columnName : "uniqueID",
                    columnLabel : " ",
                    columnMenu : this.testMenu,
                    columnType : "hidden",
                    control : "hidden",
                    tooltipType : "custom",
                    toolTip : "this is non-editable unique id"
                },
                {
                    validationAction : [],
                    columnName : "ReferenceImage",
                    columnLabel : "Reference Image",
                    columnMenu : this.testMenu,
                    columnType : "standard",
                    control : "media",
                    tooltipType : "custom",
                    toolTip : toolTipContent.columnHeaderToolTips("ReferenceImage")
                },
                {
                    validationAction : ["no-duplicates", "required"],
                    columnName : "PartNumber",
                    columnLabel : "Part Number ",
                    columnMenu : this.testMenu,
                    columnType : "required",
                    control : "text-input",
                    tooltipType : "custom",
                    toolTip : toolTipContent.columnHeaderToolTips("PartNumber")
                },
                {
                    validationAction : [],
                    columnName : "ProductGroup",
                    columnLabel : "Product Group",
                    columnMenu : this.testMenu,
                    columnType : "standard",
                    control : "text-input",
                    tooltipType : "custom",
                    toolTip : toolTipContent.columnHeaderToolTips("ProductGroup")
                },
                {
                    validationAction : [],
                    columnName : "ProductName",
                    columnLabel : "Product Name",
                    columnMenu : this.testMenu,
                    columnType : "standard",
                    control : "text-input",
                    tooltipType : "custom",
                    toolTip : toolTipContent.columnHeaderToolTips("ProductName")
                },
                {
                    validationAction : [],
                    columnName : "Class",
                    columnLabel : "Class",
                    columnMenu : this.testMenu,
                    columnType : "standard",
                    control : "text-input",
                    tooltipType : "custom",
                    toolTip : toolTipContent.columnHeaderToolTips("Class")
                },
                {
                    validationAction : [],
                    columnName : "ProductType",
                    columnLabel : "Product Type",
                    columnMenu : this.testMenu,
                    columnType : "standard",
                    control : "text-input",
                    tooltipType : "basic",
                    toolTip : ""
                },
                {
                    validationAction : [],
                    columnName : "OverallDimensions",
                    columnLabel : "Overall Dimensions",
                    columnMenu : this.testMenu,
                    columnType : "user-gen",
                    control : "text-input",
                    tooltipType : "basic",
                    toolTip : ""
                },
                {
                    validationAction : [],
                    columnName : "OverallDepth",
                    columnLabel : "Overall Depth",
                    columnMenu : this.testMenu,
                    columnType : "user-gen",
                    control : "text-input",
                    tooltipType : "basic",
                    toolTip : ""
                },
                {
                    validationAction : [],
                    columnName : "OverallHeight",
                    columnLabel : "Overall Height",
                    columnMenu : this.testMenu,
                    columnType : "user-gen",
                    control : "text-input",
                    tooltipType : "basic",
                    toolTip : ""
                },
                {
                    validationAction : [],
                    columnName : "OverallLength",
                    columnLabel : "Overall Length",
                    columnMenu : this.testMenu,
                    columnType : "user-gen",
                    control : "text-input",
                    tooltipType : "basic",
                    toolTip : ""
                },
                {
                    validationAction : [],
                    columnName : "Seat",
                    columnLabel : "Seat",
                    columnMenu : this.testMenu,
                    columnType : "user-gen",
                    control : "text-input",
                    tooltipType : "basic",
                    toolTip : ""
                },
                {
                    validationAction : [],
                    columnName : "ArmHeightFloorToArm",
                    columnLabel : "Arm Height - Floor to Arm",
                    columnMenu : this.testMenu,
                    columnType : "user-gen",
                    control : "text-input",
                    tooltipType : "basic",
                    toolTip : ""
                },
                {
                    validationAction : [],
                    columnName : "BackHeightSeatToTopOfBack",
                    columnLabel : "Back Height - Seat to Top of Back",
                    columnMenu : this.testMenu,
                    columnType : "user-gen",
                    control : "text-input",
                    tooltipType : "basic",
                    toolTip : ""
                },
                {
                    validationAction : [],
                    columnName : "FullyReclinedDepthFrontToBack",
                    columnLabel : "Fully Reclined Depth - Front to Back",
                    columnMenu : this.testMenu,
                    columnType : "user-gen",
                    control : "text-input",
                    tooltipType : "basic",
                    toolTip : ""
                },
                {
                    validationAction : [],
                    columnName : "LegHeightTopToBottom",
                    columnLabel : "Leg Height - Top to Bottom",
                    columnMenu : this.testMenu,
                    columnType : "user-gen",
                    control : "text-input",
                    tooltipType : "basic",
                    toolTip : ""
                },
                {
                    validationAction : [],
                    columnName : "ClearanceFromFloorToBottomOfSofa",
                    columnLabel : "Clearance from Floor to Bottom of Sofa",
                    columnMenu : this.testMenu,
                    columnType : "user-gen",
                    control : "text-input",
                    tooltipType : "basic",
                    toolTip : ""
                }
            ]
        )
    }
}