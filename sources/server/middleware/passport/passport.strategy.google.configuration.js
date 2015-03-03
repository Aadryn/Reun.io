(function (module, require) {
    'use strict';

    var configuration = function (application, passport) {

        var Strategy = require('passport-google').Strategy;

        var googleSecret = {
            returnURL: 'http://localhost:3000/authentication/google/callback',
            realm: 'http://localhost:3000/'
        };

        var verifyUserValidity = function (identifier, profile, done) {
            return done('');
        };

        var strategy = new Strategy(googleSecret, verifyUserValidity);
        passport.use(strategy);

        application.get('/authentication/google', passport.authenticate('google'));
        application.get('/authentication/google/callback', passport.authenticate('google', {
            successRedirect: '/',
            failureRedirect: '/authentication/login'
        }));
    };

    module.exports = configuration;

}(module, require));
