(function (module, require, undefined) {
    'use strict';

    var plugins = function () {
        var gulp = require('gulp');
        return {
            // Node - Plugins
            wiredep: require('wiredep').stream,

            // Gulp - Plugins
            gulp: require('gulp-help')(gulp),
            gulp_beautify: require('gulp-beautify'),
            gulp_concat: require('gulp-concat'),
            gulp_debug: require('gulp-debug'),
            gulp_eslint: require('gulp-eslint'),
            gulp_inject: require('gulp-inject'),
            gulp_minify_css: require('gulp-minify-css'),
            gulp_minify_html: require('gulp-minify-html'),
            gulp_rename: require('gulp-rename'),
            gulp_rev: require('gulp-rev'),
            gulp_sourcemaps: require('gulp-sourcemaps'),
            gulp_uglify: require('gulp-uglify'),
            gulp_usemin: require('gulp-usemin')
        }
    };

    module.exports = plugins;

})(module, require);