(function (window, document, tools) {
    'use strict';

    var moduleName = 'reunio.home';

    var module = tools.retrieveAngularModule(moduleName);

    var controllerName = 'home.dashboard.controller';

    var controllerDependencies = ['$scope'];

    var controllerImplementation = function ($scope) {
        $scope.message = '';
    };

    controllerImplementation.$inject = controllerDependencies;

    module.controller(controllerName, controllerImplementation);

}(window, document, window.tools));
