import * as React from "react";


interface iSTATE{

}

interface iPROPS{

}

export class ContentToolTips extends React.Component<iPROPS, iSTATE>{
    constructor(props : iPROPS) {
        super(props);
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let toolTip = (<></>)
        return toolTip;
    }
}

export let toolTipContent = {
  mainNav : {
     headerText : "Navigate around your catalog manager",
     copy : "manage how your product data is stored, how the catalog manager works, and more"
  }
};