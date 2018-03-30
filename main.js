/*
 RequireJS order 1.0.0 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
define("Ace", [require.toUrl("ace-2013-02-07/ace.js")], function() {
    return ace
});
var DOJO_BASE_URL = "https://ajax.googleapis.com/ajax/libs/dojo/1.6.0/",
    djConfig = {
        afterOnLoad: !0,
        modulePaths: {
            dojo: DOJO_BASE_URL + "dojo",
            dijit: DOJO_BASE_URL + "dijit",
            dojox: DOJO_BASE_URL + "dojox"
        }
    };
define("Dojo", [DOJO_BASE_URL + "dojo/dojo.xd.js.uncompressed.js"], function() {
    return Dojo = dojo
});
(function() {
    function h(a) {
        var c = a.currentTarget || a.srcElement,
            b;
        if (a.type === "load" || e.test(c.readyState)) {
            a = c.getAttribute("data-requiremodule");
            g[a] = !0;
            for (a = 0; b = l[a]; a++)
                if (g[b.name]) b.req([b.name], b.onLoad);
                else break;
            a > 0 && l.splice(0, a);
            setTimeout(function() {
                c.parentNode.removeChild(c)
            }, 15)
        }
    }

    function c(a) {
        var c, e;
        a.setAttribute("data-orderloaded", "loaded");
        for (a = 0; e = f[a]; a++)
            if ((c = k[e]) && c.getAttribute("data-orderloaded") === "loaded") delete k[e], require.addScriptToDom(c);
            else break;
        a > 0 && f.splice(0,
            a)
    }
    var b = typeof document !== "undefined" && typeof window !== "undefined" && document.createElement("script"),
        d = b && (b.async || window.opera && Object.prototype.toString.call(window.opera) === "[object Opera]" || "MozAppearance" in document.documentElement.style),
        a = b && b.readyState === "uninitialized",
        e = /^(complete|loaded)$/,
        l = [],
        g = {},
        k = {},
        f = [],
        b = null;
    define("order", {
        version: "1.0.0",
        load: function(e, b, g, u) {
            var o = b.nameToUrl(e, null);
            require.s.skipAsync[o] = !0;
            d || u.isBuild ? b([e], g) : a ? (u = require.s.contexts._, !u.urlFetched[o] &&
                !u.loaded[e] && (u.urlFetched[o] = !0, require.resourcesReady(!1), u.scriptCount += 1, o = require.attach(o, u, e, null, null, c), k[e] = o, f.push(e)), b([e], g)) : b.specified(e) ? b([e], g) : (l.push({
                name: e,
                req: b,
                onLoad: g
            }), require.attach(o, null, e, h, "script/cache"))
        }
    })
})();
define("Jquery", ["order!http://code.jquery.com/jquery-1.10.2.min.js", "order!http://code.jquery.com/jquery-migrate-1.2.1.js"], function() {
    return $ || jQuery
});
(function() {
    var h = require.config({
        paths: {
            order: require.toUrl("").replace(".js", "order")
        },
        context: "page"
    });
    define("DynamicLoader", ["Jquery"], function() {
        function c() {
            this.m_require = h
        }
        c.prototype.loadScripts = function(c, d) {
            this.m_sources = c;
            this.m_require(c, d)
        };
        return c
    })
})();
define("JqueryUi", ["Jquery"], function(h) {
    (function(c, b) {
        function d(e, b) {
            var l, d;
            l = e.nodeName.toLowerCase();
            if ("area" === l) {
                l = e.parentNode;
                d = l.name;
                if (!e.href || !d || l.nodeName.toLowerCase() !== "map") return !1;
                l = c("img[usemap=#" + d + "]")[0];
                return !!l && a(l)
            }
            return (/input|select|textarea|button|object/.test(l) ? !e.disabled : "a" === l ? e.href || b : b) && a(e)
        }

        function a(a) {
            return c.expr.filters.visible(a) && !c(a).parents().addBack().filter(function() {
                return c.css(this, "visibility") === "hidden"
            }).length
        }
        var e = 0,
            l = /^ui-id-\d+$/;
        c.ui = c.ui || {};
        c.extend(c.ui, {
            version: "1.10.4",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        });
        c.fn.extend({
            focus: function(a) {
                return function(e, b) {
                    return typeof e === "number" ? this.each(function() {
                        var a = this;
                        setTimeout(function() {
                            c(a).focus();
                            b && b.call(a)
                        }, e)
                    }) : a.apply(this, arguments)
                }
            }(c.fn.focus),
            scrollParent: function() {
                var a;
                a = c.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                    return /(relative|absolute|fixed)/.test(c.css(this, "position")) && /(auto|scroll)/.test(c.css(this, "overflow") + c.css(this, "overflow-y") + c.css(this, "overflow-x"))
                }).eq(0) : this.parents().filter(function() {
                    return /(auto|scroll)/.test(c.css(this, "overflow") + c.css(this, "overflow-y") + c.css(this, "overflow-x"))
                }).eq(0);
                return /fixed/.test(this.css("position")) ||
                    !a.length ? c(document) : a
            },
            zIndex: function(a) {
                if (a !== b) return this.css("zIndex", a);
                if (this.length)
                    for (var a = c(this[0]), e; a.length && a[0] !== document;) {
                        e = a.css("position");
                        if (e === "absolute" || e === "relative" || e === "fixed")
                            if (e = parseInt(a.css("zIndex"), 10), !isNaN(e) && e !== 0) return e;
                        a = a.parent()
                    }
                return 0
            },
            uniqueId: function() {
                return this.each(function() {
                    if (!this.id) this.id = "ui-id-" + ++e
                })
            },
            removeUniqueId: function() {
                return this.each(function() {
                    l.test(this.id) && c(this).removeAttr("id")
                })
            }
        });
        c.extend(c.expr[":"], {
            data: c.expr.createPseudo ? c.expr.createPseudo(function(a) {
                return function(e) {
                    return !!c.data(e, a)
                }
            }) : function(a, e, b) {
                return !!c.data(a, b[3])
            },
            focusable: function(a) {
                return d(a, !isNaN(c.attr(a, "tabindex")))
            },
            tabbable: function(a) {
                var e = c.attr(a, "tabindex"),
                    b = isNaN(e);
                return (b || e >= 0) && d(a, !b)
            }
        });
        c("<a>").outerWidth(1).jquery || c.each(["Width", "Height"], function(a, e) {
            function l(a, e, b, g) {
                c.each(d, function() {
                    e -= parseFloat(c.css(a, "padding" + this)) || 0;
                    b && (e -= parseFloat(c.css(a, "border" + this + "Width")) || 0);
                    g &&
                        (e -= parseFloat(c.css(a, "margin" + this)) || 0)
                });
                return e
            }
            var d = e === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
                m = e.toLowerCase(),
                q = {
                    innerWidth: c.fn.innerWidth,
                    innerHeight: c.fn.innerHeight,
                    outerWidth: c.fn.outerWidth,
                    outerHeight: c.fn.outerHeight
                };
            c.fn["inner" + e] = function(a) {
                return a === b ? q["inner" + e].call(this) : this.each(function() {
                    c(this).css(m, l(this, a) + "px")
                })
            };
            c.fn["outer" + e] = function(a, b) {
                return typeof a !== "number" ? q["outer" + e].call(this, a) : this.each(function() {
                    c(this).css(m, l(this, a, !0, b) + "px")
                })
            }
        });
        if (!c.fn.addBack) c.fn.addBack = function(a) {
            return this.add(a == null ? this.prevObject : this.prevObject.filter(a))
        };
        if (c("<a>").data("a-b", "a").removeData("a-b").data("a-b")) c.fn.removeData = function(a) {
            return function(e) {
                return arguments.length ? a.call(this, c.camelCase(e)) : a.call(this)
            }
        }(c.fn.removeData);
        c.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
        c.support.selectstart = "onselectstart" in document.createElement("div");
        c.fn.extend({
            disableSelection: function() {
                return this.bind((c.support.selectstart ?
                    "selectstart" : "mousedown") + ".ui-disableSelection", function(a) {
                    a.preventDefault()
                })
            },
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            }
        });
        c.extend(c.ui, {
            plugin: {
                add: function(a, e, b) {
                    var l, a = c.ui[a].prototype;
                    for (l in b) a.plugins[l] = a.plugins[l] || [], a.plugins[l].push([e, b[l]])
                },
                call: function(a, e, c) {
                    var b = a.plugins[e];
                    if (b && a.element[0].parentNode && a.element[0].parentNode.nodeType !== 11)
                        for (e = 0; e < b.length; e++) a.options[b[e][0]] && b[e][1].apply(a.element, c)
                }
            },
            hasScroll: function(a, e) {
                if (c(a).css("overflow") ===
                    "hidden") return !1;
                var b = e && e === "left" ? "scrollLeft" : "scrollTop",
                    l = !1;
                if (a[b] > 0) return !0;
                a[b] = 1;
                l = a[b] > 0;
                a[b] = 0;
                return l
            }
        })
    })(h);
    (function(c, b) {
        var d = 0,
            a = Array.prototype.slice,
            e = c.cleanData;
        c.cleanData = function(a) {
            for (var b = 0, d;
                (d = a[b]) != null; b++) try {
                c(d).triggerHandler("remove")
            } catch (f) {}
            e(a)
        };
        c.widget = function(a, e, b) {
            var d, n, m, q, h = {},
                o = a.split(".")[0],
                a = a.split(".")[1];
            d = o + "-" + a;
            if (!b) b = e, e = c.Widget;
            c.expr[":"][d.toLowerCase()] = function(a) {
                return !!c.data(a, d)
            };
            c[o] = c[o] || {};
            n = c[o][a];
            m = c[o][a] = function(a,
                e) {
                if (!this._createWidget) return new m(a, e);
                arguments.length && this._createWidget(a, e)
            };
            c.extend(m, n, {
                version: b.version,
                _proto: c.extend({}, b),
                _childConstructors: []
            });
            q = new e;
            q.options = c.widget.extend({}, q.options);
            c.each(b, function(a, b) {
                h[a] = c.isFunction(b) ? function() {
                    var c = function() {
                            return e.prototype[a].apply(this, arguments)
                        },
                        l = function(b) {
                            return e.prototype[a].apply(this, b)
                        };
                    return function() {
                        var a = this._super,
                            e = this._superApply,
                            g;
                        this._super = c;
                        this._superApply = l;
                        g = b.apply(this, arguments);
                        this._super =
                            a;
                        this._superApply = e;
                        return g
                    }
                }() : b
            });
            m.prototype = c.widget.extend(q, {
                widgetEventPrefix: n ? q.widgetEventPrefix || a : a
            }, h, {
                constructor: m,
                namespace: o,
                widgetName: a,
                widgetFullName: d
            });
            n ? (c.each(n._childConstructors, function(a, e) {
                var b = e.prototype;
                c.widget(b.namespace + "." + b.widgetName, m, e._proto)
            }), delete n._childConstructors) : e._childConstructors.push(m);
            c.widget.bridge(a, m)
        };
        c.widget.extend = function(e) {
            for (var g = a.call(arguments, 1), d = 0, f = g.length, n, m; d < f; d++)
                for (n in g[d]) m = g[d][n], g[d].hasOwnProperty(n) &&
                    m !== b && (e[n] = c.isPlainObject(m) ? c.isPlainObject(e[n]) ? c.widget.extend({}, e[n], m) : c.widget.extend({}, m) : m);
            return e
        };
        c.widget.bridge = function(e, g) {
            var d = g.prototype.widgetFullName || e;
            c.fn[e] = function(f) {
                var n = typeof f === "string",
                    m = a.call(arguments, 1),
                    q = this,
                    f = !n && m.length ? c.widget.extend.apply(null, [f].concat(m)) : f;
                n ? this.each(function() {
                    var a, g = c.data(this, d);
                    if (!g) return c.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + f + "'");
                    if (!c.isFunction(g[f]) || f.charAt(0) ===
                        "_") return c.error("no such method '" + f + "' for " + e + " widget instance");
                    a = g[f].apply(g, m);
                    if (a !== g && a !== b) return q = a && a.jquery ? q.pushStack(a.get()) : a, !1
                }) : this.each(function() {
                    var a = c.data(this, d);
                    a ? a.option(f || {})._init() : c.data(this, d, new g(f, this))
                });
                return q
            }
        };
        c.Widget = function() {};
        c.Widget._childConstructors = [];
        c.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function(a, e) {
                e = c(e || this.defaultElement || this)[0];
                this.element =
                    c(e);
                this.uuid = d++;
                this.eventNamespace = "." + this.widgetName + this.uuid;
                this.options = c.widget.extend({}, this.options, this._getCreateOptions(), a);
                this.bindings = c();
                this.hoverable = c();
                this.focusable = c();
                if (e !== this) c.data(e, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(a) {
                        a.target === e && this.destroy()
                    }
                }), this.document = c(e.style ? e.ownerDocument : e.document || e), this.window = c(this.document[0].defaultView || this.document[0].parentWindow);
                this._create();
                this._trigger("create", null, this._getCreateEventData());
                this._init()
            },
            _getCreateOptions: c.noop,
            _getCreateEventData: c.noop,
            _create: c.noop,
            _init: c.noop,
            destroy: function() {
                this._destroy();
                this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(c.camelCase(this.widgetFullName));
                this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
                this.bindings.unbind(this.eventNamespace);
                this.hoverable.removeClass("ui-state-hover");
                this.focusable.removeClass("ui-state-focus")
            },
            _destroy: c.noop,
            widget: function() {
                return this.element
            },
            option: function(a, e) {
                var d = a,
                    f, n, m;
                if (arguments.length === 0) return c.widget.extend({}, this.options);
                if (typeof a === "string")
                    if (d = {}, f = a.split("."), a = f.shift(), f.length) {
                        n = d[a] = c.widget.extend({}, this.options[a]);
                        for (m = 0; m < f.length - 1; m++) n[f[m]] = n[f[m]] || {}, n = n[f[m]];
                        a = f.pop();
                        if (arguments.length === 1) return n[a] === b ? null : n[a];
                        n[a] = e
                    } else {
                        if (arguments.length === 1) return this.options[a] === b ? null : this.options[a];
                        d[a] = e
                    }
                this._setOptions(d);
                return this
            },
            _setOptions: function(a) {
                for (var e in a) this._setOption(e, a[e]);
                return this
            },
            _setOption: function(a, e) {
                this.options[a] = e;
                a === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"));
                return this
            },
            enable: function() {
                return this._setOption("disabled", !1)
            },
            disable: function() {
                return this._setOption("disabled", !0)
            },
            _on: function(a, e, b) {
                var d, n = this;
                typeof a !==
                    "boolean" && (b = e, e = a, a = !1);
                b ? (e = d = c(e), this.bindings = this.bindings.add(e)) : (b = e, e = this.element, d = this.widget());
                c.each(b, function(b, k) {
                    function h() {
                        return !a && (n.options.disabled === !0 || c(this).hasClass("ui-state-disabled")) ? void 0 : (typeof k === "string" ? n[k] : k).apply(n, arguments)
                    }
                    if (typeof k !== "string") h.guid = k.guid = k.guid || h.guid || c.guid++;
                    var o = b.match(/^(\w+)\s*(.*)$/),
                        r = o[1] + n.eventNamespace;
                    (o = o[2]) ? d.delegate(o, r, h): e.bind(r, h)
                })
            },
            _off: function(a, e) {
                e = (e || "").split(" ").join(this.eventNamespace +
                    " ") + this.eventNamespace;
                a.unbind(e).undelegate(e)
            },
            _delay: function(a, e) {
                var b = this;
                return setTimeout(function() {
                    return (typeof a === "string" ? b[a] : a).apply(b, arguments)
                }, e || 0)
            },
            _hoverable: function(a) {
                this.hoverable = this.hoverable.add(a);
                this._on(a, {
                    mouseenter: function(a) {
                        c(a.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function(a) {
                        c(a.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function(a) {
                this.focusable = this.focusable.add(a);
                this._on(a, {
                    focusin: function(a) {
                        c(a.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function(a) {
                        c(a.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function(a, e, b) {
                var d, n = this.options[a],
                    b = b || {},
                    e = c.Event(e);
                e.type = (a === this.widgetEventPrefix ? a : this.widgetEventPrefix + a).toLowerCase();
                e.target = this.element[0];
                if (a = e.originalEvent)
                    for (d in a) d in e || (e[d] = a[d]);
                this.element.trigger(e, b);
                return !(c.isFunction(n) && n.apply(this.element[0], [e].concat(b)) === !1 || e.isDefaultPrevented())
            }
        };
        c.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(a, e) {
            c.Widget.prototype["_" + a] = function(b,
                d, n) {
                typeof d === "string" && (d = {
                    effect: d
                });
                var m, q = !d ? a : d === !0 || typeof d === "number" ? e : d.effect || e,
                    d = d || {};
                typeof d === "number" && (d = {
                    duration: d
                });
                m = !c.isEmptyObject(d);
                d.complete = n;
                d.delay && b.delay(d.delay);
                if (m && c.effects && c.effects.effect[q]) b[a](d);
                else if (q !== a && b[q]) b[q](d.duration, d.easing, n);
                else b.queue(function(e) {
                    c(this)[a]();
                    n && n.call(b[0]);
                    e()
                })
            }
        })
    })(h);
    (function(c) {
        var b = !1;
        c(document).mouseup(function() {
            b = !1
        });
        c.widget("ui.mouse", {
            version: "1.10.4",
            options: {
                cancel: "input,textarea,button,select,option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var b = this;
                this.element.bind("mousedown." + this.widgetName, function(a) {
                    return b._mouseDown(a)
                }).bind("click." + this.widgetName, function(a) {
                    if (!0 === c.data(a.target, b.widgetName + ".preventClickEvent")) return c.removeData(a.target, b.widgetName + ".preventClickEvent"), a.stopImmediatePropagation(), !1
                });
                this.started = !1
            },
            _mouseDestroy: function() {
                this.element.unbind("." + this.widgetName);
                this._mouseMoveDelegate && c(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." +
                    this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(d) {
                if (!b) {
                    this._mouseStarted && this._mouseUp(d);
                    this._mouseDownEvent = d;
                    var a = this,
                        e = d.which === 1,
                        l = typeof this.options.cancel === "string" && d.target.nodeName ? c(d.target).closest(this.options.cancel).length : !1;
                    if (!e || l || !this._mouseCapture(d)) return !0;
                    this.mouseDelayMet = !this.options.delay;
                    if (!this.mouseDelayMet) this._mouseDelayTimer = setTimeout(function() {
                        a.mouseDelayMet = !0
                    }, this.options.delay);
                    if (this._mouseDistanceMet(d) && this._mouseDelayMet(d) &&
                        (this._mouseStarted = this._mouseStart(d) !== !1, !this._mouseStarted)) return d.preventDefault(), !0;
                    !0 === c.data(d.target, this.widgetName + ".preventClickEvent") && c.removeData(d.target, this.widgetName + ".preventClickEvent");
                    this._mouseMoveDelegate = function(e) {
                        return a._mouseMove(e)
                    };
                    this._mouseUpDelegate = function(e) {
                        return a._mouseUp(e)
                    };
                    c(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
                    d.preventDefault();
                    return b = !0
                }
            },
            _mouseMove: function(b) {
                if (c.ui.ie &&
                    (!document.documentMode || document.documentMode < 9) && !b.button) return this._mouseUp(b);
                if (this._mouseStarted) return this._mouseDrag(b), b.preventDefault();
                if (this._mouseDistanceMet(b) && this._mouseDelayMet(b))(this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1) ? this._mouseDrag(b) : this._mouseUp(b);
                return !this._mouseStarted
            },
            _mouseUp: function(b) {
                c(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
                if (this._mouseStarted) this._mouseStarted = !1, b.target === this._mouseDownEvent.target && c.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b);
                return !1
            },
            _mouseDistanceMet: function(b) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - b.pageX), Math.abs(this._mouseDownEvent.pageY - b.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0
            }
        })
    })(h);
    (function(c, b) {
        function d(a, e, b) {
            return [parseFloat(a[0]) *
                (o.test(a[0]) ? e / 100 : 1), parseFloat(a[1]) * (o.test(a[1]) ? b / 100 : 1)
            ]
        }

        function a(a, e) {
            return parseInt(c.css(a, e), 10) || 0
        }

        function e(a) {
            var e = a[0];
            return e.nodeType === 9 ? {
                width: a.width(),
                height: a.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : c.isWindow(e) ? {
                width: a.width(),
                height: a.height(),
                offset: {
                    top: a.scrollTop(),
                    left: a.scrollLeft()
                }
            } : e.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: e.pageY,
                    left: e.pageX
                }
            } : {
                width: a.outerWidth(),
                height: a.outerHeight(),
                offset: a.offset()
            }
        }
        c.ui = c.ui || {};
        var l, g = Math.max,
            k = Math.abs,
            f = Math.round,
            n = /left|center|right/,
            m = /top|center|bottom/,
            q = /[\+\-]\d+(\.[\d]+)?%?/,
            h = /^\w+/,
            o = /%$/,
            r = c.fn.position;
        c.position = {
            scrollbarWidth: function() {
                if (l !== b) return l;
                var a, e, d = c("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>");
                e = d.children()[0];
                c("body").append(d);
                a = e.offsetWidth;
                d.css("overflow", "scroll");
                e = e.offsetWidth;
                if (a === e) e = d[0].clientWidth;
                d.remove();
                return l = a - e
            },
            getScrollInfo: function(a) {
                var e = a.isWindow ||
                    a.isDocument ? "" : a.element.css("overflow-x"),
                    b = a.isWindow || a.isDocument ? "" : a.element.css("overflow-y"),
                    e = e === "scroll" || e === "auto" && a.width < a.element[0].scrollWidth;
                return {
                    width: b === "scroll" || b === "auto" && a.height < a.element[0].scrollHeight ? c.position.scrollbarWidth() : 0,
                    height: e ? c.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(a) {
                var a = c(a || window),
                    e = c.isWindow(a[0]);
                return {
                    element: a,
                    isWindow: e,
                    isDocument: !!a[0] && a[0].nodeType === 9,
                    offset: a.offset() || {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: a.scrollLeft(),
                    scrollTop: a.scrollTop(),
                    width: e ? a.width() : a.outerWidth(),
                    height: e ? a.height() : a.outerHeight()
                }
            }
        };
        c.fn.position = function(b) {
            if (!b || !b.of) return r.apply(this, arguments);
            var b = c.extend({}, b),
                l, o, s, D, y, x, E = c(b.of),
                I = c.position.getWithinInfo(b.within),
                z = c.position.getScrollInfo(I),
                F = (b.collision || "flip").split(" "),
                B = {};
            x = e(E);
            if (E[0].preventDefault) b.at = "left top";
            o = x.width;
            s = x.height;
            D = x.offset;
            y = c.extend({}, D);
            c.each(["my", "at"], function() {
                var a = (b[this] || "").split(" "),
                    e, c;
                a.length === 1 && (a = n.test(a[0]) ? a.concat(["center"]) :
                    m.test(a[0]) ? ["center"].concat(a) : ["center", "center"]);
                a[0] = n.test(a[0]) ? a[0] : "center";
                a[1] = m.test(a[1]) ? a[1] : "center";
                e = q.exec(a[0]);
                c = q.exec(a[1]);
                B[this] = [e ? e[0] : 0, c ? c[0] : 0];
                b[this] = [h.exec(a[0])[0], h.exec(a[1])[0]]
            });
            F.length === 1 && (F[1] = F[0]);
            b.at[0] === "right" ? y.left += o : b.at[0] === "center" && (y.left += o / 2);
            b.at[1] === "bottom" ? y.top += s : b.at[1] === "center" && (y.top += s / 2);
            l = d(B.at, o, s);
            y.left += l[0];
            y.top += l[1];
            return this.each(function() {
                var e, n, m = c(this),
                    q = m.outerWidth(),
                    x = m.outerHeight(),
                    h = a(this, "marginLeft"),
                    u = a(this, "marginTop"),
                    r = q + h + a(this, "marginRight") + z.width,
                    K = x + u + a(this, "marginBottom") + z.height,
                    O = c.extend({}, y),
                    U = d(B.my, m.outerWidth(), m.outerHeight());
                b.my[0] === "right" ? O.left -= q : b.my[0] === "center" && (O.left -= q / 2);
                b.my[1] === "bottom" ? O.top -= x : b.my[1] === "center" && (O.top -= x / 2);
                O.left += U[0];
                O.top += U[1];
                if (!c.support.offsetFractions) O.left = f(O.left), O.top = f(O.top);
                e = {
                    marginLeft: h,
                    marginTop: u
                };
                c.each(["left", "top"], function(a, d) {
                    if (c.ui.position[F[a]]) c.ui.position[F[a]][d](O, {
                        targetWidth: o,
                        targetHeight: s,
                        elemWidth: q,
                        elemHeight: x,
                        collisionPosition: e,
                        collisionWidth: r,
                        collisionHeight: K,
                        offset: [l[0] + U[0], l[1] + U[1]],
                        my: b.my,
                        at: b.at,
                        within: I,
                        elem: m
                    })
                });
                b.using && (n = function(a) {
                    var e = D.left - O.left,
                        c = e + o - q,
                        d = D.top - O.top,
                        l = d + s - x,
                        f = {
                            target: {
                                element: E,
                                left: D.left,
                                top: D.top,
                                width: o,
                                height: s
                            },
                            element: {
                                element: m,
                                left: O.left,
                                top: O.top,
                                width: q,
                                height: x
                            },
                            horizontal: c < 0 ? "left" : e > 0 ? "right" : "center",
                            vertical: l < 0 ? "top" : d > 0 ? "bottom" : "middle"
                        };
                    if (o < q && k(e + c) < o) f.horizontal = "center";
                    if (s < x && k(d + l) < s) f.vertical = "middle";
                    f.important =
                        g(k(e), k(c)) > g(k(d), k(l)) ? "horizontal" : "vertical";
                    b.using.call(this, a, f)
                });
                m.offset(c.extend(O, {
                    using: n
                }))
            })
        };
        c.ui.position = {
            fit: {
                left: function(a, e) {
                    var b = e.within,
                        c = b.isWindow ? b.scrollLeft : b.offset.left,
                        d = b.width,
                        l = a.left - e.collisionPosition.marginLeft,
                        b = c - l,
                        f = l + e.collisionWidth - d - c;
                    e.collisionWidth > d ? b > 0 && f <= 0 ? (c = a.left + b + e.collisionWidth - d - c, a.left += b - c) : a.left = f > 0 && b <= 0 ? c : b > f ? c + d - e.collisionWidth : c : b > 0 ? a.left += b : f > 0 ? a.left -= f : a.left = g(a.left - l, a.left)
                },
                top: function(a, e) {
                    var b = e.within,
                        c = b.isWindow ?
                        b.scrollTop : b.offset.top,
                        d = e.within.height,
                        l = a.top - e.collisionPosition.marginTop,
                        b = c - l,
                        f = l + e.collisionHeight - d - c;
                    e.collisionHeight > d ? b > 0 && f <= 0 ? (c = a.top + b + e.collisionHeight - d - c, a.top += b - c) : a.top = f > 0 && b <= 0 ? c : b > f ? c + d - e.collisionHeight : c : b > 0 ? a.top += b : f > 0 ? a.top -= f : a.top = g(a.top - l, a.top)
                }
            },
            flip: {
                left: function(a, e) {
                    var b = e.within,
                        c = b.offset.left + b.scrollLeft,
                        d = b.width,
                        l = b.isWindow ? b.scrollLeft : b.offset.left,
                        g = a.left - e.collisionPosition.marginLeft,
                        b = g - l,
                        f = g + e.collisionWidth - d - l,
                        g = e.my[0] === "left" ? -e.elemWidth :
                        e.my[0] === "right" ? e.elemWidth : 0,
                        n = e.at[0] === "left" ? e.targetWidth : e.at[0] === "right" ? -e.targetWidth : 0,
                        m = -2 * e.offset[0];
                    if (b < 0) {
                        if (c = a.left + g + n + m + e.collisionWidth - d - c, c < 0 || c < k(b)) a.left += g + n + m
                    } else if (f > 0 && (c = a.left - e.collisionPosition.marginLeft + g + n + m - l, c > 0 || k(c) < f)) a.left += g + n + m
                },
                top: function(a, e) {
                    var b = e.within,
                        c = b.offset.top + b.scrollTop,
                        d = b.height,
                        l = b.isWindow ? b.scrollTop : b.offset.top,
                        g = a.top - e.collisionPosition.marginTop,
                        b = g - l,
                        f = g + e.collisionHeight - d - l,
                        g = e.my[1] === "top" ? -e.elemHeight : e.my[1] ===
                        "bottom" ? e.elemHeight : 0,
                        n = e.at[1] === "top" ? e.targetHeight : e.at[1] === "bottom" ? -e.targetHeight : 0,
                        m = -2 * e.offset[1];
                    if (b < 0) {
                        if (c = a.top + g + n + m + e.collisionHeight - d - c, a.top + g + n + m > b && (c < 0 || c < k(b))) a.top += g + n + m
                    } else if (f > 0 && (c = a.top - e.collisionPosition.marginTop + g + n + m - l, a.top + g + n + m > f && (c > 0 || k(c) < f))) a.top += g + n + m
                }
            },
            flipfit: {
                left: function() {
                    c.ui.position.flip.left.apply(this, arguments);
                    c.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    c.ui.position.flip.top.apply(this, arguments);
                    c.ui.position.fit.top.apply(this,
                        arguments)
                }
            }
        };
        (function() {
            var a, e, b, d, l = document.getElementsByTagName("body")[0];
            b = document.createElement("div");
            a = document.createElement(l ? "div" : "body");
            e = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            };
            l && c.extend(e, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (d in e) a.style[d] = e[d];
            a.appendChild(b);
            e = l || document.documentElement;
            e.insertBefore(a, e.firstChild);
            b.style.cssText = "position: absolute; left: 10.7432222px;";
            b = c(b).offset().left;
            c.support.offsetFractions =
                b > 10 && b < 11;
            a.innerHTML = "";
            e.removeChild(a)
        })()
    })(h);
    (function(c) {
        c.widget("ui.draggable", c.ui.mouse, {
            version: "1.10.4",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null
            },
            _create: function() {
                if (this.options.helper === "original" && !/^(?:r|a|f)/.test(this.element.css("position"))) this.element[0].style.position = "relative";
                this.options.addClasses && this.element.addClass("ui-draggable");
                this.options.disabled && this.element.addClass("ui-draggable-disabled");
                this._mouseInit()
            },
            _destroy: function() {
                this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
                this._mouseDestroy()
            },
            _mouseCapture: function(b) {
                var d = this.options;
                if (this.helper || d.disabled ||
                    c(b.target).closest(".ui-resizable-handle").length > 0) return !1;
                this.handle = this._getHandle(b);
                if (!this.handle) return !1;
                c(d.iframeFix === !0 ? "iframe" : d.iframeFix).each(function() {
                    c("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                        width: this.offsetWidth + "px",
                        height: this.offsetHeight + "px",
                        position: "absolute",
                        opacity: "0.001",
                        zIndex: 1E3
                    }).css(c(this).offset()).appendTo("body")
                });
                return !0
            },
            _mouseStart: function(b) {
                var d = this.options;
                this.helper = this._createHelper(b);
                this.helper.addClass("ui-draggable-dragging");
                this._cacheHelperProportions();
                if (c.ui.ddmanager) c.ui.ddmanager.current = this;
                this._cacheMargins();
                this.cssPosition = this.helper.css("position");
                this.scrollParent = this.helper.scrollParent();
                this.offsetParent = this.helper.offsetParent();
                this.offsetParentCssPosition = this.offsetParent.css("position");
                this.offset = this.positionAbs = this.element.offset();
                this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                };
                this.offset.scroll = !1;
                c.extend(this.offset, {
                    click: {
                        left: b.pageX -
                            this.offset.left,
                        top: b.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                });
                this.originalPosition = this.position = this._generatePosition(b);
                this.originalPageX = b.pageX;
                this.originalPageY = b.pageY;
                d.cursorAt && this._adjustOffsetFromHelper(d.cursorAt);
                this._setContainment();
                if (this._trigger("start", b) === !1) return this._clear(), !1;
                this._cacheHelperProportions();
                c.ui.ddmanager && !d.dropBehaviour && c.ui.ddmanager.prepareOffsets(this, b);
                this._mouseDrag(b, !0);
                c.ui.ddmanager &&
                    c.ui.ddmanager.dragStart(this, b);
                return !0
            },
            _mouseDrag: function(b, d) {
                if (this.offsetParentCssPosition === "fixed") this.offset.parent = this._getParentOffset();
                this.position = this._generatePosition(b);
                this.positionAbs = this._convertPositionTo("absolute");
                if (!d) {
                    var a = this._uiHash();
                    if (this._trigger("drag", b, a) === !1) return this._mouseUp({}), !1;
                    this.position = a.position
                }
                if (!this.options.axis || this.options.axis !== "y") this.helper[0].style.left = this.position.left + "px";
                if (!this.options.axis || this.options.axis !==
                    "x") this.helper[0].style.top = this.position.top + "px";
                c.ui.ddmanager && c.ui.ddmanager.drag(this, b);
                return !1
            },
            _mouseStop: function(b) {
                var d = this,
                    a = !1;
                c.ui.ddmanager && !this.options.dropBehaviour && (a = c.ui.ddmanager.drop(this, b));
                if (this.dropped) a = this.dropped, this.dropped = !1;
                if (this.options.helper === "original" && !c.contains(this.element[0].ownerDocument, this.element[0])) return !1;
                this.options.revert === "invalid" && !a || this.options.revert === "valid" && a || this.options.revert === !0 || c.isFunction(this.options.revert) &&
                    this.options.revert.call(this.element, a) ? c(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                        d._trigger("stop", b) !== !1 && d._clear()
                    }) : this._trigger("stop", b) !== !1 && this._clear();
                return !1
            },
            _mouseUp: function(b) {
                c("div.ui-draggable-iframeFix").each(function() {
                    this.parentNode.removeChild(this)
                });
                c.ui.ddmanager && c.ui.ddmanager.dragStop(this, b);
                return c.ui.mouse.prototype._mouseUp.call(this, b)
            },
            cancel: function() {
                this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) :
                    this._clear();
                return this
            },
            _getHandle: function(b) {
                return this.options.handle ? !!c(b.target).closest(this.element.find(this.options.handle)).length : !0
            },
            _createHelper: function(b) {
                var d = this.options,
                    b = c.isFunction(d.helper) ? c(d.helper.apply(this.element[0], [b])) : d.helper === "clone" ? this.element.clone().removeAttr("id") : this.element;
                b.parents("body").length || b.appendTo(d.appendTo === "parent" ? this.element[0].parentNode : d.appendTo);
                b[0] !== this.element[0] && !/(fixed|absolute)/.test(b.css("position")) && b.css("position",
                    "absolute");
                return b
            },
            _adjustOffsetFromHelper: function(b) {
                typeof b === "string" && (b = b.split(" "));
                c.isArray(b) && (b = {
                    left: +b[0],
                    top: +b[1] || 0
                });
                if ("left" in b) this.offset.click.left = b.left + this.margins.left;
                if ("right" in b) this.offset.click.left = this.helperProportions.width - b.right + this.margins.left;
                if ("top" in b) this.offset.click.top = b.top + this.margins.top;
                if ("bottom" in b) this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top
            },
            _getParentOffset: function() {
                var b = this.offsetParent.offset();
                this.cssPosition === "absolute" && this.scrollParent[0] !== document && c.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop());
                if (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && c.ui.ie) b = {
                    top: 0,
                    left: 0
                };
                return {
                    top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if (this.cssPosition ===
                    "relative") {
                    var b = this.element.position();
                    return {
                        top: b.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: b.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                } else return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var b, d, a;
                b = this.options;
                if (b.containment)
                    if (b.containment === "window") this.containment = [c(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, c(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, c(window).scrollLeft() + c(window).width() - this.helperProportions.width - this.margins.left, c(window).scrollTop() + (c(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height -
                        this.margins.top
                    ];
                    else if (b.containment === "document") this.containment = [0, 0, c(document).width() - this.helperProportions.width - this.margins.left, (c(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                else if (b.containment.constructor === Array) this.containment = b.containment;
                else {
                    if (b.containment === "parent") b.containment = this.helper[0].parentNode;
                    d = c(b.containment);
                    if (a = d[0]) b = d.css("overflow") !== "hidden", this.containment = [(parseInt(d.css("borderLeftWidth"),
                            10) || 0) + (parseInt(d.css("paddingLeft"), 10) || 0), (parseInt(d.css("borderTopWidth"), 10) || 0) + (parseInt(d.css("paddingTop"), 10) || 0), (b ? Math.max(a.scrollWidth, a.offsetWidth) : a.offsetWidth) - (parseInt(d.css("borderRightWidth"), 10) || 0) - (parseInt(d.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (b ? Math.max(a.scrollHeight, a.offsetHeight) : a.offsetHeight) - (parseInt(d.css("borderBottomWidth"), 10) || 0) - (parseInt(d.css("paddingBottom"), 10) || 0) - this.helperProportions.height -
                        this.margins.top - this.margins.bottom
                    ], this.relative_container = d
                } else this.containment = null
            },
            _convertPositionTo: function(b, d) {
                if (!d) d = this.position;
                var a = b === "absolute" ? 1 : -1,
                    e = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && c.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent;
                if (!this.offset.scroll) this.offset.scroll = {
                    top: e.scrollTop(),
                    left: e.scrollLeft()
                };
                return {
                    top: d.top + this.offset.relative.top * a + this.offset.parent.top * a - (this.cssPosition ===
                        "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * a,
                    left: d.left + this.offset.relative.left * a + this.offset.parent.left * a - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * a
                }
            },
            _generatePosition: function(b) {
                var d, a, e, l = this.options,
                    g = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && c.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent;
                e = b.pageX;
                a = b.pageY;
                if (!this.offset.scroll) this.offset.scroll = {
                    top: g.scrollTop(),
                    left: g.scrollLeft()
                };
                if (this.originalPosition) {
                    if (this.containment) this.relative_container ? (d = this.relative_container.offset(), d = [this.containment[0] + d.left, this.containment[1] + d.top, this.containment[2] + d.left, this.containment[3] + d.top]) : d = this.containment, b.pageX - this.offset.click.left < d[0] && (e = d[0] + this.offset.click.left), b.pageY - this.offset.click.top < d[1] && (a = d[1] + this.offset.click.top), b.pageX - this.offset.click.left > d[2] && (e = d[2] + this.offset.click.left), b.pageY - this.offset.click.top > d[3] && (a =
                        d[3] + this.offset.click.top);
                    l.grid && (a = l.grid[1] ? this.originalPageY + Math.round((a - this.originalPageY) / l.grid[1]) * l.grid[1] : this.originalPageY, a = d ? a - this.offset.click.top >= d[1] || a - this.offset.click.top > d[3] ? a : a - this.offset.click.top >= d[1] ? a - l.grid[1] : a + l.grid[1] : a, e = l.grid[0] ? this.originalPageX + Math.round((e - this.originalPageX) / l.grid[0]) * l.grid[0] : this.originalPageX, e = d ? e - this.offset.click.left >= d[0] || e - this.offset.click.left > d[2] ? e : e - this.offset.click.left >= d[0] ? e - l.grid[0] : e + l.grid[0] : e)
                }
                return {
                    top: a -
                        this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                    left: e - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
                }
            },
            _clear: function() {
                this.helper.removeClass("ui-draggable-dragging");
                this.helper[0] !== this.element[0] && !this.cancelHelperRemoval && this.helper.remove();
                this.helper = null;
                this.cancelHelperRemoval = !1
            },
            _trigger: function(b, d, a) {
                a = a || this._uiHash();
                c.ui.plugin.call(this, b, [d, a]);
                if (b === "drag") this.positionAbs = this._convertPositionTo("absolute");
                return c.Widget.prototype._trigger.call(this, b, d, a)
            },
            plugins: {},
            _uiHash: function() {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        });
        c.ui.plugin.add("draggable", "connectToSortable", {
            start: function(b, d) {
                var a = c(this).data("ui-draggable"),
                    e = a.options,
                    l = c.extend({}, d, {
                        item: a.element
                    });
                a.sortables = [];
                c(e.connectToSortable).each(function() {
                    var e = c.data(this, "ui-sortable");
                    e && !e.options.disabled && (a.sortables.push({
                        instance: e,
                        shouldRevert: e.options.revert
                    }), e.refreshPositions(), e._trigger("activate", b, l))
                })
            },
            stop: function(b, d) {
                var a = c(this).data("ui-draggable"),
                    e = c.extend({}, d, {
                        item: a.element
                    });
                c.each(a.sortables, function() {
                    if (this.instance.isOver) {
                        this.instance.isOver = 0;
                        a.cancelHelperRemoval = !0;
                        this.instance.cancelHelperRemoval = !1;
                        if (this.shouldRevert) this.instance.options.revert = this.shouldRevert;
                        this.instance._mouseStop(b);
                        this.instance.options.helper = this.instance.options._helper;
                        a.options.helper === "original" && this.instance.currentItem.css({
                            top: "auto",
                            left: "auto"
                        })
                    } else this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", b, e)
                })
            },
            drag: function(b, d) {
                var a = c(this).data("ui-draggable"),
                    e = this;
                c.each(a.sortables, function() {
                    var l = !1,
                        g = this;
                    this.instance.positionAbs = a.positionAbs;
                    this.instance.helperProportions = a.helperProportions;
                    this.instance.offset.click = a.offset.click;
                    this.instance._intersectsWith(this.instance.containerCache) && (l = !0, c.each(a.sortables, function() {
                        this.instance.positionAbs = a.positionAbs;
                        this.instance.helperProportions = a.helperProportions;
                        this.instance.offset.click = a.offset.click;
                        this !== g && this.instance._intersectsWith(this.instance.containerCache) && c.contains(g.instance.element[0], this.instance.element[0]) && (l = !1);
                        return l
                    }));
                    if (l) {
                        if (!this.instance.isOver) this.instance.isOver = 1, this.instance.currentItem = c(e).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                                return d.helper[0]
                            }, b.target = this.instance.currentItem[0], this.instance._mouseCapture(b, !0), this.instance._mouseStart(b, !0, !0), this.instance.offset.click.top = a.offset.click.top, this.instance.offset.click.left = a.offset.click.left, this.instance.offset.parent.left -= a.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= a.offset.parent.top - this.instance.offset.parent.top,
                            a._trigger("toSortable", b), a.dropped = this.instance.element, a.currentItem = a.element, this.instance.fromOutside = a;
                        this.instance.currentItem && this.instance._mouseDrag(b)
                    } else if (this.instance.isOver) this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", b, this.instance._uiHash(this.instance)), this.instance._mouseStop(b, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder &&
                        this.instance.placeholder.remove(), a._trigger("fromSortable", b), a.dropped = !1
                })
            }
        });
        c.ui.plugin.add("draggable", "cursor", {
            start: function() {
                var b = c("body"),
                    d = c(this).data("ui-draggable").options;
                if (b.css("cursor")) d._cursor = b.css("cursor");
                b.css("cursor", d.cursor)
            },
            stop: function() {
                var b = c(this).data("ui-draggable").options;
                b._cursor && c("body").css("cursor", b._cursor)
            }
        });
        c.ui.plugin.add("draggable", "opacity", {
            start: function(b, d) {
                var a = c(d.helper),
                    e = c(this).data("ui-draggable").options;
                if (a.css("opacity")) e._opacity =
                    a.css("opacity");
                a.css("opacity", e.opacity)
            },
            stop: function(b, d) {
                var a = c(this).data("ui-draggable").options;
                a._opacity && c(d.helper).css("opacity", a._opacity)
            }
        });
        c.ui.plugin.add("draggable", "scroll", {
            start: function() {
                var b = c(this).data("ui-draggable");
                if (b.scrollParent[0] !== document && b.scrollParent[0].tagName !== "HTML") b.overflowOffset = b.scrollParent.offset()
            },
            drag: function(b) {
                var d = c(this).data("ui-draggable"),
                    a = d.options,
                    e = !1;
                if (d.scrollParent[0] !== document && d.scrollParent[0].tagName !== "HTML") {
                    if (!a.axis ||
                        a.axis !== "x")
                        if (d.overflowOffset.top + d.scrollParent[0].offsetHeight - b.pageY < a.scrollSensitivity) d.scrollParent[0].scrollTop = e = d.scrollParent[0].scrollTop + a.scrollSpeed;
                        else if (b.pageY - d.overflowOffset.top < a.scrollSensitivity) d.scrollParent[0].scrollTop = e = d.scrollParent[0].scrollTop - a.scrollSpeed;
                    if (!a.axis || a.axis !== "y")
                        if (d.overflowOffset.left + d.scrollParent[0].offsetWidth - b.pageX < a.scrollSensitivity) d.scrollParent[0].scrollLeft = e = d.scrollParent[0].scrollLeft + a.scrollSpeed;
                        else if (b.pageX - d.overflowOffset.left <
                        a.scrollSensitivity) d.scrollParent[0].scrollLeft = e = d.scrollParent[0].scrollLeft - a.scrollSpeed
                } else {
                    if (!a.axis || a.axis !== "x") b.pageY - c(document).scrollTop() < a.scrollSensitivity ? e = c(document).scrollTop(c(document).scrollTop() - a.scrollSpeed) : c(window).height() - (b.pageY - c(document).scrollTop()) < a.scrollSensitivity && (e = c(document).scrollTop(c(document).scrollTop() + a.scrollSpeed));
                    if (!a.axis || a.axis !== "y") b.pageX - c(document).scrollLeft() < a.scrollSensitivity ? e = c(document).scrollLeft(c(document).scrollLeft() -
                        a.scrollSpeed) : c(window).width() - (b.pageX - c(document).scrollLeft()) < a.scrollSensitivity && (e = c(document).scrollLeft(c(document).scrollLeft() + a.scrollSpeed))
                }
                e !== !1 && c.ui.ddmanager && !a.dropBehaviour && c.ui.ddmanager.prepareOffsets(d, b)
            }
        });
        c.ui.plugin.add("draggable", "snap", {
            start: function() {
                var b = c(this).data("ui-draggable"),
                    d = b.options;
                b.snapElements = [];
                c(d.snap.constructor !== String ? d.snap.items || ":data(ui-draggable)" : d.snap).each(function() {
                    var a = c(this),
                        e = a.offset();
                    this !== b.element[0] && b.snapElements.push({
                        item: this,
                        width: a.outerWidth(),
                        height: a.outerHeight(),
                        top: e.top,
                        left: e.left
                    })
                })
            },
            drag: function(b, d) {
                var a, e, l, g, k, f, n, m, q, h, o = c(this).data("ui-draggable"),
                    r = o.options,
                    v = r.snapTolerance,
                    w = d.offset.left,
                    A = w + o.helperProportions.width,
                    s = d.offset.top,
                    D = s + o.helperProportions.height;
                for (q = o.snapElements.length - 1; q >= 0; q--)
                    if (k = o.snapElements[q].left, f = k + o.snapElements[q].width, n = o.snapElements[q].top, m = n + o.snapElements[q].height, A < k - v || w > f + v || D < n - v || s > m + v || !c.contains(o.snapElements[q].item.ownerDocument, o.snapElements[q].item)) o.snapElements[q].snapping &&
                        o.options.snap.release && o.options.snap.release.call(o.element, b, c.extend(o._uiHash(), {
                            snapItem: o.snapElements[q].item
                        })), o.snapElements[q].snapping = !1;
                    else {
                        if (r.snapMode !== "inner") {
                            a = Math.abs(n - D) <= v;
                            e = Math.abs(m - s) <= v;
                            l = Math.abs(k - A) <= v;
                            g = Math.abs(f - w) <= v;
                            if (a) d.position.top = o._convertPositionTo("relative", {
                                top: n - o.helperProportions.height,
                                left: 0
                            }).top - o.margins.top;
                            if (e) d.position.top = o._convertPositionTo("relative", {
                                top: m,
                                left: 0
                            }).top - o.margins.top;
                            if (l) d.position.left = o._convertPositionTo("relative", {
                                top: 0,
                                left: k - o.helperProportions.width
                            }).left - o.margins.left;
                            if (g) d.position.left = o._convertPositionTo("relative", {
                                top: 0,
                                left: f
                            }).left - o.margins.left
                        }
                        h = a || e || l || g;
                        if (r.snapMode !== "outer") {
                            a = Math.abs(n - s) <= v;
                            e = Math.abs(m - D) <= v;
                            l = Math.abs(k - w) <= v;
                            g = Math.abs(f - A) <= v;
                            if (a) d.position.top = o._convertPositionTo("relative", {
                                top: n,
                                left: 0
                            }).top - o.margins.top;
                            if (e) d.position.top = o._convertPositionTo("relative", {
                                top: m - o.helperProportions.height,
                                left: 0
                            }).top - o.margins.top;
                            if (l) d.position.left = o._convertPositionTo("relative", {
                                top: 0,
                                left: k
                            }).left - o.margins.left;
                            if (g) d.position.left = o._convertPositionTo("relative", {
                                top: 0,
                                left: f - o.helperProportions.width
                            }).left - o.margins.left
                        }!o.snapElements[q].snapping && (a || e || l || g || h) && o.options.snap.snap && o.options.snap.snap.call(o.element, b, c.extend(o._uiHash(), {
                            snapItem: o.snapElements[q].item
                        }));
                        o.snapElements[q].snapping = a || e || l || g || h
                    }
            }
        });
        c.ui.plugin.add("draggable", "stack", {
            start: function() {
                var b, d = this.data("ui-draggable").options,
                    d = c.makeArray(c(d.stack)).sort(function(a, e) {
                        return (parseInt(c(a).css("zIndex"),
                            10) || 0) - (parseInt(c(e).css("zIndex"), 10) || 0)
                    });
                d.length && (b = parseInt(c(d[0]).css("zIndex"), 10) || 0, c(d).each(function(a) {
                    c(this).css("zIndex", b + a)
                }), this.css("zIndex", b + d.length))
            }
        });
        c.ui.plugin.add("draggable", "zIndex", {
            start: function(b, d) {
                var a = c(d.helper),
                    e = c(this).data("ui-draggable").options;
                if (a.css("zIndex")) e._zIndex = a.css("zIndex");
                a.css("zIndex", e.zIndex)
            },
            stop: function(b, d) {
                var a = c(this).data("ui-draggable").options;
                a._zIndex && c(d.helper).css("zIndex", a._zIndex)
            }
        })
    })(h);
    (function(c) {
        function b(a) {
            return parseInt(a,
                10) || 0
        }

        function d(a) {
            return !isNaN(parseInt(a, 10))
        }
        c.widget("ui.resizable", c.ui.mouse, {
            version: "1.10.4",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: "e,s,se",
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 90,
                resize: null,
                start: null,
                stop: null
            },
            _create: function() {
                var a, e, b, d, k, f = this,
                    n = this.options;
                this.element.addClass("ui-resizable");
                c.extend(this, {
                    _aspectRatio: !!n.aspectRatio,
                    aspectRatio: n.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: n.helper || n.ghost || n.animate ? n.helper || "ui-resizable-helper" : null
                });
                if (this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)) this.element.wrap(c("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })), this.element =
                    this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                        marginLeft: this.originalElement.css("marginLeft"),
                        marginTop: this.originalElement.css("marginTop"),
                        marginRight: this.originalElement.css("marginRight"),
                        marginBottom: this.originalElement.css("marginBottom")
                    }), this.originalElement.css({
                        marginLeft: 0,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0
                    }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize",
                        "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                        position: "static",
                        zoom: 1,
                        display: "block"
                    })), this.originalElement.css({
                        margin: this.originalElement.css("margin")
                    }), this._proportionallyResize();
                this.handles = n.handles || (!c(".ui-resizable-handle", this.element).length ? "e,s,se" : {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                });
                if (this.handles.constructor === String) {
                    if (this.handles ===
                        "all") this.handles = "n,e,s,w,se,sw,ne,nw";
                    a = this.handles.split(",");
                    this.handles = {};
                    for (e = 0; e < a.length; e++) b = c.trim(a[e]), k = "ui-resizable-" + b, d = c("<div class='ui-resizable-handle " + k + "'></div>"), d.css({
                        zIndex: n.zIndex
                    }), "se" === b && d.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[b] = ".ui-resizable-" + b, this.element.append(d)
                }
                this._renderAxis = function(a) {
                    var e, b, d, a = a || this.element;
                    for (e in this.handles) this.handles[e].constructor === String && (this.handles[e] = c(this.handles[e], this.element).show()),
                        this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (b = c(this.handles[e], this.element), d = /sw|ne|nw|se|n|s/.test(e) ? b.outerHeight() : b.outerWidth(), b = ["padding", /ne|nw|n/.test(e) ? "Top" : /se|sw|s/.test(e) ? "Bottom" : /^e$/.test(e) ? "Right" : "Left"].join(""), a.css(b, d), this._proportionallyResize()), c(this.handles[e])
                };
                this._renderAxis(this.element);
                this._handles = c(".ui-resizable-handle", this.element).disableSelection();
                this._handles.mouseover(function() {
                    if (!f.resizing) this.className &&
                        (d = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), f.axis = d && d[1] ? d[1] : "se"
                });
                n.autoHide && (this._handles.hide(), c(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                    n.disabled || (c(this).removeClass("ui-resizable-autohide"), f._handles.show())
                }).mouseleave(function() {
                    !n.disabled && !f.resizing && (c(this).addClass("ui-resizable-autohide"), f._handles.hide())
                }));
                this._mouseInit()
            },
            _destroy: function() {
                this._mouseDestroy();
                var a, e = function(a) {
                    c(a).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                };
                if (this.elementIsWrapper) e(this.element), a = this.element, this.originalElement.css({
                    position: a.css("position"),
                    width: a.outerWidth(),
                    height: a.outerHeight(),
                    top: a.css("top"),
                    left: a.css("left")
                }).insertAfter(a), a.remove();
                this.originalElement.css("resize", this.originalResizeStyle);
                e(this.originalElement);
                return this
            },
            _mouseCapture: function(a) {
                var e, b, d = !1;
                for (e in this.handles)
                    if (b = c(this.handles[e])[0], b === a.target || c.contains(b, a.target)) d = !0;
                return !this.options.disabled && d
            },
            _mouseStart: function(a) {
                var e,
                    d, g;
                g = this.options;
                e = this.element.position();
                var k = this.element;
                this.resizing = !0;
                /absolute/.test(k.css("position")) ? k.css({
                    position: "absolute",
                    top: k.css("top"),
                    left: k.css("left")
                }) : k.is(".ui-draggable") && k.css({
                    position: "absolute",
                    top: e.top,
                    left: e.left
                });
                this._renderProxy();
                e = b(this.helper.css("left"));
                d = b(this.helper.css("top"));
                g.containment && (e += c(g.containment).scrollLeft() || 0, d += c(g.containment).scrollTop() || 0);
                this.offset = this.helper.offset();
                this.position = {
                    left: e,
                    top: d
                };
                this.size = this._helper ? {
                    width: this.helper.width(),
                    height: this.helper.height()
                } : {
                    width: k.width(),
                    height: k.height()
                };
                this.originalSize = this._helper ? {
                    width: k.outerWidth(),
                    height: k.outerHeight()
                } : {
                    width: k.width(),
                    height: k.height()
                };
                this.originalPosition = {
                    left: e,
                    top: d
                };
                this.sizeDiff = {
                    width: k.outerWidth() - k.width(),
                    height: k.outerHeight() - k.height()
                };
                this.originalMousePosition = {
                    left: a.pageX,
                    top: a.pageY
                };
                this.aspectRatio = typeof g.aspectRatio === "number" ? g.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
                g = c(".ui-resizable-" +
                    this.axis).css("cursor");
                c("body").css("cursor", g === "auto" ? this.axis + "-resize" : g);
                k.addClass("ui-resizable-resizing");
                this._propagate("start", a);
                return !0
            },
            _mouseDrag: function(a) {
                var e, b = this.helper,
                    d = {};
                e = this.originalMousePosition;
                var k = this.position.top,
                    f = this.position.left,
                    n = this.size.width,
                    m = this.size.height,
                    q = this._change[this.axis];
                if (!q) return !1;
                e = q.apply(this, [a, a.pageX - e.left || 0, a.pageY - e.top || 0]);
                this._updateVirtualBoundaries(a.shiftKey);
                if (this._aspectRatio || a.shiftKey) e = this._updateRatio(e,
                    a);
                e = this._respectSize(e, a);
                this._updateCache(e);
                this._propagate("resize", a);
                if (this.position.top !== k) d.top = this.position.top + "px";
                if (this.position.left !== f) d.left = this.position.left + "px";
                if (this.size.width !== n) d.width = this.size.width + "px";
                if (this.size.height !== m) d.height = this.size.height + "px";
                b.css(d);
                !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize();
                c.isEmptyObject(d) || this._trigger("resize", a, this.ui());
                return !1
            },
            _mouseStop: function(a) {
                var f;
                this.resizing = !1;
                var e, b, d, k = this.options;
                if (this._helper) e = this._proportionallyResizeElements, f = (b = e.length && /textarea/i.test(e[0].nodeName)) && c.ui.hasScroll(e[0], "left") ? 0 : this.sizeDiff.height, e = f, b = b ? 0 : this.sizeDiff.width, b = {
                    width: this.helper.width() - b,
                    height: this.helper.height() - e
                }, e = parseInt(this.element.css("left"), 10) + (this.position.left - this.originalPosition.left) || null, d = parseInt(this.element.css("top"), 10) + (this.position.top - this.originalPosition.top) || null, k.animate || this.element.css(c.extend(b, {
                    top: d,
                    left: e
                })), this.helper.height(this.size.height), this.helper.width(this.size.width), this._helper && !k.animate && this._proportionallyResize();
                c("body").css("cursor", "auto");
                this.element.removeClass("ui-resizable-resizing");
                this._propagate("stop", a);
                this._helper && this.helper.remove();
                return !1
            },
            _updateVirtualBoundaries: function(a) {
                var e, b, c, k;
                k = this.options;
                k = {
                    minWidth: d(k.minWidth) ? k.minWidth : 0,
                    maxWidth: d(k.maxWidth) ? k.maxWidth : Infinity,
                    minHeight: d(k.minHeight) ? k.minHeight : 0,
                    maxHeight: d(k.maxHeight) ? k.maxHeight : Infinity
                };
                if (this._aspectRatio || a) {
                    a = k.minHeight * this.aspectRatio;
                    b = k.minWidth / this.aspectRatio;
                    e = k.maxHeight * this.aspectRatio;
                    c = k.maxWidth / this.aspectRatio;
                    if (a > k.minWidth) k.minWidth = a;
                    if (b > k.minHeight) k.minHeight = b;
                    if (e < k.maxWidth) k.maxWidth = e;
                    if (c < k.maxHeight) k.maxHeight = c
                }
                this._vBoundaries = k
            },
            _updateCache: function(a) {
                this.offset = this.helper.offset();
                if (d(a.left)) this.position.left = a.left;
                if (d(a.top)) this.position.top = a.top;
                if (d(a.height)) this.size.height = a.height;
                if (d(a.width)) this.size.width =
                    a.width
            },
            _updateRatio: function(a) {
                var e = this.position,
                    b = this.size,
                    c = this.axis;
                if (d(a.height)) a.width = a.height * this.aspectRatio;
                else if (d(a.width)) a.height = a.width / this.aspectRatio;
                if (c === "sw") a.left = e.left + (b.width - a.width), a.top = null;
                if (c === "nw") a.top = e.top + (b.height - a.height), a.left = e.left + (b.width - a.width);
                return a
            },
            _respectSize: function(a) {
                var e = this._vBoundaries,
                    b = this.axis,
                    c = d(a.width) && e.maxWidth && e.maxWidth < a.width,
                    k = d(a.height) && e.maxHeight && e.maxHeight < a.height,
                    f = d(a.width) && e.minWidth &&
                    e.minWidth > a.width,
                    n = d(a.height) && e.minHeight && e.minHeight > a.height,
                    m = this.originalPosition.left + this.originalSize.width,
                    q = this.position.top + this.size.height,
                    h = /sw|nw|w/.test(b),
                    b = /nw|ne|n/.test(b);
                if (f) a.width = e.minWidth;
                if (n) a.height = e.minHeight;
                if (c) a.width = e.maxWidth;
                if (k) a.height = e.maxHeight;
                if (f && h) a.left = m - e.minWidth;
                if (c && h) a.left = m - e.maxWidth;
                if (n && b) a.top = q - e.minHeight;
                if (k && b) a.top = q - e.maxHeight;
                if (!a.width && !a.height && !a.left && a.top) a.top = null;
                else if (!a.width && !a.height && !a.top && a.left) a.left =
                    null;
                return a
            },
            _proportionallyResize: function() {
                if (this._proportionallyResizeElements.length) {
                    var a, e, b, c, d, f = this.helper || this.element;
                    for (a = 0; a < this._proportionallyResizeElements.length; a++) {
                        d = this._proportionallyResizeElements[a];
                        if (!this.borderDif) {
                            this.borderDif = [];
                            b = [d.css("borderTopWidth"), d.css("borderRightWidth"), d.css("borderBottomWidth"), d.css("borderLeftWidth")];
                            c = [d.css("paddingTop"), d.css("paddingRight"), d.css("paddingBottom"), d.css("paddingLeft")];
                            for (e = 0; e < b.length; e++) this.borderDif[e] =
                                (parseInt(b[e], 10) || 0) + (parseInt(c[e], 10) || 0)
                        }
                        d.css({
                            height: f.height() - this.borderDif[0] - this.borderDif[2] || 0,
                            width: f.width() - this.borderDif[1] - this.borderDif[3] || 0
                        })
                    }
                }
            },
            _renderProxy: function() {
                var a = this.options;
                this.elementOffset = this.element.offset();
                this._helper ? (this.helper = this.helper || c("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() - 1,
                    height: this.element.outerHeight() - 1,
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top +
                        "px",
                    zIndex: ++a.zIndex
                }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
            },
            _change: {
                e: function(a, e) {
                    return {
                        width: this.originalSize.width + e
                    }
                },
                w: function(a, e) {
                    return {
                        left: this.originalPosition.left + e,
                        width: this.originalSize.width - e
                    }
                },
                n: function(a, e, b) {
                    return {
                        top: this.originalPosition.top + b,
                        height: this.originalSize.height - b
                    }
                },
                s: function(a, e, b) {
                    return {
                        height: this.originalSize.height + b
                    }
                },
                se: function(a, e, b) {
                    return c.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [a, e, b]))
                },
                sw: function(a, e, b) {
                    return c.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [a, e, b]))
                },
                ne: function(a, e, b) {
                    return c.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [a, e, b]))
                },
                nw: function(a, e, b) {
                    return c.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [a, e, b]))
                }
            },
            _propagate: function(a, e) {
                c.ui.plugin.call(this, a, [e, this.ui()]);
                a !== "resize" && this._trigger(a, e, this.ui())
            },
            plugins: {},
            ui: function() {
                return {
                    originalElement: this.originalElement,
                    element: this.element,
                    helper: this.helper,
                    position: this.position,
                    size: this.size,
                    originalSize: this.originalSize,
                    originalPosition: this.originalPosition
                }
            }
        });
        c.ui.plugin.add("resizable", "animate", {
            stop: function(a) {
                var e = c(this).data("ui-resizable"),
                    b = e.options,
                    d = e._proportionallyResizeElements,
                    k = d.length && /textarea/i.test(d[0].nodeName),
                    f = k && c.ui.hasScroll(d[0], "left") ? 0 : e.sizeDiff.height,
                    k = {
                        width: e.size.width - (k ? 0 : e.sizeDiff.width),
                        height: e.size.height - f
                    },
                    f = parseInt(e.element.css("left"), 10) + (e.position.left -
                        e.originalPosition.left) || null,
                    n = parseInt(e.element.css("top"), 10) + (e.position.top - e.originalPosition.top) || null;
                e.element.animate(c.extend(k, n && f ? {
                    top: n,
                    left: f
                } : {}), {
                    duration: b.animateDuration,
                    easing: b.animateEasing,
                    step: function() {
                        var b = {
                            width: parseInt(e.element.css("width"), 10),
                            height: parseInt(e.element.css("height"), 10),
                            top: parseInt(e.element.css("top"), 10),
                            left: parseInt(e.element.css("left"), 10)
                        };
                        d && d.length && c(d[0]).css({
                            width: b.width,
                            height: b.height
                        });
                        e._updateCache(b);
                        e._propagate("resize",
                            a)
                    }
                })
            }
        });
        c.ui.plugin.add("resizable", "containment", {
            start: function() {
                var a, e, d, g, k, f = c(this).data("ui-resizable"),
                    n = f.element;
                d = f.options.containment;
                if (n = d instanceof c ? d.get(0) : /parent/.test(d) ? n.parent().get(0) : d) f.containerElement = c(n), /document/.test(d) || d === document ? (f.containerOffset = {
                    left: 0,
                    top: 0
                }, f.containerPosition = {
                    left: 0,
                    top: 0
                }, f.parentData = {
                    element: c(document),
                    left: 0,
                    top: 0,
                    width: c(document).width(),
                    height: c(document).height() || document.body.parentNode.scrollHeight
                }) : (a = c(n), e = [], c(["Top",
                    "Right", "Left", "Bottom"
                ]).each(function(c, d) {
                    e[c] = b(a.css("padding" + d))
                }), f.containerOffset = a.offset(), f.containerPosition = a.position(), f.containerSize = {
                    height: a.innerHeight() - e[3],
                    width: a.innerWidth() - e[1]
                }, d = f.containerOffset, g = f.containerSize.height, k = f.containerSize.width, k = c.ui.hasScroll(n, "left") ? n.scrollWidth : k, g = c.ui.hasScroll(n) ? n.scrollHeight : g, f.parentData = {
                    element: n,
                    left: d.left,
                    top: d.top,
                    width: k,
                    height: g
                })
            },
            resize: function(a) {
                var e, b, d, k, f = c(this).data("ui-resizable");
                e = f.options;
                b = f.containerOffset;
                d = f.position;
                a = f._aspectRatio || a.shiftKey;
                k = {
                    top: 0,
                    left: 0
                };
                var n = f.containerElement;
                n[0] !== document && /static/.test(n.css("position")) && (k = b);
                if (d.left < (f._helper ? b.left : 0)) {
                    f.size.width += f._helper ? f.position.left - b.left : f.position.left - k.left;
                    if (a) f.size.height = f.size.width / f.aspectRatio;
                    f.position.left = e.helper ? b.left : 0
                }
                if (d.top < (f._helper ? b.top : 0)) {
                    f.size.height += f._helper ? f.position.top - b.top : f.position.top;
                    if (a) f.size.width = f.size.height * f.aspectRatio;
                    f.position.top = f._helper ? b.top : 0
                }
                f.offset.left =
                    f.parentData.left + f.position.left;
                f.offset.top = f.parentData.top + f.position.top;
                e = Math.abs((f._helper ? f.offset.left - k.left : f.offset.left - k.left) + f.sizeDiff.width);
                b = Math.abs((f._helper ? f.offset.top - k.top : f.offset.top - b.top) + f.sizeDiff.height);
                d = f.containerElement.get(0) === f.element.parent().get(0);
                k = /relative|absolute/.test(f.containerElement.css("position"));
                d && k && (e -= Math.abs(f.parentData.left));
                if (e + f.size.width >= f.parentData.width && (f.size.width = f.parentData.width - e, a)) f.size.height = f.size.width /
                    f.aspectRatio;
                if (b + f.size.height >= f.parentData.height && (f.size.height = f.parentData.height - b, a)) f.size.width = f.size.height * f.aspectRatio
            },
            stop: function() {
                var a = c(this).data("ui-resizable"),
                    e = a.options,
                    b = a.containerOffset,
                    d = a.containerPosition,
                    k = a.containerElement,
                    f = c(a.helper),
                    n = f.offset(),
                    m = f.outerWidth() - a.sizeDiff.width,
                    f = f.outerHeight() - a.sizeDiff.height;
                a._helper && !e.animate && /relative/.test(k.css("position")) && c(this).css({
                    left: n.left - d.left - b.left,
                    width: m,
                    height: f
                });
                a._helper && !e.animate && /static/.test(k.css("position")) &&
                    c(this).css({
                        left: n.left - d.left - b.left,
                        width: m,
                        height: f
                    })
            }
        });
        c.ui.plugin.add("resizable", "alsoResize", {
            start: function() {
                var a = c(this).data("ui-resizable").options,
                    e = function(a) {
                        c(a).each(function() {
                            var a = c(this);
                            a.data("ui-resizable-alsoresize", {
                                width: parseInt(a.width(), 10),
                                height: parseInt(a.height(), 10),
                                left: parseInt(a.css("left"), 10),
                                top: parseInt(a.css("top"), 10)
                            })
                        })
                    };
                typeof a.alsoResize === "object" && !a.alsoResize.parentNode ? a.alsoResize.length ? (a.alsoResize = a.alsoResize[0], e(a.alsoResize)) : c.each(a.alsoResize,
                    function(a) {
                        e(a)
                    }) : e(a.alsoResize)
            },
            resize: function(a, e) {
                var b = c(this).data("ui-resizable"),
                    d = b.options,
                    k = b.originalSize,
                    f = b.originalPosition,
                    n = {
                        height: b.size.height - k.height || 0,
                        width: b.size.width - k.width || 0,
                        top: b.position.top - f.top || 0,
                        left: b.position.left - f.left || 0
                    },
                    m = function(a, b) {
                        c(a).each(function() {
                            var a = c(this),
                                d = c(this).data("ui-resizable-alsoresize"),
                                g = {},
                                f = b && b.length ? b : a.parents(e.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                            c.each(f, function(a, b) {
                                var e =
                                    (d[b] || 0) + (n[b] || 0);
                                e && e >= 0 && (g[b] = e || null)
                            });
                            a.css(g)
                        })
                    };
                typeof d.alsoResize === "object" && !d.alsoResize.nodeType ? c.each(d.alsoResize, function(a, b) {
                    m(a, b)
                }) : m(d.alsoResize)
            },
            stop: function() {
                c(this).removeData("resizable-alsoresize")
            }
        });
        c.ui.plugin.add("resizable", "ghost", {
            start: function() {
                var a = c(this).data("ui-resizable"),
                    b = a.options,
                    d = a.size;
                a.ghost = a.originalElement.clone();
                a.ghost.css({
                    opacity: 0.25,
                    display: "block",
                    position: "relative",
                    height: d.height,
                    width: d.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }).addClass("ui-resizable-ghost").addClass(typeof b.ghost ===
                    "string" ? b.ghost : "");
                a.ghost.appendTo(a.helper)
            },
            resize: function() {
                var a = c(this).data("ui-resizable");
                a.ghost && a.ghost.css({
                    position: "relative",
                    height: a.size.height,
                    width: a.size.width
                })
            },
            stop: function() {
                var a = c(this).data("ui-resizable");
                a.ghost && a.helper && a.helper.get(0).removeChild(a.ghost.get(0))
            }
        });
        c.ui.plugin.add("resizable", "grid", {
            resize: function() {
                var a = c(this).data("ui-resizable"),
                    b = a.options,
                    d = a.size,
                    g = a.originalSize,
                    k = a.originalPosition,
                    f = a.axis,
                    n = typeof b.grid === "number" ? [b.grid, b.grid] :
                    b.grid,
                    m = n[0] || 1,
                    q = n[1] || 1,
                    h = Math.round((d.width - g.width) / m) * m,
                    d = Math.round((d.height - g.height) / q) * q,
                    o = g.width + h,
                    r = g.height + d,
                    v = b.maxWidth && b.maxWidth < o,
                    w = b.maxHeight && b.maxHeight < r,
                    A = b.minWidth && b.minWidth > o,
                    s = b.minHeight && b.minHeight > r;
                b.grid = n;
                A && (o += m);
                s && (r += q);
                v && (o -= m);
                w && (r -= q);
                /^(se|s|e)$/.test(f) ? (a.size.width = o, a.size.height = r) : /^(ne)$/.test(f) ? (a.size.width = o, a.size.height = r, a.position.top = k.top - d) : /^(sw)$/.test(f) ? (a.size.width = o, a.size.height = r, a.position.left = k.left - h) : (r - q > 0 ? (a.size.height =
                    r, a.position.top = k.top - d) : (a.size.height = q, a.position.top = k.top + g.height - q), o - m > 0 ? (a.size.width = o, a.position.left = k.left - h) : (a.size.width = m, a.position.left = k.left + g.width - m))
            }
        })
    })(h);
    (function(c) {
        c.widget("ui.autocomplete", {
            version: "1.10.4",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            requestIndex: 0,
            pending: 0,
            _create: function() {
                var b, d, a, e = this.element[0].nodeName.toLowerCase(),
                    l = e === "textarea",
                    e = e === "input";
                this.isMultiLine = l ? !0 : e ? !1 : this.element.prop("isContentEditable");
                this.valueMethod = this.element[l || e ? "val" : "text"];
                this.isNewMenu = !0;
                this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off");
                this._on(this.element, {
                    keydown: function(e) {
                        if (this.element.prop("readOnly")) d = a = b = !0;
                        else {
                            d = a = b = !1;
                            var l = c.ui.keyCode;
                            switch (e.keyCode) {
                                case l.PAGE_UP:
                                    b = !0;
                                    this._move("previousPage", e);
                                    break;
                                case l.PAGE_DOWN:
                                    b = !0;
                                    this._move("nextPage", e);
                                    break;
                                case l.UP:
                                    b = !0;
                                    this._keyEvent("previous", e);
                                    break;
                                case l.DOWN:
                                    b = !0;
                                    this._keyEvent("next", e);
                                    break;
                                case l.ENTER:
                                case l.NUMPAD_ENTER:
                                    this.menu.active && (b = !0, e.preventDefault(), this.menu.select(e));
                                    break;
                                case l.TAB:
                                    this.menu.active && this.menu.select(e);
                                    break;
                                case l.ESCAPE:
                                    this.menu.element.is(":visible") && (this._value(this.term), this.close(e), e.preventDefault());
                                    break;
                                default:
                                    d = !0, this._searchTimeout(e)
                            }
                        }
                    },
                    keypress: function(a) {
                        if (b) b = !1, (!this.isMultiLine || this.menu.element.is(":visible")) &&
                            a.preventDefault();
                        else if (!d) {
                            var e = c.ui.keyCode;
                            switch (a.keyCode) {
                                case e.PAGE_UP:
                                    this._move("previousPage", a);
                                    break;
                                case e.PAGE_DOWN:
                                    this._move("nextPage", a);
                                    break;
                                case e.UP:
                                    this._keyEvent("previous", a);
                                    break;
                                case e.DOWN:
                                    this._keyEvent("next", a)
                            }
                        }
                    },
                    input: function(b) {
                        a ? (a = !1, b.preventDefault()) : this._searchTimeout(b)
                    },
                    focus: function() {
                        this.selectedItem = null;
                        this.previous = this._value()
                    },
                    blur: function(a) {
                        this.cancelBlur ? delete this.cancelBlur : (clearTimeout(this.searching), this.close(a), this._change(a))
                    }
                });
                this._initSource();
                this.menu = c("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                    role: null
                }).hide().data("ui-menu");
                this._on(this.menu.element, {
                    mousedown: function(a) {
                        a.preventDefault();
                        this.cancelBlur = !0;
                        this._delay(function() {
                            delete this.cancelBlur
                        });
                        var b = this.menu.element[0];
                        c(a.target).closest(".ui-menu-item").length || this._delay(function() {
                            var a = this;
                            this.document.one("mousedown", function(e) {
                                e.target !== a.element[0] && e.target !== b && !c.contains(b, e.target) && a.close()
                            })
                        })
                    },
                    menufocus: function(a, b) {
                        if (this.isNewMenu && (this.isNewMenu = !1, a.originalEvent && /^mouse/.test(a.originalEvent.type))) {
                            this.menu.blur();
                            this.document.one("mousemove", function() {
                                c(a.target).trigger(a.originalEvent)
                            });
                            return
                        }
                        var e = b.item.data("ui-autocomplete-item");
                        !1 !== this._trigger("focus", a, {
                            item: e
                        }) ? a.originalEvent && /^key/.test(a.originalEvent.type) && this._value(e.value) : this.liveRegion.text(e.value)
                    },
                    menuselect: function(a, b) {
                        var e = b.item.data("ui-autocomplete-item"),
                            c = this.previous;
                        if (this.element[0] !==
                            this.document[0].activeElement) this.element.focus(), this.previous = c, this._delay(function() {
                            this.previous = c;
                            this.selectedItem = e
                        });
                        !1 !== this._trigger("select", a, {
                            item: e
                        }) && this._value(e.value);
                        this.term = this._value();
                        this.close(a);
                        this.selectedItem = e
                    }
                });
                this.liveRegion = c("<span>", {
                    role: "status",
                    "aria-live": "polite"
                }).addClass("ui-helper-hidden-accessible").insertBefore(this.element);
                this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function() {
                clearTimeout(this.searching);
                this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
                this.menu.element.remove();
                this.liveRegion.remove()
            },
            _setOption: function(b, c) {
                this._super(b, c);
                b === "source" && this._initSource();
                b === "appendTo" && this.menu.element.appendTo(this._appendTo());
                b === "disabled" && c && this.xhr && this.xhr.abort()
            },
            _appendTo: function() {
                var b = this.options.appendTo;
                b && (b = b.jquery || b.nodeType ? c(b) : this.document.find(b).eq(0));
                b || (b = this.element.closest(".ui-front"));
                if (!b.length) b = this.document[0].body;
                return b
            },
            _initSource: function() {
                var b, d, a = this;
                c.isArray(this.options.source) ? (b = this.options.source, this.source = function(a, d) {
                    d(c.ui.autocomplete.filter(b, a.term))
                }) : typeof this.options.source === "string" ? (d = this.options.source, this.source = function(b, l) {
                    a.xhr && a.xhr.abort();
                    a.xhr = c.ajax({
                        url: d,
                        data: b,
                        dataType: "json",
                        success: function(a) {
                            l(a)
                        },
                        error: function() {
                            l([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function(b) {
                clearTimeout(this.searching);
                this.searching = this._delay(function() {
                    if (this.term !==
                        this._value()) this.selectedItem = null, this.search(null, b)
                }, this.options.delay)
            },
            search: function(b, c) {
                b = b != null ? b : this._value();
                this.term = this._value();
                return b.length < this.options.minLength ? this.close(c) : this._trigger("search", c) === !1 ? void 0 : this._search(b)
            },
            _search: function(b) {
                this.pending++;
                this.element.addClass("ui-autocomplete-loading");
                this.cancelSearch = !1;
                this.source({
                    term: b
                }, this._response())
            },
            _response: function() {
                var b = ++this.requestIndex;
                return c.proxy(function(c) {
                    b === this.requestIndex && this.__response(c);
                    this.pending--;
                    this.pending || this.element.removeClass("ui-autocomplete-loading")
                }, this)
            },
            __response: function(b) {
                b && (b = this._normalize(b));
                this._trigger("response", null, {
                    content: b
                });
                !this.options.disabled && b && b.length && !this.cancelSearch ? (this._suggest(b), this._trigger("open")) : this._close()
            },
            close: function(b) {
                this.cancelSearch = !0;
                this._close(b)
            },
            _close: function(b) {
                if (this.menu.element.is(":visible")) this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", b)
            },
            _change: function(b) {
                this.previous !==
                    this._value() && this._trigger("change", b, {
                        item: this.selectedItem
                    })
            },
            _normalize: function(b) {
                return b.length && b[0].label && b[0].value ? b : c.map(b, function(b) {
                    return typeof b === "string" ? {
                        label: b,
                        value: b
                    } : c.extend({
                        label: b.label || b.value,
                        value: b.value || b.label
                    }, b)
                })
            },
            _suggest: function(b) {
                var d = this.menu.element.empty();
                this._renderMenu(d, b);
                this.isNewMenu = !0;
                this.menu.refresh();
                d.show();
                this._resizeMenu();
                d.position(c.extend({
                    of: this.element
                }, this.options.position));
                this.options.autoFocus && this.menu.next()
            },
            _resizeMenu: function() {
                var b = this.menu.element;
                b.outerWidth(Math.max(b.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(b, d) {
                var a = this;
                c.each(d, function(e, c) {
                    a._renderItemData(b, c)
                })
            },
            _renderItemData: function(b, c) {
                return this._renderItem(b, c).data("ui-autocomplete-item", c)
            },
            _renderItem: function(b, d) {
                return c("<li>").append(c("<a>").text(d.label)).appendTo(b)
            },
            _move: function(b, c) {
                if (this.menu.element.is(":visible"))
                    if (this.menu.isFirstItem() && /^previous/.test(b) || this.menu.isLastItem() &&
                        /^next/.test(b)) this._value(this.term), this.menu.blur();
                    else this.menu[b](c);
                else this.search(null, c)
            },
            widget: function() {
                return this.menu.element
            },
            _value: function() {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function(b, c) {
                if (!this.isMultiLine || this.menu.element.is(":visible")) this._move(b, c), c.preventDefault()
            }
        });
        c.extend(c.ui.autocomplete, {
            escapeRegex: function(b) {
                return b.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function(b, d) {
                var a = RegExp(c.ui.autocomplete.escapeRegex(d),
                    "i");
                return c.grep(b, function(b) {
                    return a.test(b.label || b.value || b)
                })
            }
        });
        c.widget("ui.autocomplete", c.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function(b) {
                        return b + (b > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            },
            __response: function(b) {
                this._superApply(arguments);
                !this.options.disabled && !this.cancelSearch && this.liveRegion.text(b && b.length ? this.options.messages.results(b.length) : this.options.messages.noResults)
            }
        })
    })(h);
    (function(c) {
        var b,
            d = function() {
                var a = c(this);
                setTimeout(function() {
                    a.find(":ui-button").button("refresh")
                }, 1)
            },
            a = function(a) {
                var b = a.name,
                    d = a.form,
                    k = c([]);
                b && (b = b.replace(/'/g, "\\'"), k = d ? c(d).find("[name='" + b + "']") : c("[name='" + b + "']", a.ownerDocument).filter(function() {
                    return !this.form
                }));
                return k
            };
        c.widget("ui.button", {
            version: "1.10.4",
            defaultElement: "<button>",
            options: {
                disabled: null,
                text: !0,
                label: null,
                icons: {
                    primary: null,
                    secondary: null
                }
            },
            _create: function() {
                this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" +
                    this.eventNamespace, d);
                typeof this.options.disabled !== "boolean" ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled);
                this._determineButtonType();
                this.hasTitle = !!this.buttonElement.attr("title");
                var e = this,
                    l = this.options,
                    g = this.type === "checkbox" || this.type === "radio",
                    k = !g ? "ui-state-active" : "";
                if (l.label === null) l.label = this.type === "input" ? this.buttonElement.val() : this.buttonElement.html();
                this._hoverable(this.buttonElement);
                this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role",
                    "button").bind("mouseenter" + this.eventNamespace, function() {
                    l.disabled || this === b && c(this).addClass("ui-state-active")
                }).bind("mouseleave" + this.eventNamespace, function() {
                    l.disabled || c(this).removeClass(k)
                }).bind("click" + this.eventNamespace, function(a) {
                    l.disabled && (a.preventDefault(), a.stopImmediatePropagation())
                });
                this._on({
                    focus: function() {
                        this.buttonElement.addClass("ui-state-focus")
                    },
                    blur: function() {
                        this.buttonElement.removeClass("ui-state-focus")
                    }
                });
                g && this.element.bind("change" + this.eventNamespace,
                    function() {
                        e.refresh()
                    });
                this.type === "checkbox" ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                    if (l.disabled) return !1
                }) : this.type === "radio" ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                    if (l.disabled) return !1;
                    c(this).addClass("ui-state-active");
                    e.buttonElement.attr("aria-pressed", "true");
                    var b = e.element[0];
                    a(b).not(b).map(function() {
                        return c(this).button("widget")[0]
                    }).removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : (this.buttonElement.bind("mousedown" +
                        this.eventNamespace,
                        function() {
                            if (l.disabled) return !1;
                            c(this).addClass("ui-state-active");
                            b = this;
                            e.document.one("mouseup", function() {
                                b = null
                            })
                        }).bind("mouseup" + this.eventNamespace, function() {
                        if (l.disabled) return !1;
                        c(this).removeClass("ui-state-active")
                    }).bind("keydown" + this.eventNamespace, function(a) {
                        if (l.disabled) return !1;
                        (a.keyCode === c.ui.keyCode.SPACE || a.keyCode === c.ui.keyCode.ENTER) && c(this).addClass("ui-state-active")
                    }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                        c(this).removeClass("ui-state-active")
                    }),
                    this.buttonElement.is("a") && this.buttonElement.keyup(function(a) {
                        a.keyCode === c.ui.keyCode.SPACE && c(this).click()
                    }));
                this._setOption("disabled", l.disabled);
                this._resetButton()
            },
            _determineButtonType: function() {
                var a, b;
                this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button";
                if (this.type === "checkbox" || this.type === "radio") {
                    a = this.element.parents().last();
                    b = "label[for='" + this.element.attr("id") + "']";
                    this.buttonElement = a.find(b);
                    if (!this.buttonElement.length && (a = a.length ? a.siblings() : this.element.siblings(), this.buttonElement = a.filter(b), !this.buttonElement.length)) this.buttonElement = a.find(b);
                    this.element.addClass("ui-helper-hidden-accessible");
                    (a = this.element.is(":checked")) && this.buttonElement.addClass("ui-state-active");
                    this.buttonElement.prop("aria-pressed", a)
                } else this.buttonElement = this.element
            },
            widget: function() {
                return this.buttonElement
            },
            _destroy: function() {
                this.element.removeClass("ui-helper-hidden-accessible");
                this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-active ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
                this.hasTitle || this.buttonElement.removeAttr("title")
            },
            _setOption: function(a, b) {
                this._super(a, b);
                a === "disabled" ? (this.element.prop("disabled", !!b), b && this.buttonElement.removeClass("ui-state-focus")) :
                    this._resetButton()
            },
            refresh: function() {
                var b = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
                b !== this.options.disabled && this._setOption("disabled", b);
                this.type === "radio" ? a(this.element[0]).each(function() {
                    c(this).is(":checked") ? c(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : c(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : this.type === "checkbox" && (this.element.is(":checked") ?
                    this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
            },
            _resetButton: function() {
                if (this.type === "input") this.options.label && this.element.val(this.options.label);
                else {
                    var a = this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
                        b = c("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(a.empty()).text(),
                        d = this.options.icons,
                        k = d.primary && d.secondary,
                        f = [];
                    d.primary || d.secondary ? (this.options.text && f.push("ui-button-text-icon" + (k ? "s" : d.primary ? "-primary" : "-secondary")), d.primary && a.prepend("<span class='ui-button-icon-primary ui-icon " + d.primary + "'></span>"), d.secondary && a.append("<span class='ui-button-icon-secondary ui-icon " + d.secondary + "'></span>"), this.options.text || (f.push(k ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || a.attr("title", c.trim(b)))) : f.push("ui-button-text-only");
                    a.addClass(f.join(" "))
                }
            }
        });
        c.widget("ui.buttonset", {
            version: "1.10.4",
            options: {
                items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
            },
            _create: function() {
                this.element.addClass("ui-buttonset")
            },
            _init: function() {
                this.refresh()
            },
            _setOption: function(a, b) {
                a === "disabled" && this.buttons.button("option", a, b);
                this._super(a, b)
            },
            refresh: function() {
                var a = this.element.css("direction") === "rtl";
                this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                    return c(this).button("widget")[0]
                }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(a ?
                    "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(a ? "ui-corner-left" : "ui-corner-right").end().end()
            },
            _destroy: function() {
                this.element.removeClass("ui-buttonset");
                this.buttons.map(function() {
                    return c(this).button("widget")[0]
                }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
            }
        })
    })(h);
    (function(c) {
        var b = {
                buttons: !0,
                height: !0,
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0,
                width: !0
            },
            d = {
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0
            };
        c.widget("ui.dialog", {
            version: "1.10.4",
            options: {
                appendTo: "body",
                autoOpen: !0,
                buttons: [],
                closeOnEscape: !0,
                closeText: "close",
                dialogClass: "",
                draggable: !0,
                hide: null,
                height: "auto",
                maxHeight: null,
                maxWidth: null,
                minHeight: 150,
                minWidth: 150,
                modal: !1,
                position: {
                    my: "center",
                    at: "center",
                    of: window,
                    collision: "fit",
                    using: function(a) {
                        var b = c(this).css(a).offset().top;
                        b < 0 && c(this).css("top", a.top - b)
                    }
                },
                resizable: !0,
                show: null,
                title: null,
                width: 300,
                beforeClose: null,
                close: null,
                drag: null,
                dragStart: null,
                dragStop: null,
                focus: null,
                open: null,
                resize: null,
                resizeStart: null,
                resizeStop: null
            },
            _create: function() {
                this.originalCss = {
                    display: this.element[0].style.display,
                    width: this.element[0].style.width,
                    minHeight: this.element[0].style.minHeight,
                    maxHeight: this.element[0].style.maxHeight,
                    height: this.element[0].style.height
                };
                this.originalPosition = {
                    parent: this.element.parent(),
                    index: this.element.parent().children().index(this.element)
                };
                this.originalTitle = this.element.attr("title");
                this.options.title = this.options.title || this.originalTitle;
                this._createWrapper();
                this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
                this._createTitlebar();
                this._createButtonPane();
                this.options.draggable && c.fn.draggable && this._makeDraggable();
                this.options.resizable && c.fn.resizable && this._makeResizable();
                this._isOpen = !1
            },
            _init: function() {
                this.options.autoOpen && this.open()
            },
            _appendTo: function() {
                var a = this.options.appendTo;
                return a && (a.jquery || a.nodeType) ? c(a) : this.document.find(a || "body").eq(0)
            },
            _destroy: function() {
                var a, b = this.originalPosition;
                this._destroyOverlay();
                this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
                this.uiDialog.stop(!0, !0).remove();
                this.originalTitle && this.element.attr("title", this.originalTitle);
                a = b.parent.children().eq(b.index);
                a.length && a[0] !== this.element[0] ? a.before(this.element) : b.parent.append(this.element)
            },
            widget: function() {
                return this.uiDialog
            },
            disable: c.noop,
            enable: c.noop,
            close: function(a) {
                var b, d = this;
                if (this._isOpen && this._trigger("beforeClose", a) !== !1) {
                    this._isOpen = !1;
                    this._destroyOverlay();
                    if (!this.opener.filter(":focusable").focus().length) try {
                        (b = this.document[0].activeElement) &&
                        b.nodeName.toLowerCase() !== "body" && c(b).blur()
                    } catch (g) {}
                    this._hide(this.uiDialog, this.options.hide, function() {
                        d._trigger("close", a)
                    })
                }
            },
            isOpen: function() {
                return this._isOpen
            },
            moveToTop: function() {
                this._moveToTop()
            },
            _moveToTop: function(a, b) {
                var c = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
                c && !b && this._trigger("focus", a);
                return c
            },
            open: function() {
                var a = this;
                this._isOpen ? this._moveToTop() && this._focusTabbable() : (this._isOpen = !0, this.opener = c(this.document[0].activeElement),
                    this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function() {
                        a._focusTabbable();
                        a._trigger("focus")
                    }), this._trigger("open"))
            },
            _focusTabbable: function() {
                var a = this.element.find("[autofocus]");
                a.length || (a = this.element.find(":tabbable"));
                a.length || (a = this.uiDialogButtonPane.find(":tabbable"));
                a.length || (a = this.uiDialogTitlebarClose.filter(":tabbable"));
                if (!a.length) a = this.uiDialog;
                a.eq(0).focus()
            },
            _keepFocus: function(a) {
                function b() {
                    var a =
                        this.document[0].activeElement;
                    this.uiDialog[0] === a || c.contains(this.uiDialog[0], a) || this._focusTabbable()
                }
                a.preventDefault();
                b.call(this);
                this._delay(b)
            },
            _createWrapper: function() {
                this.uiDialog = c("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                    tabIndex: -1,
                    role: "dialog"
                }).appendTo(this._appendTo());
                this._on(this.uiDialog, {
                    keydown: function(a) {
                        if (this.options.closeOnEscape && !a.isDefaultPrevented() && a.keyCode && a.keyCode === c.ui.keyCode.ESCAPE) a.preventDefault(),
                            this.close(a);
                        else if (a.keyCode === c.ui.keyCode.TAB) {
                            var b = this.uiDialog.find(":tabbable"),
                                d = b.filter(":first"),
                                b = b.filter(":last");
                            if ((a.target === b[0] || a.target === this.uiDialog[0]) && !a.shiftKey) d.focus(1), a.preventDefault();
                            else if ((a.target === d[0] || a.target === this.uiDialog[0]) && a.shiftKey) b.focus(1), a.preventDefault()
                        }
                    },
                    mousedown: function(a) {
                        this._moveToTop(a) && this._focusTabbable()
                    }
                });
                this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                    "aria-describedby": this.element.uniqueId().attr("id")
                })
            },
            _createTitlebar: function() {
                var a;
                this.uiDialogTitlebar = c("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
                this._on(this.uiDialogTitlebar, {
                    mousedown: function(a) {
                        c(a.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                    }
                });
                this.uiDialogTitlebarClose = c("<button type='button'></button>").button({
                    label: this.options.closeText,
                    icons: {
                        primary: "ui-icon-closethick"
                    },
                    text: !1
                }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
                this._on(this.uiDialogTitlebarClose, {
                    click: function(a) {
                        a.preventDefault();
                        this.close(a)
                    }
                });
                a = c("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
                this._title(a);
                this.uiDialog.attr({
                    "aria-labelledby": a.attr("id")
                })
            },
            _title: function(a) {
                this.options.title || a.html("&#160;");
                a.text(this.options.title)
            },
            _createButtonPane: function() {
                this.uiDialogButtonPane = c("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
                this.uiButtonSet = c("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
                this._createButtons()
            },
            _createButtons: function() {
                var a = this,
                    b = this.options.buttons;
                this.uiDialogButtonPane.remove();
                this.uiButtonSet.empty();
                c.isEmptyObject(b) || c.isArray(b) && !b.length ? this.uiDialog.removeClass("ui-dialog-buttons") : (c.each(b, function(b, e) {
                        var d, f, e = c.isFunction(e) ? {
                                click: e,
                                text: b
                            } : e,
                            e = c.extend({
                                type: "button"
                            }, e);
                        d = e.click;
                        e.click = function() {
                            d.apply(a.element[0], arguments)
                        };
                        f = {
                            icons: e.icons,
                            text: e.showText
                        };
                        delete e.icons;
                        delete e.showText;
                        c("<button></button>", e).button(f).appendTo(a.uiButtonSet)
                    }),
                    this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog))
            },
            _makeDraggable: function() {
                function a(a) {
                    return {
                        position: a.position,
                        offset: a.offset
                    }
                }
                var b = this,
                    d = this.options;
                this.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                    handle: ".ui-dialog-titlebar",
                    containment: "document",
                    start: function(d, l) {
                        c(this).addClass("ui-dialog-dragging");
                        b._blockFrames();
                        b._trigger("dragStart", d, a(l))
                    },
                    drag: function(c, d) {
                        b._trigger("drag", c, a(d))
                    },
                    stop: function(g,
                        k) {
                        d.position = [k.position.left - b.document.scrollLeft(), k.position.top - b.document.scrollTop()];
                        c(this).removeClass("ui-dialog-dragging");
                        b._unblockFrames();
                        b._trigger("dragStop", g, a(k))
                    }
                })
            },
            _makeResizable: function() {
                function a(a) {
                    return {
                        originalPosition: a.originalPosition,
                        originalSize: a.originalSize,
                        position: a.position,
                        size: a.size
                    }
                }
                var b = this,
                    d = this.options,
                    g = d.resizable,
                    k = this.uiDialog.css("position"),
                    g = typeof g === "string" ? g : "n,e,s,w,se,sw,ne,nw";
                this.uiDialog.resizable({
                    cancel: ".ui-dialog-content",
                    containment: "document",
                    alsoResize: this.element,
                    maxWidth: d.maxWidth,
                    maxHeight: d.maxHeight,
                    minWidth: d.minWidth,
                    minHeight: this._minHeight(),
                    handles: g,
                    start: function(d, l) {
                        c(this).addClass("ui-dialog-resizing");
                        b._blockFrames();
                        b._trigger("resizeStart", d, a(l))
                    },
                    resize: function(c, d) {
                        b._trigger("resize", c, a(d))
                    },
                    stop: function(f, g) {
                        d.height = c(this).height();
                        d.width = c(this).width();
                        c(this).removeClass("ui-dialog-resizing");
                        b._unblockFrames();
                        b._trigger("resizeStop", f, a(g))
                    }
                }).css("position", k)
            },
            _minHeight: function() {
                var a =
                    this.options;
                return a.height === "auto" ? a.minHeight : Math.min(a.minHeight, a.height)
            },
            _position: function() {
                var a = this.uiDialog.is(":visible");
                a || this.uiDialog.show();
                this.uiDialog.position(this.options.position);
                a || this.uiDialog.hide()
            },
            _setOptions: function(a) {
                var e = this,
                    l = !1,
                    g = {};
                c.each(a, function(a, c) {
                    e._setOption(a, c);
                    a in b && (l = !0);
                    a in d && (g[a] = c)
                });
                l && (this._size(), this._position());
                this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", g)
            },
            _setOption: function(a, b) {
                var c, d = this.uiDialog;
                a === "dialogClass" && d.removeClass(this.options.dialogClass).addClass(b);
                a !== "disabled" && (this._super(a, b), a === "appendTo" && this.uiDialog.appendTo(this._appendTo()), a === "buttons" && this._createButtons(), a === "closeText" && this.uiDialogTitlebarClose.button({
                    label: "" + b
                }), a === "draggable" && ((c = d.is(":data(ui-draggable)")) && !b && d.draggable("destroy"), !c && b && this._makeDraggable()), a === "position" && this._position(), a === "resizable" && ((c = d.is(":data(ui-resizable)")) && !b && d.resizable("destroy"), c && typeof b === "string" &&
                    d.resizable("option", "handles", b), !c && b !== !1 && this._makeResizable()), a === "title" && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
            },
            _size: function() {
                var a, b, c, d = this.options;
                this.element.show().css({
                    width: "auto",
                    minHeight: 0,
                    maxHeight: "none",
                    height: 0
                });
                if (d.minWidth > d.width) d.width = d.minWidth;
                a = this.uiDialog.css({
                    height: "auto",
                    width: d.width
                }).outerHeight();
                b = Math.max(0, d.minHeight - a);
                c = typeof d.maxHeight === "number" ? Math.max(0, d.maxHeight - a) : "none";
                d.height === "auto" ? this.element.css({
                    minHeight: b,
                    maxHeight: c,
                    height: "auto"
                }) : this.element.height(Math.max(0, d.height - a));
                this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
            },
            _blockFrames: function() {
                this.iframeBlocks = this.document.find("iframe").map(function() {
                    var a = c(this);
                    return c("<div>").css({
                        position: "absolute",
                        width: a.outerWidth(),
                        height: a.outerHeight()
                    }).appendTo(a.parent()).offset(a.offset())[0]
                })
            },
            _unblockFrames: function() {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _allowInteraction: function(a) {
                return c(a.target).closest(".ui-dialog").length ? !0 : !!c(a.target).closest(".ui-datepicker").length
            },
            _createOverlay: function() {
                if (this.options.modal) {
                    var a = this,
                        b = this.widgetFullName;
                    c.ui.dialog.overlayInstances || this._delay(function() {
                        c.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function(d) {
                            a._allowInteraction(d) || (d.preventDefault(), c(".ui-dialog:visible:last .ui-dialog-content").data(b)._focusTabbable())
                        })
                    });
                    this.overlay = c("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
                    this._on(this.overlay, {
                        mousedown: "_keepFocus"
                    });
                    c.ui.dialog.overlayInstances++
                }
            },
            _destroyOverlay: function() {
                if (this.options.modal && this.overlay) c.ui.dialog.overlayInstances--, c.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null
            }
        });
        c.ui.dialog.overlayInstances = 0;
        c.uiBackCompat !== !1 && c.widget("ui.dialog", c.ui.dialog, {
            _position: function() {
                var a = this.options.position,
                    b = [],
                    d = [0, 0],
                    g;
                if (a) {
                    if (typeof a === "string" || typeof a === "object" && "0" in a) b = a.split ?
                        a.split(" ") : [a[0], a[1]], b.length === 1 && (b[1] = b[0]), c.each(["left", "top"], function(a, c) {
                            +b[a] === b[a] && (d[a] = b[a], b[a] = c)
                        }), a = {
                            my: b[0] + (d[0] < 0 ? d[0] : "+" + d[0]) + " " + b[1] + (d[1] < 0 ? d[1] : "+" + d[1]),
                            at: b.join(" ")
                        };
                    a = c.extend({}, c.ui.dialog.prototype.options.position, a)
                } else a = c.ui.dialog.prototype.options.position;
                (g = this.uiDialog.is(":visible")) || this.uiDialog.show();
                this.uiDialog.position(a);
                g || this.uiDialog.hide()
            }
        })
    })(h);
    (function(c) {
        c.widget("ui.menu", {
            version: "1.10.4",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-carat-1-e"
                },
                menus: "ul",
                position: {
                    my: "left top",
                    at: "right top"
                },
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function() {
                this.activeMenu = this.element;
                this.mouseHandled = !1;
                this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                    role: this.options.role,
                    tabIndex: 0
                }).bind("click" + this.eventNamespace, c.proxy(function(b) {
                        this.options.disabled && b.preventDefault()
                    },
                    this));
                this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true");
                this._on({
                    "mousedown .ui-menu-item > a": function(b) {
                        b.preventDefault()
                    },
                    "click .ui-state-disabled > a": function(b) {
                        b.preventDefault()
                    },
                    "click .ui-menu-item:has(a)": function(b) {
                        var d = c(b.target).closest(".ui-menu-item");
                        if (!this.mouseHandled && d.not(".ui-state-disabled").length) {
                            this.select(b);
                            if (!b.isPropagationStopped()) this.mouseHandled = !0;
                            d.has(".ui-menu").length ? this.expand(b) : !this.element.is(":focus") &&
                                c(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && this.active.parents(".ui-menu").length === 1 && clearTimeout(this.timer))
                        }
                    },
                    "mouseenter .ui-menu-item": function(b) {
                        var d = c(b.currentTarget);
                        d.siblings().children(".ui-state-active").removeClass("ui-state-active");
                        this.focus(b, d)
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function(b, c) {
                        var a = this.active || this.element.children(".ui-menu-item").eq(0);
                        c || this.focus(b, a)
                    },
                    blur: function(b) {
                        this._delay(function() {
                            c.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(b)
                        })
                    },
                    keydown: "_keydown"
                });
                this.refresh();
                this._on(this.document, {
                    click: function(b) {
                        c(b.target).closest(".ui-menu").length || this.collapseAll(b);
                        this.mouseHandled = !1
                    }
                })
            },
            _destroy: function() {
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
                this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                    var b = c(this);
                    b.data("ui-menu-submenu-carat") && b.remove()
                });
                this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
            },
            _keydown: function(b) {
                function d(a) {
                    return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,
                        "\\$&")
                }
                var a, e, l, g, k = !0;
                switch (b.keyCode) {
                    case c.ui.keyCode.PAGE_UP:
                        this.previousPage(b);
                        break;
                    case c.ui.keyCode.PAGE_DOWN:
                        this.nextPage(b);
                        break;
                    case c.ui.keyCode.HOME:
                        this._move("first", "first", b);
                        break;
                    case c.ui.keyCode.END:
                        this._move("last", "last", b);
                        break;
                    case c.ui.keyCode.UP:
                        this.previous(b);
                        break;
                    case c.ui.keyCode.DOWN:
                        this.next(b);
                        break;
                    case c.ui.keyCode.LEFT:
                        this.collapse(b);
                        break;
                    case c.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(b);
                        break;
                    case c.ui.keyCode.ENTER:
                    case c.ui.keyCode.SPACE:
                        this._activate(b);
                        break;
                    case c.ui.keyCode.ESCAPE:
                        this.collapse(b);
                        break;
                    default:
                        k = !1, a = this.previousFilter || "", e = String.fromCharCode(b.keyCode), l = !1, clearTimeout(this.filterTimer), e === a ? l = !0 : e = a + e, g = RegExp("^" + d(e), "i"), a = this.activeMenu.children(".ui-menu-item").filter(function() {
                                return g.test(c(this).children("a").text())
                            }), a = l && a.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : a, a.length || (e = String.fromCharCode(b.keyCode), g = RegExp("^" + d(e), "i"), a = this.activeMenu.children(".ui-menu-item").filter(function() {
                                return g.test(c(this).children("a").text())
                            })),
                            a.length ? (this.focus(b, a), a.length > 1 ? (this.previousFilter = e, this.filterTimer = this._delay(function() {
                                delete this.previousFilter
                            }, 1E3)) : delete this.previousFilter) : delete this.previousFilter
                }
                k && b.preventDefault()
            },
            _activate: function(b) {
                this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(b) : this.select(b))
            },
            refresh: function() {
                var b, d = this.options.icons.submenu;
                b = this.element.find(this.options.menus);
                this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length);
                b.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function() {
                    var a = c(this),
                        b = a.prev("a"),
                        l = c("<span>").addClass("ui-menu-icon ui-icon " + d).data("ui-menu-submenu-carat", !0);
                    b.attr("aria-haspopup", "true").prepend(l);
                    a.attr("aria-labelledby", b.attr("id"))
                });
                b = b.add(this.element);
                b.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                    tabIndex: -1,
                    role: this._itemRole()
                });
                b.children(":not(.ui-menu-item)").each(function() {
                    var a = c(this);
                    /[^\-\u2014\u2013\s]/.test(a.text()) || a.addClass("ui-widget-content ui-menu-divider")
                });
                b.children(".ui-state-disabled").attr("aria-disabled", "true");
                this.active && !c.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function() {
                return {
                    menu: "menuitem",
                    listbox: "option"
                }[this.options.role]
            },
            _setOption: function(b, c) {
                b === "icons" && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(c.submenu);
                this._super(b, c)
            },
            focus: function(b, c) {
                var a;
                this.blur(b, b && b.type === "focus");
                this._scrollIntoView(c);
                this.active = c.first();
                a = this.active.children("a").addClass("ui-state-focus");
                this.options.role && this.element.attr("aria-activedescendant", a.attr("id"));
                this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");
                b && b.type === "keydown" ? this._close() : this.timer = this._delay(function() {
                    this._close()
                }, this.delay);
                a = c.children(".ui-menu");
                a.length && b && /^mouse/.test(b.type) &&
                    this._startOpening(a);
                this.activeMenu = c.parent();
                this._trigger("focus", b, {
                    item: c
                })
            },
            _scrollIntoView: function(b) {
                var d, a, e;
                this._hasScroll() && (d = parseFloat(c.css(this.activeMenu[0], "borderTopWidth")) || 0, a = parseFloat(c.css(this.activeMenu[0], "paddingTop")) || 0, d = b.offset().top - this.activeMenu.offset().top - d - a, a = this.activeMenu.scrollTop(), e = this.activeMenu.height(), b = b.height(), d < 0 ? this.activeMenu.scrollTop(a + d) : d + b > e && this.activeMenu.scrollTop(a + d - e + b))
            },
            blur: function(b, c) {
                c || clearTimeout(this.timer);
                if (this.active) this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", b, {
                    item: this.active
                })
            },
            _startOpening: function(b) {
                clearTimeout(this.timer);
                if (b.attr("aria-hidden") === "true") this.timer = this._delay(function() {
                    this._close();
                    this._open(b)
                }, this.delay)
            },
            _open: function(b) {
                var d = c.extend({
                    of: this.active
                }, this.options.position);
                clearTimeout(this.timer);
                this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden", "true");
                b.show().removeAttr("aria-hidden").attr("aria-expanded",
                    "true").position(d)
            },
            collapseAll: function(b, d) {
                clearTimeout(this.timer);
                this.timer = this._delay(function() {
                    var a = d ? this.element : c(b && b.target).closest(this.element.find(".ui-menu"));
                    if (!a.length) a = this.element;
                    this._close(a);
                    this.blur(b);
                    this.activeMenu = a
                }, this.delay)
            },
            _close: function(b) {
                b || (b = this.active ? this.active.parent() : this.element);
                b.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
            },
            collapse: function(b) {
                var c =
                    this.active && this.active.parent().closest(".ui-menu-item", this.element);
                c && c.length && (this._close(), this.focus(b, c))
            },
            expand: function(b) {
                var c = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
                c && c.length && (this._open(c.parent()), this._delay(function() {
                    this.focus(b, c)
                }))
            },
            next: function(b) {
                this._move("next", "first", b)
            },
            previous: function(b) {
                this._move("prev", "last", b)
            },
            isFirstItem: function() {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function() {
                return this.active &&
                    !this.active.nextAll(".ui-menu-item").length
            },
            _move: function(b, c, a) {
                var e;
                this.active && (e = b === "first" || b === "last" ? this.active[b === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[b + "All"](".ui-menu-item").eq(0));
                if (!e || !e.length || !this.active) e = this.activeMenu.children(".ui-menu-item")[c]();
                this.focus(a, e)
            },
            nextPage: function(b) {
                var d, a, e;
                if (this.active) {
                    if (!this.isLastItem()) this._hasScroll() ? (a = this.active.offset().top, e = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                        d =
                            c(this);
                        return d.offset().top - a - e < 0
                    }), this.focus(b, d)) : this.focus(b, this.activeMenu.children(".ui-menu-item")[!this.active ? "first" : "last"]())
                } else this.next(b)
            },
            previousPage: function(b) {
                var d, a, e;
                if (this.active) {
                    if (!this.isFirstItem()) this._hasScroll() ? (a = this.active.offset().top, e = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                        d = c(this);
                        return d.offset().top - a + e > 0
                    }), this.focus(b, d)) : this.focus(b, this.activeMenu.children(".ui-menu-item").first())
                } else this.next(b)
            },
            _hasScroll: function() {
                return this.element.outerHeight() <
                    this.element.prop("scrollHeight")
            },
            select: function(b) {
                this.active = this.active || c(b.target).closest(".ui-menu-item");
                var d = {
                    item: this.active
                };
                this.active.has(".ui-menu").length || this.collapseAll(b, !0);
                this._trigger("select", b, d)
            }
        })
    })(h);
    return h
});
define("Lang", ["Dojo"], function(h) {
    function c() {}

    function b(a, b) {
        if (console.log.apply) try {
            console.log.apply(a, b)
        } catch (c) {
            if (c instanceof TypeError) console.log(b);
            else throw c;
        } else console.log(b)
    }
    c.prototype = {};
    c.prototype.log = function() {
        if (window.console) {
            var a = Array.prototype.slice.call(arguments);
            b(this, a)
        }
    };
    c.prototype.assert = function(a, e) {
        if (!a && window.console) {
            var c = Array.prototype.slice.call(arguments);
            c[0] = ["ERROR"];
            b(this, c);
            console.trace();
            throw "ERROR";
        }
    };
    c.prototype.exception = function(a) {
        console &&
            console.exception ? console.exception(a) : console && console.error && console.error(a)
    };
    c.prototype.isString = h.isString;
    c.prototype.isArray = h.isArray;
    c.prototype.isFunction = h.isFunction;
    c.prototype.isObject = h.isObject;
    c.prototype.isObjectLiteral = function(a) {
        return Object.prototype.toString.call(a) === "[object Object]"
    };
    c.prototype.isNumber = function(a) {
        return !isNaN(a)
    };
    c.prototype.isBoolean = function(a) {
        return !0 === a || !1 === a
    };
    c.prototype.parseBoolean = function(a) {
        c.prototype.assert(c.prototype.isString(a), "trying to parse boolean of non string!");
        switch (a.toLowerCase()) {
            case "0":
            case "":
            case "false":
                return !1;
            default:
                return !0
        }
    };
    c.prototype.trim = h.trim;
    c.prototype.hitch = h.hitch;
    c.prototype.sleepUntil = function(a, b, c) {
        var d = this;
        d.assert(d.isFunction(a), "Callback must be a function");
        d.assert(b === void 0 || d.isNumber(b));
        d.assert(c === void 0 || d.isNumber(c));
        var k = b === void 0 ? 50 : b,
            b = c === void 0 ? null : c;
        if (a() === !0) return !0;
        else if (b === 0) return !1;
        else {
            var f = b === null ? null : Math.max(b - k, 0);
            setTimeout(function() {
                d.sleepUntil(a, k, f)
            }, k)
        }
    };
    var d = require.execCb;
    require.execCb = function(a, b, l, g) {
        b = d(a, b, l, g);
        if (c.prototype.isFunction(b) && (b.prototype.constructor = b, b.prototype.moduleName = a, l = a.lastIndexOf("/"), l === -1 ? (b.prototype.packageName = "", b.prototype.className = a) : (b.prototype.packageName = a.substring(0, l), b.prototype.className = a.substring(l + 1)), window.jstestdriver === void 0 && b.prototype.toString === Object.prototype.toString)) b.prototype.toString = function() {
            return this.className
        };
        return b
    };
    return c
});
(function() {
    define("css", {
        load: function(h, c, b) {
            if (c.isBrowser) h = c.nameToUrl(h, ".css"), c = document.createElement("link"), c.type = "text/css", c.rel = "stylesheet", c.href = h, require.s.head.appendChild(c);
            b()
        }
    })
})();
define("util/ArrayUtil", ["Lang", "Dojo"], function(h, c) {
    function b() {}
    var d = new h;
    b.prototype.indexOf = c.indexOf;
    b.prototype.lastIndexOf = c.lastIndexOf;
    b.prototype.filter = c.filter;
    b.prototype.forEach = c.forEach;
    b.prototype.map = c.map;
    b.prototype.some = c.some;
    b.prototype.every = c.every;
    b.prototype.remove = function(a, b) {
        d.assert(a instanceof Array);
        d.assert(b !== void 0 && b !== null);
        var c = this.indexOf(a, b);
        if (c === -1) return null;
        a.splice(c, 1)
    };
    b.prototype.add = function(a, b, c) {
        d.assert(a instanceof Array);
        d.assert(d.isNumber(b));
        d.assert(b >= 0 && b <= a.length);
        d.assert(c !== void 0 && c !== null);
        a.splice(b, 0, c)
    };
    b.prototype.lastOf = function(a) {
        return a.slice(-1)[0]
    };
    b.prototype.addAll = function(a, b) {
        d.assert(d.isArray(a));
        d.assert(d.isArray(b));
        for (var c = 0; c < b.length; c++) a.push(b[c])
    };
    b.prototype.copy = function(a) {
        d.assert(d.isArray(a));
        return a.slice(0)
    };
    b.prototype.contains = function(a, b) {
        d.assert(d.isArray(a));
        if (!a.indexOf) {
            for (i in a)
                if (a[i] === b) return !0;
            return !1
        }
        return a.indexOf(b) !== -1
    };
    return b
});
define("data/constraint/Constraint", ["Lang", "util/ArrayUtil"], function(h, c) {
    function b(a) {
        if (arguments.length !== 0) this.m_schema_paths = d.copy(a)
    }
    new h;
    var d = new c;
    b.prototype.getSchemaPaths = function() {
        return d.copy(this.m_schema_paths)
    };
    return b
});
define("data/constraint/LocalPrimaryKeyConstraint", ["Lang", "util/ArrayUtil", "data/constraint/Constraint"], function(h, c, b) {
    function d(c, d) {
        var g = [c];
        a.addAll(g, d);
        b.call(this, g);
        this.m_schema_path = c;
        this.m_schema_paths = a.copy(d)
    }
    new h;
    var a = new c;
    d.prototype = new b;
    d.prototype.getCollectionSchemaPath = function() {
        return this.m_schema_path
    };
    d.prototype.getAttributeSchemaPaths = function() {
        return a.copy(this.m_schema_paths)
    };
    return d
});
define("data_new/Path", ["Lang", "util/ArrayUtil"], function(h, c) {
    function b(a) {
        if (arguments.length !== 0) d.assert(d.isString(a)), this.m_string = a, this.m_parts = a.match(e), d.assert(this.m_parts !== null, 'Unable to parse path "' + a + '"'), d.assert(this.m_parts.join("").length === a.length, 'Invalid characters in path "' + a + '"'), d.assert(a.lastIndexOf("^", 0) === 0, 'Expected ^ at start of path "' + a + '"'), d.assert(a.match(/\^/g).length === 1, 'Expected exactly one ^ in path "' + a + '"')
    }
    var d = new h,
        a = new c,
        e = /\^|\.\w+|\[\d+\]|#[^#]+#/g;
    b.prototype.toString = function() {
        return this.m_string
    };
    b.prototype.getString = function() {
        return this.m_string
    };
    b.prototype.getParts = function() {
        return this.m_parts
    };
    b.prototype.getLength = function() {
        return this.m_parts.length
    };
    b.prototype.isPrefix = function(c) {
        d.assert(c instanceof b);
        var e = c.getParts();
        return this.m_parts.length > e.length ? !1 : a.every(this.m_parts, function(a, b) {
            return a === e[b]
        }, this)
    };
    b.prototype.getLastPart = function() {
        return this.m_parts.length === 0 ? null : this.m_parts.slice(-1)[0]
    };
    b.prototype.concat =
        function(a) {
            d.assert(d.isString(a));
            return this.newPath(this.m_string + a)
        };
    b.prototype.concatAttribute = function(a) {
        d.assert(d.isString(a));
        return this.newPath(this.m_string + "." + a)
    };
    b.prototype.concatKey = function(a) {
        d.assert(d.isString(a) || d.isNumber(a));
        return this.newPath(this.m_string + "#" + a + "#")
    };
    b.prototype.concatIndex = function(a) {
        d.assert(d.isString(a) || d.isNumber(a));
        return this.newPath(this.m_string + "[" + a + "]")
    };
    return b
});
define("remote/RemoteUtil", ["Lang", "util/ArrayUtil"], function(h, c) {
    new h;
    new c;
    var b = {},
        d = RegExp("\\[[^\\]]+\\]", "g");
    b.getUnitConfigId = function(a) {
        return a.replace(d, "")
    };
    return b
});
define("tree/TreeNode", ["Lang", "util/ArrayUtil"], function(h, c) {
    function b() {
        this.m_parent = null;
        this.m_children = [];
        this.m_edge_label = null;
        this.m_hash_code = "t" + e;
        e++
    }
    var d = new h,
        a = new c,
        e = 0;
    b.prototype.getParent = function() {
        return this.m_parent
    };
    b.prototype.getChildren = function() {
        return this.m_children
    };
    b.prototype.addChild = function(a) {
        d.assert(a instanceof b);
        d.assert(a.getParent() === null);
        this.m_children.push(a);
        a.m_parent = this
    };
    b.prototype.removeChild = function(c) {
        d.assert(c instanceof b);
        d.assert(c.getParent() ===
            this);
        a.remove(this.m_children, c);
        c.m_parent = null
    };
    b.prototype.getRoot = function() {
        return this.m_parent === null ? this : this.m_parent.getRoot()
    };
    b.prototype.size = function() {
        return this.m_children.length
    };
    b.prototype.hasParent = function() {
        return this.m_parent !== null
    };
    b.prototype.hasAncestor = function(a) {
        d.assert(a instanceof b);
        return this.m_parent === null ? !1 : this.m_parent === a ? !0 : this.m_parent.hasAncestor(a)
    };
    b.prototype.hasChildren = function() {
        return this.m_children.length !== 0
    };
    b.prototype.getDescendants =
        function(b) {
            var c = [];
            a.forEach(this.m_children, function(e) {
                e instanceof b && c.push(e);
                e = e.getDescendants(b);
                a.addAll(c, e)
            });
            return c
        };
    b.prototype.isEmpty = function() {
        return this.m_children.length === 0
    };
    b.prototype.hashCode = function() {
        return this.m_hash_code
    };
    b.prototype.getEdgeLabel = function() {
        return this.m_edge_label
    };
    b.prototype.setEdgeLabel = function(a) {
        this.m_edge_label = a
    };
    return b
});
define("unit/UnitDiff", ["Lang", "util/ArrayUtil"], function(h, c) {
    function b(a, b, c) {
        if (arguments.length !== 0) d.assert(d.isString(a)), d.assert(d.isString(b)), d.assert(c === null || d.isString(c)), this.m_unit_instance_id = a, this.m_target_method = b, this.m_child_unit_instance_id = c
    }
    var d = new h;
    new c;
    b.prototype.getUnitInstanceId = function() {
        return this.m_unit_instance_id
    };
    b.prototype.getTargetMethod = function() {
        return this.m_target_method
    };
    b.prototype.getChildUnitInstanceId = function() {
        return this.m_child_unit_instance_id
    };
    return b
});
define("unit/UnitCompositeDiff", ["Lang", "util/ArrayUtil", "unit/UnitDiff"], function(h, c, b) {
    function d(a, c, d, g, k) {
        b.call(this, a, c, d);
        this.m_relative_context = g;
        this.m_payload = k
    }
    new h;
    new c;
    d.prototype = new b;
    d.prototype.getRelativeContext = function() {
        return this.m_relative_context
    };
    d.prototype.getPayload = function() {
        return this.m_payload
    };
    return d
});
define("unit/UnitJsonDiff", ["Lang", "util/ArrayUtil", "unit/UnitDiff"], function(h, c, b) {
    function d(a, c, d, g, k) {
        b.call(this, a, c, d);
        this.m_relative_context = g;
        this.m_payload = k
    }
    new h;
    new c;
    d.prototype = new b;
    d.prototype.getRelativeContext = function() {
        return this.m_relative_context
    };
    d.prototype.getPayload = function() {
        return this.m_payload
    };
    return d
});
define("unit/UnitXhtmlDiff", ["Lang", "util/ArrayUtil", "unit/UnitDiff"], function(h, c, b) {
    function d(c, d, g, k, f) {
        a.assert(a.isString(k));
        a.assert(a.isString(f));
        b.call(this, c, d, g);
        this.m_relative_context = k;
        this.m_payload = f
    }
    var a = new h;
    new c;
    d.prototype = new b;
    d.prototype.getRelativeContext = function() {
        return this.m_relative_context
    };
    d.prototype.getPayload = function() {
        return this.m_payload
    };
    return d
});
define("unit_new/UnitDiff", ["Lang", "util/ArrayUtil"], function(h, c) {
    function b(a, b, c, g) {
        if (arguments.length !== 0) d.assert(d.isString(a)), d.assert(d.isString(b)), d.assert(d.isString(c)), d.assert(g === null || d.isString(g)), this.m_id = a, this.m_callback = b, this.m_op = c, this.m_child_id = g
    }
    var d = new h;
    new c;
    b.prototype.getId = function() {
        return this.m_id
    };
    b.prototype.getCallback = function() {
        return this.m_callback
    };
    b.prototype.getOp = function() {
        return this.m_op
    };
    b.prototype.getChildId = function() {
        return this.m_child_id
    };
    return b
});
var Hashtable = function() {
    function h(a) {
        if (typeof a == "string") return a;
        else if (typeof a.hashCode == f) return a = a.hashCode(), typeof a == "string" ? a : h(a);
        else if (typeof a.toString == f) return a.toString();
        else try {
            return String(a)
        } catch (b) {
            return Object.prototype.toString.call(a)
        }
    }

    function c(a, b) {
        return a.equals(b)
    }

    function b(a, b) {
        return typeof b.equals == f ? b.equals(a) : a === b
    }

    function d(a) {
        return function(b) {
            if (b === null) throw Error("null is not a valid " + a);
            else if (typeof b == "undefined") throw Error(a + " must not be undefined");
        }
    }

    function a(a, b, c, e) {
        this[0] = a;
        this.entries = [];
        this.addEntry(b, c);
        if (e !== null) this.getEqualityFunction = function() {
            return e
        }
    }

    function e(a) {
        return function(b) {
            for (var c = this.entries.length, e, d = this.getEqualityFunction(b); c--;)
                if (e = this.entries[c], d(b, e[0])) switch (a) {
                    case u:
                        return !0;
                    case o:
                        return e;
                    case r:
                        return [c, e[1]]
                }
                return !1
        }
    }

    function l(a) {
        return function(b) {
            for (var c = b.length, e = 0, d = this.entries.length; e < d; ++e) b[c + e] = this.entries[e][a]
        }
    }

    function g(b, c) {
        var e = b[c];
        return e && e instanceof a ? e : null
    }

    function k(b, c) {
        var e = this,
            d = [],
            l = {},
            o = typeof b == f ? b : h,
            x = typeof c == f ? c : null;
        this.put = function(b, c) {
            m(b);
            q(c);
            var e = o(b),
                f, k = null;
            (f = g(l, e)) ? (e = f.getEntryForKey(b)) ? (k = e[1], e[1] = c) : f.addEntry(b, c): (f = new a(e, b, c, x), d[d.length] = f, l[e] = f);
            return k
        };
        this.get = function(a) {
            m(a);
            var b = o(a);
            if (b = g(l, b))
                if (a = b.getEntryForKey(a)) return a[1];
            return null
        };
        this.containsKey = function(a) {
            m(a);
            var b = o(a);
            return (b = g(l, b)) ? b.containsKey(a) : !1
        };
        this.containsValue = function(a) {
            q(a);
            for (var b = d.length; b--;)
                if (d[b].containsValue(a)) return !0;
            return !1
        };
        this.clear = function() {
            d.length = 0;
            l = {}
        };
        this.isEmpty = function() {
            return !d.length
        };
        var r = function(a) {
            return function() {
                for (var b = [], c = d.length; c--;) d[c][a](b);
                return b
            }
        };
        this.keys = r("keys");
        this.values = r("values");
        this.entries = r("getEntries");
        this.remove = function(a) {
            m(a);
            var b = o(a),
                c = null,
                e = g(l, b);
            if (e && (c = e.removeEntryForKey(a), c !== null && !e.entries.length)) {
                a: {
                    for (a = d.length; a--;)
                        if (e = d[a], b === e[0]) break a;a = null
                }
                n(d, a);delete l[b]
            }
            return c
        };
        this.size = function() {
            for (var a = 0, b = d.length; b--;) a +=
                d[b].entries.length;
            return a
        };
        this.each = function(a) {
            for (var b = e.entries(), c = b.length, d; c--;) d = b[c], a(d[0], d[1])
        };
        this.putAll = function(a, b) {
            for (var c = a.entries(), d, g, k, l = c.length, n = typeof b == f; l--;) {
                d = c[l];
                g = d[0];
                d = d[1];
                if (n && (k = e.get(g))) d = b(g, k, d);
                e.put(g, d)
            }
        };
        this.clone = function() {
            var a = new k(b, c);
            a.putAll(e);
            return a
        }
    }
    var f = "function",
        n = typeof Array.prototype.splice == f ? function(a, b) {
            a.splice(b, 1)
        } : function(a, b) {
            var c, e, d;
            if (b === a.length - 1) a.length = b;
            else {
                c = a.slice(b + 1);
                a.length = b;
                for (e = 0, d = c.length; e <
                    d; ++e) a[b + e] = c[e]
            }
        },
        m = d("key"),
        q = d("value"),
        u = 0,
        o = 1,
        r = 2;
    a.prototype = {
        getEqualityFunction: function(a) {
            return typeof a.equals == f ? c : b
        },
        getEntryForKey: e(o),
        getEntryAndIndexForKey: e(r),
        removeEntryForKey: function(a) {
            return (a = this.getEntryAndIndexForKey(a)) ? (n(this.entries, a[0]), a[1]) : null
        },
        addEntry: function(a, b) {
            this.entries.push([a, b])
        },
        keys: l(0),
        values: l(1),
        getEntries: function(a) {
            for (var b = a.length, c = 0, e = this.entries.length; c < e; ++c) a[b + c] = this.entries[c].slice(0)
        },
        containsKey: e(u),
        containsValue: function(a) {
            for (var b =
                    this.entries.length; b--;)
                if (a === this.entries[b][1]) return !0;
            return !1
        }
    };
    return k
}();
define("util/collection/jshashtable-2.1", function() {});
define("util/collection/HashTable", ["util/collection/jshashtable-2.1"], function() {
    return Hashtable
});
define("util/collection/IdentityMultiMap", ["Lang", "util/ArrayUtil", "util/collection/HashTable"], function(h, c, b) {
    function d(a) {
        a.m_left_to_right = new b;
        a.m_right_to_left = new b;
        a.m_length = 0
    }

    function a() {
        d(this)
    }
    var e = new h,
        l = new c;
    a.prototype.getRight = function(a) {
        e.assert(a !== void 0);
        var b = [];
        this.hasLeft(a) && (b = this.m_left_to_right.get(a));
        return b.slice(0)
    };
    a.prototype.getLeft = function(a) {
        e.assert(a !== void 0);
        var b = [];
        this.hasRight(a) && (b = this.m_right_to_left.get(a));
        return b.slice(0)
    };
    a.prototype.has =
        function(a, b) {
            e.assert(a !== void 0);
            e.assert(b !== void 0);
            return this.hasLeft(a) && this.hasRight(b)
        };
    a.prototype.hasLeft = function(a) {
        e.assert(a !== void 0);
        return this.m_left_to_right.get(a) !== null
    };
    a.prototype.hasRight = function(a) {
        e.assert(a !== void 0);
        return this.m_right_to_left.get(a) !== null
    };
    a.prototype.put = function(a, b) {
        e.assert(a !== void 0);
        e.assert(b !== void 0);
        if (this.has(a, b)) return !1;
        var c = [];
        this.hasLeft(a) ? c = this.m_left_to_right.get(a) : this.m_left_to_right.put(a, c);
        c.push(b);
        c = [];
        this.hasRight(b) ?
            c = this.m_right_to_left.get(b) : this.m_right_to_left.put(b, c);
        c.push(a);
        this.m_length++;
        return !0
    };
    a.prototype.remove = function(a, b) {
        e.assert(a !== void 0);
        e.assert(b !== void 0);
        if (!this.has(a, b)) return !1;
        if (this.hasLeft(a)) {
            var c = this.m_left_to_right.get(a);
            l.remove(c, b);
            c.length === 0 && this.m_left_to_right.remove(a)
        }
        this.hasRight(b) && (c = this.m_right_to_left.get(b), l.remove(c, a), c.length === 0 && this.m_right_to_left.remove(b));
        this.m_length--;
        return !0
    };
    a.prototype.removeByLeft = function(a) {
        e.assert(a !== void 0);
        if (!this.hasLeft(a)) return !1;
        var b = this.m_left_to_right.get(a);
        l.forEach(b, function(b) {
            this.remove(a, b)
        });
        this.m_left_to_right.remove(a);
        return !0
    };
    a.prototype.removeByRight = function(a) {
        e.assert(a !== void 0);
        if (!this.hasRight(a)) return !1;
        var b = this.m_right_to_left.get(a);
        l.forEach(b, function(b) {
            this.remove(b, a)
        });
        this.m_right_to_left.remove(a);
        return !0
    };
    a.prototype.clear = function() {
        d(this)
    };
    a.prototype.size = function() {
        return this.m_length
    };
    a.prototype.compose = function(b) {
        e.assert(b instanceof a);
        var c =
            this,
            d = new a;
        l.forEach(c.m_left_to_right.keys(), function(a) {
            l.forEach(c.m_left_to_right.get(a), function(c) {
                c = b.getRight(c);
                l.forEach(c, function(b) {
                    d.put(a, b)
                })
            })
        });
        return d
    };
    return a
});
define("util/collection/PriorityQueue", ["Lang"], function(h) {
    function c() {
        this.m_queue = []
    }

    function b(b, a) {
        var c, l, g;
        l = 0;
        for (c = b.length; l < c;) g = l + c >>> 1, a.key - b[g].key >= 0 ? l = g + 1 : c = g;
        return l
    }
    new h;
    c.prototype.enqueue = function(c, a) {
        var e = {
            key: c,
            value: a
        };
        this.m_queue.splice(b(this.m_queue, e), 0, e)
    };
    c.prototype.dequeue = function() {
        var b = this.m_queue.shift();
        if (b) return b.value
    };
    c.prototype.peek = function() {
        return this.m_queue[0] ? this.m_queue[0].value : void 0
    };
    c.prototype.peekKey = function() {
        return this.m_queue[0] ?
            this.m_queue[0].key : void 0
    };
    return c
});
define("util/EventUtil", ["Lang", "Dojo"], function(h, c) {
    function b() {}
    new h;
    b.prototype.connect = c.connect;
    b.prototype.disconnect = c.disconnect;
    return b
});
define("util/FeatureUtil", ["Lang", "Dojo", "Jquery"], function(h, c, b) {
    function d() {}
    new h;
    d.prototype.requiresNoScopeHandling = function() {
        if (d.requires_noscope_handling === void 0) {
            var a = document.createElement("div");
            b(a).html("<\!-- test --\><div>test</div>");
            d.requires_noscope_handling = a.childNodes.length == 1 ? !0 : !1
        }
        return d.requires_noscope_handling
    };
    d.prototype.hasCssTransform = function() {
        if (d.has_css_transform === void 0) {
            var a;
            a: {
                a = "Moz,Webkit,Khtml,O,ms,Ms".split(",");
                for (var b = 0; b < a.length; b++)
                    if (typeof document.body.style[a[b] +
                            "Transform"] != "undefined") {
                        a = !0;
                        break a
                    }
                a = !1
            }
            d.has_css_transform = a
        }
        return d.has_css_transform
    };
    return d
});
define("util/JsFunctionUtil", ["Lang"], function(h) {
    function c() {}
    new h;
    c.prototype.eval_function = function(b) {
        var c;
        if (window[b]) return c = window[b](), typeof c == "function" ? c : window[b];
        else try {
            c = eval(b)
        } finally {
            return c && typeof c == "function" ? c : (c = new Function("return " + b + ";"), c())
        }
    };
    return c
});
define("util/JsonUtil", ["Lang", "util/ArrayUtil"], function(h, c) {
    function b() {}
    var d = new h,
        a = new c;
    b.prototype.getAttribute = function(a, b) {
        return this.getWrapper(a)[0][b]
    };
    b.prototype.getTagName = function(a) {
        var b = [],
            c;
        for (c in a) b.push(c);
        d.assert(b.length === 1);
        return b[0]
    };
    b.prototype.getText = function(a) {
        return this.getWrapper(a)[1]
    };
    b.prototype.getChildren = function(a) {
        a = this.getWrapper(a)[1];
        return a !== void 0 ? a : []
    };
    b.prototype.getChild = function(b, c) {
        var d = null,
            k = this,
            f = this.getChildren(b);
        a.some(f,
            function(a) {
                return k.getTagName(a) === c ? (d = a, !0) : !1
            });
        return d
    };
    b.prototype.getWrapper = function(a) {
        var b = this.getTagName(a);
        return a[b]
    };
    return b
});
define("util/NameGenerator", [], function() {
    function h() {
        this.m_id = 0
    }
    h.__INSTANCE = new h;
    h.getInstance = function() {
        return h.__INSTANCE
    };
    h.prototype.getNewId = function() {
        return this.m_id++ + ""
    };
    return h
});
define("util/DomUtil", "Lang,Dojo,Jquery,util/ArrayUtil,util/FeatureUtil,util/NameGenerator,DynamicLoader".split(","), function(h, c, b, d, a, e, l) {
    function g() {}

    function k(a, b, c) {
        a.call(function(a) {
            var c = a.noop(),
                e, d = function() {
                    b() ? e() : c()
                };
            e = function() {
                setTimeout(d, 100)
            };
            e()
        });
        a.call(function() {
            c()
        })
    }

    function f(a, b, c) {
        u.assert(r.isDocument(a));
        u.assert(r.isNode(b));
        u.assert(u.isBoolean(c));
        switch (b.nodeType) {
            case g.prototype.ELEMENT_NODE:
                u.assert(b.nodeName !== "title" && b.nodeName !== "meta");
                u.assert(b.nodeName !==
                    "tr" && b.nodeName !== "td");
                var e = null,
                    e = b.nodeName === "option" ? a.createElement("select") : a.createElement("div");
                e.innerHTML = c ? b.xml ? b.xml : b.outerHTML : b.xml ? b.cloneNode(!1).xml : b.cloneNode(!1).outerHTML;
                a = e.getElementsByTagName("*");
                u.assert(a.length > 0);
                return a[0];
            case g.prototype.TEXT_NODE:
                return m(a, b)
        }
    }

    function n(a, b, c, e) {
        switch (b.nodeType) {
            case g.prototype.ELEMENT_NODE:
                if ((b.nodeName === "button" || b.nodeName === "input") && (b.xml !== void 0 || b.outerHTML !== void 0)) return f(a, b, c);
                else {
                    var d = a.createElement(b.nodeName);
                    b.nodeName.toLowerCase();
                    o.forEach(b.attributes, function(a) {
                        var c = a.nodeName,
                            f = g.prototype.attr(b, c);
                        if (!(f === null || f === void 0) && g.prototype.attr(d, c) !== f)
                            if (g.prototype.attr(d, c, f), f = g.prototype.attr(b, a.nodeName), c = g.prototype.attr(d, c), f !== c && e) {
                                var c = g.prototype.attr(d, "__fid") || w.getNewId(),
                                    k = e[c] || {};
                                k[a.nodeName] = f;
                                g.prototype.attr(d, "__fid", c);
                                e[c] = k
                            }
                    });
                    var k = d;
                    if (b.nodeName.toLowerCase() === "table") {
                        var l = function(a) {
                            return o.some(a.childNodes, function(a) {
                                return a.nodeName.toLowerCase() ===
                                    "placeholder" ? l(a) : r.isElement(a) && a.nodeName.toLowerCase() === "tbody"
                            })
                        };
                        l(b) || (k = a.createElement("tbody"), d.appendChild(k))
                    }
                    c === !0 && b.nodeName.toLowerCase() !== "iframe" && o.forEach(b.childNodes, function(b) {
                        b = n(a, b, c, e);
                        k.appendChild(b)
                    });
                    return d
                }
            case g.prototype.TEXT_NODE:
                return m(a, b);
            case g.prototype.COMMENT_NODE:
                return a.createComment(b.nodeValue)
        }
    }

    function m(a, b) {
        u.assert(b.nodeType === g.prototype.TEXT_NODE);
        if (dojo.isIE !== void 0 && dojo.isIE < 8) {
            var c = a.createElement("p");
            c.innerHTML = b.nodeValue;
            u.assert(c.childNodes.length === 1);
            var e = c.childNodes[0];
            c.removeChild(e);
            return e
        } else return a.createTextNode(b.nodeValue)
    }

    function q() {
        if (q.cloneNode === void 0) {
            var a = window.document.createElement("placeholder").cloneNode(!0),
                b = window.document.createElement("div");
            b.appendChild(a);
            q.cloneNode = b.innerHTML.indexOf(":") > -1 ? function(a, b, c) {
                return n(a.ownerDocument, a, b, c)
            } : function(a, b) {
                return a.cloneNode(b)
            }
        }
        return q.cloneNode
    }
    var u = new h,
        o = new d,
        r = new g,
        v = new a,
        w = e.getInstance(),
        A = new l;
    g.PREPARE_HTML = !1;
    g.prototype.ELEMENT_NODE = 1;
    g.prototype.ATTRIBUTE_NODE = 2;
    g.prototype.TEXT_NODE = 3;
    g.prototype.CDATA_SECTION_NODE = 4;
    g.prototype.ENTITY_REFERENCE_NODE = 5;
    g.prototype.ENTITY_NODE = 6;
    g.prototype.PROCESSING_INSTRUCTION_NODE = 7;
    g.prototype.COMMENT_NODE = 8;
    g.prototype.DOCUMENT_NODE = 9;
    g.prototype.DOCUMENT_TYPE_NODE = 10;
    g.prototype.DOCUMENT_FRAGMENT_NODE = 11;
    g.prototype.NOTATION_NODE = 12;
    g.prototype.BOOLEANS = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped";
    g.prototype.destroy = c.destroy;
    g.prototype.create = function(a, b, e, d) {
        return c.create(a, b, e, d)
    };
    g.prototype.place = function(a, b, e) {
        return c.place(a, b, e)
    };
    g.prototype.removeAttr = function(a, c) {
        var e = c.toLowerCase().match(RegExp("^(?:" + g.prototype.BOOLEANS + ")$"));
        b.isXMLDoc(a) || !b.isXMLDoc(a) && !e ? b(a).removeAttr(c) : b(a).prop(c, !1)
    };
    g.prototype.val = function(a, c) {
        if (arguments.length === 1) return b(a).val();
        u.assert(arguments.length === 2);
        return b(a).val(c)
    };
    g.prototype.addClass = c.addClass;
    g.prototype.removeClass =
        c.removeClass;
    g.prototype.trimText = b.trim;
    g.prototype.getChildElements = function(a) {
        u.assert(this.isElement(a));
        var b = [];
        o.forEach(a.childNodes, function(a) {
            a.nodeType === r.ELEMENT_NODE && b.push(a)
        });
        return b
    };
    g.prototype.getChildElementsByTagName = function(a, b) {
        u.assert(this.isElement(a));
        u.assert(u.isString(b));
        var b = b.toLowerCase(),
            c = [];
        o.forEach(a.childNodes, function(a) {
            a.nodeType === r.ELEMENT_NODE && a.nodeName.toLowerCase() === b && c.push(a)
        });
        return c
    };
    g.prototype.getRootElementByTagName = function(a, b) {
        u.assert(r.isDocument(a));
        var c = null,
            b = b.toLowerCase();
        o.forEach(a.childNodes, function(a) {
            a.nodeType === r.ELEMENT_NODE && a.nodeName.toLowerCase() === b && (u.assert(c === null), c = a)
        });
        return c
    };
    g.prototype.isHtmlElement = function(a) {
        u.assert(r.isElement(a));
        return a.nodeName.toLowerCase() === "html"
    };
    g.prototype.getChildNodes = function(a) {
        u.assert(this.isElement(a));
        for (var b = [], a = a.childNodes, c = 0; c < a.length; c++) b.push(a[c]);
        return b
    };
    g.prototype.style = function(a, b, e) {
        var d, f, k;
        u.assert(1 < arguments.length);
        if (!(b === "" || b === null)) return u.isString(b) &&
            void 0 === e ? (f = b.split(";"), o.forEach(f, function(a) {
                d = a.split(":");
                2 === d.length && (k = k || {}, k[u.trim(d[0])] = u.trim(d[1]))
            }), c.style(a, k || b)) : c.style(a, b, e)
    };
    g.prototype.parseTextToXml = function(a) {
        var b;
        if (window.DOMParser !== void 0) b = (new DOMParser).parseFromString(a, "text/xml");
        else {
            var e = function(a) {
                    return "MSXML" + a + ".DOMDocument"
                },
                e = ["Microsoft.XMLDOM", e(6), e(4), e(3), e(2)];
            c.some(e, function(c) {
                try {
                    var e = new ActiveXObject(c);
                    e.async = !1;
                    e.loadXML(a);
                    b = e
                } catch (d) {
                    return !1
                }
                return !0
            })
        }
        return b
    };
    g.prototype.importAndAppendChildNodes =
        function(a, c, e) {
            u.assert(g.prototype.isNode(a));
            u.assert(g.prototype.isNode(c));
            g.prototype.query("script[src]", a);
            var d = [];
            b("script[src]", a).each(function(a, c) {
                var e = b(c).attr("src");
                b(c).removeAttr("src");
                d.push("order!" + e)
            });
            A.loadScripts(d);
            var f = [];
            o.forEach(a.childNodes, function(a) {
                a = g.prototype.importNode(c.ownerDocument, a, !0, e);
                c.appendChild(a);
                f.push(a)
            });
            return f
        };
    g.prototype.importNode = function(a, b, c, e) {
        return n(a, b, c, e)
    };
    g.prototype.textContent = function(a) {
        return a.childNodes.length ===
            1 && "data" in a.firstChild ? a.firstChild.data : a.nodeType === this.ELEMENT_NODE && "text" in a ? a.text : a.textContent !== void 0 ? a.textContent : a.innerHTML
    };
    g.prototype.isNode = function(a) {
        try {
            if (window.Node && a instanceof Node) return !0
        } catch (b) {}
        return a === document ? !0 : typeof a.nodeType === "number" && a.attributes !== void 0 && a.childNodes !== void 0
    };
    g.prototype.isElement = function(a) {
        return a.nodeType !== void 0 && a.nodeType === this.ELEMENT_NODE ? !0 : window.Element !== void 0 && a instanceof Element ? !0 : !1
    };
    g.prototype.isText = function(a) {
        return window.Text !==
            void 0 ? a instanceof Text : a.nodeType !== void 0 ? a.nodeType === this.TEXT_NODE : !1
    };
    g.prototype.isDocument = function(a) {
        return window.Document !== void 0 && a instanceof Document ? !0 : a.nodeType !== void 0 ? a.nodeType === this.DOCUMENT_NODE : !1
    };
    g.prototype.isDocumentFragment = function(a) {
        return window.DocumentFragment !== void 0 ? a instanceof DocumentFragment : a.nodeType !== void 0 ? a.nodeType === this.DOCUMENT_FRAGMENT_NODE : !1
    };
    g.prototype.isComment = function(a) {
        return a.nodeType === this.COMMENT_NODE
    };
    g.prototype.query = c.query;
    g.prototype.attr = function(a, e, d) {
        var f = b.isXMLDoc(a),
            k = !!e.toLowerCase().match(RegExp("^(?:" + g.prototype.BOOLEANS + ")$")),
            f = !f && k;
        return (e.toLowerCase() === "onmouseover" || e.toLowerCase() === "onclick") && d ? c.attr(a, e, d) : arguments.length === 2 ? f ? b(a).prop(e) : b(a).attr(e) : (u.assert(arguments.length === 3), d = f && k ? !!d : d, f ? b(a).prop(e, d) : b(a).attr(e, d))
    };
    g.prototype.document = function() {
        return c.doc
    };
    g.prototype.withDoc = c.withDoc;
    g.prototype.sleep = function(a, b, c) {
        u.assert(a !== void 0);
        u.assert(b !== void 0);
        u.assert(c !==
            void 0);
        window.jstestdriver ? k(a, b, c) : a.entries.push({
            condition: b,
            callback: c
        })
    };
    g.prototype.isAllWhiteSpace = function(a) {
        return !/[^\t\n\r ]/.test(a.data)
    };
    g.prototype.isIgnorable = function(a) {
        return a.nodeType == 8 || a.nodeType == 3 && this.isAllWhiteSpace(a)
    };
    g.prototype.getText = function(a) {
        return a.textContent ? a.textContent : a.innerText ? a.innerText : a.innerHTML ? a.innerHTML : a.data
    };
    g.prototype.replaceText = function(a, b, c, e) {
        a.replaceData !== void 0 ? (c = c ? c : 0, e = e ? e : this.getText(a).length, a.replaceData(c, e, b)) : a.textContent =
            b
    };
    g.prototype.createRootElement = function(a, b) {
        u.assert(this.isDocument(a));
        u.assert(!a.hasChildNodes());
        u.assert(u.isString(b));
        var c = a.createElement(b);
        a.appendChild(c);
        return c
    };
    g.prototype.createChildElement = function(a, b) {
        u.assert(this.isElement(a));
        u.assert(u.isString(b));
        var c = a.ownerDocument.createElement(b);
        a.appendChild(c);
        return c
    };
    g.prototype.createTextNode = function(a, b) {
        u.assert(this.isElement(a));
        u.assert(u.isString(b));
        var c = a.ownerDocument.createTextNode(b);
        a.appendChild(c);
        return c
    };
    g.prototype.newDocument = function() {
        return document.implementation !== void 0 && document.implementation.createDocument !== void 0 ? document.implementation.createDocument(null, null, null) : new ActiveXObject("Microsoft.XMLDOM")
    };
    g.prototype.serialize = function(a) {
        u.assert(this.isDocument(a));
        return this.serializeXmlToText(a)
    };
    g.prototype.serializeXmlToText = function(a) {
        if (window.XMLSerializer !== void 0) try {
            return (new XMLSerializer).serializeToString(a)
        } catch (b) {
            return a.xml
        } else return a.xml
    };
    g.prototype.cloneNode =
        function(a, b) {
            return q()(a, b)
        };
    g.prototype.html = function(a, c) {
        if (g.PREPARE_HTML)
            if (v.requiresNoScopeHandling() === !1) b(a).html(c);
            else {
                b(a).html("<div>test</div>" + c);
                var e = a.childNodes[0];
                u.assert(e.tagName.toLowerCase() === "div");
                u.assert(b(e).text() === "test");
                a.removeChild(e)
            }
        else b(a).html(c)
    };
    g.prototype.replaceNode = function(a, b) {
        u.assert(r.isNode(a));
        u.assert(r.isNode(b));
        a.parentNode.replaceChild(b, a)
    };
    g.prototype.getAttribute = function(a, b) {
        u.assert(r.isElement(a));
        u.assert(u.isString(b));
        if (a.hasAttribute !==
            void 0) return a.hasAttribute(b) === !0 ? a.getAttribute(b) : null;
        else {
            var c = a.getAttribute(b);
            return c === void 0 || c === null ? null : c
        }
    };
    return g
});
define("remote/UnitJsonDiffJsonParser", ["Lang", "util/ArrayUtil", "util/DomUtil", "unit/UnitJsonDiff"], function(h, c, b, d) {
    var a = new h;
    new c;
    new b;
    return {
        parse: function(b) {
            a.assert(a.isArray(b));
            var c = b[0];
            a.assert(c.charAt(0) === "/", "Unit instance id must start with /");
            var g = b[1];
            a.assert(g !== null, "target method must be the the second element.");
            var k = b[2],
                f = b[3];
            a.assert(f !== null, "The relative context must be specified as the third element.");
            a.assert(f.charAt(0) !== "/", "Context must not start with /");
            return new d(c, g, k, f, b[5])
        }
    }
});
define("remote/UnitXhtmlDiffJsonParser", ["Lang", "util/ArrayUtil", "util/DomUtil", "unit/UnitXhtmlDiff"], function(h, c, b, d) {
    var a = new h;
    new c;
    new b;
    return {
        parse: function(b) {
            a.assert(a.isArray(b));
            var c = b[0];
            a.assert(c.charAt(0) === "/", "Unit instance id must start with /");
            var g = b[1];
            a.assert(g !== null, "target method must be the the second element.");
            var k = b[2],
                f = b[3];
            a.assert(f !== null, "The relative context must be specified as the third element.");
            a.assert(f.charAt(0) !== "/", "Context must not start with /");
            return new d(c, g, k, f, b[5])
        }
    }
});
define("remote/UnitXhtmlDiffXmlParser", ["Lang", "util/ArrayUtil", "util/DomUtil", "unit/UnitXhtmlDiff"], function(h, c, b, d) {
    var a = new h,
        e = new c,
        l = new b;
    return {
        parse: function(b) {
            a.assert(l.isElement(b));
            a.assert(b.tagName === "unit_xhtml_diff");
            var c = l.getAttribute(b, "id");
            c === null && (c = "/");
            a.assert(c.charAt(0) === "/", "Unit instance id must start with /");
            var f = l.getAttribute(b, "target");
            a.assert(f !== null, '<unit_xhtml_diff> must have a "target" attribute');
            var n = l.getAttribute(b, "child_id"),
                m = l.getAttribute(b,
                    "context");
            a.assert(m !== null, '<unit_xhtml_diff> must have a "context" attribute');
            a.assert(m.charAt(0) !== "/", "Context must not start with /");
            var b = l.getChildElements(b),
                h = "";
            e.forEach(b, function(a) {
                a = l.serializeXmlToText(a);
                h += a
            });
            return new d(c, f, n, m, h)
        }
    }
});
define("util/Cloner", ["Lang", "Dojo", "util/DomUtil", "util/collection/HashTable"], function(h, c, b, d) {
    function a() {}

    function e(a) {
        for (var b in a) this[b] = a[b]
    }

    function l() {
        this.copiedObjects = new d;
        thisPass = this;
        this.recursiveDeepCopy = function(a) {
            return thisPass.deepCopy(a)
        };
        this.depth = 0
    }

    function g(a, b) {
        var c = new l;
        if (b) c.maxDepth = b;
        return c.deepCopy(a)
    }
    new h;
    var k = new b,
        f = [];
    e.prototype = {
        constructor: e,
        canCopy: function() {
            return !1
        },
        create: function() {},
        populate: function() {}
    };
    l.prototype = {
        constructor: l,
        maxDepth: 256,
        cacheResult: function(a, b) {
            this.copiedObjects.put(a, b)
        },
        getCachedResult: function(a) {
            a = this.copiedObjects.get(a);
            if (a !== null) return a
        },
        deepCopy: function(a) {
            if (a === null) return null;
            if (typeof a !== "object") return a;
            var b = this.getCachedResult(a);
            if (b) return b;
            for (b = 0; b < f.length; b++) {
                var c = f[b];
                if (c.canCopy(a)) return this.applyDeepCopier(c, a)
            }
            throw Error("no DeepCopier is able to copy " + a);
        },
        applyDeepCopier: function(a, b) {
            var c = a.create(b);
            this.cacheResult(b, c);
            this.depth++;
            if (this.depth > this.maxDepth) throw Error("Exceeded max recursion depth in deep copy.");
            a.populate(this.recursiveDeepCopy, b, c);
            this.depth--;
            return c
        }
    };
    g.DeepCopier = e;
    g.deepCopiers = f;
    g.register = function(a) {
        a instanceof e || (a = new e(a));
        f.unshift(a)
    };
    g.register({
        canCopy: function() {
            return !0
        },
        create: function(b) {
            if (b instanceof b.constructor) {
                if (b = b.constructor.prototype, typeof b == "object") a.prototype = b, b = new a
            } else b = {};
            return b
        },
        populate: function(a, b, c) {
            for (var e in b) b.hasOwnProperty(e) && (c[e] = a(b[e]));
            return c
        }
    });
    g.register({
        canCopy: function(a) {
            return a instanceof Array
        },
        create: function(a) {
            return new a.constructor
        },
        populate: function(a, b, c) {
            for (var e = 0; e < b.length; e++) c.push(a(b[e]));
            return c
        }
    });
    g.register({
        canCopy: function(a) {
            return a instanceof Date
        },
        create: function(a) {
            return new Date(a)
        }
    });
    g.register({
        canCopy: function(a) {
            return k.isNode(a)
        },
        create: function(a) {
            return a === document ? document : a.cloneNode(!1)
        },
        populate: function(a, b, c) {
            if (b === document) return document;
            if (b.childNodes && b.childNodes.length)
                for (var e = 0; e < b.childNodes.length; e++) {
                    var d = a(b.childNodes[e]);
                    c.appendChild(d)
                }
        }
    });
    Cloner = function() {};
    Cloner.prototype = {};
    Cloner.prototype.clone = g;
    return Cloner
});
define("util/EventManager", ["Lang", "util/DomUtil", "util/ArrayUtil"], function(h, c, b) {
    function d() {
        this.listeners = []
    }
    var a = new h,
        e = new b;
    d.prototype.newEvent = function(a, b) {
        this.eventName = a;
        this.eventAction = b;
        return this
    };
    d.prototype.subscribe = function(a) {
        this.listeners.push(a)
    };
    d.prototype.unsubscribe = function(a) {
        e.remove(this.listeners, a)
    };
    d.prototype.fire = function() {
        a.assert(this.eventAction != null);
        for (i = 0; i < this.listeners.length; i++) this.eventAction.apply(this.listeners[i], arguments)
    };
    return d
});
define("util/ObjectUtil", ["Lang"], function(h) {
    function c() {}
    new h;
    c.prototype.forEach = function(b, c, a) {
        for (var e in b) b.hasOwnProperty(e) && c.call(a, b[e], e, b)
    };
    return c
});
define("util/collection/StringHashMap", ["Lang", "util/ObjectUtil"], function(h, c) {
    function b(b) {
        this.m_map = {};
        this.m_count = 0;
        b === void 0 || b === null || a.forEach(b, function(a, b) {
            this.put(b, a)
        }, this)
    }
    var d = new h,
        a = new c;
    b.prototype.forEach = function(b, c) {
        return a.forEach(this.m_map, b, c)
    };
    b.prototype.get = function(a) {
        d.assert(a !== void 0 && a !== null);
        a = this.m_map[a];
        return a === void 0 ? null : a
    };
    b.prototype.put = function(a, b) {
        d.assert(a !== void 0 && a !== null);
        d.assert(b !== void 0 && b !== null);
        this.get(a) === null && this.m_count++;
        this.m_map[a] = b
    };
    b.prototype.remove = function(a) {
        d.assert(a !== void 0 && a !== null);
        var b = this.m_map[a];
        return b !== void 0 ? (this.m_count--, delete this.m_map[a], b) : null
    };
    b.prototype.keys = function() {
        var a = [],
            b;
        for (b in this.m_map) a.push(b);
        return a
    };
    b.prototype.values = function() {
        var a = [],
            b;
        for (b in this.m_map) a.push(this.m_map[b]);
        return a
    };
    b.prototype.size = function() {
        return this.m_count
    };
    return b
});
define("unit/RendererOperation", ["Lang", "util/ArrayUtil", "util/collection/StringHashMap"], function(h, c, b) {
    var d = new h;
    new c;
    var h = {
            CONSTRUCT: "construct",
            DESTRUCT: "destruct",
            INSERT: "insert",
            UPDATE: "update",
            REPLACE: "replace",
            DELETE: "delete",
            ATTACH: "attach",
            DETACH: "detach",
            SHELL: "shell",
            ALWAYS: "always"
        },
        a = new b,
        e;
    for (e in h) h.hasOwnProperty(e) && a.put(h[e], e);
    h.isValid = function(b) {
        d.assert(d.isString(b));
        return a.get(b) !== null
    };
    return h
});
define("util/collection/StringHashSet", ["Lang", "util/ObjectUtil"], function(h, c) {
    function b() {
        this.m_map = {};
        this.m_count = 0
    }
    var d = new h;
    new c;
    b.prototype.contains = function(a) {
        d.assert(a !== void 0 && a !== null);
        return this.m_map[a] !== void 0
    };
    b.prototype.add = function(a) {
        d.assert(a !== void 0 && a !== null);
        this.contains(a) === !1 && this.m_count++;
        this.m_map[a] = null
    };
    b.prototype.remove = function(a) {
        d.assert(a !== void 0 && a !== null);
        return this.m_map[a] !== void 0 ? (this.m_count--, delete this.m_map[a], !0) : !1
    };
    b.prototype.values =
        function() {
            var a = [],
                b;
            for (b in this.m_map) a.push(b);
            return a
        };
    b.prototype.size = function() {
        return this.m_count
    };
    return b
});
define("util/Path", ["Lang", "util/ArrayUtil"], function(h, c) {
    function b(a) {
        if (arguments.length !== 0) {
            d.assert(d.isString(a));
            this.m_string = a;
            this.m_is_absolute = !1;
            if (a.length > 0 && a.substr(0, 1) === e) a = a.substring(1), this.m_is_absolute = !0;
            this.m_parts = a === "" ? [] : a.split(e)
        }
    }
    var d = new h,
        a = new c,
        e = "/";
    b.prototype.SEPARATOR = e;
    b.prototype.getNewPath = function(a, b, c) {
        c = c.join(e);
        a && (c = e + c);
        return b(c)
    };
    b.prototype.toString = function() {
        return this.m_string
    };
    b.prototype.getString = function() {
        return this.m_string
    };
    b.prototype.getParts = function() {
        return this.m_parts
    };
    b.prototype.getLength = function() {
        return this.m_parts.length
    };
    b.prototype.isEmpty = function() {
        return this.m_parts.length === 0 && !this.m_is_absolute
    };
    b.prototype.up = function(a) {
        d.assert(d.isNumber(a));
        d.assert(a >= 0);
        d.assert(a <= this.m_parts.length || a == 1 && this.m_is_absolute && this.m_parts.length == 0);
        return a === 0 ? this : a == 1 && this.m_is_absolute && this.m_parts.length == 0 ? this.newPath("") : this.getNewPath(this.m_is_absolute, this.newPath, this.m_parts.slice(0, -a))
    };
    b.prototype.relative = function(a) {
        d.assert(d.isNumber(a));
        d.assert(a >= 0);
        d.assert(a <= this.m_parts.length);
        return this.getNewPath(this.m_is_absolute, this.newPath, this.m_parts.slice(a))
    };
    b.prototype.isPrefix = function(c) {
        d.assert(c instanceof b);
        var e = c.getParts();
        return this.m_parts.length > e.length ? !1 : a.every(this.m_parts, function(a, b) {
            return a == e[b]
        }, this)
    };
    b.prototype.concat = function(a) {
        d.assert(a instanceof b);
        return this.getNewPath(this.m_is_absolute, this.newPath, this.m_parts.concat(a.m_parts))
    };
    b.prototype.hasWildcard = function() {
        return a.filter(this.m_parts, function(a) {
            return a === "*"
        }).length !== 0
    };
    b.prototype.matches = function(a) {
        d.assert(a instanceof b);
        d.assert(!a.hasWildcard());
        d.assert(this.constructor === a.constructor);
        if (this.getLength() !== a.getLength()) return !1;
        else if (this.hasWildcard()) {
            for (var c = 0; c < this.m_parts.length; c++)
                if (this.m_parts[c] !== "*" && this.m_parts[c] !== a.m_parts[c]) return !1;
            return !0
        } else return this.getString() === a.getString()
    };
    b.prototype.getLastPart = function() {
        return this.m_parts.length ===
            0 ? null : this.m_parts.slice(-1)[0]
    };
    b.prototype.isAbsolute = function() {
        return this.m_is_absolute === !0
    };
    b.prototype.isRelative = function() {
        return this.m_is_absolute === !1
    };
    return b
});
define("unit/XmlIndexPath", ["Lang", "util/ArrayUtil", "util/Path", "util/DomUtil"], function(h, c, b, d) {
    function a(a) {
        var c = null,
            e = a.indexOf("@");
        e >= 0 && (c = a.substring(e + 1), a = a.substring(0, e));
        this.m_attr = c;
        b.call(this, a)
    }
    var e = new h,
        l = new c,
        g = new d;
    a.prototype = new b;
    a.prototype.newPath = function(b) {
        return new a(b)
    };
    a.prototype.find = function(a) {
        var b = a;
        parts = this.m_parts;
        var c = [];
        parts.length > 0 ? l.forEach(parts, function(a, d) {
            if (d === parts.length - 1)
                if (a.indexOf("-") > 0)
                    for (var k = a.split("-"), l = parseInt(k[0]),
                            k = parseInt(k[1]); l <= k; l++) c.push(b.childNodes[l]);
                else l = parseInt(a), c.push(b.childNodes[l]);
            else l = parseInt(a), b === document ? (e.assert(l === 0), b = g.getRootElementByTagName(b, "html")) : b.nodeName && b.nodeName.toLowerCase() === "html" ? (e.assert(l < 2), l === 0 ? b = g.getChildElementsByTagName(b, "head")[0] : (e.assert(l === 1), b = g.getChildElementsByTagName(b, "body")[0])) : b = b.childNodes[l]
        }) : c.push(a);
        return c
    };
    a.prototype.getAttribute = function() {
        return this.m_attr
    };
    return a
});
define("util/StringUtil", ["Lang"], function(h) {
    function c() {}
    new h;
    c.prototype.startsWith = function(b, c) {
        return b.startsWith ? b.startsWith(c) : b.lastIndexOf(c, 0) === 0
    };
    return c
});
define("data_new/ContextPath", ["Lang", "util/StringUtil", "data_new/Path"], function(h, c, b) {
    function d(a) {
        b.call(this, a)
    }

    function a(a, b) {
        var c = b;
        l.assert(a[0] === "^");
        for (var e = 1; e < a.length; e++) {
            var d = a[e];
            if (g.startsWith(d, ".")) {
                d = d.substr(1);
                if (l.isArray(c) || !l.isObject(c) || !c.hasOwnProperty(d)) return;
                c = c[d]
            } else if (g.startsWith(d, "[")) {
                d = d.substr(1, d.length - 2);
                if (!l.isArray(c) || d >= c.length) return;
                c = c[d]
            } else if (g.startsWith(d, "#")) {
                d = d.substr(1, d.length - 2);
                if (!l.isArray(c)) return;
                for (var h = null, o =
                        0; o < c.length; o++)
                    if (c[o]._key === d) {
                        h = o;
                        break
                    }
                if (h === null) return;
                c = c[h]
            }
        }
        return c
    }

    function e(b, c, e) {
        l.assert(b.length > 1);
        c = a(b.slice(0, -1), c);
        if (c === void 0) return d.NOT_REPLACED;
        var m = b[b.length - 1],
            b = null;
        if (g.startsWith(m, ".")) {
            m = m.substr(1);
            if (l.isArray(c) || !l.isObject(c)) return d.NOT_REPLACED;
            b = c.hasOwnProperty(m) ? c[m] : void 0;
            c[m] = e;
            return b
        } else if (g.startsWith(m, "[")) {
            m = m.substr(1, m.length - 2);
            if (!l.isArray(c)) return d.NOT_REPLACED;
            b = m < c.length ? c[m] : void 0;
            e === void 0 ? c.splice(m, 1) : c[m] = e;
            return b
        } else if (g.startsWith(m,
                "#")) {
            b = m.substr(1, m.length - 2);
            if (!l.isArray(c)) return d.NOT_REPLACED;
            for (var m = null, h = 0; h < c.length; h++)
                if (c[h]._key === b) {
                    m = h;
                    break
                }
            if (m === null) return d.NOT_REPLACED;
            b = c[m];
            e === void 0 ? c.splice(m, 1) : c[m] = e;
            return b
        }
    }
    var l = new h,
        g = new c;
    d.prototype = new b;
    d.NOT_REPLACED = Error();
    d.prototype.newPath = function(a) {
        return new d(a)
    };
    d.prototype.find = function(b) {
        return a(this.m_parts, b)
    };
    d.prototype.replace = function(a, b) {
        l.assert(this.m_parts.length > 1, "The root value cannot be replaced");
        return e(this.m_parts,
            a, b)
    };
    return d
});
define("util/XhrUtil", ["Lang", "Jquery"], function(h, c) {
    function b() {}

    function d() {
        return window.ActiveXObject !== void 0 ? function() {
            var b;
            if (!(b = !this.isLocal && a())) a: {
                try {
                    b = new window.ActiveXObject("Microsoft.XMLHTTP");
                    break a
                } catch (c) {}
                b = void 0
            }
            return b
        } : a
    }

    function a() {
        try {
            return new window.XMLHttpRequest
        } catch (a) {}
    }
    new h;
    b.prototype.ajax = function(a) {
        var b = a.xhr || c.ajaxSettings.xhr;
        a.xhr = d();
        a = c.ajax(a);
        c.ajaxSettings.xhr = b;
        return a
    };
    return b
});
define("util_new/collection/ContextPathTrie", ["Lang", "data_new/ContextPath"], function() {
    function h() {
        this.m_root = new c(null, null)
    }

    function c(b, c) {
        this.m_value = c;
        this.m_parent = b;
        this.m_children = {}
    }
    h.prototype.insert = function(b, d) {
        for (var a = 0, e = b.getParts()[a], l = this.m_root; l.m_children[e] !== void 0;) l = l.m_children[e], e = b.getParts()[++a];
        for (; a < b.getParts().length;) {
            var g = new c(l, null);
            l.addChild(e, g);
            l = g;
            e = b.getParts()[++a]
        }
        l.setValue(d)
    };
    h.prototype.remove = function(b) {
        var d = this.find(b);
        if (d !== null) d =
            d.getParent(), d !== null ? d.removeChild(b.getLastPart()) : this.m_root = new c(null, null)
    };
    h.prototype.find = function(b) {
        for (var c = this.m_root, a = 0; a < b.getLength(); a++)
            if (c = c.m_children[b.getParts()[a]], c === void 0) return null;
        return c
    };
    h.prototype.toString = function() {};
    c.prototype.addChild = function(b, c) {
        this.m_children[b] = c
    };
    c.prototype.removeChild = function(b) {
        this.m_children[b] = void 0;
        delete this.m_children[b]
    };
    c.prototype.setValue = function(b) {
        this.m_value = b
    };
    c.prototype.getValue = function() {
        return this.m_value
    };
    c.prototype.getParent = function() {
        return this.m_parent
    };
    c.prototype.toString = function() {
        var b = "{",
            c;
        for (c in this.m_children) b += c + "(" + this.m_children[c].m_value + ") : ", b += this.m_children[c].toString(), b += ", ";
        b += "}";
        return b
    };
    return h
});
define("util_new/collection/ProxyArray", ["Lang"], function() {
    function h() {
        var a = [];
        a.push.apply(a, arguments);
        c(a);
        return a
    }

    function c(c, h) {
        var m;
        if (!(m = h)) m = [], m.length += c.length;
        b(c, "_keys", m);
        b(c, "_key", void 0, {
            writable: !0
        });
        b(c, "_positions_map", void 0, {
            writable: !0
        });
        d(c);
        a(c);
        e(c);
        l(c);
        g(c);
        k(c)
    }

    function b(a, b, c, e) {
        e = e || {};
        Object.defineProperty(a, b, {
            configurable: e.configurable || !1,
            enumerable: e.configurable || !1,
            writable: e.configurable || !1,
            value: c
        })
    }

    function d(a) {
        a.pop = function() {
            a._keys.pop();
            return Array.prototype.pop.apply(a)
        }
    }

    function a(a) {
        a.push = function() {
            a._keys.push(void 0);
            return Array.prototype.push.apply(a, arguments)
        }
    }

    function e(a) {
        a.reverse = function() {
            a._keys.reverse();
            Array.prototype.reverse.apply(a)
        }
    }

    function l(a) {
        a.shift = function() {
            a._keys.shift();
            return Array.prototype.shift.apply(a)
        }
    }

    function g(a) {
        a.sort = function(b) {
            for (var c = [], e = 0; e < a.length; e++) c.push({
                key: this._keys[e],
                value: this[e]
            });
            c.sort(function(a, c) {
                return b ? b(a.value, c.value) : a.value === c.value ? 0 : [a.value, c.value].sort()[0] === a.value ? -1 : 1
            });
            for (e =
                0; e < a.length; e++) this[e] = c[e].value, this._keys[e] = c[e].key
        }
    }

    function k(a) {
        a.splice = function() {
            var b = arguments[0],
                c = arguments[1],
                e = Array.prototype.slice.call(arguments, 2),
                d = [];
            d.length += e.length;
            e = d;
            e.unshift(b, c);
            Array.prototype.splice.apply(a._keys, e);
            return Array.prototype.splice.apply(a, arguments)
        }
    }
    h.prototype.wrapArray = function(a, b) {
        c(a, b);
        return a
    };
    h.prototype.isArray = function(a) {
        return Object.prototype.toString.call(a) === "[object Array]"
    };
    return h
});
define("util_new/KeyGenerator", [], function() {
    function h() {
        this.m_key_counter = 0
    }
    h.__INSTANCE = new h;
    h.getInstance = function() {
        return h.__INSTANCE
    };
    h.prototype.generateKey = function() {
        return this.m_key_counter++ + ""
    };
    return h
});
define("data/type/Type", ["Lang", "tree/TreeNode", "data/SchemaPath"], function(h, c, b) {
    new h;
    Type = function() {
        c.call(this)
    };
    Type.prototype = new c;
    Type.prototype.getSchemaTree = function() {
        var b = this.getRoot();
        return b instanceof Type ? null : b
    };
    Type.prototype.toSchemaPath = function() {
        if (b === null || b === void 0) b = require("data/SchemaPath");
        return new b(this.toSchemaPathString())
    };
    Type.prototype.toSchemaPathString = function() {
        var c = b.prototype.SEPARATOR,
            a = this.getParent();
        if (a !== null && a instanceof Type) {
            var e = a.getChildName(this),
                a = a.toSchemaPathString();
            return path = a == c ? a + e : a + c + e
        } else return c
    };
    return Type
});
define("data/SchemaTree", ["Lang", "util/ArrayUtil", "tree/TreeNode", "data/type/Type", "data/constraint/Constraint"], function(h, c, b, d, a) {
    function e() {
        b.call(this);
        this.m_type = null;
        this.m_constraints = []
    }
    var l = new h,
        g = new c;
    e.prototype = new b;
    e.prototype.getType = function() {
        return this.m_type
    };
    e.prototype.setType = function(a) {
        if (d === null || d === void 0) d = require("data/type/Type");
        l.assert(a === null || a instanceof d);
        var b = this.m_type;
        this.m_type = a;
        b !== null && this.removeChild(b);
        a !== null && this.addChild(a)
    };
    e.prototype.addConstraint =
        function(b) {
            l.assert(b instanceof a);
            this.m_constraints.push(b)
        };
    e.prototype.getConstraints = function() {
        return g.copy(this.m_constraints)
    };
    return e
});
define("data/SchemaPath", ["Lang", "util/ArrayUtil", "util/Path", "data/SchemaTree", "data/type/Type"], function(h, c, b, d, a) {
    function e(a) {
        b.call(this, a)
    }
    var l = new h,
        g = new c;
    e.prototype = new b;
    e.prototype.newPath = function(a) {
        return new e(a)
    };
    e.prototype.find = function(b) {
        if (a === null || a === void 0) a = require("data/type/Type");
        l.assert(b instanceof a || b instanceof d || b instanceof SchemaDiff);
        var c;
        if (b instanceof a) c = b, b = this.m_parts;
        else if (b instanceof d) c = b.getType(), b = this.m_parts;
        else {
            l.assert(b instanceof SchemaDiff);
            if (!b.getContext().isPrefix(this)) return null;
            c = b.getPayload().getSchemaTree().getType();
            b = this.relative(b.getContext().getLength() - 1).getParts()
        }
        c !== null && g.every(b, function(a) {
            c = c.getChild(a);
            return c !== null
        });
        return c
    };
    return e
});
define("data/pattern/SchemaPatternPath", ["Lang", "util/ArrayUtil", "util/Path", "data/SchemaPath"], function(h, c, b, d) {
    function a(a) {
        b.call(this, a)
    }
    var e = new h,
        l = new c;
    a.prototype = new b;
    a.prototype.newPath = function(b) {
        return new a(b)
    };
    a.prototype.hasWildcard = function() {
        return l.filter(this.m_parts, function(a) {
            return a === "*" || a === "*>"
        }).length !== 0
    };
    a.prototype.matches = function(a) {
        e.assert(a instanceof d);
        if (this.hasWildcard()) {
            for (var b = 0, c = 0; c < this.m_parts.length; c++, b++)
                if (this.m_parts[c] !== "*") {
                    if (this.m_parts[c] ===
                        "*>") return !0;
                    if (b >= a.m_parts.length) return !1;
                    if (this.m_parts[c] !== a.m_parts[b]) return !1
                }
            return b >= a.m_parts.length
        } else return this.getString() === a.getString()
    };
    return a
});
define("unit/Renderer", ["Lang", "util/ArrayUtil", "data/pattern/SchemaPatternPath", "unit/RendererOperation"], function(h, c, b, d) {
    function a(a, c, k, f) {
        e.assert(e.isString(a));
        e.assert(e.isString(c));
        e.assert(c === d.INSERT || c === d.REPLACE || c === d.DELETE || c === d.ATTACH || c === d.SHELL);
        e.assert(k instanceof b || e.isString(k));
        e.assert(e.isFunction(f));
        e.isString(k) && (k = new b(k));
        e.assert(k.isRelative(), 'Renderer "' + a + '" must have a schema pattern path that is relative');
        this.m_name = a;
        this.m_renderer_operation = c;
        this.m_schema_pattern_path = k;
        this.m_callback = f
    }
    var e = new h;
    new c;
    a.prototype.getName = function() {
        return this.m_name
    };
    a.prototype.getRendererOperation = function() {
        return this.m_renderer_operation
    };
    a.prototype.getSchemaPatternPath = function() {
        return this.m_schema_pattern_path
    };
    a.prototype.getCallback = function() {
        return this.m_callback
    };
    a.prototype.render = function(a, b) {
        this.m_callback.call(this, a, b)
    };
    return a
});
define("unit/RendererMap", ["Lang", "util/ArrayUtil", "util/collection/StringHashMap", "unit/Renderer"], function(h, c, b, d) {
    function a() {
        b.call(this)
    }
    var e = new h;
    new c;
    a.prototype = new b;
    a.prototype.add = function(a) {
        e.assert(a instanceof d);
        b.prototype.put.call(this, a.getName(), a)
    };
    a.prototype.put = function(a, c) {
        e.assert(e.isString(a));
        e.assert(c instanceof d);
        b.prototype.put.call(this, a, c)
    };
    return a
});
define("data/type/ScalarType", ["Lang", "data/type/Type"], function(h, c) {
    function b() {
        c.call(this)
    }
    new h;
    b.prototype = new c;
    return b
});
define("data/type/BooleanType", ["Lang", "data/type/ScalarType"], function(h, c) {
    function b() {
        c.call(this)
    }
    new h;
    b.prototype = new c;
    return b
});
define("data/type/DoubleType", ["Lang", "data/type/ScalarType"], function(h, c) {
    function b() {
        c.call(this)
    }
    new h;
    b.prototype = new c;
    return b
});
define("data/type/IntegerType", ["Lang", "data/type/ScalarType"], function(h, c) {
    function b() {
        c.call(this)
    }
    new h;
    b.prototype = new c;
    return b
});
define("data/type/LongType", ["Lang", "data/type/ScalarType"], function(h, c) {
    function b() {
        c.call(this)
    }
    new h;
    b.prototype = new c;
    return b
});
define("data/type/StringType", ["Lang", "data/type/ScalarType"], function(h, c) {
    function b() {
        c.call(this)
    }
    new h;
    b.prototype = new c;
    return b
});
define("data/type/XhtmlType", ["Lang", "data/type/ScalarType"], function(h, c) {
    function b() {
        c.call(this)
    }
    new h;
    b.prototype = new c;
    return b
});
define("data/type/TupleType", ["Lang", "util/ArrayUtil", "util/collection/StringHashMap", "data/type/Type"], function(h, c, b, d) {
    function a() {
        d.call(this);
        this.m_attributes = new b
    }
    var e = new h,
        l = new c;
    a.prototype = new d;
    a.prototype.getAttributeNames = function() {
        return this.m_attributes.keys()
    };
    a.prototype.getAttributeTypes = function() {
        return this.m_attributes.values()
    };
    a.prototype.getAttribute = function(a) {
        e.assert(e.isString(a));
        return this.m_attributes.get(a)
    };
    a.prototype.getAttributeName = function(a) {
        var b =
            null;
        l.some(this.m_attributes.keys(), function(c) {
            return this.getAttribute(c) === a ? (b = c, !0) : !1
        }, this);
        return b
    };
    a.prototype.setAttribute = function(a, b) {
        e.assert(e.isString(a));
        e.assert(b instanceof d || b === null);
        var c = this.getAttribute(a);
        c !== null && (this.m_attributes.remove(a), this.removeChild(c));
        b !== null && (this.m_attributes.put(a, b), this.addChild(b))
    };
    a.prototype.getChild = a.prototype.getAttribute;
    a.prototype.getChildName = a.prototype.getAttributeName;
    return a
});
define("data/type/CollectionType", ["Lang", "data/type/Type", "data/type/TupleType"], function(h, c, b) {
    function d(e) {
        a.assert(e === void 0 || e instanceof b);
        c.call(this);
        this.m_tuple_type = e === void 0 ? null : e
    }
    var a = new h;
    d.prototype = new c;
    d.prototype.getTupleType = function() {
        return this.m_tuple_type
    };
    d.prototype.setTupleType = function(c) {
        a.assert(c instanceof b);
        this.m_tuple_type = c;
        this.addChild(c)
    };
    d.prototype.getChild = function(b) {
        a.assert(b === "tuple", "Collection tuples should use 'tuple' as the element name.");
        return this.m_tuple_type
    };
    d.prototype.getChildName = function(c) {
        a.assert(c instanceof b);
        return "tuple"
    };
    return d
});
define("data/SchemaUtil", "Lang,util/ArrayUtil,data/SchemaTree,data/SchemaPath,data/type/Type,data/type/CollectionType,data/type/TupleType,data/type/ScalarType,data/constraint/LocalPrimaryKeyConstraint".split(","), function(h, c, b, d, a, e, l) {
    function g() {}
    var k = new h;
    new c;
    g.prototype.get = function(c, e) {
        k.assert(c instanceof a || c instanceof b || c instanceof SchemaDiff);
        k.assert(k.isString(e) || e instanceof d);
        k.isString(e) && (e = new d(e));
        return e.find(c)
    };
    g.prototype.attach = function(c, d, g) {
        k.assert(c instanceof b || c instanceof a);
        k.assert(d instanceof a);
        k.assert(!d.hasParent());
        c instanceof b ? c.setType(d) : c instanceof e ? c.setTupleType(d) : (k.assert(c instanceof l), k.assert(k.isString(g)), c.setAttribute(g, d))
    };
    g.prototype.detach = function(c, d) {
        k.assert(c instanceof b || c instanceof a);
        k.assert(d instanceof a);
        k.assert(d.getParent() === c);
        if (c instanceof b) c.setType(null);
        else if (c instanceof e) c.setTupleType(null);
        else {
            k.assert(c instanceof l);
            var g = c.getAttributeName(d);
            c.setAttribute(g, null);
            return g
        }
        return null
    };
    g.prototype.reattach = function(a, b, c) {
        this.detach(a, c);
        this.attach(b, c)
    };
    return g
});
define("data/type/ListType", ["Lang", "data/type/CollectionType"], function(h, c) {
    function b(b) {
        c.call(this, b)
    }
    new h;
    b.prototype = new c;
    return b
});
define("data/type/SwitchType", ["Lang", "util/ArrayUtil", "util/collection/StringHashMap", "data/type/Type", "data/type/TupleType"], function(h, c, b, d, a) {
    function e() {
        d.call(this);
        this.m_cases = new b
    }
    var l = new h,
        g = new c;
    e.prototype = new d;
    e.prototype.getCaseNames = function() {
        return this.m_cases.keys()
    };
    e.prototype.getCaseTypes = function() {
        return this.m_cases.values()
    };
    e.prototype.getCase = function(a) {
        l.assert(l.isString(a));
        return this.m_cases.get(a)
    };
    e.prototype.setCase = function(b, c) {
        l.assert(l.isString(b));
        l.assert(c instanceof a || c === null);
        var e = this.getCase(b);
        e !== null && (this.m_cases.remove(b), this.removeChild(e));
        c !== null && (this.m_cases.put(b, c), this.addChild(c))
    };
    e.prototype.getCaseName = function(a) {
        var b = null;
        g.some(this.m_cases.keys(), function(c) {
            var e = this.m_cases.get(c);
            return a === e ? (b = c, !0) : !1
        }, this);
        return b
    };
    e.prototype.getChild = e.prototype.getCase;
    e.prototype.getChildName = e.prototype.getCaseName;
    return e
});
define("data/DataTree", ["Lang", "tree/TreeNode", "data/value/Value"], function(h, c, b) {
    function d() {
        c.call(this);
        this.m_value = null
    }
    var a = new h;
    d.prototype = new c;
    d.prototype.getValue = function() {
        return this.m_value
    };
    d.prototype.setValue = function(c) {
        if (b === null || b === void 0) b = require("data/value/Value");
        a.assert(c === null || c instanceof b);
        var d = this.m_value;
        this.m_value = c;
        d !== null && this.removeChild(d);
        c !== null && this.addChild(c)
    };
    d.prototype.attach = function(c) {
        if (b === null || b === void 0) b = require("data/value/Value");
        a.assert(c instanceof b);
        a.assert(!c.hasParent());
        this.setValue(c)
    };
    d.prototype.detach = function(c) {
        if (b === null || b === void 0) b = require("data/value/Value");
        a.assert(c instanceof b);
        a.assert(c.getParent() === this);
        this.setValue(null)
    };
    return d
});
define("data/diff/DataDiff", "require,Lang,util/ArrayUtil,data/DataPath,data/DataTree,data/value/Value".split(","), function(h, c, b, d, a, e) {
    function l(b, c) {
        if (arguments.length !== 0) d = h("data/DataPath"), e = h("data/value/Value"), g.assert(b instanceof d || g.isString(b)), g.assert(c === void 0 || c instanceof e || c instanceof a), g.isString(b) && (b = new d(b)), c !== void 0 && c instanceof a && (c = c.getValue()), c !== void 0 && c.getDataTree() === null && (new a).setValue(c), this.m_context = b, this.m_payload = c === void 0 ? null : c
    }
    var g = new c;
    new b;
    l.prototype.getContext = function() {
        return this.m_context
    };
    l.prototype.getPayload = function() {
        return this.m_payload
    };
    return l
});
define("data/diff/DeleteDataDiff", ["Lang", "data/diff/DataDiff"], function(h, c) {
    function b(b) {
        c.call(this, b)
    }
    new h;
    b.prototype = new c;
    return b
});
define("data/diff/ReplaceDataDiff", ["Lang", "data/diff/DataDiff"], function(h, c) {
    function b(b, a) {
        c.call(this, b, a)
    }
    new h;
    b.prototype = new c;
    return b
});
define("data/value/NullValue", ["Lang", "data/value/Value"], function(h, c) {
    function b() {
        c.call(this)
    }
    new h;
    b.prototype = new c;
    b.prototype.getObject = function() {
        return null
    };
    return b
});
define("data/DataPath", "Lang,util/ArrayUtil,util/Path,data/DataTree,data/value/Value,data/SchemaPath,data/diff/DataDiff,data/value/NullValue".split(","), function(h, c, b, d, a, e, l, g) {
    function k(a) {
        b.call(this, a)
    }
    var f = new h,
        n = new c;
    k.prototype = new b;
    k.prototype.newPath = function(a) {
        return new k(a)
    };
    k.prototype.find = function(b) {
        if (a === null || a === void 0) a = require("data/value/Value");
        f.assert(b instanceof a || b instanceof d || b instanceof l);
        var c;
        if (b instanceof a) c = b, b = this.m_parts;
        else if (b instanceof d) c =
            b.getValue(), b = this.m_parts;
        else {
            f.assert(b instanceof l);
            if (!b.getContext().isPrefix(this)) return null;
            c = b.getPayload().getDataTree().getValue();
            b = this.relative(b.getContext().getLength()).getParts()
        }
        c !== null && n.every(b, function(a) {
            "getChild" in c ? c = c.getChild(a) : (f.assert(c instanceof g), c = null);
            return c !== null
        });
        return c
    };
    k.prototype.toSchemaPath = function() {
        if (this.m_parts.length == 0) return new e(this.SEPARATOR);
        var a = [];
        n.forEach(this.m_parts, function(b) {
            var c = b.indexOf("[");
            c === -1 ? a.push(b) : a.push(b.substr(0,
                c))
        });
        return this.getNewPath(this.m_is_absolute, e.prototype.newPath, a)
    };
    return k
});
define("data/value/Value", ["require", "Lang", "tree/TreeNode", "data/DataPath"], function(h, c, b, d) {
    function a() {
        b.call(this)
    }
    new c;
    a.prototype = new b;
    a.prototype.getDataTree = function() {
        var b = this.getRoot();
        return b instanceof a ? null : b
    };
    a.prototype.toDataPath = function() {
        if (d === null || d === void 0) d = h("data/DataPath");
        return new d(this.toDataPathString())
    };
    a.prototype.toDataPathString = function() {
        if (d === null || d === void 0) d = h("data/DataPath");
        var b = d.prototype.SEPARATOR,
            c = this.getParent();
        if (c !== null && c instanceof a) {
            var g = c.getChildName(this),
                c = c.toDataPathString();
            return path = c == b ? c + g : c + b + g
        } else return b
    };
    return a
});
define("data/value/ScalarValue", ["Lang", "data/value/Value"], function(h, c) {
    function b() {
        c.call(this);
        this.m_children = d
    }
    new h;
    var d = [];
    b.prototype = new c;
    b.prototype.getString = function() {
        return this.getObject().toString()
    };
    return b
});
define("data/value/BooleanValue", ["Lang", "data/value/ScalarValue"], function(h, c) {
    function b(a) {
        d.assert(d.isBoolean(a));
        c.call(this);
        this.m_boolean = a
    }
    var d = new h;
    b.prototype = new c;
    b.prototype.getObject = function() {
        return this.m_boolean
    };
    return b
});
define("data/value/DoubleValue", ["Lang", "data/value/ScalarValue"], function(h, c) {
    function b(a) {
        d.assert(d.isNumber(a));
        c.call(this);
        this.m_double = a
    }
    var d = new h;
    b.prototype = new c;
    b.prototype.getObject = function() {
        return this.m_double
    };
    return b
});
define("data/value/IntegerValue", ["Lang", "data/value/ScalarValue"], function(h, c) {
    function b(a) {
        d.assert(d.isNumber(a));
        c.call(this);
        this.m_integer = a
    }
    var d = new h;
    b.prototype = new c;
    b.prototype.getObject = function() {
        return this.m_integer
    };
    return b
});
define("data/value/LongValue", ["Lang", "data/value/ScalarValue"], function(h, c) {
    function b(a) {
        d.assert(d.isNumber(a));
        c.call(this);
        this.m_long = a
    }
    var d = new h;
    b.prototype = new c;
    b.prototype.getObject = function() {
        return this.m_long
    };
    return b
});
define("data/value/StringValue", ["Lang", "data/value/ScalarValue"], function(h, c) {
    function b(a) {
        d.assert(d.isString(a));
        c.call(this);
        this.m_string = a
    }
    var d = new h;
    b.prototype = new c;
    b.prototype.getObject = function() {
        return this.m_string
    };
    return b
});
define("data/value/XhtmlValue", ["Lang", "util/DomUtil", "data/value/ScalarValue"], function(h, c, b) {
    function d(c) {
        a.assert(e.isElement(c));
        b.call(this);
        this.m_element = c
    }
    var a = new h,
        e = new c;
    d.prototype = new b;
    d.prototype.getObject = function() {
        return this.m_element
    };
    return d
});
define("unit/UnitConfig", ["Lang", "util/ArrayUtil", "util/collection/StringHashSet", "data/value/XhtmlValue"], function(h, c, b) {
    function d(c, d, g, k, f, h) {
        a.assert(a.isString(c));
        a.assert(a.isString(d));
        a.assert(g instanceof Type);
        a.assert(k instanceof b);
        a.assert(f instanceof b);
        this.m_unit_config_id = c;
        this.m_unit_class_name = d;
        this.m_root_type = g;
        this.m_action_contexts = k;
        this.m_async_action_contexts = f;
        this.m_template = h
    }
    var a = new h;
    new c;
    d.prototype.getUnitConfigId = function() {
        return this.m_unit_config_id
    };
    d.prototype.getUnitClassName = function() {
        return this.m_unit_class_name
    };
    d.prototype.getRootType = function() {
        return this.m_root_type
    };
    d.prototype.getActionContexts = function() {
        return this.m_action_contexts
    };
    d.prototype.getAsyncActionContexts = function() {
        return this.m_async_action_contexts
    };
    d.prototype.getTemplate = function() {
        return this.m_template
    };
    return d
});
define("remote/UnitConfigMap", ["Lang", "util/ArrayUtil", "util/collection/StringHashMap", "unit/UnitConfig"], function(h, c, b, d) {
    function a() {
        b.call(this)
    }
    var e = new h;
    new c;
    a.prototype = new b;
    a.prototype.put = function(a, c) {
        e.assert(e.isString(a));
        e.assert(c instanceof d);
        b.prototype.put.call(this, a, c)
    };
    return a
});
define("remote/RefreshResponse", ["Lang", "util/ArrayUtil", "remote/UnitConfigMap"], function(h, c, b) {
    function d() {
        this.m_unit_config_map = this.m_sequence_number = this.m_window_id = null;
        this.m_unit_diffs = [];
        this.m_pre_unit_diffs = []
    }
    var a = new h;
    new c;
    d.prototype.getWindowId = function() {
        return this.m_window_id
    };
    d.prototype.setWindowId = function(b) {
        a.assert(a.isString(b));
        this.m_window_id = b
    };
    d.prototype.getSequenceNumber = function() {
        return this.m_sequence_number
    };
    d.prototype.setSequenceNumber = function(b) {
        a.assert(a.isString(b) ||
            a.isNumber(b));
        this.m_sequence_number = b
    };
    d.prototype.getUnitConfigMap = function() {
        return this.m_unit_config_map
    };
    d.prototype.setUnitConfigMap = function(c) {
        a.assert(c === null || c instanceof b);
        this.m_unit_config_map = c
    };
    d.prototype.getUnitDiffs = function() {
        return this.m_unit_diffs
    };
    d.prototype.setUnitDiffs = function(b) {
        a.assert(a.isArray(b));
        this.m_unit_diffs = b
    };
    d.prototype.getPreUnitDiffs = function() {
        return this.m_pre_unit_diffs
    };
    d.prototype.setPreUnitDiffs = function(b) {
        a.assert(a.isArray(b));
        this.m_pre_unit_diffs =
            b
    };
    return d
});
define("data/value/TupleValue", ["Lang", "util/ArrayUtil", "util/collection/StringHashMap", "data/value/Value"], function(h, c, b, d) {
    function a() {
        d.call(this);
        this.m_attributes = new b
    }
    var e = new h;
    new c;
    a.prototype = new d;
    a.prototype.getAttributeNames = function() {
        return this.m_attributes.keys()
    };
    a.prototype.getAttributeValues = function() {
        return this.m_attributes.values()
    };
    a.prototype.getAttribute = function(a) {
        e.assert(e.isString(a));
        return this.m_attributes.get(a)
    };
    a.prototype.getAttributeName = function(a) {
        return a.getEdgeLabel()
    };
    a.prototype.setAttribute =
        function(a, b) {
            e.assert(e.isString(a));
            e.assert(b instanceof d || b === null);
            var c = this.getAttribute(a);
            c !== null && (this.m_attributes.remove(a), c.setEdgeLabel(null), this.removeChild(c));
            b !== null && (this.m_attributes.put(a, b), b.setEdgeLabel(a), this.addChild(b))
        };
    a.prototype.attach = function(a, b) {
        e.assert(a instanceof d);
        e.assert(!a.hasParent());
        this.setAttribute(b, a)
    };
    a.prototype.detach = function(a) {
        e.assert(a instanceof d);
        e.assert(a.getParent() === this);
        a = this.getAttributeName(a);
        this.setAttribute(a, null);
        return a
    };
    a.prototype.getChild = a.prototype.getAttribute;
    a.prototype.getChildName = a.prototype.getAttributeName;
    return a
});
define("data/constraint/PrimaryKeyUtil", "Lang,util/ArrayUtil,data/constraint/LocalPrimaryKeyConstraint,data/type/CollectionType,data/value/TupleValue,data/value/ScalarValue,data/DataPath".split(","), function(h, c, b, d, a, e, l) {
    function g() {}
    var k = new h,
        f = new c;
    g.prototype.getLocalPrimaryKeyConstraint = function(a) {
        k.assert(a instanceof d);
        var c = a.getSchemaTree(),
            e = c.getConstraints(),
            g = null;
        f.some(e, function(e) {
            if (!(e instanceof b)) return !1;
            return e.getCollectionSchemaPath().find(c) === a ? (g = e, !0) : !1
        });
        return g
    };
    g.prototype.getLocalPrimaryKeyValues = function(a, b) {
        var c = [];
        f.forEach(b.getAttributeSchemaPaths(), function(b) {
            var e = (new l(b.toString())).relative(1),
                b = e.find(a),
                e = e.getLastPart();
            c.push({
                value: b,
                name: e
            })
        });
        return c
    };
    g.prototype.getLocalPrimaryKeyTypes = function(a) {
        k.assert(a !== null);
        k.assert(a instanceof d);
        var b = this.getLocalPrimaryKeyConstraint(a);
        k.assert(b !== null, "The primary key constraint is not set for collection type: " + a);
        return b.getAttributes()
    };
    g.prototype.getPredicate = function(a, b) {
        var c =
            this.getLocalPrimaryKeyValues(a, b);
        if (c.length == 0) return null;
        var d = "[";
        f.forEach(c, function(a, b) {
            var c = a.value,
                f = a.name;
            k.assert(c instanceof e);
            c = this.encode(c.getString());
            b > 0 && (d += ",");
            d += f + "=" + c
        }, this);
        d += "]";
        return d
    };
    g.prototype.encode = function(a) {
        return encodeURIComponent(a).replace(/%20/g, "+").replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/~/g, "%7E")
    };
    return g
});
define("data/diff/InsertDataDiff", ["Lang", "data/DataPath", "data/value/TupleValue", "data/diff/DataDiff"], function(h, c, b, d) {
    function a(a, g, k) {
        d.call(this, a, g);
        e.assert(k === void 0 || k instanceof c);
        e.assert(k === void 0 || g instanceof b);
        this.m_after_context = k === void 0 ? null : k
    }
    var e = new h;
    a.prototype = new d;
    return a
});
define("data/value/CollectionValue", "Lang,util/ArrayUtil,data/value/Value,data/value/TupleValue,data/constraint/PrimaryKeyUtil,util/collection/StringHashMap".split(","), function(h, c, b, d, a, e) {
    function l() {
        b.call(this);
        this.m_tuple_values = [];
        this.m_constraint = null;
        this.m_key_to_value_map = new e
    }
    var g = new h,
        k = new c,
        a = new a;
    l.prototype = new b;
    l.prototype.getTupleValues = function() {
        return this.m_tuple_values
    };
    l.prototype.addTupleValue = function(b, c) {
        g.assert(b instanceof d);
        if (c === void 0 || c === null) g.assert(this.m_constraint !==
            null, "Constraint not set for collection value. It is required to calculate the predicate."), c = a.getPredicate(b, this.m_constraint);
        this.m_key_to_value_map.put(c, b);
        b.setEdgeLabel(c);
        this.m_tuple_values.push(b);
        this.addChild(b)
    };
    l.prototype.removeTupleValue = function(a) {
        g.assert(a instanceof d);
        k.remove(this.m_tuple_values, a);
        this.removeChild(a);
        var b = a.getEdgeLabel();
        a.setEdgeLabel(null);
        this.m_key_to_value_map.remove(b)
    };
    l.prototype.attach = function(a) {
        g.assert(a instanceof d);
        g.assert(!a.hasParent());
        this.addTupleValue(a)
    };
    l.prototype.detach = function(a) {
        g.assert(a instanceof d);
        g.assert(a.getParent() === this);
        this.removeTupleValue(a)
    };
    l.prototype.addConstraint = function(a) {
        g.assert(this.m_constraint === null, "Constraint has already been set.");
        this.m_constraint = a
    };
    l.prototype.getConstraints = function() {
        return [this.m_constraint]
    };
    l.prototype.getChild = function(a) {
        var b = null,
            b = a.indexOf("[");
        g.assert(b > 0);
        g.assert(a.substr(0, b) === "tuple", "Collection tuples should use 'tuple' as the element name.");
        return b =
            this.m_key_to_value_map.get(a.substr(b))
    };
    l.prototype.getChildName = function(a) {
        return "tuple" + this.getPredicate(a)
    };
    l.prototype.getPredicate = function(a) {
        return a.getEdgeLabel()
    };
    return l
});
define("data/constraint/ConstraintUtil", "Lang,util/ArrayUtil,data/SchemaPath,data/SchemaTree,data/value/CollectionValue,data/constraint/LocalPrimaryKeyConstraint".split(","), function(h, c, b, d, a, e) {
    function l() {}
    var g = new h,
        k = new c;
    l.prototype.copyConstraints = function(b, c) {
        g.assert(b instanceof d || b instanceof a);
        g.assert(c instanceof d || c instanceof a);
        k.forEach(b.getConstraints(), function(a) {
                a instanceof e ? (a = this.copyLocalPrimaryKeyConstraint(a), c.addConstraint(a)) : g.assert(!1, "Only LocalPrimaryKeyConstraint is supported.")
            },
            this)
    };
    l.prototype.copyLocalPrimaryKeyConstraint = function(a, c) {
        g.assert(a instanceof e);
        if (c === void 0 || c === null) c = 0;
        g.assert(g.isNumber(c));
        var d = (new b(a.getCollectionSchemaPath().toString())).relative(c),
            h = [];
        k.forEach(a.getAttributeSchemaPaths(), function(a) {
            a = (new b(a.toString())).relative(c);
            h.push(a)
        });
        return new e(d, h)
    };
    return l
});
define("data/DataUtil", "Lang,data/DataPath,data/DataTree,data/value/Value,data/value/CollectionValue,data/value/TupleValue,data/value/ScalarValue,data/diff/DataDiff".split(","), function(h, c, b, d, a, e, l, g) {
    function k() {}
    var f = new h;
    k.prototype.get = function(a, e) {
        f.assert(a instanceof b || a instanceof d || a instanceof g);
        f.assert(f.isString(e) || e instanceof c);
        f.isString(e) && (e = new c(e));
        return e.find(a)
    };
    return k
});
define("data/value/ListValue", ["Lang", "util/ArrayUtil", "data/value/CollectionValue", "data/value/TupleValue"], function(h, c, b, d) {
    function a() {
        b.call(this)
    }
    var e = new h,
        l = new c;
    a.prototype = new b;
    a.prototype.indexOf = function(a) {
        e.assert(a instanceof d);
        return l.indexOf(this.getTupleValues(), a)
    };
    return a
});
define("data/value/SwitchValue", ["Lang", "data/value/Value", "data/value/TupleValue"], function(h, c, b) {
    function d(e, d) {
        a.assert(a.isString(e));
        a.assert(d instanceof b);
        c.call(this);
        this.m_case_value = this.m_case_name = null;
        this.setCase(e, d)
    }
    var a = new h;
    d.prototype = new c;
    d.prototype.getCaseName = function() {
        return this.m_case_name
    };
    d.prototype.getCaseValue = function() {
        return this.m_case_value
    };
    d.prototype.getCase = function() {
        return this.m_case_value
    };
    d.prototype.setCase = function(c, d) {
        a.assert(a.isString(c));
        a.assert(d instanceof b);
        var g = this.m_case_value;
        if (g !== null) this.m_case_value = this.m_case_name = null, this.removeChild(g);
        this.m_case_name = c;
        this.m_case_value = d;
        this.addChild(this.m_case_value)
    };
    d.prototype.attach = function(b, d) {
        a.assert(b instanceof c);
        a.assert(!b.hasParent());
        a.assert(a.isString(d) && d.length > 0);
        this.setCase(d, b)
    };
    d.prototype.detach = function(b) {
        a.assert(b instanceof c);
        a.assert(b.getParent() === this);
        b = this.getCaseName();
        this.setCase(b, null);
        return b
    };
    d.prototype.getChild = function() {
        return this.m_case_value
    };
    d.prototype.getChildName = function(b) {
        a.assert(b === this.m_case_value);
        return this.m_case_name
    };
    return d
});
define("unit_new/UnitDataDiff", ["Lang", "util/ArrayUtil", "data_new/ContextPath", "data/value/Value", "unit_new/UnitDiff"], function(h, c, b, d, a) {
    function e(c, e, d, h, m, q) {
        l.assert(h instanceof b);
        a.call(this, c, e, d, q);
        this.m_context = h;
        this.m_payload = m
    }
    var l = new h;
    new c;
    e.prototype = new a;
    e.prototype.getContext = function() {
        return this.m_context
    };
    e.prototype.getPayload = function() {
        return this.m_payload
    };
    return e
});
define("remote_new/UnitDataDiffJsonppParser", "Lang,util/ArrayUtil,util/DomUtil,data_new/ContextPath,remote/RemoteUtil,unit/RendererOperation,unit_new/UnitDataDiff".split(","), function(h, c, b, d, a, e, l) {
    var g = new h;
    new c;
    new b;
    return {
        parse: function(a) {
            g.assert(g.isObject(a), "A unit diff must be an object literal");
            g.assert(a.id === void 0 || g.isString(a.id), 'The "id" attribute must be a string if specified');
            var b = a.id === void 0 ? "^" : a.id;
            g.assert(b.charAt(0) === "^", 'The "id" attribute must start with ^ if specified');
            g.assert(g.isString(a.callback), 'A unit data diff must have a string attribute "callback"');
            var c = a.callback;
            g.assert(g.isString(a.op));
            g.assert(e.isValid(a.op));
            var h = a.op;
            g.assert(g.isString(a.context), 'A unit diff must have a string attribute "context"');
            var q = a.context !== "" ? new d(a.context) : new d("^"),
                u = a.payload === void 0 ? null : a.payload;
            g.assert(a.child_id === void 0 || g.isString(a.child_id), 'The "child_id" attribute must be a string if specified');
            return new l(b, c, h, q, u, a.child_id === void 0 ? null :
                a.child_id)
        }
    }
});
define("remote_new/RefreshResponseJsonppParser", "Lang,util/ArrayUtil,util/DomUtil,remote/RemoteUtil,remote/RefreshResponse,remote_new/UnitDataDiffJsonppParser,remote/UnitConfigMap".split(","), function(h, c, b, d, a, e, l) {
    function g(a) {
        k.assert(k.isArray(a), 'A response must have an array attribute "unit_diffs"');
        var b = [];
        f.forEach(a, function(a) {
            k.assert(k.isObject(a), "A unit diff must be an object literal");
            k.assert(k.isString(a.type), 'A unit diff must have a string attribute "type"');
            var c = null;
            a.type ===
                "unit_data_diff" ? c = e.parse(a) : k.assert(!1);
            b.push(c)
        });
        return b
    }
    var k = new h,
        f = new c;
    new b;
    return {
        parse: function(b, c) {
            k.assert(k.isString(b));
            k.assert(c === null || c instanceof l);
            var e = eval("(" + b + ")");
            k.assert(k.isObject(e), "A response must be an object literal");
            var e = g(e.unit_diffs),
                d = new a;
            d.setUnitDiffs(e);
            return d
        }
    }
});
define("unit/UnitDataDiff", ["Lang", "util/ArrayUtil", "data/DataPath", "data/value/Value", "unit/UnitDiff"], function(h, c, b, d, a) {
    function e(c, e, f, h, m) {
        l.assert(h instanceof b);
        l.assert(m === null || m instanceof d);
        a.call(this, c, e, f);
        this.m_relative_context = h;
        this.m_payload = m
    }
    var l = new h;
    new c;
    e.prototype = new a;
    e.prototype.getRelativeContext = function() {
        return this.m_relative_context
    };
    e.prototype.getPayload = function() {
        return this.m_payload
    };
    return e
});
define("data/value/ListNullValue", ["Lang", "data/value/NullValue"], function(h, c) {
    function b() {
        c.call(this)
    }
    new h;
    b.prototype = new c;
    return b
});
define("data/value/ScalarNullValue", ["Lang", "data/value/NullValue"], function(h, c) {
    function b() {
        c.call(this)
    }
    new h;
    b.prototype = new c;
    return b
});
define("remote/RefreshRequestSerializer", "Lang,util/ArrayUtil,util/DomUtil,data/DataPath,data/value/Value,data/value/ScalarValue,data/value/TupleValue,data/value/CollectionValue,data/value/SwitchValue,data/value/ScalarNullValue,data/diff/DataDiff,data/diff/InsertDataDiff,data/diff/ReplaceDataDiff,data/diff/DeleteDataDiff".split(","), function(h, c, b, d, a, e, l, g, k, f, n, m, q, u) {
    function o(a, b, c, e, g) {
        w.assert(w.isString(a) || a === null);
        w.assert(w.isNumber(b));
        w.assert(c instanceof d);
        w.assert(e !== void 0);
        w.assert(w.isArray(g));
        this.m_window_id = a;
        this.m_sequence_number = b;
        this.m_context = c;
        this.m_browser_event = e;
        this.m_data_diffs = g
    }

    function r(a, b) {
        w.assert(s.isElement(a));
        w.assert(b !== void 0 && b !== null);
        var c = s.createChildElement(a, "browser_event");
        A.forEach(["pageX", "pageY", "clientX", "clientY", "state"], function(a) {
            if (a in b) {
                var e = s.createChildElement(c, "attribute");
                e.setAttribute("key", a);
                e.setAttribute("value", b[a])
            }
        })
    }

    function v(b, c, d) {
        w.assert(s.isElement(b));
        w.assert(c instanceof a);
        w.assert(w.isString(d));
        b = s.createChildElement(b,
            d);
        if (c instanceof l)
            for (d = 0; d < c.getAttributeNames().length; d++) {
                var h = c.getAttributeNames()[d],
                    o = c.getAttributeValues()[d];
                v(b, o, h)
            } else if (c instanceof g)
                for (d = 0; d < c.getTuples().length; d++) h = c.getTuples()[d], v(b, h, "tuple");
            else c instanceof k ? (d = c.getCase(), v(b, d, c.getCaseName())) : c instanceof f ? s.attr(b, "null", "true") : (w.assert(c instanceof e), c = c.getString(), s.createTextNode(b, c))
    }
    var w = new h,
        A = new c,
        s = new b;
    o.prototype.serialize = function() {
        var a = s.newDocument();
        this.createRequestElement(a);
        return s.serialize(a)
    };
    o.prototype.createRequestElement = function(a) {
        w.assert(s.isDocument(a));
        a = s.createRootElement(a, "request");
        a.setAttribute("window", this.m_window_id !== null ? this.m_window_id : "");
        a.setAttribute("sequence", this.m_sequence_number);
        for (var b = s.createChildElement(a, "mirror"), b = s.createChildElement(b, "data_diffs"), c = this.m_data_diffs, d = 0; d < c.length; d++) {
            var e = b,
                g = c[d];
            w.assert(s.isElement(e));
            w.assert(g instanceof n);
            var f = void 0;
            g instanceof m ? f = "insert" : g instanceof q ? f = "replace" : (w.assert(g instanceof u),
                f = "delete");
            var h = g.getContext(),
                g = g.getPayload(),
                e = s.createChildElement(e, f);
            e.setAttribute("context", h);
            if (f === "insert" || f === "replace") f = h.getParts()[h.getLength() - 1], v(e, g, f)
        }
        s.createChildElement(a, "action").setAttribute("context", this.m_context);
        this.m_browser_event !== null && r(a, this.m_browser_event)
    };
    return o
});
define("unit/RendererUtil", "Lang,util/DomUtil,data/value/Value,data/value/ScalarNullValue,data/value/ScalarValue,data/value/StringValue,data/value/BooleanValue,data/value/TupleValue,unit/Renderer,unit/RendererMap".split(","), function(h, c, b, d, a, e, l) {
    function g() {}
    var k = new h,
        f = new c;
    g.prototype.setClass = function(a, b) {
        k.assert(f.isElement(a));
        k.assert(b instanceof e || k.isString(b) || b instanceof d || b === null);
        b instanceof e ? (b = b.getObject(), f.addClass(a, b)) : k.isString(b) ? f.addClass(a, b) : (k.assert(b instanceof d || b === null), f.removeClass(a, void 0))
    };
    g.prototype.setStyle = function(a, b) {
        k.assert(f.isElement(a));
        k.assert(b instanceof e || k.isString(b) || b instanceof d || b === null);
        b instanceof e ? (b = b.getObject(), f.style(a, b)) : k.isString(b) ? f.style(a, b) : (k.assert(b instanceof d || b === null), f.style(a, ""))
    };
    g.prototype.setAttribute = function(b, c, e) {
        k.assert(f.isElement(b));
        k.assert(k.isString(c));
        if (e === null || e === void 0 || e instanceof d) return f.removeAttr(b, c);
        else e instanceof a && (e = e.getObject());
        return f.attr(b, c,
            e)
    };
    g.prototype.setAttributeIfTrue = function(a, b, c) {
        k.assert(f.isElement(a));
        k.assert(k.isString(b));
        k.assert(c instanceof l || k.isBoolean(c));
        c instanceof l && (c = c.getObject());
        c ? f.attr(a, b, b) : f.removeAttr(a, b)
    };
    return g
});
define("unit/HtmlRendererUtil", "Lang,util/DomUtil,data/value/Value,data/value/ScalarNullValue,data/value/ScalarValue,data/value/StringValue,data/value/BooleanValue,data/value/TupleValue,unit/Renderer,unit/RendererMap,unit/RendererUtil".split(","), function(h, c, b, d, a, e, l, g, k, f, n) {
    function m() {}
    var q = new h,
        u = new c,
        o = new n;
    new f;
    var r = "id,style,class,title,accesskey,dir,lang,tabindex".split(",");
    m.prototype.setGlobalAttributes = function(a, b) {
        q.assert(u.isElement(a));
        for (index in r)(b === null || b instanceof d) && u.removeAttr(a, b.getObject()), b instanceof g && b.getAttribute(r[index]) && u.attr(a, r[index], b.getAttribute(r[index]).getObject())
    };
    m.prototype.makeReplaceRenderer = function(a) {
        q.assert(q.isString(a));
        var b = this.makeRendererName("replace", a);
        return new k(b, "replace", a, function(b, c) {
            var e = c.getPayload();
            o.setAttribute(b.getComponent(), a, e)
        })
    };
    m.prototype.addGlobalRenderers = function(a) {
        q.assert(a instanceof f);
        for (index in r) r[index] != "style" && a.add(this.makeReplaceRenderer(r[index]));
        a.add(new k("replaceStyle",
            "replace", "style",
            function(a, b) {
                var c = b.getPayload();
                o.setStyle(a.getComponent(), c)
            }))
    };
    m.prototype.makeRendererName = function(a, b) {
        q.assert(q.isString(a));
        q.assert(q.isString(b));
        return a + b.charAt(0).toLocaleUpperCase() + b.slice(1)
    };
    return m
});
define("data/value/SwitchNullValue", ["Lang", "data/value/NullValue"], function(h, c) {
    function b() {
        c.call(this)
    }
    new h;
    b.prototype = new c;
    return b
});
define("data/value/TupleNullValue", ["Lang", "data/value/NullValue"], function(h, c) {
    function b() {
        c.call(this)
    }
    new h;
    b.prototype = new c;
    return b
});
define("data/DataCloner", "Lang,util/DomUtil,data/diff/DataDiff,data/DataPath,data/DataTree,data/value/Value,data/value/TupleValue,data/value/CollectionValue,data/value/ListValue,data/value/SwitchValue,data/value/StringValue,data/value/IntegerValue,data/value/LongValue,data/value/DoubleValue,data/value/BooleanValue,data/value/XhtmlValue,data/value/TupleNullValue,data/value/SwitchNullValue,data/value/ScalarNullValue,data/constraint/ConstraintUtil".split(","), function(h, c, b, d, a, e, l, g, k, f, n, m, q, u, o, r,
    v, w, A, s) {
    function D() {}
    var y = new h;
    new c;
    s = new s;
    D.prototype.clone = function(c) {
        if (c === null) return null;
        if (c instanceof a) {
            var g = new a;
            g.setValue(this.clone(c.getValue()));
            return g
        } else if (c instanceof e) return this.cloneValue(c);
        else if (c instanceof b) return new b(this.clone(c.getContext()), this.clone(c.getPayload()));
        else if (c instanceof d) return new d(c.getString());
        else y.assert(!1, "Unrecognized value type", c)
    };
    D.prototype.cloneValue = function(a) {
        var b = null;
        if (a instanceof l)
            for (var b = new l, c = a.getAttributeNames(),
                    e = 0, d = c.length; e < d; ++e) {
                var h = c[e],
                    R = this.clone(a.getAttribute(h));
                b.setAttribute(h, R)
            } else if (a instanceof g) {
                b = a instanceof k ? new k : new g;
                c = a.getTupleValues();
                e = 0;
                for (d = c.length; e < d; ++e) h = c[e], R = this.clone(h), h = a.getPredicate(h), b.addTupleValue(R, h);
                s.copyConstraints(a, b)
            } else a instanceof f ? b = new f(a.getCaseName(), this.clone(a.getCaseValue())) : a instanceof n ? b = new n(a.getObject()) : a instanceof m ? b = new m(a.getObject()) : a instanceof q ? b = new q(a.getObject()) : a instanceof u ? b = new u(a.getObject()) :
                a instanceof o ? b = new o(a.getObject()) : a instanceof r ? b = new r(this.cloneNode(a.getObject())) : a instanceof v ? b = new v : a instanceof w ? b = new w : a instanceof A ? b = new A : y.assert(!1, "Unrecognized value type", a);
        return b
    };
    D.prototype.cloneNode = function(a) {
        return a === null ? null : a === document ? document : a.cloneNode(!0)
    };
    return D
});
define("data/TypeRegistry", "Lang,util/ArrayUtil,util/collection/StringHashMap,data/type/ListType,data/type/TupleType,data/type/SwitchType,data/type/ScalarType,data/type/BooleanType,data/type/IntegerType,data/type/LongType,data/type/DoubleType,data/type/StringType,data/type/XhtmlType,data/value/Value,data/value/TupleNullValue,data/value/SwitchNullValue,data/value/ScalarNullValue,data/value/ListValue,data/value/TupleValue,data/value/SwitchValue,data/value/BooleanValue,data/value/IntegerValue,data/value/LongValue,data/value/DoubleValue,data/value/StringValue,data/value/XhtmlValue".split(","), function(h,
    c, b, d, a, e, l, g, k, f, n, m, q, u, o, r, v, w, A, s, D, y, x, E, I, z) {
    function F() {
        this.m_name_index = new b;
        this.m_value_class_name_index = new b;
        this.addDefault()
    }
    var B = new h;
    new c;
    F.prototype.addDefault = function() {
        this.add("collection", d, w);
        this.add("tuple", a, A);
        this.add("switch", e, s);
        this.add("tuple_null", a, o);
        this.add("switch_null", e, r);
        this.add("scalar_null", l, v);
        this.add("boolean", g, D);
        this.add("double", n, E);
        this.add("integer", k, y);
        this.add("long", f, x);
        this.add("string", m, I);
        this.add("xhtml", q, z)
    };
    F.prototype.add =
        function(a, b, c) {
            B.assert(B.isString(a));
            b = {
                name: a,
                type_class: b,
                value_class: c
            };
            this.m_name_index.put(a, b);
            this.m_value_class_name_index.put(c.prototype.className, b)
        };
    F.prototype.getTypeClass = function(a) {
        B.assert(B.isString(a) || a.prototype instanceof u);
        var b = null;
        B.isString(a) ? b = this.m_name_index.get(a) : (B.assert(a.prototype instanceof u), b = this.m_value_class_name_index.get(a.prototype.className));
        return b === null ? null : b.type_class
    };
    return F
});
define("data/DataMapUtil", "Lang,util/ArrayUtil,util/collection/IdentityMultiMap,data/TypeRegistry,data/type/Type,data/value/Value,data/value/CollectionValue,data/value/TupleValue,data/value/SwitchValue".split(","), function(h, c, b, d, a, e, l, g, k) {
    function f() {}

    function n(c, d, f) {
        m.assert(c instanceof b);
        m.assert(d instanceof e);
        m.assert(f instanceof a);
        var h = d.constructor,
            A = f.constructor,
            s = A === u.getTypeClass(h),
            h = A.prototype instanceof u.getTypeClass(h);
        !s && !h && m.assert(!1, 'Type mismatch for attribute "' +
            d.getDataPath().getLastPart() + '" between ' + d + " and " + f);
        if (d instanceof g) q.forEach(d.getAttributeNames(), function(a) {
            var b = d.getAttribute(a),
                a = f.getAttribute(a);
            n(c, b, a)
        });
        else if (d instanceof k) n(c, d.getCaseValue(), f.getCase(d.getCaseName()));
        else if (d instanceof l) {
            var D = f.getTupleType();
            q.forEach(d.getTupleValues(), function(a) {
                n(c, a, D)
            })
        }
        c.put(d, f)
    }
    var m = new h,
        q = new c,
        u = new d;
    f.prototype.map = function(c, d) {
        m.assert(c !== void 0 && c !== null);
        m.assert(d !== void 0 && d !== null);
        if (c instanceof e && d instanceof a) {
            var g = new b;
            n(g, c, d);
            return g
        } else m.assert(!1)
    };
    return f
});
define("remote/UnitConfigJsonParser", "Lang,util/ArrayUtil,util/DomUtil,util/collection/StringHashSet,data/TypeRegistry,unit/UnitConfig,data/value/XhtmlValue".split(","), function(h, c, b, d, a, e, l) {
    function g(a, b) {
        b === void 0 && (b = 0);
        f.assert(f.isArray(a));
        var c = a[b];
        f.assert(c !== null, "First element should specify the type name");
        var d = q.getTypeClass(c);
        f.assert(d !== null, 'Unknown type "' + c + '"');
        f.assert(d.prototype instanceof Type);
        var e = new d,
            d = a[b + 1];
        switch (c) {
            case "collection":
                e.setTupleType(g(a, b + 1));
                break;
            case "tuple":
                n.forEach(d, function(a) {
                    e.setAttribute(a[0], g(a, 1))
                });
                break;
            case "switch":
                n.forEach(d, function(a) {
                    e.setCase(a[0], g(a, 1))
                })
        }
        return e
    }

    function k(a) {
        f.assert(f.isArray(a));
        for (var b = new d, c = 0, e = a.length; c < e; c++) b.add(a[c]);
        return b
    }
    var f = new h,
        n = new c,
        m = new b,
        q = new a;
    return {
        parse: function(a) {
            f.assert(f.isArray(a));
            var b = a[1];
            f.assert(b.charAt(0) === "/", "Unit config id must start with /");
            var c = a[0];
            f.assert(c !== null, "unit_config must have specified the unit class as the first element ");
            var d = g(a, 2),
                h = k(a[4]),
                q = k(a[5]),
                n = null;
            if (a[6] !== void 0) a = a[6], f.assert(f.isString(a)), a = m.parseTextToXml(a).documentElement, n = new l(a);
            return new e(b, c, d, h, q, n)
        }
    }
});
define("remote/UnitConfigXmlParser", "Lang,util/ArrayUtil,util/DomUtil,util/collection/StringHashSet,data/TypeRegistry,unit/UnitConfig,data/value/XhtmlValue".split(","), function(h, c, b, d, a, e, l) {
    function g(a) {
        k.assert(n.isElement(a));
        var b = n.getAttribute(a, "type");
        k.assert(b !== null, "<" + a.tagName + '> must have a "type" attribute');
        var c = m.getTypeClass(b);
        k.assert(c !== null, "<" + a.tagName + '> has unknown type "' + b + '"');
        k.assert(c.prototype instanceof Type);
        var d = new c;
        switch (b) {
            case "collection":
                f.forEach(n.getChildElements(a),
                    function(a) {
                        d.setTupleType(g(a))
                    });
                break;
            case "tuple":
                f.forEach(n.getChildElements(a), function(a) {
                    d.setAttribute(a.prefix && a.prefix.length > 0 ? a.localName || a.baseName : a.tagName, g(a))
                });
                break;
            case "switch":
                f.forEach(n.getChildElements(a), function(a) {
                    d.setCase(a.prefix && a.prefix.length > 0 ? a.localName || a.baseName : a.tagName, g(a))
                })
        }
        return d
    }
    var k = new h,
        f = new c,
        n = new b,
        m = new a;
    return {
        parse: function(a) {
            k.assert(n.isElement(a));
            k.assert(a.tagName === "unit_config");
            var b = n.getAttribute(a, "id");
            b === null && (b = "/");
            k.assert(b.charAt(0) === "/", "Unit config id must start with /");
            var c = n.getAttribute(a, "class");
            k.assert(c !== null, '<unit_config> must have a "class" attribute');
            var f = n.getChildElementsByTagName(a, "root");
            k.assert(f.length === 1, "<unit_config> must have exactly one <root> element");
            var f = g(f[0]),
                h = new d,
                m = new d,
                a = n.getChildElementsByTagName(a, "template"),
                a = a.length === 1 ? new l(a[0]) : null;
            return new e(b, c, f, h, m, a)
        }
    }
});
define("remote/DataDiffXmlParser", "Lang,util/ArrayUtil,util/DomUtil,data/DataPath,data/type/Type,data/type/ListType,data/type/CollectionType,data/type/TupleType,data/type/SwitchType,data/type/ScalarType,data/type/IntegerType,data/type/LongType,data/type/DoubleType,data/type/StringType,data/type/BooleanType,data/type/XhtmlType,data/value/Value,data/value/TupleNullValue,data/value/SwitchNullValue,data/value/ScalarNullValue,data/value/ListValue,data/value/TupleValue,data/value/SwitchValue,data/value/IntegerValue,data/value/LongValue,data/value/DoubleValue,data/value/StringValue,data/value/BooleanValue,data/value/XhtmlValue,remote/RemoteUtil,remote/UnitConfigMap,data/diff/DataDiff".split(","), function(h,
    c, b, d, a, e, l, g, k, f, n, m, q, u, o, r, v, w, A, s, D, y, x, E, I, z, F, B, R, J, P, Q) {
    function S(b, c) {
        L.assert(N.isElement(b));
        L.assert(c instanceof a);
        var d = null;
        if (N.getAttribute(b, "null") === "true") c instanceof g ? d = new w : c instanceof k ? d = new A : c instanceof f && (d = new s);
        else if (c instanceof e) d = new D, H.forEach(N.getChildElements(b), function(a) {
            L.assert(a.tagName === "tuple", 'A collection tuple must use "tuple" as its element name');
            var b = S(a, c.getTupleType()),
                a = N.getAttribute(a, "key");
            L.assert(a !== null, 'A collection tuple must have a "key" attribute');
            d.addTupleValue(b, a)
        });
        else if (c instanceof g) d = new y, H.forEach(N.getChildElements(b), function(a) {
            var b = a.tagName;
            d.setAttribute(b, S(a, c.getAttribute(b)))
        });
        else if (c instanceof k) {
            var h = N.getChildElements(b);
            L.assert(h.length === 1, "<" + b.tagName + "> has a switch type but has more than one child value");
            var l = h[0].tagName;
            L.assert(c.getCase(l) !== null, "<" + b.tagName + '> has case name "' + l + '" that is not within its switch type');
            d = new x(l, S(h[0], c.getCase(l)))
        } else c instanceof u ? d = new F(N.textContent(b)) :
            c instanceof n ? (h = parseInt(N.textContent(b)), d = new E(h)) : c instanceof m ? (h = parseInt(N.textContent(b)), d = new I(h)) : c instanceof q ? (h = parseFloat(N.textContent(b)), d = new z(h)) : c instanceof o ? (h = L.parseBoolean(N.textContent(b)), d = new B(h)) : c instanceof r && (d = new R(b));
        return d
    }
    var L = new h,
        H = new c,
        N = new b;
    return {
        parse: function(a, b) {
            L.assert(N.isElement(a));
            L.assert(a.tagName === "data_diff");
            L.assert(b instanceof P);
            var c = N.getAttribute(a, "id");
            c === null && (c = "/");
            L.assert(c.charAt(0) === "/", "Unit instance id must start with /");
            var e = N.getAttribute(a, "context");
            L.assert(e !== null, '<unit_data_diff> must have a "context" attribute');
            var e = new d(e),
                g = null,
                f = N.getChildElements(a);
            L.assert(f.length <= 1, "<unit_data_diff> can have at most one child element as its payload");
            if (f.length === 1) {
                g = f[0];
                L.assert(e !== "" || g.tagName === "root", "Root of value tree must be named <root>");
                var f = J.getUnitConfigId(c),
                    h = b.get(f);
                L.assert(h !== null, "Unable to find unit config with id " + f + " (converted from unit instance id " + c + ")");
                c = h.getRootType();
                c = e.toSchemaPath().find(c);
                g = S(g, c)
            }
            return new Q(e, g)
        }
    }
});
define("remote/UnitDataDiffJsonParser", "Lang,util/ArrayUtil,util/DomUtil,data/DataPath,data/type/Type,data/type/ListType,data/type/CollectionType,data/type/TupleType,data/type/SwitchType,data/type/ScalarType,data/type/IntegerType,data/type/LongType,data/type/DoubleType,data/type/StringType,data/type/BooleanType,data/type/XhtmlType,data/value/Value,data/value/TupleNullValue,data/value/SwitchNullValue,data/value/ScalarNullValue,data/value/ListValue,data/value/ListNullValue,data/value/TupleValue,data/value/SwitchValue,data/value/IntegerValue,data/value/LongValue,data/value/DoubleValue,data/value/StringValue,data/value/BooleanValue,data/value/XhtmlValue,remote/RemoteUtil,remote/UnitConfigMap,unit/UnitDataDiff".split(","), function(h,
    c, b, d, a, e, l, g, k, f, n, m, q, u, o, r, v, w, A, s, D, y, x, E, I, z, F, B, R, J, P, Q, S) {
    function L(b, c, d) {
        H.assert(c instanceof a);
        d === void 0 && (d = 0);
        var h = null;
        if (b === null) c instanceof g ? h = new w : c instanceof k ? h = new A : c instanceof f ? h = new s : c instanceof e && (h = new y);
        else if (c instanceof e) h = new D, H.assert(H.isArray(b)), N.forEach(b, function(a) {
            var b = a[0],
                a = L(a, c.getTupleType(), 1);
            H.assert(b !== null, 'A collection tuple must have a "key" specified');
            h.addTupleValue(a, b)
        });
        else if (c instanceof g) {
            h = new x;
            H.assert(H.isArray(b));
            for (var l = c.getAttributeNames(), Q = 0; Q < l.length; Q++) {
                var v = l[Q],
                    S = L(b[d + Q], c.getAttribute(v));
                h.setAttribute(v, S)
            }
        } else if (c instanceof k) H.assert(H.isArray(b)), d = b[0], H.assert(c.getCase(d) !== null, 'Case name "' + d + '" is not within the switch type'), h = new E(d, L(b[1], c.getCase(d)));
        else if (c instanceof u) h = new B(b);
        else if (c instanceof n) h = new I(b);
        else if (c instanceof m) h = new z(b);
        else if (c instanceof q) h = new F(b);
        else if (c instanceof o) h = new R(b);
        else if (c instanceof r) b = K.parseTextToXml(b).documentElement,
            h = new J(b);
        return h
    }
    var H = new h,
        N = new c,
        K = new b;
    return {
        parse: function(a, b) {
            H.assert(H.isArray(a));
            H.assert(b instanceof Q);
            var c = a[0];
            H.assert(c.charAt(0) === "/", "Unit instance id must start with /");
            var g = a[1];
            H.assert(g !== null, "target method must be the the second element.");
            var h = a[2],
                f = a[3];
            H.assert(k !== null, "The relative context must be specified as the third element.");
            H.assert(f.charAt(0) !== "/", "Context must not start with /");
            var k = new d(f),
                f = null;
            if (a.length > 5) {
                var f = a[5],
                    l = P.getUnitConfigId(c),
                    o = b.get(l);
                H.assert(o !== null, "Unable to find unit config with id " + l + " (converted from unit instance id " + c + ")");
                var l = o.getRootType(),
                    m = k.toSchemaPath().find(l),
                    r = 0,
                    q = m.getParent(),
                    l = !1,
                    o = null;
                q !== null && q instanceof e && (l = !0, o = f[0], r++);
                f = L(f, m, r);
                l && f.setEdgeLabel(o)
            }
            return new S(c, g, h, k, f)
        }
    }
});
define("remote/UnitCompositeDiffJsonParser", "Lang,util/ArrayUtil,util/DomUtil,unit/UnitCompositeDiff,remote/UnitDataDiffJsonParser,remote/UnitXhtmlDiffJsonParser,remote/UnitJsonDiffJsonParser".split(","), function(h, c, b, d, a, e, l) {
    function g(b, c) {
        var d = [];
        f.forEach(b, function(b) {
            var g = b[4],
                f = null;
            g === "data" ? f = a.parse(b, c) : g === "xhtml" ? f = e.parse(b) : (k.assert(g === "json"), f = l.parse(b));
            k.assert(f !== null);
            d.push(f)
        });
        return d
    }
    var k = new h,
        f = new c;
    new b;
    return {
        parse: function(a, b) {
            k.assert(k.isArray(a));
            var c =
                a[0];
            k.assert(c.charAt(0) === "/", "Unit instance id must start with /");
            var e = a[1];
            k.assert(e !== null, "target method must be the the second element.");
            var f = a[2],
                h = a[3];
            k.assert(h !== null, "The relative context must be specified as the third element.");
            k.assert(h.charAt(0) !== "/", "Context must not start with /");
            var l = g(a[5], b);
            return new d(c, e, f, h, l)
        }
    }
});
define("remote/RefreshResponseJsonParser", "Lang,util/ArrayUtil,util/DomUtil,remote/RemoteUtil,remote/RefreshResponse,remote/UnitConfigMap,remote/UnitConfigJsonParser,remote/UnitDataDiffJsonParser,remote/UnitXhtmlDiffJsonParser,remote/UnitJsonDiffJsonParser,remote/UnitCompositeDiffJsonParser".split(","), function(h, c, b, d, a, e, l, g, k, f, n) {
    function m(a, b) {
        var c = [];
        E.forEach(a, function(a) {
            var d = a[4],
                e = null;
            d === "data" ? e = g.parse(a, b) : d === "xhtml" ? e = k.parse(a) : d === "composite" ? e = n.parse(a, b) : (x.assert(d === "json"),
                e = f.parse(a));
            x.assert(e !== null);
            c.push(e)
        });
        return c
    }

    function q(a, b, c) {
        x.assert(a !== void 0);
        x.assert(b instanceof SchemaTree);
        x.assert(c instanceof UnitConfigTree);
        this.m_response = a;
        this.m_schema_tree = b;
        this.m_unit_config_tree = c;
        this.m_unit_config_diffs = [];
        this.m_data_diffs = [];
        this.m_pre_renderer_diffs = []
    }

    function u(a) {
        var b = [],
            a = j.getChildren(a);
        E.forEach(a, function(a) {
            var c = j.getAttribute(a, "type");
            x.assert(c === "insert");
            var d = j.getAttribute(a, "context");
            x.assert(x.isString(d));
            var d = new SchemaPath(d),
                e = j.getChild(a, "root"),
                f = r(e),
                e = new SchemaTree;
            e.setType(f);
            f = e.getType();
            a = j.getChild(a, "constraints");
            a !== void 0 && a !== null && o(e, a);
            a = null;
            switch (c) {
                case "insert":
                    a = new InsertSchemaDiff(d, f);
                    break;
                case "delete":
                    a = new DeleteSchemaDiff(d)
            }
            x.assert(a instanceof SchemaDiff);
            b.push(a)
        });
        return b
    }

    function o(a, b) {
        x.assert(a instanceof SchemaTree);
        var c = j.getChildren(b, "local-key");
        E.forEach(c, function(b) {
            var c = new SchemaPath(j.getAttribute(b, "collection")),
                d = [],
                b = j.getChildren(b);
            E.forEach(b, function(b) {
                var b =
                    new SchemaPath(c + "/" + j.getAttribute(b, "path")),
                    e = b.find(a);
                x.assert(e !== null);
                d.push(b)
            });
            b = new LocalPrimaryKeyConstraint(c, d);
            a.addConstraint(b)
        })
    }

    function r(a) {
        var b = j.getAttribute(a, "type");
        x.assert(x.isString(b));
        var c = t.getTypeClass(b);
        x.assert(c !== null);
        x.assert(c.prototype instanceof Type);
        var d = new c;
        switch (b) {
            case "collection":
                d.setTupleType(r(j.getChild(a, "tuple")));
                break;
            case "tuple":
                E.forEach(j.getChildren(a), function(a) {
                    var b = j.getTagName(a);
                    d.setAttribute(b, r(a))
                });
                break;
            case "switch":
                E.forEach(j.getChildren(a),
                    function(a) {
                        var b = j.getTagName(a);
                        d.setCase(b, r(a))
                    })
        }
        return d
    }

    function v(a, b) {
        var c = [],
            d = j.getChildren(a);
        E.forEach(d, function(a) {
            var d = j.getAttribute(a, "context");
            x.assert(x.isString(d));
            var d = new SchemaPath(d),
                e = j.getChild(a, "root"),
                f = b.getType(),
                e = w(e, f, null, null),
                f = new UnitConfigTree;
            f.setUnitConfig(e);
            e = f.getUnitConfig();
            f = null;
            switch (j.getAttribute(a, "type")) {
                case "insert":
                    f = new InsertUnitConfigDiff(d, e);
                    break;
                case "delete":
                    f = new DeleteUnitConfigDiff(d)
            }
            x.assert(f instanceof UnitConfigDiff);
            c.push(f)
        });
        return c
    }

    function w(a, b, c, d) {
        x.assert(b instanceof Type);
        x.assert(c === null || c instanceof UnitConfig);
        var e = null,
            e = j.getAttribute(a, "unit");
        e !== void 0 && e !== null ? (e = new UnitConfig(b.toSchemaPath(), e), c !== null && c.attach(e)) : e = c;
        b instanceof BooleanType && (x.assert(x.isString(d) && d !== null), d.substr(0, 2) === "on" && j.getAttribute(a, "invoke") === "true" && (c = new UnitActionConfig(b.toSchemaPath(), d), e.addUnitActionConfig(c)));
        a = j.getChildren(a);
        b = b.getChildren();
        x.assert(a.length === b.length);
        for (c =
            0; c < a.length; c++) {
            var d = a[c],
                f = j.getTagName(d);
            w(d, b[c], e, f)
        }
        return e
    }

    function A(a, b) {
        var c = j.getChildren(a),
            d = [];
        E.forEach(c, function(a) {
            var c = j.getAttribute(a, "context");
            x.assert(x.isString(c));
            var c = new DataPath(c),
                e = j.getChild(a, "root");
            if (e === null) {
                var f = j.getChildren(a);
                f.length > 0 && (x.assert(f.length === 1), e = f[0])
            }
            if (e !== void 0 && e !== null) var g = c.toSchemaPath().find(b),
                g = D(e, g).getValue();
            e = null;
            switch (j.getAttribute(a, "type")) {
                case "insert":
                    e = new InsertDataDiff(c, g);
                    break;
                case "replace":
                    e = new ReplaceDataDiff(c,
                        g);
                    break;
                case "delete":
                    e = new DeleteDataDiff(c)
            }
            x.assert(e instanceof DataDiff);
            d.push(e)
        });
        return d
    }

    function s(a) {
        var a = j.getChildren(a),
            b = [];
        E.forEach(a, function(a) {
            var c = j.getAttribute(a, "unit_context");
            x.assert(x.isString(c));
            var c = new DataPath(c),
                d = j.getAttribute(a, "context");
            x.assert(x.isString(d));
            var d = new DataPath(d),
                e = j.getChild(a, "root");
            if (e !== void 0 && e !== null) var f = D(e, new StringType).getValue();
            e = null;
            switch (j.getAttribute(a, "type")) {
                case "insert":
                    e = new InsertDataDiff(d, f);
                    break;
                case "replace":
                    e =
                        new ReplaceDataDiff(d, f);
                    break;
                case "delete":
                    e = new DeleteDataDiff(d)
            }
            x.assert(e instanceof DataDiff);
            a = new PreRendererDiff(c, e);
            b.push(a)
        });
        return b
    }

    function D(a, b) {
        x.assert(b instanceof Type);
        var c = y(a, b),
            d = new DataTree;
        d.setValue(c);
        return d
    }

    function y(a, b, c) {
        x.assert(b instanceof Type);
        var d = null;
        if (j.getAttribute(a, "null") === "true") b instanceof TupleType ? d = new TupleNullValue : b instanceof SwitchType ? d = new SwitchNullValue : b instanceof ScalarType && (d = new ScalarNullValue);
        else if (b instanceof ListType) {
            var d =
                new ListValue,
                e = p.getLocalPrimaryKeyConstraint(b);
            if (e === null) throw Error("'" + c + "' is a list but does not have a constraint");
            c = ConstraintUtil.copyLocalPrimaryKeyConstraint(e, b.toSchemaPath().getLength());
            d.addConstraint(c);
            c = j.getChildren(a);
            E.forEach(c, function(a) {
                var c = y(a, b.getTupleType()),
                    a = j.getAttribute(a, "predicate");
                d.addTupleValue(c, a)
            })
        } else if (b instanceof TupleType) d = new TupleValue, E.forEach(j.getChildren(a), function(a) {
            var c = j.getTagName(a);
            d.setAttribute(c, y(a, b.getAttribute(c), c))
        });
        else if (b instanceof SwitchType) {
            a = j.getChildren(a);
            if (a.length !== 1) throw Error("'" + c + "' is a switch but has " + child_attribute_names.length + " children");
            a = a[0];
            e = j.getTagName(a);
            if (b.getCase(e) === null) throw Error("'" + c + "' has case name '" + e + "' that is not within its switch type");
            d = new SwitchValue(e, y(a, b.getCase(e), e))
        } else if (b instanceof StringType) d = new StringValue(j.getText(a));
        else if (b instanceof IntegerType) c = parseInt(j.getText(a)), d = new IntegerValue(c);
        else if (b instanceof LongType) c = parseInt(j.getText(a)),
            d = new LongValue(c);
        else if (b instanceof DoubleType) c = parseFloat(j.getText(a)), d = new DoubleValue(c);
        else if (b instanceof BooleanType) c = x.parseBoolean(j.getText(a)), d = new BooleanValue(c);
        else if (b instanceof XhtmlType) c = j.getText(a), c = I.parseTextToXml(I.trimText(c)).childNodes, x.assert(c.length === 1), d = new XhtmlValue(c[0]);
        return d
    }
    var x = new h,
        E = new c,
        I = new b;
    q.prototype.getUnitConfigTree = function() {
        return this.m_unit_config_tree
    };
    q.prototype.getSchemaTree = function() {
        return this.m_schema_tree
    };
    q.prototype.getUnitConfigDiffs =
        function() {
            return this.m_unit_config_diffs
        };
    q.prototype.getDataDiffs = function() {
        return this.m_data_diffs
    };
    q.prototype.getPreRendererDiffs = function() {
        return this.m_pre_renderer_diffs
    };
    q.prototype.parse = function() {
        this.parseSchemaDiffs();
        this.parseDataDiffs();
        this.parsePreRendererDiffs()
    };
    q.prototype.parseSchemaDiffs = function() {
        var a = this.findDiffsObject("schema_diffs", !1);
        if (!(a === void 0 || a === null)) {
            this.m_schema_diffs = u(a);
            x.log(this.m_schema_diffs);
            if (this.m_schema_diffs.length > 0) this.m_schema_tree =
                (new Cloner).clone(this.m_schema_tree), (new SchemaPatcher).patch(this.m_schema_tree, this.m_schema_diffs, SchemaPatcher.DESTROY_INPUT_DIFFS), x.log(this.m_schema_tree);
            this.m_unit_config_diffs = v(a, this.m_schema_tree);
            x.log(this.m_unit_config_diffs);
            if (this.m_unit_config_diffs.length > 0) this.m_unit_config_tree = (new Cloner).clone(this.m_unit_config_tree), (new UnitConfigPatcher).patch(this.m_unit_config_tree, this.m_schema_tree, this.m_unit_config_diffs, UnitConfigPatcher.DESTROY_INPUT_DIFFS), x.log(this.m_unit_config_tree)
        }
    };
    q.prototype.parseDataDiffs = function() {
        var a = this.findDiffsObject("data_diffs", !0);
        x.assert(a !== null);
        this.m_data_diffs = A(a, this.m_schema_tree);
        x.log(this.m_data_diffs)
    };
    q.prototype.parsePreRendererDiffs = function() {
        var a = this.findDiffsObject("pre_renderer_diffs", !0);
        x.assert(a !== null);
        this.m_pre_renderer_diffs = s(a, this.m_schema_tree);
        x.log(this.m_pre_renderer_diffs)
    };
    q.prototype.findDiffsObject = function(a) {
        var b = j.getChild(this.m_response, "mirror");
        return j.getChild(b, a)
    };
    return {
        parse: function(b, c) {
            x.assert(x.isString(b));
            x.assert(c === null || c instanceof e);
            var d = eval(b);
            x.assert(x.isArray(d));
            x.assert(d[0] === "response");
            if (d[1] === "navigate") return x.assert(d.length === 5), {
                navigate: d[2],
                open_window: d[3],
                method: d[4]
            };
            if (d[1] === "reload") return x.assert(d.length === 2), {
                reload: !0
            };
            x.assert(d.length === 6);
            var f = d[1],
                g = d[2],
                h = d[4],
                k = d[5],
                d = m(d[3], c),
                o = null;
            h.length > 0 && (o = new e, E.forEach(h, function(a) {
                a = l.parse(a);
                o.put(a.getUnitConfigId(), a)
            }));
            h = m(k, o !== null ? o : c);
            k = new a;
            k.setWindowId(f);
            k.setSequenceNumber(g);
            k.setUnitConfigMap(o);
            k.setUnitDiffs(h);
            k.setPreUnitDiffs(d);
            return k
        }
    }
});
define("remote/UnitDataDiffXmlParser", "Lang,util/ArrayUtil,util/DomUtil,data/DataPath,data/type/Type,data/type/ListType,data/type/CollectionType,data/type/TupleType,data/type/SwitchType,data/type/ScalarType,data/type/IntegerType,data/type/LongType,data/type/DoubleType,data/type/StringType,data/type/BooleanType,data/type/XhtmlType,data/value/Value,data/value/TupleNullValue,data/value/SwitchNullValue,data/value/ScalarNullValue,data/value/ListValue,data/value/ListNullValue,data/value/TupleValue,data/value/SwitchValue,data/value/IntegerValue,data/value/LongValue,data/value/DoubleValue,data/value/StringValue,data/value/BooleanValue,data/value/XhtmlValue,remote/RemoteUtil,remote/UnitConfigMap,unit/UnitDataDiff".split(","), function(h,
    c, b, d, a, e, l, g, k, f, n, m, q, u, o, r, v, w, A, s, D, y, x, E, I, z, F, B, R, J, P, Q, S) {
    function L(b, c) {
        H.assert(K.isElement(b));
        H.assert(c instanceof a);
        var d = null;
        if (K.getAttribute(b, "null") === "true") c instanceof g ? d = new w : c instanceof k ? d = new A : c instanceof f ? d = new s : c instanceof e && (d = new y);
        else if (c instanceof e) d = new D, N.forEach(K.getChildElements(b), function(a) {
            H.assert(a.tagName === "tuple", 'A collection tuple must use "tuple" as its element name');
            var b = L(a, c.getTupleType()),
                a = K.getAttribute(a, "key");
            H.assert(a !==
                null, 'A collection tuple must have a "key" attribute');
            d.addTupleValue(b, a)
        });
        else if (c instanceof g) d = new x, N.forEach(K.getChildElements(b), function(a) {
            var b = a.prefix && a.prefix.length > 0 ? a.localName || a.baseName : a.tagName;
            d.setAttribute(b, L(a, c.getAttribute(b)))
        });
        else if (c instanceof k) {
            var h = K.getChildElements(b);
            H.assert(h.length === 1, "<" + b.tagName + "> has a switch type but has more than one child value");
            var l = h[0].tagName;
            H.assert(c.getCase(l) !== null, "<" + b.tagName + '> has case name "' + l + '" that is not within its switch type');
            d = new E(l, L(h[0], c.getCase(l)))
        } else c instanceof u ? d = new B(K.textContent(b)) : c instanceof n ? (h = parseInt(K.textContent(b)), d = new I(h)) : c instanceof m ? (h = parseInt(K.textContent(b)), d = new z(h)) : c instanceof q ? (h = parseFloat(K.textContent(b)), d = new F(h)) : c instanceof o ? (h = H.parseBoolean(K.textContent(b)), d = new R(h)) : c instanceof r && (d = new J(b));
        return d
    }
    var H = new h,
        N = new c,
        K = new b;
    return {
        parse: function(a, b) {
            H.assert(K.isElement(a));
            H.assert(a.tagName === "unit_data_diff");
            H.assert(b instanceof Q);
            var c =
                K.getAttribute(a, "id");
            c === null && (c = "/");
            H.assert(c.charAt(0) === "/", "Unit instance id must start with /");
            var e = K.getAttribute(a, "target");
            H.assert(e !== null, '<unit_data_diff> must have a "target" attribute');
            var f = K.getAttribute(a, "child_id"),
                h = K.getAttribute(a, "context");
            H.assert(h !== null, '<unit_data_diff> must have a "context" attribute');
            H.assert(h.charAt(0) !== "/", "Context must not start with /");
            var h = new d(h),
                g = null,
                k = K.getChildElements(a);
            H.assert(k.length <= 1, "<unit_data_diff> can have at most one child element as its payload");
            if (k.length === 1) {
                g = k[0];
                H.assert(h !== "" || g.tagName === "root", "Root of value tree must be named <root>");
                var k = P.getUnitConfigId(c),
                    l = b.get(k);
                H.assert(l !== null, "Unable to find unit config with id " + k + " (converted from unit instance id " + c + ")");
                k = l.getRootType();
                k = h.toSchemaPath().find(k);
                g = L(g, k)
            }
            return new S(c, e, f, h, g)
        }
    }
});
define("remote/RefreshResponseXmlParser", "Lang,util/ArrayUtil,util/DomUtil,remote/RemoteUtil,remote/RefreshResponse,remote/UnitConfigXmlParser,remote/UnitDataDiffXmlParser,remote/UnitXhtmlDiffXmlParser,remote/UnitConfigMap".split(","), function(h, c, b, d, a, e, l, g, k) {
    function f(a, b) {
        var c = [];
        m.forEach(a, function(a) {
            var d = null;
            a.tagName === "unit_data_diff" ? d = l.parse(a, b) : a.tagName === "unit_xhtml_diff" ? d = g.parse(a, b) : n.assert(!1, "<unit_diffs> can contain only <unit_data_diff> or <unit_xhtml_diff> elements");
            c.push(d)
        });
        return c
    }
    var n = new h,
        m = new c,
        q = new b;
    return {
        parse: function(b, c) {
            n.assert(n.isString(b));
            n.assert(c === null || c instanceof k);
            var d = q.parseTextToXml(b).documentElement;
            n.assert(d.tagName === "response", "Root element must be <response>");
            var h = [];
            if (c !== null) {
                var g = q.getChildElementsByTagName(d, "pre_unit_diffs");
                g.length > 0 && (h = q.getChildElements(g[0]), h = f(h, c))
            }
            var g = null,
                l = [],
                s = q.getChildElementsByTagName(d, "unit_configs");
            n.assert(s.length <= 1, "<response> can contain at most one <unit_configs> element");
            if (s.length === 1) {
                g = q.getChildElements(s[0]);
                m.forEach(g, function(a) {
                    n.assert(a.tagName === "unit_config", "<unit_configs> can contain only <unit_config> elements");
                    a = e.parse(a);
                    l.push(a)
                });
                for (var g = new k, s = 0, D = l.length; s < D; s++) {
                    var y = l[s];
                    g.put(y.getUnitConfigId(), y)
                }
            }
            s = g !== null ? g : c;
            n.assert(s !== null);
            d = q.getChildElementsByTagName(d, "unit_diffs");
            n.assert(d.length === 1, "<response> must contain exactly one <unit_diffs> element");
            d = q.getChildElements(d[0]);
            d = f(d, s);
            s = new a;
            s.setUnitConfigMap(g);
            s.setUnitDiffs(d);
            s.setPreUnitDiffs(h);
            return s
        }
    }
});
define("util/ValueUtil", "require,Lang,tree/TreeNode,data/DataPath,util/ArrayUtil,data/value/Value,data/DataTree,data/value/CollectionValue,data/value/TupleValue,data/value/SwitchValue,data/value/ScalarValue,data/value/NullValue".split(","), function(h, c, b, d, a, e, l, g, k, f, n, m) {
    function q() {}
    var u = new c;
    new a;
    q.prototype.deepEquals = function r(a, b) {
        if (a.constructor != b.constructor) return !1;
        if (a instanceof l) return r(a.getRoot(), b.getRoot());
        else if (a instanceof g) {
            if (a.getTupleValues().length !== b.getTupleValues().length) return !1;
            var c;
            for (c = 0; c < a.getTupleValues().length(); c += 1) {
                var d = a.getChildName(a.getTupleValues()[c]),
                    d = b.getChild(d);
                if (!r(a.getTupleValues()[c], d)) return !1
            }
            return !0
        } else if (a instanceof k) {
            for (c = 0; c < a.getAttributeNames().length; c += 1) {
                var e = a.getAttributeNames()[c],
                    d = a.getAttribute(e),
                    e = b.getAttribute(e);
                if (!r(d, e)) return !1
            }
            return !0
        } else return a instanceof f ? a.getCaseName() !== b.getCaseName() ? !1 : r(a.getCaseValue(), b.getCaseValue()) : a instanceof n ? (left_object = a.getObject(), right_object = b.getObject(), left_object ===
            right_object) : (u.assert(a instanceof m), !0)
    };
    return q
});
define("util/DataDiffUtil", "require,Lang,tree/TreeNode,data/DataPath,util/ArrayUtil,util/ValueUtil".split(","), function(h, c, b, d, a, e) {
    function l() {}
    new c;
    new a;
    var g = new e;
    l.prototype.deepEquals = function(a, b) {
        return !a.getContext().matches(b.getContext()) ? !1 : !g.deepEquals(a.getPayload(), b.getPayload()) ? !1 : !0
    };
    return l
});
define("remote/MessageManager", "Lang,util/ArrayUtil,util/DomUtil,util/XhrUtil,data/DataPath,remote/ClientRuntime,remote/RefreshRequestSerializer,util/collection/PriorityQueue,JqueryUi,css!remote/dialog".split(","), function(h, c, b, d, a, e, l, g, k) {
    function f() {
        this.m_initialized = !1;
        this.m_window_id = null;
        this.m_sequence_number = 0;
        this.m_wait_dialog_div = null;
        this.m_requests = [];
        this.m_responses = new g;
        window.onbeforeunload = m.hitch(this, this.unload)
    }

    function n(a) {
        for (var b = 0, c = !1; b < a.m_requests.length; b++) {
            var d =
                a.m_requests[b].sequence;
            if (a.m_responses.peek() && a.m_responses.peekKey() === d)
                if (d = a.m_responses.dequeue(), !d.isError && !c) {
                    a.m_initialized = !0;
                    var f = new Date;
                    d.status != 204 && (e.get().receive(d.response), a.unblockUi());
                    m.log("receive() took " + (new Date - f) + "ms. ")
                } else {
                    if (d.isError && !c) c = !0, f = d.status, m.exception(f.statusText), (d = f.status !== void 0) ? q.html(window.document.documentElement, f.responseText) : (f = "", f += "Sorry, an error has occurred on the ", f += d ? "server" : "browser", f += ".\n\nPlease click OK to reload the page.",
                        window.confirm(f) && window.location.reload(!0)), a.unblockUi()
                }
            else break
        }
        a.m_requests = a.m_requests.slice(b)
    }
    var m = new h;
    new c;
    var q = new b,
        u = new d;
    f.WAIT_MESSAGE_TIMEOUT = 500;
    f.WAIT_MESSAGE = "Please wait ...";
    f.WAIT_DIALOG_OPTIONS = {
        autoOpen: !1,
        modal: !0,
        title: f.WAIT_MESSAGE,
        closeText: "",
        draggable: !1,
        resizable: !1
    };
    f.prototype.setWindowId = function(a) {
        m.assert(a != null);
        this.m_window_id = a
    };
    f.prototype.getWindowId = function() {
        return this.m_window_id
    };
    f.prototype.hasInFlightRequest = function() {
        return this.m_in_flight_request
    };
    f.prototype.invoke = function(b, c, d, f) {
        m.assert(b instanceof a);
        m.assert(c !== void 0);
        m.assert(m.isArray(f));
        e = require("remote/ClientRuntime");
        var h = this.m_requests.length ? this.m_requests[this.m_requests.length - 1] : null;
        if (h && !h.is_async) window.alert("Event ignored as request is currently in progress");
        else {
            this.m_sequence_number++;
            var g = this.getWindowId(),
                k = this.m_sequence_number,
                b = (new l(g, k, b, c, f)).serialize();
            d || this.blockUi();
            c = {
                "X-Refresh": "yes"
            };
            this.m_initialized === !1 ? c.initial_window_id = g : c.window_id =
                g;
            var q = {
                url: location.href,
                headers: c,
                type: "POST",
                data: b,
                dataType: "text",
                success: m.hitch(this, function(a, b, c) {
                    this.m_responses.enqueue(k, {
                        isError: !1,
                        response: a,
                        status: c.status
                    });
                    n(this)
                }),
                error: m.hitch(this, function(a) {
                    this.m_responses.enqueue(k, {
                        isError: !0,
                        response: a
                    });
                    n(this)
                })
            };
            h ? h.xhr.then(m.hitch(this, function() {
                var a = {};
                this.m_requests.push(a);
                a.sequence = k;
                a.is_async = d;
                a.xhr = u.ajax(q)
            })) : (h = {}, this.m_requests.push(h), h.sequence = k, h.is_async = d, h.xhr = u.ajax(q))
        }
    };
    f.prototype.unload = function() {
        var a = {
            "X-Unload": "yes",
            window_id: this.getWindowId()
        };
        u.ajax({
            url: location.href,
            headers: a,
            data: "",
            dataType: "text",
            type: "POST",
            async: !1
        })
    };
    f.prototype.blockUi = function() {
        if (this.m_wait_dialog_div === null) this.m_wait_dialog_div = k("<div></div>").dialog(f.WAIT_DIALOG_OPTIONS);
        var a = this.m_wait_dialog_div.dialog("widget");
        a.css("visibility", "hidden");
        this.m_wait_dialog_div.dialog("open");
        setTimeout(m.hitch(this, function() {
            this.blockUiWithMessage()
        }), f.WAIT_MESSAGE_TIMEOUT);
        k(a[0].nextSibling).css("cursor", "wait")
    };
    f.prototype.blockUiWithMessage = function() {
        k(this.m_wait_dialog_div).closest("body").length > 0 && this.m_wait_dialog_div.dialog("isOpen") === !0 ? (this.m_wait_dialog_div.dialog("destroy"), this.m_wait_dialog_div = this.m_wait_dialog_div.dialog(f.WAIT_DIALOG_OPTIONS), this.m_wait_dialog_div.dialog("open")) : this.m_wait_dialog_div = null
    };
    f.prototype.unblockUi = function() {
        if (this.m_wait_dialog_div !== null) {
            var a = this.m_wait_dialog_div.dialog("widget")[0].nextSibling;
            k(a).css("cursor", "default");
            setTimeout(m.hitch(this,
                function() {
                    this.m_wait_dialog_div.dialog("destroy");
                    this.m_wait_dialog_div = null
                }), 10)
        }
    };
    return f
});
define("unit/UnitInstance", "Lang,util/ArrayUtil,util/DomUtil,data/DataPath,data/value/BooleanValue,data/diff/DataDiff,data/diff/InsertDataDiff,data/diff/ReplaceDataDiff,data/diff/DeleteDataDiff,remote/ClientRuntime,remote/RemoteUtil".split(","), function(h, c, b, d, a, e, l, g, k, f, n) {
    function m(a) {
        if (arguments.length !== 0) q.assert(q.isString(a)), this.m_unit_instance_id = a, this.m_component = this.m_root_context = null
    }
    var q = new h;
    new c;
    var u = new b;
    m.prototype.getComponent = function() {
        return this.m_component
    };
    m.prototype.getUnitInstanceId =
        function() {
            return this.m_unit_instance_id
        };
    m.prototype.setComponent = function(a) {
        this.m_component = a
    };
    m.prototype.getRenderer = function(a) {
        return this.getRendererMap().get(a)
    };
    m.prototype.collect = function(a) {
        f = require("remote/ClientRuntime");
        q.assert(a instanceof e);
        this.initRootContext();
        q.assert(this.m_root_context !== null);
        var b = a.getContext(),
            c = this.isRelativeContextValid(b);
        !c && (window.interactive_test !== void 0 || window.jstestdriver !== void 0) && console.warn("Invalid context provided for collect '" +
            b + "'");
        if (c) {
            var b = this.m_root_context.concat(b),
                c = a.getPayload(),
                d = null;
            a instanceof l ? d = new l(b, c) : a instanceof g ? d = new g(b, c) : (q.assert(a instanceof k), d = new k(b));
            f.get().collect(d)
        }
    };
    m.prototype.invoke = function(a, b) {
        f = require("remote/ClientRuntime");
        q.assert(q.isString(a));
        b === void 0 && (b = null);
        this.initRootContext();
        q.assert(this.m_root_context !== null);
        var c = (new d(a)).toSchemaPath(),
            e = new d(a);
        if (!(window.interactive_test == void 0 && window.jstestdriver == void 0) || this.hasActionContext(c) || this.isAsyncAction(c))(window.interactive_test !==
            void 0 || window.jstestdriver !== void 0) && q.assert(this.isRelativeContextValid(e)), e = this.m_root_context.concat(e), this.m_root_context.concat(c), f.get().invoke(e, b, this.isAsyncAction(c))
    };
    m.prototype.hasActionContext = function(a) {
        f = require("remote/ClientRuntime");
        var b = n.getUnitConfigId(this.m_unit_instance_id),
            b = f.get().getUnitConfigMap().get(b);
        q.assert(b !== null);
        return b.getActionContexts().contains(a.getString())
    };
    m.prototype.isAsyncAction = function(a) {
        f = require("remote/ClientRuntime");
        var b = n.getUnitConfigId(this.m_unit_instance_id),
            b = f.get().getUnitConfigMap().get(b);
        q.assert(b !== null);
        return b.getAsyncActionContexts().contains(a.getString())
    };
    m.prototype.initRootContext = function() {
        if (this.m_root_context === null) this.m_root_context = new d(this.m_unit_instance_id)
    };
    m.prototype.isRelativeContextValid = function(a) {
        q.assert(a instanceof d);
        this.initRootContext();
        q.assert(this.m_root_context !== null);
        var a = a.toSchemaPath(),
            b = this.m_root_context.toSchemaPath().getString(),
            b = f.get().getUnitConfigMap().get(b).getRootType();
        return a.find(b) !==
            null
    };
    m.prototype.deleteComponent = function() {
        b.PREPARE_HTML ? this.replaceWithPlaceholderComment(this.m_component) : u.destroy(this.m_component);
        this.setComponent(null)
    };
    m.prototype.replaceWithPlaceholderComment = function(a) {
        q.assert(b.PREPARE_HTML);
        var c = a.parentNode;
        if (c !== null && c !== void 0) {
            var d = document.createComment("placeholder");
            c.insertBefore(d, a)
        }
        u.destroy(a)
    };
    return m
});
define("remote/UnitInstanceMap", ["Lang", "util/ArrayUtil", "util/collection/StringHashMap", "unit/UnitInstance"], function(h, c, b, d) {
    function a() {
        b.call(this)
    }
    var e = new h;
    new c;
    a.prototype = new b;
    a.prototype.put = function(a, c) {
        e.assert(e.isString(a));
        e.assert(c instanceof d);
        b.prototype.put.call(this, a, c)
    };
    return a
});
define("unit/html/HeatMapMatrixUnitInstance", "JqueryUi,util/FeatureUtil,data/value/IntegerValue,data/value/StringValue,data/value/ScalarNullValue,data/diff/ReplaceDataDiff,unit/UnitInstance,unit/Renderer,unit/RendererMap,unit/RendererOperation,css!unit/html/heatmap".split(","), function(h, c, b, d, a, e, l, g, k, f) {
    function n(a) {
        l.call(this, a)
    }

    function m(c, d) {
        var f = h(d.target);
        if (f.is("span") || f.is("div")) {
            var g = h(d.currentTarget),
                k = g.closest("td").hasClass("row-headers"),
                l = g.closest("td").hasClass("column-headers"),
                g = g.closest("td").hasClass("cells"),
                f = f.closest("td.heatmap-label"),
                k = g || k ? f.parent().index() + 1 : 0,
                l = g || l ? f.index() + 1 : 0,
                g = k && k > 0 ? new b(k) : new a,
                f = l && l > 0 ? new b(l) : new a;
            c.collect(new e("drill_down_row_index", g));
            c.collect(new e("drill_down_column_index", f));
            k == 0 ? c.invoke("oncolumndrilldown") : l == 0 ? c.invoke("onrowdrilldown") : c.invoke("oncelldrilldown")
        }
    }

    function q(a, b) {
        var c = a.closest("table.heat-map");
        if (b) {
            var d = "tbody>tr:eq(" + a.parent("tr").index() + ")>td.heatmap-label",
                e = "tbody>tr>td.heatmap-label:nth-child(" +
                (a.index() + 1) + ")",
                f = h("td.cells>div>table", c),
                g = h("td.row-headers>div>table", c),
                c = h("td.column-headers>div>table", c),
                k = a.closest("td.cells").length > 0,
                l = a.closest("td.column-headers").length > 0,
                m = a.closest("td.row-headers").length > 0,
                q = [],
                n = [];
            k ? (h.merge(q, h(d, g)), h.merge(q, h(d, f)), h.merge(n, h(e, c)), h.merge(n, h(e, f))) : l ? (h.merge(n, h(e, c)), h.merge(n, h(e, f))) : m && (h.merge(q, h(d, g)), h.merge(q, h(d, f)));
            h(n).addClass("active vertical");
            h(q).addClass("active horizontal")
        } else h("td.heatmap-label.active", c).removeClass("active horizontal vertical")
    }
    var u = new c;
    n.prototype = new l;
    n.RENDERER_MAP = new k;
    n.prototype.scrollBarDimensions = function() {
        var a = h("<p></p>").css({
                width: "100%",
                height: "100%"
            }),
            b = h("<div></div>").css({
                position: "absolute",
                width: "100px",
                height: "100px",
                top: "0",
                left: "0",
                visibility: "hidden",
                overflow: "hidden"
            }).append(a);
        h(document.body).append(b);
        var c = a.width(),
            d = a.height();
        b.css("overflow", "scroll");
        var e = a.width(),
            a = a.height();
        if (c == e && b[0].clientWidth) e = b[0].clientWidth;
        if (d == a && b[0].clientHeight) a = b[0].clientHeight;
        b.detach();
        return [c - e, d - a]
    }();
    n.prototype.getRendererMap = function() {
        return n.RENDERER_MAP
    };
    n.RENDERER_MAP.add(new g("attachHeatMap", f.SHELL, "", function(a) {
        var b = h("<div>")[0];
        a.setComponent(b)
    }));
    n.RENDERER_MAP.add(new g("insertHeatMap", f.INSERT, "", function(a, b) {
        var c = a.getComponent(),
            d = b.getPayload(),
            e = h(d),
            d = h(e).attr("class");
        h(c).html(e.html());
        var f = h("td.column-headers>div", c),
            g = h("td.row-headers>div", c),
            k = h("td.cells>div", c),
            l = f.children("table"),
            n = g.children("table"),
            e = k.children("table"),
            I = l.find("tbody>tr>td.heatmap-label"),
            z = n.find("tbody>tr>td.heatmap-label"),
            F = e.find("tbody>tr>td.heatmap-label"),
            B = g.attr("width"),
            R = f.attr("height"),
            J = k.attr("width"),
            P = k.attr("height");
        g.removeAttr("width");
        f.removeAttr("height");
        k.removeAttr("width");
        k.removeAttr("height");
        var Q = 0,
            S = 0,
            L = !u.hasCssTransform() ? "heatmap-vertical-text-ie8" : "heatmap-vertical-text";
        h(I).each(function(a, b) {
            var c = h(b).html();
            h(b).html("");
            var d = h("<div>" + c + "</div>");
            h(b).append(d);
            var e = d.outerHeight(!0),
                c = d.outerWidth(!0);
            h(b).height(c);
            d.addClass(L);
            d.width(e).css({
                margin: "0 auto"
            });
            d = h(F[a]);
            e = d.width();
            e = Math.max(e, h(b).width());
            h(b).width(e).css({
                margin: "0 auto"
            });
            d.width(e);
            Q = Math.max(Q, c)
        });
        n.css("display", "table");
        h(z).each(function(a) {
            var b = h(z[a]),
                a = h(F[a * I.length]),
                c = a.height();
            document.documentMode && (c += document.documentMode < 8 ? 0 : 0.5);
            c = Math.max(c, 15);
            b.height(c);
            a.height(c);
            S = Math.max(S, b.width())
        });
        l.width(e.outerWidth()).css("table-layout", "fixed");
        n.height(e.outerHeight()).css("table-layout", "fixed");
        var H = e.height(),
            N = e.width(),
            K = a.scrollBarDimensions;
        k.css({
            height: P,
            width: J
        });
        P = h(k).height();
        J = h(k).width();
        P = Math.min(P, H);
        J = Math.min(J, N);
        e.height(H).width(N).css("table-layout", "fixed");
        k.height(P);
        k.width(J);
        k[0].scrollHeight > k.innerHeight() ? (f.width(J + K[0]), k.width(J + K[0])) : f.width(J);
        k[0].scrollWidth > k.innerWidth() ? (g.height(P + K[1]), k.height(P + K[1])) : g.height(P);
        k[0].scrollHeight > k.innerHeight() && f.width(J);
        k[0].scrollWidth > k.innerWidth() && g.height(P);
        k.scroll(function() {
            n.css("margin-top", -this.scrollTop);
            l.css("margin-left", -this.scrollLeft)
        });
        f.css("height",
            R);
        g.css("width", B);
        k = z.outerWidth(!0) - z.width();
        B = I.outerHeight(!0) - I.height();
        S = Math.max(z.outerWidth(!0), S + k, g.width());
        Q = Math.max(I.outerHeight(!0), Q + B);
        g.resizable({
            handles: "e",
            minWidth: Math.min(z.outerWidth(!0), S + k, g.width()),
            maxWidth: S,
            start: function(a, b) {
                h(".ui-resizable-handle", b.helper).addClass("ui-resizable-handle-active")
            },
            stop: function(a, b) {
                h(".ui-resizable-handle", b.helper).removeClass("ui-resizable-handle-active")
            }
        });
        f.resizable({
            handles: "s",
            minHeight: f.height(),
            maxHeight: Q,
            start: function(a,
                b) {
                h(".ui-resizable-handle", b.helper).addClass("ui-resizable-handle-active")
            },
            stop: function(a, b) {
                h(".ui-resizable-handle", b.helper).removeClass("ui-resizable-handle-active")
            }
        });
        n.css({
            display: "block",
            width: "100%"
        });
        f = [];
        h.merge(f, I);
        h.merge(f, z);
        h.merge(f, F);
        h(f).hover(function() {
            q(h(this), !0)
        }, function() {
            q(h(this), !1)
        });
        l.click(function(b) {
            m(a, b)
        });
        n.click(function(b) {
            m(a, b)
        });
        e.click(function(b) {
            m(a, b)
        });
        h(c).addClass(d)
    }));
    n.RENDERER_MAP.add(new g("deleteHeatMap", f.DELETE, "", function(a) {
        a.deleteComponent()
    }));
    n.RENDERER_MAP.add(new g("replaceDrillDownRow", f.REPLACE, "drill_down_row", function() {}));
    n.RENDERER_MAP.add(new g("replaceDrillDownColumn", f.REPLACE, "drill_down_column", function() {}));
    n.RENDERER_MAP.add(new g("replaceDrillDownRowIndex", f.REPLACE, "drill_down_row_index", function() {}));
    n.RENDERER_MAP.add(new g("replaceDrillDownColumnIndex", f.REPLACE, "drill_down_column_index", function() {}));
    return n
});
define("unit/html/HyperlinkUnitInstance", "Lang,util/collection/StringHashMap,util/DomUtil,util/EventUtil,data/DataUtil,data/DataPath,data/diff/ReplaceDataDiff,unit/UnitInstance,unit/Renderer,data/value/BooleanValue,unit/RendererMap,unit/RendererOperation,unit/RendererUtil,unit/HtmlRendererUtil".split(","), function(h, c, b, d, a, e, l, g, k, f, n, m, q, u) {
    function o(a) {
        g.call(this, a)
    }

    function r(a, b) {
        b !== null && b !== void 0 && b.getObject() !== null ? v.html(a.getComponent(), b.getObject()) : v.html(a.getComponent(), "")
    }
    new h;
    var v = new b;
    new a;
    var w = new d,
        A = new q,
        s = new u;
    o.prototype = new g;
    o.RENDERER_MAP = new n;
    o.prototype.getRendererMap = function() {
        return o.RENDERER_MAP
    };
    o.RENDERER_MAP.add(new k("insertHyperlink", m.INSERT, "", function(a, b) {
        var c = b.getPayload(),
            d = v.create("a");
        a.setComponent(d);
        var g = c.getAttribute("href").getObject();
        g === null && (g = "");
        v.attr(d, "href", g);
        A.setAttribute(d, "target", c.getAttribute("target"));
        r(a, c.getAttribute("label"));
        A.setAttribute(d, "hreflang", c.getAttribute("hreflang"));
        A.setAttribute(d,
            "rel", c.getAttribute("rel"));
        s.setGlobalAttributes(d, c);
        c = new e("onclick");
        a.hasActionContext(c) && w.connect(a.getComponent(), "onclick", function(b) {
            var c = new f(!0),
                c = new l("clicked", c);
            a.collect(c);
            a.invoke("onclick");
            dojo.stopEvent(b)
        })
    }));
    o.RENDERER_MAP.add(new k("deleteHyperlink", m.DELETE, "", function(a) {
        v.destroy(a.getComponent());
        a.setComponent(null)
    }));
    o.RENDERER_MAP.add(s.makeReplaceRenderer("href"));
    o.RENDERER_MAP.add(new k("replaceLabel", m.REPLACE, "label", function(a, b) {
        var c = b.getPayload();
        r(a, c)
    }));
    o.RENDERER_MAP.add(s.makeReplaceRenderer("hreflang"));
    o.RENDERER_MAP.add(s.makeReplaceRenderer("rel"));
    s.addGlobalRenderers(o.RENDERER_MAP);
    return o
});
define("unit/html/ImageUnitInstance", "Lang,util/collection/StringHashMap,util/DomUtil,data/DataUtil,data/diff/ReplaceDataDiff,unit/UnitInstance,unit/Renderer,unit/RendererMap,unit/RendererOperation,unit/RendererUtil".split(","), function(h, c, b, d, a, e, l, g, k, f) {
    function n(a) {
        e.call(this, a)
    }
    new h;
    var m = new b;
    new d;
    new f;
    n.prototype = new e;
    n.RENDERER_MAP = new g;
    n.prototype.getRendererMap = function() {
        return n.RENDERER_MAP
    };
    n.RENDERER_MAP.add(new l("insertImage", k.INSERT, "", function(a, b) {
        a.setComponent(m.create("img"));
        var c = b.getPayload();
        a.m_schema_map.get("src").call(a, c.getAttribute("src"));
        a.m_schema_map.get("alt").call(a, c.getAttribute("alt"));
        a.m_schema_map.get("style").call(a, c.getAttribute("style"));
        a.m_schema_map.get("class").call(a, c.getAttribute("class"))
    }));
    n.RENDERER_MAP.add(new l("deleteImage", k.DELETE, "", function(a) {
        m.destroy(a.getComponent());
        a.setComponent(null)
    }));
    n.RENDERER_MAP.add(new l("replaceSource", k.REPLACE, "src", function(a, b) {
        var c = b.getPayload();
        a.m_schema_map.get("src").call(a, c)
    }));
    n.RENDERER_MAP.add(new l("replaceAlt", k.REPLACE, "alt", function(a, b) {
        var c = b.getPayload();
        a.m_schema_map.get("alt").call(a, c)
    }));
    n.RENDERER_MAP.add(new l("replaceStyle", k.REPLACE, "style", function(a, b) {
        var c = b.getPayload();
        a.m_schema_map.get("style").call(a, c)
    }));
    n.RENDERER_MAP.add(new l("replaceClass", k.REPLACE, "class", function(a, b) {
        var c = b.getPayload();
        a.m_schema_map.get("class").call(a, c)
    }));
    n.prototype.m_schema_map = new c({
        src: function(a) {
            m.attr(this.getComponent(), "src", a.getObject())
        },
        alt: function(a) {
            m.attr(this.getComponent(),
                "alt", a.getObject())
        },
        "class": function(a) {
            m.attr(this.getComponent(), "class", a.getObject())
        },
        style: function(a) {
            m.style(this.getComponent(), a.getObject())
        }
    });
    return n
});
define("unit_new/CustomUnitInstance", "Lang,util/ArrayUtil,util/DomUtil,util/StringUtil,util/collection/StringHashMap,data/DataUtil,data_new/ContextPath,remote/ClientRuntime,unit/UnitInstance,unit/RendererOperation,unit_new/UnitDataDiff".split(","), function(h, c, b, d, a, e, l, g, k, f, n) {
    function m(b) {
        k.call(this, b);
        this.m_state = null;
        this.m_object_map = new a
    }
    var q = new h;
    new c;
    new e;
    new b;
    var u = new d;
    m.prototype = new k;
    m.prototype.render = function(a) {
        q.assert(a instanceof n);
        var b = a.getCallback(),
            c = window[b];
        q.assert(q.isFunction(c), 'Unable to find callback function with name "' + b + '"');
        var b = a.getOp(),
            d = a.getContext(),
            e = null,
            g = a.getPayload();
        if (b === f.CONSTRUCT) this.m_state = g;
        else if (b === f.INSERT) {
            var h = d.find(this.m_state);
            q.assert(h !== null && q.isArray(h), "Cannot patch " + a.toString());
            h.push(g)
        } else b === f.UPDATE ? (e = d.replace(this.m_state, g), q.assert(e !== l.NOT_REPLACED, "Cannot patch " + a.toString())) : b === f.DELETE ? (e = d.replace(this.m_state, void 0), q.assert(e !== l.NOT_REPLACED, "Cannot patch " + a.toString())) :
            (q.assert(b === f.DESTRUCT), e = this.m_state);
        c.call(null, {
            unit: this,
            state: this.m_state,
            op: b,
            context: d,
            old_value: e,
            new_value: g
        })
    };
    m.prototype.getObject = function(a) {
        return this.m_object_map.get(a instanceof l ? a.getString() : a)
    };
    m.prototype.setObject = function(a, b) {
        this.m_object_map.put(a instanceof l ? a.getString() : a, b)
    };
    m.prototype.removeObject = function(a) {
        var b = this,
            c = a instanceof l ? a.getString() : a;
        this.m_object_map.remove(c);
        this.m_object_map.forEach(function(a, d) {
            u.startsWith(d, c) && b.m_object_map.remove(d)
        })
    };
    m.prototype.getRootObject = function() {
        return this.getObject("^")
    };
    m.prototype.setRootObject = function(a) {
        this.setObject("^", a)
    };
    return m
});
define("remote/ClientRuntime", "Lang,Jquery,util/ArrayUtil,util/DomUtil,data/DataPath,data/value/NullValue,data/diff/DataDiff,data/diff/ReplaceDataDiff,remote/RefreshRequestSerializer,remote/MessageManager,remote/RemoteUtil,remote/UnitConfigMap,remote/UnitInstanceMap,remote/RefreshResponseXmlParser,remote/RefreshResponseJsonParser,remote_new/RefreshResponseJsonppParser,unit/RendererOperation,unit/UnitInstance,unit_new/CustomUnitInstance,unit/UnitDiff,unit_new/UnitDiff".split(","), function(h, c, b, d,
    a, e, l, g, k, f, n, m, q, u, o, r, v, w, A, s, D) {
    function y(a) {
        B.assert(B.isString(a));
        B.assert(a === "json" || a === "xml" || a === "json++.compact" || a === "json++");
        this.m_response_format = a;
        this.m_data_diffs = this.m_message_manager = this.m_unit_instance_map = this.m_unit_config_map = null;
        x(this)
    }

    function x(a) {
        B.assert(a instanceof y);
        a.m_unit_config_map = new m;
        a.m_unit_instance_map = new q;
        a.m_message_manager = new f;
        a.m_data_diffs = [];
        y.INSTANCE = a
    }

    function E(a, b) {
        B.assert(B.isString(a));
        B.assert(b instanceof m);
        var c = n.getUnitConfigId(a),
            c = b.get(c);
        if (c !== null) {
            var d;
            d = c.getUnitClassName();
            B.assert(B.isString(d));
            d = "unit/" + d.replace(P, "/") + "UnitInstance";
            d = require(d);
            B.assert(d !== null && d.prototype instanceof w, 'Unable to find class for "' + c.getUnitClassName() + '"');
            return new d(a)
        } else return new A(a)
    }

    function I(a, b) {
        var c = a.navigate,
            d = a.open_window;
        a.method === "GET" ? d === !0 ? window.open(c) : window.location.href = c : z(c, d);
        b.unblockUi()
    }

    function z(a, b) {
        var c = null;
        a.indexOf("?") >= 0 && (c = a.split("?"), a = c[0], c = c[1]);
        var d = "";
        b && (d = "_blank");
        var e = J.create("form", {
            method: "post",
            action: a,
            target: d
        });
        c !== null && J.create("input", {
            name: "data",
            value: c,
            type: "hidden"
        }, e);
        setTimeout(function() {
            document.body.appendChild(e);
            e.submit();
            document.body.removeChild(e)
        }, 10)
    }

    function F(a, b) {
        var c = [];
        R.forEach(a, function(a) {
            a = "unit/" + a.getUnitClassName().replace(P, "/") + "UnitInstance";
            c.push(a)
        });
        require(c, b)
    }
    var B = new h,
        R = new b,
        J = new d;
    y.INSTANCE = new y("json");
    y.get = function() {
        return y.INSTANCE
    };
    y.prototype.getResponseFormat = function() {
        return this.m_response_format
    };
    y.prototype.setResponseFormat = function(a) {
        B.assert(B.isString(a));
        B.assert(a === "json" || a === "xml" || a === "json++.compact" || a === "json++");
        this.m_response_format = a
    };
    y.prototype.getUnitConfigMap = function() {
        return this.m_unit_config_map
    };
    y.prototype.getUnitInstanceMap = function() {
        return this.m_unit_instance_map
    };
    y.prototype.hasInFlightRequest = function() {
        return this.m_message_manager.hasInFlightRequest()
    };
    y.prototype.getWindowId = function() {
        return this.m_message_manager.getWindowId()
    };
    y.prototype.setWindowId =
        function(a) {
            B.assert(B.isString(a));
            this.m_message_manager.setWindowId(a)
        };
    y.prototype.testRender = function(a, b) {
        this.m_unit_config_map = a;
        this.m_unit_instance_map = new q;
        this.render(b)
    };
    y.prototype.receive_native_js = function(a, b) {
        if (a != null) this.m_unit_config_map = a, this.m_unit_instance_map = new q;
        this.render([b])
    };
    y.prototype.receive = function(a) {
        B.assert(B.isString(a));
        var b = this.parse(a);
        "navigate" in b ? I(b, this.m_message_manager) : "reload" in b ? (a = "", a += "Your session has expired.", a += "\n\n", a += "Please click OK to reload the page.",
            window.confirm(a) && window.location.reload(!0)) : (a = B.hitch(this, function() {
            if (b.getUnitConfigMap() !== null) this.m_unit_config_map = b.getUnitConfigMap(), this.m_unit_instance_map = new q;
            this.render(b.getUnitDiffs())
        }), b.getPreUnitDiffs().length > 0 ? (this.render(b.getPreUnitDiffs()), F(b.getUnitConfigMap().values(), a)) : a())
    };
    y.prototype.collect = function(a) {
        B.assert(a instanceof l);
        var b = null;
        if (a instanceof g)
            for (var c = a.getContext().getString(), d = 0, e = this.m_data_diffs.length; d < e; d++) {
                var f = this.m_data_diffs[d],
                    h = f.getContext().getString();
                if (f instanceof g && c === h) {
                    b = d;
                    break
                }
            }
        b !== null ? this.m_data_diffs[b] = a : this.m_data_diffs.push(a)
    };
    y.prototype.invoke = function(b, c, d) {
        B.assert(b instanceof a);
        B.assert(c !== void 0);
        B.log("Invoking absolute context:", b);
        if (!(window.interactive_test !== void 0 || window.jstestdriver !== void 0)) this.m_message_manager.invoke(b, c, d, this.m_data_diffs), this.m_data_diffs = []
    };
    y.prototype.reset = function() {
        x(this)
    };
    y.prototype.clearDiffs = function() {
        this.m_data_diffs = []
    };
    y.prototype.getDiffs =
        function() {
            return this.m_data_diffs
        };
    y.prototype.parse = function(a) {
        B.assert(B.isString(a));
        var b = null;
        this.m_response_format === "json" ? b = o.parse(a, this.m_unit_config_map) : this.m_response_format === "xml" ? b = u.parse(a, this.m_unit_config_map) : (B.assert(this.m_response_format === "json++"), b = r.parse(a, this.m_unit_config_map));
        return b
    };
    y.prototype.render = function(a) {
        B.assert(B.isArray(a));
        for (var b = 0, d = a.length; b < d; b++) {
            var e = a[b];
            e instanceof s ? this.renderOld(e) : this.renderNew(e)
        }
        a = J.query("head")[0];
        a = c(a).find("title");
        if (a.length > 1)
            for (b = 0; b < a.length; b++)
                if (d = a[b], d.childNodes.length > 0) document.title = J.getText(d)
    };
    y.prototype.renderOld = function(a) {
        B.assert(a instanceof s);
        var b = a.getUnitInstanceId(),
            c = a.getTargetMethod(),
            d = this.m_unit_instance_map.get(b),
            e = d === null ? !0 : !1;
        e && (d = E(b, this.m_unit_config_map), B.assert(d !== null), this.m_unit_instance_map.put(b, d));
        var f = d.getRenderer(c);
        B.assert(f !== null, 'Unable to find renderer with target method name "' + c + '"');
        var c = f.getSchemaPatternPath().isEmpty(),
            g = f.getRendererOperation() ===
            v.INSERT,
            h = f.getRendererOperation() === v.DELETE,
            k = f.getRendererOperation() === v.SHELL;
        e && B.assert(c && (g || k));
        f.render(d, a);
        e && b === "/" && this.attachRootComponent(d.getComponent());
        c && h && this.m_unit_instance_map.remove(b)
    };
    y.prototype.renderNew = function(a) {
        B.assert(a instanceof D);
        var b = a.getId(),
            c = a.getOp() === v.CONSTRUCT,
            d = a.getOp() === v.DESTRUCT,
            e = a.getOp() === v.ALWAYS,
            f = this.m_unit_instance_map.get(b),
            g = f === null ? !0 : !1;
        g && (f = E(b, this.m_unit_config_map), B.assert(f !== null), this.m_unit_instance_map.put(b,
            f));
        g && B.assert(c || e);
        f.render(a);
        g && b === "^" && (a = f.getComponent(), a !== null && this.attachRootComponent(a));
        d && this.m_unit_instance_map.remove(b)
    };
    y.prototype.attachRootComponent = function(a) {
        B.isFunction(a) ? a() : (B.assert(J.isElement(a) || J.isText(a)), window.document.body.appendChild(a))
    };
    var P = RegExp("\\.", "g");
    return y
});
define("unit/ace_editor/AceEditorUnitInstance", "require,Lang,Dojo,util/ArrayUtil,util/DomUtil,util/EventUtil,data/DataUtil,data/value/StringValue,data/value/IntegerValue,data/value/ScalarNullValue,data/value/BooleanValue,data/diff/ReplaceDataDiff,remote/ClientRuntime,unit/UnitInstance,unit/Renderer,unit/RendererMap,unit/RendererOperation,unit/RendererUtil,Ace".split(","), function(h, c, b, d, a, e, l, g, k, f, n, m, q, u, o, r, v, w, A) {
    function s(a) {
        u.call(this, a)
    }

    function D(a, b) {
        var c = a.m_editor;
        b ? c.focus() : c.blur()
    }

    function y(a) {
        var b = a.m_editor;
        if (a.cursor_row != null || a.cursor_column != null) {
            var c = a.cursor_row != null ? a.cursor_row : 0,
                d = a.cursor_column != null ? a.cursor_column : 0;
            if (a.cursor_row_end != null || a.cursor_column_end != null) {
                var e = a.cursor_row_end != null ? a.cursor_row_end : c,
                    a = a.cursor_column_end != null ? a.cursor_column_end : d,
                    f = b.getSelection().getRange();
                f.setStart(c, d);
                f.setEnd(e, a);
                b.getSelection().setSelectionRange(f, !1)
            } else b.getSelection().moveCursorTo(a.cursor_row, a.cursor_column)
        }
    }
    new c;
    new d;
    var x = new a;
    new e;
    var E = new l;
    new w;
    s.prototype = new u;
    s.RENDERER_MAP = new r;
    s.prototype.getRendererMap = function() {
        return s.RENDERER_MAP
    };
    s.RENDERER_MAP.add(new o("insertAceEditor", v.INSERT, "", function(a, b) {
        var c = b.getPayload(),
            d = document.createElement("div"),
            e = E.get(c, "class");
        e != null && d.setAttribute("class", e.getObject());
        e = E.get(c, "style");
        e != null && d.setAttribute("style", e.getObject());
        a.setComponent(d);
        a.m_editor = A.edit(d);
        a.m_editor.getSession().setMode(E.get(c, "mode").getObject());
        a.m_editor.getSession().setValue(E.get(c,
            "content").getObject());
        a.m_editor.setTheme(E.get(c, "theme").getObject());
        a.m_editor.getSession().on("change", function() {
            var b = a.m_editor.getSession().getDocument().getValue(),
                b = new g(b),
                b = new m("content", b);
            a.collect(b);
            a.invoke("onchange")
        });
        var e = E.get(c, "width"),
            f = E.get(c, "height");
        f != null && x.style(d, "height", f.getObject());
        e != null && x.style(d, "width", e.getObject());
        d = E.get(c, "cursor_row");
        e = E.get(c, "cursor_column");
        a.cursor_row = d != null ? d.getObject() : null;
        a.cursor_column = e != null ? e.getObject() :
            null;
        d = E.get(c, "focus");
        d != null && D(a, d.getObject());
        d = E.get(c, "cursor_row_end");
        e = E.get(c, "cursor_column_end");
        a.cursor_row_end = d != null ? d.getObject() : null;
        a.cursor_column_end = e != null ? e.getObject() : null;
        y(a);
        c = E.get(c, "readonly").getObject();
        a.m_editor.setReadOnly(c)
    }));
    s.RENDERER_MAP.add(new o("replaceMode", v.REPLACE, "mode", function(a, b) {
        var c = b.getPayload().getObject();
        c == null && (c = "");
        a.m_editor.getSession().setMode(c)
    }));
    s.RENDERER_MAP.add(new o("replaceTheme", v.REPLACE, "theme", function(a, b) {
        var c =
            b.getPayload().getObject();
        c == null && (c = "");
        a.m_editor.setTheme(c)
    }));
    s.RENDERER_MAP.add(new o("replaceContent", v.REPLACE, "content", function(a, b) {
        var c = b.getPayload().getObject();
        c === null && (c = "");
        a.m_editor.getSession().setValue(c)
    }));
    s.RENDERER_MAP.add(new o("replaceFocus", v.REPLACE, "focus", function(a, b) {
        var c = b.getPayload().getObject();
        c === null && (c = !1);
        D(a, c)
    }));
    s.RENDERER_MAP.add(new o("replaceCursorRow", v.REPLACE, "cursor_row", function(a, b) {
        var c = b.getPayload().getObject();
        a.cursor_row = c;
        y(a)
    }));
    s.RENDERER_MAP.add(new o("replaceCursorColumn", v.REPLACE, "cursor_column", function(a, b) {
        var c = b.getPayload().getObject();
        a.cursor_column = c;
        y(a)
    }));
    s.RENDERER_MAP.add(new o("replaceCursorRowEnd", v.REPLACE, "cursor_row_end", function(a, b) {
        var c = b.getPayload().getObject();
        a.cursor_row_end = c;
        y(a)
    }));
    s.RENDERER_MAP.add(new o("replaceCursorColumnEnd", v.REPLACE, "cursor_column_end", function(a, b) {
        var c = b.getPayload().getObject();
        a.cursor_column_end = c;
        y(a)
    }));
    s.RENDERER_MAP.add(new o("replaceWidth", v.REPLACE,
        "width",
        function(a, b) {
            var c = b.getPayload().getObject();
            x.style(a.getComponent(), "width", c);
            a.m_editor.resize()
        }));
    s.RENDERER_MAP.add(new o("replaceHeight", v.REPLACE, "height", function(a, b) {
        var c = b.getPayload().getObject();
        x.style(a.getComponent(), "height", c);
        a.m_editor.resize()
    }));
    s.RENDERER_MAP.add(new o("deleteAceEditor", v.DELETE, "", function(a) {
        x.destroy(a.getComponent());
        a.setComponent(null)
    }));
    return s
});
define("unit/html/ButtonUnitInstance", "Lang,util/ArrayUtil,util/DomUtil,util/EventUtil,data/DataUtil,data/value/BooleanValue,data/diff/ReplaceDataDiff,unit/UnitInstance,unit/Renderer,remote/ClientRuntime,util/collection/StringHashMap,unit/RendererMap,unit/RendererOperation,unit/RendererUtil,unit/HtmlRendererUtil".split(","), function(h, c, b, d, a, e, l, g, k, f, n, m, q, u, o) {
    function r(a) {
        g.call(this, a)
    }

    function v(a, b) {
        b !== null && b.getObject() !== null && A.html(a.getComponent(), b.getObject())
    }
    new h;
    var w = new c;
    new a;
    var A = new b,
        s = new d,
        D = new u,
        y = new o;
    r.prototype = new g;
    r.prototype.getLabel = function() {
        return A.attr(this.getComponent(), "innerHTML")
    };
    r.RENDERER_MAP = new m;
    r.prototype.getRendererMap = function() {
        return r.RENDERER_MAP
    };
    r.RENDERER_MAP.add(new k("insertButton", q.INSERT, "", function(a, b) {
        var c = b.getPayload(),
            d = A.create("button");
        a.setComponent(d);
        v(a, c.getAttribute("value"));
        D.setAttribute(d, "disabled", c.getAttribute("disabled").getObject());
        d.setAttribute("type", "button");
        y.setGlobalAttributes(d, c);
        a.m_handle = [];
        a.m_handle.push(s.connect(d, "onclick", a, a.onClick));
        a.m_handle.push(s.connect(d, "onkeypress", a, a.onKeyPress))
    }));
    r.RENDERER_MAP.add(new k("deleteButton", q.DELETE, "", function(a) {
        w.forEach(a.m_handle, function(a) {
            s.disconnect(a)
        });
        A.destroy(a.getComponent());
        a.setComponent(null)
    }));
    r.RENDERER_MAP.add(new k("replaceClass", q.REPLACE, "class", function(a, b) {
        var c = b.getPayload();
        c !== null && c.getObject() !== null && D.setClass(a.getComponent(), c)
    }));
    r.RENDERER_MAP.add(new k("replaceStyle", q.REPLACE, "style", function(a,
        b) {
        var c = b.getPayload();
        c !== null && c.getObject() !== null && D.setStyle(a.getComponent(), c)
    }));
    r.RENDERER_MAP.add(new k("replaceValue", q.REPLACE, "value", function(a, b) {
        var c = b.getPayload();
        v(a, c)
    }));
    r.RENDERER_MAP.add(new k("replaceClicked", q.REPLACE, "clicked", function() {}));
    r.RENDERER_MAP.add(new k("replaceDisabled", q.REPLACE, "disabled", function(a, b) {
        D.setAttribute(a.getComponent(), "disabled", b.getPayload().getObject())
    }));
    y.addGlobalRenderers(r.RENDERER_MAP);
    r.prototype.onClick = function(a) {
        var b = new e(!0);
        this.collect(new l("clicked", b));
        this.invoke("onclick", a)
    };
    r.prototype.onKeyPress = function() {
        var a = new e(!0);
        this.collect(new l("clicked", a));
        this.invoke("onkeypress")
    };
    return r
});
define("unit/html/CheckboxArrayUnitInstance", "Lang,util/ArrayUtil,util/DomUtil,util/EventUtil,remote/ClientRuntime,unit/UnitInstance,unit/Renderer,data/value/StringValue,data/value/BooleanValue,data/diff/ReplaceDataDiff,unit/RendererMap,unit/RendererOperation,unit/RendererUtil".split(","), function(h, c, b, d, a, e, l, g, k, f, n, m, q) {
    function u(a) {
        e.call(this, a);
        this.m_event = null
    }
    new h;
    new c;
    var o = new b,
        r = new d;
    new q;
    u.prototype = new e;
    u.RENDERER_MAP = new n;
    u.prototype.getRendererMap = function() {
        return u.RENDERER_MAP
    };
    u.RENDERER_MAP.add(new l("insertCheckboxArray", m.INSERT, "", function(a, b) {
        if (a.getComponent() === null) {
            var c = document.createElement("div");
            a.setComponent(c)
        }
        a.disconnectEvent();
        var c = b.getPayload(),
            d = a.getComponent();
        o.html(d, c);
        a.m_event = r.connect(d, "onclick", a, a.onClick)
    }));
    u.RENDERER_MAP.add(new l("deleteCheckboxArray", m.DELETE, "", function(a) {
        a.disconnectEvent();
        a.deleteComponent()
    }));
    u.prototype.onClick = function(a) {
        a = a.target;
        if (a.nodeName === "INPUT") {
            if (a.id) {
                var b = new g(o.attr(a, "id"));
                this.collect(new f("checked_id",
                    b))
            }
            b = new g(o.getText(a.nextSibling));
            this.collect(new f("checked_label", b));
            a = a.checked || !!o.attr(a, "checked");
            a = new k(a);
            this.collect(new f("checked", a));
            this.invoke("onclick")
        }
    };
    u.prototype.disconnectEvent = function() {
        this.m_event !== null && r.disconnect(this.m_event)
    };
    return u
});
define("unit/html/CheckboxUnitInstance", "Lang,util/ArrayUtil,util/DomUtil,util/EventUtil,data/DataUtil,data/value/BooleanValue,data/diff/ReplaceDataDiff,unit/UnitInstance,unit/Renderer,remote/ClientRuntime,util/collection/StringHashMap,unit/RendererMap,unit/RendererOperation,unit/RendererUtil,unit/HtmlRendererUtil".split(","), function(h, c, b, d, a, e, l, g, k, f, n, m, q, u, o) {
    function r(a) {
        g.call(this, a);
        this.m_checked = !1
    }

    function v(a, b) {
        b !== null && b.getObject() !== null && A.html(a.m_label, b.getObject())
    }

    function w(a,
        b) {
        var c = b.getObject();
        c === null && (c = !1);
        a.m_checked = c;
        A.attr(a.m_checkbox, "checked", c)
    }
    new h;
    new c;
    new a;
    var A = new b,
        s = new d,
        D = new u,
        y = new o;
    r.prototype = new g;
    r.RENDERER_MAP = new m;
    r.prototype.getRendererMap = function() {
        return r.RENDERER_MAP
    };
    r.RENDERER_MAP.add(new k("insertCheckbox", q.INSERT, "", function(a, b) {
        var c = b.getPayload(),
            d = document.createElement("span"),
            e = document.createElement("label"),
            f = document.createElement("input");
        f.type = "checkbox";
        a.m_label = e;
        a.m_checkbox = f;
        d.appendChild(e);
        d.appendChild(f);
        a.setComponent(d);
        D.setAttribute(f, "name", c.getAttribute("name"));
        D.setAttribute(f, "value", c.getAttribute("value"));
        v(a, c.getAttribute("label"));
        y.setGlobalAttributes(f, c);
        D.setAttribute(f, "disabled", !c.getAttribute("enabled").getObject());
        w(a, c.getAttribute("checked"));
        a.m_handle = s.connect(f, "onclick", a, a.onClick)
    }));
    r.RENDERER_MAP.add(new k("deleteCheckbox", q.DELETE, "", function(a) {
        s.disconnect(a.m_handle);
        A.destroy(a.getComponent());
        a.setComponent(null)
    }));
    r.RENDERER_MAP.add(new k("replaceLabel",
        q.REPLACE, "label",
        function(a, b) {
            var c = b.getPayload();
            v(a, c)
        }));
    r.RENDERER_MAP.add(new k("replaceName", q.REPLACE, "name", function(a, b) {
        var c = b.getPayload();
        D.setAttribute(a.m_checkbox, "name", c)
    }));
    r.RENDERER_MAP.add(new k("replaceValue", q.REPLACE, "value", function(a, b) {
        var c = b.getPayload();
        D.setAttribute(a.m_checkbox, "value", c)
    }));
    r.RENDERER_MAP.add(new k("replaceChecked", q.REPLACE, "checked", function(a, b) {
        var c = b.getPayload();
        w(a, c)
    }));
    r.RENDERER_MAP.add(new k("replaceEnabled", q.REPLACE, "enabled", function(a,
        b) {
        var c = a.m_checkbox,
            d = b.getPayload().getObject();
        D.setAttributeIfTrue(c, "disabled", !d)
    }));
    y.addGlobalRenderers(r.RENDERER_MAP);
    r.prototype.onClick = function() {
        var a = this.m_checkbox;
        this.m_checked = a = a.checked || !!A.attr(a, "checked");
        a = new e(a);
        this.collect(new l("checked", a));
        this.invoke("onclick")
    };
    return r
});
define("unit/html/DropDownUnitInstance", "Lang,util/ArrayUtil,util/DomUtil,util/EventUtil,util/collection/StringHashMap,data/DataUtil,data/value/ListValue,data/value/TupleValue,data/value/StringValue,data/value/ScalarNullValue,data/value/CollectionValue,data/diff/ReplaceDataDiff,remote/ClientRuntime,unit/UnitInstance,unit/Renderer,unit/RendererMap,unit/RendererOperation,unit/RendererUtil,unit/HtmlRendererUtil".split(","), function(h, c, b, d, a, e, l, g, k, f, n, m, q, u, o, r, v, w, A) {
    function s(b) {
        u.call(this, b);
        this.m_option_elements = new a;
        this.m_optgroup_elements = new a;
        this.m_handle = null
    }

    function D(a, b) {
        z.assert(b instanceof g);
        var c = b.getAttribute("value").getObject(),
            d = b.getAttribute("label").getObject(),
            e = b.getAttribute("disabled");
        d === null && (d = "");
        var f = document.createElement("option");
        f.setAttribute("value", c);
        e != null && e.getObject() != "false" && I(f, e.getObject());
        c = document.createTextNode(d);
        f.appendChild(c);
        a.appendChild(f);
        return f
    }

    function y(a, b) {
        z.assert(B.isElement(a));
        z.assert(a.tagName.toLowerCase() ===
            "select");
        var c = b.getAttribute("label").getObject(),
            d = b.getAttribute("disabled"),
            e = document.createElement("optgroup");
        e.label = c;
        d != null && d.getObject() != "false" && e.setAttribute("disabled", d.getObject());
        (c = b.getAttribute("options")) && F.forEach(c.getTupleValues(), function(a) {
            D(e, a)
        });
        a.appendChild(e);
        return e
    }

    function x(a, b) {
        if (b === null) return null;
        z.assert(B.isElement(a));
        z.assert(a.tagName.toLowerCase() === "select");
        var c = F.filter(a.options, function(a) {
            return a.value === b.toString()
        });
        z.assert(c.length ===
            0 || c.length === 1);
        return c.length === 0 ? null : c[0]
    }

    function E(a, b) {
        if (b !== null) {
            z.assert(B.isElement(a));
            z.assert(a.tagName.toLowerCase() === "select");
            var c = x(a, b);
            if (c !== null) a.selectedIndex = c.index
        }
    }

    function I(a, b) {
        z.assert(B.isElement(a));
        z.assert(a.tagName.toLowerCase() === "option");
        a.setAttribute("disabled", b)
    }
    var z = new h,
        F = new c,
        B = new b,
        R = new d;
    new e;
    var J = new w,
        P = new A;
    s.prototype = new u;
    s.RENDERER_MAP = new r;
    s.prototype.getRendererMap = function() {
        return s.RENDERER_MAP
    };
    s.RENDERER_MAP.add(new o("insertDropDown",
        v.INSERT, "",
        function(a, b) {
            var c = b.getPayload(),
                d = document.createElement("select");
            a.setComponent(d);
            var e = c.getAttribute("options");
            e && F.forEach(e.getTupleValues(), function(b) {
                var c = D(d, b),
                    b = b.toDataPathString().replace(/^\//, "");
                a.m_option_elements.put(b, c)
            });
            (e = c.getAttribute("optgroups")) && F.forEach(e.getTupleValues(), function(b) {
                var c = y(d, b);
                b.getAttribute("options");
                b = b.toDataPathString().replace(/^\//, "");
                a.m_option_elements.put(b, c)
            });
            e = c.getAttribute("selected");
            E(d, e.getObject());
            e instanceof
            f && a.collectSelected();
            c.getAttribute("disabled").getObject() != "false" && J.setAttribute(d, "disabled", "true");
            c.getAttribute("multiple").getObject() != "false" && J.setAttribute(d, "multiple", "true");
            J.setAttribute(d, "size", c.getAttribute("size"));
            P.setGlobalAttributes(d, c);
            a.m_handle = R.connect(d, "onchange", a, a.onChange)
        }));
    s.RENDERER_MAP.add(new o("deleteDropDown", v.DELETE, "", function(a) {
        R.disconnect(a.m_handle);
        B.destroy(a.getComponent());
        a.setComponent(null)
    }));
    s.RENDERER_MAP.add(new o("replaceSelected",
        v.REPLACE, "selected",
        function(a, b) {
            var c = b.getPayload();
            z.assert(c instanceof k || c instanceof f);
            if (c instanceof f) a.collectSelected();
            else {
                var d = a.getComponent();
                E(d, c.getObject())
            }
        }));
    s.RENDERER_MAP.add(new o("insertOption", v.INSERT, "options/tuple", function(a, b) {
        var c = b.getPayload();
        z.assert(c instanceof g);
        var c = D(a.getComponent(), c),
            d = b.getRelativeContext().getString();
        a.m_option_elements.put(d, c)
    }));
    s.RENDERER_MAP.add(new o("replaceOptions", v.REPLACE, "options", function(b, c) {
        var d = c.getPayload();
        z.assert(d instanceof n);
        this.m_option_elements = new a;
        F.forEach(B.getChildElements(b.getComponent()), function(a) {
            a.tagName == "OPTION" && b.getComponent().removeChild(a)
        });
        d && F.forEach(d.getTupleValues(), function(a) {
            var c = D(b.getComponent(), a),
                a = a.toDataPathString().replace(/^\//, "");
            b.m_option_elements.put(a, c)
        });
        var e = c.getRelativeContext().getString();
        b.m_option_elements.put(e, d)
    }));
    s.RENDERER_MAP.add(new o("insertOptgroup", v.INSERT, "optgroups/tuple", function(a, b) {
        var c = b.getPayload();
        z.assert(c instanceof g);
        var c = y(a.getComponent(), c),
            d = b.getRelativeContext().getString();
        a.m_optgroup_elements.put(d, c)
    }));
    s.RENDERER_MAP.add(new o("deleteOption", v.DELETE, "options/tuple", function(a, b) {
        var c = b.getRelativeContext(),
            d = a.m_option_elements.get(c.getString());
        a.getComponent().removeChild(d);
        c = a.m_option_elements.remove(c.getString());
        z.assert(c === d)
    }));
    s.RENDERER_MAP.add(new o("replaceLabel", v.REPLACE, "options/tuple/label", function(a, b) {
        var c = b.getPayload().getObject(),
            d = b.getRelativeContext(),
            d = a.m_option_elements.get(d.up(1));
        z.assert(B.isElement(d));
        z.assert(d.tagName.toLowerCase() === "option");
        z.assert(z.isString(c));
        z.assert(d.childNodes.length === 1);
        var e = d.childNodes[0],
            c = document.createTextNode(c);
        d.replaceChild(c, e)
    }));
    s.RENDERER_MAP.add(new o("replaceDisabled", v.REPLACE, "disabled", function(a, b) {
        b.getPayload().getObject() !== "false" ? J.setAttribute(a.getComponent(), "disabled", "true") : J.setAttribute(a.getComponent(), "disabled", null)
    }));
    s.RENDERER_MAP.add(new o("replaceMultiple", v.REPLACE, "multiple", function(a, b) {
        b.getPayload().getObject() !==
            "false" ? J.setAttribute(a.getComponent(), "multiple", "true") : J.setAttribute(a.getComponent(), "multiple", null)
    }));
    s.RENDERER_MAP.add(new o("replaceSize", v.REPLACE, "size", function(a, b) {
        var c = a.getComponent(),
            d = b.getPayload().getObject();
        J.setAttribute(c, "size", d)
    }));
    s.RENDERER_MAP.add(new o("replaceOptionDisabled", v.REPLACE, "options/tuple/disabled", function(a, b) {
        var c = b.getPayload().getObject(),
            d = b.getRelativeContext(),
            d = a.m_option_elements.get(d.up(1));
        I(d, c)
    }));
    s.RENDERER_MAP.add(new o("replaceOptgroupLabel",
        v.REPLACE, "optgroups/tuple/label",
        function(a, b) {
            var c = b.getPayload().getObject(),
                d = b.getRelativeContext(),
                d = a.m_optgroup_elements.get(d.up(1));
            z.assert(B.isElement(d));
            z.assert(d.tagName.toLowerCase() === "optgroup");
            d.setAttribute("label", c)
        }));
    s.RENDERER_MAP.add(new o("replaceOptgroupDisabled", v.REPLACE, "optgroups/tuple/disabled", function(a, b) {
        var c = b.getPayload().getObject(),
            d = b.getRelativeContext(),
            d = a.m_optgroup_elements.get(d.up(1));
        z.assert(B.isElement(d));
        z.assert(d.tagName.toLowerCase() ===
            "optgroup");
        d.setAttribute("disabled", c)
    }));
    P.addGlobalRenderers(s.RENDERER_MAP);
    s.prototype.onChange = function() {
        this.collectSelected();
        this.invoke("onchange")
    };
    s.prototype.collectSelected = function() {
        var a = this.getComponent();
        if (a.options.length !== 0) {
            var b = a.selectedIndex,
                a = a.options[b < 0 ? 0 : b].value,
                a = new k(a);
            this.collect(new m("selected", a))
        }
    };
    return s
});
define("unit/html/DynamicHtmlUnitInstance", "Lang,Jquery,util/DomUtil,data/DataUtil,unit/UnitInstance,unit/Renderer,remote/ClientRuntime,unit/RendererMap,unit/RendererOperation,unit/RendererUtil".split(","), function(h, c, b, d, a, e, l, g, k) {
    function f(b) {
        a.call(this, b);
        this.m_nodes = null
    }
    new h;
    var n = new d;
    f.prototype = new a;
    f.RENDERER_MAP = new g;
    f.prototype.getRendererMap = function() {
        return f.RENDERER_MAP
    };
    f.RENDERER_MAP.add(new e("createShell", k.SHELL, "", function(a) {
        a.setComponent(c("<placeholder/>")[0])
    }));
    f.RENDERER_MAP.add(new e("insertDynamicHtml", k.INSERT, "", function(a, b) {
        var d = b.getPayload(),
            d = n.get(d, "value").getObject();
        (d = c.parseHTML(d, !0)) && d.length !== 0 ? (a.m_nodes = d, c(a.getComponent()).replaceWith(a.m_nodes)) : a.m_nodes = a.getComponent()
    }));
    f.RENDERER_MAP.add(new e("deleteDynamicHtml", k.DELETE, "", function(a) {
        c(a.m_nodes).remove();
        a.setComponent(null)
    }));
    f.RENDERER_MAP.add(new e("replaceValue", k.REPLACE, "value", function(a, b) {
        var d = b.getPayload().getObject(),
            d = c.parseHTML(d, !0);
        if (!d || d.length ===
            0) d = c("<placeholder/>");
        var e = c(a.m_nodes).first().prev()[0],
            f = c(a.m_nodes).first().parent()[0];
        c(a.m_nodes).remove();
        e ? c(d).insertAfter(e) : c(d).appendTo(f);
        a.m_nodes = d
    }));
    return f
});
define("unit/html/HistoryUnitInstance", "Lang,Jquery,util/ArrayUtil,util/DomUtil,util/EventUtil,remote/ClientRuntime,unit/UnitInstance,unit/Renderer,data/value/StringValue,data/value/TupleValue,data/value/BooleanValue,data/diff/ReplaceDataDiff,unit/RendererMap,unit/RendererOperation,unit/RendererUtil".split(","), function(h, c, b, d, a, e, l, g, k, f, n, m, q, u, o) {
    function r(a) {
        l.call(this, a);
        this.m_current = this.m_window_id = this.m_history_compatible = null;
        this.m_history = [];
        this.m_popstate_event = null
    }

    function v(a) {
        var b =
            new k(a.m_current),
            b = new m("current", b);
        a.collect(b)
    }

    function w(a, b, c) {
        for (var d = [], e = 0; e < a.length; e++) {
            var f = a[e].toDataPathString().replace(/^\//, ""),
                g = {
                    id: f,
                    value: a[e].getAttribute("value").getObject(),
                    url: a[e].getAttribute("url") && a[e].getAttribute("url").getObject() != null ? a[e].getAttribute("url").getObject() : location.href,
                    title: a[e].getAttribute("title") && a[e].getAttribute("title").getObject() != null ? a[e].getAttribute("title").getObject() : "",
                    window_id: c
                };
            b.length == 0 ? (d.push(g), history.pushState(g,
                g.title, g.url)) : b[0].id !== f ? (b.shift(), e--) : d.push(b.shift())
        }
        return d
    }
    new h;
    new b;
    var A = new d,
        s = new a;
    new o;
    r.prototype = new l;
    r.RENDERER_MAP = new q;
    r.prototype.getRendererMap = function() {
        return r.RENDERER_MAP
    };
    r.RENDERER_MAP.add(new g("insertHistory", u.INSERT, "", function(a, b) {
        a.m_window_id = e.get().getWindowId();
        a.m_history_compatible = !!history && !!history.pushState && !!history.replaceState;
        if (a.m_history_compatible) {
            var c = b.getPayload().getAttribute("states").getTupleValues();
            a.m_history = w(c, [], a.m_window_id);
            a.m_popstate_event = s.connect(window, "onpopstate", a, a.onPopState)
        }
        a.setComponent(A.create("div", {
            style: "display:none"
        }))
    }));
    r.RENDERER_MAP.add(new g("deleteHistory", u.DELETE, "", function(a) {
        a.disconnectEvent();
        A.destroy(a.getComponent());
        a.setComponent(null)
    }));
    r.RENDERER_MAP.add(new g("replaceCurrent", u.REPLACE, "current", function(a, b) {
        if (a.m_history_compatible) {
            var c = b.getPayload();
            if (c && (c = c.getObject()) && c > 0 && c !== a.m_current) {
                for (var d, e, f = 0; f < a.m_history.length && (e == null || d == null); f++) a.m_history[f].value ===
                    c && (e = f), a.m_history[f].value === a.m_current && (d = f);
                a.m_current = c;
                e != null && d != null && history.go(e - d)
            }
        }
    }));
    r.RENDERER_MAP.add(new g("replaceStates", u.REPLACE, "states", function(a, b) {
        if (a.m_history_compatible) {
            var c = b.getPayload().getTupleValues();
            a.m_history = w(c, a.m_history, a.m_window_id);
            a.m_current = a.m_history[a.m_history.length - 1] ? a.m_history[a.m_history.length - 1].value : null;
            v(a)
        }
    }));
    r.prototype.onPopState = function(a) {
        if (a.state && a.state.value !== null && a.state.value !== void 0 && this.m_current !== a.state.value &&
            this.m_window_id === a.state.window_id) this.m_current = a.state.value, v(this), this.invoke("onpopstate", {
            state: a.state.value
        })
    };
    r.prototype.disconnectEvent = function() {
        this.m_popstate_event !== null && s.disconnect(this.m_popstate_event)
    };
    return r
});
define("unit/html/HtmlLayoutUnitInstance", "Lang,util/ArrayUtil,util/DomUtil,util/collection/StringHashMap,data/DataUtil,unit/UnitInstance,unit/Renderer,remote/ClientRuntime,unit/RendererMap,unit/RendererOperation,unit/RendererUtil".split(","), function(h, c, b, d, a, e, l, g, k, f, n) {
    function m(a) {
        e.call(this, a);
        this.m_child_components = new d;
        this.m_child_item_ids = new d;
        this.m_placeholders = new d
    }

    function q(a, b) {
        b.substr(0, 1) === "/" && (b = b.substr(1));
        return a.m_context + b + "/unit"
    }

    function u(a, b, c) {
        c = q(a, c);
        b = b.getAttribute("item_id").getObject();
        a.m_child_item_ids.put(c, b)
    }
    var o = new h,
        r = new c,
        v = new a,
        w = new b;
    new n;
    m.prototype = new e;
    m.RENDERER_MAP = new k;
    m.prototype.getRendererMap = function() {
        return m.RENDERER_MAP
    };
    m.prototype.instantiatePlaceholder = function(a, b) {
        o.assert(o.isString(a));
        o.assert(w.isNode(b));
        var c = w.query("#" + a, this.getComponent());
        c.length !== 1 ? o.log('Unable to find element with id "' + a + '" in template') : (c = c[0], w.replaceNode(c, b), this.m_placeholders.put(a, c), this.m_child_components.put(a, b))
    };
    m.RENDERER_MAP.add(new l("insertHtmlLayout",
        f.INSERT, "",
        function(a, b) {
            var c = w.document().createElement("div");
            a.setComponent(c);
            var c = v.get(b.getPayload(), "template").getObject(),
                d = a.m_unit_instance_id;
            d.substr(-1) !== "/" && (d += "/");
            a.m_context = d;
            d = b.getPayload().getAttribute("items");
            r.forEach(d.getTupleValues(), function(b) {
                var c = b.toDataPathString();
                u(a, b, c)
            });
            w.html(a.getComponent(), c)
        }));
    m.RENDERER_MAP.add(new l("replaceTemplate", f.REPLACE, "template", function(a, b) {
        var c = b.getPayload().getObject(),
            d = a.getComponent(),
            e = w.document().createElement("div");
        d.parentNode.insertBefore(e, d);
        a.setComponent(e);
        w.html(e, c);
        r.forEach(a.m_child_components.keys(), function(b) {
            var c = a.m_child_components.get(b);
            a.instantiatePlaceholder(b, c)
        });
        w.destroy(d)
    }));
    m.RENDERER_MAP.add(new l("insertTuple", f.INSERT, "items/tuple", function(a, b) {
        var c = b.getRelativeContext().toString();
        u(a, b.getPayload(), c)
    }));
    m.RENDERER_MAP.add(new l("deleteTuple", f.DELETE, "items/tuple", function(a, b) {
        b.getPayload();
        var c = b.getRelativeContext().toString(),
            d = q(a, c),
            c = a.m_child_item_ids.get(d),
            e = a.m_child_components.get(c);
        a.m_child_components.remove(c);
        a.m_child_item_ids.remove(d);
        d = a.m_placeholders.get(c);
        e.parentNode === void 0 || e.parentNode === null ? a.m_placeholders.remove(c) : e.parentNode.insertBefore(d, e)
    }));
    m.RENDERER_MAP.add(new l("attachUnit", f.ATTACH, "items/tuple/unit", function(a, b) {
        var c = b.getChildUnitInstanceId(),
            d = a.m_child_item_ids.get(c),
            c = g.get().getUnitInstanceMap().get(c);
        o.assert(c !== null);
        a.instantiatePlaceholder(d, c.getComponent())
    }));
    m.RENDERER_MAP.add(new l("deleteHtmlLayout",
        f.DELETE, "",
        function(a) {
            a.deleteComponent()
        }));
    return m
});
define("unit/html/HtmlUnitInstance", "Lang,Jquery,util/ArrayUtil,util/DomUtil,util/XhrUtil,util/StringUtil,util/collection/StringHashMap,data/value/Value,data/value/NullValue,data/value/TupleValue,data/value/TupleNullValue,data/value/CollectionValue,data/value/SwitchValue,data/value/ScalarValue,data/value/XhtmlValue,data/value/StringValue,remote/ClientRuntime,remote/RemoteUtil,unit/UnitInstance,unit/Renderer,unit/RendererMap,unit/RendererOperation,unit/XmlIndexPath,unit/UnitCompositeDiff,util/NameGenerator".split(","), function(h,
    c, b, d, a, e, l, g, k, f, n, m, q, u, o, r, v, w, A, s, D, y, x, E, I) {
    function z(a) {
        A.call(this, a);
        this.m_child_components = new l;
        this.m_node_ranges = new l;
        this.m_character_ranges = new l;
        this.m_elements_to_attributes = {};
        this.m_top_level_nodes = [];
        this.m_template_value = null;
        this.m_only_one_child = !1
    }

    function F(a, b, c) {
        var d = C.attr(a, "__fid");
        return b[d] && b[d][c] ? b[d][c] : C.attr(a, c) || ""
    }

    function B() {
        G.assert(!T);
        z.RENDERER_MAP.add(new s("insertHtml", y.INSERT, "", function(a, b) {
            G.assert(!T);
            var c = w.getUnitConfigId(a.getUnitInstanceId()),
                c = v.get().getUnitConfigMap().get(c).m_template;
            a.m_template_value = c;
            G.assert(c instanceof o);
            var d = document.createElement("div"),
                c = c.getObject(),
                e = C.isHtmlElement(c) ? [c] : C.getChildElementsByTagName(c, "html");
            G.assert(e.length <= 1, "HTML element should be the only child");
            e = e.length === 1 ? e[0] : null;
            if (e !== null) {
                var c = C.getChildElementsByTagName(e, "head"),
                    f = c.length > 0 ? c[0] : null,
                    c = C.getChildElementsByTagName(e, "body"),
                    g = c.length > 0 ? c[0] : null;
                a.setComponent(function() {
                    var c = C.query("head")[0],
                        e = document.body,
                        h = [];
                    f !== null && M.addAll(h, C.importAndAppendChildNodes(f, c, a.m_elements_to_attributes));
                    M.addAll(h, C.importAndAppendChildNodes(g, e, a.m_elements_to_attributes));
                    for (var k = 0, l = g.attributes; k < l.length; k++) C.attr(e, l[k].name, l[k].value);
                    a.m_top_level_nodes = h;
                    h = b.getPayload();
                    a.instantiatePlaceholders("", h, [c, e]);
                    a.setComponent(d)
                })
            } else C.importAndAppendChildNodes(c, d, a.m_elements_to_attributes), a.setComponent(d), c = b.getPayload(), a.instantiatePlaceholders("", c, [d])
        }));
        z.RENDERER_MAP.add(new s("deleteHtml",
            y.DELETE, "",
            function(a) {
                G.assert(!T);
                var b = C.query("head")[0],
                    d = document.body,
                    e = a.m_node_ranges;
                M.forEach(a.m_top_level_nodes, function(f) {
                    G.isString(f) ? (f = e.get(f), M.forEach(f, function(e) {
                        var f = e.getStartNode();
                        c.contains(document, f) && (e = e.getAllNodes(), M.forEach(e, function(c) {
                            c !== b && c !== d && (C.destroy(c), (c = C.attr(c, "__fid")) && delete a.m_elements_to_attributes[c])
                        }))
                    })) : C.destroy(f)
                });
                C.destroy(a.getComponent());
                a.setComponent(null)
            }));
        z.RENDERER_MAP.add(new s("attachChildren", y.ATTACH, "*>", function(a,
            b) {
            G.assert(!T);
            if (!(b.getPayload() instanceof n)) {
                var c = b.getChildUnitInstanceId(),
                    d = b.getRelativeContext().toString(),
                    e = a.m_child_components.get(d);
                G.assert(e !== null);
                c = v.get().getUnitInstanceMap().get(c);
                G.assert(c !== null);
                c = c.getComponent();
                G.assert(c !== null);
                e.parentNode === null ? (e = a.m_node_ranges.get(d), G.assert(e.length === 1), e = e[0].getEndNode(), e.parentNode.insertBefore(c, e)) : e.parentNode.replaceChild(c, e);
                a.m_child_components.put(d, c)
            }
        }));
        z.RENDERER_MAP.add(new s("insertChildren", y.INSERT, "*>",
            function(a, b) {
                G.assert(!T);
                var c = a.getComponent().ownerDocument,
                    d = b.getPayload(),
                    e = b.getRelativeContext(),
                    f = e.up(1),
                    g = f.toString(),
                    f = 'placeholder[name="' + f.getLastPart() + '"]',
                    f = C.query(f, a.m_template_value.getObject());
                G.assert(f.length === 1);
                var c = C.importNode(c, f[0], !0, a.m_elements_to_attributes),
                    h = C.getChildNodes(c),
                    g = a.m_node_ranges.get(g);
                M.forEach(g, G.hitch(this, function(b) {
                    var c = b.getEndNode();
                    M.forEach(h, function(a) {
                        c.parentNode.insertBefore(a, c)
                    });
                    a.instantiatePlaceholders(e.toString(), d,
                        h)
                }))
            }));
        z.RENDERER_MAP.add(new s("replaceChildren", y.REPLACE, "*>", function(a, b) {
            G.assert(!T);
            var c = a.getComponent().ownerDocument,
                d = b.getPayload(),
                e = b.getRelativeContext(),
                f = e.toString(),
                g = e.getLastPart(),
                h = Q(e.getLastPart());
            d.getEdgeLabel() || d.setEdgeLabel(g);
            h && (g = g.replace(V, ""));
            e = C.query('placeholder[name="' + g + '"]', a.m_template_value.getObject());
            G.assert(e.length === 1);
            var l = e[0],
                e = a.m_node_ranges.get(f);
            e === null ? G.assert(d instanceof k) : (G.assert(e.length > 0), a.discardNodeRanges(f), a.m_character_ranges.get(f) ||
                a.discardCharacterRanges(f), M.forEach(e, function(b) {
                    var e = b.getStartNode(),
                        g = C.importNode(c, l, !0, a.m_elements_to_attributes);
                    e.parentNode.insertBefore(g, e);
                    var m = b.getAllNodes();
                    M.forEach(m, function(b) {
                        C.destroy(b);
                        (b = C.attr(b, "__fid")) && delete a.m_elements_to_attributes[b]
                    });
                    C.destroy(e);
                    C.destroy(b.getEndNode());
                    a.instantiatePlaceholders(f, d, [g]);
                    h && (b = d instanceof k ? "" : d.getString(), S(f, b, g, a))
                }))
        }));
        z.RENDERER_MAP.add(new s("deleteChildren", y.DELETE, "*>", function(a, b) {
            G.assert(!T);
            var c = b.getRelativeContext().toString(),
                d = a.m_node_ranges.get(c);
            G.assert(d !== null);
            G.assert(d.length > 0);
            a.discardNodeRanges(c);
            a.discardCharacterRanges(c);
            M.forEach(d, function(b) {
                b = b.getAllNodes();
                M.forEach(b, function(b) {
                    C.destroy(b);
                    (b = C.attr(b, "__fid")) && delete a.m_elements_to_attributes[b]
                })
            })
        }))
    }

    function R(a) {
        return C.isElement(a) && a.tagName.toLowerCase() === "placeholder"
    }

    function J(a) {
        G.assert(C.isElement(a));
        var b = new l;
        P(b, a);
        return b
    }

    function P(a, b) {
        R(b) && C.attr(b, "name") !== void 0 ? a.put(C.attr(b, "name"), b) : M.forEach(b.childNodes,
            function(b) {
                C.isElement(b) && P(a, b)
            })
    }

    function Q(a) {
        return X.startsWith(a, V)
    }

    function S(a, b, d, e) {
        G.assert(c(d).attr("type").toLowerCase() === "if");
        var f = a,
            g = c(d).attr("name"),
            a = a.replace(RegExp("[" + W + "]?" + V + g), ""),
            d = C.importNode(document, d, !0, {}),
            h = c("<div>");
        c(d).children().each(function() {
            c(this).attr("name") !== b && h.append(c(this).children())
        });
        f = e.m_node_ranges.get(f)[0].getAllNodes();
        M.forEach(f, function(b) {
            C.isElement(b) && J(b).forEach(function(b, d) {
                var f = c(b).attr("type") === "If" ? V : "",
                    f = L([a, f +
                        d
                    ]);
                e.saveNodeRange(f, b, b)
            })
        })
    }

    function L(a) {
        var b = RegExp("[" + W + "]+", "g"),
            c = RegExp("^[" + W + "]");
        return a.join(W).replace(c, "").replace(b, W)
    }

    function H(a) {
        a = C.attr(a, "attribute_name");
        return a !== null && a !== void 0
    }

    function N(a, b, c) {
        M.forEach(a, function(d, e) {
            d === b && (a[e] = c)
        })
    }

    function K(a, b) {
        var c = b.getComponent();
        b.m_only_one_child && (a = new x(a.getParts().slice(1).join("/")));
        return a.find(c)
    }

    function O(a, b, c, d, e) {
        this.m_start_position = c;
        this.m_end_position = d;
        this.m_ordinal_position = e;
        this.m_element = a;
        this.m_attribute_name = b
    }

    function U(a, b) {
        G.assert(C.isNode(a));
        G.assert(C.isNode(b));
        G.assert(a.parentNode === b.parentNode);
        this.m_start_node = a;
        this.m_end_node = b
    }
    var G = new h,
        M = new b,
        C = new d;
    new a;
    var X = new e,
        Y = I.getInstance(),
        T = d.PREPARE_HTML,
        V = "__selected_",
        W = "/";
    z.prototype = new A;
    z.RENDERER_MAP = new D;
    z.prototype.getRendererMap = function() {
        return z.RENDERER_MAP
    };
    z.prototype.saveNodeRange = function(a, b, c) {
        if (R(b)) {
            var d = b.ownerDocument,
                d = d.createTextNode("");
            b.parentNode.insertBefore(d, b);
            b = d
        }
        if (R(c)) d =
            c.ownerDocument, d = d.createTextNode(""), c.nextSibling === null ? c.parentNode.appendChild(d) : c.parentNode.insertBefore(d, c.nextSibling), c = d;
        b = new U(b, c);
        c = this.m_node_ranges.get(a);
        c === null ? (c = [b], this.m_node_ranges.put(a, c)) : c.push(b)
    };
    z.prototype.discardNodeRanges = function(a) {
        var b = this.m_node_ranges,
            d = a.lastIndexOf("/"),
            e = a.substring(0, d + 1),
            d = a.substring(e.length, a.length),
            f = Q(d);
        b.remove(a);
        a += W;
        var g = a.length;
        M.forEach(b.keys(), function(c) {
            c.substring(0, g) === a && b.remove(c)
        });
        if (f) {
            var d = d.substring(V.length,
                    d.length),
                d = c("placeholder[name='" + d + "']", this.m_template_value.getObject())[0],
                h = this;
            c("placeholder[name]", d).each(function(a, b) {
                var d = c(b).attr("name");
                c(b).attr("type") === "If" && (d = V + d);
                h.discardNodeRanges(e + d)
            })
        }
    };
    z.prototype.discardChildComponents = function(a) {
        var b = this;
        c("placeholder[type='Unit'],placeholder[type='Html']", a).each(function() {
            b.m_child_components.remove(c(this).attr("name"))
        })
    };
    z.prototype.instantiatePlaceholders = function(a, b, d) {
        G.assert(b instanceof g);
        G.assert(G.isArray(d));
        G.assert(d.length > 0);
        this.saveNodeRange(a, d[0], d[d.length - 1]);
        M.forEach(d, G.hitch(this, function(d) {
            G.assert(C.isNode(d));
            if (C.isElement(d)) {
                var e = !!d.tagName && d.tagName.toLowerCase() === "placeholder",
                    g = e ? C.attr(d, "type").toLowerCase() : null,
                    h = e ? C.attr(d, "name").toLowerCase() : null,
                    l = e && a.lastIndexOf(h) < 0 ? L([a, h]) : a;
                if (g === "html" || g === "unit") this.m_child_components.put(l, d), this.m_node_ranges.get(l) || this.saveNodeRange(l, d, d);
                else if (b instanceof m) G.assert(e), M.forEach(b.getTupleValues(), G.hitch(this,
                    function(a) {
                        var b = C.cloneNode(d, !0),
                            b = C.getChildNodes(b);
                        M.forEach(b, function(a) {
                            a.parentNode.removeChild(a);
                            d.parentNode.insertBefore(a, d)
                        });
                        b.length > 0 && this.instantiatePlaceholders(L([l, "tuple" + a.getEdgeLabel()]), a, b)
                    })), N(this.m_top_level_nodes, d, l), d.parentNode.removeChild(d);
                else if (b instanceof f) {
                    var n = J(d);
                    M.forEach(b.getAttributeNames(), G.hitch(this, function(c) {
                        var d = b.getAttribute(c),
                            e = null;
                        Q(c) ? (e = c.replace(V, ""), e = n.get(e)) : e = n.get(c);
                        if (e !== null) {
                            var f = L([a, c]);
                            this.instantiatePlaceholders(f,
                                d, [e]);
                            Q(c) && (c = this.m_node_ranges.get(f), G.assert(c.length === 1), M.forEach(c[0].getAllNodes(), function(a) {
                                C.isElement(a) && J(a).forEach(function(a, b) {
                                    n.put(b, a)
                                })
                            }))
                        }
                    }))
                } else if (b instanceof r && Q(b.getEdgeLabel())) {
                    G.assert(e);
                    e = 'placeholder[name="' + b.getString() + '"]';
                    e = C.query(e, d);
                    G.assert(e.length === 1);
                    e = C.getChildNodes(e[0]);
                    M.forEach(e, function(a) {
                        a.parentNode.removeChild(a);
                        d.parentNode.insertBefore(a, d)
                    });
                    this.discardChildComponents(d);
                    var o = this;
                    M.forEach(e, function(a) {
                        C.isElement(a) && J(a).forEach(function(a,
                            b) {
                            var d = c(a).attr("type").toLowerCase();
                            if (d === "html" || d === "unit") d = l.substring(0, l.lastIndexOf("/") + 1) + b, o.m_child_components.put(d, a)
                        })
                    });
                    N(this.m_top_level_nodes, d, l);
                    d.parentNode.removeChild(d)
                } else b instanceof u ? (G.assert(e), e = b.getString(), H(d) && (this.instantiateExpression(l, d, b), e = ""), g = d.ownerDocument, e = g.createTextNode(e)) : (G.assert(e), G.assert(b instanceof k), g = d.ownerDocument, e = g.createTextNode("")), N(this.m_top_level_nodes, d, l), d.parentNode.replaceChild(e, d)
            }
        }))
    };
    z.prototype.instantiateExpression =
        function(a, b, c) {
            var d = c.getString(),
                e;
            C.attr(b, "name");
            var c = C.attr(b, "attribute_name"),
                f = this.m_character_ranges.get(a);
            f ? (b = f.getElement(), e = F(b, this.m_elements_to_attributes, f.getAttributeName()), a = e.substring(0, f.getStart()) + d + e.substring(f.getEnd()), e = a.length - e.length, f.setEnd(f.getStart() + d.length)) : (f = this.createCharacterRange(b, d.length), this.m_character_ranges.put(a, f), b = f.getElement(), e = F(b, this.m_elements_to_attributes, c), a = e.substring(0, f.getStart()) + d + e.substring(f.getStart()), e = d.length);
            this.updateCharacterRanges(f, e);
            d = b;
            f = this.m_elements_to_attributes;
            b = C.attr(d, "__fid");
            C.attr(d, c, a);
            C.attr(d, c) !== a ? f[b] ? f[b][c] = a : (b = Y.getNewId(), e = {}, e[c] = a, f[b] = e, C.attr(d, "__fid", b)) : f[b] && (delete f[b][c], f[b].length == 0 && delete f[b])
        };
    z.prototype.updateCharacterRanges = function(a, b) {
        this.m_character_ranges.forEach(function(c) {
            a !== c && a.getElement() === c.getElement() && a.getAttributeName() === c.getAttributeName() && a.getOrdinalPosition() < c.getOrdinalPosition() && (c.setStart(c.getStart() + b), c.setEnd(c.getEnd() +
                b))
        })
    };
    z.prototype.createCharacterRange = function(a, b) {
        var c;
        c = C.attr(a, "tag_name");
        for (var d = a.previousSibling; !C.isElement(d) || R(d);) d = d.previousSibling;
        G.assert(c.toLowerCase() === d.nodeName.toLowerCase());
        c = d;
        var d = C.attr(a, "attribute_name"),
            e = parseInt(C.attr(a, "ordinal_position")),
            f = parseInt(C.attr(a, "initial_position")),
            f = this.getStartPosition(c, d, f, e);
        return new O(c, d, f, f + b, e)
    };
    z.prototype.getStartPosition = function(a, b, c, d) {
        var e = 0;
        this.m_character_ranges.forEach(function(c) {
            a === c.getElement() &&
                b === c.getAttributeName() && d > c.getOrdinalPosition() && (e += c.getEnd() - c.getStart())
        });
        return c + e
    };
    z.prototype.discardCharacterRanges = function(a) {
        var b = this.m_character_ranges,
            d = a.lastIndexOf("/"),
            e = a.substring(0, d + 1),
            d = a.substring(e.length, a.length),
            f = Q(d);
        b.remove(a);
        a += W;
        var g = a.length;
        M.forEach(b.keys(), function(c) {
            c.substring(0, g) === a && b.remove(c)
        });
        if (f) {
            var d = d.substring(V.length, d.length),
                d = c("placeholder[name='" + d + "']", this.m_template_value.getObject())[0],
                h = this;
            c("placeholder[name]", d).each(function(a,
                b) {
                var d = c(b).attr("name");
                c(b).attr("type") === "If" && (d = V + d);
                h.discardCharacterRanges(e + d)
            })
        }
    };
    T || B();
    (function() {
        function a(b, d) {
            var e = null,
                f = null,
                g = d.getPayload();
            M.forEach(g, function(a) {
                var b = a.getTargetMethod();
                b === "head" ? f = a.getPayload() : (G.assert(b === "body"), e = a.getPayload())
            });
            var h = C.query("head")[0],
                k = document.body;
            b.setComponent(function() {
                if (f)
                    for (var a = C.parseTextToXml("<head>" + f + "</head>"), a = C.query("head", a)[0], d = a.childNodes.length, g = h.childNodes[0], l = 0; l < d; l++) {
                        var m = C.importNode(document,
                            a.childNodes[l], !0, b.m_elements_to_attributes);
                        h.insertBefore(m, g)
                    }
                e && (c(k).prepend(e), b.setComponent(document))
            })
        }

        function b(a, c) {
            var d = new x(c.getRelativeContext()),
                d = K(d, a);
            G.assert(d.length > 0);
            T && a.replaceWithPlaceholderComment(d[0]);
            M.forEach(d, function(a) {
                C.destroy(a)
            });
            a.m_component = null
        }

        function d(a, b) {
            var c = b.getPayload();
            M.forEach(c, function(b) {
                b = new x(b.getRelativeContext());
                b = K(b, a);
                M.forEach(b, function(a) {
                    C.destroy(a)
                })
            })
        }
        var e;
        e = T ? "insertHtml" : "directHtml";
        z.RENDERER_MAP.add(new s(e,
            y.INSERT, "",
            function(b, c) {
                if (c instanceof E) a(b, c);
                else {
                    var d = c.getPayload();
                    G.assert(b.getComponent() === null);
                    var e = document.createElement("div");
                    b.setComponent(e);
                    e = b.getComponent();
                    C.html(e, d);
                    if (e.childNodes.length === 1) b.m_only_one_child = !0, b.setComponent(e.firstChild)
                }
            }));
        e = T ? "deleteHtml" : "directDeleteHtml";
        z.RENDERER_MAP.add(new s(e, y.DELETE, "", function(a, c) {
            c instanceof E ? d(a, c) : b(a, c)
        }));
        e = T ? "replaceChildren" : "directReplaceChildren";
        z.RENDERER_MAP.add(new s(e, y.REPLACE, "*>", function(a, b) {
            var d =
                b.getPayload(),
                e = new x(b.getRelativeContext()),
                f = K(e, a);
            G.assert(f.length > 0);
            var g = f[0],
                e = e.getAttribute();
            e !== null ? C.attr(g, e, d) : (c(g).before(d), M.forEach(f, function(a) {
                C.destroy(a)
            }))
        }));
        e = T ? "insertChildren" : "directInsertChildren";
        z.RENDERER_MAP.add(new s(e, y.INSERT, "*>", function(a, b) {
            var d = b.getPayload(),
                e = new x(b.getRelativeContext()),
                e = K(e, a);
            G.assert(e.length > 0);
            c(e[0]).before(d)
        }));
        e = T ? "deleteChildren" : "directDeleteChildren";
        z.RENDERER_MAP.add(new s(e, y.DELETE, "*>", function(a, b) {
            b.getPayload();
            var c = new x(b.getRelativeContext()),
                c = K(c, a);
            G.assert(c.length > 0);
            M.forEach(c, function(a) {
                C.destroy(a)
            })
        }));
        e = T ? "attachChildren" : "directAttachChildren";
        z.RENDERER_MAP.add(new s(e, y.ATTACH, "*>", function(a, b) {
            var c = b.getChildUnitInstanceId(),
                d = new x(b.getRelativeContext()),
                d = K(d, a);
            G.assert(d.length > 0);
            c = v.get().getUnitInstanceMap().get(c);
            G.assert(c !== null);
            c = c.getComponent();
            G.assert(c !== null);
            for (var e = d[d.length - 1], f = e.parentNode, d = d[0].nextSibling; d !== e;) {
                var g = d.nextSibling;
                f.removeChild(d);
                d =
                    g
            }
            f.insertBefore(c, e)
        }))
    })();
    O.prototype.setStart = function(a) {
        this.m_start_position = a
    };
    O.prototype.getStart = function() {
        return this.m_start_position
    };
    O.prototype.setEnd = function(a) {
        this.m_end_position = a
    };
    O.prototype.getEnd = function() {
        return this.m_end_position
    };
    O.prototype.getOrdinalPosition = function() {
        return this.m_ordinal_position
    };
    O.prototype.getElement = function() {
        return this.m_element
    };
    O.prototype.getAttributeName = function() {
        return this.m_attribute_name
    };
    U.prototype.getStartNode = function() {
        return this.m_start_node
    };
    U.prototype.getEndNode = function() {
        return this.m_end_node
    };
    U.prototype.getAllNodes = function() {
        for (var a = [], b = this.m_start_node; b !== this.m_end_node; b = b.nextSibling) G.assert(b !== null), a.push(b);
        a.push(this.m_end_node);
        return a
    };
    return z
});
define("unit/html/PasswordInputUnitInstance", "Lang,Dojo,util/collection/StringHashMap,util/DomUtil,util/EventUtil,data/DataUtil,data/diff/ReplaceDataDiff,remote/ClientRuntime,unit/UnitInstance,unit/Renderer,data/value/IntegerValue,data/value/StringValue,data/value/ScalarNullValue,unit/RendererMap,unit/RendererOperation,unit/RendererUtil,unit/HtmlRendererUtil".split(","), function(h, c, b, d, a, e, l, g, k, f, n, m, q, u, o, r, v) {
    function w(a) {
        k.call(this, a);
        this.m_threshold = 0;
        this.m_valid_chars = this.m_invoke_timeout =
            this.m_previous_value = this.m_idle_timeout = null
    }

    function A(a) {
        if (a.m_invoke_timeout !== null) clearTimeout(a.m_invoke_timeout), a.m_invoke_timeout = null
    }

    function s(a) {
        if (a.m_idle_timeout !== null) clearTimeout(a.m_idle_timeout), a.m_idle_timeout = null
    }

    function D(a, b) {
        s(a);
        a.m_idle_timeout = setTimeout(b, a.m_threshold)
    }

    function y(a, b) {
        A(a);
        g.get().hasInFlightRequest() ? a.m_invoke_timeout = setTimeout(function() {
            y(a, b)
        }, 100) : b()
    }

    function x(a) {
        var b = I.attr(a.getComponent(), "value");
        if (b === a.m_previous_value) return !1;
        a.m_previous_value = b;
        b = new m(b);
        b = new l("value", b);
        a.collect(b);
        return !0
    }
    var E = new h,
        I = new d,
        z = new a;
    new e;
    var F = new r,
        B = new v;
    w.prototype = new k;
    w.RENDERER_MAP = new u;
    w.prototype.getRendererMap = function() {
        return w.RENDERER_MAP
    };
    w.RENDERER_MAP.add(new f("insertPasswordInput", o.INSERT, "", function(a, b) {
        var c = b.getPayload(),
            d = c.getAttribute("type").getObject();
        d === null && (d = "password");
        var e = I.create("input");
        I.attr(e, "type", d);
        a.setComponent(e);
        F.setAttribute(e, "size", c.getAttribute("size"));
        F.setAttribute(e,
            "maxlength", c.getAttribute("maxlength"));
        F.setAttribute(e, "value", c.getAttribute("value"));
        c.getAttribute("readonly").getObject() != "false" && F.setAttribute(e, "readonly", "true");
        B.setGlobalAttributes(e, c);
        this.m_keypress_handle = z.connect(e, "onkeypress", a, a.onKeyPress);
        this.m_change_handle = z.connect(e, "onchange", a, a.onChange)
    }));
    w.RENDERER_MAP.add(new f("deletePasswordInput", o.DELETE, "", function(a) {
        z.disconnect(a.m_keypress_handle);
        z.disconnect(a.m_change_handle);
        I.destroy(a.getComponent());
        a.setComponent(null);
        s(a);
        A(a)
    }));
    w.RENDERER_MAP.add(new f("replaceClass", o.REPLACE, "class", function(a, b) {
        F.setClass(a.getComponent(), b.getPayload())
    }));
    w.RENDERER_MAP.add(new f("replaceStyle", o.REPLACE, "style", function(a, b) {
        F.setStyle(a.getComponent(), b.getPayload())
    }));
    w.RENDERER_MAP.add(new f("replaceSize", o.REPLACE, "size", function(a, b) {
        F.setAttribute(a.getComponent(), "size", b.getPayload())
    }));
    w.RENDERER_MAP.add(new f("replaceMaxLength", o.REPLACE, "maxlength", function(a, b) {
        F.setAttribute(a.getComponent(), "maxlength",
            b.getPayload())
    }));
    w.RENDERER_MAP.add(new f("replaceValue", o.REPLACE, "value", function(a, b) {
        var c = b.getPayload();
        if (c === null || c instanceof q) c = "";
        F.setAttribute(a.getComponent(), "value", c)
    }));
    w.RENDERER_MAP.add(new f("replaceReadonly", o.REPLACE, "readonly", function(a, b) {
        F.setAttribute(a.getComponent(), "readonly", b.getPayload())
    }));
    B.addGlobalRenderers(w.RENDERER_MAP);
    w.prototype.onKeyPress = function(a) {
        this.m_valid_chars !== null && a.keyChar !== void 0 && this.m_valid_chars.indexOf(a.keyChar) < 0 && a.preventDefault();
        var b = new n(a.keyCode);
        if (a.keyCode == c.keys.ENTER) {
            s(this);
            A(this);
            var d = this;
            y(d, function() {
                var a = new l("keycode", b);
                d.collect(a);
                x(d);
                d.invoke("onkeypress")
            })
        } else D(this, E.hitch(this, function() {
            this.collect(new l("keycode", b));
            x(this);
            this.invoke("onkeypress")
        }))
    };
    w.prototype.onChange = function() {
        var a = this;
        x(a);
        D(this, E.hitch(this, function() {
            y(a, function() {
                x(a);
                a.invoke("onchange")
            })
        }))
    };
    return w
});
define("unit/html/RadioButtonUnitInstance", "Lang,util/ArrayUtil,util/DomUtil,util/EventUtil,data/DataUtil,data/value/BooleanValue,data/diff/ReplaceDataDiff,unit/UnitInstance,unit/Renderer,remote/ClientRuntime,util/collection/StringHashMap,util/EventManager,unit/RendererMap,unit/RendererOperation,unit/RendererUtil,unit/HtmlRendererUtil".split(","), function(h, c, b, d, a, e, l, g, k, f, n, m, q, u, o, r) {
    function v(a) {
        g.call(this, a)
    }

    function w(a) {
        var b = y.get(a.m_name);
        b ? (a.des_event = b.newEvent("deselect", E), a.m_manager =
            b) : (a.m_manager = new m, a.des_event = a.m_manager.newEvent("deselect", E), y.put(a.m_name, a.des_event));
        a.des_event.subscribe(a, a.deselect)
    }
    var A = new h;
    new c;
    new a;
    var s = new b,
        D = new d,
        y = new n;
    new o;
    var x = new r;
    v.prototype = new g;
    v.prototype.m_schema_map = new n({
        name: function(a) {
            this.m_name = s.attr(this.m_button, "name", a.getObject())
        },
        value: function(a) {
            s.attr(this.m_button, "value", a.getObject())
        },
        label: function(a) {
            var b = "";
            a !== null && a.getObject() !== null && (b = a.getObject());
            this.m_label.textContent ? this.m_label.textContent =
                b : this.m_label.innerHTML = b
        },
        id: function(a) {
            a !== null && a.getObject() !== null && s.attr(this.m_button, "id", a.getObject())
        }
    });
    v.RENDERER_MAP = new q;
    v.prototype.getRendererMap = function() {
        return v.RENDERER_MAP
    };
    v.RENDERER_MAP.add(new k("insertRadioButton", u.INSERT, "", function(a, b) {
        var c = b.getPayload(),
            d = navigator.appName,
            e = c.getAttribute("checked").getObject(),
            f = document.createElement("div"),
            g = document.createElement("label"),
            h = document.createElement("input");
        a.m_checked = e;
        a.m_label = g;
        a.m_button = h;
        h.type = "radio";
        a.setComponent(f);
        a.m_schema_map.forEach(function(b, d) {
            b.call(a, c.getAttribute(d))
        });
        x.setGlobalAttributes(h, c);
        a.m_handle = D.connect(h, "onclick", a, a.onSelect);
        d === "Microsoft Internet Explorer" && e ? a.m_button.defaultChecked = e : a.m_button.checked = e;
        f.appendChild(g);
        f.appendChild(h);
        w(a)
    }));
    v.RENDERER_MAP.add(new k("deleteRadioButton", u.DELETE, "", function(a) {
        D.disconnect(a.m_handle);
        a.des_event.unsubscribe(a);
        s.destroy(a.getComponent());
        a.setComponent(null)
    }));
    v.RENDERER_MAP.add(new k("replaceLabel", u.REPLACE,
        "label",
        function(a, b) {
            var c = b.getPayload();
            a.m_schema_map.get("label").call(a, c)
        }));
    v.RENDERER_MAP.add(new k("replaceName", u.REPLACE, "name", function(a, b) {
        var c = b.getPayload();
        a.m_schema_map.get("name").call(a, c);
        a.des_event.unsubscribe(a);
        w(a)
    }));
    v.RENDERER_MAP.add(new k("replaceValue", u.REPLACE, "value", function(a, b) {
        var c = b.getPayload();
        a.m_schema_map.get("value").call(a, c)
    }));
    v.RENDERER_MAP.add(new k("replaceChecked", u.REPLACE, "checked", function(a, b) {
        var c = b.getPayload().getObject();
        a.m_checked =
            c;
        s.attr(a.m_button, "checked", c)
    }));
    x.addGlobalRenderers(v.RENDERER_MAP);
    v.prototype.onSelect = function() {
        var a = new e(!0),
            a = new l("checked", a),
            b = "Not changed";
        this.m_checked || (this.collect(a), b = "This was changed.", this.invoke("onselect"));
        A.log("Radio button '" + this.m_label.innerHTML + "' with value '" + this.m_button.value + "' received SELECT event. " + b);
        this.m_checked = !0;
        this.des_event.fire(this.m_button.name)
    };
    var E = function(a) {
        var b = this.m_button,
            c = b.name;
        if (!b.checked && c === a) {
            a = new e(!1);
            a = new l("checked",
                a);
            b = !1;
            try {
                if (this.m_checked) this.collect(a), this.m_checked = !1, b = !0
            } catch (d) {
                d.message === "target value is null" && this.des_event.unsubscribe(this)
            } finally {
                A.log("Radio button '" + this.m_label.innerHTML + "' with value '" + this.m_button.value + "' received DESELECT event." + (b ? " This was changed." : " Not changed"))
            }
        }
    };
    return v
});
define("unit/html/TextAreaUnitInstance", "Lang,util/collection/StringHashMap,util/DomUtil,util/EventUtil,data/DataUtil,data/diff/ReplaceDataDiff,remote/ClientRuntime,unit/UnitInstance,unit/Renderer,data/value/StringValue,data/value/ScalarNullValue,unit/RendererMap,unit/RendererOperation,unit/RendererUtil,unit/HtmlRendererUtil".split(","), function(h, c, b, d, a, e, l, g, k, f, n, m, q, u, o) {
    function r(a) {
        g.call(this, a)
    }
    new h;
    var v = new b,
        w = new d;
    new a;
    var A = new u,
        s = new o;
    r.prototype = new g;
    r.RENDERER_MAP = new m;
    r.prototype.getRendererMap =
        function() {
            return r.RENDERER_MAP
        };
    r.RENDERER_MAP.add(new k("insertTextArea", q.INSERT, "", function(a, b) {
        var c = b.getPayload(),
            d = v.create("textarea");
        a.setComponent(d);
        A.setAttribute(d, "cols", c.getAttribute("columns"));
        A.setAttribute(d, "rows", c.getAttribute("rows"));
        v.val(d, c.getAttribute("value").getObject());
        s.setGlobalAttributes(d, c);
        A.setAttribute(d, "disabled", c.getAttribute("disabled").getObject());
        A.setAttribute(d, "readonly", c.getAttribute("readonly").getObject());
        this.m_handle_change = w.connect(d,
            "onchange", a, a.onChange, !0);
        this.m_handle_keypress = w.connect(d, "onkeypress", a, a.onKeypress)
    }));
    r.RENDERER_MAP.add(new k("deleteTextArea", q.DELETE, "", function(a) {
        w.disconnect(a.m_handle_change);
        w.disconnect(a.m_handle_keypress);
        v.destroy(a.getComponent());
        a.setComponent(null)
    }));
    r.RENDERER_MAP.add(new k("replaceClass", q.REPLACE, "class", function(a, b) {
        A.setClass(a.getComponent(), b.getPayload())
    }));
    r.RENDERER_MAP.add(new k("replaceColumns", q.REPLACE, "columns", function(a, b) {
        A.setAttribute(a.getComponent(),
            "cols", b.getPayload())
    }));
    r.RENDERER_MAP.add(new k("replaceRows", q.REPLACE, "rows", function(a, b) {
        A.setAttribute(a.getComponent(), "rows", b.getPayload())
    }));
    r.RENDERER_MAP.add(new k("replaceValue", q.REPLACE, "value", function(a, b) {
        var c = b.getPayload(),
            d = a.getComponent();
        c instanceof n ? v.attr(d, "value", "") : A.setAttribute(d, "value", c)
    }));
    r.RENDERER_MAP.add(new k("replaceDisabled", q.REPLACE, "disabled", function(a, b) {
        b.getPayload().getObject() !== "false" ? A.setAttribute(a.getComponent(), "disabled", "true") : A.setAttribute(a.getComponent(),
            "disabled", null)
    }));
    r.RENDERER_MAP.add(new k("replaceReadonly", q.REPLACE, "readonly", function(a, b) {
        b.getPayload().getObject() !== "false" ? A.setAttribute(a.getComponent(), "readonly", "true") : A.setAttribute(a.getComponent(), "readonly", null)
    }));
    s.addGlobalRenderers(r.RENDERER_MAP);
    r.prototype.onKeypress = function() {
        var a = v.val(this.getComponent()),
            a = new f(a);
        this.collect(new e("value", a));
        this.invoke("onkeypress")
    };
    r.prototype.onChange = function() {
        var a = v.val(this.getComponent()),
            a = new f(a);
        this.collect(new e("value",
            a));
        this.invoke("onchange")
    };
    return r
});
define("unit/html/TextInputUnitInstance", "Lang,Dojo,util/collection/StringHashMap,util/DomUtil,util/EventUtil,data/DataUtil,data/diff/ReplaceDataDiff,remote/ClientRuntime,unit/UnitInstance,unit/Renderer,data/value/IntegerValue,data/value/StringValue,data/value/ScalarNullValue,unit/RendererMap,unit/RendererOperation,unit/RendererUtil,unit/HtmlRendererUtil".split(","), function(h, c, b, d, a, e, l, g, k, f, n, m, q, u, o, r, v) {
    function w(a) {
        k.call(this, a);
        this.m_threshold = 0;
        this.m_valid_chars = this.m_invoke_timeout =
            this.m_previous_value = this.m_idle_timeout = null
    }

    function A(a) {
        if (a.m_invoke_timeout !== null) clearTimeout(a.m_invoke_timeout), a.m_invoke_timeout = null
    }

    function s(a) {
        if (a.m_idle_timeout !== null) clearTimeout(a.m_idle_timeout), a.m_idle_timeout = null
    }

    function D(a, b) {
        s(a);
        a.m_idle_timeout = setTimeout(b, a.m_threshold)
    }

    function y(a, b) {
        A(a);
        g.get().hasInFlightRequest() ? a.m_invoke_timeout = setTimeout(function() {
            y(a, b)
        }, 100) : b()
    }

    function x(a) {
        var b = I.val(a.getComponent());
        if (b === a.m_previous_value) return !1;
        a.m_previous_value =
            b;
        b = new m(b);
        b = new l("value", b);
        a.collect(b);
        return !0
    }
    var E = new h,
        I = new d,
        z = new a;
    new e;
    var F = new r,
        B = new v;
    w.prototype = new k;
    w.RENDERER_MAP = new u;
    w.prototype.getRendererMap = function() {
        return w.RENDERER_MAP
    };
    w.RENDERER_MAP.add(new f("insertTextInput", o.INSERT, "", function(a, b) {
        var c = b.getPayload(),
            d = c.getAttribute("type").getObject();
        d === null && (d = "text");
        var e = c.getAttribute("valid_chars").getObject();
        if (e !== null) a.m_valid_chars = e;
        e = c.getAttribute("threshold").getObject();
        if (e !== null && E.isNumber(e)) a.m_threshold =
            e;
        e = I.create("input");
        I.attr(e, "type", d);
        a.setComponent(e);
        F.setAttribute(e, "size", c.getAttribute("size"));
        F.setAttribute(e, "maxlength", c.getAttribute("maxlength"));
        I.val(e, c.getAttribute("value").getObject());
        F.setAttribute(e, "disabled", c.getAttribute("disabled").getObject());
        F.setAttribute(e, "readonly", c.getAttribute("readonly").getObject());
        B.setGlobalAttributes(e, c);
        this.m_keypress_handle = z.connect(e, "onkeypress", a, a.onKeyPress);
        this.m_change_handle = z.connect(e, "onchange", a, a.onChange)
    }));
    w.RENDERER_MAP.add(new f("deleteTextInput",
        o.DELETE, "",
        function(a) {
            z.disconnect(a.m_keypress_handle);
            z.disconnect(a.m_change_handle);
            I.destroy(a.getComponent());
            a.setComponent(null);
            s(a);
            A(a)
        }));
    w.RENDERER_MAP.add(new f("replaceClass", o.REPLACE, "class", function(a, b) {
        F.setClass(a.getComponent(), b.getPayload())
    }));
    w.RENDERER_MAP.add(new f("replaceStyle", o.REPLACE, "style", function(a, b) {
        F.setStyle(a.getComponent(), b.getPayload())
    }));
    w.RENDERER_MAP.add(new f("replaceSize", o.REPLACE, "size", function(a, b) {
        F.setAttribute(a.getComponent(), "size", b.getPayload())
    }));
    w.RENDERER_MAP.add(new f("replaceMaxLength", o.REPLACE, "maxlength", function(a, b) {
        F.setAttribute(a.getComponent(), "maxlength", b.getPayload())
    }));
    w.RENDERER_MAP.add(new f("replaceValidChars", o.REPLACE, "valid_chars", function(a, b) {
        a.m_valid_chars = b.getPayload().getObject()
    }));
    w.RENDERER_MAP.add(new f("replaceValue", o.REPLACE, "value", function(a, b) {
        var c = b.getPayload(),
            c = c === null || c instanceof q ? "" : c.getObject();
        I.val(a.getComponent(), c)
    }));
    w.RENDERER_MAP.add(new f("replaceDisabled", o.REPLACE, "disabled",
        function(a, b) {
            F.setAttribute(a.getComponent(), "disabled", b.getPayload().getObject())
        }));
    w.RENDERER_MAP.add(new f("replaceKeycode", o.REPLACE, "keycode", function() {}));
    w.RENDERER_MAP.add(new f("replaceReadonly", o.REPLACE, "readonly", function(a, b) {
        F.setAttribute(a.getComponent(), "readonly", b.getPayload().getObject())
    }));
    B.addGlobalRenderers(w.RENDERER_MAP);
    w.prototype.onKeyPress = function(a) {
        this.m_valid_chars !== null && a.keyChar !== void 0 && this.m_valid_chars.indexOf(a.keyChar) < 0 && a.preventDefault();
        var b =
            new n(a.keyCode);
        if (a.keyCode == c.keys.ENTER) {
            s(this);
            A(this);
            var d = this;
            y(d, function() {
                var a = new l("keycode", b);
                d.collect(a);
                x(d);
                d.invoke("onkeypress")
            })
        } else D(this, E.hitch(this, function() {
            this.collect(new l("keycode", b));
            x(this);
            this.invoke("onkeypress")
        }))
    };
    w.prototype.onChange = function() {
        var a = this;
        x(a);
        D(this, E.hitch(this, function() {
            y(a, function() {
                x(a);
                a.invoke("onchange")
            })
        }))
    };
    return w
});
define("unit/html/TimerUnitInstance", "Lang,util/DomUtil,unit/UnitInstance,unit/Renderer,remote/ClientRuntime,unit/RendererMap,unit/RendererOperation,unit/RendererUtil".split(","), function(h, c, b, d, a, e, l, g) {
    function k(a) {
        b.call(this, a);
        this.m_interval = this.m_timer = null
    }
    new h;
    var f = new c,
        n = new g;
    k.prototype = new b;
    k.RENDERER_MAP = new e;
    k.prototype.getRendererMap = function() {
        return k.RENDERER_MAP
    };
    k.RENDERER_MAP.add(new d("insertTimer", l.INSERT, "", function(a, b) {
        var c = b.getPayload().getAttribute("interval").getObject();
        a.m_interval = c;
        setTimeout(function() {
            a.m_timer = setInterval(function() {
                a.onTick()
            }, c)
        }, 3E3);
        var d = f.create("span");
        n.setStyle(d, "display:none;");
        a.setComponent(d)
    }));
    k.RENDERER_MAP.add(new d("deleteTimer", l.DELETE, "", function(a) {
        clearInterval(a.m_timer);
        f.destroy(a.getComponent());
        a.setComponent(null)
    }));
    k.prototype.onTick = function(a) {
        this.invoke("ontick", a)
    };
    return k
});
