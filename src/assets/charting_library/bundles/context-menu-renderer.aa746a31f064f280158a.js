(window.webpackJsonp = window.webpackJsonp || []).push([
  ["context-menu-renderer"],
  {
    "/KDZ": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var o = n("mrSG"),
        r = n("q1tI"),
        i = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._handleChange = function () {
                n.forceUpdate();
              }),
              (n.state = { query: window.matchMedia(n.props.rule) }),
              n
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.componentDidMount = function () {
              this._subscribe(this.state.query);
            }),
            (t.prototype.componentDidUpdate = function (e, t) {
              this.state.query !== t.query &&
                (this._unsubscribe(t.query), this._subscribe(this.state.query));
            }),
            (t.prototype.componentWillUnmount = function () {
              this._unsubscribe(this.state.query);
            }),
            (t.prototype.render = function () {
              return this.props.children(this.state.query.matches);
            }),
            (t.getDerivedStateFromProps = function (e, t) {
              return e.rule !== t.query.media
                ? { query: window.matchMedia(e.rule) }
                : null;
            }),
            (t.prototype._subscribe = function (e) {
              e.addListener(this._handleChange);
            }),
            (t.prototype._unsubscribe = function (e) {
              e.removeListener(this._handleChange);
            }),
            t
          );
        })(r.PureComponent);
    },
    "0sCh": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var o = n("q1tI"),
        r = function () {
          var e = Object(o.useRef)(!1);
          return (
            Object(o.useEffect)(function () {
              return (
                (e.current = !0),
                function () {
                  e.current = !1;
                }
              );
            }, []),
            e
          );
        };
    },
    "20PO": function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" fillRule="evenodd" clip-rule="evenodd" d="M9.7 9l4.65-4.65-.7-.7L9 8.29 4.35 3.65l-.7.7L8.29 9l-4.64 4.65.7.7L9 9.71l4.65 4.64.7-.7L9.71 9z"/></svg>';
    },
    "38fQ": function (e, t, n) {
      e.exports = { separator: "separator-3SZSQm0_" };
    },
    "6KyJ": function (e, t, n) {
      "use strict";
      var o,
        r = n("q1tI"),
        i = n("TSYQ"),
        a = n("K9GE"),
        s = n("YZ9j");
      n("O7m7");
      !(function (e) {
        (e[(e.Initial = 0)] = "Initial"),
          (e[(e.Appear = 1)] = "Appear"),
          (e[(e.Active = 2)] = "Active");
      })(o || (o = {}));
      class c extends r.PureComponent {
        constructor(e) {
          super(e),
            (this._stateChangeTimeout = null),
            (this.state = { state: o.Initial });
        }
        render() {
          const { className: e, color: t = "black" } = this.props,
            n = i(s.item, { [s[t]]: Boolean(t) });
          return r.createElement(
            "span",
            { className: i(s.loader, e, this._getStateClass()) },
            r.createElement("span", { className: n }),
            r.createElement("span", { className: n }),
            r.createElement("span", { className: n })
          );
        }
        componentDidMount() {
          this.setState({ state: o.Appear }),
            (this._stateChangeTimeout = setTimeout(() => {
              this.setState({ state: o.Active });
            }, 2 * a.c));
        }
        componentWillUnmount() {
          this._stateChangeTimeout &&
            (clearTimeout(this._stateChangeTimeout),
            (this._stateChangeTimeout = null));
        }
        _getStateClass() {
          switch (this.state.state) {
            case o.Initial:
              return s["loader-initial"];
            case o.Appear:
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
    Gpmm: function (e, t, n) {
      e.exports = {
        row: "row-1Gn06tA2",
        line: "line-c_e_alAN",
        hint: "hint-18i4fysm",
      };
    },
    Iivm: function (e, t, n) {
      "use strict";
      var o = n("mrSG"),
        r = n("q1tI");
      const i = r.forwardRef((e, t) => {
        const { icon: n = "" } = e,
          i = Object(o.e)(e, ["icon"]);
        return r.createElement(
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
    "J+f8": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var o = n("q1tI"),
        r = o.createContext(!1);
    },
    O7m7: function (e, t, n) {},
    R5JZ: function (e, t, n) {
      "use strict";
      function o(e, t, n, o, r) {
        function i(r) {
          if (!(e > r.timeStamp)) {
            var i = r.target;
            void 0 !== n &&
              null !== t &&
              null !== i &&
              i.ownerDocument === o &&
              (t.contains(i) || n(r));
          }
        }
        return (
          r.click && o.addEventListener("click", i, !1),
          r.mouseDown && o.addEventListener("mousedown", i, !1),
          r.touchEnd && o.addEventListener("touchend", i, !1),
          r.touchStart && o.addEventListener("touchstart", i, !1),
          function () {
            o.removeEventListener("click", i, !1),
              o.removeEventListener("mousedown", i, !1),
              o.removeEventListener("touchend", i, !1),
              o.removeEventListener("touchstart", i, !1);
          }
        );
      }
      n.d(t, "a", function () {
        return o;
      });
    },
    RgaO: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var o = n("mrSG"),
        r = n("8Rai");
      function i(e) {
        var t = e.children,
          n = Object(o.e)(e, ["children"]);
        return t(Object(r.a)(n));
      }
    },
    Sn4D: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return m;
      });
      var o = n("q1tI"),
        r = n.n(o),
        i = n("Eyy1"),
        a = n("TSYQ"),
        s = n("x0D+"),
        c = n("Nkvk"),
        u = n("AiMB"),
        l = n("mkWe"),
        d = n("qFKp"),
        p = n("X0gx"),
        h = n("sHQ4");
      function m(e) {
        var t = e.position,
          n = e.onClose,
          m = e.children,
          f = e.className,
          v = e.theme,
          b = void 0 === v ? h : v,
          w = Object(i.ensureNotNull)(Object(o.useContext)(l.a)),
          _ = Object(o.useState)(0),
          y = _[0],
          E = _[1],
          S = Object(o.useRef)(null),
          g = Object(o.useContext)(p.a);
        return (
          Object(o.useEffect)(function () {
            var e;
            return (
              null === (e = S.current) ||
                void 0 === e ||
                e.focus({ preventScroll: !0 }),
              g.subscribe(w, n),
              Object(c.setFixedBodyState)(!0),
              d.CheckMobile.iOS() &&
                Object(s.disableBodyScroll)(Object(i.ensureNotNull)(S.current)),
              E(w.addDrawer()),
              function () {
                g.unsubscribe(w, n);
                var e = w.removeDrawer();
                d.CheckMobile.iOS() &&
                  Object(s.enableBodyScroll)(
                    Object(i.ensureNotNull)(S.current)
                  ),
                  0 === e && Object(c.setFixedBodyState)(!1);
              }
            );
          }, []),
          r.a.createElement(
            u.a,
            null,
            r.a.createElement(
              "div",
              { className: a(h.wrap, h["position" + t]) },
              y === w.currentDrawer &&
                r.a.createElement("div", { className: h.backdrop, onClick: n }),
              r.a.createElement(
                "div",
                {
                  className: a(h.drawer, b.drawer, h["position" + t], f),
                  ref: function (e) {
                    S.current = e;
                  },
                  tabIndex: -1,
                  onScroll: function (e) {
                    e.stopPropagation();
                  },
                },
                m
              )
            )
          )
        );
      }
    },
    To8B: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>';
    },
    X64X: function (e, t, n) {
      e.exports = {
        loaderWrap: "loaderWrap-18NjkayD",
        loader: "loader-Cgjcl0qz",
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
    cbq4: function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n("mrSG"),
        r = n("q1tI"),
        i = n.n(r),
        a = n("i8i4"),
        s = n("DTHj"),
        c = n("RgaO"),
        u = n("ycI/"),
        l = n("TSYQ"),
        d = n("zRdu"),
        p = n("Gpmm");
      function h(e) {
        return r.createElement(
          "tr",
          { className: p.row },
          r.createElement(
            "td",
            null,
            r.createElement("div", { className: p.line })
          ),
          r.createElement(
            "td",
            null,
            r.createElement("div", { className: p.line }),
            e.hint
              ? r.createElement("div", { className: p.hint }, e.hint)
              : null
          )
        );
      }
      var m = n("ycgn"),
        f = n("euMy"),
        v = n("hn2c");
      n("EsMY");
      function b(e) {
        var t = e.sourceCapabilities,
          n = t && t.firesTouchEvents;
        return void 0 === n && (n = Modernizr.touch), n;
      }
      var w = n("L/Ed"),
        _ = n("i/MG"),
        y = n("qFKp"),
        E = n("w+Rv"),
        S = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._handleMouseOver = function (e) {
                b(e.nativeEvent) ||
                  (t.props.onMouseOver && t.props.onMouseOver());
              }),
              (t._handleClickToolbox = function (e) {
                e.stopPropagation(),
                  t.props.onClickToolbox && t.props.onClickToolbox();
              }),
              t
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.hasSubItems,
                n = e.shortcutHint,
                o = e.hint;
              return r.createElement(
                r.Fragment,
                null,
                r.createElement(
                  "tr",
                  {
                    className: l(
                      m.item,
                      !this.props.noInteractive && m.interactive,
                      this.props.hovered && m.hovered,
                      this.props.disabled && m.disabled,
                      this.props.active && m.active
                    ),
                    onClick: this.props.onClick,
                    onMouseOver: this._handleMouseOver,
                    ref: this.props.reference,
                    "data-action-name": this.props.actionName,
                  },
                  r.createElement(
                    "td",
                    { className: l(m.iconCell), "data-icon-cell": !0 },
                    this._icon()
                  ),
                  r.createElement(
                    "td",
                    null,
                    r.createElement(
                      "div",
                      { className: m.content },
                      r.createElement(
                        "span",
                        {
                          className: l(
                            m.label,
                            this.props.checked && m.checked
                          ),
                          "data-label": !0,
                        },
                        this.props.label
                      ),
                      this._toolbox(),
                      t &&
                        r.createElement("span", {
                          className: m.arrowIcon,
                          dangerouslySetInnerHTML: { __html: v },
                          "data-submenu-arrow": !0,
                        }),
                      !t &&
                        n &&
                        !y.CheckMobile.any() &&
                        r.createElement(E.a, { text: n }),
                      !t && !n && o && r.createElement(E.a, { text: o })
                    )
                  )
                ),
                r.createElement(
                  "tr",
                  { className: m.subMenu },
                  r.createElement("td", null, this.props.children)
                )
              );
            }),
            (t.prototype._icon = function () {
              if (this.props.checkable) {
                if (this.props.checked) {
                  var e = !this.props.icon && !this.props.iconChecked,
                    t = this.props.iconChecked || this.props.icon || f;
                  return r.createElement("span", {
                    className: l(m.icon, e && m.checkmark),
                    dangerouslySetInnerHTML: { __html: t },
                    "data-icon-checkmark": e,
                  });
                }
                return this.props.icon
                  ? r.createElement("span", {
                      className: m.icon,
                      dangerouslySetInnerHTML: { __html: this.props.icon },
                    })
                  : r.createElement("span", { className: m.icon });
              }
              return this.props.icon
                ? r.createElement("span", {
                    className: m.icon,
                    dangerouslySetInnerHTML: { __html: this.props.icon },
                  })
                : null;
            }),
            (t.prototype._toolbox = function () {
              return this.props.toolbox
                ? r.createElement(
                    "span",
                    {
                      className: l(
                        m.toolbox,
                        this.props.showToolboxOnHover && m.showToolboxOnHover
                      ),
                      onClick: this._handleClickToolbox,
                      "data-toolbox": !0,
                    },
                    this._renderToolboxContent()
                  )
                : null;
            }),
            (t.prototype._renderToolboxContent = function () {
              if (this.props.toolbox)
                switch (this.props.toolbox.type) {
                  case w.ToolboxType.Delete:
                    return r.createElement(_.a, {
                      onClick: this.props.toolbox.action,
                    });
                }
              return null;
            }),
            t
          );
        })(r.PureComponent),
        g = n("tWVy"),
        O = n("JWMC"),
        C = n("Ialn");
      var k = n("dxYz"),
        x = n("Eyy1"),
        M = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._itemRef = null),
              (n._menuElementRef = r.createRef()),
              (n._menuRef = null),
              (n._handleClick = function (e) {
                e.isDefaultPrevented() ||
                  n.state.disabled ||
                  (n._hasSubItems()
                    ? n._showSubMenu()
                    : (n.state.doNotCloseOnClick || Object(g.b)(),
                      n.props.action.execute(),
                      n._trackEvent()));
              }),
              (n._handleClickToolbox = function () {
                Object(g.b)();
              }),
              (n._handleItemMouseOver = function () {
                n._showSubMenu(), n._setCurrentContextValue();
              }),
              (n._handleMenuMouseOver = function () {
                n._setCurrentContextValue();
              }),
              (n._showSubMenu = function () {
                n.props.onShowSubMenu(n.props.action);
              }),
              (n._calcSubMenuPos = function (e) {
                return (function (e, t, n) {
                  if ((void 0 === n && (n = { x: 0, y: 10 }), t)) {
                    var o = t.getBoundingClientRect(),
                      r = o.left,
                      i = o.right,
                      a = o.top,
                      s = document.documentElement.clientWidth,
                      c = { x: r - e, y: a },
                      u = { x: i, y: a };
                    return Object(C.isRtl)()
                      ? r <= e
                        ? u
                        : c
                      : s - i >= e
                      ? u
                      : c;
                  }
                  return n;
                })(e, n._itemRef);
              }),
              (n._updateState = function (e) {
                n.setState(e.getState());
              }),
              (n._setItemRef = function (e) {
                n._itemRef = e;
              }),
              (n._handleMenuRef = function (e) {
                n._menuRef = e;
              }),
              (n.state = Object(o.a)({}, n.props.action.getState())),
              n
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.componentDidMount = function () {
              var e,
                t = this;
              this.props.action.onUpdate().subscribe(this, this._updateState),
                this.state.subItems.length &&
                  (this._unsubscribe =
                    null === (e = this.context) || void 0 === e
                      ? void 0
                      : e.registerSubmenu(this.props.action.id, function (e) {
                          return (
                            Object(x.ensureNotNull)(t._itemRef).contains(e) ||
                            (null !== t._menuElementRef.current &&
                              t._menuElementRef.current.contains(e))
                          );
                        }));
            }),
            (t.prototype.componentDidUpdate = function (e, t) {
              t.subItems !== this.state.subItems &&
                null !== this._menuRef &&
                this._menuRef.update();
            }),
            (t.prototype.componentWillUnmount = function () {
              this.props.action.onUpdate().unsubscribe(this, this._updateState),
                this._unsubscribe && this._unsubscribe();
            }),
            (t.prototype.render = function () {
              var e,
                t = (
                  null === (e = this.context) || void 0 === e
                    ? void 0
                    : e.current
                )
                  ? this.context.current === this.props.action.id
                  : this.props.isSubMenuOpened;
              return r.createElement(
                S,
                Object(o.a)(
                  {
                    reference: this._setItemRef,
                    onClick: this._handleClick,
                    onClickToolbox: this._handleClickToolbox,
                    onMouseOver: this._handleItemMouseOver,
                    hovered: t,
                    hasSubItems: this._hasSubItems(),
                    actionName: this.state.name,
                  },
                  this.state
                ),
                r.createElement(V, {
                  isOpened: t,
                  items: this.state.subItems,
                  position: this._calcSubMenuPos,
                  menuStatName: this.props.menuStatName,
                  parentStatName: this._getStatName(),
                  menuElementReference: this._menuElementRef,
                  onMouseOver: this.state.subItems.length
                    ? this._handleMenuMouseOver
                    : void 0,
                  ref: this._handleMenuRef,
                })
              );
            }),
            (t.prototype._setCurrentContextValue = function () {
              var e;
              this.state.subItems.length &&
                (null === (e = this.context) ||
                  void 0 === e ||
                  e.setCurrent(this.props.action.id));
            }),
            (t.prototype._hasSubItems = function () {
              return this.state.subItems.length > 0;
            }),
            (t.prototype._trackEvent = function () {
              var e = this._getStatName();
              Object(O.trackEvent)(
                "ContextMenuClick",
                this.props.menuStatName || "",
                e
              );
            }),
            (t.prototype._getStatName = function () {
              return [this.props.parentStatName, this.state.statName]
                .filter(function (e) {
                  return Boolean(e);
                })
                .join(".");
            }),
            (t.contextType = k.a),
            t
          );
        })(r.PureComponent),
        N = n("6KyJ"),
        I = n("X64X");
      function j(e) {
        return r.createElement(S, {
          label: r.createElement(
            "div",
            { className: I.loaderWrap },
            r.createElement(N.a, { className: I.loader, color: "gray" })
          ),
          noInteractive: !0,
          onMouseOver: e.onMouseOver,
        });
      }
      function D(e) {
        return r.createElement(S, {
          label: e.label,
          noInteractive: !0,
          disabled: !0,
          onMouseOver: e.onMouseOver,
        });
      }
      var T = n("4O8T"),
        R = n.n(T),
        L = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._loadEmitter = new R.a()),
              (n._onDone = function () {
                n.setState({ loaded: !0, failed: !1 }, n._updateMenu);
              }),
              (n._onFail = function (e) {
                n.setState({ failed: !0, error: e }, n._updateMenu);
              }),
              (n._updateMenu = function () {
                n.props.menu && n.props.menu.update();
              }),
              (n._handleMouseOver = function () {
                n.props.onShowSubMenu(n.props.action);
              }),
              (n.state = {
                loaded: n.props.action.isLoaded(),
                failed: !1,
                error: "",
              }),
              n
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.componentDidMount = function () {
              this._loadEmitter.on("done", this._onDone),
                this._loadEmitter.on("fail", this._onFail),
                this._load();
            }),
            (t.prototype.componentWillUnmount = function () {
              this._loadEmitter.removeEvent("done"),
                this._loadEmitter.removeEvent("fail");
            }),
            (t.prototype.render = function () {
              return this.state.failed
                ? r.createElement(D, {
                    label: this.state.error,
                    onMouseOver: this._handleMouseOver,
                  })
                : this.state.loaded
                ? r.createElement(M, Object(o.a)({}, this.props))
                : r.createElement(j, { onMouseOver: this._handleMouseOver });
            }),
            (t.prototype._load = function () {
              var e = this;
              this.props.action
                .loadOptions()
                .then(function () {
                  e._loadEmitter.emit("done");
                })
                .catch(function (t) {
                  e._loadEmitter.emit("fail", t);
                });
            }),
            t
          );
        })(r.PureComponent),
        B = n("PN6A"),
        P = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._handleShowSubMenu = function (e) {
                var t = e.getState();
                n.setState({ showSubMenuOf: t.subItems.length ? e : void 0 });
              }),
              (n.state = {}),
              n
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.render = function () {
              var e = this;
              return r.createElement(
                "table",
                null,
                r.createElement(
                  "tbody",
                  null,
                  this.props.items.map(function (t) {
                    return e._item(t);
                  })
                )
              );
            }),
            (t.getDerivedStateFromProps = function (e, t) {
              return !e.parentIsOpened && t.showSubMenuOf
                ? { showSubMenuOf: void 0 }
                : null;
            }),
            (t.prototype._item = function (e) {
              var t = this;
              switch (e.type) {
                case d.a.Separator:
                  return r.createElement(h, { key: e.id, hint: e.getHint() });
                case d.a.Action:
                  return r.createElement(M, {
                    key: e.id,
                    action: e,
                    onShowSubMenu: this._handleShowSubMenu,
                    isSubMenuOpened: this.state.showSubMenuOf === e,
                    menuStatName: this.props.menuStatName,
                    parentStatName: this.props.parentStatName,
                  });
                case d.a.ActionAsync:
                  return r.createElement(
                    B.a.Consumer,
                    { key: e.id },
                    function (n) {
                      return r.createElement(L, {
                        action: e,
                        onShowSubMenu: t._handleShowSubMenu,
                        isSubMenuOpened: t.state.showSubMenuOf === e,
                        menuStatName: t.props.menuStatName,
                        parentStatName: t.props.parentStatName,
                        menu: n,
                      });
                    }
                  );
                default:
                  return null;
              }
            }),
            t
          );
        })(r.PureComponent),
        q = n("mkWe"),
        A = n("/KDZ"),
        F = n("38fQ");
      function H(e) {
        return i.a.createElement("li", { className: F.separator });
      }
      var W = n("l4ku"),
        X = n("Sn4D");
      function G(e) {
        var t = e.action,
          n = e.isLoading,
          a = Object(r.useState)(t.getState()),
          s = a[0],
          c = a[1],
          u = Object(r.useState)(!1),
          l = u[0],
          d = u[1],
          p = function () {
            return c(t.getState());
          },
          h = !!s.subItems.length,
          m = h && l;
        return (
          Object(r.useEffect)(
            function () {
              n || c(t.getState());
            },
            [n]
          ),
          Object(r.useEffect)(function () {
            return (
              t.onUpdate().subscribe(null, p),
              function () {
                t.onUpdate().unsubscribe(null, p);
              }
            );
          }, []),
          i.a.createElement(
            W.a,
            Object(o.a)({}, s, {
              onClick: function (e) {
                if (s.disabled || e.defaultPrevented) return;
                if (h) return void d(!0);
                s.doNotCloseOnClick || Object(g.b)();
                t.execute();
              },
              isLoading: n,
              isHovered: m,
            }),
            m &&
              i.a.createElement(
                X.a,
                { onClose: f, position: "Bottom" },
                i.a.createElement(J, {
                  items: s.subItems,
                  parentAction: t,
                  closeNested: f,
                })
              )
          )
        );
        function f(e) {
          e && e.preventDefault(), d(!1);
        }
      }
      var Q = n("0sCh");
      function U(e) {
        var t = e.action,
          n = Object(r.useState)(t.isLoaded()),
          o = n[0],
          a = n[1],
          s = Object(r.useState)(!1),
          c = s[0],
          u = s[1],
          l = Object(Q.a)();
        return (
          Object(r.useEffect)(function () {
            t.loadOptions()
              .then(function () {
                l.current && (a(!0), u(!1));
              })
              .catch(function () {
                l.current && u(!0);
              });
          }, []),
          i.a.createElement(G, { isLoading: !o || c, action: t })
        );
      }
      var Y = n("J+f8"),
        K = n("fwrW");
      function J(e) {
        var t = e.items,
          n = e.parentAction,
          o = e.closeNested,
          r =
            !Boolean(n) &&
            t.every(function (e) {
              return !Boolean(
                e.type !== d.a.Separator &&
                  (e.getState().icon || e.getState().checkable)
              );
            });
        return i.a.createElement(
          Y.a.Provider,
          { value: r },
          i.a.createElement(
            "ul",
            null,
            n &&
              i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(W.a, {
                  label: n.getState().label,
                  isTitle: !0,
                  active: !1,
                  disabled: !1,
                  subItems: [],
                  checkable: !1,
                  checked: !1,
                  doNotCloseOnClick: !1,
                  icon: K,
                  onClick: o,
                }),
                i.a.createElement(H, null)
              ),
            t.map(function (e) {
              switch (e.type) {
                case d.a.Action:
                  return i.a.createElement(G, { key: e.id, action: e });
                case d.a.Separator:
                  return i.a.createElement(H, { key: e.id });
                case d.a.ActionAsync:
                  return i.a.createElement(U, { key: e.id, action: e });
                default:
                  return null;
              }
            })
          )
        );
      }
      var z = r.createContext(!1),
        Z = n("t3rk"),
        V = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._menuRef = r.createRef()),
              (n._handleClose = function () {
                n.props.onClose && n.props.onClose();
              }),
              (n._handleOutsideClickClose = function (e) {
                var t = n.props,
                  o = t.doNotCloseOn,
                  r = t.onClose;
                !r || (void 0 !== o && o.contains(e.target)) || r();
              }),
              (n._handleFocusOnOpen = function () {
                var e, t;
                (null === (e = n.props.menuElementReference) || void 0 === e
                  ? void 0
                  : e.current) &&
                  n.props.takeFocus &&
                  (null === (t = n.props.menuElementReference) ||
                    void 0 === t ||
                    t.current.focus({ preventScroll: !0 }));
              }),
              (n.state = {}),
              n
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.isOpened,
                i = (t.onClose, t.items),
                a = (t.doNotCloseOn, t.menuStatName),
                d = t.parentStatName,
                p = t.takeFocus,
                h = Object(o.e)(t, [
                  "isOpened",
                  "onClose",
                  "items",
                  "doNotCloseOn",
                  "menuStatName",
                  "parentStatName",
                  "takeFocus",
                ]);
              return n
                ? r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(u.a, {
                      keyCode: 27,
                      eventType: "keyup",
                      handler: this._handleClose,
                    }),
                    r.createElement(
                      q.b,
                      null,
                      r.createElement(
                        A.a,
                        { rule: "screen and (max-width: 419px)" },
                        function (t) {
                          return e._isDrawer(t)
                            ? r.createElement(
                                X.a,
                                { onClose: e._handleClose, position: "Bottom" },
                                r.createElement(
                                  z.Provider,
                                  { value: t },
                                  r.createElement(J, { items: i })
                                )
                              )
                            : r.createElement(
                                c.a,
                                {
                                  handler: e._handleOutsideClickClose,
                                  mouseDown: !0,
                                  touchStart: !0,
                                  reference: e.props.menuElementReference,
                                },
                                function (t) {
                                  return r.createElement(
                                    s.a,
                                    Object(o.a)({}, h, {
                                      reference: t,
                                      isOpened: e.props.isOpened,
                                      className: l(Z.menu, "context-menu"),
                                      onClose: e._handleClose,
                                      noMomentumBasedScroll: !0,
                                      ref: e._menuRef,
                                      tabIndex: p ? -1 : void 0,
                                      onOpen: e._handleFocusOnOpen,
                                    }),
                                    r.createElement(P, {
                                      items: i,
                                      menuStatName: a,
                                      parentStatName: d,
                                      parentIsOpened: n,
                                    })
                                  );
                                }
                              );
                        }
                      )
                    )
                  )
                : null;
            }),
            (t.prototype.update = function () {
              this._menuRef.current && this._menuRef.current.update();
            }),
            (t.prototype._isDrawer = function (e) {
              return void 0 === this.props.mode
                ? e
                : "drawer" === this.props.mode;
            }),
            t
          );
        })(r.PureComponent);
      n.d(t, "ContextMenuRenderer", function () {
        return $;
      });
      var $ = (function () {
        function e(e, t, n, o) {
          (this._root = null),
            (this._isShown = !1),
            (this._props = {
              isOpened: !1,
              items: e,
              position: { x: 0, y: 0 },
              menuStatName: t.statName,
              mode: t.mode,
            }),
            (this._onDestroy = n),
            (this._onShow = o),
            (this._activeElement = document.activeElement),
            (this._returnFocus = t.returnFocus),
            (this._takeFocus = t.takeFocus),
            (this._menuElementRef = r.createRef());
        }
        return (
          (e.prototype.show = function (e, t, n) {
            var r = this;
            this._onShow && this._onShow(),
              (this._isShown = !0),
              this._render(
                Object(o.a)(Object(o.a)({}, this._props), {
                  position: function (t, o) {
                    return (
                      "function" == typeof e && (e = e(t, o)),
                      e.touches &&
                        e.touches.length > 0 &&
                        (e = {
                          clientX: e.touches[0].clientX,
                          clientY: e.touches[0].clientY,
                        }),
                      {
                        x: !n && Object(C.isRtl)() ? e.clientX - t : e.clientX,
                        y: e.clientY,
                        overrideHeight: e.overrideHeight,
                      }
                    );
                  },
                  isOpened: !0,
                  onClose: function () {
                    r.hide(), r.destroy();
                  },
                  doNotCloseOn: t,
                  takeFocus: this._takeFocus,
                  menuElementReference: this._menuElementRef,
                })
              );
          }),
          (e.prototype.hide = function () {
            (this._isShown = !1),
              this._render(
                Object(o.a)(Object(o.a)({}, this._props), { isOpened: !1 })
              );
          }),
          (e.prototype.isShown = function () {
            return this._isShown;
          }),
          (e.prototype.destroy = function () {
            (this._isShown = !1),
              this._root &&
                (a.unmountComponentAtNode(this._root),
                document.body.removeChild(this._root),
                (this._root = null)),
              this._onDestroy && this._onDestroy(),
              this._returnFocus &&
                this._activeElement instanceof HTMLElement &&
                this._activeElement.focus();
          }),
          (e.prototype._render = function (e) {
            this._root ||
              ((this._root = document.createElement("span")),
              (this._root.className = "context-menu-wrapper"),
              document.body.appendChild(this._root)),
              a.render(r.createElement(V, e), this._root);
          }),
          e
        );
      })();
    },
    euMy: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 14" width="18" height="14"><path fill="currentColor" d="M6 11.17l-4.17-4.17-1.42 1.41 5.59 5.59 12-12-1.41-1.41-10.59 10.58z"/></svg>';
    },
    fwrW: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.5 20L11 14.5 16.5 9"/></svg>';
    },
    hn2c: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16" width="10" height="16"><path d="M.6 1.4l1.4-1.4 8 8-8 8-1.4-1.4 6.389-6.532-6.389-6.668z"/></svg>';
    },
    "i/MG": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var o = n("mrSG"),
        r = (n("YFKU"), n("q1tI")),
        i = n("TSYQ"),
        a = n("Iivm"),
        s = n("To8B"),
        c = n("kXJy"),
        u = { remove: window.t("Remove") };
      function l(e) {
        var t = e.className,
          n = e.isActive,
          l = e.onClick,
          d = e.title,
          p = e.hidden,
          h = e["data-name"],
          m = void 0 === h ? "remove-button" : h,
          f = Object(o.e)(e, [
            "className",
            "isActive",
            "onClick",
            "title",
            "hidden",
            "data-name",
          ]);
        return r.createElement(
          a.a,
          Object(o.a)({}, f, {
            "data-name": m,
            className: i(
              c.button,
              "apply-common-tooltip",
              n && c.active,
              p && c.hidden,
              t
            ),
            icon: s,
            onClick: l,
            title: d || u.remove,
          })
        );
      }
    },
    kXJy: function (e, t, n) {
      e.exports = {
        button: "button-1scLo53s",
        disabled: "disabled-2eJ5fvUz",
        active: "active-2T0ofIIp",
        hidden: "hidden-2GRQzIQ1",
      };
    },
    l4ku: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return m;
      });
      var o = n("q1tI"),
        r = n.n(o),
        i = n("TSYQ"),
        a = n("Iivm"),
        s = n("6KyJ"),
        c = n("J+f8"),
        u = n("w+Rv"),
        l = n("Xy1d"),
        d = n("Xzy5"),
        p = n("20PO"),
        h = n("XXQ5");
      function m(e) {
        var t = e.isTitle,
          n = e.isLoading,
          m = e.isHovered,
          f = e.active,
          v = e.checkable,
          b = e.disabled,
          w = e.checked,
          _ = e.icon,
          y = e.iconChecked,
          E = e.hint,
          S = e.subItems,
          g = e.label,
          O = e.onClick,
          C = e.children,
          k = e.toolbox,
          x = e.fullWidthLabel,
          M = Object(o.useContext)(c.a),
          N = !!S.length;
        return n
          ? r.a.createElement(
              "li",
              { className: i(h.item, h.loading) },
              r.a.createElement(s.a, { color: "gray" })
            )
          : r.a.createElement(
              "li",
              {
                className: i(
                  h.item,
                  h.interactive,
                  t && h.title,
                  b && h.disabled,
                  m && h.hovered,
                  f && h.active,
                  M && h.emptyIcons
                ),
                onClick: O,
              },
              r.a.createElement(a.a, {
                className: i(h.icon),
                icon: (function () {
                  if (v && w) return y || _ || l;
                  return _;
                })(),
              }),
              r.a.createElement(
                "span",
                { className: i(h.label, x && h.fullWidth) },
                g
              ),
              !!k &&
                r.a.createElement(a.a, {
                  onClick: function () {
                    k && k.action();
                  },
                  className: h.remove,
                  icon: p,
                }),
              !N &&
                E &&
                r.a.createElement(u.a, { className: h.shortcut, text: E }),
              N && r.a.createElement(a.a, { className: h.nested, icon: d }),
              C
            );
      }
    },
    mkWe: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "a", function () {
          return s;
        });
      var o = n("mrSG"),
        r = n("q1tI"),
        i = n.n(r),
        a = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._addDrawer = function () {
                var e = n.state.currentDrawer + 1;
                return n.setState({ currentDrawer: e }), e;
              }),
              (n._removeDrawer = function () {
                var e = n.state.currentDrawer - 1;
                return n.setState({ currentDrawer: e }), e;
              }),
              (n.state = { currentDrawer: 0 }),
              n
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.render = function () {
              return i.a.createElement(
                s.Provider,
                {
                  value: {
                    addDrawer: this._addDrawer,
                    removeDrawer: this._removeDrawer,
                    currentDrawer: this.state.currentDrawer,
                  },
                },
                this.props.children
              );
            }),
            t
          );
        })(i.a.PureComponent),
        s = i.a.createContext(null);
    },
    sHQ4: function (e, t, n) {
      e.exports = {
        wrap: "wrap-3vvdSnDX",
        positionBottom: "positionBottom-3zJf6Byh",
        backdrop: "backdrop-1knaw_yl",
        drawer: "drawer-1_nJUEiM",
        positionLeft: "positionLeft-2wxVhi9G",
      };
    },
    t3rk: function (e, t, n) {
      e.exports = { menu: "menu-1y0eDKzl" };
    },
    "w+Rv": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var o = n("q1tI"),
        r = n("TSYQ"),
        i = n.n(r),
        a = n("ycgn");
      function s(e) {
        var t = e.text,
          n = void 0 === t ? "" : t,
          r = e.className;
        return o.createElement("span", { className: i()(a.shortcut, r) }, n);
      }
    },
    "x0D+": function (e, t, n) {
      var o, r, i;
      (r = [t]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function (e) {
              "use strict";
              function t(e) {
                if (Array.isArray(e)) {
                  for (var t = 0, n = Array(e.length); t < e.length; t++)
                    n[t] = e[t];
                  return n;
                }
                return Array.from(e);
              }
              Object.defineProperty(e, "__esModule", { value: !0 });
              var n = !1;
              if ("undefined" != typeof window) {
                var o = {
                  get passive() {
                    n = !0;
                  },
                };
                window.addEventListener("testPassive", null, o),
                  window.removeEventListener("testPassive", null, o);
              }
              var r =
                  "undefined" != typeof window &&
                  window.navigator &&
                  window.navigator.platform &&
                  /iP(ad|hone|od)/.test(window.navigator.platform),
                i = [],
                a = !1,
                s = -1,
                c = void 0,
                u = void 0,
                l = function (e) {
                  return i.some(function (t) {
                    return !(
                      !t.options.allowTouchMove || !t.options.allowTouchMove(e)
                    );
                  });
                },
                d = function (e) {
                  var t = e || window.event;
                  return (
                    !!l(t.target) ||
                    1 < t.touches.length ||
                    (t.preventDefault && t.preventDefault(), !1)
                  );
                },
                p = function () {
                  setTimeout(function () {
                    void 0 !== u &&
                      ((document.body.style.paddingRight = u), (u = void 0)),
                      void 0 !== c &&
                        ((document.body.style.overflow = c), (c = void 0));
                  });
                };
              (e.disableBodyScroll = function (e, o) {
                if (r) {
                  if (!e)
                    return void console.error(
                      "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
                    );
                  if (
                    e &&
                    !i.some(function (t) {
                      return t.targetElement === e;
                    })
                  ) {
                    var p = { targetElement: e, options: o || {} };
                    (i = [].concat(t(i), [p])),
                      (e.ontouchstart = function (e) {
                        1 === e.targetTouches.length &&
                          (s = e.targetTouches[0].clientY);
                      }),
                      (e.ontouchmove = function (t) {
                        var n, o, r, i;
                        1 === t.targetTouches.length &&
                          ((o = e),
                          (i = (n = t).targetTouches[0].clientY - s),
                          !l(n.target) &&
                            ((o && 0 === o.scrollTop && 0 < i) ||
                            ((r = o) &&
                              r.scrollHeight - r.scrollTop <= r.clientHeight &&
                              i < 0)
                              ? d(n)
                              : n.stopPropagation()));
                      }),
                      a ||
                        (document.addEventListener(
                          "touchmove",
                          d,
                          n ? { passive: !1 } : void 0
                        ),
                        (a = !0));
                  }
                } else {
                  (m = o),
                    setTimeout(function () {
                      if (void 0 === u) {
                        var e = !!m && !0 === m.reserveScrollBarGap,
                          t =
                            window.innerWidth -
                            document.documentElement.clientWidth;
                        e &&
                          0 < t &&
                          ((u = document.body.style.paddingRight),
                          (document.body.style.paddingRight = t + "px"));
                      }
                      void 0 === c &&
                        ((c = document.body.style.overflow),
                        (document.body.style.overflow = "hidden"));
                    });
                  var h = { targetElement: e, options: o || {} };
                  i = [].concat(t(i), [h]);
                }
                var m;
              }),
                (e.clearAllBodyScrollLocks = function () {
                  r
                    ? (i.forEach(function (e) {
                        (e.targetElement.ontouchstart = null),
                          (e.targetElement.ontouchmove = null);
                      }),
                      a &&
                        (document.removeEventListener(
                          "touchmove",
                          d,
                          n ? { passive: !1 } : void 0
                        ),
                        (a = !1)),
                      (i = []),
                      (s = -1))
                    : (p(), (i = []));
                }),
                (e.enableBodyScroll = function (e) {
                  if (r) {
                    if (!e)
                      return void console.error(
                        "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
                      );
                    (e.ontouchstart = null),
                      (e.ontouchmove = null),
                      (i = i.filter(function (t) {
                        return t.targetElement !== e;
                      })),
                      a &&
                        0 === i.length &&
                        (document.removeEventListener(
                          "touchmove",
                          d,
                          n ? { passive: !1 } : void 0
                        ),
                        (a = !1));
                  } else
                    1 === i.length && i[0].targetElement === e
                      ? (p(), (i = []))
                      : (i = i.filter(function (t) {
                          return t.targetElement !== e;
                        }));
                });
            })
              ? o.apply(t, r)
              : o) || (e.exports = i);
    },
    "ycI/": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var o = n("mrSG"),
        r = n("q1tI"),
        i = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._handleKeyDown = function (e) {
                e.keyCode === t.props.keyCode && t.props.handler(e);
              }),
              t
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.componentDidMount = function () {
              document.addEventListener(
                this.props.eventType || "keydown",
                this._handleKeyDown,
                !1
              );
            }),
            (t.prototype.componentWillUnmount = function () {
              document.removeEventListener(
                this.props.eventType || "keydown",
                this._handleKeyDown,
                !1
              );
            }),
            (t.prototype.render = function () {
              return null;
            }),
            t
          );
        })(r.PureComponent);
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
  },
]);
