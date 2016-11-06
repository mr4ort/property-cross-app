'use strict';

function ResultController($log, dataStorage) {
  'ngInject';

  const cnt = this;

  let searchResult = dataStorage.get('search-result');
  let placeName = dataStorage.get('place-name');
  let totalPages;

  cnt.dataForDispaing = {};


  if (searchResult) {
    dataStorage.set('search-result');
    cnt.dataForDispaing.place_name = searchResult.locations[0].place_name;
    cnt.dataForDispaing.searchResult = searchResult.listings;
    cnt.dataForDispaing.totalLenth = searchResult.total_results;
    cnt.dataForDispaing.totalPages = searchResult.total_pages;
    console.log(cnt);
  } else if (placeName) {
    dataStorage.set('place-name');
    console.log('downloading data');
  }

}

export default ResultController;
