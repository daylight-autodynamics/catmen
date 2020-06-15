import * as React from "react";
import {ReactElement} from "react";
import {iColumnHeader, iComponentType, iDataGridItem} from "../view-components/data-grid/data-types-for-data-grid";


export class ProductsData{

    productData: iDataGridItem[][] = [
        [
            {columnName: "uniqueID", value: "000001", attrType: "hidden", class: "default"},

            {
                value: "https://secure.img1-fg.wfcdn.com/im/46577228/resize-h800-w800%5Ecompr-r85/8736/87366205/Fallinerlea+Indoor/Outdoor+Throw+Pilow.jpg",
                columnName: "ReferenceImage",
                attrType: "standard",
                class: "default"
            },
            {columnName: "PartNumber", value: "sof-121-111", attrType: "standard", class: "default"},
            {columnName: "ProductGroup", value: "Rosina",  attrType: "standard", class: "default"},
            {columnName: "ProductName", value: "Rosina classic convertible sofa", attrType: "standard", class: "default"},
            {columnName: "Class", value: "Sofas",  attrType: "required", class: "default"},
            {columnName: "ProductType", value: "Sofa",  attrType: "standard", class: "default"},
            {columnName: "OverallDimensions",  value: `33'' H x 74'' W x 29'' D`, attrType: "user-gen", class: "sofa"},

            {columnName: "OverallDepth", value: `42"`, attrType: "user-gen", class: "sofa"},
            {columnName: "OverallHeight", value: `42"`,  attrType: "user-gen", class: "sofa"},
            {columnName: "OverallLength", value: `42"`, attrType: "user-gen", class: "sofa"},
            {columnName: "Seat",value: `"21" H x 77" W x 22" D"`,  attrType: "user-gen", class: "sofa"},

            {columnName: "ArmHeightFloorToArm", value: `25"`, attrType: "user-gen", class: "sofa"},
            {columnName: "BackHeightSeatToTopOfBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {columnName: "FullyReclinedDepthFrontToBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {columnName: "LegHeightTopToBottom", value: `5.63"`, attrType: "user-gen", class: "sofa"},
            {columnName: "ClearanceFromFloorToBottomOfSofa",value: `3"`,  attrType: "user-gen", class: "sofa"},
        ],
        [
            {value: "000002", columnName: "uniqueID", attrType: "hidden", class: "default"},
            {
                value: "https://secure.img1-fg.wfcdn.com/im/89777776/resize-h800-w800%5Ecompr-r85/6623/66233441/Marcela+Geometric+Links+Accent+Decorative+18%2522+Square+Pillow+Cover.jpg",
                columnName: "ReferenceImage",
                attrType: "standard",
                class: "default"
            },
            {value: "sof-121-112", columnName: "PartNumber", attrType: "standard", class: "default"},
            {value: "Rosina", columnName: "ProductGroup", attrType: "standard", class: "default"},
            {value: "Rosina classic convertible sofa", columnName: "ProductName", attrType: "standard", class: "default"},
            {value: "Sofas", columnName: "Class", attrType: "standard", class: "default"},
            {value: "Sofa", columnName: "ProductType", attrType: "standard", class: "default"},
            {value: `33'' H x 74'' W x 29'' D`, columnName: "Overall", attrType: "user-gen", class: "sofa"},
            {value: `42"`, columnName: "OverallDepth", attrType: "user-gen", class: "sofa"},
            {value: `42"`, columnName: "OverallHeight", attrType: "user-gen", class: "sofa"},
            {value: `42"`, columnName: "OverallLength", attrType: "user-gen", class: "sofa"},
            {value: `"21" H x 77" W x 22" D"`, columnName: "Seat", attrType: "user-gen", class: "sofa"},
            {columnName: "ArmHeightFloorToArm", value: `25"`, attrType: "user-gen", class: "sofa"},
            {columnName: "BackHeightSeatToTopOfBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {columnName: "FullyReclinedDepthFrontToBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {columnName: "LegHeightTopToBottom", value: `5.63"`, attrType: "user-gen", class: "sofa"},
            {columnName: "ClearanceFromFloorToBottomOfSofa",value: `3"`,  attrType: "user-gen", class: "sofa"}
        ],
        [
            {value: "000003", columnName: "uniqueID", attrType: "hidden", class: "default"},
            {
                value: "https://secure.img1-fg.wfcdn.com/im/09257425/resize-h800-w800%5Ecompr-r85/9445/94458967/Besmira+Square+Pillow+Cover.jpg",
                columnName: "ReferenceImage",
                attrType: "standard",
                class: "default"
            },
            {value: "sof-121-113", columnName: "PartNumber", attrType: "standard", class: "default"},
            {value: "Rosina", columnName: "ProductGroup", attrType: "standard", class: "default"},
            {value: "Rosina classic convertible sofa", columnName: "ProductName", attrType: "standard", class: "default"},
            {value: "Sofas", columnName: "Class", attrType: "standard", class: "default"},
            {value: "Sofa", columnName: "ProductType", attrType: "standard", class: "default"},
            {value: `33'' H x 74'' W x 29'' D`, columnName: "Overall", attrType: "user-gen", class: "sofa"},

            {value: `42"`, columnName: "OverallDepth", attrType: "user-gen", class: "sofa"},
            {value: `42"`, columnName: "OverallHeight", attrType: "user-gen", class: "sofa"},
            {value: `42"`, columnName: "OverallLength", attrType: "user-gen", class: "sofa"},
            {value: `"21" H x 77" W x 22" D"`, columnName: "Seat", attrType: "user-gen", class: "sofa"},

            {columnName: "ArmHeightFloorToArm", value: `25"`, attrType: "user-gen", class: "sofa"},
            {columnName: "BackHeightSeatToTopOfBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {columnName: "FullyReclinedDepthFrontToBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {columnName: "LegHeightTopToBottom", value: `5.63"`, attrType: "user-gen", class: "sofa"},
            {columnName: "ClearanceFromFloorToBottomOfSofa",value: `3"`,  attrType: "user-gen", class: "sofa"},
        ],
        [
            {value: "000004", columnName: "uniqueID", attrType: "hidden", class: "default"},
            {
                value: "https://secure.img1-fg.wfcdn.com/im/09257425/resize-h800-w800%5Ecompr-r85/9445/94458967/Besmira+Square+Pillow+Cover.jpg",
                columnName: "ReferenceImage",
                attrType: "standard",
                class: "default"
            },
            {value: "sof-121-114", columnName: "PartNumber", attrType: "standard", class: "default"},
            {value: "Rosina", columnName: "ProductGroup", attrType: "standard", class: "default"},
            {value: "Rosina classic convertible sofa", columnName: "ProductName", attrType: "standard", class: "default"},
            {value: "Sofas", columnName: "Class", attrType: "standard", class: "default"},
            {value: "Sofa", columnName: "ProductType", attrType: "standard", class: "default"},

            {value: `33'' H x 74'' W x 29'' D`, columnName: "Overall", attrType: "user-gen", class: "sofa"},

            {value: `42"`, columnName: "OverallDepth", attrType: "user-gen", class: "sofa"},
            {value: `42"`, columnName: "OverallHeight", attrType: "user-gen", class: "sofa"},
            {value: `42"`, columnName: "OverallLength", attrType: "user-gen", class: "sofa"},
            {value: `"21" H x 77" W x 22" D"`, columnName: "Seat", attrType: "user-gen", class: "sofa"},
            {columnName: "ArmHeightFloorToArm", value: `25"`, attrType: "user-gen", class: "sofa"},
            {columnName: "BackHeightSeatToTopOfBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {columnName: "FullyReclinedDepthFrontToBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {columnName: "LegHeightTopToBottom", value: `5.63"`, attrType: "user-gen", class: "sofa"},
            {columnName: "ClearanceFromFloorToBottomOfSofa",value: `3"`,  attrType: "user-gen", class: "sofa"},
        ]

    ];
};

export let catmanData = new ProductsData();