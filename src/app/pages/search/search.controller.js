'use strict';

function SearchController($log, store, getLocation) {
  'ngInject';

  var cnt = this;

  cnt.showMessage = function () {
    console.log('click');
  };

  cnt.status = 'location';
  cnt.errorMessage = '';

  cnt.getLocation = function () {
    getLocation.then(function successCallback(response) {
      console.log(response);
    }, function errorCallback(response) {
      cnt.status = "error";
      cnt.errorMessage = 'Cannot define your location';
     });
  };


  // $log.debug('Hello from search controller!');

}

export default SearchController;
