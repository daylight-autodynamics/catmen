import * as React from "react";

interface iPROPS {
    mainTitle : string;
    subTitle? : string;
    titleType : "subtitle-above" | "subtitle-below" | "no-subtitle"
}

interface iSTATE{

}

export class TitleArea extends React.Component<iPROPS, iSTATE>{
    constructor(props:iPROPS) {
        super(props);
    }

    getTitle(){

        switch (this.props.titleType) {
            case "no-subtitle":
                return(
                    <div className="title-area">
                        <h2>
                            {this.props.mainTitle}
                        </h2>
                    </div>
                );
            case "subtitle-above":
                return(
                <div className="title-area">
                    <p>
                        {this.props.subTitle}
                    </p>
                    <h2>
                        {this.props.mainTitle}
                    </h2>
                </div>
                );

            case "subtitle-below":
                return(
                    <div className="title-area">
                        <h2>
                            {this.props.mainTitle}
                        </h2>
                        <p>
                            {this.props.subTitle}
                        </p>
                    </div>
                )
        }

    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return this.getTitle();
    }

}