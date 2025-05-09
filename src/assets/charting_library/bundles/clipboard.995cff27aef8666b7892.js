(window.webpackJsonp = window.webpackJsonp || []).push([
  ["clipboard"],
  {
    sxGJ: function (t, e, n) {
      var r;
      (r = function () {
        return (function (t) {
          var e = {};
          function n(r) {
            if (e[r]) return e[r].exports;
            var o = (e[r] = { i: r, l: !1, exports: {} });
            return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
          }
          return (
            (n.m = t),
            (n.c = e),
            (n.d = function (t, e, r) {
              n.o(t, e) ||
                Object.defineProperty(t, e, { enumerable: !0, get: r });
            }),
            (n.r = function (t) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (n.t = function (t, e) {
              if ((1 & e && (t = n(t)), 8 & e)) return t;
              if (4 & e && "object" == typeof t && t && t.__esModule) return t;
              var r = Object.create(null);
              if (
                (n.r(r),
                Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: t,
                }),
                2 & e && "string" != typeof t)
              )
                for (var o in t)
                  n.d(
                    r,
                    o,
                    function (e) {
                      return t[e];
                    }.bind(null, o)
                  );
              return r;
            }),
            (n.n = function (t) {
              var e =
                t && t.__esModule
                  ? function () {
                      return t.default;
                    }
                  : function () {
                      return t;
                    };
              return n.d(e, "a", e), e;
            }),
            (n.o = function (t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (n.p = ""),
            n((n.s = 0))
          );
        })([
          function (t, e, n) {
            "use strict";
            var r =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t;
                    }
                  : function (t) {
                      return t &&
                        "function" == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? "symbol"
                        : typeof t;
                    },
              o = (function () {
                function t(t, e) {
                  for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(t, r.key, r);
                  }
                }
                return function (e, n, r) {
                  return n && t(e.prototype, n), r && t(e, r), e;
                };
              })(),
              i = u(n(1)),
              a = u(n(3)),
              c = u(n(4));
            function u(t) {
              return t && t.__esModule ? t : { default: t };
            }
            var l = (function (t) {
              function e(t, n) {
                !(function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e);
                var r = (function (t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return r.resolveOptions(n), r.listenClick(t), r;
              }
              return (
                (function (t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                })(e, t),
                o(
                  e,
                  [
                    {
                      key: "resolveOptions",
                      value: function () {
                        var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                        (this.action =
                          "function" == typeof t.action
                            ? t.action
                            : this.defaultAction),
                          (this.target =
                            "function" == typeof t.target
                              ? t.target
                              : this.defaultTarget),
                          (this.text =
                            "function" == typeof t.text
                              ? t.text
                              : this.defaultText),
                          (this.container =
                            "object" === r(t.container)
                              ? t.container
                              : document.body);
                      },
                    },
                    {
                      key: "listenClick",
                      value: function (t) {
                        var e = this;
                        this.listener = (0, c.default)(
                          t,
                          "click",
                          function (t) {
                            return e.onClick(t);
                          }
                        );
                      },
                    },
                    {
                      key: "onClick",
                      value: function (t) {
                        var e = t.delegateTarget || t.currentTarget;
                        this.clipboardAction && (this.clipboardAction = null),
                          (this.clipboardAction = new i.default({
                            action: this.action(e),
                            target: this.target(e),
                            text: this.text(e),
                            container: this.container,
                            trigger: e,
                            emitter: this,
                          }));
                      },
                    },
                    {
                      key: "defaultAction",
                      value: function (t) {
                        return s("action", t);
                      },
                    },
                    {
                      key: "defaultTarget",
                      value: function (t) {
                        var e = s("target", t);
                        if (e) return document.querySelector(e);
                      },
                    },
                    {
                      key: "defaultText",
                      value: function (t) {
                        return s("text", t);
                      },
                    },
                    {
                      key: "destroy",
                      value: function () {
                        this.listener.destroy(),
                          this.clipboardAction &&
                            (this.clipboardAction.destroy(),
                            (this.clipboardAction = null));
                      },
                    },
                  ],
                  [
                    {
                      key: "isSupported",
                      value: function () {
                        var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : ["copy", "cut"],
                          e = "string" == typeof t ? [t] : t,
                          n = !!document.queryCommandSupported;
                        return (
                          e.forEach(function (t) {
                            n = n && !!document.queryCommandSupported(t);
                          }),
                          n
                        );
                      },
                    },
                  ]
                ),
                e
              );
            })(a.default);
            function s(t, e) {
              var n = "data-clipboard-" + t;
              if (e.hasAttribute(n)) return e.getAttribute(n);
            }
            t.exports = l;
          },
          function (t, e, n) {
            "use strict";
            var r,
              o =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t;
                    }
                  : function (t) {
                      return t &&
                        "function" == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? "symbol"
                        : typeof t;
                    },
              i = (function () {
                function t(t, e) {
                  for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(t, r.key, r);
                  }
                }
                return function (e, n, r) {
                  return n && t(e.prototype, n), r && t(e, r), e;
                };
              })(),
              a = n(2),
              c = (r = a) && r.__esModule ? r : { default: r },
              u = (function () {
                function t(e) {
                  !(function (t, e) {
                    if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, t),
                    this.resolveOptions(e),
                    this.initSelection();
                }
                return (
                  i(t, [
                    {
                      key: "resolveOptions",
                      value: function () {
                        var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                        (this.action = t.action),
                          (this.container = t.container),
                          (this.emitter = t.emitter),
                          (this.target = t.target),
                          (this.text = t.text),
                          (this.trigger = t.trigger),
                          (this.selectedText = "");
                      },
                    },
                    {
                      key: "initSelection",
                      value: function () {
                        this.text
                          ? this.selectFake()
                          : this.target && this.selectTarget();
                      },
                    },
                    {
                      key: "selectFake",
                      value: function () {
                        var t = this,
                          e =
                            "rtl" ==
                            document.documentElement.getAttribute("dir");
                        this.removeFake(),
                          (this.fakeHandlerCallback = function () {
                            return t.removeFake();
                          }),
                          (this.fakeHandler =
                            this.container.addEventListener(
                              "click",
                              this.fakeHandlerCallback
                            ) || !0),
                          (this.fakeElem = document.createElement("textarea")),
                          (this.fakeElem.style.fontSize = "12pt"),
                          (this.fakeElem.style.border = "0"),
                          (this.fakeElem.style.padding = "0"),
                          (this.fakeElem.style.margin = "0"),
                          (this.fakeElem.style.position = "absolute"),
                          (this.fakeElem.style[e ? "right" : "left"] =
                            "-9999px");
                        var n =
                          window.pageYOffset ||
                          document.documentElement.scrollTop;
                        (this.fakeElem.style.top = n + "px"),
                          this.fakeElem.setAttribute("readonly", ""),
                          (this.fakeElem.value = this.text),
                          this.container.appendChild(this.fakeElem),
                          (this.selectedText = (0, c.default)(this.fakeElem)),
                          this.copyText();
                      },
                    },
                    {
                      key: "removeFake",
                      value: function () {
                        this.fakeHandler &&
                          (this.container.removeEventListener(
                            "click",
                            this.fakeHandlerCallback
                          ),
                          (this.fakeHandler = null),
                          (this.fakeHandlerCallback = null)),
                          this.fakeElem &&
                            (this.container.removeChild(this.fakeElem),
                            (this.fakeElem = null));
                      },
                    },
                    {
                      key: "selectTarget",
                      value: function () {
                        (this.selectedText = (0, c.default)(this.target)),
                          this.copyText();
                      },
                    },
                    {
                      key: "copyText",
                      value: function () {
                        var t = void 0;
                        try {
                          t = document.execCommand(this.action);
                        } catch (e) {
                          t = !1;
                        }
                        this.handleResult(t);
                      },
                    },
                    {
                      key: "handleResult",
                      value: function (t) {
                        this.emitter.emit(t ? "success" : "error", {
                          action: this.action,
                          text: this.selectedText,
                          trigger: this.trigger,
                          clearSelection: this.clearSelection.bind(this),
                        });
                      },
                    },
                    {
                      key: "clearSelection",
                      value: function () {
                        this.trigger && this.trigger.focus(),
                          window.getSelection().removeAllRanges();
                      },
                    },
                    {
                      key: "destroy",
                      value: function () {
                        this.removeFake();
                      },
                    },
                    {
                      key: "action",
                      set: function () {
                        var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : "copy";
                        if (
                          ((this._action = t),
                          "copy" !== this._action && "cut" !== this._action)
                        )
                          throw new Error(
                            'Invalid "action" value, use either "copy" or "cut"'
                          );
                      },
                      get: function () {
                        return this._action;
                      },
                    },
                    {
                      key: "target",
                      set: function (t) {
                        if (void 0 !== t) {
                          if (
                            !t ||
                            "object" !== (void 0 === t ? "undefined" : o(t)) ||
                            1 !== t.nodeType
                          )
                            throw new Error(
                              'Invalid "target" value, use a valid Element'
                            );
                          if (
                            "copy" === this.action &&
                            t.hasAttribute("disabled")
                          )
                            throw new Error(
                              'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
                            );
                          if (
                            "cut" === this.action &&
                            (t.hasAttribute("readonly") ||
                              t.hasAttribute("disabled"))
                          )
                            throw new Error(
                              'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
                            );
                          this._target = t;
                        }
                      },
                      get: function () {
                        return this._target;
                      },
                    },
                  ]),
                  t
                );
              })();
            t.exports = u;
          },
          function (t, e) {
            t.exports = function (t) {
              var e;
              if ("SELECT" === t.nodeName) t.focus(), (e = t.value);
              else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                var n = t.hasAttribute("readonly");
                n || t.setAttribute("readonly", ""),
                  t.select(),
                  t.setSelectionRange(0, t.value.length),
                  n || t.removeAttribute("readonly"),
                  (e = t.value);
              } else {
                t.hasAttribute("contenteditable") && t.focus();
                var r = window.getSelection(),
                  o = document.createRange();
                o.selectNodeContents(t),
                  r.removeAllRanges(),
                  r.addRange(o),
                  (e = r.toString());
              }
              return e;
            };
          },
          function (t, e) {
            function n() {}
            (n.prototype = {
              on: function (t, e, n) {
                var r = this.e || (this.e = {});
                return (r[t] || (r[t] = [])).push({ fn: e, ctx: n }), this;
              },
              once: function (t, e, n) {
                var r = this;
                function o() {
                  r.off(t, o), e.apply(n, arguments);
                }
                return (o._ = e), this.on(t, o, n);
              },
              emit: function (t) {
                for (
                  var e = [].slice.call(arguments, 1),
                    n = ((this.e || (this.e = {}))[t] || []).slice(),
                    r = 0,
                    o = n.length;
                  r < o;
                  r++
                )
                  n[r].fn.apply(n[r].ctx, e);
                return this;
              },
              off: function (t, e) {
                var n = this.e || (this.e = {}),
                  r = n[t],
                  o = [];
                if (r && e)
                  for (var i = 0, a = r.length; i < a; i++)
                    r[i].fn !== e && r[i].fn._ !== e && o.push(r[i]);
                return o.length ? (n[t] = o) : delete n[t], this;
              },
            }),
              (t.exports = n);
          },
          function (t, e, n) {
            var r = n(5),
              o = n(6);
            t.exports = function (t, e, n) {
              if (!t && !e && !n) throw new Error("Missing required arguments");
              if (!r.string(e))
                throw new TypeError("Second argument must be a String");
              if (!r.fn(n))
                throw new TypeError("Third argument must be a Function");
              if (r.node(t))
                return (function (t, e, n) {
                  return (
                    t.addEventListener(e, n),
                    {
                      destroy: function () {
                        t.removeEventListener(e, n);
                      },
                    }
                  );
                })(t, e, n);
              if (r.nodeList(t))
                return (function (t, e, n) {
                  return (
                    Array.prototype.forEach.call(t, function (t) {
                      t.addEventListener(e, n);
                    }),
                    {
                      destroy: function () {
                        Array.prototype.forEach.call(t, function (t) {
                          t.removeEventListener(e, n);
                        });
                      },
                    }
                  );
                })(t, e, n);
              if (r.string(t))
                return (function (t, e, n) {
                  return o(document.body, t, e, n);
                })(t, e, n);
              throw new TypeError(
                "First argument must be a String, HTMLElement, HTMLCollection, or NodeList"
              );
            };
          },
          function (t, e) {
            (e.node = function (t) {
              return (
                void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
              );
            }),
              (e.nodeList = function (t) {
                var n = Object.prototype.toString.call(t);
                return (
                  void 0 !== t &&
                  ("[object NodeList]" === n ||
                    "[object HTMLCollection]" === n) &&
                  "length" in t &&
                  (0 === t.length || e.node(t[0]))
                );
              }),
              (e.string = function (t) {
                return "string" == typeof t || t instanceof String;
              }),
              (e.fn = function (t) {
                return (
                  "[object Function]" === Object.prototype.toString.call(t)
                );
              });
          },
          function (t, e, n) {
            var r = n(7);
            function o(t, e, n, r, o) {
              var a = i.apply(this, arguments);
              return (
                t.addEventListener(n, a, o),
                {
                  destroy: function () {
                    t.removeEventListener(n, a, o);
                  },
                }
              );
            }
            function i(t, e, n, o) {
              return function (n) {
                (n.delegateTarget = r(n.target, e)),
                  n.delegateTarget && o.call(t, n);
              };
            }
            t.exports = function (t, e, n, r, i) {
              return "function" == typeof t.addEventListener
                ? o.apply(null, arguments)
                : "function" == typeof n
                ? o.bind(null, document).apply(null, arguments)
                : ("string" == typeof t && (t = document.querySelectorAll(t)),
                  Array.prototype.map.call(t, function (t) {
                    return o(t, e, n, r, i);
                  }));
            };
          },
          function (t, e) {
            if ("undefined" != typeof Element && !Element.prototype.matches) {
              var n = Element.prototype;
              n.matches =
                n.matchesSelector ||
                n.mozMatchesSelector ||
                n.msMatchesSelector ||
                n.oMatchesSelector ||
                n.webkitMatchesSelector;
            }
            t.exports = function (t, e) {
              for (; t && 9 !== t.nodeType; ) {
                if ("function" == typeof t.matches && t.matches(e)) return t;
                t = t.parentNode;
              }
            };
          },
        ]);
      }),
        (t.exports = r());
    },
  },
]);
