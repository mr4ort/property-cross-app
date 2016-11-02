'use strict';

const shared = angular.module('core.shared', []);

require('./directives/validation-test/validation-test.directive')(shared);

require('./services/constants')(shared);
require('./services/store.factory')(shared);
require('./services/resolver.provider')(shared);
require('./services/store.service')(shared);
require('./services/get-location.service')(shared);
// require('./services/search.factory')(shared);

export default shared;
