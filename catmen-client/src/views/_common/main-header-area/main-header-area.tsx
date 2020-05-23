import * as React from "react";
import {ReactElement} from "react";
import StickyThing from "../../../view-components/sticky-panel/sticky-panel";
import AppButton from "../../../view-components/button/app-button";

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
                    <AppButton buttonType="from-left"  functionality={()=>this.handleMenu}/>
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


    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let constructedHeader = (
          <header>
              <button className="main-nav" onClick={()=>this.handleMenu()}>Menu</button>
              <div className="main-ribbon"></div>
              {this.navMenu()}
              <h1>{this.props.sectionTitle}</h1>

          </header>
        );

        return constructedHeader;
    }
}

export default MainHeaderArea;