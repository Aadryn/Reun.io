(function (module) {
    'use strict';

    var tasks = function (plugins, configurations) {

        plugins.gulp.task('inject:bower', 'Injects bower assets to the "index.html" page.', [], function () {
            return plugins.gulp.src(configurations.assets.client.index)
                .pipe(plugins.wiredep(configurations.options.wiredep))
                .pipe(plugins.gulp.dest(configurations.builds.client.sourceDirectory));
        }, {aliases: ['i:b', 'i:B']});

        plugins.gulp.task('inject:application:scripts', 'Injects application script assets to the "index.html" page.', ['transform:application:templates'], function (callback) {
            var files = plugins.gulp.src(configurations.assets.client.scripts, {read: false});
            return plugins.gulp.src(configurations.assets.client.index)
                .pipe(plugins.gulpInject(files, configurations.options.inject))
                .pipe(plugins.gulp.dest(configurations.builds.client.sourceDirectory));
        }, {aliases: ['i:a:sc', 'I:A:SC']});

        plugins.gulp.task('inject:application:styles', 'Injects application style assets to the "index.html" page.', ['transform:application:styles'], function (callback) {
            var files = plugins.gulp.src(configurations.assets.client.styles, {read: false});
            return plugins.gulp.src(configurations.assets.client.index)
                .pipe(plugins.gulpInject(files, configurations.options.inject))
                .pipe(plugins.gulp.dest(configurations.builds.client.sourceDirectory));
        }, {aliases: ['i:a:st', 'I:A:ST']});
    };

    module.exports = tasks;

}(module));
