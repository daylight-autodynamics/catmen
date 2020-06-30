import * as React from "react";
import goBackWizard from "../../../images/SVG/illustration-wizard-go-back.svg"
import tutBulkEdit from "../../../images/SVG/illustration-bulk-edit.svg"
import tutEditWithDrawer from "../../../images/SVG/illustration-edit-with-drawer.svg"
import tutFooter from "../../../images/SVG/illustration-footer-menu.svg"
import {RefObject} from "react";
import {StandardTextInput} from "../../../view-components/text-input/standard-text-input";

interface iPROPS{

}

type productGroupNavDT = "closed" | "start" | "staging-area" | "upload-3";

interface iSTATE{
    wizardPanel : productGroupNavDT
}

export class TutorialWizard extends React.Component<iPROPS, iSTATE>{

    constructor(props:iPROPS) {
        super(props);
        this.state={
            wizardPanel : "start"
        }
    }

    groupNameValue : string = "";

    groupNameRef:RefObject<StandardTextInput> = React.createRef<StandardTextInput>();



    wizardNavigation(panelName : productGroupNavDT){
        this.setState({wizardPanel : panelName})
    }

    element(){
        switch (this.state.wizardPanel) {
            case "closed":
                return(<></>);
            case "start":
                return(
                    <div className="wizard-content">

                        <div className={"interaction-area"}>
                            <div className="tutorial-group">
                                <div className="tutorial-chunk">
                                    <img className="tooltip-illustration" src={tutEditWithDrawer}/>
                                    <p>Select a cell in the grid, edit it with corresponding controls in the drawer that pops up</p>

                                </div>

                                <div className="tutorial-chunk">
                                    <img className="tooltip-illustration" src={tutBulkEdit}/>
                                    <p>Click and Drag to multi-select and Bulk Edit</p>
                                </div>
                                <div className="tutorial-chunk">
                                    <img className="tooltip-illustration" src={tutFooter}/>
                                    <p>Use checkboxes to select rows and get an action menu to apply to those selected rows.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                );

        }
    }

    render(){
        return(this.element())
    }
}

