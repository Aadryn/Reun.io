(function (module, require) {
    'use strict';

    var isAuthenticated = function (request, response, next) {
        if (!req.isAuthenticated()) {
            response.send(401);
        } else {
            next();
        }
    };

    var middleware = {
        IsAuthenticated: isAuthenticated
    };

    module.exports = middleware;

})(module, require);
