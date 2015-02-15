(function (module, require) {
    'use strict';

    var configuration = function (application, passport) {

        var Strategy = require('passport-facebook').Strategy;

        var facebookSecret = {
            clientID: '325956490943195',
            clientSecret: 'de17509ca1649b094dac094a6a4904b4',
            callbackURL: "http://localhost:3000/authentication/facebook/callback"
        };

        var verifyUserValidity = function (accessToken, refreshToken, profile, done) {
            console.log('Facebook');
            console.log('AccessToken :' + accessToken);
            console.log('RefreshToken :' + refreshToken);
            console.log('Profile :' + profile);
            return done('');
        };

        var strategy = new Strategy(facebookSecret, verifyUserValidity);
        passport.use(strategy);

        application.get('/authentication/facebook', passport.authenticate('facebook'));
        application.get('/authentication/facebook/callback', passport.authenticate('facebook', {
            successRedirect: '/',
            failureRedirect: '/authentication/login'
        }));
    };

    module.exports = configuration;

})(module, require);
