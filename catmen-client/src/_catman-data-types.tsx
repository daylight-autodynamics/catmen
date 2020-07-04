import * as React from "react";
import {ReactElement} from "react";


export type iDataGridItem = {
    value : string
    columnName : string
    attrType : "user-gen" | "standard" | "hidden" | "required";
    class : "default" | string;
    validationValue : string;
}

export type iComponentType = "drop-down" | "text-input" | "ye-no"


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