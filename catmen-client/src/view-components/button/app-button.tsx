import * as React from "react";
import {Link, NavLink} from "react-router-dom";
import {ToolTip} from "../heru-tool-tip/tool-tip";
import {ReactElement, Ref, RefObject} from "react";


type AppButtonType = "from-left"
    | "main-action"
    | "secondary-action"
    | "menu-link"
    |"nav-link"
    |"transparent-bg";

interface iPROPS{
    buttonType: AppButtonType;
    buttonLabel? : string;
    iconCenter? : ReactElement;
    iconRight? : ReactElement;
    iconLeft? : ReactElement;
    navPath? : any;
    index? : number;
    param? : string;
    hoverActions? : any[];
    hoverLeaveActions? : any[];
    OnClick? : any;
    tooltipType : "basic" | "custom" | "none";
    tooltip? : ReactElement;
    toolTipTimeOutInMS? : number;
    classes? : string;
    state? : string;
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
        //if timeout isn't set, this is default
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
      if(this.toolTipRef.current != null && this.props.tooltipType !== "none"){

          this.toolTipRef.current.startHover();
      }
    };

    doHoverOutActions(){

        this.doHoverClear();
        if(this.props.hoverLeaveActions != undefined && this.props.hoverLeaveActions != null){
            for(let i=0; i < this.props.hoverLeaveActions.length; i++){
                this.props.hoverLeaveActions[i]()
            }
        }
    }

    doHoverClear(){
        //do any hover actions that were passed along
        if(this.props.hoverLeaveActions !== null && this.props.hoverLeaveActions !== undefined ){
            for(let i=0; i < this.props.hoverLeaveActions.length; i++){
                this.props.hoverLeaveActions[i]();
            }
        }
        if(this.toolTipRef.current != null){
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
                onMouseOut={()=>this.doHoverOutActions()}
                className={`btn-default ${btnStyles} ${this.props.classes} `}
            >
                <div className="btn-descriptors">
                    <div className="cm-icon">
                        {this.props.iconLeft}
                    </div>
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
                            onMouseOut={()=>this.doHoverOutActions()}
                            className="btn-main-action"
                        >
                            {this.props.buttonLabel}
                        </button>
                    </>
                );

            case "transparent-bg":
                return(
                    <>
                        {this.handleToolTip()}
                        <button
                            ref={this.btnRef}
                            onClick={()=>this.props.OnClick()}
                            onMouseOver={()=>this.doHoverActions()}
                            onMouseOut={()=>this.doHoverOutActions()}
                            className={`btn-transparent-bg ${this.props.classes}`}
                        >
                            {this.props.buttonLabel}
                            {this.props.iconCenter}
                        </button>
                    </>
                );

            case "from-left":
                return(
                    this.baseButton('btn-global btn-from-left')
                );

            case "nav-link":
                if(this.props.navPath !== undefined ){

                    return(
                        <>
                            <NavLink
                                  ref={this.linkRef}
                                  onMouseOver={()=>this.doHoverActions()}
                                  onMouseOut={()=>this.doHoverOutActions()}
                                  exact
                                  to={this.props.navPath}
                                  className={`app-btn btn-main-action nav-link ${this.props.classes}`}
                            >
                                <div className="hover-panel"></div>
                                <div className="button-decorator">
                                    <div className="icon-left">{this.props.iconLeft}</div>
                                    <p className="btn-label">{this.props.buttonLabel}{this.props.iconCenter}</p>
                                    <div className="icon-right">{this.props.iconRight}</div>
                                </div>
                            </NavLink>
                            {this.handleToolTip()}
                        </>
                    );
                }else {
                    return(
                        <>
                            <button
                                onMouseOver={()=>this.doHoverActions()}
                                onMouseOut={()=>this.doHoverOutActions()}
                                className={`btn-main-action ${this.props.classes}`}
                            >
                                {this.props.buttonLabel}
                            </button>
                            {this.handleToolTip()}
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
                        {this.baseButton("secondary-action")}
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