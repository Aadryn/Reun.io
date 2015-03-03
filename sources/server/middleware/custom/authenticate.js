(function (module) {
    'use strict';

    var isAuthenticated = function (request, response, next) {
        if (!request.isAuthenticated()) {
            response.send(401);
        } else {
            next();
        }
    };

    var middleware = {
        IsAuthenticated: isAuthenticated
    };

    module.exports = middleware;

}(module));
