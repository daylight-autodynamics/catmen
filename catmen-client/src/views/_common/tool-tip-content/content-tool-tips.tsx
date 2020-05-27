import * as React from "react";
import {CatmanIcon} from "../../../svg/icons/icons";
import {ToolTipContent} from "../../../view-components/heru-tool-tip/tool-tip-content";


interface iSTATE{

}

interface iPROPS{

}

export class ContentToolTips extends React.Component<iPROPS, iSTATE>{
    constructor(props : iPROPS) {
        super(props);
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let toolTip = (<></>);
        return toolTip;
    }
}

export let toolTipContent = {
  mainNav : (
      <ToolTipContent
          header="Navigation"
          copy="Use this menu to access different sections of the app"
          tooltipType="deluxe"
          icon={
              <CatmanIcon
                  iconName="compass"
                  classes=""
                  height="1.5rem"
                  width="1.5rem"
              />
          }
      />
  )
};