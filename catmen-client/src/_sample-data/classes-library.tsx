    import {iColumn, iDataGridItem} from "../_catman-data-types";
import * as React from "react";

export let classesLibraryColumns : iColumn[] = [
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
        columnName : "className",
        columnLabel : "Class Name",
        columnMenu : <></>,
        columnType : "standard",
        control : "text-input",
        tooltipType : "custom",
        toolTip : "This is a collection of attributes/column-head "
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

];

export let classesLibrary : iDataGridItem[][] = [

    [
        { validationValue:"",
            columnName: "uniqueID",
            value: "100001",
            attrType: "hidden",
            class: "default"
        },

        {   validationValue:"",
            value: "Group Name",
            columnName: "groupName",
            attrType: "standard",
            class: "default"
        },
        {   validationValue:"",
            value: "Attributes In Group",
            columnName: "columnLabel",
            attrType: "standard",
            class: "default"
        }
    ],
];