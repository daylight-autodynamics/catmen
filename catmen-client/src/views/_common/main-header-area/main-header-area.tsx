import * as React from "react";
import {ReactElement} from "react";
import StickyThing from "../../../view-components/sticky-panel/sticky-panel";
import AppButton from "../../../view-components/button/app-button";
import {ToolTip} from "../../../view-components/heru-tool-tip/tool-tip";
import {CatmanIcon} from "../../../svg/icons/icons";
import {ContentToolTips, toolTipContent} from "../tool-tip-content/content-tool-tips";
import {ToolTipContent} from "../../../view-components/heru-tool-tip/tool-tip-content";

interface iPROPS{
    sectionTitle? : string;
    navigationElement? : ReactElement;
    ribbonElement? : ReactElement;
}

interface iSTATE{
    menuIsOpen : boolean
}

export class MainHeaderArea extends React.Component<iPROPS, iSTATE>{
    constructor(props:iPROPS) {
        super(props);
        this.state = {
            menuIsOpen : false
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

    navButton(){
        if(this.state.menuIsOpen === false){

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
                        OnClick={()=>this.handleMenu()}
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
            }else{
            return(<div className="empty"></div>);
        }
    }


    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let constructedHeader = (
          <>
              <header className="header-area">
                  <div className="header-item">
                      {this.navButton()}
                  </div>
                  <div className="main-ribbon header-item">
                      {this.props.ribbonElement}
                  </div>
                  <div className="header-item">
                      {this.navMenu()}
                  </div>
              </header>
          </>
        );

        return constructedHeader;
    }
}

export default MainHeaderArea;