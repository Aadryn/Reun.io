(function (module, require) {
    'use strict';

    var middleware = function (application, timeoutConfiguration) {

        var cookieParser = require('cookie-parser');

        application.use(cookieParser());
        application.use(timeoutConfiguration.HaltOnTimeout);

        return cookieParser;
    };

    module.exports = middleware;

}(module, require));
