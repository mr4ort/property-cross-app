'use strict';

function ResultController($log, dataStorage) {
  'ngInject';

  console.log(dataStorage.get('searchResult'));
  $log.debug('Hello from result controller!');

}

export default ResultController;
