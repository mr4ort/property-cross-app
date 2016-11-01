'use strict';

export default function (app) {
    app
        .factory('loadData', storeFactory);

    function storeFactory ($resource) {
        // 'ngInject';
        var params = {
            // 'get': {method: 'GET'}
        };

        var request = $resource('http://api.nestoria.co.uk/api', params);



        return request;
    };

}
