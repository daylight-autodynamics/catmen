import * as React from "react";

interface iPROPS {
    mainTitle : string;
    subTitle? : string;
}

interface iSTATE{

}

export class TitleArea extends React.Component<iPROPS, iSTATE>{
    constructor(props:iPROPS) {
        super(props);
    }

    getTitle(){
        let title = (
        <div className="title-area">
            <p>
                {this.props.subTitle}
            </p>
            <h2>
                {this.props.mainTitle}
            </h2>
        </div>);
        return title;
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return this.getTitle();
    }

}