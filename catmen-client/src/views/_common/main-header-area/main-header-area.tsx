import * as React from "react";
import {ReactElement} from "react";
import StickyThing from "../../../view-components/sticky-panel/sticky-panel";
import AppButton from "../../../view-components/button/app-button";
import {ToolTip} from "../../../view-components/heru-tool-tip/tool-tip";
import {CatmanIcon} from "../../../svg/icons/icons";
import {ContentToolTips, toolTipContent} from "../../tool-tip-content/content-tool-tips";
import {ToolTipContent} from "../../../view-components/heru-tool-tip/tool-tip-content";
import {ModalView} from "../../../view-components/modal/modal";
import {UploadWizard} from "../../wizards/upload-wizard/upload-wizard";
import {TutorialWizard} from "../../wizards/tutorial-wizard/tutorial-wizard";

interface iPROPS{
    sectionTitle? : string;
    navigationElement? : ReactElement;
    ribbonElement? : ReactElement;
    addItemAction : Function;
    mainButtonLabel : string;
}

interface iSTATE{
    menuIsOpen : boolean;
    currentModal : "none" | "add-products" | "add-product-variant";
    modalOpen : boolean;
    tutorialModal : boolean
}

export class MainHeaderArea extends React.Component<iPROPS, iSTATE>{
    constructor(props:iPROPS) {
        super(props);
        this.state = {
            menuIsOpen : false,
            modalOpen : false,
            currentModal : "none",
            tutorialModal : true
        }
    }

    navMenu(){
        if(this.state.menuIsOpen === true){
            return (
                <>
                    <StickyThing
                        enterFromThisSide="left"
                        lastResortClasses={"catman-main-nav"}
                        animateIn={true}
                        heightIncludeUnits="90vh"
                        widthIncludeUnits={"auto"}
                        stickyOpen={true}
                        bgColor={""}
                        doAnimation={true}>
                        {this.props.navigationElement}
                    </StickyThing>
                    <AppButton
                        tooltipType="none"
                        buttonType="from-left"
                    />
                    <div onClick={()=>this.handleMenu()} className="overlay"/>
                </>
            );
        }else{
            return (<></>);
        }
    }

    handleMenu(){
        let inverse : boolean = !this.state.menuIsOpen;
        this.setState({menuIsOpen : inverse})
    }

    ribbonMenu(){

    }

    navArea(){
            return (
                <div className="main-header-actions">
                    <AppButton
                        buttonType={"from-left"}
                        buttonLabel="catalog manager"
                        OnClick={()=>this.handleMenu()}
                        tooltipType="custom"
                        tooltip={toolTipContent.mainNav()}
                        toolTipTimeOutInMS={10000}
                        iconRight={
                            <CatmanIcon
                                iconName="down-arrow"
                                classes="ui-icon "
                                height="100%"
                                width="100%"
                            />
                        }
                    />
                    <AppButton
                        buttonType={"main-action"}
                        classes={"main-add-btn"}
                        buttonLabel={this.props.mainButtonLabel}
                        OnClick={()=>this.manageModals("add-products")}
                        tooltipType="custom"
                        tooltip={toolTipContent.addProducts()}
                        toolTipTimeOutInMS={10000}
                        iconLeft={
                            <CatmanIcon
                                iconName="icon-add-invert"
                                classes=" main-add"
                                height="100%"
                                width="100%"
                            />
                        }
                    />
                </div>
            )
    }

    closeModal(){
        this.setState({currentModal : "none"});
        console.log("close modal try", this.state.currentModal)
    }

    closeTutorialModal(){
        this.setState({tutorialModal : false});
        toolTipContent.gridDragTutorial++;
    }

    tutorialModal(){
        if(this.state.tutorialModal === true && toolTipContent.gridDragTutorial < 1){
            return(
                <ModalView
                    modalTitle={"You Can Edit This Grid!"}
                    classes="upload-modal-wizard"
                    closeModalFunc={()=>this.closeTutorialModal()}
                >
                    <TutorialWizard  />
                </ModalView>
            );
        }
    }

    getModals(){
            switch(this.state.currentModal){
                case "add-products":
                    console.log("MODAL");
                    return(
                        <ModalView
                            modalTitle={"Automatically Add/Update Products"}
                            classes="upload-modal-wizard"
                            closeModalFunc={()=>this.closeModal()}
                        >
                            <UploadWizard addAction={()=>this.props.addItemAction}/>
                        </ModalView> );
                case "add-product-variant":
                    return(<><p>Product Variant</p></>);
                case "none":
                    return(<></>);
                default:
                    return(<h1>MODAL zzz</h1>)
            }

        return (<></>)

    }

    manageModals(modalName : string){
        console.log(modalName);
        switch(modalName){
            case "add-products":
                console.log("clicked", modalName);
                this.setState({currentModal : "add-products"});
                break;
            case "none":
                this.setState({currentModal : "none"});
                break;
        }
        console.log(this.state)
    }


    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let constructedHeader = (
          <>
              <header className="header-area">
                  <div className="header-item">
                      {this.navArea()}
                  </div>
                  <div className="main-ribbon header-item">
                      {this.props.ribbonElement}
                  </div>
                  <div className="header-item">
                      {this.navMenu()}
                  </div>
                  {this.getModals()}
                  {this.tutorialModal()}
              </header>
          </>
        );

        return constructedHeader;
    }
}

export default MainHeaderArea;