'use strict';

const shared = angular.module('core.shared', []);

require('./directives/validation-test/validation-test.directive')(shared);

require('./services/constants')(shared);
require('./services/resolver.provider')(shared);
require('./services/local-storage.service.js')(shared);
require('./services/get-location.service')(shared);
require('./services/get-data.factory.js')(shared);
require('./services/data-storage.service')(shared);

export default shared;
