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
    var dojo = null,
        dojoLoaded = false,
        dojoInitiated = false,
        dojoWaiting = [];


    /**
     * Helper function to process all the modules that has been put into the queue before dojo has been loaded
     */
    function loadQueue() {
        var queue = dojoWaiting;
        for (var i = 0; i < queue.length; ++i) {
            loadModule(queue[i]);
        }
        dojoWaiting = [];
    }

    /**
     * Helper function to load a particular module
     */
    function loadModule(moduleDef) {
        dojo.require(moduleDef.name); // to load the given package
        dojo.addOnLoad(function() { //when the package has been loaded
            moduleDef.onLoad(function() {
                return getObjectDefinition(moduleDef.name); //define the object
            });
        });
    }

    /**
     * Helper function to get the object that need to be returned when the package has been loaded
     */
    function getObjectDefinition(name) {
        var def = name.split('.');
        switch (def[0]) {
            case 'dojo':
                if (def.length === 3) {
                    return dojo[def[1]][def[2]];
                } else {
                    return dojo[def[1]];
                }
            case 'dojox':
                if (def.length === 3) {
                    return dojox[def[1]][def[2]];
                } else {
                    return dojox[def[1]];
                }
            case 'dijit':
                if (def.length === 3) {
                    return dijit[def[1]][def[2]];
                } else {
                    return dijit[def[1]];
                }
        }
    }

    define({
        /**
         * Called when a dependency needs to be loaded.
         */
        load: function(name, req, onLoad) {
            if (!req.isBrowser) {
                onLoad();
                return;
            }

            var moduleDef = {
                name: name,
                onLoad: onLoad
            };

            if (dojoInitiated === false) { //case when dojo hasn't started to be loaded yet: put the module in the queue and start loading dojo
                dojoInitiated = true;
                dojoWaiting.push(moduleDef);

                // Require the Dojo module to be loaded
                req(['Dojo'], function(d) {
                    dojo = d;
                    dojoLoaded = true;
                    loadQueue();
                });
            } else {
                if (dojoLoaded === false) { //case when dojo has started to be loaded but has not been loaded yet: put the module in the queue
                    dojoWaiting.push(moduleDef);
                } else { //case when dojo has been loaded: load the module
                    loadModule(moduleDef);
                }
            }
        }
    });
}());
