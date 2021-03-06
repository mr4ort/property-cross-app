'use strict';

function ResultController(dataStorage, getData, $state) {
  'ngInject';

  const cnt = this;

  let searchResult = dataStorage.get('search-result');
  let placeName = dataStorage.get('place-name');

  cnt.dataForDispaing =  {};

  function downloadData(dataReqest) {
    getData(dataReqest).then(function successCallback(response) {
      fillData(response.data.response);

    }, function errorCallback(response) {
      console.log(response.data.response.application_response_code + response.data.response.application_response_text);
    });
  }

  function fillData(data) {

    if (cnt.dataForDispaing.place_name === undefined) {
      cnt.dataForDispaing.place_name = data.locations[0].place_name;
      cnt.dataForDispaing.searchResult = data.listings;
      cnt.dataForDispaing.totalLenth = data.total_results;
      cnt.dataForDispaing.totalPages = data.total_pages;
      cnt.dataForDispaing.corentPages = data.page;
    } else {
      cnt.dataForDispaing.searchResult = cnt.dataForDispaing.searchResult.concat(data.listings);
      cnt.dataForDispaing.corentPages = data.page;
    }

    console.log(cnt.dataForDispaing);

  }


  if (searchResult) {
    dataStorage.set('search-result');
    fillData(searchResult);
  }
  else if (placeName) {
    dataStorage.set('place-name');

    let requestData = {
      country: 'ua',
      place_name: placeName
    };

    downloadData(requestData);
  }
  else {
    $state.go('search')
  }
  
  cnt.loadMore = function () {

    if (cnt.dataForDispaing.corentPages < cnt.dataForDispaing.totalPages) {
      let requestData = {
        country: 'ua',
        place_name: cnt.dataForDispaing.place_name,
        page: cnt.dataForDispaing.corentPages + 1
      };

      downloadData(requestData);
    }
  };
  
  cnt.showDetails = function (item) {

    dataStorage.set('item-details', item);
    dataStorage.set('data-items', cnt.dataForDispaing);

    $state.go('details');
  }


}

export default ResultController;
