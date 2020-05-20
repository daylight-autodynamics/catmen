import React from "react";

interface iPROPS {
    message: string;
}

interface iSTATE{

}

export class ManageAttributeMappingView extends React.Component<iPROPS, iSTATE>{
    // constructor(props:iPROPS) {
    //     super(props);
    //
    // }
    render(){
        return(
            <>
                <h1>Landing Page</h1>
                <h3>{this.props.message}</h3>
            </>
        );
    }
}