'use strict';

import mainTpl from './details.html';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('details', {
      url: '/details',
      templateUrl: mainTpl,
      controller: require('./details.controller.js'),
      controllerAs: 'details'
    });

}

export default routeConfig;
