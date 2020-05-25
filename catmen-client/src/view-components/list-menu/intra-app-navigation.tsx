import * as React from "react";
import {ReactElement} from "react";
import {iNavItem} from "../_common/component-data-types";
import AppButton from "../button/app-button";
import {win} from "../../index";
import {ToolTip} from "../heru-tool-tip/tool-tip";


export type menuFormatDataType = "fly-out" | "slide-in" | "drop-down";
export type menuHelpStyleDataType = "panel" | "searchable" | "no-help";



interface iPROPS {
    navElements : iNavItem[];
    menuHelpStyle : any;
}

interface iSTATE{
    infoPanelIndex : number;
}

export class Navigation extends React.Component<iPROPS, iSTATE> {
    constructor(props:iPROPS) {
        super(props);
        this.state ={
            infoPanelIndex : 1
        }
    }


    hoverActions :any[] = [];
    sortNavItems() : iNavItem[][]{
        let groupedItems : iNavItem[][] = [];
        groupedItems.push([this.props.navElements[0]]);

        //loop over each element and compare its group name to  , if not we'll create a new group
        i: for(let i=1; i < this.props.navElements.length; i++){
            //we'll start at one since we already pushed the first at zero
           h: for(let h=0; h < groupedItems.length; h++ ){
                if( groupedItems[h][0].presentationGroup === this.props.navElements[i].presentationGroup ){
                    groupedItems[h].push(this.props.navElements[i]);
                }else{
                    //if we are at the end of both arrays then let's create a new group
                    if(h === groupedItems.length-1){
                        groupedItems.push([this.props.navElements[i]]);
                        continue i;
                    }
                }
            }
        }

        return groupedItems;
    }

    generateMenuBasedOnType(){
        switch (this.props.menuHelpStyle) {
            case "panel":

                break;
            case "searchable":

                break;
            case "no-help":

                break;

            default:

        }
    }

    hoverInfoPanel(index:number){
        this.setState({infoPanelIndex : index});
        console.log(this.state.infoPanelIndex);
    }

    createElements(){
        let itemGroups = this.sortNavItems();
        console.log("grouped items: ", itemGroups);
        let constructedMenuItems : ReactElement[] = [];
        //let's keep track of all of the
        let counter : number =0;

        //if the hovered index matches the current on-render index we'll store the info panel here
        let infoPanel : any;

        for(let i=0; i < itemGroups.length; i++ ){
            //these are the actual buttons
            let subMenuItems : ReactElement[] = [];

            //create an array of buttons that are part of that menu group
            for(let j=0; j < itemGroups[i].length; j++){
                counter++;
                let count = counter;
                console.log("index comparison",this.state.infoPanelIndex, count);
                if(count === this.state.infoPanelIndex){
                    if(itemGroups[i][j].infoPanel !== undefined){
                        infoPanel = itemGroups[i][j].infoPanel;
                    }
                }

                let newButton : ReactElement = (
                    <AppButton
                        tooltip={<p>menu tool tip</p> }
                        hoverActions={[()=>this.hoverInfoPanel(count)]} key={`${i+j}${i}${j}`}
                        navPath={itemGroups[i][j].navPath}
                        buttonType="menu-link" buttonLabel={itemGroups[i][j].label}
                    /> );
                subMenuItems.push(newButton);
            }

            //insert the created buttons into a group container
            let subMenuGroup : ReactElement = (<div key={`${i}${i}`} className="menu-sub-group">{subMenuItems}</div>);
            constructedMenuItems.push(subMenuGroup);
        }

        //assemble those groups and put them in another main menu container
        let finalMenu : ReactElement = (
            <div key={0} className="menu-container">
               <div className="menu-main">{constructedMenuItems}</div>
               <div className="info-panel">{infoPanel}</div>
            </div>);
        return finalMenu;
    }



    render(){
        return (<>
            {this.createElements()}
        </>);
    }
}