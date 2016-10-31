'use strict';

import mainTpl from './favourites.html';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('favourites', {
      url: '/favourites',
      templateUrl: mainTpl,
      controller: require('./favourites.controller.js')
      //controllerAs: 'main',
    });

}

export default routeConfig;
