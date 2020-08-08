import * as React from "react";
import {ReactElement} from "react";
import {iColumnHeader, iComponentType, iDataGridItem} from "../_catman-data-types";


export class ProductsData{

    productData: iDataGridItem[][] = [
        [
            { validationValue:"", columnName: "uniqueID", value: "000001", attrType: "hidden", class: "default"},

            {   validationValue:"",
                value: "https://secure.img1-fg.wfcdn.com/im/46577228/resize-h800-w800%5Ecompr-r85/8736/87366205/Fallinerlea+Indoor/Outdoor+Throw+Pilow.jpg",
                columnName: "ReferenceImage",
                attrType: "standard",
                class: "default"
            },
            {validationValue:"", columnName: "PartNumber",  value: "sof-121-111", attrType: "standard", class: "default"},
            {validationValue:"", columnName: "ProductGroup", value: "Rosina",  attrType: "standard", class: "default"},
            {validationValue:"", columnName: "ProductName", value: "Rosina classic convertible sofa", attrType: "standard", class: "default"},
            {validationValue:"", columnName: "Class", value: "Sofas",  attrType: "required", class: "default"},
            {validationValue:"", columnName: "ProductType", value: "Sofa",  attrType: "standard", class: "default"},
            {validationValue:"", columnName: "OverallDimensions",  value: `33'' H x 74'' W x 29'' D`, attrType: "user-gen", class: "sofa"},

            {validationValue:"", columnName: "OverallDepth", value: `42"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "OverallHeight", value: `42"`,  attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "OverallLength", value: `42"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "Seat",value: `"21" H x 77" W x 22" D"`,  attrType: "user-gen", class: "sofa"},

            {validationValue:"", columnName: "ArmHeightFloorToArm", value: `25"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "BackHeightSeatToTopOfBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "FullyReclinedDepthFrontToBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "LegHeightTopToBottom", value: `5.63"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "ClearanceFromFloorToBottomOfSofa",value: `3"`,  attrType: "user-gen", class: "sofa"},

        ],
        [
            {validationValue:"", value: "000002", columnName: "uniqueID", attrType: "hidden", class: "default"},
            {
                validationValue:"",
                value: "https://secure.img1-fg.wfcdn.com/im/89777776/resize-h800-w800%5Ecompr-r85/6623/66233441/Marcela+Geometric+Links+Accent+Decorative+18%2522+Square+Pillow+Cover.jpg",
                columnName: "ReferenceImage",
                attrType: "standard",
                class: "default"
            },
            {validationValue:"" , value: "sof-121-112", columnName: "PartNumber", attrType: "standard", class: "default"},
            {validationValue:"" , value: "Rosina", columnName: "ProductGroup", attrType: "standard", class: "default"},
            {validationValue:"", value: "Rosina classic convertible sofa", columnName: "ProductName", attrType: "standard", class: "default"},
            {validationValue:"", value: "Sofas", columnName: "Class", attrType: "standard", class: "default"},
            {validationValue:"", value: "Sofa", columnName: "ProductType", attrType: "standard", class: "default"},
            {validationValue:"", value: `33'' H x 74'' W x 29'' D`, columnName: "Overall", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `42"`, columnName: "OverallDepth", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `42"`, columnName: "OverallHeight", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `42"`, columnName: "OverallLength", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `"21" H x 77" W x 22" D"`, columnName: "Seat", attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "ArmHeightFloorToArm", value: `25"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "BackHeightSeatToTopOfBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "FullyReclinedDepthFrontToBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "LegHeightTopToBottom", value: `5.63"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "ClearanceFromFloorToBottomOfSofa",value: `3"`,  attrType: "user-gen", class: "sofa"}
        ],
        [
            {validationValue:"", value: "000003", columnName: "uniqueID", attrType: "hidden", class: "default"},
            {
                validationValue:"",
                value: "https://secure.img1-fg.wfcdn.com/im/09257425/resize-h800-w800%5Ecompr-r85/9445/94458967/Besmira+Square+Pillow+Cover.jpg",
                columnName: "ReferenceImage",
                attrType: "standard",
                class: "default"
            },
            {validationValue:"", value: "sof-121-113", columnName: "PartNumber", attrType: "standard", class: "default"},
            {validationValue:"", value: "Rosina", columnName: "ProductGroup", attrType: "standard", class: "default"},
            {validationValue:"", value: "Rosina classic convertible sofa", columnName: "ProductName", attrType: "standard", class: "default"},
            {validationValue:"", value: "Sofas", columnName: "Class", attrType: "standard", class: "default"},
            {validationValue:"", value: "Sofa", columnName: "ProductType", attrType: "standard", class: "default"},
            {validationValue:"", value: `33'' H x 74'' W x 29'' D`, columnName: "Overall", attrType: "user-gen", class: "sofa"},

            {validationValue:"", value: `42"`, columnName: "OverallDepth", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `42"`, columnName: "OverallHeight", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `42"`, columnName: "OverallLength", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `"21" H x 77" W x 22" D"`, columnName: "Seat", attrType: "user-gen", class: "sofa"},

            {validationValue:"", columnName: "ArmHeightFloorToArm", value: `25"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "BackHeightSeatToTopOfBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "FullyReclinedDepthFrontToBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "LegHeightTopToBottom", value: `5.63"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "ClearanceFromFloorToBottomOfSofa",value: `3"`,  attrType: "user-gen", class: "sofa"},
        ],
        [
            {validationValue:"", value: "000004", columnName: "uniqueID", attrType: "hidden", class: "default"},
            {
                validationValue:"",
                value: "https://secure.img1-fg.wfcdn.com/im/09257425/resize-h800-w800%5Ecompr-r85/9445/94458967/Besmira+Square+Pillow+Cover.jpg",
                columnName: "ReferenceImage",
                attrType: "standard",
                class: "default"
            },
            {validationValue:"", value: "sof-121-114", columnName: "PartNumber", attrType: "standard", class: "default"},
            {validationValue:"", value: "Rosina", columnName: "ProductGroup", attrType: "standard", class: "default"},
            {validationValue:"", value: "Rosina classic convertible sofa", columnName: "ProductName", attrType: "standard", class: "default"},
            {validationValue:"", value: "Sofas", columnName: "Class", attrType: "standard", class: "default"},
            {validationValue:"", value: "Sofa", columnName: "ProductType", attrType: "standard", class: "default"},

            {validationValue:"", value: `33'' H x 74'' W x 29'' D`, columnName: "Overall", attrType: "user-gen", class: "sofa"},

            {validationValue:"", value: `42"`, columnName: "OverallDepth", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `42"`, columnName: "OverallHeight", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `42"`, columnName: "OverallLength", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `"21" H x 77" W x 22" D"`, columnName: "Seat", attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "ArmHeightFloorToArm", value: `25"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "BackHeightSeatToTopOfBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "FullyReclinedDepthFrontToBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "LegHeightTopToBottom", value: `5.63"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "ClearanceFromFloorToBottomOfSofa",value: `3"`,  attrType: "user-gen", class: "sofa"},
        ],
        [
            { validationValue:"", columnName: "uniqueID", value: "000001", attrType: "hidden", class: "default"},

            {   validationValue:"",
                value: "https://secure.img1-fg.wfcdn.com/im/46577228/resize-h800-w800%5Ecompr-r85/8736/87366205/Fallinerlea+Indoor/Outdoor+Throw+Pilow.jpg",
                columnName: "ReferenceImage",
                attrType: "standard",
                class: "default"
            },
            {validationValue:"", columnName: "PartNumber",  value: "sof-121-111", attrType: "standard", class: "default"},
            {validationValue:"", columnName: "ProductGroup", value: "Rosina",  attrType: "standard", class: "default"},
            {validationValue:"", columnName: "ProductName", value: "Rosina classic convertible sofa", attrType: "standard", class: "default"},
            {validationValue:"", columnName: "Class", value: "Sofas",  attrType: "required", class: "default"},
            {validationValue:"", columnName: "ProductType", value: "Sofa",  attrType: "standard", class: "default"},
            {validationValue:"", columnName: "OverallDimensions",  value: `33'' H x 74'' W x 29'' D`, attrType: "user-gen", class: "sofa"},

            {validationValue:"", columnName: "OverallDepth", value: `42"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "OverallHeight", value: `42"`,  attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "OverallLength", value: `42"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "Seat",value: `"21" H x 77" W x 22" D"`,  attrType: "user-gen", class: "sofa"},

            {validationValue:"", columnName: "ArmHeightFloorToArm", value: `25"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "BackHeightSeatToTopOfBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "FullyReclinedDepthFrontToBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "LegHeightTopToBottom", value: `5.63"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "ClearanceFromFloorToBottomOfSofa",value: `3"`,  attrType: "user-gen", class: "sofa"},

        ],
        [
            {validationValue:"", value: "000002", columnName: "uniqueID", attrType: "hidden", class: "default"},
            {
                validationValue:"",
                value: "https://secure.img1-fg.wfcdn.com/im/89777776/resize-h800-w800%5Ecompr-r85/6623/66233441/Marcela+Geometric+Links+Accent+Decorative+18%2522+Square+Pillow+Cover.jpg",
                columnName: "ReferenceImage",
                attrType: "standard",
                class: "default"
            },
            {validationValue:"" , value: "sof-121-112", columnName: "PartNumber", attrType: "standard", class: "default"},
            {validationValue:"" , value: "Rosina", columnName: "ProductGroup", attrType: "standard", class: "default"},
            {validationValue:"", value: "Rosina classic convertible sofa", columnName: "ProductName", attrType: "standard", class: "default"},
            {validationValue:"", value: "Sofas", columnName: "Class", attrType: "standard", class: "default"},
            {validationValue:"", value: "Sofa", columnName: "ProductType", attrType: "standard", class: "default"},
            {validationValue:"", value: `33'' H x 74'' W x 29'' D`, columnName: "Overall", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `42"`, columnName: "OverallDepth", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `42"`, columnName: "OverallHeight", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `42"`, columnName: "OverallLength", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `"21" H x 77" W x 22" D"`, columnName: "Seat", attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "ArmHeightFloorToArm", value: `25"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "BackHeightSeatToTopOfBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "FullyReclinedDepthFrontToBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "LegHeightTopToBottom", value: `5.63"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "ClearanceFromFloorToBottomOfSofa",value: `3"`,  attrType: "user-gen", class: "sofa"}
        ],
        [
            {validationValue:"", value: "000003", columnName: "uniqueID", attrType: "hidden", class: "default"},
            {
                validationValue:"",
                value: "https://secure.img1-fg.wfcdn.com/im/09257425/resize-h800-w800%5Ecompr-r85/9445/94458967/Besmira+Square+Pillow+Cover.jpg",
                columnName: "ReferenceImage",
                attrType: "standard",
                class: "default"
            },
            {validationValue:"", value: "sof-121-113", columnName: "PartNumber", attrType: "standard", class: "default"},
            {validationValue:"", value: "Rosina", columnName: "ProductGroup", attrType: "standard", class: "default"},
            {validationValue:"", value: "Rosina classic convertible sofa", columnName: "ProductName", attrType: "standard", class: "default"},
            {validationValue:"", value: "Sofas", columnName: "Class", attrType: "standard", class: "default"},
            {validationValue:"", value: "Sofa", columnName: "ProductType", attrType: "standard", class: "default"},
            {validationValue:"", value: `33'' H x 74'' W x 29'' D`, columnName: "Overall", attrType: "user-gen", class: "sofa"},

            {validationValue:"", value: `42"`, columnName: "OverallDepth", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `42"`, columnName: "OverallHeight", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `42"`, columnName: "OverallLength", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `"21" H x 77" W x 22" D"`, columnName: "Seat", attrType: "user-gen", class: "sofa"},

            {validationValue:"", columnName: "ArmHeightFloorToArm", value: `25"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "BackHeightSeatToTopOfBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "FullyReclinedDepthFrontToBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "LegHeightTopToBottom", value: `5.63"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "ClearanceFromFloorToBottomOfSofa",value: `3"`,  attrType: "user-gen", class: "sofa"},
        ],
        [
            {validationValue:"", value: "000004", columnName: "uniqueID", attrType: "hidden", class: "default"},
            {
                validationValue:"",
                value: "https://secure.img1-fg.wfcdn.com/im/09257425/resize-h800-w800%5Ecompr-r85/9445/94458967/Besmira+Square+Pillow+Cover.jpg",
                columnName: "ReferenceImage",
                attrType: "standard",
                class: "default"
            },
            {validationValue:"", value: "sof-121-114", columnName: "PartNumber", attrType: "standard", class: "default"},
            {validationValue:"", value: "Rosina", columnName: "ProductGroup", attrType: "standard", class: "default"},
            {validationValue:"", value: "Rosina classic convertible sofa", columnName: "ProductName", attrType: "standard", class: "default"},
            {validationValue:"", value: "Sofas", columnName: "Class", attrType: "standard", class: "default"},
            {validationValue:"", value: "Sofa", columnName: "ProductType", attrType: "standard", class: "default"},

            {validationValue:"", value: `33'' H x 74'' W x 29'' D`, columnName: "Overall", attrType: "user-gen", class: "sofa"},

            {validationValue:"", value: `42"`, columnName: "OverallDepth", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `42"`, columnName: "OverallHeight", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `42"`, columnName: "OverallLength", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `"21" H x 77" W x 22" D"`, columnName: "Seat", attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "ArmHeightFloorToArm", value: `25"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "BackHeightSeatToTopOfBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "FullyReclinedDepthFrontToBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "LegHeightTopToBottom", value: `5.63"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "ClearanceFromFloorToBottomOfSofa",value: `3"`,  attrType: "user-gen", class: "sofa"},
        ],
        [
            { validationValue:"", columnName: "uniqueID", value: "000001", attrType: "hidden", class: "default"},

            {   validationValue:"",
                value: "https://secure.img1-fg.wfcdn.com/im/46577228/resize-h800-w800%5Ecompr-r85/8736/87366205/Fallinerlea+Indoor/Outdoor+Throw+Pilow.jpg",
                columnName: "ReferenceImage",
                attrType: "standard",
                class: "default"
            },
            {validationValue:"", columnName: "PartNumber",  value: "sof-121-111", attrType: "standard", class: "default"},
            {validationValue:"", columnName: "ProductGroup", value: "Rosina",  attrType: "standard", class: "default"},
            {validationValue:"", columnName: "ProductName", value: "Rosina classic convertible sofa", attrType: "standard", class: "default"},
            {validationValue:"", columnName: "Class", value: "Sofas",  attrType: "required", class: "default"},
            {validationValue:"", columnName: "ProductType", value: "Sofa",  attrType: "standard", class: "default"},
            {validationValue:"", columnName: "OverallDimensions",  value: `33'' H x 74'' W x 29'' D`, attrType: "user-gen", class: "sofa"},

            {validationValue:"", columnName: "OverallDepth", value: `42"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "OverallHeight", value: `42"`,  attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "OverallLength", value: `42"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "Seat",value: `"21" H x 77" W x 22" D"`,  attrType: "user-gen", class: "sofa"},

            {validationValue:"", columnName: "ArmHeightFloorToArm", value: `25"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "BackHeightSeatToTopOfBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "FullyReclinedDepthFrontToBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "LegHeightTopToBottom", value: `5.63"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "ClearanceFromFloorToBottomOfSofa",value: `3"`,  attrType: "user-gen", class: "sofa"},

        ],
        [
            {validationValue:"", value: "000002", columnName: "uniqueID", attrType: "hidden", class: "default"},
            {
                validationValue:"",
                value: "https://secure.img1-fg.wfcdn.com/im/89777776/resize-h800-w800%5Ecompr-r85/6623/66233441/Marcela+Geometric+Links+Accent+Decorative+18%2522+Square+Pillow+Cover.jpg",
                columnName: "ReferenceImage",
                attrType: "standard",
                class: "default"
            },
            {validationValue:"" , value: "sof-121-112", columnName: "PartNumber", attrType: "standard", class: "default"},
            {validationValue:"" , value: "Rosina", columnName: "ProductGroup", attrType: "standard", class: "default"},
            {validationValue:"", value: "Rosina classic convertible sofa", columnName: "ProductName", attrType: "standard", class: "default"},
            {validationValue:"", value: "Sofas", columnName: "Class", attrType: "standard", class: "default"},
            {validationValue:"", value: "Sofa", columnName: "ProductType", attrType: "standard", class: "default"},
            {validationValue:"", value: `33'' H x 74'' W x 29'' D`, columnName: "Overall", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `42"`, columnName: "OverallDepth", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `42"`, columnName: "OverallHeight", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `42"`, columnName: "OverallLength", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `"21" H x 77" W x 22" D"`, columnName: "Seat", attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "ArmHeightFloorToArm", value: `25"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "BackHeightSeatToTopOfBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "FullyReclinedDepthFrontToBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "LegHeightTopToBottom", value: `5.63"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "ClearanceFromFloorToBottomOfSofa",value: `3"`,  attrType: "user-gen", class: "sofa"}
        ],
        [
            {validationValue:"", value: "000003", columnName: "uniqueID", attrType: "hidden", class: "default"},
            {
                validationValue:"",
                value: "https://secure.img1-fg.wfcdn.com/im/09257425/resize-h800-w800%5Ecompr-r85/9445/94458967/Besmira+Square+Pillow+Cover.jpg",
                columnName: "ReferenceImage",
                attrType: "standard",
                class: "default"
            },
            {validationValue:"", value: "sof-121-113", columnName: "PartNumber", attrType: "standard", class: "default"},
            {validationValue:"", value: "Rosina", columnName: "ProductGroup", attrType: "standard", class: "default"},
            {validationValue:"", value: "Rosina classic convertible sofa", columnName: "ProductName", attrType: "standard", class: "default"},
            {validationValue:"", value: "Sofas", columnName: "Class", attrType: "standard", class: "default"},
            {validationValue:"", value: "Sofa", columnName: "ProductType", attrType: "standard", class: "default"},
            {validationValue:"", value: `33'' H x 74'' W x 29'' D`, columnName: "Overall", attrType: "user-gen", class: "sofa"},

            {validationValue:"", value: `42"`, columnName: "OverallDepth", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `42"`, columnName: "OverallHeight", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `42"`, columnName: "OverallLength", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `"21" H x 77" W x 22" D"`, columnName: "Seat", attrType: "user-gen", class: "sofa"},

            {validationValue:"", columnName: "ArmHeightFloorToArm", value: `25"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "BackHeightSeatToTopOfBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "FullyReclinedDepthFrontToBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "LegHeightTopToBottom", value: `5.63"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "ClearanceFromFloorToBottomOfSofa",value: `3"`,  attrType: "user-gen", class: "sofa"},
        ],
        [
            {validationValue:"", value: "000004", columnName: "uniqueID", attrType: "hidden", class: "default"},
            {
                validationValue:"",
                value: "https://secure.img1-fg.wfcdn.com/im/09257425/resize-h800-w800%5Ecompr-r85/9445/94458967/Besmira+Square+Pillow+Cover.jpg",
                columnName: "ReferenceImage",
                attrType: "standard",
                class: "default"
            },
            {validationValue:"", value: "sof-121-114", columnName: "PartNumber", attrType: "standard", class: "default"},
            {validationValue:"", value: "Rosina", columnName: "ProductGroup", attrType: "standard", class: "default"},
            {validationValue:"", value: "Rosina classic convertible sofa", columnName: "ProductName", attrType: "standard", class: "default"},
            {validationValue:"", value: "Sofas", columnName: "Class", attrType: "standard", class: "default"},
            {validationValue:"", value: "Sofa", columnName: "ProductType", attrType: "standard", class: "default"},

            {validationValue:"", value: `33'' H x 74'' W x 29'' D`, columnName: "Overall", attrType: "user-gen", class: "sofa"},

            {validationValue:"", value: `42"`, columnName: "OverallDepth", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `42"`, columnName: "OverallHeight", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `42"`, columnName: "OverallLength", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `"21" H x 77" W x 22" D"`, columnName: "Seat", attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "ArmHeightFloorToArm", value: `25"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "BackHeightSeatToTopOfBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "FullyReclinedDepthFrontToBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "LegHeightTopToBottom", value: `5.63"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "ClearanceFromFloorToBottomOfSofa",value: `3"`,  attrType: "user-gen", class: "sofa"},
        ],
        [
            { validationValue:"", columnName: "uniqueID", value: "000001", attrType: "hidden", class: "default"},

            {   validationValue:"",
                value: "https://secure.img1-fg.wfcdn.com/im/46577228/resize-h800-w800%5Ecompr-r85/8736/87366205/Fallinerlea+Indoor/Outdoor+Throw+Pilow.jpg",
                columnName: "ReferenceImage",
                attrType: "standard",
                class: "default"
            },
            {validationValue:"", columnName: "PartNumber",  value: "sof-121-111", attrType: "standard", class: "default"},
            {validationValue:"", columnName: "ProductGroup", value: "Rosina",  attrType: "standard", class: "default"},
            {validationValue:"", columnName: "ProductName", value: "Rosina classic convertible sofa", attrType: "standard", class: "default"},
            {validationValue:"", columnName: "Class", value: "Sofas",  attrType: "required", class: "default"},
            {validationValue:"", columnName: "ProductType", value: "Sofa",  attrType: "standard", class: "default"},
            {validationValue:"", columnName: "OverallDimensions",  value: `33'' H x 74'' W x 29'' D`, attrType: "user-gen", class: "sofa"},

            {validationValue:"", columnName: "OverallDepth", value: `42"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "OverallHeight", value: `42"`,  attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "OverallLength", value: `42"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "Seat",value: `"21" H x 77" W x 22" D"`,  attrType: "user-gen", class: "sofa"},

            {validationValue:"", columnName: "ArmHeightFloorToArm", value: `25"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "BackHeightSeatToTopOfBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "FullyReclinedDepthFrontToBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "LegHeightTopToBottom", value: `5.63"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "ClearanceFromFloorToBottomOfSofa",value: `3"`,  attrType: "user-gen", class: "sofa"},

        ],
        [
            {validationValue:"", value: "000002", columnName: "uniqueID", attrType: "hidden", class: "default"},
            {
                validationValue:"",
                value: "https://secure.img1-fg.wfcdn.com/im/89777776/resize-h800-w800%5Ecompr-r85/6623/66233441/Marcela+Geometric+Links+Accent+Decorative+18%2522+Square+Pillow+Cover.jpg",
                columnName: "ReferenceImage",
                attrType: "standard",
                class: "default"
            },
            {validationValue:"" , value: "sof-121-112", columnName: "PartNumber", attrType: "standard", class: "default"},
            {validationValue:"" , value: "Rosina", columnName: "ProductGroup", attrType: "standard", class: "default"},
            {validationValue:"", value: "Rosina classic convertible sofa", columnName: "ProductName", attrType: "standard", class: "default"},
            {validationValue:"", value: "Sofas", columnName: "Class", attrType: "standard", class: "default"},
            {validationValue:"", value: "Sofa", columnName: "ProductType", attrType: "standard", class: "default"},
            {validationValue:"", value: `33'' H x 74'' W x 29'' D`, columnName: "Overall", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `42"`, columnName: "OverallDepth", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `42"`, columnName: "OverallHeight", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `42"`, columnName: "OverallLength", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `"21" H x 77" W x 22" D"`, columnName: "Seat", attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "ArmHeightFloorToArm", value: `25"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "BackHeightSeatToTopOfBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "FullyReclinedDepthFrontToBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "LegHeightTopToBottom", value: `5.63"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "ClearanceFromFloorToBottomOfSofa",value: `3"`,  attrType: "user-gen", class: "sofa"}
        ],
        [
            {validationValue:"", value: "000003", columnName: "uniqueID", attrType: "hidden", class: "default"},
            {
                validationValue:"",
                value: "https://secure.img1-fg.wfcdn.com/im/09257425/resize-h800-w800%5Ecompr-r85/9445/94458967/Besmira+Square+Pillow+Cover.jpg",
                columnName: "ReferenceImage",
                attrType: "standard",
                class: "default"
            },
            {validationValue:"", value: "sof-121-113", columnName: "PartNumber", attrType: "standard", class: "default"},
            {validationValue:"", value: "Rosina", columnName: "ProductGroup", attrType: "standard", class: "default"},
            {validationValue:"", value: "Rosina classic convertible sofa", columnName: "ProductName", attrType: "standard", class: "default"},
            {validationValue:"", value: "Sofas", columnName: "Class", attrType: "standard", class: "default"},
            {validationValue:"", value: "Sofa", columnName: "ProductType", attrType: "standard", class: "default"},
            {validationValue:"", value: `33'' H x 74'' W x 29'' D`, columnName: "Overall", attrType: "user-gen", class: "sofa"},

            {validationValue:"", value: `42"`, columnName: "OverallDepth", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `42"`, columnName: "OverallHeight", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `42"`, columnName: "OverallLength", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `"21" H x 77" W x 22" D"`, columnName: "Seat", attrType: "user-gen", class: "sofa"},

            {validationValue:"", columnName: "ArmHeightFloorToArm", value: `25"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "BackHeightSeatToTopOfBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "FullyReclinedDepthFrontToBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "LegHeightTopToBottom", value: `5.63"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "ClearanceFromFloorToBottomOfSofa",value: `3"`,  attrType: "user-gen", class: "sofa"},
        ],
        [
            {validationValue:"", value: "000004", columnName: "uniqueID", attrType: "hidden", class: "default"},
            {
                validationValue:"",
                value: "https://secure.img1-fg.wfcdn.com/im/09257425/resize-h800-w800%5Ecompr-r85/9445/94458967/Besmira+Square+Pillow+Cover.jpg",
                columnName: "ReferenceImage",
                attrType: "standard",
                class: "default"
            },
            {validationValue:"", value: "sof-121-114", columnName: "PartNumber", attrType: "standard", class: "default"},
            {validationValue:"", value: "Rosina", columnName: "ProductGroup", attrType: "standard", class: "default"},
            {validationValue:"", value: "Rosina classic convertible sofa", columnName: "ProductName", attrType: "standard", class: "default"},
            {validationValue:"", value: "Sofas", columnName: "Class", attrType: "standard", class: "default"},
            {validationValue:"", value: "Sofa", columnName: "ProductType", attrType: "standard", class: "default"},

            {validationValue:"", value: `33'' H x 74'' W x 29'' D`, columnName: "Overall", attrType: "user-gen", class: "sofa"},

            {validationValue:"", value: `42"`, columnName: "OverallDepth", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `42"`, columnName: "OverallHeight", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `42"`, columnName: "OverallLength", attrType: "user-gen", class: "sofa"},
            {validationValue:"", value: `"21" H x 77" W x 22" D"`, columnName: "Seat", attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "ArmHeightFloorToArm", value: `25"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "BackHeightSeatToTopOfBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "FullyReclinedDepthFrontToBack", value: `11"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "LegHeightTopToBottom", value: `5.63"`, attrType: "user-gen", class: "sofa"},
            {validationValue:"", columnName: "ClearanceFromFloorToBottomOfSofa",value: `3"`,  attrType: "user-gen", class: "sofa"},
        ]

    ];
};

export let catmanData = new ProductsData();