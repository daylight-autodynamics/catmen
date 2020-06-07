import {ReactElement} from "react";
import {toolTipType} from "../view-components/heru-tool-tip/tool-tip";


interface iAttributeService{
    listOfDesiredAttributes : [];
}

interface AttributeItem {
    attributeName : string;
    toolTip : string | ReactElement;
    toolTipType : toolTipType;
    editingComponent : "pick-list" |
                        "searchable-picklist" |
                        "text-input" |
                        "slider" |
                        "checkbox" |
                        "yes-no"
}

export class AttributesService implements iAttributeService{
    listOfDesiredAttributes : [];
    constructor(listOfDesiredAttributes : []) {
        this.listOfDesiredAttributes = listOfDesiredAttributes;
    }


    getAttributes(){

    }

}