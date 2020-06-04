import * as React from "react";
import {ReactElement} from "react";


export interface iToggleItem{
    elements : ReactElement[]
}

interface iPROPS {
    message: string;
}

interface iSTATE{
    menuType : "nav"
}

export interface iToggleMenuItem{
    element : ReactElement;
    label : string;
    toggleItemType : "nav" | "sta"
}

export class ToggleMenu extends React.Component<iPROPS, iSTATE>{

    createButtonBar(){

    }

    render(){
        return(
            <>


            </>
        );
    }
}