'use strict';

import route from './details.route';
// import MainContoller from './main.controller';
import './details.scss'


const detailsPageModule = angular.module('details-module', [
  'ui.router'
]);

detailsPageModule
    .config(route);

export default detailsPageModule;
