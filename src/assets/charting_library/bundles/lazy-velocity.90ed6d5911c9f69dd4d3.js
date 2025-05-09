(window.webpackJsonp = window.webpackJsonp || []).push([
  ["lazy-velocity"],
  {
    WJ2Z: function (e, t, r) {
      var a, i;
      !(function (e) {
        "use strict";
        if (!e.jQuery) {
          var t = function (e, r) {
            return new t.fn.init(e, r);
          };
          (t.isWindow = function (e) {
            return e && e === e.window;
          }),
            (t.type = function (e) {
              return e
                ? "object" == typeof e || "function" == typeof e
                  ? a[n.call(e)] || "object"
                  : typeof e
                : e + "";
            }),
            (t.isArray =
              Array.isArray ||
              function (e) {
                return "array" === t.type(e);
              }),
            (t.isPlainObject = function (e) {
              var r;
              if (!e || "object" !== t.type(e) || e.nodeType || t.isWindow(e))
                return !1;
              try {
                if (
                  e.constructor &&
                  !i.call(e, "constructor") &&
                  !i.call(e.constructor.prototype, "isPrototypeOf")
                )
                  return !1;
              } catch (a) {
                return !1;
              }
              for (r in e);
              return void 0 === r || i.call(e, r);
            }),
            (t.each = function (e, t, r) {
              var a = 0,
                i = e.length,
                n = l(e);
              if (r) {
                if (n) for (; a < i && !1 !== t.apply(e[a], r); a++);
                else
                  for (a in e)
                    if (e.hasOwnProperty(a) && !1 === t.apply(e[a], r)) break;
              } else if (n) for (; a < i && !1 !== t.call(e[a], a, e[a]); a++);
              else
                for (a in e)
                  if (e.hasOwnProperty(a) && !1 === t.call(e[a], a, e[a]))
                    break;
              return e;
            }),
            (t.data = function (e, a, i) {
              if (void 0 === i) {
                var n = e[t.expando],
                  o = n && r[n];
                if (void 0 === a) return o;
                if (o && a in o) return o[a];
              } else if (void 0 !== a) {
                var s = e[t.expando] || (e[t.expando] = ++t.uuid);
                return (r[s] = r[s] || {}), (r[s][a] = i), i;
              }
            }),
            (t.removeData = function (e, a) {
              var i = e[t.expando],
                n = i && r[i];
              n &&
                (a
                  ? t.each(a, function (e, t) {
                      delete n[t];
                    })
                  : delete r[i]);
            }),
            (t.extend = function () {
              var e,
                r,
                a,
                i,
                n,
                o,
                s = arguments[0] || {},
                l = 1,
                u = arguments.length,
                c = !1;
              for (
                "boolean" == typeof s &&
                  ((c = s), (s = arguments[l] || {}), l++),
                  "object" != typeof s && "function" !== t.type(s) && (s = {}),
                  l === u && ((s = this), l--);
                l < u;
                l++
              )
                if ((n = arguments[l]))
                  for (i in n)
                    n.hasOwnProperty(i) &&
                      ((e = s[i]),
                      s !== (a = n[i]) &&
                        (c && a && (t.isPlainObject(a) || (r = t.isArray(a)))
                          ? (r
                              ? ((r = !1), (o = e && t.isArray(e) ? e : []))
                              : (o = e && t.isPlainObject(e) ? e : {}),
                            (s[i] = t.extend(c, o, a)))
                          : void 0 !== a && (s[i] = a)));
              return s;
            }),
            (t.queue = function (e, r, a) {
              if (e) {
                r = (r || "fx") + "queue";
                var i,
                  n,
                  o,
                  s = t.data(e, r);
                return a
                  ? (!s || t.isArray(a)
                      ? (s = t.data(
                          e,
                          r,
                          ((o = n || []),
                          (i = a) &&
                            (l(Object(i))
                              ? (function (e, t) {
                                  for (
                                    var r = +t.length, a = 0, i = e.length;
                                    a < r;

                                  )
                                    e[i++] = t[a++];
                                  if (r != r)
                                    for (; void 0 !== t[a]; ) e[i++] = t[a++];
                                  e.length = i;
                                })(o, "string" == typeof i ? [i] : i)
                              : [].push.call(o, i)),
                          o)
                        ))
                      : s.push(a),
                    s)
                  : s || [];
              }
            }),
            (t.dequeue = function (e, r) {
              t.each(e.nodeType ? [e] : e, function (e, a) {
                r = r || "fx";
                var i = t.queue(a, r),
                  n = i.shift();
                "inprogress" === n && (n = i.shift()),
                  n &&
                    ("fx" === r && i.unshift("inprogress"),
                    n.call(a, function () {
                      t.dequeue(a, r);
                    }));
              });
            }),
            (t.fn = t.prototype =
              {
                init: function (e) {
                  if (e.nodeType) return (this[0] = e), this;
                  throw new Error("Not a DOM node.");
                },
                offset: function () {
                  var t = this[0].getBoundingClientRect
                    ? this[0].getBoundingClientRect()
                    : { top: 0, left: 0 };
                  return {
                    top:
                      t.top +
                      (e.pageYOffset || document.scrollTop || 0) -
                      (document.clientTop || 0),
                    left:
                      t.left +
                      (e.pageXOffset || document.scrollLeft || 0) -
                      (document.clientLeft || 0),
                  };
                },
                position: function () {
                  var e = this[0],
                    r = (function (e) {
                      for (
                        var t = e.offsetParent;
                        t &&
                        "html" !== t.nodeName.toLowerCase() &&
                        t.style &&
                        "static" === t.style.position;

                      )
                        t = t.offsetParent;
                      return t || document;
                    })(e),
                    a = this.offset(),
                    i = /^(?:body|html)$/i.test(r.nodeName)
                      ? { top: 0, left: 0 }
                      : t(r).offset();
                  return (
                    (a.top -= parseFloat(e.style.marginTop) || 0),
                    (a.left -= parseFloat(e.style.marginLeft) || 0),
                    r.style &&
                      ((i.top += parseFloat(r.style.borderTopWidth) || 0),
                      (i.left += parseFloat(r.style.borderLeftWidth) || 0)),
                    { top: a.top - i.top, left: a.left - i.left }
                  );
                },
              });
          var r = {};
          (t.expando = "velocity" + new Date().getTime()), (t.uuid = 0);
          for (
            var a = {},
              i = a.hasOwnProperty,
              n = a.toString,
              o =
                "Boolean Number String Function Array Date RegExp Object Error".split(
                  " "
                ),
              s = 0;
            s < o.length;
            s++
          )
            a["[object " + o[s] + "]"] = o[s].toLowerCase();
          (t.fn.init.prototype = t.fn), (e.Velocity = { Utilities: t });
        }
        function l(e) {
          var r = e.length,
            a = t.type(e);
          return (
            "function" !== a &&
            !t.isWindow(e) &&
            (!(1 !== e.nodeType || !r) ||
              "array" === a ||
              0 === r ||
              ("number" == typeof r && r > 0 && r - 1 in e))
          );
        }
      })(window),
        (function (n) {
          "use strict";
          "object" == typeof e.exports
            ? (e.exports = n())
            : void 0 ===
                (i = "function" == typeof (a = n) ? a.call(t, r, t, e) : a) ||
              (e.exports = i);
        })(function () {
          "use strict";
          return (function (e, t, r, a) {
            var i,
              n = (function () {
                if (r.documentMode) return r.documentMode;
                for (var e = 7; e > 4; e--) {
                  var t = r.createElement("div");
                  if (
                    ((t.innerHTML =
                      "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e"),
                    t.getElementsByTagName("span").length)
                  )
                    return (t = null), e;
                }
              })(),
              o =
                ((i = 0),
                t.webkitRequestAnimationFrame ||
                  t.mozRequestAnimationFrame ||
                  function (e) {
                    var t,
                      r = new Date().getTime();
                    return (
                      (t = Math.max(0, 16 - (r - i))),
                      (i = r + t),
                      setTimeout(function () {
                        e(r + t);
                      }, t)
                    );
                  }),
              s = (function () {
                var e = t.performance || {};
                if ("function" != typeof e.now) {
                  var r =
                    e.timing && e.timing.navigationStart
                      ? e.timing.navigationStart
                      : new Date().getTime();
                  e.now = function () {
                    return new Date().getTime() - r;
                  };
                }
                return e;
              })();
            var l = (function () {
                var e = Array.prototype.slice;
                try {
                  return e.call(r.documentElement), e;
                } catch (t) {
                  return function (t, r) {
                    var a = this.length;
                    if (
                      ("number" != typeof t && (t = 0),
                      "number" != typeof r && (r = a),
                      this.slice)
                    )
                      return e.call(this, t, r);
                    var i,
                      n = [],
                      o = t >= 0 ? t : Math.max(0, a + t),
                      s = (r < 0 ? a + r : Math.min(r, a)) - o;
                    if (s > 0)
                      if (((n = new Array(s)), this.charAt))
                        for (i = 0; i < s; i++) n[i] = this.charAt(o + i);
                      else for (i = 0; i < s; i++) n[i] = this[o + i];
                    return n;
                  };
                }
              })(),
              u = function () {
                return Array.prototype.includes
                  ? function (e, t) {
                      return e.includes(t);
                    }
                  : Array.prototype.indexOf
                  ? function (e, t) {
                      return e.indexOf(t) >= 0;
                    }
                  : function (e, t) {
                      for (var r = 0; r < e.length; r++)
                        if (e[r] === t) return !0;
                      return !1;
                    };
              };
            function c(e) {
              return (
                p.isWrapped(e) ? (e = l.call(e)) : p.isNode(e) && (e = [e]), e
              );
            }
            var d,
              p = {
                isNumber: function (e) {
                  return "number" == typeof e;
                },
                isString: function (e) {
                  return "string" == typeof e;
                },
                isArray:
                  Array.isArray ||
                  function (e) {
                    return (
                      "[object Array]" === Object.prototype.toString.call(e)
                    );
                  },
                isFunction: function (e) {
                  return (
                    "[object Function]" === Object.prototype.toString.call(e)
                  );
                },
                isNode: function (e) {
                  return e && e.nodeType;
                },
                isWrapped: function (e) {
                  return (
                    e &&
                    e !== t &&
                    p.isNumber(e.length) &&
                    !p.isString(e) &&
                    !p.isFunction(e) &&
                    !p.isNode(e) &&
                    (0 === e.length || p.isNode(e[0]))
                  );
                },
                isSVG: function (e) {
                  return t.SVGElement && e instanceof t.SVGElement;
                },
                isEmptyObject: function (e) {
                  for (var t in e) if (e.hasOwnProperty(t)) return !1;
                  return !0;
                },
              },
              f = !1;
            if (
              (e.fn && e.fn.jquery
                ? ((d = e), (f = !0))
                : (d = t.Velocity.Utilities),
              n <= 8 && !f)
            )
              throw new Error(
                "Velocity: IE8 and below require jQuery to be loaded before Velocity."
              );
            if (!(n <= 7)) {
              var g = {
                State: {
                  isMobile:
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                      navigator.userAgent
                    ),
                  isAndroid: /Android/i.test(navigator.userAgent),
                  isGingerbread: /Android 2\.3\.[3-7]/i.test(
                    navigator.userAgent
                  ),
                  isChrome: t.chrome,
                  isFirefox: /Firefox/i.test(navigator.userAgent),
                  prefixElement: r.createElement("div"),
                  prefixMatches: {},
                  scrollAnchor: null,
                  scrollPropertyLeft: null,
                  scrollPropertyTop: null,
                  isTicking: !1,
                  calls: [],
                  delayedElements: { count: 0 },
                },
                CSS: {},
                Utilities: d,
                Redirects: {},
                Easings: {},
                Promise: t.Promise,
                defaults: {
                  queue: "",
                  duration: 400,
                  easing: "swing",
                  begin: void 0,
                  complete: void 0,
                  progress: void 0,
                  display: void 0,
                  visibility: void 0,
                  loop: !1,
                  delay: !1,
                  mobileHA: !0,
                  _cacheValues: !0,
                  promiseRejectEmpty: !0,
                },
                init: function (e) {
                  d.data(e, "velocity", {
                    isSVG: p.isSVG(e),
                    isAnimating: !1,
                    computedStyle: null,
                    tweensContainer: null,
                    rootPropertyValueCache: {},
                    transformCache: {},
                  });
                },
                hook: null,
                mock: !1,
                version: { major: 1, minor: 5, patch: 0 },
                debug: !1,
                timestamp: !0,
                pauseAll: function (e) {
                  var t = new Date().getTime();
                  d.each(g.State.calls, function (t, r) {
                    if (r) {
                      if (
                        void 0 !== e &&
                        (r[2].queue !== e || !1 === r[2].queue)
                      )
                        return !0;
                      r[5] = { resume: !1 };
                    }
                  }),
                    d.each(g.State.delayedElements, function (e, r) {
                      r && w(r, t);
                    });
                },
                resumeAll: function (e) {
                  var t = new Date().getTime();
                  d.each(g.State.calls, function (t, r) {
                    if (r) {
                      if (
                        void 0 !== e &&
                        (r[2].queue !== e || !1 === r[2].queue)
                      )
                        return !0;
                      r[5] && (r[5].resume = !0);
                    }
                  }),
                    d.each(g.State.delayedElements, function (e, r) {
                      r && S(r, t);
                    });
                },
              };
              void 0 !== t.pageYOffset
                ? ((g.State.scrollAnchor = t),
                  (g.State.scrollPropertyLeft = "pageXOffset"),
                  (g.State.scrollPropertyTop = "pageYOffset"))
                : ((g.State.scrollAnchor =
                    r.documentElement || r.body.parentNode || r.body),
                  (g.State.scrollPropertyLeft = "scrollLeft"),
                  (g.State.scrollPropertyTop = "scrollTop"));
              var m = (function () {
                function e(e) {
                  return -e.tension * e.x - e.friction * e.v;
                }
                function t(t, r, a) {
                  var i = {
                    x: t.x + a.dx * r,
                    v: t.v + a.dv * r,
                    tension: t.tension,
                    friction: t.friction,
                  };
                  return { dx: i.v, dv: e(i) };
                }
                function r(r, a) {
                  var i = { dx: r.v, dv: e(r) },
                    n = t(r, 0.5 * a, i),
                    o = t(r, 0.5 * a, n),
                    s = t(r, a, o),
                    l = (1 / 6) * (i.dx + 2 * (n.dx + o.dx) + s.dx),
                    u = (1 / 6) * (i.dv + 2 * (n.dv + o.dv) + s.dv);
                  return (r.x = r.x + l * a), (r.v = r.v + u * a), r;
                }
                return function e(t, a, i) {
                  var n,
                    o,
                    s,
                    l = { x: -1, v: 0, tension: null, friction: null },
                    u = [0],
                    c = 0;
                  for (
                    t = parseFloat(t) || 500,
                      a = parseFloat(a) || 20,
                      i = i || null,
                      l.tension = t,
                      l.friction = a,
                      o = (n = null !== i)
                        ? ((c = e(t, a)) / i) * 0.016
                        : 0.016;
                    (s = r(s || l, o)),
                      u.push(1 + s.x),
                      (c += 16),
                      Math.abs(s.x) > 1e-4 && Math.abs(s.v) > 1e-4;

                  );
                  return n
                    ? function (e) {
                        return u[(e * (u.length - 1)) | 0];
                      }
                    : c;
                };
              })();
              (g.Easings = {
                linear: function (e) {
                  return e;
                },
                swing: function (e) {
                  return 0.5 - Math.cos(e * Math.PI) / 2;
                },
                spring: function (e) {
                  return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e);
                },
              }),
                d.each(
                  [
                    ["ease", [0.25, 0.1, 0.25, 1]],
                    ["ease-in", [0.42, 0, 1, 1]],
                    ["ease-out", [0, 0, 0.58, 1]],
                    ["ease-in-out", [0.42, 0, 0.58, 1]],
                    ["easeInSine", [0.47, 0, 0.745, 0.715]],
                    ["easeOutSine", [0.39, 0.575, 0.565, 1]],
                    ["easeInOutSine", [0.445, 0.05, 0.55, 0.95]],
                    ["easeInQuad", [0.55, 0.085, 0.68, 0.53]],
                    ["easeOutQuad", [0.25, 0.46, 0.45, 0.94]],
                    ["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]],
                    ["easeInCubic", [0.55, 0.055, 0.675, 0.19]],
                    ["easeOutCubic", [0.215, 0.61, 0.355, 1]],
                    ["easeInOutCubic", [0.645, 0.045, 0.355, 1]],
                    ["easeInQuart", [0.895, 0.03, 0.685, 0.22]],
                    ["easeOutQuart", [0.165, 0.84, 0.44, 1]],
                    ["easeInOutQuart", [0.77, 0, 0.175, 1]],
                    ["easeInQuint", [0.755, 0.05, 0.855, 0.06]],
                    ["easeOutQuint", [0.23, 1, 0.32, 1]],
                    ["easeInOutQuint", [0.86, 0, 0.07, 1]],
                    ["easeInExpo", [0.95, 0.05, 0.795, 0.035]],
                    ["easeOutExpo", [0.19, 1, 0.22, 1]],
                    ["easeInOutExpo", [1, 0, 0, 1]],
                    ["easeInCirc", [0.6, 0.04, 0.98, 0.335]],
                    ["easeOutCirc", [0.075, 0.82, 0.165, 1]],
                    ["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]],
                  ],
                  function (e, t) {
                    g.Easings[t[0]] = k.apply(null, t[1]);
                  }
                );
              var h = (g.CSS = {
                RegEx: {
                  isHex: /^#([A-f\d]{3}){1,2}$/i,
                  valueUnwrap: /^[A-z]+\((.*)\)$/i,
                  wrappedValueAlreadyExtracted:
                    /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                  valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi,
                },
                Lists: {
                  colors: [
                    "fill",
                    "stroke",
                    "stopColor",
                    "color",
                    "backgroundColor",
                    "borderColor",
                    "borderTopColor",
                    "borderRightColor",
                    "borderBottomColor",
                    "borderLeftColor",
                    "outlineColor",
                  ],
                  transformsBase: [
                    "translateX",
                    "translateY",
                    "scale",
                    "scaleX",
                    "scaleY",
                    "skewX",
                    "skewY",
                    "rotateZ",
                  ],
                  transforms3D: [
                    "transformPerspective",
                    "translateZ",
                    "scaleZ",
                    "rotateX",
                    "rotateY",
                  ],
                  units: [
                    "%",
                    "em",
                    "ex",
                    "ch",
                    "rem",
                    "vw",
                    "vh",
                    "vmin",
                    "vmax",
                    "cm",
                    "mm",
                    "Q",
                    "in",
                    "pc",
                    "pt",
                    "px",
                    "deg",
                    "grad",
                    "rad",
                    "turn",
                    "s",
                    "ms",
                  ],
                  colorNames: {
                    aliceblue: "240,248,255",
                    antiquewhite: "250,235,215",
                    aquamarine: "127,255,212",
                    aqua: "0,255,255",
                    azure: "240,255,255",
                    beige: "245,245,220",
                    bisque: "255,228,196",
                    black: "0,0,0",
                    blanchedalmond: "255,235,205",
                    blueviolet: "138,43,226",
                    blue: "0,0,255",
                    brown: "165,42,42",
                    burlywood: "222,184,135",
                    cadetblue: "95,158,160",
                    chartreuse: "127,255,0",
                    chocolate: "210,105,30",
                    coral: "255,127,80",
                    cornflowerblue: "100,149,237",
                    cornsilk: "255,248,220",
                    crimson: "220,20,60",
                    cyan: "0,255,255",
                    darkblue: "0,0,139",
                    darkcyan: "0,139,139",
                    darkgoldenrod: "184,134,11",
                    darkgray: "169,169,169",
                    darkgrey: "169,169,169",
                    darkgreen: "0,100,0",
                    darkkhaki: "189,183,107",
                    darkmagenta: "139,0,139",
                    darkolivegreen: "85,107,47",
                    darkorange: "255,140,0",
                    darkorchid: "153,50,204",
                    darkred: "139,0,0",
                    darksalmon: "233,150,122",
                    darkseagreen: "143,188,143",
                    darkslateblue: "72,61,139",
                    darkslategray: "47,79,79",
                    darkturquoise: "0,206,209",
                    darkviolet: "148,0,211",
                    deeppink: "255,20,147",
                    deepskyblue: "0,191,255",
                    dimgray: "105,105,105",
                    dimgrey: "105,105,105",
                    dodgerblue: "30,144,255",
                    firebrick: "178,34,34",
                    floralwhite: "255,250,240",
                    forestgreen: "34,139,34",
                    fuchsia: "255,0,255",
                    gainsboro: "220,220,220",
                    ghostwhite: "248,248,255",
                    gold: "255,215,0",
                    goldenrod: "218,165,32",
                    gray: "128,128,128",
                    grey: "128,128,128",
                    greenyellow: "173,255,47",
                    green: "0,128,0",
                    honeydew: "240,255,240",
                    hotpink: "255,105,180",
                    indianred: "205,92,92",
                    indigo: "75,0,130",
                    ivory: "255,255,240",
                    khaki: "240,230,140",
                    lavenderblush: "255,240,245",
                    lavender: "230,230,250",
                    lawngreen: "124,252,0",
                    lemonchiffon: "255,250,205",
                    lightblue: "173,216,230",
                    lightcoral: "240,128,128",
                    lightcyan: "224,255,255",
                    lightgoldenrodyellow: "250,250,210",
                    lightgray: "211,211,211",
                    lightgrey: "211,211,211",
                    lightgreen: "144,238,144",
                    lightpink: "255,182,193",
                    lightsalmon: "255,160,122",
                    lightseagreen: "32,178,170",
                    lightskyblue: "135,206,250",
                    lightslategray: "119,136,153",
                    lightsteelblue: "176,196,222",
                    lightyellow: "255,255,224",
                    limegreen: "50,205,50",
                    lime: "0,255,0",
                    linen: "250,240,230",
                    magenta: "255,0,255",
                    maroon: "128,0,0",
                    mediumaquamarine: "102,205,170",
                    mediumblue: "0,0,205",
                    mediumorchid: "186,85,211",
                    mediumpurple: "147,112,219",
                    mediumseagreen: "60,179,113",
                    mediumslateblue: "123,104,238",
                    mediumspringgreen: "0,250,154",
                    mediumturquoise: "72,209,204",
                    mediumvioletred: "199,21,133",
                    midnightblue: "25,25,112",
                    mintcream: "245,255,250",
                    mistyrose: "255,228,225",
                    moccasin: "255,228,181",
                    navajowhite: "255,222,173",
                    navy: "0,0,128",
                    oldlace: "253,245,230",
                    olivedrab: "107,142,35",
                    olive: "128,128,0",
                    orangered: "255,69,0",
                    orange: "255,165,0",
                    orchid: "218,112,214",
                    palegoldenrod: "238,232,170",
                    palegreen: "152,251,152",
                    paleturquoise: "175,238,238",
                    palevioletred: "219,112,147",
                    papayawhip: "255,239,213",
                    peachpuff: "255,218,185",
                    peru: "205,133,63",
                    pink: "255,192,203",
                    plum: "221,160,221",
                    powderblue: "176,224,230",
                    purple: "128,0,128",
                    red: "255,0,0",
                    rosybrown: "188,143,143",
                    royalblue: "65,105,225",
                    saddlebrown: "139,69,19",
                    salmon: "250,128,114",
                    sandybrown: "244,164,96",
                    seagreen: "46,139,87",
                    seashell: "255,245,238",
                    sienna: "160,82,45",
                    silver: "192,192,192",
                    skyblue: "135,206,235",
                    slateblue: "106,90,205",
                    slategray: "112,128,144",
                    snow: "255,250,250",
                    springgreen: "0,255,127",
                    steelblue: "70,130,180",
                    tan: "210,180,140",
                    teal: "0,128,128",
                    thistle: "216,191,216",
                    tomato: "255,99,71",
                    turquoise: "64,224,208",
                    violet: "238,130,238",
                    wheat: "245,222,179",
                    whitesmoke: "245,245,245",
                    white: "255,255,255",
                    yellowgreen: "154,205,50",
                    yellow: "255,255,0",
                  },
                },
                Hooks: {
                  templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: [
                      "Color X Y Blur Spread",
                      "black 0px 0px 0px 0px",
                    ],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"],
                  },
                  registered: {},
                  register: function () {
                    for (var e = 0; e < h.Lists.colors.length; e++) {
                      var t =
                        "color" === h.Lists.colors[e]
                          ? "0 0 0 1"
                          : "255 255 255 1";
                      h.Hooks.templates[h.Lists.colors[e]] = [
                        "Red Green Blue Alpha",
                        t,
                      ];
                    }
                    var r, a, i;
                    if (n)
                      for (r in h.Hooks.templates)
                        if (h.Hooks.templates.hasOwnProperty(r)) {
                          i = (a = h.Hooks.templates[r])[0].split(" ");
                          var o = a[1].match(h.RegEx.valueSplit);
                          "Color" === i[0] &&
                            (i.push(i.shift()),
                            o.push(o.shift()),
                            (h.Hooks.templates[r] = [
                              i.join(" "),
                              o.join(" "),
                            ]));
                        }
                    for (r in h.Hooks.templates)
                      if (h.Hooks.templates.hasOwnProperty(r))
                        for (var s in (i = (a = h.Hooks.templates[r])[0].split(
                          " "
                        )))
                          if (i.hasOwnProperty(s)) {
                            var l = r + i[s],
                              u = s;
                            h.Hooks.registered[l] = [r, u];
                          }
                  },
                  getRoot: function (e) {
                    var t = h.Hooks.registered[e];
                    return t ? t[0] : e;
                  },
                  getUnit: function (e, t) {
                    var r =
                      (e.substr(t || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
                    return r && u(h.Lists.units) ? r : "";
                  },
                  fixColors: function (e) {
                    return e.replace(
                      /(rgba?\(\s*)?(\b[a-z]+\b)/g,
                      function (e, t, r) {
                        return h.Lists.colorNames.hasOwnProperty(r)
                          ? (t || "rgba(") +
                              h.Lists.colorNames[r] +
                              (t ? "" : ",1)")
                          : t + r;
                      }
                    );
                  },
                  cleanRootPropertyValue: function (e, t) {
                    return (
                      h.RegEx.valueUnwrap.test(t) &&
                        (t = t.match(h.RegEx.valueUnwrap)[1]),
                      h.Values.isCSSNullValue(t) &&
                        (t = h.Hooks.templates[e][1]),
                      t
                    );
                  },
                  extractValue: function (e, t) {
                    var r = h.Hooks.registered[e];
                    if (r) {
                      var a = r[0],
                        i = r[1];
                      return (t = h.Hooks.cleanRootPropertyValue(a, t))
                        .toString()
                        .match(h.RegEx.valueSplit)[i];
                    }
                    return t;
                  },
                  injectValue: function (e, t, r) {
                    var a = h.Hooks.registered[e];
                    if (a) {
                      var i,
                        n = a[0],
                        o = a[1];
                      return (
                        ((i = (r = h.Hooks.cleanRootPropertyValue(n, r))
                          .toString()
                          .match(h.RegEx.valueSplit))[o] = t),
                        i.join(" ")
                      );
                    }
                    return r;
                  },
                },
                Normalizations: {
                  registered: {
                    clip: function (e, t, r) {
                      switch (e) {
                        case "name":
                          return "clip";
                        case "extract":
                          var a;
                          return (a = h.RegEx.wrappedValueAlreadyExtracted.test(
                            r
                          )
                            ? r
                            : (a = r.toString().match(h.RegEx.valueUnwrap))
                            ? a[1].replace(/,(\s+)?/g, " ")
                            : r);
                        case "inject":
                          return "rect(" + r + ")";
                      }
                    },
                    blur: function (e, t, r) {
                      switch (e) {
                        case "name":
                          return g.State.isFirefox
                            ? "filter"
                            : "-webkit-filter";
                        case "extract":
                          var a = parseFloat(r);
                          if (!a && 0 !== a) {
                            var i = r
                              .toString()
                              .match(/blur\(([0-9]+[A-z]+)\)/i);
                            a = i ? i[1] : 0;
                          }
                          return a;
                        case "inject":
                          return parseFloat(r) ? "blur(" + r + ")" : "none";
                      }
                    },
                    opacity: function (e, t, r) {
                      if (n <= 8)
                        switch (e) {
                          case "name":
                            return "filter";
                          case "extract":
                            var a = r
                              .toString()
                              .match(/alpha\(opacity=(.*)\)/i);
                            return (r = a ? a[1] / 100 : 1);
                          case "inject":
                            return (
                              (t.style.zoom = 1),
                              parseFloat(r) >= 1
                                ? ""
                                : "alpha(opacity=" +
                                  parseInt(100 * parseFloat(r), 10) +
                                  ")"
                            );
                        }
                      else
                        switch (e) {
                          case "name":
                            return "opacity";
                          case "extract":
                          case "inject":
                            return r;
                        }
                    },
                  },
                  register: function () {
                    (n && !(n > 9)) ||
                      g.State.isGingerbread ||
                      (h.Lists.transformsBase = h.Lists.transformsBase.concat(
                        h.Lists.transforms3D
                      ));
                    for (var e = 0; e < h.Lists.transformsBase.length; e++)
                      !(function () {
                        var t = h.Lists.transformsBase[e];
                        h.Normalizations.registered[t] = function (e, r, a) {
                          switch (e) {
                            case "name":
                              return "transform";
                            case "extract":
                              return void 0 === x(r) ||
                                void 0 === x(r).transformCache[t]
                                ? /^scale/i.test(t)
                                  ? 1
                                  : 0
                                : x(r).transformCache[t].replace(/[()]/g, "");
                            case "inject":
                              var i = !1;
                              switch (t.substr(0, t.length - 1)) {
                                case "translate":
                                  i = !/(%|px|em|rem|vw|vh|\d)$/i.test(a);
                                  break;
                                case "scal":
                                case "scale":
                                  g.State.isAndroid &&
                                    void 0 === x(r).transformCache[t] &&
                                    a < 1 &&
                                    (a = 1),
                                    (i = !/(\d)$/i.test(a));
                                  break;
                                case "skew":
                                case "rotate":
                                  i = !/(deg|\d)$/i.test(a);
                              }
                              return (
                                i || (x(r).transformCache[t] = "(" + a + ")"),
                                x(r).transformCache[t]
                              );
                          }
                        };
                      })();
                    for (var t = 0; t < h.Lists.colors.length; t++)
                      !(function () {
                        var e = h.Lists.colors[t];
                        h.Normalizations.registered[e] = function (t, r, a) {
                          switch (t) {
                            case "name":
                              return e;
                            case "extract":
                              var i;
                              if (h.RegEx.wrappedValueAlreadyExtracted.test(a))
                                i = a;
                              else {
                                var o,
                                  s = {
                                    black: "rgb(0, 0, 0)",
                                    blue: "rgb(0, 0, 255)",
                                    gray: "rgb(128, 128, 128)",
                                    green: "rgb(0, 128, 0)",
                                    red: "rgb(255, 0, 0)",
                                    white: "rgb(255, 255, 255)",
                                  };
                                /^[A-z]+$/i.test(a)
                                  ? (o = void 0 !== s[a] ? s[a] : s.black)
                                  : h.RegEx.isHex.test(a)
                                  ? (o =
                                      "rgb(" +
                                      h.Values.hexToRgb(a).join(" ") +
                                      ")")
                                  : /^rgba?\(/i.test(a) || (o = s.black),
                                  (i = (o || a)
                                    .toString()
                                    .match(h.RegEx.valueUnwrap)[1]
                                    .replace(/,(\s+)?/g, " "));
                              }
                              return (
                                (!n || n > 8) &&
                                  3 === i.split(" ").length &&
                                  (i += " 1"),
                                i
                              );
                            case "inject":
                              return /^rgb/.test(a)
                                ? a
                                : (n <= 8
                                    ? 4 === a.split(" ").length &&
                                      (a = a.split(/\s+/).slice(0, 3).join(" "))
                                    : 3 === a.split(" ").length && (a += " 1"),
                                  (n <= 8 ? "rgb" : "rgba") +
                                    "(" +
                                    a
                                      .replace(/\s+/g, ",")
                                      .replace(/\.(\d)+(?=,)/g, "") +
                                    ")");
                          }
                        };
                      })();
                    function r(e, t, r) {
                      if (
                        ("border-box" ===
                          h
                            .getPropertyValue(t, "boxSizing")
                            .toString()
                            .toLowerCase()) ===
                        (r || !1)
                      ) {
                        var a,
                          i,
                          n = 0,
                          o =
                            "width" === e
                              ? ["Left", "Right"]
                              : ["Top", "Bottom"],
                          s = [
                            "padding" + o[0],
                            "padding" + o[1],
                            "border" + o[0] + "Width",
                            "border" + o[1] + "Width",
                          ];
                        for (a = 0; a < s.length; a++)
                          (i = parseFloat(h.getPropertyValue(t, s[a]))),
                            isNaN(i) || (n += i);
                        return r ? -n : n;
                      }
                      return 0;
                    }
                    function a(e, t) {
                      return function (a, i, n) {
                        switch (a) {
                          case "name":
                            return e;
                          case "extract":
                            return parseFloat(n) + r(e, i, t);
                          case "inject":
                            return parseFloat(n) - r(e, i, t) + "px";
                        }
                      };
                    }
                    (h.Normalizations.registered.innerWidth = a("width", !0)),
                      (h.Normalizations.registered.innerHeight = a(
                        "height",
                        !0
                      )),
                      (h.Normalizations.registered.outerWidth = a("width")),
                      (h.Normalizations.registered.outerHeight = a("height"));
                  },
                },
                Names: {
                  camelCase: function (e) {
                    return e.replace(/-(\w)/g, function (e, t) {
                      return t.toUpperCase();
                    });
                  },
                  SVGAttribute: function (e) {
                    var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (
                      (n || (g.State.isAndroid && !g.State.isChrome)) &&
                        (t += "|transform"),
                      new RegExp("^(" + t + ")$", "i").test(e)
                    );
                  },
                  prefixCheck: function (e) {
                    if (g.State.prefixMatches[e])
                      return [g.State.prefixMatches[e], !0];
                    for (
                      var t = ["", "Webkit", "Moz", "ms", "O"],
                        r = 0,
                        a = t.length;
                      r < a;
                      r++
                    ) {
                      var i;
                      if (
                        ((i =
                          0 === r
                            ? e
                            : t[r] +
                              e.replace(/^\w/, function (e) {
                                return e.toUpperCase();
                              })),
                        p.isString(g.State.prefixElement.style[i]))
                      )
                        return (g.State.prefixMatches[e] = i), [i, !0];
                    }
                    return [e, !1];
                  },
                },
                Values: {
                  hexToRgb: function (e) {
                    var t;
                    return (
                      (e = e.replace(
                        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                        function (e, t, r, a) {
                          return t + t + r + r + a + a;
                        }
                      )),
                      (t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e))
                        ? [
                            parseInt(t[1], 16),
                            parseInt(t[2], 16),
                            parseInt(t[3], 16),
                          ]
                        : [0, 0, 0]
                    );
                  },
                  isCSSNullValue: function (e) {
                    return (
                      !e ||
                      /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(
                        e
                      )
                    );
                  },
                  getUnitType: function (e) {
                    return /^(rotate|skew)/i.test(e)
                      ? "deg"
                      : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(
                          e
                        )
                      ? ""
                      : "px";
                  },
                  getDisplayType: function (e) {
                    var t = e && e.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(
                      t
                    )
                      ? "inline"
                      : /^(li)$/i.test(t)
                      ? "list-item"
                      : /^(tr)$/i.test(t)
                      ? "table-row"
                      : /^(table)$/i.test(t)
                      ? "table"
                      : /^(tbody)$/i.test(t)
                      ? "table-row-group"
                      : "block";
                  },
                  addClass: function (e, t) {
                    if (e)
                      if (e.classList) e.classList.add(t);
                      else if (p.isString(e.className))
                        e.className += (e.className.length ? " " : "") + t;
                      else {
                        var r =
                          e.getAttribute(n <= 7 ? "className" : "class") || "";
                        e.setAttribute("class", r + (r ? " " : "") + t);
                      }
                  },
                  removeClass: function (e, t) {
                    if (e)
                      if (e.classList) e.classList.remove(t);
                      else if (p.isString(e.className))
                        e.className = e.className
                          .toString()
                          .replace(
                            new RegExp(
                              "(^|\\s)" + t.split(" ").join("|") + "(\\s|$)",
                              "gi"
                            ),
                            " "
                          );
                      else {
                        var r =
                          e.getAttribute(n <= 7 ? "className" : "class") || "";
                        e.setAttribute(
                          "class",
                          r.replace(
                            new RegExp(
                              "(^|s)" + t.split(" ").join("|") + "(s|$)",
                              "gi"
                            ),
                            " "
                          )
                        );
                      }
                  },
                },
                getPropertyValue: function (e, r, a, i) {
                  function o(e, r) {
                    var a = 0;
                    if (n <= 8) a = d.css(e, r);
                    else {
                      var s = !1;
                      /^(width|height)$/.test(r) &&
                        0 === h.getPropertyValue(e, "display") &&
                        ((s = !0),
                        h.setPropertyValue(
                          e,
                          "display",
                          h.Values.getDisplayType(e)
                        ));
                      var l,
                        u = function () {
                          s && h.setPropertyValue(e, "display", "none");
                        };
                      if (!i) {
                        if (
                          "height" === r &&
                          "border-box" !==
                            h
                              .getPropertyValue(e, "boxSizing")
                              .toString()
                              .toLowerCase()
                        ) {
                          var c =
                            e.offsetHeight -
                            (parseFloat(
                              h.getPropertyValue(e, "borderTopWidth")
                            ) || 0) -
                            (parseFloat(
                              h.getPropertyValue(e, "borderBottomWidth")
                            ) || 0) -
                            (parseFloat(h.getPropertyValue(e, "paddingTop")) ||
                              0) -
                            (parseFloat(
                              h.getPropertyValue(e, "paddingBottom")
                            ) || 0);
                          return u(), c;
                        }
                        if (
                          "width" === r &&
                          "border-box" !==
                            h
                              .getPropertyValue(e, "boxSizing")
                              .toString()
                              .toLowerCase()
                        ) {
                          var p =
                            e.offsetWidth -
                            (parseFloat(
                              h.getPropertyValue(e, "borderLeftWidth")
                            ) || 0) -
                            (parseFloat(
                              h.getPropertyValue(e, "borderRightWidth")
                            ) || 0) -
                            (parseFloat(h.getPropertyValue(e, "paddingLeft")) ||
                              0) -
                            (parseFloat(
                              h.getPropertyValue(e, "paddingRight")
                            ) || 0);
                          return u(), p;
                        }
                      }
                      (l =
                        void 0 === x(e)
                          ? t.getComputedStyle(e, null)
                          : x(e).computedStyle
                          ? x(e).computedStyle
                          : (x(e).computedStyle = t.getComputedStyle(e, null))),
                        "borderColor" === r && (r = "borderTopColor"),
                        ("" !==
                          (a =
                            9 === n && "filter" === r
                              ? l.getPropertyValue(r)
                              : l[r]) &&
                          null !== a) ||
                          (a = e.style[r]),
                        u();
                    }
                    if ("auto" === a && /^(top|right|bottom|left)$/i.test(r)) {
                      var f = o(e, "position");
                      ("fixed" === f ||
                        ("absolute" === f && /top|left/i.test(r))) &&
                        (a = d(e).position()[r] + "px");
                    }
                    return a;
                  }
                  var s;
                  if (h.Hooks.registered[r]) {
                    var l = r,
                      u = h.Hooks.getRoot(l);
                    void 0 === a &&
                      (a = h.getPropertyValue(e, h.Names.prefixCheck(u)[0])),
                      h.Normalizations.registered[u] &&
                        (a = h.Normalizations.registered[u]("extract", e, a)),
                      (s = h.Hooks.extractValue(l, a));
                  } else if (h.Normalizations.registered[r]) {
                    var c, p;
                    "transform" !==
                      (c = h.Normalizations.registered[r]("name", e)) &&
                      ((p = o(e, h.Names.prefixCheck(c)[0])),
                      h.Values.isCSSNullValue(p) &&
                        h.Hooks.templates[r] &&
                        (p = h.Hooks.templates[r][1])),
                      (s = h.Normalizations.registered[r]("extract", e, p));
                  }
                  if (!/^[\d-]/.test(s)) {
                    var f = x(e);
                    if (f && f.isSVG && h.Names.SVGAttribute(r))
                      if (/^(height|width)$/i.test(r))
                        try {
                          s = e.getBBox()[r];
                        } catch (m) {
                          s = 0;
                        }
                      else s = e.getAttribute(r);
                    else s = o(e, h.Names.prefixCheck(r)[0]);
                  }
                  return (
                    h.Values.isCSSNullValue(s) && (s = 0),
                    g.debug >= 2 && console.log("Get " + r + ": " + s),
                    s
                  );
                },
                setPropertyValue: function (e, r, a, i, o) {
                  var s = r;
                  if ("scroll" === r)
                    o.container
                      ? (o.container["scroll" + o.direction] = a)
                      : "Left" === o.direction
                      ? t.scrollTo(a, o.alternateValue)
                      : t.scrollTo(o.alternateValue, a);
                  else if (
                    h.Normalizations.registered[r] &&
                    "transform" === h.Normalizations.registered[r]("name", e)
                  )
                    h.Normalizations.registered[r]("inject", e, a),
                      (s = "transform"),
                      (a = x(e).transformCache[r]);
                  else {
                    if (h.Hooks.registered[r]) {
                      var l = r,
                        u = h.Hooks.getRoot(r);
                      (i = i || h.getPropertyValue(e, u)),
                        (a = h.Hooks.injectValue(l, a, i)),
                        (r = u);
                    }
                    if (
                      (h.Normalizations.registered[r] &&
                        ((a = h.Normalizations.registered[r]("inject", e, a)),
                        (r = h.Normalizations.registered[r]("name", e))),
                      (s = h.Names.prefixCheck(r)[0]),
                      n <= 8)
                    )
                      try {
                        e.style[s] = a;
                      } catch (d) {
                        g.debug &&
                          console.log(
                            "Browser does not support [" +
                              a +
                              "] for [" +
                              s +
                              "]"
                          );
                      }
                    else {
                      var c = x(e);
                      c && c.isSVG && h.Names.SVGAttribute(r)
                        ? e.setAttribute(r, a)
                        : (e.style[s] = a);
                    }
                    g.debug >= 2 &&
                      console.log("Set " + r + " (" + s + "): " + a);
                  }
                  return [s, a];
                },
                flushTransformCache: function (e) {
                  var t = "",
                    r = x(e);
                  if (
                    (n || (g.State.isAndroid && !g.State.isChrome)) &&
                    r &&
                    r.isSVG
                  ) {
                    var a = function (t) {
                        return parseFloat(h.getPropertyValue(e, t));
                      },
                      i = {
                        translate: [a("translateX"), a("translateY")],
                        skewX: [a("skewX")],
                        skewY: [a("skewY")],
                        scale:
                          1 !== a("scale")
                            ? [a("scale"), a("scale")]
                            : [a("scaleX"), a("scaleY")],
                        rotate: [a("rotateZ"), 0, 0],
                      };
                    d.each(x(e).transformCache, function (e) {
                      /^translate/i.test(e)
                        ? (e = "translate")
                        : /^scale/i.test(e)
                        ? (e = "scale")
                        : /^rotate/i.test(e) && (e = "rotate"),
                        i[e] &&
                          ((t += e + "(" + i[e].join(" ") + ") "), delete i[e]);
                    });
                  } else {
                    var o, s;
                    d.each(x(e).transformCache, function (r) {
                      if (
                        ((o = x(e).transformCache[r]),
                        "transformPerspective" === r)
                      )
                        return (s = o), !0;
                      9 === n && "rotateZ" === r && (r = "rotate"),
                        (t += r + o + " ");
                    }),
                      s && (t = "perspective" + s + " " + t);
                  }
                  h.setPropertyValue(e, "transform", t);
                },
              });
              h.Hooks.register(),
                h.Normalizations.register(),
                (g.hook = function (e, t, r) {
                  var a;
                  return (
                    (e = c(e)),
                    d.each(e, function (e, i) {
                      if ((void 0 === x(i) && g.init(i), void 0 === r))
                        void 0 === a && (a = h.getPropertyValue(i, t));
                      else {
                        var n = h.setPropertyValue(i, t, r);
                        "transform" === n[0] && g.CSS.flushTransformCache(i),
                          (a = n);
                      }
                    }),
                    a
                  );
                });
              var y = function () {
                var e;
                function a() {
                  return i ? v.promise || null : n;
                }
                var i,
                  n,
                  o,
                  s,
                  l,
                  f,
                  m =
                    arguments[0] &&
                    (arguments[0].p ||
                      (d.isPlainObject(arguments[0].properties) &&
                        !arguments[0].properties.names) ||
                      p.isString(arguments[0].properties));
                p.isWrapped(this)
                  ? ((i = !1), (o = 0), (s = this), (n = this))
                  : ((i = !0),
                    (o = 1),
                    (s = m
                      ? arguments[0].elements || arguments[0].e
                      : arguments[0]));
                var v = { promise: null, resolver: null, rejecter: null };
                if (
                  (i &&
                    g.Promise &&
                    (v.promise = new g.Promise(function (e, t) {
                      (v.resolver = e), (v.rejecter = t);
                    })),
                  m
                    ? ((l = arguments[0].properties || arguments[0].p),
                      (f = arguments[0].options || arguments[0].o))
                    : ((l = arguments[o]), (f = arguments[o + 1])),
                  (s = c(s)))
                ) {
                  var b,
                    P = s.length,
                    k = 0;
                  if (
                    !/^(stop|finish|finishAll|pause|resume)$/i.test(l) &&
                    !d.isPlainObject(f)
                  ) {
                    var A = o + 1;
                    f = {};
                    for (var F = A; F < arguments.length; F++)
                      p.isArray(arguments[F]) ||
                      (!/^(fast|normal|slow)$/i.test(arguments[F]) &&
                        !/^\d/.test(arguments[F]))
                        ? p.isString(arguments[F]) || p.isArray(arguments[F])
                          ? (f.easing = arguments[F])
                          : p.isFunction(arguments[F]) &&
                            (f.complete = arguments[F])
                        : (f.duration = arguments[F]);
                  }
                  switch (l) {
                    case "scroll":
                      b = "scroll";
                      break;
                    case "reverse":
                      b = "reverse";
                      break;
                    case "pause":
                      var E = new Date().getTime();
                      return (
                        d.each(s, function (e, t) {
                          w(t, E);
                        }),
                        d.each(g.State.calls, function (e, t) {
                          var r = !1;
                          t &&
                            d.each(t[1], function (e, a) {
                              var i = void 0 === f ? "" : f;
                              return (
                                (!0 !== i &&
                                  t[2].queue !== i &&
                                  (void 0 !== f || !1 !== t[2].queue)) ||
                                (d.each(s, function (e, i) {
                                  if (i === a)
                                    return (
                                      (t[5] = { resume: !1 }), (r = !0), !1
                                    );
                                }),
                                !r && void 0)
                              );
                            });
                        }),
                        a()
                      );
                    case "resume":
                      return (
                        d.each(s, function (e, t) {
                          S(t);
                        }),
                        d.each(g.State.calls, function (e, t) {
                          var r = !1;
                          t &&
                            d.each(t[1], function (e, a) {
                              var i = void 0 === f ? "" : f;
                              return (
                                (!0 !== i &&
                                  t[2].queue !== i &&
                                  (void 0 !== f || !1 !== t[2].queue)) ||
                                !t[5] ||
                                (d.each(s, function (e, i) {
                                  if (i === a)
                                    return (t[5].resume = !0), (r = !0), !1;
                                }),
                                !r && void 0)
                              );
                            });
                        }),
                        a()
                      );
                    case "finish":
                    case "finishAll":
                    case "stop":
                      d.each(s, function (e, t) {
                        x(t) &&
                          x(t).delayTimer &&
                          (clearTimeout(x(t).delayTimer.setTimeout),
                          x(t).delayTimer.next && x(t).delayTimer.next(),
                          delete x(t).delayTimer),
                          "finishAll" !== l ||
                            (!0 !== f && !p.isString(f)) ||
                            (d.each(
                              d.queue(t, p.isString(f) ? f : ""),
                              function (e, t) {
                                p.isFunction(t) && t();
                              }
                            ),
                            d.queue(t, p.isString(f) ? f : "", []));
                      });
                      var N = [];
                      return (
                        d.each(g.State.calls, function (e, t) {
                          t &&
                            d.each(t[1], function (r, a) {
                              var i = void 0 === f ? "" : f;
                              if (
                                !0 !== i &&
                                t[2].queue !== i &&
                                (void 0 !== f || !1 !== t[2].queue)
                              )
                                return !0;
                              d.each(s, function (r, n) {
                                if (n === a)
                                  if (
                                    ((!0 === f || p.isString(f)) &&
                                      (d.each(
                                        d.queue(n, p.isString(f) ? f : ""),
                                        function (e, t) {
                                          p.isFunction(t) && t(null, !0);
                                        }
                                      ),
                                      d.queue(n, p.isString(f) ? f : "", [])),
                                    "stop" === l)
                                  ) {
                                    var o = x(n);
                                    o &&
                                      o.tweensContainer &&
                                      !1 !== i &&
                                      d.each(
                                        o.tweensContainer,
                                        function (e, t) {
                                          t.endValue = t.currentValue;
                                        }
                                      ),
                                      N.push(e);
                                  } else
                                    ("finish" !== l && "finishAll" !== l) ||
                                      (t[2].duration = 1);
                              });
                            });
                        }),
                        "stop" === l &&
                          (d.each(N, function (e, t) {
                            C(t, !0);
                          }),
                          v.promise && v.resolver(s)),
                        a()
                      );
                    default:
                      if (!d.isPlainObject(l) || p.isEmptyObject(l)) {
                        if (p.isString(l) && g.Redirects[l]) {
                          var H = (e = d.extend({}, f)).duration,
                            O = e.delay || 0;
                          return (
                            !0 === e.backwards &&
                              (s = d.extend(!0, [], s).reverse()),
                            d.each(s, function (t, r) {
                              parseFloat(e.stagger)
                                ? (e.delay = O + parseFloat(e.stagger) * t)
                                : p.isFunction(e.stagger) &&
                                  (e.delay = O + e.stagger.call(r, t, P)),
                                e.drag &&
                                  ((e.duration =
                                    parseFloat(H) ||
                                    (/^(callout|transition)/.test(l)
                                      ? 1e3
                                      : 400)),
                                  (e.duration = Math.max(
                                    e.duration *
                                      (e.backwards ? 1 - t / P : (t + 1) / P),
                                    0.75 * e.duration,
                                    200
                                  ))),
                                g.Redirects[l].call(
                                  r,
                                  r,
                                  e || {},
                                  t,
                                  P,
                                  s,
                                  v.promise ? v : void 0
                                );
                            }),
                            a()
                          );
                        }
                        var j =
                          "Velocity: First argument (" +
                          l +
                          ") was not a property map, a known action, or a registered redirect. Aborting.";
                        return (
                          v.promise
                            ? v.rejecter(new Error(j))
                            : t.console && console.log(j),
                          a()
                        );
                      }
                      b = "start";
                  }
                  var q = {
                      lastParent: null,
                      lastPosition: null,
                      lastFontSize: null,
                      lastPercentToPxWidth: null,
                      lastPercentToPxHeight: null,
                      lastEmToPx: null,
                      remToPx: null,
                      vwToPx: null,
                      vhToPx: null,
                    },
                    z = [];
                  d.each(s, function (e, t) {
                    p.isNode(t) && W(t, e);
                  }),
                    ((e = d.extend({}, g.defaults, f)).loop = parseInt(
                      e.loop,
                      10
                    ));
                  var L = 2 * e.loop - 1;
                  if (e.loop)
                    for (var R = 0; R < L; R++) {
                      var M = { delay: e.delay, progress: e.progress };
                      R === L - 1 &&
                        ((M.display = e.display),
                        (M.visibility = e.visibility),
                        (M.complete = e.complete)),
                        y(s, "reverse", M);
                    }
                  return a();
                }
                function W(e, a) {
                  var i,
                    n,
                    o = d.extend({}, g.defaults, f),
                    c = {};
                  switch (
                    (void 0 === x(e) && g.init(e),
                    parseFloat(o.delay) &&
                      !1 !== o.queue &&
                      d.queue(e, o.queue, function (t) {
                        g.velocityQueueEntryFlag = !0;
                        var r = g.State.delayedElements.count++;
                        g.State.delayedElements[r] = e;
                        var a,
                          i =
                            ((a = r),
                            function () {
                              (g.State.delayedElements[a] = !1), t();
                            });
                        (x(e).delayBegin = new Date().getTime()),
                          (x(e).delay = parseFloat(o.delay)),
                          (x(e).delayTimer = {
                            setTimeout: setTimeout(t, parseFloat(o.delay)),
                            next: i,
                          });
                      }),
                    o.duration.toString().toLowerCase())
                  ) {
                    case "fast":
                      o.duration = 200;
                      break;
                    case "normal":
                      o.duration = 400;
                      break;
                    case "slow":
                      o.duration = 600;
                      break;
                    default:
                      o.duration = parseFloat(o.duration) || 1;
                  }
                  function m(n) {
                    var m, y;
                    if (o.begin && 0 === k)
                      try {
                        o.begin.call(s, s);
                      } catch (X) {
                        setTimeout(function () {
                          throw X;
                        }, 1);
                      }
                    if ("scroll" === b) {
                      var w,
                        S,
                        C,
                        A = /^x$/i.test(o.axis) ? "Left" : "Top",
                        F = parseFloat(o.offset) || 0;
                      o.container
                        ? p.isWrapped(o.container) || p.isNode(o.container)
                          ? ((o.container = o.container[0] || o.container),
                            (C =
                              (w = o.container["scroll" + A]) +
                              d(e).position()[A.toLowerCase()] +
                              F))
                          : (o.container = null)
                        : ((w =
                            g.State.scrollAnchor[
                              g.State["scrollProperty" + A]
                            ]),
                          (S =
                            g.State.scrollAnchor[
                              g.State[
                                "scrollProperty" +
                                  ("Left" === A ? "Top" : "Left")
                              ]
                            ]),
                          (C = d(e).offset()[A.toLowerCase()] + F)),
                        (c = {
                          scroll: {
                            rootPropertyValue: !1,
                            startValue: w,
                            currentValue: w,
                            endValue: C,
                            unitType: "",
                            easing: o.easing,
                            scrollData: {
                              container: o.container,
                              direction: A,
                              alternateValue: S,
                            },
                          },
                          element: e,
                        }),
                        g.debug &&
                          console.log(
                            "tweensContainer (scroll): ",
                            c.scroll,
                            e
                          );
                    } else if ("reverse" === b) {
                      if (!(m = x(e))) return;
                      if (!m.tweensContainer) return void d.dequeue(e, o.queue);
                      for (var E in ("none" === m.opts.display &&
                        (m.opts.display = "auto"),
                      "hidden" === m.opts.visibility &&
                        (m.opts.visibility = "visible"),
                      (m.opts.loop = !1),
                      (m.opts.begin = null),
                      (m.opts.complete = null),
                      f.easing || delete o.easing,
                      f.duration || delete o.duration,
                      (o = d.extend({}, m.opts, o)),
                      (y = d.extend(!0, {}, m ? m.tweensContainer : null))))
                        if (y.hasOwnProperty(E) && "element" !== E) {
                          var N = y[E].startValue;
                          (y[E].startValue = y[E].currentValue = y[E].endValue),
                            (y[E].endValue = N),
                            p.isEmptyObject(f) || (y[E].easing = o.easing),
                            g.debug &&
                              console.log(
                                "reverse tweensContainer (" +
                                  E +
                                  "): " +
                                  JSON.stringify(y[E]),
                                e
                              );
                        }
                      c = y;
                    } else if ("start" === b) {
                      (m = x(e)) &&
                        m.tweensContainer &&
                        !0 === m.isAnimating &&
                        (y = m.tweensContainer);
                      var H = function (t, r) {
                          var i, n, s;
                          return (
                            p.isFunction(t) && (t = t.call(e, a, P)),
                            p.isArray(t)
                              ? ((i = t[0]),
                                (!p.isArray(t[1]) && /^[\d-]/.test(t[1])) ||
                                p.isFunction(t[1]) ||
                                h.RegEx.isHex.test(t[1])
                                  ? (s = t[1])
                                  : (p.isString(t[1]) &&
                                      !h.RegEx.isHex.test(t[1]) &&
                                      g.Easings[t[1]]) ||
                                    p.isArray(t[1])
                                  ? ((n = r ? t[1] : V(t[1], o.duration)),
                                    (s = t[2]))
                                  : (s = t[1] || t[2]))
                              : (i = t),
                            r || (n = n || o.easing),
                            p.isFunction(i) && (i = i.call(e, a, P)),
                            p.isFunction(s) && (s = s.call(e, a, P)),
                            [i || 0, n, s]
                          );
                        },
                        O = function (a, n) {
                          var s,
                            l = h.Hooks.getRoot(a),
                            u = !1,
                            f = n[0],
                            v = n[1],
                            b = n[2];
                          if (
                            (m && m.isSVG) ||
                            "tween" === l ||
                            !1 !== h.Names.prefixCheck(l)[1] ||
                            void 0 !== h.Normalizations.registered[l]
                          ) {
                            ((void 0 !== o.display &&
                              null !== o.display &&
                              "none" !== o.display) ||
                              (void 0 !== o.visibility &&
                                "hidden" !== o.visibility)) &&
                              /opacity|filter/.test(a) &&
                              !b &&
                              0 !== f &&
                              (b = 0),
                              o._cacheValues && y && y[a]
                                ? (void 0 === b &&
                                    (b = y[a].endValue + y[a].unitType),
                                  (u = m.rootPropertyValueCache[l]))
                                : h.Hooks.registered[a]
                                ? void 0 === b
                                  ? ((u = h.getPropertyValue(e, l)),
                                    (b = h.getPropertyValue(e, a, u)))
                                  : (u = h.Hooks.templates[l][1])
                                : void 0 === b &&
                                  (b = h.getPropertyValue(e, a));
                            var x,
                              w,
                              S,
                              P = !1,
                              k = function (e, t) {
                                var r, a;
                                return (
                                  (a = (t || "0")
                                    .toString()
                                    .toLowerCase()
                                    .replace(/[%A-z]+$/, function (e) {
                                      return (r = e), "";
                                    })),
                                  r || (r = h.Values.getUnitType(e)),
                                  [a, r]
                                );
                              };
                            if (b !== f && p.isString(b) && p.isString(f)) {
                              s = "";
                              var V = 0,
                                T = 0,
                                C = [],
                                A = [],
                                F = 0,
                                E = 0,
                                N = 0;
                              for (
                                b = h.Hooks.fixColors(b),
                                  f = h.Hooks.fixColors(f);
                                V < b.length && T < f.length;

                              ) {
                                var H = b[V],
                                  O = f[T];
                                if (/[\d\.-]/.test(H) && /[\d\.-]/.test(O)) {
                                  for (
                                    var j = H, z = O, L = ".", R = ".";
                                    ++V < b.length;

                                  ) {
                                    if ((H = b[V]) === L) L = "..";
                                    else if (!/\d/.test(H)) break;
                                    j += H;
                                  }
                                  for (; ++T < f.length; ) {
                                    if ((O = f[T]) === R) R = "..";
                                    else if (!/\d/.test(O)) break;
                                    z += O;
                                  }
                                  var M = h.Hooks.getUnit(b, V),
                                    W = h.Hooks.getUnit(f, T);
                                  if (
                                    ((V += M.length), (T += W.length), M === W)
                                  )
                                    j === z
                                      ? (s += j + M)
                                      : ((s +=
                                          "{" +
                                          C.length +
                                          (E ? "!" : "") +
                                          "}" +
                                          M),
                                        C.push(parseFloat(j)),
                                        A.push(parseFloat(z)));
                                  else {
                                    var $ = parseFloat(j),
                                      B = parseFloat(z);
                                    (s +=
                                      (F < 5 ? "calc" : "") +
                                      "(" +
                                      ($
                                        ? "{" + C.length + (E ? "!" : "") + "}"
                                        : "0") +
                                      M +
                                      " + " +
                                      (B
                                        ? "{" +
                                          (C.length + ($ ? 1 : 0)) +
                                          (E ? "!" : "") +
                                          "}"
                                        : "0") +
                                      W +
                                      ")"),
                                      $ && (C.push($), A.push(0)),
                                      B && (C.push(0), A.push(B));
                                  }
                                } else {
                                  if (H !== O) {
                                    F = 0;
                                    break;
                                  }
                                  (s += H),
                                    V++,
                                    T++,
                                    (0 === F && "c" === H) ||
                                    (1 === F && "a" === H) ||
                                    (2 === F && "l" === H) ||
                                    (3 === F && "c" === H) ||
                                    (F >= 4 && "(" === H)
                                      ? F++
                                      : ((F && F < 5) ||
                                          (F >= 4 && ")" === H && --F < 5)) &&
                                        (F = 0),
                                    (0 === E && "r" === H) ||
                                    (1 === E && "g" === H) ||
                                    (2 === E && "b" === H) ||
                                    (3 === E && "a" === H) ||
                                    (E >= 3 && "(" === H)
                                      ? (3 === E && "a" === H && (N = 1), E++)
                                      : N && "," === H
                                      ? ++N > 3 && (E = N = 0)
                                      : ((N && E < (N ? 5 : 4)) ||
                                          (E >= (N ? 4 : 3) &&
                                            ")" === H &&
                                            --E < (N ? 5 : 4))) &&
                                        (E = N = 0);
                                }
                              }
                              (V === b.length && T === f.length) ||
                                (g.debug &&
                                  console.error(
                                    'Trying to pattern match mis-matched strings ["' +
                                      f +
                                      '", "' +
                                      b +
                                      '"]'
                                  ),
                                (s = void 0)),
                                s &&
                                  (C.length
                                    ? (g.debug &&
                                        console.log(
                                          'Pattern found "' + s + '" -> ',
                                          C,
                                          A,
                                          "[" + b + "," + f + "]"
                                        ),
                                      (b = C),
                                      (f = A),
                                      (w = S = ""))
                                    : (s = void 0));
                            }
                            s ||
                              ((b = (x = k(a, b))[0]),
                              (S = x[1]),
                              (f = (x = k(a, f))[0].replace(
                                /^([+-\/*])=/,
                                function (e, t) {
                                  return (P = t), "";
                                }
                              )),
                              (w = x[1]),
                              (b = parseFloat(b) || 0),
                              (f = parseFloat(f) || 0),
                              "%" === w &&
                                (/^(fontSize|lineHeight)$/.test(a)
                                  ? ((f /= 100), (w = "em"))
                                  : /^scale/.test(a)
                                  ? ((f /= 100), (w = ""))
                                  : /(Red|Green|Blue)$/i.test(a) &&
                                    ((f = (f / 100) * 255), (w = ""))));
                            if (/[\/*]/.test(P)) w = S;
                            else if (S !== w && 0 !== b)
                              if (0 === f) w = S;
                              else {
                                i =
                                  i ||
                                  (function () {
                                    var a = {
                                        myParent: e.parentNode || r.body,
                                        position: h.getPropertyValue(
                                          e,
                                          "position"
                                        ),
                                        fontSize: h.getPropertyValue(
                                          e,
                                          "fontSize"
                                        ),
                                      },
                                      i =
                                        a.position === q.lastPosition &&
                                        a.myParent === q.lastParent,
                                      n = a.fontSize === q.lastFontSize;
                                    (q.lastParent = a.myParent),
                                      (q.lastPosition = a.position),
                                      (q.lastFontSize = a.fontSize);
                                    var o = {};
                                    if (n && i)
                                      (o.emToPx = q.lastEmToPx),
                                        (o.percentToPxWidth =
                                          q.lastPercentToPxWidth),
                                        (o.percentToPxHeight =
                                          q.lastPercentToPxHeight);
                                    else {
                                      var s =
                                        m && m.isSVG
                                          ? r.createElementNS(
                                              "http://www.w3.org/2000/svg",
                                              "rect"
                                            )
                                          : r.createElement("div");
                                      g.init(s),
                                        a.myParent.appendChild(s),
                                        d.each(
                                          [
                                            "overflow",
                                            "overflowX",
                                            "overflowY",
                                          ],
                                          function (e, t) {
                                            g.CSS.setPropertyValue(
                                              s,
                                              t,
                                              "hidden"
                                            );
                                          }
                                        ),
                                        g.CSS.setPropertyValue(
                                          s,
                                          "position",
                                          a.position
                                        ),
                                        g.CSS.setPropertyValue(
                                          s,
                                          "fontSize",
                                          a.fontSize
                                        ),
                                        g.CSS.setPropertyValue(
                                          s,
                                          "boxSizing",
                                          "content-box"
                                        ),
                                        d.each(
                                          [
                                            "minWidth",
                                            "maxWidth",
                                            "width",
                                            "minHeight",
                                            "maxHeight",
                                            "height",
                                          ],
                                          function (e, t) {
                                            g.CSS.setPropertyValue(
                                              s,
                                              t,
                                              "100%"
                                            );
                                          }
                                        ),
                                        g.CSS.setPropertyValue(
                                          s,
                                          "paddingLeft",
                                          "100em"
                                        ),
                                        (o.percentToPxWidth =
                                          q.lastPercentToPxWidth =
                                            (parseFloat(
                                              h.getPropertyValue(
                                                s,
                                                "width",
                                                null,
                                                !0
                                              )
                                            ) || 1) / 100),
                                        (o.percentToPxHeight =
                                          q.lastPercentToPxHeight =
                                            (parseFloat(
                                              h.getPropertyValue(
                                                s,
                                                "height",
                                                null,
                                                !0
                                              )
                                            ) || 1) / 100),
                                        (o.emToPx = q.lastEmToPx =
                                          (parseFloat(
                                            h.getPropertyValue(s, "paddingLeft")
                                          ) || 1) / 100),
                                        a.myParent.removeChild(s);
                                    }
                                    return (
                                      null === q.remToPx &&
                                        (q.remToPx =
                                          parseFloat(
                                            h.getPropertyValue(
                                              r.body,
                                              "fontSize"
                                            )
                                          ) || 16),
                                      null === q.vwToPx &&
                                        ((q.vwToPx =
                                          parseFloat(t.innerWidth) / 100),
                                        (q.vhToPx =
                                          parseFloat(t.innerHeight) / 100)),
                                      (o.remToPx = q.remToPx),
                                      (o.vwToPx = q.vwToPx),
                                      (o.vhToPx = q.vhToPx),
                                      g.debug >= 1 &&
                                        console.log(
                                          "Unit ratios: " + JSON.stringify(o),
                                          e
                                        ),
                                      o
                                    );
                                  })();
                                var I =
                                  /margin|padding|left|right|width|text|word|letter/i.test(
                                    a
                                  ) ||
                                  /X$/.test(a) ||
                                  "x" === a
                                    ? "x"
                                    : "y";
                                switch (S) {
                                  case "%":
                                    b *=
                                      "x" === I
                                        ? i.percentToPxWidth
                                        : i.percentToPxHeight;
                                    break;
                                  case "px":
                                    break;
                                  default:
                                    b *= i[S + "ToPx"];
                                }
                                switch (w) {
                                  case "%":
                                    b *=
                                      1 /
                                      ("x" === I
                                        ? i.percentToPxWidth
                                        : i.percentToPxHeight);
                                    break;
                                  case "px":
                                    break;
                                  default:
                                    b *= 1 / i[w + "ToPx"];
                                }
                              }
                            switch (P) {
                              case "+":
                                f = b + f;
                                break;
                              case "-":
                                f = b - f;
                                break;
                              case "*":
                                f *= b;
                                break;
                              case "/":
                                f = b / f;
                            }
                            (c[a] = {
                              rootPropertyValue: u,
                              startValue: b,
                              currentValue: b,
                              endValue: f,
                              unitType: w,
                              easing: v,
                            }),
                              s && (c[a].pattern = s),
                              g.debug &&
                                console.log(
                                  "tweensContainer (" +
                                    a +
                                    "): " +
                                    JSON.stringify(c[a]),
                                  e
                                );
                          } else
                            g.debug &&
                              console.log(
                                "Skipping [" +
                                  l +
                                  "] due to a lack of browser support."
                              );
                        };
                      for (var j in l)
                        if (l.hasOwnProperty(j)) {
                          var L = h.Names.camelCase(j),
                            R = H(l[j]);
                          if (u(h.Lists.colors)) {
                            var M = R[0],
                              W = R[1],
                              $ = R[2];
                            if (h.RegEx.isHex.test(M)) {
                              for (
                                var B = ["Red", "Green", "Blue"],
                                  I = h.Values.hexToRgb(M),
                                  D = $ ? h.Values.hexToRgb($) : void 0,
                                  G = 0;
                                G < B.length;
                                G++
                              ) {
                                var Q = [I[G]];
                                W && Q.push(W),
                                  void 0 !== D && Q.push(D[G]),
                                  O(L + B[G], Q);
                              }
                              continue;
                            }
                          }
                          O(L, R);
                        }
                      c.element = e;
                    }
                    c.element &&
                      (h.Values.addClass(e, "velocity-animating"),
                      z.push(c),
                      (m = x(e)) &&
                        ("" === o.queue &&
                          ((m.tweensContainer = c), (m.opts = o)),
                        (m.isAnimating = !0)),
                      k === P - 1
                        ? (g.State.calls.push([
                            z,
                            s,
                            o,
                            null,
                            v.resolver,
                            null,
                            0,
                          ]),
                          !1 === g.State.isTicking &&
                            ((g.State.isTicking = !0), T()))
                        : k++);
                  }
                  if (
                    (!1 !== g.mock &&
                      (!0 === g.mock
                        ? (o.duration = o.delay = 1)
                        : ((o.duration *= parseFloat(g.mock) || 1),
                          (o.delay *= parseFloat(g.mock) || 1))),
                    (o.easing = V(o.easing, o.duration)),
                    o.begin && !p.isFunction(o.begin) && (o.begin = null),
                    o.progress &&
                      !p.isFunction(o.progress) &&
                      (o.progress = null),
                    o.complete &&
                      !p.isFunction(o.complete) &&
                      (o.complete = null),
                    void 0 !== o.display &&
                      null !== o.display &&
                      ((o.display = o.display.toString().toLowerCase()),
                      "auto" === o.display &&
                        (o.display = g.CSS.Values.getDisplayType(e))),
                    void 0 !== o.visibility &&
                      null !== o.visibility &&
                      (o.visibility = o.visibility.toString().toLowerCase()),
                    (o.mobileHA =
                      o.mobileHA && g.State.isMobile && !g.State.isGingerbread),
                    !1 === o.queue)
                  )
                    if (o.delay) {
                      var y = g.State.delayedElements.count++;
                      g.State.delayedElements[y] = e;
                      var w =
                        ((n = y),
                        function () {
                          (g.State.delayedElements[n] = !1), m();
                        });
                      (x(e).delayBegin = new Date().getTime()),
                        (x(e).delay = parseFloat(o.delay)),
                        (x(e).delayTimer = {
                          setTimeout: setTimeout(m, parseFloat(o.delay)),
                          next: w,
                        });
                    } else m();
                  else
                    d.queue(e, o.queue, function (e, t) {
                      if (!0 === t) return v.promise && v.resolver(s), !0;
                      (g.velocityQueueEntryFlag = !0), m();
                    });
                  ("" !== o.queue && "fx" !== o.queue) ||
                    "inprogress" === d.queue(e)[0] ||
                    d.dequeue(e);
                }
                v.promise &&
                  (l && f && !1 === f.promiseRejectEmpty
                    ? v.resolver()
                    : v.rejecter());
              };
              (g = d.extend(y, g)).animate = y;
              var v = t.requestAnimationFrame || o;
              if (!g.State.isMobile && void 0 !== r.hidden) {
                var b = function () {
                  r.hidden
                    ? ((v = function (e) {
                        return setTimeout(function () {
                          e(!0);
                        }, 16);
                      }),
                      T())
                    : (v = t.requestAnimationFrame || o);
                };
                b(), r.addEventListener("visibilitychange", b);
              }
              return (
                (e.Velocity = g),
                e !== t &&
                  ((e.fn.velocity = y), (e.fn.velocity.defaults = g.defaults)),
                d.each(["Down", "Up"], function (e, t) {
                  g.Redirects["slide" + t] = function (e, r, a, i, n, o) {
                    var s = d.extend({}, r),
                      l = s.begin,
                      u = s.complete,
                      c = {},
                      p = {
                        height: "",
                        marginTop: "",
                        marginBottom: "",
                        paddingTop: "",
                        paddingBottom: "",
                      };
                    void 0 === s.display &&
                      (s.display =
                        "Down" === t
                          ? "inline" === g.CSS.Values.getDisplayType(e)
                            ? "inline-block"
                            : "block"
                          : "none"),
                      (s.begin = function () {
                        for (var r in (0 === a && l && l.call(n, n), p))
                          if (p.hasOwnProperty(r)) {
                            c[r] = e.style[r];
                            var i = h.getPropertyValue(e, r);
                            p[r] = "Down" === t ? [i, 0] : [0, i];
                          }
                        (c.overflow = e.style.overflow),
                          (e.style.overflow = "hidden");
                      }),
                      (s.complete = function () {
                        for (var t in c)
                          c.hasOwnProperty(t) && (e.style[t] = c[t]);
                        a === i - 1 && (u && u.call(n, n), o && o.resolver(n));
                      }),
                      g(e, p, s);
                  };
                }),
                d.each(["In", "Out"], function (e, t) {
                  g.Redirects["fade" + t] = function (e, r, a, i, n, o) {
                    var s = d.extend({}, r),
                      l = s.complete,
                      u = {
                        opacity: "In" === t ? 1 : 0,
                      };
                    0 !== a && (s.begin = null),
                      (s.complete =
                        a !== i - 1
                          ? null
                          : function () {
                              l && l.call(n, n), o && o.resolver(n);
                            }),
                      void 0 === s.display &&
                        (s.display = "In" === t ? "auto" : "none"),
                      g(this, u, s);
                  };
                }),
                g
              );
            }
            function x(e) {
              var t = d.data(e, "velocity");
              return null === t ? void 0 : t;
            }
            function w(e, t) {
              var r = x(e);
              r &&
                r.delayTimer &&
                !r.delayPaused &&
                ((r.delayRemaining = r.delay - t + r.delayBegin),
                (r.delayPaused = !0),
                clearTimeout(r.delayTimer.setTimeout));
            }
            function S(e, t) {
              var r = x(e);
              r &&
                r.delayTimer &&
                r.delayPaused &&
                ((r.delayPaused = !1),
                (r.delayTimer.setTimeout = setTimeout(
                  r.delayTimer.next,
                  r.delayRemaining
                )));
            }
            function P(e) {
              return function (t) {
                return Math.round(t * e) * (1 / e);
              };
            }
            function k(e, r, a, i) {
              var n = 4,
                o = 0.001,
                s = 1e-7,
                l = 10,
                u = 11,
                c = 1 / (u - 1),
                d = "Float32Array" in t;
              if (4 !== arguments.length) return !1;
              for (var p = 0; p < 4; ++p)
                if (
                  "number" != typeof arguments[p] ||
                  isNaN(arguments[p]) ||
                  !isFinite(arguments[p])
                )
                  return !1;
              (e = Math.min(e, 1)),
                (a = Math.min(a, 1)),
                (e = Math.max(e, 0)),
                (a = Math.max(a, 0));
              var f = d ? new Float32Array(u) : new Array(u);
              function g(e, t) {
                return 1 - 3 * t + 3 * e;
              }
              function m(e, t) {
                return 3 * t - 6 * e;
              }
              function h(e) {
                return 3 * e;
              }
              function y(e, t, r) {
                return ((g(t, r) * e + m(t, r)) * e + h(t)) * e;
              }
              function v(e, t, r) {
                return 3 * g(t, r) * e * e + 2 * m(t, r) * e + h(t);
              }
              function b(t, r) {
                for (var i = 0; i < n; ++i) {
                  var o = v(r, e, a);
                  if (0 === o) return r;
                  r -= (y(r, e, a) - t) / o;
                }
                return r;
              }
              function x() {
                for (var t = 0; t < u; ++t) f[t] = y(t * c, e, a);
              }
              function w(t, r, i) {
                var n,
                  o,
                  u = 0;
                do {
                  (n = y((o = r + (i - r) / 2), e, a) - t) > 0
                    ? (i = o)
                    : (r = o);
                } while (Math.abs(n) > s && ++u < l);
                return o;
              }
              function S(t) {
                for (var r = 0, i = 1, n = u - 1; i !== n && f[i] <= t; ++i)
                  r += c;
                --i;
                var s = r + ((t - f[i]) / (f[i + 1] - f[i])) * c,
                  l = v(s, e, a);
                return l >= o ? b(t, s) : 0 === l ? s : w(t, r, r + c);
              }
              var P = !1;
              function k() {
                (P = !0), (e === r && a === i) || x();
              }
              var V = function (t) {
                return (
                  P || k(),
                  e === r && a === i
                    ? t
                    : 0 === t
                    ? 0
                    : 1 === t
                    ? 1
                    : y(S(t), r, i)
                );
              };
              V.getControlPoints = function () {
                return [
                  { x: e, y: r },
                  { x: a, y: i },
                ];
              };
              var T = "generateBezier(" + [e, r, a, i] + ")";
              return (
                (V.toString = function () {
                  return T;
                }),
                V
              );
            }
            function V(e, t) {
              var r = e;
              return (
                p.isString(e)
                  ? g.Easings[e] || (r = !1)
                  : (r =
                      p.isArray(e) && 1 === e.length
                        ? P.apply(null, e)
                        : p.isArray(e) && 2 === e.length
                        ? m.apply(null, e.concat([t]))
                        : !(!p.isArray(e) || 4 !== e.length) &&
                          k.apply(null, e)),
                !1 === r &&
                  (r = g.Easings[g.defaults.easing]
                    ? g.defaults.easing
                    : "swing"),
                r
              );
            }
            function T(e) {
              if (e) {
                var t = g.timestamp && !0 !== e ? e : s.now(),
                  r = g.State.calls.length;
                r > 1e4 &&
                  ((g.State.calls = (function (e) {
                    for (var t = -1, r = e ? e.length : 0, a = []; ++t < r; ) {
                      var i = e[t];
                      i && a.push(i);
                    }
                    return a;
                  })(g.State.calls)),
                  (r = g.State.calls.length));
                for (var a = 0; a < r; a++)
                  if (g.State.calls[a]) {
                    var i = g.State.calls[a],
                      o = i[0],
                      l = i[2],
                      u = i[3],
                      c = !!u,
                      f = null,
                      m = i[5],
                      y = i[6];
                    if ((u || (u = g.State.calls[a][3] = t - 16), m)) {
                      if (!0 !== m.resume) continue;
                      (u = i[3] = Math.round(t - y - 16)), (i[5] = null);
                    }
                    y = i[6] = t - u;
                    for (
                      var b = Math.min(y / l.duration, 1), w = 0, S = o.length;
                      w < S;
                      w++
                    ) {
                      var P = o[w],
                        k = P.element;
                      if (x(k)) {
                        var V = !1;
                        if (
                          void 0 !== l.display &&
                          null !== l.display &&
                          "none" !== l.display
                        ) {
                          if ("flex" === l.display) {
                            d.each(
                              [
                                "-webkit-box",
                                "-moz-box",
                                "-ms-flexbox",
                                "-webkit-flex",
                              ],
                              function (e, t) {
                                h.setPropertyValue(k, "display", t);
                              }
                            );
                          }
                          h.setPropertyValue(k, "display", l.display);
                        }
                        for (var A in (void 0 !== l.visibility &&
                          "hidden" !== l.visibility &&
                          h.setPropertyValue(k, "visibility", l.visibility),
                        P))
                          if (P.hasOwnProperty(A) && "element" !== A) {
                            var F,
                              E = P[A],
                              N = p.isString(E.easing)
                                ? g.Easings[E.easing]
                                : E.easing;
                            if (p.isString(E.pattern)) {
                              var H =
                                1 === b
                                  ? function (e, t, r) {
                                      var a = E.endValue[t];
                                      return r ? Math.round(a) : a;
                                    }
                                  : function (e, t, r) {
                                      var a = E.startValue[t],
                                        i = E.endValue[t] - a,
                                        n = a + i * N(b, l, i);
                                      return r ? Math.round(n) : n;
                                    };
                              F = E.pattern.replace(/{(\d+)(!)?}/g, H);
                            } else if (1 === b) F = E.endValue;
                            else {
                              var O = E.endValue - E.startValue;
                              F = E.startValue + O * N(b, l, O);
                            }
                            if (!c && F === E.currentValue) continue;
                            if (((E.currentValue = F), "tween" === A)) f = F;
                            else {
                              var j;
                              if (h.Hooks.registered[A]) {
                                j = h.Hooks.getRoot(A);
                                var q = x(k).rootPropertyValueCache[j];
                                q && (E.rootPropertyValue = q);
                              }
                              var z = h.setPropertyValue(
                                k,
                                A,
                                E.currentValue +
                                  (n < 9 && 0 === parseFloat(F)
                                    ? ""
                                    : E.unitType),
                                E.rootPropertyValue,
                                E.scrollData
                              );
                              h.Hooks.registered[A] &&
                                (h.Normalizations.registered[j]
                                  ? (x(k).rootPropertyValueCache[j] =
                                      h.Normalizations.registered[j](
                                        "extract",
                                        null,
                                        z[1]
                                      ))
                                  : (x(k).rootPropertyValueCache[j] = z[1])),
                                "transform" === z[0] && (V = !0);
                            }
                          }
                        l.mobileHA &&
                          void 0 === x(k).transformCache.translate3d &&
                          ((x(k).transformCache.translate3d =
                            "(0px, 0px, 0px)"),
                          (V = !0)),
                          V && h.flushTransformCache(k);
                      }
                    }
                    void 0 !== l.display &&
                      "none" !== l.display &&
                      (g.State.calls[a][2].display = !1),
                      void 0 !== l.visibility &&
                        "hidden" !== l.visibility &&
                        (g.State.calls[a][2].visibility = !1),
                      l.progress &&
                        l.progress.call(
                          i[1],
                          i[1],
                          b,
                          Math.max(0, u + l.duration - t),
                          u,
                          f
                        ),
                      1 === b && C(a);
                  }
              }
              g.State.isTicking && v(T);
            }
            function C(e, t) {
              if (!g.State.calls[e]) return !1;
              for (
                var r = g.State.calls[e][0],
                  a = g.State.calls[e][1],
                  i = g.State.calls[e][2],
                  n = g.State.calls[e][4],
                  o = !1,
                  s = 0,
                  l = r.length;
                s < l;
                s++
              ) {
                var u = r[s].element;
                t ||
                  i.loop ||
                  ("none" === i.display &&
                    h.setPropertyValue(u, "display", i.display),
                  "hidden" === i.visibility &&
                    h.setPropertyValue(u, "visibility", i.visibility));
                var c = x(u);
                if (
                  !0 !== i.loop &&
                  (void 0 === d.queue(u)[1] ||
                    !/\.velocityQueueEntryFlag/i.test(d.queue(u)[1])) &&
                  c
                ) {
                  (c.isAnimating = !1), (c.rootPropertyValueCache = {});
                  var p = !1;
                  d.each(h.Lists.transforms3D, function (e, t) {
                    var r = /^scale/.test(t) ? 1 : 0,
                      a = c.transformCache[t];
                    void 0 !== c.transformCache[t] &&
                      new RegExp("^\\(" + r + "[^.]").test(a) &&
                      ((p = !0), delete c.transformCache[t]);
                  }),
                    i.mobileHA &&
                      ((p = !0), delete c.transformCache.translate3d),
                    p && h.flushTransformCache(u),
                    h.Values.removeClass(u, "velocity-animating");
                }
                if (!t && i.complete && !i.loop && s === l - 1)
                  try {
                    i.complete.call(a, a);
                  } catch (y) {
                    setTimeout(function () {
                      throw y;
                    }, 1);
                  }
                n && !0 !== i.loop && n(a),
                  c &&
                    !0 === i.loop &&
                    !t &&
                    (d.each(c.tweensContainer, function (e, t) {
                      if (
                        /^rotate/.test(e) &&
                        (parseFloat(t.startValue) - parseFloat(t.endValue)) %
                          360 ==
                          0
                      ) {
                        var r = t.startValue;
                        (t.startValue = t.endValue), (t.endValue = r);
                      }
                      /^backgroundPosition/.test(e) &&
                        100 === parseFloat(t.endValue) &&
                        "%" === t.unitType &&
                        ((t.endValue = 0), (t.startValue = 100));
                    }),
                    g(u, "reverse", { loop: !0, delay: i.delay })),
                  !1 !== i.queue && d.dequeue(u, i.queue);
              }
              g.State.calls[e] = !1;
              for (var f = 0, m = g.State.calls.length; f < m; f++)
                if (!1 !== g.State.calls[f]) {
                  o = !0;
                  break;
                }
              !1 === o &&
                ((g.State.isTicking = !1),
                delete g.State.calls,
                (g.State.calls = []));
            }
            jQuery.fn.velocity = jQuery.fn.animate;
          })(
            window.jQuery || window.Zepto || window,
            window,
            window ? window.document : void 0
          );
        });
    },
  },
]);
