import * as React from "react";
import {win} from "../../index";
import { ReactElement, RefObject} from "react";
import ReactDOM from "react-dom";


interface iMousePos{
    x:number;
    y:number;
}

interface iWindow{

}

export type windowSize = {
    height : number;
    width : number;
}
export class WindowLevelCapture implements iWindow{
    private mousePosition : iMousePos;
    constructor() {
        this.mousePosition = {x:-1000,y:-1000};
    }

    get mousePos(){
        return this.mousePosition;
    }

    getMousePosition(evt:MouseEvent){
        this.mousePosition = { x : evt.clientX, y : evt.clientY};
    }

    windowSize(){
        let measurment : windowSize = {width: window.innerWidth, height: window.innerHeight}
        return measurment;
    }

    windowEvent(){
        window.addEventListener('mousemove',
            (evt)=>this.getMousePosition(evt) )
    }

    clearPortals(){
        let portals : HTMLCollectionOf<Element> = document.getElementsByClassName("tool-tip");


        if(portals != null){
            for(let i=0; i < portals.length; i++ ){
                let parent = portals[i].parentNode;
                if(parent != null){
                    parent.removeChild(portals[i])
                }
            }
        }

        portals = document.getElementsByClassName("tool-tip");

    }
}

export type toolTipType = "standard" | "custom" | "none";

interface iPROPS{
    tooltipType? : toolTipType;
    tooltipStandardContent? : {
        headerText : string,
        copy : string
    }
    toolTipCustomElement? : ReactElement | string;
    btnReference? : RefObject<HTMLButtonElement>;
    linkReference? : RefObject<HTMLAnchorElement>;
    timeoutInMS : number;
    yOffset? : number;
    xOffset? : number;
}

interface iSTATE {
    mousePosition : {
        x : number,
        y : number
    };
    isHovering : boolean;
}

export class ToolTip extends React.Component<iPROPS, iSTATE>{
    constructor(props:iPROPS) {
        super(props);
        this.state ={
            mousePosition : {x:-window.innerWidth, y:-window.innerHeight},
            isHovering : false
        };
        this.toolTipContainerRef = React.createRef<HTMLDivElement>();
        this.mousePosition = { x:-1000, y:-1000};
        this.initialized = false;
        this.toolTipTimeOutCounter = this.props.timeoutInMS
    }

    //TODO give mouse position a data type
    mousePosition : any;
    initialized : boolean;
    toolTipTimeOutCounter : number;
    toolTipContainerRef : React.RefObject<HTMLDivElement>;
    tooltipWidth : number = 0;
    tooltipHeight : number = 0;
    tooltipTop : number = 0;
    tooltipLeft : number = 0;

    private intervalID : any = 0;

    updateMousePos(){
        //Only update if the mouse is moving, check if position values have changed

        if(this.mousePosition.x !== win.mousePos.x && this.mousePosition.y !== win.mousePos.y){
            this.setState(
                {
                    mousePosition: {
                        x: win.mousePos.x,
                        y: win.mousePos.y
                    }
                });

          // console.log("state changed", "x:", this.state.mousePosition.x, "y: ", this.state.mousePosition.y);
        }

        let checkMouseIsOver = ()=>{
            let hoverCheck : boolean = true;
            if(this.props.btnReference?.current !== undefined){
                let rect = this.props.btnReference?.current?.getBoundingClientRect();
                // if mouse is too far the the left, the mouse x is less that the button x
                if(rect !== undefined){
                    if(this.state.mousePosition.x < rect.x  ){
                        hoverCheck = false;
                    }

                    // if mouse is too far to the right
                    if(this.state.mousePosition.x > (rect.x + rect?.width) ){
                        hoverCheck = false
                    }

                    // if mouse is too far the the left, the mouse x is less that the button x
                    if(this.state.mousePosition.y < rect.y ){
                        hoverCheck = false;
                    }

                    // if mouse is too far to the right
                    if(this.state.mousePosition.y > (rect.y + rect?.height) ){
                        hoverCheck = false
                    }
                }

            }
            return hoverCheck;
        };

        if(checkMouseIsOver() === false){
            this.clearHover();
        }else{
            let yPos = win.mousePos.y;
            let xPos = win.mousePos.x;
            if(this.toolTipContainerRef.current != null && this.toolTipContainerRef.current != undefined  ){
                this.tooltipWidth = this.toolTipContainerRef.current.getElementsByClassName("tt-element-main")[0].getBoundingClientRect().width;
                this.tooltipHeight = this.toolTipContainerRef.current.getElementsByClassName("tt-element-main")[0].getBoundingClientRect().height;
                this.tooltipTop = this.toolTipContainerRef.current.getBoundingClientRect().top;
                this.tooltipLeft = this.toolTipContainerRef.current.getBoundingClientRect().left;

            }


            //null check
            if(this.toolTipContainerRef.current != null && this.toolTipContainerRef.current !== undefined){
                //if it's too far to the right
                //console.log("tooltip left:", win.mousePos.x);
                if( win.mousePos.x + this.tooltipWidth > win.windowSize().width - this.tooltipWidth){
                    xPos = xPos - (this.tooltipWidth + 30);
                    if(this.props.xOffset != null){
                        yPos -= this.props.xOffset;
                    }
                }
                //if it's too close to bottom
                if(win.mousePos.y > win.windowSize().height - this.tooltipHeight){
                    yPos = yPos - this.tooltipHeight;
                    if(this.props.yOffset != null){
                        yPos = yPos - this.props.yOffset;
                    }
                }
                this.setState({mousePosition:{x:xPos, y:yPos}});
            }

            this.setState({isHovering : true})
        }

        if(this.toolTipTimeOutCounter <= 0){
            this.clearHover();
        }
    }

    getToolTip(){
            let tooltipInner : ReactElement = (<></>);

            switch(this.props.tooltipType){
                case "standard":
                    tooltipInner = (<>
                        <div className="app-tool-tip ">
                            <h3>{this.props.tooltipStandardContent?.headerText}</h3>
                            <p>{this.props.tooltipStandardContent?.copy}</p>
                        </div>
                    </>);
                    break;

                case "custom":
                    tooltipInner = (<>
                        <div
                            className="app-tool-tip"
                            style={
                                {
                                    top: this.state.mousePosition.y,
                                    left: this.state.mousePosition.x,
                                    paddingLeft:"1rem",
                                }
                            }
                        >
                            {this.props.toolTipCustomElement}
                        </div>
                    </>);
                    break;
                case "none":
                    tooltipInner = (
                        <></>
                    )
            }

            return (
                <span id="tooltipPortal" className={`${this.handleFadeInOut()} tool-tip`}>
                    <div ref={this.toolTipContainerRef} style={{  zIndex: 10000, border: "none", width:"1px", height:"1px", position: "fixed"}} >
                        {tooltipInner}
                    </div>
                </span>
            )

    }

    componentWillUnmount(): void {
        this.clearHover();
        this.clearInterval();
    }

    clearPortals(){
        win.clearPortals();
    }

    clearInterval(){
        clearInterval(this.intervalID);
    }

    startHover(){
        this.toolTipTimeOutCounter = this.props.timeoutInMS;
        if(this.props.tooltipType !== "none"){
            this.intervalID = setInterval(
                ()=>{
                    if(this.initialized === false){
                        this.initialized = true;
                        this.setState({isHovering:true});

                    }
                    this.toolTipTimeOutCounter -= 50;
                    if(this.toolTipTimeOutCounter <= 0){
                        this.clearHover();
                    }
                    this.updateMousePos();
                }, 50);
        }
    }

    clearHover(){
        clearInterval(this.intervalID);
        this.initialized = false;
        this.setState({isHovering:false} );
        //TODO revisit this optimization so we don't get too many tool tip containers
        // this.clearPortals();
    }

    componentDidMount(): void {
        //this.startHover();
    }

    handleFadeInOut(){
        if(this.toolTipTimeOutCounter <= 800 && this.toolTipTimeOutCounter > 700 ){
            return "fade-1"
        }else
        if(this.toolTipTimeOutCounter <= 700 && this.toolTipTimeOutCounter > 600 ){
            return "fade-11"
        }else
        if(this.toolTipTimeOutCounter <= 600 && this.toolTipTimeOutCounter > 500){
            return "fade-2"
        }else
        if(this.toolTipTimeOutCounter <= 500 && this.toolTipTimeOutCounter > 400){
            return "fade-21"
        }else
        if(this.toolTipTimeOutCounter <= 400 && this.toolTipTimeOutCounter > 300){
            return "fade-3"
        }else
        if(this.toolTipTimeOutCounter <= 300 && this.toolTipTimeOutCounter > 200){
            return "fade-31"
        }else
        if(this.toolTipTimeOutCounter <= 200 && this.toolTipTimeOutCounter > 100  ){
            return "fade-4"
        }else
        if(this.toolTipTimeOutCounter <= 100 && this.toolTipTimeOutCounter > 20  ){
            return "fade-41"
        }else
        if(this.toolTipTimeOutCounter < 20 && this.toolTipTimeOutCounter > 0  ){
            return "fade-5"
        }

        //HANDLE FADE IN

        if(this.toolTipTimeOutCounter <= this.props.timeoutInMS && this.toolTipTimeOutCounter > this.props.timeoutInMS-100 ){
            return "fade-5"
        }else if(this.toolTipTimeOutCounter <= this.props.timeoutInMS-100 && this.toolTipTimeOutCounter > this.props.timeoutInMS-150 ){
            return "fade-41"
        }else if(this.toolTipTimeOutCounter <= this.props.timeoutInMS-150 && this.toolTipTimeOutCounter > this.props.timeoutInMS-200){
            return "fade-4"
        }else if(this.toolTipTimeOutCounter <= this.props.timeoutInMS-200 && this.toolTipTimeOutCounter > this.props.timeoutInMS-250){
            return "fade-31"
        }else if(this.toolTipTimeOutCounter <= this.props.timeoutInMS-250 && this.toolTipTimeOutCounter > this.props.timeoutInMS-300){
            return "fade-3"
        }else if(this.toolTipTimeOutCounter <= this.props.timeoutInMS-300 && this.toolTipTimeOutCounter > this.props.timeoutInMS-350){
            return "fade-21"
        }else if(this.toolTipTimeOutCounter <= this.props.timeoutInMS-350 && this.toolTipTimeOutCounter > this.props.timeoutInMS-400  ){
            return "fade-2"
        }else if(this.toolTipTimeOutCounter <= this.props.timeoutInMS-400 && this.toolTipTimeOutCounter > this.props.timeoutInMS-450  ){
            return "fade-11"
        }else if(this.toolTipTimeOutCounter <= this.props.timeoutInMS-450 && this.toolTipTimeOutCounter > this.props.timeoutInMS-500  ){
            return "fade-0"
        }
    }

    debugPosition(){
        return(
            <p style={{position:"fixed", top:0, right:0}}>{`x: ${this.state.mousePosition.x} y: ${this.state.mousePosition.y} `}</p>
        )
    }



    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        let tooltip : ReactElement = (<></>);
        if(this.state.isHovering === true && this.toolTipTimeOutCounter > 0){
            tooltip = this.getToolTip();
        }

        const root = ()=>{
             let root : any | HTMLElement = document.getElementById("root");
             if(root != null){
                 return root;
             }
        };

        return ReactDOM.createPortal(tooltip, root());
    }

}