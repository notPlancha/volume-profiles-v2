var volumeDprofiles = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // node_modules/umbrellajs/umbrella.min.js
  var require_umbrella_min = __commonJS({
    "node_modules/umbrellajs/umbrella.min.js"(exports, module) {
      var u2 = function(t, e) {
        return this instanceof u2 ? t instanceof u2 ? t : ((t = typeof t == "string" ? this.select(t, e) : t) && t.nodeName && (t = [t]), void (this.nodes = this.slice(t))) : new u2(t, e);
      };
      u2.prototype = { get length() {
        return this.nodes.length;
      } }, u2.prototype.nodes = [], u2.prototype.addClass = function() {
        return this.eacharg(arguments, function(t, e) {
          t.classList.add(e);
        });
      }, u2.prototype.adjacent = function(o, t, i) {
        return typeof t == "number" && (t = t === 0 ? [] : new Array(t).join().split(",").map(Number.call, Number)), this.each(function(n, r) {
          var e = document.createDocumentFragment();
          u2(t || {}).map(function(t2, e2) {
            e2 = typeof o == "function" ? o.call(this, t2, e2, n, r) : o;
            return typeof e2 == "string" ? this.generate(e2) : u2(e2);
          }).each(function(t2) {
            this.isInPage(t2) ? e.appendChild(u2(t2).clone().first()) : e.appendChild(t2);
          }), i.call(this, n, e);
        });
      }, u2.prototype.after = function(t, e) {
        return this.adjacent(t, e, function(t2, e2) {
          t2.parentNode.insertBefore(e2, t2.nextSibling);
        });
      }, u2.prototype.append = function(t, e) {
        return this.adjacent(t, e, function(t2, e2) {
          t2.appendChild(e2);
        });
      }, u2.prototype.args = function(t, e, n) {
        return (t = typeof (t = typeof t == "function" ? t(e, n) : t) != "string" ? this.slice(t).map(this.str(e, n)) : t).toString().split(/[\s,]+/).filter(function(t2) {
          return t2.length;
        });
      }, u2.prototype.array = function(o) {
        var i = this;
        return this.nodes.reduce(function(t, e, n) {
          var r;
          return o ? (r = typeof (r = (r = o.call(i, e, n)) || false) == "string" ? u2(r) : r) instanceof u2 && (r = r.nodes) : r = e.innerHTML, t.concat(r !== false ? r : []);
        }, []);
      }, u2.prototype.attr = function(t, e, r) {
        return r = r ? "data-" : "", this.pairs(t, e, function(t2, e2) {
          return t2.getAttribute(r + e2);
        }, function(t2, e2, n) {
          n ? t2.setAttribute(r + e2, n) : t2.removeAttribute(r + e2);
        });
      }, u2.prototype.before = function(t, e) {
        return this.adjacent(t, e, function(t2, e2) {
          t2.parentNode.insertBefore(e2, t2);
        });
      }, u2.prototype.children = function(t) {
        return this.map(function(t2) {
          return this.slice(t2.children);
        }).filter(t);
      }, u2.prototype.clone = function() {
        return this.map(function(t, e) {
          var n = t.cloneNode(true), r = this.getAll(n);
          return this.getAll(t).each(function(t2, e2) {
            for (var n2 in this.mirror)
              this.mirror[n2] && this.mirror[n2](t2, r.nodes[e2]);
          }), n;
        });
      }, u2.prototype.getAll = function(t) {
        return u2([t].concat(u2("*", t).nodes));
      }, u2.prototype.mirror = {}, u2.prototype.mirror.events = function(t, e) {
        if (t._e)
          for (var n in t._e)
            t._e[n].forEach(function(t2) {
              u2(e).on(n, t2.callback);
            });
      }, u2.prototype.mirror.select = function(t, e) {
        u2(t).is("select") && (e.value = t.value);
      }, u2.prototype.mirror.textarea = function(t, e) {
        u2(t).is("textarea") && (e.value = t.value);
      }, u2.prototype.closest = function(e) {
        return this.map(function(t) {
          do {
            if (u2(t).is(e))
              return t;
          } while ((t = t.parentNode) && t !== document);
        });
      }, u2.prototype.data = function(t, e) {
        return this.attr(t, e, true);
      }, u2.prototype.each = function(t) {
        return this.nodes.forEach(t.bind(this)), this;
      }, u2.prototype.eacharg = function(n, r) {
        return this.each(function(e, t) {
          this.args(n, e, t).forEach(function(t2) {
            r.call(this, e, t2);
          }, this);
        });
      }, u2.prototype.empty = function() {
        return this.each(function(t) {
          for (; t.firstChild; )
            t.removeChild(t.firstChild);
        });
      }, u2.prototype.filter = function(e) {
        var t = e instanceof u2 ? function(t2) {
          return e.nodes.indexOf(t2) !== -1;
        } : typeof e == "function" ? e : function(t2) {
          return t2.matches = t2.matches || t2.msMatchesSelector || t2.webkitMatchesSelector, t2.matches(e || "*");
        };
        return u2(this.nodes.filter(t));
      }, u2.prototype.find = function(e) {
        return this.map(function(t) {
          return u2(e || "*", t);
        });
      }, u2.prototype.first = function() {
        return this.nodes[0] || false;
      }, u2.prototype.generate = function(t) {
        return /^\s*<tr[> ]/.test(t) ? u2(document.createElement("table")).html(t).children().children().nodes : /^\s*<t(h|d)[> ]/.test(t) ? u2(document.createElement("table")).html(t).children().children().children().nodes : /^\s*</.test(t) ? u2(document.createElement("div")).html(t).children().nodes : document.createTextNode(t);
      }, u2.prototype.handle = function() {
        var t = this.slice(arguments).map(function(e) {
          return typeof e == "function" ? function(t2) {
            t2.preventDefault(), e.apply(this, arguments);
          } : e;
        }, this);
        return this.on.apply(this, t);
      }, u2.prototype.hasClass = function() {
        return this.is("." + this.args(arguments).join("."));
      }, u2.prototype.html = function(e) {
        return e === void 0 ? this.first().innerHTML || "" : this.each(function(t) {
          t.innerHTML = e;
        });
      }, u2.prototype.is = function(t) {
        return 0 < this.filter(t).length;
      }, u2.prototype.isInPage = function(t) {
        return t !== document.body && document.body.contains(t);
      }, u2.prototype.last = function() {
        return this.nodes[this.length - 1] || false;
      }, u2.prototype.map = function(t) {
        return t ? u2(this.array(t)).unique() : this;
      }, u2.prototype.not = function(e) {
        return this.filter(function(t) {
          return !u2(t).is(e || true);
        });
      }, u2.prototype.off = function(t, e, n) {
        var r = e == null && n == null, o = null, i = e;
        return typeof e == "string" && (o = e, i = n), this.eacharg(t, function(e2, n2) {
          u2(e2._e ? e2._e[n2] : []).each(function(t2) {
            (r || t2.orig_callback === i && t2.selector === o) && e2.removeEventListener(n2, t2.callback);
          });
        });
      }, u2.prototype.on = function(t, e, o) {
        function i(t2, e2) {
          try {
            Object.defineProperty(t2, "currentTarget", { value: e2, configurable: true });
          } catch (t3) {
          }
        }
        var c = null, n = e;
        typeof e == "string" && (c = e, n = o, e = function(n2) {
          var r2 = arguments;
          u2(n2.currentTarget).find(c).each(function(t2) {
            var e2;
            t2.contains(n2.target) && (e2 = n2.currentTarget, i(n2, t2), o.apply(t2, r2), i(n2, e2));
          });
        });
        function r(t2) {
          return e.apply(this, [t2].concat(t2.detail || []));
        }
        return this.eacharg(t, function(t2, e2) {
          t2.addEventListener(e2, r), t2._e = t2._e || {}, t2._e[e2] = t2._e[e2] || [], t2._e[e2].push({ callback: r, orig_callback: n, selector: c });
        });
      }, u2.prototype.pairs = function(r, t, e, o) {
        var n;
        return t !== void 0 && (n = r, (r = {})[n] = t), typeof r == "object" ? this.each(function(t2, e2) {
          for (var n2 in r)
            typeof r[n2] == "function" ? o(t2, n2, r[n2](t2, e2)) : o(t2, n2, r[n2]);
        }) : this.length ? e(this.first(), r) : "";
      }, u2.prototype.param = function(e) {
        return Object.keys(e).map(function(t) {
          return this.uri(t) + "=" + this.uri(e[t]);
        }.bind(this)).join("&");
      }, u2.prototype.parent = function(t) {
        return this.map(function(t2) {
          return t2.parentNode;
        }).filter(t);
      }, u2.prototype.prepend = function(t, e) {
        return this.adjacent(t, e, function(t2, e2) {
          t2.insertBefore(e2, t2.firstChild);
        });
      }, u2.prototype.remove = function() {
        return this.each(function(t) {
          t.parentNode && t.parentNode.removeChild(t);
        });
      }, u2.prototype.removeClass = function() {
        return this.eacharg(arguments, function(t, e) {
          t.classList.remove(e);
        });
      }, u2.prototype.replace = function(t, e) {
        var n = [];
        return this.adjacent(t, e, function(t2, e2) {
          n = n.concat(this.slice(e2.children)), t2.parentNode.replaceChild(e2, t2);
        }), u2(n);
      }, u2.prototype.scroll = function() {
        return this.first().scrollIntoView({ behavior: "smooth" }), this;
      }, u2.prototype.select = function(t, e) {
        return t = t.replace(/^\s*/, "").replace(/\s*$/, ""), /^</.test(t) ? u2().generate(t) : (e || document).querySelectorAll(t);
      }, u2.prototype.serialize = function() {
        var r = this;
        return this.slice(this.first().elements).reduce(function(e, n) {
          return !n.name || n.disabled || n.type === "file" || /(checkbox|radio)/.test(n.type) && !n.checked ? e : n.type === "select-multiple" ? (u2(n.options).each(function(t) {
            t.selected && (e += "&" + r.uri(n.name) + "=" + r.uri(t.value));
          }), e) : e + "&" + r.uri(n.name) + "=" + r.uri(n.value);
        }, "").slice(1);
      }, u2.prototype.siblings = function(t) {
        return this.parent().children(t).not(this);
      }, u2.prototype.size = function() {
        return this.first().getBoundingClientRect();
      }, u2.prototype.slice = function(t) {
        return t && t.length !== 0 && typeof t != "string" && t.toString() !== "[object Function]" ? t.length ? [].slice.call(t.nodes || t) : [t] : [];
      }, u2.prototype.str = function(e, n) {
        return function(t) {
          return typeof t == "function" ? t.call(this, e, n) : t.toString();
        };
      }, u2.prototype.text = function(e) {
        return e === void 0 ? this.first().textContent || "" : this.each(function(t) {
          t.textContent = e;
        });
      }, u2.prototype.toggleClass = function(t, e) {
        return !!e === e ? this[e ? "addClass" : "removeClass"](t) : this.eacharg(t, function(t2, e2) {
          t2.classList.toggle(e2);
        });
      }, u2.prototype.trigger = function(t) {
        var o = this.slice(arguments).slice(1);
        return this.eacharg(t, function(t2, e) {
          var n, r = { bubbles: true, cancelable: true, detail: o };
          try {
            n = new window.CustomEvent(e, r);
          } catch (t3) {
            (n = document.createEvent("CustomEvent")).initCustomEvent(e, true, true, o);
          }
          t2.dispatchEvent(n);
        });
      }, u2.prototype.unique = function() {
        return u2(this.nodes.reduce(function(t, e) {
          return e != null && e !== false && t.indexOf(e) === -1 ? t.concat(e) : t;
        }, []));
      }, u2.prototype.uri = function(t) {
        return encodeURIComponent(t).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+");
      }, u2.prototype.wrap = function(t) {
        return this.map(function(e) {
          return u2(t).each(function(t2) {
            !function(t3) {
              for (; t3.firstElementChild; )
                t3 = t3.firstElementChild;
              return u2(t3);
            }(t2).append(e.cloneNode(true)), e.parentNode.replaceChild(t2, e);
          });
        });
      }, typeof module == "object" && module.exports && (module.exports = u2, module.exports.u = u2);
    }
  });

  // external-global-plugin:react
  var require_react = __commonJS({
    "external-global-plugin:react"(exports, module) {
      module.exports = Spicetify.React;
    }
  });

  // external-global-plugin:react-dom
  var require_react_dom = __commonJS({
    "external-global-plugin:react-dom"(exports, module) {
      module.exports = Spicetify.ReactDOM;
    }
  });

  // node_modules/arrive/src/arrive.js
  var require_arrive = __commonJS({
    "node_modules/arrive/src/arrive.js"() {
      var Arrive = function(window2, $, undefined2) {
        "use strict";
        if (!window2.MutationObserver || typeof HTMLElement === "undefined") {
          return;
        }
        var arriveUniqueId = 0;
        var utils = function() {
          var matches = HTMLElement.prototype.matches || HTMLElement.prototype.webkitMatchesSelector || HTMLElement.prototype.mozMatchesSelector || HTMLElement.prototype.msMatchesSelector;
          return {
            matchesSelector: function(elem, selector) {
              return elem instanceof HTMLElement && matches.call(elem, selector);
            },
            addMethod: function(object, name, fn) {
              var old = object[name];
              object[name] = function() {
                if (fn.length == arguments.length) {
                  return fn.apply(this, arguments);
                } else if (typeof old == "function") {
                  return old.apply(this, arguments);
                }
              };
            },
            callCallbacks: function(callbacksToBeCalled, registrationData) {
              if (registrationData && registrationData.options.onceOnly && registrationData.firedElems.length == 1) {
                callbacksToBeCalled = [callbacksToBeCalled[0]];
              }
              for (var i = 0, cb; cb = callbacksToBeCalled[i]; i++) {
                if (cb && cb.callback) {
                  cb.callback.call(cb.elem, cb.elem);
                }
              }
              if (registrationData && registrationData.options.onceOnly && registrationData.firedElems.length == 1) {
                registrationData.me.unbindEventWithSelectorAndCallback.call(registrationData.target, registrationData.selector, registrationData.callback);
              }
            },
            checkChildNodesRecursively: function(nodes, registrationData, matchFunc, callbacksToBeCalled) {
              for (var i = 0, node; node = nodes[i]; i++) {
                if (matchFunc(node, registrationData, callbacksToBeCalled)) {
                  callbacksToBeCalled.push({ callback: registrationData.callback, elem: node });
                }
                if (node.childNodes.length > 0) {
                  utils.checkChildNodesRecursively(node.childNodes, registrationData, matchFunc, callbacksToBeCalled);
                }
              }
            },
            mergeArrays: function(firstArr, secondArr) {
              var options = {}, attrName;
              for (attrName in firstArr) {
                if (firstArr.hasOwnProperty(attrName)) {
                  options[attrName] = firstArr[attrName];
                }
              }
              for (attrName in secondArr) {
                if (secondArr.hasOwnProperty(attrName)) {
                  options[attrName] = secondArr[attrName];
                }
              }
              return options;
            },
            toElementsArray: function(elements) {
              if (typeof elements !== "undefined" && (typeof elements.length !== "number" || elements === window2)) {
                elements = [elements];
              }
              return elements;
            }
          };
        }();
        var EventsBucket = function() {
          var EventsBucket2 = function() {
            this._eventsBucket = [];
            this._beforeAdding = null;
            this._beforeRemoving = null;
          };
          EventsBucket2.prototype.addEvent = function(target, selector, options, callback) {
            var newEvent = {
              target,
              selector,
              options,
              callback,
              firedElems: []
            };
            if (this._beforeAdding) {
              this._beforeAdding(newEvent);
            }
            this._eventsBucket.push(newEvent);
            return newEvent;
          };
          EventsBucket2.prototype.removeEvent = function(compareFunction) {
            for (var i = this._eventsBucket.length - 1, registeredEvent; registeredEvent = this._eventsBucket[i]; i--) {
              if (compareFunction(registeredEvent)) {
                if (this._beforeRemoving) {
                  this._beforeRemoving(registeredEvent);
                }
                var removedEvents = this._eventsBucket.splice(i, 1);
                if (removedEvents && removedEvents.length) {
                  removedEvents[0].callback = null;
                }
              }
            }
          };
          EventsBucket2.prototype.beforeAdding = function(beforeAdding) {
            this._beforeAdding = beforeAdding;
          };
          EventsBucket2.prototype.beforeRemoving = function(beforeRemoving) {
            this._beforeRemoving = beforeRemoving;
          };
          return EventsBucket2;
        }();
        var MutationEvents = function(getObserverConfig, onMutation) {
          var eventsBucket = new EventsBucket(), me = this;
          var defaultOptions = {
            fireOnAttributesModification: false
          };
          eventsBucket.beforeAdding(function(registrationData) {
            var target = registrationData.target, observer;
            if (target === window2.document || target === window2) {
              target = document.getElementsByTagName("html")[0];
            }
            observer = new MutationObserver(function(e) {
              onMutation.call(this, e, registrationData);
            });
            var config = getObserverConfig(registrationData.options);
            observer.observe(target, config);
            registrationData.observer = observer;
            registrationData.me = me;
          });
          eventsBucket.beforeRemoving(function(eventData) {
            eventData.observer.disconnect();
          });
          this.bindEvent = function(selector, options, callback) {
            options = utils.mergeArrays(defaultOptions, options);
            var elements = utils.toElementsArray(this);
            for (var i = 0; i < elements.length; i++) {
              eventsBucket.addEvent(elements[i], selector, options, callback);
            }
          };
          this.unbindEvent = function() {
            var elements = utils.toElementsArray(this);
            eventsBucket.removeEvent(function(eventObj) {
              for (var i = 0; i < elements.length; i++) {
                if (this === undefined2 || eventObj.target === elements[i]) {
                  return true;
                }
              }
              return false;
            });
          };
          this.unbindEventWithSelectorOrCallback = function(selector) {
            var elements = utils.toElementsArray(this), callback = selector, compareFunction;
            if (typeof selector === "function") {
              compareFunction = function(eventObj) {
                for (var i = 0; i < elements.length; i++) {
                  if ((this === undefined2 || eventObj.target === elements[i]) && eventObj.callback === callback) {
                    return true;
                  }
                }
                return false;
              };
            } else {
              compareFunction = function(eventObj) {
                for (var i = 0; i < elements.length; i++) {
                  if ((this === undefined2 || eventObj.target === elements[i]) && eventObj.selector === selector) {
                    return true;
                  }
                }
                return false;
              };
            }
            eventsBucket.removeEvent(compareFunction);
          };
          this.unbindEventWithSelectorAndCallback = function(selector, callback) {
            var elements = utils.toElementsArray(this);
            eventsBucket.removeEvent(function(eventObj) {
              for (var i = 0; i < elements.length; i++) {
                if ((this === undefined2 || eventObj.target === elements[i]) && eventObj.selector === selector && eventObj.callback === callback) {
                  return true;
                }
              }
              return false;
            });
          };
          return this;
        };
        var ArriveEvents = function() {
          var arriveDefaultOptions = {
            fireOnAttributesModification: false,
            onceOnly: false,
            existing: false
          };
          function getArriveObserverConfig(options) {
            var config = {
              attributes: false,
              childList: true,
              subtree: true
            };
            if (options.fireOnAttributesModification) {
              config.attributes = true;
            }
            return config;
          }
          function onArriveMutation(mutations, registrationData) {
            mutations.forEach(function(mutation) {
              var newNodes = mutation.addedNodes, targetNode = mutation.target, callbacksToBeCalled = [], node;
              if (newNodes !== null && newNodes.length > 0) {
                utils.checkChildNodesRecursively(newNodes, registrationData, nodeMatchFunc, callbacksToBeCalled);
              } else if (mutation.type === "attributes") {
                if (nodeMatchFunc(targetNode, registrationData, callbacksToBeCalled)) {
                  callbacksToBeCalled.push({ callback: registrationData.callback, elem: targetNode });
                }
              }
              utils.callCallbacks(callbacksToBeCalled, registrationData);
            });
          }
          function nodeMatchFunc(node, registrationData, callbacksToBeCalled) {
            if (utils.matchesSelector(node, registrationData.selector)) {
              if (node._id === undefined2) {
                node._id = arriveUniqueId++;
              }
              if (registrationData.firedElems.indexOf(node._id) == -1) {
                registrationData.firedElems.push(node._id);
                return true;
              }
            }
            return false;
          }
          arriveEvents = new MutationEvents(getArriveObserverConfig, onArriveMutation);
          var mutationBindEvent = arriveEvents.bindEvent;
          arriveEvents.bindEvent = function(selector, options, callback) {
            if (typeof callback === "undefined") {
              callback = options;
              options = arriveDefaultOptions;
            } else {
              options = utils.mergeArrays(arriveDefaultOptions, options);
            }
            var elements = utils.toElementsArray(this);
            if (options.existing) {
              var existing = [];
              for (var i = 0; i < elements.length; i++) {
                var nodes = elements[i].querySelectorAll(selector);
                for (var j = 0; j < nodes.length; j++) {
                  existing.push({ callback, elem: nodes[j] });
                }
              }
              if (options.onceOnly && existing.length) {
                return callback.call(existing[0].elem, existing[0].elem);
              }
              setTimeout(utils.callCallbacks, 1, existing);
            }
            mutationBindEvent.call(this, selector, options, callback);
          };
          return arriveEvents;
        };
        var LeaveEvents = function() {
          var leaveDefaultOptions = {};
          function getLeaveObserverConfig() {
            var config = {
              childList: true,
              subtree: true
            };
            return config;
          }
          function onLeaveMutation(mutations, registrationData) {
            mutations.forEach(function(mutation) {
              var removedNodes = mutation.removedNodes, callbacksToBeCalled = [];
              if (removedNodes !== null && removedNodes.length > 0) {
                utils.checkChildNodesRecursively(removedNodes, registrationData, nodeMatchFunc, callbacksToBeCalled);
              }
              utils.callCallbacks(callbacksToBeCalled, registrationData);
            });
          }
          function nodeMatchFunc(node, registrationData) {
            return utils.matchesSelector(node, registrationData.selector);
          }
          leaveEvents = new MutationEvents(getLeaveObserverConfig, onLeaveMutation);
          var mutationBindEvent = leaveEvents.bindEvent;
          leaveEvents.bindEvent = function(selector, options, callback) {
            if (typeof callback === "undefined") {
              callback = options;
              options = leaveDefaultOptions;
            } else {
              options = utils.mergeArrays(leaveDefaultOptions, options);
            }
            mutationBindEvent.call(this, selector, options, callback);
          };
          return leaveEvents;
        };
        var arriveEvents = new ArriveEvents(), leaveEvents = new LeaveEvents();
        function exposeUnbindApi(eventObj, exposeTo, funcName) {
          utils.addMethod(exposeTo, funcName, eventObj.unbindEvent);
          utils.addMethod(exposeTo, funcName, eventObj.unbindEventWithSelectorOrCallback);
          utils.addMethod(exposeTo, funcName, eventObj.unbindEventWithSelectorAndCallback);
        }
        function exposeApi(exposeTo) {
          exposeTo.arrive = arriveEvents.bindEvent;
          exposeUnbindApi(arriveEvents, exposeTo, "unbindArrive");
          exposeTo.leave = leaveEvents.bindEvent;
          exposeUnbindApi(leaveEvents, exposeTo, "unbindLeave");
        }
        if ($) {
          exposeApi($.fn);
        }
        exposeApi(HTMLElement.prototype);
        exposeApi(NodeList.prototype);
        exposeApi(HTMLCollection.prototype);
        exposeApi(HTMLDocument.prototype);
        exposeApi(Window.prototype);
        var Arrive2 = {};
        exposeUnbindApi(arriveEvents, Arrive2, "unbindAllArrive");
        exposeUnbindApi(leaveEvents, Arrive2, "unbindAllLeave");
        return Arrive2;
      }(window, typeof jQuery === "undefined" ? null : jQuery, void 0);
    }
  });

  // src/VolumeProfile.tsx
  var import_umbrellajs = __toESM(require_umbrella_min());

  // node_modules/spcr-settings/settingsSection.tsx
  var import_react = __toESM(require_react());
  var import_react_dom = __toESM(require_react_dom());

  // postcss-module:C:\Users\Plancha\AppData\Local\Temp\tmp-30504-WIAqdkhPZfoP\18913764a070\settings.module.css
  var settings_module_default = { "settingsContainer": "settings-module__settingsContainer___e9wxn_volumeDprofiles", "heading": "settings-module__heading___AnER-_volumeDprofiles", "description": "settings-module__description___dP4fR_volumeDprofiles", "inputWrapper": "settings-module__inputWrapper___LgOrw_volumeDprofiles" };

  // node_modules/spcr-settings/settingsSection.tsx
  var SettingsSection = class {
    constructor(name, settingsId, initialSettingsFields = {}) {
      this.name = name;
      this.settingsId = settingsId;
      this.initialSettingsFields = initialSettingsFields;
      this.settingsFields = this.initialSettingsFields;
      this.setRerender = null;
      this.buttonClassnames = null;
      this.pushSettings = async () => {
        Object.entries(this.settingsFields).forEach(([nameId, field]) => {
          if (field.type !== "button" && this.getFieldValue(nameId) === void 0) {
            this.setFieldValue(nameId, field.defaultValue);
          }
        });
        while (!Spicetify?.Platform?.History?.listen) {
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
        if (this.stopHistoryListener)
          this.stopHistoryListener();
        this.stopHistoryListener = Spicetify.Platform.History.listen((e) => {
          if (e.pathname === "/preferences") {
            this.render();
          }
        });
        if (Spicetify.Platform.History.location.pathname === "/preferences") {
          await this.render();
        }
      };
      this.rerender = () => {
        if (this.setRerender) {
          this.setRerender(Math.random());
        }
      };
      this.render = async () => {
        while (!document.getElementById("desktop.settings.selectLanguage")) {
          if (Spicetify.Platform.History.location.pathname !== "/preferences")
            return;
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
        const allSettingsContainer = document.querySelector(".main-view-container__scroll-node-child main div");
        if (!allSettingsContainer)
          return console.error("[spcr-settings] settings container not found");
        this.buttonClassnames = Array.from(allSettingsContainer.querySelectorAll(":scope > button")).at(-1)?.className ?? null;
        let pluginSettingsContainer = Array.from(allSettingsContainer.children).find((child) => child.id === this.settingsId);
        if (!pluginSettingsContainer) {
          pluginSettingsContainer = document.createElement("div");
          pluginSettingsContainer.id = this.settingsId;
          pluginSettingsContainer.className = settings_module_default.settingsContainer;
          allSettingsContainer.appendChild(pluginSettingsContainer);
        } else {
          console.log(pluginSettingsContainer);
        }
        import_react_dom.default.render(/* @__PURE__ */ import_react.default.createElement(this.FieldsContainer, null), pluginSettingsContainer);
      };
      this.addButton = (nameId, description, value, onClick, events) => {
        this.settingsFields[nameId] = {
          type: "button",
          description,
          value,
          events: {
            onClick,
            ...events
          }
        };
      };
      this.addInput = (nameId, description, defaultValue, onChange, events) => {
        this.settingsFields[nameId] = {
          type: "input",
          description,
          defaultValue,
          events: {
            onChange,
            ...events
          }
        };
      };
      this.addHidden = (nameId, defaultValue) => {
        this.settingsFields[nameId] = {
          type: "hidden",
          defaultValue
        };
      };
      this.addToggle = (nameId, description, defaultValue, onChange, events) => {
        this.settingsFields[nameId] = {
          type: "toggle",
          description,
          defaultValue,
          events: {
            onChange,
            ...events
          }
        };
      };
      this.addDropDown = (nameId, description, options, defaultIndex, onSelect, events) => {
        this.settingsFields[nameId] = {
          type: "dropdown",
          description,
          defaultValue: options[defaultIndex],
          options,
          events: {
            onSelect,
            ...events
          }
        };
      };
      this.getFieldValue = (nameId) => {
        return JSON.parse(Spicetify.LocalStorage.get(`${this.settingsId}.${nameId}`) || "{}")?.value;
      };
      this.setFieldValue = (nameId, newValue) => {
        Spicetify.LocalStorage.set(`${this.settingsId}.${nameId}`, JSON.stringify({ value: newValue }));
      };
      this.FieldsContainer = () => {
        const [rerender, setRerender] = (0, import_react.useState)(0);
        this.setRerender = setRerender;
        return /* @__PURE__ */ import_react.default.createElement("div", {
          className: settings_module_default.settingsContainer,
          key: rerender
        }, /* @__PURE__ */ import_react.default.createElement("h2", {
          className: ["main-shelf-title main-type-cello", settings_module_default.heading].join(" ")
        }, this.name), Object.entries(this.settingsFields).map(([nameId, field]) => {
          return /* @__PURE__ */ import_react.default.createElement(this.Field, {
            nameId,
            field
          });
        }));
      };
      this.Field = (props) => {
        const id = `${this.settingsId}.${props.nameId}`;
        let defaultStateValue;
        if (props.field.type === "button") {
          defaultStateValue = props.field.value;
        } else {
          defaultStateValue = this.getFieldValue(props.nameId);
        }
        if (props.field.type === "hidden") {
          return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null);
        }
        const [value, setValueState] = (0, import_react.useState)(defaultStateValue);
        const setValue = (newValue) => {
          if (newValue !== void 0) {
            setValueState(newValue);
            this.setFieldValue(props.nameId, newValue);
          }
        };
        return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("div", {
          className: "main-type-mesto",
          style: { color: "var(--spice-subtext)" }
        }, /* @__PURE__ */ import_react.default.createElement("label", {
          className: settings_module_default.description,
          htmlFor: id
        }, props.field.description || "")), /* @__PURE__ */ import_react.default.createElement("span", {
          className: ["x-settings-secondColumn", settings_module_default.inputWrapper].join(" ")
        }, props.field.type === "input" ? /* @__PURE__ */ import_react.default.createElement("input", {
          className: "main-dropDown-dropDown",
          id,
          dir: "ltr",
          value,
          type: "text",
          ...props.field.events,
          onChange: (e) => {
            setValue(e.currentTarget.value);
            const onChange = props.field.events?.onChange;
            if (onChange)
              onChange(e);
          }
        }) : props.field.type === "button" ? /* @__PURE__ */ import_react.default.createElement("span", {
          className: ""
        }, /* @__PURE__ */ import_react.default.createElement("button", {
          id,
          className: this.buttonClassnames ?? "",
          ...props.field.events,
          onClick: (e) => {
            setValue();
            const onClick = props.field.events?.onClick;
            if (onClick)
              onClick(e);
          },
          type: "button"
        }, value)) : props.field.type === "toggle" ? /* @__PURE__ */ import_react.default.createElement("label", {
          className: "x-toggle-wrapper x-settings-secondColumn"
        }, /* @__PURE__ */ import_react.default.createElement("input", {
          id,
          className: "x-toggle-input",
          type: "checkbox",
          checked: value,
          ...props.field.events,
          onClick: (e) => {
            setValue(e.currentTarget.checked);
            const onClick = props.field.events?.onClick;
            if (onClick)
              onClick(e);
          }
        }), /* @__PURE__ */ import_react.default.createElement("span", {
          className: "x-toggle-indicatorWrapper"
        }, /* @__PURE__ */ import_react.default.createElement("span", {
          className: "x-toggle-indicator"
        }))) : props.field.type === "dropdown" ? /* @__PURE__ */ import_react.default.createElement("select", {
          className: "main-dropDown-dropDown",
          id,
          ...props.field.events,
          onChange: (e) => {
            setValue(props.field.options[e.currentTarget.selectedIndex]);
            const onChange = props.field.events?.onChange;
            if (onChange)
              onChange(e);
          }
        }, props.field.options.map((option, i) => {
          return /* @__PURE__ */ import_react.default.createElement("option", {
            selected: option === value,
            value: i + 1
          }, option);
        })) : /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null)));
      };
    }
  };

  // src/VolumeProfile.tsx
  var arrive = require_arrive();
  var _a;
  var _VolumeProfile = class {
    static get ToggleSettings() {
      let toggle = Spicetify.LocalStorage.get(_VolumeProfile.ToggleSettingsId);
      if (toggle != "true" && toggle != "false") {
        Spicetify.LocalStorage.set(_VolumeProfile.ToggleSettingsId, "true");
        return true;
      } else {
        return toggle == "true";
      }
    }
    static set ToggleSettings(value) {
      Spicetify.LocalStorage.set(_VolumeProfile.ToggleSettingsId, value.toString());
    }
    constructor(id, defaultVolume, icon) {
      this._id = id;
      let path = "";
      switch (icon) {
        case "high":
          path = _VolumeProfile.icons.high;
          break;
        case "medium":
          path = _VolumeProfile.icons.medium;
          break;
        case "low":
          path = _VolumeProfile.icons.low;
          break;
        case "mute":
          path = _VolumeProfile.icons.mute;
          break;
        case "speakerOnly":
          path = _VolumeProfile.icons.speakerOnly;
          break;
      }
      let button = `<button class='volume-bar__icon-button control-button' aria-label='Volume Profile ${this._id}' aria-describedby="volume-icon">
            <svg role="presentation" style="fill: currentColor" viewBox="0 0 16 16" height="16" width="16">
                ${path}
            </svg>
        </button>`;
      this.buttonElement = (0, import_umbrellajs.default)(button);
      if (isNaN(this.volume))
        this.volume = defaultVolume;
    }
    get localStorageId() {
      return _VolumeProfile.localStorageIdPrefix + this._id;
    }
    get settingId() {
      return _VolumeProfile.settingIdPrefix + this._id;
    }
    get volume() {
      let volume = Spicetify.LocalStorage.get(this.localStorageId);
      if (isNaN(Number(volume))) {
        return NaN;
      }
      return Number(volume);
    }
    set volume(value) {
      Spicetify.LocalStorage.set(this.localStorageId, value.toString());
    }
    static SettingsSectionRegister() {
      if (!_VolumeProfile.SettingsRegistered) {
        _VolumeProfile.SettingsRegistered = true;
        _VolumeProfile.SettingsSection.pushSettings();
      } else {
        throw "Settings already registered";
      }
    }
    static isValidVolume(value) {
      return !(value == "" || isNaN(Number(value)) || Number(value) < 0 || Number(value) > 100);
    }
    registerButton() {
      document.arrive(".main-nowPlayingBar-right > *", { existing: true, onceOnly: true }, (element) => {
        this.buttonElement.on("click", () => {
          Spicetify.Player.setVolume(this.volume / 100);
        });
        this.buttonElement.on("contextmenu", () => {
          if (_VolumeProfile.ToggleSettings) {
            this.volume = Spicetify.Player.getVolume() * 100;
            Spicetify.showNotification('Volume of "' + this._id + '" changed to ' + this.toString());
            _VolumeProfile.SettingsSection.setFieldValue(this.settingId, this.volume.toString());
            _VolumeProfile.SettingsSection.rerender();
          }
        });
        (0, import_umbrellajs.default)(element).prepend(this.buttonElement);
      });
    }
    registerProfile() {
      this.registerButton();
      this.registerSetting();
    }
    registerSetting() {
      _VolumeProfile.SettingsSection.addInput(this.settingId, `Volume of Profile "${this._id}"`, this.toString(), () => {
        let changedVolume = _VolumeProfile.SettingsSection.getFieldValue(this.settingId);
        if (_VolumeProfile.isValidVolume(changedVolume)) {
          Spicetify.LocalStorage.set(this.localStorageId, changedVolume);
          Spicetify.showNotification(`Saved Volume Profile "${this._id}" to ${this.toString()}`);
        }
      });
    }
    toString() {
      return this.volume.toFixed(2).toString();
    }
  };
  var VolumeProfile = _VolumeProfile;
  VolumeProfile.icons = (_a = class {
  }, _a.low = '<path d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z"></path>', _a.speakerOnly = '<path d="M13.86 5.47a.75.75 0 00-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 008.8 6.53L10.269 8l-1.47 1.47a.75.75 0 101.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 001.06-1.06L12.39 8l1.47-1.47a.75.75 0 000-1.06z"></path>', _a.high = _a.low + '<path d="M11.5 13.614a5.752 5.752 0 000-11.228v1.55a4.252 4.252 0 010 8.127v1.55z"></path>', _a.medium = '<path d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 000-8.474v1.65a2.999 2.999 0 010 5.175v1.649z"></path>', _a.mute = _a.speakerOnly + '<path d="M10.116 1.5A.75.75 0 008.991.85l-6.925 4a3.642 3.642 0 00-1.33 4.967 3.639 3.639 0 001.33 1.332l6.925 4a.75.75 0 001.125-.649v-1.906a4.73 4.73 0 01-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 01-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path>', _a);
  VolumeProfile.SettingsRegistered = false;
  VolumeProfile.ToggleSettingsId = "volume-profile-toggle-on-left-click";
  VolumeProfile.settingIdPrefix = "settings-volume-profile-";
  VolumeProfile.SettingsSection = new SettingsSection("Volume Profile Settings", "volume-profile-settings");
  VolumeProfile.localStorageIdPrefix = "localStorage-volume-profile-";
  VolumeProfile.volumeIconHtmlSelector = "#volume-icon";

  // src/app.tsx
  async function main() {
    while (!(Spicetify == null ? void 0 : Spicetify.Player) || !(Spicetify == null ? void 0 : Spicetify.LocalStorage)) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    VolumeProfile.SettingsSection.addToggle("toggle-left-click-volume-profile", "Set Volume Profile on left click", VolumeProfile.ToggleSettings, () => {
      VolumeProfile.ToggleSettings = VolumeProfile.SettingsSection.getFieldValue("toggle-left-click-volume-profile");
    });
    var middle = new VolumeProfile("middle", 50, "medium");
    var left = new VolumeProfile("left", 30, "low");
    var right = new VolumeProfile("right", 80, "high");
    for (const profile of [right, middle, left]) {
      profile.registerProfile();
    }
    VolumeProfile.SettingsSectionRegister();
  }
  var app_default = main;

  // node_modules/spicetify-creator/dist/temp/index.jsx
  (async () => {
    await app_default();
  })();
})();
(async () => {
    if (!document.getElementById(`volumeDprofiles`)) {
      var el = document.createElement('style');
      el.id = `volumeDprofiles`;
      el.textContent = (String.raw`
  /* ../../AppData/Local/Temp/tmp-30504-WIAqdkhPZfoP/18913764a070/settings.module.css */
.settings-module__settingsContainer___e9wxn_volumeDprofiles {
  display: contents;
}
.settings-module__heading___AnER-_volumeDprofiles {
  grid-column: 1/-1;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: #fff;
  margin-top: 24px;
}
.settings-module__description___dP4fR_volumeDprofiles {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.settings-module__inputWrapper___LgOrw_volumeDprofiles {
  display: flex;
  justify-self: end;
}

      `).trim();
      document.head.appendChild(el);
    }
  })()