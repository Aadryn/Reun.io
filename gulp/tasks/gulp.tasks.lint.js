(function (module, require) {
    'use strict';

    var tasks = function (plugins, configurations) {

        plugins.gulp.task('lint:client', 'Lint the client application assets.', [], function (callback) {
            return plugins.gulp.src(configurations.assets.client.scripts)
                .pipe(plugins.gulp_eslint())
                .pipe(plugins.gulp_eslint.format())
                .pipe(plugins.gulp_eslint.failOnError());
        }, {aliases: ['l:c']});

        plugins.gulp.task('lint:server', 'Lint the server application assets.', [], function (callback) {
            return plugins.gulp.src(configurations.assets.server.scripts)
                .pipe(plugins.gulp_eslint())
                .pipe(plugins.gulp_eslint.format())
                .pipe(plugins.gulp_eslint.failOnError());
        }, {aliases: ['l:s']});
    };

    module.exports = tasks;

})(module, require);