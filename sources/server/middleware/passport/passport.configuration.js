(function (module, require) {
    'use strict';

    var middleware = function (application, timeoutConfiguration) {

        var passport = require('passport');

        application.use(passport.initialize());
        application.use(timeoutConfiguration.HaltOnTimeout);
        application.use(passport.session());
        application.use(timeoutConfiguration.HaltOnTimeout);
        require('./passport.strategy.local.configuration')(application, passport);
        application.use(timeoutConfiguration.HaltOnTimeout);
        require('./passport.strategy.facebook.configuration')(application, passport);
        application.use(timeoutConfiguration.HaltOnTimeout);
        require('./passport.strategy.google.configuration')(application, passport);
        application.use(timeoutConfiguration.HaltOnTimeout);
        require('./passport.strategy.microsoft.configuration')(application, passport);
        application.use(timeoutConfiguration.HaltOnTimeout);
        require('./passport.strategy.twitter.configuration')(application, passport);
        application.use(timeoutConfiguration.HaltOnTimeout);

        return passport;
    };

    module.exports = middleware;

}(module, require));
