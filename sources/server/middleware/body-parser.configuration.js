(function (module, require) {
    'use strict';

    var middleware = function (application, timeoutConfiguration) {

        var bodyParser = require('body-parser');
        var bodyParserOptions = {
            extended: false
        };

        application.use(bodyParser.urlencoded(bodyParserOptions));
        application.use(timeoutConfiguration.HaltOnTimeout);
        application.use(bodyParser.json());
        application.use(timeoutConfiguration.HaltOnTimeout);

        return bodyParser
    };

    module.exports = middleware;

})(module, require);
