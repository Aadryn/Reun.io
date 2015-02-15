(function (window, document, tools) {
    'use strict';

    var moduleName = 'Reunio';
    var moduleDependencies = [
        'Reunio.Home',
        'Reunio.Layout',
        'Reunio.Profile',
        'Reunio.Shared'
    ];
    var module = tools.DeclareAngularModule(moduleName, moduleDependencies);

})(window, document, window.tools);
