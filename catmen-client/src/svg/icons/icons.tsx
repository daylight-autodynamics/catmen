import * as React from "react";
import fadeRightToLeft from "../../images/SVG/fader-right-to-left.svg"
import fadeLeftToRight from "../../images/SVG/fader-left-right.svg"

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
                        <path className="filled-secondary st4" d="M16.8,20.3H1.9c-0.7,0-1.3-0.6-1.3-1.3V4.3C0.6,3.6,1.2,3,1.9,3h14.9C17.5,3,18,3.6,18,4.3V19	C18,19.7,17.5,20.3,16.8,20.3z"/>
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

            case "clear":
                return(
                    <svg className={`icon-clear ${this.props.classes}`} x="0px" y="0px" width={this.props.width} height={this.props.height} viewBox="0 0 34.4 34.4" style={{overflow:"visible"}} >
                        <circle className="filled" cx="17.2" cy="17.2" r="17.2"/>
                        <g className="stroked" >
                            <path d="M10.4,24.1l-3-3C6,19.7,6,17.4,7.4,16L19.2,4.2c0.5-0.5,1.2-0.5,1.7,0l7,7c0.5,0.5,0.5,1.2,0,1.7L16.8,24.1 c-0.2,0.2-0.5,0.3-0.8,0.3h-4.7C10.9,24.5,10.6,24.4,10.4,24.1z"/>
                            <line x1="9.9" y1="13.6" x2="16.6" y2="20.4"/>
                            <line x1="19.2" y1="25" x2="28.6" y2="25"/>
                            <line x1="8.1" y1="26.2" x2="5.5" y2="26.2"/>
                            <line x1="10.2" y1="27.9" x2="8.4" y2="29.7"/>
                        </g>
</svg>

                )

            case "continue":
                return(
                    <svg className={`icon-continue ${this.props.classes}`} x="0px" y="0px" width={this.props.width} height={this.props.height} viewBox="0 0 34 34" style={{overflow:"visible"}}>
                        <svg x="0px" y="0px" width={this.props.width} height={this.props.height} viewBox="0 0 34.4 34.4" style={{overflow:"visible"}} >
                            <circle className="filled" cx="17.2" cy="17.2" r="17.2"/>
		                    <line className="stroked no-fill" x1="26.8" y1="17.6" x2="7.2" y2="17.6"/>
		                    <polyline className="stroked no-fill" points="21.7,21.9 27.4,17.6 21.7,13.4 "/>
	                    </svg>
                    </svg>
                );

            case "icon-restore-tooltip":
                return(
                   <svg x="0px" y="0px" width={this.props.width} height={this.props.height} viewBox="0 0 35.9 35.9" style={{overflow:"visible"}} >
                        <path className="filled-secondary st0" d="M30.8,5.4v-3H27C24.3,0.9,21.3,0,18,0s-6.3,0.9-9,2.4H5.4v2.7C2.1,8.4,0,13,0,18c0,9.9,8,18,18,18 c9.9,0,18-8,18-18C35.9,13.1,34,8.6,30.8,5.4z"/>
                        <path className="filled st1" d="M30,2.3H6.2C5.3,2.3,4.6,3,4.6,3.8l0,21.9c0.3-1,0.9-1.3,2.1-1.3l10.4,0L12,19.3l1.2-1.2l4,4V5.2h1.7v16.9l4-4	l1.2,1.2l-5.2,5.2l10.6,0c1.2-0.1,1.9,0.3,2,1.3l0-21.9C31.6,3,30.9,2.3,30,2.3z"/>
                        <path className="stroked st2" d="M31,30.9v-3.4c0-0.8-0.7-1.5-1.5-1.5H6.7c-0.8,0-1.5,0.7-1.5,1.5v3.7"/>
                    </svg>
                );

            case "icon-maximize-tooltip":
                return (
                    <svg className={`${this.props.classes} icon-maximize-tooltip`} x="0px" y="0px" width={this.props.width} height={this.props.height} viewBox="0 0 35.9 35.9" style={{overflow:"visible"}} >
                        <path className="filled " d="M30.8,5.4v-3H27C24.3,0.9,21.3,0,18,0s-6.3,0.9-9,2.4H5.4v2.7C2.1,8.4,0,13,0,18c0,9.9,8,18,18,18	c9.9,0,18-8,18-18C35.9,13.1,34,8.6,30.8,5.4z"/>
                        <polygon className="filled-highlight " points="13.2,14.5 17.2,10.5 17.2,27.4 18.9,27.4 18.9,10.5 22.9,14.5 24,13.3 18,7.2 12,13.3 "/>
                        <path className="filled-secondary " d="M18,35.9c5.2,0,9.8-2.2,13.1-5.7v-3.6c0-0.8-0.7-1.5-1.5-1.5H6.7c-0.8,0-1.5,0.7-1.5,1.5v3.9 C8.4,33.9,13,35.9,18,35.9z"/>
                    	<g className="stroked-secondary">
                            <path d="M31,9.5V3.9c0-0.8-0.7-1.5-1.5-1.5H6.7C5.9,2.4,5.2,3,5.2,3.9v6"/>
                            <line x1="5.2" y1="11.3" x2="5.2" y2="14.3"/>
                            <line x1="31" y1="14.3" x2="31" y2="11.3"/>
                            <line x1="5.2" y1="15.4" x2="5.2" y2="17.6"/>
                            <line x1="31" y1="17.7" x2="31" y2="15.4"/>
                            <line x1="5.2" y1="19.2" x2="5.2" y2="21"/>
                            <line x1="31" y1="21.1" x2="31" y2="19.2"/>
                            <line x1="5.2" y1="23.1" x2="5.2" y2="24.2"/>
                            <line x1="31" y1="24.1" x2="31" y2="23.1"/>
                        </g>
                    </svg>
                );

            case "icon-maximize":
                return (
                    <svg className={`icon-maximize ${this.props.classes}`} x="0px" y="0px" width={`${this.props.width}`} height={`${this.props.height}`} viewBox="0 0 22.2 22.2" style={{overflow:"visible"}} >
                        <path className="stroked" d="M0.8,14.6V2.1c0-0.9,0.7-1.6,1.6-1.6h17.8c0.9,0,1.6,0.7,1.6,1.6v17.8c0,0.9-0.7,1.6-1.6,1.6H7.7"/>
                        <path className="filled" d="M11.2,2.8v1.7H17L5.7,15.8c-0.2-0.1-0.5-0.2-0.8-0.2H1.8c-1,0-1.8,0.8-1.8,1.8v3.1c0,1,0.8,1.8,1.8,1.8h3.1 c1,0,1.8-0.8,1.8-1.8v-3.1c0-0.2,0-0.4-0.1-0.6L18,5.3v5.9h1.7V2.8H11.2z"/>
                    </svg>
                );

            case "icon-close":
                return(
                    <svg className={`icon-close ${this.props.classes}`} x="0px" y="0px" width={this.props.width} height={this.props.height} viewBox="0 0 20.6 20.6" style={{overflow:"visible"}}>
                        <polygon className="filled" points="20.6,2 18.6,0 10.3,8.3 2,0 0,2 8.3,10.3 0,18.6 2,20.6 10.3,12.3 18.6,20.6 20.6,18.6 12.3,10.3 "/>
                    </svg>
                );

            case "icon-delete":
                return(
                    <svg className={`icon-delete ${this.props.classes}`} x="0px" y="0px" width={this.props.width} height={this.props.height} viewBox="0 0 34 34" style={{overflow:"visible"}}>
 	                    <circle className="filled" cx="17" cy="17" r="17"/>
                        <rect className="filled-highlight" x="6.8" y="15.7" transform="matrix(0.707 -0.7072 0.7072 0.707 -7.0562 17.2692)" width="20.9" height="2.8"/>
                    </svg>
                );

            case "icon-close":
                return (
                    <svg className={`icon-close ${this.props.classes}`} version="1.1" x="0px" y="0px" width={this.props.width} height={this.props.height} viewBox="0 0 35.9 35.9" style={{overflow:"visible"}} >
                        <path className="filled" d="M18,0C8,0,0,8,0,18s8,18,18,18c9.9,0,18-8,18-18S27.9,0,18,0z"/>
                        <polygon className="filled-highlight" points="28.3,9.7 26.2,7.7 18,15.9 9.7,7.7 7.7,9.7 15.9,18 7.7,26.2 9.7,28.3 18,20 26.2,28.3 28.3,26.2	20,18 "/>
                    </svg>
                );

            case "icon-restore-btn":
                return (
                    <svg className={`${this.props.classes} icon-restore-btn`} x="0px" y="0px" width={this.props.width} height={this.props.height} viewBox="0 0 21.9 24.2" style={{overflow:"visible"}} >
                        <path className="stroked" d="M5.8,2.7H2.1c-0.9,0-1.6,0.7-1.6,1.6v17.8c0,0.9,0.7,1.6,1.6,1.6h17.8c0.9,0,1.6-0.7,1.6-1.6V4.3 c0-0.9-0.7-1.6-1.6-1.6h-3.4"/>
                        <path className="filled" d="M15.7,14.7l-4.1,4.1V6.8h1.6c0.7,0,1.2-0.5,1.2-1.2V1.2c0-0.7-0.5-1.2-1.2-1.2H8.7C8.1,0,7.5,0.5,7.5,1.2v4.4 c0,0.7,0.5,1.2,1.2,1.2h1.7l0,12l-4.2-4.2L5,15.8l5.9,5.9l5.9-5.9L15.7,14.7z"/>
                    </svg>
                );

            case "icon-restore":
                return(
                    <svg className={`icon-restore ${this.props.classes}`} x="0px" y="0px" width={this.props.width} height={this.props.height} viewBox="0 0 35.9 35.9" style={{overflow:"visible"}}>
                        <path className="filled" d="M18,0C8,0,0,8,0,18s8,18,18,18c9.9,0,18-8,18-18S27.9,0,18,0z"/>
                        <polygon className="filled-highlight" points="22.9,17.9 18.9,21.9 18.9,5 17.2,5 17.2,21.9 13.2,17.9 12,19.1 18,25.1 24,19.1 "/>
                        <path className="filled-secondary" d="M18,35.9c5.2,0,9.8-2.2,13.1-5.7v-3.6c0-0.8-0.7-1.5-1.5-1.5H6.7c-0.8,0-1.5,0.7-1.5,1.5v3.9 C8.4,33.9,13,35.9,18,35.9z"/>
                    </svg>

                );

            case "icon-read-mode":
                return(
                    <svg className={`icon-read-mode ${this.props.classes}`} x="0px" y="0px" width={this.props.width} height={this.props.height} viewBox="0 0 35 35" style={{overflow:"visible"}} >
                        <circle className="filled-highlight" cx="17.5" cy="17.5" r="17"/>
                        <path className="filled st1" d="M8.8,9.2c3.2-0.5,6.2,0.4,8.9,3c2.6-3.1,5.7-3.5,8.9-2.9l0,1l1.8,0.2l0.1,13.7c-3.6-0.4-7.2-0.2-10.8,1 c-3-1-6.7-1.4-10.7-1.3l0-13.4l1.8-0.2L8.8,9.2z"/>
                        <g className="stroked st2">
                            <path d="M8.8,9.2v13.2c0,0,2.9-0.1,5.2,0.5c1.9,0.5,3.3,1.9,3.7,2.4c0.1,0.1,0.1-0.1,0.1-0.1v-13c0,0-1.7-2.2-3.7-2.7 C11.4,8.8,8.8,9.2,8.8,9.2z"/>
                            <path d="M8.8,10.3c-1,0.1-1.8,0.2-1.8,0.2v13.2c0,0,2.2-0.4,5.3-0.1c2.8,0.3,5.4,1.8,5.4,1.8"/>
                            <path d="M26.7,9.2v13.2c0,0-2.9-0.1-5.2,0.5c-1.9,0.5-3.3,1.9-3.7,2.4c-0.1,0.1-0.1-0.1-0.1-0.1v-13 c0,0,1.7-2.2,3.7-2.7C24,8.8,26.7,9.2,26.7,9.2z"/>
                            <path d="M26.7,10.3c1,0.1,1.8,0.2,1.8,0.2v13.2c0,0-2.2-0.4-5.3-0.1c-2.8,0.3-5.4,1.8-5.4,1.8"/>
                        </g>
                        <path className="filled-secondary st3" d="M29.5,12h-0.9l0.1,11.9c-3.3-0.6-6.3-0.3-9,0.8c-0.5,0.2-0.9,0.4-1.3,0.6h-1.3c-0.4-0.2-0.8-0.4-1.3-0.6 c-2.7-1.1-5.8-1.3-9-0.8L6.8,12H6c-0.1,0-0.2,0.1-0.2,0.2v12.5c0,0.3,0.2,0.5,0.5,0.5h9.7l0,0.4c0,0.2,0.1,0.2,0.2,0.2H17v0h1.7v0 h0.6c0.1,0,0.2-0.1,0.2-0.2v-0.4h9.7c0.3,0,0.5-0.2,0.5-0.5V12.2C29.7,12.1,29.6,12,29.5,12z"/>
                    </svg>
                );

            case "icon-read":
                return(
                    <svg className={`${this.props.classes} icon-read-mode`} version="1.1" x="0px" y="0px" width={this.props.width} height={this.props.height} viewBox="0 0 40.1 28.4" style={{overflow:"visible"}} >
YT-=H                        <path className="filled" d="M5.1,0.7c5.3-0.8,10.3,0.6,14.9,5c4.4-5.2,9.5-5.8,14.9-4.8L35,2.5l3,0.3l0.1,22.8c-6-0.7-12-0.3-18,1.7 C15,25.6,9,25,2.2,25.1l0-22.3l3-0.3L5.1,0.7z"/>
                        <g className="stroked">
                            <path d="M5.1,0.7v22c0,0,4.9-0.1,8.6,0.9c3.1,0.8,5.5,3.2,6.1,3.9c0.1,0.1,0.2-0.2,0.2-0.2V5.7c0,0-2.9-3.7-6.3-4.6 C9.5,0,5.1,0.7,5.1,0.7z"/>
                            <path d="M5.1,2.5c-1.6,0.1-3,0.3-3,0.3v22c0,0,3.6-0.7,8.8-0.2c4.6,0.5,9.1,3,9.1,3"/>
                            <path d="M35,0.7v22c0,0-4.9-0.1-8.6,0.9c-3.1,0.8-5.5,3.2-6.1,3.9c-0.1,0.1-0.2-0.2-0.2-0.2V5.7c0,0,2.9-3.7,6.3-4.6 C30.6,0,35,0.7,35,0.7z"/>
                            <path d="M35,2.5c1.6,0.1,3,0.3,3,0.3v22c0,0-3.6-0.7-8.8-0.2c-4.6,0.5-9.1,3-9.1,3"/>
                        </g>
                        <path className="filled-secondary" d="M39.7,5.3h-1.4l0.1,19.9c-5.5-1-10.5-0.5-15.1,1.3c-0.8,0.3-1.5,0.6-2.2,1h-2.2c-0.6-0.3-1.4-0.7-2.2-1 c-4.6-1.8-9.6-2.2-15.1-1.3L1.8,5.3H0.4C0.2,5.3,0,5.5,0,5.7v20.8c0,0.4,0.3,0.8,0.8,0.8H17l0,0.7c0,0.3,0.1,0.4,0.4,0.4h1.4v0h2.9 v0h1c0.2,0,0.4-0.1,0.4-0.4v-0.7h16.3c0.4,0,0.8-0.3,0.8-0.8V5.7C40.1,5.5,39.9,5.3,39.7,5.3z"/>
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

            case "icon-plus":
                return(
                    <svg className={`${this.props.classes} icon-plus`} version="1.1" x="0px" y="0px" width={this.props.width} height={this.props.height} viewBox="0 0 20.9 20.9" style={{overflow:"visible"}}>
                        <polygon className="filled" points="20.9,11.9 20.9,9.1 11.9,9.1 11.9,0 9.1,0 9.1,9.1 0,9.1 0,11.9 9.1,11.9 9.1,20.9 11.9,20.9 11.9,11.9"/>
                    </svg>
                );

            case "icon-add":
                return(
                    <svg className={`${this.props.classes} icon-add`} x="0px" y="0px" width={this.props.width} height={this.props.height} viewBox="0 0 35 35" style={{overflow:"visible"}} >
                        <circle className="filled stroked " cx="17.5" cy="17.5" r="17"/>
                        <polygon className="filled-highlight " points="28.1,19.2 28.1,16.4 19,16.4 19,7.3 16.2,7.3 16.2,16.4 7.1,16.4 7.1,19.2 16.2,19.2 16.2,28.2 19,28.2 19,19.2 "/>
                    </svg>
                );

            case "icon-add-invert":
                return (
                    <svg className={`icon-add-invert ${this.props.classes}`}   x="0px" y="0px" width={this.props.width} height={this.props.height} viewBox="0 0 97.3 97.3" style={{overflow:"visible"}}>
                        <circle className="filled" cx="48.6" cy="48.6" r="48.6"/>
                        <path className="filled-highlight" d="M48.6,7.3C25.8,7.3,7.3,25.8,7.3,48.6c0,22.8,18.5,41.3,41.3,41.3s41.3-18.5,41.3-41.3 C89.9,25.8,71.4,7.3,48.6,7.3z M77.7,52H52v25.7h-6.7V52H19.6v-6.7h25.7V19.6H52v25.7h25.7V52z"/>
                    </svg>
                );



            case "carat-down":
                return (
                    <svg className={`carat-down ${this.props.classes}`} x="0px" y="0px" width={this.props.width} height={this.props.height} viewBox="0 0 13.4 7.1" style={{overflow:"visible"}} >
                        <path className="filled" d="M7.1,6.9l0.8-0.8l0,0l5.4-5.4c0.2-0.2,0.2-0.6,0-0.8H0.2c-0.2,0.2-0.2,0.6,0,0.8l5.4,5.4l0.8,0.8 C6.5,7.1,6.9,7.1,7.1,6.9z"/>
                    </svg>
                );

            case "fader-right-to-left":
                return(
                    <div style={{backgroundImage : `url(${fadeRightToLeft})`}} className={`${this.props.classes} image-box fader-right-to-left`}></div>
                );

            case "fader-left-to-right":
                return(
                    <div style={{backgroundImage : `url(${fadeLeftToRight})`}} className={`${this.props.classes} image-box fader-right-to-left`}></div>

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

            case "go-back-arrow":
                return (
                    <svg className={`icon-go-arrow ${this.props.classes}`} x="0px" y="0px" width={this.props.width} height={this.props.height} viewBox="0 0 21.7 10.8" style={{overflow:"visible"}} >
                        <line className="stroked" x1="2.6" y1="7.1" x2="27.1" y2="7.1"/>
                        <polyline className="stroked" points="8.9,12.4 1.8,7.1 8.9,1.8 "/>
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

            case "media-nav-icon":
                return(
                    <svg className={`media-nav-icon ${this.props.classes}`} version="1.1"  x="0px" y="0px" width={this.props.width} height={this.props.height} viewBox="0 0 15.8 13.9" style={{overflow:"visible"}} >
                        <path className="stroked" d="M3.7,11.9H3.3c-0.6,0-1.2-0.5-1.2-1.2V3.1c0-0.6,0.5-1.2,1.2-1.2h9.3c0.6,0,1.2,0.5,1.2,1.2v0.6"/>
                        <path className="filled-highlight" d="M14.2,13.7H4.9c-0.6,0-1.2-0.5-1.2-1.2V4.9c0-0.6,0.5-1.2,1.2-1.2h9.3c0.6,0,1.4,0.6,1.4,1.3l-0.2,7.5	C15.4,13.1,14.8,13.7,14.2,13.7z"/>
                        <polygon className="filled" points="13.9,11.1 11.8,6.3 9.4,9.5 7.8,7.8 5.1,11.1 "/>
                        <circle className="filled" cx="6.4" cy="6.2" r="1.1"/>
                        <path className="stroked st0" d="M1.9,10.2H1.4c-0.6,0-1.2-0.5-1.2-1.2V1.4c0-0.6,0.5-1.2,1.2-1.2h9.3c0.6,0,1.2,0.5,1.2,1.2V2"/>
</svg>

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