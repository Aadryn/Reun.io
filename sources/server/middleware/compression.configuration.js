(function (module, require) {
    'use strict';

    var middleware = function (application, timeoutConfiguration) {

        var compression = require('compression');
        var compressionOptions = {
            threshold: 512
        };

        application.use(compression(compressionOptions));
        application.use(timeoutConfiguration.HaltOnTimeout);

        return compression;
    };

    module.exports = middleware;

}(module, require));
