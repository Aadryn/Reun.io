(function (module) {
    'use strict';

    var tasks = function (plugins, configurations) {
        plugins.gulp.task('clean:client', 'Cleans the client application.', [], function (callback) {
            plugins.del(configurations.builds.client.baseOutputDirectory, configurations.options.del, callback);
        }, {aliases: ['c:c', 'C:C']});

        plugins.gulp.task('clean:server', 'Cleans the server application.', [], function (callback) {
            plugins.del(configurations.builds.server.baseOutputDirectory, configurations.options.del, callback);
        }, {aliases: ['c:s', 'C:S']});

        plugins.gulp.task('clean', 'Build the application.', ['clean:client', 'clean:server'], null, {aliases: ['c', 'C']});
    };

    module.exports = tasks;

})(module);