'use strict';

function SearchController(localStorage, getLocation, getData, $state, dataStorage) {
  'ngInject';

  var cnt = this;

  cnt.showMessage = function () {
    console.log('click');
  };

  cnt.status = 'resent';
  cnt.errorMessage = '';
  cnt.resentSearch = localStorage.get('resent-search') ? localStorage.get('resent-search'): [];

  function downloadData(dataReqest) {
    console.log(dataReqest);
    getData(dataReqest).then(function successCallback(response) {
      displayData(response.data.response);

    }, function errorCallback(response) {
      console.log(response.data.response.application_response_code + response.data.response.application_response_text);
    });
  }

  function displayData(receivedData) {

    let responsCeode = receivedData.application_response_code;

    if (responsCeode === '200') {
      cnt.status = "error";
      cnt.errorMessage = 'The location was ambiguous and we could not determine which possibility to display listings for. The possible location names are returned in this case.';
    } else if (responsCeode === '100' || responsCeode === '101' || responsCeode === '110') {
      cnt.status = "location";
      cnt.searchResult = receivedData;
    }

    console.log(receivedData);
  }

  function addToResent(searchResult) {
    console.log(searchResult);
  }

  cnt.searchByPlaceName = function (placeName) {

    if (!placeName.length) return false;

    let requestData = {
      country: 'ua',
      place_name: placeName
    };

    downloadData(requestData);
  };

  cnt.getLocation = function () {
    getLocation.then(function successCallback(response) {

      let requestData = {
        country: response.data.countryCode,
        centre_point: response.data.lat + ',' + response.data.lon,
      };

      downloadData(requestData);

    }, function errorCallback(response) {
      cnt.status = "error";
      cnt.errorMessage = 'Cannot define your location';
     });
  };

  cnt.showSearchResult = function (searchResult) {

    dataStorage.set('searchResult', searchResult);
    addToResent(searchResult);

    $state.go('result');
  }

}

export default SearchController;
