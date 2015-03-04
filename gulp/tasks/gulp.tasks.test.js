(function (module) {
    'use strict';

    var tasks = function (plugins, configurations) {
        plugins.gulp.task('test:client:source', '', [], function (callback) {
            var server = plugins.karma.server;

            var karmaOptions = {};


        }, {aliases: ['t:c:s', 'T:S:C']})
    };

    module.exports = tasks;

})(module);