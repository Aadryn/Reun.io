(function (window) {
    'use strict';

    var tools = window.tools || {};

    tools.declareAngularModule = function (moduleName, moduleDependencies) {
        var angular = tools.checkAngularLibrary();
        return angular.module(moduleName, moduleDependencies);
    };

    tools.retrieveAngularModule = function (moduleName) {
        var angular = tools.checkAngularLibrary();
        return tools.checkAngularModuleExist(angular, moduleName);
    };

    tools.checkAngularLibrary = function () {
        var angular = window.angular;
        if (angular === null || angular === undefined || angular === {} || angular === '') {
            throw new Error('The "AngularJs" library must be defined before being used.');
        }
        return angular;
    };

    tools.checkAngularModuleExist = function (angular, moduleName) {
        var module = angular.module(moduleName);
        if (module === null || module === undefined || module === {} || module === '') {
            throw new Error('The "' + moduleName + '" module must be defined before being used.');
        }
        return module;
    };

    tools.checkIsNull = function (object) {
        return object === null;
    };

    tools.checkIsUndefined = function (object) {
        return object === undefined;
    };

    tools.checkIsEmptyObject = function (object) {
        return object === {};
    };

    tools.checkIsEmptyString = function (object) {
        return object === '';
    };

    tools.checkIsUnvalidObject = function (object, checkNullity, checkUndefined, checkEmptyObject, checkEmptyString) {
        var result = false;
        if (checkNullity) {
            result = result || tools.checkIsNull(object);
        }
        if (checkUndefined) {
            result = result || tools.checkIsUndefined(object);
        }
        if (checkEmptyObject) {
            result = result || tools.checkIsEmptyObject(object);
        }
        if (checkEmptyString) {
            result = result || tools.checkIsEmptyString(object);
        }
        return result;
    };

    window.tools = tools;
}(window));
