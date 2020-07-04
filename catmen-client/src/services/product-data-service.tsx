import {iDataGridItem} from "../_catman-data-types";

import {ProductsData} from "../_sample-data/products-data";
import {ReactElement} from "react";
import {toolTipType} from "../view-components/heru-tool-tip/tool-tip";

interface iProductDataService{
    productData? : iDataGridItem[][];
}



export class ProductDataService implements iProductDataService{
    productData : iDataGridItem[][] = [];
    constructor(productData?: iDataGridItem[][]) {
        if(productData != null){
            this.productData = productData;
        }
    }

    initialize(){
        this.getProducts();
        this.getColumns();
    }

     getProducts(){
        let products = new ProductsData();
        //replace with fetch later
        this.productData =  products.productData;
    }

    getColumns(){
        for(let i = 0; i < this.productData.length; i++ ){



            if(i===0){

            }
        }
    }
}