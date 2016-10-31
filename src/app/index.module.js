'use strict';

import * as components from './index.components';
import config from './index.config';
import run from './index.run';


const App = angular.module(
  "property-cross-app", [
    // plugins
    require('angular-ui-router'),
    "ngAnimate", 
	"ngCookies", 
	"ngTouch", 
	"ngSanitize", 
	"ngMessages", 
	"ngAria", 
	"ngResource", 
	"oc.lazyLoad",

    // core
    require("./core/core.module").name,

    // components
    require("./index.components").name,

    // routes
    require("./index.routes").name,

    // pages
    require("./pages/main/main.module").name,

    require("./pages/search/search.module").name,

    require("./pages/favourites/favourites.module").name

  ]
);

App
  .config(config)
  .run(run);



export default App;
