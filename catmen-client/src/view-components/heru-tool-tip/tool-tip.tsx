import * as React from "react";
import {win} from "../../index";
import {ReactElement, RefObject} from "react";

interface iMousePos{
    x:number;
    y:number;
}

interface iWindow{

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
        //console.log("mouse position", evt.clientX, evt.clientY);

    }

    windowEvent(){
        window.addEventListener('mousemove',
            (evt)=>this.getMousePosition(evt) )
    }
}

interface iPROPS{
    tooltipType? : "standard" | "custom";
    tooltipStandardContent? : {
        headerText : string,
        copy : string
    }
    toolTipCustomElement? : ReactElement;
    btnReference? : RefObject<HTMLButtonElement>;
    linkReference? : RefObject<HTMLAnchorElement>;
    timeoutInMS : number
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
    private intervalID : any = 0;

    updateMousePos(){
        //Only update if the mouse is moving, check if position values have changed
       // console.log("check update mouse");
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
            if(this.props.btnReference?.current != undefined){
                let rect = this.props.btnReference?.current?.getBoundingClientRect();
                // if mouse is too far the the left, the mouse x is less that the button x
                if(this.state.mousePosition.x < rect.x ){
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
            return hoverCheck;
        };

        if(checkMouseIsOver() === false){
            this.clearHover();
            console.log("false caused hover clear");
        }else{
            if(this.toolTipContainerRef.current !== null){
                this.toolTipContainerRef.current.style.top = (this.state.mousePosition.y).toString();
                this.toolTipContainerRef.current.style.left = (this.state.mousePosition.x).toString();
            }

            //top : this.state.mousePosition.y, left: this.state.mousePosition.x
            this.setState({isHovering : true})
        }



    }

    getToolTip(){
            let tooltipInner : ReactElement = (<></>);

            switch(this.props.tooltipType){
                case "standard":
                    tooltipInner = (<>
                        <div className="app-tool-tip">
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
                                    width:"100px",
                                    height:"100px"
                                }
                            }
                        >
                            <h2>my custom tooltip</h2>
                            {this.props.toolTipCustomElement}
                        </div>
                    </>);
                    break;
            }

            return (
                //<div ref={this.toolTipContainerRef} style={{zIndex: 10000, border: "3px solid red", width:"1px", height:"1px", position: "fixed", top : this.state.mousePosition.y, left: this.state.mousePosition.x}} >
                <div ref={this.toolTipContainerRef} style={{zIndex: 10000, border: "3px solid red", width:"1px", height:"1px", position: "fixed"}} >
                    {tooltipInner}
                </div>
            )

    }

    componentWillUnmount(): void {
        this.clearHover();
        this.clearInterval();
    }

    clearInterval(){
        console.log("clear interval");
        clearInterval(this.intervalID);
    }

    startHover(){
        console.log("hovered here****", this.toolTipTimeOutCounter);
        this.toolTipTimeOutCounter = this.props.timeoutInMS;
        this.intervalID = setInterval(
            ()=>{
                if(this.initialized === false){
                    this.initialized = true;
                    this.setState({isHovering:true});
                    console.log("start hover", this.state.isHovering);
                }
                this.toolTipTimeOutCounter -= 50;
                if(this.toolTipTimeOutCounter <= 0){
                    this.clearHover();
                }
                this.updateMousePos();

            }, 50);
    }

    clearHover(){
        console.log("clear hover");
        this.initialized = false;
        this.setState({isHovering:false} );
        clearInterval(this.intervalID);
    }

    componentDidMount(): void {
        //this.startHover();
    }

    quickTestHover():void {
        console.log("first hover");
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


    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {


        let tooltip : ReactElement = (<></>);
        if(this.state.isHovering === true && this.toolTipTimeOutCounter > 0){
            tooltip = this.getToolTip();
        }


        let constructedToolTip = (
          <>
              <span className={this.handleFadeInOut()}>{tooltip}</span>
               <p style={{position:"fixed", top:0, right:0}}>{`x: ${this.state.mousePosition.x} y: ${this.state.mousePosition.y} `}</p>
          </>
        );

        return constructedToolTip;
    }

}