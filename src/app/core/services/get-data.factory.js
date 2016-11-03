'use strict';

export default function (app) {
  app
      .factory('getData', ['$http', function ($http) {

        function req(data) {

          let params = {
            language: "en",
            action: 'search_listings',
            encoding: 'json',
            listing_type: 'buy'
          };

          for (let key in data) {
            params[key] = data[key];
          }

          let req = {
            method: 'GET',
            url: 'http://api.nestoria.co.uk/api?',
            params: params
          };
          return $http(req);
        }

        return req;
      }])

}
