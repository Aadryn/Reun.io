(function (window, document, tools) {
    'use strict';
    var moduleName = 'reunio.template';
    var module = tools.retrieveAngularModule(moduleName);
    module.run(['$templateCache', function ($templateCache) {
        $templateCache.put('layout/directives/layout.footer.directive.html', '<div></div>');
        $templateCache.put('layout/directives/layout.header.directive.html', '<div></div>');
        $templateCache.put('layout/directives/layout.page.directive.html', '<div></div>');
    }]);
}(window, document, window.tools));
