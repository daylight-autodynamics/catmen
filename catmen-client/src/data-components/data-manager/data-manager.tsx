import * as React from "react";
import {iDataGridItem} from "../../_catman-data-types";
import {iColumn} from "../../_sample-data/product-columns";
import {toolTipContent} from "../../views/tool-tip-content/content-tool-tips";
import {mediaLibraryData, mediaLibraryDataMediaObjects, mediaObject, shotType} from "../../_sample-data/media-library";
import {dataAttributesLibrary, standardAttributes} from "../../_sample-data/attributes-data-and-columns";

export type dataSetType = "media-data" | "media-grid-data" | "product-data" | "product-grid-data" | "attributes-data";
export type validationActions = "required" | "custom" | "no-duplicates";

interface iDataManager {
    productData : iDataGridItem[][];
}

export type iUpdateSet = {row : number, cell : number, newData:string}

export class DataManager implements iDataManager{
    productData : iDataGridItem[][];

    constructor(productData : iDataGridItem[][]) {
        this.productData = productData;
    }

    get getProductColumns():iColumn[]{
        let testMenu = (<div style={{backgroundColor : "#cecece"}}>Menu</div>);

        return [
            {
                validationAction : [],
                columnName : "uniqueID",
                columnLabel : " ",
                columnMenu : testMenu,
                columnType : "hidden",
                control : "hidden",
                tooltipType : "custom",
                toolTip : "this is non-editable unique id"
            },
            {
                validationAction : [],
                columnName : "ReferenceImage",
                columnLabel : "Reference Image",
                columnMenu : testMenu,
                columnType : "standard",
                control : "media",
                tooltipType : "custom",
                toolTip : toolTipContent.columnHeaderToolTips("ReferenceImage")
            },
            {
                validationAction : ["no-duplicates", "required"],
                columnName : "PartNumber",
                columnLabel : "Part Number ",
                columnMenu : testMenu,
                columnType : "required",
                control : "text-input",
                tooltipType : "custom",
                toolTip : toolTipContent.columnHeaderToolTips("PartNumber")
            },
            {
                validationAction : [],
                columnName : "ProductGroup",
                columnLabel : "Product Group",
                columnMenu : testMenu,
                columnType : "standard",
                control : "text-input",
                tooltipType : "custom",
                toolTip : toolTipContent.columnHeaderToolTips("ProductGroup")
            },
            {
                validationAction : [],
                columnName : "ProductName",
                columnLabel : "Product Name",
                columnMenu : testMenu,
                columnType : "standard",
                control : "text-input",
                tooltipType : "custom",
                toolTip : toolTipContent.columnHeaderToolTips("ProductName")
            },
            {
                validationAction : [],
                columnName : "Class",
                columnLabel : "Class",
                columnMenu : testMenu,
                columnType : "standard",
                control : "text-input",
                tooltipType : "custom",
                toolTip : toolTipContent.columnHeaderToolTips("Class")
            },
            {
                validationAction : [],
                columnName : "ProductType",
                columnLabel : "Product Type",
                columnMenu : testMenu,
                columnType : "standard",
                control : "text-input",
                tooltipType : "basic",
                toolTip : ""
            },
            {
                validationAction : [],
                columnName : "OverallDimensions",
                columnLabel : "Overall Dimensions",
                columnMenu : testMenu,
                columnType : "user-gen",
                control : "text-input",
                tooltipType : "basic",
                toolTip : ""
            },
            {
                validationAction : [],
                columnName : "OverallDepth",
                columnLabel : "Overall Depth",
                columnMenu : testMenu,
                columnType : "user-gen",
                control : "text-input",
                tooltipType : "basic",
                toolTip : ""
            },
            {
                validationAction : [],
                columnName : "OverallHeight",
                columnLabel : "Overall Height",
                columnMenu : testMenu,
                columnType : "user-gen",
                control : "text-input",
                tooltipType : "basic",
                toolTip : ""
            },
            {
                validationAction : [],
                columnName : "OverallLength",
                columnLabel : "Overall Length",
                columnMenu : testMenu,
                columnType : "user-gen",
                control : "text-input",
                tooltipType : "basic",
                toolTip : ""
            },
            {
                validationAction : [],
                columnName : "Seat",
                columnLabel : "Seat",
                columnMenu : testMenu,
                columnType : "user-gen",
                control : "text-input",
                tooltipType : "basic",
                toolTip : ""
            },
            {
                validationAction : [],
                columnName : "ArmHeightFloorToArm",
                columnLabel : "Arm Height - Floor to Arm",
                columnMenu : testMenu,
                columnType : "user-gen",
                control : "text-input",
                tooltipType : "basic",
                toolTip : ""
            },
            {
                validationAction : [],
                columnName : "BackHeightSeatToTopOfBack",
                columnLabel : "Back Height - Seat to Top of Back",
                columnMenu : testMenu,
                columnType : "user-gen",
                control : "text-input",
                tooltipType : "basic",
                toolTip : ""
            },
            {
                validationAction : [],
                columnName : "FullyReclinedDepthFrontToBack",
                columnLabel : "Fully Reclined Depth - Front to Back",
                columnMenu : testMenu,
                columnType : "user-gen",
                control : "text-input",
                tooltipType : "basic",
                toolTip : ""
            },
            {
                validationAction : [],
                columnName : "LegHeightTopToBottom",
                columnLabel : "Leg Height - Top to Bottom",
                columnMenu : testMenu,
                columnType : "user-gen",
                control : "text-input",
                tooltipType : "basic",
                toolTip : ""
            },
            {
                validationAction : [],
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

    getProductData():iDataGridItem[][]{
        return this.productData;
    }

    //ATTRIBUTES
    getAttributesData():iDataGridItem[][]{
        return dataAttributesLibrary;
    }

    setAttributesData(updatePackage : iUpdateSet){
        dataAttributesLibrary[updatePackage.row][updatePackage.cell].value = updatePackage.newData;
        console.log("setAttributesData", dataAttributesLibrary);
    }

    //update package is type iUpdateSet = {row : number, cell : number, newData:string}
    setProductData(updatePackage : iUpdateSet){
        this.productData[updatePackage.row][updatePackage.cell].value = updatePackage.newData;
    }

    setMediaData(updatePackage : iUpdateSet){
        console.log("update package: ", updatePackage);
        this.productData[updatePackage.row][updatePackage.cell].value = updatePackage.newData;
    }

    setData(targetDataSet : dataSetType, updatePackage : iUpdateSet){
        console.log("setData, updatePackag:",  updatePackage, "target data type: ", targetDataSet);
        switch (targetDataSet) {
            case "media-data":
                this.setMediaData(updatePackage);
                break;
            case "product-data":
                this.setProductData(updatePackage);
                break;
            case "attributes-data":
                console.log("attributes-data", dataAttributesLibrary);
                this.setAttributesData(updatePackage);
                break;
        }
    }

    getData(targetDataSet:dataSetType){
        switch (targetDataSet) {
            case "media-data":
               return this.getMediaObjectData();
            case "media-grid-data":
                return this.getMediaDataForGrid();
            case "product-grid-data":
                return this.getProductData();
        }
    }

//CONVERT DATAGRID OBJECTS INTO MEDIA GRID OBJECTS
    getMediaObjectData():mediaObject[]{
        //TODO replace this with a proper data service

        let mediaObjects : mediaObject[] = [];
        let mediaGridObjects : iDataGridItem[][] = this.getMediaDataForGrid();

        const findColVal = ( row : number, colName : string ):string =>{
            for(let i=0; i < mediaGridObjects[row].length; i++){
                if(mediaGridObjects[row][i].columnName == colName){
                   return mediaGridObjects[row][i].value;
                }
            }

            return "";
        };

        for(let i = 0; i < mediaGridObjects.length; i++ ){
            let mediaObject : mediaObject = {
                id: findColVal(i, "uniqueID"),
                mediaPath : findColVal(i,"mediaPath"),
                mediaName : findColVal(i, "mediaName"),
                description : findColVal(i, "description"),
                shotType : findColVal(i, "shotType") as shotType,
                productAssociations : findColVal(i, "productAssociations"),
                mediaAssociations : findColVal(i, "mediaAssociations"),
                classesAssociated : findColVal(i, "classesAssociated"),
                resolution : findColVal(i, "resolution")
            };

            mediaObjects.push(mediaObject);
        }
        return mediaLibraryDataMediaObjects;
    }

    getMediaColumnsForGrid():iColumn[]{

        let mediaColumns : iColumn[] = [
            {
                validationAction : [],
                columnName : "uniqueId",
                columnLabel : "Unique ID",
                columnMenu : <></>,
                columnType : "hidden",
                control : "text-input",
                tooltipType : "basic",
                toolTip : ""
            },
            {
                validationAction : [],
                columnName : "mediaPath",
                columnLabel : "Media Path",
                columnMenu : <></>,
                columnType : "standard",
                control : "text-input",
                tooltipType : "basic",
                toolTip : ""
            },
            {
                validationAction : [],
                columnName : "mediaName",
                columnLabel : "Media Name",
                columnMenu : <></>,
                columnType : "standard",
                control : "text-input",
                tooltipType : "basic",
                toolTip : ""
            },
            {
                validationAction : [],
                columnName : "description",
                columnLabel : "Description",
                columnMenu : <></>,
                columnType : "standard",
                control : "text-input",
                tooltipType : "basic",
                toolTip : ""
            },
            {
                validationAction : [],
                columnName : "shotType",
                columnLabel : "Shot Type",
                columnMenu : <></>,
                columnType : "standard",
                control : "text-input",
                tooltipType : "basic",
                toolTip : ""
            },
            {
                validationAction : [],
                columnName : "productAssociations",
                columnLabel : "Product Associations",
                columnMenu : <></>,
                columnType : "standard",
                control : "text-input",
                tooltipType : "basic",
                toolTip : ""
            },
            {
                validationAction : [],
                columnName : "mediaAssociations",
                columnLabel : "Media Associations",
                columnMenu : <></>,
                columnType : "standard",
                control : "text-input",
                tooltipType : "basic",
                toolTip : ""
            },
            {
                validationAction : [],
                columnName : "classesAssociated",
                columnLabel : "Classes Associated",
                columnMenu : <></>,
                columnType : "standard",
                control : "text-input",
                tooltipType : "basic",
                toolTip : ""
            },
            {
                validationAction : [],
                columnName : "resolution",
                columnLabel : "Resolution",
                columnMenu : <></>,
                columnType : "standard",
                control : "text-input",
                tooltipType : "basic",
                toolTip : ""
            },


        ];

        return mediaColumns;

    }

    getMediaDataForGrid():iDataGridItem[][]{

        return mediaLibraryData;
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



}