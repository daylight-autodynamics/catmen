import * as React from "react";
import {ReactElement} from "react";
import {iDataGridItem} from "./data-types-for-data-grid";
import AppButton from "../button/app-button";
import {CatmanIcon} from "../../svg/icons/icons";
import {Tile} from "../tiles/tile-component";
import {toolTipContent} from "../../views/_common/tool-tip-content/content-tool-tips";

//data grid data should be an array of arrays
//each product is an array of attributes
interface iPROPS {
    data : iDataGridItem[][]
}

interface iSTATE {

}

export class DataGrid extends React.Component<iPROPS, iSTATE>{
    constructor(props:iPROPS) {
        super(props);
        this.numCols = this.getNumColumns();
        this.numRows = this.getNumRows();
    }

    numCols : number;
    numRows: number;

    getNumColumns(){
        //TODO swap this out to calculating total normalized columns
        return this.props.data[0].length;
    }

    getNumRows(){
        return this.props.data.length;
    }

    getGridItems(){
        let cells : ReactElement[] = [];
        for(let i=0; i < this.props.data.length; i++){
            for(let j=0; j < this.props.data[i].length; j++){
                if(j === 0){
                    cells.push(
                        <div className="cell checkbox-main" style={{gridColumn : j+1, gridRow : i+1, zIndex : 100 + (this.numRows - i) }}>
                            <AppButton
                                buttonType="transparent-bg"
                                tooltipType="custom"
                                tooltip={toolTipContent.mainNav}
                                iconCenter={(
                                    <CatmanIcon
                                        iconName="checkbox-unchecked"
                                        width="0.5rem"
                                        height="100%"
                                    />
                                )}
                            />
                        </div>
                    )
                }

                let cell = (
                    <div className="cell" style={{gridColumn : j+2, gridRow : i+1 }}>
                        <Tile tileType="edit-cell" tileLabel={this.props.data[i][j].value}/>
                    </div>
                );

                cells.push(cell);

                if(j === this.props.data[i].length-1){
                    cells.push(
                        <div className="cell details" style={{gridColumn : j+3, gridRow : i+1, zIndex : 100 + (this.numRows - i) }}>
                            <AppButton
                                buttonType="transparent-bg"
                                tooltipType="custom"
                                tooltip={toolTipContent.mainNav}
                                iconCenter={(
                                    <CatmanIcon
                                        iconName="go-arrow"
                                        width="1rem"
                                        height="100%"
                                    />
                                )}
                            />
                        </div>
                    )
                }
            }
        }



        return cells;
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        let gridItems : ReactElement[] = [];
        let columnHeaders : ReactElement[]=[];

        let constructedGrid : ReactElement = (
            <>
                <div className="data-grid">
                    <div className="viewport" style={{gridTemplateColumns : `1.5rem repeat(${this.getNumColumns().toString()}, max-content) 1rem`}}>
                        {columnHeaders}
                        {this.getGridItems()}
                    </div>
                </div>
            </>
        );

        return constructedGrid;
    }
}