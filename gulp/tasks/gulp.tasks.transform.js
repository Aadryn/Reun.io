(function (module) {
    'use strict';

    var tasks = function (plugins, configurations) {

        plugins.gulp.task('transform:application:templates', 'Compiles application template assets to inject dependencies in the "index.html" page.', [], function () {
            return plugins.gulp.src('./sources/client/application/**/*.html')
                .pipe(plugins.gulpMinifyHtml())
                .pipe(plugins.gulpNgHtml2js(configurations.options.ngHtml2js))
                .pipe(plugins.gulpConcat('reunio.template.js'))
                .pipe(plugins.gulpHeader('(function(window, document, tools){\n  \'use strict\';\n  var moduleName = \'reunio.template\';\n  var module = tools.retrieveAngularModule(moduleName);\n  module.run([\'$templateCache\', function($templateCache){\n'))
                .pipe(plugins.gulpFooter('\n  }]);\n}(window, document, window.tools));\n'))
                .pipe(plugins.gulp.dest('./sources/client/application/'));
        }, {aliases: ['t:a:t', 'T:A:T']});

        plugins.gulp.task('transform:application:styles', 'Compiles application template assets to inject dependencies in the "index.html" page.', [], function () {
            return plugins.gulp.src('./sources/client/assets/styles/default.scss')
                .pipe(plugins.gulpSass())
                .pipe(plugins.gulp.dest('./sources/client/assets/styles/'));
        }, {aliases: ['T:a:st', 'T:A:ST']});
    };

    module.exports = tasks;

}(module, require));
