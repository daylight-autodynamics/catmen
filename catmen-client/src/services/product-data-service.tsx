import {iDataGridItem} from "../view-components/data-grid/data-types-for-data-grid";


interface iProductDataService{
    productData : iDataGridItem[][];
}

export class ProductDataService implements iProductDataService{
    productData : iDataGridItem[][];
    constructor(productData: iDataGridItem[][]) {
        this.productData = productData;
    }

    getProducts(){

    }

    getColumns(){

    }
}