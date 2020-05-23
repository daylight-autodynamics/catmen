import * as React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {navSettings} from "../../views/_common/nav-settings";
import {CatalogOverviewView} from "../../views/catalog-views/catalog-overview/catalog-overview-view";
import ManageAttributesView from "../../views/app-configuration-catman-views/manage-attributes/manage-attributes-view";
import {ManageAttributeGroupsView} from "../../views/app-configuration-catman-views/manage-attribute-groups/manage-attribute-groups-view";
import {ManageAttributeMappingView} from "../../views/app-configuration-catman-views/manage-attribute-mappings/manage-attribute-mapping-view";
import ManageClassesView from "../../views/app-configuration-catman-views/manage-classes/manage-classes-view";
import {LandingPageView} from "../../views/landing-page/landing-page-view";
import {win} from "../../index";

interface iMousePos{
    x:number;
    y:number;
}

interface iWindow{

}
export class WindowLevelCapture implements iWindow{
    private mousePosition : iMousePos;
    constructor() {
        this.mousePosition = {x:0,y:0};
    }

    get mousePos(){
        return this.mousePosition;
    }

    getMousePosition(evt:MouseEvent){
        this.mousePosition = { x : evt.clientX, y : evt.clientY};
        //console.log("mouse position", evt.clientX, evt.clientY);

    }

    windowEvent(){
        window.addEventListener('mousemove',
            (evt)=>this.getMousePosition(evt) )
    }
}

interface iPROPS{
    toolTipPos : {
        x : number,
        y : number
    }
}

interface iSTATE {
    tooltipPosition : {
        x : number,
        y : number
    }
}

export class ToolTip extends React.Component<iPROPS, iSTATE>{
    constructor(props:iPROPS) {
        super(props);
        this.state ={
            tooltipPosition : {x:0, y:0}
        }
    }

    updateMouePos(){

        if(this.state.tooltipPosition.x !== win.mousePos.x && this.state.tooltipPosition.y !== win.mousePos.y){
            this.setState(
                {
                    tooltipPosition: {
                        x: win.mousePos.x,
                        y: win.mousePos.y
                    }
                });
            console.log("state changed");
        }

    }

    componentDidMount(): void {
        window.setInterval(()=>this.updateMouePos(), 200);

    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let constructedToolTip = (
          <>
              <div className=""></div>
                <p>{`x: ${this.state.tooltipPosition.x} y: ${this.state.tooltipPosition.y} `}</p>
          </>
        );

        return constructedToolTip;
    }

}