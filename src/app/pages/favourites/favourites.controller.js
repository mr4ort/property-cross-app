'use strict';

function FavouritesController(dataStorage, $state, localStorage) {
  'ngInject';

  const cnt = this;

  cnt.favorites = localStorage.get('favorites') ? localStorage.get('favorites') : [];

  cnt.showDetails = function (item) {

    dataStorage.set('item-details', item);
    dataStorage.set('data-items', cnt.dataForDispaing);

    $state.go('details');
  }


}

export default FavouritesController;
