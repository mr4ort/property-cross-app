'use strict';

function SearchController($log, store, loadData) {
  'ngInject';

  this.showMessage = function () {
    console.log('click');
  };
    console.log(loadData.get());

    console.log();

    // this.status = 'resent';
  // this.status = 'error';
  this.status = 'location';


  $log.debug('Hello from search controller!');

}

export default SearchController;
