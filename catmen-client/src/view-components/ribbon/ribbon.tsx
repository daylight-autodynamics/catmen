import * as React from "react";



interface iPROPS {
    message: string;
}

interface iSTATE{

}

export class Ribbon extends React.Component<iPROPS, iSTATE>{
    constructor(props : iPROPS) {
        super(props);
    }
    render(){
        return(
            <>
                <h1>Ribbon</h1>
            </>
        );
    }
}