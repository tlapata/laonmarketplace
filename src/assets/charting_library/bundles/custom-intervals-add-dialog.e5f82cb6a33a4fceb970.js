(window.webpackJsonp = window.webpackJsonp || []).push([
  ["custom-intervals-add-dialog"],
  {
    Ce4d: function (e, t, n) {
      e.exports = {
        container: "container-AqxbM340",
        focused: "focused-3bgZ4yBI",
        readonly: "readonly-3YlYTz9Q",
        disabled: "disabled-3kisU58M",
        "size-small": "size-small-ST9O9iKu",
        "size-medium": "size-medium-2saizg8j",
        "size-large": "size-large-1HDInl7D",
        "font-size-small": "font-size-small-AVVl6ljq",
        "font-size-medium": "font-size-medium-3qTDml7i",
        "font-size-large": "font-size-large-36ClMPCZ",
        "border-none": "border-none-2VoAEzD9",
        shadow: "shadow-rtripSA4",
        "border-thin": "border-thin-2A_CUSMk",
        "border-thick": "border-thick-1_qIhMms",
        "intent-default": "intent-default-saHBD6pK",
        "intent-success": "intent-success-3xXQLoWT",
        "intent-warning": "intent-warning-SstNFztT",
        "intent-danger": "intent-danger-1URZFATh",
        "intent-primary": "intent-primary-npIFDxc3",
        "corner-top-left": "corner-top-left-1Ex1ff4b",
        "corner-top-right": "corner-top-right-37x9-mDc",
        "corner-bottom-right": "corner-bottom-right-3-_3mqIz",
        "corner-bottom-left": "corner-bottom-left-3mogFNyF",
        placeholder: "placeholder-3IHl8nis",
        selected: "selected-2IjEMdXr",
        hiddenArrow: "hiddenArrow-1HtcxiMc",
      };
    },
    H172: function (e, t, n) {
      "use strict";
      var r = n("mrSG"),
        o = n("q1tI"),
        a = n.n(o),
        c = n("TSYQ"),
        l = n.n(c),
        i = n("Eyy1"),
        s = n("/3z9"),
        u = n("d700"),
        d = n("9dlw"),
        m = n("N5tr"),
        f = n("Oi2w"),
        b = n("l9+T"),
        v = n("Wvr1"),
        h = n("Iivm"),
        p = n("VGf/"),
        g = n("lVA2");
      function w(e) {
        return a.a.createElement(
          "span",
          { className: g.wrapper, onClick: e.onClick },
          a.a.createElement(
            "span",
            { className: g.button },
            a.a.createElement(h.a, {
              className: l()(g.icon, e.isDropped && g.dropped),
              icon: p,
            })
          )
        );
      }
      var O = n("k+zC"),
        j = n("QpNh"),
        N = n("Ce4d");
      function E(e) {
        var t = e.value,
          n = e.className,
          c = e.menuClassName,
          h = e.menuItemClassName,
          p = e.placeholder,
          g = e.disabled,
          O = e.hideArrowButton,
          E = e.borderStyle,
          C = void 0 === E ? "thin" : E,
          y = e.intent,
          z = void 0 === y ? "default" : y,
          A = e.size,
          k = void 0 === A ? "medium" : A,
          S = e.highlight,
          x = e.removeRoundBorder,
          I = void 0 === x ? 0 : x,
          D = e.highlightRemoveRoundBorder,
          F = void 0 === D ? 0 : D,
          T = e.onFocus,
          M = e.onBlur,
          B = e.items,
          Q = Object(o.useRef)(null),
          V = Object(o.useState)(!1),
          q = V[0],
          _ = V[1],
          H = Object(f.a)(),
          K = H[0],
          L = H[1],
          R = Object(v.a)(I),
          W = Object(v.a)(F),
          G = Object(b.a)(L.onFocus, T),
          U = Object(b.a)(L.onBlur, M);
        return (
          p && (B = [{ content: p }].concat(B)),
          a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              "div",
              Object(r.a)(
                {
                  className: l()(
                    N.container,
                    n,
                    K && N.focused,
                    q && N.open,
                    g && N.disabled,
                    N["intent-" + (q ? "primary" : z)],
                    N["border-" + C],
                    N["size-" + k],
                    R,
                    S && N.highlight
                  ),
                  ref: Q,
                  onClick: g
                    ? void 0
                    : function () {
                        _(!q);
                      },
                  onFocus: G,
                  onBlur: U,
                  onKeyDown: Z,
                  tabIndex: g ? void 0 : -1,
                  "data-role": "listbox",
                },
                Object(j.a)(e)
              ),
              (function () {
                var e = B.find(function (e) {
                  return e.value === t;
                });
                if (!e)
                  return a.a.createElement(
                    "div",
                    { className: l()(N.placeholder, O && N.hiddenArrow) },
                    p
                  );
                var n = e.selectedContent || e.content;
                if ("string" == typeof n)
                  return a.a.createElement(
                    "div",
                    { className: l()(N.selected, O && N.hiddenArrow) },
                    n
                  );
                return a.a.createElement(
                  "div",
                  { className: l()(N.selected, O && N.hiddenArrow) },
                  a.a.cloneElement(n)
                );
              })(),
              !O && a.a.createElement(w, { isDropped: q }),
              (S || q) &&
                a.a.createElement("span", { className: l()(N.shadow, W) })
            ),
            a.a.createElement(
              d.a,
              {
                className: c,
                isOpened: q,
                position: function () {
                  var e = Object(i.ensureNotNull)(
                    Q.current
                  ).getBoundingClientRect();
                  return { x: e.left, y: e.top + e.height };
                },
                onClose: X,
                doNotCloseOn: Q.current,
                onKeyDown: Z,
              },
              B.map(function (e, n) {
                return e.readonly
                  ? a.a.createElement(
                      a.a.Fragment,
                      { key: "readonly_item_" + n },
                      e.content
                    )
                  : a.a.createElement(m.b, {
                      key: e.value || "",
                      className: h,
                      isActive: t === e.value,
                      label: e.content,
                      onClick: Y,
                      onClickArg: e.value,
                    });
              })
            )
          )
        );
        function Y(t) {
          var n = e.onChange,
            r = e.onChangeArg;
          n && n(t, r), Object(i.ensureNotNull)(Q.current).focus();
        }
        function X() {
          _(!1);
          var e = document.activeElement;
          (e && Object(u.b)(e)) || Object(i.ensureNotNull)(Q.current).focus();
        }
        function Z(e) {
          switch (Object(s.hashFromEvent)(e)) {
            case 27:
              q && (e.preventDefault(), X());
          }
        }
      }
      function C(e) {
        return (e = Object(O.a)(e)), a.a.createElement(E, Object(r.a)({}, e));
      }
      n.d(t, "a", function () {
        return C;
      });
    },
    Qhte: function (e, t, n) {
      e.exports = {
        scrollable: "scrollable-Yu-wPchb",
        content: "content-2n4jbVjv",
        row: "row-37rvoi2g",
        title: "title-2jd7Qo8W",
        control: "control-1o8LMgzl",
      };
    },
    "VGf/": function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 7" width="11" height="7" fill="none"><path stroke="currentColor" stroke-width="1.3" d="M.5 1.5l5 4 5-4"/></svg>';
    },
    Wvr1: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      var r = n("TSYQ"),
        o = n.n(r),
        a = n("Hk3L");
      function c(e) {
        var t = "";
        return (
          0 !== e &&
            (1 & e && (t = o()(t, a["corner-top-left"])),
            2 & e && (t = o()(t, a["corner-top-right"])),
            4 & e && (t = o()(t, a["corner-bottom-right"])),
            8 & e && (t = o()(t, a["corner-bottom-left"]))),
          t
        );
      }
    },
    lVA2: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper-L_3_Z_TF",
        hidden: "hidden-1D_fWm6V",
        button: "button-3nQ1t1Hz",
        icon: "icon-joUGXQgM",
        dropped: "dropped-jNwMnIIo",
      };
    },
    tmL0: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var r = n("mrSG"),
        o = n("q1tI"),
        a = n.n(o),
        c = n("x0D+"),
        l = n("Eyy1"),
        i = n("qFKp");
      function s(e) {
        var t = e.reference,
          n = e.children,
          l = Object(r.e)(e, ["reference", "children"]),
          s = Object(o.useRef)(null),
          d = Object(o.useCallback)(
            function (e) {
              t && (t.current = e),
                i.CheckMobile.iOS() &&
                  (null !== s.current && Object(c.enableBodyScroll)(s.current),
                  (s.current = e),
                  null !== s.current &&
                    Object(c.disableBodyScroll)(s.current, {
                      allowTouchMove: u(s),
                    }));
            },
            [t]
          );
        return a.a.createElement("div", Object(r.a)({ ref: d }, l), n);
      }
      function u(e) {
        return function (t) {
          var n = Object(l.ensureNotNull)(e.current),
            r = document.activeElement;
          return (
            !n.contains(t) || (null !== r && n.contains(r) && r.contains(t))
          );
        };
      }
    },
    w9vS: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "ToolWidgetIntervalsAddDialog", function () {
          return b;
        });
      var r = n("q1tI"),
        o = n.n(r),
        a = n("YFKU"),
        c = n("ycFu"),
        l = n("H172"),
        i = n("3G1X"),
        s = n("tWVy"),
        u = n("tmL0"),
        d = n("cSDC"),
        m = n("Qhte"),
        f = d.a.map(function (e) {
          return { value: e.name, content: e.label };
        });
      function b(e) {
        var t = e.onAdd,
          n = e.onClose,
          b = e.onUnmount,
          v = Object(r.useState)(d.a[0].name),
          h = v[0],
          p = v[1],
          g = Object(r.useState)("1"),
          w = g[0],
          O = g[1];
        return (
          Object(r.useEffect)(function () {
            return function () {
              b && b();
            };
          }, []),
          o.a.createElement(c.a, {
            dataName: "add-custom-interval-dialog",
            title: Object(a.t)("Add custom time interval"),
            isOpened: !0,
            onSubmit: function () {
              var e = Object(d.b)(w, h);
              void 0 !== e && t(e);
              n();
            },
            onCancel: n,
            onClickOutside: n,
            onClose: n,
            render: function () {
              return o.a.createElement(
                u.a,
                { className: m.scrollable, onScroll: N },
                o.a.createElement(
                  "div",
                  { className: m.content },
                  o.a.createElement(
                    "div",
                    { className: m.row },
                    o.a.createElement(
                      "div",
                      { className: m.title },
                      Object(a.t)("Type")
                    ),
                    o.a.createElement(l.a, {
                      className: m.control,
                      value: h,
                      items: f,
                      onChange: E,
                    })
                  ),
                  o.a.createElement(
                    "div",
                    { className: m.row },
                    o.a.createElement(
                      "div",
                      { className: m.title },
                      Object(a.t)("Interval")
                    ),
                    o.a.createElement(i.b, {
                      className: m.control,
                      inputMode: "numeric",
                      maxLength: 6,
                      value: w,
                      onChange: j,
                    })
                  )
                )
              );
            },
            defaultActionOnClose: "none",
            submitButtonText: Object(a.t)("Add"),
            submitOnEnterKey: !1,
            fullScreen: !0,
          })
        );
        function j(e) {
          var t = e.currentTarget.value;
          /^[0-9]*$/.test(t) && O(t);
        }
        function N() {
          s.a.fire();
        }
        function E(e) {
          p(e);
        }
      }
    },
  },
]);
