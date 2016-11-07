'use strict';

function DetailsController($log, dataStorage, $state) {
  'ngInject';

  const cnt = this;

  cnt.data = dataStorage.get('item-details');

  if (!cnt.data) {
    $state.go('search');
  }

  console.log(cnt.data);

}

export default DetailsController;
