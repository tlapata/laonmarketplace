(window.webpackJsonp = window.webpackJsonp || []).push([
  ["floating-toolbars"],
  {
    "0ZwQ": function (t, e, o) {
      "use strict";
      var i = o("P5fv"),
        n = o.n(i),
        r = (o("EsMY"), o("Eyy1")),
        s = o("9uLv"),
        a = o("Vdly"),
        l = o("aIyQ"),
        d = o.n(l),
        c = o("hY0g"),
        p = o.n(c),
        u = o("A6WY"),
        h = o("mrSG"),
        g = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(h.c)(e, t),
            (e.prototype._startLoading = function () {
              return o
                .e("hammerjs")
                .then(o.bind(null, "be1f"))
                .then(function (t) {
                  return t.HammerJS;
                });
            }),
            e
          );
        })(o("cZRT").a),
        _ = o("qFKp"),
        v = o("VVxS"),
        f = o("yB98");
      o("PwLo");
      o.d(e, "a", function () {
        return x;
      });
      var y = _.CheckMobile.iOS();
      function b() {
        return Object(r.ensureNotNull)(window.containerElement);
      }
      function w() {
        if (!y) return window.innerWidth;
        var t = b(),
          e = getComputedStyle(t),
          o = (e.paddingLeft && parseFloat(e.paddingLeft)) || 0,
          i = (e.paddingRight && parseFloat(e.paddingRight)) || 0;
        return t.clientWidth - o - i;
      }
      function m() {
        if (!y) return window.innerHeight;
        var t = b(),
          e = getComputedStyle(t),
          o = (e.paddingTop && parseFloat(e.paddingTop)) || 0,
          i = (e.paddingBottom && parseFloat(e.paddingBottom)) || 0;
        return t.clientHeight - o - i;
      }
      var C =
          '<div class="tv-floating-toolbar i-closed i-hidden">' +
          (Modernizr.mobiletouch
            ? '<div class="tv-floating-toolbar__drag-ext js-drag"></div>'
            : "") +
          '<div class="tv-floating-toolbar__widget-wrapper"><div class="tv-floating-toolbar__drag js-drag">' +
          f +
          '</div><div class="tv-floating-toolbar__content js-content"></div></div></div>',
        x = (function () {
          function t(e) {
            (this._widget = document.createElement("div")),
              (this._isVertical = !1),
              (this._hiddingTimeoutId = null),
              (this._visibility = new p.a(!1)),
              (this._windowResizeListener = this._onWindowResize.bind(this)),
              (this._reorderedDelegate = new d.a()),
              (this._responsiveResizeFunction = null),
              t._toolbars.push(this),
              (this._options = e),
              (this._widget = n()(C).get(0)),
              (this._content = this._widget
                .getElementsByClassName("js-content")
                .item(0)),
              this._setZIndex(t._startZIndex + t._toolbars.length - 1),
              this._options.addClass &&
                (this._widget.className += " " + this._options.addClass),
              this._options.layout &&
                "auto" !== this._options.layout &&
                ((this._isVertical = "vertical" === this._options.layout),
                this._updateLayoutType(),
                this._updateAxisOption());
          }
          return (
            (t.prototype.destroy = function () {
              this.hide(!0),
                t._toolbars.splice(t._toolbars.indexOf(this), 1),
                document.body.contains(this._widget) &&
                  document.body.removeChild(this._widget),
                (this._widget.innerHTML = ""),
                (this._responsiveResizeFunction = null);
            }),
            (t.prototype.setResponsiveResizeFunc = function (t) {
              this._responsiveResizeFunction = t;
            }),
            (t.prototype.isVisible = function () {
              return this._visibility.value();
            }),
            (t.prototype.visibility = function () {
              return this._visibility.readonly();
            }),
            (t.prototype.isVertical = function () {
              return this._isVertical;
            }),
            (t.prototype.show = function () {
              var t = this;
              this.isVisible() ||
                (document.body.contains(this._widget) ||
                  (this._init(), document.body.appendChild(this._widget)),
                this._setHiddingTimeout(null),
                window.addEventListener("resize", this._windowResizeListener),
                this.raise(),
                this._visibility.setValue(!0),
                this._widget.classList.contains("i-hidden")
                  ? (this._widget.classList.remove("i-hidden"),
                    setTimeout(function () {
                      t.isVisible() && t._widget.classList.remove("i-closed");
                    }))
                  : this._widget.classList.remove("i-closed"),
                this._onWindowResize());
            }),
            (t.prototype.hide = function (t) {
              var e = this;
              if ((void 0 === t && (t = !1), this.isVisible())) {
                var o = this._widget.classList.contains("i-closed");
                if (
                  (this._widget.classList.add("i-closed"),
                  this._visibility.setValue(!1),
                  t || o)
                )
                  this._setHiddingTimeout(null),
                    this._widget.classList.add("i-hidden");
                else {
                  var i = setTimeout(function () {
                    e._setHiddingTimeout(null),
                      e._widget.classList.add("i-hidden");
                  }, this.hideDuration());
                  this._setHiddingTimeout(i);
                }
                window.removeEventListener(
                  "resize",
                  this._windowResizeListener
                );
              }
            }),
            (t.prototype.raise = function () {
              t._toolbars.length + t._startZIndex !== this._zIndex() &&
                (t._toolbars.splice(t._toolbars.indexOf(this), 1),
                t._toolbars.push(this),
                t._updateAllZIndexes());
            }),
            (t.prototype.hideDuration = function () {
              return 0.75 * s.dur;
            }),
            (t.prototype.addWidget = function (t, e) {
              void 0 === e && (e = {});
              var o = this.widgetsCount();
              if (
                (void 0 === e.index && (e.index = o),
                e.index < 0 || e.index > o)
              )
                throw new Error("Index must be in [0, " + o + "]");
              var i = document.createElement("div");
              (i.className = "tv-floating-toolbar__widget js-widget"),
                i.appendChild(t);
              var n =
                e.index === o ? null : this._content.childNodes.item(e.index);
              this._content.insertBefore(i, n), this._onWindowResize();
            }),
            (t.prototype.removeWidget = function (t) {
              var e = this._findWrapperForWidget(t);
              e && (this._content.removeChild(e), this._onWindowResize());
            }),
            (t.prototype.widgetsCount = function () {
              return this._content.childNodes.length;
            }),
            (t.prototype.showWidget = function (t) {
              var e = this._findWrapperForWidget(t);
              e && e.classList.remove("i-hidden");
            }),
            (t.prototype.hideWidget = function (t) {
              var e = this._findWrapperForWidget(t);
              e && e.classList.add("i-hidden");
            }),
            (t.prototype.removeWidgets = function () {
              for (; this._content.firstChild; )
                this._content.removeChild(this._content.firstChild);
              this._onWindowResize();
            }),
            (t.prototype.onWidgetsReordered = function () {
              return this._reorderedDelegate;
            }),
            (t.prototype.onContextMenu = function (t) {
              var e = this;
              Modernizr.mobiletouch
                ? new g().load().then(function (o) {
                    var i = new o(e._widget);
                    i.get("press").set({ time: 500 }),
                      i.on("press", function (o) {
                        e._preventWidgetTouchEndEvent(), t(o.srcEvent);
                      });
                  })
                : this._widget.addEventListener("contextmenu", t);
            }),
            (t.prototype._determineCurrentLayoutVertical = function (t) {
              var e = this._isVertical ? t.height : t.width;
              return w() < e;
            }),
            (t.prototype._getWidget = function () {
              return this._widget;
            }),
            (t.prototype._findWrapperForWidget = function (t) {
              for (
                var e = this._content.getElementsByClassName("js-widget"),
                  o = 0;
                o < e.length;
                ++o
              ) {
                var i = e.item(o);
                if (i.contains(t)) return i;
              }
              return null;
            }),
            (t.prototype._onVerticalChanged = function (t, e) {}),
            (t.prototype._setHiddingTimeout = function (t) {
              null !== this._hiddingTimeoutId &&
                clearTimeout(this._hiddingTimeoutId),
                (this._hiddingTimeoutId = t);
            }),
            (t.prototype._preventWidgetTouchEndEvent = function () {
              var t = this,
                e = function (o) {
                  o.preventDefault(),
                    t._widget.removeEventListener("touchend", e);
                };
              this._widget.addEventListener("touchend", e);
            }),
            (t.prototype._updateLayoutType = function () {
              this._widget.classList.toggle("i-vertical", this._isVertical);
            }),
            (t.prototype._updateAxisOption = function () {
              if (this._options.dragOnlyInsideToolbar) {
                var t = this._isVertical ? "y" : "x";
                Object(u.lazyJqueryUI)(n()(this._content)).sortable(
                  "option",
                  "axis",
                  t
                );
              }
            }),
            (t.prototype._onWindowResize = function () {
              if ("auto" === (this._options.layout || "auto")) {
                var t = this._isVertical,
                  e = this._getCorrectedWidgetRect();
                (this._isVertical = this._determineCurrentLayoutVertical(e)),
                  this._updateLayoutType(),
                  t !== this._isVertical &&
                    (this._onVerticalChanged(this._isVertical, t),
                    this._updateAxisOption());
              }
              this._checkPosition(), this._resizeResponsive();
            }),
            (t.prototype._resizeResponsive = function () {
              if (null !== this._responsiveResizeFunction) {
                var t = this._options.layout || "auto";
                "auto" === t &&
                  (t = this._isVertical ? "vertical" : "horizontal");
                var e =
                    "vertical" === t
                      ? this._widget.clientHeight
                      : this._widget.clientWidth,
                  o = ("vertical" === t ? m() : w()) - e;
                this._responsiveResizeFunction(e, o, t);
              }
            }),
            (t.prototype._checkPosition = function () {
              var t = this._getCorrectedWidgetRect(),
                e = { left: t.left, top: t.top };
              this._correctPosition(e),
                (t.left === e.left && t.top === e.top) ||
                  ((this._widget.style.left = e.left + "px"),
                  (this._widget.style.top = e.top + "px"));
            }),
            (t.prototype._correctPosition = function (t) {
              var e = this._getCorrectedWidgetRect();
              t.left + e.width > w() && (t.left = Math.max(0, w() - e.width)),
                t.top + e.height > m() && (t.top = Math.max(0, m() - e.height)),
                (t.left = Math.max(0, t.left)),
                (t.top = Math.max(0, t.top));
            }),
            (t.prototype._setZIndex = function (t) {
              this._widget.style.zIndex = String(t);
            }),
            (t.prototype._zIndex = function () {
              return Number(this._widget.style.zIndex);
            }),
            (t.prototype._loadPosition = function () {
              var t;
              if ("device" === this._options.positionStorageType) {
                var e = v.TVLocalStorage.getItem(
                  this._options.positionSettingsKey
                );
                t = null !== e ? JSON.parse(e) : this._options.defaultPosition;
              } else
                t = Object(a.getJSON)(
                  this._options.positionSettingsKey,
                  this._options.defaultPosition
                );
              (this._widget.style.left = Math.round(t.left) + "px"),
                (this._widget.style.top = Math.round(t.top) + "px"),
                this._onWindowResize();
            }),
            (t.prototype._savePosition = function () {
              var t = this._widget.getBoundingClientRect();
              if ("device" === this._options.positionStorageType)
                try {
                  v.TVLocalStorage.setItem(
                    this._options.positionSettingsKey,
                    JSON.stringify({ left: t.left, top: t.top })
                  );
                } catch (e) {}
              else
                Object(a.setJSON)(this._options.positionSettingsKey, {
                  left: t.left,
                  top: t.top,
                });
            }),
            (t.prototype._init = function () {
              this._loadPosition(),
                Object(u.lazyJqueryUI)(n()(this._widget)).draggable({
                  containment: "window",
                  drag: this._onDragEvent.bind(this),
                  handle: ".js-drag",
                  stop: this._savePosition.bind(this),
                }),
                this._options.allowSortable && this._initSortable(),
                this._widget.addEventListener(
                  Modernizr.mobiletouch ? "touchstart" : "mousedown",
                  this.raise.bind(this)
                );
            }),
            (t.prototype._onDragEvent = function (t, e) {
              this._correctPosition(e.position);
            }),
            (t.prototype._initSortable = function () {
              var t = this,
                e = -1;
              Object(u.lazyJqueryUI)(n()(this._content)).sortable({
                start: function (t, o) {
                  e = o.item.index();
                },
                stop: function (o, i) {
                  var n = i.item.index();
                  e !== n && t._reorderedDelegate.fire(e, n);
                },
                tolerance: "pointer",
                distance: 5,
                containment: !!this._options.dragOnlyInsideToolbar && "parent",
                scroll: !1,
                placeholder: "sortable-placeholder",
                forcePlaceholderSize: !0,
              }),
                this._updateAxisOption();
            }),
            (t.prototype._getCorrectedWidgetRect = function () {
              var t = this._widget.getBoundingClientRect();
              if (this._widget.classList.contains("i-closed")) {
                var e = t.width * (1 / 0.925 - 1),
                  o = t.height * (1 / 0.925 - 1);
                return {
                  bottom: t.bottom + o / 2,
                  height: t.height + o,
                  left: t.left - e / 2,
                  right: t.right + e / 2,
                  top: t.top - o / 2,
                  width: t.width + e,
                };
              }
              return t;
            }),
            (t._updateAllZIndexes = function () {
              t._toolbars.forEach(function (e, o) {
                e._setZIndex(t._startZIndex + o);
              });
            }),
            (t._startZIndex = 20),
            (t._toolbars = []),
            t
          );
        })();
    },
    "2JFs": function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38"><path d="M0 0v38h38V0H0zm7 29h24v4H7v-4z" class="bg"/><path d="M24.06 17.94L15.123 9l-1.41 1.41 2.38 2.38-5.15 5.15a1.49 1.49 0 0 0 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12zM12.713 19l4.79-4.79L22.29 19h-9.58zM26.5 20.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5z" class="icon"/></svg>';
    },
    "6+QM": function (t, e, o) {
      "use strict";
      o.r(e),
        o.d(e, "CollectibleWidthPropertyUndoWrapper", function () {
          return r;
        });
      var i = o("mrSG"),
        n = o("tc+8"),
        r = (function (t) {
          function e(e, o, i) {
            var n = t.call(this) || this;
            return (
              (n._baseProperty = e), (n._undoModel = o), (n._undoText = i), n
            );
          }
          return (
            Object(i.c)(e, t),
            (e.prototype.destroy = function () {
              this._baseProperty.destroy();
            }),
            (e.prototype.value = function () {
              return this._baseProperty.value();
            }),
            (e.prototype.setValue = function (t) {
              var e = this;
              this._baseProperty.setValue(t, void 0, {
                applyValue: function (t, o) {
                  return e._undoModel.setProperty(t, o, e._undoText);
                },
              });
            }),
            e
          );
        })(o.n(n).a);
    },
    "9On3": function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 6" width="22" height="6"><path d="M1.5 2a.5.5 0 0 0 0 1H3V2H1.5zM4 2v1h2V2H4zm3 0v1h2V2H7zm3 0v1h2V2h-2zm3 0v1h2V2h-2zm3 0v1h2V2h-2zm3 0v1h1.5a.5.5 0 0 0 0-1H19z"/></svg>';
    },
    ADFN: function (t, e, o) {},
    BiGZ: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 6" width="22" height="6"><path d="M2 2.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zM21 2.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0z"/><path d="M1.5 2H19v1H1.5z"/></svg>';
    },
    BsMi: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 6" width="22" height="6"><path d="M22 2.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zM4 2.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM13 2.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0z"/><path d="M3 2h18.5v1H3z"/></svg>';
    },
    HKvk: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38"><path d="M0 0v38h38V0H0zm7 29h24v4H7v-4z" class="bg"/><path d="M24.748 16l-3.75-3.748-9.998 10V26h3.75l9.998-10zm2.96-2.96a.996.996 0 0 0 0-1.408l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.96 1.96 3.75 3.75 1.96-1.96z" class="icon"/></svg>';
    },
    Kjbl: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38"><path d="M0 0v38h38V0H0zm7 29h24v4H7v-4z" class="bg"/><path d="M23.094 25.5L22 22.17h-5.904l-1.17 3.33H12.5l6.446-16h.574l5.98 16h-2.405zM19.13 13.637l-2.46 6.95h4.712l-2.252-6.95z" class="icon"/></svg>';
    },
    NDCK: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 6" width="22" height="6"><path d="M2 1a2 2 0 0 0 0 4h18a2 2 0 0 0 0-4H2z"/></svg>';
    },
    Nz7V: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 6" width="22" height="6"><path d="M1.5 2a.5.5 0 0 0 0 1H5V2zM7 2v1h3V2zm5 0v1h3V2zm5 0v1h3.5a.5.5 0 0 0 0-1z"/></svg>';
    },
    PwLo: function (t, e, o) {},
    RRhU: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 13"><path d="M1 11.571C1 12.357 1.6 13 2.333 13h5.333c.733 0 1.333-.643 1.333-1.429V3h-8v8.571zM8.5 1L6.786 0H3.215L1.501 1h-1.5v1h10V1h-1.5z"/></svg>';
    },
    RsxI: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16"><path d="M15.09 6.857s-.571 0-.724-.533c-.114-.457-.305-.876-.533-1.295-.229-.495.152-.876.152-.876l.571-.571c.229-.229.229-.61 0-.876l-.762-.762c-.229-.229-.61-.229-.876 0l-.571.571s-.381.381-.876.152c-.419-.229-.838-.419-1.295-.533-.533-.152-.533-.724-.533-.724v-.8a.602.602 0 0 0-.61-.61H7.966a.602.602 0 0 0-.61.61v.8s0 .571-.533.724c-.457.114-.876.305-1.295.533-.495.229-.876-.152-.876-.152l-.571-.571c-.229-.229-.61-.229-.876 0l-.762.762c-.229.229-.229.61 0 .876l.571.571s.381.381.152.876c-.229.419-.419.838-.533 1.295-.152.495-.724.533-.724.533h-.8a.602.602 0 0 0-.61.61v1.067c0 .343.267.61.61.61h.8s.571 0 .724.533c.114.457.305.876.533 1.295.229.495-.152.876-.152.876l-.571.571c-.229.229-.229.61 0 .876l.762.762c.229.229.61.229.876 0l.571-.571s.381-.381.876-.152c.419.229.838.419 1.295.533.495.152.533.724.533.724v.8c0 .343.267.61.61.61h1.067c.343 0 .61-.267.61-.61v-.8s0-.571.533-.724c.457-.114.876-.305 1.295-.533.495-.229.876.152.876.152l.571.571c.229.229.61.229.876 0l.762-.762c.229-.229.229-.61 0-.876l-.571-.571s-.381-.381-.152-.876c.229-.419.419-.838.533-1.295.152-.495.724-.533.724-.533h.8c.343 0 .61-.267.61-.61V7.467a.602.602 0 0 0-.61-.61h-.8zM8.5 11.555a3.541 3.541 0 0 1-3.556-3.556A3.541 3.541 0 0 1 8.5 4.443a3.541 3.541 0 0 1 3.556 3.556A3.561 3.561 0 0 1 8.5 11.555z"/></svg>';
    },
    TXAa: function (t, e, o) {},
    WRHa: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 15"><path d="M1 0C.45 0 0 .45 0 1v11h1V1h9V0H1zm2.467 2C2.66 2 2 2.65 2 3.444v10.111c0 .794.66 1.444 1.467 1.444h8.067c.807 0 1.467-.65 1.467-1.444V3.444c0-.794-.66-1.444-1.467-1.444H3.467zM3 3h9v11H3V3z"/></svg>';
    },
    XqDt: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 6" width="22" height="6"><path d="M2 2a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2H2z"/></svg>';
    },
    dhuF: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 6" width="22" height="6"><path d="M20 2.5a.5.5 0 1 1 1 0 .5.5 0 1 1-1 0zm-19 0a2 2 0 1 1 4 0 2 2 0 1 1-4 0z"/><path d="M20.5 3H3V2h17.5z"/></svg>';
    },
    eHtW: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 6" width="22" height="6"><path d="M0 2.5a.5.5 0 1 1 1 0 .5.5 0 1 1-1 0zm18 0a2 2 0 1 1 4 0 2 2 0 1 1-4 0zm-9 0a2 2 0 1 1 4 0 2 2 0 1 1-4 0z"/><path d="M19 3H.5V2H19z"/></svg>';
    },
    "fUH/": function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 6" width="22" height="6"><path d="M22 2.5L14 5V0zM2 2.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0z"/><path d="M1.5 2H15v1H1.5z"/></svg>';
    },
    gPdB: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16" width="12px" height="16px"><path fillRule="evenodd" d="M10.5 5.333h-.75V3.81C9.75 1.707 8.07 0 6 0 3.93 0 2.25 1.707 2.25 3.81v1.523H1.5c-.825 0-1.5.686-1.5 1.524v7.62C0 15.313.675 16 1.5 16h9c.825 0 1.5-.686 1.5-1.524V6.857c0-.838-.675-1.524-1.5-1.524zM6 12c-.825 0-1.5-.675-1.5-1.5S5.175 9 6 9s1.5.675 1.5 1.5S6.825 12 6 12zm2.325-6.75h-4.65v-1.5A2.326 2.326 0 0 1 6 1.425 2.326 2.326 0 0 1 8.325 3.75v1.5z"/></svg>';
    },
    gmn6: function (t, e, o) {
      "use strict";
      o.r(e),
        function (t) {
          o.d(e, "FavoriteDrawingToolbar", function () {
            return h;
          });
          var i = o("mrSG"),
            n = (o("P5fv"), o("nbsC"), o("EsMY"), o("YFKU"), o("0ZwQ")),
            r = o("b2d7"),
            s = o("7KDR"),
            a = o("5VQP"),
            l = o("mMWL"),
            d = o("MP+M"),
            c = o("Vdly"),
            p = o("hY0g"),
            u = o.n(p),
            h =
              (o("TXAa"),
              (function (e) {
                function o(t) {
                  var o =
                    e.call(this, {
                      allowSortable: !Modernizr.mobiletouch,
                      dragOnlyInsideToolbar: !0,
                      defaultPosition: t,
                      positionSettingsKey: "chart.favoriteDrawingsPosition",
                      positionStorageType: "device",
                    }) || this;
                  return (
                    (o._linetoolsWidgets = {}),
                    (o._canBeShownValue = new u.a(!1)),
                    o._attachHandlers(),
                    o._loadVisibilityState(),
                    o
                  );
                }
                return (
                  Object(i.c)(o, e),
                  (o.prototype.show = function () {
                    this._canBeShownValue.value() &&
                      (c.setValue(
                        "ChartFavoriteDrawingToolbarWidget.visible",
                        !0
                      ),
                      this.isVisible() || this._renderAllLinetools(),
                      e.prototype.show.call(this));
                  }),
                  (o.prototype.hide = function () {
                    c.setValue("ChartFavoriteDrawingToolbarWidget.visible", !1),
                      e.prototype.hide.call(this);
                  }),
                  (o.prototype.canBeShown = function () {
                    return this._canBeShownValue.readonly();
                  }),
                  (o.prototype._onFavoriteAdded = function (t) {
                    this._canBeShownValue.setValue(!0),
                      this.addWidget(this._createLinetoolWidget(t)),
                      this.show();
                  }),
                  (o.prototype._onFavoriteRemoved = function (t) {
                    this.removeWidget(this._linetoolsWidgets[t]),
                      delete this._linetoolsWidgets[t],
                      0 === r.a.favoritesCount() &&
                        (this._canBeShownValue.setValue(!1), this.hide());
                  }),
                  (o.prototype._onFavoriteMoved = function () {
                    this._renderAllLinetools();
                  }),
                  (o.prototype._onSelectedLinetoolChanged = function (t) {
                    var e = this;
                    Object.keys(this._linetoolsWidgets).forEach(function (o) {
                      e._linetoolsWidgets[o].classList.toggle(
                        "i-active",
                        t === o
                      );
                    });
                  }),
                  (o.prototype._createLinetoolWidget = function (e) {
                    var o = $(
                      t.render(
                        '<span class="tv-favorited-drawings-toolbar__widget {{#isActive}}i-active{{/isActive}} apply-common-tooltip" title="{{title}}">{{{icon}}}</span>',
                        {
                          icon: d.a[e].icon,
                          isActive: e === l.tool.value(),
                          title: d.a[e].localizedName,
                        }
                      )
                    )[0];
                    return (
                      o.addEventListener("click", function (t) {
                        t.preventDefault(),
                          l.tool.value() !== e && l.tool.setValue(e);
                      }),
                      (this._linetoolsWidgets[e] = o),
                      o
                    );
                  }),
                  (o.prototype._renderAllLinetools = function () {
                    var t = this;
                    (this._linetoolsWidgets = {}),
                      this.removeWidgets(),
                      r.a
                        .favorites()
                        .filter(function (t) {
                          return d.a[t];
                        })
                        .forEach(function (e) {
                          t.addWidget(t._createLinetoolWidget(e));
                        });
                  }),
                  (o.prototype._attachHandlers = function () {
                    var t = this;
                    r.a.favoriteAdded.subscribe(this, this._onFavoriteAdded),
                      r.a.favoriteRemoved.subscribe(
                        this,
                        this._onFavoriteRemoved
                      ),
                      r.a.favoriteMoved.subscribe(this, this._onFavoriteMoved),
                      r.a.favoritesSynced.subscribe(null, function () {
                        t._loadVisibilityState(), t._renderAllLinetools();
                      }),
                      this.onWidgetsReordered().subscribe(
                        this,
                        function (e, o) {
                          if (
                            (r.a.favoriteMoved.unsubscribe(
                              t,
                              t._onFavoriteMoved
                            ),
                            !r.a.moveFavorite(r.a.favorite(e), o))
                          )
                            throw new Error("Something went wrong");
                          r.a.favoriteMoved.subscribe(t, t._onFavoriteMoved);
                        }
                      ),
                      this.onContextMenu(function (e) {
                        e.preventDefault();
                        var o = new s.Action({
                          label: window.t(
                            "Hide Favorite Drawing Tools Toolbar"
                          ),
                          onExecute: function () {
                            t.hide();
                          },
                        });
                        a.ContextMenuManager.createMenu([o]).then(function (t) {
                          t.show(e);
                        });
                      }),
                      l.tool.subscribe(
                        this._onSelectedLinetoolChanged.bind(this)
                      );
                  }),
                  (o.prototype._loadVisibilityState = function () {
                    var t = r.a.favoritesCount() > 0;
                    this._canBeShownValue.setValue(t),
                      c.getBool(
                        "ChartFavoriteDrawingToolbarWidget.visible",
                        !0
                      ) && t
                        ? this.show()
                        : this.hide();
                  }),
                  o
                );
              })(n.a));
        }.call(this, o("nbsC"));
    },
    jAh7: function (t, e, o) {
      "use strict";
      o.r(e),
        o.d(e, "OverlapManager", function () {
          return r;
        }),
        o.d(e, "getRootOverlapManager", function () {
          return a;
        });
      var i = o("Eyy1"),
        n = (function () {
          function t() {
            this._storage = [];
          }
          return (
            (t.prototype.add = function (t) {
              this._storage.push(t);
            }),
            (t.prototype.remove = function (t) {
              this._storage = this._storage.filter(function (e) {
                return t !== e;
              });
            }),
            (t.prototype.has = function (t) {
              return this._storage.includes(t);
            }),
            (t.prototype.getItems = function () {
              return this._storage;
            }),
            t
          );
        })(),
        r = (function () {
          function t(t) {
            void 0 === t && (t = document),
              (this._storage = new n()),
              (this._windows = new Map()),
              (this._index = 0),
              (this._document = t),
              (this._container = t.createDocumentFragment());
          }
          return (
            (t.prototype.setContainer = function (t) {
              var e = this._container,
                o = null === t ? this._document.createDocumentFragment() : t;
              !(function (t, e) {
                Array.from(t.childNodes).forEach(function (t) {
                  t.nodeType === Node.ELEMENT_NODE && e.appendChild(t);
                });
              })(e, o),
                (this._container = o);
            }),
            (t.prototype.registerWindow = function (t) {
              this._storage.has(t) || this._storage.add(t);
            }),
            (t.prototype.ensureWindow = function (t, e) {
              void 0 === e && (e = { position: "fixed", direction: "normal" });
              var o = this._windows.get(t);
              if (void 0 !== o) return o;
              this.registerWindow(t);
              var i = this._document.createElement("div");
              if (
                ((i.style.position = e.position),
                (i.style.zIndex = this._index.toString()),
                (i.dataset.id = t),
                void 0 !== e.index)
              ) {
                var n = this._container.childNodes.length;
                if (e.index >= n) this._container.appendChild(i);
                else if (e.index <= 0)
                  this._container.insertBefore(i, this._container.firstChild);
                else {
                  var r = this._container.childNodes[e.index];
                  this._container.insertBefore(i, r);
                }
              } else
                "reverse" === e.direction
                  ? this._container.insertBefore(i, this._container.firstChild)
                  : this._container.appendChild(i);
              return this._windows.set(t, i), ++this._index, i;
            }),
            (t.prototype.unregisterWindow = function (t) {
              this._storage.remove(t);
              var e = this._windows.get(t);
              void 0 !== e &&
                (null !== e.parentElement && e.parentElement.removeChild(e),
                this._windows.delete(t));
            }),
            (t.prototype.getZindex = function (t) {
              var e = this.ensureWindow(t);
              return parseInt(e.style.zIndex || "0");
            }),
            (t.prototype.moveToTop = function (t) {
              this.getZindex(t) !== this._index &&
                (this.ensureWindow(t).style.zIndex = (++this
                  ._index).toString());
            }),
            (t.prototype.removeWindow = function (t) {
              this.unregisterWindow(t);
            }),
            t
          );
        })(),
        s = new WeakMap();
      function a(t) {
        void 0 === t && (t = document);
        var e = t.getElementById("overlap-manager-root");
        if (null !== e) return Object(i.ensureDefined)(s.get(e));
        var o = new r(t),
          n = (function (t) {
            var e = t.createElement("div");
            return (
              (e.style.position = "absolute"),
              (e.style.zIndex = (150).toString()),
              (e.style.top = "0px"),
              (e.style.left = "0px"),
              (e.id = "overlap-manager-root"),
              e
            );
          })(t);
        return s.set(n, o), o.setContainer(n), t.body.appendChild(n), o;
      }
    },
    "m/4m": function (t, e, o) {},
    my99: function (t, e, o) {
      "use strict";
      o.r(e),
        o.d(e, "GroupButtonFloatingToolbar", function () {
          return l;
        });
      var i = o("mrSG"),
        n = o("Eyy1"),
        r = o("0ZwQ"),
        s = o("aIyQ"),
        a = o.n(s),
        l =
          (o("m/4m"),
          o("ADFN"),
          (function (t) {
            function e(o) {
              var i = t.call(this, e._prepareOptions(o)) || this;
              return (
                (i._onWidgetStateChangedDelegate = new a.a()),
                (i._statedWidgets = []),
                (i._currentPopup = null),
                (i._onWindowClickedListener = i._onWindowClicked.bind(i)),
                i
              );
            }
            return (
              Object(i.c)(e, t),
              (e.prototype.show = function () {
                t.prototype.show.call(this),
                  document.addEventListener(
                    "mousedown",
                    this._onWindowClickedListener
                  );
              }),
              (e.prototype.hide = function () {
                t.prototype.hide.call(this),
                  document.removeEventListener(
                    "mousedown",
                    this._onWindowClickedListener
                  );
              }),
              (e.prototype.destroy = function () {
                this._closePopup(), t.prototype.destroy.call(this);
              }),
              (e.prototype.addGroupedWidget = function (t, o) {
                void 0 === o && (o = {}),
                  Object(n.assert)(
                    t.states.length > 0 &&
                      -1 !== e._getStateIndexById(t, t.currentStateId),
                    "Argument is invalid (count: " +
                      t.states.length +
                      ", state: " +
                      t.currentStateId +
                      ")"
                  );
                var i = document.createElement("div");
                (i.className =
                  "tv-grouped-floating-toolbar__widget-wrapper apply-common-tooltip"),
                  t.widgetAddClass && i.classList.add(t.widgetAddClass),
                  i.setAttribute("title", t.tooltip);
                var r = { isEnabled: !0, statedWidget: t, toolbarWidget: i },
                  s = this._onWidgetClicked.bind(this, r);
                (r.clickListener = s),
                  i.addEventListener("click", s),
                  this._updateWidgetPreview(r),
                  this.addWidget(i, o),
                  this._statedWidgets.push(r);
              }),
              (e.prototype.findGroupedWidget = function (t) {
                for (var e = this._statedWidgets.length, o = 0; o < e; ++o) {
                  if (this._statedWidgets[o].statedWidget.id === t) return o;
                }
                return -1;
              }),
              (e.prototype.removeGroupedWidget = function (t) {
                for (var e = this._statedWidgets.length, o = 0; o < e; ++o) {
                  var i = this._statedWidgets[o];
                  if (i.statedWidget.id === t)
                    return (
                      this._isPopupCreatedForWidget(t) && this._closePopup(),
                      void 0 !== i.clickListener &&
                        i.toolbarWidget.removeEventListener(
                          "click",
                          i.clickListener
                        ),
                      this.removeWidget(i.toolbarWidget),
                      this._statedWidgets.splice(o, 1),
                      void this._updatePopupPosition()
                    );
                }
                Object(n.assert)(!1, "Unknown groupId(" + t + ")");
              }),
              (e.prototype.updateGroupedWidget = function (t, e) {
                this._closePopup();
                var o = this._ensuredGetWidgetDataForId(t);
                (o.statedWidget.currentStateId = e.currentStateId),
                  (o.statedWidget.states = e.states),
                  this._updateWidgetPreview(o);
              }),
              (e.prototype.setGroupedWidgetEnabled = function (t, e) {
                var o = this._ensuredGetWidgetDataForId(t);
                (o.isEnabled = e),
                  o.toolbarWidget.classList.toggle("i-disabled", !e);
              }),
              (e.prototype.setGroupedWidgetState = function (t, o) {
                var i = this._ensuredGetWidgetDataForId(t);
                Object(n.assert)(
                  -1 !== e._getStateIndexById(i.statedWidget, o),
                  "Unknown stateId (" + o + ")"
                ),
                  (i.statedWidget.currentStateId = o),
                  this._updateSubWidgetsState(i.statedWidget),
                  this._updateWidgetPreview(i);
              }),
              (e.prototype.onWidgetStateChanged = function () {
                return this._onWidgetStateChangedDelegate;
              }),
              (e.prototype._onVerticalChanged = function (t, e) {
                this._updatePopupPosition();
              }),
              (e.prototype._ensuredGetWidgetDataForId = function (t) {
                for (var e = 0, o = this._statedWidgets; e < o.length; e++) {
                  var i = o[e];
                  if (i.statedWidget.id === t) return i;
                }
                throw new Error("Unknown groupId(" + t + ")");
              }),
              (e.prototype._onWidgetClicked = function (t, e) {
                var o =
                  this._currentPopup &&
                  this._isPopupCreatedForWidget(t.statedWidget.id);
                this._closePopup(), !o && t.isEnabled && this._createPopup(t);
              }),
              (e.prototype._createPopup = function (t) {
                var e = this,
                  o = {
                    createdFor: t.toolbarWidget,
                    element: document.createElement("div"),
                    stateWidgetId: t.statedWidget.id,
                    widgets: [],
                  };
                o.element.className +=
                  "tv-grouped-floating-toolbar__popup js-popup";
                var i = t.statedWidget.states.length;
                t.statedWidget.states.forEach(function (n, r) {
                  var s = e._createSubWidget(t, n),
                    a = e._onSubWidgetClicked.bind(e, t, n.id);
                  s.addEventListener("click", a),
                    o.widgets.push({
                      clickListener: a,
                      stateWidget: n,
                      widget: s,
                    }),
                    s.classList.add(
                      "tv-grouped-floating-toolbar__sub-widget--slide-right-" +
                        r
                    ),
                    s.classList.add(
                      "tv-grouped-floating-toolbar__sub-widget--slide-left-" +
                        (i - r + 1)
                    ),
                    n.readonly || o.element.appendChild(s);
                }),
                  (this._currentPopup = o),
                  this._updateSubWidgetsState(t.statedWidget),
                  t.toolbarWidget.classList.add("i-dropped"),
                  this._getWidget().appendChild(this._currentPopup.element),
                  Promise.resolve().then(function () {
                    e._currentPopup &&
                      e._currentPopup.element.classList.add("i-opened");
                  }),
                  this._updatePopupPosition();
              }),
              (e.prototype._closePopup = function () {
                var t = this;
                if (
                  (this._statedWidgets.forEach(function (t) {
                    t.toolbarWidget.classList.remove("i-dropped");
                  }),
                  this._currentPopup)
                ) {
                  var e = this._currentPopup.widgets,
                    o = this._currentPopup.element;
                  (this._currentPopup = null),
                    e.forEach(function (t) {
                      t.widget.removeEventListener("click", t.clickListener);
                    }),
                    o.classList.remove("i-opened"),
                    o.addEventListener("transitionend", function (e) {
                      e.target === o && t._getWidget().removeChild(o);
                    });
                }
              }),
              (e.prototype._updateWidgetPreview = function (t) {
                var o = e._getStateIndexById(
                  t.statedWidget,
                  t.statedWidget.currentStateId
                );
                Object(n.assert)(
                  -1 !== o,
                  "Unknown state id: " + t.statedWidget.currentStateId
                );
                var i = t.statedWidget.states[o].widget.cloneNode(!0);
                t.toolbarWidget.firstChild
                  ? t.toolbarWidget.replaceChild(i, t.toolbarWidget.firstChild)
                  : (t.toolbarWidget.appendChild(i),
                    t.toolbarWidget.appendChild(e._createCaret()));
              }),
              (e.prototype._updateSubWidgetsState = function (t) {
                this._currentPopup &&
                  this._isPopupCreatedForWidget(t.id) &&
                  this._currentPopup.widgets.forEach(function (o) {
                    o.widget.classList.toggle(
                      e._activeSubWidgetClass,
                      o.stateWidget.id === t.currentStateId
                    );
                  });
              }),
              (e.prototype._updatePopupPosition = function () {
                if (this._currentPopup) {
                  var t = this._currentPopup.createdFor,
                    e = this._getWidget().getBoundingClientRect(),
                    o = this._findWrapperForWidget(t);
                  if (!o || !this._currentPopup)
                    throw new Error(
                      "Toolbar has no wrapper for preview's widget or there is no popup"
                    );
                  var i = o.getBoundingClientRect(),
                    n = this._currentPopup.element.getBoundingClientRect(),
                    r = this._currentPopup.element;
                  if (this.isVertical())
                    r.classList.remove(
                      "tv-grouped-floating-toolbar__popup--at-top"
                    ),
                      (r.style.top = i.top - e.top + 1 + "px"),
                      (r.style.left = ""),
                      e.left > window.innerWidth - e.right
                        ? r.classList.add(
                            "tv-grouped-floating-toolbar__popup--at-left"
                          )
                        : r.classList.remove(
                            "tv-grouped-floating-toolbar__popup--at-left"
                          );
                  else {
                    r.classList.remove(
                      "tv-grouped-floating-toolbar__popup--at-left"
                    );
                    var s = 0;
                    i.left + n.width > window.innerWidth
                      ? e.left + n.width > window.innerWidth &&
                        (s = e.width - n.width)
                      : (s = i.left - e.left + 1),
                      (r.style.left = s + "px"),
                      e.bottom + n.height > window.innerHeight
                        ? r.classList.add(
                            "tv-grouped-floating-toolbar__popup--at-top"
                          )
                        : (r.classList.remove(
                            "tv-grouped-floating-toolbar__popup--at-top"
                          ),
                          (r.style.top = ""));
                  }
                }
              }),
              (e.prototype._isPopupCreatedForWidget = function (t) {
                return Boolean(
                  this._currentPopup && this._currentPopup.stateWidgetId === t
                );
              }),
              (e.prototype._createSubWidget = function (t, e) {
                var o = document.createElement("div");
                return (
                  (o.className += "tv-grouped-floating-toolbar__sub-widget"),
                  t.statedWidget.stateWidgetAddClass &&
                    o.classList.add(t.statedWidget.stateWidgetAddClass),
                  o.appendChild(e.widget),
                  o
                );
              }),
              (e.prototype._onSubWidgetClicked = function (t, e) {
                this._closePopup(),
                  t.statedWidget.currentStateId !== e &&
                    (this.setGroupedWidgetState(t.statedWidget.id, e),
                    this._onWidgetStateChangedDelegate.fire(
                      t.statedWidget.id,
                      e
                    ));
              }),
              (e.prototype._onWindowClicked = function (t) {
                if (
                  this.isVisible() &&
                  this._currentPopup &&
                  !e._isEventInElement(t, this._currentPopup.element)
                ) {
                  for (var o = 0; o < this._statedWidgets.length; ++o)
                    if (
                      e._isEventInElement(
                        t,
                        this._statedWidgets[o].toolbarWidget
                      )
                    )
                      return;
                  this._closePopup();
                }
              }),
              (e._getStateIndexById = function (t, e) {
                for (var o = 0; o < t.states.length; ++o)
                  if (t.states[o].id === e) return o;
                return -1;
              }),
              (e._createCaret = function () {
                var t = document.createElement("div");
                return (
                  (t.className =
                    "tv-caret tv-caret--small tv-caret--colored tv-grouped-floating-toolbar__caret"),
                  t
                );
              }),
              (e._prepareOptions = function (t) {
                return (
                  t.addClass
                    ? (t.addClass += " tv-grouped-floating-toolbar")
                    : (t.addClass = " tv-grouped-floating-toolbar"),
                  t
                );
              }),
              (e._isEventInElement = function (t, e) {
                return t.target === e || e.contains(t.target);
              }),
              (e._activeSubWidgetClass =
                "tv-grouped-floating-toolbar__sub-widget--current"),
              e
            );
          })(r.a));
    },
    n2Ch: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 6" width="22" height="6"><path d="M0 2.5L8 0v5zm20 0a.5.5 0 1 1 1 0 .5.5 0 1 1-1 0z"/><path d="M20.5 3H7V2h13.5z"/></svg>';
    },
    nApS: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 12"><path d="M8.25 0C4.5 0 1.297 2.332 0 5.625c1.297 3.292 4.5 5.625 8.25 5.625s6.953-2.333 8.25-5.625C15.203 2.332 12 0 8.25 0zm0 9.375c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75zm0-6C7.005 3.375 6 4.38 6 5.625s1.005 2.25 2.25 2.25 2.25-1.005 2.25-2.25-1.005-2.25-2.25-2.25z"/></svg>';
    },
    nSyy: function (t, e, o) {},
    noRL: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="15" height="16" fill="none"><rect width="32" height="8" fill="#758696" rx="3"/><rect width="32" height="6" fill="#758696" rx="3" y="12"/><rect width="32" height="4" fill="#758696" rx="2" y="22"/><rect width="32" height="2" fill="#758696" rx="1" y="30"/></svg>';
    },
    tPkB: function (t, e, o) {
      "use strict";
      (function (e, i) {
        var n = o("ogJP").notNull,
          r = o("DxCR"),
          s = r.PropertyPage,
          a = r.ColorBinding,
          l = o("mMWL"),
          d = o("bR4N").bindPopupMenu,
          c = o("Ocx9").DefaultProperty,
          p = o("my99").GroupButtonFloatingToolbar,
          u = o("a7Ha").LineEnd,
          h = o("VNzU").isMultipleLayout,
          g = o("yMne"),
          _ = o("e92V").isLineDrawnWithPressedButton,
          v = o("CW80"),
          f = v.createLineToolProperties,
          y = v.isLineTool,
          b = o("JWMC").trackEvent,
          w = o("j3hX"),
          m = w.MultipleLineWidthsProperty,
          C = w.MultipleLineColorsProperty,
          x = o("turx"),
          W = x.CollectibleColorPropertyUndoWrapper,
          P = x.CollectibleColorPropertyDirectWrapper,
          S =
            (o("2uTr").appendEllipsis,
            o("6+QM").CollectibleWidthPropertyUndoWrapper);
        function T(t) {
          (this._chartWidgetCollection = t),
            (this._bindings = []),
            (this._hasAlertWathcedValue = null),
            (this._$templatesButton = null),
            (this._currentProperties = null),
            (this._toolbarWidgets = []),
            (this._clearPropertiesOnHideTimeoutId = null),
            this._init(),
            this.attachHandlers();
        }
        function B(t, e) {
          t.push({
            id: e,
            widget: $(
              '<div class="tv-linetool-properties-toolbar__text">' +
                e +
                "</div>"
            )[0],
          });
        }
        function L(t, e) {
          t.push({
            id: e.value,
            widget: $(e.iconSvgCode)[0],
            readonly: e.readonly,
          });
        }
        function k(t) {
          return (function (t, e) {
            return $("<div>")
              .addClass("tv-linetool-properties-toolbar__icon")
              .addClass(e)
              .append(t)[0];
          })(t, "tv-linetool-properties-toolbar__icon--line-props");
        }
        o("m/4m"),
          o("nSyy"),
          (T.prototype.activeChartWidget = function () {
            return this._chartWidgetCollection.activeChartWidget.value();
          }),
          (T.prototype.selectedSources = function () {
            return this._chartWidgetCollection.selectedSources.value();
          }),
          (T.prototype._init = function () {
            (this._floatingToolbar = new p({
              addClass: "tv-linetool-properties-toolbar",
              defaultPosition: {
                top: g.HEADER_TOOLBAR_HEIGHT_EXPANDED + 15,
                left: window.innerWidth / 2,
              },
              positionSettingsKey: "properties_toolbar.position",
              positionStorageType: "server",
            })),
              this._floatingToolbar
                .onWidgetStateChanged()
                .subscribe(this, this._onPropertyChangedInToolbar),
              (this._sourceActions = this._createSourceActions()),
              this._sourceActions.forEach(function (t) {
                this._floatingToolbar.addWidget(t.button);
              }, this);
          }),
          (T.prototype._bindPopupMenuDirection = function () {
            return this._floatingToolbar.isVertical() ? "right" : "down";
          }),
          (T.prototype._onPropertyChangedInToolbar = function (t, e) {
            if (
              ("linewidth" === t || t.endsWith(".linewidth")) &&
              this._lineWidthsProperty
            ) {
              var o = this.activeChartWidget().model(),
                i =
                  1 === this.selectedSources().length
                    ? window.t("Set line tool width")
                    : window.t("Set line tool widths");
              return (
                o.beginUndoMacro(i),
                this._lineWidthsProperty.setValue(e, {
                  applyValue: function (t, e) {
                    o.setProperty(t, e);
                  },
                }),
                o.endUndoMacro(),
                void this._trackContextAction(t)
              );
            }
            this._currentProperties &&
              (this._trackContextAction(t),
              this.activeChartWidget()
                .model()
                .setProperty(this._currentProperties[t], e));
          }),
          (T.prototype._onPropertyChanged = function (t, e) {
            ("linewidth" === t && e !== this._lineWidthsProperty) ||
              this._floatingToolbar.setGroupedWidgetState(t, e.value());
          }),
          (T.prototype._hideAllSourceActions = function () {
            this._sourceActions.forEach(function (t) {
              this._floatingToolbar.hideWidget(t.button);
            }, this),
              (this._sourceActionsVisible = !1);
          }),
          (T.prototype._updateSourceActionsVisibility = function (t) {
            (this._sourceActionsVisible = !1),
              this._sourceActions.forEach(function (e) {
                !e.isVisibleForSources || e.isVisibleForSources(t)
                  ? (this._floatingToolbar.showWidget(e.button),
                    (this._sourceActionsVisible = !0))
                  : this._floatingToolbar.hideWidget(e.button);
              }, this);
          }),
          (T.prototype.attachHandlers = function () {
            l.tool.subscribe(this.onToolChanged.bind(this), {
              callWithLast: !0,
            }),
              this._chartWidgetCollection.selectedSources.subscribe(
                this.onSourceChanged.bind(this)
              ),
              this._chartWidgetCollection.layout.subscribe(
                this._updateCloneButtonTitle.bind(this)
              );
          }),
          (T.prototype._updateCloneButtonTitle = function () {
            this._setButtonTitle(this._cloneButton, this._cloneButtonTitle());
          }),
          (T.prototype.onToolChanged = function (t, e) {
            if (t && -1 !== t.toLowerCase().indexOf("linetool")) {
              var o = e instanceof c;
              e = o ? e : f(t);
              this._hideAllSourceActions(),
                this.showPropertiesOf(t, e, o),
                this.showTemplatesOf({ tool: t, properties: e }),
                this._updateVisibility();
            } else
              this.selectedSources()
                ? this.onSourceChanged(this.selectedSources())
                : this.hide();
          }),
          (T.prototype.findSourceOnWidget = function (t) {
            for (
              var e = 0;
              e < this.activeChartWidget().model().panes().length;
              e++
            )
              for (
                var o = this.activeChartWidget()
                    .model()
                    .panes()
                    [e].sourcesByGroup()
                    .all(),
                  i = 0;
                i < o.length;
                i++
              )
                if (o[i] === t) return o[i];
          }),
          (T.prototype.onSourceChanged = function (t) {
            if (
              (this._hasAlertWathcedValue &&
                (this._hasAlertWathcedValue.destroy(),
                (this._hasAlertWathcedValue = null)),
              this._updateCloneButtonTitle(),
              t && t.length)
            )
              if (1 === t.length) {
                var e = t[0];
                y(e) &&
                e.isAvailableInFloatingWidget() &&
                this.findSourceOnWidget(e)
                  ? (!e.userEditEnabled() ||
                    (!_(e.toolname) &&
                      this.activeChartWidget().model().lineBeingCreated())
                      ? this._hideAllSourceActions()
                      : (this._updateSourceActionsVisibility(t),
                        e.canHasAlert() &&
                          ((this._hasAlertWathcedValue = e.hasAlert.spawn()),
                          this._hasAlertWathcedValue.subscribe(
                            this._updateSourceActionsVisibility.bind(this, t)
                          ))),
                    this.showPropertiesOf(e.toolname, e.properties(), !0),
                    this.showTemplatesOf({ source: e }),
                    this._setupToggleLockButton(e),
                    this._updateVisibility())
                  : this.hide();
              } else
                this._clearProperties(),
                  this._$templatesButton &&
                    this._floatingToolbar.removeWidget(
                      this._$templatesButton[0]
                    ),
                  this._updateSourceActionsVisibility(t),
                  this._setupToggleLockButton(t[0]),
                  this._updateVisibility(),
                  this._createWidthsButton(void 0, !0),
                  this._createColorsButton(void 0, !0),
                  this._createBackgroundsButton(void 0, !0),
                  this._createTextColorsButton(void 0, !0);
            else this.hide();
          }),
          (T.prototype._createWidthsButton = function (t, e) {
            var o;
            if (
              (this._lineWidthsProperty &&
                (this._lineWidthsProperty.destroy(),
                (this._lineWidthsProperty = null)),
              e)
            ) {
              var i = this.selectedSources().filter(function (t) {
                return y(t) && t.properties().linesWidths;
              });
              if (
                i.filter(function (t) {
                  return t.properties().linesWidths.visible();
                }).length < 1
              )
                return !0;
              var r = i
                  .map(function (t) {
                    return t.properties().linesWidths;
                  })
                  .filter(n),
                s = this.activeChartWidget().model();
              (this._lineWidthsProperty = new S(
                new m(r),
                s,
                "Set Line tool(s) line width"
              )),
                this._lineWidthsProperty.subscribe(
                  this,
                  function () {
                    this._floatingToolbar.setGroupedWidgetState(
                      "linewidth",
                      this._lineWidthsProperty.value()
                    );
                  }.bind(this)
                ),
                (o =
                  1 === i.length
                    ? window.t("Line tool width")
                    : window.t("Line tool widths"));
            } else {
              if (!t || !t.visible()) return !0;
              (this._lineWidthsProperty = new m([t])),
                (o = window.t("Line tool width"));
            }
            var a = [];
            return (
              [
                { value: "mixed", iconSvgCode: E, readonly: !0 },
                { value: 1, iconSvgCode: V },
                { value: 2, iconSvgCode: z },
                { value: 3, iconSvgCode: M },
                { value: 4, iconSvgCode: I },
              ].forEach(L.bind(null, a)),
              this._floatingToolbar.addGroupedWidget(
                {
                  id: "linewidth",
                  currentStateId: this._lineWidthsProperty.value(),
                  stateWidgetAddClass:
                    "tv-linetool-properties-toolbar__sub-widget",
                  states: a,
                  widgetAddClass:
                    "tv-linetool-properties-toolbar__grouped-button",
                  tooltip: o,
                },
                { index: this._$templatesButton ? 1 : 0 }
              ),
              !0
            );
          }),
          (T.prototype._createColorsButton = function (t, e) {
            if (
              (this._lineColorsProperty &&
                (this._lineColorsProperty.destroy(),
                (this._lineColorsProperty = null)),
              e)
            ) {
              var o = this.selectedSources().filter(function (t) {
                return y(t) && t.properties().linesColors;
              });
              if (
                o.filter(function (t) {
                  return t.properties().linesColors.visible();
                }).length < 1
              )
                return !0;
              var i = o
                  .map(function (t) {
                    return t.properties().linesColors;
                  })
                  .filter(n),
                r = this.activeChartWidget().model();
              this._lineColorsProperty = new W(
                new C(i),
                r,
                "Set Line tool(s) color"
              );
            } else {
              if (!t || !t.visible()) return !0;
              this._lineColorsProperty = new P(new C([t]));
            }
            return (
              (this._$colorsButtons = this.colorPropertyControl(
                this._lineColorsProperty,
                {
                  title: window.t("Line tool colors"),
                  iconSvgCode: G,
                  name: "Set multiple colors",
                },
                null
              )),
              this._floatingToolbar.addWidget(this._$colorsButtons[0], {
                index: this._$templatesButton ? 1 : 0,
              }),
              this._toolbarWidgets.push(this._$colorsButtons),
              !0
            );
          }),
          (T.prototype._createBackgroundsButton = function (t, e) {
            if (
              (this._backgroundsProperty &&
                (this._backgroundsProperty.destroy(),
                (this._backgroundsProperty = null)),
              e)
            ) {
              var o = this.selectedSources().filter(function (t) {
                return y(t) && t.properties().backgroundsColors;
              });
              if (
                o.filter(function (t) {
                  return t.properties().backgroundsColors.visible();
                }).length < 1
              )
                return !0;
              var i = o
                  .map(function (t) {
                    return t.properties().backgroundsColors;
                  })
                  .filter(n),
                r = this.activeChartWidget().model();
              this._backgroundsProperty = new W(
                new C(i),
                r,
                "Set Line background(s) color"
              );
            } else {
              if (!t || !t.visible()) return !0;
              this._backgroundsProperty = new P(new C([t]));
            }
            return (
              (this._$backgroundsButtons = this.colorPropertyControl(
                this._backgroundsProperty,
                {
                  title: window.t("Line tool backgrounds"),
                  iconSvgCode: U,
                  name: "Set multiple colors",
                },
                null
              )),
              this._floatingToolbar.addWidget(this._$backgroundsButtons[0], {
                index: this._$templatesButton ? 1 : 0,
              }),
              this._toolbarWidgets.push(this._$backgroundsButtons),
              !0
            );
          }),
          (T.prototype._createTextColorsButton = function (t, e) {
            if (
              (this._textColorsProperty &&
                (this._textColorsProperty.destroy(),
                (this._textColorsProperty = null)),
              e)
            ) {
              var o = this.selectedSources().filter(function (t) {
                return y(t) && t.properties().textsColors;
              });
              if (
                o.filter(function (t) {
                  return t.properties().textsColors.visible();
                }).length < 1
              )
                return !0;
              var i = o
                  .map(function (t) {
                    return t.properties().textsColors;
                  })
                  .filter(n),
                r = this.activeChartWidget().model();
              this._textColorsProperty = new W(
                new C(i),
                r,
                "Set Line tool(s) text color"
              );
            } else {
              if (!t || !t.visible()) return !0;
              this._textColorsProperty = new P(new C([t]));
            }
            return (
              (this._$textColorsButtons = this.colorPropertyControl(
                this._textColorsProperty,
                {
                  title: window.t("Line tool text colors"),
                  iconSvgCode: Z,
                  name: "Set multiple colors",
                },
                null
              )),
              this._floatingToolbar.addWidget(this._$textColorsButtons[0], {
                index: this._$templatesButton ? 1 : 0,
              }),
              this._toolbarWidgets.push(this._$textColorsButtons),
              !0
            );
          }),
          (T.prototype.showTemplatesOf = function (t) {}),
          (T.prototype.templatesList = function () {
            return this._templatesList;
          }),
          (T.prototype._createButton = function (t) {
            t = t || {};
            var e = document.createElement("div");
            if (
              (this._setButtonTitle(e, t.title),
              (e.className +=
                "tv-linetool-properties-toolbar__button apply-common-tooltip"),
              e.addEventListener("click", t.callback),
              t.svgIcon)
            ) {
              var o = document.createElement("div");
              o.classList.add("tv-linetool-properties-toolbar__icon"),
                o.appendChild(t.svgIcon),
                e.appendChild(o);
            }
            if (t.addCaret) {
              var i = document.createElement("div");
              (i.className =
                "tv-caret tv-caret--small tv-caret--colored tv-linetool-properties-toolbar__caret"),
                e.appendChild(i);
            }
            return (
              t.name &&
                ((e.dataset.name = t.name), (e.dataset.role = "button")),
              e
            );
          }),
          (T.prototype._setButtonTitle = function (t, e) {
            t.setAttribute("title", e);
          }),
          (T.prototype._createSettingsButton = function () {
            var t = this;
            return this._createButton({
              name: "settings",
              title: $.t("Settings"),
              callback: function () {
                t._trackContextAction("Settings"),
                  t
                    .activeChartWidget()
                    .showChartPropertiesForSource(
                      t.selectedSources()[0],
                      null,
                      { onWidget: t.activeChartWidget()._options.onWidget }
                    );
              },
              svgIcon: $(o("RsxI"))[0],
            });
          }),
          (T.prototype._createZOrderButton = function () {
            var t = this._createButton({
              name: "visual-order",
              title: $.t("Visual Order"),
              callback: function () {
                t.classList.contains("i-dropped") ||
                  (this._trackContextAction("Visual order"),
                  $(t).trigger("button-popup", [this._getZOrderActions()]));
              }.bind(this),
              svgIcon: $(o("tzjn"))[0],
              addCaret: !0,
            });
            return (
              d($(t), null, {
                direction: this._bindPopupMenuDirection.bind(this),
                event: "button-popup",
                reverse: !1,
                notCloseOnButtons: !0,
                activeClass: "i-dropped",
              }),
              t
            );
          }),
          (T.prototype._isSyncOperationAvailable = function () {
            return (
              !!h(this._chartWidgetCollection.layout.value()) &&
              (this.selectedSources() || []).filter(y).some(function (t) {
                return t.isSynchronizable();
              })
            );
          }),
          (T.prototype._cloneButtonTitle = function () {
            var t = $.t("Clone");
            return (
              e.enabled("datasource_copypaste") && (t += ", " + $.t("Copy")),
              this._isSyncOperationAvailable() && (t += ", " + $.t("Sync")),
              t
            );
          }),
          (T.prototype._createCloneButton = function () {
            var t = this._createButton({
              name: "clone-copy-sync",
              title: this._cloneButtonTitle(),
              callback: function () {
                t.classList.contains("i-dropped") ||
                  (this._trackContextAction("Clone"),
                  $(t).trigger("button-popup", [this._getCloneActions()]));
              }.bind(this),
              svgIcon: $(o("WRHa"))[0],
              addCaret: !0,
            });
            return (
              d($(t), null, {
                direction: this._bindPopupMenuDirection.bind(this),
                event: "button-popup",
                reverse: !1,
                notCloseOnButtons: !0,
                activeClass: "i-dropped",
              }),
              t
            );
          }),
          (T.prototype._createLockButton = function () {
            var t = this._createButton({
              name: "lock",
              title: $.t("Lock"),
              callback: function () {
                this._trackContextAction("Lock"),
                  this.activeChartWidget().toggleLockSelectedObject();
              }.bind(this),
              svgIcon: $(o("gPdB"))[0],
            });
            return (
              (this._lockChangeListener = function (e) {
                t.classList.toggle("i-active", !!e.value());
              }),
              t
            );
          }),
          (T.prototype._createHideButton = function () {
            return this._createButton({
              name: "hide",
              title: $.t("Hide"),
              callback: function () {
                this._trackContextAction("Hide"),
                  this.activeChartWidget().hideSelectedObject();
              }.bind(this),
              svgIcon: $(o("nApS"))[0],
            });
          }),
          (T.prototype._createRemoveButton = function () {
            return this._createButton({
              name: "remove",
              title: $.t("Remove"),
              callback: function () {
                this._trackContextAction("Remove"),
                  this.activeChartWidget().removeSelectedSources();
              }.bind(this),
              svgIcon: $(o("RRhU"))[0],
            });
          }),
          (T.prototype._createSourceActions = function () {
            var t = [];
            return (
              e.enabled("property_pages") &&
                t.push({
                  button: this._createSettingsButton(),
                  isVisibleForSources: function (t) {
                    return 1 === t.length;
                  },
                }),
              (this._cloneButton = this._createCloneButton()),
              t.push(
                { button: this._createZOrderButton() },
                {
                  button: this._cloneButton,
                  isVisibleForSources: function (t) {
                    return (
                      t.filter(function (t) {
                        return t.cloneable() || t.copiable() || !!t.linkKey;
                      }).length > 0
                    );
                  },
                },
                { button: this._createLockButton() },
                { button: this._createHideButton() },
                { button: this._createRemoveButton() }
              ),
              t
            );
          }),
          (T.prototype._getCloneActions = function () {
            var t = this.activeChartWidget().model(),
              e = this.selectedSources(),
              o = [],
              i = e.filter(function (t) {
                return t.cloneable();
              });
            i.length > 0 &&
              o.push({
                name: "clone",
                title: window.t("Clone"),
                action: function () {
                  t.cloneLineTools(i);
                },
              });
            var n = e.filter(function (t) {
              return t.copiable();
            });
            return (
              n.length > 0 &&
                o.push({
                  name: "copy",
                  title: window.t("Copy"),
                  shortcut: "Ctrl-C",
                  action: function () {
                    t.copySourcesToClip(n);
                  },
                }),
              this._isSyncOperationAvailable()
                ? (e.filter(function (t) {
                    return !!t.linkKey;
                  }).length
                    ? o.push({
                        name: "stop-sync",
                        title: $.t("Stop syncing"),
                        action: function () {
                          t.unlinkLines(e);
                        },
                      })
                    : o.push({
                        name: "sync",
                        title: $.t("Sync to all charts"),
                        action: function () {
                          t.copyToOtherCharts(e);
                        },
                      }),
                  o)
                : o
            );
          }),
          (T.prototype._getZOrderActions = function () {
            var t = [],
              e = this.selectedSources(),
              o = this.activeChartWidget().model(),
              i = {
                name: "bring-to-front",
                title: $.t("Bring to Front"),
                action: function () {
                  o.bringToFront(e);
                },
              },
              n = {
                name: "send-to-back",
                title: $.t("Send to Back"),
                action: function () {
                  o.sendToBack(e);
                },
              },
              r = {
                name: "bring-forward",
                title: $.t("Bring Forward"),
                action: function () {
                  o.bringForward(e);
                },
              },
              s = {
                name: "send-backward",
                title: $.t("Send Backward"),
                action: function () {
                  o.sendBackward(e);
                },
              },
              a = o.paneForSource(e[0]).getZOrderMinMax();
            return (
              1 === e.length &&
                e[0].zorder() === a.minZOrder &&
                ((n.disabled = !0), (s.disabled = !0)),
              1 === e.length &&
                e[0].zorder() === a.maxZOrder &&
                ((r.disabled = !0), (i.disabled = !0)),
              t.push(i, n, r, s),
              t
            );
          }),
          (T.prototype._getPossibleProperty = function (t, e) {
            for (
              var o = [], i = this._defaultToolProperties(), n = 0;
              n < i.length;
              n++
            ) {
              var r = i[n];
              r.name in t && o.push(r);
            }
            return (
              t.extendLeft ||
                (o = o.map(function (t) {
                  return (
                    "leftEnd" === t.name &&
                      (t.comboboxOptions = t.comboboxOptions.filter(function (
                        t
                      ) {
                        return t.value !== T.LINE_EXTEND;
                      })),
                    t
                  );
                })),
              t.extendRight ||
                (o = o.map(function (t) {
                  return (
                    "rightEnd" === t.name &&
                      (t.comboboxOptions = t.comboboxOptions.filter(function (
                        t
                      ) {
                        return t.value !== T.LINE_EXTEND;
                      })),
                    t
                  );
                })),
              o
            );
          }),
          (T.prototype.showPropertiesOf = function (t, e, o) {
            this._toolExceptionCases ||
              (this._toolExceptionCases = this._createToolExceptionCases());
            var i = this._toolExceptionCases[t] || this._getPossibleProperty(e);
            if (
              (this._clearProperties(),
              (this._propertiesVisible = !1),
              i.length)
            ) {
              for (var n = {}, r = i.length - 1; r >= 0; --r) {
                for (
                  var s = i[r], a = e, l = s.name.split("."), d = 0;
                  d < l.length;
                  ++d
                )
                  a = a && a[l[d]];
                var c = s.showIf;
                if ("function" != typeof c || c(a, e)) {
                  var p = s.factory;
                  if (p && p.call(this, a, o)) continue;
                  if (!a) continue;
                  this._propertiesVisible = !0;
                  var u = [];
                  if ("combobox" !== s.inputType) {
                    var h = this.colorPropertyControl(a, s, e);
                    this._floatingToolbar.addWidget(h[0], {
                      index: this._$templatesButton ? 1 : 0,
                    }),
                      this._toolbarWidgets.push(h);
                    continue;
                  }
                  s.simple
                    ? s.comboboxOptions.forEach(B.bind(null, u))
                    : s.comboboxOptions.forEach(L.bind(null, u)),
                    s.propertyProxy &&
                      (a = s.propertyProxy(
                        e,
                        this.activeChartWidget().model()
                      )),
                    (n[s.name] = a),
                    a.subscribe(
                      this,
                      this._onPropertyChanged.bind(this, s.name, a)
                    ),
                    this._floatingToolbar.addGroupedWidget(
                      {
                        id: s.name,
                        currentStateId: a.value(),
                        stateWidgetAddClass:
                          "tv-linetool-properties-toolbar__sub-widget",
                        states: u,
                        widgetAddClass:
                          "tv-linetool-properties-toolbar__grouped-button",
                        tooltip: s.title,
                      },
                      { index: this._$templatesButton ? 1 : 0 }
                    );
                }
              }
              this._currentProperties = n;
            }
          }),
          (T.prototype._updateVisibility = function () {
            this._propertiesVisible ||
            this._sourceActionsVisible ||
            this._templatesVisible
              ? this._show()
              : this.hide();
          }),
          (T.prototype._clearProperties = function () {
            -1 !== this._floatingToolbar.findGroupedWidget("linewidth") &&
              this._floatingToolbar.removeGroupedWidget("linewidth"),
              this._$colorsButtons &&
                (this._floatingToolbar.removeWidget(this._$colorsButtons[0]),
                delete this._$colorsButtons),
              this._$backgroundsButtons &&
                (this._floatingToolbar.removeWidget(
                  this._$backgroundsButtons[0]
                ),
                delete this._$backgroundsButtons),
              this._$textColorsButtons &&
                (this._floatingToolbar.removeWidget(
                  this._$textColorsButtons[0]
                ),
                delete this._$textColorsButtons),
              this._lineWidthsProperty &&
                (this._lineWidthsProperty.destroy(),
                (this._lineWidthsProperty = null)),
              this._lineColorsProperty &&
                (this._lineColorsProperty.destroy(),
                (this._lineColorsProperty = null)),
              this._currentProperties &&
                (this._clearPropertiesOnHideTimeoutId &&
                  (clearTimeout(this._clearPropertiesOnHideTimeoutId),
                  (this._clearPropertiesOnHideTimeoutId = null)),
                Object.keys(this._currentProperties).forEach(function (t) {
                  "linewidth" !== t &&
                    (this._currentProperties[t].unsubscribeAll(this),
                    this._floatingToolbar.removeGroupedWidget(t));
                }, this),
                (this._currentProperties = null),
                this._toolbarWidgets.forEach(function (t) {
                  this._floatingToolbar.removeWidget(t[0]), t.remove();
                }, this),
                (this._toolbarWidgets = []),
                this.clearBindings());
          }),
          (T.prototype.hide = function () {
            this._floatingToolbar.hide(),
              (this._clearPropertiesOnHideTimeoutId = setTimeout(
                this._clearProperties.bind(this),
                this._floatingToolbar.hideDuration()
              ));
          }),
          (T.prototype._show = function () {
            this._clearPropertiesOnHideTimeoutId &&
              (clearTimeout(this._clearPropertiesOnHideTimeoutId),
              (this._clearPropertiesOnHideTimeoutId = null)),
              this._floatingToolbar.show();
          }),
          (T.prototype.refresh = function () {
            this.onSourceChanged(this.selectedSources());
          }),
          (T.prototype._setupToggleLockButton = function (t) {
            t !== this._selectedSourceBk &&
              (this._selectedSourceBk &&
                this._selectedSourceBk.properties().frozen &&
                this._selectedSourceBk
                  .properties()
                  .frozen.unsubscribe(this, this._lockChangeListener),
              t &&
                t.properties().frozen &&
                (t
                  .properties()
                  .frozen.subscribe(this, this._lockChangeListener),
                this._lockChangeListener(t.properties().frozen)),
              (this._selectedSourceBk = t));
          }),
          (T.prototype.bindControl = function (t) {
            this._bindings.push(t);
          }),
          (T.prototype.clearBindings = function (t) {
            for (var e = this._bindings.length; e--; )
              this._bindings[e].destroy();
            this._bindings.length = 0;
          }),
          (T.prototype.colorPropertyControl = function (t, e, o) {
            var i = s.prototype.createColorPicker({
              addClass:
                "tv-linetool-properties-toolbar__color-picker apply-common-tooltip",
              direction: this._bindPopupMenuDirection.bind(this),
            });
            i.attr("title", e.title);
            var n = i.find("input"),
              r = $(e.iconSvgCode);
            r.on("click", function (t) {
              n.data("tvcolorpicker") || n.focus();
            }),
              $(document).on("click", () => {
                n.data("tvcolorpicker")
                  ? (n.addClass("i-active"), this._trackContextAction(e.name))
                  : n.removeClass("i-active");
              }),
              n.after(r);
            var l = this;
            return (
              this.bindControl(
                new a(
                  i,
                  t,
                  !0,
                  this.activeChartWidget().model(),
                  null,
                  T.getTransparency(e, o),
                  function (t) {
                    var e = l.activeChartWidget().model();
                    e.beginUndoMacro(this._undoText),
                      e.setProperty(this.property(), t),
                      e.endUndoMacro();
                  }
                )
              ),
              "string" == typeof e.addClass && i.addClass(e.addClass),
              i
            );
          }),
          (T.getTransparency = function (t, e) {
            if (t.transparency)
              return t.transparencyField
                ? e[t.transparencyField].value()
                : e.transparency.value();
          }),
          (T.prototype.createLineEndPropertyProxy = function (t, e) {
            return function (o, n) {
              var r;
              r = o[e] && o[e].value() ? T.LINE_EXTEND : o[t].value();
              var s = new i(r);
              return (
                s.subscribe(this, function (i) {
                  var r = i.value();
                  r < 2
                    ? (n.beginUndoMacro(""),
                      o[t].setValue(r),
                      o[e] && o[e].setValue(!1),
                      n.endUndoMacro())
                    : (n.beginUndoMacro(""),
                      o[t].setValue(u.Normal),
                      o[e] && o[e].setValue(!0),
                      n.endUndoMacro());
                }),
                s
              );
            };
          }),
          (T.LINE_EXTEND = 42);
        var E = $(o("noRL"))[0],
          V = k(o("wLZl")),
          z = k(o("XqDt")),
          M = k(o("znEV")),
          I = k(o("NDCK")),
          A = k(o("9On3")),
          O = k(o("Nz7V")),
          H = k(o("dhuF")),
          F = k(o("n2Ch")),
          R = k(o("eHtW")),
          D = k(o("BiGZ")),
          N = k(o("fUH/")),
          j = k(o("BsMi")),
          G = o("HKvk"),
          U = o("2JFs"),
          Z = o("Kjbl"),
          K = window.t("Color");
        (T.prototype._defaultToolProperties = function () {
          return [
            {
              name: "linesColors",
              inputType: "colorPicker",
              iconSvgCode: G,
              title: K,
              factory: T.prototype._createColorsButton,
            },
            {
              name: "backgroundsColors",
              inputType: "colorPicker",
              iconSvgCode: U,
              title: $.t("Background Color"),
              transparency: !0,
              factory: T.prototype._createBackgroundsButton,
            },
            {
              name: "textsColors",
              title: $.t("Text color"),
              inputType: "colorPicker",
              iconSvgCode: Z,
              factory: T.prototype._createTextColorsButton,
            },
            {
              name: "linesWidths",
              inputType: "combobox",
              comboboxOptions: [
                { value: 1, iconSvgCode: V },
                { value: 2, iconSvgCode: z },
                { value: 3, iconSvgCode: M },
                { value: 4, iconSvgCode: I },
              ],
              title: $.t("Width"),
              factory: T.prototype._createWidthsButton,
            },
            {
              name: "linestyle",
              title: $.t("Style"),
              inputType: "combobox",
              comboboxOptions: [
                { value: 0, iconSvgCode: V },
                { value: 1, iconSvgCode: A },
                { value: 2, iconSvgCode: O },
              ],
            },
            {
              name: "lineStyle",
              title: $.t("Style"),
              inputType: "combobox",
              comboboxOptions: [
                { value: 0, iconSvgCode: V },
                { value: 1, iconSvgCode: A },
                { value: 2, iconSvgCode: O },
              ],
            },
            {
              name: "leftEnd",
              title: $.t("Left End"),
              inputType: "combobox",
              comboboxOptions: [
                { value: u.Normal, iconSvgCode: H },
                { value: u.Arrow, iconSvgCode: F },
                { value: T.LINE_EXTEND, iconSvgCode: R },
              ],
              propertyProxy: this.createLineEndPropertyProxy(
                "leftEnd",
                "extendLeft"
              ),
            },
            {
              name: "rightEnd",
              title: $.t("Right End"),
              inputType: "combobox",
              comboboxOptions: [
                { value: u.Normal, iconSvgCode: D },
                { value: u.Arrow, iconSvgCode: N },
                { value: T.LINE_EXTEND, iconSvgCode: j },
              ],
              propertyProxy: this.createLineEndPropertyProxy(
                "rightEnd",
                "extendRight"
              ),
            },
          ];
        }),
          (T.prototype._riskPropertiesExceptionCases = function () {
            return [
              {
                name: "textcolor",
                title: $.t("Text color"),
                inputType: "colorPicker",
                iconSvgCode: Z,
              },
              {
                name: "profitBackground",
                title: $.t("Profit Background Color"),
                inputType: "colorPicker",
                iconSvgCode: U,
                transparency: !0,
                transparencyField: "profitBackgroundTransparency",
              },
              {
                name: "stopBackground",
                title: $.t("Stop Background Color"),
                inputType: "colorPicker",
                iconSvgCode: U,
                transparency: !0,
                transparencyField: "stopBackgroundTransparency",
              },
              {
                name: "linecolor",
                title: $.t("Border color"),
                inputType: "colorPicker",
                iconSvgCode: G,
              },
            ];
          }),
          (T.prototype._rangeExceptionCases = function () {
            return [
              {
                name: "linecolor",
                inputType: "colorPicker",
                iconSvgCode: G,
                title: K,
              },
              {
                name: "backgroundColor",
                inputType: "colorPicker",
                iconSvgCode: U,
                title: $.t("Background Color"),
                transparency: !0,
                transparencyField: "backgroundTransparency",
              },
              {
                name: "linewidth",
                inputType: "combobox",
                comboboxOptions: [
                  { value: 1, iconSvgCode: V },
                  { value: 2, iconSvgCode: z },
                  { value: 3, iconSvgCode: M },
                  { value: 4, iconSvgCode: I },
                ],
                title: "Width",
              },
            ];
          }),
          (T.prototype._textPropertiesExceptionCases = function () {
            return [
              {
                name: "color",
                title: $.t("Text color"),
                inputType: "colorPicker",
                iconSvgCode: Z,
              },
              {
                name: "backgroundColor",
                title: $.t("Background Color"),
                inputType: "colorPicker",
                iconSvgCode: U,
                showIf: function (t, e) {
                  return !e || !e.fillBackground || !!e.fillBackground.value();
                },
              },
              {
                name: "borderColor",
                title: $.t("Border Color"),
                inputType: "colorPicker",
                iconSvgCode: G,
              },
              {
                name: "bordercolor",
                title: $.t("Border Color"),
                inputType: "colorPicker",
                iconSvgCode: G,
              },
              {
                name: "fontsize",
                title: $.t("Font Size"),
                inputType: "combobox",
                simple: !0,
                addClass: "simple fontsize-dropdown",
                comboboxOptions: [10, 11, 12, 14, 16, 20, 24, 28, 32, 40],
              },
            ];
          }),
          (T.prototype._notePropertiesExceptionCases = function () {
            return [
              {
                name: "markerColor",
                title: $.t("Marker Color"),
                inputType: "colorPicker",
                iconSvgCode: G,
              },
              {
                name: "textColor",
                title: $.t("Text color"),
                inputType: "colorPicker",
                iconSvgCode: Z,
              },
              {
                name: "fontSize",
                title: $.t("Font Size"),
                inputType: "combobox",
                simple: !0,
                addClass: "simple fontsize-dropdown",
                comboboxOptions: [10, 11, 12, 14, 16, 20, 24, 28, 32, 40],
              },
            ];
          }),
          (T.prototype._trackContextAction = function (t) {
            const e = l.tool.value();
            if (_(e)) {
              const o = this.selectedSources().filter((t) => _(t.toolname)),
                i =
                  0 === o.length || o[0].toolname !== e
                    ? "Context action before finishing drawings"
                    : "Context action on drawings";
              return void b("GUI", i, t);
            }
            const o =
              null === this.activeChartWidget().model().lineBeingCreated() &&
              l.toolIsCursor(e)
                ? "Context action on drawings"
                : "Context action before finishing drawings";
            b("GUI", o, t);
          }),
          (T.prototype._createToolExceptionCases = function () {
            return {
              LineToolRegressionTrend: [],
              LineToolText: T.prototype._textPropertiesExceptionCases(),
              LineToolTextAbsolute: T.prototype._textPropertiesExceptionCases(),
              LineToolBalloon: T.prototype._textPropertiesExceptionCases(),
              LineToolCallout: T.prototype._textPropertiesExceptionCases(),
              LineToolPriceLabel: T.prototype._textPropertiesExceptionCases(),
              LineToolDateRange: T.prototype._rangeExceptionCases(),
              LineToolPriceRange: T.prototype._rangeExceptionCases(),
              LineToolDateAndPriceRange: T.prototype._rangeExceptionCases(),
              LineToolNote: T.prototype._notePropertiesExceptionCases(),
              LineToolNoteAbsolute: T.prototype._notePropertiesExceptionCases(),
              LineToolRiskRewardLong:
                T.prototype._riskPropertiesExceptionCases(),
              LineToolRiskRewardShort:
                T.prototype._riskPropertiesExceptionCases(),
              LineToolBarsPattern: [
                {
                  name: "color",
                  title: K,
                  inputType: "colorPicker",
                  iconSvgCode: U,
                },
              ],
              LineToolProjection: [
                {
                  name: "color1",
                  title: $.t("Background color 1"),
                  inputType: "colorPicker",
                  iconSvgCode: U,
                  transparency: !0,
                },
                {
                  name: "color2",
                  title: $.t("Background color 2"),
                  inputType: "colorPicker",
                  iconSvgCode: U,
                  transparency: !0,
                },
                {
                  name: "linewidth",
                  inputType: "combobox",
                  comboboxOptions: [
                    { value: 1, iconSvgCode: V },
                    { value: 2, iconSvgCode: z },
                    { value: 3, iconSvgCode: M },
                    { value: 4, iconSvgCode: I },
                  ],
                },
              ],
              LineToolSignpost: [
                {
                  name: "fontSize",
                  title: $.t("Font Size"),
                  inputType: "combobox",
                  simple: !0,
                  addClass: "simple fontsize-dropdown",
                  comboboxOptions: [10, 11, 12, 14, 16, 20, 24, 28, 32, 40],
                },
                {
                  name: "linesColors",
                  inputType: "colorPicker",
                  iconSvgCode: U,
                  title: K,
                  factory: T.prototype._createBackgroundsButton,
                  showIf: function (t, e) {
                    return e && e.showImage.value();
                  },
                },
              ],
            };
          }),
          (t.exports = T);
      }.call(this, o("Kxc7"), o("tc+8")));
    },
    turx: function (t, e, o) {
      "use strict";
      o.r(e),
        o.d(e, "CollectibleColorPropertyUndoWrapper", function () {
          return a;
        }),
        o.d(e, "CollectibleColorPropertyDirectWrapper", function () {
          return l;
        });
      var i = o("mrSG"),
        n = o("Eyy1"),
        r = o("tc+8"),
        s = (function (t) {
          function e(e) {
            var o = t.call(this) || this;
            return (
              (o._listenersMappers = []),
              (o._isProcess = !1),
              (o._baseProperty = e),
              o
            );
          }
          return (
            Object(i.c)(e, t),
            (e.prototype.destroy = function () {
              this._baseProperty.destroy();
            }),
            (e.prototype.value = function () {
              var t = this._baseProperty.value();
              return "mixed" === t ? "" : t;
            }),
            (e.prototype.visible = function () {
              return this._baseProperty.visible();
            }),
            (e.prototype.setValue = function (t) {
              var e = this;
              (this._isProcess = !0),
                this._baseProperty.setValue("" === t ? "mixed" : t, void 0, {
                  applyValue: this._applyValue.bind(this),
                }),
                (this._isProcess = !1),
                this._listenersMappers.forEach(function (t) {
                  t.method.call(t.obj, e);
                });
            }),
            (e.prototype.subscribe = function (t, e) {
              var o = this,
                i = function (i) {
                  o._isProcess || e.call(t, o);
                },
                n = { obj: t, method: e, callback: i };
              this._listenersMappers.push(n),
                this._baseProperty.subscribe(t, i);
            }),
            (e.prototype.unsubscribe = function (t, e) {
              var o,
                i = Object(n.ensureDefined)(
                  null ===
                    (o = this._listenersMappers.find(function (o) {
                      return o.obj === t && o.method === e;
                    })) || void 0 === o
                    ? void 0
                    : o.callback
                );
              this._baseProperty.unsubscribe(t, i);
            }),
            (e.prototype.unsubscribeAll = function (t) {
              this._baseProperty.unsubscribeAll(t);
            }),
            e
          );
        })(o.n(r).a),
        a = (function (t) {
          function e(e, o, i) {
            var n = t.call(this, e) || this;
            return (n._undoModel = o), (n._undoText = i), n;
          }
          return (
            Object(i.c)(e, t),
            (e.prototype._applyValue = function (t, e) {
              this._undoModel.setProperty(t, e, this._undoText);
            }),
            e
          );
        })(s),
        l = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(i.c)(e, t),
            (e.prototype._applyValue = function (t, e) {
              t.setValue(e);
            }),
            e
          );
        })(s);
    },
    tzjn: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M1.5 2H0v12c0 .825.675 1.5 1.5 1.5h12V14h-12V2zm13.056-2H4.445c-.794 0-1.444.65-1.444 1.444v10.111c0 .794.65 1.444 1.444 1.444h10.111c.794 0 1.444-.65 1.444-1.444V1.444C16 .65 15.35 0 14.556 0z"/></svg>';
    },
    wLZl: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 6" width="22" height="6"><path d="M1.5 2a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1h-19z"/></svg>';
    },
    yB98: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 12"><path fillRule="evenodd" d="M0 0h2v2H0V0zm4 0h2v2H4V0zM0 5h2v2H0V5zm4 0h2v2H4V5zm-4 5h2v2H0v-2zm4 0h2v2H4v-2z"/></svg>';
    },
    znEV: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 6" width="22" height="6"><path d="M2 1a1.5 1.5 0 0 0 0 3h18a1.5 1.5 0 0 0 0-3H2z"/></svg>';
    },
  },
]);
