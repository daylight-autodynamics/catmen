import * as React from "react";
import {ReactElement} from "react";
import StickyThing from "../../../view-components/sticky-panel/sticky-panel";
import AppButton from "../../../view-components/button/app-button";
import {ToolTip} from "../../../view-components/heru-tool-tip/tool-tip";
import {CatmanIcon} from "../../../svg/icons/icons";
import {ContentToolTips, toolTipContent} from "../tool-tip-content/content-tool-tips";
import {ToolTipContent} from "../../../view-components/heru-tool-tip/tool-tip-content";
import {ModalView} from "../../../view-components/modal/modal";
import {UploadWizard} from "../../_catman-configuration/upload-wizard";

interface iPROPS{
    sectionTitle? : string;
    navigationElement? : ReactElement;
    ribbonElement? : ReactElement;
    addItemAction : Function;
}

interface iSTATE{
    menuIsOpen : boolean;
    currentModal : "none" | "add-products" | "add-product-variant";
    modalOpen : false;
}

export class MainHeaderArea extends React.Component<iPROPS, iSTATE>{
    constructor(props:iPROPS) {
        super(props);
        this.state = {
            menuIsOpen : false,
            modalOpen : false,
            currentModal : "none"
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
                        buttonLabel=""
                        OnClick={()=>this.manageModals("add-products")}
                        tooltipType="custom"
                        tooltip={toolTipContent.addProducts()}
                        toolTipTimeOutInMS={10000}
                        iconCenter={
                            <CatmanIcon
                                iconName="icon-add"
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
        this.setState({currentModal : "none"})
        console.log("close modal try", this.state.currentModal)
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
              </header>
          </>
        );

        return constructedHeader;
    }
}

export default MainHeaderArea;