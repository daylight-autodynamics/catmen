import * as React from "react";
import {iNavItem} from "../../view-components/_common/component-data-types";

export let mainNavConfig : iNavItem[] = [
    {
        label : "Home",
        navPath : "/",
        buttonType : "menu-link",
        presentationGroup : "common",
        infoPanel : (<h2>Home</h2>)
    },
    {
        label : "Your Company Catalog",
        navPath : "/catalog",
        buttonType : "menu-link",
        presentationGroup : "catalog",
        infoPanel : (<h2>InfoNavPanel</h2>)
    },
    {
        label : "Attributes",
        navPath : "/manage-attributes",
        buttonType : "menu-link",
        presentationGroup : "catalog-settings",
        infoPanel : (<h2>Manage Attributes</h2>)
    },
    {
        label : "Attribute Groups",
        navPath : "/manage-attribute-groups",
        buttonType : "menu-link",
        presentationGroup : "catalog-settings",
        infoPanel : (<h2>Attributes Group Help</h2>)
    },
    {
        label : "Attribute Mappings",
        navPath : "/manage-attribute-mappings",
        buttonType : "menu-link",
        presentationGroup : "catalog-settings",
        infoPanel : (<h2>Attributes Mappings</h2>)
    },
];

export let catalogRibbonConfiguration : iNavItem[] = [
    {
        label : "Attribute Mappings",
        navPath : "/manage-attribute-mappings",
        buttonType : "menu-link",
        presentationGroup : "catalog-settings",
        infoPanel : (<h2>Attributes Mappings</h2>)
    }
]