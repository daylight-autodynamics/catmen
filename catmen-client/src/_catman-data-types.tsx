import * as React from "react";
import {ReactElement} from "react";
import {validationActions} from "./data-components/data-manager/data-manager";


export type iDataGridItem = {
    value : string
    columnName : string
    attrType : "user-gen" | "standard" | "hidden" | "required";
    class : "default" | string;
    validationValue : string;
}

export type iComponentType = "drop-down" | "text-input" | "yes-no"

// Generic Column Head Definition
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

// Generic Column Head Definition
export type iColumnHeader ={
    attributeName : string;
    component : iComponentType;
    acceptableInputs : string;
    weighting : number | "required";
    attributeGroup : string;
}

export interface iNavItem{
    label : string;
    navPath : string;
    presentationGroup : string;
    buttonType : any;
    iconRight?:React.ReactElement;
    iconLeft?:React.ReactElement;
    infoPanel? : React.ReactElement;
    tooltipHoverAction? : any;
}

export type graphicSize = {
    height : string,
    width : string
}