(window.webpackJsonp = window.webpackJsonp || []).push([
  ["dialogs-core"],
  {
    "6aJD": function (t, e, o) {
      "use strict";
      var n = o("APlX");
      o.d(e, "a", function () {
        return n.TVModal;
      });
    },
    APlX: function (t, e, o) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.TVModal = void 0);
        var n =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var o = arguments[e];
                for (var n in o)
                  Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
              }
              return t;
            },
          i = (function () {
            function t(t, e) {
              for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(t, n.key, n);
              }
            }
            return function (e, o, n) {
              return o && t(e.prototype, o), n && t(e, n), e;
            };
          })();
        e.isOpenedModals = function () {
          return 0 !== v.length;
        };
        var s = p(o("9uLv")),
          r = o("qFKp"),
          a = o("Nkvk"),
          l = o("KHon"),
          c = o("c2JX"),
          u = p(o("6et/")),
          d = p(o("lxNp"));
        function p(t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var o in t)
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return (e.default = t), e;
        }
        function h(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function f(t, e) {
          if (!t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
        }
        var v = [],
          g = {
            ajax: {},
            closingDuration: s.dur / 2,
            fixBodyState: !0,
            overlayTemplate: '<div class="tv-dialog__overlay"></div>',
            containerTemplate:
              '<div class="tv-dialog__modal-wrap"><div class="tv-dialog__modal-container"><div class="tv-dialog__modal-body"></div></div></div>',
            ajaxErrorTemplate:
              '<div class="tv-dialog__error js-dialog__close">' +
              window.t("Error") +
              "</div>",
          };
        e.TVModal = (function (e) {
          function o() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            h(this, o);
            var e = f(
              this,
              (o.__proto__ || Object.getPrototypeOf(o)).call(this, n({}, g, t))
            );
            if (
              ((e.$overlay = $(e.options.overlayTemplate)),
              (e.$modalWrap = $(e.options.containerTemplate)),
              (e.$body = e.$modalWrap
                .find(".tv-dialog__modal-body")
                .append(e.$el)),
              e.options.closeOnOutsideClick &&
                e.$overlay.add(e.$modalWrap).click(function (t) {
                  e.isEventOut(t) && e.close();
                }),
              e.on("change:zIndex", function () {
                e.$overlay.css("z-index", e.zIndex),
                  e.$modalWrap.css("z-index", e.zIndex);
              }),
              e.on("destroy", function () {
                var t = function () {
                  e.$overlay.remove(), e.$modalWrap.remove();
                };
                e.opened
                  ? (e.close(), setTimeout(t, e.options.closingDuration))
                  : t();
              }),
              e.on("beforeOpen", function () {
                v.push(e);
              }),
              e.options.ajax.url)
            ) {
              var i = e.options.ajax.beforeSend || $.noop,
                s = e.options.ajax.success || !1,
                r = e.options.ajax.error || $.noop;
              $.extend(e.options.ajax, {
                beforeSend: function () {
                  e.trigger("beforeLoading", [e]), e.startSpinner(), i(e);
                },
                success: function (t) {
                  e.trigger("afterLoading", [e]),
                    e.renderContent(s ? s(e, t) : t).showContent(),
                    e.trigger("afterLoadingShow", [e]);
                },
                error: function () {
                  e.renderContent(e.options.ajaxErrorTemplate),
                    r(e),
                    e.trigger("errorLoading", [e]);
                },
              });
            }
            return (
              e.on("error", function (t, o) {
                e.$modalWrap[0].getBoundingClientRect().height <
                  e.$content[0].getBoundingClientRect().height &&
                  o.addClass("i-fixed").css({ width: e.$el.width() });
              }),
              (e._keyboardBinderLockId = null),
              e
            );
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
            })(o, e),
            i(o, [
              {
                key: "open",
                value: function () {
                  var t = this;
                  if (!this.opened) {
                    (this.opened = !0),
                      (this._keyboardBinderLockId = u.disable()),
                      this.options.fixBodyState && (0, a.setFixedBodyState)(!0),
                      this._hotkeys ||
                        ((this._hotkeys = d.createGroup({
                          desc: "Modal Dialog",
                          isDisabled: function () {
                            return !t.opened;
                          },
                          modal: !0,
                        })),
                        this.options.closeOnEsc &&
                          this._hotkeys.add({
                            desc: "close",
                            hotkey: 27,
                            handler: function () {
                              return t.close();
                            },
                          }));
                    var e = function () {
                      t.focus(),
                        t.toTop(),
                        t.trigger("beforeOpen", [t]),
                        $(t.$wrap)
                          .append(
                            t.$overlay
                              .addClass("i-hidden i-closed")
                              .css("z-index", t.zIndex)
                          )
                          .append(
                            t.$modalWrap
                              .addClass("i-hidden i-closed")
                              .css("z-index", t.zIndex)
                          ),
                        t.$overlay.removeClass("i-hidden"),
                        setTimeout(function () {
                          t.$overlay.removeClass("i-closed");
                        }, 20),
                        t.options.ajax.url
                          ? (t.ajaxRequest = $.ajax(t.options.ajax))
                          : t.showContent();
                    };
                    return (
                      r.isSafari
                        ? setTimeout(function () {
                            return e();
                          }, 50)
                        : e(),
                      this
                    );
                  }
                },
              },
              {
                key: "close",
                value: function () {
                  var e = this;
                  if (this.opened)
                    return (
                      (this.opened = !1),
                      this._keyboardBinderLockId &&
                        u.enable(this._keyboardBinderLockId),
                      this._hotkeys &&
                        (this._hotkeys.destroy(), (this._hotkeys = null)),
                      this.trigger("beforeClose", [this]),
                      this.ajaxRequest &&
                        (this.ajaxRequest.abort(), delete this.ajaxRequest),
                      this.hideContent(),
                      this.$overlay.addClass("i-closed"),
                      setTimeout(function () {
                        e.$modalWrap.addClass("i-hidden").detach(),
                          e.$overlay.addClass("i-hidden").detach(),
                          (v = t.without(v, e)),
                          e.options.fixBodyState &&
                            (0, a.setFixedBodyState)(!1),
                          e.trigger("afterClose", [e]),
                          e.unfocus(),
                          v.length > 0 && v[v.length - 1].focus(),
                          e.options.destroyOnClose && e.destroy();
                      }, this.options.closingDuration),
                      this
                    );
                },
              },
              {
                key: "showContent",
                value: function () {
                  var t = this;
                  return (
                    this.$modalWrap.removeClass("i-hidden"),
                    setTimeout(function () {
                      t.$modalWrap.removeClass("i-closed");
                    }, 20),
                    setTimeout(function () {
                      t.trigger("afterOpen", [t]), t.spinner && t.stopSpinner();
                    }, 0.75 * s.dur + 20),
                    this
                  );
                },
              },
              {
                key: "hideContent",
                value: function () {
                  if (this.$el)
                    return (
                      this.$modalWrap.addClass("i-closed"), this.unfocus(), this
                    );
                },
              },
              {
                key: "startSpinner",
                value: function () {
                  return (
                    (this.spinner = new c.Spinner("large")),
                    this.spinner.spin(this.$overlay[0]),
                    this
                  );
                },
              },
              {
                key: "stopSpinner",
                value: function () {
                  if (this.spinner)
                    return this.spinner.stop(), delete this.spinner, this;
                },
              },
            ]),
            o
          );
        })(l.TVDialogAbstract);
      }.call(this, o("F/us")));
    },
    KHon: function (t, e, o) {
      "use strict";
      o.r(e);
      var n = o("v2PZ");
      o.d(e, "TVDialogAbstract", function () {
        return n.TVDialogAbstract;
      }),
        o.d(e, "closeAllDialogs", function () {
          return n.closeAllDialogs;
        });
    },
    nZrM: function (t, e, o) {},
    nbyR: function (t, e, o) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.TVPopup = void 0);
      var n =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var o = arguments[e];
              for (var n in o)
                Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
            }
            return t;
          },
        i = (function () {
          function t(t, e) {
            for (var o = 0; o < e.length; o++) {
              var n = e[o];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, o, n) {
            return o && t(e.prototype, o), n && t(e, n), e;
          };
        })(),
        s = d(o("9uLv")),
        r = o("Nkvk"),
        a = o("KHon"),
        l = o("sFgq"),
        c = o("A6WY"),
        u = d(o("lxNp"));
      function d(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var o in t)
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return (e.default = t), e;
      }
      function p(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function h(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
      }
      var f = $("body"),
        v = $(window),
        g = {
          closeOnClickAtOtherDialogs: !0,
          draggable: !0,
          scrollWrap: '<div class="tv-dialog__scroll-wrap">',
          scrollWrapInner: '<div class="tv-dialog__scroll-wrap-inner">',
          withScroll: !0,
        };
      e.TVPopup = (function (t) {
        function e() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          p(this, e);
          var o = h(
            this,
            (e.__proto__ || Object.getPrototypeOf(e)).call(this, n({}, g, t))
          );
          (o.$scrollWrap = o.$content.hasClass("js-dialog__scroll-wrap")
            ? o.$content
            : o.$content.find(".js-dialog__scroll-wrap")),
            o.$scrollWrap.length
              ? (o.$scrollWrapInner = o.$scrollWrap.children().first())
              : ((o.$scrollWrap = o.$content
                  .wrap($(o.options.scrollWrap))
                  .parent()),
                (o.$scrollWrapInner = o.$content
                  .wrap($(o.options.scrollWrapInner))
                  .parent())),
            o.$actions && o.$scrollWrap.addClass("i-with-actions"),
            o.options.withScroll &&
              ((o.scroll = new l.SidebarCustomScroll(
                o.$scrollWrap,
                o.$scrollWrapInner
              )),
              o.scroll.scrolled.subscribe(null, function () {
                return o.trigger("scroll");
              })),
            o.$scrollWrap.css("overflow", "");
          var i = o.getDialogId();
          return (
            o.$el.addClass("tv-dialog--popup i-closed i-hidden"),
            o.options.width &&
              o.$el.css({
                width: "calc(100% - 20px)",
                "max-width": o.options.width,
              }),
            (o._hotkeys = u.createGroup({
              desc: "Dialog",
              isDisabled: function () {
                return !o.opened;
              },
              modal: !1,
            })),
            o.options.closeOnEsc &&
              o._hotkeys.add({
                desc: "Close",
                hotkey: 27,
                handler: function () {
                  return o.close();
                },
              }),
            o.$el.on("mousedown touchstart", o.toTop.bind(o)),
            o.options.closeOnOutsideClick &&
              ((o._preventClick = !0),
              o.on("beforeOpen", function () {
                setTimeout(function () {
                  o.opened &&
                    ($(document).on("mousedown touchstart", function () {
                      o._preventClick = !1;
                    }),
                    $(document).on("click.tv-popup-" + i, function (t) {
                      if (!o._preventClick) {
                        var e = $(t.target).closest(".js-dialog");
                        (o.options.closeOnClickAtOtherDialogs ||
                          0 === e.length) &&
                          o.isEventOut(t) &&
                          o.close();
                      }
                    }));
                }, 0);
              }),
              o.on("beforeClose", function () {
                return $(document).off("click.tv-popup-" + i);
              })),
            o.on("change:zIndex", function () {
              o.$el.css("z-index", o.zIndex);
            }),
            o.on("destroy", function () {
              var t = function () {
                o.$el.remove(), o._hotkeys.destroy();
              };
              o.opened ? (o.close(), setTimeout(t, s.dur / 2)) : t();
            }),
            o
          );
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
          i(e, [
            {
              key: "open",
              value: function () {
                var t = this;
                return (
                  this.opened ||
                    ((this.opened = !0),
                    this.trigger("beforeOpen", [this]),
                    this.$el
                      .appendTo(this.$wrap)
                      .removeClass("i-hidden")
                      .css(
                        (function () {
                          t.calcHeight();
                          var e = v.height(),
                            o = v.width(),
                            n = t.$el.height(),
                            i = t.$el.width(),
                            s = t.options.position;
                          return (
                            s ||
                              (s = { top: e / 2 - n / 2, left: o / 2 - i / 2 }),
                            s.top > e - n && (s.top = e - n),
                            s.left > o - i && (s.left = o - i),
                            s.top < 10 && (s.top = 10),
                            s.left < 10 && (s.left = 10),
                            s
                          );
                        })()
                      ),
                    this.focus(),
                    this.toTop(),
                    this._doOpenAnimation().then(function () {
                      t.opened &&
                        (t.$el.removeClass("i-closed"),
                        t.options.draggable &&
                          ((0, c.lazyJqueryUI)(t.$el).draggable({
                            handle: ".js-dialog__drag",
                            cancel:
                              "input, textarea, button, select, option, .js-dialog__no-drag, .js-dialog__close",
                            containment: "window",
                            cursor: "-webkit-grabbing",
                            stop: function (e, o) {
                              t.trigger("dragEnd", [t]);
                            },
                          }),
                          t.$el
                            .find(".js-dialog__drag")
                            .addClass("tv-dialog__grab")),
                        t.trigger("afterOpen", [t]));
                    }),
                    v.on("resize.tv-popup-" + this.getDialogId(), function () {
                      t.calcHeight(), t.fixPos();
                    })),
                  this
                );
              },
            },
            {
              key: "close",
              value: function () {
                var t = this;
                if (this.opened)
                  return (
                    this.trigger("beforeClose", [this]),
                    this.$el.addClass("i-closed"),
                    (this.opened = !1),
                    this._doCloseAnimation().then(function () {
                      t.opened ||
                        ((0, c.lazyJqueryUI)(t.$el)
                          .draggable("instance")
                          .then(function (t) {
                            t && t.destroy();
                          }),
                        t.$el.addClass("i-hidden").detach(),
                        f.css("cursor", "auto"),
                        t.trigger("afterClose", [t]),
                        t.options.destroyOnClose && t.destroy());
                    }),
                    v.off("resize.tv-popup-" + this.getDialogId()),
                    this
                  );
              },
            },
            {
              key: "hide",
              value: function () {
                this.$el.addClass("i-hidden");
              },
            },
            {
              key: "show",
              value: function () {
                this.$el.removeClass("i-hidden");
              },
            },
            {
              key: "fixPos",
              value: function () {
                var t = this.$el[0].getBoundingClientRect(),
                  e = {};
                t.bottom > r.mediaState.height - 10 &&
                  ((e.top = r.mediaState.height - 10 - t.height),
                  e.top < 10 && (e.top = 10)),
                  t.right > r.mediaState.width - 10 &&
                    ((e.left = r.mediaState.width - 10 - t.width),
                    e.left < 10 && (e.left = 10)),
                  (e.top || e.left) && this.$el.css(e);
              },
            },
            {
              key: "calcHeight",
              value: function () {
                var t = this.$el[0].getBoundingClientRect(),
                  e = this.$scrollWrapInner[0].getBoundingClientRect(),
                  o = this.$scrollWrap[0].getBoundingClientRect(),
                  n =
                    this.options.height &&
                    this.options.height < r.mediaState.height - 20
                      ? this.options.height
                      : r.mediaState.height - 20;
                this.$scrollWrap
                  .css({ height: "" })
                  .removeClass("i-scrollable");
                var i = this.$el[0].getBoundingClientRect();
                (this.options.height || i.height > n) &&
                  ((n -= t.height - o.height) < 60 && (n = 60),
                  this.$scrollWrap.css({ height: n })),
                  this.options.withScroll && this.scroll.resize();
                var s = n < e.height;
                s || this.$scrollWrapInner.css("top", 0),
                  this.$scrollWrap.toggleClass("i-scrollable", s),
                  this.$actions &&
                    this.$actions.toggleClass(
                      "tv-dialog__section--actions_with-border",
                      s
                    );
              },
            },
            {
              key: "updateScroll",
              value: function () {
                this.scroll &&
                  (this.scroll.updateScroll(), this.scroll.updateScrollBar());
              },
            },
            {
              key: "scrollToStart",
              value: function () {
                this.scroll && this.scroll.scrollToStart();
              },
            },
            {
              key: "_doOpenAnimation",
              value: function () {
                return Promise.resolve();
              },
            },
            {
              key: "_doCloseAnimation",
              value: function () {
                return Promise.resolve();
              },
            },
          ]),
          e
        );
      })(a.TVDialogAbstract);
    },
    qNVo: function (t, e, o) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ButtonLoader = void 0);
      var n = (function () {
        function t(t, e) {
          for (var o = 0; o < e.length; o++) {
            var n = e[o];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function (e, o, n) {
          return o && t(e.prototype, o), n && t(e, n), e;
        };
      })();
      (e.buttonLoader = function (t) {
        return new r($(t));
      }),
        o("IwoD");
      var i = o("29gu"),
        s = (function (t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var o in t)
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return (e.default = t), e;
        })(o("9uLv"));
      $.fn.tvButtonLoader = (0, i.createTvBlockWithInstance)(
        "tv-button-loader",
        function (t) {
          return new r(t);
        }
      );
      var r = (e.ButtonLoader = (function () {
        function t(e) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.$btn = $(e).addClass("tv-button--loader")),
            0 === this.$btn.find(".tv-button__loader").length &&
              this.$btn.html(
                '<span class="tv-button__text">' +
                  this.$btn.html() +
                  '</span><span class="tv-button__loader"><span class="tv-button__loader-item"></span><span class="tv-button__loader-item"></span><span class="tv-button__loader-item"></span></span>'
              ),
            (this.loading = this.$btn.hasClass("i-loading"));
        }
        return (
          n(t, [
            {
              key: "_start",
              value: function () {
                var t = this;
                (this.starting = !0),
                  this.$btn.addClass("i-start-load"),
                  this.$btn.trigger("tv-button-loader:start"),
                  setTimeout(function () {
                    (t.loading = !0),
                      (t.starting = !1),
                      (t._startPromise = !1),
                      t.$btn.addClass("i-loading"),
                      t.$btn.removeClass("i-start-load"),
                      t._stopPromise && t._stop();
                  }, 2 * s.dur);
              },
            },
            {
              key: "start",
              value: function () {
                this.starting ||
                  (this.stopping ? (this._startPromise = !0) : this._start());
              },
            },
            {
              key: "_stop",
              value: function () {
                var t = this;
                (this.stopping = !0),
                  this.$btn.addClass("i-stop-load"),
                  this.$btn.trigger("tv-button-loader:stop"),
                  setTimeout(function () {
                    (t.loading = !1),
                      (t.stopping = !1),
                      (t._stopPromise = !1),
                      t.$btn.removeClass("i-loading i-start-load i-stop-load"),
                      t._startPromise && t._start();
                  }, s.dur);
              },
            },
            {
              key: "stop",
              value: function () {
                this.stopping ||
                  (this.starting ? (this._stopPromise = !0) : this._stop());
              },
            },
            {
              key: "toggle",
              value: function () {
                this.loading ? this.stop() : this.start();
              },
            },
            {
              key: "contentHtml",
              value: function (t) {
                return t
                  ? (this.$btn.find(".tv-button__text").html(t), t)
                  : this.$btn.find(".tv-button__text").html();
              },
            },
            {
              key: "contentNojQuery",
              value: function () {
                return this.$btn.get(0);
              },
            },
            {
              key: "disable",
              value: function () {
                this.stop(), this.$btn.addClass("i-disabled");
              },
            },
            {
              key: "enable",
              value: function () {
                this.$btn.removeClass("i-disabled");
              },
            },
          ]),
          t
        );
      })());
    },
    tKRU: function (t, e, o) {
      "use strict";
      var n = o("nbyR");
      o.d(e, "a", function () {
        return n.TVPopup;
      });
    },
    v2PZ: function (t, e, o) {
      "use strict";
      (function (t, n) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.TVDialogAbstract = void 0);
        var i = function (t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t))
              return (function (t, e) {
                var o = [],
                  n = !0,
                  i = !1,
                  s = void 0;
                try {
                  for (
                    var r, a = t[Symbol.iterator]();
                    !(n = (r = a.next()).done) &&
                    (o.push(r.value), !e || o.length !== e);
                    n = !0
                  );
                } catch (l) {
                  (i = !0), (s = l);
                } finally {
                  try {
                    !n && a.return && a.return();
                  } finally {
                    if (i) throw s;
                  }
                }
                return o;
              })(t, e);
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          },
          s =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var o = arguments[e];
                for (var n in o)
                  Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
              }
              return t;
            },
          r = (function () {
            function t(t, e) {
              for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(t, n.key, n);
              }
            }
            return function (e, o, n) {
              return o && t(e.prototype, o), n && t(e, n), e;
            };
          })();
        e.closeAllDialogs = function () {
          v.forEach(function (t) {
            return t.close();
          });
        };
        var a = (function (t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var o in t)
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return (e.default = t), e;
        })(o("9uLv"));
        o("qNVo");
        var l = d(o("QwKQ"));
        o("nZrM"), o("nec0"), o("IwoD");
        var c = d(o("4O8T")),
          u = o("jAh7");
        function d(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function p(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function h(t, e) {
          if (!t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
        }
        var f = 0,
          v = [],
          g = void 0,
          b = $(document),
          y = {
            closeOnEsc: !0,
            closeButton: !0,
            focusFirstControl: !0,
            closeOnOutsideClick: !0,
            closeButtonAddClass: "",
            focusClass: "i-focused",
            template: '<div class="tv-dialog" tabindex="-1">',
            errorTemplate:
              '<div class="tv-dialog__error i-slided{{# errorMod }} tv-dialog__error--{{ errorMod }}{{/ errorMod }}">{{{ error }}}</div>',
            titleTemplate:
              '<div class="tv-dialog__section tv-dialog__section--title js-dialog__drag"><div class="js-title-text tv-dialog__title">{{{ title }}}</div></div>',
            contentWrapTemplate:
              '<div class="tv-dialog__section tv-dialog__section--no-border">',
            actionsWrapTemplate:
              '<div class="tv-dialog__section tv-dialog__section--actions tv-dialog__section--no-border">',
            closeButtonTemplate:
              '<div class="tv-dialog__close js-dialog__close">' +
              o("uo4K") +
              "</div>",
            helpButtonTemplate:
              '<a href="{{{ link }}}" target="_blank" class="tv-dialog__help apply-common-tooltip" title="{{{ title }}}"></a>',
            helpActionsMod: "tv-dialog__section--actions_with-help",
          },
          _ = {
            default: "tv-button tv-button--default",
            primary: "tv-button tv-button--primary",
            success: "tv-button tv-button--success",
            danger: "tv-button tv-button--danger",
            warning: "tv-button tv-button--warning",
            link: "tv-button tv-button--link",
            checkbox: "tv-control-checkbox tv-control-checkbox--in-actions",
            "default-ghost": "tv-button tv-button--default_ghost",
            "primary-ghost": "tv-button tv-button--primary_ghost",
            "success-ghost": "tv-button tv-button--success_ghost",
            "danger-ghost": "tv-button tv-button--danger_ghost",
            "warning-ghost": "tv-button tv-button--warning_ghost",
          },
          m = {
            _default:
              '<div data-name="{{ name }}" class="js-dialog__action-click js-dialog__no-drag {{ class }}">{{ text }}</div>',
            "submit-primary":
              '<button type="submit" class="tv-button tv-button--primary">{{ text }}</button>',
            "submit-success":
              '<button type="submit" class="tv-button tv-button--success">{{ text }}</button>',
          },
          k = (function (e) {
            function o() {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              p(this, o);
              var n = h(
                this,
                (o.__proto__ || Object.getPrototypeOf(o)).call(this)
              );
              if (
                ((n.manager =
                  e.manager || (0, u.getRootOverlapManager)(e.ownerDocument)),
                (n._id = f++),
                (n.loadingActions = []),
                (n.disabledActions = []),
                (n.firstFocusControl = null),
                (n.options = s({}, y, e)),
                (n.$el = $(
                  t.render(n.options.template, {
                    title: n.options.title,
                    closeButton: n.options.closeButton,
                  })
                )),
                n.$el.addClass("js-dialog"),
                (n.el = n.$el[0]),
                n.options.dataset)
              ) {
                var r = !0,
                  a = !1,
                  c = void 0;
                try {
                  for (
                    var d,
                      g = Object.entries(n.options.dataset)[Symbol.iterator]();
                    !(r = (d = g.next()).done);
                    r = !0
                  ) {
                    var k = d.value,
                      w = i(k, 2),
                      C = w[0],
                      O = w[1];
                    "string" == typeof O && n.el.setAttribute("data-" + C, O);
                  }
                } catch (P) {
                  (a = !0), (c = P);
                } finally {
                  try {
                    !r && g.return && g.return();
                  } finally {
                    if (a) throw c;
                  }
                }
              }
              for (
                n.options.addClass && n.$el.addClass(n.options.addClass),
                  n.options.width &&
                    n.$el.css({ width: "100%", "max-width": n.options.width }),
                  n.on("beforeOpen", function () {
                    n.$wrap = n.manager.ensureWindow(n._id);
                  }),
                  n.on("afterClose", function () {
                    (n.$wrap = null), n.manager.unregisterWindow(n._id);
                  }),
                  n.options.title &&
                    (n.$title = $(
                      t.render(n.options.titleTemplate, {
                        title: n.options.title,
                      })
                    ).appendTo(n.$el)),
                  n.$content = $(n.options.contentWrapTemplate).appendTo(n.$el),
                  n.$contentIn = n.$content;
                n.$contentIn.length;

              )
                n.$contentIn = n.$contentIn.children();
              if (
                ((n.$contentIn = n.$contentIn.end()),
                n.options.content && n.renderContent(n.options.content),
                (n.options.actions || n.options.help) &&
                  (n.$content.hasClass("tv-dialog__section") &&
                    n.$content.addClass(
                      "tv-dialog__section--no-padding_bottom"
                    ),
                  (n.$actions = $(n.options.actionsWrapTemplate).appendTo(
                    n.$el
                  ))),
                n.options.actions)
              ) {
                (n.actions = {}),
                  n.$el.on(
                    "click touchend",
                    ".js-dialog__action-click",
                    function (t) {
                      t.preventDefault(),
                        n.actionDispatcher($(t.currentTarget).data("name"));
                    }
                  );
                for (
                  var x = function (e) {
                      var o = n.options.actions[e];
                      if (
                        (o.type || (o.type = "default"),
                        o.class ||
                          (o.class = _[o.type] ? _[o.type] : _.default),
                        "checkbox" === o.type)
                      ) {
                        var i = new l.default({
                          labelRight: o.text,
                          name: o.name,
                          checked: o.checked,
                        });
                        (n.actions[o.name] = i.$el.appendTo(n.$actions)),
                          n.actions[o.name].on("change", function () {
                            setTimeout(function () {
                              return n.actionDispatcher(o.name, i.checked);
                            });
                          });
                      } else
                        n.actions[o.name] = $(
                          t.render(
                            o.template ? o.template : m[o.type] || m._default,
                            o,
                            o
                          )
                        ).appendTo(n.$actions);
                      if (
                        (o.method &&
                          "function" == typeof n[o.method] &&
                          n.on("action:" + o.name, n[o.method].bind(n)),
                        o.addClass && n.actions[o.name].addClass(o.addClass),
                        o.key)
                      ) {
                        var s = void 0;
                        if (
                          "string" == typeof o.key &&
                          o.key.split("+").length > 1
                        ) {
                          var r = [],
                            a = o.key.split("+");
                          s = function (t) {
                            r = [];
                          };
                          var c = function (t) {
                            var e = "" + t.keyCode;
                            -1 !== a.indexOf(e) && r.indexOf(e) && r.push(e),
                              n._focused &&
                                r.length === a.length &&
                                ((r = []), n.actionDispatcher(o.name));
                          };
                          n.on("afterOpen", function () {
                            b.on("keydown", c), b.on("keyup", s);
                          }),
                            n.on("beforeClose", function () {
                              b.off("keydown", c), b.off("keyup", s);
                            });
                        } else {
                          var u = $.isArray(o.key) ? o.key : [o.key];
                          (s = function (t) {
                            !t.isDefaultPrevented() &&
                              n._focused &&
                              -1 !== u.indexOf(t.keyCode) &&
                              n.actionDispatcher(o.name);
                          }),
                            n.on("afterOpen", function () {
                              return b.on("keyup", s);
                            }),
                            n.on("beforeClose", function () {
                              return b.off("keyup", s);
                            });
                        }
                      }
                    },
                    T = n.options.actions.length - 1;
                  T >= 0;
                  T--
                )
                  x(T);
              }
              if (
                (n.options.help &&
                  $(
                    t.render(n.options.helpButtonTemplate, n.options.help)
                  ).prependTo(n.$actions.addClass(n.options.helpActionsMod)),
                n.options.closeButton)
              ) {
                var j = $(n.options.closeButtonTemplate);
                j.addClass(n.options.closeButtonAddClass || "");
                var I = n.$el;
                1 === n.$el.find(".js-close-button-place").length &&
                  (I = n.$el.find(".js-close-button-place")),
                  j.appendTo(I);
              }
              return (
                n.setZIndex(110 + v.length),
                e.errorMod && (n.errorMod = e.errorMod),
                n.on("afterOpen", function () {
                  n.$el.focus(),
                    n.options.focusFirstControl &&
                      !Modernizr.mobiletouch &&
                      (
                        n.firstFocusControl ||
                        n.$el
                          .find('input:not([type="hidden"]), textarea')
                          .first()
                      ).focus();
                }),
                n.$el.on("click", ".js-dialog__close", n.close.bind(n)),
                n.$el.on("mousedown touchstart", n.focus.bind(n)),
                v.push(n),
                n
              );
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
              })(o, e),
              r(o, [
                {
                  key: "renderContent",
                  value: function (t) {
                    return (
                      this.$contentIn.html(
                        "function" == typeof t ? t(this) : t
                      ),
                      this
                    );
                  },
                },
                {
                  key: "setDestroyOnClose",
                  value: function (t) {
                    this.options.destroyOnClose = t;
                  },
                },
                {
                  key: "setZIndex",
                  value: function (t) {
                    return (
                      (this.zIndex = t),
                      this.trigger("change:zIndex", [this]),
                      this
                    );
                  },
                },
                {
                  key: "toTop",
                  value: function () {
                    for (var t = v.length - 1; t >= 0; t--)
                      v[t].zIndex > this.zIndex &&
                        v[t].setZIndex(v[t].zIndex - 1);
                    return (
                      this.setZIndex(110 + v.length),
                      this.manager.moveToTop(this._id),
                      this._hotkeys && this._hotkeys.promote(),
                      this
                    );
                  },
                },
                {
                  key: "isEventOut",
                  value: function (t) {
                    if (this.options.isClickOutFn) {
                      var e = this.options.isClickOutFn(t);
                      if (void 0 !== e) return e;
                    }
                    var o = !0,
                      n = $(t.target);
                    return (
                      n.get(0) !== this.$el.get(0) &&
                      ($(">*", this.$el).each(function () {
                        n.get(0) === $(this).get(0) && (o = !1),
                          0 === n.closest("HTML", $(this).get(0)).length &&
                            (o = !1);
                      }),
                      o)
                    );
                  },
                },
                {
                  key: "focus",
                  value: function () {
                    var t = this;
                    g && g !== this && g.unfocus(),
                      this._setFocused(),
                      (this._focused = !0),
                      this.$el.addClass(this.options.focusClass),
                      this.trigger("focus", [this]),
                      setTimeout(function () {
                        b.on(
                          "mousedown.tv-dialog-unfocus-" + t._id,
                          function (e) {
                            t.isEventOut(e) &&
                              (t.unfocus(),
                              b.off("mousedown.tv-dialog-unfocus-" + t._id));
                          }
                        );
                      }, 20);
                  },
                },
                {
                  key: "_setFocused",
                  value: function () {
                    g !== this && (g = this);
                  },
                },
                {
                  key: "_setUnfocused",
                  value: function () {
                    g === this && (g = void 0);
                  },
                },
                {
                  key: "unfocus",
                  value: function () {
                    g === this &&
                      (this._setUnfocused(),
                      (this._focused = !1),
                      this.$el
                        .removeClass(this.options.focusClass)
                        .find(":focus")
                        .blur(),
                      this.trigger("unfocus", [this]));
                  },
                },
                {
                  key: "isFocused",
                  value: function () {
                    return this._focused;
                  },
                },
                {
                  key: "setTitle",
                  value: function (t) {
                    var e =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                    return (
                      this.$title.toggleClass(
                        "tv-dialog__section--one-line apply-overflow-tooltip",
                        e
                      ),
                      this.$title.html(t),
                      this
                    );
                  },
                },
                {
                  key: "setTitleText",
                  value: function (t) {
                    this.$title.find(".js-title-text").text(t);
                  },
                },
                {
                  key: "actionDispatcher",
                  value: function (t) {
                    if (
                      !this.disabledActions.includes(t) &&
                      !this.loadingActions.includes(t)
                    ) {
                      for (
                        var e = arguments.length,
                          o = Array(e > 1 ? e - 1 : 0),
                          n = 1;
                        n < e;
                        n++
                      )
                        o[n - 1] = arguments[n];
                      this.trigger("action:" + t, [this].concat(o));
                    }
                  },
                },
                {
                  key: "toggleAction",
                  value: function (t, e) {
                    return (
                      e || this.disabledActions.includes(t)
                        ? e &&
                          this.disabledActions.includes(t) &&
                          (this.disabledActions = n.without(
                            this.disabledActions,
                            t
                          ))
                        : this.disabledActions.push(t),
                      this.actions[t].toggleClass("i-disabled", !e),
                      this
                    );
                  },
                },
                {
                  key: "actionLoader",
                  value: function (t) {
                    var e = this,
                      o =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "init";
                    return (
                      this.actions[t].tvButtonLoader(o),
                      "init" === o &&
                        (this.actions[t]
                          .off("tv-button-loader:start.dialog-action")
                          .on(
                            "tv-button-loader:start.dialog-action",
                            function () {
                              e.loadingActions.push(t);
                            }
                          ),
                        this.actions[t]
                          .off("tv-button-loader:stop.dialog-action")
                          .on(
                            "tv-button-loader:stop.dialog-action",
                            function () {
                              e.loadingActions = n.without(e.loadingActions, t);
                            }
                          )),
                      this
                    );
                  },
                },
                {
                  key: "error",
                  value: function (e) {
                    var o = $(
                      t.render(this.options.errorTemplate, {
                        error: e,
                        errorMod: this.errorMod,
                      })
                    ).appendTo(this.$el);
                    return (
                      setTimeout(function () {
                        return o.removeClass("i-slided");
                      }, 20),
                      b.one("touchstart mousedown keydown", function () {
                        o.addClass("i-slided"),
                          setTimeout(function () {
                            return o.remove();
                          }, 0.75 * a.dur);
                      }),
                      this.trigger("error", [this, o]),
                      this
                    );
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    (this.$wrap = null),
                      this.manager.unregisterWindow(this._id),
                      this._hotkeys && this._hotkeys.destroy(),
                      (v = n.without(v, this));
                    for (var t = 0; t < v.length; t++) v[t].setZIndex(110 + t);
                    this.trigger("destroy", [this]);
                  },
                },
                {
                  key: "isOpened",
                  value: function () {
                    return Boolean(this.opened);
                  },
                },
                {
                  key: "getDialogId",
                  value: function () {
                    return this._id;
                  },
                },
              ]),
              o
            );
          })(c.default);
        e.TVDialogAbstract = k;
      }.call(this, o("nbsC"), o("F/us")));
    },
  },
]);
