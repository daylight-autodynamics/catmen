import * as React from "react";

//Configuration data:

import {DataGrid} from "../../../view-components/data-grid/data-grid";
import {catmanData} from "../../../_sample-data/products-data";
import {TitleArea} from "../../../view-components/title-area/title-area";
import StickyThing from "../../../view-components/sticky-panel/sticky-panel";
import {appColumns} from "../../../_sample-data/columns";
import {iDataGridItem} from "../../../view-components/data-grid/data-types-for-data-grid";


interface iPROPS  {
    uniqueID: string;
    productData : iDataGridItem[][];
    closeSingleProduct : Function;
}

interface iSTATE{

}

export class CatalogSingleProduct extends React.Component<iPROPS, iSTATE>{
    constructor(props:iPROPS) {
        super(props);
        this.productData = this.singleProductData(this.props.uniqueID);
    }
    productData : iDataGridItem[];

    singleProductData = (uniqueID : string):iDataGridItem[]=>{
        let product : iDataGridItem[] = [{
            value : "string",
            column : "string",
            attrType : "user-gen",
            class : "default"
        }];
        for(let i=0; i < this.props.productData.length; i++){
            for(let j=0; j < this.props.productData[i].length; j++){
                if( this.props.productData[i][j].column === "uniqueID" && this.props.productData[i][j].value === uniqueID){
                    product = this.props.productData[i];
                }
            }
        }

        return product;
    };

    getAttribute(name : string){
        for(let i = 0; i < this.productData.length; i++){
            if(this.productData[i].column === name){
                return this.productData[i].value;

            }
        }
    }

    getProductPage(){
        let myProduct = this.singleProductData(this.props.uniqueID);
        console.clear();
        console.log("product", myProduct);

        let introArea = (
            <header>
                <img src={this.getAttribute("ReferenceImage")}/>
                <div className="image-hero" style={{backgroundImage : `url(${this.getAttribute("ReferenceImage")})`}}></div>
            </header>
        );

        return(<div className="single-product-page">{introArea}</div>)
    }


    render(){
        return (
            <>
                <button onClick={()=>this.props.closeSingleProduct()}>Back</button>
                {this.props.uniqueID}
                {this.getProductPage()}
            </>
        )
    }
}
