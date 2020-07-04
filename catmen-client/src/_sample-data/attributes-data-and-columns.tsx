import * as React from "react";
import {iColumn} from "./product-columns";
import {iDataGridItem} from "../_catman-data-types";

export let dataAttributeColumns : iColumn[] = [

    {
        validationAction : [],
        columnName : "uniqueID",
        columnLabel : " ",
        columnMenu : <></>,
        columnType : "standard",
        control : "text-input",
        tooltipType : "custom",
        toolTip : "this is non-editable unique id"
    },
    {
        validationAction : [],
        columnName : "attributeName",
        columnLabel : "Attribute Name",
        columnMenu : <></>,
        columnType : "standard",
        control : "text-input",
        tooltipType : "custom",
        toolTip : "this is your internal name for the attribute/column-head"
    },
    {
        validationAction : [],
        columnName : "columnLabel",
        columnLabel : "Column Label",
        columnMenu : <></>,
        columnType : "standard",
        control : "text-input",
        tooltipType : "custom",
        toolTip : "this is your internal name for the attribute/column-head"
    },
    {
        validationAction : [],
        columnName : "acceptableInputs",
        columnLabel : "Acceptable Inputs",
        columnMenu : <></>,
        columnType : "standard",
        control : "text-input",
        tooltipType : "custom",
        toolTip : "this is your internal name for the attribute/column-head"
    },
    {
        validationAction : [],
        columnName : "toolTip",
        columnLabel : "Tool Tip",
        columnMenu : <></>,
        columnType : "standard",
        control : "text-input",
        tooltipType : "custom",
        toolTip : "this is your internal name for the attribute/column-head"
    },
    {
        validationAction : [],
        columnName : "classesAssignedTo",
        columnLabel : "Classes Assigned To",
        columnMenu : <></>,
        columnType : "standard",
        control : "text-input",
        tooltipType : "custom",
        toolTip : "When you choose a class for your product, these attributes/column-heads will automatically be loaded"
    },

];

export let standardAttributes : iDataGridItem[][]=
    [
        [
            { validationValue:"",
                columnName: "uniqueID",
                value: "100001",
                attrType: "hidden",
                class: "default"
            },
            //REFERENCE IMAGE
            {   validationValue:"",
                value: "ReferenceImage",
                columnName: "attributeName",
                attrType: "standard",
                class: "default"
            },
            {   validationValue:"",
                value: "Reference Image",
                columnName: "columnLabel",
                attrType: "standard",
                class: "default"
            },
            {   validationValue:"",
                value: "",
                columnName: "acceptableInputs",
                attrType: "standard",
                class: "default"
            },
            {   validationValue:"",
                value: "This is the summary of the media in your product",
                columnName: "toolTip",
                attrType: "standard",
                class: "default"
            },
            {   validationValue:"",
                value: "all",
                columnName: "classesAssignedTo",
                attrType: "standard",
                class: "default"
            },
        ],
        // [
        //     { validationValue:"", columnName: "uniqueID", value: "100001", attrType: "hidden", class: "default"},
        //     //PART NUMBER
        //     {   validationValue:"",
        //         value: "PartNumber",
        //         columnName: "attributeName",
        //         attrType: "standard",
        //         class: "default"
        //     },
        //     {   validationValue:"",
        //         value: "Part Number",
        //         columnName: "columnLabel",
        //         attrType: "standard",
        //         class: "default"
        //     },
        //     {   validationValue:"",
        //         value: "",
        //         columnName: "acceptableInputs",
        //         attrType: "standard",
        //         class: "default"
        //     },
        //     {   validationValue:"",
        //         value: "This should be your unique identifier, preferably your descriptive part number",
        //         columnName: "toolTip",
        //         attrType: "standard",
        //         class: "default"
        //     },
        //     {   validationValue:"",
        //         value: "all",
        //         columnName: "classesAssignedTo",
        //         attrType: "standard",
        //         class: "default"
        //     },
        // ],
        // [
        //     { validationValue:"", columnName: "uniqueID", value: "100001", attrType: "hidden", class: "default"},
        //     //PRODUCT GROUP
        //     {   validationValue:"",
        //         value: "ProductGroup",
        //         columnName: "attributeName",
        //         attrType: "standard",
        //         class: "default"
        //     },
        //     {   validationValue:"",
        //         value: "Product Group",
        //         columnName: "columnLabel",
        //         attrType: "standard",
        //         class: "default"
        //     },
        //     {   validationValue:"",
        //         value: "",
        //         columnName: "acceptableInputs",
        //         attrType: "standard",
        //         class: "default"
        //     },
        //     {   validationValue:"",
        //         value: "Define associated products for describing variant groups or options groups",
        //         columnName: "toolTip",
        //         attrType: "standard",
        //         class: "default"
        //     },
        //     {   validationValue:"",
        //         value: "all",
        //         columnName: "classesAssignedTo",
        //         attrType: "standard",
        //         class: "default"
        //     },
        // ],
        // [
        //     { validationValue:"", columnName: "uniqueID", value: "100001", attrType: "hidden", class: "default"},
        //     //PRODUCT NAME
        //     {   validationValue:"",
        //         value: "ProductName",
        //         columnName: "attributeName",
        //         attrType: "standard",
        //         class: "default"
        //     },
        //     {   validationValue:"",
        //         value: "Product Name",
        //         columnName: "columnLabel",
        //         attrType: "standard",
        //         class: "default"
        //     },
        //     {   validationValue:"",
        //         value: "",
        //         columnName: "acceptableInputs",
        //         attrType: "standard",
        //         class: "default"
        //     },
        //     {   validationValue:"",
        //         value: "Define associated products for describing variant groups or options groups",
        //         columnName: "toolTip",
        //         attrType: "standard",
        //         class: "default"
        //     },
        //     {   validationValue:"",
        //         value: "all",
        //         columnName: "classesAssignedTo",
        //         attrType: "standard",
        //         class: "default"
        //     },
        // ]
    ];

export let dataAttributesLibrary : iDataGridItem[][] =
    [
        [
            { validationValue:"",
                columnName: "uniqueID",
                value: "100001",
                attrType: "hidden",
                class: "default"
            },
            //REFERENCE IMAGE
            {   validationValue:"",
                value: "ReferenceImage",
                columnName: "attributeName",
                attrType: "standard",
                class: "default"
            },
            {   validationValue:"",
                value: "Reference Image",
                columnName: "columnLabel",
                attrType: "standard",
                class: "default"
            },
            {   validationValue:"",
                value: "",
                columnName: "acceptableInputs",
                attrType: "standard",
                class: "default"
            },
            {   validationValue:"",
                value: "This is the summary of the media in your product",
                columnName: "toolTip",
                attrType: "standard",
                class: "default"
            },
            {   validationValue:"",
                value: "all",
                columnName: "classesAssignedTo",
                attrType: "standard",
                class: "default"
            },
        ]
    ];


