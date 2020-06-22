import * as React from "react";
import {iDataGridItem} from "../../view-components/data-grid/data-types-for-data-grid";
import {iColumn} from "../../_sample-data/columns";
import {toolTipContent} from "../../views/_common/tool-tip-content/content-tool-tips";


interface iDataManager {
    productData : iDataGridItem[][];
}

export type iUpdateSet = {row : number, cell : number, newData:string}

export class DataManager implements iDataManager{
    productData : iDataGridItem[][];
    constructor(productData : iDataGridItem[][]) {
        this.productData = productData;
    }

    get getColumns() : iColumn[]{
        let testMenu = (<div style={{backgroundColor : "#cecece"}}>Menu</div>);

        return [
            {
                columnName : "uniqueID",
                columnLabel : " ",
                columnMenu : testMenu,
                columnType : "hidden",
                control : "hidden",
                tooltipType : "custom",
                toolTip : "this is non-editable unique id"
            },
            {
                columnName : "ReferenceImage",
                columnLabel : "Reference Image",
                columnMenu : testMenu,
                columnType : "standard",
                control : "media",
                tooltipType : "custom",
                toolTip : toolTipContent.columnHeaderToolTips("ReferenceImage")
            },
            {
                columnName : "PartNumber",
                columnLabel : "Part Number ",
                columnMenu : testMenu,
                columnType : "required",
                control : "text-input",
                tooltipType : "custom",
                toolTip : toolTipContent.columnHeaderToolTips("PartNumber")
            },
            {
                columnName : "ProductGroup",
                columnLabel : "Product Group",
                columnMenu : testMenu,
                columnType : "standard",
                control : "text-input",
                tooltipType : "custom",
                toolTip : toolTipContent.columnHeaderToolTips("ProductGroup")
            },
            {
                columnName : "ProductName",
                columnLabel : "Product Name",
                columnMenu : testMenu,
                columnType : "standard",
                control : "text-input",
                tooltipType : "custom",
                toolTip : toolTipContent.columnHeaderToolTips("ProductName")
            },
            {
                columnName : "Class",
                columnLabel : "Class",
                columnMenu : testMenu,
                columnType : "standard",
                control : "text-input",
                tooltipType : "custom",
                toolTip : toolTipContent.columnHeaderToolTips("Class")
            },
            {
                columnName : "ProductType",
                columnLabel : "Product Type",
                columnMenu : testMenu,
                columnType : "standard",
                control : "text-input",
                tooltipType : "basic",
                toolTip : ""
            },
            {
                columnName : "OverallDimensions",
                columnLabel : "Overall Dimensions",
                columnMenu : testMenu,
                columnType : "user-gen",
                control : "text-input",
                tooltipType : "basic",
                toolTip : ""
            },


            {
                columnName : "OverallDepth",
                columnLabel : "Overall Depth",
                columnMenu : testMenu,
                columnType : "user-gen",
                control : "text-input",
                tooltipType : "basic",
                toolTip : ""
            },
            {
                columnName : "OverallHeight",
                columnLabel : "Overall Height",
                columnMenu : testMenu,
                columnType : "user-gen",
                control : "text-input",
                tooltipType : "basic",
                toolTip : ""
            },
            {
                columnName : "OverallLength",
                columnLabel : "Overall Length",
                columnMenu : testMenu,
                columnType : "user-gen",
                control : "text-input",
                tooltipType : "basic",
                toolTip : ""
            },
            {
                columnName : "Seat",
                columnLabel : "Seat",
                columnMenu : testMenu,
                columnType : "user-gen",
                control : "text-input",
                tooltipType : "basic",
                toolTip : ""
            },
            {
                columnName : "ArmHeightFloorToArm",
                columnLabel : "Arm Height - Floor to Arm",
                columnMenu : testMenu,
                columnType : "user-gen",
                control : "text-input",
                tooltipType : "basic",
                toolTip : ""
            },
            {
                columnName : "BackHeightSeatToTopOfBack",
                columnLabel : "Back Height - Seat to Top of Back",
                columnMenu : testMenu,
                columnType : "user-gen",
                control : "text-input",
                tooltipType : "basic",
                toolTip : ""
            },
            {
                columnName : "FullyReclinedDepthFrontToBack",
                columnLabel : "Fully Reclined Depth - Front to Back",
                columnMenu : testMenu,
                columnType : "user-gen",
                control : "text-input",
                tooltipType : "basic",
                toolTip : ""
            },
            {
                columnName : "LegHeightTopToBottom",
                columnLabel : "Leg Height - Top to Bottom",
                columnMenu : testMenu,
                columnType : "user-gen",
                control : "text-input",
                tooltipType : "basic",
                toolTip : ""
            },
            {
                columnName : "ClearanceFromFloorToBottomOfSofa",
                columnLabel : "Clearance from Floor to Bottom of Sofa",
                columnMenu : testMenu,
                columnType : "user-gen",
                control : "text-input",
                tooltipType : "basic",
                toolTip : ""
            }


        ]
    }

    get getData():iDataGridItem[][]{
        return this.productData;
    }

    addToProductGroup(){
        let stub = this.productData[0];
        this.productData.push(stub);
    }

    getGroups():string[]{
        let groupsAll : string[] = [];

        //first walk is extract all the product groups, then we'll remove duplicates
        i: for( let i=0; i < this.productData.length; i++){
                for(let j=0; j < this.productData[i].length; j++){
                    if(this.productData[i][j].columnName === "ProductGroup"){
                        groupsAll.push(this.productData[i][j].value);
                        continue i;
                    }
                }
            }

        //second walk over groups to remove duplicates
        let finalGroups = [];
        i: for(let i=0; i < groupsAll.length; i++){
            if(i===0){
                finalGroups.push(groupsAll[i]);
                continue i;
            }

            for(let j=0; j < finalGroups.length; j++){
                if( finalGroups[j] === groupsAll[i]){
                    continue i;
                }
                if( j === finalGroups.length - 1){
                    finalGroups.push(groupsAll[i])
                }
            }
        }

        console.log(finalGroups);
            return finalGroups;
    }

    //update package is type iUpdateSet = {row : number, cell : number, newData:string}
    set setProductData(updatePackage : iUpdateSet){
        this.productData[updatePackage.row][updatePackage.cell].value = updatePackage.newData;
    }

}