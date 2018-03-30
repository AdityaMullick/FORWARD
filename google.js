/**
 * @license RequireJS jsonp Copyright (c) 2004-2010, The Dojo Foundation All Rights Reserved.
 * Available via the MIT, GPL or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */
/*jslint nomen: false, plusplus: false */
/*global require: false, setTimeout: false */

//>>includeStart("useStrict", pragmas.useStrict);
"use strict";
//>>includeEnd("useStrict");

(function() {
    var jsapiLoaded = false,
        jsapiInitiated = false,
        moduleWaiting = [];

    /**
     * Helper function to process all the modules that has been put into the queue before jsapi has been loaded
     */
    function loadQueue(moduleDef) {
        var queue = moduleWaiting;
        for (var i = 0; i < queue.length; ++i) {
            loadModule(queue[i]);
        }
        moduleWaiting = [];
    }

    /**
     * Helper function to load a particular module
     */
    function loadModule(moduleDef) {
        google.load(moduleDef.moduleName, moduleDef.moduleVersion, moduleDef.optionalSettings);
    }

    /**
     * Helper function to get the configuration for a particular jsapi module
     */
    function getConfiguration(value) {
        var optionalSettingsAllowed = ['callback', 'base_domain', 'language', 'nocss', 'packages'];
        var parameters = {};
        var optionalSettings = {};
        var otherParams = null;

        var params = value.split('&');
        for (var i = 0; i < params.length; i++) {
            var param = params[i].split('=');
            parameters[param[0]] = param[1];
        }

        for (var key in parameters) {
            var isOptionalSetting = false;
            for (var i in optionalSettingsAllowed) {
                if (key === optionalSettingsAllowed[i]) {
                    optionalSettings[key] = parameters[key];
                    isOptionalSetting = true;
                    break;
                }
            }
            if (!isOptionalSetting && key !== 'moduleName' && key !== 'moduleVersion') {
                if (otherParams === null) {
                    otherParams = key + '=' + parameters[key];
                } else {
                    otherParams += '&' + key + '=' + parameters[key];
                }
            }
        }

        optionalSettings.other_params = otherParams;

        var configuration = {
            moduleName: parameters['moduleName'],
            moduleVersion: parameters['moduleVersion'],
            optionalSettings: optionalSettings
        };
        return configuration;
    }

    define({
        /**
         * Called when a dependency needs to be loaded.
         */
        load: function(name, req, onLoad) {

            var configuration = getConfiguration(name);

            var callback = configuration.optionalSettings.callback;
            configuration.optionalSettings.callback = function() {

                if (callback !== null || callback !== undefined) {
                    eval(callback);
                }
                onLoad();
            };

            var moduleDef = {
                name: name,
                moduleVersion: configuration.moduleVersion,
                moduleName: configuration.moduleName,
                optionalSettings: configuration.optionalSettings
            };

            if (jsapiInitiated === false) {
                jsapiInitiated = true;
                moduleWaiting.push(moduleDef);

                req(['https://www.google.com/jsapi'], function() {
                    jsapiLoaded = true;
                    loadQueue(moduleDef);
                });
            } else {
                if (jsapiLoaded === false) {
                    moduleWaiting.push(moduleDef);
                } else {
                    loadModule(moduleDef);
                }
            }
        }

    });
}());
