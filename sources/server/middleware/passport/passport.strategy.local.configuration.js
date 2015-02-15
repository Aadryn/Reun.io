(function (module, require) {
    'use strict';

    var configuration = function (application, passport) {

        var Strategy = require('passport-local').Strategy;

        var verifyUserValidity = function (username, password, done) {
            return done('');
        };

        var strategy = new Strategy(verifyUserValidity);
        passport.use(strategy);

        application.get('/authentication/local', passport.authenticate('google', {
            successRedirect: '/',
            failureRedirect: '/authentication/login'
        }));
    };

    module.exports = configuration;

})(module, require);
