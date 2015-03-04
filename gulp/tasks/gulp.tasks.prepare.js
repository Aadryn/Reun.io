(function (module, require, undefined) {
    'use strict';

    var tasks = function (plugins, configurations) {
        plugins.gulp.task('prepare:client', 'Prepares client assets.', ['inject:bower', 'inject:application:styles', 'inject:application:scripts'], null, {aliases: ['P:C', 'P:C']});
    };

    module.exports = tasks;

})(module, require);