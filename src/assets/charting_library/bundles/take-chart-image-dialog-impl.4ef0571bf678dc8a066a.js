(window.webpackJsonp = window.webpackJsonp || []).push([
  ["take-chart-image-dialog-impl"],
  {
    "1O6C": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var o = n("mrSG"),
        i = n("q1tI"),
        r = n("TSYQ"),
        s = n("+EG+"),
        a = n("jAh7"),
        c = n("QpNh"),
        l = n("aYmi"),
        d = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._manager = new a.OverlapManager()),
              (t._handleSlot = function (e) {
                t._manager.setContainer(e);
              }),
              t
            );
          }
          return (
            Object(o.c)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.rounded,
                n = void 0 === t || t,
                a = e.shadowed,
                d = void 0 === a || a,
                p = e.fullscreen,
                u = void 0 !== p && p,
                h = e.darker,
                m = void 0 !== h && h,
                v = e.className,
                f = e.backdrop,
                w = r(
                  v,
                  l.dialog,
                  n && l.rounded,
                  d && l.shadowed,
                  u && l.fullscreen,
                  m && l.darker
                ),
                g = Object(c.a)(this.props),
                _ = this.props.style
                  ? Object(o.a)(
                      Object(o.a)({}, this._createStyles()),
                      this.props.style
                    )
                  : this._createStyles();
              return i.createElement(
                i.Fragment,
                null,
                i.createElement(
                  s.b.Provider,
                  { value: this._manager },
                  f &&
                    i.createElement("div", {
                      onClick: this.props.onClickBackdrop,
                      className: l.backdrop,
                    }),
                  i.createElement(
                    "div",
                    Object(o.a)({}, g, {
                      className: w,
                      style: _,
                      ref: this.props.reference,
                      onFocus: this.props.onFocus,
                      onMouseDown: this.props.onMouseDown,
                      onMouseUp: this.props.onMouseUp,
                      onClick: this.props.onClick,
                      onKeyDown: this.props.onKeyDown,
                      tabIndex: -1,
                    }),
                    this.props.children
                  )
                ),
                i.createElement(s.a, { reference: this._handleSlot })
              );
            }),
            (t.prototype._createStyles = function () {
              var e = this.props,
                t = e.bottom,
                n = e.left,
                o = e.width;
              return {
                bottom: t,
                left: n,
                right: e.right,
                top: e.top,
                zIndex: e.zIndex,
                maxWidth: o,
                height: e.height,
              };
            }),
            t
          );
        })(i.PureComponent);
    },
    "8MIK": function (e, t, n) {
      e.exports = {
        modal: "modal-C2LSTwhC",
        content: "content-tr28wPlV",
        form: "form-2GifjSKe",
        copyForm: "copyForm-1HuPoKA0",
        "input-container": "input-container-2A_bF_CR",
        input: "input-1P9MSPYK",
        copyBtn: "copyBtn-1oB8tEqo",
        shadow: "shadow-2JTdO0Fb",
        actions: "actions-3fKk-h7d",
        link: "link-1alPBTTQ",
        socials: "socials-rht5Uvp-",
        icon: "icon-4wFj5iyU",
        socialsText: "socialsText-2yWFq9iu",
      };
    },
    BHQn: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="#1DA1F2" d="M10.28 22.26c7.55 0 11.68-6.26 11.68-11.67v-.53c.8-.58 1.49-1.3 2.04-2.13-.74.33-1.53.54-2.36.65.85-.5 1.5-1.32 1.8-2.28-.78.48-1.66.81-2.6 1a4.1 4.1 0 00-7 3.74c-3.4-.17-6.43-1.8-8.46-4.29a4.1 4.1 0 001.28 5.48c-.68-.02-1.3-.2-1.86-.5v.05a4.11 4.11 0 003.29 4.02 4 4 0 01-1.85.08 4.1 4.1 0 003.83 2.85A8.23 8.23 0 014 20.43a11.67 11.67 0 006.28 1.83z"/></svg>';
    },
    GyvH: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 15" width="22" height="15"><g fill="none" fillRule="evenodd" stroke-width="2"><path stroke="#757575" d="M6.25 5.812L11 10.087l4.75-4.275M11 9.868V.315"/><path stroke="#ADAEB0" d="M21 10v4H1v-4"/></g><path d="M.008 12.47V9.994H1.96v3.003h18.095V9.988l.958.021.957.021.02 2.46.02 2.458H.008v-2.477z"/><path d="M8.642 9.27a673.518 673.518 0 0 0-2.658-2.396l-.369-.325.657-.716.658-.716 1.49 1.35c.819.741 1.525 1.348 1.57 1.348.054 0 .079-1.143.079-3.716V.382H11.946v3.717c0 2.129.029 3.716.067 3.716.037 0 .738-.607 1.558-1.349l1.491-1.35.508.543c.28.298.57.626.647.73l.14.187-2.632 2.366c-1.447 1.3-2.668 2.372-2.712 2.381-.044.01-1.111-.915-2.37-2.054z"/></svg>';
    },
    QpNh: function (e, t, n) {
      "use strict";
      function o(e) {
        for (
          var t = {}, n = 0, o = Object.entries(e).filter(i);
          n < o.length;
          n++
        ) {
          var r = o[n],
            s = r[0],
            a = r[1];
          t[s] = a;
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
        function r(i) {
          if (!(e > i.timeStamp)) {
            var r = i.target;
            void 0 !== n &&
              null !== t &&
              null !== r &&
              r.ownerDocument === o &&
              (t.contains(r) || n(i));
          }
        }
        return (
          i.click && o.addEventListener("click", r, !1),
          i.mouseDown && o.addEventListener("mousedown", r, !1),
          i.touchEnd && o.addEventListener("touchend", r, !1),
          i.touchStart && o.addEventListener("touchstart", r, !1),
          function () {
            o.removeEventListener("click", r, !1),
              o.removeEventListener("mousedown", r, !1),
              o.removeEventListener("touchend", r, !1),
              o.removeEventListener("touchstart", r, !1);
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
        return r;
      });
      var o = n("mrSG"),
        i = n("8Rai");
      function r(e) {
        var t = e.children,
          n = Object(o.e)(e, ["children"]);
        return t(Object(i.a)(n));
      }
    },
    UJLh: function (e, t, n) {
      e.exports = {
        wrap: "wrap-3axdIL2R",
        container: "container-p3zks2PX",
        backdrop: "backdrop-1qZHPwi_",
        modal: "modal-GUK9cvUQ",
        dialog: "dialog-2Ei1ngXh",
      };
    },
    aYmi: function (e, t, n) {
      e.exports = {
        dialog: "dialog-2APwxL3O",
        rounded: "rounded-tXI9mwGE",
        shadowed: "shadowed-2M13-xZa",
        fullscreen: "fullscreen-2RqU2pqU",
        darker: "darker-2nhdv2oS",
        backdrop: "backdrop-1tKdKmN_",
      };
    },
    fMMV: function (e, t, n) {
      "use strict";
      n.r(t);
      n("YFKU");
      var o = n("Wt0y"),
        i = n("mrSG"),
        r = (n("HbRj"), n("Kxc7")),
        s = n("BHQF");
      function a(e, t, n, o) {
        var a;
        return (
          void 0 === o && (o = {}),
          Object(i.b)(this, void 0, void 0, function () {
            var c, l, d, p, u, h, m, v;
            return Object(i.d)(this, function (f) {
              if (((c = new FormData()), void 0 !== o.previews))
                for (l = 0, d = o.previews; l < d.length; l++)
                  (p = d[l]), c.append("previews[]", p);
              return (
                void 0 !== o.cme && c.append("cme", String(o.cme)),
                void 0 !== o.wl && c.append("wl", String(o.wl)),
                void 0 !== o.onWidget &&
                  c.append("onWidget", String(o.onWidget)),
                o.isReport && c.append("isReport", String(o.isReport)),
                (u = window.urlParams) &&
                  u.locale &&
                  c.append("language", u.locale),
                (h = e.activeChartWidget.value()),
                void 0 !== (m = h.widgetCustomer()) && c.append("customer", m),
                "exchange" === (v = h.properties().childs().timezone.value()) &&
                  (v =
                    (null === (a = h.model().mainSeries().symbolInfo()) ||
                    void 0 === a
                      ? void 0
                      : a.timezone) || v),
                c.append("timezone", v),
                c.append(
                  "images",
                  JSON.stringify(e.images(), function (e, t) {
                    return t instanceof HTMLCanvasElement ? null : t;
                  })
                ),
                (function (e, t, n, o) {
                  void 0 === o && (o = {});
                  Object(i.b)(this, void 0, void 0, function () {
                    var a, c, l;
                    return Object(i.d)(this, function (i) {
                      switch (i.label) {
                        case 0:
                          (a = r.enabled("charting_library_base")
                            ? o.snapshotUrl ||
                              "https://www.tradingview.com/snapshot/"
                            : "/snapshot/"),
                            (i.label = 1);
                        case 1:
                          return (
                            i.trys.push([1, 4, , 5]),
                            [
                              4,
                              Object(s.fetch)(a, {
                                body: e,
                                method: "POST",
                                credentials: "same-origin",
                              }),
                            ]
                          );
                        case 2:
                          return [4, (c = i.sent()).text()];
                        case 3:
                          return (l = i.sent()), c.ok ? t(l) : n(), [3, 5];
                        case 4:
                          return i.sent(), n(), [3, 5];
                        case 5:
                          return [2];
                      }
                    });
                  });
                })(c, t, n, o),
                [2]
              );
            });
          })
        );
      }
      var c,
        l = n("JWMC"),
        d = n("q1tI"),
        p = n("i8i4"),
        u = n("TSYQ"),
        h = n("1O6C"),
        m = n("uqKQ"),
        v = n("RgaO"),
        f = n("UJLh"),
        w = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._containerRef = null),
              (t._handleContainerRef = function (e) {
                t._containerRef = e;
              }),
              t
            );
          }
          return (
            Object(i.c)(t, e),
            (t.prototype.componentDidMount = function () {
              var e;
              this.props.autofocus &&
                (null === (e = this._containerRef) ||
                  void 0 === e ||
                  e.focus());
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.zIndex,
                o = t.onClickOutside,
                r = t.children,
                s = t.className;
              return d.createElement(
                "div",
                {
                  ref: this._handleContainerRef,
                  style: { zIndex: n },
                  "data-dialog-name": this.props["data-dialog-name"],
                  tabIndex: -1,
                },
                d.createElement("div", { className: f.backdrop }),
                d.createElement(
                  "div",
                  { className: f.wrap },
                  d.createElement(
                    "div",
                    { className: f.container },
                    d.createElement(
                      v.a,
                      { mouseDown: !0, touchStart: !0, handler: o },
                      function (t) {
                        return d.createElement(
                          "div",
                          { className: f.modal, ref: t },
                          d.createElement(
                            h.a,
                            Object(i.a)({}, e.props, {
                              className: u(s, f.dialog),
                            }),
                            r
                          )
                        );
                      }
                    )
                  )
                )
              );
            }),
            (t.defaultProps = { width: 500 }),
            t
          );
        })(d.PureComponent),
        g = Object(m.a)(w),
        _ = n("AVTG"),
        y = n("Iivm"),
        b = n("3G1X"),
        E = n("oj21"),
        C = n("jPOK");
      !(function (e) {
        function t(e, t) {
          return "cme" === TradingView.widgetCustomer
            ? t + " from cmegroup.com via @tradingview $" + e
            : "#" + e + " chart " + t + " via https://www.tradingview.com";
        }
        function n(e, t) {
          void 0 === e && (e = "about:blank"),
            void 0 === t && (t = "snapshot_tweet");
          var n = Math.round(screen.width / 2 - 275),
            o = Math.round(screen.height / 2 - 210);
          return window.open(
            e,
            t,
            "scrollbars=yes,resizable=yes,toolbar=no,location=yes,\n\t\t\t\twidth=550,height=420,\n\t\t\t\tleft=" +
              n +
              ",top=" +
              o
          );
        }
        (e.getStatus = t),
          (e.shareSnapshot = function (e) {
            var o = n();
            return {
              onFailure: function () {
                o.close();
              },
              onSuccess: function (n) {
                o.location.href = (function (e, n) {
                  return (
                    "https://twitter.com/intent/tweet?&text=" +
                    encodeURIComponent(
                      t(
                        e,
                        (function (e) {
                          return (
                            window.location.protocol +
                            "//" +
                            window.location.host +
                            "/x/" +
                            e +
                            "/"
                          );
                        })(n)
                      )
                    )
                  );
                })(e, n);
              },
            };
          }),
          (e.shareSnapshotInstantly = function (e, o) {
            n(
              (function (e, n) {
                return (
                  "https://twitter.com/intent/tweet?&text=" +
                  encodeURIComponent(t(e, n))
                );
              })(e, o)
            );
          });
      })(c || (c = {}));
      var O = n("ycI/"),
        x = n("Ialn"),
        k = n("FQhm"),
        S = n("ZjKI"),
        I = n("8MIK"),
        N = n("BHQn"),
        M = n("GyvH"),
        U = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._input = null),
              (n._hideMessages = function () {
                n.setState({ message: "", error: "" });
              }),
              (n._setInput = function (e) {
                n._input = e;
              }),
              (n._select = function () {
                null !== n._input && n._input.select();
              }),
              (n._shareTwitter = function () {
                c.shareSnapshotInstantly(
                  n.props.symbol || "",
                  n.props.imageUrl || ""
                );
              }),
              (n._onClose = function () {
                n.props.onClose && n.props.onClose(), (n._copyBtn = null);
              }),
              (n.state = { message: t.message, error: t.error }),
              n
            );
          }
          return (
            Object(i.c)(t, e),
            (t.prototype.componentDidMount = function () {
              k.subscribe(
                S.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
                this._onClose,
                null
              );
            }),
            (t.prototype.componentWillUnmount = function () {
              k.unsubscribe(
                S.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
                this._onClose,
                null
              );
            }),
            (t.prototype.componentWillReceiveProps = function (e) {
              this.setState({ message: e.message, error: e.error });
            }),
            (t.prototype.componentDidUpdate = function (e) {
              var t = this;
              !e.imageUrl &&
                this.props.imageUrl &&
                setTimeout(function () {
                  null !== t._input && (t._input.select(), t._input.focus());
                });
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props.imageUrl,
                n = this.state,
                o = n.message,
                i = n.error,
                r = !t && !this.props.message && !this.props.error,
                s = u(I.copyBtn, !Object(x.isRtl)() && I.shadow);
              return d.createElement(
                g,
                {
                  isOpened: this.props.isOpened,
                  className: I.modal,
                  onClickOutside: this._onClose,
                  "data-dialog-type": "take-snapshot-modal",
                },
                d.createElement(
                  _.b,
                  { onClose: this._onClose },
                  window.t("Image URL")
                ),
                o &&
                  d.createElement(_.c, {
                    text: o,
                    isError: !1,
                    onClickOutside: this._hideMessages,
                  }),
                i &&
                  d.createElement(_.c, {
                    text: i,
                    isError: !0,
                    onClickOutside: this._hideMessages,
                  }),
                d.createElement(
                  _.a,
                  null,
                  d.createElement(O.a, { keyCode: 27, handler: this._onClose }),
                  d.createElement(
                    "div",
                    { className: I.content },
                    r && d.createElement(C.a, { size: "mini" }),
                    d.createElement(
                      "div",
                      {
                        className: I.form,
                        style: { visibility: t ? "visible" : "hidden" },
                      },
                      d.createElement(
                        "div",
                        { className: I.copyForm },
                        d.createElement(b.b, {
                          reference: this._setInput,
                          readonly: !0,
                          stretch: !0,
                          value: t || "",
                          onClick: this._select,
                          onFocus: this._select,
                          className: I["input-container"],
                          inputClassName: I.input,
                          removeRoundBorder: 6,
                          highlightRemoveRoundBorder: 6,
                        }),
                        d.createElement(
                          "div",
                          {
                            ref: function (t) {
                              return t && e._setupClipboard(t);
                            },
                            "data-clipboard-text": t,
                            className: s,
                          },
                          d.createElement(
                            E.a,
                            { type: "primary", theme: "ghost" },
                            window.t("Copy")
                          )
                        )
                      ),
                      d.createElement(
                        "div",
                        { className: I.actions },
                        d.createElement(
                          "a",
                          { className: I.link, href: t, target: "_blank" },
                          d.createElement(y.a, { icon: M }),
                          d.createElement("span", null, window.t("Save image"))
                        ),
                        d.createElement(
                          "span",
                          { className: I.socials, onClick: this._shareTwitter },
                          d.createElement(y.a, { className: I.icon, icon: N }),
                          d.createElement(
                            "span",
                            { className: I.socialsText },
                            window.t("Tweet")
                          )
                        )
                      )
                    )
                  )
                )
              );
            }),
            (t.prototype._setupClipboard = function (e) {
              var t = this;
              this._copyBtn ||
                ((this._copyBtn = e),
                n
                  .e("clipboard")
                  .then(
                    function (o) {
                      var i = new (n("sxGJ"))(e);
                      i.on("success", function () {
                        TradingView.trackEvent("GUI", "Copied Image Link"),
                          t.setState({
                            message: window.t("Copied to clipboard"),
                          });
                      }),
                        i.on("error", function () {
                          t.setState({
                            message: window.t(
                              "Sorry, the Copy Link button doesn't work in your browser. Please select the link and copy it manually."
                            ),
                          });
                        });
                    }.bind(null, n)
                  )
                  .catch(void 0));
            }),
            (t.defaultProps = { imageUrl: "" }),
            t
          );
        })(d.Component);
      function j(e, t, n) {
        var i;
        function s(e) {
          i ||
            ((i = document.createElement("div")), document.body.appendChild(i)),
            p.render(d.createElement(U, e), i);
        }
        function c() {
          s({ isOpened: !1 });
        }
        void 0 === t && (t = {}),
          Object(l.trackEvent)("GUI", "Get image button"),
          s({ isOpened: !1 }),
          a(
            e,
            function (i) {
              n && n(i);
              s({
                isOpened: !0,
                onClose: c,
                imageUrl: r.enabled("charting_library_base")
                  ? (t.snapshotUrl ? "" : "https://www.tradingview.com/x/") + i
                  : Object(o.isProd)()
                  ? "https://www.tradingview.com/x/" + i + "/"
                  : window.location.protocol +
                    "//" +
                    window.location.host +
                    "/x/" +
                    i +
                    "/",
                symbol: e.activeChartWidget.value().symbolProperty().value(),
              });
            },
            function () {
              s({
                isOpened: !0,
                onClose: c,
                error: window.t("URL cannot be received"),
              });
            },
            {
              onWidget: e.onWidget,
              snapshotUrl: t.snapshotUrl,
              onInvalidSnapshotImage: c,
            }
          ),
          s({ isOpened: !0, onClose: c });
      }
      function P(e, t, n) {
        a(
          e,
          function (e) {
            n && n(e);
          },
          function () {
            console.warn(window.t("Error while trying to create snapshot."));
          },
          { snapshotUrl: t.snapshotUrl }
        );
      }
      n.d(t, "getImageOfChart", function () {
        return j;
      }),
        n.d(t, "getImageOfChartSilently", function () {
          return P;
        });
    },
    jAh7: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "OverlapManager", function () {
          return r;
        }),
        n.d(t, "getRootOverlapManager", function () {
          return a;
        });
      var o = n("Eyy1"),
        i = (function () {
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
        r = (function () {
          function e(e) {
            void 0 === e && (e = document),
              (this._storage = new i()),
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
                var i = this._container.childNodes.length;
                if (t.index >= i) this._container.appendChild(o);
                else if (t.index <= 0)
                  this._container.insertBefore(o, this._container.firstChild);
                else {
                  var r = this._container.childNodes[t.index];
                  this._container.insertBefore(o, r);
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
        var n = new r(e),
          i = (function (e) {
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
        return s.set(i, n), n.setContainer(i), e.body.appendChild(i), n;
      }
    },
    jPOK: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var o = n("q1tI"),
        i = n("TSYQ"),
        r = n("Owlf");
      n("SzKR");
      function s(e) {
        var t = i(
          "tv-spinner",
          "tv-spinner--shown",
          "tv-spinner--size_" + (e.size || r.a)
        );
        return o.createElement(
          "div",
          { className: t, style: e.style, role: "progressbar" },
          o.createElement(
            "div",
            { className: "tv-spinner__spinner-layer" },
            o.createElement("div", {
              className: "tv-spinner__background tv-spinner__width_element",
            }),
            o.createElement("div", {
              className:
                "tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--left",
            }),
            o.createElement("div", {
              className:
                "tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--right",
            })
          )
        );
      }
    },
    uqKQ: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var o = n("mrSG"),
        i = n("q1tI"),
        r = n("AiMB");
      function s(e) {
        return (function (t) {
          function n() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(o.c)(n, t),
            (n.prototype.render = function () {
              var t = this.props,
                n = t.isOpened,
                s = t.root;
              if (!n) return null;
              var a = i.createElement(
                e,
                Object(o.a)({}, this.props, { zIndex: 150 })
              );
              return "parent" === s ? a : i.createElement(r.a, null, a);
            }),
            n
          );
        })(i.PureComponent);
      }
    },
  },
]);
