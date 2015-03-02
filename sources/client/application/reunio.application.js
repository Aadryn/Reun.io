(function (window, document, tools) {
    'use strict';

    var moduleName = 'reunio';
    var moduleDependencies = [
        'reunio.home',
        'reunio.layout',
        'reunio.profile',
        'reunio.shared'
    ];
    tools.declareAngularModule(moduleName, moduleDependencies);

}(window, document, window.tools));
