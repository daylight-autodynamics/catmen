import * as React from "react";
import {ReactElement} from "react";

export interface iColumn {
    columnLabel : string;
    columnName : string;
    columnMenu : ReactElement;
    columnType : "hidden" | "standard" | "required" | "user-gen";
    control : "text-input" | "pick-list" | "list-editor" | "read-only" | "media" | "hidden";
    toolTip : string;
}



export class Columns{
    getColumns() : iColumn[]{
        let testMenu = (<div style={{backgroundColor : "#cecece"}}>Menu</div>);

        return [
            {
                columnName : "uniqueID",
                columnLabel : " ",
                columnMenu : testMenu,
                columnType : "hidden",
                control : "hidden",
                toolTip : "this is non-editable unique id"
            },
            {
                columnName : "ReferenceImage",
                columnLabel : "Reference Image",
                columnMenu : testMenu,
                columnType : "standard",
                control : "media",
                toolTip : "this is non-editable unique id"
            },
            {
                columnName : "PartNumber",
                columnLabel : "Part Number ",
                columnMenu : testMenu,
                columnType : "required",
                control : "text-input",
                toolTip : ""
            },
            {
                columnName : "ProductGroup",
                columnLabel : "Product Group",
                columnMenu : testMenu,
                columnType : "standard",
                control : "text-input",
                toolTip : ""
            },
            {
                columnName : "Class",
                columnLabel : "Class",
                columnMenu : testMenu,
                columnType : "standard",
                control : "text-input",
                toolTip : ""
            },
            {
                columnName : "ProductType",
                columnLabel : "Product Type",
                columnMenu : testMenu,
                columnType : "standard",
                control : "text-input",
                toolTip : ""
            },
            {
                columnName : "OverallDepth",
                columnLabel : "Overall Depth",
                columnMenu : testMenu,
                columnType : "user-gen",
                control : "text-input",
                toolTip : ""
            },
            {
                columnName : "OverallHeight",
                columnLabel : "Overall Height",
                columnMenu : testMenu,
                columnType : "user-gen",
                control : "text-input",
                toolTip : ""
            },
            {
                columnName : "OverallLength",
                columnLabel : "Overall Length",
                columnMenu : testMenu,
                columnType : "user-gen",
                control : "text-input",
                toolTip : ""
            },
            {
                columnName : "Seat",
                columnLabel : "Seat",
                columnMenu : testMenu,
                columnType : "user-gen",
                control : "text-input",
                toolTip : ""
            },
            {
                columnName : "ArmHeightFloorToArm",
                columnLabel : "Arm Height - Floor to Arm",
                columnMenu : testMenu,
                columnType : "user-gen",
                control : "text-input",
                toolTip : ""
            },
            {
                columnName : "BackHeightSeatToTopOfBack",
                columnLabel : "Back Height - Seat to Top of Back",
                columnMenu : testMenu,
                columnType : "user-gen",
                control : "text-input",
                toolTip : ""
            },
            {
                columnName : "FullyReclinedDepthFrontToBack",
                columnLabel : "Fully Reclined Depth - Front to Back",
                columnMenu : testMenu,
                columnType : "user-gen",
                control : "text-input",
                toolTip : ""
            },
            {
                columnName : "LegHeightTopToBottom",
                columnLabel : "Leg Height - Top to Bottom",
                columnMenu : testMenu,
                columnType : "user-gen",
                control : "text-input",
                toolTip : ""
            },
            {
                columnName : "Clearance from Floor to Bottom of Sofa",
                columnLabel : "ClearanceFromFloorToBottomOfSofa",
                columnMenu : testMenu,
                columnType : "user-gen",
                control : "text-input",
                toolTip : ""
            },
            {
                columnName : "TestData",
                columnLabel : "Test Data",
                columnMenu : testMenu,
                columnType : "user-gen",
                control : "text-input",
                toolTip : ""
            },
            {
                columnName : "TestData2",
                columnLabel : "Test Data",
                columnMenu : testMenu,
                columnType : "user-gen",
                control : "text-input",
                toolTip : ""
            },
            {
                columnName : "TestData2",
                columnLabel : "Test Data",
                columnMenu : testMenu,
                columnType : "user-gen",
                control : "text-input",
                toolTip : ""
            }
        ]
    }
}

export let appColumns = new Columns();