(function (module, require, undefined) {
    'use strict';

    var plugins = require('./gulp/gulp.plugins')();

    require('./gulp/gulp.tasks')(plugins);

})(module, require);