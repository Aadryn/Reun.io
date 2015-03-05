(function (module) {
    'use strict';

    var tasks = function (plugins) {
        plugins.gulp.task('test:client:source', '', [], function () {
        }, {aliases: ['t:c:s', 'T:S:C']});
    };

    module.exports = tasks;

}(module));
