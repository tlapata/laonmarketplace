(window.webpackJsonp = window.webpackJsonp || []).push([
  ["general-chart-properties-dialog"],
  {
    "++0f": function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentcolor" stroke-width="1.3" d="M12 9l5 5-5 5"/></svg>';
    },
    "2x13": function (e, t, n) {
      e.exports = {
        wrapper: "wrapper-1S1BAxTC",
        container: "container-2mBp3oqG",
        tab: "tab-1EqAs-Lb",
        active: "active-3u5zV0YP",
        title: "title-1SrCEkqk",
        icon: "icon-2RKetbyG",
        titleText: "titleText-QNKMAlbN",
        nested: "nested-H6CeL6Wc",
        isTablet: "isTablet-2Pl3hVJ9",
        isMobile: "isMobile-2OnSZ08h",
      };
    },
    An2S: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      }),
        n.d(t, "c", function () {
          return p;
        }),
        n.d(t, "b", function () {
          return h;
        });
      var o = n("mrSG"),
        a = n("q1tI"),
        i = n.n(a),
        l = n("TSYQ"),
        r = n.n(l),
        s = n("Iivm"),
        c = n("++0f"),
        m = n("2x13");
      function u(e) {
        return { isMobile: "mobile" === e, isTablet: "tablet" === e };
      }
      function d(e) {
        var t = e.mode,
          n = e.className,
          a = Object(o.e)(e, ["mode", "className"]),
          l = u(t),
          s = l.isMobile,
          c = l.isTablet,
          d = r()(m.container, c && m.isTablet, s && m.isMobile, n);
        return i.a.createElement(
          "div",
          Object(o.a)({}, a, { className: d, "data-role": "dialog-sidebar" })
        );
      }
      function p(e) {
        return i.a.createElement(
          "div",
          Object(o.a)({ className: m.wrapper }, e)
        );
      }
      function h(e) {
        var t = e.mode,
          n = e.title,
          a = e.icon,
          l = e.isActive,
          d = e.onClick,
          p = Object(o.e)(e, ["mode", "title", "icon", "isActive", "onClick"]),
          h = u(t),
          b = h.isMobile,
          f = h.isTablet;
        return i.a.createElement(
          "div",
          Object(o.a)({}, p, {
            className: r()(
              m.tab,
              f && m.isTablet,
              b && m.isMobile,
              l && m.active
            ),
            onClick: d,
          }),
          i.a.createElement(s.a, { className: m.icon, icon: a }),
          !f &&
            i.a.createElement(
              "span",
              { className: m.title },
              i.a.createElement("span", { className: m.titleText }, n),
              b && i.a.createElement(s.a, { className: m.nested, icon: c })
            )
        );
      }
    },
    Iivm: function (e, t, n) {
      "use strict";
      var o = n("mrSG"),
        a = n("q1tI");
      const i = a.forwardRef((e, t) => {
        const { icon: n = "" } = e,
          i = Object(o.e)(e, ["icon"]);
        return a.createElement(
          "span",
          Object.assign({}, i, {
            ref: t,
            dangerouslySetInnerHTML: { __html: n },
          })
        );
      });
      n.d(t, "a", function () {
        return i;
      });
    },
    PI1I: function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n("mrSG"),
        a = (n("YFKU"), n("q1tI")),
        i = n("i8i4"),
        l = n("mwqF"),
        r = n("Iivm"),
        s = n("bvfV"),
        c = n("ycFu"),
        m = n("ybVX"),
        u = n("Q+1u"),
        d = n("Vdly"),
        p = n.n(d),
        h = n("VNzU"),
        b = n("/KDZ"),
        f = (n("bSeV"), n("H172")),
        y = n("N5tr"),
        v = n("KKsp"),
        g = n("EsvI"),
        _ = (n("HbRj"), n("fZEr")),
        T = window.t("Do you really want to delete Color Theme '{name}' ?");
      var C = n("+EG+"),
        S = n("2uTr"),
        A = (n("EsMY"), n("i/MG")),
        k = n("JWMC"),
        w = n("8d0Q"),
        E = n("utEQ");
      function P(e) {
        var t = e.themeName,
          n = e.chartWidgetCollection,
          i = e.onRemove,
          l = e.manager,
          r = Object(w.b)(),
          s = r[0],
          c = r[1],
          m = a.useCallback(
            function () {
              return (function (e, t, n) {
                window.is_authenticated &&
                  Object(_.a)(
                    {
                      text: T.format({ name: e }),
                      onConfirm: function (n) {
                        var o = n.dialogClose;
                        Object(g.removeTheme)(e), t && t(e), o();
                      },
                    },
                    n
                  );
              })(t, i, l);
            },
            [t, i, l]
          ),
          u = a.useCallback(
            function () {
              Object(g.loadTheme)(t, !1, !1, n).then(function () {
                window.saver.saveChartSilently(),
                  Object(k.trackEvent)("GUI", "Switch to custom theme");
              });
            },
            [t, n]
          );
        return a.createElement(
          "div",
          Object(o.a)({}, c),
          a.createElement(y.b, {
            className: E.defaultsButtonItem,
            isActive: !1,
            label: t,
            onClick: u,
            toolbox: a.createElement(A.a, {
              hidden: !Modernizr.mobiletouch && !s,
              onClick: m,
            }),
          })
        );
      }
      var B = n("HWhk"),
        I = window.t("Template"),
        x = window.t("Apply Defaults"),
        M =
          (Object(S.appendEllipsis)(window.t("Save As")),
          window.t("Apply to all")),
        N = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._manager = null),
              (n._handleApplyDefaults = function () {
                var e = n.props,
                  t = e.model,
                  o = e.chartWidgetCollection;
                t.restorePreferences();
                var a = Object(g.getCurrentTheme)().name;
                Object(g.loadTheme)(a, !0, !0, o, void 0, void 0, !0);
              }),
              (n._handleSaveAs = function () {}),
              (n._handleRemoveTheme = function (e) {
                n.setState({
                  themes: n.state.themes.filter(function (t) {
                    return t !== e;
                  }),
                });
              }),
              (n._syncThemeList = function () {
                0;
              }),
              (n._defaultDropdownItems = [
                {
                  value: "apply",
                  readonly: !0,
                  content: a.createElement(y.b, {
                    className: E.defaultsButtonItem,
                    isActive: !1,
                    label: x,
                    onClick: n._handleApplyDefaults,
                  }),
                },
              ]),
              (n._applyToAllDropdownItem = {
                value: "apply_to_all",
                readonly: !0,
                content: a.createElement(y.b, {
                  className: E.defaultsButtonItem,
                  isActive: !1,
                  label: M,
                  onClick: t.applyToAllCallback,
                }),
              }),
              (n.state = { themes: [] }),
              n._syncThemeList(),
              n
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.render = function () {
              var e = this;
              return a.createElement(C.b.Consumer, null, function (t) {
                return (
                  (e._manager = t),
                  a.createElement(
                    b.a,
                    { rule: "screen and (max-width: 768px)" },
                    function (t) {
                      return a.createElement(f.a, {
                        className: !t && E.themesButtonText,
                        items: e._getThemeItems(t),
                        hideArrowButton: t,
                        value: "defaults",
                        "data-name": "theme-select",
                      });
                    }
                  )
                );
              });
            }),
            (t.prototype._getThemeItems = function (e) {
              var t = this,
                n = this.props,
                i = n.isApplyToAllVisible,
                l = n.chartWidgetCollection,
                r =
                  e && i
                    ? Object(o.f)(
                        [
                          this._applyToAllDropdownItem,
                          this._getPlaceHolderItem(e),
                        ],
                        this._defaultDropdownItems
                      )
                    : Object(o.f)(
                        [this._getPlaceHolderItem(e)],
                        this._defaultDropdownItems
                      ),
                s = this.state.themes;
              if (!s.length) return r;
              var c = s.map(function (e) {
                return {
                  value: e,
                  readonly: !0,
                  content: a.createElement(P, {
                    themeName: e,
                    onRemove: t._handleRemoveTheme,
                    chartWidgetCollection: l,
                    manager: t._manager,
                  }),
                };
              });
              return (
                c.unshift({
                  readonly: !0,
                  content: a.createElement(v.a, null),
                }),
                r.concat(c)
              );
            }),
            (t.prototype._getPlaceHolderItem = function (e) {
              return {
                value: "defaults",
                readonly: !0,
                content: "",
                selectedContent: e
                  ? a.createElement(r.a, {
                      className: E.themesButtonIcon,
                      icon: B,
                    })
                  : I,
              };
            }),
            t
          );
        })(a.PureComponent),
        O = n("tWVy"),
        j = n("yqnI"),
        z = n("uhCe"),
        V = n("An2S"),
        D = n("tmL0"),
        W = {
          areaSymbolMinTick: "normal",
          areaSymbolTimezone: "normal",
          barSymbolMinTick: "normal",
          barSymbolTimezone: "normal",
          baselineSymbolMinTick: "normal",
          baselineSymbolTimezone: "normal",
          candleSymbolMinTick: "normal",
          candleSymbolTimezone: "normal",
          dateFormat: "normal",
          haSymbolMinTick: "normal",
          haSymbolTimezone: "normal",
          hiloSymbolMinTick: "normal",
          hiloSymbolTimezone: "normal",
          hollowCandleSymbolMinTick: "normal",
          hollowCandleSymbolTimezone: "normal",
          kagiAtrLength: "normal",
          kagiReversalAmount: "normal",
          kagiStyle: "normal",
          kagiSymbolMinTick: "normal",
          kagiSymbolTimezone: "normal",
          lineSymbolMinTick: "normal",
          lineSymbolTimezone: "normal",
          lockScale: "normal",
          mainSeriesSymbolAreaPriceSource: "normal",
          mainSeriesSymbolBaseLevelPercentage: "normal",
          mainSeriesSymbolBaseLinePriceSource: "normal",
          mainSeriesSymbolLinePriceSource: "normal",
          mainSeriesSymbolStyleType: "normal",
          navButtons: "big",
          paneButtons: "big",
          pbLb: "normal",
          pbSymbolMinTick: "normal",
          pbSymbolTimezone: "normal",
          pnfAtrLength: "normal",
          pnfBoxSize: "normal",
          pnfReversalAmount: "normal",
          pnfSources: "normal",
          pnfStyle: "normal",
          pnfSymbolMinTick: "normal",
          pnfSymbolTimezone: "normal",
          rangeSymbolMinTick: "normal",
          rangeSymbolTimezone: "normal",
          renkoAtrLength: "normal",
          renkoBoxSize: "normal",
          renkoStyle: "normal",
          renkoSymbolMinTick: "normal",
          renkoSymbolTimezone: "normal",
          scalesPlacement: "normal",
          symbolLastValueLabel: "big",
          symbolTextSource: "normal",
        },
        L = n("U0JK"),
        R = n("sXZi"),
        q = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            (n._renderChildren = function (e) {
              var t = e.requestResize,
                o = e.isSmallWidth;
              return (
                (n._requestResize = t),
                a.createElement(
                  "div",
                  { className: R.content },
                  n._renderTabs(o),
                  n._renderTabContent(o)
                )
              );
            }),
              (n._renderApplyToAllButton = function () {
                return a.createElement(
                  b.a,
                  { rule: z.a.TabletNormal },
                  function (e) {
                    return n._renderApplyToAll(e);
                  }
                );
              }),
              (n._renderFooterLeft = function () {
                var e = n.props,
                  t = e.model,
                  o = e.chartWidgetCollection,
                  i = n.state.isApplyToAllVisible;
                return a.createElement(N, {
                  model: t,
                  isApplyToAllVisible: i,
                  applyToAllCallback: n._handleApplyToAll,
                  chartWidgetCollection: o,
                });
              }),
              (n._createTabClickHandler = function (e) {
                return function () {
                  return n._selectPage(e);
                };
              }),
              (n._selectPage = function (e) {
                var t = n.state.activePage;
                e !== t &&
                  (t &&
                    t.definitions.unsubscribe(n._onChangeActivePageDefinitions),
                  p.a.setValue("properties_dialog.last_page_id", e.id),
                  e.definitions.subscribe(n._onChangeActivePageDefinitions),
                  n.setState(
                    { activePage: e, tableKey: Date.now() },
                    function () {
                      n._requestResize && n._requestResize();
                    }
                  ));
              }),
              (n._onChangeActivePageDefinitions = function () {
                j.a.logNormal("Definition collection was updated"),
                  n.setState({ tableKey: Date.now() }, function () {
                    n._requestResize && n._requestResize();
                  });
              }),
              (n._handleCancel = function () {
                n.props.onCancel(), n.props.onClose();
              }),
              (n._handleSubmit = function () {
                n.props.onSubmit(), n.props.onClose();
              }),
              (n._handleScroll = function () {
                O.a.fire();
              }),
              (n._handleApplyToAll = function () {
                var e = n.props,
                  t = e.chartWidgetCollection,
                  o = e.model;
                n.state.isApplyToAllVisible && t.applyPreferencesToAllCharts(o);
              }),
              (n._syncApplyToAllVisibility = function () {
                var e = n.props.chartWidgetCollection;
                n.setState({
                  isApplyToAllVisible: Object(h.isMultipleLayout)(
                    e.layout.value()
                  ),
                });
              }),
              (n._handleBackClick = function () {
                var e = n.state.activePage;
                e &&
                  e.definitions.unsubscribe(n._onChangeActivePageDefinitions),
                  n.setState({ activePage: null });
              });
            var o = t.pages,
              i = t.activePageId,
              l = o.find(function (e) {
                return e.id === i;
              });
            if (!l) {
              var r = p.a.getValue("properties_dialog.last_page_id"),
                s = o.find(function (e) {
                  return e.id === r;
                });
              l = s || o[0];
            }
            return (
              (n.state = {
                activePage: l,
                isApplyToAllVisible: Object(h.isMultipleLayout)(
                  t.chartWidgetCollection.layout.value()
                ),
                tableKey: Date.now(),
              }),
              n
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this.props.chartWidgetCollection,
                t = this.state.activePage;
              e.layout.subscribe(this._syncApplyToAllVisibility),
                t &&
                  t.definitions.subscribe(this._onChangeActivePageDefinitions);
            }),
            (t.prototype.componentWillUnmount = function () {
              var e = this.props.chartWidgetCollection,
                t = this.state.activePage;
              t &&
                t.definitions.unsubscribe(this._onChangeActivePageDefinitions),
                e.layout.unsubscribe(this._syncApplyToAllVisibility);
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.isOpened,
                o = t.onClose,
                i = this.state.activePage;
              return a.createElement(
                b.a,
                { rule: z.a.TabletSmall },
                function (t) {
                  return a.createElement(c.a, {
                    className: R.withSidebar,
                    dataName: "series-properties-dialog",
                    onClose: o,
                    isOpened: n,
                    title:
                      null !== i && t ? i.title : window.t("Chart settings"),
                    footerLeftRenderer: e._renderFooterLeft,
                    additionalButtons: e._renderApplyToAllButton(),
                    additionalHeaderElement:
                      null !== i && t
                        ? a.createElement(r.a, {
                            className: R.backButton,
                            icon: L,
                            onClick: e._handleBackClick,
                          })
                        : void 0,
                    onSubmit: e._handleSubmit,
                    onCancel: e._handleCancel,
                    render: e._renderChildren,
                    submitOnEnterKey: !1,
                  });
                }
              );
            }),
            (t.prototype._renderTabContent = function (e) {
              var t = this.props.pages,
                n = this._getCurrentPage(e);
              if (n) {
                var o = t.find(function (e) {
                    return e.id === n.id;
                  }),
                  i = o ? o.definitions.value() : [];
                return a.createElement(
                  D.a,
                  { className: R.tabContent, onScroll: this._handleScroll },
                  a.createElement(
                    m.b.Provider,
                    { value: W },
                    a.createElement(
                      u.a,
                      { key: this.state.tableKey },
                      i.map(function (e) {
                        return a.createElement(s.a, {
                          key: e.id,
                          definition: e,
                        });
                      })
                    )
                  )
                );
              }
              return null;
            }),
            (t.prototype._renderTabs = function (e) {
              var t = this,
                n = this.props.pages;
              if (this.state.activePage && e) return null;
              var o = this._getCurrentPage(e);
              return a.createElement(
                b.a,
                { rule: z.a.TabletNormal },
                function (e) {
                  return a.createElement(
                    b.a,
                    { rule: z.a.TabletSmall },
                    function (i) {
                      var l = i ? "mobile" : e ? "tablet" : void 0;
                      return a.createElement(
                        V.a,
                        { mode: l, onScroll: t._handleScroll },
                        n.map(function (e) {
                          return a.createElement(V.b, {
                            key: e.id,
                            mode: l,
                            "data-name": e.id,
                            title: e.title,
                            icon: e.icon,
                            onClick: t._createTabClickHandler(e),
                            isActive: o ? e.id === o.id : void 0,
                          });
                        })
                      );
                    }
                  );
                }
              );
            }),
            (t.prototype._renderApplyToAll = function (e) {
              var t = this.state.isApplyToAllVisible;
              return (
                !e &&
                t &&
                a.createElement(
                  "span",
                  { className: R.applyToAllButton },
                  a.createElement(
                    l.a,
                    { appearance: "stroke", onClick: this._handleApplyToAll },
                    window.t("Apply to all")
                  )
                )
              );
            }),
            (t.prototype._getCurrentPage = function (e) {
              var t = this.props.pages,
                n = this.state.activePage,
                o = null;
              return n ? (o = n) : !e && t.length && (o = t[0]), o;
            }),
            t
          );
        })(a.PureComponent),
        K = n("FQhm"),
        H = n("sQaR");
      n.d(t, "GeneralChartPropertiesDialogRenderer", function () {
        return G;
      });
      var Q = window.t("Chart settings"),
        G = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (
              (n._handleClose = function () {
                i.unmountComponentAtNode(n._container),
                  n._setVisibility(!1),
                  n._onClose && n._onClose();
              }),
              (n._handleSubmit = function () {}),
              (n._handleCancel = function () {
                n._model.undoToCheckpoint(n._checkpoint);
              }),
              (n._propertyPages = t.propertyPages),
              (n._model = t.model),
              (n._activePageId = t.activePageId),
              (n._onClose = t.onClose),
              (n._chartWidgetCollection = t.chartWidgetCollection),
              (n._checkpoint = n._ensureCheckpoint(t.undoCheckPoint)),
              n
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.hide = function (e) {
              e ? this._handleCancel() : this._handleSubmit(),
                this._handleClose();
            }),
            (t.prototype.isVisible = function () {
              return this.visible().value();
            }),
            (t.prototype.focusOnText = function () {}),
            (t.prototype.show = function () {
              i.render(
                a.createElement(q, {
                  title: Q,
                  isOpened: !0,
                  onSubmit: this._handleSubmit,
                  onClose: this._handleClose,
                  onCancel: this._handleCancel,
                  pages: this._propertyPages,
                  model: this._model,
                  activePageId: this._activePageId,
                  chartWidgetCollection: this._chartWidgetCollection,
                }),
                this._container
              ),
                this._setVisibility(!0),
                K.emit("edit_object_dialog", {
                  objectType: "mainSeries",
                  scriptTitle: this._model.mainSeries().title(),
                });
            }),
            (t.prototype._ensureCheckpoint = function (e) {
              return (
                void 0 === e && (e = this._model.createUndoCheckpoint()), e
              );
            }),
            t
          );
        })(H.a);
    },
    U0JK: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentcolor" stroke-width="1.2" d="M17 21l-7.5-7.5L17 6"/></svg>';
    },
    sXZi: function (e, t, n) {
      e.exports = {
        "tablet-normal-breakpoint": "screen and (max-width: 768px)",
        "tablet-small-breakpoint": "screen and (max-width: 419px)",
        withSidebar: "withSidebar-1v16TX_2",
        content: "content-1KOxICHZ",
        tabContent: "tabContent-uYpWHhq0",
        backButton: "backButton-1BRkbiCz",
        applyToAllButton: "applyToAllButton-1mQDSNsO",
      };
    },
    utEQ: function (e, t, n) {
      e.exports = {
        themesButtonText: "themesButtonText-2QMmFP4s",
        themesButtonIcon: "themesButtonIcon-7BX3V6du",
        defaultsButtonText: "defaultsButtonText-ezA5ZCBQ",
        defaultsButtonItem: "defaultsButtonItem-3eSfgMfv",
      };
    },
  },
]);
