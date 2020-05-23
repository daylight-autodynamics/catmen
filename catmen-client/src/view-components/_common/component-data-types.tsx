//TODO come back and fix these any types
import * as React from "react";

export interface iNavItem{
    label : string;
    navPath : string;
    presentationGroup : string;
    buttonType : any;
    infoPanel? : React.ReactElement;
    tooltipHoverAction? : any;
}