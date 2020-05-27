import * as React from "react";
import {graphicSize, iNavItem} from "../../view-components/_common/component-data-types";
import {CatmanIcon} from "../../svg/icons/icons";

const iconSize : graphicSize = {
    height : "1rem",
    width : "1rem"
};

export let mainNavConfig : iNavItem[] = [
    {
        label: "Home",
        navPath: "/",
        buttonType: "menu-link",
        iconLeft:
            (<CatmanIcon
                iconName="home"
                width={iconSize.width}
                height={iconSize.height}
            />),
        presentationGroup : "common",
        infoPanel : (<h2>Home</h2>)
    },
    {
        label : "Your Catalog",
        navPath : "/catalog",
        buttonType : "nav-link",
        iconLeft : (
            <CatmanIcon
                iconName="catalog"
                width={iconSize.width}
                height={iconSize.height}
            />),
        presentationGroup : "catalog",
        infoPanel : (<h2>InfoNavPanel</h2>)
    },
    {
        label : "Attributes",
        navPath : "/manage-attributes",
        buttonType : "nav-link",
        iconLeft : (
            <CatmanIcon
                iconName="attributes"
                width={iconSize.width}
                height={iconSize.height}
            />),
        presentationGroup : "catalog-settings",
        infoPanel : (<h2>Manage Attributes</h2>)
    },
    {
        label : "Attribute Groups",
        navPath : "/manage-attribute-groups",
        buttonType : "nav-link",
        iconLeft : (
            <CatmanIcon
                iconName="attribute-groups"
                width={iconSize.width}
                height={iconSize.height}
            />),
        presentationGroup : "catalog-settings",
        infoPanel : (<h2>Attributes Group Help</h2>)
    },
    {
        label : "Attribute Mappings",
        navPath : "/manage-attribute-mappings",
        buttonType : "nav-link",
        iconLeft : (
            <CatmanIcon
                iconName="attribute-mappings"
                width={iconSize.width}
                height={iconSize.height}
            />),
        presentationGroup : "catalog-settings",
        infoPanel : (<h2>Attributes Mappings</h2>)
    },
    {
        label : "Classes",
        navPath : "/manage-classes",
        buttonType : "nav-link",
        iconLeft : (
            <CatmanIcon
                iconName="classes"
                width={iconSize.width}
                height={iconSize.height}
            />),
        presentationGroup : "catalog-settings",
        infoPanel : (<h2>Attributes Mappings</h2>)
    },
];

export let catalogRibbonConfiguration : iNavItem[] = [
    {
        label : "Attribute Mappings",
        navPath : "/manage-attribute-mappings",
        buttonType : "nav-link",
        presentationGroup : "catalog-settings",
        infoPanel : (<h2>Attributes Mappings</h2>)
    }
]