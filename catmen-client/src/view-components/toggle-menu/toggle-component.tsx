import * as React from "react";
import {ReactElement} from "react";
import {CatmanIcon} from "../../svg/icons/icons";
import AppButton from "../button/app-button";


export interface iToggleItem{
    elements : ReactElement[]
}

interface iPROPS {
    buttons: iToggleMenuItem[];
    containerClasses : string;
}

interface iSTATE{
    menuType : "nav";
    currentActive : number;
}

export interface iToggleMenuItem{
    element : ReactElement;
    label : string;
    toggleItemType : "nav" | "static";
    function? : Function;
    icon? : ReactElement;
    classes? : string;
    toolTip : ReactElement;
}

export class ToggleMenu extends React.Component<iPROPS, iSTATE>{
    constructor(props : iPROPS) {
        super(props);
        this.state = {
            menuType : "nav",
            currentActive : 0
        }
    }

    checkActive(index : number){
        if (index === this.state.currentActive){
            return "active";
        }else {
            return "";
        }
    }

    actions(index : number){
        this.setState({currentActive : index});

        if(this.props.buttons[index].function != undefined){
            // @ts-ignore
            this.props.buttons[index].function();
        }
    }

    createButtonBar():ReactElement{
        let buttons : ReactElement[] = [];

        for(let i=0; i < this.props.buttons.length; i++){
             let newButton = (
                 <AppButton
                     OnClick={()=>this.actions(i)}
                     buttonType="transparent-bg"
                     buttonLabel={this.props.buttons[i].label}
                     tooltipType="custom"
                     tooltip={this.props.buttons[i].toolTip}
                     classes={`${this.checkActive(i)} ${this.props.buttons[i].classes}`}
                     iconCenter={this.props.buttons[i].icon}
                 />
             );
             buttons.push(newButton);
        }
        return <div className="button-bar">{buttons}</div>;
    }

    render(){
        return(
            <div className="toggle-container">
                {this.createButtonBar()}
            </div>
        );
    }
}