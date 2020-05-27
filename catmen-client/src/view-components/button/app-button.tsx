import * as React from "react";
import {Link, NavLink} from "react-router-dom";
import {ToolTip} from "../heru-tool-tip/tool-tip";
import {ReactElement, Ref, RefObject} from "react";


type AppButtonType = "from-left"
    | "main-action"
    | "secondary-action"
    | "menu-link"
    |"nav-link";

interface iPROPS{
    buttonType: AppButtonType;
    buttonLabel? : string;
    OnClick? : any;
    iconCenter? : ReactElement;
    iconRight? : ReactElement;
    iconLeft? : ReactElement;
    navPath? : any;
    index? : number;
    param? : string;
    hoverActions? : any[];
    tooltipType : "basic" | "custom" | "none";
    tooltip? : ReactElement;
    toolTipTimeOutInMS? : number;
    classes? : string;
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
    if(this.props.toolTipTimeOutInMS != null){
        this.toolTipTimeOut = this.props.toolTipTimeOutInMS
    }else{
        this.toolTipTimeOut = 5000
    }
}
    hoverActions :any[] | undefined = [];
    btnRef:RefObject<HTMLButtonElement> = React.createRef<HTMLButtonElement>();
    linkRef : RefObject<HTMLAnchorElement> = React.createRef<HTMLAnchorElement>();
    toolTipRef = React.createRef<ToolTip>();
    //In Milliseconds
    toolTipTimeOut : number;

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
      if(this.toolTipRef.current != null && this.props.tooltipType != "none"){
          console.log("do action hover");
          this.toolTipRef.current.startHover();
      }
    };

    doHoverClear(){
        if(this.toolTipRef.current != null){
            console.log("do end hover");
            this.toolTipRef.current.clearHover();
        }
    }

    //this will generate the tooltip, ref this wherever you need one
    handleToolTip(){
        if(this.state.isHovered === false){
            return <ToolTip ref={this.toolTipRef} timeoutInMS={this.toolTipTimeOut}/>;
        }else{
            return (
                      <ToolTip
                          ref={this.toolTipRef}
                          btnReference={this.btnRef}
                          tooltipType="custom"
                          toolTipCustomElement={this.props.tooltip}
                          timeoutInMS={this.toolTipTimeOut}
                      />
            )
        }
    }

    baseButton(btnStyles : string){
        return(<>
            {this.handleToolTip()}
            <button
                ref={this.btnRef}
                onClick={()=>this.props.OnClick()}
                onMouseOver={()=>this.doHoverActions()}
                onMouseOut={()=>this.doHoverClear()}
                className={`btn-from-left btn-default ${btnStyles} `}
            >
                <div className="btn-descriptors">
                    <div className="label">
                        {this.props.buttonLabel}
                        {this.props.iconCenter}
                    </div>

                    <div className="cm-icon">
                        {this.props.iconRight}
                    </div>
                </div>
            </button>
        </>)
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
                    this.baseButton('btn-global')
                );

            case "nav-link":
                if(this.props.navPath !== undefined ){
                    console.log("icon left", this.props.iconLeft)
                    return(
                        <>
                            {this.handleToolTip()}
                            <NavLink ref={this.linkRef}
                                  onMouseOver={()=>this.doHoverActions()}
                                  onMouseOut={()=>this.doHoverClear()}
                                  to={this.props.navPath}
                                  className={`btn-main-action ${this.props.classes}`}
                            >
                                <div className=" ">
                                    {this.props.iconLeft}
                                    {this.props.buttonLabel}
                                    {this.props.iconRight}
                                </div>
                            </NavLink>
                        </>
                    );
                }else {
                    return(
                        <>
                            {this.handleToolTip()}
                            <button
                                onMouseOver={()=>this.doHoverActions()}
                                className={`btn-main-action ${this.props.classes}`}
                            >
                                {this.props.buttonLabel}
                            </button>
                        </>
                    );
                }

            case "menu-link":
                if(this.props.navPath !== undefined ){
                    return(
                        <>
                            {this.handleToolTip()}
                            <Link ref={this.linkRef}
                                  onMouseOver={()=>this.doHoverActions()}
                                  onMouseOut={()=>this.doHoverClear()}
                                  to={this.props.navPath}
                                  className="btn-main-action"
                            >
                                <div>
                                    {this.props.iconLeft}
                                    {this.props.buttonLabel}
                                    {this.props.iconRight}
                                </div>
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