import * as React from "react";


interface iPROPS {
    iconName : string;
    classes? : string;
    width : string;
    height : string;
}

interface iSTATE {

}

export class CatmanIcon extends React.Component<iPROPS, iSTATE>{
    getIcon(){
        switch(this.props.iconName){

            case "compass":
                return (
                  <>
                      <svg className={`icon-compass ${this.props.classes}`} x="0px" y="0px" width={this.props.width} height={this.props.height} viewBox="0 0 36.9 36.9" >
                        <circle className="stroked-highlight filled" cx="18.4" cy="18.4" r="17.9"/>
                        <polygon className="filled-highlight" points="16.6,16 21,20.4 27.5,9.5 "/>
                        <path className="st3" d="M20.6,20.9L8.9,28l7.2-11.7c0.2-0.3,0.4-0.5,0.7-0.7l11.1-6.6l-6.6,11.1C21.1,20.4,20.9,20.7,20.6,20.9z"/>
                      </svg>
                  </>
                );

            case "single-product":
                return(
                    <>
                        <svg className={`icon-single-product ${this.props.classes}`} x="0px" y="0px" width={this.props.width} height={this.props.height} viewBox="0 0 39.8 39.8" style={{overflow:"visible"}} >
                            <polygon className="filled" points="14.7,0.6 0.8,6.8 5.8,13.3 1,19.7 5.7,22.1 5.7,32.6 19.8,39.4 33.8,32.5 34,22 38.8,19.7 33.9,13.5 38.9,6.8 25.1,0.6 19.9,6.5 "/>
                            <polygon className="filled-dark st1" points="19.8,20.1 5.8,13.3 19.9,6.5 33.8,13.2 "/>
                            <g className="stroked">
                                <polygon points="19.5,6.4 14.7,0.6 0.8,6.8 5.7,13 "/>
                                <polygon points="34.1,13 39,6.8 25.1,0.6 20.3,6.4 "/>
                                <polygon points="20.1,20.1 25,25.9 38.8,19.7 33.9,13.5 "/>
                                <polygon points="19.5,20.2 14.7,26 0.8,19.8 5.7,13.6 "/>
                                <polyline points="34,22 34,32.6 20.2,39.3 19.5,39.3 5.7,32.6 5.7,22.1 "/>
                            </g>
                            <line className="stroked stroked-highlight st3" x1="19.8" y1="20.1" x2="19.8" y2="39.2"/>
                            <polygon className="filled-darker st4" points="19.8,6.8 20,19.7 33.3,13.2 "/>
                        </svg>
                    </>
                );

            case "select-row":
                return(
                    <svg className={`icon-select-row ${this.props.classes}`} x="0px" y="0px" width={this.props.width} height={this.props.height} viewBox="0 0 38.5 31.6" style={{overflow:"visible"}} >
                        <path className="st0 filled" d="M33.6,30.6H12.7c-2.4,0-4.3-1.9-4.3-4.3V4.7c0-2.4,1.9-4.3,4.3-4.3h20.9c2.4,0,4.3,1.9,4.3,4.3v21.7 C37.9,28.7,36,30.6,33.6,30.6z"/>
                        <rect className="st1 filled-highlight" x="15.7" y="14.2" width="21.8" height="5.8"/>
                        <g className="stroked-highlight no-fill st2">
                            <line x1="8.4" y1="7.4" x2="37.8" y2="7.4"/>
                            <line x1="8.4" y1="20.1" x2="37.8" y2="20.1"/>
                            <line x1="8.4" y1="25.6" x2="37.8" y2="25.6"/>
                            <line x1="8.4" y1="13.8" x2="37.8" y2="13.8"/>
                            <line x1="23.9" y1="30.8" x2="23.9" y2="1.1"/>
                            <line x1="14.3" y1="30.8" x2="14.3" y2="1.1"/>
                            <line x1="32.7" y1="31.2" x2="32.7" y2="1.1"/>
                        </g>
                        <path className="stroked st3" d="M33.9,31.2H12.4c-2.3,0-4.1-1.8-4.1-4.1V4.6c0-2.3,1.8-4.1,4.1-4.1h21.5c2.3,0,4.1,1.8,4.1,4.1v22.5 C38,29.3,36.2,31.2,33.9,31.2z"/>
                        <path className="st4" d="M16.8,20.3H1.9c-0.7,0-1.3-0.6-1.3-1.3V4.3C0.6,3.6,1.2,3,1.9,3h14.9C17.5,3,18,3.6,18,4.3V19	C18,19.7,17.5,20.3,16.8,20.3z"/>
                        <polygon className="action-highlight st5" points="13.6,6.8 7.1,13.3 5,11.3 2.9,13.4 7.1,17.6 9.2,15.4 15.7,8.9 "/>
                    </svg>
            );

            case "cancel":
                return(

                    <svg className={`icon-cancel ${this.props.classes}`} x="0px" y="0px" width={this.props.width} height={this.props.height} viewBox="0 0 34 34" style={{overflow:"visible"}}>
                        <circle className="filled" cx="17" cy="17" r="17"/>
                        <line className="stroked no-fill" x1="8.3" y1="17.2" x2="27" y2="17.2"/>
                        <polyline className="stroked no-fill" points="13.1,21.2 7.7,17.2 13.1,13.2"/>
                    </svg>

                );

            case "icon-delete":
                return(
                    <svg className={`icon-delete ${this.props.classes}`} x="0px" y="0px" width={this.props.width} height={this.props.height} viewBox="0 0 34 34" style={{overflow:"visible"}}>
 	                    <circle className="filled" cx="17" cy="17" r="17"/>
                        <rect className="filled-highlight" x="6.8" y="15.7" transform="matrix(0.707 -0.7072 0.7072 0.707 -7.0562 17.2692)" width="20.9" height="2.8"/>
                    </svg>
                );

            case "icon-edit":
                return(
                         <svg className={`icon-edit ${this.props.classes}`} x="0px" y="0px" width={this.props.width} height={this.props.height} viewBox="0 0 35 35" style={{overflow:"visible"}} >
                            <circle className="filled-highlight" cx="17.5" cy="17.5" r="17"/>
                            <g className="stroked no-fill">
                                <path d="M15.7,25.5l11.7-11.7c1-1,1-2.5,0-3.5L25.1,8c-1-1-2.5-1-3.5,0L10,19.7l-1.2,7L15.7,25.5z"/>
                                <line x1="20.5" y1="9.5" x2="25.9" y2="15"/>
                                <line x1="10.4" y1="19.6" x2="15.8" y2="25"/>
                            </g>
                            <polygon className="filled" points="11.3,26 9.4,24.1 9,26.4 "/>
                        </svg>

                );

            case "icon-add":
                return(
                    <svg className={`${this.props.classes} icon-add`} x="0px" y="0px" width={this.props.width} height={this.props.height} viewBox="0 0 35 35" style={{overflow:"visible"}} >
                        <circle className="filled stroked st0" cx="17.5" cy="17.5" r="17"/>
                        <polygon className="filled-highlight st1" points="28.1,19.2 28.1,16.4 19,16.4 19,7.3 16.2,7.3 16.2,16.4 7.1,16.4 7.1,19.2 16.2,19.2 16.2,28.2 19,28.2 19,19.2 "/>
                    </svg>
                );

            case "checkbox-unchecked":
                return(
                    <svg className="unchecked" x="0px" y="0px" width={this.props.width} height={this.props.height} viewBox="0 0 17.5 17.2" style={{overflow:"visible"}} >
                        <rect x="0" y="0" className="stroked" width="17.5" height="17.2"/>
                        <path className="filled" d="M11.8,12.5H5.7c-0.4,0-0.8-0.4-0.8-0.8V5.6c0-0.4,0.4-0.8,0.8-0.8h6.1c0.4,0,0.8,0.4,0.8,0.8v6.1 C12.6,12.1,12.2,12.5,11.8,12.5z"/>
                    </svg>
                );

            case "checkbox-checked":
                return(
                    <svg className="checked" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 18.6 18.4" style={{overflow:"visible"}} >
                        <path className="filled" d="M16.8,17.8H1.9c-0.7,0-1.3-0.6-1.3-1.3V1.9c0-0.7,0.6-1.3,1.3-1.3h14.9c0.7,0,1.3,0.6,1.3,1.3v14.7 C18,17.3,17.5,17.8,16.8,17.8z"/>
                        <polygon className="filled-highlight" points="13.6,4.3 7.1,10.9 5,8.8 2.9,11 7.1,15.1 9.2,13 15.7,6.4 "/>
                    </svg>
                );

            case "go-arrow":
                return (
                    <svg className={`icon-go-arrow ${this.props.classes}`} x="0px" y="0px" width={this.props.width} height={this.props.height} viewBox="0 0 21.7 10.8" style={{overflow:"visible"}} >
			            <line className="stroked" x1="19.7" y1="5.4" x2="1" y2="5.4"/>
		                <polyline className="stroked" points="14.9,9.4 20.3,5.4 14.9,1.3 			"/>
                    </svg>
                );

            case "down-arrow":
                return(
                    <>
                        <svg className={`down-arrow-icon ${this.props.classes}`} x="0px" y="0" width={this.props.width} height={this.props.height} viewBox="0 0 13.4 7.1" >
                            <path className="filled" d="M7.1,6.9l0.8-0.8l0,0l5.4-5.4c0.2-0.2,0.2-0.6,0-0.8H0.2c-0.2,0.2-0.2,0.6,0,0.8l5.4,5.4l0.8,0.8 C6.5,7.1,6.9,7.1,7.1,6.9z"/>
                        </svg>
                    </>
                );
            case "home":
                return(
                    <>
                        <svg className={`icon-home ${this.props.classes}`} version="1.1" x="0px" y="0px" width={this.props.width} height={this.props.height} viewBox="0 0 23.5 18.5"  >
            	            <path className="filled-highlight stroked" d="M14.1,18v-5.4H9.4V18H4.3C4.1,18,4,17.8,4,17.6v-6.8l7.8-6.4l7.8,6.6v6.6c0,0.2-0.2,0.3-0.3,0.3H14.1z"/>
                            <path className="filled stroked" d="M23.4,9.2l-3.4-2.8V0.5c0-0.3-0.2-0.5-0.5-0.5h-2.8c-0.3,0-0.5,0.2-0.5,0.5v2.7l-3.5-2.9 c-0.6-0.5-1.6-0.5-2.2,0L0.1,9.1C0,9.2,0,9.4,0.1,9.6L1.2,11c0.1,0.1,0.3,0.2,0.5,0l9.9-8.3c0.1-0.1,0.3-0.1,0.5,0l9.8,8.3 c0.1,0.1,0.3,0.1,0.4,0l1.2-1.3C23.6,9.5,23.6,9.3,23.4,9.2z"/>
                        </svg>
                    </>
                );
            case "catalog":
                return(
                    <>
                        <svg className={`icon-catalog ${this.props.classes}`} x="0px" y="0px" width={this.props.width} height={this.props.height} viewBox="0 0 22 18.8" >
	                        <path className="stroked filled-highlight" d="M3.2,18.3c-0.3,0-0.6-0.3-0.6-0.6V1.1c0-0.3,0.3-0.6,0.6-0.6h17.7c0.3,0,0.6,0.3,0.6,0.6v16.6	c0,0.3-0.3,0.6-0.6,0.6H3.2z"/>
                            <rect className="filled" x="7.1" y="2.8" width="6.1" height="6.2"/>
                            <rect className="filled" x="13.8" y="2.8" width="6.1" height="6.2"/>
                        	<path className="filled" d="M19.1,10.8V15H15v-4.2H19.1 M20.1,9.8H14V16h6.1V9.8L20.1,9.8z"/>
	                        <rect className="filled" x="7.3" y="9.8" width="6.1" height="6.2"/>
                            <rect className="filled-highlight " x="2.1" y="2.1" width="3.6" height="3.7"/>
                            <rect className="filled-highlight " x="2.1" y="12.9" width="3.6" height="3.7"/>
                        	<path className="st1" d="M4.2,5.1H1.1C0.5,5.1,0,4.6,0,4v0c0-0.6,0.5-1.1,1.1-1.1h3.2c0.6,0,1.1,0.5,1.1,1.1v0C5.3,4.6,4.8,5.1,4.2,5.1 z"/>
                            <path className="st1" d="M4.2,15.8H1.1c-0.6,0-1.1-0.5-1.1-1.1v0c0-0.6,0.5-1.1,1.1-1.1h3.2c0.6,0,1.1,0.5,1.1,1.1v0 C5.3,15.3,4.8,15.8,4.2,15.8z"/>
                        </svg>
                    </>
                );

            case "attributes":
                return (
                    <>
                        <svg className={`icon-attributes ${this.props.classes}`} x="0px" y="0px" width={this.props.width} height={this.props.height} viewBox="0 0 20.8 18.4" >
                            <path className="filled-highlight stroked" d="M13.4,15c-0.4-0.1-0.7-0.2-1-0.5L4.8,8.4C4,7.7,3.8,6.6,4.5,5.8l3.7-4.6c0.4-0.4,0.9-0.7,1.5-0.7 c0.4,0,0.8,0.1,1.2,0.4l7.7,6.2C18.8,7.3,19,7.7,19.1,8l1.1,5.2c-0.1,0.8-0.6,1.4-1.3,1.6L13.4,15z"/>
                            <path className="filled-highlight stroked" d="M11.4,17c-0.3,0-0.6-0.1-0.9-0.2l-8.9-4.1c-0.5-0.2-0.8-0.6-1-1.1c-0.2-0.5-0.2-1,0.1-1.4l2.5-5.3 c0.3-0.7,1-1.1,1.7-1.1c0.3,0,0.5,0.1,0.8,0.2l9,4.1c0.3,0.2,0.6,0.4,0.8,0.7l2.4,4.8c0.1,0.7-0.2,1.5-0.9,1.9L11.5,17 C11.5,17,11.4,17,11.4,17z"/>

                            <path className="filled stroked-highlight" d="M20.4,11.6l-4.3-3.4c-0.4-0.2-0.8-0.3-1.3-0.3H5c-1.3,0-2.4,1.1-2.4,2.4v5.9c0,1.3,1.1,2.4,2.4,2.4h9.8 c0.5,0,1-0.1,1.4-0.4l4.3-3.7C21,13.5,21,12.4,20.4,11.6z"/>
                            <path className="filled-highlight" d="M18.3,14.3c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1 C19.4,13.8,18.9,14.3,18.3,14.3z"/>
                        </svg>
                    </>
                );
            case "attribute-groups":
                return(
                    <>
                        <svg className={`icon-attribute-groups ${this.props.classes}`} x="0px" y="0px" width={this.props.width} height={this.props.height} viewBox="0 0 20.6 19"  >
                            <path className="filled-highlight stroked" d="M6.9,16.6c-0.5,0-1.1-0.3-1.4-0.7l-3.1-4.4c-0.3-0.4-0.4-0.8-0.3-1.2c0.1-0.4,0.3-0.8,0.7-1.1L10.3,4 c0.3-0.2,0.6-0.3,0.9-0.3L16.1,4c0.6,0.2,1,0.8,1.1,1.5l-1.3,5c-0.1,0.3-0.3,0.5-0.6,0.7l-7.4,5.1C7.5,16.5,7.2,16.6,6.9,16.6 L6.9,16.6z"/>
                        	<path className="filled" d="M14.9,7.2c-0.5,0.3-1.1,0.2-1.4-0.3c-0.3-0.5-0.2-1.1,0.3-1.4c0.5-0.3,1.1-0.2,1.4,0.3 C15.5,6.2,15.4,6.8,14.9,7.2z"/>
                            <polygon className="filled" points="4,0 1.5,0 0,0 0,1.5 0,4 1.5,4 1.5,1.5 4,1.5 "/>
                            <polygon className="filled" points="19,0 16.6,0 16.6,1.5 19,1.5 19,4 20.6,4 20.6,1.5 20.6,0 "/>
                            <polygon className="filled" points="1.5,17.4 1.5,14.9 0,14.9 0,17.4 0,19 1.5,19 4,19 4,17.4 "/>
                            <polygon className="filled" points="19,14.9 19,17.4 16.6,17.4 16.6,19 19,19 20.6,19 20.6,17.4 20.6,14.9 "/>
                        </svg>
                    </>
                );
            case "attribute-mappings":
                return (
                    <>
                        <svg className={`icon-attribute-mappings ${this.props.classes}`} x="0px" y="0px" width={this.props.width} height={this.props.height} viewBox="0 0 20.1 17.8" >
                             <path className="filled" d="M4.5,5.5H1c-0.5,0-1-0.4-1-1V1c0-0.5,0.4-1,1-1h3.6c0.5,0,1,0.4,1,1v3.6C5.5,5.1,5.1,5.5,4.5,5.5z"/>
                             <path className="filled-highlight stroked" d="M10.8,17.3c-0.3,0-0.5-0.2-0.5-0.5V6.6c0-0.3,0.2-0.5,0.5-0.5h8.3c0.3,0,0.5,0.2,0.5,0.5v10.2 c0,0.3-0.2,0.5-0.5,0.5H10.8z"/>
                             <rect className="filled-highlight" x="9.8" y="10.4" width="2.3" height="2.9"/>
                             <path className="stroked no-fill" d="M15.3,11.7H5.2c-1.3,0-2.4-1.1-2.4-2.4V3.2"/>
                             <polygon className="filled" points="17.2,11.7 12.5,9.8 13.6,11.7 12.5,13.6"/>
                        </svg>
                    </>
                );
            case "classes":
                return (
                    <svg className={`icon-classes ${this.props.classes}`} x="0px" y="0px" width={this.props.width} height={this.props.height} viewBox="0 0 18.7 18.6" >
                        <path className="filled-highlight" d="M7.6,8.7H1c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1h6.6c0.6,0,1,0.4,1,1v6.7C8.6,8.3,8.1,8.7,7.6,8.7z"/>
                        <path className="filled stroked-highlight" d="M11.1,8.2c-0.3,0-0.5-0.2-0.5-0.5V1c0-0.3,0.2-0.5,0.5-0.5h6.6c0.3,0,0.5,0.2,0.5,0.5v6.7	c0,0.3-0.2,0.5-0.5,0.5H11.1z"/>
                        <path className="filled stroked-highlight" d="M1.1,18.1c-0.3,0-0.5-0.2-0.5-0.5v-6.7c0-0.3,0.2-0.5,0.5-0.5h6.6c0.3,0,0.5,0.2,0.5,0.5v6.7 c0,0.3-0.2,0.5-0.5,0.5H1.1z"/>
                        <path className="filled stroked-highlight" d="M11.1,18.1c-0.3,0-0.5-0.2-0.5-0.5v-6.7c0-0.3,0.2-0.5,0.5-0.5h6.6c0.3,0,0.5,0.2,0.5,0.5v6.7 c0,0.3-0.2,0.5-0.5,0.5H11.1z"/>
                        <path className="filled-highlight" d="M4.4,13.3c-0.5,0-1,0.4-1,1c0,0.5,0.4,1,1,1c0.5,0,1-0.4,1-1C5.4,13.8,4.9,13.3,4.4,13.3L4.4,13.3z"/>
                        <path className="filled-highlight" d="M7,10.5c-0.5,0-1,0.4-1,1c0,0.5,0.4,1,1,1c0.5,0,1-0.4,1-1C8,11,7.6,10.5,7,10.5L7,10.5z"/>
                        <path className="filled-highlight" d="M1.7,15.8c-0.5,0-1,0.4-1,1c0,0.5,0.4,1,1,1c0.5,0,1-0.4,1-1C2.7,16.3,2.2,15.8,1.7,15.8L1.7,15.8z"/>
                        <path className="filled-highlight" d="M7,15.9c-0.5,0-1,0.4-1,1c0,0.5,0.4,1,1,1s1-0.4,1-1C8,16.3,7.5,15.9,7,15.9L7,15.9z"/>
                        <path className="filled-highlight" d="M1.7,10.5c-0.5,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S2.3,10.5,1.7,10.5L1.7,10.5z"/>
                        <polygon className="filled-highlight" points="14.2,10.2 10.3,14.1 11,14.8 14.9,10.9 14.2,10.2 	"/>
                        <polygon className="filled-highlight" points="17.6,10.3 10.5,17.4 11.2,18.1 18.3,11.1 17.6,10.3 	"/>
                        <polygon className="filled-highlight" points="17.8,13.7 13.9,17.6 14.6,18.3 18.5,14.4 17.8,13.7 	"/>
                    </svg>

                )

        }
    }

    render(){
        return(<>{this.getIcon()}</>)
    }
}