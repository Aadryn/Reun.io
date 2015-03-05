(function (module, require) {
    'use strict';

    var plugins = function () {
        var gulp = require('gulp');
        return {
            // Node - Plugins
            del: require('del'),
            wiredep: require('wiredep').stream,
            karma: require('karma'),

            // Gulp - Plugins
            gulp: require('gulp-help')(gulp),
            gulpBeautify: require('gulp-beautify'),
            gulpConcat: require('gulp-concat'),
            gulpDebug: require('gulp-debug'),
            gulpEslint: require('gulp-eslint'),
            gulpFilter: require('gulp-filter'),
            gulpFooter: require('gulp-footer'),
            gulpHeader: require('gulp-header'),
            gulpInject: require('gulp-inject'),
            gulpLivereload: require('gulp-livereload'),
            gulpMinifyCss: require('gulp-minify-css'),
            gulpMinifyHtml: require('gulp-minify-html'),
            gulpNgHtml2js: require('gulp-ng-html2js'),
            gulpRename: require('gulp-rename'),
            gulpRev: require('gulp-rev'),
            gulpSass: require('gulp-sass'),
            gulpSourcemaps: require('gulp-sourcemaps'),
            gulpUglify: require('gulp-uglify'),
            gulpUsemin: require('gulp-usemin')
        };
    };

    module.exports = plugins;

}(module, require));
