(window.webpackJsonp = window.webpackJsonp || []).push([
  ["currency-label-menu"],
  {
    "9dlw": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return p;
      });
      var o = n("mrSG"),
        r = n("q1tI"),
        i = n.n(r),
        s = n("i8i4"),
        a = n.n(s),
        c = (n("EsMY"), n("AiMB")),
        u = n("DTHj"),
        l = n("X0gx"),
        d = n("8Rai");
      function p(e) {
        var t = e.controller,
          n = e.children,
          s = e.isOpened,
          p = e.closeOnClickOutside,
          h = void 0 === p || p,
          f = e.doNotCloseOn,
          v = e.onClickOutside,
          m = e.onClose,
          b = Object(o.e)(e, [
            "controller",
            "children",
            "isOpened",
            "closeOnClickOutside",
            "doNotCloseOn",
            "onClickOutside",
            "onClose",
          ]),
          g = Object(r.useContext)(l.a),
          w = Object(d.a)({
            handler: function (e) {
              v && v(e);
              if (!h) return;
              if (f && e.target instanceof Node) {
                var t = a.a.findDOMNode(f);
                if (t instanceof Node && t.contains(e.target)) return;
              }
              m();
            },
            mouseDown: !0,
            touchStart: !0,
          });
        return s
          ? i.a.createElement(
              c.a,
              {
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                pointerEvents: "none",
              },
              i.a.createElement(
                "span",
                { ref: w, style: { pointerEvents: "auto" } },
                i.a.createElement(
                  u.a,
                  Object(o.a)({}, b, {
                    isOpened: s,
                    onClose: m,
                    onScroll: function (t) {
                      var n = e.onScroll;
                      n && n(t);
                      t.stopPropagation();
                    },
                    customCloseDelegate: g,
                    ref: t,
                  }),
                  n
                )
              )
            )
          : null;
      }
    },
    FO7Z: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "CurrencyLabelMenu", function () {
          return l;
        }),
        n.d(t, "showCurrencyLabelMenu", function () {
          return d;
        });
      var o = n("mrSG"),
        r = n("q1tI"),
        i = n("i8i4"),
        s = n("9dlw"),
        a = n("N5tr"),
        c = n("7KDR"),
        u = n("Gwk6"),
        l = (function (e) {
          function t(t) {
            return e.call(this, t) || this;
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.render = function () {
              return r.createElement(
                s.a,
                {
                  isOpened: !0,
                  onClose: this.props.onClose,
                  doNotCloseOn: this.props.element,
                  position: this.props.position,
                },
                this._menuItems()
              );
            }),
            (t.prototype._menuItems = function () {
              return this.props.actions.map(function (e, t) {
                return e instanceof c.Separator
                  ? r.createElement("div", {
                      key: "separator" + t,
                      className: u.currencyLabelMenuSeparator,
                    })
                  : r.createElement(a.b, {
                      key: e.getLabel(),
                      label: e.getLabel(),
                      isActive: e.isChecked(),
                      onClick: function () {
                        return e.execute();
                      },
                    });
              });
            }),
            t
          );
        })(r.PureComponent);
      function d(e, t, n) {
        var o = document.createElement("span");
        (o.className = "currency-label-menu-wrapper"),
          document.body.appendChild(o);
        var s = function () {
            null !== o &&
              (i.unmountComponentAtNode(o),
              document.body.removeChild(o),
              (o = null));
          },
          a = { actions: e, position: t, element: n, onClose: s };
        return (
          i.render(r.createElement(l, a), o),
          {
            close: s,
            isOpened: function () {
              return null !== o;
            },
          }
        );
      }
    },
    Gwk6: function (e, t, n) {
      e.exports = {
        currencyLabelMenuSeparator: "currencyLabelMenuSeparator-13pkukWx",
      };
    },
    N5tr: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      }),
        n.d(t, "b", function () {
          return f;
        });
      var o = n("mrSG"),
        r = n("q1tI"),
        i = n.n(r),
        s = n("TSYQ"),
        a = n("tWVy"),
        c = n("JWMC"),
        u = n("QpNh"),
        l = n("v1bN"),
        d = l;
      function p(e) {
        var t = e.reference,
          n = Object(o.e)(e, ["reference"]),
          r = Object(o.a)(Object(o.a)({}, n), { ref: t });
        return i.a.createElement(e.href ? "a" : "div", r);
      }
      function h(e) {
        e.stopPropagation();
      }
      function f(e) {
        var t,
          n,
          d,
          f = e.className,
          v = e.title,
          m = e.labelRowClassName,
          b = e.shortcut,
          g = e.forceShowShortcuts,
          w = e.icon,
          O = e.isActive,
          y = e.isDisabled,
          E = e.isHovered,
          C = e.appearAsDisabled,
          _ = e.label,
          x = e.link,
          k = e.showToolboxOnHover,
          N = e.target,
          j = e.toolbox,
          M = e.reference,
          S = e.onMouseOut,
          L = e.onMouseOver,
          I = e.theme,
          D = void 0 === I ? l : I,
          W = Object(u.a)(e),
          A = Object(r.useRef)(null);
        return i.a.createElement(
          p,
          Object(o.a)({}, W, {
            className: s(
              f,
              D.item,
              w && D.withIcon,
              ((t = {}),
              (t[D.isActive] = O),
              (t[D.isDisabled] = y || C),
              (t[D.hovered] = E),
              t)
            ),
            title: v,
            href: x,
            target: N,
            reference: function (e) {
              (A.current = e), M && M(e);
            },
            onClick: function (t) {
              var n = e.dontClosePopup,
                o = e.onClick,
                r = e.onClickArg,
                i = e.trackEventObject;
              if (y) return;
              i && Object(c.trackEvent)(i.category, i.event, i.label);
              o && o(r, t);
              n || Object(a.b)();
            },
            onContextMenu: function (t) {
              var n = e.trackEventObject,
                o = e.trackRightClick;
              n &&
                o &&
                Object(c.trackEvent)(
                  n.category,
                  n.event,
                  n.label + "_rightClick"
                );
            },
            onMouseUp: function (t) {
              var n = e.trackEventObject,
                o = e.trackMouseWheelClick;
              if (1 === t.button && x && n) {
                var r = n.label;
                o && (r += "_mouseWheelClick"),
                  Object(c.trackEvent)(n.category, n.event, r);
              }
            },
            onMouseOver: L,
            onMouseOut: S,
          }),
          void 0 !== w &&
            i.a.createElement("div", {
              className: D.icon,
              dangerouslySetInnerHTML: { __html: w },
            }),
          i.a.createElement(
            "div",
            { className: s(D.labelRow, m) },
            i.a.createElement("div", { className: D.label }, _)
          ),
          (void 0 !== b || g) &&
            i.a.createElement(
              "div",
              { className: D.shortcut },
              (d = b) && d.split("+").join(" + ")
            ),
          void 0 !== j &&
            i.a.createElement(
              "div",
              {
                onClick: h,
                className: s(D.toolbox, ((n = {}), (n[D.showOnHover] = k), n)),
              },
              j
            )
        );
      }
    },
    QpNh: function (e, t, n) {
      "use strict";
      function o(e) {
        for (
          var t = {}, n = 0, o = Object.entries(e).filter(r);
          n < o.length;
          n++
        ) {
          var i = o[n],
            s = i[0],
            a = i[1];
          t[s] = a;
        }
        return t;
      }
      function r(e) {
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
    jAh7: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "OverlapManager", function () {
          return i;
        }),
        n.d(t, "getRootOverlapManager", function () {
          return a;
        });
      var o = n("Eyy1"),
        r = (function () {
          function e() {
            this._storage = [];
          }
          return (
            (e.prototype.add = function (e) {
              this._storage.push(e);
            }),
            (e.prototype.remove = function (e) {
              this._storage = this._storage.filter(function (t) {
                return e !== t;
              });
            }),
            (e.prototype.has = function (e) {
              return this._storage.includes(e);
            }),
            (e.prototype.getItems = function () {
              return this._storage;
            }),
            e
          );
        })(),
        i = (function () {
          function e(e) {
            void 0 === e && (e = document),
              (this._storage = new r()),
              (this._windows = new Map()),
              (this._index = 0),
              (this._document = e),
              (this._container = e.createDocumentFragment());
          }
          return (
            (e.prototype.setContainer = function (e) {
              var t = this._container,
                n = null === e ? this._document.createDocumentFragment() : e;
              !(function (e, t) {
                Array.from(e.childNodes).forEach(function (e) {
                  e.nodeType === Node.ELEMENT_NODE && t.appendChild(e);
                });
              })(t, n),
                (this._container = n);
            }),
            (e.prototype.registerWindow = function (e) {
              this._storage.has(e) || this._storage.add(e);
            }),
            (e.prototype.ensureWindow = function (e, t) {
              void 0 === t && (t = { position: "fixed", direction: "normal" });
              var n = this._windows.get(e);
              if (void 0 !== n) return n;
              this.registerWindow(e);
              var o = this._document.createElement("div");
              if (
                ((o.style.position = t.position),
                (o.style.zIndex = this._index.toString()),
                (o.dataset.id = e),
                void 0 !== t.index)
              ) {
                var r = this._container.childNodes.length;
                if (t.index >= r) this._container.appendChild(o);
                else if (t.index <= 0)
                  this._container.insertBefore(o, this._container.firstChild);
                else {
                  var i = this._container.childNodes[t.index];
                  this._container.insertBefore(o, i);
                }
              } else
                "reverse" === t.direction
                  ? this._container.insertBefore(o, this._container.firstChild)
                  : this._container.appendChild(o);
              return this._windows.set(e, o), ++this._index, o;
            }),
            (e.prototype.unregisterWindow = function (e) {
              this._storage.remove(e);
              var t = this._windows.get(e);
              void 0 !== t &&
                (null !== t.parentElement && t.parentElement.removeChild(t),
                this._windows.delete(e));
            }),
            (e.prototype.getZindex = function (e) {
              var t = this.ensureWindow(e);
              return parseInt(t.style.zIndex || "0");
            }),
            (e.prototype.moveToTop = function (e) {
              this.getZindex(e) !== this._index &&
                (this.ensureWindow(e).style.zIndex = (++this
                  ._index).toString());
            }),
            (e.prototype.removeWindow = function (e) {
              this.unregisterWindow(e);
            }),
            e
          );
        })(),
        s = new WeakMap();
      function a(e) {
        void 0 === e && (e = document);
        var t = e.getElementById("overlap-manager-root");
        if (null !== t) return Object(o.ensureDefined)(s.get(t));
        var n = new i(e),
          r = (function (e) {
            var t = e.createElement("div");
            return (
              (t.style.position = "absolute"),
              (t.style.zIndex = (150).toString()),
              (t.style.top = "0px"),
              (t.style.left = "0px"),
              (t.id = "overlap-manager-root"),
              t
            );
          })(e);
        return s.set(r, n), n.setContainer(r), e.body.appendChild(r), n;
      }
    },
    v1bN: function (e, t, n) {
      e.exports = {
        "tablet-small-breakpoint": "screen and (max-width: 419px)",
        item: "item-2xPVYue0",
        hovered: "hovered-1uf45E05",
        isDisabled: "isDisabled-1wLqKupj",
        isActive: "isActive-2j-GhQs_",
        shortcut: "shortcut-30pveiCO",
        toolbox: "toolbox-3ulPxfe-",
        withIcon: "withIcon-1xBjf-oB",
        icon: "icon-2Qm7YIcz",
        labelRow: "labelRow-3Q0rdE8-",
        label: "label-3Xqxy756",
        showOnHover: "showOnHover-1q6ySzZc",
      };
    },
  },
]);
