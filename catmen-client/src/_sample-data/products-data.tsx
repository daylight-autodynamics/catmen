import * as React from "react";
import {ReactElement} from "react";
import {iColumnHeader, iComponentType, iDataGridItem} from "../view-components/data-grid/data-types-for-data-grid";



class demoData{

    productData: iDataGridItem[][] = [
        [
            {value: "000001", column: "uniqueID", attrType: "hidden", class: "default"},
            {value: "sof-121-111", column: "PartNumber", attrType: "standard", class: "default"},
            {value: "Rosina classic convertible sofa", column: "ProductName", attrType: "standard", class: "default"},
            {value: "Sofas", column: "Class", attrType: "standard", class: "default"},
            {value: "Sofa", column: "ProductType", attrType: "standard", class: "default"},
            {value: `33'' H x 74'' W x 29'' D`, column: "Overall", attrType: "user-gen", class: "sofa"},
            {value: `16'' H x 66'' W x 22'' D`, column: "Overall", attrType: "user-gen", class: "sofa"},
            {value: `42"`, column: "OverallDepth", attrType: "user-gen", class: "sofa"},
            {value: `42"`, column: "OverallHeight", attrType: "user-gen", class: "sofa"},
            {value: `42"`, column: "OverallLength", attrType: "user-gen", class: "sofa"},
            {value: `"21" H x 77" W x 22" D"`, column: "Seat", attrType: "user-gen", class: "sofa"},
            {value: `25"`, column: "Arm Height - Floor to Arm", attrType: "user-gen", class: "sofa"},
            {value: `11"`, column: "Back Height - Seat to Top of Back", attrType: "user-gen", class: "sofa"},
            {value: `11"`, column: "Fully Reclined Depth - Front to Back", attrType: "user-gen", class: "sofa"},
            {value: `5.63"`, column: "Leg Height - Top to Bottom", attrType: "user-gen", class: "sofa"},
            {value: `3"`, column: "Clearance from Floor to Bottom of Sofa", attrType: "user-gen", class: "sofa"},
        ],
        [
            {value: "000002", column: "uniqueID", attrType: "hidden", class: "default"},
            {value: "sof-121-111", column: "PartNumber", attrType: "standard", class: "default"},
            {value: "Rosina classic convertible sofa", column: "ProductName", attrType: "standard", class: "default"},
            {value: "Sofas", column: "Class", attrType: "standard", class: "default"},
            {value: "Sofa", column: "ProductType", attrType: "standard", class: "default"},
            {value: `33'' H x 74'' W x 29'' D`, column: "Overall", attrType: "user-gen", class: "sofa"},
            {value: `16'' H x 66'' W x 22'' D`, column: "Overall", attrType: "user-gen", class: "sofa"},
            {value: `42"`, column: "OverallDepth", attrType: "user-gen", class: "sofa"},
            {value: `42"`, column: "OverallHeight", attrType: "user-gen", class: "sofa"},
            {value: `42"`, column: "OverallLength", attrType: "user-gen", class: "sofa"},
            {value: `"21" H x 77" W x 22" D"`, column: "Seat", attrType: "user-gen", class: "sofa"},
            {value: `25"`, column: "Arm Height - Floor to Arm", attrType: "user-gen", class: "sofa"},
            {value: `11"`, column: "Back Height - Seat to Top of Back", attrType: "user-gen", class: "sofa"},
            {value: `11"`, column: "Fully Reclined Depth - Front to Back", attrType: "user-gen", class: "sofa"},
            {value: `5.63"`, column: "Leg Height - Top to Bottom", attrType: "user-gen", class: "sofa"},
            {value: `3"`, column: "Clearance from Floor to Bottom of Sofa", attrType: "user-gen", class: "sofa"},
        ]
    ];

};

export let catmanData = new demoData();