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


        let introArea = (
            <div className="single-product-view">
                <div className="single-prod-menu">
                    <button onClick={()=>this.props.closeSingleProduct()}>Back</button>
                    <ul>
                        <li>General Info</li>
                        <li>Weight & Dimensions</li>
                        <li>Material</li>
                        <li>Set Related</li>
                        <li>Shipping</li>
                        <li>Romance Copy</li>
                        <li>Notes</li>
                    </ul>
                    <ul>
                        <li>Variants Group</li>
                        <li>Related Products</li>
                    </ul>
                    <ul>
                        <li>Pricing</li>
                        <li>other Integrations</li>
                        <li>Another Integration</li>
                    </ul>
                </div>
                <div className="content-area">
                    <div className="product-card">
                        <h3>Weight & Dimensions</h3>
                        <div className="data-container">
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Overall</div>
                                <div className={"data-value"}>20'' H x 20'' W x 5'' D </div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Height</div>
                                <div className={"data-value"}>3.5 lb.</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Width </div>
                                <div className={"data-value"}>20''</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Depth </div>
                                <div className={"data-value"}>5''</div>
                            </div>
                        </div>
                    </div>

                    <div className="product-card">
                        <h3>Material</h3>
                        <div className="data-container">
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Outer Material</div>
                                <div className={"data-value"}>Polyester/Polyester blend</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Outer Material Details</div>
                                <div className={"data-value"}>Polyester/Polyester blend</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Insert Included </div>
                                <div className={"data-value"}>Yes</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Fill Material </div>
                                <div className={"data-value"}>Polyester/Polyfill</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Insert Included? </div>
                                <div className={"data-value"}>No</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Inner Material Details </div>
                                <div className={"data-value"}>Felt</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Reverse Material </div>
                                <div className={"data-value"}>Imitation Velvet</div>
                            </div>
                        </div>
                    </div>

                    <div className="product-card">
                        <h3>Shipping</h3>
                        <div className="data-container">
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Number of Pieces Included</div>
                                <div className={"data-value"}>2</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Pieces Included</div>
                                <div className={"data-value"}>2 Pillow cases </div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Double Cap? </div>
                                <div className={"data-value"}>Yes</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Reverse Cap?  </div>
                                <div className={"data-value"}>No</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Add-Ons  </div>
                                <div className={"data-value"}>No Decorative Addition</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Storage </div>
                                <div className={"data-value"}>Drawstring Bag</div>
                            </div>
                        </div>
                    </div>

                    <div className="product-card">
                        <h3>Set Related</h3>
                        <div className="data-container">
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Number of Cartons</div>
                                <div className={"data-value"}>1</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Warehouses</div>
                                <div className={"data-value"}>Dockerville, Decatur</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Warehouse Contact Person</div>
                                <div className={"data-value"}>John Trivaliago</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Warehouse Contact Number</div>
                                <div className={"data-value"}>1-(231)-972-1300</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Packing Material </div>
                                <div className={"data-value"}>Dust protector</div>
                            </div>
                            <div className="data-section-readonly">
                                <div className={"tiny-label"}>Include in package</div>
                                <div className={"data-value"}>Care instructions id 32a</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );

        return(<>{introArea}</>)
    }


    render(){
        return (
            <>
                {this.getProductPage()}
            </>
        )
    }
}
