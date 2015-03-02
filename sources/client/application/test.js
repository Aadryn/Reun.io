(function (window, document, tools) {
    'use strict';
    var moduleName = '<%= moduleName %>';
    var module = tools.retrieveAngularModule(moduleName);
    module.run(['$templateCache', function ($templateCache) {
        $templateCache.put('<%= template.url %>', '<%= template.escapedContent %>');
    }]);
}(window, document, window.tools));
