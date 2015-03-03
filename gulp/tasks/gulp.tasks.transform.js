(function (module, require, undefined) {
    'use strict';

    var tasks = function (plugins, configurations) {

        plugins.gulp.task('transform:application:templates', 'Compiles application template assets to inject dependencies in the "index.html" page.', [], function (callback) {
            return plugins.gulp.src('./sources/client/application/**/*.html')
                .pipe(plugins.gulp_minify_html())
                .pipe(plugins.gulp_ng_html2js(configurations.options.ngHtml2js))
                .pipe(plugins.gulp_concat('reunio.template.js'))
                .pipe(plugins.gulp_header('(function(window, document, tools){\n  \'use strict\';\n  var moduleName = \'reunio.template\';\n  var module = tools.retrieveAngularModule(moduleName);\n  module.run([\'$templateCache\', function($templateCache){\n'))
                .pipe(plugins.gulp_footer('\n  }]);\n}(window, document, window.tools));\n'))
                .pipe(plugins.gulp.dest('./sources/client/application/'))
        }, {aliases: ['t:a:t', 'T:A:T']});

        plugins.gulp.task('transform:application:styles', 'Compiles application template assets to inject dependencies in the "index.html" page.', [], function (callback) {
            return plugins.gulp.src('./sources/client/assets/styles/default.scss')
                .pipe(plugins.gulp_sass())
                .pipe(plugins.gulp.dest('./sources/client/assets/styles/'))
        }, {aliases: ['T:a:st', 'T:A:ST']});
    };

    module.exports = tasks;

})(module, require);