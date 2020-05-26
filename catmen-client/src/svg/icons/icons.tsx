import * as React from "react";


interface iPROPS {
    iconName : string;
    classes : string;
}

interface iSTATE {

}

export class CatmanIcon extends React.Component<iPROPS, iSTATE>{

    getIcon(){
        switch(this.props.iconName){
            case "compass":
                return (
                  <>
                      <svg x="0px" y="0px" width="36.9px" height="36.9px" viewBox="0 0 36.9 36.9" >
                        <path className="st0" d="M18.4,0.6c-9.9,0-18,8-18,18s8,18,18,18c9.9,0,18-8,18-18S28.4,0.6,18.4,0.6z M9.6,27.4l7-11.4l4.4,4.4 L9.6,27.4z"/>
                        <circle className="st1" cx="18.4" cy="18.4" r="17.9"/>
                        <polygon className="st2" points="16.6,16 21,20.4 27.5,9.5 "/>
                        <path className="st3" d="M20.6,20.9L8.9,28l7.2-11.7c0.2-0.3,0.4-0.5,0.7-0.7l11.1-6.6l-6.6,11.1C21.1,20.4,20.9,20.7,20.6,20.9z"/>
                      </svg>
                  </>
                );

            case "down-arrow":
                return(
                    <>
                        <svg className={`down-arrow-icon ${this.props.classes}`} x="0px" y="0" width="100%" height="100%" viewBox="0 0 13.4 7.1" >
                            <path className="filled" d="M7.1,6.9l0.8-0.8l0,0l5.4-5.4c0.2-0.2,0.2-0.6,0-0.8H0.2c-0.2,0.2-0.2,0.6,0,0.8l5.4,5.4l0.8,0.8 C6.5,7.1,6.9,7.1,7.1,6.9z"/>
                        </svg>
                    </>
                );
        }
    }

    render(){
        return(<>{this.getIcon()}</>)
    }
}