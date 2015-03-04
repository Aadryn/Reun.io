(function (window, document, tools) {
    'use strict';
    var moduleName = 'reunio.template';
    var module = tools.retrieveAngularModule(moduleName);
    module.run(['$templateCache', function ($templateCache) {
        $templateCache.put('home/controllers/home.dashboard.controller.html', '');
    }]);
}(window, document, window.tools));
