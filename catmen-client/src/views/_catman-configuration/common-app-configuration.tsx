import * as React from "react";
import {graphicSize, iNavItem} from "../../view-components/_common/component-data-types";
import {CatmanIcon} from "../../svg/icons/icons";
import {InfoPanel} from "../../view-components/info-panel/info-panel";
import {Illustration} from "../../svg/illustrations/illustrations";
import {iToggleMenuItem} from "../../view-components/toggle-menu/toggle-component";
import AppButton from "../../view-components/button/app-button";
import {toolTipContent} from "../tool-tip-content/content-tool-tips";
import {navSettings} from "../_common/nav-settings";

const iconSize : graphicSize = {
    height : "1.5rem",
    width : "1.5rem"
};

export let ribbonConfig : iToggleMenuItem[] = [
    {
        element : (<AppButton
            buttonType={"from-left"}
            buttonLabel="catalog manager"
            navPath={navSettings.catalogDashBoard}
            tooltipType="custom"
            tooltip={toolTipContent.mainNav()}
            toolTipTimeOutInMS={10000}
            iconRight={
                <CatmanIcon
                    iconName="down-arrow"
                    classes="ui-icon"
                    height="100%"
                    width="100%"
                />
            }
        />),
        label:"",
        toggleItemType : "nav"
    }
];

// Main Navigation
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
        infoPanel : (
            <InfoPanel
                header="Home - Get Started"
                copy="Your landing page with info, help and quick-start actions to help you get the most out of the Catalog Manager"
                image={
                    <Illustration
                        illustrationName="illustration-home"
                        specialClasses=""
                        heightWithUnits="100%"
                        widthWithUnits="100%"
                    />
                }
            />
        )
    },
    {
        label: "Media Library",
        navPath: "/media-library",
        buttonType: "menu-link",
        iconLeft:
            (<CatmanIcon
                iconName="media-nav-icon"
                width={iconSize.width}
                height={iconSize.height}
            />),
        presentationGroup : "common",
        infoPanel : (
            <InfoPanel
                header="Your Media Library"
                copy="Manage, review and link with products. Take control of your media and better describe your products."
                image={
                    <Illustration
                        illustrationName="illustration-media"
                        specialClasses=""
                        heightWithUnits="100%"
                        widthWithUnits="100%"
                    />
                }
            />
        )
    },
    {
        label : "Your Catalog",
        navPath : "/catalog/spreadsheet",
        buttonType : "nav-link",
        iconLeft : (
            <CatmanIcon
                iconName="catalog"
                width={iconSize.width}
                height={iconSize.height}
            />),
        presentationGroup : "catalog",
        infoPanel : (<InfoPanel
            header="Your Catalog"
            copy="Manage your products in YOUR catalog. Import files to extract product data. Edit, update existing products. Publish your products to Wayfair or export product data for use anywhere"
            image={
                <Illustration
                    illustrationName="illustration-catalog"
                    specialClasses=""
                    heightWithUnits="100%"
                    widthWithUnits="100%"
                />
            }

        />)
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
        infoPanel : (
            <InfoPanel
                header="Manage Attributes"
                copy="Attributes are the 'Column Headers' that you can define and use to describe your products. "
                image={
                    <Illustration
                        illustrationName="illustration-attributes"
                        specialClasses=""
                        heightWithUnits="100%"
                        widthWithUnits="100%"
                    />
                }
            />

        )
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
        infoPanel : (
            <InfoPanel
                header="Attribute Groups"
                copy="Make editing attributes easier and clearer for you and your colleagues. Group attributes together in a way that makes sense for like height, width and length might be grouped under 'Dimensions'."
                image={
                    <Illustration
                        illustrationName="illustration-attribute-groups"
                        specialClasses=""
                        heightWithUnits="100%"
                        widthWithUnits="100%"
                    />
                }
            />
        )
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
        infoPanel : (
            <InfoPanel
                header="Attribute Mapping"
                copy="Attributes are the 'Column Headers' that you can define and use to describe your products. Here you can create mappings so the values you enter for each attribute can be automatically transformed for each channel you deal with."
                image={
                    <Illustration
                        illustrationName="illustration-attribute-mapping"
                        specialClasses=""
                        heightWithUnits="100%"
                        widthWithUnits="100%"
                    />
                }
            />
        )
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
        infoPanel : (
            <InfoPanel
                header="Manage Classes"
                copy="Classes are sets of descriptive attributes that will be assigned to your products as you create them. When you specify a class on a product, the attributes you set up here will be automatically assigned to that product"
                image={
                    <Illustration
                        illustrationName="illustration-manage-classes"
                        specialClasses=""
                        heightWithUnits="100%"
                        widthWithUnits="100%"
                    />
                }

            />
                )
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