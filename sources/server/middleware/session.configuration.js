(function (module, require) {
    'use strict';

    var middleware = function (application, timeoutConfiguration) {

        var session = require('express-session');

        var sessionOptions = {
            secret: 'qavuDUxE2w*k3T*=_#g?fR$62ABrUfenmethed!ufa-re8hEfr!t+ututrustukebE#uQUWAD3uy7sw6TH?vaxecuZe6HuPhT8AThUPr?--d5prEvahEZExa33pa68?epe5R2m=thurA+aPru7H3PathetHEDaz#RUqe5UZ-B&k74heDrucr4ThAj?jUHUNu',
            resave: false,
            saveUninitialized: true
        };

        application.use(session(sessionOptions));
        application.use(timeoutConfiguration.HaltOnTimeout);

        return session;
    };

    module.exports = middleware;

}(module, require));
