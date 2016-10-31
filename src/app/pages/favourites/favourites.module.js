'use strict';

import route from './favourites.route';


const favouritesPageModule = angular.module('favourites-module', [
  'ui.router'
]);

favouritesPageModule
    .config(route);

export default favouritesPageModule;
