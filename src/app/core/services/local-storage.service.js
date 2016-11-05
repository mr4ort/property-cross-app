'use strict';

export default function (app) {
    app
        .service('localStorage', ['$window', function ($window) {
            return {

                get: function (key) {
                    if ($window.localStorage[key]) {
                        var val = $window.localStorage[key];
                        return JSON.parse(val);
                    }
                    return false;
                },

                set: function (key, val) {
                    if (val === undefined) {
                        $window.localStorage.removeItem(key);
                    } else {
                        $window.localStorage[key] = JSON.stringify(val);
                    }
                    return $window.localStorage[key];
                }
            }
        }])
}
