'use strict';

export default function (app) {
    app
        .service('dataStorage',  function () {
            const storage = {};

            return {

                get: function (key) {
                    if (storage[key]) {
                        let val = storage[key];
                        return JSON.parse(val);
                    }
                    return false;
                },

                set: function (key, val) {
                    if (val === undefined) {
                        storage[key] = undefined;
                    } else {
                        storage[key] = JSON.stringify(val);
                    }
                    return storage[key];
                }
            }
        })
}
