(function (module, require, undefined) {
    'use strict';

    var plugins = require('./gulp/gulp.plugins')();
    var configurations = require('./gulp/gulp.configurations')(plugins);

    require('./gulp/gulp.tasks')(plugins, configurations);

}(module, require));
