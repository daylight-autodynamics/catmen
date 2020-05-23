import * as React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


type AppButtonType = "from-left" | "main-action" | "secondary-action" | "menu-link";

interface iPROPS{
    buttonType: AppButtonType;
    buttonLabel? : string;
    functionality? : any;
    icon? : any;
    navPath? : any;
    index? : number;
    param? : string;
    hoverActions? : any[];
}

interface iSTATE{

}

export class AppButton extends React.Component<iPROPS, iSTATE>{
constructor(props:iPROPS) {
    super(props);
    this.hoverActions = this.props.hoverActions;
}
    hoverActions :any[] | undefined = [];

    doHoverActions(){
      console.log("hovered inside:", this.hoverActions);
      if(this.hoverActions !== undefined){
          for(let i=0; i < this.hoverActions.length; i++){
              if(this.hoverActions[i] !== undefined){
                  this.hoverActions[i]();
              }
          }
      }
    };

    getButton(){
        switch (this.props.buttonType) {
            case "main-action":
                return(
                    <button
                        onClick={()=>this.props.functionality()}
                        onMouseOver={()=>this.doHoverActions()}
                        className="btn-main-action"
                    >
                        {this.props.buttonLabel}
                    </button>
                );

            case "from-left":
                return(
                    <button
                        onClick={()=>this.props.functionality()}
                        onMouseOver={()=>this.doHoverActions()}
                        className="btn-from-left"
                    >
                        {this.props.buttonLabel}
                    </button>
                );


            case "menu-link":
                if(this.props.navPath !== undefined ){
                    return(
                        <Link onMouseOver={()=>this.doHoverActions()} to={this.props.navPath} className="btn-main-action">{this.props.buttonLabel}</Link>
                    );
                }else {
                    return(
                        <button onMouseOver={()=>this.doHoverActions()} className="btn-main-action">{this.props.buttonLabel}</button>
                    );
                }

            case "secondary-action":
                return(
                    <button onMouseOver={()=>this.doHoverActions()} className="btn-secondary">{this.props.buttonLabel}</button>
                );

            default:
                return(
                    <button>Default Button</button>
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