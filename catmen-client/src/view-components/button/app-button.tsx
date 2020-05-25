import * as React from "react";
import {Link} from "react-router-dom";
import {ToolTip} from "../heru-tool-tip/tool-tip";
import {ReactElement, Ref, RefObject} from "react";


type AppButtonType = "from-left" | "main-action" | "secondary-action" | "menu-link";

interface iPROPS{
    buttonType: AppButtonType;
    buttonLabel? : string;
    OnClick? : any;
    icon? : any;
    navPath? : any;
    index? : number;
    param? : string;
    hoverActions? : any[];
    tooltip? : ReactElement;
}

interface iSTATE{
    isHovered : boolean
}

export class AppButton extends React.Component<iPROPS, iSTATE>{
constructor(props:iPROPS) {
    super(props);
    this.state = {
        isHovered : false
    };
    this.hoverActions = this.props.hoverActions;
}
    hoverActions :any[] | undefined = [];
    btnRef:RefObject<HTMLButtonElement> = React.createRef<HTMLButtonElement>();
    linkRef : RefObject<HTMLAnchorElement> = React.createRef<HTMLAnchorElement>();
    toolTipRef = React.createRef<ToolTip>();


    doHoverActions(){
      if(this.hoverActions !== undefined){
          for(let i=0; i < this.hoverActions.length; i++){
              if(this.hoverActions[i] !== undefined){
                  this.hoverActions[i]();
              }
          }
      }
      this.setState({isHovered : true});

      //GO TO TOOL TIP:
      //when hovering on the button, we'll start the hovering actions in the tool tip
      if(this.toolTipRef.current != null){
          console.log("do action hover");
          this.toolTipRef.current.startHover();
      }
    };
    quickHoverTest(){
        console.log("do action hover");
        if(this.toolTipRef.current != null){
            console.log("do action hover");
            this.toolTipRef.current.quickTestHover();
        }
    }

    //this will generate the tooltip, ref this wherever you need one
    handleToolTip(){
        if(this.state.isHovered === false){
            return <ToolTip ref={this.toolTipRef} timeoutInMS={5000}/>;
        }else{
            return (
                      <ToolTip
                          ref={this.toolTipRef}
                          btnReference={this.btnRef}
                          tooltipType="custom"
                          toolTipCustomElement={this.props.tooltip}
                          timeoutInMS={5000}
                      />

            )
        }
    }

    getButton(){
        switch (this.props.buttonType) {
            case "main-action":
                return(
                    <>
                        {this.handleToolTip()}
                        <button
                            ref={this.btnRef}
                            onClick={()=>this.props.OnClick()}
                            onMouseOver={()=>this.doHoverActions()}
                            className="btn-main-action"
                        >
                            {this.props.buttonLabel}
                        </button>
                    </>
                );

            case "from-left":

                return(
                    <>
                        {this.handleToolTip()}
                        <button
                            ref={this.btnRef}
                            onClick={()=>this.props.OnClick()}

                            onMouseOver={()=>this.doHoverActions()}
                            className="btn-from-left"
                        >
                            {this.props.buttonLabel}
                        </button>
                    </>
                );


            case "menu-link":
                if(this.props.navPath !== undefined ){
                    return(
                        <>
                            {this.handleToolTip()}
                            <Link ref={this.linkRef}
                                  onMouseOver={()=>this.doHoverActions()}
                                  to={this.props.navPath}
                                  className="btn-main-action"
                            >
                                {this.props.buttonLabel}
                            </Link>
                        </>
                    );
                }else {
                    return(
                        <>
                            {this.handleToolTip()}
                            <button
                                onMouseOver={()=>this.doHoverActions()}
                                className="btn-main-action"
                            >
                                {this.props.buttonLabel}
                            </button>
                        </>
                    );
                }

            case "secondary-action":
                return(
                    <>
                        {this.handleToolTip()}
                        <button
                            onMouseOver={()=>this.doHoverActions()}
                            className="btn-secondary"
                        >
                            {this.props.buttonLabel}
                        </button>
                    </>
                );

            default:
                return(
                    <>
                        <button
                            onMouseOver={()=>this.doHoverActions()}
                            className="btn-default"
                        >
                            Default Button
                        </button>
                    </>
                )
        }
    }
    render() {


        return (
            <>
                {this.getButton()}
            </>
        );
    }
}

export default AppButton;