import * as React from "react";

export interface iAttribute {
    attributeLabel : string;
    attributeID : number;
    attributeControl : any
}

export class Attributes {

    productAttributes : iAttribute[] = [
        {
        attributeLabel : "uniqueID",
        attributeID : 0,
        attributeControl : "text-input"
        },
        {
            attributeLabel : "ReferenceImage",
            attributeID : 0,
            attributeControl : "text-input"
        },
        {
            attributeLabel : "PartNumber",
            attributeID : 0,
            attributeControl : "text-input"
        },
        {
            attributeLabel : "ProductName",
            attributeID : 0,
            attributeControl : "text-input"
        },
        {
            attributeLabel : "ProductGroup",
            attributeID : 0,
            attributeControl : "text-input"
        },
        {
            attributeLabel : "Class",
            attributeID : 0,
            attributeControl : "text-input"
        }
    ];

    standardAttributes : iAttribute[] = [

    ];

    get attributesData(){
        return this.productAttributes;
    }
}