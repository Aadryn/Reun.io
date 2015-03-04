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
            gulp_beautify: require('gulp-beautify'),
            gulp_concat: require('gulp-concat'),
            gulp_debug: require('gulp-debug'),
            gulp_eslint: require('gulp-eslint'),
            gulp_filter: require('gulp-filter'),
            gulp_footer: require('gulp-footer'),
            gulp_header: require('gulp-header'),
            gulp_inject: require('gulp-inject'),
            gulp_livereload: require('gulp-livereload'),
            gulp_minify_css: require('gulp-minify-css'),
            gulp_minify_html: require('gulp-minify-html'),
            gulp_ng_html2js: require('gulp-ng-html2js'),
            gulp_rename: require('gulp-rename'),
            gulp_rev: require('gulp-rev'),
            gulp_sass: require('gulp-sass'),
            gulp_sourcemaps: require('gulp-sourcemaps'),
            gulp_uglify: require('gulp-uglify'),
            gulp_usemin: require('gulp-usemin')
        }
    };

    module.exports = plugins;

})(module, require);