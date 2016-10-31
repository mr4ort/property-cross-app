'use strict';

import route from './search.route';
import searchController from './search.route';
import './search.scss';

const searchPageModule = angular.module('search-module', [
  'ui.router'
]);

searchPageModule
    .config(route);
searchPageModule
    .controller('searchController', searchController);

export default searchPageModule;
