(function (module, require) {
    'use strict';

    var middleware = function (application, timeoutConfiguration) {

        var morgan = require('morgan');

        application.use(morgan('combined'));
        application.use(timeoutConfiguration.HaltOnTimeout);

        return morgan;
    };

    module.exports = middleware;

}(module, require));
