import * as React from "react";
import {ReactElement} from "react";
import {iColumnHeader, iComponentType, iDataGridItem} from "../view-components/data-grid/data-types-for-data-grid";


export class ProductsData{

    productData: iDataGridItem[][] = [
        [
            {value: "000001", column: "uniqueID", attrType: "hidden", class: "default"},

            {
                value: "https://secure.img1-fg.wfcdn.com/im/46577228/resize-h800-w800%5Ecompr-r85/8736/87366205/Fallinerlea+Indoor/Outdoor+Throw+Pilow.jpg",
                column: "ReferenceImage",
                attrType: "standard",
                class: "default"
            },
            {value: "sof-121-111", column: "PartNumber", attrType: "standard", class: "default"},
            {value: "Rosina", column: "ProductGroup", attrType: "standard", class: "default"},
            {value: "Rosina classic convertible sofa", column: "ProductName", attrType: "standard", class: "default"},
            {value: "Sofas", column: "Class", attrType: "required", class: "default"},
            {value: "Sofa", column: "ProductType", attrType: "standard", class: "default"},
            {value: " ", column: "ProductGroup", attrType: "standard", class: "default"},
            {value: `33'' H x 74'' W x 29'' D`, column: "OverallDimensions", attrType: "user-gen", class: "sofa"},

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
            {
                value: "https://secure.img1-fg.wfcdn.com/im/89777776/resize-h800-w800%5Ecompr-r85/6623/66233441/Marcela+Geometric+Links+Accent+Decorative+18%2522+Square+Pillow+Cover.jpg",
                column: "ReferenceImage",
                attrType: "standard",
                class: "default"
            },
            {value: "sof-121-111", column: "PartNumber", attrType: "standard", class: "default"},
            {value: "Rosina", column: "ProductGroup", attrType: "standard", class: "default"},
            {value: "Rosina classic convertible sofa", column: "ProductName", attrType: "standard", class: "default"},
            {value: "Sofas", column: "Class", attrType: "standard", class: "default"},
            {value: "Sofa", column: "ProductType", attrType: "standard", class: "default"},
            {value: " ", column: "ProductGroup", attrType: "standard", class: "default"},
            {value: `33'' H x 74'' W x 29'' D`, column: "Overall", attrType: "user-gen", class: "sofa"},

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
            {value: "000003", column: "uniqueID", attrType: "hidden", class: "default"},
            {
                value: "https://secure.img1-fg.wfcdn.com/im/09257425/resize-h800-w800%5Ecompr-r85/9445/94458967/Besmira+Square+Pillow+Cover.jpg",
                column: "ReferenceImage",
                attrType: "standard",
                class: "default"
            },
            {value: "sof-121-111", column: "PartNumber", attrType: "standard", class: "default"},
            {value: "Rosina", column: "ProductGroup", attrType: "standard", class: "default"},
            {value: "Rosina classic convertible sofa", column: "ProductName", attrType: "standard", class: "default"},
            {value: "Sofas", column: "Class", attrType: "standard", class: "default"},
            {value: "Sofa", column: "ProductType", attrType: "standard", class: "default"},
            {value: " ", column: "ProductGroup", attrType: "standard", class: "default"},
            {value: `33'' H x 74'' W x 29'' D`, column: "Overall", attrType: "user-gen", class: "sofa"},

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
            {value: "000004", column: "uniqueID", attrType: "hidden", class: "default"},
            {
                value: "https://secure.img1-fg.wfcdn.com/im/09257425/resize-h800-w800%5Ecompr-r85/9445/94458967/Besmira+Square+Pillow+Cover.jpg",
                column: "ReferenceImage",
                attrType: "standard",
                class: "default"
            },
            {value: "sof-121-111", column: "PartNumber", attrType: "standard", class: "default"},
            {value: "Rosina", column: "ProductGroup", attrType: "standard", class: "default"},
            {value: "Rosina classic convertible sofa", column: "ProductName", attrType: "standard", class: "default"},
            {value: "Sofas", column: "Class", attrType: "standard", class: "default"},
            {value: "Sofa", column: "ProductType", attrType: "standard", class: "default"},
            {value: " ", column: "ProductGroup", attrType: "standard", class: "default"},
            {value: `33'' H x 74'' W x 29'' D`, column: "Overall", attrType: "user-gen", class: "sofa"},

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
            {value: "000005", column: "uniqueID", attrType: "hidden", class: "default"},
            {
                value: "https://secure.img1-fg.wfcdn.com/im/69737061/resize-h800-w800%5Ecompr-r85/8621/86216371/Scully+Striped+Cotton+17%2522+Throw+Pillow.jpg",
                column: "ReferenceImage",
                attrType: "standard",
                class: "default"
            },
            {value: "sof-121-112", column: "PartNumber", attrType: "standard", class: "default"},
            {value: "Rosina", column: "ProductGroup", attrType: "standard", class: "default"},
            {value: "Rosina classic loveseat", column: "ProductName", attrType: "standard", class: "default"},
            {value: "Sofas", column: "Class", attrType: "standard", class: "default"},
            {value: "Love Seat", column: "ProductType", attrType: "standard", class: "default"},
            {value: " ", column: "ProductGroup", attrType: "standard", class: "default"},
            {value: `33'' H x 74'' W x 29'' D`, column: "Overall", attrType: "user-gen", class: "sofa"},

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

export let catmanData = new ProductsData();