'use strict';

import route from './result.route';
// import MainContoller from './main.controller';
import './results.scss'


const resultPageModule = angular.module('result-module', [
  'ui.router'
]);

resultPageModule
    .config(route);

export default resultPageModule;
