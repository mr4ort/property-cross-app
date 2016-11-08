'use strict';

function DetailsController($log, dataStorage, $state, localStorage) {
  'ngInject';

  const cnt = this;

  cnt.data = dataStorage.get('item-details');
  let favorites = localStorage.get('favorites') ? localStorage.get('favorites') : [];

  if (!cnt.data) {
    $state.go('search');
  }

  cnt.addToFavorites = function () {
    let favorites = localStorage.get('favorites') ? localStorage.get('favorites') : [];
    favorites.push(cnt.data);
    localStorage.set('favorites', favorites);
  };

}

export default DetailsController;
