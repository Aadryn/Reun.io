(function (module, require) {
    'use strict';

    var configuration = function (application, passport) {

        var Strategy = require('passport-windowslive').Strategy;

        var microsoftSecret = {
            clientID: '000000004813CC5A',
            clientSecret: '-8a1ejFV7ohoWlB-EPnHUpsDDysqtgUX',
            callbackURL: 'http://localhost:3000/authentication/microsoft/callback'
        };

        var verifyUserValidity = function (accessToken, refreshToken, profile, done) {
            console.log('Microsoft');
            console.log('AccessToken :' + accessToken);
            console.log('RefreshToken :' + refreshToken);
            console.log('Profile :' + profile);
            return done('');
        };

        var strategy = new Strategy(microsoftSecret, verifyUserValidity);
        passport.use(strategy);

        application.get('/authentication/microsoft', passport.authenticate('windowslive'));
        application.get('/authentication/microsoft/callback', passport.authenticate('windowslive', {
            successRedirect: '/',
            failureRedirect: '/authentication/login'
        }));
    };

    module.exports = configuration;

})(module, require);
