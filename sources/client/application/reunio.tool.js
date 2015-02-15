(function (window, document) {
    'use strict';

    var tools = window.tools || {};

    tools.DeclareAngularModule = function (moduleName, moduleDependencies) {
        var angular = betclic.tools.CheckAngularLibrary();
        return angular.module(moduleName, moduleDependencies);
    };

    tools.RetrieveAngularModule = function (moduleName) {
        var angular = betclic.tools.CheckAngularLibrary();
        return betclic.tools.CheckAngularModuleExist(angular, moduleName);
    };

    tools.CheckAngularLibrary = function () {
        var angular = window.angular;
        if (angular === null || angular === undefined || angular === {} || angular === '') {
            throw new Error('The "AngularJs" library must be defined before being used.');
        }
        return angular;
    };

    tools.CheckAngularModuleExist = function (angular, moduleName) {
        var module = angular.module(moduleName);
        if (module === null || module === undefined || module === {} || module === '') {
            throw new Error('The "' + moduleName + '" module must be defined before being used.');
        }
        return module;
    };

    tools.CheckIsNull = function (object) {
        return object === null;
    };

    tools.CheckIsUndefined = function (object) {
        return object === undefined;
    };

    tools.CheckIsEmptyObject = function (object) {
        return object === {};
    };

    tools.CheckIsEmptyString = function (object) {
        return object === '';
    };

    tools.CheckIsUnvalidObject = function (object, checkNullity, checkUndefined, checkEmptyObject, checkEmptyString) {
        var result = false;
        if (checkNullity) {
            result = result || tools.CheckIsNull(object);
        }
        if (checkUndefined) {
            result = result || tools.CheckIsUndefined(object);
        }
        if (checkEmptyObject) {
            result = result || tools.CheckIsEmptyObject(object);
        }
        if (checkEmptyString) {
            result = result || tools.CheckIsEmptyString(object);
        }

        return result;
    };

    window.tools = tools;
})(window, document);
