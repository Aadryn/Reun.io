(function (module) {
    'use strict';

    var tasks = function (plugins, configurations) {
        plugins.gulp.task('build:client', 'Build the client application.', ['prepare:client', 'lint:client'], function (callback) {
            return plugins.gulp.src(configurations.assets.client.index)
                .pipe(plugins.gulp_usemin(configurations.options.usemin))
                .pipe(plugins.gulp.dest(configurations.builds.client.baseOutputDirectory))
        }, {aliases: ['b:c']});

        plugins.gulp.task('build:server', 'Build the server application.', ['lint:server'], function (callback) {
            return plugins.gulp.src(configurations.assets.server.scripts)
                .pipe(plugins.gulp_uglify(configurations.options.uglify))
                .pipe(plugins.gulp.dest(configurations.builds.server.baseOutputDirectory))
        }, {aliases: ['b:s']});
    };

    module.exports = tasks;

})(module);