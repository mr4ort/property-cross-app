'use strict';

function SearchController($log) {
  'ngInject';

  this.showMessage = function () {
    console.log('click');
  };


  $log.debug('Hello from search controller!');

}

export default SearchController;
