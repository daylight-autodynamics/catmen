import * as React from "react";
import {ReactElement} from "react";
import {iDataGridItem} from "./data-types-for-data-grid";
import AppButton from "../button/app-button";
import {CatmanIcon} from "../../svg/icons/icons";
import {selectedStateType, Tile} from "../tiles/tile-component";
import {toolTipContent} from "../../views/tool-tip-content/content-tool-tips";
import camelcase from "camelcase";
import {appColumns, iColumn} from "../../_sample-data/columns";
import {DataManager} from "../../data-components/data-manager/data-manager";
import classesIllustration from "../../images/SVG/illustration-classes.svg";
import {ToolTipContent} from "../heru-tool-tip/tool-tip-content";

//data grid data should be an array of arrays
//each product is an array of attributes
interface iPROPS {
    data : iDataGridItem[][];
    manageParentViews : Function;
    selectionCallback? : Function;
    columnsData : iColumn[];
    classes? : string;
    addAction : Function;
}

interface iSTATE {
    selectionSet : selectionObject[];
    checkedRows :number[];
    workingDataSet : iDataGridItem[][];
    hoveredRow : string;
}

export type selectionObject = {
    row : number;
    cell : number;
    selected : boolean;
    columnName : string;
}

export class DataGrid extends React.Component<iPROPS, iSTATE>{
    constructor(props:iPROPS) {
        super(props);
        this.state = {
            workingDataSet : this.props.data,
            selectionSet : [],
            checkedRows : [],
            hoveredRow : ""
        };
        this.startSelectionRow = 0;
        this.startSelectionCell = 0;

        this.cellRange = {
            startCell : 0,
            endCell : 0,
            startRow : 0,
            endRow : 0,
        };

        this.numCols = this.getNumColumns();
        this.numRows = this.getNumRows();
    }
    selectionSet : selectionObject[] = [];
    selectedCells : iDataGridItem[] = [];
    numCols : number;
    numRows: number;
    startSelectionRow : number;
    startSelectionCell : number;

    cellRange : any;
    _checkedRows : number[] = [];

    manageSelection(row:number, cell:number, columnName : string,  clearSelection : boolean){

        if(clearSelection){
            this.selectionSet = [];
            this._checkedRows = [];
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
                    selected : true,
                    columnName : this.props.columnsData[cell-2].columnName
                    //columnName : appColumns.getColumns[cell-2].columnName
                }
            );
        }

        for( let i = this.cellRange.startRow; i < this.cellRange.endRow+1; i++){
            for(let j= this.cellRange.startCell; j < this.cellRange.endCell+1; j++){
                this.selectionSet.push(
                    {
                        row: i,
                        cell: j,
                        selected : true,
                        columnName : this.props.columnsData[j-2].columnName
                    }
                );
            }
        }

        // handle single cell as start and end

        console.log("@@@ this.selectionSet: ", this.selectionSet);
        console.log("*** this.state.selectionSet: ", this.state.selectionSet);

        if(this.selectionSet.length === 2){
            if( this.selectionSet[0].row === this.selectionSet[1].row && this.selectionSet[0].cell === this.selectionSet[1].cell  ){
                this.selectionSet.splice(1,1);
            }
        }

        this.setState({
            selectionSet : this.selectionSet,
            checkedRows : this._checkedRows
        });


        if(this.props.selectionCallback !== undefined && this.props.selectionCallback !== null){
           type iSelectedItem = { row : number, cells : number[], productFields : iDataGridItem[] };
            let selectedItems : iSelectedItem[] = [  ];
            let lastRow : number = 0;

            // work through the selection set to organize things

           i: for(let i=0; i < this.selectionSet.length; i++){
                if(i===0){
                    //if it's the first one let's create a new entry
                    lastRow = this.selectionSet[0].row;
                    let newItem : iSelectedItem = { row : lastRow, cells:[], productFields : []};
                    selectedItems.push(newItem);
                }

                //loop over the existing list of rows to create new ones
                    if(this.selectionSet[i].row === lastRow){
                        //one more loop over the list to grab all the cells that belong to the row
                        if(selectedItems[selectedItems.length-1].cells.length === 0){
                            for(let j=0; j < this.selectionSet.length; j++){
                                if(this.selectionSet[j].row === lastRow){
                                    //if the row matches the last row, then push in the selected cell
                                    selectedItems[selectedItems.length-1].cells.push( this.selectionSet[j].cell );
                                }
                            }
                        }
                    }else{
                        lastRow = this.selectionSet[i].row;
                        let newItem : iSelectedItem = { row : lastRow, cells:[], productFields : []};
                        selectedItems.push(newItem);
                    }
            }

           for(let x=0; x < selectedItems.length; x++){
                for(let y=0; y < this.state.workingDataSet[selectedItems[x].row-2].length; y++){
                    selectedItems[x].productFields.push(this.state.workingDataSet[selectedItems[x].row-2][y] )
                }

           }


            this.props.selectionCallback(selectedItems, this._checkedRows, "standard-launch");
         }
    }

    clearSelection(){
        this.setState({selectionSet:[], checkedRows:[]});
        this._checkedRows = [];
        this.selectionSet = [];
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

        return this.props.columnsData.length;
    }

    getNumRows(){
       if(this.state.workingDataSet.length > 0){
           return this.state.workingDataSet.length;
       }else{
           return this.props.data.length;
       }
    }

    getProductUniqueID(index : number){

        for(let j=0; j < this.state.workingDataSet[index].length; j++){
            if(this.state.workingDataSet[index][j].columnName === "uniqueID"){
                return this.state.workingDataSet[index][j].value;
            }
        }
    }

    mouseDownAction(row : number, cell:number){
        this.startSelectionCell = cell;
        this.startSelectionRow = row;
    }

    mouseUpAction(row:number, cell:number, columnName : string){

        //console.log("@@@check", row, " ", cell, " ", columnName);
        this.manageSelection(row, cell, columnName, true);
        console.log("selection set: ", this.selectionSet);
    }

    hoverRowAction(row:number){
        this.setState({hoveredRow : row.toString()});

    }
    moueOutRowAction(){
        this.setState({hoveredRow : ""});
    }

    manageCheckbox(row : number){

        //find if this number is in the list
        let found : boolean = false;

        console.log("@@ checked rows: ",row);

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
        //First reset the cell selection
        this.selectionSet = [];

        for(let i=0; i < this._checkedRows.length; i++){
            for(let j=0; j < this.state.workingDataSet[this._checkedRows[i]].length; j++ ){
                let selectedCell : selectionObject = {
                    row : this._checkedRows[i]+2,
                    cell : j+2,
                    selected : true,
                    columnName : this.props.columnsData[j].columnName
                };
                this.selectionSet.push(selectedCell);
            }
        }


        this.setState({selectionSet : this.selectionSet});
        if(this.props.selectionCallback !== undefined){
            this.props.selectionCallback(this.state.selectionSet, this.state.checkedRows, "checkbox-launched");
        }
        //once people use the tool, we can hide the tool tip
        toolTipContent.showSelectRow = false;
    }

    switchToEditModeFromCheckBoxMode(){
        //handle switching from checkbox mode to cell selection mode
        //First reset the cell selection

        console.log("switch to edit mode");

        // for(let i=0; i < this._checkedRows.length; i++){
        //     for(let j=0; j < this.state.workingDataSet[this._checkedRows[i]].length; j++ ){
        //         let selectedCell : selectionObject = {
        //             row : this._checkedRows[i]+2,
        //             cell : j+2,
        //             selected : true,
        //             columnName : this.props.columnsData[j].columnName
        //         };
        //         this.selectionSet.push(selectedCell);
        //     }
        // }

        this._checkedRows = [];
        this.setState({
            checkedRows : this._checkedRows
        });
        console.log("switch to edit mode", this.selectionSet);
        console.log("switch to edit mode", this.state.selectionSet);
        if(this.props.selectionCallback !== undefined){
            this.props.selectionCallback(this.state.selectionSet, this.state.checkedRows, "checkbox-launched");
        }
    }

    iconCheck = (row : number):string=>{
        for(let i=0; i < this.state.checkedRows.length; i++){
            if(row === this.state.checkedRows[i]){
                return "checkbox-checked"
            }
        }
        return "checkbox-unchecked"
    };

    updateSelectionState = ()=>{
        this.setState({selectionSet : this.selectionSet});

    };

    getGridItems(){
        let cells : ReactElement[] = [];
        for(let i=0; i < this.state.workingDataSet.length; i++){
            for(let j=0; j < this.state.workingDataSet[i].length; j++){
                if(j === 0){
                    cells.push(
                        <div id={`row-${i+2}-start`} className={`cell checkbox-main `} style={{gridColumn : j+1, gridRow : i+2, zIndex : 100 + (this.numRows - i) }}>
                            <AppButton
                                OnClick={()=>this.manageCheckbox(i)}
                                hoverActions={[()=>this.hoverRowAction(i+2)]}
                                buttonType="transparent-bg"
                                tooltipType="custom"
                                tooltip={toolTipContent.selectRow()}
                                classes={`${this.iconCheck(i)}`}
                                iconCenter={(
                                    <CatmanIcon
                                        iconName={`${this.iconCheck(i)}`}
                                        width="100%"
                                        height="100%"
                                    />
                                )}
                            />
                            <CatmanIcon
                                classes={"shading-l-r"}
                                iconName="fader-left-to-right"
                                width="0.5rem"
                                height="100%"
                            />
                        </div>
                    )
                }

                let cell = (
                    <div className={`cell row-${i+2}`} style={{gridColumn : j+2, gridRow : i+2 }}>
                        <Tile
                            tileType={this.props.columnsData[j].control}
                            tileLabel={this.state.workingDataSet[i][j].value}
                            hoverActions={[()=>this.hoverRowAction(i+2)]}
                            mouseOutActions={[()=>this.moueOutRowAction()]}
                            mouseDownActions={
                                [() => this.mouseDownAction(i+2,j+2)]
                            }
                            mouseUpActions={
                                [
                                    () => this.props.manageParentViews(),
                                    () => this.mouseUpAction(i+2,j+2, this.props.columnsData[j].columnName)
                                ]
                            }
                            selectedClass={this.checkSelected(i+2, j+2)}

                        />

                    </div>
                );


                if( this.props.columnsData[j].control !== "hidden"){
                    cells.push(cell);
                }

                if(j === this.state.workingDataSet[i].length-1){
                    cells.push(
                        <div className="cell details" style={{gridColumn : j+3, gridRow : i+2, zIndex : 100 + (this.numRows - i) }}>
                            <AppButton
                                buttonType="nav-link"
                                navPath={`/catalog/spreadsheet?product=${this.getProductUniqueID(i)}`}
                                tooltipType="custom"
                                tooltip={toolTipContent.singleProduct()}
                                iconCenter={(
                                    <CatmanIcon
                                        iconName="go-arrow"
                                        width="1rem"
                                        height="100%"
                                    />
                                )}
                            />
                            <CatmanIcon
                                classes={"shading"}
                                iconName="fader-right-to-left"
                                width="0.5rem"
                                height="100%"
                            />

                        </div>
                    )
                }
            }
        }

        return cells;
    }

    getColumnHeaders(){
        let columnsHeads : ReactElement[] = [];

        for(let i=0; i < this.props.columnsData.length; i++ ){
            if(i === 0){
                columnsHeads.push(
                    <div className="cell checkbox-main grid-header" style={{gridColumn : i+1, gridRow : 1, zIndex : 120 + (this.numCols) }}>
                        <AppButton
                            OnClick={()=>this.manageCheckbox(i)}
                            buttonType="transparent-bg"
                            tooltipType="custom"
                            tooltip={toolTipContent.selectRow()}
                            classes={` `}
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

          const columnHeadTooltip = (tooltiptype : "custom" | "basic", tooltip:ReactElement | string, header:string)=>{

              switch (tooltiptype) {
                  case "basic":
                      return(<ToolTipContent
                          header={header}
                          copy={ tooltip }
                          tooltipType="deluxe"
                          icon={
                              <CatmanIcon
                                  iconName="icon-add-invert"
                                  classes=""
                                  height="1.5rem"
                                  width="1.5rem"
                              />
                          }
                      />);
                  case "custom":
                      return this.props.columnsData[i].toolTip;
              }

              return (<></>)
          };

            let columnHead = (
                <div className="cell grid-header" style={{gridColumn : i+2, gridRow : 1, zIndex: this.numRows+100+i  }}>
                    <Tile
                        tileType="column-header"
                        tileLabel={this.props.columnsData[i].columnLabel}
                        toolTip={ columnHeadTooltip(
                            this.props.columnsData[i].tooltipType,
                            this.props.columnsData[i].toolTip,
                            this.props.columnsData[i].columnLabel
                        )}
                        mouseDownActions={
                            [ ]
                        }
                        mouseUpActions={
                            [
                                () => this.props.manageParentViews()
                            ]
                        }
                        selectedClass={""}
                    />
                </div>
            );

            if(this.props.columnsData[i].control != "hidden"){
                columnsHeads.push(columnHead);
            }


            //final column head action
            if(i === this.props.columnsData.length-1){
                columnsHeads.push(
                    <div className="cell details grid-header"
                         style={{gridColumn : this.props.columnsData.length+2, gridRow : 1, zIndex : (200 + this.numCols+2) }}
                        >
                        <AppButton
                            buttonType="button-custom"
                            classes="add-column"
                            navPath={`/catalog/spreadsheet`}
                            OnClick={()=>this.props.addAction("add-attribute")}
                            tooltipType="custom"
                            tooltip={toolTipContent.insertColumn()}
                            iconCenter={(
                                <CatmanIcon
                                    iconName="icon-plus"
                                    width="0.5rem"
                                    height="100%"
                                />
                            )}
                        />
                        <CatmanIcon
                            classes={"shading-l-r"}
                            iconName="fader-right-to-left"
                            width="0.5rem"
                            height="100%"
                        />
                    </div>
                )
            }
        }

        return( columnsHeads );
    }

    gridStyles(){

            let style = `
            .row-${this.state.hoveredRow} {
                background-color: #f4f4f5;                
            }
            
            .row-${this.state.hoveredRow} .cell-editable{
                z-index:100;
            }
            
            .row-${this.state.hoveredRow} p{
                    color: #473F4A  ;
            }
            `;



        return <style dangerouslySetInnerHTML={{ __html: `${style}` }} />
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        let columnHeaders : ReactElement[] = this.getColumnHeaders();

        //having some trouble with layout of grid and checkboxes
        // style={{gridTemplateColumns : `1.5rem repeat(${this.getNumColumns().toString()}, max-content) 1rem`}}
        let constructedGrid : ReactElement = (
            <>
                <div className={`data-grid ${this.props.classes}`}>
                    {this.gridStyles()}
                    <div className="viewport">
                        {columnHeaders}
                        {this.getGridItems()}
                    </div>
                </div>
            </>
        );

        return constructedGrid;
    }
}