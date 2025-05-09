(window.webpackJsonp = window.webpackJsonp || []).push([
  ["change-interval-dialog"],
  {
    MuC6: function (t, i, e) {
      "use strict";
      var n = e("JWMC").trackEvent,
        o = e("PT1i").linking,
        s = e("h24c").parseIntervalValue,
        a = e("h24c").intervalIsSupported,
        r = e("Kxc7"),
        l = e("pPtI"),
        p = e("GAqT").TVOldDialogs,
        h = e("LxhU").Interval,
        u = $.t(
          "Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)"
        ),
        d = $.t(
          "Type the interval number for minute charts (i.e. 5 if it's going to be a five minute chart). Or number plus letter for other intervals: S for 1 second chart (15S for 15 second chart, etc.), H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)"
        );
      function c(t) {
        (this._options = t || {}),
          this._setInput(),
          (this._caption = $('<i class="interval-caption">').html("&nbsp;")),
          (this._helpTooltipTrigger = $(
            '<i class="help-tooltip-trigger apply-common-tooltip common-tooltip-below">'
          )
            .text("?")
            .attr("title", _() ? d : u)),
          (this._dialogTitle = $.t("Change Interval"));
      }
      function _() {
        return r.enabled("seconds_resolution");
      }
      (c.prototype._setInput = function () {
        (this._input = $(
          '<input type="text" class="change-interval-input" autocomplete="off" maxlength="7">'
        )),
          this._input
            .on("keypress", this._handleInput.bind(this))
            .on(
              "input",
              function () {
                this._validate(), this._updateCaption();
              }.bind(this)
            )
            .on(
              "blur",
              function () {
                setTimeout(this._submit.bind(this), 0);
              }.bind(this)
            );
      }),
        (c.prototype._validate = function () {
          var t = this._input.val();
          (this._parsed = s(t)),
            (this._valid = !this._parsed.error),
            (this._supported = !this._parsed.error && a(t));
          var i = this._parsed.unit;
          if (this._supported)
            if ("R" === i && this._parsed.qty > l.getMaxResolutionValue("R"))
              this._supported = !1;
            else if (null === i || "H" === i) {
              this._parsed.qty * ("H" === i ? 60 : 1) >
                l.getMaxResolutionValue("1") && (this._supported = !1);
            } else
              "S" === i
                ? this._parsed.qty > l.getMaxResolutionValue("S") &&
                  (this._supported = !1)
                : "T" === i && 1 !== this._parsed.qty && (this._supported = !1);
        }),
        (c.prototype._updateCaption = function () {
          var t;
          if (this._valid && this._supported) {
            var i = this._parsed.qty || 1,
              e = this._parsed.unit || "";
            (t = l.getTranslatedResolutionModel(i + e).hint),
              this._input.add(this._caption).removeClass("error");
          } else
            (t = this._parsed.error ? "&nbsp;" : $.t("Not applicable")),
              this._input.add(this._caption).addClass("error");
          this._caption.html(t);
        }),
        (c.prototype._handleInput = function (t) {
          13 !== t.which
            ? t.ctrlKey ||
              t.metaKey ||
              !t.charCode ||
              !t.which ||
              t.which <= 32 ||
              (function (t) {
                var i = [/[\dhdwm]/i];
                0;
                _() && i.push(/[\ds]/i);
                r.enabled("tick_resolution") && i.push(/[\dt]/i);
                return (
                  void 0 !==
                  i.find(function (i) {
                    return i.test(t);
                  })
                );
              })(String.fromCharCode(t.charCode)) ||
              t.preventDefault()
            : this._submit();
        }),
        (c.prototype._submit = function () {
          if (p.isOpen(this._dialogTitle)) {
            if (this._valid && this._supported) {
              var t = h.normalize(this._input.val()),
                i = o.interval.value();
              t &&
                i !== t &&
                "function" == typeof this._options.callback &&
                this._options.callback(t);
            }
            p.destroy(this._dialogTitle);
          }
        }),
        (c.prototype._setInitialValue = function (t) {
          var i = "",
            e = !1;
          (t = t || this._options.initialValue) && "," !== t
            ? (i = h.normalize(t) || "")
            : ((i = t = o.interval.value()), (e = !0)),
            this._input.val(i),
            e && this._input.select();
        }),
        (c.prototype.isValid = function () {
          return Boolean(this._valid);
        }),
        (c.prototype.show = function (t) {
          n("GUI", "Show Change Interval Dialog", t);
          var i = p.createDialog(this._dialogTitle, {
              hideCloseCross: !0,
              addClass: "change-interval-dialog",
              ownerDocument: this._options.ownerDocument,
            }),
            e = i.find("._tv-dialog-content");
          return (
            i.css("min-width", 0),
            e
              .css("min-width", 0)
              .mousedown(
                function (t) {
                  this._input.is(t.target) || t.preventDefault();
                }.bind(this)
              )
              .append(
                this._input.add(this._caption).add(this._helpTooltipTrigger)
              ),
            p.applyHandlers(i),
            p.positionDialog(i),
            this._setInitialValue(t),
            this._validate(),
            this._updateCaption(),
            i
          );
        }),
        (t.exports.ChangeIntervalDialog = c);
    },
  },
]);
