import * as React from "react";


interface iPROPS {
    dividerType : "solid" | "labeled";
    labelText? : string;
    classes? : string;
}

interface iSTATE {

}

export class DividerLine extends React.Component<iPROPS, iSTATE>{
    constructor(props:iPROPS) {
        super(props);
    }

    getLine(){
        switch (this.props.dividerType) {
            case "solid":
                return(
                    <>
                        <div className="divider-line"></div>
                    </>
                );
            case "labeled":
                return(
                    <>
                        <div className={`${this.props.classes} divider-line`}>
                            <div className="divider-left"></div>
                            <p className="label">{this.props.labelText}</p>
                            <div className="divider-right"></div>
                        </div>
                    </>
                )
        }
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (<>{this.getLine()}</>);
    }
}