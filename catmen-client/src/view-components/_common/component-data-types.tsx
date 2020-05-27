//TODO come back and fix these any types
import * as React from "react";

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