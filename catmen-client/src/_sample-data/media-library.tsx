
export interface mediaObject {
    id : string;
    mediaPath : string;
    mediaName : string;
    description : string;
    shotType : shotType;
    productAssociations : string[];
    classesAssociated : string[];
    mediaAssociations : string[];
    resolution : string;
}

export type shotType =
    | "front"
    | "back"
    | "left"
    | "right"
    | "top"
    | "bottom"
    | "lifestyle"
    | "custom"
    | "dimensions"
    | "overview"
    | "closeup";

export let mediaLibraryData : mediaObject[] = [
    {
        id:"00001",
        mediaPath : "https://secure.img1-ag.wfcdn.com/im/10739304/resize-h600-w600%5Ecompr-r85/1184/118483853/Logan+Cotton+Reclining+88%2522+Square+Arm+Sofa.jpg",
        mediaName : "Logan Cotton Reclining 88\" Square Arm Sofa",
        description : "",
        shotType : "front",
        productAssociations : [],
        mediaAssociations : [],
        classesAssociated : [],
        resolution : "1200x1200"
    },
    {
        id:"00002",
        mediaPath : "https://secure.img1-fg.wfcdn.com/im/00684050/resize-h600-w600%5Ecompr-r85/8398/83985507/Joy+77%2522+Round+Arm+Sleeper.jpg",
        mediaName : "Joy 77 round arm - FOLDED POSITION",
        description : "",
        shotType : "front",
        productAssociations : [],
        mediaAssociations : [],
        classesAssociated : [],
        resolution : "1200x1200"
    },
    {
        id:"00003",
        mediaPath : "https://secure.img1-fg.wfcdn.com/im/71424978/resize-h600-w600%5Ecompr-r85/8398/83985514/Joy+77%2522+Round+Arm+Sleeper.jpg",
        mediaName : "Joy 77 round arm - Close up armrest",
        description : "",
        shotType : "front",
        productAssociations : [],
        mediaAssociations : [],
        classesAssociated : [],
        resolution : "1200x1200"
    },
    {
        id:"00004",
        mediaPath : "https://secure.img1-fg.wfcdn.com/im/12191405/resize-h600-w600%5Ecompr-r85/8398/83985513/Joy+77%2522+Round+Arm+Sleeper.jpg",
        mediaName : "Joy 77 round arm - Rear",
        description : "",
        shotType : "front",
        productAssociations : [],
        mediaAssociations : [],
        classesAssociated : [],
        resolution : "1200x1200"
    },
    {
        id:"00005",
        mediaPath : "https://secure.img1-fg.wfcdn.com/im/78138666/resize-h600-w600%5Ecompr-r85/8398/83985510/Joy+77%2522+Round+Arm+Sleeper.jpg",
        mediaName : "Joy 77 round arm - Side",
        description : "",
        shotType : "right",
        productAssociations : [],
        mediaAssociations : [],
        classesAssociated : [],
        resolution : "1200x1200"
    },
    {
        id:"00006",
        mediaPath : "https://secure.img1-fg.wfcdn.com/im/14362037/resize-h800-w800%5Ecompr-r85/6556/65560147/STL_Eclectic+Living+Room+Design_65560147.jpg",
        mediaName : "Joy 77 round arm - Lifestyle",
        description : "",
        shotType : "lifestyle",
        productAssociations : [],
        mediaAssociations : [],
        classesAssociated : [],
        resolution : "1200x1200"
    },
    {
        id:"00007",
        mediaPath : "https://secure.img1-fg.wfcdn.com/im/69740176/resize-h600-w600%5Ecompr-r85/8992/89925901/Joy+77%2522+Round+Arm+Sleeper.jpg",
        mediaName : "Joy 77 round arm - DIMENSIONS",
        description : "",
        shotType : "dimensions",
        productAssociations : [],
        mediaAssociations : [],
        classesAssociated : [],
        resolution : "1200x1200"
    },
    {
        id:"00008",
        mediaPath : "https://secure.img1-ag.wfcdn.com/im/42439378/resize-h600-w600%5Ecompr-r85/1021/102195993/Garren+75.6%2522+Square+Arm+Sofa.jpg",
        mediaName : "Garren 75.6\" Square Arm Sofa ",
        description : "",
        shotType : "overview",
        productAssociations : [],
        mediaAssociations : [],
        classesAssociated : [],
        resolution : "1200x1200"
    },
    {
        id:"00009",
        mediaPath : "https://secure.img1-fg.wfcdn.com/im/93980883/resize-h600-w600%5Ecompr-r85/7267/72677904/Dawna+85%2522+Rolled+Arms+Sofa.jpg",
        mediaName : "Dawna 85\" Rolled Arms Sofa - OVERVIEW",
        description : "",
        shotType : "overview",
        productAssociations : [],
        mediaAssociations : [],
        classesAssociated : [],
        resolution : "1200x1200"
    },
    {
        id:"00010",
        mediaPath : "https://secure.img1-fg.wfcdn.com/im/99944912/resize-h600-w600%5Ecompr-r85/7079/70796967/Dawna+85%2522+Rolled+Arms+Sofa.jpg",
        mediaName : "Dawna 85\" Rolled Arms Sofa - CLOSEUP",
        description : "",
        shotType : "closeup",
        productAssociations : [],
        mediaAssociations : [],
        classesAssociated : [],
        resolution : "1200x1200"
    },
    {
        id:"00011",
        mediaPath : "https://secure.img1-fg.wfcdn.com/im/09067153/resize-h600-w600%5Ecompr-r85/1174/117414677/Dawna+85%2522+Rolled+Arms+Sofa.jpg",
        mediaName : "Dawna 85\" Rolled Arms Sofa - DIMENSIONS",
        description : "",
        shotType : "closeup",
        productAssociations : [],
        mediaAssociations : [],
        classesAssociated : [],
        resolution : "1200x1200"
    },
    {
        id:"00012",
        mediaPath : "https://secure.img1-fg.wfcdn.com/im/01328246/resize-h600-w600%5Ecompr-r85/7267/72677918/Dawna+85%2522+Rolled+Arms+Sofa.jpg",
        mediaName : "Dawna 85\" Rolled Arms Sofa - DIMENSIONS",
        description : "",
        shotType : "dimensions",
        productAssociations : [],
        mediaAssociations : [],
        classesAssociated : [],
        resolution : "1200x1200"
    },
    {
        id:"00013",
        mediaPath : "",
        mediaName : "",
        description : "",
        shotType : "closeup",
        productAssociations : [],
        mediaAssociations : [],
        classesAssociated : [],
        resolution : "1200x1200"
    },
    {
        id:"00014",
        mediaPath : "",
        mediaName : "",
        description : "",
        shotType : "closeup",
        productAssociations : [],
        mediaAssociations : [],
        classesAssociated : [],
        resolution : "1200x1200"
    },
    {
        id:"00015",
        mediaPath : "",
        mediaName : "",
        description : "",
        shotType : "closeup",
        productAssociations : [],
        mediaAssociations : [],
        classesAssociated : [],
        resolution : "1200x1200"
    },
    {
        id:"00016",
        mediaPath : "",
        mediaName : "",
        description : "",
        shotType : "closeup",
        productAssociations : [],
        mediaAssociations : [],
        classesAssociated : [],
        resolution : "1200x1200"
    },
    {
        id:"00017",
        mediaPath : "",
        mediaName : "",
        description : "",
        shotType : "closeup",
        productAssociations : [],
        mediaAssociations : [],
        classesAssociated : [],
        resolution : "1200x1200"
    },
    {
        id:"00018",
        mediaPath : "",
        mediaName : "",
        description : "",
        shotType : "closeup",
        productAssociations : [],
        mediaAssociations : [],
        classesAssociated : [],
        resolution : "1200x1200"
    },
    {
        id:"00019",
        mediaPath : "",
        mediaName : "",
        description : "",
        shotType : "closeup",
        productAssociations : [],
        mediaAssociations : [],
        classesAssociated : [],
        resolution : "1200x1200"
    },
    {
        id:"00020",
        mediaPath : "",
        mediaName : "",
        description : "",
        shotType : "closeup",
        productAssociations : [],
        mediaAssociations : [],
        classesAssociated : [],
        resolution : "1200x1200"
    },
    {
        id:"00021",
        mediaPath : "",
        mediaName : "",
        description : "",
        shotType : "closeup",
        productAssociations : [],
        mediaAssociations : [],
        classesAssociated : [],
        resolution : "1200x1200"
    }


];