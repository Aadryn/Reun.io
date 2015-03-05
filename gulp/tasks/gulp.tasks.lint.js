(function (module) {
    'use strict';

    var tasks = function (plugins, configurations) {

        plugins.gulp.task('lint:client', 'Lint the client application assets.', [], function () {
            return plugins.gulp.src(configurations.assets.client.scripts)
                .pipe(plugins.gulpEslint())
                .pipe(plugins.gulpEslint.format())
                .pipe(plugins.gulpEslint.failOnError());
        }, {aliases: ['l:c']});

        plugins.gulp.task('lint:server', 'Lint the server application assets.', [], function () {
            return plugins.gulp.src(configurations.assets.server.scripts)
                .pipe(plugins.gulpEslint())
                .pipe(plugins.gulpEslint.format())
                .pipe(plugins.gulpEslint.failOnError());
        }, {aliases: ['l:s']});
    };

    module.exports = tasks;

}(module));
