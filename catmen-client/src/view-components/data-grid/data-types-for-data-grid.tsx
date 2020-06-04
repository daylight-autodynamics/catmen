import * as React from "react";
import {ReactElement} from "react";


export type iDataGridItem = {
    value : string
    column : string
    attrType : "user-gen" | "standard" | "hidden"
    class : "default" | string
}

export type iComponentType = "drop-down" | "text-input" | "ye-no"


export type iColumnHeader ={
    attributeName : string;
    component : iComponentType;
    acceptableInputs : string;
    weighting : number | "required";
    attributeGroup : string;

}