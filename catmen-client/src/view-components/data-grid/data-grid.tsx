import * as React from "react";
import {ReactElement} from "react";
import {iDataGridItem} from "./data-types-for-data-grid";
import AppButton from "../button/app-button";
import {CatmanIcon} from "../../svg/icons/icons";
import {selectedStateType, Tile} from "../tiles/tile-component";
import {toolTipContent} from "../../views/_common/tool-tip-content/content-tool-tips";
import camelcase from "camelcase";

//data grid data should be an array of arrays
//each product is an array of attributes
interface iPROPS {
    data : iDataGridItem[][];
    manageParentViews : Function;
    selectionCallback? : Function
}

interface iSTATE {
    selectionSet : selectionObject[];
    checkedRows :number[];
}

export type selectionObject = {
    row : number;
    cell : number;
    selected : boolean;
}

export class DataGrid extends React.Component<iPROPS, iSTATE>{
    constructor(props:iPROPS) {
        super(props);
        this.numCols = this.getNumColumns();
        this.numRows = this.getNumRows();
        this.state = {
            selectionSet : [],
            checkedRows : []
        };
        this.startSelectionRow = 0;
        this.startSelectionCell = 0;

        this.cellRange = {
            startCell : 0,
            endCell : 0,
            startRow : 0,
            endRow : 0,
        }
    }
    selectionSet : selectionObject[] = [];
    numCols : number;
    numRows: number;
    startSelectionRow : number;
    startSelectionCell : number;

    cellRange : any;
    _checkedRows : number[] = [];

    manageSelection(row:number, cell:number, clearSelection : boolean){

        if(clearSelection){
            this.selectionSet = [];
        }

        if(this.startSelectionRow > row){
            this.cellRange.startRow = row;
            this.cellRange.endRow = this.startSelectionRow
        }else{
            this.cellRange.startRow = this.startSelectionRow;
            this.cellRange.endRow = row;
        }

        if(this.startSelectionCell > cell){
            this.cellRange.startCell = cell;
            this.cellRange.endCell = this.startSelectionCell;
        }else {
            this.cellRange.startCell = this.startSelectionCell;
            this.cellRange.endCell = cell;
        }


        if(row === this.startSelectionRow && cell === this.startSelectionCell){
            this.selectionSet.push(
                {
                    row: row,
                    cell: cell,
                    selected : true
                }
            );
        }

        for( let i = this.cellRange.startRow; i < this.cellRange.endRow+1; i++){
            for(let j= this.cellRange.startCell; j < this.cellRange.endCell+1; j++){
                this.selectionSet.push(
                    {
                        row: i,
                        cell: j,
                        selected : true
                    }
                );
            }
        }

        this.setState({selectionSet : this.selectionSet});
        console.log("selection set after drag", this.state.selectionSet);
        if(this.props.selectionCallback !== undefined && this.props.selectionCallback !== null){
           let selectedItems : iDataGridItem[] = [];
            for(let i=0; i < this.selectionSet.length; i++){
               selectedItems.push( this.props.data[this.selectionSet[i].row][this.selectionSet[i].cell]);
           }

            this.props.selectionCallback(selectedItems);
        }
    }

    checkSelected(row:number, cell:number):selectedStateType{
        for(let i=0; i<this.state.selectionSet.length; i++){
            if( this.state.selectionSet[i].row === row && this.state.selectionSet[i].cell === cell){
                return "selected";
            }
        }
        //if nothing is found, return false because it isn't selected
        return "";
    }

    getNumColumns(){
        //TODO swap this out to calculating total normalized columns
        return this.props.data[0].length;
    }

    getNumRows(){
        return this.props.data.length;
    }

    getProductUniqueID(index : number){
        for(let j=0; j < this.props.data[index].length; j++){
            if(this.props.data[index][j].column === "uniqueID"){
                return this.props.data[index][j].value;
            }
        }
    }

    mouseDownAction(row : number, cell:number){
        this.startSelectionCell = cell;
        this.startSelectionRow = row;
    }

    mouseUpAction(row:number, cell:number){
        this.manageSelection(row, cell, true);
    }

    manageCheckbox(row : number){

        //find if this number is in the list
        let found : boolean = false;
        for(let i=0; i < this._checkedRows.length; i++){
            if(this._checkedRows[i] === row){
                //if it is in the list remove it which unchecks
                this._checkedRows.splice(i, 1);
                this.setState({checkedRows : this._checkedRows});
                found = true;
            }
        }
        if(found === false){
            this._checkedRows.push(row);
            this.setState({checkedRows : this._checkedRows});
        }


        //handle selecting the checked
        this.selectionSet = [];

        for(let i=0; i < this._checkedRows.length; i++){
            for(let j=0; j < this.props.data[this._checkedRows[i]].length; j++ ){
                let selectedCell : selectionObject = {
                    row : this._checkedRows[i],
                    cell : j,
                    selected : true
                };
                this.selectionSet.push(selectedCell);
            }
        }

        this.setState({selectionSet : this.selectionSet});
        console.log("selection state: ", this.state.selectionSet);
    }

    iconCheck = (row : number):string=>{
        for(let i=0; i < this.state.checkedRows.length; i++){
            if(row === this.state.checkedRows[i]){
                return "checkbox-checked"
            }
        }
        return "checkbox-unchecked"
    };

    getGridItems(){
        let cells : ReactElement[] = [];
        for(let i=0; i < this.props.data.length; i++){
            for(let j=0; j < this.props.data[i].length; j++){
                if(j === 0){

                    cells.push(
                        <div className="cell checkbox-main" style={{gridColumn : j+1, gridRow : i+1, zIndex : 100 + (this.numRows - i) }}>
                            <AppButton
                                OnClick={()=>this.manageCheckbox(i)}
                                buttonType="transparent-bg"
                                tooltipType="custom"
                                tooltip={toolTipContent.mainNav}
                                classes={`${this.iconCheck(i)}`}
                                iconCenter={(
                                    <CatmanIcon
                                        iconName={`${this.iconCheck(i)}`}
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
                        <Tile
                            tileType="edit-cell"
                            tileLabel={this.props.data[i][j].value}
                            mouseDownActions={
                                [() => this.mouseDownAction(i+1,j+2)]
                            }
                            mouseUpActions={
                                [
                                    () => this.props.manageParentViews(),
                                    () => this.mouseUpAction(i+1,j+2)
                                ]
                            }
                            selectedClass={this.checkSelected(i+1, j+2)}
                        />
                    </div>
                );

                cells.push(cell);

                if(j === this.props.data[i].length-1){
                    cells.push(
                        <div className="cell details" style={{gridColumn : j+3, gridRow : i+1, zIndex : 100 + (this.numRows - i) }}>
                            <AppButton
                                buttonType="nav-link"
                                navPath={`/catalog/spreadsheet?product=${this.getProductUniqueID(i)}`}
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