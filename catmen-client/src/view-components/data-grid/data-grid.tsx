import * as React from "react";
import {ReactElement} from "react";
import {iDataGridItem} from "../../_catman-data-types";
import AppButton from "../button/app-button";
import {CatmanIcon} from "../../svg/icons/icons";
import {selectedStateType, Tile} from "../tiles/tile-component";
import {toolTipContent} from "../../views/tool-tip-content/content-tool-tips";
import camelcase from "camelcase";
import {iColumn} from "../../_sample-data/product-columns";
import {DataManager} from "../../data-components/data-manager/data-manager";
import classesIllustration from "../../images/SVG/illustration-classes.svg";
import {ToolTipContent} from "../heru-tool-tip/tool-tip-content";
import ReactDOM from "react-dom";
import {win} from "../../index";
import {focusInputType} from "../../views/catalog-views/catalog-details/catalog-details-view";

//data grid data should be an array of arrays
//each product is an array of attributes
interface iPROPS {
    data : iDataGridItem[][];
    manageParentViews : Function;
    selectionCallback? : Function;
    columnsData : iColumn[];
    classes? : string;
    addAction : Function;
    focusedItem? : focusInputType;
    hasDetailsActionButton : boolean
}

interface iSTATE {
    selectionSet : selectionObject[];
    checkedRows :number[];
    workingDataSet : iDataGridItem[][];
    hoveredRow : string;
    mouseIsDown : boolean;
    mouseX : number;
    mouseY : number;
    initialMouseX : number;
    initialMouseY : number;
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
            hoveredRow : "",
            mouseIsDown : false,
            mouseX : 0,
            mouseY : 0,
            initialMouseX : 0,
            initialMouseY : 0
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

    //used root for portals for overlays
    root = ()=>{
        let root : any | HTMLElement = document.getElementById("root");
        if(root != null){
            return root;
        }
    };

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
        this.setState({
            mouseIsDown : true,
            initialMouseX : win.mousePos.x,
            initialMouseY : win.mousePos.y
        });
    }

    mouseUpAction(row:number, cell:number, columnName : string){
        this.setState({mouseIsDown : false});
        this.manageSelection(row, cell, columnName, true);
        console.log("selection set: ", this.selectionSet);
        this.manageAppCues();
    }


    hoverRowAction(row:number){
        this.setState({hoveredRow : row.toString()});
    }
    mouseOutRowAction(){
        this.setState({hoveredRow : ""});
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

    iconForCheckBox = (row : number):string=>{
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
                                classes={`${this.iconForCheckBox(i)}`}
                                iconCenter={(
                                    <CatmanIcon
                                        iconName={`${this.iconForCheckBox(i)}`}
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
                    <div draggable={false} className={`cell row-${i+2}`} style={{gridColumn : j+2, gridRow : i+2 }}>
                        <Tile
                            tileType={this.props.columnsData[j].control}
                            tileLabel={this.state.workingDataSet[i][j].value}
                            action={() => this.clickCellsActions()}
                            hoverActions={[()=>this.hoverRowAction(i+2)]}
                            mouseOutActions={[()=>this.mouseOutRowAction()]}
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

                if(j === this.state.workingDataSet[i].length-1 && this.props.hasDetailsActionButton === true){
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

    columnHeadTooltip = (tooltiptype : "custom" | "basic", tooltip:ReactElement | string, header:string)=>{

        switch (tooltiptype) {
            case "basic":
                return(<ToolTipContent
                    header={header}
                    copy={ tooltip }
                    tooltipType="deluxe"
                    icon={
                        <CatmanIcon
                            iconName="info-icon-help"
                            classes=""
                            height="1.5rem"
                            width="1.5rem"
                        />
                    }
                />);
            case "custom":
                return tooltip;
        }

        return (<></>)
    };

    getColumnHeaders(){
        let columnsHeads : ReactElement[] = [];

        //Header checkbox for "select all"
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
                                    iconName={`${this.iconForCheckBox(i)}`}
                                    width="0.5rem"
                                    height="100%"
                                />
                            )}
                        />
                    </div>
                )
            }

            //Handling the something-in-column selected visual indicator
            const columnActiveCheck = ()=>{
                if(this.props.focusedItem?.cell === (i+2) && this.props.focusedItem.editDrawerOpen === true){
                    return {tileType:"header-active", cellClass:"active"};
                }else{
                    return {tileType:"column-header", cellClass:""};
                }
            };


            let columnHead = (
                <div className={`cell grid-header ${columnActiveCheck().cellClass}`} style={{gridColumn : i+2, gridRow : 1, zIndex: this.numRows+100+i  }}>
                    <Tile
                        tileType={columnActiveCheck().tileType}
                        tileLabel={this.props.columnsData[i].columnLabel}
                        toolTip={ this.columnHeadTooltip(
                            this.props.columnsData[i].tooltipType,
                            this.props.columnsData[i].toolTip,
                            this.props.columnsData[i].columnLabel
                        )}
                        toolTipTimeOut={30000}
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


            //create the selected overlay
            if(this.props.focusedItem?.cell === (i+2) && this.props.focusedItem.editDrawerOpen === true){
                           let selectedIndicator = (
                               <div className="cell selected-indicator" style={{gridColumn : i+2, gridRowStart : this.cellRange.startRow, gridRowEnd:this.cellRange.endRow+1 }}>

                               </div>
                           );
                columnsHeads.push(selectedIndicator)
            }
        }

        return( columnsHeads );
    }

    //HOVER ROW STYLE
    gridStyles(){
        //This let's us have a hover row effect with css grid
        //This way we don't have to put containers around each row just for visual cue
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

    clickCellsActions(){
        this.setState({mouseIsDown : false})
    }

    //DRAG AREA - create bounding box while dragging
    getDragArea(){
        //Only run if mouse is down
        if(this.state.mouseIsDown === true){
            let calcStyles =()=> {
                //calculate where the drag area will draw
                let coordinates = {
                    top : this.state.initialMouseY,
                    bottom : win.windowSize().height - this.state.mouseY,
                    left : this.state.initialMouseX,
                    right: win.windowSize().width - this.state.mouseX
                };

                if(this.state.initialMouseY <=  this.state.mouseY ){
                    coordinates.top = this.state.initialMouseY;
                    coordinates.bottom = win.windowSize().height - this.state.mouseY;
                }else if(this.state.initialMouseY >= this.state.mouseY){
                    coordinates.top = win.mousePos.y;
                    coordinates.bottom = win.windowSize().height - this.state.initialMouseY;
                }

                if( this.state.mouseX >=  this.state.initialMouseX ){
                    coordinates.left = this.state.initialMouseX;
                    coordinates.right = win.windowSize().width - this.state.mouseX;
                }else if( this.state.mouseY >= this.state.initialMouseY){
                    coordinates.left = win.mousePos.x;
                    coordinates.right = win.windowSize().width - this.state.initialMouseX;
                }

                if( this.state.mouseX <=  this.state.initialMouseX && this.state.initialMouseY >=  this.state.mouseY ){
                    coordinates.left = this.state.mouseX;
                    coordinates.right = win.windowSize().width - this.state.initialMouseX;
                }
                return coordinates;
            };
            let dragArea = (
                <div
                    className="drag-area"
                    style={ calcStyles() }
                >
                    <div className="drag-inner-container">
                        <div className="tool-tip">
                            {toolTipContent.clickDragGrid()}
                        </div>
                    </div>
                </div>
            );
            return ReactDOM.createPortal(dragArea, this.root());
        }
    }

    //Mouse move, this is used for defining the drag area rectangle but could be used for other stuff
    mouseMoveActions(){
        this.setState({mouseX : win.mousePos.x, mouseY : win.mousePos.y})
    }

    //APP CUES aka Super tooltips
    manageAppCues(){
        console.log("selection set length", this.selectionSet);

        if(this.selectionSet.length > 1){
            toolTipContent.gridDragTutorial++;
        }
        console.log("grid tut ", toolTipContent.gridDragTutorial);
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        let columnHeaders : ReactElement[] = this.getColumnHeaders();

        let testTooltip : ReactElement = (
            <div className="tool-tip" style={{height : "344px"}}>
                {toolTipContent.clickDragGrid()}
            </div>
        );

        let gridStyle = `1rem repeat(${this.getNumColumns()}, minmax(max-content, 1fr)) max-content`;

        let constructedGrid : ReactElement = (
            <>
                <div className={`data-grid ${this.props.classes}`}>
                    {this.gridStyles()}
                    <div style={{ display:'grid', gridTemplateColumns:gridStyle}} className="viewport" onMouseMove={()=>this.mouseMoveActions()}>
                        {columnHeaders}
                        {this.getGridItems()}
                    </div>
                </div>
                {this.getDragArea()}

            </>
        );

        return constructedGrid;
    }
}