(function (module, require, undefined) {
    'use strict';

    var tasks = function (plugins, configurations) {
        plugins.gulp.task('prepare:client', 'Prepares client assets.', ['inject:bower', 'inject:application:styles', 'inject:application:scripts'], function (callback) {
        }, {aliases: ['P:C', 'P:C']});
    };

    module.exports = tasks;

})(module, require);