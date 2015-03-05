(function (module, require) {
    'use strict';

    var tasks = function (plugins, configurations) {
        require('./tasks/gulp.tasks.clean')(plugins, configurations);
        require('./tasks/gulp.tasks.transform')(plugins, configurations);
        require('./tasks/gulp.tasks.inject')(plugins, configurations);
        require('./tasks/gulp.tasks.prepare')(plugins, configurations);
        require('./tasks/gulp.tasks.lint')(plugins, configurations);
        require('./tasks/gulp.tasks.build')(plugins, configurations);
    };

    module.exports = tasks;

}(module, require));
