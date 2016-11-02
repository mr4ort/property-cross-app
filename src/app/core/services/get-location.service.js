'use strict';

export default function (app) {
    app
        .factory('getLocation', ['$http', function ($http) {

            return $http({
                method: 'GET',
                url: 'http://ip-api.com/json'
            });

        }])
}
