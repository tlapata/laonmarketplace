(window.webpackJsonp = window.webpackJsonp || []).push([
  ["drawing-toolbar"],
  {
    "1TxM": function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return s;
      }),
        n.d(t, "a", function () {
          return c;
        }),
        n.d(t, "b", function () {
          return u;
        });
      var o = n("q1tI"),
        i = n.n(o),
        a = n("17x9"),
        r = n.n(a),
        l = i.a.createContext({});
      function s(e, t) {
        r.a.checkPropTypes(t, e, "context", "RegistryContext");
      }
      function c(e) {
        var t = e.validation,
          n = e.value;
        return s(n, t), i.a.createElement(l.Provider, { value: n }, e.children);
      }
      function u() {
        return l;
      }
    },
    "5f7t": function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n("mrSG"),
        i = n("q1tI"),
        a = n.n(i),
        r = n("i8i4"),
        l = n("Eyy1"),
        s = n("YFKU"),
        c = (n("EsMY"), n("TSYQ")),
        u = n.n(c),
        d = n("Vdly"),
        h = n("Kxc7"),
        p = n("mMWL"),
        m = n("zL3Q"),
        b = n("FQhm"),
        v = n("aIyQ"),
        f = n.n(v),
        g = n("qFKp"),
        w = (n("mNbo"), n("MP+M")),
        _ = (function () {
          function e(e) {
            this._drawingsAccess = e || { tools: [], type: "black" };
          }
          return (
            (e.prototype.isToolEnabled = function (e) {
              var t = this._findTool(e);
              return (
                !(!t || !t.grayed) ||
                ("black" === this._drawingsAccess.type ? !t : !!t)
              );
            }),
            (e.prototype.isToolGrayed = function (e) {
              var t = this._findTool(e);
              return Boolean(t && t.grayed);
            }),
            (e.prototype._findTool = function (e) {
              return this._drawingsAccess.tools.find(function (t) {
                return t.name === e;
              });
            }),
            e
          );
        })(),
        T = n("/3z9"),
        y = n("+GxX"),
        C = [
          {
            id: "linetool-group-cursors",
            title: window.t("Cursors"),
            items: [
              { name: "cursor" },
              { name: "dot" },
              { name: "arrow" },
              { name: "eraser" },
            ],
          },
          {
            id: "linetool-group-trend-line",
            title: window.t("Trend Line Tools"),
            items: [
              { name: "LineToolTrendLine", hotkeyHash: T.Modifiers.Alt + 84 },
              { name: "LineToolInfoLine" },
              { name: "LineToolTrendAngle" },
              null,
              { name: "LineToolHorzLine", hotkeyHash: T.Modifiers.Alt + 72 },
              { name: "LineToolHorzRay" },
              { name: "LineToolVertLine", hotkeyHash: T.Modifiers.Alt + 86 },
              { name: "LineToolCrossLine", hotkeyHash: T.Modifiers.Alt + 67 },
              { name: "LineToolArrow" },
              { name: "LineToolRay" },
              { name: "LineToolExtended" },
              { name: "LineToolParallelChannel" },
              { name: "LineToolDisjointAngle" },
              { name: "LineToolFlatBottom" },
              null,
            ].filter(Boolean),
          },
          {
            id: "linetool-group-gann-and-fibonacci",
            title: window.t("Gann and Fibonacci Tools"),
            items: [
              { name: "LineToolPitchfork" },
              { name: "LineToolSchiffPitchfork2" },
              { name: "LineToolSchiffPitchfork" },
              { name: "LineToolInsidePitchfork" },
              { name: "LineToolPitchfan" },
              { name: "LineToolGannSquare" },
              { name: "LineToolGannComplex" },
              { name: "LineToolGannFixed" },
              { name: "LineToolGannFan" },
              {
                name: "LineToolFibRetracement",
                hotkeyHash: T.Modifiers.Alt + 70,
              },
              { name: "LineToolTrendBasedFibExtension" },
              { name: "LineToolFibSpeedResistanceFan" },
              { name: "LineToolFibTimeZone" },
              { name: "LineToolTrendBasedFibTime" },
              { name: "LineToolFibCircles" },
              { name: "LineToolFibSpiral" },
              { name: "LineToolFibSpeedResistanceArcs" },
              { name: "LineToolFibWedge" },
              { name: "LineToolFibChannel" },
            ],
          },
          {
            id: "linetool-group-geometric-shapes",
            title: window.t("Geometric Shapes"),
            items: [
              { name: "LineToolBrush" },
              { name: "LineToolHighlighter" },
              { name: "LineToolPath" },
              { name: "LineToolRectangle" },
              { name: "LineToolRotatedRectangle" },
              { name: "LineToolEllipse" },
              { name: "LineToolTriangle" },
              { name: "LineToolPolyline" },
              { name: "LineToolBezierQuadro" },
              { name: "LineToolBezierCubic" },
              { name: "LineToolArc" },
            ],
          },
          {
            id: "linetool-group-annotation",
            title: window.t("Annotation Tools"),
            items: [
              { name: "LineToolText" },
              {
                name: "LineToolTextAbsolute",
              },
              { name: "LineToolNote" },
              { name: "LineToolNoteAbsolute" },
              { name: "LineToolSignpost" },
              { name: "LineToolCallout" },
              { name: "LineToolBalloon" },
              { name: "LineToolPriceLabel" },
              { name: "LineToolPriceNote" },
              { name: "LineToolArrowMarker" },
              { name: "LineToolArrowMarkLeft" },
              { name: "LineToolArrowMarkRight" },
              { name: "LineToolArrowMarkUp" },
              { name: "LineToolArrowMarkDown" },
              { name: "LineToolFlagMark" },
            ].filter(Boolean),
          },
          {
            id: "linetool-group-patterns",
            title: window.t("Patterns"),
            items: [
              { name: "LineTool5PointsPattern" },
              { name: "LineToolCypherPattern" },
              { name: "LineToolABCD" },
              { name: "LineToolTrianglePattern" },
              { name: "LineToolThreeDrivers" },
              { name: "LineToolHeadAndShoulders" },
              { name: "LineToolElliottImpulse" },
              { name: "LineToolElliottTriangle" },
              { name: "LineToolElliottTripleCombo" },
              { name: "LineToolElliottCorrection" },
              { name: "LineToolElliottDoubleCombo" },
              { name: "LineToolCircleLines" },
              { name: "LineToolTimeCycles" },
              { name: "LineToolSineLine" },
            ],
          },
          {
            id: "linetool-group-prediction-and-measurement",
            title: window.t("Prediction and Measurement Tools"),
            items: [
              { name: "LineToolRiskRewardLong" },
              { name: "LineToolRiskRewardShort" },
              { name: "LineToolPrediction" },
              { name: "LineToolDateRange" },
              { name: "LineToolPriceRange" },
              { name: "LineToolDateAndPriceRange" },
              { name: "LineToolBarsPattern" },
              Object(y.isFeatureEnabled)("remove-line-tool-ghost-feed")
                ? null
                : { name: "LineToolGhostFeed" },
              { name: "LineToolProjection" },
              null,
            ].filter(Boolean),
          },
        ],
        k = n("OiSa"),
        S = n("cvc5"),
        O = n("Iivm"),
        E = n("//lZ"),
        D = n("9uLv"),
        L = n("uJ8n"),
        M = n("Vike"),
        A = { isVisibleScrollbar: !0 },
        j = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._scroll = null),
              (n._handleScrollTop = function () {
                n.animateTo(
                  Math.max(0, n.currentPosition() - (n.state.heightWrap - 50))
                );
              }),
              (n._handleScrollBot = function () {
                n.animateTo(
                  Math.min(
                    (n.state.heightContent || 0) - (n.state.heightWrap || 0),
                    n.currentPosition() + (n.state.heightWrap - 50)
                  )
                );
              }),
              (n._handleResizeWrap = function (e) {
                var t = e.height;
                n.setState({ heightWrap: t });
              }),
              (n._handleResizeContent = function (e) {
                var t = e.height;
                n.setState({ heightContent: t });
              }),
              (n._handleScroll = function () {
                var e = n.props.onScroll;
                e && e(n.currentPosition(), n.isAtTop(), n.isAtBot()),
                  n._checkButtonsVisibility();
              }),
              (n._checkButtonsVisibility = function () {
                var e = n.state,
                  t = e.isVisibleTopButton,
                  o = e.isVisibleBotButton,
                  i = n.isAtTop(),
                  a = n.isAtBot();
                i || t
                  ? i && t && n.setState({ isVisibleTopButton: !1 })
                  : n.setState({ isVisibleTopButton: !0 }),
                  a || o
                    ? a && o && n.setState({ isVisibleBotButton: !1 })
                    : n.setState({ isVisibleBotButton: !0 });
              }),
              (n.state = {
                heightContent: 0,
                heightWrap: 0,
                isVisibleBotButton: !1,
                isVisibleTopButton: !1,
              }),
              n
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.componentDidMount = function () {
              this._checkButtonsVisibility();
            }),
            (t.prototype.componentDidUpdate = function (e, t) {
              (t.heightWrap === this.state.heightWrap &&
                t.heightContent === this.state.heightContent) ||
                this._handleScroll();
            }),
            (t.prototype.currentPosition = function () {
              return this._scroll ? this._scroll.scrollTop : 0;
            }),
            (t.prototype.isAtTop = function () {
              return this.currentPosition() <= 1;
            }),
            (t.prototype.isAtBot = function () {
              return (
                this.currentPosition() + this.state.heightWrap >=
                this.state.heightContent - 1
              );
            }),
            (t.prototype.animateTo = function (e, t) {
              void 0 === t && (t = D.dur);
              var n = this._scroll;
              n &&
                Object(E.doAnimate)({
                  onStep: function (e, t) {
                    n.scrollTop = t;
                  },
                  from: n.scrollTop,
                  to: Math.round(e),
                  easing: D.easingFunc.easeInOutCubic,
                  duration: t,
                });
            }),
            (t.prototype.render = function () {
              var e,
                t,
                n,
                o,
                i,
                r = this,
                l = this.props,
                s = l.children,
                c = l.isVisibleScrollbar,
                d = l.isVisibleFade,
                h = l.isVisibleButtons,
                p = l.onMouseOver,
                m = l.onMouseOut,
                b = this.state,
                v = b.heightContent,
                f = b.heightWrap,
                g = b.isVisibleBotButton,
                w = b.isVisibleTopButton;
              return a.a.createElement(
                S,
                { whitelist: ["height"], onMeasure: this._handleResizeWrap },
                a.a.createElement(
                  "div",
                  { className: L.wrap, onMouseOver: p, onMouseOut: m },
                  a.a.createElement(
                    "div",
                    {
                      className: u()(
                        L.scrollWrap,
                        ((e = {}), (e[L.noScrollBar] = !c), e)
                      ),
                      onScroll: this._handleScroll,
                      ref: function (e) {
                        return (r._scroll = e);
                      },
                    },
                    a.a.createElement(
                      S,
                      {
                        onMeasure: this._handleResizeContent,
                        whitelist: ["height"],
                      },
                      a.a.createElement("div", { className: L.content }, s)
                    )
                  ),
                  d &&
                    a.a.createElement("div", {
                      className: u()(
                        L.fadeTop,
                        ((t = {}), (t[L.isVisible] = w && v > f), t)
                      ),
                    }),
                  d &&
                    a.a.createElement("div", {
                      className: u()(
                        L.fadeBot,
                        ((n = {}), (n[L.isVisible] = g && v > f), n)
                      ),
                    }),
                  h &&
                    a.a.createElement(
                      "div",
                      {
                        className: u()(
                          L.scrollTop,
                          ((o = {}), (o[L.isVisible] = w && v > f), o)
                        ),
                        onClick: this._handleScrollTop,
                      },
                      a.a.createElement(
                        "div",
                        { className: L.iconWrap },
                        a.a.createElement(O.a, { icon: M, className: L.icon })
                      )
                    ),
                  h &&
                    a.a.createElement(
                      "div",
                      {
                        className: u()(
                          L.scrollBot,
                          ((i = {}), (i[L.isVisible] = g && v > f), i)
                        ),
                        onClick: this._handleScrollBot,
                      },
                      a.a.createElement(
                        "div",
                        { className: L.iconWrap },
                        a.a.createElement(O.a, { icon: M, className: L.icon })
                      )
                    )
                )
              );
            }),
            (t.defaultProps = A),
            t
          );
        })(a.a.PureComponent),
        N = n("lxNp"),
        B = n("tWVy"),
        P = n("QpNh"),
        W = n("gb5g");
      function V(e) {
        var t,
          n = e.id,
          a = e.activeClass,
          r = e.children,
          l = e.className,
          s = e.icon,
          u = e.isActive,
          d = e.isGrayed,
          h = e.isHidden,
          p = e.isTransparent,
          m = e.theme,
          b = void 0 === m ? W : m,
          v = e.onClick,
          f = e.title,
          g = e.buttonHotKey;
        return i.createElement(
          "div",
          Object(o.a)(
            {
              id: n,
              className: c(
                b.button,
                l,
                u && a,
                ((t = {}),
                (t["apply-common-tooltip common-tooltip-vertical"] =
                  Boolean(f)),
                (t[b.isActive] = u),
                (t[b.isGrayed] = d),
                (t[b.isHidden] = h),
                (t[b.isTransparent] = p),
                t)
              ),
              onClick: v,
              title: f,
              "data-role": "button",
              "data-tooltip-hotkey": g,
            },
            Object(P.a)(e)
          ),
          i.createElement(
            "div",
            { className: b.bg },
            s &&
              ("string" == typeof s
                ? i.createElement(O.a, { className: b.icon, icon: s })
                : i.createElement("span", { className: b.icon }, s)),
            r
          )
        );
      }
      function x(e) {
        var t = e.id,
          n = e.action,
          o = e.isActive,
          a = e.isHidden,
          r = e.isTransparent,
          l = e.toolName;
        return i.createElement(V, {
          id: t,
          icon: w.a[l].icon,
          isActive: o,
          isHidden: a,
          isTransparent: r,
          onClick: n,
          title: w.a[l].localizedName,
          "data-name": l,
        });
      }
      var F = n("wZIs"),
        I = [
          61536, 61537, 61538, 61539, 61725, 61726, 61575, 61576, 61796, 61797,
          61779, 61780, 61781, 61782, 61783, 61784, 61785, 61786, 61440, 61441,
          61442, 61444, 61445, 61446, 61447, 61448, 61452, 61453, 61454, 61456,
          61457, 61458, 61459, 61460, 61461, 61463, 61464, 61466, 61467, 61469,
          61470, 61473, 61475, 61476, 61488, 61502, 61504, 61505, 61507, 61510,
          61523, 61524, 61525, 61526, 61527, 61528, 61529, 61530, 61531, 61532,
          61533, 61534, 61540, 61541, 61542, 61543, 61544, 61545, 61546, 61547,
          61548, 61550, 61552, 61553, 61554, 61555, 61557, 61558, 61559, 61560,
          61565, 61566, 61568, 61572, 61574, 61578, 61588, 61597, 61601, 61602,
          61603, 61604, 61605, 61606, 61607, 61608, 61609, 61610, 61611, 61616,
          61617, 61635, 61648, 61649, 61654, 61655, 61656, 61657, 61658, 61659,
          61666, 61667, 61669, 61670, 61671, 61672, 61673, 61675, 61681, 61682,
          61683, 61684, 61696, 61697, 61698, 61699, 61700, 61701, 61702, 61703,
          61704, 61705, 61706, 61707, 61712, 61713, 61714, 61715, 61720, 61721,
          61722, 61731, 61732, 61736, 61737, 61738, 61746, 61747, 61748, 61749,
          61751, 61752, 61753, 61754, 61757, 61758, 61760, 61764, 61768, 61769,
          61770, 61771, 61772, 61773, 61774, 61776, 61777, 61778, 61799, 61811,
          61812, 61813, 61814, 61815, 61816, 61817, 61818, 61819, 61820, 61821,
          61826, 61827, 61828, 61829, 61830, 61831, 61832, 61836, 61838, 61840,
          61842, 61845,
        ],
        R = n("9dlw"),
        H = n("Sn4D"),
        z = n("hn2c"),
        G = n("KmEK"),
        U = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._toggleDropdown = function (e) {
                n.setState({ isOpened: void 0 !== e ? e : !n.state.isOpened });
              }),
              (n._handleClose = function () {
                n._toggleDropdown(!1);
              }),
              (n._getDropdownPosition = function () {
                if (!n._control) return { x: 0, y: 0 };
                var e = n._control.getBoundingClientRect();
                return { x: e.left + e.width + 1, y: e.top - 6 };
              }),
              (n._handleClickArrow = function () {
                n._toggleDropdown();
              }),
              (n._handleTouchStart = function () {
                n.props.onClickButton(), n._toggleDropdown();
              }),
              (n._handlePressStart = function () {
                if (Modernizr.mobiletouch && !n.props.checkable)
                  n._longPressDelay || n.props.onClickButton();
                else {
                  if (n._doubleClickDelay)
                    return (
                      clearTimeout(n._doubleClickDelay),
                      delete n._doubleClickDelay,
                      void n._toggleDropdown(!0)
                    );
                  n._doubleClickDelay = setTimeout(function () {
                    delete n._doubleClickDelay,
                      n._longPressDelay || n.props.onClickButton();
                  }, 175);
                }
                n._longPressDelay = setTimeout(function () {
                  delete n._longPressDelay, n._toggleDropdown(!0);
                }, 300);
              }),
              (n._cancelAllTimeouts = function () {
                clearTimeout(n._longPressDelay),
                  delete n._longPressDelay,
                  clearTimeout(n._doubleClickDelay),
                  delete n._doubleClickDelay;
              }),
              (n._handleTouchPressEnd = function (e) {
                e.cancelable && e.preventDefault(), n._handlePressEnd();
              }),
              (n._handlePressEnd = function () {
                n._longPressDelay &&
                  (clearTimeout(n._longPressDelay),
                  delete n._longPressDelay,
                  n.state.isOpened
                    ? n._toggleDropdown(!1)
                    : n.props.checkable ||
                      n.state.isOpened ||
                      !n.props.isActive ||
                      Modernizr.mobiletouch
                    ? n._doubleClickDelay || n.props.onClickButton()
                    : n._toggleDropdown(!0));
              }),
              (n.state = { isOpened: !1 }),
              n
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.render = function () {
              var e,
                t = this,
                n = this.props,
                a = n.buttonActiveClass,
                r = n.buttonClass,
                l = n.buttonIcon,
                s = n.buttonTitle,
                u = n.buttonHotKey,
                d = n.dropdownTooltip,
                h = n.children,
                p = n.isActive,
                m = n.isGrayed,
                b = n.onClickWhenGrayed,
                v = n.checkable,
                f = n.isSmallTablet,
                g = this.state.isOpened,
                w = Object(P.a)(this.props);
              return i.createElement(
                "div",
                {
                  className: c(
                    G.dropdown,
                    ((e = {}),
                    (e[G.isGrayed] = m),
                    (e[G.isActive] = p),
                    (e[G.isOpened] = g),
                    e)
                  ),
                  onClick: m ? b : void 0,
                },
                i.createElement(
                  "div",
                  Object(o.a)({}, w, {
                    ref: function (e) {
                      return (t._control = e);
                    },
                    className: G.control,
                  }),
                  i.createElement(
                    "div",
                    Object(o.a)({}, this._getButtonHandlers(), {
                      className: c(G.buttonWrap, {
                        "apply-common-tooltip common-tooltip-vertical": Boolean(
                          s || u
                        ),
                      }),
                      "data-tooltip-hotkey": u,
                      "data-tooltip-delay": 1500,
                      "data-role": "button",
                      title: s,
                    }),
                    i.createElement(V, {
                      activeClass: a,
                      className: r,
                      icon: l,
                      isActive: p,
                      isGrayed: m,
                      isTransparent: !v,
                    })
                  ),
                  !m &&
                    !Modernizr.mobiletouch &&
                    i.createElement(
                      "div",
                      {
                        className: c(
                          G.arrow,
                          d && "apply-common-tooltip common-tooltip-vertical"
                        ),
                        title: d,
                        onClick: this._handleClickArrow,
                        "data-role": "menu-handle",
                      },
                      i.createElement(O.a, { className: G.arrowIcon, icon: z })
                    )
                ),
                !m &&
                  (f
                    ? g &&
                      i.createElement(
                        H.a,
                        { onClose: this._handleClose, position: "Bottom" },
                        h
                      )
                    : i.createElement(
                        R.a,
                        {
                          doNotCloseOn: this,
                          isOpened: g,
                          onClose: this._handleClose,
                          position: this._getDropdownPosition,
                        },
                        h
                      ))
              );
            }),
            (t.prototype._getButtonHandlers = function () {
              var e = this.props,
                t = e.isGrayed,
                n = e.checkable;
              return t
                ? {}
                : Modernizr.mobiletouch
                ? n
                  ? {
                      onTouchStart: this._handlePressStart,
                      onTouchEnd: this._handleTouchPressEnd,
                      onTouchMove: this._cancelAllTimeouts,
                    }
                  : { onClick: this._handleTouchStart }
                : {
                    onMouseDown: this._handlePressStart,
                    onMouseUp: this._handlePressEnd,
                  };
            }),
            t
          );
        })(i.PureComponent),
        K = n("KKsp"),
        Q = n("EA32"),
        J = { icon: window.t("Icon"), dropdownTooltip: window.t("Icons") },
        q = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._renderItem = function (e, t) {
                var o = n.props.isSmallTablet,
                  a = u()(
                    Q.item,
                    o && Q.smallTablet,
                    t &&
                      o &&
                      n.state.isActive &&
                      e === n.state.current &&
                      Q.active
                  );
                return i.createElement(
                  "div",
                  {
                    className: a,
                    key: e,
                    onClick: function () {
                      n._handleSelect(e), Object(B.b)();
                    },
                  },
                  String.fromCharCode(e)
                );
              }),
              (n._onChangeDrawingState = function () {
                n.setState({ isActive: n._isActive() });
              }),
              (n._handleSelect = function (e) {
                Object(F.saveDefaults)(
                  "linetoolicon",
                  Object(o.a)(
                    Object(o.a)({}, Object(F.defaults)("linetoolicon")),
                    { icon: e }
                  )
                ),
                  p.tool.setValue("LineToolIcon");
                var t = n.state.recents,
                  i = t.indexOf(e);
                -1 !== i && t.splice(i, 1),
                  (t = Object(o.f)([e], t.slice(0, 9))),
                  Object(d.setJSON)("linetoolicon.recenticons", t),
                  n.setState({ current: e, recents: t });
              }),
              (n.state = {
                current: Object(F.defaults)("linetoolicon").icon,
                recents: Object(d.getJSON)("linetoolicon.recenticons") || [],
              }),
              n
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.componentDidMount = function () {
              p.tool.subscribe(this._onChangeDrawingState),
                d.onSync.subscribe(this, this._onSyncSettings);
            }),
            (t.prototype.componentWillUnmount = function () {
              p.tool.unsubscribe(this._onChangeDrawingState),
                d.onSync.unsubscribe(this, this._onSyncSettings);
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.isGrayed,
                a = t.toolName,
                r = t.isSmallTablet,
                l = this.state,
                s = l.current,
                c = l.isActive,
                d = l.recents,
                h = Object(P.a)(this.props),
                p = u()(Q.wrap, r && Q.smallTablet);
              return i.createElement(
                U,
                Object(o.a)(
                  {
                    buttonClass: Q.button,
                    buttonIcon: i.createElement(
                      "div",
                      { className: Q.buttonIcon },
                      String.fromCharCode(s || I[0])
                    ),
                    buttonTitle: J.icon,
                    dropdownTooltip: J.dropdownTooltip,
                    isActive: c,
                    isGrayed: n,
                    isSmallTablet: r,
                    onClickButton: function () {
                      return e._handleSelect(s || I[0]);
                    },
                    onClickWhenGrayed: function () {
                      return Object(b.emit)("onGrayedObjectClicked", {
                        type: "drawing",
                        name: w.a[a].localizedName,
                      });
                    },
                  },
                  h
                ),
                d &&
                  i.createElement(
                    i.Fragment,
                    null,
                    r &&
                      i.createElement(
                        "div",
                        { className: Q.title },
                        window.t("Recently used")
                      ),
                    i.createElement(
                      "div",
                      { className: p },
                      d.map(function (t) {
                        return e._renderItem(t, !0);
                      })
                    ),
                    i.createElement(K.a, { className: u()(r && Q.separator) })
                  ),
                i.createElement(
                  "div",
                  { key: "all", className: p },
                  I.map(function (t) {
                    return e._renderItem(t);
                  })
                )
              );
            }),
            (t.prototype._isActive = function () {
              return p.tool.value() === this.props.toolName;
            }),
            (t.prototype._onSyncSettings = function () {
              this.setState({
                recents: Object(d.getJSON)("linetoolicon.recenticons"),
              });
            }),
            t
          );
        })(i.Component),
        X = n("Ocx9"),
        Y = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._handleClick = function () {
                n.props.saveDefaultOnChange &&
                  Object(X.saveDefaultProperties)(!0);
                var e = !n.props.property.value();
                n.props.property.setValue(e),
                  n.props.saveDefaultOnChange &&
                    Object(X.saveDefaultProperties)(!1),
                  n.props.onClick && n.props.onClick(e);
              }),
              (n.state = { isActive: n.props.property.value() }),
              n
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.componentDidMount = function () {
              this.props.property.subscribe(this, this._onChange);
            }),
            (t.prototype.componentWillUnmount = function () {
              this.props.property.unsubscribe(this, this._onChange);
            }),
            (t.prototype.render = function () {
              var e = this.props.toolName,
                t = this.state.isActive,
                n = w.a[e];
              return i.createElement(V, {
                icon: t && n.iconActive ? n.iconActive : n.icon,
                isActive: t,
                onClick: this._handleClick,
                title: n.localizedName,
                buttonHotKey: n.hotKey,
                "data-name": e,
              });
            }),
            (t.prototype._onChange = function (e) {
              this.setState({ isActive: e.value() });
            }),
            t
          );
        })(i.PureComponent),
        Z = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._handleClick = function () {
                p.tool.setValue(n.props.toolName);
              }),
              (n._onChange = function () {
                n.setState({ isActive: p.tool.value() === n.props.toolName });
              }),
              (n.state = { isActive: p.tool.value() === n.props.toolName }),
              n
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.componentDidMount = function () {
              p.tool.subscribe(this._onChange);
            }),
            (t.prototype.componentWillUnmount = function () {
              p.tool.unsubscribe(this._onChange);
            }),
            (t.prototype.render = function () {
              var e = this.props.toolName,
                t = this.state.isActive,
                n = w.a[e];
              return i.createElement(V, {
                icon: w.a[e].icon,
                isActive: t,
                isTransparent: !0,
                onClick: this._handleClick,
                title: n.localizedName,
                buttonHotKey: n.hotKey,
                "data-name": e,
              });
            }),
            t
          );
        })(i.PureComponent),
        $ = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._boundUndoModel = null),
              (n._handleClick = function () {
                var e = n._activeChartWidget().model();
                e && e.zoomFromViewport();
              }),
              (n._syncUnzoomButton = function () {
                var e = n._activeChartWidget(),
                  t = e.model(),
                  o = !1;
                t
                  ? (n._boundUndoModel !== t &&
                      (n._boundUndoModel &&
                        n._boundUndoModel
                          .zoomStack()
                          .onChange()
                          .unsubscribe(null, n._syncUnzoomButton),
                      t
                        .zoomStack()
                        .onChange()
                        .subscribe(null, n._syncUnzoomButton),
                      (n._boundUndoModel = t)),
                    (o = !t.zoomStack().isEmpty()))
                  : e.withModel(null, n._syncUnzoomButton),
                  n.setState({ isVisible: o });
              }),
              (n.state = { isVisible: !1 }),
              n
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.componentDidMount = function () {
              this.props.chartWidgetCollection.activeChartWidget.subscribe(
                this._syncUnzoomButton,
                { callWithLast: !0 }
              );
            }),
            (t.prototype.componentWillUnmount = function () {
              this.props.chartWidgetCollection.activeChartWidget.unsubscribe(
                this._syncUnzoomButton
              );
            }),
            (t.prototype.render = function () {
              return this.state.isVisible
                ? i.createElement(x, {
                    action: this._handleClick,
                    isTransparent: !0,
                    toolName: "zoom-out",
                  })
                : i.createElement("div", null);
            }),
            (t.prototype._activeChartWidget = function () {
              return this.props.chartWidgetCollection.activeChartWidget.value();
            }),
            t
          );
        })(i.PureComponent),
        ee = n("b2d7"),
        te = n("pr86"),
        ne = n("N5tr"),
        oe = n("dhVi"),
        ie = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            (n._onChangeDrawingState = function () {
              var e = n._getActiveToolIndex();
              n.setState({
                current: -1 !== e ? e : n.state.current,
                isActive: -1 !== e,
              });
            }),
              (n._handleClickButton = function () {
                if (!g.CheckMobile.any()) {
                  var e = n._getCurrentToolName();
                  n._selectTool(e);
                }
              }),
              (n._handleClickItem = function (e) {
                n._selectTool(e);
              }),
              (n._handleGrayedClick = function (e) {
                Object(b.emit)("onGrayedObjectClicked", {
                  type: "drawing",
                  name: w.a[e].localizedName,
                });
              }),
              (n._handleClickFavorite = function (e) {
                n.state.favState && n.state.favState[e]
                  ? ee.a.removeFavorite(e)
                  : ee.a.addFavorite(e);
              }),
              (n._onAddFavorite = function (e) {
                var t;
                n.setState({
                  favState: Object(o.a)(
                    Object(o.a)({}, n.state.favState),
                    ((t = {}), (t[e] = !0), t)
                  ),
                });
              }),
              (n._onRemoveFavorite = function (e) {
                var t;
                n.setState({
                  favState: Object(o.a)(
                    Object(o.a)({}, n.state.favState),
                    ((t = {}), (t[e] = !1), t)
                  ),
                });
              }),
              (n._onSyncFavorites = function () {
                n.setState({ favState: n._composeFavState() });
              });
            var i = n._getActiveToolIndex();
            return (
              (n.state = {
                current: -1 === i ? n._firstNonGrayedTool() : i,
                favState: n._composeFavState(),
                isActive: -1 !== i,
              }),
              n
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.componentDidMount = function () {
              p.tool.subscribe(this._onChangeDrawingState),
                ee.a.favoriteAdded.subscribe(null, this._onAddFavorite),
                ee.a.favoriteRemoved.subscribe(null, this._onRemoveFavorite),
                ee.a.favoritesSynced.subscribe(null, this._onSyncFavorites);
            }),
            (t.prototype.componentWillUnmount = function () {
              p.tool.unsubscribe(this._onChangeDrawingState),
                ee.a.favoriteAdded.unsubscribe(null, this._onAddFavorite),
                ee.a.favoriteRemoved.unsubscribe(null, this._onRemoveFavorite),
                ee.a.favoritesSynced.unsubscribe(null, this._onSyncFavorites);
            }),
            (t.prototype.componentDidUpdate = function (e, t) {
              e.lineTools !== this.props.lineTools &&
                this.setState({ favState: this._composeFavState() });
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.favoriting,
                a = t.grayedTools,
                r = t.lineTools,
                l = t.dropdownTooltip,
                s = t.isSmallTablet,
                c = this.state,
                u = c.current,
                d = c.favState,
                h = c.isActive,
                p = this._getCurrentToolName(),
                m = w.a[p],
                b = this._showShortcuts(),
                v = Object(P.a)(this.props);
              return i.createElement(
                "span",
                null,
                i.createElement(
                  U,
                  Object(o.a)(
                    {
                      buttonIcon: m.icon,
                      buttonTitle: m.localizedName,
                      buttonHotKey: m.hotKey,
                      dropdownTooltip: l,
                      isActive: h,
                      onClickButton: this._handleClickButton,
                      isSmallTablet: s,
                    },
                    v
                  ),
                  r.map(function (t, o) {
                    var r = t.name,
                      l = w.a[r],
                      c = a[r];
                    return i.createElement(ne.b, {
                      key: r,
                      "data-name": t.name,
                      theme: s ? oe.a : void 0,
                      dontClosePopup: c,
                      forceShowShortcuts: b,
                      shortcut:
                        !s && t.hotkeyHash
                          ? Object(T.humanReadableHash)(t.hotkeyHash)
                          : void 0,
                      icon: l.icon,
                      isActive: h && u === o,
                      appearAsDisabled: c,
                      label: l.localizedName,
                      onClick: c ? e._handleGrayedClick : e._handleClickItem,
                      onClickArg: r,
                      showToolboxOnHover: !d[r],
                      toolbox:
                        n && !c
                          ? i.createElement(te.a, {
                              isActive: h && u === o,
                              isFilled: d[r],
                              onClick: function () {
                                return e._handleClickFavorite(r);
                              },
                            })
                          : void 0,
                    });
                  })
                )
              );
            }),
            (t.prototype._getCurrentToolName = function () {
              var e = this.state.current;
              return this.props.lineTools[e || 0].name;
            }),
            (t.prototype._firstNonGrayedTool = function () {
              var e = this.props,
                t = e.grayedTools;
              return e.lineTools.findIndex(function (e) {
                return !t[e.name];
              });
            }),
            (t.prototype._getActiveToolIndex = function () {
              return this.props.lineTools.findIndex(function (e) {
                return e.name === p.tool.value();
              });
            }),
            (t.prototype._showShortcuts = function () {
              return this.props.lineTools.some(function (e) {
                return "shortcut" in e;
              });
            }),
            (t.prototype._selectTool = function (e) {
              p.tool.setValue(e);
            }),
            (t.prototype._composeFavState = function () {
              var e = {};
              return (
                this.props.lineTools.forEach(function (t) {
                  e[t.name] = ee.a.isFavorite(t.name);
                }),
                e
              );
            }),
            t
          );
        })(i.PureComponent),
        ae = n("JWMC"),
        re = n("nPPD"),
        le = n("FTBN"),
        se = Object(re.a)(ne.a, le),
        ce = {
          all: window.t("Remove Drawings & Indicators"),
          drawings: window.t("Remove Drawings"),
          studies: window.t("Remove Indicators"),
        },
        ue = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._handleRemoveToolClick = function () {
                Modernizr.mobiletouch || t._handleRemoveDrawings();
              }),
              (t._handleRemoveDrawings = function () {
                Object(ae.trackEvent)(
                  "GUI",
                  "Chart Left Toolbar",
                  "remove drawing"
                ),
                  t.props.chartWidgetCollection.activeChartWidget
                    .value()
                    .removeAllDrawingTools();
              }),
              (t._handleRemoveStudies = function () {
                Object(ae.trackEvent)(
                  "GUI",
                  "Chart Left Toolbar",
                  "remove indicator"
                ),
                  t.props.chartWidgetCollection.activeChartWidget
                    .value()
                    .removeAllStudies();
              }),
              (t._handleRemoveAll = function () {
                Object(ae.trackEvent)(
                  "GUI",
                  "Chart Left Toolbar",
                  "remove all"
                ),
                  t.props.chartWidgetCollection.activeChartWidget
                    .value()
                    .removeAllStudiesDrawingTools();
              }),
              t
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.render = function () {
              var e = this.props.isSmallTablet ? se : void 0;
              return i.createElement(
                U,
                {
                  buttonIcon: w.a[this.props.toolName].icon,
                  buttonTitle: ce.drawings,
                  onClickButton: this._handleRemoveToolClick,
                  isSmallTablet: this.props.isSmallTablet,
                  "data-name": this.props.toolName,
                },
                i.createElement(ne.b, {
                  "data-name": "remove-drawing-tools",
                  label: ce.drawings,
                  onClick: this._handleRemoveDrawings,
                  theme: e,
                }),
                i.createElement(ne.b, {
                  "data-name": "remove-studies",
                  label: ce.studies,
                  onClick: this._handleRemoveStudies,
                  theme: e,
                }),
                i.createElement(ne.b, {
                  "data-name": "remove-all",
                  label: ce.all,
                  onClick: this._handleRemoveAll,
                  theme: e,
                })
              );
            }),
            t
          );
        })(i.PureComponent),
        de = n("Ijvb");
      function he(e) {
        var t = e.hideDrawingsProperty,
          n = e.hideIndicatorsProperty,
          o = e.isSmallTablet,
          r = Object(i.useState)(function () {
            return d.getValue("ChartToolsHideMode", "drawings");
          }),
          l = r[0],
          c = r[1],
          u = Object(i.useState)(function () {
            return t.value();
          }),
          h = u[0],
          p = u[1],
          m = Object(i.useState)(function () {
            return n.value();
          }),
          b = m[0],
          v = m[1];
        Object(i.useEffect)(function () {
          var e = T("drawings", p),
            o = T("indicators", v);
          return (
            t.subscribe(null, e),
            n.subscribe(null, o),
            function () {
              t.unsubscribe(null, e), n.unsubscribe(null, o);
            }
          );
        }, []);
        var f = w.a.hideAllDrawings,
          g = h || b,
          _ = o ? se : void 0;
        return a.a.createElement(
          U,
          {
            buttonIcon: (function () {
              switch (l) {
                case "drawings":
                  return h
                    ? de.a.hideAllDrawingToolsActive
                    : de.a.hideAllDrawingTools;
                case "indicators":
                  return b
                    ? de.a.hideAllIndicatorsActive
                    : de.a.hideAllIndicators;
                default:
                  return h && b
                    ? de.a.hideAllDrawingsActive
                    : de.a.hideAllDrawings;
              }
            })(),
            buttonTitle: (function () {
              switch (l) {
                case "drawings":
                  return g
                    ? Object(s.t)("Show all drawings")
                    : Object(s.t)("Hide all drawings");
                case "indicators":
                  return g
                    ? Object(s.t)("Show all indicators")
                    : Object(s.t)("Hide all indicators");
                default:
                  return g
                    ? Object(s.t)("Show all drawings and indicators")
                    : Object(s.t)("Hide all drawings and indicators");
              }
            })(),
            buttonHotKey: f.hotKey,
            onClickButton: function () {
              switch (l) {
                case "drawings":
                  pe(t);
                  break;
                case "indicators":
                  pe(n);
                  break;
                default:
                  pe(t), pe(n);
              }
            },
            isSmallTablet: o,
            isActive: g,
            checkable: !0,
            "data-name": "hideAllDrawings",
          },
          a.a.createElement(ne.b, {
            label: Object(s.t)("Hide drawings"),
            isActive: h && !b,
            onClick: function () {
              var e = "all" === l || !h;
              n.setValue(!1),
                t.setValue(e),
                y("drawings"),
                me("hide drawings", e);
            },
            "data-name": "hide-drawing-tools",
            theme: _,
          }),
          a.a.createElement(ne.b, {
            label: Object(s.t)("Hide indicators"),
            isActive: !h && b,
            onClick: function () {
              var e = "all" === l || !b;
              t.setValue(!1),
                n.setValue(e),
                y("indicators"),
                me("hide indicators", e);
            },
            "data-name": "hide-indicators",
            theme: _,
          }),
          a.a.createElement(ne.b, {
            label: Object(s.t)("Hide drawings & indicators"),
            isActive: h && b,
            onClick: function () {
              var e = !(h && b);
              t.setValue(e),
                n.setValue(e),
                y("all"),
                me("hide drawings and indicators", e);
            },
            "data-name": "hide-drawings-and-indicators",
            theme: _,
          })
        );
        function T(e, t) {
          return function (e) {
            return t(e.value());
          };
        }
        function y(e) {
          c(e), d.setValue("ChartToolsHideMode", e);
        }
      }
      function pe(e) {
        e.setValue(!e.value());
      }
      function me(e, t) {
        Object(ae.trackEvent)(
          "GUI",
          "Chart Left Toolbar",
          e + " " + (t ? "on" : "off")
        );
      }
      var be,
        ve = n("g5Qf"),
        fe = n("85c9"),
        ge = window.t("Show Favorite Drawing Tools Toolbar"),
        we = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._instance = null),
              (t._promise = null),
              (t._bindedForceUpdate = function () {
                return t.forceUpdate();
              }),
              (t._handleClick = function () {
                null !== t._instance &&
                  (t._instance.isVisible()
                    ? t._instance.hide()
                    : t._instance.show());
              }),
              t
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this,
                t = (this._promise = Object(l.ensureNotNull)(
                  Object(ve.getFavoriteDrawingToolbarPromise)()
                ));
              t.then(function (n) {
                e._promise === t &&
                  ((e._instance = n),
                  e._instance.canBeShown().subscribe(e._bindedForceUpdate),
                  e._instance.visibility().subscribe(e._bindedForceUpdate),
                  e.forceUpdate());
              });
            }),
            (t.prototype.componentWillUnmount = function () {
              (this._promise = null),
                null !== this._instance &&
                  (this._instance
                    .canBeShown()
                    .unsubscribe(this._bindedForceUpdate),
                  this._instance
                    .visibility()
                    .unsubscribe(this._bindedForceUpdate),
                  (this._instance = null));
            }),
            (t.prototype.render = function () {
              return null !== this._instance &&
                this._instance.canBeShown().value()
                ? i.createElement(V, {
                    id: this.props.id,
                    icon: fe,
                    isActive: this._instance.isVisible(),
                    onClick: this._handleClick,
                    title: ge,
                  })
                : null;
            }),
            t
          );
        })(i.PureComponent),
        _e = n("4o++");
      !(function (e) {
        (e.Screenshot = "drawing-toolbar-screenshot"),
          (e.FavoriteDrawings = "drawing-toolbar-favorite-drawings"),
          (e.ObjectTree = "drawing-toolbar-object-tree");
      })(be || (be = {}));
      var Te = n("8d0Q"),
        ye = n("XAms"),
        Ce = n("7RN7"),
        ke = n("X0gx"),
        Se = n("Wz44"),
        Oe = Se,
        Ee = "http://www.w3.org/2000/svg";
      function De(e) {
        var t = e.direction,
          n = e.theme,
          o = void 0 === n ? Se : n;
        return i.createElement(
          "svg",
          {
            xmlns: Ee,
            width: "9",
            height: "27",
            viewBox: "0 0 9 27",
            className: c(o.container, "right" === t ? o.mirror : null),
            onContextMenu: ye.a,
          },
          i.createElement(
            "g",
            { fill: "none", fillRule: "evenodd" },
            i.createElement("path", {
              className: o.background,
              d: "M4.5.5a4 4 0 0 1 4 4v18a4 4 0 1 1-8 0v-18a4 4 0 0 1 4-4z",
            }),
            i.createElement("path", {
              className: o.arrow,
              d: "M5.5 10l-2 3.5 2 3.5",
            })
          )
        );
      }
      var Le = n("ybOa"),
        Me = Object(re.a)(Oe, Le),
        Ae = {
          hide: window.t("Hide Drawings Toolbar"),
          show: window.t("Show Drawings Toolbar"),
        },
        je = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._toggleVisibility = function () {
                k.isDrawingToolbarVisible.setValue(
                  !k.isDrawingToolbarVisible.value()
                );
              }),
              t
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.render = function () {
              var e = this.props.toolbarVisible;
              return i.createElement(
                "div",
                {
                  className: c(
                    Me.toggleButton,
                    "apply-common-tooltip common-tooltip-vertical",
                    !e && Me.collapsed
                  ),
                  onClick: this._toggleVisibility,
                  title: e ? Ae.hide : Ae.show,
                },
                i.createElement(De, {
                  direction: e ? "left" : "right",
                  theme: e ? void 0 : Me,
                })
              );
            }),
            t
          );
        })(i.PureComponent),
        Ne = n("mkWe"),
        Be = n("uhCe"),
        Pe = n("/KDZ"),
        We = { chartWidgetCollection: n("17x9").any.isRequired },
        Ve = n("1TxM"),
        xe = n("JQKp"),
        Fe = {
          weakMagnet: window.t("Weak Magnet"),
          strongMagnet: window.t("Strong Magnet"),
        },
        Ie = Object(g.onWidget)(),
        Re = new f.a(),
        He = ae.trackEvent.bind(null, "GUI", "Chart Left Toolbar"),
        ze = function (e, t) {
          return He(e + " " + (t ? "on" : "off"));
        };
      function Ge() {
        var e = !p.properties().childs().magnet.value();
        ze("magnet mode", e),
          Object(X.saveDefaultProperties)(!0),
          p.properties().childs().magnet.setValue(e),
          Object(X.saveDefaultProperties)(!1);
      }
      function Ue() {
        Object(ae.trackEvent)("GUI", "Magnet mode", "Weak"),
          Object(X.saveDefaultProperties)(!0),
          p.properties().childs().magnetMode.setValue(_e.MagnetMode.WeakMagnet),
          p.properties().childs().magnet.setValue(!0),
          Object(X.saveDefaultProperties)(!1);
      }
      function Ke() {
        Object(ae.trackEvent)("GUI", "Magnet mode", "Strong"),
          Object(X.saveDefaultProperties)(!0),
          p
            .properties()
            .childs()
            .magnetMode.setValue(_e.MagnetMode.StrongMagnet),
          p.properties().childs().magnet.setValue(!0),
          Object(X.saveDefaultProperties)(!1);
      }
      var Qe = (function (e) {
        function t(t) {
          var n,
            o = e.call(this, t) || this;
          return (
            (o._grayedTools = {}),
            (o._handleDrawingClick = function (e) {
              ze("drawing mode", e);
            }),
            (o._handleLockClick = function (e) {
              ze("lock all drawing", e);
            }),
            (o._handleSyncClick = function (e) {
              ze("sync", e);
            }),
            (o._handleMouseOver = function (e) {
              Object(Te.a)(e) && o.setState({ isHovered: !0 });
            }),
            (o._handleMouseOut = function (e) {
              Object(Te.a)(e) && o.setState({ isHovered: !1 });
            }),
            (o._handleChangeVisibility = function (e) {
              o.setState({ isVisible: e });
            }),
            (o._handleEsc = function () {
              p.resetToCursor(!0);
            }),
            (o._updateMagnetEnabled = function () {
              var e = { magnet: Object(m.a)().value() };
              o.setState(e);
            }),
            (o._updateMagnetMode = function () {
              var e = { magnetMode: Object(m.b)().value() };
              o.setState(e);
            }),
            (o._handleWidgetbarSettled = function (e) {
              var t;
              o.setState({
                isWidgetbarVisible:
                  null === (t = window.widgetbar) || void 0 === t
                    ? void 0
                    : t.visible().value(),
                widgetbarSettled: e,
              });
            }),
            (o._handleWidgetbarVisible = function (e) {
              o.setState({ isWidgetbarVisible: e });
            }),
            p.init(),
            (o._toolsFilter = new _(o.props.drawingsAccess)),
            (o._filteredLineTools = C.map(function (e) {
              return {
                id: e.id,
                title: e.title,
                items: e.items.filter(function (e) {
                  return o._toolsFilter.isToolEnabled(
                    w.a[e.name].localizedName
                  );
                }),
              };
            }).filter(function (e) {
              return 0 !== e.items.length;
            })),
            o._filteredLineTools.forEach(function (e) {
              return e.items.forEach(function (e) {
                o._grayedTools[e.name] = o._toolsFilter.isToolGrayed(
                  w.a[e.name].localizedName
                );
              });
            }),
            (o.state = {
              isHovered: !1,
              isVisible: k.isDrawingToolbarVisible.value(),
              isWidgetbarVisible: Boolean(
                null === (n = window.widgetbar) || void 0 === n
                  ? void 0
                  : n.visible().value()
              ),
              widgetbarSettled: void 0 !== window.widgetbar,
              magnet: p.properties().childs().magnet.value(),
              magnetMode: p.properties().childs().magnetMode.value(),
            }),
            (o._features = {
              favoriting: !Ie && h.enabled("items_favoriting"),
              multicharts: h.enabled("support_multicharts"),
              tools: !Ie || h.enabled("charting_library_base"),
            }),
            (o._registry = {
              chartWidgetCollection: o.props.chartWidgetCollection,
            }),
            o._negotiateResizer(),
            o
          );
        }
        return (
          Object(o.c)(t, e),
          (t.prototype.componentDidMount = function () {
            var e;
            k.isDrawingToolbarVisible.subscribe(this._handleChangeVisibility),
              B.a.subscribe(this, this._handleGlobalClose),
              Object(m.a)().subscribe(this._updateMagnetEnabled),
              Object(m.b)().subscribe(this._updateMagnetMode),
              (this._tool = p.tool.spawn()),
              this._tool.subscribe(this._updateHotkeys.bind(this)),
              this._initHotkeys(),
              this.props.widgetbarSettled &&
                (this.props.widgetbarSettled.subscribe(
                  this,
                  this._handleWidgetbarSettled
                ),
                g.CheckMobile.any() &&
                  (null === (e = window.widgetbar) ||
                    void 0 === e ||
                    e.visible().subscribe(this._handleWidgetbarVisible)));
          }),
          (t.prototype.componentWillUnmount = function () {
            var e;
            null === (e = window.widgetbar) ||
              void 0 === e ||
              e.visible().unsubscribe(this._handleWidgetbarVisible),
              k.isDrawingToolbarVisible.unsubscribe(
                this._handleChangeVisibility
              ),
              B.a.unsubscribe(this, this._handleGlobalClose),
              Object(m.a)().unsubscribe(this._updateMagnetEnabled),
              Object(m.b)().unsubscribe(this._updateMagnetMode),
              this._tool.destroy(),
              this._hotkeys.destroy();
          }),
          (t.prototype.componentDidUpdate = function (e, t) {
            var n,
              o = this.state,
              i = o.isVisible,
              a = o.widgetbarSettled;
            i !== t.isVisible &&
              (b.emit("toggle_sidebar", !i),
              d.setValue("ChartDrawingToolbarWidget.visible", i),
              this._negotiateResizer()),
              t.widgetbarSettled !== a &&
                a &&
                g.CheckMobile.any() &&
                (null === (n = window.widgetbar) ||
                  void 0 === n ||
                  n.visible().subscribe(this._handleWidgetbarVisible));
          }),
          (t.prototype.render = function () {
            var e,
              t = this,
              n = this.props,
              o = n.bgColor,
              a = n.chartWidgetCollection,
              r = n.readOnly,
              l = this.state,
              s = l.isHovered,
              u = l.isVisible,
              d = l.magnet,
              m = l.magnetMode,
              b = { backgroundColor: o && "#" + o };
            e = i.createElement(je, { toolbarVisible: u });
            return i.createElement(
              Ve.a,
              { validation: We, value: this._registry },
              i.createElement(
                ke.a.Provider,
                { value: Re },
                i.createElement(
                  Ne.b,
                  null,
                  i.createElement(
                    Pe.a,
                    { rule: Be.a.TabletSmall },
                    function (n) {
                      var o;
                      return i.createElement(
                        "div",
                        {
                          id: "drawing-toolbar",
                          className: c(
                            xe.drawingToolbar,
                            ((o = {}), (o[xe.isHidden] = !u), o)
                          ),
                          style: b,
                          onClick: t.props.onClick,
                          onContextMenu: ye.b,
                        },
                        i.createElement(
                          j,
                          {
                            onScroll: t._handleGlobalClose,
                            isVisibleFade: Modernizr.mobiletouch,
                            isVisibleButtons: !Modernizr.mobiletouch && s,
                            isVisibleScrollbar: !1,
                            onMouseOver: t._handleMouseOver,
                            onMouseOut: t._handleMouseOut,
                          },
                          i.createElement(
                            "div",
                            { className: xe.inner },
                            !r &&
                              i.createElement(
                                "div",
                                { className: xe.group, style: b },
                                t._filteredLineTools.map(function (e, o) {
                                  return i.createElement(ie, {
                                    "data-name": e.id,
                                    chartWidgetCollection: a,
                                    favoriting: t._features.favoriting,
                                    grayedTools: t._grayedTools,
                                    key: o,
                                    dropdownTooltip: e.title,
                                    lineTools: e.items,
                                    isSmallTablet: n,
                                  });
                                }),
                                t._toolsFilter.isToolEnabled("Font Icons") &&
                                  i.createElement(q, {
                                    "data-name": "linetool-group-font-icons",
                                    isGrayed: t._grayedTools["Font Icons"],
                                    toolName: "LineToolIcon",
                                    isSmallTablet: n,
                                  })
                              ),
                            !r &&
                              i.createElement(
                                "div",
                                { className: xe.group, style: b },
                                i.createElement(Z, { toolName: "measure" }),
                                i.createElement(Z, { toolName: "zoom" }),
                                i.createElement($, { chartWidgetCollection: a })
                              ),
                            !r &&
                              i.createElement(
                                "div",
                                { className: xe.group, style: b },
                                i.createElement(
                                  U,
                                  {
                                    "data-name": "magnet-button",
                                    buttonIcon:
                                      m === _e.MagnetMode.StrongMagnet
                                        ? de.a.strongMagnet
                                        : de.a.magnet,
                                    buttonTitle: w.a.magnet.localizedName,
                                    isActive: d,
                                    onClickButton: Ge,
                                    buttonHotKey: w.a.magnet.hotKey,
                                    checkable: !0,
                                    isSmallTablet: n,
                                  },
                                  i.createElement(ne.b, {
                                    key: "weakMagnet",
                                    className: n ? xe.popupMenuItem : void 0,
                                    "data-name": "weakMagnet",
                                    icon: de.a.magnet,
                                    isActive:
                                      d && m !== _e.MagnetMode.StrongMagnet,
                                    label: Fe.weakMagnet,
                                    onClick: Ue,
                                  }),
                                  i.createElement(ne.b, {
                                    key: "strongMagnet",
                                    className: n ? xe.popupMenuItem : void 0,
                                    "data-name": "strongMagnet",
                                    icon: de.a.strongMagnet,
                                    isActive:
                                      d && m === _e.MagnetMode.StrongMagnet,
                                    label: Fe.strongMagnet,
                                    onClick: Ke,
                                  })
                                ),
                                t._features.tools &&
                                  i.createElement(Y, {
                                    property: p.properties().childs()
                                      .stayInDrawingMode,
                                    saveDefaultOnChange: !0,
                                    toolName: "drawginmode",
                                    onClick: t._handleDrawingClick,
                                  }),
                                t._features.tools &&
                                  i.createElement(Y, {
                                    property: p.lockDrawings(),
                                    toolName: "lockAllDrawings",
                                    onClick: t._handleLockClick,
                                  }),
                                t._features.tools &&
                                  i.createElement(he, {
                                    isSmallTablet: n,
                                    hideDrawingsProperty: p.hideAllDrawings(),
                                    hideIndicatorsProperty:
                                      p.hideAllIndicators(),
                                  }),
                                !1
                              ),
                            !r &&
                              t._features.tools &&
                              i.createElement(
                                "div",
                                { className: xe.group, style: b },
                                i.createElement(ue, {
                                  chartWidgetCollection: a,
                                  isSmallTablet: n,
                                  toolName: "removeAllDrawingTools",
                                })
                              ),
                            i.createElement("div", {
                              className: xe.fill,
                              style: b,
                            }),
                            !r &&
                              (t._features.tools || !1) &&
                              i.createElement(
                                "div",
                                {
                                  className: c(xe.group, xe.lastGroup),
                                  style: b,
                                },
                                !1,
                                t._features.tools &&
                                  t._features.favoriting &&
                                  i.createElement(we, {
                                    id: be.FavoriteDrawings,
                                  }),
                                !!t._features.tools &&
                                  !!h.enabled("show_object_tree") &&
                                  i.createElement(x, {
                                    id: be.ObjectTree,
                                    action: function () {
                                      return t
                                        ._activeChartWidget()
                                        .showObjectsTreeDialog();
                                    },
                                    toolName: "showObjectsTree",
                                  })
                              )
                          )
                        ),
                        e
                      );
                    }
                  )
                )
              )
            );
          }),
          (t.prototype._activeChartWidget = function () {
            return this.props.chartWidgetCollection.activeChartWidget.value();
          }),
          (t.prototype._negotiateResizer = function () {
            var e = Ce.a;
            this.props.resizerBridge.negotiateWidth(
              this.state.isVisible ? Ce.b : e
            );
          }),
          (t.prototype._handleGlobalClose = function () {
            Re.fire();
          }),
          (t.prototype._updateHotkeys = function () {
            this._hotkeys.promote();
          }),
          (t.prototype._initHotkeys = function () {
            var e = this;
            (this._hotkeys = N.createGroup({ desc: "Drawing Toolbar" })),
              this._hotkeys.add({
                desc: "Reset",
                hotkey: 27,
                handler: function () {
                  return e._handleEsc();
                },
                isDisabled: function () {
                  return p.toolIsCursor(p.tool.value());
                },
              });
          }),
          t
        );
      })(i.PureComponent);
      n.d(t, "DrawingToolbarRenderer", function () {
        return Je;
      });
      var Je = (function () {
        function e(e, t) {
          var n = this;
          (this._component = null),
            (this._handleRef = function (e) {
              n._component = e;
            }),
            (this._container = e),
            r.render(
              i.createElement(Qe, Object(o.a)({}, t, { ref: this._handleRef })),
              this._container
            );
        }
        return (
          (e.prototype.destroy = function () {
            r.unmountComponentAtNode(this._container);
          }),
          (e.prototype.getComponent = function () {
            return Object(l.ensureNotNull)(this._component);
          }),
          e
        );
      })();
    },
    "85c9": function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" fill="currentColor"><path fillRule="evenodd" clip-rule="evenodd" d="M9.103.687a1 1 0 0 1 1.794 0l2.374 4.81 5.309.772a1 1 0 0 1 .554 1.706l-3.841 3.745.906 5.287a1 1 0 0 1-1.45 1.054L10 15.565 5.252 18.06A1 1 0 0 1 3.8 17.007l.907-5.287L.866 7.975a1 1 0 0 1 .554-1.706l5.31-.771L9.102.688zM10 1.13L7.393 6.412l-5.829.847 4.218 4.111-.996 5.806L10 14.436l5.214 2.74-.996-5.805 4.218-4.112-5.83-.847L10 1.13z"/></svg>';
    },
    "8d0Q": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return i;
      }),
        n.d(t, "a", function () {
          return a;
        });
      var o = n("q1tI");
      function i() {
        var e = Object(o.useState)(!1),
          t = e[0],
          n = e[1];
        return [
          t,
          {
            onMouseOver: function (e) {
              a(e) && n(!0);
            },
            onMouseOut: function (e) {
              a(e) && n(!1);
            },
          },
        ];
      }
      function a(e) {
        return !e.currentTarget.contains(e.relatedTarget);
      }
    },
    ASyk: function (e, t, n) {
      e.exports = {
        "tablet-normal-breakpoint": "screen and (max-width: 768px)",
        "small-height-breakpoint": "screen and (max-height: 360px)",
        "tablet-small-breakpoint": "screen and (max-width: 419px)",
      };
    },
    EA32: function (e, t, n) {
      e.exports = {
        wrap: "wrap-2I6DAtXG",
        smallTablet: "smallTablet-3_DPsWKG",
        buttonIcon: "buttonIcon-2rBwJ1QM",
        item: "item-31XunD5q",
        hovered: "hovered-2A1Cpat5",
        active: "active-3xIuXjh4",
        title: "title-KfwqaWX5",
        separator: "separator-3h4R1USD",
        button: "button-21ihqWJ8",
      };
    },
    FTBN: function (e, t, n) {
      e.exports = { item: "item-2mJKOVhF", label: "label-1PMmZmZk" };
    },
    HD8h: function (e, t, n) {
      e.exports = {
        item: "item-184T8X5A",
        label: "label-20cSBx98",
        labelRow: "labelRow-2fmEJqjl",
        toolbox: "toolbox-2H0D5bLi",
      };
    },
    JQKp: function (e, t, n) {
      e.exports = {
        drawingToolbar: "drawingToolbar-U3_QXRof",
        isHidden: "isHidden-2d-PYkzV",
        inner: "inner-1xuW-gY4",
        popupMenuItem: "popupMenuItem-1b59KAzs",
        group: "group-2JyOhh7Z",
        noGroupPadding: "noGroupPadding-1TTjVKWk",
        lastGroup: "lastGroup-O75UB5Xa",
        fill: "fill-1djIbBXv",
        separator: "separator-1BAqp1-l",
      };
    },
    KmEK: function (e, t, n) {
      e.exports = {
        dropdown: "dropdown-3_ASLzSj",
        buttonWrap: "buttonWrap-3fZWypJl",
        control: "control-1TyEfSIx",
        arrow: "arrow-1cFKS5Ok",
        arrowIcon: "arrowIcon-2wA7q8om",
        isOpened: "isOpened-22vLOY9o",
        hover: "hover-2eKqN_v0",
        isGrayed: "isGrayed-xr-mULNo",
      };
    },
    QpNh: function (e, t, n) {
      "use strict";
      function o(e) {
        for (
          var t = {}, n = 0, o = Object.entries(e).filter(i);
          n < o.length;
          n++
        ) {
          var a = o[n],
            r = a[0],
            l = a[1];
          t[r] = l;
        }
        return t;
      }
      function i(e) {
        var t = e[0],
          n = e[1];
        return 0 === t.indexOf("data-") && "string" == typeof n;
      }
      n.d(t, "a", function () {
        return o;
      });
    },
    R5JZ: function (e, t, n) {
      "use strict";
      function o(e, t, n, o, i) {
        function a(i) {
          if (!(e > i.timeStamp)) {
            var a = i.target;
            void 0 !== n &&
              null !== t &&
              null !== a &&
              a.ownerDocument === o &&
              (t.contains(a) || n(i));
          }
        }
        return (
          i.click && o.addEventListener("click", a, !1),
          i.mouseDown && o.addEventListener("mousedown", a, !1),
          i.touchEnd && o.addEventListener("touchend", a, !1),
          i.touchStart && o.addEventListener("touchstart", a, !1),
          function () {
            o.removeEventListener("click", a, !1),
              o.removeEventListener("mousedown", a, !1),
              o.removeEventListener("touchend", a, !1),
              o.removeEventListener("touchstart", a, !1);
          }
        );
      }
      n.d(t, "a", function () {
        return o;
      });
    },
    Sn4D: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return m;
      });
      var o = n("q1tI"),
        i = n.n(o),
        a = n("Eyy1"),
        r = n("TSYQ"),
        l = n("x0D+"),
        s = n("Nkvk"),
        c = n("AiMB"),
        u = n("mkWe"),
        d = n("qFKp"),
        h = n("X0gx"),
        p = n("sHQ4");
      function m(e) {
        var t = e.position,
          n = e.onClose,
          m = e.children,
          b = e.className,
          v = e.theme,
          f = void 0 === v ? p : v,
          g = Object(a.ensureNotNull)(Object(o.useContext)(u.a)),
          w = Object(o.useState)(0),
          _ = w[0],
          T = w[1],
          y = Object(o.useRef)(null),
          C = Object(o.useContext)(h.a);
        return (
          Object(o.useEffect)(function () {
            var e;
            return (
              null === (e = y.current) ||
                void 0 === e ||
                e.focus({ preventScroll: !0 }),
              C.subscribe(g, n),
              Object(s.setFixedBodyState)(!0),
              d.CheckMobile.iOS() &&
                Object(l.disableBodyScroll)(Object(a.ensureNotNull)(y.current)),
              T(g.addDrawer()),
              function () {
                C.unsubscribe(g, n);
                var e = g.removeDrawer();
                d.CheckMobile.iOS() &&
                  Object(l.enableBodyScroll)(
                    Object(a.ensureNotNull)(y.current)
                  ),
                  0 === e && Object(s.setFixedBodyState)(!1);
              }
            );
          }, []),
          i.a.createElement(
            c.a,
            null,
            i.a.createElement(
              "div",
              { className: r(p.wrap, p["position" + t]) },
              _ === g.currentDrawer &&
                i.a.createElement("div", { className: p.backdrop, onClick: n }),
              i.a.createElement(
                "div",
                {
                  className: r(p.drawer, f.drawer, p["position" + t], b),
                  ref: function (e) {
                    y.current = e;
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
    Vike: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 10" width="20" height="10"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M2 1l8 8 8-8"/></svg>';
    },
    Wz44: function (e, t, n) {
      e.exports = {
        container: "container-3_8ayT2Q",
        mirror: "mirror-crJbq8d0",
        background: "background-Q1Fcmxly",
        arrow: "arrow-WcYWFXUn",
      };
    },
    XfUw: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M9 2.13l1.903 3.855.116.236.26.038 4.255.618-3.079 3.001-.188.184.044.259.727 4.237-3.805-2L9 12.434l-.233.122-3.805 2.001.727-4.237.044-.26-.188-.183-3.079-3.001 4.255-.618.26-.038.116-.236L9 2.13z"/></svg>';
    },
    dhVi: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var o = n("nPPD"),
        i = n("v1bN"),
        a = n("HD8h"),
        r = Object(o.a)(i, a);
    },
    fEjm: function (e, t, n) {
      e.exports = {
        favorite: "favorite-2V8VHwKe",
        disabled: "disabled-3ebwimbb",
        active: "active-3pQAvYvT",
        checked: "checked-2bhy04CF",
      };
    },
    gb5g: function (e, t, n) {
      e.exports = {
        button: "button-263WXsg-",
        hover: "hover-6KHfIHhL",
        bg: "bg-1kRv1Pf2",
        icon: "icon-1Y-3MM9F",
        isActive: "isActive-2mI1-NUL",
        isTransparent: "isTransparent-sRmateFl",
        isGrayed: "isGrayed-1kWObWVr",
        isHidden: "isHidden-2VzaskeU",
      };
    },
    hn2c: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16" width="10" height="16"><path d="M.6 1.4l1.4-1.4 8 8-8 8-1.4-1.4 6.389-6.532-6.389-6.668z"/></svg>';
    },
    mkWe: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "a", function () {
          return l;
        });
      var o = n("mrSG"),
        i = n("q1tI"),
        a = n.n(i),
        r = (function (e) {
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
              return a.a.createElement(
                l.Provider,
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
        })(a.a.PureComponent),
        l = a.a.createContext(null);
    },
    nPPD: function (e, t, n) {
      "use strict";
      function o(e, t, n) {
        void 0 === n && (n = {});
        for (
          var o = Object.assign({}, t), i = 0, a = Object.keys(t);
          i < a.length;
          i++
        ) {
          var r = a[i],
            l = n[r] || r;
          l in e && (o[r] = [e[l], t[r]].join(" "));
        }
        return o;
      }
      function i(e, t, n) {
        return void 0 === n && (n = {}), Object.assign({}, e, o(e, t, n));
      }
      n.d(t, "b", function () {
        return o;
      }),
        n.d(t, "a", function () {
          return i;
        });
    },
    pr86: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var o = n("mrSG"),
        i = (n("YFKU"), n("q1tI")),
        a = n("TSYQ"),
        r = n("Iivm"),
        l = n("sg5d"),
        s = n("XfUw"),
        c = n("fEjm"),
        u = {
          add: window.t("Add to favorites"),
          remove: window.t("Remove from favorites"),
        };
      function d(e) {
        var t = e.className,
          n = e.isFilled,
          d = e.isActive,
          h = e.onClick,
          p = Object(o.e)(e, ["className", "isFilled", "isActive", "onClick"]);
        return i.createElement(
          r.a,
          Object(o.a)({}, p, {
            className: a(
              c.favorite,
              "apply-common-tooltip",
              n && c.checked,
              d && c.active,
              t
            ),
            icon: n ? l : s,
            onClick: h,
            title: n ? u.remove : u.add,
          })
        );
      }
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
    sg5d: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" d="M9 1l2.35 4.76 5.26.77-3.8 3.7.9 5.24L9 13l-4.7 2.47.9-5.23-3.8-3.71 5.25-.77L9 1z"/></svg>';
    },
    uJ8n: function (e, t, n) {
      e.exports = {
        wrap: "wrap-1h7U5nKd",
        scrollWrap: "scrollWrap-3gtPS0Fe",
        noScrollBar: "noScrollBar-ieMwbfur",
        content: "content-YhoA_L2m",
        icon: "icon-2xObs8DI",
        scrollBot: "scrollBot-2HHpZNuf",
        scrollTop: "scrollTop-1eXi8ltS",
        isVisible: "isVisible-3zZOL3TO",
        iconWrap: "iconWrap-2Q69rfEO",
        fadeBot: "fadeBot-3JstnoWq",
        fadeTop: "fadeTop-3oJzNyTq",
      };
    },
    uhCe: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var o = n("ASyk"),
        i = {
          SmallHeight: o["small-height-breakpoint"],
          TabletSmall: o["tablet-small-breakpoint"],
          TabletNormal: o["tablet-normal-breakpoint"],
        };
    },
    ybOa: function (e, t, n) {
      e.exports = {
        toggleButton: "toggleButton-3TAD9tll",
        collapsed: "collapsed-2PwwPYYB",
        background: "background-1bSnR2Ey",
        arrow: "arrow-liYbPQ3o",
      };
    },
  },
]);
