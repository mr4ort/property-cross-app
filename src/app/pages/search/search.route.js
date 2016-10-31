'use strict';

import searchTpl from './search.html';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('search', {
      url: '/',
      templateUrl: searchTpl,
      controller: require('./search.controller.js')
      //controllerAs: 'main',
    });

}

export default routeConfig;
