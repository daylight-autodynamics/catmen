import {ReactElement} from "react";
import {toolTipType} from "../view-components/heru-tool-tip/tool-tip";
import {iDataGridItem} from "../_catman-data-types";


interface iAttributeService{
    listOfDesiredAttributes : AttributeItem[];
}

interface AttributeItem {
    attributeName : string;
    toolTip : string | ReactElement;
    toolTipType : toolTipType;
    attrType: "hidden" | "standard" | "required";
    editingComponent : "pick-list" |
                        "searchable-picklist" |
                        "text-input" |
                        "slider" |
                        "checkbox" |
                        "yes-no" |
                        "read-only";
}

interface iAttributesFromProducts{
    productDataSet : iDataGridItem[][]
}

export class AttributesFromProductData implements iAttributesFromProducts{
    productDataSet : iDataGridItem[][];
    constructor(productsData : iDataGridItem[][]) {
        this.productDataSet = productsData;
    }

    getAttributesListFromProducts(){
        console.log(this.productDataSet)
    }
}

export class AttributesService implements iAttributeService{
    listOfDesiredAttributes : AttributeItem[];
    constructor(listOfDesiredAttributes : AttributeItem[]) {
        this.listOfDesiredAttributes = listOfDesiredAttributes;
    }

    private _attributes : AttributeItem[] = [
        {
            attributeName : "uniqueID",
            attrType: "hidden",
            toolTip : "Auto generated identifier",
            toolTipType : "standard",
            editingComponent : "read-only"
        },
        {
            attributeName : "PartNumber",
            attrType: "required",
            toolTip : "This should be the part number you use",
            toolTipType : "standard",
            editingComponent : "text-input"
        },
        {
            attributeName : "Class",
            attrType: "required",
            toolTip : "This should be the part number you use",
            toolTipType : "standard",
            editingComponent : "text-input"
        },
        {
            attributeName : "ProductType",
            attrType: "standard",
            toolTip : "This should be the part number you use",
            toolTipType : "standard",
            editingComponent : "text-input"
        },
        {
            attributeName : "OverallDimensions",
            attrType: "standard",
            toolTip : " ",
            toolTipType : "standard",
            editingComponent : "text-input"
        },
        {
            attributeName : "OverallDimensions",
            attrType: "standard",
            toolTip : " ",
            toolTipType : "standard",
            editingComponent : "text-input"
        }
    ];

    get attributes() : AttributeItem[]{
        return this._attributes
    }

    set attributes( attributesNew ){
        if(attributesNew.length <= 0 || attributesNew == null || attributesNew || undefined ){
            throw new Error(" ensure the new attributes has at least 1 new attributes")
        }
        this._attributes = attributesNew;
    }

    addAttribute(attributesNew : AttributeItem[]){
        if(attributesNew.length > 0 && attributesNew !== null && attributesNew !== undefined ){
            this._attributes.push( ...attributesNew);
        }else{
            throw new Error( "new attributes must be an array of at least one attribute objects");
        }
    }


}