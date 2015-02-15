(function (module, require) {
    'use strict';

    var route = function (application, password) {
        application.get('/', function (request, response) {
            response.send('Hello world');
        });

        application.get('/authentication/login', function (request, response) {
            response.send('');
        });
    };

    module.exports = route;

})(module, require);
