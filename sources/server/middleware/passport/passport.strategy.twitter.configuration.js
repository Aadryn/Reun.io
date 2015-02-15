(function (module, require) {
    'use strict';

    var configuration = function (application, passport) {

        var Strategy = require('passport-twitter').Strategy;

        var twitterSecret = {
            consumerKey: 'dRy5HqA3pWxb3A7Ke7FMFrlZz',
            consumerSecret: '2cLbZNX3sqyoOxf2SreUOREQzhA3lh1g45HitnmanOLy2g8sib',
            callbackURL: "http://localhost:3000/authentication/twitter/callback"
        };

        var verifyUserValidity = function (token, tokenSecret, profile, done) {
            console.log('Twitter');
            console.log('Token :' + token);
            console.log('TokenSecret :' + tokenSecret);
            console.log('Profile :' + profile);
            return done('');
        };

        var strategy = new Strategy(twitterSecret, verifyUserValidity);
        passport.use(strategy);

        application.get('/authentication/twitter', passport.authenticate('twitter'));
        application.get('/authentication/twitter/callback', passport.authenticate('twitter', {
            successRedirect: '/',
            failureRedirect: '/authentication/login'
        }));
    };

    module.exports = configuration;

})(module, require);
