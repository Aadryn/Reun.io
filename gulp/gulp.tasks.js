(function (module, require, undefined) {
    'use strict';

    var tasks = function (plugins) {

        // Prepare - Bower
        var wiredepOptions = {};

        plugins.gulp.task('prepare-bower', 'Prepares bower assets to inject dependencies in the "index.html" page.', [], function (callback) {
            return plugins.gulp.src('./sources/client/index.html')
                .pipe(plugins.wiredep(wiredepOptions))
                .pipe(plugins.gulp.dest('./sources/client/'))
        }, {aliases: ['p-b']});

        // Prepare - Application
        var injectOptions = {
            name: 'application'
        };

        var applicationAssets = [
            './sources/client/application/reunio.tool.js',
            './sources/client/application/reunio.application.js',
            './sources/client/application/reunio.configuration.js',
            './sources/client/application/**/*.module.js',
            './sources/client/application/**/*.configuration.js',
        ];

        plugins.gulp.task('prepare-application', 'Prepares application assets to inject dependencies in the "index.html" page.', [], function (callback) {

            var files = plugins.gulp.src(applicationAssets, {read: false});

            return plugins.gulp.src('./sources/client/index.html')
                .pipe(plugins.gulp_inject(files, injectOptions))
                .pipe(plugins.gulp.dest('./sources/client/'))
        }, {aliases: ['p-a']});

        // Prepare - Template
        plugins.gulp.task('prepare-template', 'Prepares template assets to inject dependencies in the "index.html" page.', [], function (callback) {
        }, {aliases: ['p-t']});

        // Build - Client

        var useminOptions = {
            bower: [plugins.gulp_uglify(), plugins.gulp_rev()],
            application: [plugins.gulp_uglify(), plugins.gulp_rev()]
        };

        plugins.gulp.task('build-client', 'Build the client application.', [], function (callback) {
            return plugins.gulp.src('./sources/client/index.html')
                .pipe(plugins.gulp_usemin(useminOptions))
                .pipe(plugins.gulp.dest('./builds/public'))
        }, {aliases: ['b-c']});

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

        plugins.gulp.task('build-server', 'Build the server application.', [], function (callback) {
            return plugins.gulp.src(serverAssets)
                .pipe(plugins.gulp_uglify(uglifyOptions))
                .pipe(plugins.gulp.dest('./builds'))
        }, {aliases: ['b-s']});

        // Lint - Client
        plugins.gulp.task('lint-client', 'Lint the client application assets.', [], function (callback) {
            return plugins.gulp.src(applicationAssets)
                .pipe(plugins.gulp_eslint())
                .pipe(plugins.gulp_eslint.format())
                .pipe(plugins.gulp_eslint.failOnError());
        }, {aliases: ['l-c']});

        // Lint - Server
        plugins.gulp.task('lint-server', 'Lint the server application assets.', [], function (callback) {
            return plugins.gulp.src(serverAssets)
                .pipe(plugins.gulp_eslint())
                .pipe(plugins.gulp_eslint.format())
                .pipe(plugins.gulp_eslint.failOnError());
        }, {aliases: ['l-s']});
    };

    module.exports = tasks;

})(module, require);