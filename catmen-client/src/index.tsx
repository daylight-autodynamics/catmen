import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {WindowLevelCapture} from "./view-components/heru-tool-tip/tool-tip";
import {DataManager} from "./data-components/data-manager/data-manager";

import './fonts/proximanova-reg.woff';
import './fonts/sofia-bold.woff';
import './fonts/sofia-reg.woff';
import './fonts/sofia-bold.woff';

import {ProductDataService} from "./services/product-data-service";
import {catmanData} from "./_sample-data/products-data";

//initialization
export let win = new WindowLevelCapture();
win.windowEvent();

export let dataManagerMain = new DataManager(catmanData.productData);

let productData = new ProductDataService();
productData.initialize();

ReactDOM.render(
    <React.StrictMode>
        <App mousePos={ {x:win.mousePos.x, y:win.mousePos.y}} />
    </React.StrictMode>,
    document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
