import * as React from "react";
import {ReactElement} from "react";
import StickyThing from "../../../view-components/sticky-panel/sticky-panel";
import AppButton from "../../../view-components/button/app-button";
import {ToolTip} from "../../../view-components/heru-tool-tip/tool-tip";
import {CatmanIcon} from "../../../svg/icons/icons";

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
                    <StickyThing enterFromThisSide="left" lastResortClasses={""} animateIn={true} heightIncludeUnits="90vh" widthIncludeUnits={"auto"} stickyOpen={true} bgColor={"white"} doAnimation={true}>
                        {this.props.navigationElement}
                    </StickyThing>
                    <AppButton
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
                <AppButton
                    buttonType={"from-left"}
                    buttonLabel="catalog manager"
                    tooltip={<p>This is a bla test tool tip</p>}
                    OnClick={()=>this.handleMenu()}
                    toolTipTimeOutInMS={10000}
                    iconRight={<CatmanIcon iconName="down-arrow" classes="ui-icon"/>}
                />
            )
            }else{
            return(<div className="zzz"></div>);
        }
    }


    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let constructedHeader = (
          <>
              <header className="header-area">
                  {this.navButton()}
                  <div className="main-ribbon"></div>
                  {this.navMenu()}
              </header>
          </>
        );

        return constructedHeader;
    }
}

export default MainHeaderArea;