(window.webpackJsonp = window.webpackJsonp || []).push([
  ["chart-widget-gui"],
  {
    "+jnJ": function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return s;
      }),
        i.d(e, "b", function () {
          return a;
        });
      i("YFKU"), i("EsMY");
      var s,
        o = i("m/cY"),
        n = i("Vdly");
      function l(t) {
        return t === s.AlwaysOn || t === s.AlwaysOff ? t : s.VisibleOnMouseOver;
      }
      function a(t, e) {
        var i, a;
        function r() {
          if (!i) {
            i = Object(o.a)();
            var s = n.getValue(t);
            void 0 === s && void 0 !== e && (s = n.getValue(e)),
              i.setValue(l(s)),
              i.subscribe(i, function (e) {
                n.setValue(t, l(e.value()));
              });
          }
          return i;
        }
        return {
          property: r,
          availableValues: function () {
            return [
              {
                value: s.VisibleOnMouseOver,
                title: window.t("Visible on Mouse Over"),
              },
              { value: s.AlwaysOn, title: window.t("Always Visible") },
              { value: s.AlwaysOff, title: window.t("Always Invisible") },
            ];
          },
          actualBehavior: function () {
            if (!a) {
              a = Object(o.a)();
              var t = r(),
                e = function () {
                  var e = t.value();
                  e !== s.AlwaysOn &&
                    e !== s.AlwaysOff &&
                    (e = Modernizr.mobiletouch
                      ? s.AlwaysOn
                      : s.VisibleOnMouseOver),
                    a && a.setValue(e);
                };
              t.subscribe(a, e), e();
            }
            return a;
          },
        };
      }
      !(function (t) {
        (t.AlwaysOn = "alwaysOn"),
          (t.VisibleOnMouseOver = "visibleOnMouseOver"),
          (t.AlwaysOff = "alwaysOff");
      })(s || (s = {}));
    },
    "/NcV": function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.5 1.5l5 5.5-5 5.5"/></svg>';
    },
    "0jws": function (t, e, i) {
      t.exports = {
        blockHidden: "blockHidden-pECc1q1w",
        "pane-button": "pane-button-3IbFaPrJ",
      };
    },
    "1ANp": function (t, e, i) {
      "use strict";
      i.d(e, "c", function () {
        return n;
      }),
        i.d(e, "d", function () {
          return l;
        }),
        i.d(e, "b", function () {
          return a;
        }),
        i.d(e, "a", function () {
          return r;
        });
      var s,
        o = i("+jnJ"),
        n = "NavigationButtons.visibility",
        l = (s = Object(o.b)(n)).property,
        a = s.availableValues,
        r = s.actualBehavior;
    },
    "1Wf8": function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M3.5 2.8a.7.7 0 0 0-.7.7V6H1.2V3.5a2.3 2.3 0 0 1 2.3-2.3h11a2.3 2.3 0 0 1 2.3 2.3V6h-1.6V3.5a.7.7 0 0 0-.7-.7h-11z" class="bracket-up"/><path fill="currentColor" d="M3.5 15.2a.7.7 0 0 1-.7-.7V12H1.2v2.5a2.3 2.3 0 0 0 2.3 2.3h11a2.3 2.3 0 0 0 2.3-2.3V12h-1.6v2.5a.7.7 0 0 1-.7.7h-11z" class="bracket-down"/></svg>';
    },
    "25b6": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return n;
      }),
        i.d(e, "c", function () {
          return l;
        }),
        i.d(e, "a", function () {
          return a;
        });
      var s = /[<"'&>]/g,
        o = function (t) {
          return "&#" + t.charCodeAt(0) + ";";
        };
      function n(t) {
        return t.replace(s, o);
      }
      function l(t) {
        return void 0 === t && (t = ""), t.replace(/\s+/g, "");
      }
      function a(t) {
        return (
          void 0 === t && (t = ""),
          t.replace(/\b\w/g, function (t) {
            return t.toUpperCase();
          })
        );
      }
    },
    "2CEX": function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="24" height="22" fill="none"><path fill="currentColor" fillRule="evenodd" clip-rule="evenodd" d="M6 6.5A2.5 2.5 0 0 1 8.5 4H10v1H8.5C7.67 5 7 5.67 7 6.5v1.15a3.5 3.5 0 0 1-1.93 3.13l-.45.22.45.22A3.5 3.5 0 0 1 7 14.35v1.15c0 .83.67 1.5 1.5 1.5H10v1H8.5A2.5 2.5 0 0 1 6 15.5v-1.15a2.5 2.5 0 0 0-1.38-2.23l-1.34-.67a.5.5 0 0 1 0-.9l1.34-.67A2.5 2.5 0 0 0 6 7.65V6.5zM15.5 5H14V4h1.5A2.5 2.5 0 0 1 18 6.5v1.15c0 .94.54 1.8 1.38 2.23l1.34.67a.5.5 0 0 1 0 .9l-1.34.67A2.5 2.5 0 0 0 18 14.35v1.15a2.5 2.5 0 0 1-2.5 2.5H14v-1h1.5c.83 0 1.5-.67 1.5-1.5v-1.15a3.5 3.5 0 0 1 1.93-3.13l.45-.22-.45-.22A3.5 3.5 0 0 1 17 7.65V6.5c0-.83-.67-1.5-1.5-1.5z"/></svg>';
    },
    "5Alx": function (t, e, i) {
      t.exports = {
        marginlegendhoriz: "4px",
        legend: "legend-29zvAld0",
        item: "item-3eXPhOmy",
        withAction: "withAction-1y86Ymm9",
        selected: "selected-2qw9PFUJ",
        last: "last-3Xus0HXW",
        text: "text-1pYqyE6B",
        noWrapWrapper: "noWrapWrapper-AC879h-w",
        noWrap: "noWrap-ODIQgNap",
        series: "series-12hzsxbp",
        valuesAdditionalWrapper: "valuesAdditionalWrapper-3BfAIuML",
        valueItem: "valueItem-3JDGGSt_",
        valueTitle: "valueTitle-1myNPdtH",
        valueValue: "valueValue-3kA0oJs5",
        valuesWrapper: "valuesWrapper-1ukbb5SP",
        directionColumn: "directionColumn-abL_Vsle",
        titleWrapper: "titleWrapper-1Zs2rjQ6",
        button: "button-22Ex8G2W",
        statusesWrapper: "statusesWrapper-GnubQvDb",
        buttonsWrapper: "buttonsWrapper-3eBZpnXm",
        buttons: "buttons-1-XhYDHM",
        noActions: "noActions-1D515O5o",
        title: "title-bcHj6pEn",
        title2nd: "title2nd-2igtq1cH",
        disabled: "disabled-3P6bUcMx",
        withCustomTextColor: "withCustomTextColor-Pw_dabsC",
        study: "study-lgC0tuTJ",
        title1st: "title1st-2at68hKe",
        hideValues: "hideValues-3JtC3-Os",
        has5Buttons: "has5Buttons-3tuydZU5",
        stayInHoveredMode: "stayInHoveredMode-3K55nNni",
        withTail: "withTail-2tfD0t7T",
        loading: "loading-37LPn65g",
        loader: "loader-iCjkbLoX",
        withDot: "withDot-VrJCTK--",
        title3rd: "title3rd-2bpagZ7H",
        title4th: "title4th-28_-ZX9R",
        miniHidden2Title: "miniHidden2Title-1xHUL0G8",
        microHidden2Title: "microHidden2Title-37EAZYGX",
        hidden3Title: "hidden3Title-22u6NoOK",
        flagged: "flagged-3lOrkL__",
        medium: "medium-2Vr6MA2I",
        minimized: "minimized-25_VM9I8",
        micro: "micro-1-90nTmg",
        onlyOneButtonCanBeStick: "onlyOneButtonCanBeStick-16Vrffc6",
        touchMode: "touchMode-2jC98z1-",
        buttonIcon: "buttonIcon-2lrp9MHZ",
        flag: "flag-1kqFt7GH",
        invisibleHover: "invisibleHover-qowat1V5",
        eye: "eye-3mqNMkLJ",
        hiddenLoading: "hiddenLoading-hcuRRcWh",
        "eye-animation": "eye-animation-1pyfCZvS",
        markerContainer: "markerContainer-3MnDLQVD",
        flagWrapper: "flagWrapper-14Sd7MtI",
        sourcesWrapper: "sourcesWrapper-2JcXD9TK",
        newCollapser: "newCollapser-1F6pNRDi",
        sources: "sources-6Hp4M7li",
        toggler: "toggler-_SUZ7r_5 pane-button-3IbFaPrJ",
        counter: "counter-1hG1zy7A",
        iconArrow: "iconArrow-3q7vxxnz",
        objectTree: "objectTree-2tLil0dm",
        onlyOneSourceShown: "onlyOneSourceShown-1dCmMKoj",
        closed: "closed-1Sz6CztG",
        objectsTreeCanBeShown: "objectsTreeCanBeShown-2R_D8NJP",
      };
    },
    "61S9": function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="30" height="24" fill="none"><g fill="currentColor" fillRule="evenodd" clip-rule="evenodd" class="normal-eye"><path d="M18 7.91C16.7 6.5 14.7 5 12 5S7.3 6.49 6 7.91C6 7.91 4 10 4 11s2 3.09 2 3.09C7.3 15.5 9.3 17 12 17s4.7-1.49 6-2.91c0 0 2-2.09 2-3.09s-2-3.09-2-3.09zm-11.26 5.5C7.94 14.74 9.7 16 12 16s4.05-1.26 5.25-2.59c0 0 1.75-1.91 1.75-2.41 0-.5-1.75-2.41-1.75-2.41C16.05 7.26 14.3 6 12 6S7.95 7.26 6.74 8.59C6.74 8.59 5 10.5 5 11c0 .5 1.74 2.41 1.74 2.41z"/><path d="M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></g><g fill="currentColor" fillRule="evenodd" clip-rule="evenodd" class="crossed-eye"><path d="M8.85 16.27c.92.44 1.97.73 3.15.73 2.7 0 4.7-1.49 6-2.91 0 0 2-2.09 2-3.09s-2-3.09-2-3.09l-.39-.4-.7.7.34.38S19 10.5 19 11c0 .5-1.75 2.41-1.75 2.41C16.05 14.74 14.3 16 12 16c-.88 0-1.68-.18-2.4-.48l-.75.75zM7.1 13.78l-.36-.37S5 11.5 5 11c0-.5 1.74-2.41 1.74-2.41C7.94 7.26 9.7 6 12 6c.88 0 1.68.18 2.4.48l.75-.75A7.17 7.17 0 0 0 12 5C9.3 5 7.3 6.49 6 7.91 6 7.91 4 10 4 11s2 3.09 2 3.09l.39.4.7-.7z"/><path d="M11.22 13.9a3 3 0 0 0 3.68-3.68l-.9.9A2 2 0 0 1 12.13 13l-.9.9zm.66-4.9A2 2 0 0 0 10 10.88l-.9.9a3 3 0 0 1 3.68-3.68l-.9.9zM5.65 16.65l12-12 .7.7-12 12-.7-.7z"/></g><g class="loading-eye"><path fill="currentColor" fillRule="evenodd" clip-rule="evenodd" d="M18 7.91C16.7 6.5 14.7 5 12 5S7.3 6.49 6 7.91C6 7.91 4 10 4 11s2 3.09 2 3.09C7.3 15.5 9.3 17 12 17s4.7-1.49 6-2.91c0 0 2-2.09 2-3.09s-2-3.09-2-3.09zm-11.26 5.5C7.94 14.74 9.7 16 12 16s4.05-1.26 5.25-2.59c0 0 1.75-1.91 1.75-2.41 0-.5-1.75-2.41-1.75-2.41C16.05 7.26 14.3 6 12 6S7.95 7.26 6.74 8.59C6.74 8.59 5 10.5 5 11c0 .5 1.74 2.41 1.74 2.41z"/></g><g class="animated-loading-eye"><path stroke="currentColor" stroke-linecap="round" d="M14.5 11a2.5 2.5 0 1 0-2.5 2.5"/></g></svg>';
    },
    "6dGu": function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M3.5 5.58c.24-.28.65-.3.92-.07L7.5 8.14l3.08-2.63a.65.65 0 1 1 .84.98L7.5 9.86 3.58 6.49a.65.65 0 0 1-.07-.91z"/></svg>';
    },
    "94TV": function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.5 1.5l5 5.5-5 5.5M3 4l2.5 3L3 10"/></svg>';
    },
    "956S": function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><circle fill="currentColor" cx="15" cy="9" r="1.5"/><circle fill="currentColor" cx="9" cy="9" r="1.5"/><circle fill="currentColor" cx="3" cy="9" r="1.5"/></svg>';
    },
    "9Crk": function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M13.4 5.9c-.41 1.62-1.16 2.43-2.25 2.43-.52 0-1.25-.15-2.2-.45-.93-.3-1.58-.45-1.96-.45-.55 0-.98.3-1.27.9H4.66c.1-.67.36-1.24.76-1.71.4-.48.86-.72 1.4-.72.56 0 1.31.16 2.27.46.95.3 1.62.45 2.01.45.64 0 1.06-.3 1.27-.9h1.03zm0 3.87c-.41 1.62-1.16 2.43-2.25 2.43-.52 0-1.25-.15-2.2-.45-.93-.3-1.58-.46-1.96-.46-.55 0-.98.3-1.27.9H4.66c.1-.67.36-1.24.76-1.7.4-.48.86-.72 1.4-.72.56 0 1.31.15 2.27.46.95.3 1.62.44 2.01.44.64 0 1.06-.3 1.27-.9h1.03z"/></svg>';
    },
    "9lPX": function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><rect width="10" height="4" fill="currentColor" rx="2" x="4" y="7"/></svg>';
    },
    AH3n: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M13 12.78V5.22a.3.3 0 0 0-.51-.2L8.7 8.78a.3.3 0 0 0 0 .42L12.5 13a.3.3 0 0 0 .51-.21zM8 12.78V5.22a.3.3 0 0 0-.51-.2L3.7 8.78a.3.3 0 0 0 0 .42L7.5 13a.3.3 0 0 0 .51-.21z"/></svg>';
    },
    AvGy: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return o;
      });
      var s = i("qFKp"),
        o = s.CheckMobile.any();
    },
    D8x7: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="24" height="22" fill="none"><path fill="currentColor" fillRule="evenodd" clip-rule="evenodd" d="M17.35 6.35l-10 10-.7-.7 10-10 .7.7z"/><path fill="currentColor" fillRule="evenodd" clip-rule="evenodd" d="M6.65 6.35l10 10 .7-.7-10-10-.7.7z"/></svg>';
    },
    EV8o: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return o;
      });
      var s = i("ogJP");
      function o(t, e, i, o, n) {
        var l = document.createElement("div");
        (l.className = e),
          l.classList.toggle(o, !t.visible.value()),
          Object.assign(l.dataset, t.dataset),
          void 0 !== t.className && l.classList.add(t.className),
          void 0 !== t.title &&
            (l.classList.add("apply-common-tooltip"),
            l.setAttribute("title", t.title.value()),
            void 0 !== t.hotKeyTitle &&
              (l.dataset.tooltipHotkey = t.hotKeyTitle)),
          l.addEventListener("touchend", t.action),
          l.addEventListener("mousedown", function (e) {
            0 === e.button && t.action(e);
          });
        var a = document.createElement("div");
        a.classList.add(i);
        var r = t.iconMap.get(n) || "";
        return (
          Object(s.isString)(r) ? (a.innerHTML = r) : a.appendChild(r),
          l.appendChild(a),
          l
        );
      }
    },
    G2LI: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M12.57 5.5h-.07a3.5 3.5 0 1 0 .07 7A4.98 4.98 0 0 1 4 9a5 5 0 0 1 8.57-3.5z"/></svg>';
    },
    GOhO: function (t, e, i) {
      "use strict";
      var s = i("+DwS");
      i("tc+8");
      var o = i("m/cY");
      function n(t) {
        for (var e = [], i = 1; i < arguments.length; i++)
          e[i - 1] = arguments[i];
        for (
          var s = function () {
              return t.apply(
                void 0,
                e.map(function (t) {
                  return t.value();
                })
              );
            },
            n = Object(o.a)(s()),
            l = function () {
              return n.setValue(s());
            },
            a = {},
            r = 0,
            u = e;
          r < u.length;
          r++
        ) {
          var d = u[r];
          d.subscribe(a, l);
        }
        return (
          (n.destroy = function () {
            e.forEach(function (t) {
              return t.unsubscribeAll(a);
            });
          }),
          n
        );
      }
      i.d(e, "b", function () {
        return s.a;
      }),
        i.d(e, "a", function () {
          return n;
        });
    },
    "Gp/h": function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M12.22 11.78A3.47 3.47 0 0 0 9 6.98a3.48 3.48 0 0 0-3.22 4.8 6.97 6.97 0 0 1 6.44 0zM4.18 9.83L2.1 9.28l.33-1.24 2.07.55-.33 1.24zM6.38 6.36l-.9-1.94 1.16-.54.9 1.94-1.16.54zM10.46 5.82l.9-1.94 1.16.54-.9 1.94-1.16-.54zM13.49 8.6l2.07-.56.33 1.24-2.07.55-.33-1.24z"/></svg>';
    },
    Jjb7: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.5 4.5l-9 9M4.5 4.5l9 9"/></svg>';
    },
    JmzL: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fillRule="evenodd" clip-rule="evenodd" d="M9 4c-.79 0-1.38.7-1.25 1.48l.67 4.03a.59.59 0 0 0 1.16 0l.67-4.03A1.27 1.27 0 0 0 9 4zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>';
    },
    LIcf: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.9 5.87v2.17h3.07v1.4H7.9v2.8h4.22v1.46H6.25V4.4h5.94v1.47H7.9z"/></svg>';
    },
    LVLx: function (t, e, i) {
      "use strict";
      !(function (t) {
        function e(t) {
          return t instanceof Node ? t : document.createTextNode(String(t));
        }
        for (
          var i = 0,
            s = [
              Element.prototype,
              Document.prototype,
              DocumentFragment.prototype,
            ];
          i < s.length;
          i++
        ) {
          var o = s[i];
          if (o.hasOwnProperty("append")) return;
          Object.defineProperty(o, "append", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function () {
              for (var t = [], i = 0; i < arguments.length; i++)
                t[i] = arguments[i];
              if (1 !== t.length) {
                for (
                  var s = document.createDocumentFragment(), o = 0, n = t;
                  o < n.length;
                  o++
                ) {
                  var l = n[o];
                  s.appendChild(e(l));
                }
                this.appendChild(s);
              } else this.appendChild(e(t[0]));
            },
          });
        }
      })();
    },
    M3mX: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fillRule="evenodd" clip-rule="evenodd" d="M9 2.5c-1.06 0-1.88.93-1.75 1.98l.63 5.03a1.13 1.13 0 0 0 2.25 0l.62-5.03A1.77 1.77 0 0 0 9 2.5zm0 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/></svg>';
    },
    MQEA: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 7" width="9" height="7"><path fill="currentColor" d="M8.5 3.5L5 0v3H0v1h5v3z"/></svg>';
    },
    MjtL: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.5 1.5L3.5 7l5 5.5"/></svg>';
    },
    "MyT/": function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><circle fill="currentColor" cx="9" cy="9" r="4"/></svg>';
    },
    OJSF: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M11.65 12.35l-9-9 .7-.7 9 9-.7.7z"/><path fill="currentColor" d="M2.65 11.65l9-9 .7.7-9 9-.7-.7z"/></svg>';
    },
    PXSR: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M11.83 6.12l-.66.76L8 4.1V12H7V4.1L3.83 6.88l-.66-.76L7.5 2.34l4.33 3.78z"/></svg>';
    },
    QEZv: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M11.83 8.88l-.66-.76L8 10.9V3H7v7.9L3.83 8.12l-.66.76 4.33 3.78 4.33-3.78z"/></svg>';
    },
    QkND: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fillRule="evenodd" clip-rule="evenodd" d="M13.29 4.8h-.09a4.2 4.2 0 1 0 .09 8.4 6 6 0 1 1 0-8.4z"/></svg>';
    },
    R5JZ: function (t, e, i) {
      "use strict";
      function s(t, e, i, s, o) {
        function n(o) {
          if (!(t > o.timeStamp)) {
            var n = o.target;
            void 0 !== i &&
              null !== e &&
              null !== n &&
              n.ownerDocument === s &&
              (e.contains(n) || i(o));
          }
        }
        return (
          o.click && s.addEventListener("click", n, !1),
          o.mouseDown && s.addEventListener("mousedown", n, !1),
          o.touchEnd && s.addEventListener("touchend", n, !1),
          o.touchStart && s.addEventListener("touchstart", n, !1),
          function () {
            s.removeEventListener("click", n, !1),
              s.removeEventListener("mousedown", n, !1),
              s.removeEventListener("touchend", n, !1),
              s.removeEventListener("touchstart", n, !1);
          }
        );
      }
      i.d(e, "a", function () {
        return s;
      });
    },
    RgOa: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14" fill="none"><path fill="currentColor" fillRule="evenodd" d="M8.63 1.08a2.04 2.04 0 0 1-3.26 0c-.51.14-1 .35-1.45.6l.01.2A2.05 2.05 0 0 1 1.7 3.93a6.1 6.1 0 0 0-.6 1.45 2.04 2.04 0 0 1 0 3.26c.13.51.34 1 .6 1.45l.2-.01a2.05 2.05 0 0 1 2.03 2.24c.45.26.94.47 1.45.6a2.04 2.04 0 0 1 3.26 0c.51-.13 1-.34 1.45-.6l-.01-.2a2.05 2.05 0 0 1 2.24-2.03c.26-.45.47-.94.6-1.45a2.04 2.04 0 0 1 0-3.26 6.1 6.1 0 0 0-.6-1.45 2.05 2.05 0 0 1-2.23-2.23 6.1 6.1 0 0 0-1.45-.6zM7.84.42c.17-.24.43-.47.72-.4.84.18 1.62.5 2.32.96.23.15.26.48.22.76a1.03 1.03 0 0 0 1.16 1.16c.28-.04.6-.01.76.22.45.7.78 1.48.97 2.32.06.29-.17.55-.41.72a1.02 1.02 0 0 0 0 1.68c.24.17.47.43.4.72a7.12 7.12 0 0 1-.96 2.32c-.15.23-.48.26-.76.22a1.03 1.03 0 0 0-1.17 1.01l.01.15c.04.28.01.6-.22.76-.7.45-1.48.78-2.32.97-.29.06-.55-.17-.72-.41a1.02 1.02 0 0 0-1.68 0c-.17.24-.43.47-.72.4a7.12 7.12 0 0 1-2.32-.96c-.23-.15-.26-.48-.22-.76v-.15a1.02 1.02 0 0 0-1.16-1c-.28.03-.6 0-.76-.23A7.12 7.12 0 0 1 0 8.56c-.06-.29.17-.55.41-.72a1.02 1.02 0 0 0 0-1.68c-.24-.17-.47-.43-.4-.72.18-.84.5-1.62.96-2.32.15-.23.48-.26.76-.22h.15a1.02 1.02 0 0 0 1-1.16c-.03-.28 0-.6.23-.76C3.82.53 4.6.2 5.44 0c.29-.06.55.17.72.41a1.02 1.02 0 0 0 1.68 0zM9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm1 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/></svg>';
    },
    RspR: function (t, e, i) {
      "use strict";
      i.d(e, "c", function () {
        return l;
      }),
        i.d(e, "b", function () {
          return a;
        }),
        i.d(e, "a", function () {
          return r;
        });
      var s,
        o = i("+jnJ"),
        n = i("1ANp"),
        l = (s = Object(o.b)("PaneButtons.visibility", n.c)).property,
        a = s.availableValues,
        r = s.actualBehavior;
    },
    S48P: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M12.58 12.1A3.86 3.86 0 0 0 9 6.75a3.87 3.87 0 0 0-3.58 5.33 7.74 7.74 0 0 1 7.16 0zM3.64 9.93l-2.3-.62.37-1.38 2.3.62-.37 1.38zM6.1 6.07L5.07 3.92l1.3-.6 1 2.15-1.29.6zM10.62 5.47l1-2.16 1.3.6-1.01 2.16-1.3-.6zM13.99 8.55l2.3-.62.36 1.38-2.3.62L14 8.55z"/></svg>';
    },
    TGRH: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, "ControlBarNavigation", function () {
          return k;
        });
      var s = i("Eyy1"),
        o = (i("YFKU"), i("1ANp")),
        n = i("Ialn"),
        l = i("gWrr"),
        a = i("/DW5"),
        r = i("qFKp"),
        u = (i("JWMC"), i("MjtL")),
        d = i("e8Rm"),
        h = i("e2QN"),
        c = i("vg09"),
        p = i("/NcV"),
        _ = i("94TV"),
        b = i("qfuz"),
        g = i("MQEA"),
        v = i("eYcT"),
        m = i("nFx7"),
        w = (i("jrhZ"), Object(a.b)({ keys: ["Alt", "R"], text: "{0} + {1}" })),
        y = Object(a.b)({
          keys: ["Alt", "Click", "Alt", "Enter"],
          text: "{0} + {1}, {2} + {3}",
        }),
        f = Object(a.b)({ keys: [b], text: "{0}" }),
        S = Object(a.b)({ keys: [g], text: "{0}" }),
        M =
          '<div class="control-bar-wrapper">\n\t<div class="control-bar control-bar--hidden">\n\t\t<div class="control-bar__group js-btn-group js-btn-group-zoom">\n\t\t\t<div class="control-bar__btn control-bar__btn--zoom-out apply-common-tooltip" title="' +
          window.t("Zoom Out") +
          '">\n\t\t\t\t' +
          d +
          '\n\t\t\t</div>\n\t\t\t<div class="control-bar__btn control-bar__btn--zoom-in apply-common-tooltip" title="' +
          window.t("Zoom In") +
          '">\n\t\t\t\t' +
          c +
          '\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="control-bar__group js-btn-group js-btn-group-maximize">\n\t\t\t<div class="control-bar__btn control-bar__btn--maximize apply-common-tooltip" title="' +
          window.t("Maximize chart") +
          '" data-tooltip-hotkey="' +
          y +
          '">\n\t\t\t\t' +
          v +
          '\n\t\t\t</div>\n\t\t\t<div class="control-bar__btn control-bar__btn--minimize js-hidden apply-common-tooltip" title="' +
          window.t("Restore chart") +
          '" data-tooltip-hotkey="' +
          y +
          '">\n\t\t\t\t' +
          m +
          '\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="control-bar__group js-btn-group js-btn-group-scroll">\n\t\t\t<div class="control-bar__btn control-bar__btn--move-left apply-common-tooltip" title="' +
          window.t("Scroll to the Left") +
          '" data-tooltip-hotkey="' +
          f +
          '">\n\t\t\t\t' +
          u +
          '\n\t\t\t</div>\n\t\t\t<div class="control-bar__btn control-bar__btn--move-right apply-common-tooltip" title="' +
          window.t("Scroll to the Right") +
          '" data-tooltip-hotkey="' +
          S +
          '">\n\t\t\t\t' +
          p +
          '\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="control-bar__group js-btn-group js-btn-group-reset-scale">\n\t\t\t<div class="control-bar__btn control-bar__btn--turn-button control-bar__btn--btn-hidden apply-common-tooltip js-btn-reset" title="' +
          window.t("Reset Chart") +
          '" data-tooltip-hotkey="' +
          w +
          '">\n\t\t\t\t' +
          h +
          "\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>",
        C =
          '<div class="control-bar control-bar__btn control-bar__btn--back-present control-bar__btn--btn-hidden apply-common-tooltip" title="' +
          window.t("Scroll to the Most Recent Bar") +
          '">\n\t' +
          _ +
          "\n</div>",
        E = r.CheckMobile.any(),
        V = {
          zoomInOut: !0,
          maximize: !0,
          scrollLeftRight: !0,
          resetScale: !0,
          goToRealtime: !0,
        },
        k = (function () {
          function t(t, e, i) {
            (this._widget = Object(s.ensureNotNull)(
              Object(l.a)(M).querySelector(".control-bar-wrapper")
            )),
              (this._controlBar = Object(s.ensureNotNull)(
                this._widget.querySelector(".control-bar")
              )),
              (this._back = Object(s.ensureNotNull)(
                Object(l.a)(C).querySelector(".control-bar__btn--back-present")
              )),
              (this._btnGroups = Array.from(
                this._controlBar.querySelectorAll(".js-btn-group")
              )),
              (this._backButtonVisible = !1),
              (this._boundMouseHandler = null),
              (this._chartModel = null),
              (this._checkIntervalId = 0),
              (this._controlBarVisible = !1),
              (this._priceAxisChanged = null),
              (this._resetAvailabilityChanged = null),
              (this._priceAxisName = "right"),
              (this._rafId = 0),
              (this._visibilityTypeProperty = null),
              (this._boundUpdateMaximizeButtonsVisibility =
                this._updateMaximizeButtonsVisibility.bind(this)),
              (this._boundToggleFullscreenButtons =
                this._toggleFullscreenButtons.bind(this)),
              (this._paneWidth = 0),
              (this._leftPriceScaleWidth = 0),
              (this._rightPriceScaleWidth = 0),
              (this._chart = t),
              (this._parent = e),
              (this._options = Object.assign({}, V, i)),
              (this._visibilityPrioritizedGroups =
                this._initGroupDescriptions()),
              this._init(),
              this._initHandlers(),
              this.updatePosition();
          }
          return (
            (t.prototype.destroy = function () {
              if (
                (null !== this._visibilityTypeProperty &&
                  (this._visibilityTypeProperty.unsubscribe(
                    this,
                    this._onVisibilityTypeChange
                  ),
                  (this._visibilityTypeProperty = null)),
                null !== this._boundMouseHandler &&
                  (this._parent.removeEventListener(
                    "mousemove",
                    this._boundMouseHandler,
                    !1
                  ),
                  this._parent.removeEventListener(
                    "mouseleave",
                    this._boundMouseHandler,
                    !1
                  ),
                  (this._boundMouseHandler = null)),
                null !== this._priceAxisChanged &&
                  (this._priceAxisChanged.unsubscribe(
                    this,
                    this._updateBackBtnPosition
                  ),
                  (this._priceAxisChanged = null)),
                clearInterval(this._checkIntervalId),
                null !== this._resetAvailabilityChanged)
              ) {
                this._resetAvailabilityChanged.unsubscribe(
                  this,
                  this._updateResetScalesButtonVisibility
                );
                var t = this._chart.getResizerDetacher();
                t.fullscreenable.unsubscribe(
                  this._boundUpdateMaximizeButtonsVisibility
                ),
                  t.fullscreen.unsubscribe(this._boundToggleFullscreenButtons),
                  (this._resetAvailabilityChanged = null);
              }
              this._chart = null;
            }),
            (t.prototype.updatePosition = function () {
              var t = this._chart.paneWidgets();
              if (0 !== t.length) {
                (this._paneWidth = t[0].width()),
                  (this._leftPriceScaleWidth =
                    this._chart.getPriceAxisMaxWidthByName("left")),
                  (this._rightPriceScaleWidth =
                    this._chart.getPriceAxisMaxWidthByName("right"));
                var e = this._chart.timeAxisHeight() + this._bottomMargin();
                (this._widget.style.bottom = e + "px"),
                  (this._back.style.bottom = e + "px"),
                  this._updateBtnGroupVisibility();
              }
            }),
            (t.prototype._bottomMargin = function () {
              var t,
                e = this._chart.paneWidgets();
              return (null !== (t = this._chart.maximizedPaneWidget()) &&
              void 0 !== t
                ? t
                : e[e.length - 1]
              ).containsMainSeries()
                ? 32
                : 5;
            }),
            (t.prototype._init = function () {
              var t = this;
              if (r.CheckMobile.any())
                for (var e = 0, i = this._btnGroups; e < i.length; e++) {
                  i[e].classList.add("js-hidden");
                }
              (this._buttons = {
                zoomIn: this._widget.querySelector(
                  ".control-bar__btn--zoom-in"
                ),
                zoomOut: this._widget.querySelector(
                  ".control-bar__btn--zoom-out"
                ),
                moveLeft: this._widget.querySelector(
                  ".control-bar__btn--move-left"
                ),
                moveRight: this._widget.querySelector(
                  ".control-bar__btn--move-right"
                ),
                turn: this._widget.querySelector(
                  ".control-bar__btn--turn-button"
                ),
                maximize: this._widget.querySelector(
                  ".control-bar__btn--maximize"
                ),
                minimize: this._widget.querySelector(
                  ".control-bar__btn--minimize"
                ),
              }),
                this._initVisibility(),
                this._parent.appendChild(this._widget),
                this._parent.appendChild(this._back),
                (this._backButtonVisible = !1),
                (this._priceAxisName = Object(n.isRtl)() ? "left" : "right"),
                this._chart.withModel(this, function () {
                  (t._chartModel = t._chart.model()),
                    (t._priceAxisChanged =
                      t._chart.getPriceAxisWidthChangedByName(
                        t._priceAxisName
                      )),
                    (t._resetAvailabilityChanged = t._chartModel
                      .model()
                      .isScalesResetAvailableChanged()),
                    t._priceAxisChanged.subscribe(t, t._updateBackBtnPosition),
                    t._resetAvailabilityChanged.subscribe(
                      t,
                      t._updateResetScalesButtonVisibility
                    );
                  var e = t._chart.getResizerDetacher();
                  e.fullscreenable.subscribe(
                    t._boundUpdateMaximizeButtonsVisibility
                  ),
                    e.fullscreen.subscribe(t._boundToggleFullscreenButtons),
                    t._updateMaximizeButtonsVisibility(),
                    t._updateBackBtnPosition(),
                    t._back.addEventListener("click", function () {
                      null !== t._chartModel &&
                        t._chartModel.timeScale().scrollToRealtime(!0);
                    }),
                    (t._checkIntervalId = setInterval(function () {
                      return t._check();
                    }, 1e3));
                });
            }),
            (t.prototype._initHandlers = function () {
              var t = this,
                e = Modernizr.mobiletouch ? "touchstart" : "mousedown",
                i = Modernizr.mobiletouch
                  ? ["touchend"]
                  : ["mouseup", "mouseout"];
              this._buttons.moveLeft.addEventListener(e, function (e) {
                e.preventDefault(),
                  t._chart.scrollHelper().moveByBar(1),
                  t._trackEvent("Move Left");
              }),
                this._buttons.moveRight.addEventListener(e, function (e) {
                  e.preventDefault(),
                    t._chart.scrollHelper().moveByBar(-1),
                    t._trackEvent("Move Right");
                });
              for (var s = 0, o = i; s < o.length; s++) {
                var n = o[s];
                this._buttons.moveLeft.addEventListener(n, function () {
                  return t._chart.scrollHelper().stopMoveByBar();
                }),
                  this._buttons.moveRight.addEventListener(n, function () {
                    return t._chart.scrollHelper().stopMoveByBar();
                  });
              }
              this._buttons.turn.addEventListener("click", function (e) {
                e.preventDefault(),
                  t._chart.GUIResetScales(),
                  t._trackEvent("Reset to Default Settings");
              }),
                this._buttons.zoomOut.addEventListener("click", function (e) {
                  e.preventDefault(),
                    null !== t._chartModel && t._chartModel.zoomOut(),
                    t._trackEvent("Zoom Out");
                }),
                this._buttons.zoomIn.addEventListener("click", function (e) {
                  e.preventDefault(),
                    null !== t._chartModel && t._chartModel.zoomIn(),
                    t._trackEvent("Zoom In");
                }),
                this._buttons.maximize.addEventListener("click", function (e) {
                  e.preventDefault(),
                    t._chart.setActive(!0),
                    t._chart.getResizerDetacher().requestFullscreen(),
                    t._trackEvent(" Maximize Chart");
                }),
                this._buttons.minimize.addEventListener("click", function (e) {
                  e.preventDefault(),
                    t._chart.getResizerDetacher().exitFullscreen(),
                    t._trackEvent(" Restore Chart");
                });
              var l = function (t) {
                return t.addEventListener("contextmenu", function (t) {
                  return t.preventDefault();
                });
              };
              l(this._buttons.moveLeft),
                l(this._buttons.moveRight),
                l(this._buttons.turn),
                l(this._buttons.zoomOut),
                l(this._buttons.zoomIn),
                l(this._buttons.minimize),
                l(this._buttons.maximize);
            }),
            (t.prototype._initGroupDescriptions = function () {
              var t = this;
              return [
                {
                  shouldBeHiddenOnMobile: !1,
                  available: this._isMaximizeButtonAvailable.bind(this),
                  className: "js-btn-group-maximize",
                  element: this._getBtnGroup("js-btn-group-maximize"),
                  totalWidth: 50,
                },
                {
                  shouldBeHiddenOnMobile: !1,
                  available: function () {
                    return t._options.resetScale;
                  },
                  className: "js-btn-group-reset-scale",
                  element: this._getBtnGroup("js-btn-group-reset-scale"),
                  totalWidth: 50,
                },
                {
                  shouldBeHiddenOnMobile: !0,
                  available: function () {
                    return t._options.zoomInOut;
                  },
                  className: "js-btn-group-zoom",
                  element: this._getBtnGroup("js-btn-group-zoom"),
                  totalWidth: 86,
                },
                {
                  shouldBeHiddenOnMobile: !0,
                  available: function () {
                    return t._options.scrollLeftRight;
                  },
                  className: "js-btn-group-scroll",
                  element: this._getBtnGroup("js-btn-group-scroll"),
                  totalWidth: 86,
                },
              ];
            }),
            (t.prototype._check = function () {
              if (null !== this._chartModel && this._options.goToRealtime) {
                var t = this._chartModel.timeScale().rightOffset() < 0;
                t !== this._backButtonVisible &&
                  ((this._backButtonVisible = t),
                  this._back.classList.toggle(
                    "control-bar__btn--btn-hidden",
                    !this._backButtonVisible
                  ));
              }
            }),
            (t.prototype._initVisibility = function () {
              (this._visibilityTypeProperty = Object(o.a)()),
                this._visibilityTypeProperty.subscribe(
                  this,
                  this._onVisibilityTypeChange
                ),
                this._onVisibilityTypeChange();
            }),
            (t.prototype._onVisibilityTypeChange = function () {
              if (null !== this._visibilityTypeProperty) {
                var t = this._visibilityTypeProperty.value();
                "alwaysOn" === t || "alwaysOff" === t
                  ? ((this._controlBarVisible = "alwaysOn" === t),
                    null !== this._boundMouseHandler &&
                      (this._parent.removeEventListener(
                        "mousemove",
                        this._boundMouseHandler,
                        !1
                      ),
                      this._parent.removeEventListener(
                        "mouseleave",
                        this._boundMouseHandler,
                        !1
                      ),
                      (this._boundMouseHandler = null)))
                  : ((this._controlBarVisible = !1),
                    this._boundMouseHandler ||
                      ((this._boundMouseHandler =
                        this._visibilityMouseHandler.bind(this)),
                      this._parent.addEventListener(
                        "mousemove",
                        this._boundMouseHandler
                      ),
                      this._parent.addEventListener(
                        "mouseleave",
                        this._boundMouseHandler
                      ))),
                  this._updateControlBarVisibility();
              }
            }),
            (t.prototype._visibilityMouseHandler = function (t) {
              if (
                !(
                  t.buttons ||
                  (null !== this._chartModel &&
                    this._chartModel.lineBeingCreated())
                )
              ) {
                var e = "mouseleave" !== t.type;
                if ("mousemove" === t.type) {
                  var i = this._widget.getBoundingClientRect(),
                    s = 100 - this._bottomMargin();
                  e =
                    t.clientX >= i.left - 100 &&
                    t.clientX <= i.right + 100 &&
                    t.clientY >= i.top - s &&
                    t.clientY <= i.bottom + 100;
                }
                this._controlBarVisible !== e &&
                  ((this._controlBarVisible = e),
                  null === this._rafId &&
                    (this._rafId =
                      this._controlBar.ownerDocument.defaultView.requestAnimationFrame(
                        this._updateControlBarVisibility.bind(this)
                      )));
              }
            }),
            (t.prototype._updateControlBarVisibility = function () {
              (this._rafId = null),
                this._controlBar.classList.toggle(
                  "control-bar--hidden",
                  !this._controlBarVisible
                );
            }),
            (t.prototype._updateBackBtnPosition = function () {
              if (
                "left" === this._priceAxisName ||
                "right" === this._priceAxisName
              ) {
                var t =
                  this._chart.getPriceAxisMaxWidthByName(this._priceAxisName) +
                  14;
                t && (this._back.style.marginRight = t + "px");
              }
            }),
            (t.prototype._updateBtnGroupVisibility = function () {
              for (
                var t = this._leftPriceScaleWidth + this._paneWidth,
                  e = (t + this._rightPriceScaleWidth) / 2,
                  i =
                    2 * Math.min(t - e, e - this._leftPriceScaleWidth) -
                    50 -
                    50,
                  s = !1,
                  o = 0,
                  n = this._visibilityPrioritizedGroups;
                o < n.length;
                o++
              ) {
                var l = n[o];
                (l.enoughSpaceForGroup = !1),
                  l.available() &&
                    (!E || !l.shouldBeHiddenOnMobile) &&
                    ((i -= l.totalWidth),
                    (l.enoughSpaceForGroup = i >= 0 && !s),
                    (s = s || !l.enoughSpaceForGroup)),
                  !l.enoughSpaceForGroup !==
                    l.element.classList.contains("js-hidden") &&
                    l.element.classList.toggle(
                      "js-hidden",
                      !l.enoughSpaceForGroup
                    );
              }
              this._updateControlBarPosition();
            }),
            (t.prototype._getBtnGroup = function (t) {
              return Object(s.ensureDefined)(
                this._btnGroups.find(function (e) {
                  return e.classList.contains(t);
                })
              );
            }),
            (t.prototype._updateControlBarPosition = function () {
              var t = this._visibilityPrioritizedGroups.reduce(function (t, e) {
                  return t + (e.enoughSpaceForGroup ? e.totalWidth : 0);
                }, 0),
                e =
                  (this._paneWidth +
                    this._leftPriceScaleWidth +
                    this._rightPriceScaleWidth) /
                    2 -
                  Math.ceil(t / 2);
              this._widget.style.left = e + "px";
            }),
            (t.prototype._updateResetScalesButtonVisibility = function () {
              if (null !== this._chartModel) {
                var t = this._chartModel.model().isScalesResetAvailable();
                this._buttons.turn.classList.toggle(
                  "control-bar__btn--btn-hidden",
                  !t
                );
              }
            }),
            (t.prototype._updateMaximizeButtonsVisibility = function () {
              this._updateBtnGroupVisibility();
            }),
            (t.prototype._toggleFullscreenButtons = function () {
              var t = this._chart.getResizerDetacher().fullscreen.value();
              this._buttons.maximize.classList.toggle("js-hidden", t),
                this._buttons.minimize.classList.toggle("js-hidden", !t);
            }),
            (t.prototype._isMaximizeButtonAvailable = function () {
              return this._options.maximize, !1;
            }),
            (t.prototype._trackEvent = function (t) {
              0;
            }),
            t
          );
        })();
    },
    Tq3g: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M14.48 5.1c-.52 2.03-1.46 3.04-2.82 3.04-.64 0-1.55-.19-2.74-.56-1.17-.38-1.99-.57-2.46-.57-.69 0-1.22.37-1.58 1.13H3.55A4.3 4.3 0 0 1 4.5 6c.5-.6 1.08-.9 1.74-.9.7 0 1.65.2 2.84.58 1.2.37 2.04.55 2.52.55.8 0 1.32-.37 1.59-1.13h1.29zm0 4.84c-.52 2.02-1.46 3.03-2.82 3.03-.64 0-1.55-.19-2.74-.56-1.17-.38-1.99-.57-2.46-.57-.69 0-1.22.38-1.58 1.13H3.55a4.3 4.3 0 0 1 .95-2.14c.5-.6 1.08-.9 1.74-.9.7 0 1.65.2 2.84.58 1.2.37 2.04.56 2.52.56.8 0 1.32-.38 1.59-1.13h1.29z"/></svg>';
    },
    Uua9: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.65 5.16v2.68h3.78v1.73H7.65V13h5.19v1.8H5.62V3.35h7.3v1.8H7.65z"/></svg>';
    },
    VrXG: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.57 14.8H5.03V3.36c1.62-.05 2.64-.08 3.06-.08 1.66 0 2.98.49 3.96 1.47a5.23 5.23 0 0 1 1.47 3.88c0 4.11-1.99 6.17-5.95 6.17zm-.5-9.66v7.8c.32.04.67.06 1.05.06 1.03 0 1.83-.38 2.41-1.12.58-.75.88-1.79.88-3.13 0-2.44-1.14-3.67-3.42-3.67-.22 0-.53.02-.93.06z"/></svg>';
    },
    VrrN: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.84 13.7H5.78V4.4l2.48-.06c1.35 0 2.42.4 3.22 1.2.8.78 1.19 1.83 1.19 3.15 0 3.34-1.61 5.01-4.83 5.01zm-.41-7.85v6.35c.26.02.55.03.86.03.83 0 1.48-.3 1.95-.9.48-.6.72-1.46.72-2.54 0-2-.93-2.99-2.78-2.99-.18 0-.43.02-.75.05z"/></svg>';
    },
    WYzw: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M19.32 6H8.68A2.68 2.68 0 0 0 6 8.68V11h1V8.68C7 7.75 7.75 7 8.68 7h10.64c.93 0 1.68.75 1.68 1.68V11h1V8.68C22 7.2 20.8 6 19.32 6zM7 19.32c0 .93.75 1.68 1.68 1.68h10.64c.93 0 1.68-.75 1.68-1.68V17h1v2.32C22 20.8 20.8 22 19.32 22H8.68A2.68 2.68 0 0 1 6 19.32V17h1v2.32z"/></svg>';
    },
    "Y+EN": function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M7.23 2.58a.5.5 0 0 1 .54 0l5.5 3.5a.5.5 0 0 1 0 .84l-5.5 3.5a.5.5 0 0 1-.54 0l-5.5-3.5a.5.5 0 0 1 0-.84l5.5-3.5zM2.93 6.5L7.5 9.4l4.57-2.9L7.5 3.6 2.93 6.5z"/><path fill="currentColor" d="M1.58 9.23a.5.5 0 0 1 .69-.15L7.5 12.4l5.23-3.33a.5.5 0 0 1 .54.84l-5.5 3.5a.5.5 0 0 1-.54 0l-5.5-3.5a.5.5 0 0 1-.15-.69z"/></svg>';
    },
    YGQl: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.7" d="M12.5 5.5l-7 7m0-7l7 7"/></svg>';
    },
    ZKFq: function (t, e, i) {
      t.exports = {
        "css-value-pane-controls-padding-left": "1px",
        "css-value-pane-controls-padding-right": "5px",
        paneControls: "paneControls-3t_VmRy0",
        hasTopMargin: "hasTopMargin-2samtQKI",
        hidden: "hidden-3ndYaA31",
        forceHidden: "forceHidden-2qoGxuLX",
        button: "button-1T73noHe pane-button-3IbFaPrJ",
        buttonIcon: "buttonIcon-1vsadlK4",
        minimize: "minimize-UL6CPYKt",
        newButton: "newButton-2UJTRB7V",
        touchMode: "touchMode-33C2amJm",
        maximize: "maximize-2gtRCsC0",
        "maximize-animation-up-bracket":
          "maximize-animation-up-bracket-PKA42SoI",
        "maximize-animation-down-bracket":
          "maximize-animation-down-bracket-6VpX9y4d",
        "minimize-animation-up-bracket":
          "minimize-animation-up-bracket-1ZcEx180",
        "minimize-animation-down-bracket":
          "minimize-animation-down-bracket-2sZM5-ln",
        up: "up-3-Dp9Ytc",
        "up-animation": "up-animation-2oGxHhg9",
        down: "down-2qp_j-xN",
        "down-animation": "down-animation-28i3s7Bs",
        buttonsWrapper: "buttonsWrapper-326cDko9",
      };
    },
    bNWL: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 30 24" width="30" height="24" fill="none"><path fill="currentColor" fillRule="evenodd" clip-rule="evenodd" d="M15.82 14l5.36-5.36-.82-.82L15 13.18 9.64 7.82l-.82.82L14.18 14l-5.36 5.36.82.82L15 14.82l5.36 5.36.82-.82L15.82 14z"/></svg>';
    },
    cbig: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M9.3 9l.9-4.53a1.23 1.23 0 1 0-2.4 0L8.7 9l-.9 4.53a1.23 1.23 0 1 0 2.4 0L9.3 9z"/><path fill="currentColor" d="M9.15 9.26l4.38-1.48a1.23 1.23 0 1 0-1.21-2.09L8.85 8.74l-4.38 1.48a1.23 1.23 0 1 0 1.21 2.09l3.47-3.05z"/><path fill="currentColor" d="M9.15 8.74L5.68 5.69a1.23 1.23 0 1 0-1.2 2.09l4.37 1.48 3.47 3.05a1.23 1.23 0 1 0 1.2-2.09L9.16 8.74z"/></svg>';
    },
    e2QN: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 18" width="14" height="18"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M1 10a6 6 0 1 0 6-6H3"/><path d="M5 1L2.5 4 5 7"/></g></svg>';
    },
    e8Rm: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M2 7h10"/></svg>';
    },
    eYcT: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g class="corner-left-top"><path fill="currentColor" d="M6 9C6 7.89543 6.89543 7 8 7H10C10.5523 7 11 7.44772 11 8C11 8.55228 10.5523 9 10 9H8V11C8 11.5523 7.55228 12 7 12C6.44772 12 6 11.5523 6 11V9Z"/></g><g class="corner-right-top"><path fill="currentColor" d="M17 8C17 7.44772 17.4477 7 18 7H20C21.1046 7 22 7.89543 22 9V11C22 11.5523 21.5523 12 21 12C20.4477 12 20 11.5523 20 11V9H18C17.4477 9 17 8.55228 17 8Z"/></g><g class="corner-right-bottom"><path fill="currentColor" d="M21 16C21.5523 16 22 16.4477 22 17V19C22 20.1046 21.1046 21 20 21H18C17.4477 21 17 20.5523 17 20C17 19.4477 17.4477 19 18 19H20V17C20 16.4477 20.4477 16 21 16Z"/></g><g class="corner-left-bottom"><path fill="currentColor" d="M7 16C7.55228 16 8 16.4477 8 17V19H10C10.5523 19 11 19.4477 11 20C11 20.5523 10.5523 21 10 21H8C6.89543 21 6 20.1046 6 19V17C6 16.4477 6.44772 16 7 16Z"/></g></svg>';
    },
    fBig: function (t, e, i) {
      t.exports = {
        loader: "loader-1ON1rkY9",
        loaderItem: "loaderItem-6asdclOe",
        "loader-animation": "loader-animation-1vbmOmyN",
        shown: "shown-1QFCxvPl",
        touchMode: "touchMode-I-CBM3V3",
      };
    },
    fk9O: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M13.5 6.35l6.32 5.27-.64.76L14 8.07V21h-1V8.07l-5.18 4.31-.64-.76 6.32-5.27z"/></svg>';
    },
    gKdq: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M14 7v12.93l5.18-4.31.64.76-6.32 5.27-6.32-5.27.64-.76L13 19.93V7h1z"/></svg>';
    },
    i9xP: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><circle fill="currentColor" cx="12.75" cy="7.5" r="1.25"/><circle fill="currentColor" cx="7.5" cy="7.5" r="1.25"/><circle fill="currentColor" cx="2.25" cy="7.5" r="1.25"/></svg>';
    },
    jXu8: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><circle fill="currentColor" cx="9" cy="9" r="5"/></svg>';
    },
    jrhZ: function (t, e, i) {
      t.exports = {
        "animation-minimize-corner-left-top":
          "animation-minimize-corner-left-top-1QFR0TYG",
        "animation-minimize-corner-right-top":
          "animation-minimize-corner-right-top-2OigqFDd",
        "animation-minimize-corner-right-bottom":
          "animation-minimize-corner-right-bottom-171Xjuh0",
        "animation-minimize-corner-left-bottom":
          "animation-minimize-corner-left-bottom-Gj_EWVOk",
        "animation-maximize-corner-left-top":
          "animation-maximize-corner-left-top-1dOMET94",
        "animation-maximize-corner-right-top":
          "animation-maximize-corner-right-top-X6SjWmdM",
        "animation-maximize-corner-right-bottom":
          "animation-maximize-corner-right-bottom-2lZ_pYbV",
        "animation-maximize-corner-left-bottom":
          "animation-maximize-corner-left-bottom-28bRbB5v",
      };
    },
    ku84: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15" fill="none"><path fill="currentColor" d="M4.5 12A1.5 1.5 0 0 1 3 10.5V9H2v1.5A2.5 2.5 0 0 0 4.5 13h6a2.5 2.5 0 0 0 2.5-2.5V9h-1v1.5c0 .83-.67 1.5-1.5 1.5h-6z" class="bracket-up"/><path fill="currentColor" d="M4.5 3C3.67 3 3 3.67 3 4.5V6H2V4.5A2.5 2.5 0 0 1 4.5 2h6A2.5 2.5 0 0 1 13 4.5V6h-1V4.5c0-.83-.67-1.5-1.5-1.5h-6z" class="bracket-down"/></svg>';
    },
    lvAK: function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i("RspR"),
        o = i("3ClC"),
        n = (i("LVLx"), i("Eyy1")),
        l = i("eJTA"),
        a = i("+jnJ"),
        r = i("AvGy"),
        u = i("EV8o"),
        d = i("ZKFq"),
        h = i("0jws"),
        c = (function () {
          function t(t, e, i) {
            (this._parentEl = document.createElement("div")),
              (this._listActionsWrapperEl = null),
              (this._listActionsElements = {}),
              (this._actionsSpawns = {}),
              (this._onMouseEnterLeaveEventHandler = null),
              (this._mouseOverWidget = !1),
              (this._wrapEl = t),
              (this._onMouseEnterLeaveEventHandler =
                this._onMouseEnterLeaveEvent.bind(this)),
              this._wrapEl.addEventListener(
                "mouseenter",
                this._onMouseEnterLeaveEventHandler
              ),
              this._wrapEl.addEventListener(
                "mouseleave",
                this._onMouseEnterLeaveEventHandler
              ),
              (this._actions = e),
              (this._globalVisibility = i.globalVisibility.spawn()),
              this._globalVisibility.subscribe(
                this._updatePaneControlsWidgetVisibility.bind(this)
              ),
              (this._visibilityType = i.visibilityType.spawn()),
              this._visibilityType.subscribe(
                this._updatePaneControlsWidgetVisibility.bind(this)
              ),
              (this._doNotSwitchToContextMenuMode =
                i.doNotSwitchToContextMenuMode),
              (this._themedColor = i.themedColor.spawn()),
              this._themedColor.subscribe(this._updateThemedColor.bind(this));
            for (
              var s = 0, o = Object.entries(this._actions);
              s < o.length;
              s++
            ) {
              var n = o[s],
                l = n[0],
                a = n[1],
                u = l;
              (this._actionsSpawns[u] = {
                visible: a.visible.spawn(),
                title: void 0 === a.title ? null : a.title.spawn(),
              }),
                this._actionsSpawns[u].visible.subscribe(
                  this._updateActionVisibilities.bind(this, u)
                );
              var h = this._actionsSpawns[u].title;
              null !== h && h.subscribe(this._updateActionTitle.bind(this, u));
            }
            this._render(),
              this._updatePaneControlsWidgetVisibility(),
              this._updateThemedColor(this._themedColor.value()),
              this._parentEl.classList.toggle(d.touchMode, r.a),
              this._parentEl.addEventListener("contextmenu", function (t) {
                return t.preventDefault();
              });
          }
          return (
            (t.prototype.destroy = function () {
              this._visibilityType.destroy(), this._themedColor.destroy();
              for (
                var t = 0, e = Object.keys(this._actionsSpawns);
                t < e.length;
                t++
              ) {
                var i = e[t];
                this._actionsSpawns[i].visible.destroy();
                var s = this._actionsSpawns[i].title;
                null !== s && s.destroy();
              }
              null !== this._onMouseEnterLeaveEventHandler &&
                (this._wrapEl.removeEventListener(
                  "mouseenter",
                  this._onMouseEnterLeaveEventHandler
                ),
                this._wrapEl.removeEventListener(
                  "mouseleave",
                  this._onMouseEnterLeaveEventHandler
                ),
                (this._onMouseEnterLeaveEventHandler = null)),
                (this._parentEl.innerHTML = ""),
                delete this._parentEl;
            }),
            (t.prototype.getElement = function () {
              return this._parentEl;
            }),
            (t.prototype.updateWidgetModeByWidth = function (t) {
              var e = t < 666.65;
              this._doNotSwitchToContextMenuMode.value() && e && (e = !1);
              var i = Object(n.ensureNotNull)(this._listActionsWrapperEl),
                s = Object(n.ensureNotNull)(this._listActionsElements.more);
              i.classList.toggle(h.blockHidden, e),
                s.classList.toggle(
                  h.blockHidden,
                  !e || !this._actions.more.visible.value()
                );
            }),
            (t.prototype._render = function () {
              this._renderActions(),
                this._parentEl.classList.add(d.paneControls),
                this._wrapEl.append(this._parentEl);
            }),
            (t.prototype._renderActions = function () {
              null === this._listActionsWrapperEl &&
                ((this._listActionsWrapperEl = document.createElement("div")),
                this._listActionsWrapperEl.classList.add(d.buttonsWrapper),
                this._parentEl.append(this._listActionsWrapperEl));
              var t = r.a ? "large" : "small";
              (this._listActionsElements.up = Object(u.a)(
                this._actions.up,
                d.button,
                d.buttonIcon,
                h.blockHidden,
                t
              )),
                (this._listActionsElements.down = Object(u.a)(
                  this._actions.down,
                  d.button,
                  d.buttonIcon,
                  h.blockHidden,
                  t
                )),
                (this._listActionsElements.close = Object(u.a)(
                  this._actions.close,
                  d.button,
                  d.buttonIcon,
                  h.blockHidden,
                  t
                )),
                (this._listActionsElements.maximize = Object(u.a)(
                  this._actions.maximize,
                  d.button,
                  d.buttonIcon,
                  h.blockHidden,
                  t
                )),
                (this._listActionsElements.minimize = Object(u.a)(
                  this._actions.minimize,
                  d.button,
                  d.buttonIcon,
                  h.blockHidden,
                  t
                )),
                this._listActionsWrapperEl.append(
                  this._listActionsElements.up,
                  this._listActionsElements.down,
                  this._listActionsElements.close,
                  this._listActionsElements.maximize,
                  this._listActionsElements.minimize
                ),
                (this._listActionsElements.more = Object(u.a)(
                  this._actions.more,
                  d.button,
                  d.buttonIcon,
                  h.blockHidden,
                  t
                ));
              for (
                var e = 0, i = Object.keys(this._listActionsElements);
                e < i.length;
                e++
              ) {
                var s = i[e];
                Object(n.ensureNotNull)(
                  this._listActionsElements[s]
                ).classList.add(d.newButton);
              }
              this._parentEl.append(this._listActionsElements.more);
            }),
            (t.prototype._updateActionVisibilities = function (t, e) {
              Object(n.ensureNotNull)(
                this._listActionsElements[t]
              ).classList.toggle(h.blockHidden, !e);
            }),
            (t.prototype._updateActionTitle = function (t, e) {
              Object(n.ensureNotNull)(
                this._listActionsElements[t]
              ).setAttribute("title", e);
            }),
            (t.prototype._onMouseEnterLeaveEvent = function (t) {
              (this._mouseOverWidget = "mouseenter" === t.type),
                this._visibilityType.value() === a.a.VisibleOnMouseOver &&
                  this._updatePaneControlsWidgetVisibility();
            }),
            (t.prototype._updatePaneControlsWidgetVisibility = function () {
              var t,
                e = !1;
              switch (this._visibilityType.value()) {
                case a.a.AlwaysOff:
                  (t = !1), (e = !0);
                  break;
                case a.a.AlwaysOn:
                  t = this._globalVisibility.value();
                  break;
                case a.a.VisibleOnMouseOver:
                  t = this._globalVisibility.value() && this._mouseOverWidget;
              }
              this._parentEl.classList.toggle(d.hidden, !t),
                this._parentEl.classList.toggle(
                  d.forceHidden,
                  !this._globalVisibility.value() || e
                );
            }),
            (t.prototype._updateThemedColor = function (t) {
              if (t.length > 0) {
                var e = Object(l.parseRgb)(t),
                  i = e[0],
                  s = e[1],
                  o = e[2];
                this._parentEl.style.color = Object(l.rgbaToString)([
                  i,
                  s,
                  o,
                  Object(l.normalizeAlphaComponent)(0.8),
                ]);
              } else this._parentEl.style.removeProperty("color");
            }),
            t
          );
        })(),
        p = i("7KDR"),
        _ = i("5VQP"),
        b = i("obM5"),
        g = i("fk9O"),
        v = i("gKdq"),
        m = i("WYzw");
      function w(t, e) {
        var i = Object(n.ensureNotNull)(e.target);
        return (function (t) {
          var e = [];
          if (t.maximize.visible.value()) {
            var i = Object(n.ensure)(t.maximize.title),
              s = Object(n.ensureNotNull)(t.maximize.action);
            e.push(
              new p.Action({
                icon: m,
                label: i.value(),
                statName: "Maximize Pane",
                shortcutHint: y,
                onExecute: function () {
                  return s();
                },
              })
            );
          } else if (t.minimize.visible.value()) {
            i = Object(n.ensure)(t.minimize.title);
            var o = Object(n.ensureNotNull)(t.minimize.action);
            e.push(
              new p.Action({
                icon: m,
                label: i.value(),
                statName: "Minimize Pane",
                shortcutHint: y,
                onExecute: function () {
                  return o();
                },
              })
            );
          }
          if (t.up.visible.value()) {
            i = Object(n.ensure)(t.up.title);
            var l = Object(n.ensureNotNull)(t.up.action);
            e.push(
              new p.Action({
                icon: g,
                label: i.value(),
                statName: "Move pane up",
                onExecute: function () {
                  return l();
                },
              })
            );
          }
          if (t.down.visible.value()) {
            i = Object(n.ensure)(t.down.title);
            var a = Object(n.ensureNotNull)(t.down.action);
            e.push(
              new p.Action({
                icon: v,
                label: i.value(),
                statName: "Move pane down",
                onExecute: function () {
                  return a();
                },
              })
            );
          }
          if (t.close.visible.value()) {
            i = Object(n.ensure)(t.close.title);
            var r = Object(n.ensureNotNull)(t.close.action);
            e.push(
              new p.Action({
                icon: b,
                label: i.value(),
                statName: "Delete pane",
                onExecute: function () {
                  return r();
                },
              })
            );
          }
          return _.ContextMenuManager.createMenu(e);
        })(t).then(function (t) {
          return (
            t.show(function (t) {
              var e = i.getBoundingClientRect();
              return { clientX: e.right - t, clientY: e.top + e.height + 3 };
            }),
            t
          );
        });
      }
      var y = window.t("Double click");
      var f = i("hY0g"),
        S = i.n(f),
        M = i("EsvI"),
        C = i("/DW5"),
        E = i("OJSF"),
        V = i("PXSR"),
        k = i("QEZv"),
        x = i("ku84"),
        L = i("i9xP"),
        T = i("1Wf8"),
        W = i("956S");
      i.d(e, "PaneControlsWidget", function () {
        return I;
      });
      var H = Modernizr.mobiletouch,
        B = window.t("Delete pane"),
        A = window.t("Move pane up"),
        O = window.t("Move pane down"),
        P = window.t("Maximize pane"),
        z = window.t("Restore pane"),
        j = window.t("Manage panes"),
        D = window.t("Double click"),
        N = Object(C.b)({ keys: [""], text: D }),
        I = (function () {
          function t(t, e, i, o, n) {
            var l = this;
            (this._actions = {}),
              (this._moreActionCM = null),
              (this._themedColor = new S.a("")),
              (this._model = t),
              (this._paneWidget = e),
              (this._callbacks = o),
              (this._closeButtonVisibility = new S.a(
                this._getCloseButtonVisibility()
              )),
              (this._upButtonVisibility = new S.a(
                this._getUpButtonVisibility()
              )),
              (this._downButtonVisibility = new S.a(
                this._getDownButtonVisibility()
              )),
              (this._maximizeButtonVisibility = new S.a(
                this._getMaximizeButtonVisibility()
              )),
              (this._minimizeButtonVisibility = new S.a(
                this._getMinimizeButtonVisibility()
              )),
              this._createActions(),
              (this._visibilityTypeProperty = Object(s.a)()),
              this._visibilityTypeProperty.subscribe(this, function (t) {
                l._visibilityType.setValue(t.value());
              }),
              (this._visibilityType = new S.a(
                this._visibilityTypeProperty.value()
              )),
              (this._isPaneMaximize = new S.a(this._getIsPaneMaximizeValue())),
              (this._isWidgetShow = new S.a(this._getIsWidgetShow())),
              (this._backgroundThemeName = i.backgroundThemeName),
              (this._renderer = new c(n, this._actions, {
                visibilityType: this._visibilityType.readonly(),
                globalVisibility: this._isWidgetShow.readonly(),
                doNotSwitchToContextMenuMode: this._isPaneMaximize.readonly(),
                themedColor: this._themedColor.readonly(),
              }));
          }
          return (
            (t.prototype.destroy = function () {
              this._visibilityTypeProperty.unsubscribeAll(this),
                this._renderer.destroy();
            }),
            (t.prototype.getElement = function () {
              return this._renderer.getElement();
            }),
            (t.prototype.action = function () {
              return this._actions;
            }),
            (t.prototype.update = function () {
              this._updateButtonsVisibility(),
                this._isPaneMaximize.setValue(this._getIsPaneMaximizeValue()),
                this._isWidgetShow.setValue(this._getIsWidgetShow());
            }),
            (t.prototype.updateWidgetModeByWidth = function (t) {
              this._renderer.updateWidgetModeByWidth(t);
            }),
            (t.prototype.updateThemedColors = function (t) {
              null === t &&
                (t = Object(M.getStdThemedValue)(
                  "chartProperties.paneProperties.background",
                  this._backgroundThemeName.value()
                )),
                this._themedColor.setValue(t || "");
            }),
            (t.prototype._updateButtonsVisibility = function () {
              this._closeButtonVisibility.setValue(
                this._getCloseButtonVisibility()
              ),
                this._upButtonVisibility.setValue(
                  this._getUpButtonVisibility()
                ),
                this._downButtonVisibility.setValue(
                  this._getDownButtonVisibility()
                ),
                this._maximizeButtonVisibility.setValue(
                  this._getMaximizeButtonVisibility()
                ),
                this._minimizeButtonVisibility.setValue(
                  this._getMinimizeButtonVisibility()
                );
            }),
            (t.prototype._createActions = function () {
              (this._actions.up = {
                iconMap: new Map([
                  ["large", V],
                  ["small", V],
                ]),
                action: this._onUpDownButton.bind(this, "up"),
                visible: this._upButtonVisibility,
                title: new S.a(A),
                className: d.up,
                dataset: { name: "pane-button-up" },
              }),
                (this._actions.down = {
                  iconMap: new Map([
                    ["large", k],
                    ["small", k],
                  ]),
                  action: this._onUpDownButton.bind(this, "down"),
                  visible: this._downButtonVisibility,
                  title: new S.a(O),
                  className: d.down,
                  dataset: { name: "pane-button-down" },
                }),
                (this._actions.close = {
                  iconMap: new Map([
                    ["large", E],
                    ["small", E],
                  ]),
                  action: this._onCloseButton.bind(this),
                  visible: this._closeButtonVisibility,
                  title: new S.a(B),
                  dataset: { name: "pane-button-close" },
                }),
                (this._actions.maximize = {
                  iconMap: new Map([
                    ["large", T],
                    ["small", x],
                  ]),
                  action: this._onToggleMaximizeButton.bind(this),
                  visible: this._maximizeButtonVisibility,
                  title: new S.a(P),
                  hotKeyTitle: N,
                  className: d.maximize,
                  dataset: { name: "pane-button-maximize" },
                }),
                (this._actions.minimize = {
                  iconMap: new Map([
                    ["large", T],
                    ["small", x],
                  ]),
                  action: this._onToggleMaximizeButton.bind(this),
                  visible: this._minimizeButtonVisibility,
                  title: new S.a(z),
                  hotKeyTitle: N,
                  className: d.minimize,
                  dataset: { name: "pane-button-minimize" },
                }),
                (this._actions.more = {
                  iconMap: new Map([
                    ["large", W],
                    ["small", L],
                  ]),
                  action: this._showButtonsInContextMenu.bind(this),
                  visible: new S.a(!H),
                  title: new S.a(j),
                  dataset: { name: "pane-button-more" },
                });
            }),
            (t.prototype._getCloseButtonVisibility = function () {
              var t = this._paneWidget.state(),
                e = !1;
              return (
                t.containsMainSeries() ||
                  t.isMaximized() ||
                  H ||
                  (e = t.dataSources().some(function (t) {
                    return Object(o.isStudy)(t);
                  })),
                e
              );
            }),
            (t.prototype._onCloseButton = function () {
              var t = this._model
                .model()
                .panes()
                .indexOf(this._paneWidget.state());
              this._model.removePane(t);
            }),
            (t.prototype._getUpButtonVisibility = function () {
              var t = this._paneWidget.state();
              return (
                this._model.model().panes().indexOf(t) > 0 &&
                !t.isMaximized() &&
                !H
              );
            }),
            (t.prototype._getDownButtonVisibility = function () {
              var t = this._paneWidget.state(),
                e = this._model.model().panes();
              return e.indexOf(t) < e.length - 1 && !t.isMaximized() && !H;
            }),
            (t.prototype._onUpDownButton = function (t) {
              var e = this._model
                .model()
                .panes()
                .indexOf(this._paneWidget.state());
              this._model.rearrangePanes(e, t);
            }),
            (t.prototype._getMaximizeButtonVisibility = function () {
              var t = this._paneWidget.state();
              return (
                this._model.model().panes().length > 1 && !t.isMaximized() && !H
              );
            }),
            (t.prototype._getMinimizeButtonVisibility = function () {
              var t = this._paneWidget.state();
              return this._model.model().panes().length > 1 && t.isMaximized();
            }),
            (t.prototype._onToggleMaximizeButton = function () {
              this._callbacks.toggleMaximizePane(this._paneWidget);
            }),
            (t.prototype._showButtonsInContextMenu = function (t) {
              var e = this;
              t.preventDefault(),
                null !== this._moreActionCM && this._moreActionCM.isShown()
                  ? (this._moreActionCM = null)
                  : w(this._actions, t).then(function (t) {
                      e._moreActionCM = t;
                    });
            }),
            (t.prototype._getIsPaneMaximizeValue = function () {
              return this._paneWidget.state().isMaximized();
            }),
            (t.prototype._getIsWidgetShow = function () {
              return this._model.model().panes().length > 1;
            }),
            t
          );
        })();
    },
    nFx7: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g class="corner-left-top"><path fill="currentColor" d="M10 7C10.5523 7 11 7.44772 11 8V10C11 11.1046 10.1046 12 9 12H7C6.44772 12 6 11.5523 6 11C6 10.4477 6.44772 10 7 10H9V8C9 7.44772 9.44772 7 10 7Z"/></g><g class="corner-right-top"><path fill="currentColor" d="M18 7C18.5523 7 19 7.44772 19 8V10H21C21.5523 10 22 10.4477 22 11C22 11.5523 21.5523 12 21 12H19C17.8954 12 17 11.1046 17 10V8C17 7.44772 17.4477 7 18 7Z"/></g><g class="corner-right-bottom"><path fill="currentColor" d="M17 18C17 16.8954 17.8954 16 19 16H21C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18H19V20C19 20.5523 18.5523 21 18 21C17.4477 21 17 20.5523 17 20V18Z"/></g><g class="corner-left-bottom"><path fill="currentColor" d="M6 17C6 16.4477 6.44772 16 7 16H9C10.1046 16 11 16.8954 11 18V20C11 20.5523 10.5523 21 10 21C9.44772 21 9 20.5523 9 20V18H7C6.44772 18 6 17.5523 6 17Z"/></g></svg>';
    },
    obM5: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M7.65 8.35l.7-.7 6.15 6.14 6.15-6.14.7.7-6.14 6.15 6.14 6.15-.7.7-6.15-6.14-6.15 6.14-.7-.7 6.14-6.15-6.14-6.15z"/></svg>';
    },
    qfuz: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 7" width="9" height="7"><path fill="currentColor" d="M.5 3.5L4 0v3h5v1H4v3z"/></svg>';
    },
    rGGD: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill="currentColor" d="M2.4 5.46a.8.8 0 0 1 1.14-.05L8 9.42l4.46-4.01a.8.8 0 0 1 1.08 1.18L8 11.58 2.47 6.59a.8.8 0 0 1-.06-1.13z"/></svg>';
    },
    rh3U: function (t, e, i) {
      t.exports = {
        "css-value-small-size": "18px",
        "css-value-border-radius-small-size": "9px",
        "css-value-large-size": "22px",
        "css-value-border-radius-large-size": "11px",
        statuses: "statuses-29yrFaoA",
        statusItem: "statusItem-1gsKvHgg",
        small: "small-3_g6DSwX",
        large: "large-2E_Sb0cV",
        blinking: "blinking-2Xm4xMXd",
        oneWidgetsVisible: "oneWidgetsVisible-17p3P_dQ",
        twoWidgetsVisible: "twoWidgetsVisible-3kEfsgAz",
        threeWidgetsVisible: "threeWidgetsVisible-sIjrbNL1",
        "blinking-animation": "blinking-animation-1jTWzbXG",
        marketStatusOpen: "marketStatusOpen-2d8WAYHQ",
        marketStatusClose: "marketStatusClose-2LgI3IBx",
        marketStatusPre: "marketStatusPre-3tiNWinG",
        marketStatusPost: "marketStatusPost-1wCjJrHi",
        marketStatusHoliday: "marketStatusHoliday-HyAcvqXa",
        invalidSymbol: "invalidSymbol-2tnvnmzm",
        replayMode: "replayMode-2O_B03jx",
        notAccurate: "notAccurate-2qEIEgim",
        delay: "delay-NXuSKUfA",
        eod: "eod-TNCDZArR",
        dataProblemHigh: "dataProblemHigh-2SJE6Anp",
        dataProblemLow: "dataProblemLow-iRGvvWWe",
      };
    },
    sAH5: function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i("mrSG"),
        o = i("Eyy1"),
        n = i("hY0g"),
        l = i.n(n),
        a = i("ogJP"),
        r = i("ikwP"),
        u = i("eJTA"),
        d = i("Kxc7"),
        h = i("AvGy"),
        c = (i("LVLx"), i("bdgK")),
        p = i("EV8o"),
        _ = i("S8xo"),
        b = i("GUQs"),
        g = i("fBig"),
        v = (function () {
          function t(t, e) {
            void 0 === e && (e = {}),
              (this._loadingEl = null),
              (this._parentEl = t),
              (this._options = e),
              this._renderLoading();
          }
          return (
            (t.prototype.toggleVisibility = function (t) {
              null !== this._loadingEl &&
                this._loadingEl.classList.toggle(g.shown, t);
            }),
            (t.prototype._renderLoading = function () {
              (this._loadingEl = document.createElement("span")),
                this._loadingEl.classList.add(g.loader),
                this._options.className &&
                  this._loadingEl.classList.add(this._options.className),
                (this._loadingEl.innerHTML =
                  '\n\t\t\t<span class="' +
                  g.loaderItem +
                  '"></span>\n\t\t\t<span class="' +
                  g.loaderItem +
                  '"></span>\n\t\t\t<span class="' +
                  g.loaderItem +
                  '"></span>\n\t\t'),
                this._parentEl.appendChild(this._loadingEl);
            }),
            t
          );
        })(),
        m = i("5Alx"),
        w = i("0jws"),
        y = i("qFKp");
      function f(t, e) {
        null === t.firstChild
          ? (t.textContent = e)
          : (t.firstChild.nodeValue = e);
      }
      var S = y.CheckMobile.any(),
        M = [m.title1st, m.title2nd, m.title3rd, m.title4th];
      var C = (function () {
          function t(t, e, i) {
            (this._el = null),
              (this._firstBlockWrapper = null),
              (this._titleParentEl = null),
              (this._titleElements = []),
              (this._valuesParentEl = null),
              (this._valuesAdditionalWrapperEl = null),
              (this._valuesElements = []),
              (this._actionsParentEl = null),
              (this._actionAdditionalWrapperEl = null),
              (this._stayInHoveredMode = !1),
              (this._mode = 4),
              (this._statusesWrapper = null),
              (this._resizeObserver = null),
              (this._hideInvisibleHover = null),
              (this._hideValues = null),
              (this._allButtonsWidth = null),
              (this._lastStatusesWrapperWidth = null),
              (this._lastActionsWrapperWidth = null),
              (this._showActionsHandler = null),
              (this._hideActionsHandler = null),
              (this._selectedSourceHandler = null),
              (this._mouseEventHandlers = []),
              (this._disableTimeout = null),
              (this._loader = null),
              (this._model = t),
              (this._parentEl = e),
              (this._disabled = this._model.disabled().spawn()),
              this._disabled.subscribe(this._updateDisabledState.bind(this)),
              (this._selected = this._model.selected().spawn()),
              this._selected.subscribe(this._updateSelectedState.bind(this)),
              (this._loading = this._model.loading().spawn()),
              this._loading.subscribe(
                (function (t, e) {
                  var i = 0;
                  return function (s) {
                    clearTimeout(i),
                      Boolean(s) ? t() : (i = setTimeout(t, e, !1));
                  };
                })(this._updateLoadingState.bind(this), 700)
              ),
              (this._isTitleHidden = this._model.isTitleHidden().spawn()),
              (this._isValuesHidden = this._model.isValuesHidden().spawn()),
              (this._isRowHidden = this._model.isRowHidden().spawn()),
              this._isTitleHidden.subscribe(this._updateShowTitles.bind(this)),
              this._isValuesHidden.subscribe(this._updateShowValues.bind(this)),
              this._isRowHidden.subscribe(this._updateShowLine.bind(this)),
              (this._titlesSpawns = this._model.titles().map(function (t) {
                return t.spawn();
              }));
            for (var s = 0; s < this._titlesSpawns.length; s++)
              this._titlesSpawns[s].subscribe(
                this._updateTitlesHandler.bind(this, s)
              );
            (this._values = this._model.values().spawn()),
              this._values.subscribe(this._updateValues.bind(this)),
              this._createValuesSpawns(),
              this._addValuesSpawnsSubscriptions(),
              (this._actionsSpawnArray = this._model
                .actions()
                .map(function (t) {
                  return {
                    visible: t.visible.spawn(),
                    title: void 0 === t.title ? null : t.title.spawn(),
                  };
                }));
            for (s = 0; s < this._actionsSpawnArray.length; s++) {
              this._actionsSpawnArray[s].visible.subscribe(
                this._updateActionVisibilities.bind(this, s)
              );
              var o = this._actionsSpawnArray[s].title;
              null !== o && o.subscribe(this._updateActionTitle.bind(this, s));
            }
            (this._withActions = i.withActions),
              this._render(),
              this._updateStates(),
              this._updateShowTitles(),
              this._updateShowValues(),
              this._updateShowLine(),
              null !== this._valuesParentEl &&
                (this._loader = new v(this._valuesParentEl, {
                  className: m.loader,
                })),
              (this._customTextColor = i.customTextColor.spawn()),
              this._customTextColor.subscribe(
                this._updateCustomTextColor.bind(this)
              ),
              this._updateCustomTextColor(),
              this._withActions &&
                ((this._showActionsHandler = Object(b.c)(
                  this._showActions.bind(this)
                )),
                (this._hideActionsHandler = Object(b.c)(
                  this._hideActions.bind(this)
                )),
                (this._selectedSourceHandler = Object(b.c)(
                  this._model.setSourceSelected.bind(this._model)
                )),
                null !== this._titleParentEl &&
                  (this._titleParentEl.addEventListener(
                    "touchend",
                    this._selectedSourceHandler
                  ),
                  this._titleParentEl.addEventListener(
                    "mousedown",
                    this._selectedSourceHandler
                  ),
                  S ||
                    (this._titleParentEl.addEventListener(
                      "mouseenter",
                      this._showActionsHandler
                    ),
                    this._titleParentEl.addEventListener(
                      "mouseleave",
                      this._hideActionsHandler
                    )),
                  this._mouseEventHandlers.push(
                    new _.MouseEventHandler(
                      this._titleParentEl,
                      {
                        mouseDoubleClickEvent: this._model.onShowSettings.bind(
                          this._model
                        ),
                        doubleTapEvent: this._model.onShowSettings.bind(
                          this._model
                        ),
                      },
                      {
                        treatVertTouchDragAsPageScroll: !1,
                        treatHorzTouchDragAsPageScroll: !1,
                      }
                    )
                  )),
                null === this._actionAdditionalWrapperEl ||
                  null === this._actionsParentEl ||
                  S ||
                  (this._actionAdditionalWrapperEl.addEventListener(
                    "mouseenter",
                    this._showActionsHandler
                  ),
                  this._actionAdditionalWrapperEl.addEventListener(
                    "mouseleave",
                    this._hideActionsHandler
                  ),
                  this._actionsParentEl.addEventListener(
                    "contextmenu",
                    function (t) {
                      t.preventDefault(), t.stopPropagation();
                    }
                  )));
          }
          return (
            (t.prototype.destroy = function () {
              var t, e;
              this._disabled.destroy(),
                this._selected.destroy(),
                this._loading.destroy(),
                this._isTitleHidden.destroy(),
                this._isValuesHidden.destroy(),
                this._isRowHidden.destroy(),
                this._customTextColor.destroy(),
                null !== this._disableTimeout &&
                  clearTimeout(this._disableTimeout);
              for (var i = 0, s = this._titlesSpawns; i < s.length; i++) {
                s[i].destroy();
              }
              if (null !== this._titleParentEl) {
                for (
                  var n = 0, l = this._mouseEventHandlers;
                  n < l.length;
                  n++
                ) {
                  l[n].destroy();
                }
                (this._titleElements = []),
                  this._withActions &&
                    null !== this._selectedSourceHandler &&
                    null !== this._showActionsHandler &&
                    null !== this._hideActionsHandler &&
                    (this._titleParentEl.removeEventListener(
                      "touchend",
                      this._selectedSourceHandler
                    ),
                    this._titleParentEl.removeEventListener(
                      "mousedown",
                      this._selectedSourceHandler
                    ),
                    S ||
                      (this._titleParentEl.removeEventListener(
                        "mouseenter",
                        this._showActionsHandler
                      ),
                      this._titleParentEl.removeEventListener(
                        "mouseleave",
                        this._hideActionsHandler
                      ))),
                  (this._titleParentEl = null);
              }
              for (var a = 0, r = this._actionsSpawnArray; a < r.length; a++) {
                var u = r[a];
                u.visible.destroy();
                var d = u.title;
                null !== d && d.destroy();
              }
              (null !== this._actionAdditionalWrapperEl &&
                (this._withActions &&
                  null !== this._showActionsHandler &&
                  null !== this._hideActionsHandler &&
                  !S &&
                  (this._actionAdditionalWrapperEl.removeEventListener(
                    "mouseenter",
                    this._showActionsHandler
                  ),
                  this._actionAdditionalWrapperEl.removeEventListener(
                    "mouseleave",
                    this._hideActionsHandler
                  )),
                (this._actionAdditionalWrapperEl = null)),
              (this._actionsParentEl = null),
              this._removeValuesSpawnsSubscriptions(),
              this._values.destroy(),
              null !== this._valuesParentEl &&
                ((this._valuesElements = []), (this._valuesParentEl = null)),
              null === (t = this._hideInvisibleHover) ||
                void 0 === t ||
                t.destroy(),
              null === (e = this._hideValues) || void 0 === e || e.destroy(),
              null !== this._resizeObserver &&
                (this._resizeObserver.disconnect(),
                (this._resizeObserver = null)),
              null !== this._el) &&
                (Object(o.ensureNotNull)(this._el.parentNode).removeChild(
                  this._el
                ),
                (this._el = null));
            }),
            (t.prototype.getHeight = function () {
              return null === this._el ? null : 24;
            }),
            (t.prototype.updateMode = function (t) {
              (this._mode === t && null !== this._allButtonsWidth) ||
                ((this._mode = t), this._updateAllButtonsWidth());
            }),
            (t.prototype._render = function () {
              this._renderTitle(),
                this._renderActions(),
                this._renderValues(),
                (this._el = document.createElement("div")),
                (this._firstBlockWrapper = document.createElement("div")),
                this._firstBlockWrapper.classList.add(m.noWrapWrapper),
                this._firstBlockWrapper.appendChild(
                  Object(o.ensureNotNull)(this._titleParentEl)
                ),
                null !== this._actionsParentEl &&
                  this._firstBlockWrapper.appendChild(this._actionsParentEl),
                this._el.appendChild(this._firstBlockWrapper),
                this._el.appendChild(
                  Object(o.ensureNotNull)(this._valuesParentEl)
                ),
                this._parentEl.append(this._el);
            }),
            (t.prototype._renderTitle = function () {
              null === this._titleParentEl &&
                ((this._titleParentEl = document.createElement("div")),
                this._titleParentEl.classList.add(m.titleWrapper));
              for (
                var t = this._titleParentEl, e = 0;
                e < this._titlesSpawns.length;
                e++
              ) {
                var i = document.createElement("div");
                i.classList.add(m.title, M[e], "apply-overflow-tooltip"),
                  (i.dataset.name = "legend-source-title");
                var s = this._titlesSpawns[e].value();
                s.length > 0
                  ? (i.appendChild(document.createTextNode(s)),
                    i.classList.add(m.withDot))
                  : i.classList.add(w.blockHidden),
                  t.appendChild(i),
                  this._titleElements.push(i);
              }
            }),
            (t.prototype._renderActions = function () {
              if (this._withActions) {
                null === this._actionsParentEl &&
                  ((this._actionsParentEl = document.createElement("div")),
                  this._actionsParentEl.classList.add(m.buttonsWrapper),
                  this._parentEl.append(this._actionsParentEl),
                  (this._actionAdditionalWrapperEl =
                    document.createElement("div")),
                  this._actionAdditionalWrapperEl.classList.add(m.buttons),
                  this._actionsParentEl.appendChild(
                    this._actionAdditionalWrapperEl
                  ));
                for (
                  var t = Object(o.ensureNotNull)(
                      this._actionAdditionalWrapperEl
                    ),
                    e = h.a ? "large" : "small",
                    i = 0,
                    s = this._model.actions();
                  i < s.length;
                  i++
                ) {
                  var n = s[i],
                    l = Object(p.a)(
                      n,
                      m.button,
                      m.buttonIcon,
                      w.blockHidden,
                      e
                    );
                  t.appendChild(l);
                }
              }
            }),
            (t.prototype._isWidthButtonsMode = function () {
              return (
                null !== this._el &&
                (this._el.classList.contains(m.withAction) ||
                  this._disabled.value() ||
                  this._selected.value() ||
                  this._stayInHoveredMode)
              );
            }),
            (t.prototype._updateTitlesHandler = function (t, e) {
              var i = Object(o.ensureNotNull)(this._titleElements[t]),
                s = 0 === e.length;
              i.classList.toggle(w.blockHidden, s),
                i.classList.toggle(m.withDot, !s),
                f(i, e);
            }),
            (t.prototype._updateStates = function (t) {
              this._updateDisabledState(),
                this._updateSelectedState(),
                this._updateLoadingState(),
                t && this._clearDisableState();
            }),
            (t.prototype._updateValuesHTMLElHandler = function (t, e) {
              f(Object(o.ensure)(this._valuesElements[t].value), e),
                this._updateShowValues();
            }),
            (t.prototype._updateValueColorHandler = function (t, e) {
              void 0 === e && (e = ""),
                (Object(o.ensure)(this._valuesElements[t].value).style.color =
                  e);
            }),
            (t.prototype._updateValueVisibleHandler = function (t, e) {
              var i = Object(o.ensure)(this._valuesElements[t].value).closest(
                "." + m.valueItem
              );
              null !== i && i.classList.toggle(w.blockHidden, !e);
            }),
            (t.prototype._updateShowLine = function () {
              null !== this._el &&
                this._el.classList.toggle(
                  w.blockHidden,
                  this._isRowHidden.value()
                );
            }),
            (t.prototype._createValuesSpawns = function () {
              this._valuesSpawnArray = this._values.value().map(function (t) {
                return {
                  value: t.value.spawn(),
                  color: t.color.spawn(),
                  visible: t.visible.spawn(),
                };
              });
            }),
            (t.prototype._removeValuesSpawnsSubscriptions = function () {
              for (var t = 0, e = this._valuesSpawnArray; t < e.length; t++) {
                var i = e[t];
                i.value.destroy(), i.color.destroy(), i.visible.destroy();
              }
              this._valuesSpawnArray = [];
            }),
            (t.prototype._addValuesSpawnsSubscriptions = function () {
              for (var t = 0; t < this._valuesSpawnArray.length; t++) {
                var e = this._valuesSpawnArray[t];
                e.value.subscribe(
                  this._updateValuesHTMLElHandler.bind(this, t)
                ),
                  e.color.subscribe(
                    this._updateValueColorHandler.bind(this, t)
                  ),
                  e.visible.subscribe(
                    this._updateValueVisibleHandler.bind(this, t)
                  );
              }
            }),
            (t.prototype._updateShowValues = function () {
              null !== this._valuesAdditionalWrapperEl &&
                this._valuesAdditionalWrapperEl.classList.toggle(
                  w.blockHidden,
                  this._isValuesShouldBeHidden()
                );
            }),
            (t.prototype._isValuesShouldBeHidden = function () {
              return !this._valuesSpawnArray.some(function (t) {
                return t.value.value().length > 0;
              });
            }),
            (t.prototype._addStatusesWidget = function (t, e, i) {
              (this._statusesWrapper = document.createElement("div")),
                this._statusesWrapper.classList.add(m.statusesWrapper),
                this._statusesWrapper.appendChild(t),
                Object(o.ensureNotNull)(this._firstBlockWrapper).appendChild(
                  this._statusesWrapper
                ),
                (this._hideInvisibleHover = e.spawn()),
                this._hideInvisibleHover.subscribe(
                  this._updateInvisibleHoverMode.bind(this),
                  { callWithLast: !0 }
                ),
                (this._hideValues = i.spawn()),
                this._hideValues.subscribe(
                  this._updateHideValuesMode.bind(this),
                  { callWithLast: !0 }
                ),
                this._updateStatusWidgetVisibility(this._disabled.value()),
                (this._resizeObserver = new c.default(
                  this._handlerRestrictTitleWidth.bind(this)
                )),
                null !== this._actionsParentEl &&
                  this._resizeObserver.observe(this._actionsParentEl),
                this._resizeObserver.observe(this._statusesWrapper);
            }),
            (t.prototype._updateTitleMaxWidth = function () {
              if (null !== this._firstBlockWrapper) {
                var t = this._allButtonsWidth || 0,
                  e =
                    (this._lastActionsWrapperWidth || 0) +
                    (this._lastStatusesWrapperWidth || 0);
                this._isWidthButtonsMode()
                  ? (this._firstBlockWrapper.style.maxWidth =
                      "calc(100% - " + Math.max(t, e) + "px)")
                  : (this._firstBlockWrapper.style.maxWidth =
                      e > 0 ? "calc(100% - " + e + "px)" : "");
              }
            }),
            (t.prototype._updateAllButtonsWidth = function () {
              (this._allButtonsWidth = this._getButtonsCount() * D + 1),
                this._updateTitleMaxWidth();
            }),
            (t.prototype._updateInvisibleHoverMode = function (t) {
              null !== this._el &&
                this._el.classList.toggle(m.invisibleHover, !t);
            }),
            (t.prototype._updateHideValuesMode = function (t) {
              null !== this._el && this._el.classList.toggle(m.hideValues, t);
            }),
            (t.prototype._showActions = function () {
              if (null !== this._el && this._withActions) {
                this._el.classList.add(m.withAction);
                var t =
                  null !== this._valuesParentEl &&
                  null !== this._titleParentEl &&
                  this._valuesParentEl.offsetTop ===
                    this._titleParentEl.offsetTop;
                this._el.classList.toggle(m.withTail, t),
                  this._updateTitleMaxWidth();
              }
            }),
            (t.prototype._hideActions = function () {
              null !== this._el &&
                this._withActions &&
                !this._stayInHoveredMode &&
                (this._el.classList.remove(m.withAction),
                null !== this._valuesParentEl &&
                  this._valuesParentEl.classList.remove(m.withTail),
                this._updateTitleMaxWidth());
            }),
            (t.prototype._handlerRestrictTitleWidth = function (t) {
              if (
                null !== this._actionsParentEl &&
                null !== this._firstBlockWrapper
              ) {
                for (var e = null, i = null, s = 0, o = t; s < o.length; s++) {
                  var n = o[s];
                  n.target === this._statusesWrapper &&
                    (e = n.contentRect.width),
                    n.target === this._actionsParentEl &&
                      (i = n.contentRect.width);
                }
                (e === this._lastStatusesWrapperWidth &&
                  i === this._lastActionsWrapperWidth) ||
                  (null !== e && (this._lastStatusesWrapperWidth = e),
                  null !== i && (this._lastActionsWrapperWidth = i),
                  this._updateTitleMaxWidth());
              }
            }),
            (t.prototype._clearDesabledTimeout = function () {
              null !== this._disableTimeout &&
                (clearTimeout(this._disableTimeout),
                (this._disableTimeout = null));
            }),
            (t.prototype._updateDisabledState = function () {
              var t = this;
              null !== this._el &&
                (this._el.classList.remove("tempDisabled"),
                this._el.classList.remove(m.hiddenLoading),
                this._clearDesabledTimeout(),
                this._disabled.value()
                  ? (this._el.classList.add(m.disabled),
                    this._updateStatusWidgetVisibility(!0))
                  : (this._el.classList.add("tempDisabled"),
                    this._el.classList.add(m.hiddenLoading),
                    (this._disableTimeout = setTimeout(function () {
                      null !== t._el &&
                        (!t._loading.value() &&
                          t._el.classList.contains("tempDisabled") &&
                          (t._el.classList.remove("tempDisabled"),
                          t._el.classList.remove(m.hiddenLoading),
                          t._el.classList.toggle(
                            m.disabled,
                            t._disabled.value()
                          ),
                          t._updateStatusWidgetVisibility(!1)),
                        t._clearDesabledTimeout());
                    }, 1e3))),
                this._updateTitleMaxWidth());
            }),
            (t.prototype._clearDisableState = function () {
              null !== this._el &&
                (this._el.classList.remove(m.hiddenLoading),
                this._el.classList.remove(m.disabled),
                this._el.classList.remove("tempDisabled"),
                this._updateStatusWidgetVisibility(this._disabled.value()),
                this._updateTitleMaxWidth());
            }),
            (t.prototype._updateSelectedState = function () {
              null !== this._el &&
                this._withActions &&
                this._el.classList.toggle(m.selected, this._selected.value());
            }),
            (t.prototype._updateLoadingState = function () {
              if (null !== this._el) {
                this._el.classList.contains("tempDisabled") &&
                  (this._loading.value()
                    ? this._el.classList.add(m.hiddenLoading)
                    : this._clearDisableState());
                var t = this._loading.value();
                this._el.classList.toggle(m.loading, t),
                  null !== this._loader && this._loader.toggleVisibility(t);
              }
            }),
            (t.prototype._updateShowTitles = function () {
              null !== this._titleParentEl &&
                (this._titleParentEl.classList.toggle(
                  w.blockHidden,
                  this._isTitleHidden.value()
                ),
                null !== this._actionsParentEl &&
                  this._actionsParentEl.classList.toggle(
                    w.blockHidden,
                    this._isTitleHidden.value()
                  ));
            }),
            (t.prototype._updateValues = function () {
              this._removeValuesSpawnsSubscriptions(),
                this._createValuesSpawns(),
                null !== this._valuesParentEl &&
                  null !== this._valuesAdditionalWrapperEl &&
                  ((this._valuesElements = []),
                  (this._valuesAdditionalWrapperEl.innerHTML = "")),
                this._renderValues(),
                this._addValuesSpawnsSubscriptions(),
                this._updateShowValues();
            }),
            (t.prototype._updateActionVisibilities = function (t) {
              null !== this._actionsParentEl &&
                this._actionsParentEl
                  .querySelectorAll("." + m.button)
                  [t].classList.toggle(
                    w.blockHidden,
                    !this._actionsSpawnArray[t].visible.value()
                  );
            }),
            (t.prototype._updateActionTitle = function (t) {
              var e = this._actionsSpawnArray[t].title;
              null !== this._actionsParentEl &&
                null !== e &&
                this._actionsParentEl
                  .querySelectorAll("." + m.button)
                  [t].setAttribute("title", e.value());
            }),
            (t.prototype._updateCustomTextColor = function () {
              for (
                var t = this._customTextColor.value() || "",
                  e = 0,
                  i = this._titleElements;
                e < i.length;
                e++
              ) {
                var s = i[e];
                null !== s && (s.style.color = t);
              }
              for (
                var n = Object(o.ensureNotNull)(
                    this._valuesParentEl
                  ).querySelectorAll("." + m.valueTitle),
                  l = 0;
                l < n.length;
                l++
              )
                n[l].style.color = t;
              Object(o.ensureNotNull)(this._el).classList.toggle(
                m.withCustomTextColor,
                Boolean(t)
              );
            }),
            (t.prototype._updateStatusWidgetVisibility = function (t) {
              null !== this._statusesWrapper &&
                this._statusesWrapper.classList.toggle(w.blockHidden, t);
            }),
            t
          );
        })(),
        E = (function (t) {
          function e(e, i, s) {
            var o = t.call(this, e, i, s) || this;
            return (
              (o._clientHeight = null),
              (o._flagged = o._model.flagged().spawn()),
              o._flagged.subscribe(o._updateFlaggedState.bind(o)),
              o._updateStates(),
              s.statusWidgetEl &&
                o._addStatusesWidget(
                  s.statusWidgetEl,
                  s.hideInvisibleHover,
                  s.hideValues
                ),
              o._selected.subscribe(o._updateTitleMaxWidth.bind(o)),
              o
            );
          }
          return (
            Object(s.c)(e, t),
            (e.prototype.destroy = function () {
              t.prototype.destroy.call(this),
                void 0 !== this._flagged && this._flagged.destroy();
            }),
            (e.prototype.getHeight = function () {
              return null === this._el
                ? null
                : (null === this._clientHeight &&
                    ((this._clientHeight = this._el.clientHeight),
                    0 === this._clientHeight && (this._clientHeight = null)),
                  this._clientHeight);
            }),
            (e.prototype._getButtonsCount = function () {
              return 1 === this._mode ? 1 : 3;
            }),
            (e.prototype._render = function () {
              t.prototype._render.call(this);
              var e = Object(o.ensureNotNull)(this._el);
              e.classList.add(m.item, m.series),
                e.classList.toggle(
                  m.onlyOneButtonCanBeStick,
                  this._model.isOneButtonCanBeStick()
                ),
                (e.dataset.name = "legend-series-item");
            }),
            (e.prototype._updateStates = function () {
              t.prototype._updateStates.call(this), this._updateFlaggedState();
            }),
            (e.prototype._renderValues = function () {
              null === this._valuesParentEl &&
                ((this._valuesParentEl = document.createElement("div")),
                this._valuesParentEl.classList.add(m.valuesWrapper),
                (this._valuesAdditionalWrapperEl =
                  document.createElement("div")),
                this._valuesAdditionalWrapperEl.classList.add(
                  m.valuesAdditionalWrapper
                ),
                this._valuesParentEl.appendChild(
                  this._valuesAdditionalWrapperEl
                ));
              for (
                var t = Object(o.ensureNotNull)(
                    this._valuesAdditionalWrapperEl
                  ),
                  e = 0,
                  i = this._values.value();
                e < i.length;
                e++
              ) {
                var s = i[e],
                  n = document.createElement("div");
                n.classList.add(m.valueItem),
                  n.classList.toggle(w.blockHidden, !s.visible.value());
                var l = document.createElement("div"),
                  a = s.title.value() || "";
                l.classList.add(m.valueTitle),
                  l.classList.toggle(w.blockHidden, 0 === a.length),
                  l.appendChild(document.createTextNode(a)),
                  n.appendChild(l);
                var r = document.createElement("div");
                r.classList.add(m.valueValue),
                  (r.style.color = s.color.value() || ""),
                  r.appendChild(document.createTextNode(s.value.value())),
                  n.appendChild(r),
                  this._valuesElements.push({ title: l, value: r }),
                  t.appendChild(n);
              }
            }),
            (e.prototype._createValuesSpawns = function () {
              var e = this;
              t.prototype._createValuesSpawns.call(this),
                this._values.value().forEach(function (t, i) {
                  e._valuesSpawnArray[i].title = t.title.spawn();
                });
            }),
            (e.prototype._removeValuesSpawnsSubscriptions = function () {
              for (var e = 0, i = this._valuesSpawnArray; e < i.length; e++) {
                i[e].title.destroy();
              }
              t.prototype._removeValuesSpawnsSubscriptions.call(this);
            }),
            (e.prototype._addValuesSpawnsSubscriptions = function () {
              t.prototype._addValuesSpawnsSubscriptions.call(this);
              for (var e = 0; e < this._valuesSpawnArray.length; e++)
                this._valuesSpawnArray[e].title.subscribe(
                  this._updateValuesTitleHTMLElHandler.bind(this, e)
                );
            }),
            (e.prototype._isValuesShouldBeHidden = function () {
              return !this._valuesSpawnArray.some(function (t) {
                return (
                  t.value.value().length > 0 ||
                  (t.title.value() || "").length > 0
                );
              });
            }),
            (e.prototype._updateValuesTitleHTMLElHandler = function (t, e) {
              void 0 === e && (e = "");
              var i = Object(o.ensure)(this._valuesElements[t].title);
              f(i, e),
                i.classList.toggle(w.blockHidden, 0 === e.length),
                this._updateShowValues();
            }),
            (e.prototype._isWidthButtonsMode = function () {
              return (
                null !== this._el &&
                ((void 0 !== this._flagged && Boolean(this._flagged.value())) ||
                  t.prototype._isWidthButtonsMode.call(this))
              );
            }),
            (e.prototype._updateFlaggedState = function () {
              void 0 !== this._flagged &&
                (Object(o.ensureNotNull)(this._el).classList.toggle(
                  m.flagged,
                  Boolean(this._flagged.value())
                ),
                this._updateTitleMaxWidth());
            }),
            e
          );
        })(C),
        V = y.isSafari ? "click" : "auxclick",
        k = (function (t) {
          function e(e, i, s) {
            var o = t.call(this, e, i, s) || this;
            return (
              (o._wheelClickHandler = null),
              (o._canUpdateRowVisibility = !0),
              (o._globalRowVisibility = o._model.globalVisibility().spawn()),
              o._globalRowVisibility.subscribe(o._updateShowLine.bind(o), {
                callWithLast: !0,
              }),
              (o._has5Buttons = o._model.isPineScriptDataSource().spawn()),
              o._has5Buttons.subscribe(o._update5ButtonsStyles.bind(o)),
              o._updateStates(!o._disabled.value()),
              s.statusWidgetEl &&
                o._addStatusesWidget(
                  s.statusWidgetEl,
                  s.hideInvisibleHover,
                  s.hideValues
                ),
              o._selected.subscribe(o._updateTitleMaxWidth.bind(o)),
              s.withActions &&
                ((o._wheelClickHandler = o._onWheelClicked.bind(o)),
                null !== o._titleParentEl &&
                  o._titleParentEl.addEventListener(V, o._wheelClickHandler)),
              o
            );
          }
          return (
            Object(s.c)(e, t),
            (e.prototype.destroy = function () {
              t.prototype.destroy.call(this),
                this._has5Buttons.destroy(),
                this._globalRowVisibility &&
                  this._globalRowVisibility.destroy(),
                null !== this._wheelClickHandler &&
                  null !== this._titleParentEl &&
                  this._titleParentEl.removeEventListener(
                    V,
                    this._wheelClickHandler
                  );
            }),
            (e.prototype._updateShowLine = function () {
              if (null !== this._el && this._canUpdateRowVisibility) {
                var e = !this._globalRowVisibility.value();
                e
                  ? this._el.classList.toggle(w.blockHidden, e)
                  : t.prototype._updateShowLine.call(this);
              }
            }),
            (e.prototype._getButtonsCount = function () {
              switch (this._mode) {
                case 4:
                  return this._has5Buttons.value() ? 5 : 4;
                case 3:
                  return 3;
                default:
                  return 2;
              }
            }),
            (e.prototype._render = function () {
              t.prototype._render.call(this);
              var e = Object(o.ensureNotNull)(this._el);
              e.classList.add(m.item, m.study),
                (e.dataset.name = "legend-source-item");
            }),
            (e.prototype._renderValues = function () {
              null === this._valuesParentEl &&
                ((this._valuesParentEl = document.createElement("div")),
                this._valuesParentEl.classList.add(m.valuesWrapper),
                (this._valuesAdditionalWrapperEl =
                  document.createElement("div")),
                this._valuesAdditionalWrapperEl.classList.add(
                  m.valuesAdditionalWrapper
                ),
                this._valuesParentEl.appendChild(
                  this._valuesAdditionalWrapperEl
                ));
              for (
                var t = Object(o.ensureNotNull)(
                    this._valuesAdditionalWrapperEl
                  ),
                  e = 0,
                  i = this._values.value();
                e < i.length;
                e++
              ) {
                var s = i[e],
                  n = document.createElement("div");
                n.classList.add(m.valueItem),
                  n.classList.toggle(w.blockHidden, !s.visible.value());
                var l = document.createElement("div");
                l.classList.add(m.valueValue),
                  (l.style.color = s.color.value() || ""),
                  l.appendChild(document.createTextNode(s.value.value())),
                  n.appendChild(l),
                  this._valuesElements.push({ value: l }),
                  t.appendChild(n);
              }
            }),
            (e.prototype._update5ButtonsStyles = function (t) {
              null !== this._el &&
                (this._el.classList.toggle(m.has5Buttons, t),
                this._updateAllButtonsWidth());
            }),
            (e.prototype._onWheelClicked = function (t) {
              1 === t.button && this._model.onRemoveSource();
            }),
            e
          );
        })(C),
        x = i("6dGu"),
        L = i("rGGD"),
        T = i("Y+EN"),
        W = i("vYP1"),
        H = window.t("Hide Indicator Legend"),
        B = window.t("Show Indicator Legend"),
        A = window.t("Show Object Tree"),
        O = (function () {
          function t(t, e, i) {
            (this._el = null),
              (this._counterEl = null),
              (this._arrowIconEL = null),
              (this._objectTreeEl = null),
              (this._mode = 0),
              (this._parentEl = t),
              (this._themedColor = e.spawn()),
              this._themedColor.subscribe(this._updateThemedColor.bind(this)),
              (this._sourceCount = i.visibleDataSourceCount.spawn()),
              this._sourceCount.subscribe(this._updateSourceCount.bind(this)),
              (this._isStateOpen = i.isDataSourcesCollapsed.spawn()),
              this._isStateOpen.subscribe(this._updateState.bind(this)),
              (this._showObjectsTree = i.showObjectsTree.spawn()),
              this._showObjectsTree.subscribe(
                this._updateObjectTreeVisibility.bind(this)
              ),
              this._render(),
              this._updateState(),
              this._updateThemedColor(this._themedColor.value()),
              this._updateObjectTreeVisibility(this._showObjectsTree.value()),
              (this._toggleStateHandler = Object(b.c)(i.onCollapseDataSources)),
              (this._showObjectTreeHandler = Object(b.c)(
                i.onShowObjectsTreeDialog
              )),
              null !== this._el &&
                (this._el.addEventListener(
                  "touchend",
                  this._toggleStateHandler
                ),
                this._el.addEventListener("click", this._toggleStateHandler),
                this._el.addEventListener("contextmenu", function (t) {
                  t.preventDefault(), t.stopPropagation();
                })),
              null !== this._objectTreeEl &&
                (this._objectTreeEl.addEventListener(
                  "touchend",
                  this._showObjectTreeHandler
                ),
                this._objectTreeEl.addEventListener(
                  "click",
                  this._showObjectTreeHandler
                ));
          }
          return (
            (t.prototype.destroy = function () {
              this._sourceCount.destroy(),
                this._isStateOpen.destroy(),
                null !== this._objectTreeEl &&
                  (this._objectTreeEl.removeEventListener(
                    "touchend",
                    this._showObjectTreeHandler
                  ),
                  this._objectTreeEl.removeEventListener(
                    "click",
                    this._showObjectTreeHandler
                  ),
                  (this._objectTreeEl = null)),
                (this._arrowIconEL = null),
                (this._counterEl = null),
                null !== this._el &&
                  (this._el.removeEventListener(
                    "touchend",
                    this._toggleStateHandler
                  ),
                  this._el.removeEventListener(
                    "click",
                    this._toggleStateHandler
                  ),
                  (this._el.innerHTML = ""),
                  (this._el = null));
            }),
            (t.prototype.setMode = function (t) {
              (this._mode = t ? 1 : 0), this._updateTooltip();
            }),
            (t.prototype._render = function () {
              (this._el = document.createElement("div")),
                (this._el.className = m.toggler + " apply-common-tooltip"),
                (this._arrowIconEL = document.createElement("div")),
                this._arrowIconEL.classList.add(m.iconArrow),
                (this._arrowIconEL.innerHTML = h.a ? L : x),
                this._el.appendChild(this._arrowIconEL),
                (this._objectTreeEl = document.createElement("div")),
                this._objectTreeEl.classList.add(m.objectTree),
                (this._objectTreeEl.innerHTML = h.a ? W : T),
                this._el.appendChild(this._objectTreeEl),
                (this._counterEl = document.createElement("div")),
                this._counterEl.classList.add(m.counter),
                this._counterEl.appendChild(
                  document.createTextNode(String(this._sourceCount.value()))
                ),
                this._el.appendChild(this._counterEl),
                this._parentEl.appendChild(this._el);
            }),
            (t.prototype._updateThemedColor = function (t) {
              if (null !== this._el)
                if (t.length > 0) {
                  var e = Object(u.parseRgb)(t),
                    i = e[0],
                    s = e[1],
                    o = e[2];
                  this._el.style.backgroundColor = Object(u.rgbaToString)([
                    i,
                    s,
                    o,
                    Object(u.normalizeAlphaComponent)(0.8),
                  ]);
                } else this._el.style.removeProperty("background-color");
            }),
            (t.prototype._updateSourceCount = function (t) {
              f(Object(o.ensureNotNull)(this._counterEl), String(t));
              var e = Object(o.ensureNotNull)(this._el),
                i = t < 1;
              e.classList.toggle(w.blockHidden, i);
              var s = 1 === t;
              e.classList.toggle(m.onlyOneSourceShown, s);
            }),
            (t.prototype._updateCounterVisibility = function (t) {
              if (null !== this._counterEl) {
                var e = 1 === t;
                this._counterEl.classList.toggle(w.blockHidden, e);
              }
            }),
            (t.prototype._updateState = function () {
              var t = !this._isStateOpen.value();
              this._parentEl.classList.toggle(m.closed, t),
                this._updateTooltip(),
                ji((t ? "Hide" : "Show") + " not main sources");
            }),
            (t.prototype._tooltip = function () {
              return 1 === this._mode ? A : this._isStateOpen.value() ? H : B;
            }),
            (t.prototype._updateTooltip = function () {
              null !== this._el &&
                this._el.setAttribute("title", this._tooltip());
            }),
            (t.prototype._updateObjectTreeVisibility = function (t) {
              Object(o.ensureNotNull)(this._el).classList.toggle(
                m.objectsTreeCanBeShown,
                t
              );
            }),
            t
          );
        })(),
        P = i("+6II"),
        z = i("R5JZ");
      function j(t, e) {
        var i = new l.a(e(t.value()));
        t.subscribe(function (t) {
          i.setValue(e(t));
        });
        return i.readonly().spawn(function () {
          return t.unsubscribe();
        });
      }
      var D = h.a ? 44 : 28,
        N = d.enabled("object_tree_legend_mode"),
        I = (function () {
          function t(t, e) {
            (this._renderToggler = null),
              (this._mainDataSourceRenderer = null),
              (this._dataSourceRenderers = []),
              (this._wrapText = null),
              (this._parentEl = document.createElement("div")),
              (this._mainDataSourceEl = null),
              (this._dataSourcesEl = null),
              (this._dataSourcesAdditionalWrapperEl = null),
              (this._collapsedDataSourcesWrapperEl = null),
              (this._collapsedDataSourcesEl = null),
              (this._outsideEventForCollapsedTooltip = null),
              (this._options = t),
              (this._togglerOptions = e),
              (this._isStudiesLegendHidden = t.isStudiesLegendHidden.spawn()),
              this._isStudiesLegendHidden.subscribe(
                this._updateLegendVisibility.bind(this)
              ),
              (this._isAllLegendHidden = t.isAllLegendHidden.spawn()),
              this._isAllLegendHidden.subscribe(
                this._updateLegendVisibility.bind(this)
              ),
              this._updateLegendVisibility(),
              (this._themedColor = t.themedColor.spawn()),
              this._themedColor.subscribe(this._setCustomBg.bind(this)),
              (this._showBackground = t.showBackground.spawn()),
              this._showBackground.subscribe(this._setCustomBg.bind(this)),
              (this._backgroundTransparency = t.backgroundTransparency.spawn()),
              this._backgroundTransparency.subscribe(
                this._setCustomBg.bind(this)
              ),
              (this._collapsedDataSourcesCountSpawn =
                t.collapsedDataSourcesCount.spawn()),
              this._collapsedDataSourcesCountSpawn.subscribe(
                this._updateCollapsedSourcesCount.bind(this)
              ),
              (this._showCollapsedDataSourcesTooltipHandler =
                this._showCollapsedDataSourcesTooltip.bind(this)),
              h.a ||
                ((this._wrapText = t.wrapText.spawn()),
                this._wrapText.subscribe(this._updateWrapText.bind(this)),
                this._updateWrapText(this._wrapText.value())),
              this._parentEl.classList.add(m.legend),
              this._parentEl.classList.toggle(
                m.noActions,
                !this._options.withActions
              ),
              this._parentEl.classList.toggle(m.touchMode, h.a),
              this._parentEl.classList.toggle(m.newCollapser, !0),
              (this._parentEl.dataset.name = "legend"),
              this._parentEl.style.setProperty(
                "--legend-source-item-button-width",
                D + "px"
              ),
              this._parentEl.addEventListener("contextmenu", function (e) {
                e.preventDefault(), t.showLegendWidgetContextMenu(e);
              });
          }
          return (
            (t.prototype.destroy = function () {
              if (
                (this._isStudiesLegendHidden.destroy(),
                this._isAllLegendHidden.destroy(),
                this._themedColor.destroy(),
                this._showBackground.destroy(),
                this._backgroundTransparency.destroy(),
                this._collapsedDataSourcesCountSpawn.destroy(),
                h.a &&
                  null !== this._collapsedDataSourcesWrapperEl &&
                  this._collapsedDataSourcesWrapperEl.removeEventListener(
                    "touchend",
                    this._showCollapsedDataSourcesTooltipHandler
                  ),
                this._outsideEventForCollapsedTooltip &&
                  this._outsideEventForCollapsedTooltip(),
                null !== this._wrapText && this._wrapText.destroy(),
                null !== this._dataSourcesAdditionalWrapperEl &&
                  ((this._dataSourcesAdditionalWrapperEl.innerHTML = ""),
                  (this._dataSourcesAdditionalWrapperEl = null)),
                null !== this._dataSourcesEl &&
                  ((this._dataSourcesEl.innerHTML = ""),
                  (this._dataSourcesEl = null)),
                null !== this._renderToggler &&
                  (this._renderToggler.destroy(), (this._renderToggler = null)),
                null !== this._mainDataSourceRenderer &&
                  (this._mainDataSourceRenderer.destroy(),
                  (this._mainDataSourceRenderer = null)),
                0 !== this._dataSourceRenderers.length)
              ) {
                for (
                  var t = 0, e = this._dataSourceRenderers;
                  t < e.length;
                  t++
                ) {
                  e[t].destroy();
                }
                this._dataSourceRenderers = [];
              }
              (this._parentEl.innerHTML = ""), delete this._parentEl;
            }),
            (t.prototype.addMainDataSource = function (t, e) {
              var i = this;
              this._renderMainDataSourceEl(),
                (this._mainDataSourceRenderer = new E(
                  t,
                  Object(o.ensureNotNull)(this._mainDataSourceEl),
                  {
                    withActions: this._options.withActions,
                    customTextColor: this._options.customTextColor,
                    statusWidgetEl: e.getElement(),
                    hideInvisibleHover: j(e.visibleWidgetsCount, function (t) {
                      return Boolean(t);
                    }),
                    hideValues: e.errorWidgetIsShown,
                  }
                )),
                this._updateLegendVisibility(),
                t.onDestroy().subscribe(
                  this,
                  function () {
                    null !== i._mainDataSourceRenderer &&
                      (i._mainDataSourceRenderer.destroy(),
                      (i._mainDataSourceRenderer = null));
                  },
                  !0
                );
            }),
            (t.prototype.addDataSources = function (t, e) {
              var i = this;
              this._renderDataSourcesEl();
              for (
                var s = Object(o.ensureNotNull)(
                    this._dataSourcesAdditionalWrapperEl
                  ),
                  n = function (o) {
                    var n = t[o],
                      a = new k(n, s, {
                        withActions: l._options.withActions,
                        customTextColor: l._options.customTextColor,
                        statusWidgetEl: e[o].getElement(),
                        hideInvisibleHover: j(
                          e[o].visibleWidgetsCount,
                          function (t) {
                            return Boolean(t);
                          }
                        ),
                        hideValues: e[o].errorWidgetIsShown,
                      });
                    l._dataSourceRenderers.push(a),
                      l._updateLegendVisibility(),
                      n.onDestroy().subscribe(
                        l,
                        function () {
                          var t = i._dataSourceRenderers.indexOf(a);
                          -1 !== t &&
                            (i._dataSourceRenderers[t].destroy(),
                            i._dataSourceRenderers.splice(t, 1));
                        },
                        !0
                      );
                  },
                  l = this,
                  a = 0;
                a < t.length;
                a++
              )
                n(a);
            }),
            (t.prototype.addCustomWidget = function (t, e) {
              if (0 === e.block) {
                this._renderMainDataSourceEl();
                var i = Object(o.ensureNotNull)(this._mainDataSourceEl);
                1 === e.position && t.renderTo(i, i.firstChild),
                  0 === e.position && t.renderTo(i);
              }
              if (1 === e.block) {
                this._renderDataSourcesEl();
                var s = Object(o.ensureNotNull)(
                  this._dataSourcesAdditionalWrapperEl
                );
                1 === e.position && t.renderTo(s, s.firstChild),
                  0 === e.position && t.renderTo(s);
              }
            }),
            (t.prototype.firstTitle = function () {
              return this._parentEl.firstElementChild;
            }),
            (t.prototype.getElement = function () {
              return this._parentEl;
            }),
            (t.prototype.updateMode = function (t) {
              var e = N && t < 112 ? 1 : t < 205 ? 2 : t < 222 ? 3 : 4;
              null !== this._mainDataSourceRenderer &&
                this._mainDataSourceRenderer.updateMode(e);
              for (
                var i = 0, s = this._dataSourceRenderers;
                i < s.length;
                i++
              ) {
                s[i].updateMode(e);
              }
              this._parentEl.classList.toggle(m.medium, 3 === e),
                this._parentEl.classList.toggle(m.minimized, 2 === e),
                this._parentEl.classList.toggle(m.micro, 1 === e),
                null !== this._renderToggler &&
                  this._renderToggler.setMode(1 === e);
              var o = h.a || t < 542;
              this._parentEl.classList.toggle(m.directionColumn, o);
            }),
            (t.prototype.getMainSourceHeight = function () {
              return null === this._mainDataSourceRenderer
                ? 0
                : this._mainDataSourceRenderer.getHeight();
            }),
            (t.prototype.getDataSourceHeight = function () {
              return 0 === this._dataSourceRenderers.length
                ? 0
                : this._dataSourceRenderers[0].getHeight();
            }),
            (t.prototype._renderMainDataSourceEl = function () {
              null === this._mainDataSourceEl &&
                ((this._mainDataSourceEl = document.createElement("div")),
                this._parentEl.insertBefore(
                  this._mainDataSourceEl,
                  this._dataSourcesEl
                ));
            }),
            (t.prototype._renderDataSourcesEl = function () {
              null === this._dataSourcesEl &&
                ((this._dataSourcesEl = document.createElement("div")),
                this._dataSourcesEl.classList.add(m.sourcesWrapper),
                this._renderToggle(this._dataSourcesEl),
                (this._dataSourcesAdditionalWrapperEl =
                  document.createElement("div")),
                this._dataSourcesAdditionalWrapperEl.classList.add(m.sources),
                this._dataSourcesEl.appendChild(
                  this._dataSourcesAdditionalWrapperEl
                ),
                this._renderCollapsedCounter(
                  this._dataSourcesAdditionalWrapperEl
                ),
                this._parentEl.appendChild(this._dataSourcesEl));
            }),
            (t.prototype._renderToggle = function (t) {
              this._options.showToggleButton &&
                (this._renderToggler = new O(
                  t,
                  this._options.themedColor,
                  this._togglerOptions
                ));
            }),
            (t.prototype._renderCollapsedCounter = function (t) {
              (this._collapsedDataSourcesWrapperEl =
                document.createElement("div")),
                (this._collapsedDataSourcesWrapperEl.className =
                  m.item + " " + m.last),
                (this._collapsedDataSourcesEl = document.createElement("span")),
                (this._collapsedDataSourcesEl.className =
                  m.text + " apply-common-tooltip"),
                this._collapsedDataSourcesWrapperEl.append(
                  this._collapsedDataSourcesEl
                ),
                t.append(this._collapsedDataSourcesWrapperEl),
                h.a &&
                  this._collapsedDataSourcesWrapperEl.addEventListener(
                    "touchend",
                    this._showCollapsedDataSourcesTooltipHandler
                  ),
                this._updateCollapsedSourcesCount(
                  this._collapsedDataSourcesCountSpawn.value()
                );
            }),
            (t.prototype._showCollapsedDataSourcesTooltip = function () {
              Object(P.showOnElement)(this._collapsedDataSourcesEl, {
                text: this._options.collapsedDataSourcesTitle.value(),
              }),
                this._addOutsideEventForHideTooltip();
            }),
            (t.prototype._addOutsideEventForHideTooltip = function () {
              var t = this;
              null !== this._outsideEventForCollapsedTooltip &&
                this._outsideEventForCollapsedTooltip(),
                (this._outsideEventForCollapsedTooltip = Object(z.a)(
                  new CustomEvent("timestamp").timeStamp,
                  this._collapsedDataSourcesWrapperEl,
                  function () {
                    null !== t._outsideEventForCollapsedTooltip &&
                      t._outsideEventForCollapsedTooltip(),
                      Object(P.hide)();
                  },
                  window.document,
                  { touchEnd: !0 }
                ));
            }),
            (t.prototype._updateCollapsedSourcesCount = function (t) {
              if (
                null !== this._collapsedDataSourcesWrapperEl &&
                null !== this._collapsedDataSourcesEl
              ) {
                var e = 0 === t;
                this._collapsedDataSourcesWrapperEl.classList.toggle(
                  w.blockHidden,
                  e
                ),
                  e ||
                    (f(this._collapsedDataSourcesEl, "+" + t),
                    this._collapsedDataSourcesEl.setAttribute(
                      "title",
                      this._options.collapsedDataSourcesTitle.value()
                    ));
              }
            }),
            (t.prototype._updateLegendVisibility = function () {
              this._parentEl.classList.toggle(
                w.blockHidden,
                this._isAllLegendHidden.value()
              ),
                null !== this._dataSourcesEl &&
                  this._dataSourcesEl.classList.toggle(
                    w.blockHidden,
                    this._isStudiesLegendHidden.value()
                  );
            }),
            (t.prototype._setCustomBg = function () {
              var t = this._showBackground.value(),
                e = this._themedColor.value(),
                i = this._backgroundTransparency.value(),
                s = "";
              if (t) {
                var o = Object(u.parseRgb)(e),
                  n = o[0],
                  l = o[1],
                  a = o[2];
                s = Object(u.rgbaToString)([
                  n,
                  l,
                  a,
                  Object(u.normalizeAlphaComponent)(1 - i / 100),
                ]);
              }
              this._parentEl.style.color = s;
            }),
            (t.prototype._updateWrapText = function (t) {
              this._parentEl.classList.toggle(m.noWrap, !t);
            }),
            t
          );
        })(),
        R = i("Tmoa"),
        F = i("aIyQ"),
        G = i.n(F),
        U = i("Ialn"),
        X = i("QloM"),
        Z = i("1AAW"),
        J = i("CLNU");
      function Y(t) {
        return void 0 !== t ? R.resetTransparency(t) : t;
      }
      var q = window.t("Show"),
        K = window.t("Hide"),
        Q = (function () {
          function t(t, e, i, s, o) {
            var n = this;
            (this._values = new l.a([])),
              (this._actions = []),
              (this._onDestroy = new G.a()),
              (this._loading = new l.a(!1)),
              (this._moreActionCM = null),
              (this._model = t),
              (this._source = e),
              (this._options = i),
              (this._callbacks = s),
              (this._contextMenuOptions = o),
              (this._disabled = new l.a(this._getDisabledState())),
              (this._selected = new l.a(!1)),
              (this._isTitleHidden = new l.a(this._getTitleHiddenValue())),
              (this._isValuesHidden = new l.a(this._getValuesHiddenValue())),
              (this._isRowHidden = new l.a(this._getRowHiddenValue())),
              Object(Z.a)(
                function () {
                  return {};
                },
                this._isTitleHidden,
                this._isValuesHidden,
                this._disabled
              ).subscribe(this._updateRowVisibilities.bind(this)),
              this._values.subscribe(function () {
                n._isValuesHidden.setValue(n._getValuesHiddenValue());
              });
          }
          return (
            (t.prototype.destroy = function () {}),
            (t.prototype.onDestroy = function () {
              return this._onDestroy;
            }),
            (t.prototype.titles = function () {
              return this._titles.map(function (t) {
                return t.readonly();
              });
            }),
            (t.prototype.values = function () {
              return this._values.readonly();
            }),
            (t.prototype.actions = function () {
              return this._actions;
            }),
            (t.prototype.disabled = function () {
              return this._disabled.readonly();
            }),
            (t.prototype.selected = function () {
              return this._selected.readonly();
            }),
            (t.prototype.loading = function () {
              return this._loading.readonly();
            }),
            (t.prototype.isTitleHidden = function () {
              return this._isTitleHidden.readonly();
            }),
            (t.prototype.isValuesHidden = function () {
              return this._isValuesHidden.readonly();
            }),
            (t.prototype.isRowHidden = function () {
              return this._isRowHidden.readonly();
            }),
            (t.prototype.update = function () {
              this._updateTitle(), this._updateValues(), this._updateStates();
            }),
            (t.prototype.updateSource = function (t) {
              this._source !== t && ((this._source = t), this.update());
            }),
            (t.prototype.onToggleDisabled = function () {
              var t = this._source.properties().childs().visible,
                e = !t.value();
              this._model.setProperty(
                t,
                e,
                (e ? "Show" : "Hide") + " " + this._source.title()
              ),
                ji((e ? "Show" : "Hide") + " source");
            }),
            (t.prototype.onShowSettings = function () {
              this._source.userEditEnabled() &&
                (this.setSourceSelected(),
                this._callbacks.showChartPropertiesForSource(
                  this._source,
                  X.TabNames.style
                ),
                ji("Settings for source"));
            }),
            (t.prototype.onShowMoreActions = function (t) {
              return this._options.readOnlyMode
                ? Promise.resolve(null)
                : (this._callbacks.updateActions(),
                  ji("Show source context menu"),
                  this._callbacks.showContextMenuForSources(
                    [this._source],
                    this._calcNewPosition(t),
                    this._contextMenuOptions
                  ));
            }),
            (t.prototype.setSourceSelected = function () {
              var t = this;
              this._model.selectionMacro(function (e) {
                e.clearSelection(), e.addSourceToSelection(t._source);
              });
            }),
            (t.prototype._moreActionHandler = function (t) {
              var e = this;
              t.preventDefault(),
                null !== this._moreActionCM && this._moreActionCM.isShown()
                  ? (this._moreActionCM = null)
                  : (this.setSourceSelected(),
                    this.onShowMoreActions(t).then(function (t) {
                      e._moreActionCM = t;
                    }));
            }),
            (t.prototype._updateTitle = function () {
              var t = this._source.statusView();
              if (null !== t)
                for (
                  var e = t.getSplitTitle(), i = 0;
                  i < this._titles.length;
                  i++
                ) {
                  var s = e[i],
                    o = Object(J.clean)(
                      Array.isArray(s) ? s.join(" ") : s || "",
                      !0
                    );
                  this._titles[i].setValue(o);
                }
            }),
            (t.prototype._updateStates = function () {
              this._disabled.setValue(this._getDisabledState()),
                this._selected.setValue(
                  this._model.selection().isSelected(this._source)
                ),
                this._loading.setValue(Boolean(this._source.isLoading()));
            }),
            (t.prototype._hasValues = function () {
              return this._values.value().length > 0;
            }),
            (t.prototype._getEyeTitle = function () {
              return this._disabled.value() ? q : K;
            }),
            (t.prototype._getDisabledState = function () {
              return !this._source.properties().visible.value();
            }),
            (t.prototype._updateRowVisibilities = function () {
              this._isRowHidden.setValue(this._getRowHiddenValue());
            }),
            (t.prototype._getRowHiddenValue = function () {
              return (
                (this._options.readOnlyMode && this._disabled.value()) ||
                (this._isTitleHidden.value() &&
                  (this._isValuesHidden.value() || this._disabled.value()))
              );
            }),
            (t.prototype._calcNewPosition = function (t) {
              var e = {};
              if (
                (function (t) {
                  return t.hasOwnProperty("touches");
                })(t) &&
                t.touches.length > 0
              )
                e = {
                  clientX: t.touches[0].clientX,
                  clientY: t.touches[0].clientY,
                };
              else if (null !== t.target) {
                var i = t.target.getBoundingClientRect();
                e = {
                  clientX: Object(U.isRtl)() ? i.right : i.left,
                  clientY: i.top + i.height + 3,
                };
              } else {
                var s = t;
                e = { clientX: s.clientX, clientY: s.clientY };
              }
              return e;
            }),
            t
          );
        })(),
        $ = i("z4c1"),
        tt = i("61S9"),
        et = i("vWJB"),
        it = i("wZiV"),
        st = window.t("More"),
        ot = window.t("Flag Symbol"),
        nt = window.t("Unflag Symbol"),
        lt = d.enabled("show_hide_button_in_legend"),
        at = (function (t) {
          function e(e, i, s, o, n) {
            var a = t.call(this, e, i, s, o, n) || this;
            (a._titles = [new l.a(""), new l.a(""), new l.a(""), new l.a("")]),
              (a._symbolMarker = null),
              (a._symbolMarkerIcon = null),
              (a._flagged = new l.a(null)),
              (a._symbolAction = null),
              (a._symbol = null),
              (a._isOneButtonCanBeStick = !1),
              a._createActions(),
              a._updateSymbolMarker(),
              a._model
                .model()
                .properties()
                .paneProperties.legendProperties.showSeriesTitle.subscribe(
                  a,
                  function () {
                    a._isTitleHidden.setValue(a._getTitleHiddenValue());
                  }
                );
            for (
              var r = 0,
                u = [
                  a._model.model().properties().paneProperties.legendProperties
                    .showSeriesOHLC,
                  a._model.model().properties().paneProperties.legendProperties
                    .showBarChange,
                ];
              r < u.length;
              r++
            ) {
              u[r].subscribe(a, function () {
                a._isValuesHidden.setValue(a._getValuesHiddenValue());
              });
            }
            return (
              a.update(),
              a._source.onStatusChanged().subscribe(a, function () {
                a._loading.setValue(a._source.isLoading());
              }),
              a
            );
          }
          return (
            Object(s.c)(e, t),
            (e.prototype.destroy = function () {
              t.prototype.destroy.call(this),
                this._model
                  .model()
                  .properties()
                  .paneProperties.legendProperties.showSeriesTitle.unsubscribeAll(
                    this
                  ),
                this._model
                  .model()
                  .properties()
                  .paneProperties.legendProperties.showSeriesOHLC.unsubscribeAll(
                    this
                  ),
                this._model
                  .model()
                  .properties()
                  .paneProperties.legendProperties.showBarChange.unsubscribeAll(
                    this
                  ),
                this._source.onStatusChanged().unsubscribeAll(this),
                this._onDestroy.fire();
            }),
            (e.prototype.flagged = function () {
              return this._flagged.readonly();
            }),
            (e.prototype.onShowSettings = function () {
              this._source.userEditEnabled() &&
                this._callbacks.showGeneralChartProperties(X.TabNames.symbol);
            }),
            (e.prototype.isOneButtonCanBeStick = function () {
              return this._isOneButtonCanBeStick;
            }),
            (e.prototype._updateValues = function () {
              var t = this._source.legendView(),
                e = this._values.value(),
                i = t.marketTitle(),
                s = t.marketTitle().length > 0;
              if (0 === e.length) {
                var o = {
                    value: new l.a(""),
                    color: new l.a(""),
                    visible: new l.a(s),
                    title: new l.a(i),
                  },
                  n = t.items().map(function (t) {
                    return {
                      value: new l.a(t.value()),
                      color: new l.a(Y(t.color())),
                      visible: new l.a(t.visible()),
                      title: new l.a(t.title()),
                    };
                  });
                this._values.setValue([o].concat(n));
              } else {
                e[0].title.setValue(i), e[0].visible.setValue(s);
                for (var a = t.items(), r = 0; r < a.length; r++) {
                  var u = a[r];
                  e[r + 1].value.setValue(u.value()),
                    e[r + 1].color.setValue(Y(u.color())),
                    e[r + 1].visible.setValue(u.visible()),
                    e[r + 1].title.setValue(u.title());
                }
              }
            }),
            (e.prototype._updateStates = function () {
              t.prototype._updateStates.call(this), this._updateSymbolMarker();
            }),
            (e.prototype._getTitleHiddenValue = function () {
              return !this._model
                .model()
                .properties()
                .paneProperties.legendProperties.showSeriesTitle.value();
            }),
            (e.prototype._getValuesHiddenValue = function () {
              return (
                !this._hasValues() ||
                (!this._model
                  .model()
                  .properties()
                  .paneProperties.legendProperties.showSeriesOHLC.value() &&
                  !this._model
                    .model()
                    .properties()
                    .paneProperties.legendProperties.showBarChange.value())
              );
            }),
            (e.prototype._createActions = function () {
              var t = this;
              if (lt) {
                var e = {
                  iconMap: new Map([
                    ["large", tt],
                    ["small", $],
                  ]),
                  action: Object(b.c)(this.onToggleDisabled.bind(this)),
                  visible: new l.a(!0),
                  className: m.eye,
                  title: new l.a(this._getEyeTitle()),
                  dataset: { name: "legend-show-hide-action" },
                };
                this._actions.push(e),
                  this._disabled.subscribe(function () {
                    e.title.setValue(t._getEyeTitle());
                  });
              }
              this._actions.push({
                iconMap: new Map([
                  ["large", it],
                  ["small", et],
                ]),
                action: this._moreActionHandler.bind(this),
                visible: new l.a(!0),
                title: new l.a(st),
                dataset: { name: "legend-more-action" },
              });
            }),
            (e.prototype._getMarkerTitle = function () {
              return null !== this._symbolMarker
                ? this._symbolMarker.isMarked()
                  ? nt
                  : ot
                : "";
            }),
            (e.prototype._symbolActionHandler = function () {
              null !== this._symbolMarker &&
                (this._updateSymbolMarker(), ji("Change flag state"));
            }),
            (e.prototype._updateSymbolMarker = function () {
              this._isOneButtonCanBeStick = !0;
            }),
            e
          );
        })(Q),
        rt = i("3ClC"),
        ut = i("fZEr");
      var dt = i("z61+"),
        ht = i("txPx"),
        ct = i("RgOa"),
        pt = i("2CEX"),
        _t = i("D8x7"),
        bt = i("bNWL"),
        gt = (Object(ht.getLogger)("Chart.LegendWidget"), window.t("Settings")),
        vt = window.t("Source code"),
        mt = window.t("Remove"),
        wt = window.t("More"),
        yt =
          (window.t("Error"),
          window.t("Could not get Pine source code."),
          d.enabled("study_buttons_in_legend"),
          d.enabled("show_hide_button_in_legend")),
        ft = d.enabled("property_pages"),
        St = d.enabled("format_button_in_legend"),
        Mt = d.enabled("delete_button_in_legend"),
        Ct = (function (t) {
          function e(e, i, s, o, n) {
            var a = t.call(this, e, i, s, o, n) || this;
            return (
              (a._titles = [new l.a(""), new l.a("")]),
              (a._error = new l.a(!1)),
              (a._isPineScriptDataSource = new l.a(!1)),
              (a._pineAction = null),
              (a._globalVisibility = new l.a(!0)),
              a._createActions(),
              a._model
                .model()
                .properties()
                .paneProperties.legendProperties.showStudyTitles.subscribe(
                  a,
                  function () {
                    a._isTitleHidden.setValue(a._getTitleHiddenValue());
                  }
                ),
              a._model
                .model()
                .properties()
                .paneProperties.legendProperties.showStudyValues.subscribe(
                  a,
                  function () {
                    a._isValuesHidden.setValue(a._getValuesHiddenValue());
                  }
                ),
              a.update(),
              a
            );
          }
          return (
            Object(s.c)(e, t),
            (e.prototype.destroy = function () {
              t.prototype.destroy.call(this),
                this._model
                  .model()
                  .properties()
                  .paneProperties.legendProperties.showStudyTitles.unsubscribeAll(
                    this
                  ),
                this._model
                  .model()
                  .properties()
                  .paneProperties.legendProperties.showStudyValues.unsubscribeAll(
                    this
                  ),
                this._onDestroy.fire();
            }),
            (e.prototype.error = function () {
              return this._error.readonly();
            }),
            (e.prototype.isPineScriptDataSource = function () {
              return this._isPineScriptDataSource.readonly();
            }),
            (e.prototype.updateSource = function (e) {
              this._source !== e &&
                (this._values.setValue([]),
                t.prototype.updateSource.call(this, e),
                this._updateAbleShowSourceCode());
            }),
            (e.prototype.onRemoveSource = function () {
              var t;
              this._source.isUserDeletable() &&
                (this._source.hasChildren()
                  ? ((t = this._model.removeSource.bind(
                      this._model,
                      this._source,
                      !1
                    )),
                    Object(ut.a)({
                      title: window.t("Confirm Remove Study Tree"),
                      text: window.t(
                        "Do you really want to delete study and all of it's children?"
                      ),
                      onConfirm: function (e) {
                        var i = e.dialogClose;
                        t(), i();
                      },
                    }))
                  : this._model.removeSource(this._source, !1),
                ji("Remove sources"));
            }),
            (e.prototype.onShowSourceCode = function () {}),
            (e.prototype.setGlobalVisibility = function (t) {
              this._globalVisibility.setValue(t);
            }),
            (e.prototype.globalVisibility = function () {
              return this._globalVisibility.readonly();
            }),
            (e.prototype.getFullTitle = function () {
              return this._titles
                .map(function (t) {
                  return t.value();
                })
                .join(" ");
            }),
            (e.prototype._updateValues = function () {
              var t = this._source.legendView();
              if (null !== t && 0 !== t.items().length) {
                var e = this._values.value();
                if (0 === e.length) {
                  var i = t.items().map(function (t) {
                    return {
                      value: new l.a(t.value()),
                      color: new l.a(Y(t.color())),
                      visible: new l.a(t.visible()),
                    };
                  });
                  this._values.setValue(i);
                } else
                  for (var s = t.items(), o = 0; o < s.length; o++) {
                    var n = e[o],
                      a = s[o];
                    n.value.setValue(a.value()),
                      n.color.setValue(Y(a.color())),
                      n.visible.setValue(a.visible());
                  }
              }
            }),
            (e.prototype._updateStates = function () {
              t.prototype._updateStates.call(this),
                void 0 !== this._error &&
                  this._error.setValue(Boolean(this._source.isFailed()));
            }),
            (e.prototype._getTitleHiddenValue = function () {
              return !this._model
                .model()
                .properties()
                .paneProperties.legendProperties.showStudyTitles.value();
            }),
            (e.prototype._getValuesHiddenValue = function () {
              return (
                !this._hasValues() ||
                !this._model
                  .model()
                  .properties()
                  .paneProperties.legendProperties.showStudyValues.value()
              );
            }),
            (e.prototype._updateAbleShowSourceCode = function () {}),
            (e.prototype._updateVisibilityPineAction = function (t) {
              null !== this._pineAction &&
                (this._pineAction.visible.setValue(t),
                this._isPineScriptDataSource.setValue(t));
            }),
            (e.prototype._createActions = function () {
              var t = this;
              if (!this._options.readOnlyMode) {
                if (
                  ((this._pineAction = {
                    iconMap: new Map([
                      ["large", pt],
                      ["small", pt],
                    ]),
                    action: Object(b.c)(this.onShowSourceCode.bind(this)),
                    visible: new l.a(!1),
                    title: new l.a(vt),
                    dataset: { name: "legend-pine-action" },
                  }),
                  yt)
                ) {
                  var e = {
                    iconMap: new Map([
                      ["large", tt],
                      ["small", $],
                    ]),
                    action: Object(b.c)(this.onToggleDisabled.bind(this)),
                    visible: new l.a(!0),
                    className: m.eye,
                    title: new l.a(this._getEyeTitle()),
                    dataset: { name: "legend-show-hide-action" },
                  };
                  this._actions.push(e),
                    this._disabled.subscribe(function () {
                      e.title.setValue(t._getEyeTitle());
                    });
                }
                ft &&
                  St &&
                  (!Object(rt.isStudy)(this._source) ||
                    new dt.a(
                      this._source.metaInfo()
                    ).hasUserEditableOptions()) &&
                  this._actions.push({
                    iconMap: new Map([
                      ["large", ct],
                      ["small", ct],
                    ]),
                    action: Object(b.c)(this.onShowSettings.bind(this)),
                    visible: new l.a(!0),
                    title: new l.a(gt),
                    dataset: { name: "legend-settings-action" },
                  }),
                  Mt &&
                    this._actions.push({
                      iconMap: new Map([
                        ["large", bt],
                        ["small", _t],
                      ]),
                      action: Object(b.c)(this.onRemoveSource.bind(this)),
                      visible: new l.a(!0),
                      title: new l.a(mt),
                      dataset: { name: "legend-delete-action" },
                    }),
                  this._actions.push({
                    iconMap: new Map([
                      ["large", it],
                      ["small", et],
                    ]),
                    action: this._moreActionHandler.bind(this),
                    visible: new l.a(!0),
                    title: new l.a(wt),
                    dataset: { name: "legend-more-action" },
                  });
              }
            }),
            e
          );
        })(Q),
        Et = i("7KDR"),
        Vt = i("5VQP"),
        kt = i("x2L+"),
        xt = i("2uTr"),
        Lt = i("MXV9");
      function Tt(t, e, i) {
        t.setProperty(e, !e.value(), i);
      }
      function Wt(t, e, i, s, o, n) {
        return (function (t, e, i, s, o) {
          var n = [],
            l = s.get(0);
          if (void 0 !== l) {
            var a = l.get(1);
            void 0 !== a &&
              a.length > 0 &&
              (n.push.apply(n, a), n.push(new Et.Separator()));
          }
          var r = t.model().properties().paneProperties.legendProperties;
          n.push(
            new Et.Action({
              checkable: !0,
              checked: r.showSeriesTitle.value(),
              label: Ht,
              statName: "Show Symbol",
              onExecute: function () {
                return Tt(
                  t,
                  r.showSeriesTitle,
                  "Change Symbol Description Visibility"
                );
              },
            })
          ),
            e.showOpenMarketStatus &&
              n.push(
                new Et.Action({
                  checkable: !0,
                  checked: kt.b.value(),
                  label: Bt,
                  statName: "Show Open market status",
                  onExecute: function () {
                    return Tt(t, kt.b, "Change open market status visibility");
                  },
                })
              );
          if (
            (n.push(
              new Et.Action({
                checkable: !0,
                checked: r.showSeriesOHLC.value(),
                label: At,
                statName: "Show OHLC Values",
                onExecute: function () {
                  return Tt(
                    t,
                    r.showSeriesOHLC,
                    "Change OHLC Values Visibility"
                  );
                },
              })
            ),
            n.push(
              new Et.Action({
                checkable: !0,
                checked: r.showBarChange.value(),
                label: Ot,
                statName: "Show Bar Change Values",
                onExecute: function () {
                  return Tt(t, r.showBarChange, "Change Bar Change Visibility");
                },
              })
            ),
            n.push(new Et.Separator()),
            void 0 !== l)
          ) {
            var u = l.get(0);
            void 0 !== u &&
              u.length > 0 &&
              (n.push.apply(n, u), n.push(new Et.Separator()));
          }
          var d = s.get(1);
          if (void 0 !== d) {
            var h = d.get(1);
            void 0 !== h &&
              h.length > 0 &&
              (n.push.apply(n, h), n.push(new Et.Separator()));
          }
          if (
            (n.push(
              new Et.Action({
                checkable: !0,
                checked: r.showStudyTitles.value(),
                label: Pt,
                statName: "Show Indicator Titles",
                onExecute: function () {
                  return Tt(
                    t,
                    r.showStudyTitles,
                    "Change Indicator Titles Visibility"
                  );
                },
              })
            ),
            n.push(
              new Et.Action({
                checkable: !0,
                checked: r.showStudyArguments.value(),
                label: zt,
                statName: "Show Indicator Arguments",
                onExecute: function () {
                  return Tt(
                    t,
                    r.showStudyArguments,
                    "Change Indicator Arguments Visibility"
                  );
                },
              })
            ),
            n.push(
              new Et.Action({
                checkable: !0,
                checked: r.showStudyValues.value(),
                label: jt,
                statName: "Show Indicator Values",
                onExecute: function () {
                  return Tt(
                    t,
                    r.showStudyValues,
                    "Change Indicator Values Visibility"
                  );
                },
              })
            ),
            void 0 !== d)
          ) {
            var c = d.get(0);
            void 0 !== c &&
              c.length > 0 &&
              (n.push.apply(n, c), n.push(new Et.Separator()));
          }
          0;
          e.settings &&
            (n.push(new Et.Separator()),
            n.push(
              new Et.Action({
                label: Object(xt.appendEllipsis)(window.t("Settings")),
                icon: Lt,
                statName: "Settings...",
                onExecute: function () {
                  return i(X.TabNames.legend);
                },
              })
            ));
          return Vt.ContextMenuManager.createMenu(n, {}, o);
        })(t, e, i, s, n).then(function (t) {
          return t.show(o), t;
        });
      }
      var Ht = window.t("Show Symbol"),
        Bt = window.t("Show Open market status"),
        At = window.t("Show OHLC Values"),
        Ot = window.t("Show Bar Change Values"),
        Pt = window.t("Show Indicator Titles"),
        zt = window.t("Show Indicator Arguments"),
        jt = window.t("Show Indicator Values");
      window.t("Wrap text"), y.CheckMobile.any();
      var Dt = i("+DwS"),
        Nt = i("HGP3"),
        It = i("GOhO"),
        Rt = i("25b6"),
        Ft = i("rh3U"),
        Gt = (function () {
          function t(t) {
            (this.isBlinkingMode = new l.a(!1)),
              (this._status = new l.a(null)),
              (this._fullTooltip = new l.a(null)),
              (this._iconClassNames = new l.a(null)),
              (this._visible = new l.a(!1)),
              (this._tooltip = new l.a(null)),
              (this._icon = new l.a(null)),
              (this._className = new l.a(null)),
              (this._infoMaps = t),
              (this._size = t.size || "small"),
              this._status.subscribe(this._updateByStatus.bind(this), {
                callWithLast: !0,
              }),
              this._className.subscribe(this._updateIconClassName.bind(this));
          }
          return (
            (t.prototype.turnOffBlinkingMode = function () {}),
            (t.prototype.status = function () {
              return this._status;
            }),
            (t.prototype.tooltip = function () {
              return this._tooltip;
            }),
            (t.prototype.icon = function () {
              return this._icon;
            }),
            (t.prototype.className = function () {
              return this._className;
            }),
            (t.prototype.visible = function () {
              return this._visible;
            }),
            (t.prototype.size = function () {
              return this._size;
            }),
            (t.prototype.fullInfo = function () {
              return this._fullTooltip;
            }),
            (t.prototype._getTooltip = function (t) {
              var e, i;
              return null !==
                (i =
                  null === (e = this._infoMaps.tooltipMap) || void 0 === e
                    ? void 0
                    : e.get(t)) && void 0 !== i
                ? i
                : null;
            }),
            (t.prototype._getIcon = function (t) {
              var e,
                i = this._infoMaps.iconMap.get(t);
              return void 0 !== i && (e = i.get(this._size)), e || null;
            }),
            (t.prototype._getClassName = function (t) {
              return this._infoMaps.classNameMap.get(t) || null;
            }),
            (t.prototype._getTitle = function (t) {
              var e, i;
              return null !==
                (i =
                  null === (e = this._infoMaps.titleMap) || void 0 === e
                    ? void 0
                    : e.get(t)) && void 0 !== i
                ? i
                : null;
            }),
            (t.prototype._getTitleColor = function (t) {
              var e, i;
              return null !==
                (i =
                  null === (e = this._infoMaps.titleColorMap) || void 0 === e
                    ? void 0
                    : e.get(t)) && void 0 !== i
                ? i
                : null;
            }),
            (t.prototype._getHtml = function (t) {
              var e, i, o;
              return Object(s.b)(this, void 0, void 0, function () {
                return Object(s.d)(this, function (s) {
                  return [
                    2,
                    null !==
                      (o =
                        null ===
                          (i =
                            null === (e = this._infoMaps.htmlMap) ||
                            void 0 === e
                              ? void 0
                              : e.get(t)) || void 0 === i
                          ? void 0
                          : i.map(Rt.b)) && void 0 !== o
                      ? o
                      : null,
                  ];
                });
              });
            }),
            (t.prototype._getAction = function (t) {
              var e, i;
              return null !==
                (i =
                  null === (e = this._infoMaps.actionMap) || void 0 === e
                    ? void 0
                    : e.get(t)) && void 0 !== i
                ? i
                : null;
            }),
            (t.prototype._updateFullTooltipByStatus = function (t) {
              return Object(s.b)(this, void 0, void 0, function () {
                var e;
                return Object(s.d)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return [4, this._getHtml(t)];
                    case 1:
                      return (
                        (e = i.sent()),
                        this._status.value() !== t
                          ? [2]
                          : (this._fullTooltip.setValue([
                              {
                                icon: this._icon.value(),
                                iconClassName: this._iconClassNames.value(),
                                title: this._getTitle(t),
                                titleColor: this._getTitleColor(t),
                                html: e,
                                size: this._size,
                                action: this._getAction(t),
                              },
                            ]),
                            [2])
                      );
                  }
                });
              });
            }),
            (t.prototype._updateByStatus = function (t) {
              if (null === t)
                return (
                  this._icon.setValue(null),
                  this._tooltip.setValue(null),
                  void this._visible.setValue(!1)
                );
              this._icon.setValue(this._getIcon(t)),
                this._className.setValue(this._getClassName(t)),
                this._tooltip.setValue(this._getTooltip(t)),
                this._visible.setValue(!0),
                this._updateFullTooltipByStatus(t);
            }),
            (t.prototype._updateIconClassName = function (t) {
              null !== t
                ? this._iconClassNames.setValue([Ft.statusItem, t])
                : this._iconClassNames.setValue(null);
            }),
            t
          );
        })(),
        Ut = i("Vdly"),
        Xt = [];
      function Zt() {
        return Ut.getJSON("tv.alreadyBlinkedStatuses", Xt);
      }
      var Jt = new l.a(Zt());
      Ut.onSync.subscribe(null, function () {
        return Jt.setValue(Zt());
      });
      var Yt = Jt,
        qt = i("Cf1E"),
        Kt = i("VrrN"),
        Qt = i("VrXG"),
        $t = i("LIcf"),
        te = i("Uua9"),
        ee = i("9Crk"),
        ie = i("Tq3g"),
        se = Object(ht.getLogger)("Chart.LegendWidget"),
        oe = new Map([
          [
            "DelayToRealtime",
            new Map([
              ["small", Kt],
              ["large", Qt],
            ]),
          ],
          [
            "DelayNoRealtime",
            new Map([
              ["small", Kt],
              ["large", Qt],
            ]),
          ],
          [
            "TFEXDelayForGuest",
            new Map([
              ["small", Kt],
              ["large", Qt],
            ]),
          ],
          [
            "MOEXDelayForGuest",
            new Map([
              ["small", Kt],
              ["large", Qt],
            ]),
          ],
          [
            "EOD",
            new Map([
              ["small", $t],
              ["large", te],
            ]),
          ],
          [
            "TickByTick",
            new Map([
              ["small", ee],
              ["large", ie],
            ]),
          ],
          [
            "BATSToRealtime",
            new Map([
              ["small", ee],
              ["large", ie],
            ]),
          ],
        ]),
        ne = new Map([
          ["DelayToRealtime", Ft.delay],
          ["DelayNoRealtime", Ft.delay],
          ["TFEXDelayForGuest", Ft.delay],
          ["MOEXDelayForGuest", Ft.delay],
          ["EOD", Ft.eod],
          ["TickByTick", Ft.notAccurate],
          ["BATSToRealtime", Ft.notAccurate],
        ]),
        le = new Map([
          ["DelayToRealtime", Nt.a["color-delay-mode"]],
          ["DelayNoRealtime", Nt.a["color-delay-mode"]],
          ["TFEXDelayForGuest", Nt.a["color-delay-mode"]],
          ["MOEXDelayForGuest", Nt.a["color-delay-mode"]],
          ["EOD", Nt.a["color-eod-mode"]],
          ["TickByTick", Nt.a["color-notaccurate-mode"]],
          ["BATSToRealtime", Nt.a["color-notaccurate-mode"]],
        ]),
        ae = window.t("Data is delayed"),
        re = window.t("End of day data"),
        ue = window.t("One update per second"),
        de = window.t("Cboe BZX"),
        he = window.t("{exchange} by {originalExchange}"),
        ce = Object(Rt.b)(
          window.t("{symbolName} data is delayed by {time} minutes.")
        ),
        pe = Object(Rt.b)(
          window.t(
            "{listedExchange} real-time data is available for free to registered users."
          )
        ),
        _e = Object(Rt.b)(
          window.t(
            "To get real-time data for {description}, please buy the real-time data package."
          )
        ),
        be = Object(Rt.b)(
          window.t(
            "Real-time data for {description} is not supported right now. We may support it in the future."
          )
        ),
        ge = Object(Rt.b)(window.t("Data is updated once a day.")),
        ve = Object(Rt.b)(
          window.t(
            "Data on our Basic plan is updated once per second, even if there are more updates on the market."
          )
        ),
        me = Object(Rt.b)(
          window.t(
            "Data is updated once per second, even if there are more updates on the market."
          )
        ),
        we = Object(Rt.b)(window.t("Paid plans feature faster data updates.")),
        ye = Object(Rt.b)(
          window.t(
            "Real-time data for {symbolName} is provided by {exchange} exchange."
          )
        ),
        fe = Object(Rt.b)(
          window.t(
            "This data is real-time, but it’s slightly different to its official counterpart coming from primary exchanges."
          )
        ),
        Se = Object(Rt.b)(
          window.t(
            "This data is real-time, but it’s slightly different to its official counterpart coming from {exchange}."
          )
        ),
        Me =
          (window.t("Create a free account"),
          window.t("Learn more"),
          (function (t) {
            function e(e, i, s) {
              var o =
                t.call(this, {
                  iconMap: oe,
                  classNameMap: ne,
                  titleColorMap: le,
                  size: i,
                }) || this;
              return (
                (o._dataUpdatedMode = new l.a(null).spawn()),
                (o._options = s),
                (o._model = e),
                (o._dataModeBlinkingStatuses = Yt.spawn()),
                o._dataModeBlinkingStatuses.subscribe(
                  o._updateBlinkingMode.bind(o)
                ),
                (o.turnOffBlinkingMode = o._turnOffBlinking.bind(o)),
                o.setModel(e),
                o
              );
            }
            return (
              Object(s.c)(e, t),
              (e.prototype.destroy = function () {
                this._dataUpdatedMode.destroy(),
                  this._dataModeBlinkingStatuses.destroy();
              }),
              (e.prototype.setModel = function (t) {
                if ((this._dataUpdatedMode.destroy(), null === t))
                  return (
                    (this._model = t),
                    void (this._dataUpdatedMode = new l.a(null).spawn())
                  );
                (this._dataUpdatedMode = t.status().spawn()),
                  this._dataUpdatedMode.subscribe(
                    this._updateStatus.bind(this),
                    { callWithLast: !0 }
                  );
              }),
              (e.prototype._getTooltip = function () {
                var t = this._getShortTexts();
                return null === t ? null : Object.values(t).join(" · ");
              }),
              (e.prototype._updateFullTooltipByStatus = function () {
                return Object(s.b)(this, void 0, void 0, function () {
                  var t, e, i, o, n, l, a, r;
                  return Object(s.d)(this, function (s) {
                    switch (s.label) {
                      case 0:
                        return null === (t = this._dataUpdatedMode.value())
                          ? (this._fullTooltip.setValue(null), [2])
                          : ((e = this._getShortTexts()),
                            [4, this._getHtmls()]);
                      case 1:
                        return (i = s.sent()), [4, this._getActions()];
                      case 2:
                        if (
                          ((o = s.sent()), t !== this._dataUpdatedMode.value())
                        )
                          return [2];
                        for (n = [], l = 0, a = t; l < a.length; l++)
                          (r = a[l]),
                            n.push({
                              icon: this._getIcon(r),
                              iconClassName: this._iconClassNames.value(),
                              title: e && e[r],
                              titleColor: this._getTitleColor(r),
                              html: i && i[r],
                              size: this._size,
                              action: o && o[r],
                            });
                        return this._fullTooltip.setValue(n), [2];
                    }
                  });
                });
              }),
              (e.prototype._updateStatus = function (e) {
                var i = null !== e ? e[0] : null;
                t.prototype._updateByStatus.call(this, i),
                  this._updateBlinkingMode();
              }),
              (e.prototype._getHtmls = function () {
                return Object(s.b)(this, void 0, void 0, function () {
                  var t, e, i, o, n, l, a, r, u, d;
                  return Object(s.d)(this, function (s) {
                    switch (s.label) {
                      case 0:
                        if (
                          null === (t = this._dataUpdatedMode.value()) ||
                          null === this._model
                        )
                          return [2, Promise.resolve(null)];
                        (e = {}),
                          (i = this._model.symbolName()),
                          (o = null),
                          (n = null),
                          (s.label = 1);
                      case 1:
                        return (
                          s.trys.push([1, 3, , 4]),
                          [4, this._model.description()]
                        );
                      case 2:
                        return (
                          (o = s.sent()), (n = this._model.exchange()), [3, 4]
                        );
                      case 3:
                        return (
                          (l = s.sent()),
                          se.logError(
                            "Can't get exchange description, reason: " +
                              Object(qt.a)(l)
                          ),
                          [3, 4]
                        );
                      case 4:
                        for (a = 0, r = t; a < r.length; a++)
                          (u = r[a]),
                            (e[u] = []),
                            ("DelayToRealtime" !== u &&
                              "DelayNoRealtime" !== u &&
                              "TFEXDelayForGuest" !== u &&
                              "MOEXDelayForGuest" !== u) ||
                              (e[u].push(
                                ce.format({
                                  symbolName: i,
                                  time: this._model.time().toString(),
                                })
                              ),
                              this._options.subscriptionFullInfo &&
                                null !== o &&
                                "DelayToRealtime" === u &&
                                e[u].push(
                                  _e.format({ description: "<b>" + o + "</b>" })
                                ),
                              null !== o &&
                                "DelayNoRealtime" === u &&
                                e[u].push(
                                  be.format({ description: "<b>" + o + "</b>" })
                                ),
                              this._options.subscriptionFullInfo &&
                                (u.includes("TFEXDelayForGuest") ||
                                  u.includes("MOEXDelayForGuest")) &&
                                e[u].push(
                                  pe.format({
                                    listedExchange:
                                      this._model.listedExchange(),
                                  })
                                )),
                            "EOD" === u && (e[u] = [ge]),
                            "TickByTick" === u &&
                              (e[u].push(
                                this._options.subscriptionFullInfo ? ve : me
                              ),
                              this._options.subscriptionFullInfo &&
                                e[u].push(we)),
                            null !== n &&
                              "BATSToRealtime" === u &&
                              ((d = this._model.listedExchange()),
                              e[u].push(
                                ye.format({ symbolName: i, exchange: n }),
                                "" !== d ? Se.format({ exchange: d }) : fe
                              ));
                        return Object.keys(e).length > 0 ? [2, e] : [2, null];
                    }
                  });
                });
              }),
              (e.prototype._getActions = function () {
                return Object(s.b)(this, void 0, void 0, function () {
                  var t, e, i, o, n;
                  return Object(s.d)(this, function (s) {
                    switch (s.label) {
                      case 0:
                        return null === this._dataUpdatedMode.value() ||
                          null === this._model
                          ? [2, null]
                          : ((t = {}), [3, 4]);
                      case 1:
                        return i < o.length ? ((n = o[i]), [5, e(n)]) : [3, 4];
                      case 2:
                        s.sent(), (s.label = 3);
                      case 3:
                        return i++, [3, 1];
                      case 4:
                        return Object.keys(t).length > 0 ? [2, t] : [2, null];
                    }
                  });
                });
              }),
              (e.prototype._getShortTexts = function () {
                var t = this._dataUpdatedMode.value();
                if (null === t || null === this._model) return null;
                for (var e = {}, i = 0, s = t; i < s.length; i++) {
                  var o = s[i];
                  if (
                    (("DelayToRealtime" !== o &&
                      "DelayNoRealtime" !== o &&
                      "TFEXDelayForGuest" !== o &&
                      "MOEXDelayForGuest" !== o) ||
                      (e[o] = ae),
                    "EOD" === o && (e[o] = re),
                    "TickByTick" === o && (e[o] = ue),
                    "BATSToRealtime" === o)
                  ) {
                    var n = this._model.listedExchange();
                    e[o] =
                      "" !== n
                        ? he.format({ exchange: n, originalExchange: de })
                        : de;
                  }
                }
                return Object.keys(e).length > 0 ? e : null;
              }),
              (e.prototype._updateBlinkingMode = function () {
                var t = this._dataUpdatedMode.value();
                if (null !== t) {
                  for (
                    var e = this._dataModeBlinkingStatuses.value(),
                      i = 0,
                      s = t;
                    i < s.length;
                    i++
                  ) {
                    var o = s[i];
                    if (!e.includes(o))
                      return void this.isBlinkingMode.setValue(!0);
                  }
                  this.isBlinkingMode.setValue(!1);
                }
              }),
              (e.prototype._turnOffBlinking = function () {
                var t,
                  e,
                  i = this._dataUpdatedMode.value();
                if (null !== i)
                  for (var s = 0, o = i; s < o.length; s++) {
                    var n = o[s];
                    (t = n),
                      (e = void 0),
                      (e = Ut.getJSON(
                        "tv.alreadyBlinkedStatuses",
                        Xt
                      )).includes(t) ||
                        (e.push(t),
                        Ut.setJSON("tv.alreadyBlinkedStatuses", e),
                        Jt.setValue(Zt()));
                  }
              }),
              e
            );
          })(Gt)),
        Ce = i("JmzL"),
        Ee = i("M3mX"),
        Ve = window.t("Study Error"),
        ke = new Map([
          [
            !0,
            new Map([
              ["small", Ce],
              ["large", Ee],
            ]),
          ],
          [
            !1,
            new Map([
              ["small", ""],
              ["large", ""],
            ]),
          ],
        ]),
        xe = new Map([
          [!0, Ft.dataProblemLow],
          [!1, null],
        ]),
        Le = new Map([
          [!0, Ve],
          [!1, null],
        ]),
        Te = new Map([
          [!0, Ve],
          [!1, null],
        ]),
        We = new Map([
          [!0, Nt.a["color-data-problem"]],
          [!1, null],
        ]);
      new Map();
      var He = (function (t) {
          function e(e, i, s) {
            var o =
              t.call(this, {
                iconMap: ke,
                classNameMap: xe,
                tooltipMap: Le,
                titleMap: Te,
                titleColorMap: We,
                size: i,
              }) || this;
            return (
              (o._dataSourceErrorStatus = new l.a(null).spawn()),
              (o._lastError = null),
              (o._options = s),
              o.setSource(e),
              o
            );
          }
          return (
            Object(s.c)(e, t),
            (e.prototype.destroy = function () {
              this._dataSourceErrorStatus.destroy();
            }),
            (e.prototype.setSource = function (t) {
              this._dataSourceErrorStatus.destroy(),
                (this._source = t),
                (this._dataSourceErrorStatus = Object(It.b)(function () {
                  return (function (t) {
                    return t.isFailed() && !t.isSymbolInvalid()
                      ? t.status()
                      : null;
                  })(t);
                }, t.onStatusChanged())),
                this._dataSourceErrorStatus.subscribe(
                  this._updateStatus.bind(this),
                  { callWithLast: !0 }
                );
            }),
            (e.prototype._getHtml = function (t) {
              return Object(s.b)(this, void 0, void 0, function () {
                return Object(s.d)(this, function (t) {
                  return [2, [this._source.status()]];
                });
              });
            }),
            (e.prototype._getAction = function (t) {
              return null;
            }),
            (e.prototype._updateStatus = function (t) {
              var e = this._status.value();
              t
                ? (this._status.setValue(!0),
                  e && this._lastError !== t && this._updateByStatus(!0))
                : this._status.setValue(null),
                (this._lastError = t);
            }),
            e
          );
        })(Gt),
        Be = (i("YFKU"), window.t("Data problem")),
        Ae = new Map([
          [
            "high",
            new Map([
              ["small", Ce],
              ["large", Ee],
            ]),
          ],
          [
            "low",
            new Map([
              ["small", Ce],
              ["large", Ee],
            ]),
          ],
        ]),
        Oe = new Map([
          ["high", Ft.dataProblemHigh],
          ["low", Ft.dataProblemLow],
        ]),
        Pe = new Map([
          ["high", Be],
          ["low", Be],
        ]),
        ze = new Map([
          ["high", Nt.a["color-data-problem"]],
          ["low", Nt.a["color-data-problem"]],
        ]);
      var je = (function (t) {
          function e(e, i) {
            var s =
              t.call(this, {
                tooltipMap: Pe,
                iconMap: Ae,
                classNameMap: Oe,
                titleMap: Pe,
                titleColorMap: ze,
                size: i,
              }) || this;
            return (
              (s._dataProblem = new l.a(null).spawn()),
              (s._isDataProblemCritical = new l.a(!1)),
              s.setModel(e),
              s
            );
          }
          return (
            Object(s.c)(e, t),
            (e.prototype.destroy = function () {
              this._dataProblem.destroy();
            }),
            (e.prototype.isDataProblemCritical = function () {
              return this._isDataProblemCritical;
            }),
            (e.prototype.setModel = function (t) {
              this._dataProblem.destroy(),
                null !== t
                  ? ((this._dataProblem = t.status().spawn()),
                    this._dataProblem.subscribe(this._updateStatus.bind(this), {
                      callWithLast: !0,
                    }))
                  : (this._dataProblem = new l.a(null).spawn());
            }),
            (e.prototype._getHtml = function (t) {
              return Object(s.b)(this, void 0, void 0, function () {
                var t;
                return Object(s.d)(this, function (e) {
                  return null === (t = this._dataProblem.value())
                    ? [2, null]
                    : [2, [Object(Rt.b)(t.text)]];
                });
              });
            }),
            (e.prototype._updateStatus = function (t) {
              var e,
                i =
                  null !== (e = null == t ? void 0 : t.severity) && void 0 !== e
                    ? e
                    : null;
              this._status.setValue(i),
                this._isDataProblemCritical.setValue(
                  (function (t) {
                    return "high" === t;
                  })(i)
                );
            }),
            e
          );
        })(Gt),
        De = (function (t) {
          function e(e, i) {
            var s = t.call(this, i) || this;
            return (
              (s._booleanStatus = new l.a(!1).spawn()), s.updateStatus(e), s
            );
          }
          return (
            Object(s.c)(e, t),
            (e.prototype.destroy = function () {
              this._booleanStatus.destroy();
            }),
            (e.prototype.updateStatus = function (t) {
              this._booleanStatus.destroy(),
                (this._booleanStatus = t.spawn()),
                this._booleanStatus.subscribe(this._updateStatus.bind(this), {
                  callWithLast: !0,
                });
            }),
            (e.prototype._updateStatus = function (t) {
              t ? this._status.setValue(!0) : this._status.setValue(null);
            }),
            e
          );
        })(Gt),
        Ne = i("YGQl"),
        Ie = i("Jjb7"),
        Re = window.t("Invalid Symbol"),
        Fe = window.t("This symbol doesn't exist, please pick another one."),
        Ge = new Map([
          [
            !0,
            new Map([
              ["small", Ne],
              ["large", Ie],
            ]),
          ],
          [
            !1,
            new Map([
              ["small", ""],
              ["large", ""],
            ]),
          ],
        ]),
        Ue = new Map([
          [!0, Ft.invalidSymbol],
          [!1, null],
        ]),
        Xe = new Map([
          [!0, Re],
          [!1, null],
        ]),
        Ze = new Map([
          [!0, Re],
          [!1, null],
        ]),
        Je = new Map([
          [!0, Nt.a["color-invalid-symbol"]],
          [!1, null],
        ]),
        Ye = new Map([
          [!0, [Fe]],
          [!1, null],
        ]),
        qe = new Map([
          [!0, null],
          [!1, null],
        ]),
        Ke = (function () {
          function t(t) {
            (this._el = document.createElement("div")),
              (this._prevCustomClass = null),
              (this._icon = t.icon.spawn()),
              this._icon.subscribe(this._updateIcon.bind(this), {
                callWithLast: !0,
              }),
              (this._className = t.className.spawn()),
              this._className.subscribe(this._updateClassName.bind(this), {
                callWithLast: !0,
              }),
              (this._visible = t.visible.spawn()),
              this._visible.subscribe(this._updateVisibility.bind(this), {
                callWithLast: !0,
              }),
              (this._size = t.size || "small"),
              this._render(t.parentEl),
              t.isBlinking &&
                ((this._isBlinking = t.isBlinking.spawn()),
                this._isBlinking.subscribe(
                  this._updateBlinkingMode.bind(this),
                  { callWithLast: !0 }
                ),
                (this._turnOffBlinking = t.turnOffBlinking));
          }
          return (
            (t.prototype.destroy = function () {
              this._visible.destroy(),
                this._icon.destroy(),
                this._isBlinking && this._isBlinking.destroy(),
                this._el.remove();
            }),
            (t.prototype.onClick = function () {
              this._turnOffBlinking && this._turnOffBlinking();
            }),
            (t.prototype.visible = function () {
              return this._visible;
            }),
            (t.prototype._render = function (t) {
              this._el.classList.add(Ft.statusItem, Ft[this._size]),
                t.appendChild(this._el);
            }),
            (t.prototype._updateVisibility = function (t) {
              this._el.classList.toggle("js-hidden", !t);
            }),
            (t.prototype._updateIcon = function (t) {
              this._el.innerHTML = t || "";
            }),
            (t.prototype._updateClassName = function (t) {
              this._prevCustomClass !== t &&
                (null !== this._prevCustomClass &&
                  this._el.classList.remove(this._prevCustomClass),
                null !== t && this._el.classList.add(t),
                (this._prevCustomClass = t));
            }),
            (t.prototype._updateBlinkingMode = function (t) {
              this._el.classList.toggle(Ft.blinking, t);
            }),
            t
          );
        })(),
        Qe = (function () {
          function t(t, e, i, o) {
            var n;
            (this.element = document.createElement("div")),
              (this._blinkingSpawns = []),
              (this._iconsRenderers = []);
            var l = [Ft.statuses, "apply-common-tooltip"];
            h.a && l.push(Ft.touchMode),
              (n = this.element.classList).add.apply(
                n,
                Object(s.f)(l, [Ft[t]])
              ),
              (this._visibleWidgetsCount = e.spawn()),
              this._visibleWidgetsCount.subscribe(
                this._updateSpecialClassAndTooltip.bind(this)
              ),
              (this._tooltips = i.spawn()),
              this._tooltips.subscribe(this._updateTooltip.bind(this)),
              (this._onClickCallback = o.onClick),
              (this._onClickHandler = this._onClick.bind(this)),
              this.element.addEventListener("click", this._onClickHandler);
          }
          return (
            (t.prototype.destroy = function () {
              for (var t = 0, e = this._iconsRenderers; t < e.length; t++) {
                e[t].destroy();
              }
              for (var i = 0, s = this._blinkingSpawns; i < s.length; i++) {
                s[i].destroy();
              }
              this._visibleWidgetsCount.destroy(),
                this._tooltips.destroy(),
                this.element.removeEventListener("click", this._onClickHandler),
                this.element.remove();
            }),
            (t.prototype.addStatusModel = function (t) {
              this._iconsRenderers.push(
                new Ke({
                  visible: t.visible,
                  icon: t.model.icon(),
                  className: t.model.className(),
                  size: t.model.size(),
                  parentEl: this.element,
                  isBlinking: t.model.isBlinkingMode,
                  turnOffBlinking: t.model.turnOffBlinkingMode,
                })
              );
              var e = t.model.isBlinkingMode.spawn();
              e.subscribe(this._updateBlinkingMode.bind(this)),
                this._blinkingSpawns.push(e),
                this._updateBlinkingMode();
            }),
            (t.prototype._onClick = function (t) {
              t.preventDefault();
              for (
                var e = this._iconsRenderers.filter(function (t) {
                    return t.visible().value();
                  }),
                  i = 0,
                  s = e;
                i < s.length;
                i++
              ) {
                s[i].onClick();
              }
              var o = 14;
              e.length > 1 && (o -= 2);
              var n = this.element.getBoundingClientRect(),
                l = { x: n.left - o, y: n.bottom + 4 };
              this._onClickCallback(l);
            }),
            (t.prototype._updateTooltip = function () {
              this.element.setAttribute(
                "title",
                this._tooltips.value().join(" · ")
              );
            }),
            (t.prototype._updateSpecialClassAndTooltip = function () {
              var t = this._visibleWidgetsCount.value();
              this.element.classList.toggle(Ft.oneWidgetsVisible, 1 === t),
                this.element.classList.toggle(Ft.twoWidgetsVisible, 2 === t),
                this.element.classList.toggle(Ft.threeWidgetsVisible, 3 === t),
                this._updateTooltip();
            }),
            (t.prototype._updateBlinkingMode = function () {
              var t = this._blinkingSpawns.some(function (t) {
                return t.value();
              });
              this.element.classList.toggle(Ft.blinking, t);
            }),
            t
          );
        })(),
        $e = i("9lPX"),
        ti = i("MyT/"),
        ei = i("jXu8"),
        ii = i("cbig"),
        si = i("G2LI"),
        oi = i("QkND"),
        ni = i("Gp/h"),
        li = i("S48P"),
        ai = window.t("Market open"),
        ri = window.t("Pre-market"),
        ui = window.t("Post-market"),
        di = window.t("Market closed"),
        hi = window.t("Holiday"),
        ci = window.t("All's well — Market is open."),
        pi = window.t("Morning. Market is open for pre-market trading."),
        _i = window.t("Evening. Market is open for post-market trading."),
        bi = window.t("Time for a walk — this market is closed."),
        gi = window.t("Market is currently on holiday. Lucky them."),
        vi = new Map([
          [
            "market",
            new Map([
              ["small", ti],
              ["large", ei],
            ]),
          ],
          [
            "pre_market",
            new Map([
              ["small", ni],
              ["large", li],
            ]),
          ],
          [
            "post_market",
            new Map([
              ["small", si],
              ["large", oi],
            ]),
          ],
          [
            "out_of_session",
            new Map([
              ["small", $e],
              ["large", $e],
            ]),
          ],
          [
            "holiday",
            new Map([
              ["small", ii],
              ["large", ii],
            ]),
          ],
        ]),
        mi = new Map([
          ["market", Ft.marketStatusOpen],
          ["pre_market", Ft.marketStatusPre],
          ["post_market", Ft.marketStatusPost],
          ["out_of_session", Ft.marketStatusClose],
          ["holiday", Ft.marketStatusHoliday],
        ]),
        wi = new Map([
          ["market", ai],
          ["pre_market", ri],
          ["post_market", ui],
          ["out_of_session", di],
          ["holiday", hi],
        ]),
        yi = new Map([
          ["market", ai],
          ["pre_market", ri],
          ["post_market", ui],
          ["out_of_session", di],
          ["holiday", hi],
        ]),
        fi = new Map([
          ["market", Nt.a["color-market-open"]],
          ["pre_market", Nt.a["color-pre-market"]],
          ["post_market", Nt.a["color-post-market"]],
          ["out_of_session", Nt.a["color-market-closed"]],
          ["holiday", Nt.a["color-market-holiday"]],
        ]),
        Si = new Map([
          ["market", [ci]],
          ["pre_market", [pi]],
          ["post_market", [_i]],
          ["out_of_session", [bi]],
          ["holiday", [gi]],
        ]),
        Mi = new Map([
          ["market", null],
          ["pre_market", null],
          ["post_market", null],
          ["out_of_session", null],
          ["holiday", null],
        ]),
        Ci = window.t("You can turn this data on or off."),
        Ei = (function (t) {
          function e(e, i, s) {
            var o =
              t.call(this, {
                tooltipMap: wi,
                iconMap: vi,
                classNameMap: mi,
                titleMap: yi,
                titleColorMap: fi,
                htmlMap: Si,
                actionMap: Mi,
                size: i,
              }) || this;
            return (
              (o._marketStatus = new l.a(null).spawn()),
              (o._options = s),
              o.setModel(e),
              o
            );
          }
          return (
            Object(s.c)(e, t),
            (e.prototype.destroy = function () {
              this._marketStatus.destroy();
            }),
            (e.prototype.setModel = function (t) {
              this._marketStatus.destroy(),
                null !== t
                  ? ((this._marketStatus = t.status().spawn()),
                    this._marketStatus.subscribe(
                      this._updateStatus.bind(this),
                      { callWithLast: !0 }
                    ))
                  : (this._marketStatus = new l.a(null).spawn());
            }),
            (e.prototype._getHtml = function (e) {
              return Object(s.b)(this, void 0, void 0, function () {
                var i;
                return Object(s.d)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return [4, t.prototype._getHtml.call(this, e)];
                    case 1:
                      return (
                        null !== (i = s.sent()) &&
                          (this._options.preMarketSolution ||
                            this._options.postMarketSolution) &&
                          ("pre_market" === e &&
                            this._options.preMarketSolution &&
                            i.push(Ci),
                          "post_market" === e &&
                            this._options.postMarketSolution &&
                            i.push(Ci)),
                        [2, i]
                      );
                  }
                });
              });
            }),
            (e.prototype._getAction = function (e) {
              return t.prototype._getAction.call(this, e);
            }),
            (e.prototype._updateStatus = function (t) {
              this._status.setValue(t);
            }),
            e
          );
        })(Gt),
        Vi = i("JWMC");
      var ki = (function () {
          function t(t, e, i) {
            (this.visibleWidgetsCount = new l.a(0)),
              (this.errorWidgetIsShown = new l.a(!1)),
              (this._size = h.a ? "large" : "small"),
              (this._tooltips = new l.a([])),
              (this._visibilitySpawns = []),
              (this._tooltipSpawns = []),
              (this._statusWidgetInfos = []),
              (this._renderer = new Qe(
                this._size,
                this.visibleWidgetsCount,
                this._tooltips,
                { onClick: this._handleToggleDropdown.bind(this) }
              )),
              (this._symbolInvalidViewModel = null),
              (this._dataSourceErrorStatusViewModel = null),
              (this._marketStatusViewModel = null),
              (this._dataUpdatedModeViewModel = null),
              (this._dataProblemViewModel = null),
              (this._isSymbolInvalid = null),
              (this._dataSourceHasErrorVisible = null),
              (this._studyErrorCanBeShown = new l.a(!1)),
              (this._marketStatusCanBeShown = new l.a(!1)),
              (this._dataUpdatedModeCanBeShown = new l.a(!1)),
              (this._dataProblemCanBeShown = new l.a(!1)),
              (this._isDataProblemCritical = null),
              (this._container = document.createElement("div")),
              (this._menuOpened = !1),
              (this._menuPosition = null),
              (this._source = t),
              (this._model = e),
              (this._options = i),
              this._recreateWidgets(),
              this._addSubscriptionForSymbolInvalid(),
              null !== this._dataSourceHasErrorVisible &&
                (this._dataSourceHasErrorVisible.subscribe(
                  this._updateStatusWidgetsVisibilities.bind(this)
                ),
                this._dataSourceHasErrorVisible.subscribe(
                  this._updateErrorWidgetIsShown.bind(this)
                )),
              this._options.dataProblemEnabled &&
                null !== this._isDataProblemCritical &&
                this._isDataProblemCritical.subscribe(
                  this._updateStatusWidgetsVisibilities.bind(this)
                );
            for (var s = 0, o = this._tooltipSpawns; s < o.length; s++) {
              o[s].subscribe(this._updateTooltips.bind(this));
            }
            for (var n = 0, a = this._visibilitySpawns; n < a.length; n++) {
              var r = a[n];
              r.subscribe(this._updateVisibleWidgetsCount.bind(this)),
                r.subscribe(this._updateTooltips.bind(this));
            }
            this._updateErrorWidgetIsShown(),
              this._updateStatusWidgetsVisibilities(),
              this._updateVisibleWidgetsCount(),
              this._updateTooltips();
          }
          return (
            (t.prototype.destroy = function () {
              var t;
              this._source.properties().hasChild("symbol") &&
                this._source
                  .properties()
                  .symbol.listeners()
                  .unsubscribeAll(this),
                this._options.sourceStatusesEnabled &&
                  null !== this._isSymbolInvalid &&
                  this._isSymbolInvalid.destroy(),
                null === (t = this._isDataProblemCritical) ||
                  void 0 === t ||
                  t.destroy();
              for (var e = 0, i = this._tooltipSpawns; e < i.length; e++) {
                i[e].destroy();
              }
              for (var s = 0, o = this._visibilitySpawns; s < o.length; s++) {
                o[s].destroy();
              }
              this.visibleWidgetsCount.unsubscribe();
              for (var n = 0, l = this._statusWidgetInfos; n < l.length; n++) {
                l[n].model.destroy();
              }
              this._renderer.destroy();
            }),
            (t.prototype.getElement = function () {
              return this._renderer.element;
            }),
            (t.prototype.updateSource = function (t) {
              this._source !== t &&
                (this._source.properties().hasChild("symbol") &&
                  this._source
                    .properties()
                    .symbol.listeners()
                    .unsubscribeAll(this),
                (this._source = t),
                this._recreateWidgets(),
                this._updateStatusWidgetsVisibilities(),
                this._updateErrorWidgetIsShown(),
                this._updateVisibleWidgetsCount(),
                this._updateTooltips());
            }),
            (t.prototype._updateStatusWidgetsVisibilities = function () {
              var t = this._isForceStatusActive();
              this._studyErrorCanBeShown.setValue(!t),
                this._marketStatusCanBeShown.setValue(!t),
                this._dataUpdatedModeCanBeShown.setValue(!t),
                this._dataProblemCanBeShown.setValue(
                  !this._isPrimaryWidgetShown()
                );
            }),
            (t.prototype._isPrimaryWidgetShown = function () {
              var t, e;
              return (
                null !==
                  (e =
                    null === (t = this._isSymbolInvalid) || void 0 === t
                      ? void 0
                      : t.value()) &&
                void 0 !== e &&
                e
              );
            }),
            (t.prototype._isForceStatusActive = function () {
              var t, e;
              return (
                this._isPrimaryWidgetShown() ||
                (null !==
                  (e =
                    null === (t = this._isDataProblemCritical) || void 0 === t
                      ? void 0
                      : t.value()) &&
                  void 0 !== e &&
                  e)
              );
            }),
            (t.prototype._updateVisibleWidgetsCount = function () {
              var t = this._statusWidgetInfos.filter(function (t) {
                return t.visible.value();
              });
              this.visibleWidgetsCount.setValue(t.length);
            }),
            (t.prototype._updateTooltips = function () {
              for (var t = [], e = 0; e < this._tooltipSpawns.length; e++)
                if (this._visibilitySpawns[e].value()) {
                  var i = this._tooltipSpawns[e].value();
                  null !== i && i.length > 0 && t.push(i);
                }
              this._tooltips.setValue(t);
            }),
            (t.prototype._recreateWidgets = function () {
              var t,
                e = this;
              if (this._options.sourceStatusesEnabled) {
                if (
                  Object(rt.isStudy)(this._source) ||
                  Object(rt.isStudyStub)(this._source) ||
                  this._source === this._model.mainSeries()
                ) {
                  null === (t = this._isSymbolInvalid) ||
                    void 0 === t ||
                    t.destroy();
                  var i = this._source;
                  if (
                    ((this._isSymbolInvalid = Object(Dt.a)(
                      i.isSymbolInvalid.bind(this._source),
                      i.onStatusChanged()
                    )),
                    null === this._symbolInvalidViewModel)
                  ) {
                    this._symbolInvalidViewModel = new De(
                      this._isSymbolInvalid,
                      {
                        tooltipMap: Xe,
                        iconMap: Ge,
                        classNameMap: Ue,
                        titleMap: Ze,
                        titleColorMap: Je,
                        htmlMap: Ye,
                        actionMap: qe,
                        size: this._size,
                      }
                    );
                    var s = this._symbolInvalidViewModel.visible().spawn();
                    this._visibilitySpawns.push(s),
                      this._tooltipSpawns.push(
                        this._symbolInvalidViewModel.tooltip().spawn()
                      );
                    var n = { visible: s, model: this._symbolInvalidViewModel };
                    this._statusWidgetInfos.push(n),
                      this._renderer.addStatusModel(n);
                  } else
                    this._symbolInvalidViewModel.updateStatus(
                      this._isSymbolInvalid
                    ),
                      this._addSubscriptionForSymbolInvalid();
                }
                if (
                  Object(rt.isStudy)(this._source) ||
                  Object(rt.isStudyStub)(this._source)
                )
                  if (null === this._dataSourceErrorStatusViewModel) {
                    (this._dataSourceErrorStatusViewModel = new He(
                      this._source,
                      this._size,
                      this._options.sourceStatuses
                    )),
                      (this._dataSourceHasErrorVisible = Object(Z.a)(
                        function () {
                          return (
                            e._studyErrorCanBeShown.value() &&
                            Object(o.ensureNotNull)(
                              e._dataSourceErrorStatusViewModel
                            )
                              .visible()
                              .value()
                          );
                        },
                        this._studyErrorCanBeShown,
                        this._dataSourceErrorStatusViewModel.visible()
                      )),
                      this._visibilitySpawns.push(
                        this._dataSourceHasErrorVisible
                      ),
                      this._tooltipSpawns.push(
                        this._dataSourceErrorStatusViewModel.tooltip().spawn()
                      );
                    var l = {
                      visible: this._dataSourceHasErrorVisible,
                      model: this._dataSourceErrorStatusViewModel,
                    };
                    this._statusWidgetInfos.push(l),
                      this._renderer.addStatusModel(l);
                  } else
                    this._dataSourceErrorStatusViewModel.setSource(
                      this._source
                    );
              }
              if (this._options.marketStatusEnabled) {
                var a = this._source.marketStatusModel();
                if (null === this._marketStatusViewModel) {
                  this._marketStatusViewModel = new Ei(
                    a,
                    this._size,
                    this._options.marketStatus
                  );
                  s = Object(Z.a)(
                    function () {
                      return (
                        e._marketStatusCanBeShown.value() &&
                        Object(o.ensureNotNull)(e._marketStatusViewModel)
                          .visible()
                          .value()
                      );
                    },
                    this._marketStatusCanBeShown,
                    this._marketStatusViewModel.visible()
                  );
                  this._visibilitySpawns.push(s),
                    this._tooltipSpawns.push(
                      this._marketStatusViewModel.tooltip().spawn()
                    );
                  var r = { visible: s, model: this._marketStatusViewModel };
                  this._statusWidgetInfos.push(r),
                    this._renderer.addStatusModel(r);
                } else this._marketStatusViewModel.setModel(a);
              }
              if (this._options.dataUpdateModeEnabled) {
                var u = this._source.dataUpdatedModeModel();
                if (null === this._dataUpdatedModeViewModel) {
                  this._dataUpdatedModeViewModel = new Me(
                    u,
                    this._size,
                    this._options.dataUpdateMode
                  );
                  s = Object(Z.a)(
                    function () {
                      return (
                        e._dataUpdatedModeCanBeShown.value() &&
                        Object(o.ensureNotNull)(e._dataUpdatedModeViewModel)
                          .visible()
                          .value()
                      );
                    },
                    this._dataUpdatedModeCanBeShown,
                    this._dataUpdatedModeViewModel.visible()
                  );
                  this._visibilitySpawns.push(s),
                    this._tooltipSpawns.push(
                      this._dataUpdatedModeViewModel.tooltip().spawn()
                    );
                  var d = { visible: s, model: this._dataUpdatedModeViewModel };
                  this._statusWidgetInfos.push(d),
                    this._renderer.addStatusModel(d);
                } else this._dataUpdatedModeViewModel.setModel(u);
              }
              if (this._options.dataProblemEnabled) {
                var h = this._source.dataProblemModel();
                if (null === this._dataProblemViewModel) {
                  (this._dataProblemViewModel = new je(h, this._size)),
                    (this._isDataProblemCritical = this._dataProblemViewModel
                      .isDataProblemCritical()
                      .spawn());
                  s = Object(Z.a)(
                    function () {
                      return (
                        e._dataProblemCanBeShown.value() &&
                        Object(o.ensureNotNull)(e._dataProblemViewModel)
                          .visible()
                          .value()
                      );
                    },
                    this._dataProblemCanBeShown,
                    this._dataProblemViewModel.visible()
                  );
                  this._visibilitySpawns.push(s),
                    this._tooltipSpawns.push(
                      this._dataProblemViewModel.tooltip().spawn()
                    );
                  d = { visible: s, model: this._dataProblemViewModel };
                  this._statusWidgetInfos.push(d),
                    this._renderer.addStatusModel(d);
                } else this._dataProblemViewModel.setModel(h);
              }
            }),
            (t.prototype._addSubscriptionForSymbolInvalid = function () {
              this._options.sourceStatusesEnabled &&
                null !== this._isSymbolInvalid &&
                (this._isSymbolInvalid.subscribe(
                  this._updateStatusWidgetsVisibilities.bind(this)
                ),
                this._isSymbolInvalid.subscribe(
                  this._updateErrorWidgetIsShown.bind(this),
                  { callWithLast: !0 }
                ));
            }),
            (t.prototype._updateErrorWidgetIsShown = function () {
              var t,
                e,
                i,
                s,
                o =
                  null !==
                    (e =
                      null === (t = this._isSymbolInvalid) || void 0 === t
                        ? void 0
                        : t.value()) &&
                  void 0 !== e &&
                  e,
                n =
                  null !==
                    (s =
                      null === (i = this._dataSourceHasErrorVisible) ||
                      void 0 === i
                        ? void 0
                        : i.value()) &&
                  void 0 !== s &&
                  s;
              this.errorWidgetIsShown.setValue(o || n);
            }),
            (t.prototype._handleToggleDropdown = function (t) {
              var e;
              (this._menuPosition = t),
                (this._menuOpened = !this._menuOpened),
                this._menuOpened &&
                  (this._source.properties().hasChild("symbol") &&
                    this._source
                      .properties()
                      .symbol.listeners()
                      .subscribe(this, this._handleDropdownMenuClose),
                  (e =
                    "Open full tooltip for statuses: " +
                    this._tooltips.value().join(", ")),
                  Object(Vi.trackEvent)("GUI", "Statuses widget's action", e)),
                this._updateDropdownMenu();
            }),
            (t.prototype._handleDropdownMenuClose = function () {
              (this._menuOpened = !1),
                this._source.properties().hasChild("symbol") &&
                  this._source
                    .properties()
                    .symbol.listeners()
                    .unsubscribeAll(this),
                this._updateDropdownMenu();
            }),
            (t.prototype._updateDropdownMenu = function () {
              var t = this;
              Promise.all([
                i.e("react"),
                i.e(6),
                i.e(20),
                i.e(98),
                i.e(0),
                i.e(3),
                i.e("full-tooltips-popup"),
              ])
                .then(i.bind(null, "vR7+"))
                .then(function (e) {
                  e.render(
                    t._menuOpened,
                    t._container,
                    t._renderer.element,
                    t._statusWidgetInfos,
                    t._handleDropdownMenuClose.bind(t),
                    Object(o.ensureNotNull)(t._menuPosition)
                  );
                });
            }),
            t
          );
        })(),
        xi = i("AH3n"),
        Li = window.t("Replay mode"),
        Ti = window.t(
          "You're in Replay mode. You're in Replay mode. You're in Replay mode."
        ),
        Wi =
          (new Map([
            [
              !0,
              new Map([
                ["small", xi],
                ["large", xi],
              ]),
            ],
            [
              !1,
              new Map([
                ["small", ""],
                ["large", ""],
              ]),
            ],
          ]),
          new Map([
            [!0, Ft.replayMode],
            [!1, null],
          ]),
          new Map([
            [!0, Li],
            [!1, null],
          ]),
          new Map([
            [!0, Li],
            [!1, null],
          ]),
          new Map([
            [!0, Nt.a["color-replay-mode"]],
            [!1, null],
          ]),
          new Map([
            [!0, [Ti]],
            [!1, null],
          ]),
          new Map([
            [!0, null],
            [!1, null],
          ]),
          (function (t) {
            function e(e, i, s) {
              var o = t.call(this, e, i, s) || this;
              return (
                (o._isInReplay = new l.a(!1).readonly().spawn()),
                (o._isInReplayCanBeShown = null),
                (o._inited = !1),
                o
              );
            }
            return (
              Object(s.c)(e, t),
              (e.prototype.destroy = function () {
                t.prototype.destroy.call(this);
              }),
              (e.prototype._updateStatusWidgetsVisibilities = function () {
                t.prototype._updateStatusWidgetsVisibilities.call(this);
              }),
              (e.prototype._isPrimaryWidgetShown = function () {
                var e, i;
                return (
                  t.prototype._isPrimaryWidgetShown.call(this) ||
                  (null !==
                    (i =
                      null === (e = this._isInReplay) || void 0 === e
                        ? void 0
                        : e.value()) &&
                    void 0 !== i &&
                    i)
                );
              }),
              e
            );
          })(ki)),
        Hi = i("PoSe"),
        Bi = i.n(Hi),
        Ai = i("EsvI");
      i.d(e, "trackLegendEvent", function () {
        return ji;
      }),
        i.d(e, "LegendWidget", function () {
          return Ni;
        });
      var Oi = {
          readOnlyMode: !1,
          contextMenu: {
            settings: !0,
            mainSeries: !0,
            studies: !0,
            showOpenMarketStatus: !1,
          },
          symbolMarkerEnabled: !1,
          showToggleButton: !0,
          canShowSourceCode: !1,
          statusesWidgets: {
            sourceStatusesEnabled: !1,
            sourceStatuses: { errorSolution: !0 },
            marketStatusEnabled: !1,
            marketStatus: { preMarketSolution: !0, postMarketSolution: !0 },
            dataUpdateModeEnabled: !1,
            dataUpdateMode: { subscriptionFullInfo: !0 },
            dataProblemEnabled: !1,
          },
        },
        Pi =
          (d.enabled("hide_legend_by_default"),
          d.enabled("fundamental_widget")),
        zi = d.enabled("legend_context_menu");
      function ji(t) {
        Object(Vi.trackEvent)("GUI", "Legend action", t);
      }
      var Di = 2 * parseInt(m.marginlegendhoriz),
        Ni = (function () {
          function t(t, e, i, o, n, r) {
            var u = this;
            (this._mainSeriesViewModel = null),
              (this._dataSourceViewModels = []),
              (this._visibleDataSourceCount = new l.a(0)),
              (this._themedColor = new l.a("")),
              (this._mainSeriesRowHidden = null),
              (this._dataSourceRowsHidden = []),
              (this._customWidgetsVisibilities = []),
              (this._allLegendHidden = new l.a(!1)),
              (this._studiesLegendHidden = new l.a(!1)),
              (this._customWidgetsHeights = []),
              (this._onLegendVisibilityToggled = null),
              (this._availableHeight = 0),
              (this._collapsedDataSourcesCount = new l.a(0)),
              (this._collapsedDataSourcesTitle = new l.a("")),
              (this._mainSeriesStatusWidget = null),
              (this._dataSourcesStatusesWidgets = []),
              (this._size = null),
              (this._customLegendWidgetsFactoriesMap = new Map()),
              (this._customLegendWidgetsMap = new Map()),
              (this._margin = 0),
              (this._model = t),
              (this._paneWidget = e),
              (this._options = Object(a.merge)(Object(a.clone)(Oi), n)),
              (this._callbacks = r),
              (this._mainSeriesViewModelsOptions = {
                readOnlyMode: this._options.readOnlyMode,
                symbolMarkerEnabled: this._options.symbolMarkerEnabled,
              }),
              (this._dataSourceViewModelsOptions = Object(s.a)(
                Object(s.a)({}, this._mainSeriesViewModelsOptions),
                { canShowSourceCode: this._options.canShowSourceCode }
              )),
              (this._backgroundThemeName = i);
            var d = this._showLegendCalculatedProperty();
            (this._isDataSourcesCollapsed = new l.a(d.value())),
              d.subscribe(this, function () {
                u._isDataSourcesCollapsed.setValue(d.value());
              });
            var h = new l.a(this._getCustomTextColorValue());
            this._model
              .model()
              .properties()
              .scalesProperties.textColor.subscribe(this, function () {
                h.setValue(u._getCustomTextColorValue());
              });
            var c = this._model.model().properties().paneProperties
                .legendProperties.showBackground,
              p = new l.a(c.value());
            c.subscribe(this, function () {
              p.setValue(c.value());
            });
            var _ = this._model.model().properties().paneProperties
                .legendProperties.backgroundTransparency,
              b = new l.a(_.value());
            _.subscribe(this, function () {
              b.setValue(_.value());
            }),
              (this._wrapText = new l.a(!1)),
              (this._hideNotMainSources = o.spawn()),
              this._hideNotMainSources.subscribe(
                this._updateLegendVisibilities.bind(this)
              ),
              (this._isPaneMain = new l.a(this._getIsPaneMainValue())),
              (this._updateCollapsedSourcesModeThrottle = Bi()(
                this._updateCollapsedSourcesMode.bind(this),
                100
              )),
              (this._renderer = new I(
                {
                  withActions: !this._options.readOnlyMode,
                  showToggleButton: this._options.showToggleButton,
                  isStudiesLegendHidden: this._studiesLegendHidden.readonly(),
                  isAllLegendHidden: this._allLegendHidden.readonly(),
                  customTextColor: h.readonly(),
                  themedColor: this._themedColor.readonly(),
                  showBackground: p.readonly(),
                  backgroundTransparency: b.readonly(),
                  wrapText: this._wrapText.readonly(),
                  collapsedDataSourcesCount:
                    this._collapsedDataSourcesCount.readonly(),
                  collapsedDataSourcesTitle:
                    this._collapsedDataSourcesTitle.readonly(),
                  showLegendWidgetContextMenu:
                    this.onShowLegendWidgetContextMenu.bind(this),
                },
                {
                  visibleDataSourceCount:
                    this._visibleDataSourceCount.readonly(),
                  isDataSourcesCollapsed:
                    this._isDataSourcesCollapsed.readonly(),
                  showObjectsTree: this._isPaneMain.readonly(),
                  onCollapseDataSources: this.onCollapseDataSources.bind(this),
                  onShowObjectsTreeDialog:
                    this._callbacks.showObjectsTreeDialog,
                }
              ));
          }
          return (
            (t.prototype.destroy = function () {
              this._hideNotMainSources.destroy(),
                null !== this._mainSeriesViewModel &&
                  this._destroyMainDataSource();
              for (
                var t = 0, e = this._dataSourceViewModels;
                t < e.length;
                t++
              ) {
                e[t].destroy();
              }
              for (
                var i = 0, s = this._dataSourcesStatusesWidgets;
                i < s.length;
                i++
              ) {
                s[i].destroy();
              }
              this._clearSubscriptions();
              for (
                var o = 0, n = Array.from(this._customLegendWidgetsMap.keys());
                o < n.length;
                o++
              ) {
                var l = n[o];
                this._destroyCustomWidgetFromLayerBlock(l);
              }
              this._customLegendWidgetsMap.clear(),
                this._renderer.destroy(),
                delete this._renderer,
                this._showLegendCalculatedProperty().unsubscribeAll(this),
                this._showLegendOriginalProperty().unsubscribeAll(this),
                this._model
                  .model()
                  .properties()
                  .scalesProperties.textColor.unsubscribeAll(this),
                this._model
                  .model()
                  .properties()
                  .paneProperties.legendProperties.showBackground.unsubscribeAll(
                    this
                  ),
                this._model
                  .model()
                  .properties()
                  .paneProperties.legendProperties.backgroundTransparency.unsubscribeAll(
                    this
                  );
            }),
            (t.prototype.addCustomWidgetToLegend = function (t, e) {
              var i =
                  this._customLegendWidgetsFactoriesMap.get(e.block) ||
                  new Map(),
                s = i.get(e.position) || [];
              s.push(t),
                i.set(e.position, s),
                this._customLegendWidgetsFactoriesMap.set(e.block, i),
                this.updateLayout(),
                this._updateCustomWidgetModeBySize();
            }),
            (t.prototype.onShowLegendWidgetContextMenu = function (t, e) {
              if (this._options.readOnlyMode || !zi)
                return Promise.resolve(null);
              ji("Show legend context menu");
              for (
                var i = new Map(),
                  s = 0,
                  n = Array.from(this._customLegendWidgetsMap.keys());
                s < n.length;
                s++
              ) {
                for (
                  var l = n[s],
                    a = Object(o.ensureDefined)(
                      this._customLegendWidgetsMap.get(l)
                    ),
                    r = new Map(),
                    u = 0,
                    d = Array.from(a.keys());
                  u < d.length;
                  u++
                ) {
                  for (
                    var h = d[u],
                      c = Object(o.ensureDefined)(a.get(h)),
                      p = r.get(h) || [],
                      _ = 0,
                      b = c;
                    _ < b.length;
                    _++
                  ) {
                    var g = b[_];
                    p.push.apply(p, g.contextMenuActions());
                  }
                  r.set(h, p);
                }
                i.set(l, r);
              }
              return Wt(
                this._model,
                this._options.contextMenu,
                this._callbacks.showGeneralChartProperties,
                i,
                t,
                e
              );
            }),
            (t.prototype.onCollapseDataSources = function () {
              var t = this._showLegendOriginalProperty();
              t.setValue(!t.value());
            }),
            (t.prototype.updateLayout = function () {
              var t,
                e,
                i = this._paneWidget
                  .state()
                  .sourcesByGroup()
                  .all()
                  .filter(function (t) {
                    return null !== t.statusView();
                  });
              if (0 !== i.length) {
                var s = this._model.mainSeries(),
                  n = i.indexOf(s);
                n > -1
                  ? (i.splice(n, 1),
                    Pi ||
                      null !== this._mainSeriesViewModel ||
                      ((this._mainSeriesViewModel = new at(
                        this._model,
                        s,
                        this._mainSeriesViewModelsOptions,
                        this._callbacks,
                        this._options.contextMenu
                      )),
                      (this._mainSeriesStatusWidget = new Wi(
                        s,
                        this._model.model(),
                        this._options.statusesWidgets
                      )),
                      this._renderer.addMainDataSource(
                        this._mainSeriesViewModel,
                        this._mainSeriesStatusWidget
                      )),
                    this._addCustomWidgetForLayerBlock(0))
                  : null !== this._mainSeriesViewModel &&
                    (this._destroyMainDataSource(),
                    this._destroyCustomWidgetFromLayerBlock(0));
                var l = [],
                  a = [],
                  r = this._dataSourceViewModels.length;
                if (0 === r)
                  for (var u = i.length - 1; u >= 0; u--)
                    l.push(
                      new Ct(
                        this._model,
                        i[u],
                        this._dataSourceViewModelsOptions,
                        this._callbacks,
                        this._options.contextMenu
                      )
                    ),
                      a.push(
                        new ki(
                          i[u],
                          this._model.model(),
                          this._options.statusesWidgets
                        )
                      );
                else {
                  var d = 0;
                  for (u = i.length - 1; u >= 0; u--)
                    this._dataSourceViewModels[d]
                      ? (this._dataSourceViewModels[d].updateSource(i[u]),
                        this._dataSourcesStatusesWidgets[d].updateSource(i[u]))
                      : (l.push(
                          new Ct(
                            this._model,
                            i[u],
                            this._dataSourceViewModelsOptions,
                            this._callbacks,
                            this._options.contextMenu
                          )
                        ),
                        a.push(
                          new ki(
                            i[u],
                            this._model.model(),
                            this._options.statusesWidgets
                          )
                        )),
                      d++;
                  for (; this._dataSourceViewModels.length > d; )
                    Object(o.ensureDefined)(
                      this._dataSourceViewModels.pop()
                    ).destroy();
                  for (; this._dataSourcesStatusesWidgets.length > d; )
                    Object(o.ensureDefined)(
                      this._dataSourcesStatusesWidgets.pop()
                    ).destroy();
                }
                0 !== l.length &&
                  (this._renderer.addDataSources(l, a),
                  (t = this._dataSourceViewModels).push.apply(t, l),
                  (e = this._dataSourcesStatusesWidgets).push.apply(e, a)),
                  r !== this._dataSourceViewModels.length &&
                    this._updateCollapsedSourcesMode(),
                  this._dataSourceViewModels.length > 0
                    ? this._addCustomWidgetForLayerBlock(1)
                    : this._destroyCustomWidgetFromLayerBlock(1),
                  this._recreateSubscriptions(),
                  this._isPaneMain.setValue(this._getIsPaneMainValue()),
                  this.update(),
                  this._updateWidgetModeByWidth();
              }
            }),
            (t.prototype.update = function () {
              null !== this._mainSeriesViewModel &&
                this._mainSeriesViewModel.update();
              for (
                var t = 0, e = this._dataSourceViewModels;
                t < e.length;
                t++
              ) {
                e[t].update();
              }
            }),
            (t.prototype.updateThemedColors = function (t) {
              null === t &&
                (t = Object(Ai.getStdThemedValue)(
                  "chartProperties.paneProperties.background",
                  this._backgroundThemeName.value()
                )),
                this._themedColor.setValue(t || "");
            }),
            (t.prototype.firstTitle = function () {
              return this._renderer.firstTitle();
            }),
            (t.prototype.getElement = function () {
              return this._renderer.getElement();
            }),
            (t.prototype.addMargin = function (t) {
              this._margin !== t &&
                ((this._margin = t),
                (this._renderer.getElement().style.maxWidth =
                  0 === this._margin
                    ? ""
                    : "calc(100% - " + (this._margin + Di) + "px)"),
                this._updateWidgetModeBySize());
            }),
            (t.prototype.updateWidgetModeBySize = function (t) {
              (this._size = t), this._updateWidgetModeBySize();
            }),
            (t.prototype._updateWidgetModeBySize = function () {
              this._updateWidgetModeByWidth(),
                this._updateWidgetModeByHeight(),
                this._updateCustomWidgetModeBySize();
            }),
            (t.prototype._updateWidgetModeByWidth = function () {
              null !== this._size &&
                this._renderer.updateMode(this._availableWidth());
            }),
            (t.prototype._updateWidgetModeByHeight = function () {
              null !== this._size &&
                ((this._availableHeight = 0.8 * this._size.h),
                this._updateCollapsedSourcesModeThrottle());
            }),
            (t.prototype._updateCustomWidgetModeBySize = function () {
              if (null !== this._size)
                for (
                  var t = new r.Size(this._availableWidth(), this._size.h),
                    e = 0,
                    i = Array.from(this._customLegendWidgetsMap.values());
                  e < i.length;
                  e++
                )
                  for (
                    var s = i[e], o = 0, n = Array.from(s.values());
                    o < n.length;
                    o++
                  )
                    for (var l = 0, a = n[o]; l < a.length; l++) {
                      a[l].updateWidgetModeBySize(t);
                    }
            }),
            (t.prototype._destroyMainDataSource = function () {
              Object(o.ensureNotNull)(this._mainSeriesStatusWidget).destroy(),
                (this._mainSeriesStatusWidget = null),
                Object(o.ensureNotNull)(this._mainSeriesViewModel).destroy(),
                (this._mainSeriesViewModel = null);
            }),
            (t.prototype._updateCollapsedSourcesMode = function () {
              var t = this._dataSourceViewModels.length;
              if (
                !this._wrapText.value() &&
                this._availableHeight > 0 &&
                t > 2
              ) {
                var e = this._renderer.getMainSourceHeight(),
                  i = this._renderer.getDataSourceHeight(),
                  s = this._getCustomWidgetsHeight();
                if (null !== e && null !== i) {
                  var o = Math.floor((this._availableHeight - e - s) / i),
                    n = Math.max(o, 2) - 1;
                  if (t > n + 1) {
                    for (var l = "", a = 0; a < t; a++) {
                      var r = a < n;
                      this._dataSourceViewModels[a].setGlobalVisibility(r),
                        r ||
                          (l +=
                            (0 === l.length ? "" : ", ") +
                            this._dataSourceViewModels[a].getFullTitle());
                    }
                    return (
                      this._collapsedDataSourcesTitle.setValue(l),
                      void this._collapsedDataSourcesCount.setValue(t - n)
                    );
                  }
                }
              }
              for (
                var u = 0, d = this._dataSourceViewModels;
                u < d.length;
                u++
              ) {
                d[u].setGlobalVisibility(!0);
              }
              this._collapsedDataSourcesCount.setValue(0),
                this._collapsedDataSourcesTitle.setValue("");
            }),
            (t.prototype._getCustomWidgetsHeight = function () {
              for (
                var t = 0,
                  e = 0,
                  i = Array.from(this._customLegendWidgetsMap.values());
                e < i.length;
                e++
              )
                for (
                  var s = i[e], o = 0, n = Array.from(s.values());
                  o < n.length;
                  o++
                )
                  for (var l = 0, a = n[o]; l < a.length; l++) {
                    t += a[l].height().value();
                  }
              return t;
            }),
            (t.prototype._getCustomTextColorValue = function () {
              var t = this._model
                .model()
                .properties()
                .scalesProperties.textColor.value();
              return Object(Ai.isStdThemedDefaultValue)(
                "chartProperties.scalesProperties.textColor",
                t,
                Object(Ai.getCurrentTheme)().name
              )
                ? null
                : t;
            }),
            (t.prototype._clearSubscriptions = function () {
              null !== this._mainSeriesRowHidden &&
                (this._mainSeriesRowHidden.destroy(),
                (this._mainSeriesRowHidden = null));
              for (
                var t = 0, e = this._dataSourceRowsHidden;
                t < e.length;
                t++
              ) {
                e[t].destroy();
              }
              this._dataSourceRowsHidden = [];
              for (
                var i = 0, s = this._customWidgetsVisibilities;
                i < s.length;
                i++
              ) {
                s[i].destroy();
              }
              this._customWidgetsVisibilities = [];
              for (
                var o = 0, n = this._customWidgetsHeights;
                o < n.length;
                o++
              ) {
                n[o].destroy();
              }
              this._customWidgetsHeights = [];
            }),
            (t.prototype._recreateSubscriptions = function () {
              this._clearSubscriptions(),
                null !== this._mainSeriesViewModel &&
                  ((this._mainSeriesRowHidden = this._mainSeriesViewModel
                    .isRowHidden()
                    .spawn()),
                  this._mainSeriesRowHidden.subscribe(
                    this._updateLegendVisibilities.bind(this)
                  ));
              for (
                var t = 0, e = this._dataSourceViewModels;
                t < e.length;
                t++
              ) {
                var i = e[t].isRowHidden().spawn();
                this._dataSourceRowsHidden.push(i),
                  i.subscribe(this._updateVisibleDataSourceCount.bind(this)),
                  i.subscribe(this._updateLegendVisibilities.bind(this));
              }
              for (
                var s = 0,
                  o = Array.from(this._customLegendWidgetsMap.values());
                s < o.length;
                s++
              )
                for (
                  var n = o[s], l = 0, a = Array.from(n.values());
                  l < a.length;
                  l++
                )
                  for (var r = 0, u = a[l]; r < u.length; r++) {
                    var d = u[r],
                      h = d.visibility().spawn();
                    this._customWidgetsVisibilities.push(h),
                      h.subscribe(this._updateLegendVisibilities.bind(this));
                    var c = d.height().spawn();
                    this._customWidgetsHeights.push(c),
                      c.subscribe(this._updateCollapsedSourcesMode.bind(this));
                  }
              this._updateVisibleDataSourceCount(),
                this._updateLegendVisibilities();
            }),
            (t.prototype._updateLegendVisibilities = function () {
              var t = this._dataSourceRowsHidden.every(function (t) {
                  return t.value();
                }),
                e = this._hideNotMainSources.value() || t;
              this._studiesLegendHidden.setValue(e);
              var i =
                  null === this._mainSeriesRowHidden ||
                  this._mainSeriesRowHidden.value(),
                s = this._customWidgetsVisibilities.some(function (t) {
                  return t.value();
                });
              this._allLegendHidden.setValue(t && i && !s);
            }),
            (t.prototype._updateVisibleDataSourceCount = function () {
              var t = this._dataSourceRowsHidden.filter(function (t) {
                return !t.value();
              }).length;
              this._visibleDataSourceCount.setValue(t);
            }),
            (t.prototype._setLegendVisibilityToggled = function () {}),
            (t.prototype._getIsPaneMainValue = function () {
              return this._paneWidget.containsMainSeries();
            }),
            (t.prototype._showLegendCalculatedProperty = function () {
              return this._model.model().showLegend();
            }),
            (t.prototype._showLegendOriginalProperty = function () {
              return this._model.model().properties().paneProperties
                .legendProperties.showLegend;
            }),
            (t.prototype._addCustomWidgetForLayerBlock = function (t) {
              var e = this._customLegendWidgetsFactoriesMap.get(t);
              if (void 0 !== e) {
                for (
                  var i = this._customLegendWidgetsMap.get(t) || new Map(),
                    s = !1,
                    o = 0,
                    n = Array.from(e.keys());
                  o < n.length;
                  o++
                ) {
                  for (
                    var l = n[o],
                      a = i.get(l) || [],
                      r = e.get(l) || [],
                      u = a.length;
                    u < r.length;
                    u++
                  ) {
                    var d = r[u](
                      this._model.model(),
                      this._backgroundThemeName
                    );
                    0 === t &&
                      0 === l &&
                      d.setGlobalVisibility(
                        this._hideNotMainSources.opposite()
                      ),
                      a.push(d),
                      this._renderer.addCustomWidget(d, {
                        block: t,
                        position: l,
                      }),
                      (s = !0);
                  }
                  s && i.set(l, a);
                }
                s && this._customLegendWidgetsMap.set(t, i);
              }
            }),
            (t.prototype._destroyCustomWidgetFromLayerBlock = function (t) {
              var e = this._customLegendWidgetsMap.get(t);
              if (void 0 !== e) {
                for (var i = 0, s = Array.from(e.values()); i < s.length; i++)
                  for (var o = 0, n = s[i]; o < n.length; o++) {
                    n[o].destroy();
                  }
                e.clear(), this._customLegendWidgetsMap.delete(t);
              }
            }),
            (t.prototype._availableWidth = function () {
              return null === this._size ? 0 : this._size.w - this._margin - Di;
            }),
            t
          );
        })();
    },
    vWJB: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 4" width="16" height="4" fill="none"><circle stroke="currentColor" cx="2" cy="2" r="1.5"/><circle stroke="currentColor" cx="8" cy="2" r="1.5"/><circle stroke="currentColor" cx="14" cy="2" r="1.5"/></svg>';
    },
    vYP1: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M8.54.84a.8.8 0 0 1 .92 0l7.5 5.25a.8.8 0 0 1 0 1.32l-7.5 5.25a.8.8 0 0 1-.92 0L1.04 7.4a.8.8 0 0 1 0-1.32L8.54.84zM2.9 6.75L9 11.02l6.1-4.27L9 2.48 2.9 6.75z"/><path fill="currentColor" d="M.84 10.8a.8.8 0 0 1 1.12-.2L9 15.51l7.04-4.93a.8.8 0 0 1 .92 1.32l-7.5 5.25a.8.8 0 0 1-.92 0l-7.5-5.25a.8.8 0 0 1-.2-1.12z"/></svg>';
    },
    vg09: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 2v10M2 7h10"/></svg>';
    },
    wZiV: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 30 24" width="30" height="24" fill="none"><circle stroke="currentColor" stroke-width="1.15" cx="8.08" cy="14" r="1.73"/><circle stroke="currentColor" stroke-width="1.15" cx="15" cy="14" r="1.73"/><circle stroke="currentColor" stroke-width="1.15" cx="21.92" cy="14" r="1.73"/></svg>';
    },
    z4c1: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="24" height="22" fill="none"><g class="normal-eye"><path fill="currentColor" fillRule="evenodd" clip-rule="evenodd" d="M17.9948 7.91366C16.6965 6.48549 14.6975 5 11.9999 5C9.30225 5 7.30322 6.48549 6.00488 7.91366C6.00488 7.91366 4 10 4 11C4 12 6.00488 14.0863 6.00488 14.0863C7.30322 15.5145 9.30225 17 11.9999 17C14.6975 17 16.6965 15.5145 17.9948 14.0863C17.9948 14.0863 20 12 20 11C20 10 17.9948 7.91366 17.9948 7.91366ZM6.74482 13.4137C7.94648 14.7355 9.69746 16 11.9999 16C14.3022 16 16.0532 14.7355 17.2549 13.4137C17.2549 13.4137 19 11.5 19 11C19 10.5 17.2549 8.58634 17.2549 8.58634C16.0532 7.26451 14.3022 6 11.9999 6C9.69746 6 7.94648 7.26451 6.74482 8.58634C6.74482 8.58634 5 10.5 5 11C5 11.5 6.74482 13.4137 6.74482 13.4137Z"/><path fill="currentColor" fillRule="evenodd" clip-rule="evenodd" d="M12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"/></g><g class="crossed-eye"><path fill="currentColor" fillRule="evenodd" clip-rule="evenodd" d="M8.8503 16.2712C9.76531 16.7135 10.8152 17 11.9999 17C14.6975 17 16.6965 15.5145 17.9948 14.0863C17.9948 14.0863 20 12 20 11C20 10 17.9948 7.91366 17.9948 7.91366C17.8729 7.77954 17.7448 7.64491 17.6105 7.51105L16.9035 8.2181C17.0254 8.33968 17.1425 8.46276 17.2549 8.58634C17.2549 8.58634 19 10.5 19 11C19 11.5 17.2549 13.4137 17.2549 13.4137C16.0532 14.7355 14.3022 16 11.9999 16C11.1218 16 10.324 15.8161 9.60627 15.5153L8.8503 16.2712ZM7.09663 13.7823C6.97455 13.6606 6.85728 13.5374 6.74482 13.4137C6.74482 13.4137 5 11.5 5 11C5 10.5 6.74482 8.58634 6.74482 8.58634C7.94648 7.26451 9.69746 6 11.9999 6C12.8781 6 13.6761 6.18398 14.394 6.48495L15.1499 5.729C14.2348 5.28657 13.1847 5 11.9999 5C9.30225 5 7.30322 6.48549 6.00488 7.91366C6.00488 7.91366 4 10 4 11C4 12 6.00488 14.0863 6.00488 14.0863C6.12693 14.2206 6.25516 14.3553 6.38959 14.4893L7.09663 13.7823Z"/><path fill="currentColor" fillRule="evenodd" clip-rule="evenodd" d="M11.2231 13.8984C11.4709 13.9647 11.7313 14 12 14C13.6569 14 15 12.6569 15 11C15 10.7313 14.9647 10.4709 14.8984 10.2231L13.9961 11.1254C13.934 12.1301 13.1301 12.934 12.1254 12.9961L11.2231 13.8984ZM11.8751 9.00384C10.87 9.06578 10.0658 9.87001 10.0038 10.8751L9.10166 11.7772C9.03535 11.5294 9 11.2688 9 11C9 9.34315 10.3431 8 12 8C12.2688 8 12.5294 8.03535 12.7772 8.10166L11.8751 9.00384Z"/><path fill="currentColor" fillRule="evenodd" clip-rule="evenodd" d="M5.64648 16.6465L17.6465 4.64648L18.3536 5.35359L6.35359 17.3536L5.64648 16.6465Z"/></g><g class="loading-eye"><path fill="currentColor" fillRule="evenodd" clip-rule="evenodd" d="M17.9948 7.91366C16.6965 6.48549 14.6975 5 11.9999 5C9.30225 5 7.30322 6.48549 6.00488 7.91366C6.00488 7.91366 4 10 4 11C4 12 6.00488 14.0863 6.00488 14.0863C7.30322 15.5145 9.30225 17 11.9999 17C14.6975 17 16.6965 15.5145 17.9948 14.0863C17.9948 14.0863 20 12 20 11C20 10 17.9948 7.91366 17.9948 7.91366ZM6.74482 13.4137C7.94648 14.7355 9.69746 16 11.9999 16C14.3022 16 16.0532 14.7355 17.2549 13.4137C17.2549 13.4137 19 11.5 19 11C19 10.5 17.2549 8.58634 17.2549 8.58634C16.0532 7.26451 14.3022 6 11.9999 6C9.69746 6 7.94648 7.26451 6.74482 8.58634C6.74482 8.58634 5 10.5 5 11C5 11.5 6.74482 13.4137 6.74482 13.4137Z"/></g><g class="animated-loading-eye"><path stroke="currentColor" stroke-linecap="round" d="M14.5 11C14.5 9.61929 13.3807 8.5 12 8.5C10.6193 8.5 9.5 9.61929 9.5 11C9.5 12.3807 10.6193 13.5 12 13.5"/></g></svg>';
    },
  },
]);
