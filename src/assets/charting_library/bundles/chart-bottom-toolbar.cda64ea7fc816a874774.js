(window.webpackJsonp = window.webpackJsonp || []).push([
  ["chart-bottom-toolbar"],
  {
    "+GaQ": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var a = n("q1tI");
      function i(e) {
        return e.map ? a.Children.toArray(e.children).map(e.map) : e.children;
      }
    },
    "02pg": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      var a = n("q1tI"),
        i = n("TSYQ"),
        r = n("XiJV");
      function o(e) {
        return a.createElement("div", {
          className: i(r.separator, e.className),
        });
      }
    },
    "1TxM": function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return c;
      }),
        n.d(t, "a", function () {
          return l;
        }),
        n.d(t, "b", function () {
          return u;
        });
      var a = n("q1tI"),
        i = n.n(a),
        r = n("17x9"),
        o = n.n(r),
        s = i.a.createContext({});
      function c(e, t) {
        o.a.checkPropTypes(t, e, "context", "RegistryContext");
      }
      function l(e) {
        var t = e.validation,
          n = e.value;
        return c(n, t), i.a.createElement(s.Provider, { value: n }, e.children);
      }
      function u() {
        return s;
      }
    },
    "20PO": function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" fillRule="evenodd" clip-rule="evenodd" d="M9.7 9l4.65-4.65-.7-.7L9 8.29 4.35 3.65l-.7.7L8.29 9l-4.64 4.65.7.7L9 9.71l4.65 4.64.7-.7L9.71 9z"/></svg>';
    },
    "2mG+": function (e, t, n) {
      e.exports = { button: "button-37qwTsBL" };
    },
    "5o6O": function (e, t, n) {
      e.exports = {
        tabs: "tabs-1LGqoVz6",
        tab: "tab-1Yr0rq0J",
        noBorder: "noBorder-oc3HwerO",
        disabled: "disabled-s8cEYElA",
        active: "active-37sipdzm",
        defaultCursor: "defaultCursor-Np9BHjTg",
        slider: "slider-1-X4lOmE",
        content: "content-2asssfGq",
      };
    },
    "6KyJ": function (e, t, n) {
      "use strict";
      var a,
        i = n("q1tI"),
        r = n("TSYQ"),
        o = n("K9GE"),
        s = n("YZ9j");
      n("O7m7");
      !(function (e) {
        (e[(e.Initial = 0)] = "Initial"),
          (e[(e.Appear = 1)] = "Appear"),
          (e[(e.Active = 2)] = "Active");
      })(a || (a = {}));
      class c extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._stateChangeTimeout = null),
            (this.state = { state: a.Initial });
        }
        render() {
          const { className: e, color: t = "black" } = this.props,
            n = r(s.item, { [s[t]]: Boolean(t) });
          return i.createElement(
            "span",
            { className: r(s.loader, e, this._getStateClass()) },
            i.createElement("span", { className: n }),
            i.createElement("span", { className: n }),
            i.createElement("span", { className: n })
          );
        }
        componentDidMount() {
          this.setState({ state: a.Appear }),
            (this._stateChangeTimeout = setTimeout(() => {
              this.setState({ state: a.Active });
            }, 2 * o.c));
        }
        componentWillUnmount() {
          this._stateChangeTimeout &&
            (clearTimeout(this._stateChangeTimeout),
            (this._stateChangeTimeout = null));
        }
        _getStateClass() {
          switch (this.state.state) {
            case a.Initial:
              return s["loader-initial"];
            case a.Appear:
              return s["loader-appear"];
            default:
              return "";
          }
        }
      }
      n.d(t, "a", function () {
        return c;
      });
    },
    "9VJd": function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 13v-2.5m8.5 11h6.5a2 2 0 0 0 2-2v-9m-17 0v-2c0-1.1.9-2 2-2h13a2 2 0 0 1 2 2v2m-17 0h17"/><path fill="currentColor" d="M10 4h1v4h-1V4zM17 4h1v4h-1V4z"/><path stroke="currentColor" d="M4 18.5h7.5m0 0L8 22m3.5-3.5L8 15"/></svg>';
    },
    ApAi: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="none" stroke="currentColor" d="M11 1.5h3.5a2 2 0 0 1 2 2V7m0 5v2.5a2 2 0 0 1-2 2H11m-4 0H3.5a2 2 0 0 1-2-2V11m0-4V3.5a2 2 0 0 1 2-2H7"/></svg>';
    },
    "J+f8": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var a = n("q1tI"),
        i = a.createContext(!1);
    },
    J3OW: function (e, t, n) {
      e.exports = {
        button: "button-1VVj8kLG",
        separator: "separator-2I6DZkMH",
      };
    },
    K3s3: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      }),
        n.d(t, "b", function () {
          return l;
        }),
        n.d(t, "c", function () {
          return u;
        });
      var a = n("mrSG"),
        i = n("q1tI"),
        r = n("TSYQ"),
        o = n("Eyy1"),
        s = n("5o6O"),
        c = s;
      function l(e) {
        var t,
          n = r(
            e.className,
            s.tab,
            (((t = {})[s.active] = e.isActive),
            (t[s.disabled] = e.isDisabled),
            (t[s.defaultCursor] = !!e.shouldUseDefaultCursor),
            (t[s.noBorder] = !!e.noBorder),
            t)
          );
        return i.createElement(
          "div",
          { className: n, onClick: e.onClick, ref: e.reference },
          e.children
        );
      }
      function u(e) {
        return (function (t) {
          function n() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.activeTab = { current: null }), e;
          }
          return (
            Object(a.c)(n, t),
            (n.prototype.componentDidUpdate = function () {
              (Object(o.ensureNotNull)(this._slider).style.transition =
                "transform 350ms"),
                this._componentDidUpdate();
            }),
            (n.prototype.componentDidMount = function () {
              this._componentDidUpdate();
            }),
            (n.prototype.render = function () {
              var t = this,
                n = this.props.className,
                a = this._generateTabs();
              return i.createElement(
                "div",
                {
                  className: r(n, s.tabs),
                  "data-name": this.props["data-name"],
                },
                a,
                i.createElement(e, {
                  reference: function (e) {
                    t._slider = e;
                  },
                })
              );
            }),
            (n.prototype._generateTabs = function () {
              var e = this;
              return (
                (this.activeTab.current = null),
                i.Children.map(this.props.children, function (t) {
                  var n = t,
                    a = Boolean(n.props.isActive),
                    r = {
                      reference: function (t) {
                        a && (e.activeTab.current = t),
                          n.props.reference && n.props.reference(t);
                      },
                    };
                  return i.cloneElement(n, r);
                })
              );
            }),
            (n.prototype._componentDidUpdate = function () {
              var e = Object(o.ensureNotNull)(this._slider).style;
              if (this.activeTab.current) {
                var t = this.activeTab.current.offsetWidth,
                  n = this.activeTab.current.offsetLeft;
                (e.transform = "translateX(" + n + "px)"),
                  (e.width = t + "px"),
                  (e.opacity = "1");
              } else e.opacity = "0";
            }),
            n
          );
        })(i.PureComponent);
      }
      u(function (e) {
        return i.createElement("div", {
          className: s.slider,
          ref: e.reference,
        });
      });
    },
    MfqI: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("q1tI"),
        i = n.n(a),
        r = n("i8i4"),
        o = n("mrSG"),
        s = n("YFKU"),
        c = n("17x9"),
        l = n("TSYQ"),
        u = n("cvc5"),
        d = n("Kxc7"),
        h = n("82wv"),
        p = n("Iksw"),
        m = n("tWVy"),
        g = n("/KDZ"),
        f = n("N5tr"),
        v = n("KKsp"),
        b = n("Eyy1"),
        _ = n("JWMC"),
        C = n("1TxM"),
        y = n("aIyQ"),
        S = n.n(y),
        E = n("dfhE"),
        x = (function () {
          function e(e) {
            var t = this;
            (this._state = { ranges: [] }),
              (this._change = new S.a()),
              (this._rangeChangedListenerBound =
                this._onRangeChanged.bind(this));
            var n = (this._context = e).chartWidget;
            n.withModel(null, function () {
              var e = n.model(),
                a = e.mainSeries();
              a.onStatusChanged().subscribe(t, t._updateAvailableRanges),
                d.enabled("update_timeframes_set_on_symbol_resolve") &&
                  a
                    .dataEvents()
                    .symbolResolved()
                    .subscribe(t, t._updateAvailableRanges),
                a
                  .priceScale()
                  .properties()
                  .childs()
                  .lockScale.subscribe(t, t._updateAvailableRanges),
                e.appliedTimeFrame().subscribe(t._rangeChangedListenerBound),
                t._updateAvailableRanges();
            });
          }
          return (
            (e.prototype.state = function () {
              return this._state;
            }),
            (e.prototype.onChange = function () {
              return this._change;
            }),
            (e.prototype.selectRange = function (e) {
              this._setState({ activeRange: e.value.value });
              var t = this._context.chartWidgetCollection,
                n = { val: e.value, res: e.targetResolution };
              t.setTimeFrame(n);
            }),
            (e.prototype.destroy = function () {
              var e = this,
                t = this._context.chartWidget;
              t.withModel(null, function () {
                var n = t.model(),
                  a = n.mainSeries();
                a.onStatusChanged().unsubscribe(e, e._updateAvailableRanges),
                  d.enabled("update_timeframes_set_on_symbol_resolve") &&
                    a
                      .dataEvents()
                      .symbolResolved()
                      .unsubscribe(e, e._updateAvailableRanges),
                  a
                    .priceScale()
                    .properties()
                    .childs()
                    .lockScale.unsubscribe(e, e._updateAvailableRanges),
                  n
                    .appliedTimeFrame()
                    .unsubscribe(e._rangeChangedListenerBound);
              }),
                this._change.destroy();
            }),
            (e.prototype._setState = function (e) {
              (this._state = Object.assign({}, this._state, e)),
                this._change.fire(this._state);
            }),
            (e.prototype._onRangeChanged = function (e) {
              var t;
              null !== e && "period-back" === e.val.type && (t = e.val.value),
                this._setState({ activeRange: t });
            }),
            (e.prototype._updateAvailableRanges = function () {
              var e = this._context,
                t = e.availableTimeFrames,
                n = e.chartWidget;
              if (n.model()) {
                var a = n.model().mainSeries(),
                  i = a.status();
                if (i !== E.STATUS_LOADING && i !== E.STATUS_RESOLVING) {
                  var r = t(a.symbolInfo(), a.status());
                  0 !== r.length && this._setState({ ranges: r });
                }
              }
            }),
            e
          );
        })(),
        w = Object(C.b)();
      function M(e) {
        var t;
        return (
          ((t = (function (t) {
            function n(e, n) {
              var a = t.call(this, e, n) || this;
              (a._handleUpdate = function (e) {
                a.setState(e);
              }),
                (a._handleSelectRange = function (e) {
                  Object(_.trackEvent)(
                    "GUI",
                    "Chart Bottom Toolbar",
                    "range " + e.value
                  ),
                    a._binding.selectRange(e);
                }),
                Object(C.c)(n, {
                  availableTimeFrames: c.any.isRequired,
                  chartWidgetCollection: c.any.isRequired,
                  chartWidget: c.any.isRequired,
                }),
                R.has(n.chartWidget) || R.set(n.chartWidget, new x(n));
              var i = (a._binding = Object(b.ensureDefined)(
                R.get(n.chartWidget)
              ));
              return (a.state = i.state()), a;
            }
            return (
              Object(o.c)(n, t),
              (n.prototype.componentDidMount = function () {
                this._binding.onChange().subscribe(this, this._handleUpdate);
              }),
              (n.prototype.componentWillUnmount = function () {
                this._binding.onChange().unsubscribe(this, this._handleUpdate);
              }),
              (n.prototype.render = function () {
                return a.createElement(e, {
                  goToDateButton: this.props.goToDateButton,
                  className: this.props.className,
                  ranges: this.state.ranges,
                  activeRange: this.state.activeRange,
                  onSelectRange: this._handleSelectRange,
                });
              }),
              n
            );
          })(a.PureComponent)).contextType = w),
          t
        );
      }
      var R = new WeakMap(),
        N = n("cdbK"),
        W = n("l4ku"),
        k = n("02pg"),
        T = n("2uTr"),
        A = n("9VJd"),
        O = n("J3OW");
      function j(e) {
        var t = e.ranges,
          n = e.activeRange,
          a = e.onSelectRange;
        return i.a.createElement(
          i.a.Fragment,
          null,
          t.map(function (e) {
            return i.a.createElement(W.a, {
              key: e.value.value,
              label: e.description || e.text,
              active: n === e.value.value,
              checked: n === e.value.value,
              checkable: !0,
              disabled: !1,
              onClick: r.bind(null, e),
              doNotCloseOnClick: !1,
              subItems: [],
            });
          })
        );
        function r(e) {
          e && a && a(e), Object(m.b)();
        }
      }
      function B(e) {
        var t = e.onGoToDateClick;
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(k.a, { className: O.separator }),
          i.a.createElement(W.a, {
            icon: A,
            label: Object(T.appendEllipsis)(Object(s.t)("Go to")),
            onClick: t,
            active: !1,
            checked: !1,
            checkable: !1,
            disabled: !1,
            doNotCloseOnClick: !1,
            subItems: [],
          })
        );
      }
      var D = {
          title: window.t("Date Range"),
          goToDate: Object(T.appendEllipsis)(window.t("Go to")),
        },
        z = Object(C.b)(),
        L = M(
          (function (e) {
            function t(t, n) {
              var i = e.call(this, t, n) || this;
              return (
                (i._handleGoToDateClick = function () {
                  var e = i.context.chartWidget;
                  Object(N.showGoToDateDialog)(e.model()), Object(m.b)();
                }),
                (i._handleRangeSelect = function (e) {
                  e && i.props.onSelectRange && i.props.onSelectRange(e),
                    Object(m.b)();
                }),
                (i._renderChildren = function (e) {
                  var t = i.props,
                    n = t.ranges,
                    r = t.activeRange,
                    o = t.goToDateButton;
                  return e
                    ? a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(j, {
                          ranges: n,
                          activeRange: r,
                          onSelectRange: i._handleRangeSelect,
                        }),
                        o &&
                          a.createElement(B, {
                            onGoToDateClick: i._handleGoToDateClick,
                          })
                      )
                    : a.createElement(
                        a.Fragment,
                        null,
                        n.map(function (e) {
                          return a.createElement(f.b, {
                            key: e.value.value,
                            label: e.description || e.text,
                            isActive: r === e.value.value,
                            onClick: i._handleRangeSelect,
                            onClickArg: e,
                          });
                        }),
                        o && a.createElement(v.a, null),
                        o &&
                          a.createElement(f.b, {
                            label: D.goToDate,
                            onClick: i._handleGoToDateClick,
                          })
                      );
                }),
                Object(C.c)(n, { chartWidget: c.any.isRequired }),
                i
              );
            }
            return (
              Object(o.c)(t, e),
              (t.prototype.render = function () {
                var e = this;
                return a.createElement(
                  g.a,
                  { rule: "screen and (max-width: 419px)" },
                  function (t) {
                    return a.createElement(
                      h.a,
                      {
                        className: O.button,
                        content: D.title,
                        arrow: !0,
                        verticalAttachEdge: p.a.Top,
                        verticalDropDirection: p.b.FromBottomToTop,
                        horizontalMargin: 4,
                        "data-name": "date-ranges-menu",
                        isDrawer: t,
                      },
                      e._renderChildren(t)
                    );
                  }
                );
              }),
              (t.contextType = z),
              t
            );
          })(a.PureComponent)
        ),
        I = n("K3s3"),
        F = n("W9Y+");
      function P(e) {
        var t,
          n = l(
            e.className,
            F.item,
            (((t = {})[F.isActive] = e.isActive),
            (t[F.isFirst] = e.isFirst),
            (t[F.isLast] = e.isLast),
            t)
          );
        return a.createElement(
          "div",
          { className: n, onClick: e.onClick, ref: e.reference },
          e.children
        );
      }
      var H = n("nPPD"),
        q = n("RZ2Z"),
        G = Object(H.a)(I.a, q);
      var U = n("qSb5"),
        V = Object(I.c)(function (e) {
          return a.createElement(
            "div",
            { className: l(e.className, G.slider), ref: e.reference },
            a.createElement("div", { className: G.inner })
          );
        });
      var Z = M(function (e) {
          var t = e.className,
            n = e.ranges,
            i = e.activeRange,
            r = e.onSelectRange;
          return a.createElement(
            V,
            { className: l(U.sliderRow, t), "data-name": "date-ranges-tabs" },
            n.map(function (e, t) {
              return a.createElement(
                P,
                {
                  key: e.value.value,
                  isFirst: 0 === t,
                  isLast: t === n.length - 1,
                  isActive: i === e.value.value,
                  onClick: r && r.bind(null, e),
                },
                a.createElement(
                  "div",
                  {
                    title: e.description || e.text,
                    className: "apply-common-tooltip",
                  },
                  e.text
                )
              );
            })
          );
        }),
        Q = n("Iivm"),
        X = n("/DW5"),
        K = n("ul7r"),
        Y = n("c7H2"),
        J = Object(X.b)({ keys: ["Alt", "G"], text: "{0} + {1}" }),
        $ = Object(C.b)(),
        ee = M(
          (function (e) {
            function t(t, n) {
              var a = e.call(this, t, n) || this;
              return (
                (a._handleClick = function () {
                  var e = a.context.chartWidget;
                  Object(_.trackEvent)("GUI", "Chart Bottom Toolbar", "go to"),
                    Object(N.showGoToDateDialog)(e.model());
                }),
                Object(C.c)(n, { chartWidget: c.any.isRequired }),
                a
              );
            }
            return (
              Object(o.c)(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.className;
                return (
                  e.ranges.length > 0 &&
                  a.createElement(
                    "div",
                    {
                      className: l("apply-common-tooltip", Y.button, t),
                      "data-name": "go-to-date",
                      "data-tooltip-hotkey": J,
                      onClick: this._handleClick,
                      title: Object(s.t)("Go to"),
                    },
                    a.createElement(Q.a, {
                      className: Y.icon,
                      icon: K,
                    })
                  )
                );
              }),
              (t.contextType = $),
              t
            );
          })(a.PureComponent)
        ),
        te = n("URQ3");
      function ne(e) {
        var t = e.reference,
          n = e.className,
          i = e.children,
          r = Object(o.e)(e, ["reference", "className", "children"]);
        return a.createElement(
          "button",
          Object(o.a)({}, r, { className: l(n, te.button), ref: t }),
          a.createElement("span", { className: te.inner }, i)
        );
      }
      var ae = n("/+9u"),
        ie = n("4kQX"),
        re = n("7KDR"),
        oe = n("5VQP"),
        se = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._element = null),
              (n._menu = null),
              (n._handleRef = function (e) {
                n._element = e;
              }),
              (n._showMenu = function () {
                if (n._menu && n._menu.isShown())
                  return n._menu.hide(), void n._menu.destroy();
                var e = n.props,
                  t = e.getActions,
                  a = e.right,
                  i = Object(b.ensureNotNull)(n._element),
                  r = t();
                0 !== r.length &&
                  oe.ContextMenuManager.createMenu(r).then(function (e) {
                    (n._menu = e),
                      e.show(function (e, t) {
                        var n = i.getBoundingClientRect();
                        return {
                          clientX: a ? n.right - e : n.left,
                          clientY: n.top - Math.min(t, n.top),
                          overrideHeight: n.top < t ? n.top : void 0,
                        };
                      }, n._element || void 0);
                  });
              }),
              n
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.render = function () {
              var e = this.props.children;
              return a.createElement(
                "span",
                { onClick: this._showMenu, ref: this._handleRef },
                e
              );
            }),
            t
          );
        })(a.PureComponent),
        ce = n("2mG+"),
        le = { hint: window.t("Timezone") };
      var ue = Object(C.b)(),
        de = (function (e) {
          function t(t, n) {
            var a = e.call(this, t, n) || this;
            return (
              (a._timeFormatter = new ie.TimeFormatter()),
              (a._tickInterval = void 0),
              (a._tickClock = function () {
                var e = a.context.chartApiInstance,
                  t = a._timezoneOffset;
                if (void 0 !== t) {
                  var n = 1e3 * e.serverTimeOffset(),
                    i = new Date(Date.now() + t + n);
                  a.setState({ time: a._timeFormatter.format(i) });
                }
              }),
              (a._getActions = function () {
                return a.props.withMenu
                  ? (function (e) {
                      e.updateActions();
                      var t = e.actions();
                      return t && t.applyTimeZone instanceof re.Action
                        ? t.applyTimeZone.getSubItems()
                        : [];
                    })(a.context.chartWidget)
                  : [];
              }),
              Object(C.c)(n, {
                chartWidget: c.any.isRequired,
                chartApiInstance: c.any.isRequired,
              }),
              (a.state = { time: "", timezone: "" }),
              a
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this,
                t = this.context.chartWidget;
              (this._tickInterval = setInterval(this._tickClock, 1e3)),
                t.withModel(null, function () {
                  var n = t.model();
                  n
                    .model()
                    .mainSeries()
                    .dataEvents()
                    .symbolResolved()
                    .subscribe(e, e.updateTimezonesButton),
                    n
                      .model()
                      .properties()
                      .timezone.subscribe(e, e.updateTimezonesButton);
                });
            }),
            (t.prototype.componentWillUnmount = function () {
              var e = this,
                t = this.context.chartWidget;
              clearInterval(this._tickInterval),
                t.withModel(null, function () {
                  var n = t.model();
                  n
                    .model()
                    .mainSeries()
                    .dataEvents()
                    .symbolResolved()
                    .unsubscribe(e, e.updateTimezonesButton),
                    n
                      .model()
                      .properties()
                      .timezone.unsubscribe(e, e.updateTimezonesButton);
                });
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.className,
                n = e.withMenu,
                i = this.state,
                r = i.time,
                o = i.timezone;
              return a.createElement(
                se,
                { getActions: this._getActions },
                a.createElement(
                  ne,
                  {
                    className: l(t, ce.button, "apply-common-tooltip"),
                    title: n ? le.hint : void 0,
                    disabled: !n,
                    "data-name": "time-zone-menu",
                  },
                  r && o && r + " (" + o + ")"
                )
              );
            }),
            (t.prototype.updateTimezonesButton = function () {
              var e = this.context.chartWidget;
              if (e.model() && null !== e.model().mainSeries().symbolInfo()) {
                var t = e.model().model().timezone();
                if ("exchange" === t) {
                  var n = Object(b.ensureNotNull)(
                    e.model().mainSeries().symbolInfo()
                  ).timezone;
                  n && (t = n);
                }
                var a = Object(ae.a)(t);
                (this._timezoneOffset = a.offset),
                  this.setState({ timezone: a.string }),
                  this._tickClock();
              }
            }),
            (t.contextType = ue),
            t
          );
        })(a.PureComponent),
        he = n("z6ID");
      function pe(e) {
        return a.createElement("span", {
          className: l(he.separator, e.className),
        });
      }
      var me = n("tU7i"),
        ge = n("qFKp"),
        fe = (function () {
          function e(e, t, n) {
            (this._highlighted = !1),
              (this._chartWidget = e),
              (this._priceScaleGetter = t),
              (this._owner = n),
              (this._setHighlight = this._setHighlight.bind(this)),
              (this._removeHighlight = this._removeHighlight.bind(this));
          }
          return (
            (e.prototype.destroy = function () {
              this._highlighted && this._removeHighlight();
            }),
            (e.prototype.handlers = function () {
              var e = ge.CheckMobile.any();
              return {
                onMouseEnter: e ? void 0 : this._setHighlight,
                onMouseLeave: e ? void 0 : this._removeHighlight,
              };
            }),
            (e.prototype._setHighlight = function () {
              var e = this._chartWidget.model().model(),
                t = e.paneForSource(e.mainSeries()),
                n = this._priceScaleGetter();
              if (null !== t && null !== n) {
                var a = this._chartWidget.paneByState(t);
                if (null !== a) {
                  var i = a
                      .rightPriceAxisesContainer()
                      .findAxisWidgetForScale(n),
                    r = null;
                  null !== i && (r = i.axisInfo());
                  var o = a
                    .leftPriceAxisesContainer()
                    .findAxisWidgetForScale(n);
                  null !== o && (r = o.axisInfo());
                  var s = a.highlightedPriceAxis();
                  null !== r &&
                    s.value().axis !== r &&
                    (s.setValue({ owner: this._owner, axis: r }),
                    e.lightUpdate(),
                    (this._highlighted = !0));
                }
              }
            }),
            (e.prototype._removeHighlight = function () {
              var e = this._chartWidget.model().model(),
                t = e.paneForSource(e.mainSeries());
              if (null !== t) {
                var n = this._chartWidget.paneByState(t);
                if (null !== n) {
                  var a = n.highlightedPriceAxis(),
                    i = a.value();
                  null !== i.axis &&
                    i.owner === this._owner &&
                    (a.setValue({ owner: this._owner, axis: null }),
                    e.lightUpdate(),
                    (this._highlighted = !1));
                }
              }
            }),
            e
          );
        })(),
        ve = Object(C.b)();
      var be = Object(C.b)();
      var _e = Object(C.b)();
      var Ce = Object(C.b)();
      var ye,
        Se,
        Ee,
        xe,
        we,
        Me = n("+GaQ"),
        Re = n("XAms"),
        Ne = n("T4/F"),
        We = n("ApAi"),
        ke = n("PP+v"),
        Te = {
          extLabel: window.t("ext"),
          extHint: window.t(
            "Extended Hours is available only for intraday charts"
          ),
          percentageHint: window.t("Toggle Percentage"),
          logLabel: window.t("log", { context: "scale" }),
          logHint: window.t("Toggle Log Scale"),
          autoLabel: window.t("auto", { context: "scale" }),
          autoHint: window.t("Toggle Auto Scale"),
          fullscreenHint: window.t("Toggle Maximize Chart"),
          adjLabel: window.t("adj", { context: "adjustments" }),
          adjHint: window.t("Adjust data for dividends"),
          adjForDividendsOnlyHint: window.t(
            "Data is adjusted for dividends only"
          ),
          adjForSplitsOnlyHint: window.t("Data is adjusted for splits only"),
        },
        Ae =
          ((xe = function (e) {
            return a.createElement(me.b, {
              text: Te.logLabel,
              title: Te.logHint,
              className: e.className,
              isActive: e.isLogarithm,
              isGrouped: !0,
              onClick: e.onClick,
              onMouseEnter: e.onMouseEnter,
              onMouseLeave: e.onMouseLeave,
              "data-name": "logarithm",
            });
          }),
          ((we = (function (e) {
            function t(t, n) {
              var a = e.call(this, t, n) || this;
              return (
                (a._priceScale = null),
                (a._handleSelect = function () {
                  var e = a.context.chartWidget.model(),
                    t = Object(b.ensureNotNull)(a.state.series),
                    n = t.priceScale(),
                    i = n.mode();
                  t.priceScale().isLockScale() ||
                    e.setPriceScaleMode(
                      { log: !i.log },
                      n,
                      window.t("Toggle Log Scale")
                    );
                }),
                Object(C.c)(n, { chartWidget: c.any.isRequired }),
                (a.state = {
                  isActive: !1,
                  series: null,
                }),
                (a._priceAxisHighlighter = new fe(
                  a.context.chartWidget,
                  function () {
                    return a._priceScale;
                  },
                  "logarithm"
                )),
                a
              );
            }
            return (
              Object(o.c)(t, e),
              (t.prototype.componentDidMount = function () {
                var e = this,
                  t = this.context.chartWidget;
                t.withModel(null, function () {
                  var n = t.model().mainSeries(),
                    a = n.priceScale();
                  e._handleMainSeriesPriceScaleChanged(a),
                    n
                      .priceScaleChanged()
                      .subscribe(e, e._handleMainSeriesPriceScaleChanged),
                    e._handleModeChanged({}, a.mode()),
                    e.setState({ isActive: n.priceScale().isLog(), series: n });
                });
              }),
              (t.prototype.componentWillUnmount = function () {
                var e = this,
                  t = this.context.chartWidget;
                t.withModel(null, function () {
                  t.model()
                    .mainSeries()
                    .priceScaleChanged()
                    .unsubscribe(e, e._handleMainSeriesPriceScaleChanged);
                }),
                  null !== this._priceScale &&
                    (this._priceScale.modeChanged().unsubscribeAll(this),
                    (this._priceScale = null)),
                  this._priceAxisHighlighter.destroy();
              }),
              (t.prototype.render = function () {
                var e = this.props.className,
                  t = this.state,
                  n = t.isActive,
                  i = t.series;
                return a.createElement(
                  xe,
                  Object(o.a)({}, this._priceAxisHighlighter.handlers(), {
                    className: e,
                    isLogarithm: n,
                    isDisabled: null === i,
                    onClick: this._handleSelect,
                  })
                );
              }),
              (t.prototype._handleMainSeriesPriceScaleChanged = function (e) {
                var t = {};
                null !== this._priceScale &&
                  ((t = this._priceScale.mode()),
                  this._priceScale
                    .modeChanged()
                    .unsubscribe(this, this._handleModeChanged)),
                  (this._priceScale = e),
                  this._priceScale
                    .modeChanged()
                    .subscribe(this, this._handleModeChanged),
                  this._handleModeChanged(t, e.mode());
              }),
              (t.prototype._handleModeChanged = function (e, t) {
                e.log !== t.log && this.setState({ isActive: t.log });
              }),
              t
            );
          })(a.PureComponent)).contextType = ve),
          we),
        Oe = (function (e) {
          var t;
          return (
            ((t = (function (t) {
              function n(e, n) {
                var a = t.call(this, e, n) || this;
                return (
                  (a._priceScale = null),
                  (a._handleSelect = function () {
                    var e = a.context.chartWidget.model(),
                      t = Object(b.ensureNotNull)(a.state.series).priceScale(),
                      n = t.mode();
                    e.setPriceScaleMode(
                      { autoScale: !n.autoScale },
                      t,
                      window.t("Toggle Auto Scale")
                    );
                  }),
                  Object(C.c)(n, { chartWidget: c.any.isRequired }),
                  (a.state = { isActive: !1, series: null }),
                  (a._priceAxisHighlighter = new fe(
                    a.context.chartWidget,
                    function () {
                      return a._priceScale;
                    },
                    "auto"
                  )),
                  a
                );
              }
              return (
                Object(o.c)(n, t),
                (n.prototype.componentDidMount = function () {
                  var e = this,
                    t = this.context.chartWidget;
                  t.withModel(null, function () {
                    var n = t.model().mainSeries(),
                      a = n.priceScale();
                    e._handleMainSeriesPriceScaleChanged(a),
                      n
                        .priceScaleChanged()
                        .subscribe(e, e._handleMainSeriesPriceScaleChanged),
                      e._handleModeChanged({}, a.mode()),
                      e.setState({
                        isActive: n.priceScale().isAutoScale(),
                        series: n,
                      });
                  });
                }),
                (n.prototype.componentWillUnmount = function () {
                  var e = this,
                    t = this.context.chartWidget;
                  t.withModel(null, function () {
                    t.model()
                      .mainSeries()
                      .priceScaleChanged()
                      .unsubscribe(e, e._handleMainSeriesPriceScaleChanged);
                  }),
                    null !== this._priceScale &&
                      (this._priceScale.modeChanged().unsubscribeAll(this),
                      (this._priceScale = null)),
                    this._priceAxisHighlighter.destroy();
                }),
                (n.prototype.render = function () {
                  var t = this.props.className,
                    n = this.state,
                    i = n.isActive,
                    r = n.series;
                  return a.createElement(
                    e,
                    Object(o.a)({}, this._priceAxisHighlighter.handlers(), {
                      className: t,
                      isAuto: i,
                      isDisabled: null === r,
                      onClick: this._handleSelect,
                    })
                  );
                }),
                (n.prototype._handleMainSeriesPriceScaleChanged = function (e) {
                  var t = {};
                  null !== this._priceScale &&
                    ((t = this._priceScale.mode()),
                    this._priceScale
                      .modeChanged()
                      .unsubscribe(this, this._handleModeChanged)),
                    (this._priceScale = e),
                    this._priceScale
                      .modeChanged()
                      .subscribe(this, this._handleModeChanged),
                    this._handleModeChanged(t, e.mode());
                }),
                (n.prototype._handleModeChanged = function (e, t) {
                  e.autoScale !== t.autoScale &&
                    this.setState({ isActive: t.autoScale });
                }),
                n
              );
            })(a.PureComponent)).contextType = be),
            t
          );
        })(function (e) {
          return a.createElement(me.b, {
            text: Te.autoLabel,
            title: Te.autoHint,
            className: e.className,
            isActive: e.isAuto,
            isGrouped: !0,
            onClick: e.onClick,
            onMouseEnter: e.onMouseEnter,
            onMouseLeave: e.onMouseLeave,
            "data-name": "auto",
          });
        }),
        je = (function (e) {
          var t;
          return (
            ((t = (function (t) {
              function n(e, n) {
                var a = t.call(this, e, n) || this;
                return (
                  (a._priceScale = null),
                  (a._handleSelect = function () {
                    var e = a.context.chartWidget.model(),
                      t = Object(b.ensureNotNull)(a.state.series),
                      n = t.priceScale(),
                      i = n.mode();
                    t.priceScale().isLockScale() ||
                      e.setPriceScaleMode(
                        { percentage: !i.percentage },
                        n,
                        window.t("Toggle Percentage Scale")
                      );
                  }),
                  Object(C.c)(n, { chartWidget: c.any.isRequired }),
                  (a.state = { isActive: !1, series: null }),
                  (a._priceAxisHighlighter = new fe(
                    a.context.chartWidget,
                    function () {
                      return a._priceScale;
                    },
                    "percentage"
                  )),
                  a
                );
              }
              return (
                Object(o.c)(n, t),
                (n.prototype.componentDidMount = function () {
                  var e = this,
                    t = this.context.chartWidget;
                  t.withModel(null, function () {
                    var n = t.model().mainSeries(),
                      a = n.priceScale();
                    e._handleMainSeriesPriceScaleChanged(a),
                      n
                        .priceScaleChanged()
                        .subscribe(e, e._handleMainSeriesPriceScaleChanged),
                      e._handleScaleChange({}, a.mode()),
                      e.setState({
                        isActive: n.priceScale().isPercentage(),
                        series: n,
                      });
                  });
                }),
                (n.prototype.componentWillUnmount = function () {
                  var e = this,
                    t = this.context.chartWidget;
                  t.withModel(null, function () {
                    t.model()
                      .mainSeries()
                      .priceScaleChanged()
                      .unsubscribe(e, e._handleMainSeriesPriceScaleChanged);
                  }),
                    null !== this._priceScale &&
                      (this._priceScale.modeChanged().unsubscribeAll(this),
                      (this._priceScale = null)),
                    this._priceAxisHighlighter.destroy();
                }),
                (n.prototype.render = function () {
                  var t = this.props.className,
                    n = this.state,
                    i = n.isActive,
                    r = n.series;
                  return a.createElement(
                    e,
                    Object(o.a)({}, this._priceAxisHighlighter.handlers(), {
                      className: t,
                      isPercentage: i,
                      isDisabled: null === r,
                      onClick: this._handleSelect,
                    })
                  );
                }),
                (n.prototype._handleMainSeriesPriceScaleChanged = function (e) {
                  var t = {};
                  null !== this._priceScale &&
                    ((t = this._priceScale.mode()),
                    this._priceScale
                      .modeChanged()
                      .unsubscribe(this, this._handleScaleChange)),
                    (this._priceScale = e),
                    this._priceScale
                      .modeChanged()
                      .subscribe(this, this._handleScaleChange),
                    this._handleScaleChange(t, e.mode());
                }),
                (n.prototype._handleScaleChange = function (e, t) {
                  e.percentage !== t.percentage &&
                    this.setState({ isActive: t.percentage });
                }),
                n
              );
            })(a.PureComponent)).contextType = _e),
            t
          );
        })(function (e) {
          return a.createElement(me.b, {
            icon: Ne,
            title: Te.percentageHint,
            className: e.className,
            isActive: e.isPercentage,
            isDisabled: e.isDisabled,
            isGrouped: !0,
            onClick: e.onClick,
            onMouseEnter: e.onMouseEnter,
            onMouseLeave: e.onMouseLeave,
            "data-name": "percentage",
          });
        });
      var Be,
        De = Object(X.b)({ keys: ["Alt", "Enter"], text: "{0} + {1}" }),
        ze = (function (e) {
          var t;
          return (
            ((t = (function (t) {
              function n(e, n) {
                var a = t.call(this, e, n) || this;
                (a._handleClick = function (e) {
                  var t = a.context,
                    n = t.resizerDetacher;
                  t.chartWidgetCollection;
                  e.shiftKey && n.detachable.value()
                    ? n.detach()
                    : a.state.isFullscreen
                    ? n.exitFullscreen()
                    : n.requestFullscreen();
                }),
                  (a._handleLayoutChange = function (e) {
                    a.setState({ isFullscreen: e });
                  }),
                  (a._handlePhoneSize = function () {
                    0;
                  }),
                  Object(C.c)(n, {
                    chartWidgetCollection: c.any.isRequired,
                    resizerDetacher: c.any.isRequired,
                  });
                var i = n.resizerDetacher;
                return (
                  (a.state = {
                    isFullscreen: i.fullscreen.value(),
                    isChangeLayoutButton: a._isChangeLayoutButton(),
                  }),
                  a
                );
              }
              return (
                Object(o.c)(n, t),
                (n.prototype.componentDidMount = function () {
                  var e = this.context,
                    t = e.resizerDetacher;
                  e.chartWidgetCollection, this.props.mobileChangeLayoutEnabled;
                  t.fullscreen.subscribe(this._handleLayoutChange);
                }),
                (n.prototype.componentWillUnmount = function () {
                  var e = this.context,
                    t = e.resizerDetacher;
                  e.chartWidgetCollection, this.props.mobileChangeLayoutEnabled;
                  t.fullscreen.unsubscribe(this._handleLayoutChange);
                }),
                (n.prototype.render = function () {
                  var t = this.props.className,
                    n = this.state,
                    i = n.isFullscreen;
                  n.isChangeLayoutButton;
                  return a.createElement(e, {
                    className: t,
                    isFullscreen: i,
                    onClick: this._handleClick,
                  });
                }),
                (n.prototype._isChangeLayoutButton = function () {
                  return !1;
                }),
                n
              );
            })(a.PureComponent)).contextType = Ce),
            t
          );
        })(function (e) {
          return a.createElement(me.b, {
            icon: We,
            title: Te.fullscreenHint,
            className: e.className,
            isActive: e.isFullscreen,
            onClick: e.onClick,
            "data-tooltip-hotkey": De,
            "data-name": "fullscreen",
          });
        }),
        Le =
          (((ye = {}).properties = !0),
          (ye.fullscreen = !0),
          (ye.preventPhoneLayout = !0),
          ye),
        Ie =
          (((Se = {}).fullscreen = Number.MIN_SAFE_INTEGER),
          (Se.preventPhoneLayout = Number.MIN_SAFE_INTEGER),
          (Se.properties = Number.MIN_SAFE_INTEGER),
          (Se.timeZones = -1),
          (Se.auto = 0),
          (Se.logarithm = 1),
          (Se.percentage = 2),
          (Se.ext = 3),
          (Se.adj = 4),
          Se),
        Fe =
          ((Be = new Map()).set(Ae, "logarithm"),
          Be.set(je, "percentage"),
          Be.set(Oe, "auto"),
          Be.set(ze, "fullscreen"),
          Be);
      function Pe(e) {
        0;
      }
      var He =
          (((Ee = { dateRangeMode: "hidden" }).timeZones = !0),
          (Ee.fullscreen = !0),
          (Ee.preventPhoneLayout = !0),
          (Ee.properties = !0),
          (Ee.auto = !0),
          (Ee.logarithm = !0),
          (Ee.percentage = !0),
          (Ee.ext = !0),
          (Ee.adj = !0),
          Ee),
        qe = Object(C.b)(),
        Ge = (function (e) {
          function t(t, n) {
            var i,
              o,
              s = e.call(this, t, n) || this;
            (s._timezoneButtonRef = null),
              (s._layout = Object.assign({}, He)),
              (s._raf = null),
              (s._toolbar = null),
              (s._rangeExpanded = null),
              (s._rangeCollapsed = null),
              (s._seriesComponents = {}),
              (s._injector =
                ((i = function () {
                  return s._layout;
                }),
                (o = function (e, t) {
                  return (s._seriesComponents[t] = e);
                }),
                function (e, t, n) {
                  if (a.isValidElement(e) && "string" != typeof e.type) {
                    var r = e.props;
                    if ("string" == typeof r.className) {
                      var s = {
                          className: l(
                            r.className,
                            0 === t && ke.first,
                            t === n.length - 1 && ke.last
                          ),
                        },
                        c = i(),
                        u = Object(b.ensureDefined)(Fe.get(e.type));
                      return a.createElement(
                        "div",
                        {
                          key: null === e.key ? void 0 : e.key,
                          className: l(ke.inline, c[u] && ke.collapsed),
                          ref: function (e) {
                            return o(e, u);
                          },
                          onClick: function () {
                            return Pe();
                          },
                        },
                        a.cloneElement(e, s)
                      );
                    }
                  }
                  return e;
                })),
              (s._handleResize = function () {
                null === s._raf &&
                  (s._raf = requestAnimationFrame(function () {
                    var e,
                      t,
                      n,
                      a,
                      i = s._layout,
                      o = Object(b.ensureNotNull)(s._toolbar),
                      c = Object(b.ensureNotNull)(s._rangeExpanded),
                      l =
                        ((a = (function (e) {
                          var t = {};
                          return (
                            Object.keys(e).forEach(function (n) {
                              var a = e[n];
                              if (null !== a) {
                                var i = r.findDOMNode(a);
                                null !== i && (t[n] = i);
                              }
                            }),
                            t
                          );
                        })(s._seriesComponents)),
                        Object.keys(a)
                          .map(function (e) {
                            return { name: e, width: a[e].offsetWidth };
                          })
                          .sort(function (e, t) {
                            return Ie[e.name] - Ie[t.name];
                          })),
                      u = o.offsetWidth,
                      d = l.reduce(function (e, t) {
                        return e + t.width;
                      }, 0),
                      h = c.offsetWidth,
                      p =
                        !Boolean(c.textContent) || u - d - h <= 0
                          ? "collapsed"
                          : "expanded";
                    if (
                      (Object.assign(i, { dateRangeMode: p }), "expanded" !== p)
                    ) {
                      for (
                        var m =
                            u -
                            Object(b.ensureNotNull)(s._rangeCollapsed)
                              .offsetWidth -
                            0,
                          g = 0,
                          f = 0,
                          v = 0,
                          _ = l;
                        v < _.length;
                        v++
                      ) {
                        var C = _[v];
                        (g += C.width),
                          C.name in Le
                            ? ((f += C.width),
                              Object.assign(i, (((e = {})[C.name] = !1), e)))
                            : Object.assign(
                                i,
                                (((t = {})[C.name] = m <= g), t)
                              );
                      }
                      m <= f && Object.assign(i, { dateRangeMode: "hidden" });
                    } else Object.assign(i, (((n = {}).timeZones = !1), (n.fullscreen = !1), (n.preventPhoneLayout = !1), (n.properties = !1), (n.auto = !1), (n.logarithm = !1), (n.percentage = !1), (n.ext = !1), (n.adj = !1), n));
                    s._applyResizing(), (s._raf = null);
                  }));
              }),
              (s._handleTimezoneButtonRef = function (e) {
                s._timezoneButtonRef = e;
              }),
              (s._handleMeasure = function () {
                null !== s._toolbar && s.resizeUI();
              }),
              (s._handleFullscreenableChange = function (e) {
                s._setStateWithResize({ isFullscreenable: e });
              }),
              (s._handlePreventPhoneLayoutButtonVisibility = function () {
                0;
              }),
              (s._handleToolbarRef = function (e) {
                return (s._toolbar = e);
              }),
              (s._handleRangeCollapsedRef = function (e) {
                return (s._rangeCollapsed = e);
              }),
              (s._handleRangeExpandedRef = function (e) {
                return (s._rangeExpanded = e);
              }),
              (s._handleTimeZonesRef = function (e) {
                s._seriesComponents.timeZones = e;
              }),
              Object(C.c)(n, {
                onContentBoxChanged: c.any.isRequired,
                chartApiInstance: c.any.isRequired,
                chartWidget: c.any.isRequired,
                chartWidgetCollection: c.any.isRequired,
                resizerDetacher: c.any.isRequired,
              });
            var u = s.context.resizerDetacher;
            return (
              (s.state = {
                isFullscreenable: u.fullscreenable.value(),
                isPreventPhoneLayoutButton: s._isPreventPhoneLayoutButton(),
              }),
              s
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this.context,
                t = e.onContentBoxChanged,
                n = e.resizerDetacher;
              e.chartWidgetCollection, e.chartWidget;
              t.subscribe(this, this._handleResize),
                n.fullscreenable.subscribe(this._handleFullscreenableChange),
                this.updateTimezonesButton(),
                this.resizeUI();
            }),
            (t.prototype.componentWillUnmount = function () {
              var e = this.context,
                t = e.onContentBoxChanged,
                n = e.resizerDetacher;
              e.chartWidgetCollection, e.chartWidget;
              t.unsubscribe(this, this._handleResize),
                n.fullscreenable.unsubscribe(this._handleFullscreenableChange),
                null !== this._raf &&
                  (cancelAnimationFrame(this._raf), (this._raf = null));
            }),
            (t.prototype.render = function () {
              var e = this._layout;
              return a.createElement(
                "div",
                {
                  className: ke.toolbar,
                  ref: this._handleToolbarRef,
                  onContextMenu: Re.a,
                },
                this.props.timeFramesWidgetEnabled &&
                  a.createElement(
                    Me.a,
                    null,
                    a.createElement(
                      "div",
                      {
                        className: l(
                          ke.dateRangeWrapper,
                          "collapsed" !== e.dateRangeMode && ke.collapsed
                        ),
                        ref: this._handleRangeCollapsedRef,
                      },
                      a.createElement(
                        "div",
                        { className: l(ke.dateRangeCollapsed) },
                        a.createElement(L, {
                          goToDateButton: this.props.goToDateEnabled,
                        })
                      )
                    ),
                    a.createElement(
                      u,
                      { onMeasure: this._handleMeasure },
                      a.createElement(
                        "div",
                        {
                          className: l(
                            ke.dateRangeWrapper,
                            "expanded" !== e.dateRangeMode && ke.collapsed
                          ),
                          ref: this._handleRangeExpandedRef,
                        },
                        a.createElement(
                          "div",
                          {
                            className: l(ke.dateRangeExpanded),
                          },
                          a.createElement(Z, null),
                          this.props.goToDateEnabled &&
                            a.createElement(pe, null),
                          this.props.goToDateEnabled &&
                            a.createElement(ee, null)
                        )
                      )
                    )
                  ),
                a.createElement(
                  "div",
                  { className: ke.seriesControlWrapper },
                  this.props.timeWidgetEnabled &&
                    a.createElement(
                      u,
                      { onMeasure: this._handleMeasure },
                      a.createElement(
                        "div",
                        {
                          className: l(ke.inline, e.timeZones && ke.collapsed),
                          ref: this._handleTimeZonesRef,
                        },
                        a.createElement(
                          "div",
                          {
                            className: ke.inline,
                            onClick: this._trackTimezonesButtonClick,
                          },
                          a.createElement(de, {
                            className: ke.timezone,
                            withMenu: this.props.timezoneMenuEnabled,
                            ref: this._handleTimezoneButtonRef,
                          })
                        ),
                        a.createElement(
                          "div",
                          { className: ke.inline },
                          a.createElement(pe, null)
                        )
                      )
                    ),
                  a.createElement(
                    Me.a,
                    { map: this._injector },
                    !1,
                    !1,
                    this.props.percentageScaleButtonEnabled &&
                      !d.enabled("fundamental_widget") &&
                      a.createElement(je, { className: ke.icon }),
                    this.props.logScaleButtonEnabled &&
                      a.createElement(Ae, { className: ke.item }),
                    this.props.autoScaleButtonEnabled &&
                      a.createElement(Oe, { className: ke.item }),
                    this.props.fullscreenButtonEnabled &&
                      this.state.isFullscreenable &&
                      a.createElement(ze, {
                        className: ke.icon,
                        mobileChangeLayoutEnabled:
                          this.props.mobileChangeLayoutEnabled,
                      }),
                    !1
                  )
                )
              );
            }),
            (t.prototype.updateTimezonesButton = function () {
              null !== this._timezoneButtonRef &&
                this._timezoneButtonRef.updateTimezonesButton();
            }),
            (t.prototype.resizeUI = function () {
              this._handleResize();
            }),
            (t.prototype._updateButtonsVisibility = function () {}),
            (t.prototype._trackTimezonesButtonClick = function () {
              Pe();
            }),
            (t.prototype._setStateWithResize = function (e) {
              var t = this;
              Object.assign(this._layout, He),
                this._applyResizing(),
                this.setState(e, function () {
                  return t._handleResize();
                });
            }),
            (t.prototype._applyResizing = function () {
              var e = this,
                t = this._layout,
                n = t.dateRangeMode,
                a = Object(o.e)(t, ["dateRangeMode"]);
              this._rangeExpanded &&
                this._rangeExpanded.classList.toggle(
                  ke.collapsed,
                  "expanded" !== n
                ),
                this._rangeCollapsed &&
                  this._rangeCollapsed.classList.toggle(
                    ke.collapsed,
                    "collapsed" !== n
                  ),
                Object.keys(a).forEach(function (t) {
                  var n = t,
                    i = e._seriesComponents[n];
                  i && i.classList.toggle(ke.collapsed, a[n]);
                });
            }),
            (t.prototype._isPreventPhoneLayoutButton = function () {
              return !1;
            }),
            (t.contextType = qe),
            t
          );
        })(a.PureComponent),
        Ue = {
          onContentBoxChanged: c.any,
          computeContentBox: c.any,
          chartWidget: c.any,
          chartApiInstance: c.any,
          chartWidgetCollection: c.any,
          resizerDetacher: c.any,
          availableTimeFrames: c.any,
        },
        Ve = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            n._setActiveChart = function (e) {
              n._defineRegistry(e), n.setState({ chartWidget: e });
            };
            var a = n.props.chartWidgetCollection.activeChartWidget.value();
            return (n.state = { chartWidget: a }), n._defineRegistry(a), n;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.componentDidMount = function () {
              this.props.chartWidgetCollection.activeChartWidget.subscribe(
                this._setActiveChart
              );
            }),
            (t.prototype.componentWillUnmount = function () {
              this.props.chartWidgetCollection.activeChartWidget.unsubscribe(
                this._setActiveChart
              );
            }),
            (t.prototype.render = function () {
              var e = this.state.chartWidget;
              if (!e) return null;
              var t = this.props.options,
                n = {
                  timeFramesWidgetEnabled: t.timeFramesWidgetEnabled,
                  goToDateEnabled: t.timeFramesWidget.goToDateEnabled,
                  timeWidgetEnabled: t.timeWidgetEnabled,
                  timezoneMenuEnabled:
                    t.timeWidget && t.timeWidget.timezoneMenuEnabled,
                  extendedHoursButtonEnabled: t.extendedHoursButtonEnabled,
                  adjustForDividendsButtonEnabled:
                    t.adjustForDividendsButtonEnabled,
                  logScaleButtonEnabled: t.logScaleButtonEnabled,
                  percentageScaleButtonEnabled: t.percentageScaleButtonEnabled,
                  autoScaleButtonEnabled: t.autoScaleButtonEnabled,
                  fullscreenButtonEnabled: t.fullscreenButtonEnabled,
                  mobileChangeLayoutEnabled: t.mobileChangeLayoutEnabled,
                };
              return a.createElement(
                C.a,
                { validation: Ue, value: this._registry },
                a.createElement(Ge, Object(o.a)({ key: e.id() }, n))
              );
            }),
            (t.prototype._defineRegistry = function (e) {
              var t = this.props,
                n = t.onContentBoxChanged,
                a = t.computeContentBox,
                i = t.chartApiInstance,
                r = t.chartWidgetCollection,
                o = t.options,
                s = o.timeFramesWidgetEnabled,
                c = o.timeFramesWidget,
                l = s ? c.availableTimeFrames : void 0;
              this._registry = {
                onContentBoxChanged: n,
                computeContentBox: a,
                chartWidget: e,
                availableTimeFrames: l,
                chartApiInstance: i,
                chartWidgetCollection: r,
                resizerDetacher: e.getResizerDetacher(),
              };
            }),
            t
          );
        })(a.PureComponent);
      n.d(t, "BottomToolbarRenderer", function () {
        return Ze;
      });
      var Ze = (function () {
        function e(e, t, n, i, o, s, c) {
          this._container = e;
          var l = a.createElement(Ve, {
            onContentBoxChanged: t,
            computeContentBox: n,
            chartWidgetCollection: i,
            chartApiInstance: o,
            chartWidgetOptions: s,
            options: c,
          });
          r.render(l, e), e.setAttribute("data-initialized", "true");
        }
        return (
          (e.prototype.destroy = function () {
            r.unmountComponentAtNode(this._container),
              this._container.removeAttribute("data-initialized");
          }),
          e
        );
      })();
    },
    O7m7: function (e, t, n) {},
    "PP+v": function (e, t, n) {
      e.exports = {
        toolbar: "toolbar-2MJefnwP",
        dateRangeWrapper: "dateRangeWrapper-yS_7EK1i",
        seriesControlWrapper: "seriesControlWrapper-1c7dZFwu",
        dateRangeExpanded: "dateRangeExpanded-Eh9SAOEe",
        dateRangeCollapsed: "dateRangeCollapsed-1-pFg0M1",
        item: "item-2cWFW_ze",
        first: "first-1XNI05qr",
        last: "last-2VBe7EFW",
        inline: "inline-2rwBBIxN",
        timezone: "timezone-34WAZb8x",
        icon: "icon-3VRthUnU",
        hidden: "hidden-3Tq8Bf9V",
        collapsed: "collapsed-2lhil-Rc",
      };
    },
    RZ2Z: function (e, t, n) {
      e.exports = { slider: "slider-1ealLtjI", inner: "inner-3lmAEIjy" };
    },
    "T4/F": function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><g fill="none" stroke="currentColor"><circle cx="3.5" cy="3.5" r="2"/><circle cx="10.5" cy="10.5" r="2"/><path stroke-linecap="square" d="M9.5 1.5l-5 11"/></g></svg>';
    },
    URQ3: function (e, t, n) {
      e.exports = {
        button: "button-88UE6omC",
        hover: "hover-3_vVP91F",
        inner: "inner-2FptJsfC",
      };
    },
    "W9Y+": function (e, t, n) {
      e.exports = {
        item: "item-3cgIlGYO",
        hover: "hover-2y46_KNk",
        isActive: "isActive-2M6dwA7-",
        isFirst: "isFirst-2kfAV5tf",
        isLast: "isLast-voJ1bqZh",
      };
    },
    XXQ5: function (e, t, n) {
      e.exports = {
        item: "item-3uG--HK9",
        emptyIcons: "emptyIcons-m0h_sZp0",
        loading: "loading-cNheEKQv",
        disabled: "disabled-3ilLPdQ4",
        interactive: "interactive-2W_Hkhdy",
        hovered: "hovered-D1oc5kww",
        icon: "icon-1Mb1FjSX",
        label: "label-3O4C0UM-",
        fullWidth: "fullWidth-1uGfIWwz",
        title: "title-22oXfKpQ",
        nested: "nested-1ZM4Mhrc",
        shortcut: "shortcut-3ZjqDeQg",
        remove: "remove-3gWfSy1e",
      };
    },
    XiJV: function (e, t, n) {
      e.exports = { separator: "separator-1TZB5HZ-" };
    },
    Xy1d: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 15l5 5L23 9"/></svg>';
    },
    Xzy5: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 5l3.5 3.5L8 12"/></svg>';
    },
    YZ9j: function (e) {
      e.exports = JSON.parse(
        '{"loader":"loader-8x1ZxRwP","item":"item-2-89r_cd","tv-button-loader":"tv-button-loader-23vqS1uY","black":"black-20Ytsf0V","white":"white-1ucCcc2I","gray":"gray-XDhHSS-T","loader-initial":"loader-initial-1deQDeio","loader-appear":"loader-appear-2krFtMrd"}'
      );
    },
    c7H2: function (e, t, n) {
      e.exports = {
        button: "button-2gir_Bbb",
        hover: "hover-SrAyrKlT",
        icon: "icon-MwaAItz1",
      };
    },
    l4ku: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return m;
      });
      var a = n("q1tI"),
        i = n.n(a),
        r = n("TSYQ"),
        o = n("Iivm"),
        s = n("6KyJ"),
        c = n("J+f8"),
        l = n("w+Rv"),
        u = n("Xy1d"),
        d = n("Xzy5"),
        h = n("20PO"),
        p = n("XXQ5");
      function m(e) {
        var t = e.isTitle,
          n = e.isLoading,
          m = e.isHovered,
          g = e.active,
          f = e.checkable,
          v = e.disabled,
          b = e.checked,
          _ = e.icon,
          C = e.iconChecked,
          y = e.hint,
          S = e.subItems,
          E = e.label,
          x = e.onClick,
          w = e.children,
          M = e.toolbox,
          R = e.fullWidthLabel,
          N = Object(a.useContext)(c.a),
          W = !!S.length;
        return n
          ? i.a.createElement(
              "li",
              { className: r(p.item, p.loading) },
              i.a.createElement(s.a, { color: "gray" })
            )
          : i.a.createElement(
              "li",
              {
                className: r(
                  p.item,
                  p.interactive,
                  t && p.title,
                  v && p.disabled,
                  m && p.hovered,
                  g && p.active,
                  N && p.emptyIcons
                ),
                onClick: x,
              },
              i.a.createElement(o.a, {
                className: r(p.icon),
                icon: (function () {
                  if (f && b) return C || _ || u;
                  return _;
                })(),
              }),
              i.a.createElement(
                "span",
                { className: r(p.label, R && p.fullWidth) },
                E
              ),
              !!M &&
                i.a.createElement(o.a, {
                  onClick: function () {
                    M && M.action();
                  },
                  className: p.remove,
                  icon: h,
                }),
              !W &&
                y &&
                i.a.createElement(l.a, { className: p.shortcut, text: y }),
              W && i.a.createElement(o.a, { className: p.nested, icon: d }),
              w
            );
      }
    },
    nPPD: function (e, t, n) {
      "use strict";
      function a(e, t, n) {
        void 0 === n && (n = {});
        for (
          var a = Object.assign({}, t), i = 0, r = Object.keys(t);
          i < r.length;
          i++
        ) {
          var o = r[i],
            s = n[o] || o;
          s in e && (a[o] = [e[s], t[o]].join(" "));
        }
        return a;
      }
      function i(e, t, n) {
        return void 0 === n && (n = {}), Object.assign({}, e, a(e, t, n));
      }
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "a", function () {
          return i;
        });
    },
    qSb5: function (e, t, n) {
      e.exports = { sliderRow: "sliderRow-Tv1W7hM5" };
    },
    ul7r: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M1.5 8V6.5m7.5 9h5.5a2 2 0 0 0 2-2v-7m-15 0v-2c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v2m-15 0h15"/><path fill="currentColor" d="M5 1h1v3H5V1zM12 1h1v3h-1V1z"/><path stroke="currentColor" d="M0 12.5h7.5m0 0L4 16m3.5-3.5L4 9"/></svg>';
    },
    "w+Rv": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var a = n("q1tI"),
        i = n("TSYQ"),
        r = n.n(i),
        o = n("ycgn");
      function s(e) {
        var t = e.text,
          n = void 0 === t ? "" : t,
          i = e.className;
        return a.createElement("span", { className: r()(o.shortcut, i) }, n);
      }
    },
    ycgn: function (e, t, n) {
      e.exports = {
        item: "item-stVdeCwG",
        interactive: "interactive-3E0jwVyG",
        hovered: "hovered-2HCCgw6c",
        disabled: "disabled-2K7FyUI3",
        active: "active-muW4lycL",
        shortcut: "shortcut-2P38AivB",
        iconCell: "iconCell-OhwVvlgA",
        icon: "icon-3DDcYD-t",
        checkmark: "checkmark-2UE1siCn",
        content: "content-1GXgstZ5",
        label: "label-1If3beUH",
        checked: "checked-5eQn8630",
        toolbox: "toolbox-2XX2mSNw",
        showToolboxOnHover: "showToolboxOnHover-iCrUIcOG",
        arrowIcon: "arrowIcon-2FMesq_x",
        subMenu: "subMenu-QM4GIDtY",
      };
    },
    z6ID: function (e, t, n) {
      e.exports = { separator: "separator-3bp1jCsV" };
    },
  },
]);
