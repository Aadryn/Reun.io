(function (module, require, undefined) {
    'use strict';

    var tasks = function (plugins) {

        // Prepare - Bower
        var wiredepOptions = {};

        plugins.gulp.task('inject:bower', 'Injects bower assets to the "index.html" page.', [], function (callback) {
            return plugins.gulp.src('./sources/client/index.html')
                .pipe(plugins.wiredep(wiredepOptions))
                .pipe(plugins.gulp.dest('./sources/client/'))
        }, {aliases: ['i:b', 'i:B']});

        // Prepare - Application
        var injectOptions = {
            name: 'application',
            relative: true
        };

        var clientScriptAssets = [
            './sources/client/application/reunio.tool.js',
            './sources/client/application/reunio.application.js',
            './sources/client/application/reunio.configuration.js',
            './sources/client/application/**/*.module.js',
            './sources/client/application/**/*.configuration.js',
        ];

        var clientStyleAssets = [
            './sources/client/assets/styles/default.css'
        ];


        plugins.gulp.task('inject:application:scripts', 'Injects application script assets to the "index.html" page.', [], function (callback) {
            var files = plugins.gulp.src(clientScriptAssets, {read: false});
            return plugins.gulp.src('./sources/client/index.html')
                .pipe(plugins.gulp_inject(files, injectOptions))
                .pipe(plugins.gulp.dest('./sources/client/'))
        }, {aliases: ['i:a:sc', 'I:A:SC']});

        plugins.gulp.task('inject:application:styles', 'Injects application style assets to the "index.html" page.', [], function (callback) {
            var files = plugins.gulp.src(clientStyleAssets, {read: false});
            return plugins.gulp.src('./sources/client/index.html')
                .pipe(plugins.gulp_inject(files, injectOptions))
                .pipe(plugins.gulp.dest('./sources/client/'))
        }, {aliases: ['i:a:st', 'I:A:ST']})


        var ngHtmlOptions = {
            template: '    $templateCache.put(\'<%= template.url %>\', \'<%= template.escapedContent %>\');'
        }

        plugins.gulp.task('prepare:application:templates', 'Prepares application template assets to inject dependencies in the "index.html" page.', [], function (callback) {
            return plugins.gulp.src('./sources/client/application/**/*.html')
                .pipe(plugins.gulp_minify_html())
                .pipe(plugins.gulp_ng_html2js(ngHtmlOptions))
                .pipe(plugins.gulp_concat('reunio.template.js'))
                .pipe(plugins.gulp_header('(function(window, document, tools){\n  \'use strict\';\n  var moduleName = \'reunio.template\';\n  var module = tools.retrieveAngularModule(moduleName);\n  module.run([\'$templateCache\', function($templateCache){\n'))
                .pipe(plugins.gulp_footer('\n  }]);\n}(window, document, window.tools));\n'))
                .pipe(plugins.gulp.dest('./sources/client/application/'))
        }, {aliases: ['p:a:t', 'P:A:T']});

        plugins.gulp.task('prepare:application:styles', 'Prepares application template assets to inject dependencies in the "index.html" page.', [], function (callback) {
            return plugins.gulp.src('./sources/client/assets/styles/default.scss')
                .pipe(plugins.gulp_sass())
                .pipe(plugins.gulp.dest('./sources/client/assets/styles/'))
        }, {aliases: ['p:a:st', 'P:A:ST']});

        plugins.gulp.task('prepare:application', 'Prepares application assets to inject dependencies in the "index.html" page.', ['inject:bower', 'inject:application:scripts', 'inject:application:styles'], null, {aliases: ['p:a', 'P:A']})

        // Build - Client

        var useminOptions = {
            "styles_bower": [plugins.gulp_minify_css(), plugins.gulp_rev()],
            "scripts_bower": [plugins.gulp_uglify(), plugins.gulp_rev()],
            "styles_application": [plugins.gulp_minify_css(), plugins.gulp_rev()],
            "scripts_application": [plugins.gulp_uglify(), plugins.gulp_rev()]
        };

        plugins.gulp.task('build:client', 'Build the client application.', ['lint:client'], function (callback) {
            return plugins.gulp.src('./sources/client/index.html')
                .pipe(plugins.gulp_usemin(useminOptions))
                .pipe(plugins.gulp.dest('./builds/public'))
        }, {aliases: ['b:c']});

        // Build - Server
        var serverAssets = [
            './sources/server/**/*.js',
        ];

        var uglifyOptions = {
            indent_start: 0,     // start indentation on every line (only when `beautify`)
            indent_level: 4,     // indentation level (only when `beautify`)
            quote_keys: false, // quote all keys in object literals?
            space_colon: true,  // add a space after colon signs?
            ascii_only: false, // output ASCII-safe? (encodes Unicode characters as ASCII)
            inline_script: false, // escape "</script"?
            width: 80,    // informative maximum line width (for beautified output)
            max_line_len: 32000, // maximum line length (for non-beautified output)
            ie_proof: true,  // output IE-safe code?
            beautify: false, // beautify output?
            source_map: null,  // output a source map
            bracketize: false, // use brackets every time?
            comments: false, // output comments?
            semicolons: true,  // use semicolons to separate statements? (otherwise, newlines)
        };

        plugins.gulp.task('build:server', 'Build the server application.', ['lint:server'], function (callback) {
            return plugins.gulp.src(serverAssets)
                .pipe(plugins.gulp_uglify(uglifyOptions))
                .pipe(plugins.gulp.dest('./builds'))
        }, {aliases: ['b:s']});

        // Lint - Client
        plugins.gulp.task('lint:client', 'Lint the client application assets.', [], function (callback) {
            return plugins.gulp.src(clientScriptAssets)
                .pipe(plugins.gulp_eslint())
                .pipe(plugins.gulp_eslint.format())
                .pipe(plugins.gulp_eslint.failOnError());
        }, {aliases: ['l:c']});

        // Lint - Server
        plugins.gulp.task('lint:server', 'Lint the server application assets.', [], function (callback) {
            return plugins.gulp.src(serverAssets)
                .pipe(plugins.gulp_eslint())
                .pipe(plugins.gulp_eslint.format())
                .pipe(plugins.gulp_eslint.failOnError());
        }, {aliases: ['l:s']});
    };

    module.exports = tasks;

})(module, require);