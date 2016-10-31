'use strict';

import route from './main.route';
// import MainContoller from './main.controller';


const mainPageModule = angular.module('main-module', [
  'ui.router'
]);

mainPageModule
    .config(route);
// mainPageModule.controller('mainController', MainContoller);

export default mainPageModule;
