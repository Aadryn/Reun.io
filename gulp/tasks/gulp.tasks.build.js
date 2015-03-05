(function (module) {
    'use strict';

    var tasks = function (plugins, configurations) {
        plugins.gulp.task('build:client', 'Build the client application.', ['prepare:client', 'lint:client'], function () {
            return plugins.gulp.src(configurations.assets.client.index)
                .pipe(plugins.gulpUsemin(configurations.options.usemin))
                .pipe(plugins.gulp.dest(configurations.builds.client.baseOutputDirectory));
        }, {aliases: ['b:c', 'B:C']});

        plugins.gulp.task('build:server', 'Build the server application.', ['lint:server'], function () {
            return plugins.gulp.src(configurations.assets.server.scripts)
                .pipe(plugins.gulpUglify(configurations.options.uglify))
                .pipe(plugins.gulp.dest(configurations.builds.server.baseOutputDirectory));
        }, {aliases: ['b:s', 'B:S']});

        plugins.gulp.task('build', 'Build the application.', ['build:client', 'build:server'], null, {aliases: ['b', 'B']});
    };

    module.exports = tasks;

}(module));
