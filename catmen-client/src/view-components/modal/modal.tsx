import * as React from "react";
import {ReactElement} from "react";
import ReactDOM from "react-dom";
import {toolTipContent} from "../../views/tool-tip-content/content-tool-tips";
import {CatmanIcon} from "../../svg/icons/icons";
import AppButton from "../button/app-button";


interface iPROPS{
    closeModalFunc : Function;
    modalTitle : string;
    classes? : string;
}

interface iSTATE{

}

export class ModalView extends React.Component<iPROPS, iSTATE>{
    constructor(props : iPROPS) {
        super(props);
    }

    getHeader(){
        if(this.props.modalTitle != undefined && this.props.modalTitle != "" ){
            return (
                <header className="modal-header">
                    <h3>{this.props.modalTitle}</h3>
                </header>
            )
        }else {
            return null
        }
    }

    getModal(){
        return(
            <div className={`modal ${this.props.classes}`}>
                <div className="modal-contents">
                        {this.getHeader()}
                        <AppButton
                            buttonType={"secondary-action"}
                            buttonLabel=""
                            OnClick={()=>this.props.closeModalFunc()}
                            tooltipType="custom"
                            tooltip={toolTipContent.closeModal()}
                            toolTipTimeOutInMS={10000}
                            classes="icon-only-btn close-modal "
                            iconLeft={
                                <CatmanIcon
                                    iconName="icon-close"
                                    classes=" "
                                    height="100%"
                                    width="100%"
                                />
                            }
                        />
                    <div className="modal-page-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }

    render(){
        const root = ()=>{
            let root : any | HTMLElement = document.getElementById("root");
            if(root != null){
                return root;
            }
        };
        let modal : ReactElement = this.getModal();
        return ReactDOM.createPortal(modal, root() );
    }
}