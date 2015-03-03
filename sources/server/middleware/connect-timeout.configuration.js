(function (module, require) {
    'use strict';

    var middleware = function (application) {

        var connectTimeout = require('connect-timeout');
        var defaultTimeout = '5s';

        application.use(connectTimeout(defaultTimeout));

        var haltOnTimeout = function (req, res, next) {
            if (!req.timedout) {
                next();
            }
        };

        return {
            Timeout: connectTimeout,
            HaltOnTimeout: haltOnTimeout
        };
    };

    module.exports = middleware;

}(module, require));
