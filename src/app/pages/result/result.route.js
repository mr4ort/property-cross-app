'use strict';

import mainTpl from './result.html';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('result', {
      url: '/result',
      templateUrl: mainTpl,
      controller: require('./result.controller.js'),
      controllerAs: 'result'
    });

}

export default routeConfig;
