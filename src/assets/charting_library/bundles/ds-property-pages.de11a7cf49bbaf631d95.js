(window.webpackJsonp = window.webpackJsonp || []).push([
  ["ds-property-pages"],
  {
    "/4PT": function (t, e, i) {
      "use strict";
      i.r(e);
      i("P5fv"), i("oA7e");
      var o = (function () {
          function t(t, e) {
            (this.value = t), (this.html = e), (this.jqItem = this._render());
          }
          return (
            (t.prototype.eq = function (t) {
              return this.value === t;
            }),
            (t.prototype.width = function () {
              return this.jqItem.width();
            }),
            (t.prototype.render = function () {
              return this.jqItem;
            }),
            (t.prototype.select = function (t) {
              this.jqItem.toggleClass("selected", !!t);
            }),
            (t.prototype.selectAndReturnIfValueMatch = function (t) {
              return this.eq(t)
                ? (this.select(!0), this)
                : (this.select(!1), null);
            }),
            (t.prototype._render = function () {
              return $('<div class="item">').append(
                $("<span>").html(this.html)
              );
            }),
            t
          );
        })(),
        n = (function () {
          function t(t) {
            var e = this;
            (this._disabled = !1),
              (this._closeCb = null),
              (this.opened = !1),
              (this._value = null),
              (this.items = []),
              (this.width = 0),
              (this._jqWrapper = $('<div class="custom-select">')),
              this._jqWrapper.data({
                disable: this.disable.bind(this),
                enable: this.enable.bind(this),
              }),
              this._jqWrapper.selectable(!1),
              (this._jqSwitcher = $('<div class="switcher">').appendTo(
                this._jqWrapper
              )),
              this._jqSwitcher.on("click", function () {
                e.toggleItems();
              }),
              (this._jqTitle = $('<span class="title">').appendTo(
                this._jqSwitcher
              )),
              $('<span class="icon">').appendTo(this._jqSwitcher),
              (this._jqItems = $('<div class="items js-hidden">').appendTo(
                this._jqWrapper
              )),
              (this._callback = null),
              t && this.addItems(t);
          }
          return (
            (t.prototype.toggleItems = function () {
              this.opened ? this._close() : this._open();
            }),
            (t.prototype.setWidth = function () {
              this._jqWrapper.width(this.width);
            }),
            (t.prototype.render = function () {
              return this._jqWrapper;
            }),
            (t.prototype.selectItemByValue = function (t) {
              for (var e = null, i = 0, o = this.items; i < o.length; i++) {
                var n = o[i].selectAndReturnIfValueMatch(t);
                n && (e = n);
              }
              return e;
            }),
            (t.prototype.setValue = function (t) {
              if (this._value !== t) {
                var e = this.selectItemByValue(t);
                e &&
                  ((this._value = t),
                  this._jqTitle.html(e.html),
                  this.change());
              }
            }),
            (t.prototype.change = function (t) {
              t
                ? (this._callback = t)
                : this._callback && this._callback.call(this);
            }),
            (t.prototype.value = function () {
              return this._value;
            }),
            (t.prototype.val = function (t) {
              return void 0 !== t ? void this.setValue(t) : this.value();
            }),
            (t.prototype.addItems = function (t) {
              for (var e = 0, i = t; e < i.length; e++) {
                var o = i[e];
                this.addItem(o.value, o.html);
              }
            }),
            (t.prototype.addItem = function (t, e) {
              var i = this,
                n = new o(t, e);
              this.items.push(n);
              var a = n.render();
              a.on("click", function () {
                i.setValue(t), i.toggleItems();
              }),
                this._jqItems.append(a),
                null === this.value() && this.setValue(t);
            }),
            (t.prototype.disable = function () {
              this._disabled = !0;
            }),
            (t.prototype.enable = function () {
              this._disabled = !1;
            }),
            (t.prototype.disabled = function () {
              return this._disabled;
            }),
            (t.prototype._open = function () {
              var t = this;
              this._disabled ||
                (this._jqItems.removeClass("js-hidden"),
                this._jqSwitcher.addClass("open"),
                (this.opened = !0),
                this._closeCb ||
                  ((this._closeCb = {
                    host: this._jqSwitcher.prop("ownerDocument"),
                    cb: function (e) {
                      t._jqWrapper[0].contains(e.target) || t._close();
                    },
                  }),
                  this._closeCb.host.addEventListener(
                    "mousedown",
                    this._closeCb.cb,
                    !1
                  )));
            }),
            (t.prototype._close = function () {
              this._jqItems.addClass("js-hidden"),
                this._jqSwitcher.removeClass("open"),
                (this.opened = !1),
                this._closeCb &&
                  (this._closeCb.host.removeEventListener(
                    "mousedown",
                    this._closeCb.cb,
                    !1
                  ),
                  (this._closeCb = null));
            }),
            t
          );
        })(),
        a = i("8Uy/");
      function s() {
        return new n([
          {
            html: '<div class="tv-line-style-option tv-line-style-option--solid"/>',
            value: a.LINESTYLE_SOLID,
          },
          {
            html: '<div class="tv-line-style-option tv-line-style-option--dotted"/>',
            value: a.LINESTYLE_DOTTED,
          },
          {
            html: '<div class="tv-line-style-option tv-line-style-option--dashed"/>',
            value: a.LINESTYLE_DASHED,
          },
        ]);
      }
      i.d(e, "createLineStyleEditor", function () {
        return s;
      });
    },
    A3Hk: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, "createHHistDirectionEditor", function () {
          return n;
        });
      i("P5fv"), i("YFKU");
      var o = i("KG+6");
      function n() {
        var t = $("<select />");
        return (
          $(
            '<option value="' +
              o.a.LeftToRight +
              '">' +
              $.t("Left") +
              "</option>"
          ).appendTo(t),
          $(
            '<option value="' +
              o.a.RightToLeft +
              '">' +
              $.t("Right") +
              "</option>"
          ).appendTo(t),
          t
        );
      }
    },
    CBRs: function (t, e, i) {},
    ICcj: function (t, e, i) {
      "use strict";
      var o = i("DxCR").PropertyPage,
        n = i("L9lC").StudyInputsPropertyPage,
        a = i("n3Kh"),
        s = i("QloM");
      function r(t, e, i) {
        o.call(this, t, e), (this._linetool = i), this.prepareLayout();
      }
      inherit(r, a),
        (r.prototype.prepareLayoutImpl = n.prototype.prepareLayoutImpl),
        (r.prototype.prepareControl = n.prototype.prepareControl),
        (r.prototype._symbolInfoBySymbolProperty =
          n.prototype._symbolInfoBySymbolProperty),
        (r.prototype._sortInputs = n.prototype._sortInputs),
        (r.prototype.prepareLayout = function () {
          var t = $(
              '<table class="property-page" cellspacing="0" cellpadding="0">'
            ),
            e = $(
              '<table class="property-page" cellspacing="0" cellpadding="0">'
            ).data({
              "layout-tab": s.TabNames.inputs,
              "layout-tab-priority": s.TabPriority.Inputs,
            });
          this._table = t.add(e);
          for (var i = this._linetool.points(), o = 0; o < i.length; o++) {
            var a = $("<tr>");
            a.appendTo(t);
            var r = $("<td>");
            r.html($.t("Point bar", { point: o + 1 })), r.appendTo(a);
            var p = $("<td>");
            p.appendTo(a);
            var l = $("<input type='text'>");
            l.appendTo(p), l.addClass("ticker");
            var d = this._linetool.pointsProperty().points[o];
            this.bindBarIndex(
              d.bar,
              l,
              this.model(),
              "Change " + this._linetool.title() + " point bar index"
            );
          }
          var h = this._model
            .model()
            .studyMetaInfoRepository()
            .findByIdSync({ type: "java", studyId: this._linetool.studyId() });
          n.prototype.prepareLayoutImpl.call(this, h, e);
        }),
        (r.prototype.widget = function () {
          return this._table;
        }),
        (t.exports = r);
    },
    L9lC: function (t, e, i) {
      (function (t) {
        var o = i("DxCR"),
          n = o.UppercaseTransformer,
          a = o.SymbolBinder,
          s = o.BarTimeBinder,
          r = o.SessionBinder,
          p = o.PropertyPage,
          l = o.GreateTransformer,
          d = o.LessTransformer,
          h = o.ToIntTransformer,
          c = o.ToFloatTransformer,
          u = o.SymbolInfoSymbolTransformer,
          y = o.SimpleComboBinder,
          v = o.BooleanBinder,
          b = o.SimpleStringBinder,
          f = i("zXvd").NumericFormatter,
          C = i("0YCj"),
          m = i("txPx").getLogger("Chart.Study.PropertyPage.Inputs"),
          _ = i("pZll").symbolSearchUIService;
        function T(t, e, i, o, n) {
          p.call(this, t, e),
            (this._study = i),
            (this._showOnlyConfirmInputs = o),
            (this._symbolSearchZindex = n),
            this.prepareLayout(),
            (this._$symbolSearchPopup = null);
        }
        inherit(T, p),
          (T.prototype._addSessionEditor = function (t, e, i, o) {
            if ("session" === i.type) {
              var n = function (t, e) {
                  var i = $("<td/>");
                  i.appendTo(t),
                    i.css("padding-left", "0px"),
                    i.css("padding-right", "0px");
                  var o = $("<input>");
                  o.attr("type", "text"),
                    o.addClass("ticker"),
                    o.css("width", "40px"),
                    o.attr("id", e),
                    o.appendTo(i);
                },
                a = function (t, e, i) {
                  var o = $("<td/>");
                  o.css("padding-left", i),
                    o.css("padding-right", i),
                    o.appendTo(t);
                  var n = $("<div/>");
                  n.appendTo(o), n.append(e), n.css("font-size", "150%");
                },
                s = $("<table/>");
              s.appendTo(t);
              var p = $("<tr/>");
              p.appendTo(s);
              var l = [
                "start_hours",
                "start_minutes",
                "end_hours",
                "end_minutes",
              ];
              n.call(this, p, l[0]),
                a.call(this, p, ":", 0),
                n.call(this, p, l[1]),
                a.call(this, p, "-", 4),
                n.call(this, p, l[2]),
                a.call(this, p, ":", 0),
                n.call(this, p, l[3]);
              this.bindControl(new r(p, l, e, !1, this.model(), o));
            } else
              m.logError("Session editor adding FAILED: wrong input type.");
          }),
          (T.prototype.prepareControl = function (e, i, o) {
            var n = this;
            var a = null,
              s = null,
              r = null;
            if ("resolution" === e.type)
              a = $(
                '<select><option value="1">1</option><option value="3">3</option><option value="5">5</option><option value="15">15</option><option value="30">30</option><option value="45">45</option><option value="60">1' +
                  window.t("h", { context: "interval_short" }) +
                  '</option><option value="120">2' +
                  window.t("h", { context: "interval_short" }) +
                  '</option><option value="180">3' +
                  window.t("h", { context: "interval_short" }) +
                  '</option><option value="D">1' +
                  window.t("D", { context: "interval_short" }) +
                  '</option><option value="W">1' +
                  window.t("W", { context: "interval_short" }) +
                  "</option></select>"
              );
            else if ("symbol" === e.type)
              (a = $('<input class="symbol-edit single">')),
                _().bindToInput(a, {
                  onPopupOpen: function (t) {
                    (this._$symbolSearchPopup = t),
                      this._symbolSearchZindex &&
                        t.css("z-index", this._symbolSearchZindex);
                  }.bind(this),
                  onPopupClose: function () {
                    this._$symbolSearchPopup = null;
                  }.bind(this),
                  callback: function (t) {
                    e.value = t;
                  },
                }),
                i.attr("colspan", 5);
            else if ("session" === e.type)
              this._addSessionEditor(i, this._property.inputs[e.id], e, o);
            else if ("source" === e.type) {
              for (
                var p = {},
                  l = {
                    open: window.t("open"),
                    high: window.t("high"),
                    low: window.t("low"),
                    close: window.t("close"),
                    hl2: window.t("hl2"),
                    hlc3: window.t("hlc3"),
                    ohlc4: window.t("ohlc4"),
                  },
                  d = Object.keys(l),
                  h = 0;
                h < d.length;
                ++h
              )
                p[d[h]] || (p[d[h]] = d[h]);
              var c = this._study && this._study.isChildStudy();
              if (c) {
                var u = this._study.source().title(!0, null, !0),
                  y = C.getChildSourceInputTitles(
                    e,
                    this._study.source().metaInfo(),
                    u
                  );
                for (var v in p)
                  y[v] && (p[v] = 1 === Object.keys(y).length ? u : y[v]);
              }
              if (
                t.enabled("study_on_study") &&
                this._study &&
                C.isSourceInput(e) &&
                (c || C.canBeChild(this._study.metaInfo()))
              ) {
                var b = [this._study];
                b = b.concat(this._study.getAllChildren());
                for (
                  var f = this._model.model().allStudies(), T = 0;
                  T < f.length;
                  ++T
                ) {
                  var w = f[T];
                  if (-1 === b.indexOf(w) && w.canHaveChildren()) {
                    var g = w.title(!0, null, !0),
                      k = w.sourceId() || "#" + w.id(),
                      P = w.metaInfo(),
                      x = P.styles,
                      L = P.plots || [];
                    if (1 === L.length) p[k + "$0"] = g;
                    else {
                      var S;
                      for (h = 0; h < L.length; ++h)
                        (S = L[h]),
                          ~C.CHILD_STUDY_ALLOWED_PLOT_TYPES.indexOf(S.type) &&
                            (p[k + "$" + h] =
                              g +
                              ": " +
                              ((x && x[S.id] && x[S.id].title) || S.id));
                    }
                  }
                }
                (s = (function (t) {
                  return function (e) {
                    var i = null;
                    if (0 === e.indexOf("#")) {
                      var o = e.slice(1, e.indexOf("$")),
                        a = n._model.model().getStudyById(o);
                      if (null === a)
                        return void m.logError("Can not get Study by id " + o);
                      a.isStarted() || a.start(null, !0);
                      var s = a.sourceId();
                      if (!s)
                        return void m.logError(
                          "Can not get source id for " + a.metaInfo().id
                        );
                      i = e.replace(/^[^$]+/, s);
                    }
                    (!~e.indexOf("$") && !~e.indexOf("#")) ||
                      n._study.isStarted() ||
                      n._study.start(null, !0),
                      n._study.testInputValue(t, e)
                        ? this.setValueToProperty(i || this.value())
                        : this.setValue(n._property.inputs[t.id].value());
                  };
                })(e)),
                  (r = (function (t) {
                    return function (e) {
                      if (
                        t.hasOwnProperty(e) ||
                        0 === e.indexOf("#") ||
                        !~e.indexOf("$")
                      )
                        return e;
                      for (
                        var i = e.slice(0, e.indexOf("$")),
                          o = n._model.model().allStudies(),
                          a = 0;
                        a < o.length;
                        ++a
                      ) {
                        var s = o[a];
                        if (s.sourceId() === i) {
                          e = e.replace(/^[^$]+/, "#" + s.id());
                          break;
                        }
                      }
                      return e;
                    };
                  })(p));
              }
              for (var I in ((a = $(document.createElement("select"))), p)) {
                var B = l[I] || p[I];
                $("<option>").attr("value", I).text(B).appendTo(a);
              }
              i.addClass("js-value-cell");
            } else if (e.options) {
              a = $("<select/>");
              var E = e.optionsTitles;
              e.options.forEach(function (t) {
                var e = t,
                  i = (E && E[e]) || e,
                  o = $.t(i, { context: "input" });
                $("<option value='" + e + "'>" + o + "</option>").appendTo(a);
              });
            } else
              (a = $("<input/>")),
                "bool" === e.type
                  ? a.attr("type", "checkbox")
                  : a.attr("type", "text");
            return (
              a &&
                (a.appendTo(i),
                a.is(":checkbox") ||
                  "symbol" === e.type ||
                  a.css("width", "100px")),
              { valueEditor: a, valueSetter: s, propertyChangedHook: r }
            );
          }),
          (T.prototype._symbolInfoBySymbolProperty = function (t) {
            return this._study.resolvedSymbolInfoBySymbol(t.value());
          }),
          (T.prototype._sortInputs = function (t) {
            return t;
          }),
          (T.prototype.prepareLayoutImpl = function (t, e) {
            function i(t) {
              return new f().format(t);
            }
            for (var o = this._sortInputs(t.inputs), r = 0; r < o.length; r++) {
              var p = o[r],
                C = p.id;
              if (
                "first_visible_bar_time" !== C &&
                "last_visible_bar_time" !== C &&
                "time" !== p.type &&
                !p.isHidden &&
                (!this._showOnlyConfirmInputs || p.confirm) &&
                void 0 === p.groupId
              ) {
                var m =
                    "Change " +
                    (F =
                      p.name ||
                      C.toLowerCase().replace(/\b\w/g, function (t) {
                        return t.toUpperCase();
                      })),
                  _ = $("<tr/>");
                _.appendTo(e);
                var T = $("<td/>");
                T.appendTo(_),
                  T.addClass("propertypage-name-label"),
                  T.text(window.t(F, { context: "input" }));
                var w = $("<td/>");
                w.appendTo(_);
                var g = this.prepareControl(p, w, m),
                  k = g.valueEditor,
                  P = g.valueSetter,
                  x = g.propertyChangedHook;
                if (p.options)
                  this.bindControl(
                    new y(
                      k,
                      this._property.inputs[C],
                      null,
                      !0,
                      this.model(),
                      m,
                      P,
                      x
                    )
                  );
                else if ("bar_time" === p.type) {
                  this.bindControl(
                    new s(
                      k,
                      this._property.inputs[C],
                      !0,
                      this.model(),
                      m,
                      this.model().mainSeries(),
                      10
                    )
                  ),
                    k.addClass("ticker");
                } else if ("integer" === p.type) {
                  var L = [h(p.defval)];
                  (0 === p.min || p.min) && L.push(l(p.min)),
                    (0 === p.max || p.max) && L.push(d(p.max)),
                    this.bindControl(
                      new b(k, this._property.inputs[C], L, !1, this.model(), m)
                    ),
                    k.addClass("ticker"),
                    isFinite(p.step) &&
                      p.step > 0 &&
                      k.attr("data-step", p.step);
                } else if ("float" === p.type) {
                  L = [c(p.defval)];
                  (0 === p.min || p.min) && L.push(l(p.min)),
                    (0 === p.max || p.max) && L.push(d(p.max));
                  var S = new b(
                    k,
                    this._property.inputs[C],
                    L,
                    !1,
                    this.model(),
                    m
                  );
                  S.addFormatter(i),
                    this.bindControl(S),
                    k.addClass("ticker"),
                    isFinite(p.step) &&
                      p.step > 0 &&
                      k.attr("data-step", p.step);
                } else if ("text" === p.type)
                  this.bindControl(
                    new b(
                      k,
                      this._property.inputs[C],
                      null,
                      !1,
                      this.model(),
                      m
                    )
                  );
                else if ("bool" === p.type)
                  this.bindControl(
                    new v(k, this._property.inputs[C], !0, this.model(), m)
                  );
                else if ("resolution" === p.type)
                  this.bindControl(
                    new y(
                      k,
                      this._property.inputs[C],
                      n,
                      !0,
                      this.model(),
                      "Change Interval"
                    )
                  );
                else if ("symbol" === p.type) {
                  var I = this._symbolInfoBySymbolProperty.bind(
                      this,
                      this._property.inputs[C]
                    ),
                    B = u(I, this._property.inputs[C]),
                    E = new a(
                      k,
                      this._property.inputs[C],
                      !0,
                      this.model(),
                      "Change Symbol",
                      B,
                      this._study.symbolsResolved()
                    );
                  this.bindControl(E);
                }
              }
            }
            if (this._property.offset) {
              var F = this._property.offset.title
                ? this._property.offset.title.value()
                : window.t("Offset");
              (k = this.addOffsetEditorRow(e, F)),
                (L = [h(this._property.offset.val)]).push(
                  l(this._property.offset.min)
                ),
                L.push(d(this._property.offset.max)),
                this.bindControl(
                  new b(
                    k,
                    this._property.offset.val,
                    L,
                    !1,
                    this.model(),
                    "Undo " + F
                  )
                );
            }
            this._property.offsets &&
              $.each(
                t.plots,
                function (t, i) {
                  if (this._property.offsets[i.id]) {
                    var o = this._property.offsets[i.id];
                    if (void 0 === o.isHidden || !o.isHidden.value()) {
                      var n = o.title.value();
                      k = this.addOffsetEditorRow(e, n);
                      var a = [h(o.val)];
                      a.push(l(o.min)),
                        a.push(d(o.max)),
                        this.bindControl(
                          new b(k, o.val, a, !1, this.model(), "Undo " + n)
                        );
                    }
                  }
                }.bind(this)
              );
          }),
          (T.prototype.prepareLayout = function () {
            (this._table = $("<table/>")),
              this._table.addClass("property-page"),
              this._table.attr("cellspacing", "0"),
              this._table.attr("cellpadding", "2");
            var t = this._study.metaInfo();
            this.prepareLayoutImpl(t, this._table), this.loadData();
          }),
          (T.prototype.symbolSearchPopup = function () {
            return this._$symbolSearchPopup;
          }),
          (T.prototype.widget = function () {
            return this._table;
          }),
          (e.StudyInputsPropertyPage = T);
      }.call(this, i("Kxc7")));
    },
    PVgW: function (t, e, i) {
      "use strict";
      i.r(e);
      i("P5fv"), i("si6p");
      var o = i("ogJP"),
        n = i("R4+T");
      function a(t) {
        return (
          (t = Math.abs(t)),
          !Object(o.isInteger)(t) &&
            t > 1 &&
            (t = parseFloat(t.toString().replace(/^.+\./, "0."))),
          0 < t && t < 1
            ? Math.pow(
                10,
                (function (t) {
                  var e = String(t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                  if (null === e) return 0;
                  var i = e[1] ? e[1].length : 0,
                    o = e[2] ? parseInt(e[2], 0) : 0;
                  return Math.max(0, i - o);
                })(t)
              )
            : 1
        );
      }
      function s(t, e) {
        t.trigger("tvticker-beforechange");
        var i = t.data("TVTicker"),
          n = i && i.step,
          s = 0;
        (s = i.parser
          ? i.parser(t.val())
          : Object(o.isInteger)(n)
          ? parseInt(t.val(), 10)
          : parseFloat(t.val())),
          isNaN(s) && (s = 0);
        var r = a(n),
          p = e(s, Math.max(r, a(s)));
        i.formatter && (p = i.formatter(p)), t.val(p), t.change();
      }
      function r(t) {
        var e = t.data("TVTicker"),
          i = e && e.step,
          o = e && e.max;
        s(t, function (t, e) {
          var n = (Math.round(t * e) + Math.round(i * e)) / e;
          return null != o && o < n && (n = t), n;
        });
      }
      function p(t) {
        var e = t.data("TVTicker"),
          i = e && e.step,
          o = e && e.min;
        s(t, function (t, e) {
          var n = (Math.round(t * e) - Math.round(i * e)) / e;
          return null != o && n < o && (n = t), n;
        });
      }
      $.fn.TVTicker = function (t) {
        return (
          void 0 === t && (t = {}),
          this.each(function () {
            var e = !1,
              i = $(this),
              o = i.data("TVTicker");
            if (
              (o ? (e = !0) : (o = { step: Number(i.data("step")) || 1 }),
              "step" in t && (o.step = Number(t.step) || o.step),
              "min" in t && (o.min = t.min),
              "max" in t && (o.max = t.max),
              "formatter" in t && (o.formatter = t.formatter),
              "parser" in t && (o.parser = t.parser),
              i.data("TVTicker", o),
              !e)
            ) {
              var a = $('<div class="tv-ticker">').appendTo(i.parent()),
                s = $('<div class="tv-ticker__btn tv-ticker__btn--up">')
                  .html(n)
                  .appendTo(a),
                l = $('<div class="tv-ticker__btn tv-ticker__btn--down">')
                  .html(n)
                  .appendTo(a);
              a.on("mousedown", function (t) {
                t.preventDefault(), i.focus();
              }),
                s.click(function () {
                  i.is(":disabled") || r(i);
                }),
                l.click(function () {
                  i.is(":disabled") || p(i);
                }),
                i.keydown(function (t) {
                  i.is(":disabled") ||
                    (38 === t.keyCode
                      ? s.addClass("i-active")
                      : 40 === t.keyCode && l.addClass("i-active"));
                }),
                i.keyup(function (t) {
                  i.is(":disabled") ||
                    (38 === t.keyCode
                      ? (r(i), s.removeClass("i-active"))
                      : 40 === t.keyCode && (p(i), l.removeClass("i-active")));
                }),
                i.mousewheel(function (t) {
                  t.deltaY * (t.deltaFactor / 100) > 0 ? s.click() : l.click();
                });
            }
          })
        );
      };
    },
    "R4+T": function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>';
    },
    RTm2: function (t, e, i) {
      "use strict";
      var o = i("DxCR"),
        n = o.PropertyPage,
        a = o.BooleanBinder,
        s = o.RangeBinder,
        r = i("Kxc7"),
        p = i("Ialn").isRtl;
      function l(t, e, i) {
        n.call(this, t, e), (this._linetool = i), this.prepareLayout();
      }
      inherit(l, n),
        (l.prototype.prepareLayout = function () {
          this._block = $('<table class="property-page">');
          var t = this._linetool.properties().intervalsVisibilities;
          if (r.enabled("seconds_resolution")) {
            var e = $("<tr>").appendTo(this._block),
              i = $("<label>").append($.t("Seconds")),
              o = $("<input type='checkbox'>")
                .addClass("visibility-checker")
                .prependTo(i);
            $("<td>").css("padding-right", "15px").append(i).appendTo(e);
            var n = $("<input type='text'>").addClass("ticker-text");
            $("<td>").append(n).appendTo(e);
            var l = $("<div>")
              .addClass("slider-range ui-slider-horizontal")
              .slider();
            $("<td>").append(l).appendTo(e);
            var d = $("<input type='text'>").addClass("ticker-text");
            $("<td>").append(d).appendTo(e),
              this.bindControl(
                new a(
                  o,
                  t.seconds,
                  !0,
                  this.model(),
                  "Change Line Tool Visibility On Seconds"
                )
              ),
              this.bindControl(
                new s(
                  l,
                  [t.secondsFrom, t.secondsTo],
                  [1, 59],
                  !1,
                  this.model(),
                  [n, d],
                  [$.t("Change Seconds From"), $.t("Change Seconds To")],
                  o
                )
              );
          }
          (e = $("<tr>").appendTo(this._block)),
            (i = $("<label>").append($.t("Minutes")));
          var h = $("<input type='checkbox'>")
              .addClass("visibility-checker")
              .prependTo(i),
            c = p() ? "padding-left" : "padding-right";
          $("<td>").css(c, "15px").append(i).appendTo(e);
          n = $("<input type='text'>").addClass("ticker-text");
          $("<td>").append(n).appendTo(e);
          l = $("<div>").addClass("slider-range ui-slider-horizontal").slider();
          $("<td>").append(l).appendTo(e);
          d = $("<input type='text'>").addClass("ticker-text");
          $("<td>").append(d).appendTo(e),
            this.bindControl(
              new a(
                h,
                t.minutes,
                !0,
                this.model(),
                "Change Line Tool Visibility On Minutes"
              )
            ),
            this.bindControl(
              new s(
                l,
                [t.minutesFrom, t.minutesTo],
                [1, 59],
                !1,
                this.model(),
                [n, d],
                [$.t("Change Minutes From"), $.t("Change Minutes To")],
                h
              )
            );
          (e = $("<tr>").appendTo(this._block)),
            (i = $("<label>").append($.t("Hours")));
          var u = $("<input type='checkbox'>")
            .addClass("visibility-checker")
            .prependTo(i);
          $("<td>").append(i).appendTo(e);
          n = $("<input type='text'>").addClass("ticker-text");
          $("<td>").append(n).appendTo(e);
          l = $("<div>").addClass("slider-range ui-slider-horizontal").slider();
          $("<td>").append(l).appendTo(e);
          d = $("<input type='text'>").addClass("ticker-text");
          $("<td>").append(d).appendTo(e),
            this.bindControl(
              new a(
                u,
                t.hours,
                !0,
                this.model(),
                "Change Line Tool Visibility On Hours"
              )
            ),
            this.bindControl(
              new s(
                l,
                [t.hoursFrom, t.hoursTo],
                [1, 24],
                !1,
                this.model(),
                [n, d],
                [$.t("Change Minutes From"), $.t("Change Hours To")],
                u
              )
            );
          (e = $("<tr>").appendTo(this._block)),
            (i = $("<label>").append($.t("Days")));
          var y = $("<input type='checkbox'>")
            .addClass("visibility-checker")
            .prependTo(i);
          $("<td>").append(i).appendTo(e);
          n = $("<input type='text'>").addClass("ticker-text");
          $("<td>").append(n).appendTo(e);
          l = $("<div>").addClass("slider-range ui-slider-horizontal").slider();
          $("<td>").append(l).appendTo(e);
          d = $("<input type='text'>").addClass("ticker-text");
          $("<td>").append(d).appendTo(e),
            this.bindControl(
              new a(
                y,
                t.days,
                !0,
                this.model(),
                "Change Line Tool Visibility On Days"
              )
            ),
            this.bindControl(
              new s(
                l,
                [t.daysFrom, t.daysTo],
                [1, 366],
                !1,
                this.model(),
                [n, d],
                [$.t("Change Minutes From"), $.t("Change Days To")],
                y
              )
            );
          (e = $("<tr>").css("height", "29px").appendTo(this._block)),
            (i = $("<label>").append($.t("Weeks")));
          var v = $("<input type='checkbox'>").prependTo(i);
          $("<td>").append(i).appendTo(e),
            this.bindControl(
              new a(
                v,
                t.weeks,
                !0,
                this.model(),
                "Change Line Tool Visibility On Weeks"
              )
            );
          (e = $("<tr>").css("height", "29px").appendTo(this._block)),
            (i = $("<label>").append($.t("Months")));
          var b = $("<input type='checkbox'>").prependTo(i);
          $("<td>").append(i).appendTo(e),
            this.bindControl(
              new a(
                b,
                t.months,
                !0,
                this.model(),
                "Change Line Tool Visibility On Months"
              )
            ),
            this.loadData();
        }),
        (l.prototype.widget = function () {
          return this._block;
        }),
        (t.exports = l);
    },
    SA6f: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, "createShapeStyleEditor", function () {
          return n;
        });
      i("P5fv");
      var o = i("Nu4p");
      function n() {
        var t = "<select>";
        return (
          Object.keys(o.plotShapesData).forEach(function (e) {
            var i = o.plotShapesData[e];
            t += '<option value="' + i.id + '">' + i.guiName + "</option>";
          }),
          (t += "</select>"),
          $(t)
        );
      }
    },
    XgUb: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, "createShapeLocationEditor", function () {
          return n;
        });
      i("P5fv"), i("YFKU");
      var o = i("972a");
      function n() {
        return $(
          '<select><option value="' +
            o.MarkLocation.AboveBar +
            '">' +
            $.t("Above Bar") +
            '</option><option value="' +
            o.MarkLocation.BelowBar +
            '">' +
            $.t("Below Bar") +
            '</option><option value="' +
            o.MarkLocation.Top +
            '">' +
            $.t("Top") +
            '</option><option value="' +
            o.MarkLocation.Bottom +
            '">' +
            $.t("Bottom") +
            '</option><option value="' +
            o.MarkLocation.Absolute +
            '">' +
            $.t("Absolute") +
            "</option></select>"
        );
      }
    },
    a0Rg: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, "createPlotEditor", function () {
          return n;
        });
      i("P5fv"), i("YFKU");
      var o = i("23IT");
      function n() {
        var t = $("<select />");
        return (
          $(
            '<option value="' +
              o.LineStudyPlotStyle.Line +
              '">' +
              $.t("Line") +
              "</option>"
          ).appendTo(t),
          $(
            '<option value="' +
              o.LineStudyPlotStyle.LineWithBreaks +
              '">' +
              $.t("Line With Breaks") +
              "</option>"
          ).appendTo(t),
          $(
            '<option value="' +
              o.LineStudyPlotStyle.StepLine +
              '">' +
              $.t("Step Line") +
              "</option>"
          ).appendTo(t),
          $(
            '<option value="' +
              o.LineStudyPlotStyle.Histogram +
              '">' +
              $.t("Histogram") +
              "</option>"
          ).appendTo(t),
          $(
            '<option value="' +
              o.LineStudyPlotStyle.Cross +
              '">' +
              $.t("Cross", { context: "chart_type" }) +
              "</option>"
          ).appendTo(t),
          $(
            '<option value="' +
              o.LineStudyPlotStyle.Area +
              '">' +
              $.t("Area") +
              "</option>"
          ).appendTo(t),
          $(
            '<option value="' +
              o.LineStudyPlotStyle.AreaWithBreaks +
              '">' +
              $.t("Area With Breaks") +
              "</option>"
          ).appendTo(t),
          $(
            '<option value="' +
              o.LineStudyPlotStyle.Columns +
              '">' +
              $.t("Columns") +
              "</option>"
          ).appendTo(t),
          $(
            '<option value="' +
              o.LineStudyPlotStyle.Circles +
              '">' +
              $.t("Circles") +
              "</option>"
          ).appendTo(t),
          t
        );
      }
    },
    mBo9: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, "createVisibilityEditor", function () {
          return o;
        });
      i("P5fv");
      function o() {
        return $('<input type="checkbox" class="visibility-switch"/>');
      }
    },
    n3Kh: function (t, e, i) {
      "use strict";
      var o = i("DxCR"),
        n = o.PropertyPage,
        a = o.GreateTransformer,
        s = o.LessTransformer,
        r = o.ToIntTransformer,
        p = o.SimpleStringBinder;
      function l(t, e, i) {
        n.call(this, t, e), (this._linetool = i), this.prepareLayout();
      }
      i("PVgW"),
        inherit(l, n),
        (l.BarIndexPastLimit = -5e4),
        (l.BarIndexFutureLimit = 15e3),
        (l.prototype.bindBarIndex = function (t, e, i, o) {
          var n = [
            r(t.value()),
            a(l.BarIndexPastLimit),
            s(l.BarIndexFutureLimit),
          ];
          this.bindControl(this.createStringBinder(e, t, n, !0, i, o));
        }),
        (l.prototype.createPriceEditor = function (t) {
          var e = this._linetool,
            i = e.ownerSource().formatter(),
            o = function (t) {
              var e = i.parse(t);
              if (e.res) return e.value;
            },
            n = $("<input type='text'>");
          if (
            (n.TVTicker({
              step: i._minMove / i._priceScale || 1,
              formatter: function (t) {
                return i.format(t);
              },
              parser: o,
            }),
            t)
          ) {
            var a = [
                function (e) {
                  var i = o(e);
                  return void 0 === i ? t.value() : i;
                },
              ],
              s = "Change " + e.title() + " point price",
              r = this.createStringBinder(n, t, a, !1, this.model(), s);
            r.addFormatter(function (t) {
              return i.format(t);
            }),
              this.bindControl(r);
          }
          return n;
        }),
        (l.prototype._createPointRow = function (t, e, i) {
          var o = $("<tr>"),
            n = $("<td>");
          n.html($.t("Price") + i), n.appendTo(o);
          var a = $("<td>");
          a.appendTo(o), this.createPriceEditor(e.price).appendTo(a);
          var s = $("<td>");
          s.html($.t("Bar #")), s.appendTo(o);
          var r = $("<td>");
          r.appendTo(o);
          var p = $("<input type='text'>");
          return (
            p.appendTo(r),
            p.addClass("ticker"),
            this.bindBarIndex(
              e.bar,
              p,
              this.model(),
              "Change " + this._linetool.title() + " point bar index"
            ),
            o
          );
        }),
        (l.prototype.prepareLayoutForTable = function (t) {
          for (
            var e = this._linetool.points(), i = e.length, o = 0;
            o < e.length;
            o++
          ) {
            var n = e[o],
              a = this._linetool.pointsProperty().points[o];
            if (a) {
              var s = o || i > 1 ? " " + (o + 1) : "";
              this._createPointRow(n, a, s).appendTo(t);
            }
          }
        }),
        (l.prototype.prepareLayout = function () {
          (this._table = $(document.createElement("table"))),
            this._table.addClass("property-page"),
            this._table.attr("cellspacing", "0"),
            this._table.attr("cellpadding", "2"),
            this.prepareLayoutForTable(this._table),
            this.loadData();
        }),
        (l.prototype.widget = function () {
          return this._table;
        }),
        (l.prototype.createStringBinder = function (t, e, i, o, n, a) {
          return new p(t, e, i, o, n, a);
        }),
        (t.exports = l);
    },
    o6hY: function (t, e, i) {
      "use strict";
      var o = i("DxCR"),
        n = o.PropertyPage,
        a = o.GreateTransformer,
        s = o.LessTransformer,
        r = o.ToIntTransformer,
        p = o.ToFloatTransformer,
        l = o.SimpleComboBinder,
        d = o.BooleanBinder,
        h = o.DisabledBinder,
        c = o.ColorBinding,
        u = o.SliderBinder,
        y = o.SimpleStringBinder,
        v = i("jNEI").addColorPicker,
        b = i("/4PT").createLineStyleEditor,
        f = i("XgUb").createShapeLocationEditor,
        C = i("SA6f").createShapeStyleEditor,
        m = i("mBo9").createVisibilityEditor,
        _ = i("A3Hk").createHHistDirectionEditor,
        T = i("a0Rg").createPlotEditor,
        w = i("zXvd").NumericFormatter,
        g = i("0YCj"),
        k = i("txPx").getLogger("Chart.Study.PropertyPage"),
        P = i("JWMC").trackEvent;
      function x(t, e, i) {
        n.call(this, t, e), (this._study = i), this.prepareLayout();
      }
      function L(t, e, i) {
        n.call(this, t, e),
          (this._study = i),
          (this._property = t),
          this.prepareLayout();
      }
      inherit(x, n),
        (x.prototype.prepareLayout = function () {
          (this._table = $("<table/>")),
            this._table.addClass("property-page"),
            this._table.attr("cellspacing", "0"),
            this._table.attr("cellpadding", "2");
          var t = this._study.metaInfo(),
            e = {};
          function i(t) {
            return new w().format(t);
          }
          for (var o = 0; o < t.plots.length; ++o)
            if (
              !(
                this._study.isSelfColorerPlot(o) ||
                this._study.isTextColorerPlot(o) ||
                this._study.isDataOffsetPlot(o) ||
                this._study.isOHLCColorerPlot(o) ||
                this._study.isAlertConditionPlot(o)
              )
            ) {
              var n,
                a,
                s = t.plots[o];
              if (t.styles) {
                if (t.styles[s.id]) n = t.styles[s.id].isHidden;
                else if (!this._study.isOHLCSeriesPlot(o)) continue;
                if (this._study.isOHLCSeriesPlot(o)) {
                  if (e[(a = t.plots[o].target)]) continue;
                  (n = t.ohlcPlots[a].isHidden), (e[a] = a);
                }
                if (n) continue;
              }
              if (
                this._study.isLinePlot(o) ||
                this._study.isBarColorerPlot(o) ||
                this._study.isBgColorerPlot(o)
              )
                this._prepareLayoutForPlot(o, s);
              else if (this._study.isPlotArrowsPlot(o))
                this._prepareLayoutForArrowsPlot(o, s);
              else if (this._study.isPlotCharsPlot(o))
                this._prepareLayoutForCharsPlot(o, s);
              else if (this._study.isPlotShapesPlot(o))
                this._prepareLayoutForShapesPlot(o, s);
              else if (this._study.isOHLCSeriesPlot(o)) {
                var r = { id: a, type: "ohlc" };
                this._study.isOHLCBarsPlot(o)
                  ? this._prepareLayoutForBarsPlot(o, r)
                  : this._study.isOHLCCandlesPlot(o) &&
                    this._prepareLayoutForCandlesPlot(o, r);
              } else k.logError("Unknown plot type: " + s.type);
            }
          var h = this._study.properties().bands;
          if (h && h.childCount() > 0)
            for (o = 0; o < h.childCount(); o++) {
              if (!(R = h[o]).isHidden || !R.isHidden.value()) {
                (W = $('<tr class="line"/>')).appendTo(this._table),
                  (Y = $("<td/>")).appendTo(W),
                  (V = $(
                    "<input type='checkbox' class='visibility-switch'/>"
                  )).appendTo(Y);
                var f = $.t(R.name.value(), { context: "input" }),
                  C = this.createLabeledCell(f, V)
                    .appendTo(W)
                    .addClass("propertypage-name-label"),
                  m = $("<td/>");
                m.appendTo(W), m.addClass("colorpicker-cell");
                var _ = v(m),
                  T = $("<td/>");
                T.appendTo(W);
                var P = this.createLineWidthEditor();
                P.appendTo(T);
                var L = $('<td colspan="4">').css({ whiteSpace: "nowrap" });
                L.appendTo(W);
                var S = b();
                S.render().appendTo(L);
                var I = $(
                  "<input class='property-page-bandwidth' type='text'/>"
                );
                I.appendTo(L);
                var B = [p(R.value.value())],
                  E = "Change band",
                  F = new y(I, R.value, B, !1, this.model(), E);
                F.addFormatter(i),
                  this.bindControl(F),
                  this.bindControl(new d(V, R.visible, !0, this.model(), E)),
                  this.bindControl(new c(_, R.color, !0, this.model(), E)),
                  this.bindControl(
                    new l(S, R.linestyle, parseInt, !0, this.model(), E)
                  ),
                  this.bindControl(new u(P, R.linewidth, !0, this.model(), E));
              }
            }
          if (this._study.properties().bandsBackground) {
            var R = this._study.properties().bandsBackground,
              O = $.t("Background");
            E = $.t("Change band background");
            (W = this._prepareFilledAreaBackground(
              R.fillBackground,
              R.backgroundColor,
              R.transparency,
              O,
              E
            )).appendTo(this._table);
          }
          if (this._study.properties().areaBackground) {
            (R = this._study.properties().areaBackground),
              (O = $.t("Background")),
              (E = $.t("Change area background"));
            (W = this._prepareFilledAreaBackground(
              R.fillBackground,
              R.backgroundColor,
              R.transparency,
              O,
              E
            )).appendTo(this._table);
          }
          var j = t.filledAreas;
          if (void 0 !== j)
            for (o = 0; o < j.length; ++o) {
              var D = j[o];
              if (!D.isHidden) {
                (E = "Change " + O),
                  (R = this._study.properties().filledAreasStyle[D.id]),
                  (O = D.title || $.t("Background"));
                if (D.palette) {
                  var V,
                    W = $('<tr class="line"/>');
                  (Y = $("<td/>")).appendTo(W),
                    (V = $(
                      "<input type='checkbox' class='visibility-switch'/>"
                    )).appendTo(Y),
                    this.bindControl(
                      new d(V, R.visible, !0, this.model(), E + " visibility")
                    );
                  var A = $.t(O, { context: "study" });
                  this.createLabeledCell(A, V)
                    .appendTo(W)
                    .addClass("propertypage-name-label"),
                    W.appendTo(this._table);
                  var H = this._findPlotPalette(o, D),
                    M = H.palette,
                    q = H.paletteProps;
                  this._prepareLayoutForPalette(0, D, M, q, E);
                } else {
                  (W = this._prepareFilledAreaBackground(
                    R.visible,
                    R.color,
                    R.transparency,
                    O,
                    E
                  )).appendTo(this._table);
                }
              }
            }
          for (var z in t.graphics) {
            var N = t.graphics[z];
            for (var U in N) {
              R = this._property.graphics[z][U];
              x["_createRow_" + z].call(this, this._table, R);
            }
          }
          var Y,
            K = this._table.find(".visibility-switch.plot-visibility-switch");
          1 === K.length &&
            ((Y = K.parent()).css("display", "none"),
            1 ===
            (C = this._table.find(".propertypage-plot-with-palette")).length
              ? C.css("display", "none")
              : ((C = this._table.find(".propertypage-name-label")).css(
                  "padding-left",
                  0
                ),
                C.find("label").attr("for", "")));
          var G = this._prepareStudyPropertiesLayout();
          if (((this._table = this._table.add(G)), g.isScriptStrategy(t))) {
            var Q = this._prepareOrdersSwitches();
            this._table = this._table.add(Q);
          }
          this.loadData();
        }),
        (x.prototype._prepareOrdersSwitches = function () {
          var t = $(
              '<table class="property-page study-strategy-properties" cellspacing="0" cellpadding="2">'
            ),
            e = "chart-orders-switch_" + Date.now().toString(36),
            i = $("<tr>").appendTo(t),
            o = $('<input id="' + e + '" type="checkbox">').appendTo(
              $("<td>").appendTo(i)
            );
          $(
            '<label for="' + e + '">' + $.t("Trades on Chart") + "</label>"
          ).appendTo($("<td>").appendTo(i));
          var n = "chart-orders-labels-switch_" + Date.now().toString(36),
            a = $("<tr>").appendTo(t),
            s = $('<input id="' + n + '" type="checkbox">').appendTo(
              $("<td>").appendTo(a)
            );
          $(
            '<label for="' + n + '">' + $.t("Signal Labels") + "</label>"
          ).appendTo($("<td>").appendTo(a));
          var r = "chart-orders-qty-switch_" + Date.now().toString(36),
            p = $("<tr>").appendTo(t),
            l = $('<input id="' + r + '" type="checkbox">').appendTo(
              $("<td>").appendTo(p)
            );
          $('<label for="' + r + '">' + $.t("Quantity") + "</label>").appendTo(
            $("<td>").appendTo(p)
          );
          var c = this._study.properties();
          return (
            this.bindControl(
              new d(
                o,
                c.strategy.orders.visible,
                !0,
                this.model(),
                "Trades on chart visibility"
              )
            ),
            this.bindControl(
              new d(
                s,
                c.strategy.orders.showLabels,
                !0,
                this.model(),
                "Signal labels visibility"
              )
            ),
            this.bindControl(
              new h(
                s,
                c.strategy.orders.visible,
                !0,
                this.model(),
                "Signal labels visibility",
                !0
              )
            ),
            this.bindControl(
              new d(
                l,
                c.strategy.orders.showQty,
                !0,
                this.model(),
                "Quantity visibility"
              )
            ),
            this.bindControl(
              new h(
                l,
                c.strategy.orders.visible,
                !0,
                this.model(),
                "Quantity visibility",
                !0
              )
            ),
            t
          );
        }),
        (x.prototype._prepareLayoutForPlot = function (t, e) {
          var i = e.id,
            o = this._study.properties().styles[i],
            n = this._findPlotPalette(t, e),
            a = n.palette,
            s = n.paletteProps,
            r = "Change " + i;
          if (a) {
            (h = $('<tr class="line"/>')).appendTo(this._table),
              (y = $("<td/>")).appendTo(h),
              y.addClass("visibility-cell"),
              (b = $(
                "<input type='checkbox' class='visibility-switch plot-visibility-switch'/>"
              )).appendTo(y),
              this.bindControl(new d(b, o.visible, !0, this.model(), r));
            var p = $.t(o.title.value(), { context: "input" });
            this.createLabeledCell(p, b)
              .appendTo(h)
              .addClass(
                "propertypage-name-label propertypage-plot-with-palette"
              ),
              this._prepareLayoutForPalette(t, e, a, s, r);
          } else {
            var h, y, b;
            (h = $('<tr class="line"/>')).appendTo(this._table),
              (y = $("<td/>")).appendTo(h),
              y.addClass("visibility-cell"),
              (b = $(
                "<input type='checkbox' class='visibility-switch plot-visibility-switch'/>"
              )).appendTo(y);
            p = $.t(this._study.properties().styles[i].title.value(), {
              context: "input",
            });
            this.createLabeledCell(p, b)
              .appendTo(h)
              .addClass("propertypage-name-label");
            var f = $("<td/>");
            f.appendTo(h), f.addClass("colorpicker-cell");
            var C = v(f),
              m = $("<td/>");
            m.appendTo(h);
            var _ = this.createLineWidthEditor();
            _.appendTo(m);
            var w = $("<td>");
            w.appendTo(h);
            var g = T();
            g.appendTo(w);
            var k = $("<td>");
            k.appendTo(h);
            var P = $("<input type='checkbox'>");
            P.on("change", this._trackPriceLine.bind(this)).appendTo(k),
              this.createLabeledCell("Price Line", P).appendTo(h),
              this.bindControl(new d(b, o.visible, !0, this.model(), r)),
              this.bindControl(
                new c(C, o.color, !0, this.model(), r, o.transparency)
              ),
              this.bindControl(
                new u(
                  _,
                  o.linewidth,
                  !0,
                  this.model(),
                  r,
                  this._study.metaInfo().isTVScript
                )
              ),
              this.bindControl(
                new l(g, o.plottype, parseInt, !0, this.model(), r)
              ),
              this.bindControl(
                new d(P, o.trackPrice, !0, this.model(), "Change Price Line")
              );
          }
        }),
        (x.prototype._prepareLayoutForBarsPlot = function (t, e) {
          var i = e.id,
            o = this._study.properties().ohlcPlots[i],
            n = this._findPlotPalette(t, e),
            a = n.palette,
            s = n.paletteProps,
            r = "Change " + i,
            p = $('<tr class="line"/>');
          p.appendTo(this._table);
          var l = $("<td/>");
          l.appendTo(p), l.addClass("visibility-cell");
          var h = $("<input type='checkbox' class='visibility-switch'/>");
          h.appendTo(l),
            this.bindControl(new d(h, o.visible, !0, this.model(), r));
          var u = o.title.value();
          if (
            (this.createLabeledCell(u, h)
              .appendTo(p)
              .addClass("propertypage-name-label"),
            a)
          ) {
            this._prepareLayoutForPalette(t, e, a, s, r, !0);
          } else {
            var y = $("<td/>");
            y.appendTo(p), y.addClass("colorpicker-cell");
            var b = v(y);
            this.bindControl(new c(b, o.color, !0, this.model(), r));
          }
        }),
        (x.prototype._prepareLayoutForCandlesPlot = function (t, e) {
          this._prepareLayoutForBarsPlot(t, e);
          var i = e.id,
            o = this._study.properties().ohlcPlots[i],
            n = "Change " + i,
            a = $('<tr class="line"/>');
          a.appendTo(this._table);
          var s = $("<td/>");
          s.appendTo(a), s.addClass("visibility-cell");
          var r = $("<input type='checkbox' class='visibility-switch'/>");
          r.appendTo(s),
            this.bindControl(new d(r, o.drawWick, !0, this.model(), n));
          this.createLabeledCell("Wick", r).appendTo(a);
          var p = $("<td/>");
          p.appendTo(a), p.addClass("colorpicker-cell");
          var l = v(p);
          this.bindControl(new c(l, o.wickColor, !0, this.model(), n));
        }),
        (x.prototype._prepareLayoutForShapesPlot = function (t, e) {
          var i = e.id,
            o = this._study.properties().styles[i],
            n = this._findPlotPalette(t, e),
            a = n.palette,
            s = n.paletteProps,
            r = "Change " + i;
          (T = $('<tr class="line"/>')).appendTo(this._table);
          var p = $("<td/>");
          p.appendTo(T), p.addClass("visibility-cell");
          var h = $("<input type='checkbox' class='visibility-switch'/>");
          h.appendTo(p),
            this.bindControl(new d(h, o.visible, !0, this.model(), r));
          var u = $.t(this._study.properties().styles[i].title.value(), {
            context: "input",
          });
          this.createLabeledCell(u, h)
            .appendTo(T)
            .addClass("propertypage-name-label");
          var y = $("<td/>");
          y.appendTo(T);
          var b = C();
          b.appendTo(y),
            this.bindControl(new l(b, o.plottype, null, !0, this.model(), r));
          var m = $("<td/>");
          m.appendTo(T);
          var _ = f();
          if (
            (_.appendTo(m),
            this.bindControl(new l(_, o.location, null, !0, this.model(), r)),
            a)
          )
            this._prepareLayoutForPalette(t, e, a, s, r);
          else {
            var T;
            (T = $('<tr class="line"/>')).appendTo(this._table),
              $("<td/>").appendTo(T),
              $("<td/>").appendTo(T);
            var w = $("<td/>");
            w.appendTo(T), w.addClass("colorpicker-cell");
            var g = v(w);
            this.bindControl(
              new c(g, o.color, !0, this.model(), r, o.transparency)
            );
          }
        }),
        (x.prototype._prepareLayoutForCharsPlot = function (t, e) {
          var i = e.id,
            o = this._study.properties().styles[i],
            n = this._findPlotPalette(t, e),
            a = n.palette,
            s = n.paletteProps,
            r = "Change " + i;
          (T = $('<tr class="line"/>')).appendTo(this._table);
          var p = $("<td/>");
          p.appendTo(T), p.addClass("visibility-cell");
          var h = $("<input type='checkbox' class='visibility-switch'/>");
          h.appendTo(p),
            this.bindControl(new d(h, o.visible, !0, this.model(), r));
          var u = $.t(this._study.properties().styles[i].title.value(), {
            context: "input",
          });
          this.createLabeledCell(u, h)
            .appendTo(T)
            .addClass("propertypage-name-label");
          var b = $("<td/>");
          b.appendTo(T);
          var C = $('<input type="text"/>');
          C.appendTo(b),
            C.keyup(function () {
              var t = $(this),
                e = t.val();
              e && (t.val(e.split("")[e.length - 1]), t.change());
            }),
            this.bindControl(new y(C, o.char, null, !1, this.model(), r));
          var m = $("<td/>");
          m.appendTo(T);
          var _ = f();
          if (
            (_.appendTo(m),
            this.bindControl(new l(_, o.location, null, !0, this.model(), r)),
            a)
          )
            this._prepareLayoutForPalette(t, e, a, s, r);
          else {
            var T;
            (T = $('<tr class="line"/>')).appendTo(this._table),
              $("<td/>").appendTo(T),
              $("<td/>").appendTo(T);
            var w = $("<td/>");
            w.appendTo(T), w.addClass("colorpicker-cell");
            var g = v(w);
            this.bindControl(
              new c(g, o.color, !0, this.model(), r, o.transparency)
            );
          }
        }),
        (x.prototype._prepareLayoutForPalette = function (t, e, i, o, n, a) {
          var s = t,
            r = e.id,
            p = null,
            h = r.startsWith("fill");
          p = a
            ? this._study.properties().ohlcPlots[r]
            : h
            ? this._study.properties().filledAreasStyle[r]
            : this._study.properties().styles[r];
          var y = 0;
          for (var b in i.colors) {
            var f = o.colors[b],
              C = $('<tr class="line"/>');
            C.appendTo(this._table), $("<td/>").appendTo(C);
            var m = $("<td/>");
            m.appendTo(C),
              m.addClass("propertypage-name-label"),
              m.html($.t(f.name.value(), { context: "input" }));
            var _ = $("<td/>");
            _.appendTo(C), _.addClass("colorpicker-cell");
            var w = v(_);
            if (
              (this.bindControl(
                new c(w, f.color, !0, this.model(), n, p.transparency)
              ),
              !h && this._study.isLinePlot(s))
            ) {
              var g = $("<td/>");
              g.appendTo(C);
              var k = this.createLineWidthEditor();
              k.appendTo(g),
                this.bindControl(
                  new u(
                    k,
                    f.width,
                    !0,
                    this.model(),
                    n,
                    this._study.metaInfo().isTVScript
                  )
                );
              var P = $("<td>");
              if ((P.appendTo(C), 0 === y)) {
                var x = T();
                x.appendTo(P),
                  this.bindControl(
                    new l(x, p.plottype, parseInt, !0, this.model(), n)
                  );
                var L = $("<td>");
                L.appendTo(C);
                var S = $("<input type='checkbox'>");
                S.on("change", this._trackPriceLine.bind(this)).appendTo(L),
                  this.createLabeledCell("Price Line", S).appendTo(C),
                  this.bindControl(
                    new d(
                      S,
                      p.trackPrice,
                      !0,
                      this.model(),
                      "Change Price Line"
                    )
                  );
              }
            }
            y++;
          }
        }),
        (x.prototype._trackPriceLine = function () {
          P(
            "GUI",
            "Add Price Line",
            this._study.properties().description.value()
          );
        }),
        (x.prototype._prepareLayoutForArrowsPlot = function (t, e) {
          var i = e.id,
            o = this._study.properties().styles[i],
            n = "Change " + i,
            a = $('<tr class="line"/>');
          a.appendTo(this._table);
          var s = $("<td/>");
          s.appendTo(a), s.addClass("visibility-cell");
          var r = $("<input type='checkbox' class='visibility-switch'/>");
          r.appendTo(s);
          var p = $.t(this._study.properties().styles[i].title.value(), {
            context: "input",
          });
          this.createLabeledCell(p, r)
            .appendTo(a)
            .addClass("propertypage-name-label");
          var l = $("<td/>");
          l.appendTo(a), l.addClass("colorpicker-cell");
          var h = v(l),
            u = $("<td/>");
          u.appendTo(a), u.addClass("colorpicker-cell");
          var y = v(u);
          this.bindControl(new d(r, o.visible, !0, this.model(), n)),
            this.bindControl(
              new c(h, o.colorup, !0, this.model(), n, o.transparency)
            ),
            this.bindControl(
              new c(y, o.colordown, !0, this.model(), n, o.transparency)
            );
        }),
        (x.prototype._findPlotPalette = function (t, e) {
          var i = t,
            o = e.id,
            n = null,
            a = null,
            s = this._study.metaInfo().plots;
          if (this._study.isBarColorerPlot(i) || this._study.isBgColorerPlot(i))
            (n = this._study.metaInfo().palettes[e.palette]),
              (a = this._study.properties().palettes[e.palette]);
          else
            for (var r = 0; r < s.length; r++)
              if (
                s[r].target === o &&
                (this._study.isSelfColorerPlot(r) ||
                  this._study.isOHLCColorerPlot(r))
              ) {
                (n = this._study.metaInfo().palettes[s[r].palette]),
                  (a = this._study.properties().palettes[s[r].palette]);
                break;
              }
          return { palette: n, paletteProps: a };
        }),
        (x.prototype._prepareStudyPropertiesLayout = function () {
          var t = $(
              '<table class="property-page study-properties" cellspacing="0" cellpadding="2">'
            ),
            e = this.createPrecisionEditor();
          if (
            ((i = $("<tr>")).appendTo(t),
            $("<td>" + $.t("Precision") + "</td>").appendTo(i),
            $("<td>").append(e).appendTo(i),
            this.bindControl(
              new l(
                e,
                this._study.properties().precision,
                null,
                !0,
                this.model(),
                "Change Precision"
              )
            ),
            "Compare@tv-basicstudies" === this._study.metaInfo().id)
          ) {
            var i;
            e = this.createSeriesMinTickEditor();
            (i = $("<tr>")).appendTo(t),
              $("<td>" + $.t("Override Min Tick") + "</td>").appendTo(i),
              $("<td>").append(e).appendTo(i),
              this.bindControl(
                new l(
                  e,
                  this._study.properties().minTick,
                  null,
                  !0,
                  this.model(),
                  "Change MinTick"
                )
              );
          }
          return this._putStudyDefaultStyles(t), t;
        }),
        (x.prototype._putStudyDefaultStyles = function (t, e) {
          var i = null,
            o = this._study;
          return (
            (!o.properties().linkedToSeries ||
              !o.properties().linkedToSeries.value()) &&
            ($.each(this._model.m_model.panes(), function (t, e) {
              $.each(e.dataSources(), function (t, n) {
                if (n === o) return (i = e), !1;
              });
            }),
            (this._pane = i),
            t)
          );
        }),
        (x.prototype.widget = function () {
          return this._table;
        }),
        (x.prototype._prepareFilledAreaBackground = function (t, e, i, o, n) {
          var a = $('<tr class="line"/>'),
            s = $("<td/>");
          s.appendTo(a);
          var r = $("<input type='checkbox' class='visibility-switch'/>");
          r.appendTo(s),
            this.createLabeledCell(o, r)
              .appendTo(a)
              .addClass("propertypage-name-label");
          var p = $("<td/>");
          p.appendTo(a), p.addClass("colorpicker-cell");
          var l = v(p);
          return (
            this.bindControl(new d(r, t, !0, this.model(), n + " visibility")),
            this.bindControl(new c(l, e, !0, this.model(), n + " color", i)),
            a
          );
        }),
        inherit(L, n),
        (L.prototype.prepareLayout = function () {
          this._study.properties().linkedToSeries &&
            this._study.properties().linkedToSeries.value(),
            (this._table = $());
        }),
        (L.prototype.widget = function () {
          return this._table;
        }),
        (x._createRow_horizlines = function (t, e) {
          var i = this.addRow(t),
            o = e.name.value(),
            n = $("<input type='checkbox' class='visibility-switch'/>"),
            a = this.createColorPicker(),
            s = this.createLineWidthEditor(),
            r = b();
          $("<td>").append(n).appendTo(i),
            this.createLabeledCell(o, n).appendTo(i),
            $("<td>").append(a).appendTo(i),
            $("<td>").append(s).appendTo(i),
            $("<td>").append(r.render()).appendTo(i),
            this.bindControl(
              new d(
                n,
                e.visible,
                !0,
                this.model(),
                "Change " + o + " visibility"
              )
            ),
            this.bindControl(
              new c(a, e.color, !0, this.model(), "Change " + o + " color")
            ),
            this.bindControl(
              new l(
                r,
                e.style,
                parseInt,
                !0,
                this.model(),
                "Change " + o + " style"
              )
            ),
            this.bindControl(
              new u(s, e.width, !0, this.model(), "Change " + o + " width")
            );
        }),
        (x._createRow_vertlines = function (t, e) {
          var i = this.addRow(t),
            o = e.name.value(),
            n = $("<input type='checkbox' class='visibility-switch'/>"),
            a = this.createColorPicker(),
            s = this.createLineWidthEditor(),
            r = b();
          $("<td>").append(n).appendTo(i),
            this.createLabeledCell(o, n).appendTo(i),
            $("<td>").append(a).appendTo(i),
            $("<td>").append(s).appendTo(i),
            $("<td>").append(r.render()).appendTo(i),
            this.bindControl(
              new d(
                n,
                e.visible,
                !0,
                this.model(),
                "Change " + o + " visibility"
              )
            ),
            this.bindControl(
              new c(a, e.color, !0, this.model(), "Change " + o + " color")
            ),
            this.bindControl(
              new l(
                r,
                e.style,
                parseInt,
                !0,
                this.model(),
                "Change " + o + " style"
              )
            ),
            this.bindControl(
              new u(s, e.width, !0, this.model(), "Change " + o + " width")
            );
        }),
        (x._createRow_lines = function (t, e) {
          var i = this.addRow(t),
            o = e.title.value(),
            n = $("<input type='checkbox' class='visibility-switch'/>"),
            a = this.createColorPicker(),
            s = this.createLineWidthEditor(),
            r = b();
          $("<td>").append(n).appendTo(i),
            this.createLabeledCell(o, n).appendTo(i),
            $("<td>").append(a).appendTo(i),
            $("<td>").append(s).appendTo(i),
            $("<td>").append(r.render()).appendTo(i),
            this.bindControl(
              new d(
                n,
                e.visible,
                !0,
                this.model(),
                "Change " + o + " visibility"
              )
            ),
            this.bindControl(
              new c(a, e.color, !0, this.model(), "Change " + o + " color")
            ),
            this.bindControl(
              new l(
                r,
                e.style,
                parseInt,
                !0,
                this.model(),
                "Change " + o + " style"
              )
            ),
            this.bindControl(
              new u(s, e.width, !0, this.model(), "Change " + o + " width")
            );
        }),
        (x._createRow_hlines = function (t, e) {
          var i = this.addRow(t),
            o = e.name.value(),
            n = $("<input type='checkbox' class='visibility-switch'/>"),
            a = this.createColorPicker(),
            s = this.createLineWidthEditor(),
            r = b(),
            p = $("<input type='checkbox'>");
          if (
            ($("<td>").append(n).appendTo(i),
            this.createLabeledCell(o, n).appendTo(i),
            $("<td>").append(a).appendTo(i),
            $("<td>").append(s).appendTo(i),
            $("<td>").append(r.render()).appendTo(i),
            $("<td>").appendTo(i),
            $("<td>").append(p).appendTo(i),
            this.createLabeledCell("Show Price", p).appendTo(i),
            this.bindControl(
              new d(
                n,
                e.visible,
                !0,
                this.model(),
                "Change " + o + " visibility"
              )
            ),
            this.bindControl(
              new c(a, e.color, !0, this.model(), "Change " + o + " color")
            ),
            this.bindControl(
              new l(
                r,
                e.style,
                parseInt,
                !0,
                this.model(),
                "Change " + o + " style"
              )
            ),
            this.bindControl(
              new u(s, e.width, !0, this.model(), "Change " + o + " width")
            ),
            this.bindControl(
              new d(
                p,
                e.showPrice,
                !0,
                this.model(),
                "Change " + o + " show price"
              )
            ),
            e.enableText.value())
          ) {
            i = this.addRow(t);
            $('<td colspan="2">').appendTo(i);
            var h = $("<input type='checkbox'>");
            $('<td class="text-center">').append(h).appendTo(i),
              this.createLabeledCell("Show Text", h).appendTo(i),
              this.bindControl(
                new d(
                  h,
                  e.showText,
                  !0,
                  this.model(),
                  "Change " + o + " show text"
                )
              );
            var y = TradingView.createTextPosEditor();
            $("<td>").append(y.render()).appendTo(i),
              this.bindControl(
                new l(
                  y,
                  e.textPos,
                  parseInt,
                  !0,
                  this.model(),
                  "Change " + o + " text position"
                )
              );
            var v = this.createFontSizeEditor();
            $('<td colspan="2">').append(v).appendTo(i),
              this.bindControl(
                new l(
                  v,
                  e.fontSize,
                  parseInt,
                  !0,
                  this.model(),
                  "Change " + o + " font size"
                )
              );
          }
        }),
        (x._createRow_hhists = function (t, e) {
          var i = e.title.value(),
            o = [],
            n = [],
            p = this.addRow(t),
            h = m();
          $("<td>").append(h).appendTo(p),
            this.createLabeledCell(i, h).appendTo(p),
            this.bindControl(
              new d(
                h,
                e.visible,
                !0,
                this.model(),
                "Change " + i + " Visibility"
              )
            );
          p = this.addRow(t);
          var u = $("<input/>");
          u.attr("type", "text"),
            u.addClass("ticker"),
            this.createLabeledCell($.t("Width (% of the Box)"), u).appendTo(p),
            $("<td>").append(u).appendTo(p);
          var v = [r(40)];
          v.push(a(0)),
            v.push(s(100)),
            this.bindControl(
              new y(
                u,
                e.percentWidth,
                v,
                !1,
                this.model(),
                "Change Percent Width"
              )
            );
          p = this.addLabeledRow(t, "Placement");
          var b = _();
          $("<td>").append(b).appendTo(p),
            this.bindControl(
              new l(
                b,
                e.direction,
                null,
                !0,
                this.model(),
                "Change " + i + " Placement"
              )
            );
          p = this.addRow(t);
          var f = $("<input type='checkbox'>");
          $("<td>").append(f).appendTo(p),
            this.createLabeledCell($.t("Show Values"), f).appendTo(p),
            this.bindControl(
              new d(
                f,
                e.showValues,
                !0,
                this.model(),
                "Change " + i + " Show Values"
              )
            );
          p = this.addRow(t);
          var C = this.createColorPicker();
          for (var T in (this.createLabeledCell($.t("Text Color"), C).appendTo(
            p
          ),
          $("<td>").append(C).appendTo(p),
          this.bindControl(
            new c(
              C,
              e.valuesColor,
              !0,
              this.model(),
              "Change " + i + " Text Color"
            )
          ),
          e.colors))
            if (isNumber(parseInt(T, 10))) {
              p = this.addRow(t);
              (o[T] = e.titles[T].value()),
                (n[T] = this.createColorPicker()),
                $("<td>").append(o[T]).appendTo(p),
                $("<td>").append(n[T]).appendTo(p),
                this.bindControl(
                  new c(
                    n[T],
                    e.colors[T],
                    !0,
                    this.model(),
                    "Change " + o[T] + " color"
                  )
                );
            }
        }),
        (x._createRow_backgrounds = function (t, e) {
          var i = this.addRow(t),
            o = $("<input type='checkbox' class='visibility-switch'/>"),
            n = e.name.value(),
            a = this.createColorPicker();
          $("<td>").append(o).appendTo(i),
            this.createLabeledCell(n, o).appendTo(i),
            $("<td>").append(a).appendTo(i),
            this.bindControl(
              new d(
                o,
                e.visible,
                !0,
                this.model(),
                "Change " + n + " visibility"
              )
            ),
            this.bindControl(
              new c(
                a,
                e.color,
                !0,
                this.model(),
                "Change " + n + " color",
                e.transparency
              )
            );
        }),
        (x._createRow_polygons = function (t, e) {
          var i = this.addRow(t),
            o = e.name.value(),
            n = this.createColorPicker();
          $("<td>").append(o).appendTo(i),
            $("<td>").append(n).appendTo(i),
            this.bindControl(
              new c(n, e.color, !0, this.model(), "Change " + o + " color")
            );
        }),
        (x._createRow_trendchannels = function (t, e) {
          var i = this.addRow(t),
            o = e.name.value(),
            n = this.createColorPicker();
          $("<td>").append(o).appendTo(i),
            $("<td>").append(n).appendTo(i),
            this.bindControl(
              new c(
                n,
                e.color,
                !0,
                this.model(),
                "Change " + o + " color",
                e.transparency
              )
            );
        }),
        (x._createRow_textmarks = function (t, e) {
          var i = this.addLabeledRow(t),
            o = e.name.value(),
            n = this.createColorPicker(),
            a = this.createColorPicker(),
            s = this.createFontEditor(),
            r = this.createFontSizeEditor(),
            p = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>'
            ),
            h = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>'
            );
          $("<td>").append(o).appendTo(i),
            "rectangle" !== e.shape.value() && $("<td>").append(n).appendTo(i),
            $("<td>").append(a).appendTo(i),
            $("<td>").append(s).appendTo(i),
            $("<td>").append(r).appendTo(i),
            $("<td>").append(p).appendTo(i),
            $("<td>").append(h).appendTo(i),
            this.bindControl(
              new c(
                n,
                e.color,
                !0,
                this.model(),
                "Change " + o + " color",
                e.transparency
              )
            ),
            this.bindControl(
              new c(
                a,
                e.fontColor,
                !0,
                this.model(),
                "Change " + o + " text color",
                e.transparency
              )
            ),
            this.bindControl(
              new l(
                r,
                e.fontSize,
                parseInt,
                !0,
                this.model(),
                "Change " + o + " font size"
              )
            ),
            this.bindControl(
              new l(
                s,
                e.fontFamily,
                null,
                !0,
                this.model(),
                "Change " + o + " font"
              )
            ),
            this.bindControl(
              new d(p, e.fontBold, !0, this.model(), "Change Text Font Bold")
            ),
            this.bindControl(
              new d(
                h,
                e.fontItalic,
                !0,
                this.model(),
                "Change Text Font Italic"
              )
            );
        }),
        (x._createRow_shapemarks = function (t, e) {
          var i = this.addRow(t),
            o = $("<input type='checkbox' class='visibility-switch'/>"),
            n = e.name.value(),
            a = this.createColorPicker(),
            s = $("<input/>");
          s.attr("type", "text"),
            s.addClass("ticker"),
            $("<td>").append(o).appendTo(i),
            this.createLabeledCell(n, o).appendTo(i),
            $("<td>").append(a).appendTo(i),
            this.createLabeledCell("Size", s).appendTo(i),
            $("<td>").append(s).appendTo(i),
            this.bindControl(
              new d(
                o,
                e.visible,
                !0,
                this.model(),
                "Change " + n + " visibility"
              )
            ),
            this.bindControl(
              new c(
                a,
                e.color,
                !0,
                this.model(),
                "Change " + n + " back color",
                e.transparency
              )
            ),
            this.bindControl(
              new y(s, e.size, null, !1, this.model(), "Change size")
            );
        }),
        (e.StudyStylesPropertyPage = x),
        (e.StudyDisplayPropertyPage = L);
    },
    qbxA: function (t, e, i) {},
    "y1L/": function (t, e, i) {},
  },
]);
