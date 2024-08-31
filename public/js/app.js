/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return t(e);
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
    "use strict";
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat
            ? function (e) {
                  return t.flat.call(e);
              }
            : function (e) {
                  return t.concat.apply([], e);
              },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType;
        },
        x = function (e) {
            return null != e && e === e.window;
        },
        E = C.document,
        c = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function b(e, t, n) {
        var r,
            i,
            o = (n = n || E).createElement("script");
        if (((o.text = e), t)) for (r in c) (i = t[r] || (t.getAttribute && t.getAttribute(r))) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
    }
    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e;
    }
    var f = "3.5.1",
        S = function (e, t) {
            return new S.fn.init(e, t);
        };
    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
    }
    (S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function () {
            return s.call(this);
        },
        get: function (e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function (e) {
            var t = S.merge(this.constructor(), e);
            return (t.prevObject = this), t;
        },
        each: function (e) {
            return S.each(this, e);
        },
        map: function (n) {
            return this.pushStack(
                S.map(this, function (e, t) {
                    return n.call(e, t, e);
                })
            );
        },
        slice: function () {
            return this.pushStack(s.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        even: function () {
            return this.pushStack(
                S.grep(this, function (e, t) {
                    return (t + 1) % 2;
                })
            );
        },
        odd: function () {
            return this.pushStack(
                S.grep(this, function (e, t) {
                    return t % 2;
                })
            );
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: u,
        sort: t.sort,
        splice: t.splice,
    }),
        (S.extend = S.fn.extend = function () {
            var e,
                t,
                n,
                r,
                i,
                o,
                a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1;
            for ("boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++), "object" == typeof a || m(a) || (a = {}), s === u && ((a = this), s--); s < u; s++)
                if (null != (e = arguments[s]))
                    for (t in e)
                        (r = e[t]),
                            "__proto__" !== t &&
                                a !== r &&
                                (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                                    ? ((n = a[t]), (o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}), (i = !1), (a[t] = S.extend(l, o, r)))
                                    : void 0 !== r && (a[t] = r));
            return a;
        }),
        S.extend({
            expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || ("function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l));
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            globalEval: function (e, t, n) {
                b(e, { nonce: t && t.nonce }, n);
            },
            each: function (e, t) {
                var n,
                    r = 0;
                if (p(e)) {
                    for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
                } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : i.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return (e.length = i), e;
            },
            grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                return r;
            },
            map: function (e, t, n) {
                var r,
                    i,
                    o = 0,
                    a = [];
                if (p(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return g(a);
            },
            guid: 1,
            support: y,
        }),
        "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
        S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            n["[object " + t + "]"] = t.toLowerCase();
        });
    var d = (function (n) {
        var e,
            d,
            b,
            o,
            i,
            h,
            f,
            g,
            w,
            u,
            l,
            T,
            C,
            a,
            E,
            v,
            s,
            c,
            y,
            S = "sizzle" + 1 * new Date(),
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            D = function (e, t) {
                return e === t && (l = !0), 0;
            },
            j = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1;
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"),
            $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i"),
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function (e, t) {
                return t ? ("\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
            },
            oe = function () {
                T();
            },
            ae = be(
                function (e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            H.apply((t = O.call(p.childNodes)), p.childNodes), t[p.childNodes.length].nodeType;
        } catch (e) {
            H = {
                apply: t.length
                    ? function (e, t) {
                          L.apply(e, O.call(t));
                      }
                    : function (e, t) {
                          var n = e.length,
                              r = 0;
                          while ((e[n++] = t[r++]));
                          e.length = n - 1;
                      },
            };
        }
        function se(t, e, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (((n = n || []), "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))) return n;
            if (!r && (T(e), (e = e || C), E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if ((i = u[1])) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n;
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
                    } else {
                        if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
                    }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
                        ((f = (ee.test(t) && ye(e.parentNode)) || e) === e && d.scope) || ((s = e.getAttribute("id")) ? (s = s.replace(re, ie)) : e.setAttribute("id", (s = S))), (o = (l = h(t)).length);
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",");
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n;
                    } catch (e) {
                        N(t, !0);
                    } finally {
                        s === S && e.removeAttribute("id");
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r);
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], (e[t + " "] = n);
            };
        }
        function le(e) {
            return (e[S] = !0), e;
        }
        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t;
        }
        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) while ((n = n.nextSibling)) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function de(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }
        function he(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n;
            };
        }
        function ge(t) {
            return function (e) {
                return "form" in e
                    ? e.parentNode && !1 === e.disabled
                        ? "label" in e
                            ? "label" in e.parentNode
                                ? e.parentNode.disabled === t
                                : e.disabled === t
                            : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
                        : e.disabled === t
                    : "label" in e && e.disabled === t;
            };
        }
        function ve(a) {
            return le(function (o) {
                return (
                    (o = +o),
                    le(function (e, t) {
                        var n,
                            r = a([], e.length, o),
                            i = r.length;
                        while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
                    })
                );
            });
        }
        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }
        for (e in ((d = se.support = {}),
        (i = se.isXML = function (e) {
            var t = e.namespaceURI,
                n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || (n && n.nodeName) || "HTML");
        }),
        (T = se.setDocument = function (e) {
            var t,
                n,
                r = e ? e.ownerDocument || e : p;
            return (
                r != C &&
                    9 === r.nodeType &&
                    r.documentElement &&
                    ((a = (C = r).documentElement),
                    (E = !i(C)),
                    p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)),
                    (d.scope = ce(function (e) {
                        return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                    })),
                    (d.attributes = ce(function (e) {
                        return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (d.getElementsByTagName = ce(function (e) {
                        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
                    })),
                    (d.getElementsByClassName = K.test(C.getElementsByClassName)),
                    (d.getById = ce(function (e) {
                        return (a.appendChild(e).id = S), !C.getElementsByName || !C.getElementsByName(S).length;
                    })),
                    d.getById
                        ? ((b.filter.ID = function (e) {
                              var t = e.replace(te, ne);
                              return function (e) {
                                  return e.getAttribute("id") === t;
                              };
                          }),
                          (b.find.ID = function (e, t) {
                              if ("undefined" != typeof t.getElementById && E) {
                                  var n = t.getElementById(e);
                                  return n ? [n] : [];
                              }
                          }))
                        : ((b.filter.ID = function (e) {
                              var n = e.replace(te, ne);
                              return function (e) {
                                  var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                  return t && t.value === n;
                              };
                          }),
                          (b.find.ID = function (e, t) {
                              if ("undefined" != typeof t.getElementById && E) {
                                  var n,
                                      r,
                                      i,
                                      o = t.getElementById(e);
                                  if (o) {
                                      if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                      (i = t.getElementsByName(e)), (r = 0);
                                      while ((o = i[r++])) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                  }
                                  return [];
                              }
                          })),
                    (b.find.TAG = d.getElementsByTagName
                        ? function (e, t) {
                              return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
                          }
                        : function (e, t) {
                              var n,
                                  r = [],
                                  i = 0,
                                  o = t.getElementsByTagName(e);
                              if ("*" === e) {
                                  while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                                  return r;
                              }
                              return o;
                          }),
                    (b.find.CLASS =
                        d.getElementsByClassName &&
                        function (e, t) {
                            if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
                        }),
                    (s = []),
                    (v = []),
                    (d.qsa = K.test(C.querySelectorAll)) &&
                        (ce(function (e) {
                            var t;
                            (a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"),
                                e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"),
                                e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                                (t = C.createElement("input")).setAttribute("name", ""),
                                e.appendChild(t),
                                e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                                e.querySelectorAll(":checked").length || v.push(":checked"),
                                e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"),
                                e.querySelectorAll("\\\f"),
                                v.push("[\\r\\n\\f]");
                        }),
                        ce(function (e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = C.createElement("input");
                            t.setAttribute("type", "hidden"),
                                e.appendChild(t).setAttribute("name", "D"),
                                e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="),
                                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                                (a.appendChild(e).disabled = !0),
                                2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                                e.querySelectorAll("*,:x"),
                                v.push(",.*:");
                        })),
                    (d.matchesSelector = K.test((c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector))) &&
                        ce(function (e) {
                            (d.disconnectedMatch = c.call(e, "*")), c.call(e, "[s!='']:x"), s.push("!=", F);
                        }),
                    (v = v.length && new RegExp(v.join("|"))),
                    (s = s.length && new RegExp(s.join("|"))),
                    (t = K.test(a.compareDocumentPosition)),
                    (y =
                        t || K.test(a.contains)
                            ? function (e, t) {
                                  var n = 9 === e.nodeType ? e.documentElement : e,
                                      r = t && t.parentNode;
                                  return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                              }
                            : function (e, t) {
                                  if (t) while ((t = t.parentNode)) if (t === e) return !0;
                                  return !1;
                              }),
                    (D = t
                        ? function (e, t) {
                              if (e === t) return (l = !0), 0;
                              var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                              return (
                                  n ||
                                  (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!d.sortDetached && t.compareDocumentPosition(e) === n)
                                      ? e == C || (e.ownerDocument == p && y(p, e))
                                          ? -1
                                          : t == C || (t.ownerDocument == p && y(p, t))
                                          ? 1
                                          : u
                                          ? P(u, e) - P(u, t)
                                          : 0
                                      : 4 & n
                                      ? -1
                                      : 1)
                              );
                          }
                        : function (e, t) {
                              if (e === t) return (l = !0), 0;
                              var n,
                                  r = 0,
                                  i = e.parentNode,
                                  o = t.parentNode,
                                  a = [e],
                                  s = [t];
                              if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                              if (i === o) return pe(e, t);
                              n = e;
                              while ((n = n.parentNode)) a.unshift(n);
                              n = t;
                              while ((n = n.parentNode)) s.unshift(n);
                              while (a[r] === s[r]) r++;
                              return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0;
                          })),
                C
            );
        }),
        (se.matches = function (e, t) {
            return se(e, null, null, t);
        }),
        (se.matchesSelector = function (e, t) {
            if ((T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))))
                try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
                } catch (e) {
                    N(t, !0);
                }
            return 0 < se(t, C, null, [e]).length;
        }),
        (se.contains = function (e, t) {
            return (e.ownerDocument || e) != C && T(e), y(e, t);
        }),
        (se.attr = function (e, t) {
            (e.ownerDocument || e) != C && T(e);
            var n = b.attrHandle[t.toLowerCase()],
                r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }),
        (se.escape = function (e) {
            return (e + "").replace(re, ie);
        }),
        (se.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (se.uniqueSort = function (e) {
            var t,
                n = [],
                r = 0,
                i = 0;
            if (((l = !d.detectDuplicates), (u = !d.sortStable && e.slice(0)), e.sort(D), l)) {
                while ((t = e[i++])) t === e[i] && (r = n.push(i));
                while (r--) e.splice(n[r], 1);
            }
            return (u = null), e;
        }),
        (o = se.getText = function (e) {
            var t,
                n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
            } else while ((t = e[r++])) n += o(t);
            return n;
        }),
        ((b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: {
                ATTR: function (e) {
                    return (e[1] = e[1].replace(te, ne)), (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function (e) {
                    return (
                        (e[1] = e[1].toLowerCase()),
                        "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && se.error(e[0]),
                        e
                    );
                },
                PSEUDO: function (e) {
                    var t,
                        n = !e[6] && e[2];
                    return G.CHILD.test(e[0])
                        ? null
                        : (e[3] ? (e[2] = e[4] || e[5] || "") : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                },
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e
                        ? function () {
                              return !0;
                          }
                        : function (e) {
                              return e.nodeName && e.nodeName.toLowerCase() === t;
                          };
                },
                CLASS: function (e) {
                    var t = m[e + " "];
                    return (
                        t ||
                        ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                            m(e, function (e) {
                                return t.test(("string" == typeof e.className && e.className) || ("undefined" != typeof e.getAttribute && e.getAttribute("class")) || "");
                            }))
                    );
                },
                ATTR: function (n, r, i) {
                    return function (e) {
                        var t = se.attr(e, n);
                        return null == t
                            ? "!=" === r
                            : !r ||
                                  ((t += ""),
                                  "=" === r
                                      ? t === i
                                      : "!=" === r
                                      ? t !== i
                                      : "^=" === r
                                      ? i && 0 === t.indexOf(i)
                                      : "*=" === r
                                      ? i && -1 < t.indexOf(i)
                                      : "$=" === r
                                      ? i && t.slice(-i.length) === i
                                      : "~=" === r
                                      ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i)
                                      : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
                    };
                },
                CHILD: function (h, e, t, g, v) {
                    var y = "nth" !== h.slice(0, 3),
                        m = "last" !== h.slice(-4),
                        x = "of-type" === e;
                    return 1 === g && 0 === v
                        ? function (e) {
                              return !!e.parentNode;
                          }
                        : function (e, t, n) {
                              var r,
                                  i,
                                  o,
                                  a,
                                  s,
                                  u,
                                  l = y !== m ? "nextSibling" : "previousSibling",
                                  c = e.parentNode,
                                  f = x && e.nodeName.toLowerCase(),
                                  p = !n && !x,
                                  d = !1;
                              if (c) {
                                  if (y) {
                                      while (l) {
                                          a = e;
                                          while ((a = a[l])) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                          u = l = "only" === h && !u && "nextSibling";
                                      }
                                      return !0;
                                  }
                                  if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                                      (d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2]), (a = s && c.childNodes[s]);
                                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                                          if (1 === a.nodeType && ++d && a === e) {
                                              i[h] = [k, s, d];
                                              break;
                                          }
                                  } else if ((p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d))
                                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                                          if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                                  return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                              }
                          };
                },
                PSEUDO: function (e, o) {
                    var t,
                        a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[S]
                        ? a(o)
                        : 1 < a.length
                        ? ((t = [e, e, "", o]),
                          b.setFilters.hasOwnProperty(e.toLowerCase())
                              ? le(function (e, t) {
                                    var n,
                                        r = a(e, o),
                                        i = r.length;
                                    while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                                })
                              : function (e) {
                                    return a(e, 0, t);
                                })
                        : a;
                },
            },
            pseudos: {
                not: le(function (e) {
                    var r = [],
                        i = [],
                        s = f(e.replace($, "$1"));
                    return s[S]
                        ? le(function (e, t, n, r) {
                              var i,
                                  o = s(e, null, r, []),
                                  a = e.length;
                              while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                          })
                        : function (e, t, n) {
                              return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                          };
                }),
                has: le(function (t) {
                    return function (e) {
                        return 0 < se(t, e).length;
                    };
                }),
                contains: le(function (t) {
                    return (
                        (t = t.replace(te, ne)),
                        function (e) {
                            return -1 < (e.textContent || o(e)).indexOf(t);
                        }
                    );
                }),
                lang: le(function (n) {
                    return (
                        V.test(n || "") || se.error("unsupported lang: " + n),
                        (n = n.replace(te, ne).toLowerCase()),
                        function (e) {
                            var t;
                            do {
                                if ((t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1;
                        }
                    );
                }),
                target: function (e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id;
                },
                root: function (e) {
                    return e === a;
                },
                focus: function (e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function (e) {
                    return !b.pseudos.empty(e);
                },
                header: function (e) {
                    return J.test(e.nodeName);
                },
                input: function (e) {
                    return Q.test(e.nodeName);
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && "button" === e.type) || "button" === t;
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: ve(function () {
                    return [0];
                }),
                last: ve(function (e, t) {
                    return [t - 1];
                }),
                eq: ve(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                }),
                even: ve(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: ve(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: ve(function (e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
                    return e;
                }),
                gt: ve(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                }),
            },
        }).pseudos.nth = b.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            b.pseudos[e] = de(e);
        for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
        function me() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
        }
        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first
                ? function (e, t, n) {
                      while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
                      return !1;
                  }
                : function (e, t, n) {
                      var r,
                          i,
                          o,
                          a = [k, p];
                      if (n) {
                          while ((e = e[u])) if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
                      } else
                          while ((e = e[u]))
                              if (1 === e.nodeType || f)
                                  if (((i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {})), l && l === e.nodeName.toLowerCase())) e = e[u] || e;
                                  else {
                                      if ((r = i[c]) && r[0] === k && r[1] === p) return (a[2] = r[2]);
                                      if (((i[c] = a)[2] = s(e, t, n))) return !0;
                                  }
                      return !1;
                  };
        }
        function we(i) {
            return 1 < i.length
                ? function (e, t, n) {
                      var r = i.length;
                      while (r--) if (!i[r](e, t, n)) return !1;
                      return !0;
                  }
                : i[0];
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
            return a;
        }
        function Ce(d, h, g, v, y, e) {
            return (
                v && !v[S] && (v = Ce(v)),
                y && !y[S] && (y = Ce(y, e)),
                le(function (e, t, n, r) {
                    var i,
                        o,
                        a,
                        s = [],
                        u = [],
                        l = t.length,
                        c =
                            e ||
                            (function (e, t, n) {
                                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                                return n;
                            })(h || "*", n.nodeType ? [n] : n, []),
                        f = !d || (!e && h) ? c : Te(c, s, d, n, r),
                        p = g ? (y || (e ? d : l || v) ? [] : t) : f;
                    if ((g && g(f, p, n, r), v)) {
                        (i = Te(p, u)), v(i, [], n, r), (o = i.length);
                        while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
                    }
                    if (e) {
                        if (y || d) {
                            if (y) {
                                (i = []), (o = p.length);
                                while (o--) (a = p[o]) && i.push((f[o] = a));
                                y(null, (p = []), i, r);
                            }
                            o = p.length;
                            while (o--) (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
                        }
                    } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
                })
            );
        }
        function Ee(e) {
            for (
                var i,
                    t,
                    n,
                    r = e.length,
                    o = b.relative[e[0].type],
                    a = o || b.relative[" "],
                    s = o ? 1 : 0,
                    u = be(
                        function (e) {
                            return e === i;
                        },
                        a,
                        !0
                    ),
                    l = be(
                        function (e) {
                            return -1 < P(i, e);
                        },
                        a,
                        !0
                    ),
                    c = [
                        function (e, t, n) {
                            var r = (!o && (n || t !== w)) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                            return (i = null), r;
                        },
                    ];
                s < r;
                s++
            )
                if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee((e = e.slice(n))), n < r && xe(e));
                    }
                    c.push(t);
                }
            return we(c);
        }
        return (
            (me.prototype = b.filters = b.pseudos),
            (b.setFilters = new me()),
            (h = se.tokenize = function (e, t) {
                var n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = x[e + " "];
                if (l) return t ? 0 : l.slice(0);
                (a = e), (s = []), (u = b.preFilter);
                while (a) {
                    for (o in ((n && !(r = _.exec(a))) || (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
                    (n = !1),
                    (r = z.exec(a)) && ((n = r.shift()), i.push({ value: n, type: r[0].replace($, " ") }), (a = a.slice(n.length))),
                    b.filter))
                        !(r = G[o].exec(a)) || (u[o] && !(r = u[o](r))) || ((n = r.shift()), i.push({ value: n, type: o, matches: r }), (a = a.slice(n.length)));
                    if (!n) break;
                }
                return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
            }),
            (f = se.compile = function (e, t) {
                var n,
                    v,
                    y,
                    m,
                    x,
                    r,
                    i = [],
                    o = [],
                    a = A[e + " "];
                if (!a) {
                    t || (t = h(e)), (n = t.length);
                    while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                    (a = A(
                        e,
                        ((v = o),
                        (m = 0 < (y = i).length),
                        (x = 0 < v.length),
                        (r = function (e, t, n, r, i) {
                            var o,
                                a,
                                s,
                                u = 0,
                                l = "0",
                                c = e && [],
                                f = [],
                                p = w,
                                d = e || (x && b.find.TAG("*", i)),
                                h = (k += null == p ? 1 : Math.random() || 0.1),
                                g = d.length;
                            for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                                if (x && o) {
                                    (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                                    while ((s = v[a++]))
                                        if (s(o, t || C, n)) {
                                            r.push(o);
                                            break;
                                        }
                                    i && (k = h);
                                }
                                m && ((o = !s && o) && u--, e && c.push(o));
                            }
                            if (((u += l), m && l !== u)) {
                                a = 0;
                                while ((s = y[a++])) s(c, f, t, n);
                                if (e) {
                                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                                    f = Te(f);
                                }
                                H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r);
                            }
                            return i && ((k = h), (w = p)), c;
                        }),
                        m ? le(r) : r)
                    )).selector = e;
                }
                return a;
            }),
            (g = se.select = function (e, t, n, r) {
                var i,
                    o,
                    a,
                    s,
                    u,
                    l = "function" == typeof e && e,
                    c = !r && h((e = l.selector || e));
                if (((n = n || []), 1 === c.length)) {
                    if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                        if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                        l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
                    }
                    i = G.needsContext.test(e) ? 0 : o.length;
                    while (i--) {
                        if (((a = o[i]), b.relative[(s = a.type)])) break;
                        if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), (ee.test(o[0].type) && ye(t.parentNode)) || t))) {
                            if ((o.splice(i, 1), !(e = r.length && xe(o)))) return H.apply(n, r), n;
                            break;
                        }
                    }
                }
                return (l || f(e, c))(r, t, !E, n, !t || (ee.test(e) && ye(t.parentNode)) || t), n;
            }),
            (d.sortStable = S.split("").sort(D).join("") === S),
            (d.detectDuplicates = !!l),
            T(),
            (d.sortDetached = ce(function (e) {
                return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
            })),
            ce(function (e) {
                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
            }) ||
                fe("type|href|height|width", function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                }),
            (d.attributes &&
                ce(function (e) {
                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                })) ||
                fe("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                }),
            ce(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
                fe(R, function (e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                }),
            se
        );
    })(C);
    (S.find = d), (S.expr = d.selectors), (S.expr[":"] = S.expr.pseudos), (S.uniqueSort = S.unique = d.uniqueSort), (S.text = d.getText), (S.isXMLDoc = d.isXML), (S.contains = d.contains), (S.escapeSelector = d.escape);
    var h = function (e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && S(e).is(n)) break;
                    r.push(e);
                }
            return r;
        },
        T = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        k = S.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function D(e, n, r) {
        return m(n)
            ? S.grep(e, function (e, t) {
                  return !!n.call(e, t, e) !== r;
              })
            : n.nodeType
            ? S.grep(e, function (e) {
                  return (e === n) !== r;
              })
            : "string" != typeof n
            ? S.grep(e, function (e) {
                  return -1 < i.call(n, e) !== r;
              })
            : S.filter(n, e, r);
    }
    (S.filter = function (e, t, n) {
        var r = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
                ? S.find.matchesSelector(r, e)
                    ? [r]
                    : []
                : S.find.matches(
                      e,
                      S.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        S.fn.extend({
            find: function (e) {
                var t,
                    n,
                    r = this.length,
                    i = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        S(e).filter(function () {
                            for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
                return 1 < r ? S.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack(D(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(D(this, e || [], !0));
            },
            is: function (e) {
                return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length;
            },
        });
    var j,
        q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((S.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (((n = n || j), "string" == typeof e)) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || (!r[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (((t = t instanceof S ? t[0] : t), S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
            }
            return (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this;
        }
        return e.nodeType ? ((this[0] = e), (this.length = 1), this) : m(e) ? (void 0 !== n.ready ? n.ready(e) : e(S)) : S.makeArray(e, this);
    }).prototype = S.fn),
        (j = S(E));
    var L = /^(?:parents|prev(?:Until|All))/,
        H = { children: !0, contents: !0, next: !0, prev: !0 };
    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e;
    }
    S.fn.extend({
        has: function (e) {
            var t = S(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            o.push(n);
                            break;
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
        },
        index: function (e) {
            return e ? ("string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
    }),
        S.each(
            {
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                    return h(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                    return h(e, "parentNode", n);
                },
                next: function (e) {
                    return O(e, "nextSibling");
                },
                prev: function (e) {
                    return O(e, "previousSibling");
                },
                nextAll: function (e) {
                    return h(e, "nextSibling");
                },
                prevAll: function (e) {
                    return h(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                    return h(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                    return h(e, "previousSibling", n);
                },
                siblings: function (e) {
                    return T((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return T(e.firstChild);
                },
                contents: function (e) {
                    return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
                },
            },
            function (r, i) {
                S.fn[r] = function (e, t) {
                    var n = S.map(this, i, e);
                    return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n);
                };
            }
        );
    var P = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        return e;
    }
    function M(e) {
        throw e;
    }
    function I(e, t, n, r) {
        var i;
        try {
            e && m((i = e.promise)) ? i.call(e).done(t).fail(n) : e && m((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    (S.Callbacks = function (r) {
        var e, n;
        r =
            "string" == typeof r
                ? ((e = r),
                  (n = {}),
                  S.each(e.match(P) || [], function (e, t) {
                      n[t] = !0;
                  }),
                  n)
                : S.extend({}, r);
        var i,
            t,
            o,
            a,
            s = [],
            u = [],
            l = -1,
            c = function () {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && ((l = s.length), (t = !1));
                }
                r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
            },
            f = {
                add: function () {
                    return (
                        s &&
                            (t && !i && ((l = s.length - 1), u.push(t)),
                            (function n(e) {
                                S.each(e, function (e, t) {
                                    m(t) ? (r.unique && f.has(t)) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
                                });
                            })(arguments),
                            t && !i && c()),
                        this
                    );
                },
                remove: function () {
                    return (
                        S.each(arguments, function (e, t) {
                            var n;
                            while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? -1 < S.inArray(e, s) : 0 < s.length;
                },
                empty: function () {
                    return s && (s = []), this;
                },
                disable: function () {
                    return (a = u = []), (s = t = ""), this;
                },
                disabled: function () {
                    return !s;
                },
                lock: function () {
                    return (a = u = []), t || i || (s = t = ""), this;
                },
                locked: function () {
                    return !!a;
                },
                fireWith: function (e, t) {
                    return a || ((t = [e, (t = t || []).slice ? t.slice() : t]), u.push(t), i || c()), this;
                },
                fire: function () {
                    return f.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!o;
                },
            };
        return f;
    }),
        S.extend({
            Deferred: function (e) {
                var o = [
                        ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                        ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"],
                    ],
                    i = "pending",
                    a = {
                        state: function () {
                            return i;
                        },
                        always: function () {
                            return s.done(arguments).fail(arguments), this;
                        },
                        catch: function (e) {
                            return a.then(null, e);
                        },
                        pipe: function () {
                            var i = arguments;
                            return S.Deferred(function (r) {
                                S.each(o, function (e, t) {
                                    var n = m(i[t[4]]) && i[t[4]];
                                    s[t[1]](function () {
                                        var e = n && n.apply(this, arguments);
                                        e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
                                    });
                                }),
                                    (i = null);
                            }).promise();
                        },
                        then: function (t, n, r) {
                            var u = 0;
                            function l(i, o, a, s) {
                                return function () {
                                    var n = this,
                                        r = arguments,
                                        e = function () {
                                            var e, t;
                                            if (!(i < u)) {
                                                if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                                (t = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                                    m(t)
                                                        ? s
                                                            ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                                                            : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith)))
                                                        : (a !== R && ((n = void 0), (r = [e])), (s || o.resolveWith)(n, r));
                                            }
                                        },
                                        t = s
                                            ? e
                                            : function () {
                                                  try {
                                                      e();
                                                  } catch (e) {
                                                      S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && ((n = void 0), (r = [e])), o.rejectWith(n, r));
                                                  }
                                              };
                                    i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t));
                                };
                            }
                            return S.Deferred(function (e) {
                                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M));
                            }).promise();
                        },
                        promise: function (e) {
                            return null != e ? S.extend(e, a) : a;
                        },
                    },
                    s = {};
                return (
                    S.each(o, function (e, t) {
                        var n = t[2],
                            r = t[5];
                        (a[t[1]] = n.add),
                            r &&
                                n.add(
                                    function () {
                                        i = r;
                                    },
                                    o[3 - e][2].disable,
                                    o[3 - e][3].disable,
                                    o[0][2].lock,
                                    o[0][3].lock
                                ),
                            n.add(t[3].fire),
                            (s[t[0]] = function () {
                                return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
                            }),
                            (s[t[0] + "With"] = n.fireWith);
                    }),
                    a.promise(s),
                    e && e.call(s, s),
                    s
                );
            },
            when: function (e) {
                var n = arguments.length,
                    t = n,
                    r = Array(t),
                    i = s.call(arguments),
                    o = S.Deferred(),
                    a = function (t) {
                        return function (e) {
                            (r[t] = this), (i[t] = 1 < arguments.length ? s.call(arguments) : e), --n || o.resolveWith(r, i);
                        };
                    };
                if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
                while (t--) I(i[t], a(t), o.reject);
                return o.promise();
            },
        });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (S.Deferred.exceptionHook = function (e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }),
        (S.readyException = function (e) {
            C.setTimeout(function () {
                throw e;
            });
        });
    var F = S.Deferred();
    function B() {
        E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready();
    }
    (S.fn.ready = function (e) {
        return (
            F.then(e)["catch"](function (e) {
                S.readyException(e);
            }),
            this
        );
    }),
        S.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --S.readyWait : S.isReady) || ((S.isReady = !0) !== e && 0 < --S.readyWait) || F.resolveWith(E, [S]);
            },
        }),
        (S.ready.then = F.then),
        "complete" === E.readyState || ("loading" !== E.readyState && !E.documentElement.doScroll) ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var $ = function (e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n)) for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
            else if (
                void 0 !== r &&
                ((i = !0),
                m(r) || (a = !0),
                l &&
                    (a
                        ? (t.call(e, r), (t = null))
                        : ((l = t),
                          (t = function (e, t, n) {
                              return l.call(S(e), n);
                          }))),
                t)
            )
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase();
    }
    function X(e) {
        return e.replace(_, "ms-").replace(z, U);
    }
    var V = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function G() {
        this.expando = S.expando + G.uid++;
    }
    (G.uid = 1),
        (G.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || ((t = {}), V(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
            },
            set: function (e, t, n) {
                var r,
                    i = this.cache(e);
                if ("string" == typeof t) i[X(t)] = n;
                else for (r in t) i[X(r)] = t[r];
                return i;
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
            },
            access: function (e, t, n) {
                return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
                        while (n--) delete r[t[n]];
                    }
                    (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !S.isEmptyObject(t);
            },
        });
    var Y = new G(),
        Q = new G(),
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;
    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (((r = "data-" + t.replace(K, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
                try {
                    n = "true" === (i = n) || ("false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i));
                } catch (e) {}
                Q.set(e, t, n);
            } else n = void 0;
        return n;
    }
    S.extend({
        hasData: function (e) {
            return Q.hasData(e) || Y.hasData(e);
        },
        data: function (e, t, n) {
            return Q.access(e, t, n);
        },
        removeData: function (e, t) {
            Q.remove(e, t);
        },
        _data: function (e, t, n) {
            return Y.access(e, t, n);
        },
        _removeData: function (e, t) {
            Y.remove(e, t);
        },
    }),
        S.fn.extend({
            data: function (n, e) {
                var t,
                    r,
                    i,
                    o = this[0],
                    a = o && o.attributes;
                if (void 0 === n) {
                    if (this.length && ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                        t = a.length;
                        while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && ((r = X(r.slice(5))), Z(o, r, i[r]));
                        Y.set(o, "hasDataAttrs", !0);
                    }
                    return i;
                }
                return "object" == typeof n
                    ? this.each(function () {
                          Q.set(this, n);
                      })
                    : $(
                          this,
                          function (e) {
                              var t;
                              if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                              this.each(function () {
                                  Q.set(this, n, e);
                              });
                          },
                          null,
                          e,
                          1 < arguments.length,
                          null,
                          !0
                      );
            },
            removeData: function (e) {
                return this.each(function () {
                    Q.remove(this, e);
                });
            },
        }),
        S.extend({
            queue: function (e, t, n) {
                var r;
                if (e) return (t = (t || "fx") + "queue"), (r = Y.get(e, t)), n && (!r || Array.isArray(n) ? (r = Y.access(e, t, S.makeArray(n))) : r.push(n)), r || [];
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = S.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = S._queueHooks(e, t);
                "inprogress" === i && ((i = n.shift()), r--),
                    i &&
                        ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        i.call(
                            e,
                            function () {
                                S.dequeue(e, t);
                            },
                            o
                        )),
                    !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    Y.get(e, n) ||
                    Y.access(e, n, {
                        empty: S.Callbacks("once memory").add(function () {
                            Y.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        S.fn.extend({
            queue: function (t, n) {
                var e = 2;
                return (
                    "string" != typeof t && ((n = t), (t = "fx"), e--),
                    arguments.length < e
                        ? S.queue(this[0], t)
                        : void 0 === n
                        ? this
                        : this.each(function () {
                              var e = S.queue(this, t, n);
                              S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    S.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                var n,
                    r = 1,
                    i = S.Deferred(),
                    o = this,
                    a = this.length,
                    s = function () {
                        --r || i.resolveWith(o, [o]);
                    };
                "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
                while (a--) (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(t);
            },
        });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = E.documentElement,
        ie = function (e) {
            return S.contains(e.ownerDocument, e);
        },
        oe = { composed: !0 };
    re.getRootNode &&
        (ie = function (e) {
            return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
        });
    var ae = function (e, t) {
        return "none" === (e = t || e).style.display || ("" === e.style.display && ie(e) && "none" === S.css(e, "display"));
    };
    function se(e, t, n, r) {
        var i,
            o,
            a = 20,
            s = r
                ? function () {
                      return r.cur();
                  }
                : function () {
                      return S.css(e, t, "");
                  },
            u = s(),
            l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || ("px" !== l && +u)) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            (u /= 2), (l = l || c[3]), (c = +u || 1);
            while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), (c /= o);
            (c *= 2), S.style(e, t, c + l), (n = n || []);
        }
        return n && ((c = +c || +u || 0), (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = l), (r.start = c), (r.end = i))), i;
    }
    var ue = {};
    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style &&
                ((n = r.style.display),
                t
                    ? ("none" === n && ((l[c] = Y.get(r, "display") || null), l[c] || (r.style.display = "")),
                      "" === r.style.display &&
                          ae(r) &&
                          (l[c] =
                              ((u = a = o = void 0),
                              (a = (i = r).ownerDocument),
                              (s = i.nodeName),
                              (u = ue[s]) || ((o = a.body.appendChild(a.createElement(s))), (u = S.css(o, "display")), o.parentNode.removeChild(o), "none" === u && (u = "block"), (ue[s] = u)))))
                    : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e;
    }
    S.fn.extend({
        show: function () {
            return le(this, !0);
        },
        hide: function () {
            return le(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      ae(this) ? S(this).show() : S(this).hide();
                  });
        },
    });
    var ce,
        fe,
        pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
        (fe = E.createElement("input")).setAttribute("type", "radio"),
        fe.setAttribute("checked", "checked"),
        fe.setAttribute("name", "t"),
        ce.appendChild(fe),
        (y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (ce.innerHTML = "<textarea>x</textarea>"),
        (y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
        (ce.innerHTML = "<option></option>"),
        (y.option = !!ce.lastChild);
    var ge = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    function ve(e, t) {
        var n;
        return (n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n;
    }
    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }
    (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead), (ge.th = ge.td), y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    (a = a || f.appendChild(t.createElement("div"))), (s = (de.exec(o) || ["", ""])[1].toLowerCase()), (u = ge[s] || ge._default), (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]), (c = u[0]);
                    while (c--) a = a.lastChild;
                    S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
                } else p.push(t.createTextNode(o));
        (f.textContent = ""), (d = 0);
        while ((o = p[d++]))
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (((l = ie(o)), (a = ve(f.appendChild(o), "script")), l && ye(a), n)) {
                c = 0;
                while ((o = a[c++])) he.test(o.type || "") && n.push(o);
            }
        return f;
    }
    var be = /^key/,
        we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Te = /^([^.]*)(?:\.(.+)|)/;
    function Ce() {
        return !0;
    }
    function Ee() {
        return !1;
    }
    function Se(e, t) {
        return (
            (e ===
                (function () {
                    try {
                        return E.activeElement;
                    } catch (e) {}
                })()) ==
            ("focus" === t)
        );
    }
    function ke(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t)) ke(e, s, n, r, t[s], o);
            return e;
        }
        if ((null == r && null == i ? ((i = n), (r = n = void 0)) : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))), !1 === i)) i = Ee;
        else if (!i) return e;
        return (
            1 === o &&
                ((a = i),
                ((i = function (e) {
                    return S().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = S.guid++))),
            e.each(function () {
                S.event.add(this, t, i, r, n);
            })
        );
    }
    function Ae(e, i, o) {
        o
            ? (Y.set(e, i, !1),
              S.event.add(e, i, {
                  namespace: !1,
                  handler: function (e) {
                      var t,
                          n,
                          r = Y.get(this, i);
                      if (1 & e.isTrigger && this[i]) {
                          if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation();
                          else if (((r = s.call(arguments)), Y.set(this, i, r), (t = o(this, i)), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}), r !== n))
                              return e.stopImmediatePropagation(), e.preventDefault(), n.value;
                      } else r.length && (Y.set(this, i, { value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation());
                  },
              }))
            : void 0 === Y.get(e, i) && S.event.add(e, i, Ce);
    }
    (S.event = {
        global: {},
        add: function (t, e, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = Y.get(t);
            if (V(t)) {
                n.handler && ((n = (o = n).handler), (i = o.selector)),
                    i && S.find.matchesSelector(re, i),
                    n.guid || (n.guid = S.guid++),
                    (u = v.events) || (u = v.events = Object.create(null)),
                    (a = v.handle) ||
                        (a = v.handle = function (e) {
                            return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
                        }),
                    (l = (e = (e || "").match(P) || [""]).length);
                while (l--)
                    (d = g = (s = Te.exec(e[l]) || [])[1]),
                        (h = (s[2] || "").split(".").sort()),
                        d &&
                            ((f = S.event.special[d] || {}),
                            (d = (i ? f.delegateType : f.bindType) || d),
                            (f = S.event.special[d] || {}),
                            (c = S.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && S.expr.match.needsContext.test(i), namespace: h.join(".") }, o)),
                            (p = u[d]) || (((p = u[d] = []).delegateCount = 0), (f.setup && !1 !== f.setup.call(t, r, h, a)) || (t.addEventListener && t.addEventListener(d, a))),
                            f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
                            i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                            (S.event.global[d] = !0));
            }
        },
        remove: function (e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (((d = g = (s = Te.exec(t[l]) || [])[1]), (h = (s[2] || "").split(".").sort()), d)) {
                        (f = S.event.special[d] || {}), (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []), (s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")), (a = o = p.length);
                        while (o--)
                            (c = p[o]),
                                (!i && g !== c.origType) ||
                                    (n && n.guid !== c.guid) ||
                                    (s && !s.test(c.namespace)) ||
                                    (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                                    (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) || S.removeEvent(e, d, v.handle), delete u[d]);
                    } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s = new Array(arguments.length),
                u = S.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = S.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (((u.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, u))) {
                (a = S.event.handlers.call(this, u, l)), (t = 0);
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    (u.currentTarget = i.elem), (n = 0);
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
                        (u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace)) ||
                            ((u.handleObj = o), (u.data = o.data), void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result;
            }
        },
        handlers: function (e, t) {
            var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[(i = (r = t[n]).selector + " ")] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o });
                    }
            return (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
        },
        addProp: function (t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e)
                    ? function () {
                          if (this.originalEvent) return e(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[t];
                      },
                set: function (e) {
                    Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
                },
            });
        },
        fix: function (e) {
            return e[S.expando] ? e : new S.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            click: {
                setup: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1;
                },
                trigger: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0;
                },
                _default: function (e) {
                    var t = e.target;
                    return (pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click")) || A(t, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (S.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (S.Event = function (e, t) {
            if (!(this instanceof S.Event)) return new S.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Ce : Ee),
                  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && S.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[S.expando] = !0);
        }),
        (S.Event.prototype = {
            constructor: S.Event,
            isDefaultPrevented: Ee,
            isPropagationStopped: Ee,
            isImmediatePropagationStopped: Ee,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Ce), e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Ce), e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Ce), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        S.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                    var t = e.button;
                    return null == e.which && be.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && we.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                },
            },
            S.event.addProp
        ),
        S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            S.event.special[e] = {
                setup: function () {
                    return Ae(this, e, Se), !1;
                },
                trigger: function () {
                    return Ae(this, e), !0;
                },
                delegateType: t,
            };
        }),
        S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, i) {
            S.event.special[e] = {
                delegateType: i,
                bindType: i,
                handle: function (e) {
                    var t,
                        n = e.relatedTarget,
                        r = e.handleObj;
                    return (n && (n === this || S.contains(this, n))) || ((e.type = r.origType), (t = r.handler.apply(this, arguments)), (e.type = i)), t;
                },
            };
        }),
        S.fn.extend({
            on: function (e, t, n, r) {
                return ke(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
                return ke(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this;
                }
                return (
                    (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                    !1 === n && (n = Ee),
                    this.each(function () {
                        S.event.remove(this, e, n, t);
                    })
                );
            },
        });
    var Ne = /<script|<style|<link/i,
        De = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function qe(e, t) {
        return (A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0]) || e;
    }
    function Le(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function He(e) {
        return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
    }
    function Oe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events)) for (i in (Y.remove(t, "handle events"), s)) for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
            Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
        }
    }
    function Pe(n, r, i, o) {
        r = g(r);
        var e,
            t,
            a,
            s,
            u,
            l,
            c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || (1 < f && "string" == typeof d && !y.checkClone && De.test(d)))
            return n.each(function (e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o);
            });
        if (f && ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild), 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++) (u = e), c !== p && ((u = S.clone(u, !0, !0)), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++)
                    (u = a[c]),
                        he.test(u.type || "") &&
                            !Y.access(u, "globalEval") &&
                            S.contains(l, u) &&
                            (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, l) : b(u.textContent.replace(je, ""), u, l));
        }
        return n;
    }
    function Re(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e;
    }
    S.extend({
        htmlPrefilter: function (e) {
            return e;
        },
        clone: function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l,
                c = e.cloneNode(!0),
                f = ie(e);
            if (!(y.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || S.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
                    (s = o[r]), (u = a[r]), void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? (u.checked = s.checked) : ("input" !== l && "textarea" !== l) || (u.defaultValue = s.defaultValue);
            if (t)
                if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Oe(o[r], a[r]);
                else Oe(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
        },
        cleanData: function (e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if ((t = n[Y.expando])) {
                        if (t.events) for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0;
                    }
                    n[Q.expando] && (n[Q.expando] = void 0);
                }
        },
    }),
        S.fn.extend({
            detach: function (e) {
                return Re(this, e, !0);
            },
            remove: function (e) {
                return Re(this, e);
            },
            text: function (e) {
                return $(
                    this,
                    function (e) {
                        return void 0 === e
                            ? S.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return Pe(this, arguments, function (e) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || qe(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return Pe(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = qe(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return Pe(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return Pe(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return S.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return $(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = S.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var n = [];
                return Pe(
                    this,
                    arguments,
                    function (e) {
                        var t = this.parentNode;
                        S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this));
                    },
                    n
                );
            },
        }),
        S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, a) {
            S.fn[e] = function (e) {
                for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) (t = o === i ? this : this.clone(!0)), S(r[o])[a](t), u.apply(n, t.get());
                return this.pushStack(n);
            };
        });
    var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Ie = function (e) {
            var t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = C), t.getComputedStyle(e);
        },
        We = function (e, t, n) {
            var r,
                i,
                o = {};
            for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
            for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
            return r;
        },
        Fe = new RegExp(ne.join("|"), "i");
    function Be(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.style;
        return (
            (n = n || Ie(e)) &&
                ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)),
                !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && ((r = s.width), (i = s.minWidth), (o = s.maxWidth), (s.minWidth = s.maxWidth = s.width = a), (a = n.width), (s.width = r), (s.minWidth = i), (s.maxWidth = o))),
            void 0 !== a ? a + "" : a
        );
    }
    function $e(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    !(function () {
        function e() {
            if (l) {
                (u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                (n = "1%" !== e.top),
                    (s = 12 === t(e.marginLeft)),
                    (l.style.right = "60%"),
                    (o = 36 === t(e.right)),
                    (r = 36 === t(e.width)),
                    (l.style.position = "absolute"),
                    (i = 12 === t(l.offsetWidth / 3)),
                    re.removeChild(u),
                    (l = null);
            }
        }
        function t(e) {
            return Math.round(parseFloat(e));
        }
        var n,
            r,
            i,
            o,
            a,
            s,
            u = E.createElement("div"),
            l = E.createElement("div");
        l.style &&
            ((l.style.backgroundClip = "content-box"),
            (l.cloneNode(!0).style.backgroundClip = ""),
            (y.clearCloneStyle = "content-box" === l.style.backgroundClip),
            S.extend(y, {
                boxSizingReliable: function () {
                    return e(), r;
                },
                pixelBoxStyles: function () {
                    return e(), o;
                },
                pixelPosition: function () {
                    return e(), n;
                },
                reliableMarginLeft: function () {
                    return e(), s;
                },
                scrollboxSize: function () {
                    return e(), i;
                },
                reliableTrDimensions: function () {
                    var e, t, n, r;
                    return (
                        null == a &&
                            ((e = E.createElement("table")),
                            (t = E.createElement("tr")),
                            (n = E.createElement("div")),
                            (e.style.cssText = "position:absolute;left:-11111px"),
                            (t.style.height = "1px"),
                            (n.style.height = "9px"),
                            re.appendChild(e).appendChild(t).appendChild(n),
                            (r = C.getComputedStyle(t)),
                            (a = 3 < parseInt(r.height)),
                            re.removeChild(e)),
                        a
                    );
                },
            }));
    })();
    var _e = ["Webkit", "Moz", "ms"],
        ze = E.createElement("div").style,
        Ue = {};
    function Xe(e) {
        var t = S.cssProps[e] || Ue[e];
        return (
            t ||
            (e in ze
                ? e
                : (Ue[e] =
                      (function (e) {
                          var t = e[0].toUpperCase() + e.slice(1),
                              n = _e.length;
                          while (n--) if ((e = _e[n] + t) in ze) return e;
                      })(e) || e))
        );
    }
    var Ve = /^(none|table(?!-c[ea]).+)/,
        Ge = /^--/,
        Ye = { position: "absolute", visibility: "hidden", display: "block" },
        Qe = { letterSpacing: "0", fontWeight: "400" };
    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
                r
                    ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
                    : ((u += S.css(e, "padding" + ne[a], !0, i)), "padding" !== n ? (u += S.css(e, "border" + ne[a] + "Width", !0, i)) : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5)) || 0), u;
    }
    function Ze(e, t, n) {
        var r = Ie(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            a = Be(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Me.test(a)) {
            if (!n) return a;
            a = "auto";
        }
        return (
            ((!y.boxSizingReliable() && i) || (!y.reliableTrDimensions() && A(e, "tr")) || "auto" === a || (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
                e.getClientRects().length &&
                ((i = "border-box" === S.css(e, "boxSizing", !1, r)), (o = s in e) && (a = e[s])),
            (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
        );
    }
    function et(e, t, n, r, i) {
        return new et.prototype.init(e, t, n, r, i);
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    a,
                    s = X(t),
                    u = Ge.test(t),
                    l = e.style;
                if ((u || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && ((n = se(e, t, i)), (o = "number")),
                    null != n &&
                        n == n &&
                        ("number" !== o || u || (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
                        y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                        (a && "set" in a && void 0 === (n = a.set(e, n, r))) || (u ? l.setProperty(t, n) : (l[t] = n)));
            }
        },
        css: function (e, t, n, r) {
            var i,
                o,
                a,
                s = X(t);
            return (
                Ge.test(t) || (t = Xe(s)),
                (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)),
                void 0 === i && (i = Be(e, t, r)),
                "normal" === i && t in Qe && (i = Qe[t]),
                "" === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
            );
        },
    }),
        S.each(["height", "width"], function (e, u) {
            S.cssHooks[u] = {
                get: function (e, t, n) {
                    if (t)
                        return !Ve.test(S.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                            ? Ze(e, u, n)
                            : We(e, Ye, function () {
                                  return Ze(e, u, n);
                              });
                },
                set: function (e, t, n) {
                    var r,
                        i = Ie(e),
                        o = !y.scrollboxSize() && "absolute" === i.position,
                        a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                        s = n ? Ke(e, u, n, a, i) : 0;
                    return (
                        a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - 0.5)),
                        s && (r = te.exec(t)) && "px" !== (r[3] || "px") && ((e.style[u] = t), (t = S.css(e, u))),
                        Je(0, t, s)
                    );
                },
            };
        }),
        (S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(Be(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                            We(e, { marginLeft: 0 }, function () {
                                return e.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
            (S.cssHooks[i + o] = {
                expand: function (e) {
                    for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                    return n;
                },
            }),
                "margin" !== i && (S.cssHooks[i + o].set = Je);
        }),
        S.fn.extend({
            css: function (e, t) {
                return $(
                    this,
                    function (e, t, n) {
                        var r,
                            i,
                            o = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
                            return o;
                        }
                        return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
                    },
                    e,
                    t,
                    1 < arguments.length
                );
            },
        }),
        (((S.Tween = et).prototype = {
            constructor: et,
            init: function (e, t, n, r, i, o) {
                (this.elem = e), (this.prop = n), (this.easing = i || S.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = o || (S.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = et.propHooks[this.prop];
                return e && e.get ? e.get(this) : et.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = et.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : et.propHooks._default.set(this),
                    this
                );
            },
        }).init.prototype = et.prototype),
        ((et.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                },
                set: function (e) {
                    S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)]) ? (e.elem[e.prop] = e.now) : S.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }).scrollTop = et.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
        }),
        (S.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (S.fx = et.prototype.init),
        (S.fx.step = {});
    var tt,
        nt,
        rt,
        it,
        ot = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;
    function st() {
        nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick());
    }
    function ut() {
        return (
            C.setTimeout(function () {
                tt = void 0;
            }),
            (tt = Date.now())
        );
    }
    function lt(e, t) {
        var n,
            r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++) if ((r = i[o].call(n, t, e))) return r;
    }
    function ft(o, e, t) {
        var n,
            a,
            r = 0,
            i = ft.prefilters.length,
            s = S.Deferred().always(function () {
                delete u.elem;
            }),
            u = function () {
                if (a) return !1;
                for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
            },
            l = s.promise({
                elem: o,
                props: S.extend({}, e),
                opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: tt || ut(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n;
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
                },
            }),
            c = l.props;
        for (
            !(function (e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (((i = t[(r = X(n))]), (o = e[n]), Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])), n !== r && ((e[r] = o), delete e[n]), (a = S.cssHooks[r]) && ("expand" in a)))
                        for (n in ((o = a.expand(o)), delete e[r], o)) (n in e) || ((e[n] = o[n]), (t[n] = i));
                    else t[r] = i;
            })(c, l.opts.specialEasing);
            r < i;
            r++
        )
            if ((n = ft.prefilters[r].call(l, o, c, l.opts))) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return (
            S.map(c, ct, l),
            m(l.opts.start) && l.opts.start.call(o, l),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
            S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
            l
        );
    }
    (S.Animation = S.extend(ft, {
        tweeners: {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return se(n.elem, e, te.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
            for (var n, r = 0, i = e.length; r < i; r++) (n = e[r]), (ft.tweeners[n] = ft.tweeners[n] || []), ft.tweeners[n].unshift(t);
        },
        prefilters: [
            function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c,
                    f = "width" in t || "height" in t,
                    p = this,
                    d = {},
                    h = e.style,
                    g = e.nodeType && ae(e),
                    v = Y.get(e, "fxshow");
                for (r in (n.queue ||
                    (null == (a = S._queueHooks(e, "fx")).unqueued &&
                        ((a.unqueued = 0),
                        (s = a.empty.fire),
                        (a.empty.fire = function () {
                            a.unqueued || s();
                        })),
                    a.unqueued++,
                    p.always(function () {
                        p.always(function () {
                            a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
                        });
                    })),
                t))
                    if (((i = t[r]), ot.test(i))) {
                        if ((delete t[r], (o = o || "toggle" === i), i === (g ? "hide" : "show"))) {
                            if ("show" !== i || !v || void 0 === v[r]) continue;
                            g = !0;
                        }
                        d[r] = (v && v[r]) || S.style(e, r);
                    }
                if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                    for (r in (f &&
                        1 === e.nodeType &&
                        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                        null == (l = v && v.display) && (l = Y.get(e, "display")),
                        "none" === (c = S.css(e, "display")) && (l ? (c = l) : (le([e], !0), (l = e.style.display || l), (c = S.css(e, "display")), le([e]))),
                        ("inline" === c || ("inline-block" === c && null != l)) &&
                            "none" === S.css(e, "float") &&
                            (u ||
                                (p.done(function () {
                                    h.display = l;
                                }),
                                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
                            (h.display = "inline-block"))),
                    n.overflow &&
                        ((h.overflow = "hidden"),
                        p.always(function () {
                            (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                        })),
                    (u = !1),
                    d))
                        u ||
                            (v ? "hidden" in v && (g = v.hidden) : (v = Y.access(e, "fxshow", { display: l })),
                            o && (v.hidden = !g),
                            g && le([e], !0),
                            p.done(function () {
                                for (r in (g || le([e]), Y.remove(e, "fxshow"), d)) S.style(e, r, d[r]);
                            })),
                            (u = ct(g ? v[r] : 0, r, p)),
                            r in v || ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
            },
        ],
        prefilter: function (e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
        },
    })),
        (S.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? S.extend({}, e) : { complete: n || (!n && t) || (m(e) && e), duration: e, easing: (n && t) || (t && !m(t) && t) };
            return (
                S.fx.off ? (r.duration = 0) : "number" != typeof r.duration && (r.duration in S.fx.speeds ? (r.duration = S.fx.speeds[r.duration]) : (r.duration = S.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                    m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
                }),
                r
            );
        }),
        S.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
            },
            animate: function (t, e, n, r) {
                var i = S.isEmptyObject(t),
                    o = S.speed(e, n, r),
                    a = function () {
                        var e = ft(this, S.extend({}, t), o);
                        (i || Y.get(this, "finish")) && e.stop(!0);
                    };
                return (a.finish = a), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
            },
            stop: function (i, e, o) {
                var a = function (e) {
                    var t = e.stop;
                    delete e.stop, t(o);
                };
                return (
                    "string" != typeof i && ((o = e), (e = i), (i = void 0)),
                    e && this.queue(i || "fx", []),
                    this.each(function () {
                        var e = !0,
                            t = null != i && i + "queueHooks",
                            n = S.timers,
                            r = Y.get(this);
                        if (t) r[t] && r[t].stop && a(r[t]);
                        else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
                        for (t = n.length; t--; ) n[t].elem !== this || (null != i && n[t].queue !== i) || (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
                        (!e && o) || S.dequeue(this, i);
                    })
                );
            },
            finish: function (a) {
                return (
                    !1 !== a && (a = a || "fx"),
                    this.each(function () {
                        var e,
                            t = Y.get(this),
                            n = t[a + "queue"],
                            r = t[a + "queueHooks"],
                            i = S.timers,
                            o = n ? n.length : 0;
                        for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--; ) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish;
                    })
                );
            },
        }),
        S.each(["toggle", "show", "hide"], function (e, r) {
            var i = S.fn[r];
            S.fn[r] = function (e, t, n) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n);
            };
        }),
        S.each({ slideDown: lt("show"), slideUp: lt("hide"), slideToggle: lt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, r) {
            S.fn[e] = function (e, t, n) {
                return this.animate(r, e, t, n);
            };
        }),
        (S.timers = []),
        (S.fx.tick = function () {
            var e,
                t = 0,
                n = S.timers;
            for (tt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || S.fx.stop(), (tt = void 0);
        }),
        (S.fx.timer = function (e) {
            S.timers.push(e), S.fx.start();
        }),
        (S.fx.interval = 13),
        (S.fx.start = function () {
            nt || ((nt = !0), st());
        }),
        (S.fx.stop = function () {
            nt = null;
        }),
        (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (S.fn.delay = function (r, e) {
            return (
                (r = (S.fx && S.fx.speeds[r]) || r),
                (e = e || "fx"),
                this.queue(e, function (e, t) {
                    var n = C.setTimeout(e, r);
                    t.stop = function () {
                        C.clearTimeout(n);
                    };
                })
            );
        }),
        (rt = E.createElement("input")),
        (it = E.createElement("select").appendChild(E.createElement("option"))),
        (rt.type = "checkbox"),
        (y.checkOn = "" !== rt.value),
        (y.optSelected = it.selected),
        ((rt = E.createElement("input")).value = "t"),
        (rt.type = "radio"),
        (y.radioValue = "t" === rt.value);
    var pt,
        dt = S.expr.attrHandle;
    S.fn.extend({
        attr: function (e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function (e) {
            return this.each(function () {
                S.removeAttr(this, e);
            });
        },
    }),
        S.extend({
            attr: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return "undefined" == typeof e.getAttribute
                        ? S.prop(e, t, n)
                        : ((1 === o && S.isXMLDoc(e)) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)),
                          void 0 !== n
                              ? null === n
                                  ? void S.removeAttr(e, t)
                                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                  ? r
                                  : (e.setAttribute(t, n + ""), n)
                              : i && "get" in i && null !== (r = i.get(e, t))
                              ? r
                              : null == (r = S.find.attr(e, t))
                              ? void 0
                              : r);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!y.radioValue && "radio" === t && A(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    },
                },
            },
            removeAttr: function (e, t) {
                var n,
                    r = 0,
                    i = t && t.match(P);
                if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
            },
        }),
        (pt = {
            set: function (e, t, n) {
                return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var a = dt[t] || S.find.attr;
            dt[t] = function (e, t, n) {
                var r,
                    i,
                    o = t.toLowerCase();
                return n || ((i = dt[o]), (dt[o] = r), (r = null != a(e, t, n) ? o : null), (dt[o] = i)), r;
            };
        });
    var ht = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;
    function vt(e) {
        return (e.match(P) || []).join(" ");
    }
    function yt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function mt(e) {
        return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
    }
    S.fn.extend({
        prop: function (e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[S.propFix[e] || e];
            });
        },
    }),
        S.extend({
            prop: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && S.isXMLDoc(e)) || ((t = S.propFix[t] || t), (i = S.propHooks[t])),
                        void 0 !== n ? (i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = S.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href) ? 0 : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        y.optSelected ||
            (S.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                },
            }),
        S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            S.propFix[this.toLowerCase()] = this;
        }),
        S.fn.extend({
            addClass: function (t) {
                var e,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    u = 0;
                if (m(t))
                    return this.each(function (e) {
                        S(this).addClass(t.call(this, e, yt(this)));
                    });
                if ((e = mt(t)).length)
                    while ((n = this[u++]))
                        if (((i = yt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
                            a = 0;
                            while ((o = e[a++])) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            i !== (s = vt(r)) && n.setAttribute("class", s);
                        }
                return this;
            },
            removeClass: function (t) {
                var e,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    u = 0;
                if (m(t))
                    return this.each(function (e) {
                        S(this).removeClass(t.call(this, e, yt(this)));
                    });
                if (!arguments.length) return this.attr("class", "");
                if ((e = mt(t)).length)
                    while ((n = this[u++]))
                        if (((i = yt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
                            a = 0;
                            while ((o = e[a++])) while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                            i !== (s = vt(r)) && n.setAttribute("class", s);
                        }
                return this;
            },
            toggleClass: function (i, t) {
                var o = typeof i,
                    a = "string" === o || Array.isArray(i);
                return "boolean" == typeof t && a
                    ? t
                        ? this.addClass(i)
                        : this.removeClass(i)
                    : m(i)
                    ? this.each(function (e) {
                          S(this).toggleClass(i.call(this, e, yt(this), t), t);
                      })
                    : this.each(function () {
                          var e, t, n, r;
                          if (a) {
                              (t = 0), (n = S(this)), (r = mt(i));
                              while ((e = r[t++])) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                          } else (void 0 !== i && "boolean" !== o) || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
                      });
            },
            hasClass: function (e) {
                var t,
                    n,
                    r = 0;
                t = " " + e + " ";
                while ((n = this[r++])) if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;
                return !1;
            },
        });
    var xt = /\r/g;
    S.fn.extend({
        val: function (n) {
            var r,
                e,
                i,
                t = this[0];
            return arguments.length
                ? ((i = m(n)),
                  this.each(function (e) {
                      var t;
                      1 === this.nodeType &&
                          (null == (t = i ? n.call(this, e, S(this).val()) : n)
                              ? (t = "")
                              : "number" == typeof t
                              ? (t += "")
                              : Array.isArray(t) &&
                                (t = S.map(t, function (e) {
                                    return null == e ? "" : e + "";
                                })),
                          ((r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value")) || (this.value = t));
                  }))
                : t
                ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value"))
                    ? e
                    : "string" == typeof (e = t.value)
                    ? e.replace(xt, "")
                    : null == e
                    ? ""
                    : e
                : void 0;
        },
    }),
        S.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = S.find.attr(e, "value");
                        return null != t ? t : vt(S.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        var t,
                            n,
                            r,
                            i = e.options,
                            o = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                                if (((t = S(n).val()), a)) return t;
                                s.push(t);
                            }
                        return s;
                    },
                    set: function (e, t) {
                        var n,
                            r,
                            i = e.options,
                            o = S.makeArray(t),
                            a = i.length;
                        while (a--) ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                        return n || (e.selectedIndex = -1), o;
                    },
                },
            },
        }),
        S.each(["radio", "checkbox"], function () {
            (S.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return (e.checked = -1 < S.inArray(S(e).val(), t));
                },
            }),
                y.checkOn ||
                    (S.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value") ? "on" : e.value;
                    });
        }),
        (y.focusin = "onfocusin" in C);
    var bt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function (e) {
            e.stopPropagation();
        };
    S.extend(S.event, {
        trigger: function (e, t, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f,
                p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
                ((o = f = a = n = n || E),
                3 !== n.nodeType &&
                    8 !== n.nodeType &&
                    !bt.test(d + S.event.triggered) &&
                    (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
                    (u = d.indexOf(":") < 0 && "on" + d),
                    ((e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
                    (e.namespace = h.join(".")),
                    (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (e.result = void 0),
                    e.target || (e.target = n),
                    (t = null == t ? [e] : S.makeArray(t, [e])),
                    (c = S.event.special[d] || {}),
                    r || !c.trigger || !1 !== c.trigger.apply(n, t)))
            ) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), (a = o);
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped())
                    (f = o),
                        (e.type = 1 < i ? s : c.bindType || d),
                        (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t),
                        (l = u && o[u]) && l.apply && V(o) && ((e.result = l.apply(o, t)), !1 === e.result && e.preventDefault());
                return (
                    (e.type = d),
                    r ||
                        e.isDefaultPrevented() ||
                        (c._default && !1 !== c._default.apply(p.pop(), t)) ||
                        !V(n) ||
                        (u &&
                            m(n[d]) &&
                            !x(n) &&
                            ((a = n[u]) && (n[u] = null),
                            (S.event.triggered = d),
                            e.isPropagationStopped() && f.addEventListener(d, wt),
                            n[d](),
                            e.isPropagationStopped() && f.removeEventListener(d, wt),
                            (S.event.triggered = void 0),
                            a && (n[u] = a))),
                    e.result
                );
            }
        },
        simulate: function (e, t, n) {
            var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
            S.event.trigger(r, null, t);
        },
    }),
        S.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    S.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return S.event.trigger(e, t, n, !0);
            },
        }),
        y.focusin ||
            S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
                var i = function (e) {
                    S.event.simulate(r, e.target, S.event.fix(e));
                };
                S.event.special[r] = {
                    setup: function () {
                        var e = this.ownerDocument || this.document || this,
                            t = Y.access(e, r);
                        t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
                    },
                    teardown: function () {
                        var e = this.ownerDocument || this.document || this,
                            t = Y.access(e, r) - 1;
                        t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
                    },
                };
            });
    var Tt = C.location,
        Ct = { guid: Date.now() },
        Et = /\?/;
    S.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = new C.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
            t = void 0;
        }
        return (t && !t.getElementsByTagName("parsererror").length) || S.error("Invalid XML: " + e), t;
    };
    var St = /\[\]$/,
        kt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;
    function Dt(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            S.each(e, function (e, t) {
                r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i);
            });
        else if (r || "object" !== w(e)) i(n, e);
        else for (t in e) Dt(n + "[" + t + "]", e[t], r, i);
    }
    (S.param = function (e, t) {
        var n,
            r = [],
            i = function (e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
            };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
            S.each(e, function () {
                i(this.name, this.value);
            });
        else for (n in e) Dt(n, e[n], t, i);
        return r.join("&");
    }),
        S.fn.extend({
            serialize: function () {
                return S.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = S.prop(this, "elements");
                    return e ? S.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e));
                    })
                    .map(function (e, t) {
                        var n = S(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                            ? S.map(n, function (e) {
                                  return { name: t.name, value: e.replace(kt, "\r\n") };
                              })
                            : { name: t.name, value: n.replace(kt, "\r\n") };
                    })
                    .get();
            },
        });
    var jt = /%20/g,
        qt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Rt = {},
        Mt = {},
        It = "*/".concat("*"),
        Wt = E.createElement("a");
    function Ft(o) {
        return function (e, t) {
            "string" != typeof e && ((t = e), (e = "*"));
            var n,
                r = 0,
                i = e.toLowerCase().match(P) || [];
            if (m(t)) while ((n = i[r++])) "+" === n[0] ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
        };
    }
    function Bt(t, i, o, a) {
        var s = {},
            u = t === Mt;
        function l(e) {
            var r;
            return (
                (s[e] = !0),
                S.each(t[e] || [], function (e, t) {
                    var n = t(i, o, a);
                    return "string" != typeof n || u || s[n] ? (u ? !(r = n) : void 0) : (i.dataTypes.unshift(n), l(n), !1);
                }),
                r
            );
        }
        return l(i.dataTypes[0]) || (!s["*"] && l("*"));
    }
    function $t(e, t) {
        var n,
            r,
            i = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r), e;
    }
    (Wt.href = Tt.href),
        S.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Tt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: { "*": It, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e);
            },
            ajaxPrefilter: Ft(Rt),
            ajaxTransport: Ft(Mt),
            ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var c,
                    f,
                    p,
                    n,
                    d,
                    r,
                    h,
                    g,
                    i,
                    o,
                    v = S.ajaxSetup({}, t),
                    y = v.context || v,
                    m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
                    x = S.Deferred(),
                    b = S.Callbacks("once memory"),
                    w = v.statusCode || {},
                    a = {},
                    s = {},
                    u = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (h) {
                                if (!n) {
                                    n = {};
                                    while ((t = Ht.exec(p))) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                }
                                t = n[e.toLowerCase() + " "];
                            }
                            return null == t ? null : t.join(", ");
                        },
                        getAllResponseHeaders: function () {
                            return h ? p : null;
                        },
                        setRequestHeader: function (e, t) {
                            return null == h && ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e), (a[e] = t)), this;
                        },
                        overrideMimeType: function (e) {
                            return null == h && (v.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (h) T.always(e[T.status]);
                                else for (t in e) w[t] = [w[t], e[t]];
                            return this;
                        },
                        abort: function (e) {
                            var t = e || u;
                            return c && c.abort(t), l(0, t), this;
                        },
                    };
                if (
                    (x.promise(T),
                    (v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//")),
                    (v.type = t.method || t.type || v.method || v.type),
                    (v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""]),
                    null == v.crossDomain)
                ) {
                    r = E.createElement("a");
                    try {
                        (r.href = v.url), (r.href = r.href), (v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host);
                    } catch (e) {
                        v.crossDomain = !0;
                    }
                }
                if ((v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h)) return T;
                for (i in ((g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"),
                (v.type = v.type.toUpperCase()),
                (v.hasContent = !Ot.test(v.type)),
                (f = v.url.replace(qt, "")),
                v.hasContent
                    ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+"))
                    : ((o = v.url.slice(f.length)),
                      v.data && (v.processData || "string" == typeof v.data) && ((f += (Et.test(f) ? "&" : "?") + v.data), delete v.data),
                      !1 === v.cache && ((f = f.replace(Lt, "$1")), (o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o)),
                      (v.url = f + o)),
                v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
                ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) && T.setRequestHeader("Content-Type", v.contentType),
                T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]),
                v.headers))
                    T.setRequestHeader(i, v.headers[i]);
                if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
                if (((u = "abort"), b.add(v.complete), T.done(v.success), T.fail(v.error), (c = Bt(Mt, v, t, T)))) {
                    if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h)) return T;
                    v.async &&
                        0 < v.timeout &&
                        (d = C.setTimeout(function () {
                            T.abort("timeout");
                        }, v.timeout));
                    try {
                        (h = !1), c.send(a, l);
                    } catch (e) {
                        if (h) throw e;
                        l(-1, e);
                    }
                } else l(-1, "No Transport");
                function l(e, t, n, r) {
                    var i,
                        o,
                        a,
                        s,
                        u,
                        l = t;
                    h ||
                        ((h = !0),
                        d && C.clearTimeout(d),
                        (c = void 0),
                        (p = r || ""),
                        (T.readyState = 0 < e ? 4 : 0),
                        (i = (200 <= e && e < 300) || 304 === e),
                        n &&
                            (s = (function (e, t, n) {
                                var r,
                                    i,
                                    o,
                                    a,
                                    s = e.contents,
                                    u = e.dataTypes;
                                while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (r)
                                    for (i in s)
                                        if (s[i] && s[i].test(r)) {
                                            u.unshift(i);
                                            break;
                                        }
                                if (u[0] in n) o = u[0];
                                else {
                                    for (i in n) {
                                        if (!u[0] || e.converters[i + " " + u[0]]) {
                                            o = i;
                                            break;
                                        }
                                        a || (a = i);
                                    }
                                    o = o || a;
                                }
                                if (o) return o !== u[0] && u.unshift(o), n[o];
                            })(v, T, n)),
                        !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function () {}),
                        (s = (function (e, t, n, r) {
                            var i,
                                o,
                                a,
                                s,
                                u,
                                l = {},
                                c = e.dataTypes.slice();
                            if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                            o = c.shift();
                            while (o)
                                if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (u = o), (o = c.shift())))
                                    if ("*" === o) o = u;
                                    else if ("*" !== u && u !== o) {
                                        if (!(a = l[u + " " + o] || l["* " + o]))
                                            for (i in l)
                                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                                    !0 === a ? (a = l[i]) : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                                                    break;
                                                }
                                        if (!0 !== a)
                                            if (a && e["throws"]) t = a(t);
                                            else
                                                try {
                                                    t = a(t);
                                                } catch (e) {
                                                    return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
                                                }
                                    }
                            return { state: "success", data: t };
                        })(v, s, T, i)),
                        i
                            ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                              204 === e || "HEAD" === v.type ? (l = "nocontent") : 304 === e ? (l = "notmodified") : ((l = s.state), (o = s.data), (i = !(a = s.error))))
                            : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
                        (T.status = e),
                        (T.statusText = (t || l) + ""),
                        i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
                        T.statusCode(w),
                        (w = void 0),
                        g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
                        b.fireWith(y, [T, l]),
                        g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")));
                }
                return T;
            },
            getJSON: function (e, t, n) {
                return S.get(e, t, n, "json");
            },
            getScript: function (e, t) {
                return S.get(e, void 0, t, "script");
            },
        }),
        S.each(["get", "post"], function (e, i) {
            S[i] = function (e, t, n, r) {
                return m(t) && ((r = r || n), (n = t), (t = void 0)), S.ajax(S.extend({ url: e, type: i, dataType: r, data: t, success: n }, S.isPlainObject(e) && e));
            };
        }),
        S.ajaxPrefilter(function (e) {
            var t;
            for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
        }),
        (S._evalUrl = function (e, t, n) {
            return S.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                    S.globalEval(e, t, n);
                },
            });
        }),
        S.fn.extend({
            wrapAll: function (e) {
                var t;
                return (
                    this[0] &&
                        (m(e) && (e = e.call(this[0])),
                        (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                var e = this;
                                while (e.firstElementChild) e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (n) {
                return m(n)
                    ? this.each(function (e) {
                          S(this).wrapInner(n.call(this, e));
                      })
                    : this.each(function () {
                          var e = S(this),
                              t = e.contents();
                          t.length ? t.wrapAll(n) : e.append(n);
                      });
            },
            wrap: function (t) {
                var n = m(t);
                return this.each(function (e) {
                    S(this).wrapAll(n ? t.call(this, e) : t);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not("body")
                        .each(function () {
                            S(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (S.expr.pseudos.hidden = function (e) {
            return !S.expr.pseudos.visible(e);
        }),
        (S.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (S.ajaxSettings.xhr = function () {
            try {
                return new C.XMLHttpRequest();
            } catch (e) {}
        });
    var _t = { 0: 200, 1223: 204 },
        zt = S.ajaxSettings.xhr();
    (y.cors = !!zt && "withCredentials" in zt),
        (y.ajax = zt = !!zt),
        S.ajaxTransport(function (i) {
            var o, a;
            if (y.cors || (zt && !i.crossDomain))
                return {
                    send: function (e, t) {
                        var n,
                            r = i.xhr();
                        if ((r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)) for (n in i.xhrFields) r[n] = i.xhrFields[n];
                        for (n in (i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e)) r.setRequestHeader(n, e[n]);
                        (o = function (e) {
                            return function () {
                                o &&
                                    ((o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null),
                                    "abort" === e
                                        ? r.abort()
                                        : "error" === e
                                        ? "number" != typeof r.status
                                            ? t(0, "error")
                                            : t(r.status, r.statusText)
                                        : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders()));
                            };
                        }),
                            (r.onload = o()),
                            (a = r.onerror = r.ontimeout = o("error")),
                            void 0 !== r.onabort
                                ? (r.onabort = a)
                                : (r.onreadystatechange = function () {
                                      4 === r.readyState &&
                                          C.setTimeout(function () {
                                              o && a();
                                          });
                                  }),
                            (o = o("abort"));
                        try {
                            r.send((i.hasContent && i.data) || null);
                        } catch (e) {
                            if (o) throw e;
                        }
                    },
                    abort: function () {
                        o && o();
                    },
                };
        }),
        S.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        S.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (e) {
                    return S.globalEval(e), e;
                },
            },
        }),
        S.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }),
        S.ajaxTransport("script", function (n) {
            var r, i;
            if (n.crossDomain || n.scriptAttrs)
                return {
                    send: function (e, t) {
                        (r = S("<script>")
                            .attr(n.scriptAttrs || {})
                            .prop({ charset: n.scriptCharset, src: n.url })
                            .on(
                                "load error",
                                (i = function (e) {
                                    r.remove(), (i = null), e && t("error" === e.type ? 404 : 200, e.type);
                                })
                            )),
                            E.head.appendChild(r[0]);
                    },
                    abort: function () {
                        i && i();
                    },
                };
        });
    var Ut,
        Xt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Xt.pop() || S.expando + "_" + Ct.guid++;
            return (this[e] = !0), e;
        },
    }),
        S.ajaxPrefilter("json jsonp", function (e, t, n) {
            var r,
                i,
                o,
                a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0])
                return (
                    (r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                    a ? (e[a] = e[a].replace(Vt, "$1" + r)) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                    (e.converters["script json"] = function () {
                        return o || S.error(r + " was not called"), o[0];
                    }),
                    (e.dataTypes[0] = "json"),
                    (i = C[r]),
                    (C[r] = function () {
                        o = arguments;
                    }),
                    n.always(function () {
                        void 0 === i ? S(C).removeProp(r) : (C[r] = i), e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)), o && m(i) && i(o[0]), (o = i = void 0);
                    }),
                    "script"
                );
        }),
        (y.createHTMLDocument = (((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Ut.childNodes.length)),
        (S.parseHTML = function (e, t, n) {
            return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t || (y.createHTMLDocument ? (((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href), t.head.appendChild(r)) : (t = E)),
                  (o = !n && []),
                  (i = N.exec(e)) ? [t.createElement(i[1])] : ((i = xe([e], t, o)), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
            var r, i, o;
        }),
        (S.fn.load = function (e, t, n) {
            var r,
                i,
                o,
                a = this,
                s = e.indexOf(" ");
            return (
                -1 < s && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
                m(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
                0 < a.length &&
                    S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                        .done(function (e) {
                            (o = arguments), a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
                        })
                        .always(
                            n &&
                                function (e, t) {
                                    a.each(function () {
                                        n.apply(this, o || [e.responseText, t, e]);
                                    });
                                }
                        ),
                this
            );
        }),
        (S.expr.pseudos.animated = function (t) {
            return S.grep(S.timers, function (e) {
                return t === e.elem;
            }).length;
        }),
        (S.offset = {
            setOffset: function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = S.css(e, "position"),
                    c = S(e),
                    f = {};
                "static" === l && (e.style.position = "relative"),
                    (s = c.offset()),
                    (o = S.css(e, "top")),
                    (u = S.css(e, "left")),
                    ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? ((a = (r = c.position()).top), (i = r.left)) : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                    m(t) && (t = t.call(e, n, S.extend({}, s))),
                    null != t.top && (f.top = t.top - s.top + a),
                    null != t.left && (f.left = t.left - s.left + i),
                    "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f));
            },
        }),
        S.fn.extend({
            offset: function (t) {
                if (arguments.length)
                    return void 0 === t
                        ? this
                        : this.each(function (e) {
                              S.offset.setOffset(this, t, e);
                          });
                var e,
                    n,
                    r = this[0];
                return r ? (r.getClientRects().length ? ((e = r.getBoundingClientRect()), (n = r.ownerDocument.defaultView), { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n,
                        r = this[0],
                        i = { top: 0, left: 0 };
                    if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        (t = this.offset()), (n = r.ownerDocument), (e = r.offsetParent || n.documentElement);
                        while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)), (i.left += S.css(e, "borderLeftWidth", !0)));
                    }
                    return { top: t.top - i.top - S.css(r, "marginTop", !0), left: t.left - i.left - S.css(r, "marginLeft", !0) };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var e = this.offsetParent;
                    while (e && "static" === S.css(e, "position")) e = e.offsetParent;
                    return e || re;
                });
            },
        }),
        S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, i) {
            var o = "pageYOffset" === i;
            S.fn[t] = function (e) {
                return $(
                    this,
                    function (e, t, n) {
                        var r;
                        if ((x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView), void 0 === n)) return r ? r[i] : e[t];
                        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : (e[t] = n);
                    },
                    t,
                    e,
                    arguments.length
                );
            };
        }),
        S.each(["top", "left"], function (e, n) {
            S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
                if (t) return (t = Be(e, n)), Me.test(t) ? S(e).position()[n] + "px" : t;
            });
        }),
        S.each({ Height: "height", Width: "width" }, function (a, s) {
            S.each({ padding: "inner" + a, content: s, "": "outer" + a }, function (r, o) {
                S.fn[o] = function (e, t) {
                    var n = arguments.length && (r || "boolean" != typeof e),
                        i = r || (!0 === e || !0 === t ? "margin" : "border");
                    return $(
                        this,
                        function (e, t, n) {
                            var r;
                            return x(e)
                                ? 0 === o.indexOf("outer")
                                    ? e["inner" + a]
                                    : e.document.documentElement["client" + a]
                                : 9 === e.nodeType
                                ? ((r = e.documentElement), Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a]))
                                : void 0 === n
                                ? S.css(e, t, i)
                                : S.style(e, t, n, i);
                        },
                        s,
                        n ? e : void 0,
                        n
                    );
                };
            });
        }),
        S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            S.fn[t] = function (e) {
                return this.on(t, e);
            };
        }),
        S.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            },
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
            S.fn[n] = function (e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
            };
        });
    var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (S.proxy = function (e, t) {
        var n, r, i;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
            return (
                (r = s.call(arguments, 2)),
                ((i = function () {
                    return e.apply(t || this, r.concat(s.call(arguments)));
                }).guid = e.guid = e.guid || S.guid++),
                i
            );
    }),
        (S.holdReady = function (e) {
            e ? S.readyWait++ : S.ready(!0);
        }),
        (S.isArray = Array.isArray),
        (S.parseJSON = JSON.parse),
        (S.nodeName = A),
        (S.isFunction = m),
        (S.isWindow = x),
        (S.camelCase = X),
        (S.type = w),
        (S.now = Date.now),
        (S.isNumeric = function (e) {
            var t = S.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        }),
        (S.trim = function (e) {
            return null == e ? "" : (e + "").replace(Gt, "");
        }),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return S;
            });
    var Yt = C.jQuery,
        Qt = C.$;
    return (
        (S.noConflict = function (e) {
            return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S;
        }),
        "undefined" == typeof e && (C.jQuery = C.$ = S),
        S
    );
}); /*! lazysizes - v5.2.0 */
!(function (a, b) {
    if (a) {
        var c = function (d) {
            b(a.lazySizes, d), a.removeEventListener("lazyunveilread", c, !0);
        };
        (b = b.bind(null, a, a.document)), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0);
    }
})("undefined" != typeof window ? window : 0, function (a, b, c, d) {
    "use strict";
    function e(a) {
        var b = getComputedStyle(a, null) || {},
            c = b.fontFamily || "",
            d = c.match(m) || "",
            e = (d && c.match(n)) || "";
        return e && (e = e[1]), { fit: (d && d[1]) || "", position: q[e] || e || "center" };
    }
    function f() {
        if (!i) {
            var a = b.createElement("style");
            (i = c.cfg.objectFitClass || "lazysizes-display-clone"), b.querySelector("head").appendChild(a);
        }
    }
    function g(a) {
        var b = a.previousElementSibling;
        b && c.hC(b, i) && (b.parentNode.removeChild(b), (a.style.position = b.getAttribute("data-position") || ""), (a.style.visibility = b.getAttribute("data-visibility") || ""));
    }
    function h(a, b) {
        var d,
            e,
            h,
            j,
            k = c.cfg,
            l = function () {
                var b = a.currentSrc || a.src;
                b && e !== b && ((e = b), (j.backgroundImage = "url(" + (p.test(b) ? JSON.stringify(b) : b) + ")"), d || ((d = !0), c.rC(h, k.loadingClass), c.aC(h, k.loadedClass)));
            },
            m = function () {
                c.rAF(l);
            };
        (a._lazysizesParentFit = b.fit),
            a.addEventListener("lazyloaded", m, !0),
            a.addEventListener("load", m, !0),
            c.rAF(function () {
                var d = a,
                    e = a.parentNode;
                "PICTURE" == e.nodeName.toUpperCase() && ((d = e), (e = e.parentNode)),
                    g(d),
                    i || f(),
                    (h = a.cloneNode(!1)),
                    (j = h.style),
                    h.addEventListener("load", function () {
                        var a = h.currentSrc || h.src;
                        a && a != o && ((h.src = o), (h.srcset = ""));
                    }),
                    c.rC(h, k.loadedClass),
                    c.rC(h, k.lazyClass),
                    c.rC(h, k.autosizesClass),
                    c.aC(h, k.loadingClass),
                    c.aC(h, i),
                    ["data-parent-fit", "data-parent-container", "data-object-fit-polyfilled", k.srcsetAttr, k.srcAttr].forEach(function (a) {
                        h.removeAttribute(a);
                    }),
                    (h.src = o),
                    (h.srcset = ""),
                    (j.backgroundRepeat = "no-repeat"),
                    (j.backgroundPosition = b.position),
                    (j.backgroundSize = b.fit),
                    h.setAttribute("data-position", d.style.position),
                    h.setAttribute("data-visibility", d.style.visibility),
                    (d.style.visibility = "hidden"),
                    (d.style.position = "absolute"),
                    a.setAttribute("data-parent-fit", b.fit),
                    a.setAttribute("data-parent-container", "prev"),
                    a.setAttribute("data-object-fit-polyfilled", ""),
                    (a._objectFitPolyfilledDisplay = h),
                    e.insertBefore(h, d),
                    a._lazysizesParentFit && delete a._lazysizesParentFit,
                    a.complete && l();
            });
    }
    var i,
        j = b.createElement("a").style,
        k = "objectFit" in j,
        l = k && "objectPosition" in j,
        m = /object-fit["']*\s*:\s*["']*(contain|cover)/,
        n = /object-position["']*\s*:\s*["']*(.+?)(?=($|,|'|"|;))/,
        o = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        p = /\(|\)|'/,
        q = { center: "center", "50% 50%": "center" };
    if (!k || !l) {
        var r = function (a) {
            if (a.detail.instance == c) {
                var b = a.target,
                    d = e(b);
                return !(!d.fit || (k && "center" == d.position)) && (h(b, d), !0);
            }
        };
        a.addEventListener("lazybeforesizes", function (a) {
            if (a.detail.instance == c) {
                var b = a.target;
                null == b.getAttribute("data-object-fit-polyfilled") ||
                    b._objectFitPolyfilledDisplay ||
                    r(a) ||
                    c.rAF(function () {
                        b.removeAttribute("data-object-fit-polyfilled");
                    });
            }
        }),
            a.addEventListener("lazyunveilread", r, !0),
            d && d.detail && r(d);
    }
}); /*! lazysizes - v5.2.0 */
!(function (a, b) {
    if (a) {
        var c = function () {
            b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0);
        };
        (b = b.bind(null, a, a.document)), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0);
    }
})("undefined" != typeof window ? window : 0, function (a, b, c) {
    "use strict";
    if (a.addEventListener) {
        var d = /\s+(\d+)(w|h)\s+(\d+)(w|h)/,
            e = /parent-fit["']*\s*:\s*["']*(contain|cover|width)/,
            f = /parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,
            g = /^picture$/i,
            h = c.cfg,
            i = function (a) {
                return getComputedStyle(a, null) || {};
            },
            j = {
                getParent: function (b, c) {
                    var d = b,
                        e = b.parentNode;
                    return (
                        (c && "prev" != c) || !e || !g.test(e.nodeName || "") || (e = e.parentNode),
                        "self" != c && (d = "prev" == c ? b.previousElementSibling : c && (e.closest || a.jQuery) ? (e.closest ? e.closest(c) : jQuery(e).closest(c)[0]) || e : e),
                        d
                    );
                },
                getFit: function (a) {
                    var b,
                        c,
                        d = i(a),
                        g = d.content || d.fontFamily,
                        h = { fit: a._lazysizesParentFit || a.getAttribute("data-parent-fit") };
                    return (
                        !h.fit && g && (b = g.match(e)) && (h.fit = b[1]),
                        h.fit ? ((c = a._lazysizesParentContainer || a.getAttribute("data-parent-container")), !c && g && (b = g.match(f)) && (c = b[1]), (h.parent = j.getParent(a, c))) : (h.fit = d.objectFit),
                        h
                    );
                },
                getImageRatio: function (b) {
                    var c,
                        e,
                        f,
                        i,
                        j,
                        k,
                        l,
                        m = b.parentNode,
                        n = m && g.test(m.nodeName || "") ? m.querySelectorAll("source, img") : [b];
                    for (c = 0; c < n.length; c++)
                        if (
                            ((b = n[c]),
                            (e = b.getAttribute(h.srcsetAttr) || b.getAttribute("srcset") || b.getAttribute("data-pfsrcset") || b.getAttribute("data-risrcset") || ""),
                            (f = b._lsMedia || b.getAttribute("media")),
                            (f = h.customMedia[b.getAttribute("data-media") || f] || f),
                            e && (!f || ((a.matchMedia && matchMedia(f)) || {}).matches))
                        ) {
                            (i = parseFloat(b.getAttribute("data-aspectratio"))),
                                i || ((j = e.match(d)), j ? ("w" == j[2] ? ((k = j[1]), (l = j[3])) : ((k = j[3]), (l = j[1]))) : ((k = b.getAttribute("width")), (l = b.getAttribute("height"))), (i = k / l));
                            break;
                        }
                    return i;
                },
                calculateSize: function (a, b) {
                    var c,
                        d,
                        e,
                        f,
                        g = this.getFit(a),
                        h = g.fit,
                        i = g.parent;
                    return "width" == h || (("contain" == h || "cover" == h) && (e = this.getImageRatio(a)))
                        ? (i ? (b = i.clientWidth) : (i = a), (f = b), "width" == h ? (f = b) : ((d = i.clientHeight), (c = b / d) && (("cover" == h && c < e) || ("contain" == h && c > e)) && (f = b * (e / c))), f)
                        : b;
                },
            };
        (c.parentFit = j),
            b.addEventListener("lazybeforesizes", function (a) {
                if (!a.defaultPrevented && a.detail.instance == c) {
                    var b = a.target;
                    a.detail.width = j.calculateSize(b, a.detail.width);
                }
            });
    }
}); /*! lazysizes - v5.2.0 */
!(function (a, b) {
    if (a) {
        var c = function () {
            b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0);
        };
        (b = b.bind(null, a, a.document)), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0);
    }
})("undefined" != typeof window ? window : 0, function (a, b, c) {
    "use strict";
    var d = [].slice,
        e = /blur-up["']*\s*:\s*["']*(always|auto)/,
        f = /image\/(jpeg|png|gif|svg\+xml)/,
        g = function (b) {
            var d = b.getAttribute("data-media") || b.getAttribute("media"),
                e = b.getAttribute("type");
            return (!e || f.test(e)) && (!d || a.matchMedia(c.cfg.customMedia[d] || d).matches);
        },
        h = function (a, b) {
            var c;
            return (
                (a ? d.call(a.querySelectorAll("source, img")) : [b]).forEach(function (a) {
                    if (!c) {
                        var b = a.getAttribute("data-lowsrc");
                        b && g(a) && (c = b);
                    }
                }),
                c
            );
        },
        i = function (a, d, e, f) {
            var g,
                h = !1,
                i = !1,
                j = "always" == f ? 0 : Date.now(),
                k = 0,
                l = (a || d).parentNode,
                m = function () {
                    if (e) {
                        var j = function (a) {
                            (h = !0),
                                g || (g = a.target),
                                c.rAF(function () {
                                    c.rC(d, "ls-blur-up-is-loading"), g && c.aC(g, "ls-blur-up-loaded");
                                }),
                                g && (g.removeEventListener("load", j), g.removeEventListener("error", j));
                        };
                        (g = b.createElement("img")),
                            g.addEventListener("load", j),
                            g.addEventListener("error", j),
                            (g.className = "ls-blur-up-img"),
                            (g.src = e),
                            (g.alt = ""),
                            g.setAttribute("aria-hidden", "true"),
                            l.insertBefore(g, (a || d).nextSibling),
                            "always" != f &&
                                ((g.style.visibility = "hidden"),
                                c.rAF(function () {
                                    g &&
                                        setTimeout(function () {
                                            g &&
                                                c.rAF(function () {
                                                    !i && g && (g.style.visibility = "");
                                                });
                                        }, c.cfg.blurupCacheDelay || 33);
                                }));
                    }
                },
                n = function () {
                    g &&
                        c.rAF(function () {
                            c.rC(d, "ls-blur-up-is-loading");
                            try {
                                g.parentNode.removeChild(g);
                            } catch (a) {}
                            g = null;
                        });
                },
                o = function (a) {
                    k++, (i = a || i), a ? n() : k > 1 && setTimeout(n, 5e3);
                },
                p = function () {
                    d.removeEventListener("load", p),
                        d.removeEventListener("error", p),
                        g &&
                            c.rAF(function () {
                                g && c.aC(g, "ls-original-loaded");
                            }),
                        "always" != f && (!h || Date.now() - j < 66) ? o(!0) : o();
                };
            m(), d.addEventListener("load", p), d.addEventListener("error", p), c.aC(d, "ls-blur-up-is-loading");
            var q = function (a) {
                l == a.target && (c.aC(g || d, "ls-inview"), o(), l.removeEventListener("lazybeforeunveil", q));
            };
            l.getAttribute("data-expand") || l.setAttribute("data-expand", -1), l.addEventListener("lazybeforeunveil", q), c.aC(l, c.cfg.lazyClass);
        };
    a.addEventListener("lazybeforeunveil", function (a) {
        var b = a.detail;
        if (b.instance == c && b.blurUp) {
            var d = a.target,
                e = d.parentNode;
            "PICTURE" != e.nodeName && (e = null), i(e, d, h(e, d) || "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", b.blurUp);
        }
    }),
        a.addEventListener("lazyunveilread", function (a) {
            var b = a.detail;
            if (b.instance == c) {
                var d = a.target,
                    f = (getComputedStyle(d, null) || { fontFamily: "" }).fontFamily.match(e);
                (f || d.getAttribute("data-lowsrc")) && (b.blurUp = (f && f[1]) || c.cfg.blurupMode || "always");
            }
        });
}); /*! lazysizes - v5.2.0 */
!(function (a, b) {
    var c = function () {
        b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0);
    };
    (b = b.bind(null, a, a.document)), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0);
})(window, function (a, b, c) {
    "use strict";
    function d(a, c) {
        if (!g[a]) {
            var d = b.createElement(c ? "link" : "script"),
                e = b.getElementsByTagName("script")[0];
            c ? ((d.rel = "stylesheet"), (d.href = a)) : (d.src = a), (g[a] = !0), (g[d.src || d.href] = !0), e.parentNode.insertBefore(d, e);
        }
    }
    var e,
        f,
        g = {};
    b.addEventListener &&
        ((f = /\(|\)|\s|'/),
        (e = function (a, c) {
            var d = b.createElement("img");
            (d.onload = function () {
                (d.onload = null), (d.onerror = null), (d = null), c();
            }),
                (d.onerror = d.onload),
                (d.src = a),
                d && d.complete && d.onload && d.onload();
        }),
        addEventListener(
            "lazybeforeunveil",
            function (a) {
                if (a.detail.instance == c) {
                    var b, g, h, i;
                    if (!a.defaultPrevented) {
                        var j = a.target;
                        if (("none" == j.preload && (j.preload = j.getAttribute("data-preload") || "auto"), null != j.getAttribute("data-autoplay")))
                            if (j.getAttribute("data-expand") && !j.autoplay)
                                try {
                                    j.play();
                                } catch (a) {}
                            else
                                requestAnimationFrame(function () {
                                    j.setAttribute("data-expand", "-10"), c.aC(j, c.cfg.lazyClass);
                                });
                        (b = j.getAttribute("data-link")),
                            b && d(b, !0),
                            (b = j.getAttribute("data-script")),
                            b && d(b),
                            (b = j.getAttribute("data-require")),
                            b && (c.cfg.requireJs ? c.cfg.requireJs([b]) : d(b)),
                            (h = j.getAttribute("data-bg")),
                            h &&
                                ((a.detail.firesLoad = !0),
                                (g = function () {
                                    (j.style.backgroundImage = "url(" + (f.test(h) ? JSON.stringify(h) : h) + ")"), (a.detail.firesLoad = !1), c.fire(j, "_lazyloaded", {}, !0, !0);
                                }),
                                e(h, g)),
                            (i = j.getAttribute("data-poster")),
                            i &&
                                ((a.detail.firesLoad = !0),
                                (g = function () {
                                    (j.poster = i), (a.detail.firesLoad = !1), c.fire(j, "_lazyloaded", {}, !0, !0);
                                }),
                                e(i, g));
                    }
                }
            },
            !1
        ));
}); /*! lazysizes - v5.2.0 */
!(function (a, b) {
    var c = b(a, a.document, Date);
    (a.lazySizes = c), "object" == typeof module && module.exports && (module.exports = c);
})("undefined" != typeof window ? window : {}, function (a, b, c) {
    "use strict";
    var d, e;
    if (
        ((function () {
            var b,
                c = {
                    lazyClass: "lazyload",
                    loadedClass: "lazyloaded",
                    loadingClass: "lazyloading",
                    preloadClass: "lazypreload",
                    errorClass: "lazyerror",
                    autosizesClass: "lazyautosizes",
                    srcAttr: "data-src",
                    srcsetAttr: "data-srcset",
                    sizesAttr: "data-sizes",
                    minSize: 40,
                    customMedia: {},
                    init: !0,
                    expFactor: 1.5,
                    hFac: 0.8,
                    loadMode: 2,
                    loadHidden: !0,
                    ricTimeout: 0,
                    throttleDelay: 125,
                };
            e = a.lazySizesConfig || a.lazysizesConfig || {};
            for (b in c) b in e || (e[b] = c[b]);
        })(),
        !b || !b.getElementsByClassName)
    )
        return { init: function () {}, cfg: e, noSupport: !0 };
    var f = b.documentElement,
        g = a.HTMLPictureElement,
        h = "addEventListener",
        i = "getAttribute",
        j = a[h].bind(a),
        k = a.setTimeout,
        l = a.requestAnimationFrame || k,
        m = a.requestIdleCallback,
        n = /^picture$/i,
        o = ["load", "error", "lazyincluded", "_lazyloaded"],
        p = {},
        q = Array.prototype.forEach,
        r = function (a, b) {
            return p[b] || (p[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")), p[b].test(a[i]("class") || "") && p[b];
        },
        s = function (a, b) {
            r(a, b) || a.setAttribute("class", (a[i]("class") || "").trim() + " " + b);
        },
        t = function (a, b) {
            var c;
            (c = r(a, b)) && a.setAttribute("class", (a[i]("class") || "").replace(c, " "));
        },
        u = function (a, b, c) {
            var d = c ? h : "removeEventListener";
            c && u(a, b),
                o.forEach(function (c) {
                    a[d](c, b);
                });
        },
        v = function (a, c, e, f, g) {
            var h = b.createEvent("Event");
            return e || (e = {}), (e.instance = d), h.initEvent(c, !f, !g), (h.detail = e), a.dispatchEvent(h), h;
        },
        w = function (b, c) {
            var d;
            !g && (d = a.picturefill || e.pf) ? (c && c.src && !b[i]("srcset") && b.setAttribute("srcset", c.src), d({ reevaluate: !0, elements: [b] })) : c && c.src && (b.src = c.src);
        },
        x = function (a, b) {
            return (getComputedStyle(a, null) || {})[b];
        },
        y = function (a, b, c) {
            for (c = c || a.offsetWidth; c < e.minSize && b && !a._lazysizesWidth; ) (c = b.offsetWidth), (b = b.parentNode);
            return c;
        },
        z = (function () {
            var a,
                c,
                d = [],
                e = [],
                f = d,
                g = function () {
                    var b = f;
                    for (f = d.length ? e : d, a = !0, c = !1; b.length; ) b.shift()();
                    a = !1;
                },
                h = function (d, e) {
                    a && !e ? d.apply(this, arguments) : (f.push(d), c || ((c = !0), (b.hidden ? k : l)(g)));
                };
            return (h._lsFlush = g), h;
        })(),
        A = function (a, b) {
            return b
                ? function () {
                      z(a);
                  }
                : function () {
                      var b = this,
                          c = arguments;
                      z(function () {
                          a.apply(b, c);
                      });
                  };
        },
        B = function (a) {
            var b,
                d = 0,
                f = e.throttleDelay,
                g = e.ricTimeout,
                h = function () {
                    (b = !1), (d = c.now()), a();
                },
                i =
                    m && g > 49
                        ? function () {
                              m(h, { timeout: g }), g !== e.ricTimeout && (g = e.ricTimeout);
                          }
                        : A(function () {
                              k(h);
                          }, !0);
            return function (a) {
                var e;
                (a = !0 === a) && (g = 33), b || ((b = !0), (e = f - (c.now() - d)), e < 0 && (e = 0), a || e < 9 ? i() : k(i, e));
            };
        },
        C = function (a) {
            var b,
                d,
                e = 99,
                f = function () {
                    (b = null), a();
                },
                g = function () {
                    var a = c.now() - d;
                    a < e ? k(g, e - a) : (m || f)(f);
                };
            return function () {
                (d = c.now()), b || (b = k(g, e));
            };
        },
        D = (function () {
            var g,
                m,
                o,
                p,
                y,
                D,
                F,
                G,
                H,
                I,
                J,
                K,
                L = /^img$/i,
                M = /^iframe$/i,
                N = "onscroll" in a && !/(gle|ing)bot/.test(navigator.userAgent),
                O = 0,
                P = 0,
                Q = 0,
                R = -1,
                S = function (a) {
                    Q--, (!a || Q < 0 || !a.target) && (Q = 0);
                },
                T = function (a) {
                    return null == K && (K = "hidden" == x(b.body, "visibility")), K || !("hidden" == x(a.parentNode, "visibility") && "hidden" == x(a, "visibility"));
                },
                U = function (a, c) {
                    var d,
                        e = a,
                        g = T(a);
                    for (G -= c, J += c, H -= c, I += c; g && (e = e.offsetParent) && e != b.body && e != f; )
                        (g = (x(e, "opacity") || 1) > 0) && "visible" != x(e, "overflow") && ((d = e.getBoundingClientRect()), (g = I > d.left && H < d.right && J > d.top - 1 && G < d.bottom + 1));
                    return g;
                },
                V = function () {
                    var a,
                        c,
                        h,
                        j,
                        k,
                        l,
                        n,
                        o,
                        q,
                        r,
                        s,
                        t,
                        u = d.elements;
                    if ((p = e.loadMode) && Q < 8 && (a = u.length)) {
                        for (c = 0, R++; c < a; c++)
                            if (u[c] && !u[c]._lazyRace)
                                if (!N || (d.prematureUnveil && d.prematureUnveil(u[c]))) ba(u[c]);
                                else if (
                                    (((o = u[c][i]("data-expand")) && (l = 1 * o)) || (l = P),
                                    r ||
                                        ((r = !e.expand || e.expand < 1 ? (f.clientHeight > 500 && f.clientWidth > 500 ? 500 : 370) : e.expand),
                                        (d._defEx = r),
                                        (s = r * e.expFactor),
                                        (t = e.hFac),
                                        (K = null),
                                        P < s && Q < 1 && R > 2 && p > 2 && !b.hidden ? ((P = s), (R = 0)) : (P = p > 1 && R > 1 && Q < 6 ? r : O)),
                                    q !== l && ((D = innerWidth + l * t), (F = innerHeight + l), (n = -1 * l), (q = l)),
                                    (h = u[c].getBoundingClientRect()),
                                    (J = h.bottom) >= n && (G = h.top) <= F && (I = h.right) >= n * t && (H = h.left) <= D && (J || I || H || G) && (e.loadHidden || T(u[c])) && ((m && Q < 3 && !o && (p < 3 || R < 4)) || U(u[c], l)))
                                ) {
                                    if ((ba(u[c]), (k = !0), Q > 9)) break;
                                } else !k && m && !j && Q < 4 && R < 4 && p > 2 && (g[0] || e.preloadAfterLoad) && (g[0] || (!o && (J || I || H || G || "auto" != u[c][i](e.sizesAttr)))) && (j = g[0] || u[c]);
                        j && !k && ba(j);
                    }
                },
                W = B(V),
                X = function (a) {
                    var b = a.target;
                    if (b._lazyCache) return void delete b._lazyCache;
                    S(a), s(b, e.loadedClass), t(b, e.loadingClass), u(b, Z), v(b, "lazyloaded");
                },
                Y = A(X),
                Z = function (a) {
                    Y({ target: a.target });
                },
                $ = function (a, b) {
                    try {
                        a.contentWindow.location.replace(b);
                    } catch (c) {
                        a.src = b;
                    }
                },
                _ = function (a) {
                    var b,
                        c = a[i](e.srcsetAttr);
                    (b = e.customMedia[a[i]("data-media") || a[i]("media")]) && a.setAttribute("media", b), c && a.setAttribute("srcset", c);
                },
                aa = A(function (a, b, c, d, f) {
                    var g, h, j, l, m, p;
                    (m = v(a, "lazybeforeunveil", b)).defaultPrevented ||
                        (d && (c ? s(a, e.autosizesClass) : a.setAttribute("sizes", d)),
                        (h = a[i](e.srcsetAttr)),
                        (g = a[i](e.srcAttr)),
                        f && ((j = a.parentNode), (l = j && n.test(j.nodeName || ""))),
                        (p = b.firesLoad || ("src" in a && (h || g || l))),
                        (m = { target: a }),
                        s(a, e.loadingClass),
                        p && (clearTimeout(o), (o = k(S, 2500)), u(a, Z, !0)),
                        l && q.call(j.getElementsByTagName("source"), _),
                        h ? a.setAttribute("srcset", h) : g && !l && (M.test(a.nodeName) ? $(a, g) : (a.src = g)),
                        f && (h || l) && w(a, { src: g })),
                        a._lazyRace && delete a._lazyRace,
                        t(a, e.lazyClass),
                        z(function () {
                            var b = a.complete && a.naturalWidth > 1;
                            (p && !b) ||
                                (b && s(a, "ls-is-cached"),
                                X(m),
                                (a._lazyCache = !0),
                                k(function () {
                                    "_lazyCache" in a && delete a._lazyCache;
                                }, 9)),
                                "lazy" == a.loading && Q--;
                        }, !0);
                }),
                ba = function (a) {
                    if (!a._lazyRace) {
                        var b,
                            c = L.test(a.nodeName),
                            d = c && (a[i](e.sizesAttr) || a[i]("sizes")),
                            f = "auto" == d;
                        ((!f && m) || !c || (!a[i]("src") && !a.srcset) || a.complete || r(a, e.errorClass) || !r(a, e.lazyClass)) &&
                            ((b = v(a, "lazyunveilread").detail), f && E.updateElem(a, !0, a.offsetWidth), (a._lazyRace = !0), Q++, aa(a, b, f, d, c));
                    }
                },
                ca = C(function () {
                    (e.loadMode = 3), W();
                }),
                da = function () {
                    3 == e.loadMode && (e.loadMode = 2), ca();
                },
                ea = function () {
                    if (!m) {
                        if (c.now() - y < 999) return void k(ea, 999);
                        (m = !0), (e.loadMode = 3), W(), j("scroll", da, !0);
                    }
                };
            return {
                _: function () {
                    (y = c.now()),
                        (d.elements = b.getElementsByClassName(e.lazyClass)),
                        (g = b.getElementsByClassName(e.lazyClass + " " + e.preloadClass)),
                        j("scroll", W, !0),
                        j("resize", W, !0),
                        j("pageshow", function (a) {
                            if (a.persisted) {
                                var c = b.querySelectorAll("." + e.loadingClass);
                                c.length &&
                                    c.forEach &&
                                    l(function () {
                                        c.forEach(function (a) {
                                            a.complete && ba(a);
                                        });
                                    });
                            }
                        }),
                        a.MutationObserver ? new MutationObserver(W).observe(f, { childList: !0, subtree: !0, attributes: !0 }) : (f[h]("DOMNodeInserted", W, !0), f[h]("DOMAttrModified", W, !0), setInterval(W, 999)),
                        j("hashchange", W, !0),
                        ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function (a) {
                            b[h](a, W, !0);
                        }),
                        /d$|^c/.test(b.readyState) ? ea() : (j("load", ea), b[h]("DOMContentLoaded", W), k(ea, 2e4)),
                        d.elements.length ? (V(), z._lsFlush()) : W();
                },
                checkElems: W,
                unveil: ba,
                _aLSL: da,
            };
        })(),
        E = (function () {
            var a,
                c = A(function (a, b, c, d) {
                    var e, f, g;
                    if (((a._lazysizesWidth = d), (d += "px"), a.setAttribute("sizes", d), n.test(b.nodeName || ""))) for (e = b.getElementsByTagName("source"), f = 0, g = e.length; f < g; f++) e[f].setAttribute("sizes", d);
                    c.detail.dataAttr || w(a, c.detail);
                }),
                d = function (a, b, d) {
                    var e,
                        f = a.parentNode;
                    f && ((d = y(a, f, d)), (e = v(a, "lazybeforesizes", { width: d, dataAttr: !!b })), e.defaultPrevented || ((d = e.detail.width) && d !== a._lazysizesWidth && c(a, f, e, d)));
                },
                f = function () {
                    var b,
                        c = a.length;
                    if (c) for (b = 0; b < c; b++) d(a[b]);
                },
                g = C(f);
            return {
                _: function () {
                    (a = b.getElementsByClassName(e.autosizesClass)), j("resize", g);
                },
                checkElems: g,
                updateElem: d,
            };
        })(),
        F = function () {
            !F.i && b.getElementsByClassName && ((F.i = !0), E._(), D._());
        };
    return (
        k(function () {
            e.init && F();
        }),
        (d = { cfg: e, autoSizer: E, loader: D, init: F, uP: w, aC: s, rC: t, hC: r, fire: v, gW: y, rAF: z })
    );
});
!(function (a, b, c, d) {
    function e(b, c) {
        (this.settings = null),
            (this.options = a.extend({}, e.Defaults, c)),
            (this.$element = a(b)),
            (this._handlers = {}),
            (this._plugins = {}),
            (this._supress = {}),
            (this._current = null),
            (this._speed = null),
            (this._coordinates = []),
            (this._breakpoint = null),
            (this._width = null),
            (this._items = []),
            (this._clones = []),
            (this._mergers = []),
            (this._widths = []),
            (this._invalidated = {}),
            (this._pipe = []),
            (this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }),
            (this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }),
            a.each(
                ["onResize", "onThrottledResize"],
                a.proxy(function (b, c) {
                    this._handlers[c] = a.proxy(this[c], this);
                }, this)
            ),
            a.each(
                e.Plugins,
                a.proxy(function (a, b) {
                    this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
                }, this)
            ),
            a.each(
                e.Workers,
                a.proxy(function (b, c) {
                    this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
                }, this)
            ),
            this.setup(),
            this.initialize();
    }
    (e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab",
    }),
        (e.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
        (e.Type = { Event: "event", State: "state" }),
        (e.Plugins = {}),
        (e.Workers = [
            {
                filter: ["width", "settings"],
                run: function () {
                    this._width = this.$element.width();
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    a.current = this._items && this._items[this.relative(this._current)];
                },
            },
            {
                filter: ["items", "settings"],
                run: function () {
                    this.$stage.children(".cloned").remove();
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    var b = this.settings.margin || "",
                        c = !this.settings.autoWidth,
                        d = this.settings.rtl,
                        e = { width: "auto", "margin-left": d ? b : "", "margin-right": d ? "" : b };
                    !c && this.$stage.children().css(e), (a.css = e);
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                        c = null,
                        d = this._items.length,
                        e = !this.settings.autoWidth,
                        f = [];
                    for (a.items = { merge: !1, width: b }; d--; )
                        (c = this._mergers[d]), (c = (this.settings.mergeFit && Math.min(c, this.settings.items)) || c), (a.items.merge = c > 1 || a.items.merge), (f[d] = e ? b * c : this._items[d].width());
                    this._widths = f;
                },
            },
            {
                filter: ["items", "settings"],
                run: function () {
                    var b = [],
                        c = this._items,
                        d = this.settings,
                        e = Math.max(2 * d.items, 4),
                        f = 2 * Math.ceil(c.length / 2),
                        g = d.loop && c.length ? (d.rewind ? e : Math.max(e, f)) : 0,
                        h = "",
                        i = "";
                    for (g /= 2; g > 0; ) b.push(this.normalize(b.length / 2, !0)), (h += c[b[b.length - 1]][0].outerHTML), b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), (i = c[b[b.length - 1]][0].outerHTML + i), (g -= 1);
                    (this._clones = b), a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage);
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function () {
                    for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b; )
                        (d = f[c - 1] || 0), (e = this._widths[this.relative(c)] + this.settings.margin), f.push(d + e * a);
                    this._coordinates = f;
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function () {
                    var a = this.settings.stagePadding,
                        b = this._coordinates,
                        c = { width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a, "padding-left": a || "", "padding-right": a || "" };
                    this.$stage.css(c);
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    var b = this._coordinates.length,
                        c = !this.settings.autoWidth,
                        d = this.$stage.children();
                    if (c && a.items.merge) for (; b--; ) (a.css.width = this._widths[this.relative(b)]), d.eq(b).css(a.css);
                    else c && ((a.css.width = a.items.width), d.css(a.css));
                },
            },
            {
                filter: ["items"],
                run: function () {
                    this._coordinates.length < 1 && this.$stage.removeAttr("style");
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    (a.current = a.current ? this.$stage.children().index(a.current) : 0), (a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current))), this.reset(a.current);
                },
            },
            {
                filter: ["position"],
                run: function () {
                    this.animate(this.coordinates(this._current));
                },
            },
            {
                filter: ["width", "position", "items", "settings"],
                run: function () {
                    var a,
                        b,
                        c,
                        d,
                        e = this.settings.rtl ? 1 : -1,
                        f = 2 * this.settings.stagePadding,
                        g = this.coordinates(this.current()) + f,
                        h = g + this.width() * e,
                        i = [];
                    for (c = 0, d = this._coordinates.length; c < d; c++)
                        (a = this._coordinates[c - 1] || 0), (b = Math.abs(this._coordinates[c]) + f * e), ((this.op(a, "<=", g) && this.op(a, ">", h)) || (this.op(b, "<", g) && this.op(b, ">", h))) && i.push(c);
                    this.$stage.children(".active").removeClass("active"),
                        this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"),
                        this.$stage.children(".center").removeClass("center"),
                        this.settings.center && this.$stage.children().eq(this.current()).addClass("center");
                },
            },
        ]),
        (e.prototype.initializeStage = function () {
            (this.$stage = this.$element.find("." + this.settings.stageClass)),
                this.$stage.length ||
                    (this.$element.addClass(this.options.loadingClass),
                    (this.$stage = a("<" + this.settings.stageElement + ">", { class: this.settings.stageClass }).wrap(a("<div/>", { class: this.settings.stageOuterClass }))),
                    this.$element.append(this.$stage.parent()));
        }),
        (e.prototype.initializeItems = function () {
            var b = this.$element.find(".owl-item");
            if (b.length)
                return (
                    (this._items = b.get().map(function (b) {
                        return a(b);
                    })),
                    (this._mergers = this._items.map(function () {
                        return 1;
                    })),
                    void this.refresh()
                );
            this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
        }),
        (e.prototype.initialize = function () {
            if ((this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading"))) {
                var a, b, c;
                (a = this.$element.find("img")), (b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d), (c = this.$element.children(b).width()), a.length && c <= 0 && this.preloadAutoWidthImages(a);
            }
            this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized");
        }),
        (e.prototype.isVisible = function () {
            return !this.settings.checkVisibility || this.$element.is(":visible");
        }),
        (e.prototype.setup = function () {
            var b = this.viewport(),
                c = this.options.responsive,
                d = -1,
                e = null;
            c
                ? (a.each(c, function (a) {
                      a <= b && a > d && (d = Number(a));
                  }),
                  (e = a.extend({}, this.options, c[d])),
                  "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()),
                  delete e.responsive,
                  e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d)))
                : (e = a.extend({}, this.options)),
                this.trigger("change", { property: { name: "settings", value: e } }),
                (this._breakpoint = d),
                (this.settings = e),
                this.invalidate("settings"),
                this.trigger("changed", { property: { name: "settings", value: this.settings } });
        }),
        (e.prototype.optionsLogic = function () {
            this.settings.autoWidth && ((this.settings.stagePadding = !1), (this.settings.merge = !1));
        }),
        (e.prototype.prepare = function (b) {
            var c = this.trigger("prepare", { content: b });
            return (
                c.data ||
                    (c.data = a("<" + this.settings.itemElement + "/>")
                        .addClass(this.options.itemClass)
                        .append(b)),
                this.trigger("prepared", { content: c.data }),
                c.data
            );
        }),
        (e.prototype.update = function () {
            for (
                var b = 0,
                    c = this._pipe.length,
                    d = a.proxy(function (a) {
                        return this[a];
                    }, this._invalidated),
                    e = {};
                b < c;

            )
                (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
            (this._invalidated = {}), !this.is("valid") && this.enter("valid");
        }),
        (e.prototype.width = function (a) {
            switch ((a = a || e.Width.Default)) {
                case e.Width.Inner:
                case e.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin;
            }
        }),
        (e.prototype.refresh = function () {
            this.enter("refreshing"),
                this.trigger("refresh"),
                this.setup(),
                this.optionsLogic(),
                this.$element.addClass(this.options.refreshClass),
                this.update(),
                this.$element.removeClass(this.options.refreshClass),
                this.leave("refreshing"),
                this.trigger("refreshed");
        }),
        (e.prototype.onThrottledResize = function () {
            b.clearTimeout(this.resizeTimer), (this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate));
        }),
        (e.prototype.onResize = function () {
            return (
                !!this._items.length &&
                this._width !== this.$element.width() &&
                !!this.isVisible() &&
                (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
            );
        }),
        (e.prototype.registerEventHandlers = function () {
            a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)),
                !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize),
                this.settings.mouseDrag &&
                    (this.$element.addClass(this.options.dragClass),
                    this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
                    this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
                        return !1;
                    })),
                this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)));
        }),
        (e.prototype.onDragStart = function (b) {
            var d = null;
            3 !== b.which &&
                (a.support.transform
                    ? ((d = this.$stage
                          .css("transform")
                          .replace(/.*\(|\)| /g, "")
                          .split(",")),
                      (d = { x: d[16 === d.length ? 12 : 4], y: d[16 === d.length ? 13 : 5] }))
                    : ((d = this.$stage.position()), (d = { x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left, y: d.top })),
                this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")),
                this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type),
                this.speed(0),
                (this._drag.time = new Date().getTime()),
                (this._drag.target = a(b.target)),
                (this._drag.stage.start = d),
                (this._drag.stage.current = d),
                (this._drag.pointer = this.pointer(b)),
                a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)),
                a(c).one(
                    "mousemove.owl.core touchmove.owl.core",
                    a.proxy(function (b) {
                        var d = this.difference(this._drag.pointer, this.pointer(b));
                        a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), (Math.abs(d.x) < Math.abs(d.y) && this.is("valid")) || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"));
                    }, this)
                ));
        }),
        (e.prototype.onDragMove = function (a) {
            var b = null,
                c = null,
                d = null,
                e = this.difference(this._drag.pointer, this.pointer(a)),
                f = this.difference(this._drag.stage.start, e);
            this.is("dragging") &&
                (a.preventDefault(),
                this.settings.loop
                    ? ((b = this.coordinates(this.minimum())), (c = this.coordinates(this.maximum() + 1) - b), (f.x = ((((f.x - b) % c) + c) % c) + b))
                    : ((b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum())),
                      (c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum())),
                      (d = this.settings.pullDrag ? (-1 * e.x) / 5 : 0),
                      (f.x = Math.max(Math.min(f.x, b + d), c + d))),
                (this._drag.stage.current = f),
                this.animate(f.x));
        }),
        (e.prototype.onDragEnd = function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b)),
                e = this._drag.stage.current,
                f = (d.x > 0) ^ this.settings.rtl ? "left" : "right";
            a(c).off(".owl.core"),
                this.$element.removeClass(this.options.grabClass),
                ((0 !== d.x && this.is("dragging")) || !this.is("valid")) &&
                    (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
                    this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
                    this.invalidate("position"),
                    this.update(),
                    (this._drag.direction = f),
                    (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
                        this._drag.target.one("click.owl.core", function () {
                            return !1;
                        })),
                this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
        }),
        (e.prototype.closest = function (b, c) {
            var e = -1,
                f = 30,
                g = this.width(),
                h = this.coordinates();
            return (
                this.settings.freeDrag ||
                    a.each(
                        h,
                        a.proxy(function (a, i) {
                            return (
                                "left" === c && b > i - f && b < i + f
                                    ? (e = a)
                                    : "right" === c && b > i - g - f && b < i - g + f
                                    ? (e = a + 1)
                                    : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a),
                                -1 === e
                            );
                        }, this)
                    ),
                this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? (e = b = this.minimum()) : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())),
                e
            );
        }),
        (e.prototype.animate = function (b) {
            var c = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(),
                c && (this.enter("animating"), this.trigger("translate")),
                a.support.transform3d && a.support.transition
                    ? this.$stage.css({ transform: "translate3d(" + b + "px,0px,0px)", transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "") })
                    : c
                    ? this.$stage.animate({ left: b + "px" }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this))
                    : this.$stage.css({ left: b + "px" });
        }),
        (e.prototype.is = function (a) {
            return this._states.current[a] && this._states.current[a] > 0;
        }),
        (e.prototype.current = function (a) {
            if (a === d) return this._current;
            if (0 === this._items.length) return d;
            if (((a = this.normalize(a)), this._current !== a)) {
                var b = this.trigger("change", { property: { name: "position", value: a } });
                b.data !== d && (a = this.normalize(b.data)), (this._current = a), this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } });
            }
            return this._current;
        }),
        (e.prototype.invalidate = function (b) {
            return (
                "string" === a.type(b) && ((this._invalidated[b] = !0), this.is("valid") && this.leave("valid")),
                a.map(this._invalidated, function (a, b) {
                    return b;
                })
            );
        }),
        (e.prototype.reset = function (a) {
            (a = this.normalize(a)) !== d && ((this._speed = 0), (this._current = a), this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]));
        }),
        (e.prototype.normalize = function (a, b) {
            var c = this._items.length,
                e = b ? 0 : this._clones.length;
            return !this.isNumeric(a) || c < 1 ? (a = d) : (a < 0 || a >= c + e) && (a = ((((a - e / 2) % c) + c) % c) + e / 2), a;
        }),
        (e.prototype.relative = function (a) {
            return (a -= this._clones.length / 2), this.normalize(a, !0);
        }),
        (e.prototype.maximum = function (a) {
            var b,
                c,
                d,
                e = this.settings,
                f = this._coordinates.length;
            if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
            else if (e.autoWidth || e.merge) {
                if ((b = this._items.length)) for (c = this._items[--b].width(), d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d); );
                f = b + 1;
            } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
            return a && (f -= this._clones.length / 2), Math.max(f, 0);
        }),
        (e.prototype.minimum = function (a) {
            return a ? 0 : this._clones.length / 2;
        }),
        (e.prototype.items = function (a) {
            return a === d ? this._items.slice() : ((a = this.normalize(a, !0)), this._items[a]);
        }),
        (e.prototype.mergers = function (a) {
            return a === d ? this._mergers.slice() : ((a = this.normalize(a, !0)), this._mergers[a]);
        }),
        (e.prototype.clones = function (b) {
            var c = this._clones.length / 2,
                e = c + this._items.length,
                f = function (a) {
                    return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2;
                };
            return b === d
                ? a.map(this._clones, function (a, b) {
                      return f(b);
                  })
                : a.map(this._clones, function (a, c) {
                      return a === b ? f(c) : null;
                  });
        }),
        (e.prototype.speed = function (a) {
            return a !== d && (this._speed = a), this._speed;
        }),
        (e.prototype.coordinates = function (b) {
            var c,
                e = 1,
                f = b - 1;
            return b === d
                ? a.map(
                      this._coordinates,
                      a.proxy(function (a, b) {
                          return this.coordinates(b);
                      }, this)
                  )
                : (this.settings.center ? (this.settings.rtl && ((e = -1), (f = b + 1)), (c = this._coordinates[b]), (c += ((this.width() - c + (this._coordinates[f] || 0)) / 2) * e)) : (c = this._coordinates[f] || 0), (c = Math.ceil(c)));
        }),
        (e.prototype.duration = function (a, b, c) {
            return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed);
        }),
        (e.prototype.to = function (a, b) {
            var c = this.current(),
                d = null,
                e = a - this.relative(c),
                f = (e > 0) - (e < 0),
                g = this._items.length,
                h = this.minimum(),
                i = this.maximum();
            this.settings.loop
                ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), (a = c + e), (d = ((((a - h) % g) + g) % g) + h) !== a && d - e <= i && d - e > 0 && ((c = d - e), (a = d), this.reset(c)))
                : this.settings.rewind
                ? ((i += 1), (a = ((a % i) + i) % i))
                : (a = Math.max(h, Math.min(i, a))),
                this.speed(this.duration(c, a, b)),
                this.current(a),
                this.isVisible() && this.update();
        }),
        (e.prototype.next = function (a) {
            (a = a || !1), this.to(this.relative(this.current()) + 1, a);
        }),
        (e.prototype.prev = function (a) {
            (a = a || !1), this.to(this.relative(this.current()) - 1, a);
        }),
        (e.prototype.onTransitionEnd = function (a) {
            if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
            this.leave("animating"), this.trigger("translated");
        }),
        (e.prototype.viewport = function () {
            var d;
            return (
                this.options.responsiveBaseElement !== b
                    ? (d = a(this.options.responsiveBaseElement).width())
                    : b.innerWidth
                    ? (d = b.innerWidth)
                    : c.documentElement && c.documentElement.clientWidth
                    ? (d = c.documentElement.clientWidth)
                    : console.warn("Can not detect viewport width."),
                d
            );
        }),
        (e.prototype.replace = function (b) {
            this.$stage.empty(),
                (this._items = []),
                b && (b = b instanceof jQuery ? b : a(b)),
                this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)),
                b
                    .filter(function () {
                        return 1 === this.nodeType;
                    })
                    .each(
                        a.proxy(function (a, b) {
                            (b = this.prepare(b)), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
                        }, this)
                    ),
                this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
                this.invalidate("items");
        }),
        (e.prototype.add = function (b, c) {
            var e = this.relative(this._current);
            (c = c === d ? this._items.length : this.normalize(c, !0)),
                (b = b instanceof jQuery ? b : a(b)),
                this.trigger("add", { content: b, position: c }),
                (b = this.prepare(b)),
                0 === this._items.length || c === this._items.length
                    ? (0 === this._items.length && this.$stage.append(b),
                      0 !== this._items.length && this._items[c - 1].after(b),
                      this._items.push(b),
                      this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1))
                    : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
                this._items[e] && this.reset(this._items[e].index()),
                this.invalidate("items"),
                this.trigger("added", { content: b, position: c });
        }),
        (e.prototype.remove = function (a) {
            (a = this.normalize(a, !0)) !== d &&
                (this.trigger("remove", { content: this._items[a], position: a }),
                this._items[a].remove(),
                this._items.splice(a, 1),
                this._mergers.splice(a, 1),
                this.invalidate("items"),
                this.trigger("removed", { content: null, position: a }));
        }),
        (e.prototype.preloadAutoWidthImages = function (b) {
            b.each(
                a.proxy(function (b, c) {
                    this.enter("pre-loading"),
                        (c = a(c)),
                        a(new Image())
                            .one(
                                "load",
                                a.proxy(function (a) {
                                    c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
                                }, this)
                            )
                            .attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"));
                }, this)
            );
        }),
        (e.prototype.destroy = function () {
            this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
            for (var d in this._plugins) this._plugins[d].destroy();
            this.$stage.children(".cloned").remove(),
                this.$stage.unwrap(),
                this.$stage.children().contents().unwrap(),
                this.$stage.children().unwrap(),
                this.$stage.remove(),
                this.$element
                    .removeClass(this.options.refreshClass)
                    .removeClass(this.options.loadingClass)
                    .removeClass(this.options.loadedClass)
                    .removeClass(this.options.rtlClass)
                    .removeClass(this.options.dragClass)
                    .removeClass(this.options.grabClass)
                    .attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), ""))
                    .removeData("owl.carousel");
        }),
        (e.prototype.op = function (a, b, c) {
            var d = this.settings.rtl;
            switch (b) {
                case "<":
                    return d ? a > c : a < c;
                case ">":
                    return d ? a < c : a > c;
                case ">=":
                    return d ? a <= c : a >= c;
                case "<=":
                    return d ? a >= c : a <= c;
            }
        }),
        (e.prototype.on = function (a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
        }),
        (e.prototype.off = function (a, b, c, d) {
            a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
        }),
        (e.prototype.trigger = function (b, c, d, f, g) {
            var h = { item: { count: this._items.length, index: this.current() } },
                i = a.camelCase(
                    a
                        .grep(["on", b, d], function (a) {
                            return a;
                        })
                        .join("-")
                        .toLowerCase()
                ),
                j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, h, c));
            return (
                this._supress[b] ||
                    (a.each(this._plugins, function (a, b) {
                        b.onTrigger && b.onTrigger(j);
                    }),
                    this.register({ type: e.Type.Event, name: b }),
                    this.$element.trigger(j),
                    this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)),
                j
            );
        }),
        (e.prototype.enter = function (b) {
            a.each(
                [b].concat(this._states.tags[b] || []),
                a.proxy(function (a, b) {
                    this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++;
                }, this)
            );
        }),
        (e.prototype.leave = function (b) {
            a.each(
                [b].concat(this._states.tags[b] || []),
                a.proxy(function (a, b) {
                    this._states.current[b]--;
                }, this)
            );
        }),
        (e.prototype.register = function (b) {
            if (b.type === e.Type.Event) {
                if ((a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl)) {
                    var c = a.event.special[b.name]._default;
                    (a.event.special[b.name]._default = function (a) {
                        return !c || !c.apply || (a.namespace && -1 !== a.namespace.indexOf("owl")) ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments);
                    }),
                        (a.event.special[b.name].owl = !0);
                }
            } else
                b.type === e.Type.State &&
                    (this._states.tags[b.name] ? (this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags)) : (this._states.tags[b.name] = b.tags),
                    (this._states.tags[b.name] = a.grep(
                        this._states.tags[b.name],
                        a.proxy(function (c, d) {
                            return a.inArray(c, this._states.tags[b.name]) === d;
                        }, this)
                    )));
        }),
        (e.prototype.suppress = function (b) {
            a.each(
                b,
                a.proxy(function (a, b) {
                    this._supress[b] = !0;
                }, this)
            );
        }),
        (e.prototype.release = function (b) {
            a.each(
                b,
                a.proxy(function (a, b) {
                    delete this._supress[b];
                }, this)
            );
        }),
        (e.prototype.pointer = function (a) {
            var c = { x: null, y: null };
            return (
                (a = a.originalEvent || a || b.event),
                (a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a),
                a.pageX ? ((c.x = a.pageX), (c.y = a.pageY)) : ((c.x = a.clientX), (c.y = a.clientY)),
                c
            );
        }),
        (e.prototype.isNumeric = function (a) {
            return !isNaN(parseFloat(a));
        }),
        (e.prototype.difference = function (a, b) {
            return { x: a.x - b.x, y: a.y - b.y };
        }),
        (a.fn.owlCarousel = function (b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return this.each(function () {
                var d = a(this),
                    f = d.data("owl.carousel");
                f ||
                    ((f = new e(this, "object" == typeof b && b)),
                    d.data("owl.carousel", f),
                    a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
                        f.register({ type: e.Type.Event, name: c }),
                            f.$element.on(
                                c + ".owl.carousel.core",
                                a.proxy(function (a) {
                                    a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]));
                                }, f)
                            );
                    })),
                    "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
            });
        }),
        (a.fn.owlCarousel.Constructor = e);
})(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._interval = null),
                (this._visible = null),
                (this._handlers = {
                    "initialized.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.autoRefresh && this.watch();
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this._core.$element.on(this._handlers);
        };
        (e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
            (e.prototype.watch = function () {
                this._interval || ((this._visible = this._core.isVisible()), (this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)));
            }),
            (e.prototype.refresh = function () {
                this._core.isVisible() !== this._visible && ((this._visible = !this._visible), this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
            }),
            (e.prototype.destroy = function () {
                var a, c;
                b.clearInterval(this._interval);
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._loaded = []),
                (this._handlers = {
                    "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
                        if (b.namespace && this._core.settings && this._core.settings.lazyLoad && ((b.property && "position" == b.property.name) || "initialized" == b.type)) {
                            var c = this._core.settings,
                                e = (c.center && Math.ceil(c.items / 2)) || c.items,
                                f = (c.center && -1 * e) || 0,
                                g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f,
                                h = this._core.clones().length,
                                i = a.proxy(function (a, b) {
                                    this.load(b);
                                }, this);
                            for (c.lazyLoadEager > 0 && ((e += c.lazyLoadEager), c.loop && ((g -= c.lazyLoadEager), e++)); f++ < e; ) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++;
                        }
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this._core.$element.on(this._handlers);
        };
        (e.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
            (e.prototype.load = function (c) {
                var d = this._core.$stage.children().eq(c),
                    e = d && d.find(".owl-lazy");
                !e ||
                    a.inArray(d.get(0), this._loaded) > -1 ||
                    (e.each(
                        a.proxy(function (c, d) {
                            var e,
                                f = a(d),
                                g = (b.devicePixelRatio > 1 && f.attr("data-src-retina")) || f.attr("data-src") || f.attr("data-srcset");
                            this._core.trigger("load", { element: f, url: g }, "lazy"),
                                f.is("img")
                                    ? f
                                          .one(
                                              "load.owl.lazy",
                                              a.proxy(function () {
                                                  f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy");
                                              }, this)
                                          )
                                          .attr("src", g)
                                    : f.is("source")
                                    ? f
                                          .one(
                                              "load.owl.lazy",
                                              a.proxy(function () {
                                                  this._core.trigger("loaded", { element: f, url: g }, "lazy");
                                              }, this)
                                          )
                                          .attr("srcset", g)
                                    : ((e = new Image()),
                                      (e.onload = a.proxy(function () {
                                          f.css({ "background-image": 'url("' + g + '")', opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy");
                                      }, this)),
                                      (e.src = g));
                        }, this)
                    ),
                    this._loaded.push(d.get(0)));
            }),
            (e.prototype.destroy = function () {
                var a, b;
                for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Lazy = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (c) {
            (this._core = c),
                (this._previousHeight = null),
                (this._handlers = {
                    "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.autoHeight && this.update();
                    }, this),
                    "changed.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update();
                    }, this),
                    "loaded.owl.lazy": a.proxy(function (a) {
                        a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this._core.$element.on(this._handlers),
                (this._intervalId = null);
            var d = this;
            a(b).on("load", function () {
                d._core.settings.autoHeight && d.update();
            }),
                a(b).resize(function () {
                    d._core.settings.autoHeight &&
                        (null != d._intervalId && clearTimeout(d._intervalId),
                        (d._intervalId = setTimeout(function () {
                            d.update();
                        }, 250)));
                });
        };
        (e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
            (e.prototype.update = function () {
                var b = this._core._current,
                    c = b + this._core.settings.items,
                    d = this._core.settings.lazyLoad,
                    e = this._core.$stage.children().toArray().slice(b, c),
                    f = [],
                    g = 0;
                a.each(e, function (b, c) {
                    f.push(a(c).height());
                }),
                    (g = Math.max.apply(null, f)),
                    g <= 1 && d && this._previousHeight && (g = this._previousHeight),
                    (this._previousHeight = g),
                    this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass);
            }),
            (e.prototype.destroy = function () {
                var a, b;
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._videos = {}),
                (this._playing = null),
                (this._handlers = {
                    "initialized.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] });
                    }, this),
                    "resize.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault();
                    }, this),
                    "refreshed.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
                    }, this),
                    "changed.owl.carousel": a.proxy(function (a) {
                        a.namespace && "position" === a.property.name && this._playing && this.stop();
                    }, this),
                    "prepared.owl.carousel": a.proxy(function (b) {
                        if (b.namespace) {
                            var c = a(b.content).find(".owl-video");
                            c.length && (c.css("display", "none"), this.fetch(c, a(b.content)));
                        }
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this._core.$element.on(this._handlers),
                this._core.$element.on(
                    "click.owl.video",
                    ".owl-video-play-icon",
                    a.proxy(function (a) {
                        this.play(a);
                    }, this)
                );
        };
        (e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
            (e.prototype.fetch = function (a, b) {
                var c = (function () {
                        return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube";
                    })(),
                    d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
                    e = a.attr("data-width") || this._core.settings.videoWidth,
                    f = a.attr("data-height") || this._core.settings.videoHeight,
                    g = a.attr("href");
                if (!g) throw new Error("Missing video URL.");
                if (
                    ((d = g.match(
                        /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
                    )),
                    d[3].indexOf("youtu") > -1)
                )
                    c = "youtube";
                else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
                else {
                    if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                    c = "vzaar";
                }
                (d = d[6]), (this._videos[g] = { type: c, id: d, width: e, height: f }), b.attr("data-video", g), this.thumbnail(a, this._videos[g]);
            }),
            (e.prototype.thumbnail = function (b, c) {
                var d,
                    e,
                    f,
                    g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "",
                    h = b.find("img"),
                    i = "src",
                    j = "",
                    k = this._core.settings,
                    l = function (c) {
                        (e = '<div class="owl-video-play-icon"></div>'),
                            (d = k.lazyLoad ? a("<div/>", { class: "owl-video-tn " + j, srcType: c }) : a("<div/>", { class: "owl-video-tn", style: "opacity:1;background-image:url(" + c + ")" })),
                            b.after(d),
                            b.after(e);
                    };
                if ((b.wrap(a("<div/>", { class: "owl-video-wrapper", style: g })), this._core.settings.lazyLoad && ((i = "data-src"), (j = "owl-lazy")), h.length)) return l(h.attr(i)), h.remove(), !1;
                "youtube" === c.type
                    ? ((f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg"), l(f))
                    : "vimeo" === c.type
                    ? a.ajax({
                          type: "GET",
                          url: "//vimeo.com/api/v2/video/" + c.id + ".json",
                          jsonp: "callback",
                          dataType: "jsonp",
                          success: function (a) {
                              (f = a[0].thumbnail_large), l(f);
                          },
                      })
                    : "vzaar" === c.type &&
                      a.ajax({
                          type: "GET",
                          url: "//vzaar.com/api/videos/" + c.id + ".json",
                          jsonp: "callback",
                          dataType: "jsonp",
                          success: function (a) {
                              (f = a.framegrab_url), l(f);
                          },
                      });
            }),
            (e.prototype.stop = function () {
                this._core.trigger("stop", null, "video"),
                    this._playing.find(".owl-video-frame").remove(),
                    this._playing.removeClass("owl-video-playing"),
                    (this._playing = null),
                    this._core.leave("playing"),
                    this._core.trigger("stopped", null, "video");
            }),
            (e.prototype.play = function (b) {
                var c,
                    d = a(b.target),
                    e = d.closest("." + this._core.settings.itemClass),
                    f = this._videos[e.attr("data-video")],
                    g = f.width || "100%",
                    h = f.height || this._core.$stage.height();
                this._playing ||
                    (this._core.enter("playing"),
                    this._core.trigger("play", null, "video"),
                    (e = this._core.items(this._core.relative(e.index()))),
                    this._core.reset(e.index()),
                    (c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')),
                    c.attr("height", h),
                    c.attr("width", g),
                    "youtube" === f.type
                        ? c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id)
                        : "vimeo" === f.type
                        ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1")
                        : "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"),
                    a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),
                    (this._playing = e.addClass("owl-video-playing")));
            }),
            (e.prototype.isInFullScreen = function () {
                var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
                return b && a(b).parent().hasClass("owl-video-frame");
            }),
            (e.prototype.destroy = function () {
                var a, b;
                this._core.$element.off("click.owl.video");
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Video = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this.core = b),
                (this.core.options = a.extend({}, e.Defaults, this.core.options)),
                (this.swapping = !0),
                (this.previous = d),
                (this.next = d),
                (this.handlers = {
                    "change.owl.carousel": a.proxy(function (a) {
                        a.namespace && "position" == a.property.name && ((this.previous = this.core.current()), (this.next = a.property.value));
                    }, this),
                    "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
                        a.namespace && (this.swapping = "translated" == a.type);
                    }, this),
                    "translate.owl.carousel": a.proxy(function (a) {
                        a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
                    }, this),
                }),
                this.core.$element.on(this.handlers);
        };
        (e.Defaults = { animateOut: !1, animateIn: !1 }),
            (e.prototype.swap = function () {
                if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
                    this.core.speed(0);
                    var b,
                        c = a.proxy(this.clear, this),
                        d = this.core.$stage.children().eq(this.previous),
                        e = this.core.$stage.children().eq(this.next),
                        f = this.core.settings.animateIn,
                        g = this.core.settings.animateOut;
                    this.core.current() !== this.previous &&
                        (g &&
                            ((b = this.core.coordinates(this.previous) - this.core.coordinates(this.next)),
                            d
                                .one(a.support.animation.end, c)
                                .css({ left: b + "px" })
                                .addClass("animated owl-animated-out")
                                .addClass(g)),
                        f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f));
                }
            }),
            (e.prototype.clear = function (b) {
                a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
            }),
            (e.prototype.destroy = function () {
                var a, b;
                for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._call = null),
                (this._time = 0),
                (this._timeout = 0),
                (this._paused = !0),
                (this._handlers = {
                    "changed.owl.carousel": a.proxy(function (a) {
                        a.namespace && "settings" === a.property.name ? (this._core.settings.autoplay ? this.play() : this.stop()) : a.namespace && "position" === a.property.name && this._paused && (this._time = 0);
                    }, this),
                    "initialized.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.autoplay && this.play();
                    }, this),
                    "play.owl.autoplay": a.proxy(function (a, b, c) {
                        a.namespace && this.play(b, c);
                    }, this),
                    "stop.owl.autoplay": a.proxy(function (a) {
                        a.namespace && this.stop();
                    }, this),
                    "mouseover.owl.autoplay": a.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                    }, this),
                    "mouseleave.owl.autoplay": a.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
                    }, this),
                    "touchstart.owl.core": a.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                    }, this),
                    "touchend.owl.core": a.proxy(function () {
                        this._core.settings.autoplayHoverPause && this.play();
                    }, this),
                }),
                this._core.$element.on(this._handlers),
                (this._core.options = a.extend({}, e.Defaults, this._core.options));
        };
        (e.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }),
            (e.prototype._next = function (d) {
                (this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read())),
                    this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed);
            }),
            (e.prototype.read = function () {
                return new Date().getTime() - this._time;
            }),
            (e.prototype.play = function (c, d) {
                var e;
                this._core.is("rotating") || this._core.enter("rotating"),
                    (c = c || this._core.settings.autoplayTimeout),
                    (e = Math.min(this._time % (this._timeout || c), c)),
                    this._paused ? ((this._time = this.read()), (this._paused = !1)) : b.clearTimeout(this._call),
                    (this._time += (this.read() % c) - e),
                    (this._timeout = c),
                    (this._call = b.setTimeout(a.proxy(this._next, this, d), c - e));
            }),
            (e.prototype.stop = function () {
                this._core.is("rotating") && ((this._time = 0), (this._paused = !0), b.clearTimeout(this._call), this._core.leave("rotating"));
            }),
            (e.prototype.pause = function () {
                this._core.is("rotating") && !this._paused && ((this._time = this.read()), (this._paused = !0), b.clearTimeout(this._call));
            }),
            (e.prototype.destroy = function () {
                var a, b;
                this.stop();
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.autoplay = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        "use strict";
        var e = function (b) {
            (this._core = b),
                (this._initialized = !1),
                (this._pages = []),
                (this._controls = {}),
                (this._templates = []),
                (this.$element = this._core.$element),
                (this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }),
                (this._handlers = {
                    "prepared.owl.carousel": a.proxy(function (b) {
                        b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
                    }, this),
                    "added.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop());
                    }, this),
                    "remove.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1);
                    }, this),
                    "changed.owl.carousel": a.proxy(function (a) {
                        a.namespace && "position" == a.property.name && this.draw();
                    }, this),
                    "initialized.owl.carousel": a.proxy(function (a) {
                        a.namespace &&
                            !this._initialized &&
                            (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), (this._initialized = !0), this._core.trigger("initialized", null, "navigation"));
                    }, this),
                    "refreshed.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this.$element.on(this._handlers);
        };
        (e.Defaults = {
            nav: !1,
            navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
            navSpeed: !1,
            navElement: 'button type="button" role="presentation"',
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1,
        }),
            (e.prototype.initialize = function () {
                var b,
                    c = this._core.settings;
                (this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled")),
                    (this._controls.$previous = a("<" + c.navElement + ">")
                        .addClass(c.navClass[0])
                        .html(c.navText[0])
                        .prependTo(this._controls.$relative)
                        .on(
                            "click",
                            a.proxy(function (a) {
                                this.prev(c.navSpeed);
                            }, this)
                        )),
                    (this._controls.$next = a("<" + c.navElement + ">")
                        .addClass(c.navClass[1])
                        .html(c.navText[1])
                        .appendTo(this._controls.$relative)
                        .on(
                            "click",
                            a.proxy(function (a) {
                                this.next(c.navSpeed);
                            }, this)
                        )),
                    c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),
                    (this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled")),
                    this._controls.$absolute.on(
                        "click",
                        "button",
                        a.proxy(function (b) {
                            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
                            b.preventDefault(), this.to(d, c.dotsSpeed);
                        }, this)
                    );
                for (b in this._overrides) this._core[b] = a.proxy(this[b], this);
            }),
            (e.prototype.destroy = function () {
                var a, b, c, d, e;
                e = this._core.settings;
                for (a in this._handlers) this.$element.off(a, this._handlers[a]);
                for (b in this._controls) "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
                for (d in this.overides) this._core[d] = this._overrides[d];
                for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
            }),
            (e.prototype.update = function () {
                var a,
                    b,
                    c,
                    d = this._core.clones().length / 2,
                    e = d + this._core.items().length,
                    f = this._core.maximum(!0),
                    g = this._core.settings,
                    h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
                if (("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy))
                    for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
                        if (b >= h || 0 === b) {
                            if ((this._pages.push({ start: Math.min(f, a - d), end: a - d + h - 1 }), Math.min(f, a - d) === f)) break;
                            (b = 0), ++c;
                        }
                        b += this._core.mergers(this._core.relative(a));
                    }
            }),
            (e.prototype.draw = function () {
                var b,
                    c = this._core.settings,
                    d = this._core.items().length <= c.items,
                    e = this._core.relative(this._core.current()),
                    f = c.loop || c.rewind;
                this._controls.$relative.toggleClass("disabled", !c.nav || d),
                    c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))),
                    this._controls.$absolute.toggleClass("disabled", !c.dots || d),
                    c.dots &&
                        ((b = this._pages.length - this._controls.$absolute.children().length),
                        c.dotsData && 0 !== b
                            ? this._controls.$absolute.html(this._templates.join(""))
                            : b > 0
                            ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0]))
                            : b < 0 && this._controls.$absolute.children().slice(b).remove(),
                        this._controls.$absolute.find(".active").removeClass("active"),
                        this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"));
            }),
            (e.prototype.onTrigger = function (b) {
                var c = this._core.settings;
                b.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items) };
            }),
            (e.prototype.current = function () {
                var b = this._core.relative(this._core.current());
                return a
                    .grep(
                        this._pages,
                        a.proxy(function (a, c) {
                            return a.start <= b && a.end >= b;
                        }, this)
                    )
                    .pop();
            }),
            (e.prototype.getPosition = function (b) {
                var c,
                    d,
                    e = this._core.settings;
                return (
                    "page" == e.slideBy
                        ? ((c = a.inArray(this.current(), this._pages)), (d = this._pages.length), b ? ++c : --c, (c = this._pages[((c % d) + d) % d].start))
                        : ((c = this._core.relative(this._core.current())), (d = this._core.items().length), b ? (c += e.slideBy) : (c -= e.slideBy)),
                    c
                );
            }),
            (e.prototype.next = function (b) {
                a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
            }),
            (e.prototype.prev = function (b) {
                a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
            }),
            (e.prototype.to = function (b, c, d) {
                var e;
                !d && this._pages.length ? ((e = this._pages.length), a.proxy(this._overrides.to, this._core)(this._pages[((b % e) + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Navigation = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        "use strict";
        var e = function (c) {
            (this._core = c),
                (this._hashes = {}),
                (this.$element = this._core.$element),
                (this._handlers = {
                    "initialized.owl.carousel": a.proxy(function (c) {
                        c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation");
                    }, this),
                    "prepared.owl.carousel": a.proxy(function (b) {
                        if (b.namespace) {
                            var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                            if (!c) return;
                            this._hashes[c] = b.content;
                        }
                    }, this),
                    "changed.owl.carousel": a.proxy(function (c) {
                        if (c.namespace && "position" === c.property.name) {
                            var d = this._core.items(this._core.relative(this._core.current())),
                                e = a
                                    .map(this._hashes, function (a, b) {
                                        return a === d ? b : null;
                                    })
                                    .join();
                            if (!e || b.location.hash.slice(1) === e) return;
                            b.location.hash = e;
                        }
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this.$element.on(this._handlers),
                a(b).on(
                    "hashchange.owl.navigation",
                    a.proxy(function (a) {
                        var c = b.location.hash.substring(1),
                            e = this._core.$stage.children(),
                            f = this._hashes[c] && e.index(this._hashes[c]);
                        f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0);
                    }, this)
                );
        };
        (e.Defaults = { URLhashListener: !1 }),
            (e.prototype.destroy = function () {
                var c, d;
                a(b).off("hashchange.owl.navigation");
                for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
                for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Hash = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        function e(b, c) {
            var e = !1,
                f = b.charAt(0).toUpperCase() + b.slice(1);
            return (
                a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
                    if (g[b] !== d) return (e = !c || b), !1;
                }),
                e
            );
        }
        function f(a) {
            return e(a, !0);
        }
        var g = a("<support>").get(0).style,
            h = "Webkit Moz O ms".split(" "),
            i = {
                transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } },
                animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } },
            },
            j = {
                csstransforms: function () {
                    return !!e("transform");
                },
                csstransforms3d: function () {
                    return !!e("perspective");
                },
                csstransitions: function () {
                    return !!e("transition");
                },
                cssanimations: function () {
                    return !!e("animation");
                },
            };
        j.csstransitions() && ((a.support.transition = new String(f("transition"))), (a.support.transition.end = i.transition.end[a.support.transition])),
            j.cssanimations() && ((a.support.animation = new String(f("animation"))), (a.support.animation.end = i.animation.end[a.support.animation])),
            j.csstransforms() && ((a.support.transform = new String(f("transform"))), (a.support.transform3d = j.csstransforms3d()));
    })(window.Zepto || window.jQuery, window, document);
!(function (a) {
    "object" == typeof module && module.exports
        ? (module.exports = a(require("jquery")))
        : "function" == typeof define && define.amd
        ? define(["jquery"], function (b) {
              a(b);
          })
        : a(jQuery);
})(function (a, b) {
    "use strict";
    function c(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    }
    function d(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            (d.enumerable = d.enumerable || !1), (d.configurable = !0), "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d);
        }
    }
    function e(a, b, c) {
        return b && d(a.prototype, b), c && d(a, c), a;
    }
    for (
        var f = [
                ["Afghanistan (‫افغانستان‬‎)", "af", "93"],
                ["Albania (Shqipëri)", "al", "355"],
                ["Algeria (‫الجزائر‬‎)", "dz", "213"],
                ["American Samoa", "as", "1", 5, ["684"]],
                ["Andorra", "ad", "376"],
                ["Angola", "ao", "244"],
                ["Anguilla", "ai", "1", 6, ["264"]],
                ["Antigua and Barbuda", "ag", "1", 7, ["268"]],
                ["Argentina", "ar", "54"],
                ["Armenia (Հայաստան)", "am", "374"],
                ["Aruba", "aw", "297"],
                ["Australia", "au", "61", 0],
                ["Austria (Österreich)", "at", "43"],
                ["Azerbaijan (Azərbaycan)", "az", "994"],
                ["Bahamas", "bs", "1", 8, ["242"]],
                ["Bahrain (‫البحرين‬‎)", "bh", "973"],
                ["Bangladesh (বাংলাদেশ)", "bd", "880"],
                ["Barbados", "bb", "1", 9, ["246"]],
                ["Belarus (Беларусь)", "by", "375"],
                ["Belgium (België)", "be", "32"],
                ["Belize", "bz", "501"],
                ["Benin (Bénin)", "bj", "229"],
                ["Bermuda", "bm", "1", 10, ["441"]],
                ["Bhutan (འབྲུག)", "bt", "975"],
                ["Bolivia", "bo", "591"],
                ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"],
                ["Botswana", "bw", "267"],
                ["Brazil (Brasil)", "br", "55"],
                ["British Indian Ocean Territory", "io", "246"],
                ["British Virgin Islands", "vg", "1", 11, ["284"]],
                ["Brunei", "bn", "673"],
                ["Bulgaria (България)", "bg", "359"],
                ["Burkina Faso", "bf", "226"],
                ["Burundi (Uburundi)", "bi", "257"],
                ["Cambodia (កម្ពុជា)", "kh", "855"],
                ["Cameroon (Cameroun)", "cm", "237"],
                [
                    "Canada",
                    "ca",
                    "1",
                    1,
                    [
                        "204",
                        "226",
                        "236",
                        "249",
                        "250",
                        "289",
                        "306",
                        "343",
                        "365",
                        "387",
                        "403",
                        "416",
                        "418",
                        "431",
                        "437",
                        "438",
                        "450",
                        "506",
                        "514",
                        "519",
                        "548",
                        "579",
                        "581",
                        "587",
                        "604",
                        "613",
                        "639",
                        "647",
                        "672",
                        "705",
                        "709",
                        "742",
                        "778",
                        "780",
                        "782",
                        "807",
                        "819",
                        "825",
                        "867",
                        "873",
                        "902",
                        "905",
                    ],
                ],
                ["Cape Verde (Kabu Verdi)", "cv", "238"],
                ["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]],
                ["Cayman Islands", "ky", "1", 12, ["345"]],
                ["Central African Republic (République centrafricaine)", "cf", "236"],
                ["Chad (Tchad)", "td", "235"],
                ["Chile", "cl", "56"],
                ["China (中国)", "cn", "86"],
                ["Christmas Island", "cx", "61", 2],
                ["Cocos (Keeling) Islands", "cc", "61", 1],
                ["Colombia", "co", "57"],
                ["Comoros (‫جزر القمر‬‎)", "km", "269"],
                ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"],
                ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
                ["Cook Islands", "ck", "682"],
                ["Costa Rica", "cr", "506"],
                ["Côte d’Ivoire", "ci", "225"],
                ["Croatia (Hrvatska)", "hr", "385"],
                ["Cuba", "cu", "53"],
                ["Curaçao", "cw", "599", 0],
                ["Cyprus (Κύπρος)", "cy", "357"],
                ["Czech Republic (Česká republika)", "cz", "420"],
                ["Denmark (Danmark)", "dk", "45"],
                ["Djibouti", "dj", "253"],
                ["Dominica", "dm", "1", 13, ["767"]],
                ["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]],
                ["Ecuador", "ec", "593"],
                ["Egypt (‫مصر‬‎)", "eg", "20"],
                ["El Salvador", "sv", "503"],
                ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
                ["Eritrea", "er", "291"],
                ["Estonia (Eesti)", "ee", "372"],
                ["Ethiopia", "et", "251"],
                ["Falkland Islands (Islas Malvinas)", "fk", "500"],
                ["Faroe Islands (Føroyar)", "fo", "298"],
                ["Fiji", "fj", "679"],
                ["Finland (Suomi)", "fi", "358", 0],
                ["France", "fr", "33"],
                ["French Guiana (Guyane française)", "gf", "594"],
                ["French Polynesia (Polynésie française)", "pf", "689"],
                ["Gabon", "ga", "241"],
                ["Gambia", "gm", "220"],
                ["Georgia (საქართველო)", "ge", "995"],
                ["Germany (Deutschland)", "de", "49"],
                ["Ghana (Gaana)", "gh", "233"],
                ["Gibraltar", "gi", "350"],
                ["Greece (Ελλάδα)", "gr", "30"],
                ["Greenland (Kalaallit Nunaat)", "gl", "299"],
                ["Grenada", "gd", "1", 14, ["473"]],
                ["Guadeloupe", "gp", "590", 0],
                ["Guam", "gu", "1", 15, ["671"]],
                ["Guatemala", "gt", "502"],
                ["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]],
                ["Guinea (Guinée)", "gn", "224"],
                ["Guinea-Bissau (Guiné Bissau)", "gw", "245"],
                ["Guyana", "gy", "592"],
                ["Haiti", "ht", "509"],
                ["Honduras", "hn", "504"],
                ["Hong Kong (香港)", "hk", "852"],
                ["Hungary (Magyarország)", "hu", "36"],
                ["Iceland (Ísland)", "is", "354"],
                ["India (भारत)", "in", "91"],
                ["Indonesia", "id", "62"],
                ["Iran (‫ایران‬‎)", "ir", "98"],
                ["Iraq (‫العراق‬‎)", "iq", "964"],
                ["Ireland", "ie", "353"],
                ["Isle of Man", "im", "44", 2, ["1624", "74576", "7524", "7924", "7624"]],
                ["Israel (‫ישראל‬‎)", "il", "972"],
                ["Italy (Italia)", "it", "39", 0],
                ["Jamaica", "jm", "1", 4, ["876", "658"]],
                ["Japan (日本)", "jp", "81"],
                ["Jersey", "je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"]],
                ["Jordan (‫الأردن‬‎)", "jo", "962"],
                ["Kazakhstan (Казахстан)", "kz", "7", 1, ["33", "7"]],
                ["Kenya", "ke", "254"],
                ["Kiribati", "ki", "686"],
                ["Kosovo", "xk", "383"],
                ["Kuwait (‫الكويت‬‎)", "kw", "965"],
                ["Kyrgyzstan (Кыргызстан)", "kg", "996"],
                ["Laos (ລາວ)", "la", "856"],
                ["Latvia (Latvija)", "lv", "371"],
                ["Lebanon (‫لبنان‬‎)", "lb", "961"],
                ["Lesotho", "ls", "266"],
                ["Liberia", "lr", "231"],
                ["Libya (‫ليبيا‬‎)", "ly", "218"],
                ["Liechtenstein", "li", "423"],
                ["Lithuania (Lietuva)", "lt", "370"],
                ["Luxembourg", "lu", "352"],
                ["Macau (澳門)", "mo", "853"],
                ["Macedonia (FYROM) (Македонија)", "mk", "389"],
                ["Madagascar (Madagasikara)", "mg", "261"],
                ["Malawi", "mw", "265"],
                ["Malaysia", "my", "60"],
                ["Maldives", "mv", "960"],
                ["Mali", "ml", "223"],
                ["Malta", "mt", "356"],
                ["Marshall Islands", "mh", "692"],
                ["Martinique", "mq", "596"],
                ["Mauritania (‫موريتانيا‬‎)", "mr", "222"],
                ["Mauritius (Moris)", "mu", "230"],
                ["Mayotte", "yt", "262", 1, ["269", "639"]],
                ["Mexico (México)", "mx", "52"],
                ["Micronesia", "fm", "691"],
                ["Moldova (Republica Moldova)", "md", "373"],
                ["Monaco", "mc", "377"],
                ["Mongolia (Монгол)", "mn", "976"],
                ["Montenegro (Crna Gora)", "me", "382"],
                ["Montserrat", "ms", "1", 16, ["664"]],
                ["Morocco (‫المغرب‬‎)", "ma", "212", 0],
                ["Mozambique (Moçambique)", "mz", "258"],
                ["Myanmar (Burma) (မြန်မာ)", "mm", "95"],
                ["Namibia (Namibië)", "na", "264"],
                ["Nauru", "nr", "674"],
                ["Nepal (नेपाल)", "np", "977"],
                ["Netherlands (Nederland)", "nl", "31"],
                ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"],
                ["New Zealand", "nz", "64"],
                ["Nicaragua", "ni", "505"],
                ["Niger (Nijar)", "ne", "227"],
                ["Nigeria", "ng", "234"],
                ["Niue", "nu", "683"],
                ["Norfolk Island", "nf", "672"],
                ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"],
                ["Northern Mariana Islands", "mp", "1", 17, ["670"]],
                ["Norway (Norge)", "no", "47", 0],
                ["Oman (‫عُمان‬‎)", "om", "968"],
                ["Pakistan (‫پاکستان‬‎)", "pk", "92"],
                ["Palau", "pw", "680"],
                ["Palestine (‫فلسطين‬‎)", "ps", "970"],
                ["Panama (Panamá)", "pa", "507"],
                ["Papua New Guinea", "pg", "675"],
                ["Paraguay", "py", "595"],
                ["Peru (Perú)", "pe", "51"],
                ["Philippines", "ph", "63"],
                ["Poland (Polska)", "pl", "48"],
                ["Portugal", "pt", "351"],
                ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
                ["Qatar (‫قطر‬‎)", "qa", "974"],
                ["Réunion (La Réunion)", "re", "262", 0],
                ["Romania (România)", "ro", "40"],
                ["Russia (Россия)", "ru", "7", 0],
                ["Rwanda", "rw", "250"],
                ["Saint Barthélemy", "bl", "590", 1],
                ["Saint Helena", "sh", "290"],
                ["Saint Kitts and Nevis", "kn", "1", 18, ["869"]],
                ["Saint Lucia", "lc", "1", 19, ["758"]],
                ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2],
                ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"],
                ["Saint Vincent and the Grenadines", "vc", "1", 20, ["784"]],
                ["Samoa", "ws", "685"],
                ["San Marino", "sm", "378"],
                ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"],
                ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"],
                ["Senegal (Sénégal)", "sn", "221"],
                ["Serbia (Србија)", "rs", "381"],
                ["Seychelles", "sc", "248"],
                ["Sierra Leone", "sl", "232"],
                ["Singapore", "sg", "65"],
                ["Sint Maarten", "sx", "1", 21, ["721"]],
                ["Slovakia (Slovensko)", "sk", "421"],
                ["Slovenia (Slovenija)", "si", "386"],
                ["Solomon Islands", "sb", "677"],
                ["Somalia (Soomaaliya)", "so", "252"],
                ["South Africa", "za", "27"],
                ["South Korea (대한민국)", "kr", "82"],
                ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"],
                ["Spain (España)", "es", "34"],
                ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"],
                ["Sudan (‫السودان‬‎)", "sd", "249"],
                ["Suriname", "sr", "597"],
                ["Svalbard and Jan Mayen", "sj", "47", 1, ["79"]],
                ["Swaziland", "sz", "268"],
                ["Sweden (Sverige)", "se", "46"],
                ["Switzerland (Schweiz)", "ch", "41"],
                ["Syria (‫سوريا‬‎)", "sy", "963"],
                ["Taiwan (台灣)", "tw", "886"],
                ["Tajikistan", "tj", "992"],
                ["Tanzania", "tz", "255"],
                ["Thailand (ไทย)", "th", "66"],
                ["Timor-Leste", "tl", "670"],
                ["Togo", "tg", "228"],
                ["Tokelau", "tk", "690"],
                ["Tonga", "to", "676"],
                ["Trinidad and Tobago", "tt", "1", 22, ["868"]],
                ["Tunisia (‫تونس‬‎)", "tn", "216"],
                ["Turkey (Türkiye)", "tr", "90"],
                ["Turkmenistan", "tm", "993"],
                ["Turks and Caicos Islands", "tc", "1", 23, ["649"]],
                ["Tuvalu", "tv", "688"],
                ["U.S. Virgin Islands", "vi", "1", 24, ["340"]],
                ["Uganda", "ug", "256"],
                ["Ukraine (Україна)", "ua", "380"],
                ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"],
                ["United Kingdom", "gb", "44", 0],
                ["United States", "us", "1", 0],
                ["Uruguay", "uy", "598"],
                ["Uzbekistan (Oʻzbekiston)", "uz", "998"],
                ["Vanuatu", "vu", "678"],
                ["Vatican City (Città del Vaticano)", "va", "39", 1, ["06698"]],
                ["Venezuela", "ve", "58"],
                ["Vietnam (Việt Nam)", "vn", "84"],
                ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"],
                ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1, ["5288", "5289"]],
                ["Yemen (‫اليمن‬‎)", "ye", "967"],
                ["Zambia", "zm", "260"],
                ["Zimbabwe", "zw", "263"],
                ["Åland Islands", "ax", "358", 1, ["18"]],
            ],
            g = 0;
        g < f.length;
        g++
    ) {
        var h = f[g];
        f[g] = { name: h[0], iso2: h[1], dialCode: h[2], priority: h[3] || 0, areaCodes: h[4] || null };
    }
    var i = {
        getInstance: function (a) {
            var b = a.getAttribute("data-intl-tel-input-id");
            return window.intlTelInputGlobals.instances[b];
        },
        instances: {},
    };
    "object" == typeof window && (window.intlTelInputGlobals = i);
    var j = 0,
        k = {
            allowDropdown: !0,
            autoHideDialCode: !0,
            autoPlaceholder: "polite",
            customContainer: "",
            customPlaceholder: null,
            dropdownContainer: null,
            excludeCountries: [],
            formatOnDisplay: !0,
            geoIpLookup: null,
            hiddenInput: "",
            initialCountry: "",
            localizedCountries: null,
            nationalMode: !0,
            onlyCountries: [],
           
            preferredCountries: ["us", "gb"],
            separateDialCode: !1,
            utilsScript: "",
        },
        l = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"];
    "object" == typeof window &&
        window.addEventListener("load", function () {
            window.intlTelInputGlobals.windowLoaded = !0;
        });
    var m = function (a, b) {
            for (var c = Object.keys(a), d = 0; d < c.length; d++) b(c[d], a[c[d]]);
        },
        n = function (a) {
            m(window.intlTelInputGlobals.instances, function (b) {
                window.intlTelInputGlobals.instances[b][a]();
            });
        },
        o = (function () {
            function a(b, d) {
                var e = this;
                c(this, a), (this.id = j++), (this.a = b), (this.b = null), (this.c = null);
                var f = d || {};
                (this.d = {}),
                    m(k, function (a, b) {
                        e.d[a] = f.hasOwnProperty(a) ? f[a] : b;
                    }),
                    (this.e = Boolean(b.getAttribute("placeholder")));
            }
            return (
                e(a, [
                    {
                        key: "_init",
                        value: function () {
                            var a = this;
                            if (
                                (this.d.nationalMode && (this.d.autoHideDialCode = !1),
                                this.d.separateDialCode && (this.d.autoHideDialCode = this.d.nationalMode = !1),
                                (this.g = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)),
                                this.g && (document.body.classList.add("iti-mobile"), this.d.dropdownContainer || (this.d.dropdownContainer = document.body)),
                                "undefined" != typeof Promise)
                            ) {
                                var b = new Promise(function (b, c) {
                                        (a.h = b), (a.i = c);
                                    }),
                                    c = new Promise(function (b, c) {
                                        (a.i0 = b), (a.i1 = c);
                                    });
                                this.promise = Promise.all([b, c]);
                            } else (this.h = this.i = function () {}), (this.i0 = this.i1 = function () {});
                            (this.s = {}), this._b(), this._f(), this._h(), this._i(), this._i3();
                        },
                    },
                    {
                        key: "_b",
                        value: function () {
                            this._d(), this._d2(), this._e(), this.d.localizedCountries && this._d0(), (this.d.onlyCountries.length || this.d.localizedCountries) && this.p.sort(this._d1);
                        },
                    },
                    {
                        key: "_c",
                        value: function (a, c, d) {
                            c.length > this.dialCodeMaxLen && (this.dialCodeMaxLen = c.length), this.q.hasOwnProperty(c) || (this.q[c] = []);
                            for (var e = 0; e < this.q[c].length; e++) if (this.q[c][e] === a) return;
                            var f = d !== b ? d : this.q[c].length;
                            this.q[c][f] = a;
                        },
                    },
                    {
                        key: "_d",
                        value: function () {
                            if (this.d.onlyCountries.length) {
                                var a = this.d.onlyCountries.map(function (a) {
                                    return a.toLowerCase();
                                });
                                this.p = f.filter(function (b) {
                                    return a.indexOf(b.iso2) > -1;
                                });
                            } else if (this.d.excludeCountries.length) {
                                var b = this.d.excludeCountries.map(function (a) {
                                    return a.toLowerCase();
                                });
                                this.p = f.filter(function (a) {
                                    return -1 === b.indexOf(a.iso2);
                                });
                            } else this.p = f;
                        },
                    },
                    {
                        key: "_d0",
                        value: function () {
                            for (var a = 0; a < this.p.length; a++) {
                                var b = this.p[a].iso2.toLowerCase();
                                this.d.localizedCountries.hasOwnProperty(b) && (this.p[a].name = this.d.localizedCountries[b]);
                            }
                        },
                    },
                    {
                        key: "_d1",
                        value: function (a, b) {
                            return a.name.localeCompare(b.name);
                        },
                    },
                    {
                        key: "_d2",
                        value: function () {
                            (this.dialCodeMaxLen = 0), (this.q = {});
                            for (var a = 0; a < this.p.length; a++) {
                                var b = this.p[a];
                                this._c(b.iso2, b.dialCode, b.priority);
                            }
                            for (var c = 0; c < this.p.length; c++) {
                                var d = this.p[c];
                                if (d.areaCodes)
                                    for (var e = this.q[d.dialCode][0], f = 0; f < d.areaCodes.length; f++) {
                                        for (var g = d.areaCodes[f], h = 1; h < g.length; h++) {
                                            var i = d.dialCode + g.substr(0, h);
                                            this._c(e, i), this._c(d.iso2, i);
                                        }
                                        this._c(d.iso2, d.dialCode + g);
                                    }
                            }
                        },
                    },
                    {
                        key: "_e",
                        value: function () {
                            this.preferredCountries = [];
                            for (var a = 0; a < this.d.preferredCountries.length; a++) {
                                var b = this.d.preferredCountries[a].toLowerCase(),
                                    c = this._y(b, !1, !0);
                                c && this.preferredCountries.push(c);
                            }
                        },
                    },
                    {
                        key: "_e2",
                        value: function (a, b, c) {
                            var d = document.createElement(a);
                            return (
                                b &&
                                    m(b, function (a, b) {
                                        return d.setAttribute(a, b);
                                    }),
                                c && c.appendChild(d),
                                d
                            );
                        },
                    },
                    {
                        key: "_f",
                        value: function () {
                            this.a.hasAttribute("autocomplete") || (this.a.form && this.a.form.hasAttribute("autocomplete")) || this.a.setAttribute("autocomplete", "off");
                            var a = "iti";
                            this.d.allowDropdown && (a += " iti--allow-dropdown"), this.d.separateDialCode && (a += " iti--separate-dial-code"), this.d.customContainer && ((a += " "), (a += this.d.customContainer));
                            var b = this._e2("div", { class: a });
                            if (
                                (this.a.parentNode.insertBefore(b, this.a),
                                (this.k = this._e2("div", { class: "iti__flag-container" }, b)),
                                b.appendChild(this.a),
                                (this.selectedFlag = this._e2("div", { class: "iti__selected-flag", role: "combobox", "aria-owns": "iti-".concat(this.id, "__country-listbox"), "aria-expanded": "false" }, this.k)),
                                (this.l = this._e2("div", { class: "iti__flag" }, this.selectedFlag)),
                                this.d.separateDialCode && (this.t = this._e2("div", { class: "iti__selected-dial-code" }, this.selectedFlag)),
                                this.d.allowDropdown &&
                                    (this.selectedFlag.setAttribute("tabindex", "0"),
                                    (this.u = this._e2("div", { class: "iti__arrow" }, this.selectedFlag)),
                                    (this.m = this._e2("ul", { class: "iti__country-list iti__hide", id: "iti-".concat(this.id, "__country-listbox"), role: "listbox" })),
                                    this.preferredCountries.length && (this._g(this.preferredCountries, "iti__preferred", !0), this._e2("li", { class: "iti__divider", role: "separator", "aria-disabled": "true" }, this.m)),
                                    this._g(this.p, "iti__standard"),
                                    this.d.dropdownContainer ? ((this.dropdown = this._e2("div", { class: "iti iti--container" })), this.dropdown.appendChild(this.m)) : this.k.appendChild(this.m)),
                                this.d.hiddenInput)
                            ) {
                                var c = this.d.hiddenInput,
                                    d = this.a.getAttribute("name");
                                if (d) {
                                    var e = d.lastIndexOf("[");
                                    -1 !== e && (c = "".concat(d.substr(0, e), "[").concat(c, "]"));
                                }
                                (this.hiddenInput = this._e2("input", { type: "hidden", name: c })), b.appendChild(this.hiddenInput);
                            }
                        },
                    },
                    {
                        key: "_g",
                        value: function (a, b, c) {
                            for (var d = "", e = 0; e < a.length; e++) {
                                var f = a[e],
                                    g = c ? "-preferred" : "";
                                (d += "<li class='iti__country "
                                    .concat(b, "' tabIndex='-1' id='iti-")
                                    .concat(this.id, "__item-")
                                    .concat(f.iso2)
                                    .concat(g, "' role='option' data-dial-code='")
                                    .concat(f.dialCode, "' data-country-code='")
                                    .concat(f.iso2, "'>")),
                                    (d += "<div class='iti__flag-box'><div class='iti__flag iti__".concat(f.iso2, "'></div></div>")),
                                    (d += "<span class='iti__country-name'>".concat(f.name, "</span>")),
                                    (d += "<span class='iti__dial-code'>+".concat(f.dialCode, "</span>")),
                                    (d += "</li>");
                            }
                            this.m.insertAdjacentHTML("beforeend", d);
                        },
                    },
                    {
                        key: "_h",
                        value: function () {
                            var a = this.a.value,
                                b = this._5(a),
                                c = this._w(a),
                                d = this.d,
                                e = d.initialCountry,
                                f = d.nationalMode,
                                g = d.autoHideDialCode,
                                h = d.separateDialCode;
                            b && !c
                                ? this._v(a)
                                : "auto" !== e &&
                                  (e ? this._z(e.toLowerCase()) : b && c ? this._z("us") : ((this.j = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.p[0].iso2), a || this._z(this.j)),
                                  a || f || g || h || (this.a.value = "+".concat(this.s.dialCode))),
                                a && this._u(a);
                        },
                    },
                    {
                        key: "_i",
                        value: function () {
                            this._j(), this.d.autoHideDialCode && this._l(), this.d.allowDropdown && this._i2(), this.hiddenInput && this._i0();
                        },
                    },
                    {
                        key: "_i0",
                        value: function () {
                            var a = this;
                            (this._a14 = function () {
                                a.hiddenInput.value = a.getNumber();
                            }),
                                this.a.form && this.a.form.addEventListener("submit", this._a14);
                        },
                    },
                    {
                        key: "_i1",
                        value: function () {
                            for (var a = this.a; a && "LABEL" !== a.tagName; ) a = a.parentNode;
                            return a;
                        },
                    },
                    {
                        key: "_i2",
                        value: function () {
                            var a = this;
                            this._a9 = function (b) {
                                a.m.classList.contains("iti__hide") ? a.a.focus() : b.preventDefault();
                            };
                            var b = this._i1();
                            b && b.addEventListener("click", this._a9),
                                (this._a10 = function () {
                                    !a.m.classList.contains("iti__hide") || a.a.disabled || a.a.readOnly || a._n();
                                }),
                                this.selectedFlag.addEventListener("click", this._a10),
                                (this._a11 = function (b) {
                                    a.m.classList.contains("iti__hide") && -1 !== ["ArrowUp", "Up", "ArrowDown", "Down", " ", "Enter"].indexOf(b.key) && (b.preventDefault(), b.stopPropagation(), a._n()), "Tab" === b.key && a._2();
                                }),
                                this.k.addEventListener("keydown", this._a11);
                        },
                    },
                    {
                        key: "_i3",
                        value: function () {
                            var a = this;
                            this.d.utilsScript && !window.intlTelInputUtils
                                ? window.intlTelInputGlobals.windowLoaded
                                    ? window.intlTelInputGlobals.loadUtils(this.d.utilsScript)
                                    : window.addEventListener("load", function () {
                                          window.intlTelInputGlobals.loadUtils(a.d.utilsScript);
                                      })
                                : this.i0(),
                                "auto" === this.d.initialCountry ? this._i4() : this.h();
                        },
                    },
                    {
                        key: "_i4",
                        value: function () {
                            window.intlTelInputGlobals.autoCountry
                                ? this.handleAutoCountry()
                                : window.intlTelInputGlobals.startedLoadingAutoCountry ||
                                  ((window.intlTelInputGlobals.startedLoadingAutoCountry = !0),
                                  "function" == typeof this.d.geoIpLookup &&
                                      this.d.geoIpLookup(
                                          function (a) {
                                              (window.intlTelInputGlobals.autoCountry = a.toLowerCase()),
                                                  setTimeout(function () {
                                                      return n("handleAutoCountry");
                                                  });
                                          },
                                          function () {
                                              return n("rejectAutoCountryPromise");
                                          }
                                      ));
                        },
                    },
                    {
                        key: "_j",
                        value: function () {
                            var a = this;
                            (this._a12 = function () {
                                a._v(a.a.value) && a._8();
                            }),
                                this.a.addEventListener("keyup", this._a12),
                                (this._a13 = function () {
                                    setTimeout(a._a12);
                                }),
                                this.a.addEventListener("cut", this._a13),
                                this.a.addEventListener("paste", this._a13);
                        },
                    },
                    {
                        key: "_j2",
                        value: function (a) {
                            var b = this.a.getAttribute("maxlength");
                            return b && a.length > b ? a.substr(0, b) : a;
                        },
                    },
                    {
                        key: "_l",
                        value: function () {
                            var a = this;
                            (this._a8 = function () {
                                a._l2();
                            }),
                                this.a.form && this.a.form.addEventListener("submit", this._a8),
                                this.a.addEventListener("blur", this._a8);
                        },
                    },
                    {
                        key: "_l2",
                        value: function () {
                            if ("+" === this.a.value.charAt(0)) {
                                var a = this._m(this.a.value);
                                (a && this.s.dialCode !== a) || (this.a.value = "");
                            }
                        },
                    },
                    {
                        key: "_m",
                        value: function (a) {
                            return a.replace(/\D/g, "");
                        },
                    },
                    {
                        key: "_m2",
                        value: function (a) {
                            var b = document.createEvent("Event");
                            b.initEvent(a, !0, !0), this.a.dispatchEvent(b);
                        },
                    },
                    {
                        key: "_n",
                        value: function () {
                            this.m.classList.remove("iti__hide"),
                                this.selectedFlag.setAttribute("aria-expanded", "true"),
                                this._o(),
                                this.b && (this._x(this.b, !1), this._3(this.b, !0)),
                                this._p(),
                                this.u.classList.add("iti__arrow--up"),
                                this._m2("open:countrydropdown");
                        },
                    },
                    {
                        key: "_n2",
                        value: function (a, b, c) {
                            c && !a.classList.contains(b) ? a.classList.add(b) : !c && a.classList.contains(b) && a.classList.remove(b);
                        },
                    },
                    {
                        key: "_o",
                        value: function () {
                            var a = this;
                            if ((this.d.dropdownContainer && this.d.dropdownContainer.appendChild(this.dropdown), !this.g)) {
                                var b = this.a.getBoundingClientRect(),
                                    c = window.pageYOffset || document.documentElement.scrollTop,
                                    d = b.top + c,
                                    e = this.m.offsetHeight,
                                    f = d + this.a.offsetHeight + e < c + window.innerHeight,
                                    g = d - e > c;
                                if ((this._n2(this.m, "iti__country-list--dropup", !f && g), this.d.dropdownContainer)) {
                                    var h = !f && g ? 0 : this.a.offsetHeight;
                                    (this.dropdown.style.top = "".concat(d + h, "px")),
                                        (this.dropdown.style.left = "".concat(b.left + document.body.scrollLeft, "px")),
                                        (this._a4 = function () {
                                            return a._2();
                                        }),
                                        window.addEventListener("scroll", this._a4);
                                }
                            }
                        },
                    },
                    {
                        key: "_o2",
                        value: function (a) {
                            for (var b = a; b && b !== this.m && !b.classList.contains("iti__country"); ) b = b.parentNode;
                            return b === this.m ? null : b;
                        },
                    },
                    {
                        key: "_p",
                        value: function () {
                            var a = this;
                            (this._a0 = function (b) {
                                var c = a._o2(b.target);
                                c && a._x(c, !1);
                            }),
                                this.m.addEventListener("mouseover", this._a0),
                                (this._a1 = function (b) {
                                    var c = a._o2(b.target);
                                    c && a._1(c);
                                }),
                                this.m.addEventListener("click", this._a1);
                            var b = !0;
                            (this._a2 = function () {
                                b || a._2(), (b = !1);
                            }),
                                document.documentElement.addEventListener("click", this._a2);
                            var c = "",
                                d = null;
                            (this._a3 = function (b) {
                                b.preventDefault(),
                                    "ArrowUp" === b.key || "Up" === b.key || "ArrowDown" === b.key || "Down" === b.key
                                        ? a._q(b.key)
                                        : "Enter" === b.key
                                        ? a._r()
                                        : "Escape" === b.key
                                        ? a._2()
                                        : /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(b.key) &&
                                          (d && clearTimeout(d),
                                          (c += b.key.toLowerCase()),
                                          a._s(c),
                                          (d = setTimeout(function () {
                                              c = "";
                                          }, 1e3)));
                            }),
                                document.addEventListener("keydown", this._a3);
                        },
                    },
                    {
                        key: "_q",
                        value: function (a) {
                            var b = "ArrowUp" === a || "Up" === a ? this.c.previousElementSibling : this.c.nextElementSibling;
                            b && (b.classList.contains("iti__divider") && (b = "ArrowUp" === a || "Up" === a ? b.previousElementSibling : b.nextElementSibling), this._x(b, !0));
                        },
                    },
                    {
                        key: "_r",
                        value: function () {
                            this.c && this._1(this.c);
                        },
                    },
                    {
                        key: "_s",
                        value: function (a) {
                            for (var b = 0; b < this.p.length; b++)
                                if (this._t(this.p[b].name, a)) {
                                    var c = this.m.querySelector("#iti-".concat(this.id, "__item-").concat(this.p[b].iso2));
                                    this._x(c, !1), this._3(c, !0);
                                    break;
                                }
                        },
                    },
                    {
                        key: "_t",
                        value: function (a, b) {
                            return a.substr(0, b.length).toLowerCase() === b;
                        },
                    },
                    {
                        key: "_u",
                        value: function (a) {
                            var b = a;
                            if (this.d.formatOnDisplay && window.intlTelInputUtils && this.s) {
                                var c = !this.d.separateDialCode && (this.d.nationalMode || "+" !== b.charAt(0)),
                                    d = intlTelInputUtils.numberFormat,
                                    e = d.NATIONAL,
                                    f = d.INTERNATIONAL,
                                    g = c ? e : f;
                                b = intlTelInputUtils.formatNumber(b, this.s.iso2, g);
                            }
                            (b = this._7(b)), (this.a.value = b);
                        },
                    },
                    {
                        key: "_v",
                        value: function (a) {
                            var b = a,
                                c = this.s.dialCode,
                                d = "1" === c;
                            b && this.d.nationalMode && d && "+" !== b.charAt(0) && ("1" !== b.charAt(0) && (b = "1".concat(b)), (b = "+".concat(b))), this.d.separateDialCode && c && "+" !== b.charAt(0) && (b = "+".concat(c).concat(b));
                            var e = this._5(b),
                                f = this._m(b),
                                g = null;
                            if (e) {
                                var h = this.q[this._m(e)],
                                    i = -1 !== h.indexOf(this.s.iso2) && f.length <= e.length - 1;
                                if (!("1" === c && this._w(f)) && !i)
                                    for (var j = 0; j < h.length; j++)
                                        if (h[j]) {
                                            g = h[j];
                                            break;
                                        }
                            } else "+" === b.charAt(0) && f.length ? (g = "") : (b && "+" !== b) || (g = this.j);
                            return null !== g && this._z(g);
                        },
                    },
                    {
                        key: "_w",
                        value: function (a) {
                            var b = this._m(a);
                            if ("1" === b.charAt(0)) {
                                var c = b.substr(1, 3);
                                return -1 !== l.indexOf(c);
                            }
                            return !1;
                        },
                    },
                    {
                        key: "_x",
                        value: function (a, b) {
                            var c = this.c;
                            c && c.classList.remove("iti__highlight"), (this.c = a), this.c.classList.add("iti__highlight"), b && this.c.focus();
                        },
                    },
                    {
                        key: "_y",
                        value: function (a, b, c) {
                            for (var d = b ? f : this.p, e = 0; e < d.length; e++) if (d[e].iso2 === a) return d[e];
                            if (c) return null;
                            throw new Error("No country data for '".concat(a, "'"));
                        },
                    },
                    {
                        key: "_z",
                        value: function (a) {
                            var b = this.s.iso2 ? this.s : {};
                            (this.s = a ? this._y(a, !1, !1) : {}), this.s.iso2 && (this.j = this.s.iso2), this.l.setAttribute("class", "iti__flag iti__".concat(a));
                            var c = a ? "".concat(this.s.name, ": +").concat(this.s.dialCode) : "Unknown";
                            if ((this.selectedFlag.setAttribute("title", c), this.d.separateDialCode)) {
                                var d = this.s.dialCode ? "+".concat(this.s.dialCode) : "";
                                this.t.innerHTML = d;
                                var e = this.selectedFlag.offsetWidth || this._getHiddenSelectedFlagWidth();
                                this.a.style.paddingLeft = "".concat(e + 6, "px");
                            }
                            if ((this._0(), this.d.allowDropdown)) {
                                var f = this.b;
                                if ((f && (f.classList.remove("iti__active"), f.setAttribute("aria-selected", "false")), a)) {
                                    var g = this.m.querySelector("#iti-".concat(this.id, "__item-").concat(a, "-preferred")) || this.m.querySelector("#iti-".concat(this.id, "__item-").concat(a));
                                    g.setAttribute("aria-selected", "true"), g.classList.add("iti__active"), (this.b = g), this.selectedFlag.setAttribute("aria-activedescendant", g.getAttribute("id"));
                                }
                            }
                            return b.iso2 !== a;
                        },
                    },
                    {
                        key: "_getHiddenSelectedFlagWidth",
                        value: function () {
                            var a = this.a.parentNode.cloneNode();
                            (a.style.visibility = "hidden"), document.body.appendChild(a);
                            var b = this.selectedFlag.cloneNode(!0);
                            a.appendChild(b);
                            var c = b.offsetWidth;
                            return a.parentNode.removeChild(a), c;
                        },
                    },
                    {
                        key: "_0",
                        value: function () {
                            var a = "aggressive" === this.d.autoPlaceholder || (!this.e && "polite" === this.d.autoPlaceholder);
                            if (window.intlTelInputUtils && a) {
                                var b = intlTelInputUtils.numberType[this.d.placeholderNumberType],
                                    c = this.s.iso2 ? intlTelInputUtils.getExampleNumber(this.s.iso2, this.d.nationalMode, b) : "";
                                (c = this._7(c)), "function" == typeof this.d.customPlaceholder && (c = this.d.customPlaceholder(c, this.s)), this.a.setAttribute("placeholder", c);
                            }
                        },
                    },
                    {
                        key: "_1",
                        value: function (a) {
                            var b = this._z(a.getAttribute("data-country-code"));
                            this._2(), this._4(a.getAttribute("data-dial-code"), !0), this.a.focus();
                            var c = this.a.value.length;
                            this.a.setSelectionRange(c, c), b && this._8();
                        },
                    },
                    {
                        key: "_2",
                        value: function () {
                            this.m.classList.add("iti__hide"),
                                this.selectedFlag.setAttribute("aria-expanded", "false"),
                                this.u.classList.remove("iti__arrow--up"),
                                document.removeEventListener("keydown", this._a3),
                                document.documentElement.removeEventListener("click", this._a2),
                                this.m.removeEventListener("mouseover", this._a0),
                                this.m.removeEventListener("click", this._a1),
                                this.d.dropdownContainer && (this.g || window.removeEventListener("scroll", this._a4), this.dropdown.parentNode && this.dropdown.parentNode.removeChild(this.dropdown)),
                                this._m2("close:countrydropdown");
                        },
                    },
                    {
                        key: "_3",
                        value: function (a, b) {
                            var c = this.m,
                                d = window.pageYOffset || document.documentElement.scrollTop,
                                e = c.offsetHeight,
                                f = c.getBoundingClientRect().top + d,
                                g = f + e,
                                h = a.offsetHeight,
                                i = a.getBoundingClientRect().top + d,
                                j = i + h,
                                k = i - f + c.scrollTop,
                                l = e / 2 - h / 2;
                            if (i < f) b && (k -= l), (c.scrollTop = k);
                            else if (j > g) {
                                b && (k += l);
                                var m = e - h;
                                c.scrollTop = k - m;
                            }
                        },
                    },
                    {
                        key: "_4",
                        value: function (a, b) {
                            var c,
                                d = this.a.value,
                                e = "+".concat(a);
                            if ("+" === d.charAt(0)) {
                                var f = this._5(d);
                                c = f ? d.replace(f, e) : e;
                            } else {
                                if (this.d.nationalMode || this.d.separateDialCode) return;
                                if (d) c = e + d;
                                else {
                                    if (!b && this.d.autoHideDialCode) return;
                                    c = e;
                                }
                            }
                            this.a.value = c;
                        },
                    },
                    {
                        key: "_5",
                        value: function (a) {
                            var b = "";
                            if ("+" === a.charAt(0))
                                for (var c = "", d = 0; d < a.length; d++) {
                                    var e = a.charAt(d);
                                    if (!isNaN(parseInt(e, 10)) && ((c += e), this.q[c] && (b = a.substr(0, d + 1)), c.length === this.dialCodeMaxLen)) break;
                                }
                            return b;
                        },
                    },
                    {
                        key: "_6",
                        value: function () {
                            var a = this.a.value.trim(),
                                b = this.s.dialCode,
                                c = this._m(a);
                            return (this.d.separateDialCode && "+" !== a.charAt(0) && b && c ? "+".concat(b) : "") + a;
                        },
                    },
                    {
                        key: "_7",
                        value: function (a) {
                            var b = a;
                            if (this.d.separateDialCode) {
                                var c = this._5(b);
                                if (c) {
                                    c = "+".concat(this.s.dialCode);
                                    var d = " " === b[c.length] || "-" === b[c.length] ? c.length + 1 : c.length;
                                    b = b.substr(d);
                                }
                            }
                            return this._j2(b);
                        },
                    },
                    {
                        key: "_8",
                        value: function () {
                            this._m2("countrychange");
                        },
                    },
                    {
                        key: "handleAutoCountry",
                        value: function () {
                            "auto" === this.d.initialCountry && ((this.j = window.intlTelInputGlobals.autoCountry), this.a.value || this.setCountry(this.j), this.h());
                        },
                    },
                    {
                        key: "handleUtils",
                        value: function () {
                            window.intlTelInputUtils && (this.a.value && this._u(this.a.value), this._0()), this.i0();
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            var a = this.a.form;
                            if (this.d.allowDropdown) {
                                this._2(), this.selectedFlag.removeEventListener("click", this._a10), this.k.removeEventListener("keydown", this._a11);
                                var b = this._i1();
                                b && b.removeEventListener("click", this._a9);
                            }
                            this.hiddenInput && a && a.removeEventListener("submit", this._a14),
                                this.d.autoHideDialCode && (a && a.removeEventListener("submit", this._a8), this.a.removeEventListener("blur", this._a8)),
                                this.a.removeEventListener("keyup", this._a12),
                                this.a.removeEventListener("cut", this._a13),
                                this.a.removeEventListener("paste", this._a13),
                                this.a.removeAttribute("data-intl-tel-input-id");
                            var c = this.a.parentNode;
                            c.parentNode.insertBefore(this.a, c), c.parentNode.removeChild(c), delete window.intlTelInputGlobals.instances[this.id];
                        },
                    },
                    {
                        key: "getExtension",
                        value: function () {
                            return window.intlTelInputUtils ? intlTelInputUtils.getExtension(this._6(), this.s.iso2) : "";
                        },
                    },
                    {
                        key: "getNumber",
                        value: function (a) {
                            if (window.intlTelInputUtils) {
                                var b = this.s.iso2;
                                return intlTelInputUtils.formatNumber(this._6(), b, a);
                            }
                            return "";
                        },
                    },
                    {
                        key: "getNumberType",
                        value: function () {
                            return window.intlTelInputUtils ? intlTelInputUtils.getNumberType(this._6(), this.s.iso2) : -99;
                        },
                    },
                    {
                        key: "getSelectedCountryData",
                        value: function () {
                            return this.s;
                        },
                    },
                    {
                        key: "getValidationError",
                        value: function () {
                            if (window.intlTelInputUtils) {
                                var a = this.s.iso2;
                                return intlTelInputUtils.getValidationError(this._6(), a);
                            }
                            return -99;
                        },
                    },
                    {
                        key: "isValidNumber",
                        value: function () {
                            var a = this._6().trim(),
                                b = this.d.nationalMode ? this.s.iso2 : "";
                            return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(a, b) : null;
                        },
                    },
                    {
                        key: "setCountry",
                        value: function (a) {
                            var b = a.toLowerCase();
                            this.l.classList.contains("iti__".concat(b)) || (this._z(b), this._4(this.s.dialCode, !1), this._8());
                        },
                    },
                    {
                        key: "setNumber",
                        value: function (a) {
                            var b = this._v(a);
                            this._u(a), b && this._8();
                        },
                    },
                    {
                        key: "setPlaceholderNumberType",
                        value: function (a) {
                            (this.d.placeholderNumberType = a), this._0();
                        },
                    },
                ]),
                a
            );
        })();
    i.getCountryData = function () {
        return f;
    };
    var p = function (a, b, c) {
        var d = document.createElement("script");
        (d.onload = function () {
            n("handleUtils"), b && b();
        }),
            (d.onerror = function () {
                n("rejectUtilsScriptPromise"), c && c();
            }),
            (d.className = "iti-load-utils"),
            (d.async = !0),
            (d.src = a),
            document.body.appendChild(d);
    };
    (i.loadUtils = function (a) {
        if (!window.intlTelInputUtils && !window.intlTelInputGlobals.startedLoadingUtilsScript) {
            if (((window.intlTelInputGlobals.startedLoadingUtilsScript = !0), "undefined" != typeof Promise))
                return new Promise(function (b, c) {
                    return p(a, b, c);
                });
            p(a);
        }
        return null;
    }),
        (i.defaults = k),
        (i.version = "17.0.0");
    a.fn.intlTelInput = function (c) {
        var d = arguments;
        if (c === b || "object" == typeof c)
            return this.each(function () {
                if (!a.data(this, "plugin_intlTelInput")) {
                    var b = new o(this, c);
                    b._init(), (window.intlTelInputGlobals.instances[b.id] = b), a.data(this, "plugin_intlTelInput", b);
                }
            });
        if ("string" == typeof c && "_" !== c[0]) {
            var e;
            return (
                this.each(function () {
                    var b = a.data(this, "plugin_intlTelInput");
                    b instanceof o && "function" == typeof b[c] && (e = b[c].apply(b, Array.prototype.slice.call(d, 1))), "destroy" === c && a.data(this, "plugin_intlTelInput", null);
                }),
                e !== b ? e : this
            );
        }
    };
});
/*!
 * Bootstrap v4.5.0 (https://getbootstrap.com/)
 * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? e(exports, require("jquery"), require("popper.js"))
        : "function" == typeof define && define.amd
        ? define(["exports", "jquery", "popper.js"], e)
        : e(((t = t || self).bootstrap = {}), t.jQuery, t.Popper);
})(this, function (t, e, n) {
    "use strict";
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
    }
    function o(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t;
    }
    function s(t, e, n) {
        return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    function r(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e &&
                (i = i.filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })),
                n.push.apply(n, i);
        }
        return n;
    }
    function a(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
                ? r(Object(n), !0).forEach(function (e) {
                      s(t, e, n[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : r(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  });
        }
        return t;
    }
    (e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e), (n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n);
    function l(t) {
        var n = this,
            i = !1;
        return (
            e(this).one(c.TRANSITION_END, function () {
                i = !0;
            }),
            setTimeout(function () {
                i || c.triggerTransitionEnd(n);
            }, t),
            this
        );
    }
    var c = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function (t) {
            do {
                t += ~~(1e6 * Math.random());
            } while (document.getElementById(t));
            return t;
        },
        getSelectorFromElement: function (t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : "";
            }
            try {
                return document.querySelector(e) ? e : null;
            } catch (t) {
                return null;
            }
        },
        getTransitionDurationFromElement: function (t) {
            if (!t) return 0;
            var n = e(t).css("transition-duration"),
                i = e(t).css("transition-delay"),
                o = parseFloat(n),
                s = parseFloat(i);
            return o || s ? ((n = n.split(",")[0]), (i = i.split(",")[0]), 1e3 * (parseFloat(n) + parseFloat(i))) : 0;
        },
        reflow: function (t) {
            return t.offsetHeight;
        },
        triggerTransitionEnd: function (t) {
            e(t).trigger("transitionend");
        },
        supportsTransitionEnd: function () {
            return Boolean("transitionend");
        },
        isElement: function (t) {
            return (t[0] || t).nodeType;
        },
        typeCheckConfig: function (t, e, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i],
                        s = e[i],
                        r =
                            s && c.isElement(s)
                                ? "element"
                                : null === (a = s) || "undefined" == typeof a
                                ? "" + a
                                : {}.toString
                                      .call(a)
                                      .match(/\s([a-z]+)/i)[1]
                                      .toLowerCase();
                    if (!new RegExp(o).test(r)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + r + '" but expected type "' + o + '".');
                }
            var a;
        },
        findShadowRoot: function (t) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                var e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null;
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? c.findShadowRoot(t.parentNode) : null;
        },
        jQueryDetection: function () {
            if ("undefined" == typeof e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var t = e.fn.jquery.split(" ")[0].split(".");
            if ((t[0] < 2 && t[1] < 9) || (1 === t[0] && 9 === t[1] && t[2] < 1) || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
        },
    };
    c.jQueryDetection(),
        (e.fn.emulateTransitionEnd = l),
        (e.event.special[c.TRANSITION_END] = {
            bindType: "transitionend",
            delegateType: "transitionend",
            handle: function (t) {
                if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
            },
        });
    var h = "alert",
        u = e.fn[h],
        d = (function () {
            function t(t) {
                this._element = t;
            }
            var n = t.prototype;
            return (
                (n.close = function (t) {
                    var e = this._element;
                    t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
                }),
                (n.dispose = function () {
                    e.removeData(this._element, "bs.alert"), (this._element = null);
                }),
                (n._getRootElement = function (t) {
                    var n = c.getSelectorFromElement(t),
                        i = !1;
                    return n && (i = document.querySelector(n)), i || (i = e(t).closest(".alert")[0]), i;
                }),
                (n._triggerCloseEvent = function (t) {
                    var n = e.Event("close.bs.alert");
                    return e(t).trigger(n), n;
                }),
                (n._removeElement = function (t) {
                    var n = this;
                    if ((e(t).removeClass("show"), e(t).hasClass("fade"))) {
                        var i = c.getTransitionDurationFromElement(t);
                        e(t)
                            .one(c.TRANSITION_END, function (e) {
                                return n._destroyElement(t, e);
                            })
                            .emulateTransitionEnd(i);
                    } else this._destroyElement(t);
                }),
                (n._destroyElement = function (t) {
                    e(t).detach().trigger("closed.bs.alert").remove();
                }),
                (t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = e(this),
                            o = i.data("bs.alert");
                        o || ((o = new t(this)), i.data("bs.alert", o)), "close" === n && o[n](this);
                    });
                }),
                (t._handleDismiss = function (t) {
                    return function (e) {
                        e && e.preventDefault(), t.close(this);
                    };
                }),
                o(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.0";
                        },
                    },
                ]),
                t
            );
        })();
    e(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', d._handleDismiss(new d())),
        (e.fn[h] = d._jQueryInterface),
        (e.fn[h].Constructor = d),
        (e.fn[h].noConflict = function () {
            return (e.fn[h] = u), d._jQueryInterface;
        });
    var f = e.fn.button,
        g = (function () {
            function t(t) {
                this._element = t;
            }
            var n = t.prototype;
            return (
                (n.toggle = function () {
                    var t = !0,
                        n = !0,
                        i = e(this._element).closest('[data-toggle="buttons"]')[0];
                    if (i) {
                        var o = this._element.querySelector('input:not([type="hidden"])');
                        if (o) {
                            if ("radio" === o.type)
                                if (o.checked && this._element.classList.contains("active")) t = !1;
                                else {
                                    var s = i.querySelector(".active");
                                    s && e(s).removeClass("active");
                                }
                            t && (("checkbox" !== o.type && "radio" !== o.type) || (o.checked = !this._element.classList.contains("active")), e(o).trigger("change")), o.focus(), (n = !1);
                        }
                    }
                    this._element.hasAttribute("disabled") ||
                        this._element.classList.contains("disabled") ||
                        (n && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), t && e(this._element).toggleClass("active"));
                }),
                (n.dispose = function () {
                    e.removeData(this._element, "bs.button"), (this._element = null);
                }),
                (t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = e(this).data("bs.button");
                        i || ((i = new t(this)), e(this).data("bs.button", i)), "toggle" === n && i[n]();
                    });
                }),
                o(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.0";
                        },
                    },
                ]),
                t
            );
        })();
    e(document)
        .on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
            var n = t.target,
                i = n;
            if ((e(n).hasClass("btn") || (n = e(n).closest(".btn")[0]), !n || n.hasAttribute("disabled") || n.classList.contains("disabled"))) t.preventDefault();
            else {
                var o = n.querySelector('input:not([type="hidden"])');
                if (o && (o.hasAttribute("disabled") || o.classList.contains("disabled"))) return void t.preventDefault();
                "LABEL" === i.tagName && o && "checkbox" === o.type && t.preventDefault(), g._jQueryInterface.call(e(n), "toggle");
            }
        })
        .on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
            var n = e(t.target).closest(".btn")[0];
            e(n).toggleClass("focus", /^focus(in)?$/.test(t.type));
        }),
        e(window).on("load.bs.button.data-api", function () {
            for (var t = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), e = 0, n = t.length; e < n; e++) {
                var i = t[e],
                    o = i.querySelector('input:not([type="hidden"])');
                o.checked || o.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active");
            }
            for (var s = 0, r = (t = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; s < r; s++) {
                var a = t[s];
                "true" === a.getAttribute("aria-pressed") ? a.classList.add("active") : a.classList.remove("active");
            }
        }),
        (e.fn.button = g._jQueryInterface),
        (e.fn.button.Constructor = g),
        (e.fn.button.noConflict = function () {
            return (e.fn.button = f), g._jQueryInterface;
        });
    var m = "carousel",
        p = ".bs.carousel",
        _ = e.fn[m],
        v = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
        b = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
        y = { TOUCH: "touch", PEN: "pen" },
        E = (function () {
            function t(t, e) {
                (this._items = null),
                    (this._interval = null),
                    (this._activeElement = null),
                    (this._isPaused = !1),
                    (this._isSliding = !1),
                    (this.touchTimeout = null),
                    (this.touchStartX = 0),
                    (this.touchDeltaX = 0),
                    (this._config = this._getConfig(e)),
                    (this._element = t),
                    (this._indicatorsElement = this._element.querySelector(".carousel-indicators")),
                    (this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0),
                    (this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent)),
                    this._addEventListeners();
            }
            var n = t.prototype;
            return (
                (n.next = function () {
                    this._isSliding || this._slide("next");
                }),
                (n.nextWhenVisible = function () {
                    !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next();
                }),
                (n.prev = function () {
                    this._isSliding || this._slide("prev");
                }),
                (n.pause = function (t) {
                    t || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (c.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), (this._interval = null);
                }),
                (n.cycle = function (t) {
                    t || (this._isPaused = !1),
                        this._interval && (clearInterval(this._interval), (this._interval = null)),
                        this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
                }),
                (n.to = function (t) {
                    var n = this;
                    this._activeElement = this._element.querySelector(".active.carousel-item");
                    var i = this._getItemIndex(this._activeElement);
                    if (!(t > this._items.length - 1 || t < 0))
                        if (this._isSliding)
                            e(this._element).one("slid.bs.carousel", function () {
                                return n.to(t);
                            });
                        else {
                            if (i === t) return this.pause(), void this.cycle();
                            var o = t > i ? "next" : "prev";
                            this._slide(o, this._items[t]);
                        }
                }),
                (n.dispose = function () {
                    e(this._element).off(p),
                        e.removeData(this._element, "bs.carousel"),
                        (this._items = null),
                        (this._config = null),
                        (this._element = null),
                        (this._interval = null),
                        (this._isPaused = null),
                        (this._isSliding = null),
                        (this._activeElement = null),
                        (this._indicatorsElement = null);
                }),
                (n._getConfig = function (t) {
                    return (t = a(a({}, v), t)), c.typeCheckConfig(m, t, b), t;
                }),
                (n._handleSwipe = function () {
                    var t = Math.abs(this.touchDeltaX);
                    if (!(t <= 40)) {
                        var e = t / this.touchDeltaX;
                        (this.touchDeltaX = 0), e > 0 && this.prev(), e < 0 && this.next();
                    }
                }),
                (n._addEventListeners = function () {
                    var t = this;
                    this._config.keyboard &&
                        e(this._element).on("keydown.bs.carousel", function (e) {
                            return t._keydown(e);
                        }),
                        "hover" === this._config.pause &&
                            e(this._element)
                                .on("mouseenter.bs.carousel", function (e) {
                                    return t.pause(e);
                                })
                                .on("mouseleave.bs.carousel", function (e) {
                                    return t.cycle(e);
                                }),
                        this._config.touch && this._addTouchEventListeners();
                }),
                (n._addTouchEventListeners = function () {
                    var t = this;
                    if (this._touchSupported) {
                        var n = function (e) {
                                t._pointerEvent && y[e.originalEvent.pointerType.toUpperCase()] ? (t.touchStartX = e.originalEvent.clientX) : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX);
                            },
                            i = function (e) {
                                t._pointerEvent && y[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                                    t._handleSwipe(),
                                    "hover" === t._config.pause &&
                                        (t.pause(),
                                        t.touchTimeout && clearTimeout(t.touchTimeout),
                                        (t.touchTimeout = setTimeout(function (e) {
                                            return t.cycle(e);
                                        }, 500 + t._config.interval)));
                            };
                        e(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function (t) {
                            return t.preventDefault();
                        }),
                            this._pointerEvent
                                ? (e(this._element).on("pointerdown.bs.carousel", function (t) {
                                      return n(t);
                                  }),
                                  e(this._element).on("pointerup.bs.carousel", function (t) {
                                      return i(t);
                                  }),
                                  this._element.classList.add("pointer-event"))
                                : (e(this._element).on("touchstart.bs.carousel", function (t) {
                                      return n(t);
                                  }),
                                  e(this._element).on("touchmove.bs.carousel", function (e) {
                                      return (function (e) {
                                          e.originalEvent.touches && e.originalEvent.touches.length > 1 ? (t.touchDeltaX = 0) : (t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX);
                                      })(e);
                                  }),
                                  e(this._element).on("touchend.bs.carousel", function (t) {
                                      return i(t);
                                  }));
                    }
                }),
                (n._keydown = function (t) {
                    if (!/input|textarea/i.test(t.target.tagName))
                        switch (t.which) {
                            case 37:
                                t.preventDefault(), this.prev();
                                break;
                            case 39:
                                t.preventDefault(), this.next();
                        }
                }),
                (n._getItemIndex = function (t) {
                    return (this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : []), this._items.indexOf(t);
                }),
                (n._getItemByDirection = function (t, e) {
                    var n = "next" === t,
                        i = "prev" === t,
                        o = this._getItemIndex(e),
                        s = this._items.length - 1;
                    if (((i && 0 === o) || (n && o === s)) && !this._config.wrap) return e;
                    var r = (o + ("prev" === t ? -1 : 1)) % this._items.length;
                    return -1 === r ? this._items[this._items.length - 1] : this._items[r];
                }),
                (n._triggerSlideEvent = function (t, n) {
                    var i = this._getItemIndex(t),
                        o = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
                        s = e.Event("slide.bs.carousel", { relatedTarget: t, direction: n, from: o, to: i });
                    return e(this._element).trigger(s), s;
                }),
                (n._setActiveIndicatorElement = function (t) {
                    if (this._indicatorsElement) {
                        var n = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                        e(n).removeClass("active");
                        var i = this._indicatorsElement.children[this._getItemIndex(t)];
                        i && e(i).addClass("active");
                    }
                }),
                (n._slide = function (t, n) {
                    var i,
                        o,
                        s,
                        r = this,
                        a = this._element.querySelector(".active.carousel-item"),
                        l = this._getItemIndex(a),
                        h = n || (a && this._getItemByDirection(t, a)),
                        u = this._getItemIndex(h),
                        d = Boolean(this._interval);
                    if (("next" === t ? ((i = "carousel-item-left"), (o = "carousel-item-next"), (s = "left")) : ((i = "carousel-item-right"), (o = "carousel-item-prev"), (s = "right")), h && e(h).hasClass("active"))) this._isSliding = !1;
                    else if (!this._triggerSlideEvent(h, s).isDefaultPrevented() && a && h) {
                        (this._isSliding = !0), d && this.pause(), this._setActiveIndicatorElement(h);
                        var f = e.Event("slid.bs.carousel", { relatedTarget: h, direction: s, from: l, to: u });
                        if (e(this._element).hasClass("slide")) {
                            e(h).addClass(o), c.reflow(h), e(a).addClass(i), e(h).addClass(i);
                            var g = parseInt(h.getAttribute("data-interval"), 10);
                            g ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval), (this._config.interval = g)) : (this._config.interval = this._config.defaultInterval || this._config.interval);
                            var m = c.getTransitionDurationFromElement(a);
                            e(a)
                                .one(c.TRANSITION_END, function () {
                                    e(h)
                                        .removeClass(i + " " + o)
                                        .addClass("active"),
                                        e(a).removeClass("active " + o + " " + i),
                                        (r._isSliding = !1),
                                        setTimeout(function () {
                                            return e(r._element).trigger(f);
                                        }, 0);
                                })
                                .emulateTransitionEnd(m);
                        } else e(a).removeClass("active"), e(h).addClass("active"), (this._isSliding = !1), e(this._element).trigger(f);
                        d && this.cycle();
                    }
                }),
                (t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = e(this).data("bs.carousel"),
                            o = a(a({}, v), e(this).data());
                        "object" == typeof n && (o = a(a({}, o), n));
                        var s = "string" == typeof n ? n : o.slide;
                        if ((i || ((i = new t(this, o)), e(this).data("bs.carousel", i)), "number" == typeof n)) i.to(n);
                        else if ("string" == typeof s) {
                            if ("undefined" == typeof i[s]) throw new TypeError('No method named "' + s + '"');
                            i[s]();
                        } else o.interval && o.ride && (i.pause(), i.cycle());
                    });
                }),
                (t._dataApiClickHandler = function (n) {
                    var i = c.getSelectorFromElement(this);
                    if (i) {
                        var o = e(i)[0];
                        if (o && e(o).hasClass("carousel")) {
                            var s = a(a({}, e(o).data()), e(this).data()),
                                r = this.getAttribute("data-slide-to");
                            r && (s.interval = !1), t._jQueryInterface.call(e(o), s), r && e(o).data("bs.carousel").to(r), n.preventDefault();
                        }
                    }
                }),
                o(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.0";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return v;
                        },
                    },
                ]),
                t
            );
        })();
    e(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", E._dataApiClickHandler),
        e(window).on("load.bs.carousel.data-api", function () {
            for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, i = t.length; n < i; n++) {
                var o = e(t[n]);
                E._jQueryInterface.call(o, o.data());
            }
        }),
        (e.fn[m] = E._jQueryInterface),
        (e.fn[m].Constructor = E),
        (e.fn[m].noConflict = function () {
            return (e.fn[m] = _), E._jQueryInterface;
        });
    var w = "collapse",
        T = e.fn[w],
        C = { toggle: !0, parent: "" },
        S = { toggle: "boolean", parent: "(string|element)" },
        D = (function () {
            function t(t, e) {
                (this._isTransitioning = !1),
                    (this._element = t),
                    (this._config = this._getConfig(e)),
                    (this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]')));
                for (var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), i = 0, o = n.length; i < o; i++) {
                    var s = n[i],
                        r = c.getSelectorFromElement(s),
                        a = [].slice.call(document.querySelectorAll(r)).filter(function (e) {
                            return e === t;
                        });
                    null !== r && a.length > 0 && ((this._selector = r), this._triggerArray.push(s));
                }
                (this._parent = this._config.parent ? this._getParent() : null), this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
            }
            var n = t.prototype;
            return (
                (n.toggle = function () {
                    e(this._element).hasClass("show") ? this.hide() : this.show();
                }),
                (n.show = function () {
                    var n,
                        i,
                        o = this;
                    if (
                        !this._isTransitioning &&
                        !e(this._element).hasClass("show") &&
                        (this._parent &&
                            0 ===
                                (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function (t) {
                                    return "string" == typeof o._config.parent ? t.getAttribute("data-parent") === o._config.parent : t.classList.contains("collapse");
                                })).length &&
                            (n = null),
                        !(n && (i = e(n).not(this._selector).data("bs.collapse")) && i._isTransitioning))
                    ) {
                        var s = e.Event("show.bs.collapse");
                        if ((e(this._element).trigger(s), !s.isDefaultPrevented())) {
                            n && (t._jQueryInterface.call(e(n).not(this._selector), "hide"), i || e(n).data("bs.collapse", null));
                            var r = this._getDimension();
                            e(this._element).removeClass("collapse").addClass("collapsing"),
                                (this._element.style[r] = 0),
                                this._triggerArray.length && e(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0),
                                this.setTransitioning(!0);
                            var a = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                                l = c.getTransitionDurationFromElement(this._element);
                            e(this._element)
                                .one(c.TRANSITION_END, function () {
                                    e(o._element).removeClass("collapsing").addClass("collapse show"), (o._element.style[r] = ""), o.setTransitioning(!1), e(o._element).trigger("shown.bs.collapse");
                                })
                                .emulateTransitionEnd(l),
                                (this._element.style[r] = this._element[a] + "px");
                        }
                    }
                }),
                (n.hide = function () {
                    var t = this;
                    if (!this._isTransitioning && e(this._element).hasClass("show")) {
                        var n = e.Event("hide.bs.collapse");
                        if ((e(this._element).trigger(n), !n.isDefaultPrevented())) {
                            var i = this._getDimension();
                            (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px"), c.reflow(this._element), e(this._element).addClass("collapsing").removeClass("collapse show");
                            var o = this._triggerArray.length;
                            if (o > 0)
                                for (var s = 0; s < o; s++) {
                                    var r = this._triggerArray[s],
                                        a = c.getSelectorFromElement(r);
                                    if (null !== a) e([].slice.call(document.querySelectorAll(a))).hasClass("show") || e(r).addClass("collapsed").attr("aria-expanded", !1);
                                }
                            this.setTransitioning(!0);
                            this._element.style[i] = "";
                            var l = c.getTransitionDurationFromElement(this._element);
                            e(this._element)
                                .one(c.TRANSITION_END, function () {
                                    t.setTransitioning(!1), e(t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                                })
                                .emulateTransitionEnd(l);
                        }
                    }
                }),
                (n.setTransitioning = function (t) {
                    this._isTransitioning = t;
                }),
                (n.dispose = function () {
                    e.removeData(this._element, "bs.collapse"), (this._config = null), (this._parent = null), (this._element = null), (this._triggerArray = null), (this._isTransitioning = null);
                }),
                (n._getConfig = function (t) {
                    return ((t = a(a({}, C), t)).toggle = Boolean(t.toggle)), c.typeCheckConfig(w, t, S), t;
                }),
                (n._getDimension = function () {
                    return e(this._element).hasClass("width") ? "width" : "height";
                }),
                (n._getParent = function () {
                    var n,
                        i = this;
                    c.isElement(this._config.parent) ? ((n = this._config.parent), "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : (n = document.querySelector(this._config.parent));
                    var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                        s = [].slice.call(n.querySelectorAll(o));
                    return (
                        e(s).each(function (e, n) {
                            i._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n]);
                        }),
                        n
                    );
                }),
                (n._addAriaAndCollapsedClass = function (t, n) {
                    var i = e(t).hasClass("show");
                    n.length && e(n).toggleClass("collapsed", !i).attr("aria-expanded", i);
                }),
                (t._getTargetFromElement = function (t) {
                    var e = c.getSelectorFromElement(t);
                    return e ? document.querySelector(e) : null;
                }),
                (t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = e(this),
                            o = i.data("bs.collapse"),
                            s = a(a(a({}, C), i.data()), "object" == typeof n && n ? n : {});
                        if ((!o && s.toggle && "string" == typeof n && /show|hide/.test(n) && (s.toggle = !1), o || ((o = new t(this, s)), i.data("bs.collapse", o)), "string" == typeof n)) {
                            if ("undefined" == typeof o[n]) throw new TypeError('No method named "' + n + '"');
                            o[n]();
                        }
                    });
                }),
                o(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.0";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return C;
                        },
                    },
                ]),
                t
            );
        })();
    e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = e(this),
            i = c.getSelectorFromElement(this),
            o = [].slice.call(document.querySelectorAll(i));
        e(o).each(function () {
            var t = e(this),
                i = t.data("bs.collapse") ? "toggle" : n.data();
            D._jQueryInterface.call(t, i);
        });
    }),
        (e.fn[w] = D._jQueryInterface),
        (e.fn[w].Constructor = D),
        (e.fn[w].noConflict = function () {
            return (e.fn[w] = T), D._jQueryInterface;
        });
    var k = "dropdown",
        N = e.fn[k],
        A = new RegExp("38|40|27"),
        I = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic", popperConfig: null },
        O = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string", popperConfig: "(null|object)" },
        j = (function () {
            function t(t, e) {
                (this._element = t), (this._popper = null), (this._config = this._getConfig(e)), (this._menu = this._getMenuElement()), (this._inNavbar = this._detectNavbar()), this._addEventListeners();
            }
            var i = t.prototype;
            return (
                (i.toggle = function () {
                    if (!this._element.disabled && !e(this._element).hasClass("disabled")) {
                        var n = e(this._menu).hasClass("show");
                        t._clearMenus(), n || this.show(!0);
                    }
                }),
                (i.show = function (i) {
                    if ((void 0 === i && (i = !1), !(this._element.disabled || e(this._element).hasClass("disabled") || e(this._menu).hasClass("show")))) {
                        var o = { relatedTarget: this._element },
                            s = e.Event("show.bs.dropdown", o),
                            r = t._getParentFromElement(this._element);
                        if ((e(r).trigger(s), !s.isDefaultPrevented())) {
                            if (!this._inNavbar && i) {
                                if ("undefined" == typeof n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                var a = this._element;
                                "parent" === this._config.reference ? (a = r) : c.isElement(this._config.reference) && ((a = this._config.reference), "undefined" != typeof this._config.reference.jquery && (a = this._config.reference[0])),
                                    "scrollParent" !== this._config.boundary && e(r).addClass("position-static"),
                                    (this._popper = new n(a, this._menu, this._getPopperConfig()));
                            }
                            "ontouchstart" in document.documentElement && 0 === e(r).closest(".navbar-nav").length && e(document.body).children().on("mouseover", null, e.noop),
                                this._element.focus(),
                                this._element.setAttribute("aria-expanded", !0),
                                e(this._menu).toggleClass("show"),
                                e(r).toggleClass("show").trigger(e.Event("shown.bs.dropdown", o));
                        }
                    }
                }),
                (i.hide = function () {
                    if (!this._element.disabled && !e(this._element).hasClass("disabled") && e(this._menu).hasClass("show")) {
                        var n = { relatedTarget: this._element },
                            i = e.Event("hide.bs.dropdown", n),
                            o = t._getParentFromElement(this._element);
                        e(o).trigger(i), i.isDefaultPrevented() || (this._popper && this._popper.destroy(), e(this._menu).toggleClass("show"), e(o).toggleClass("show").trigger(e.Event("hidden.bs.dropdown", n)));
                    }
                }),
                (i.dispose = function () {
                    e.removeData(this._element, "bs.dropdown"), e(this._element).off(".bs.dropdown"), (this._element = null), (this._menu = null), null !== this._popper && (this._popper.destroy(), (this._popper = null));
                }),
                (i.update = function () {
                    (this._inNavbar = this._detectNavbar()), null !== this._popper && this._popper.scheduleUpdate();
                }),
                (i._addEventListeners = function () {
                    var t = this;
                    e(this._element).on("click.bs.dropdown", function (e) {
                        e.preventDefault(), e.stopPropagation(), t.toggle();
                    });
                }),
                (i._getConfig = function (t) {
                    return (t = a(a(a({}, this.constructor.Default), e(this._element).data()), t)), c.typeCheckConfig(k, t, this.constructor.DefaultType), t;
                }),
                (i._getMenuElement = function () {
                    if (!this._menu) {
                        var e = t._getParentFromElement(this._element);
                        e && (this._menu = e.querySelector(".dropdown-menu"));
                    }
                    return this._menu;
                }),
                (i._getPlacement = function () {
                    var t = e(this._element.parentNode),
                        n = "bottom-start";
                    return (
                        t.hasClass("dropup")
                            ? (n = e(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start")
                            : t.hasClass("dropright")
                            ? (n = "right-start")
                            : t.hasClass("dropleft")
                            ? (n = "left-start")
                            : e(this._menu).hasClass("dropdown-menu-right") && (n = "bottom-end"),
                        n
                    );
                }),
                (i._detectNavbar = function () {
                    return e(this._element).closest(".navbar").length > 0;
                }),
                (i._getOffset = function () {
                    var t = this,
                        e = {};
                    return (
                        "function" == typeof this._config.offset
                            ? (e.fn = function (e) {
                                  return (e.offsets = a(a({}, e.offsets), t._config.offset(e.offsets, t._element) || {})), e;
                              })
                            : (e.offset = this._config.offset),
                        e
                    );
                }),
                (i._getPopperConfig = function () {
                    var t = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };
                    return "static" === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }), a(a({}, t), this._config.popperConfig);
                }),
                (t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = e(this).data("bs.dropdown");
                        if ((i || ((i = new t(this, "object" == typeof n ? n : null)), e(this).data("bs.dropdown", i)), "string" == typeof n)) {
                            if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]();
                        }
                    });
                }),
                (t._clearMenus = function (n) {
                    if (!n || (3 !== n.which && ("keyup" !== n.type || 9 === n.which)))
                        for (var i = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), o = 0, s = i.length; o < s; o++) {
                            var r = t._getParentFromElement(i[o]),
                                a = e(i[o]).data("bs.dropdown"),
                                l = { relatedTarget: i[o] };
                            if ((n && "click" === n.type && (l.clickEvent = n), a)) {
                                var c = a._menu;
                                if (e(r).hasClass("show") && !(n && (("click" === n.type && /input|textarea/i.test(n.target.tagName)) || ("keyup" === n.type && 9 === n.which)) && e.contains(r, n.target))) {
                                    var h = e.Event("hide.bs.dropdown", l);
                                    e(r).trigger(h),
                                        h.isDefaultPrevented() ||
                                            ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop),
                                            i[o].setAttribute("aria-expanded", "false"),
                                            a._popper && a._popper.destroy(),
                                            e(c).removeClass("show"),
                                            e(r).removeClass("show").trigger(e.Event("hidden.bs.dropdown", l)));
                                }
                            }
                        }
                }),
                (t._getParentFromElement = function (t) {
                    var e,
                        n = c.getSelectorFromElement(t);
                    return n && (e = document.querySelector(n)), e || t.parentNode;
                }),
                (t._dataApiKeydownHandler = function (n) {
                    if (
                        !(/input|textarea/i.test(n.target.tagName) ? 32 === n.which || (27 !== n.which && ((40 !== n.which && 38 !== n.which) || e(n.target).closest(".dropdown-menu").length)) : !A.test(n.which)) &&
                        !this.disabled &&
                        !e(this).hasClass("disabled")
                    ) {
                        var i = t._getParentFromElement(this),
                            o = e(i).hasClass("show");
                        if (o || 27 !== n.which) {
                            if ((n.preventDefault(), n.stopPropagation(), !o || (o && (27 === n.which || 32 === n.which))))
                                return 27 === n.which && e(i.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void e(this).trigger("click");
                            var s = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function (t) {
                                return e(t).is(":visible");
                            });
                            if (0 !== s.length) {
                                var r = s.indexOf(n.target);
                                38 === n.which && r > 0 && r--, 40 === n.which && r < s.length - 1 && r++, r < 0 && (r = 0), s[r].focus();
                            }
                        }
                    }
                }),
                o(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.0";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return I;
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return O;
                        },
                    },
                ]),
                t
            );
        })();
    e(document)
        .on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', j._dataApiKeydownHandler)
        .on("keydown.bs.dropdown.data-api", ".dropdown-menu", j._dataApiKeydownHandler)
        .on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", j._clearMenus)
        .on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function (t) {
            t.preventDefault(), t.stopPropagation(), j._jQueryInterface.call(e(this), "toggle");
        })
        .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
            t.stopPropagation();
        }),
        (e.fn[k] = j._jQueryInterface),
        (e.fn[k].Constructor = j),
        (e.fn[k].noConflict = function () {
            return (e.fn[k] = N), j._jQueryInterface;
        });
    var P = e.fn.modal,
        x = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        L = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
        R = (function () {
            function t(t, e) {
                (this._config = this._getConfig(e)),
                    (this._element = t),
                    (this._dialog = t.querySelector(".modal-dialog")),
                    (this._backdrop = null),
                    (this._isShown = !1),
                    (this._isBodyOverflowing = !1),
                    (this._ignoreBackdropClick = !1),
                    (this._isTransitioning = !1),
                    (this._scrollbarWidth = 0);
            }
            var n = t.prototype;
            return (
                (n.toggle = function (t) {
                    return this._isShown ? this.hide() : this.show(t);
                }),
                (n.show = function (t) {
                    var n = this;
                    if (!this._isShown && !this._isTransitioning) {
                        e(this._element).hasClass("fade") && (this._isTransitioning = !0);
                        var i = e.Event("show.bs.modal", { relatedTarget: t });
                        e(this._element).trigger(i),
                            this._isShown ||
                                i.isDefaultPrevented() ||
                                ((this._isShown = !0),
                                this._checkScrollbar(),
                                this._setScrollbar(),
                                this._adjustDialog(),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                e(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', function (t) {
                                    return n.hide(t);
                                }),
                                e(this._dialog).on("mousedown.dismiss.bs.modal", function () {
                                    e(n._element).one("mouseup.dismiss.bs.modal", function (t) {
                                        e(t.target).is(n._element) && (n._ignoreBackdropClick = !0);
                                    });
                                }),
                                this._showBackdrop(function () {
                                    return n._showElement(t);
                                }));
                    }
                }),
                (n.hide = function (t) {
                    var n = this;
                    if ((t && t.preventDefault(), this._isShown && !this._isTransitioning)) {
                        var i = e.Event("hide.bs.modal");
                        if ((e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented())) {
                            this._isShown = !1;
                            var o = e(this._element).hasClass("fade");
                            if (
                                (o && (this._isTransitioning = !0),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                e(document).off("focusin.bs.modal"),
                                e(this._element).removeClass("show"),
                                e(this._element).off("click.dismiss.bs.modal"),
                                e(this._dialog).off("mousedown.dismiss.bs.modal"),
                                o)
                            ) {
                                var s = c.getTransitionDurationFromElement(this._element);
                                e(this._element)
                                    .one(c.TRANSITION_END, function (t) {
                                        return n._hideModal(t);
                                    })
                                    .emulateTransitionEnd(s);
                            } else this._hideModal();
                        }
                    }
                }),
                (n.dispose = function () {
                    [window, this._element, this._dialog].forEach(function (t) {
                        return e(t).off(".bs.modal");
                    }),
                        e(document).off("focusin.bs.modal"),
                        e.removeData(this._element, "bs.modal"),
                        (this._config = null),
                        (this._element = null),
                        (this._dialog = null),
                        (this._backdrop = null),
                        (this._isShown = null),
                        (this._isBodyOverflowing = null),
                        (this._ignoreBackdropClick = null),
                        (this._isTransitioning = null),
                        (this._scrollbarWidth = null);
                }),
                (n.handleUpdate = function () {
                    this._adjustDialog();
                }),
                (n._getConfig = function (t) {
                    return (t = a(a({}, x), t)), c.typeCheckConfig("modal", t, L), t;
                }),
                (n._triggerBackdropTransition = function () {
                    var t = this;
                    if ("static" === this._config.backdrop) {
                        var n = e.Event("hidePrevented.bs.modal");
                        if ((e(this._element).trigger(n), n.defaultPrevented)) return;
                        this._element.classList.add("modal-static");
                        var i = c.getTransitionDurationFromElement(this._element);
                        e(this._element)
                            .one(c.TRANSITION_END, function () {
                                t._element.classList.remove("modal-static");
                            })
                            .emulateTransitionEnd(i),
                            this._element.focus();
                    } else this.hide();
                }),
                (n._showElement = function (t) {
                    var n = this,
                        i = e(this._element).hasClass("fade"),
                        o = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                    (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) || document.body.appendChild(this._element),
                        (this._element.style.display = "block"),
                        this._element.removeAttribute("aria-hidden"),
                        this._element.setAttribute("aria-modal", !0),
                        e(this._dialog).hasClass("modal-dialog-scrollable") && o ? (o.scrollTop = 0) : (this._element.scrollTop = 0),
                        i && c.reflow(this._element),
                        e(this._element).addClass("show"),
                        this._config.focus && this._enforceFocus();
                    var s = e.Event("shown.bs.modal", { relatedTarget: t }),
                        r = function () {
                            n._config.focus && n._element.focus(), (n._isTransitioning = !1), e(n._element).trigger(s);
                        };
                    if (i) {
                        var a = c.getTransitionDurationFromElement(this._dialog);
                        e(this._dialog).one(c.TRANSITION_END, r).emulateTransitionEnd(a);
                    } else r();
                }),
                (n._enforceFocus = function () {
                    var t = this;
                    e(document)
                        .off("focusin.bs.modal")
                        .on("focusin.bs.modal", function (n) {
                            document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus();
                        });
                }),
                (n._setEscapeEvent = function () {
                    var t = this;
                    this._isShown
                        ? e(this._element).on("keydown.dismiss.bs.modal", function (e) {
                              t._config.keyboard && 27 === e.which ? (e.preventDefault(), t.hide()) : t._config.keyboard || 27 !== e.which || t._triggerBackdropTransition();
                          })
                        : this._isShown || e(this._element).off("keydown.dismiss.bs.modal");
                }),
                (n._setResizeEvent = function () {
                    var t = this;
                    this._isShown
                        ? e(window).on("resize.bs.modal", function (e) {
                              return t.handleUpdate(e);
                          })
                        : e(window).off("resize.bs.modal");
                }),
                (n._hideModal = function () {
                    var t = this;
                    (this._element.style.display = "none"),
                        this._element.setAttribute("aria-hidden", !0),
                        this._element.removeAttribute("aria-modal"),
                        (this._isTransitioning = !1),
                        this._showBackdrop(function () {
                            e(document.body).removeClass("modal-open"), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger("hidden.bs.modal");
                        });
                }),
                (n._removeBackdrop = function () {
                    this._backdrop && (e(this._backdrop).remove(), (this._backdrop = null));
                }),
                (n._showBackdrop = function (t) {
                    var n = this,
                        i = e(this._element).hasClass("fade") ? "fade" : "";
                    if (this._isShown && this._config.backdrop) {
                        if (
                            ((this._backdrop = document.createElement("div")),
                            (this._backdrop.className = "modal-backdrop"),
                            i && this._backdrop.classList.add(i),
                            e(this._backdrop).appendTo(document.body),
                            e(this._element).on("click.dismiss.bs.modal", function (t) {
                                n._ignoreBackdropClick ? (n._ignoreBackdropClick = !1) : t.target === t.currentTarget && n._triggerBackdropTransition();
                            }),
                            i && c.reflow(this._backdrop),
                            e(this._backdrop).addClass("show"),
                            !t)
                        )
                            return;
                        if (!i) return void t();
                        var o = c.getTransitionDurationFromElement(this._backdrop);
                        e(this._backdrop).one(c.TRANSITION_END, t).emulateTransitionEnd(o);
                    } else if (!this._isShown && this._backdrop) {
                        e(this._backdrop).removeClass("show");
                        var s = function () {
                            n._removeBackdrop(), t && t();
                        };
                        if (e(this._element).hasClass("fade")) {
                            var r = c.getTransitionDurationFromElement(this._backdrop);
                            e(this._backdrop).one(c.TRANSITION_END, s).emulateTransitionEnd(r);
                        } else s();
                    } else t && t();
                }),
                (n._adjustDialog = function () {
                    var t = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
                }),
                (n._resetAdjustments = function () {
                    (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
                }),
                (n._checkScrollbar = function () {
                    var t = document.body.getBoundingClientRect();
                    (this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth), (this._scrollbarWidth = this._getScrollbarWidth());
                }),
                (n._setScrollbar = function () {
                    var t = this;
                    if (this._isBodyOverflowing) {
                        var n = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
                            i = [].slice.call(document.querySelectorAll(".sticky-top"));
                        e(n).each(function (n, i) {
                            var o = i.style.paddingRight,
                                s = e(i).css("padding-right");
                            e(i)
                                .data("padding-right", o)
                                .css("padding-right", parseFloat(s) + t._scrollbarWidth + "px");
                        }),
                            e(i).each(function (n, i) {
                                var o = i.style.marginRight,
                                    s = e(i).css("margin-right");
                                e(i)
                                    .data("margin-right", o)
                                    .css("margin-right", parseFloat(s) - t._scrollbarWidth + "px");
                            });
                        var o = document.body.style.paddingRight,
                            s = e(document.body).css("padding-right");
                        e(document.body)
                            .data("padding-right", o)
                            .css("padding-right", parseFloat(s) + this._scrollbarWidth + "px");
                    }
                    e(document.body).addClass("modal-open");
                }),
                (n._resetScrollbar = function () {
                    var t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
                    e(t).each(function (t, n) {
                        var i = e(n).data("padding-right");
                        e(n).removeData("padding-right"), (n.style.paddingRight = i || "");
                    });
                    var n = [].slice.call(document.querySelectorAll(".sticky-top"));
                    e(n).each(function (t, n) {
                        var i = e(n).data("margin-right");
                        "undefined" != typeof i && e(n).css("margin-right", i).removeData("margin-right");
                    });
                    var i = e(document.body).data("padding-right");
                    e(document.body).removeData("padding-right"), (document.body.style.paddingRight = i || "");
                }),
                (n._getScrollbarWidth = function () {
                    var t = document.createElement("div");
                    (t.className = "modal-scrollbar-measure"), document.body.appendChild(t);
                    var e = t.getBoundingClientRect().width - t.clientWidth;
                    return document.body.removeChild(t), e;
                }),
                (t._jQueryInterface = function (n, i) {
                    return this.each(function () {
                        var o = e(this).data("bs.modal"),
                            s = a(a(a({}, x), e(this).data()), "object" == typeof n && n ? n : {});
                        if ((o || ((o = new t(this, s)), e(this).data("bs.modal", o)), "string" == typeof n)) {
                            if ("undefined" == typeof o[n]) throw new TypeError('No method named "' + n + '"');
                            o[n](i);
                        } else s.show && o.show(i);
                    });
                }),
                o(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.0";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return x;
                        },
                    },
                ]),
                t
            );
        })();
    e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
        var n,
            i = this,
            o = c.getSelectorFromElement(this);
        o && (n = document.querySelector(o));
        var s = e(n).data("bs.modal") ? "toggle" : a(a({}, e(n).data()), e(this).data());
        ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
        var r = e(n).one("show.bs.modal", function (t) {
            t.isDefaultPrevented() ||
                r.one("hidden.bs.modal", function () {
                    e(i).is(":visible") && i.focus();
                });
        });
        R._jQueryInterface.call(e(n), s, this);
    }),
        (e.fn.modal = R._jQueryInterface),
        (e.fn.modal.Constructor = R),
        (e.fn.modal.noConflict = function () {
            return (e.fn.modal = P), R._jQueryInterface;
        });
    var q = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        F = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: [],
        },
        Q = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        B = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    function H(t, e, n) {
        if (0 === t.length) return t;
        if (n && "function" == typeof n) return n(t);
        for (
            var i = new window.DOMParser().parseFromString(t, "text/html"),
                o = Object.keys(e),
                s = [].slice.call(i.body.querySelectorAll("*")),
                r = function (t, n) {
                    var i = s[t],
                        r = i.nodeName.toLowerCase();
                    if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                    var a = [].slice.call(i.attributes),
                        l = [].concat(e["*"] || [], e[r] || []);
                    a.forEach(function (t) {
                        (function (t, e) {
                            var n = t.nodeName.toLowerCase();
                            if (-1 !== e.indexOf(n)) return -1 === q.indexOf(n) || Boolean(t.nodeValue.match(Q) || t.nodeValue.match(B));
                            for (
                                var i = e.filter(function (t) {
                                        return t instanceof RegExp;
                                    }),
                                    o = 0,
                                    s = i.length;
                                o < s;
                                o++
                            )
                                if (n.match(i[o])) return !0;
                            return !1;
                        })(t, l) || i.removeAttribute(t.nodeName);
                    });
                },
                a = 0,
                l = s.length;
            a < l;
            a++
        )
            r(a);
        return i.body.innerHTML;
    }
    var U = "tooltip",
        M = e.fn[U],
        W = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        V = ["sanitize", "whiteList", "sanitizeFn"],
        z = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)",
        },
        K = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
        X = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: F,
            popperConfig: null,
        },
        Y = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip",
        },
        $ = (function () {
            function t(t, e) {
                if ("undefined" == typeof n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                (this._isEnabled = !0), (this._timeout = 0), (this._hoverState = ""), (this._activeTrigger = {}), (this._popper = null), (this.element = t), (this.config = this._getConfig(e)), (this.tip = null), this._setListeners();
            }
            var i = t.prototype;
            return (
                (i.enable = function () {
                    this._isEnabled = !0;
                }),
                (i.disable = function () {
                    this._isEnabled = !1;
                }),
                (i.toggleEnabled = function () {
                    this._isEnabled = !this._isEnabled;
                }),
                (i.toggle = function (t) {
                    if (this._isEnabled)
                        if (t) {
                            var n = this.constructor.DATA_KEY,
                                i = e(t.currentTarget).data(n);
                            i || ((i = new this.constructor(t.currentTarget, this._getDelegateConfig())), e(t.currentTarget).data(n, i)),
                                (i._activeTrigger.click = !i._activeTrigger.click),
                                i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
                        } else {
                            if (e(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
                            this._enter(null, this);
                        }
                }),
                (i.dispose = function () {
                    clearTimeout(this._timeout),
                        e.removeData(this.element, this.constructor.DATA_KEY),
                        e(this.element).off(this.constructor.EVENT_KEY),
                        e(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler),
                        this.tip && e(this.tip).remove(),
                        (this._isEnabled = null),
                        (this._timeout = null),
                        (this._hoverState = null),
                        (this._activeTrigger = null),
                        this._popper && this._popper.destroy(),
                        (this._popper = null),
                        (this.element = null),
                        (this.config = null),
                        (this.tip = null);
                }),
                (i.show = function () {
                    var t = this;
                    if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
                    var i = e.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        e(this.element).trigger(i);
                        var o = c.findShadowRoot(this.element),
                            s = e.contains(null !== o ? o : this.element.ownerDocument.documentElement, this.element);
                        if (i.isDefaultPrevented() || !s) return;
                        var r = this.getTipElement(),
                            a = c.getUID(this.constructor.NAME);
                        r.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && e(r).addClass("fade");
                        var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                            h = this._getAttachment(l);
                        this.addAttachmentClass(h);
                        var u = this._getContainer();
                        e(r).data(this.constructor.DATA_KEY, this),
                            e.contains(this.element.ownerDocument.documentElement, this.tip) || e(r).appendTo(u),
                            e(this.element).trigger(this.constructor.Event.INSERTED),
                            (this._popper = new n(this.element, r, this._getPopperConfig(h))),
                            e(r).addClass("show"),
                            "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);
                        var d = function () {
                            t.config.animation && t._fixTransition();
                            var n = t._hoverState;
                            (t._hoverState = null), e(t.element).trigger(t.constructor.Event.SHOWN), "out" === n && t._leave(null, t);
                        };
                        if (e(this.tip).hasClass("fade")) {
                            var f = c.getTransitionDurationFromElement(this.tip);
                            e(this.tip).one(c.TRANSITION_END, d).emulateTransitionEnd(f);
                        } else d();
                    }
                }),
                (i.hide = function (t) {
                    var n = this,
                        i = this.getTipElement(),
                        o = e.Event(this.constructor.Event.HIDE),
                        s = function () {
                            "show" !== n._hoverState && i.parentNode && i.parentNode.removeChild(i),
                                n._cleanTipClass(),
                                n.element.removeAttribute("aria-describedby"),
                                e(n.element).trigger(n.constructor.Event.HIDDEN),
                                null !== n._popper && n._popper.destroy(),
                                t && t();
                        };
                    if ((e(this.element).trigger(o), !o.isDefaultPrevented())) {
                        if (
                            (e(i).removeClass("show"),
                            "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop),
                            (this._activeTrigger.click = !1),
                            (this._activeTrigger.focus = !1),
                            (this._activeTrigger.hover = !1),
                            e(this.tip).hasClass("fade"))
                        ) {
                            var r = c.getTransitionDurationFromElement(i);
                            e(i).one(c.TRANSITION_END, s).emulateTransitionEnd(r);
                        } else s();
                        this._hoverState = "";
                    }
                }),
                (i.update = function () {
                    null !== this._popper && this._popper.scheduleUpdate();
                }),
                (i.isWithContent = function () {
                    return Boolean(this.getTitle());
                }),
                (i.addAttachmentClass = function (t) {
                    e(this.getTipElement()).addClass("bs-tooltip-" + t);
                }),
                (i.getTipElement = function () {
                    return (this.tip = this.tip || e(this.config.template)[0]), this.tip;
                }),
                (i.setContent = function () {
                    var t = this.getTipElement();
                    this.setElementContent(e(t.querySelectorAll(".tooltip-inner")), this.getTitle()), e(t).removeClass("fade show");
                }),
                (i.setElementContent = function (t, n) {
                    "object" != typeof n || (!n.nodeType && !n.jquery)
                        ? this.config.html
                            ? (this.config.sanitize && (n = H(n, this.config.whiteList, this.config.sanitizeFn)), t.html(n))
                            : t.text(n)
                        : this.config.html
                        ? e(n).parent().is(t) || t.empty().append(n)
                        : t.text(e(n).text());
                }),
                (i.getTitle = function () {
                    var t = this.element.getAttribute("data-original-title");
                    return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
                }),
                (i._getPopperConfig = function (t) {
                    var e = this;
                    return a(
                        a(
                            {},
                            {
                                placement: t,
                                modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: ".arrow" }, preventOverflow: { boundariesElement: this.config.boundary } },
                                onCreate: function (t) {
                                    t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
                                },
                                onUpdate: function (t) {
                                    return e._handlePopperPlacementChange(t);
                                },
                            }
                        ),
                        this.config.popperConfig
                    );
                }),
                (i._getOffset = function () {
                    var t = this,
                        e = {};
                    return (
                        "function" == typeof this.config.offset
                            ? (e.fn = function (e) {
                                  return (e.offsets = a(a({}, e.offsets), t.config.offset(e.offsets, t.element) || {})), e;
                              })
                            : (e.offset = this.config.offset),
                        e
                    );
                }),
                (i._getContainer = function () {
                    return !1 === this.config.container ? document.body : c.isElement(this.config.container) ? e(this.config.container) : e(document).find(this.config.container);
                }),
                (i._getAttachment = function (t) {
                    return K[t.toUpperCase()];
                }),
                (i._setListeners = function () {
                    var t = this;
                    this.config.trigger.split(" ").forEach(function (n) {
                        if ("click" === n)
                            e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
                                return t.toggle(e);
                            });
                        else if ("manual" !== n) {
                            var i = "hover" === n ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                o = "hover" === n ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                            e(t.element)
                                .on(i, t.config.selector, function (e) {
                                    return t._enter(e);
                                })
                                .on(o, t.config.selector, function (e) {
                                    return t._leave(e);
                                });
                        }
                    }),
                        (this._hideModalHandler = function () {
                            t.element && t.hide();
                        }),
                        e(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler),
                        this.config.selector ? (this.config = a(a({}, this.config), {}, { trigger: "manual", selector: "" })) : this._fixTitle();
                }),
                (i._fixTitle = function () {
                    var t = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
                }),
                (i._enter = function (t, n) {
                    var i = this.constructor.DATA_KEY;
                    (n = n || e(t.currentTarget).data(i)) || ((n = new this.constructor(t.currentTarget, this._getDelegateConfig())), e(t.currentTarget).data(i, n)),
                        t && (n._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
                        e(n.getTipElement()).hasClass("show") || "show" === n._hoverState
                            ? (n._hoverState = "show")
                            : (clearTimeout(n._timeout),
                              (n._hoverState = "show"),
                              n.config.delay && n.config.delay.show
                                  ? (n._timeout = setTimeout(function () {
                                        "show" === n._hoverState && n.show();
                                    }, n.config.delay.show))
                                  : n.show());
                }),
                (i._leave = function (t, n) {
                    var i = this.constructor.DATA_KEY;
                    (n = n || e(t.currentTarget).data(i)) || ((n = new this.constructor(t.currentTarget, this._getDelegateConfig())), e(t.currentTarget).data(i, n)),
                        t && (n._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1),
                        n._isWithActiveTrigger() ||
                            (clearTimeout(n._timeout),
                            (n._hoverState = "out"),
                            n.config.delay && n.config.delay.hide
                                ? (n._timeout = setTimeout(function () {
                                      "out" === n._hoverState && n.hide();
                                  }, n.config.delay.hide))
                                : n.hide());
                }),
                (i._isWithActiveTrigger = function () {
                    for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
                    return !1;
                }),
                (i._getConfig = function (t) {
                    var n = e(this.element).data();
                    return (
                        Object.keys(n).forEach(function (t) {
                            -1 !== V.indexOf(t) && delete n[t];
                        }),
                        "number" == typeof (t = a(a(a({}, this.constructor.Default), n), "object" == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }),
                        "number" == typeof t.title && (t.title = t.title.toString()),
                        "number" == typeof t.content && (t.content = t.content.toString()),
                        c.typeCheckConfig(U, t, this.constructor.DefaultType),
                        t.sanitize && (t.template = H(t.template, t.whiteList, t.sanitizeFn)),
                        t
                    );
                }),
                (i._getDelegateConfig = function () {
                    var t = {};
                    if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                    return t;
                }),
                (i._cleanTipClass = function () {
                    var t = e(this.getTipElement()),
                        n = t.attr("class").match(W);
                    null !== n && n.length && t.removeClass(n.join(""));
                }),
                (i._handlePopperPlacementChange = function (t) {
                    (this.tip = t.instance.popper), this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
                }),
                (i._fixTransition = function () {
                    var t = this.getTipElement(),
                        n = this.config.animation;
                    null === t.getAttribute("x-placement") && (e(t).removeClass("fade"), (this.config.animation = !1), this.hide(), this.show(), (this.config.animation = n));
                }),
                (t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = e(this).data("bs.tooltip"),
                            o = "object" == typeof n && n;
                        if ((i || !/dispose|hide/.test(n)) && (i || ((i = new t(this, o)), e(this).data("bs.tooltip", i)), "string" == typeof n)) {
                            if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]();
                        }
                    });
                }),
                o(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.0";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return X;
                        },
                    },
                    {
                        key: "NAME",
                        get: function () {
                            return U;
                        },
                    },
                    {
                        key: "DATA_KEY",
                        get: function () {
                            return "bs.tooltip";
                        },
                    },
                    {
                        key: "Event",
                        get: function () {
                            return Y;
                        },
                    },
                    {
                        key: "EVENT_KEY",
                        get: function () {
                            return ".bs.tooltip";
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return z;
                        },
                    },
                ]),
                t
            );
        })();
    (e.fn[U] = $._jQueryInterface),
        (e.fn[U].Constructor = $),
        (e.fn[U].noConflict = function () {
            return (e.fn[U] = M), $._jQueryInterface;
        });
    var J = "popover",
        G = e.fn[J],
        Z = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        tt = a(a({}, $.Default), {}, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
        et = a(a({}, $.DefaultType), {}, { content: "(string|element|function)" }),
        nt = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover",
        },
        it = (function (t) {
            var n, i;
            function s() {
                return t.apply(this, arguments) || this;
            }
            (i = t), ((n = s).prototype = Object.create(i.prototype)), (n.prototype.constructor = n), (n.__proto__ = i);
            var r = s.prototype;
            return (
                (r.isWithContent = function () {
                    return this.getTitle() || this._getContent();
                }),
                (r.addAttachmentClass = function (t) {
                    e(this.getTipElement()).addClass("bs-popover-" + t);
                }),
                (r.getTipElement = function () {
                    return (this.tip = this.tip || e(this.config.template)[0]), this.tip;
                }),
                (r.setContent = function () {
                    var t = e(this.getTipElement());
                    this.setElementContent(t.find(".popover-header"), this.getTitle());
                    var n = this._getContent();
                    "function" == typeof n && (n = n.call(this.element)), this.setElementContent(t.find(".popover-body"), n), t.removeClass("fade show");
                }),
                (r._getContent = function () {
                    return this.element.getAttribute("data-content") || this.config.content;
                }),
                (r._cleanTipClass = function () {
                    var t = e(this.getTipElement()),
                        n = t.attr("class").match(Z);
                    null !== n && n.length > 0 && t.removeClass(n.join(""));
                }),
                (s._jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = e(this).data("bs.popover"),
                            i = "object" == typeof t ? t : null;
                        if ((n || !/dispose|hide/.test(t)) && (n || ((n = new s(this, i)), e(this).data("bs.popover", n)), "string" == typeof t)) {
                            if ("undefined" == typeof n[t]) throw new TypeError('No method named "' + t + '"');
                            n[t]();
                        }
                    });
                }),
                o(s, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.0";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return tt;
                        },
                    },
                    {
                        key: "NAME",
                        get: function () {
                            return J;
                        },
                    },
                    {
                        key: "DATA_KEY",
                        get: function () {
                            return "bs.popover";
                        },
                    },
                    {
                        key: "Event",
                        get: function () {
                            return nt;
                        },
                    },
                    {
                        key: "EVENT_KEY",
                        get: function () {
                            return ".bs.popover";
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return et;
                        },
                    },
                ]),
                s
            );
        })($);
    (e.fn[J] = it._jQueryInterface),
        (e.fn[J].Constructor = it),
        (e.fn[J].noConflict = function () {
            return (e.fn[J] = G), it._jQueryInterface;
        });
    var ot = "scrollspy",
        st = e.fn[ot],
        rt = { offset: 10, method: "auto", target: "" },
        at = { offset: "number", method: "string", target: "(string|element)" },
        lt = (function () {
            function t(t, n) {
                var i = this;
                (this._element = t),
                    (this._scrollElement = "BODY" === t.tagName ? window : t),
                    (this._config = this._getConfig(n)),
                    (this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item"),
                    (this._offsets = []),
                    (this._targets = []),
                    (this._activeTarget = null),
                    (this._scrollHeight = 0),
                    e(this._scrollElement).on("scroll.bs.scrollspy", function (t) {
                        return i._process(t);
                    }),
                    this.refresh(),
                    this._process();
            }
            var n = t.prototype;
            return (
                (n.refresh = function () {
                    var t = this,
                        n = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                        i = "auto" === this._config.method ? n : this._config.method,
                        o = "position" === i ? this._getScrollTop() : 0;
                    (this._offsets = []),
                        (this._targets = []),
                        (this._scrollHeight = this._getScrollHeight()),
                        [].slice
                            .call(document.querySelectorAll(this._selector))
                            .map(function (t) {
                                var n,
                                    s = c.getSelectorFromElement(t);
                                if ((s && (n = document.querySelector(s)), n)) {
                                    var r = n.getBoundingClientRect();
                                    if (r.width || r.height) return [e(n)[i]().top + o, s];
                                }
                                return null;
                            })
                            .filter(function (t) {
                                return t;
                            })
                            .sort(function (t, e) {
                                return t[0] - e[0];
                            })
                            .forEach(function (e) {
                                t._offsets.push(e[0]), t._targets.push(e[1]);
                            });
                }),
                (n.dispose = function () {
                    e.removeData(this._element, "bs.scrollspy"),
                        e(this._scrollElement).off(".bs.scrollspy"),
                        (this._element = null),
                        (this._scrollElement = null),
                        (this._config = null),
                        (this._selector = null),
                        (this._offsets = null),
                        (this._targets = null),
                        (this._activeTarget = null),
                        (this._scrollHeight = null);
                }),
                (n._getConfig = function (t) {
                    if ("string" != typeof (t = a(a({}, rt), "object" == typeof t && t ? t : {})).target && c.isElement(t.target)) {
                        var n = e(t.target).attr("id");
                        n || ((n = c.getUID(ot)), e(t.target).attr("id", n)), (t.target = "#" + n);
                    }
                    return c.typeCheckConfig(ot, t, at), t;
                }),
                (n._getScrollTop = function () {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
                }),
                (n._getScrollHeight = function () {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
                }),
                (n._getOffsetHeight = function () {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
                }),
                (n._process = function () {
                    var t = 70 + this._getScrollTop() + this._config.offset,
                        e = this._getScrollHeight(),
                        n = this._config.offset + e - this._getOffsetHeight();
                    if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i);
                    } else {
                        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return (this._activeTarget = null), void this._clear();
                        for (var o = this._offsets.length; o--; ) {
                            this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
                        }
                    }
                }),
                (n._activate = function (t) {
                    (this._activeTarget = t), this._clear();
                    var n = this._selector.split(",").map(function (e) {
                            return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
                        }),
                        i = e([].slice.call(document.querySelectorAll(n.join(","))));
                    i.hasClass("dropdown-item")
                        ? (i.closest(".dropdown").find(".dropdown-toggle").addClass("active"), i.addClass("active"))
                        : (i.addClass("active"), i.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), i.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")),
                        e(this._scrollElement).trigger("activate.bs.scrollspy", { relatedTarget: t });
                }),
                (n._clear = function () {
                    [].slice
                        .call(document.querySelectorAll(this._selector))
                        .filter(function (t) {
                            return t.classList.contains("active");
                        })
                        .forEach(function (t) {
                            return t.classList.remove("active");
                        });
                }),
                (t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = e(this).data("bs.scrollspy");
                        if ((i || ((i = new t(this, "object" == typeof n && n)), e(this).data("bs.scrollspy", i)), "string" == typeof n)) {
                            if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]();
                        }
                    });
                }),
                o(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.0";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return rt;
                        },
                    },
                ]),
                t
            );
        })();
    e(window).on("load.bs.scrollspy.data-api", function () {
        for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = t.length; n--; ) {
            var i = e(t[n]);
            lt._jQueryInterface.call(i, i.data());
        }
    }),
        (e.fn[ot] = lt._jQueryInterface),
        (e.fn[ot].Constructor = lt),
        (e.fn[ot].noConflict = function () {
            return (e.fn[ot] = st), lt._jQueryInterface;
        });
    var ct = e.fn.tab,
        ht = (function () {
            function t(t) {
                this._element = t;
            }
            var n = t.prototype;
            return (
                (n.show = function () {
                    var t = this;
                    if (!((this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass("active")) || e(this._element).hasClass("disabled"))) {
                        var n,
                            i,
                            o = e(this._element).closest(".nav, .list-group")[0],
                            s = c.getSelectorFromElement(this._element);
                        if (o) {
                            var r = "UL" === o.nodeName || "OL" === o.nodeName ? "> li > .active" : ".active";
                            i = (i = e.makeArray(e(o).find(r)))[i.length - 1];
                        }
                        var a = e.Event("hide.bs.tab", { relatedTarget: this._element }),
                            l = e.Event("show.bs.tab", { relatedTarget: i });
                        if ((i && e(i).trigger(a), e(this._element).trigger(l), !l.isDefaultPrevented() && !a.isDefaultPrevented())) {
                            s && (n = document.querySelector(s)), this._activate(this._element, o);
                            var h = function () {
                                var n = e.Event("hidden.bs.tab", { relatedTarget: t._element }),
                                    o = e.Event("shown.bs.tab", { relatedTarget: i });
                                e(i).trigger(n), e(t._element).trigger(o);
                            };
                            n ? this._activate(n, n.parentNode, h) : h();
                        }
                    }
                }),
                (n.dispose = function () {
                    e.removeData(this._element, "bs.tab"), (this._element = null);
                }),
                (n._activate = function (t, n, i) {
                    var o = this,
                        s = (!n || ("UL" !== n.nodeName && "OL" !== n.nodeName) ? e(n).children(".active") : e(n).find("> li > .active"))[0],
                        r = i && s && e(s).hasClass("fade"),
                        a = function () {
                            return o._transitionComplete(t, s, i);
                        };
                    if (s && r) {
                        var l = c.getTransitionDurationFromElement(s);
                        e(s).removeClass("show").one(c.TRANSITION_END, a).emulateTransitionEnd(l);
                    } else a();
                }),
                (n._transitionComplete = function (t, n, i) {
                    if (n) {
                        e(n).removeClass("active");
                        var o = e(n.parentNode).find("> .dropdown-menu .active")[0];
                        o && e(o).removeClass("active"), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1);
                    }
                    if (
                        (e(t).addClass("active"),
                        "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
                        c.reflow(t),
                        t.classList.contains("fade") && t.classList.add("show"),
                        t.parentNode && e(t.parentNode).hasClass("dropdown-menu"))
                    ) {
                        var s = e(t).closest(".dropdown")[0];
                        if (s) {
                            var r = [].slice.call(s.querySelectorAll(".dropdown-toggle"));
                            e(r).addClass("active");
                        }
                        t.setAttribute("aria-expanded", !0);
                    }
                    i && i();
                }),
                (t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = e(this),
                            o = i.data("bs.tab");
                        if ((o || ((o = new t(this)), i.data("bs.tab", o)), "string" == typeof n)) {
                            if ("undefined" == typeof o[n]) throw new TypeError('No method named "' + n + '"');
                            o[n]();
                        }
                    });
                }),
                o(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.0";
                        },
                    },
                ]),
                t
            );
        })();
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (t) {
        t.preventDefault(), ht._jQueryInterface.call(e(this), "show");
    }),
        (e.fn.tab = ht._jQueryInterface),
        (e.fn.tab.Constructor = ht),
        (e.fn.tab.noConflict = function () {
            return (e.fn.tab = ct), ht._jQueryInterface;
        });
    var ut = e.fn.toast,
        dt = { animation: "boolean", autohide: "boolean", delay: "number" },
        ft = { animation: !0, autohide: !0, delay: 500 },
        gt = (function () {
            function t(t, e) {
                (this._element = t), (this._config = this._getConfig(e)), (this._timeout = null), this._setListeners();
            }
            var n = t.prototype;
            return (
                (n.show = function () {
                    var t = this,
                        n = e.Event("show.bs.toast");
                    if ((e(this._element).trigger(n), !n.isDefaultPrevented())) {
                        this._config.animation && this._element.classList.add("fade");
                        var i = function () {
                            t._element.classList.remove("showing"),
                                t._element.classList.add("show"),
                                e(t._element).trigger("shown.bs.toast"),
                                t._config.autohide &&
                                    (t._timeout = setTimeout(function () {
                                        t.hide();
                                    }, t._config.delay));
                        };
                        if ((this._element.classList.remove("hide"), c.reflow(this._element), this._element.classList.add("showing"), this._config.animation)) {
                            var o = c.getTransitionDurationFromElement(this._element);
                            e(this._element).one(c.TRANSITION_END, i).emulateTransitionEnd(o);
                        } else i();
                    }
                }),
                (n.hide = function () {
                    if (this._element.classList.contains("show")) {
                        var t = e.Event("hide.bs.toast");
                        e(this._element).trigger(t), t.isDefaultPrevented() || this._close();
                    }
                }),
                (n.dispose = function () {
                    clearTimeout(this._timeout),
                        (this._timeout = null),
                        this._element.classList.contains("show") && this._element.classList.remove("show"),
                        e(this._element).off("click.dismiss.bs.toast"),
                        e.removeData(this._element, "bs.toast"),
                        (this._element = null),
                        (this._config = null);
                }),
                (n._getConfig = function (t) {
                    return (t = a(a(a({}, ft), e(this._element).data()), "object" == typeof t && t ? t : {})), c.typeCheckConfig("toast", t, this.constructor.DefaultType), t;
                }),
                (n._setListeners = function () {
                    var t = this;
                    e(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', function () {
                        return t.hide();
                    });
                }),
                (n._close = function () {
                    var t = this,
                        n = function () {
                            t._element.classList.add("hide"), e(t._element).trigger("hidden.bs.toast");
                        };
                    if ((this._element.classList.remove("show"), this._config.animation)) {
                        var i = c.getTransitionDurationFromElement(this._element);
                        e(this._element).one(c.TRANSITION_END, n).emulateTransitionEnd(i);
                    } else n();
                }),
                (t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = e(this),
                            o = i.data("bs.toast");
                        if ((o || ((o = new t(this, "object" == typeof n && n)), i.data("bs.toast", o)), "string" == typeof n)) {
                            if ("undefined" == typeof o[n]) throw new TypeError('No method named "' + n + '"');
                            o[n](this);
                        }
                    });
                }),
                o(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.0";
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return dt;
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return ft;
                        },
                    },
                ]),
                t
            );
        })();
    (e.fn.toast = gt._jQueryInterface),
        (e.fn.toast.Constructor = gt),
        (e.fn.toast.noConflict = function () {
            return (e.fn.toast = ut), gt._jQueryInterface;
        }),
        (t.Alert = d),
        (t.Button = g),
        (t.Carousel = E),
        (t.Collapse = D),
        (t.Dropdown = j),
        (t.Modal = R),
        (t.Popover = it),
        (t.Scrollspy = lt),
        (t.Tab = ht),
        (t.Toast = gt),
        (t.Tooltip = $),
        (t.Util = c),
        Object.defineProperty(t, "__esModule", { value: !0 });
});
document.addEventListener("DOMContentLoaded", function (event) {
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf("/") + 1);
    setTimeout(function () {
        if (filename != "thank-you.php") {
            $("#enqModal").modal("show");
        }
    }, 3000);
    $(".carousel-inner .carousel-item").first().addClass("active");
    $("#pills-tab-pricetable .nav-link").first().addClass("active");
    $("#pills-tabpriceContent .tab-pane").first().addClass("show active");
    $("#pills-tab-floorplan .nav-link").first().addClass("active");
    $("#pills-tabfloorplanContent .tab-pane").first().addClass("show active");
    $("#pills-tabami .nav-link").first().addClass("active");
    $("#pills-tabamiContent .tab-pane").first().addClass("show active");
    $("#pills-tabgal .nav-link").first().addClass("active");
    $("#pills-tabgalContent .tab-pane").first().addClass("show active");
    $("#pills-tabconn .nav-link").first().addClass("active");
    $("#pills-tabconnContent .tab-pane").first().addClass("show active");
    var ititokens = ["f07c285df5e90b", "9ca8f7464c856c", "a03d934c456079", "979943ad68a76c", "4c36a3f0e333cd", "9c9ee31c085dab", "dd04bb54a4f2e9", "783f3602575ac3", "07910814ff4d41", "2d79acd8d26667"];
    var itikey = Math.floor(Math.random() * ititokens.length);

  
    var interval;
    $(document).on("mousemove keyup keypress", function () {
        clearTimeout(interval);
        var url = window.location.pathname;
        var filename = url.substring(url.lastIndexOf("/") + 1);
        if (filename != "thank-you.php") {
            settimeout();
        }
    });
    function settimeout() {
        interval = setTimeout(function () {
            $("#enqModal").modal("show");
        }, 30000);
    }
    $(".ami-2").owlCarousel({ autoplay: !0, lazyLoad: !0, loop: !1, rewind: !0, margin: 10, responsiveClass: !0, smartSpeed: 800, nav: !0, dots: !1, responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 5 } } });
	
    $(".ami-3").owlCarousel({ autoplay: !0, lazyLoad: !0, loop: !1, rewind: !0, margin: 0, responsiveClass: !0, smartSpeed: 1000, nav: !0, dots: !1, responsive: { 0: { items: 1, nav: !1 }, 320: { items: 1 }, 768: { items: 3, mouseDrag: !1 } } });
	
    $(".gal-3").owlCarousel({ autoplay: !0, lazyLoad: !0, loop: !1, rewind: !0, margin: 20, responsiveClass: !0, smartSpeed: 1500, nav: !0, dots: !1, items: 1 });
    $(".loc-con").owlCarousel({ autoplay: !0, lazyLoad: !0, loop: !1, rewind: !0, margin: 0, responsiveClass: !0, smartSpeed: 800, nav: !0, dots: !1, responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 4 } } });
});
$(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
});
$(document).on("click", ".enqModal", function () {
    var Type = $(this).data("form");
    var Title = $(this).data("title");
    var Btn = $(this).data("btn");
    if ($(this).data("redirect")) {
        var RedirectCookie = $(this).data("redirect");
        if (RedirectCookie == "brochure") {
            var RedirectFileCookie = $(this).data("redirect-file");
        }
    } else {
        var RedirectCookie = "enquire";
    }
    var Enquiry = $(this).data("enquiry");
    $("#enqModal .modal-title").text(Title);
    $("#enqModal .micro-form-btn").text(Btn);
    $("#enqModal #enquiredfor").val(Enquiry);
    if (Type == "sm" || Type == "md" || Type == "lg") {
        $("#enqModal .modal-head").removeClass("d-none");
        $("#enqModal .modal-logo, #enqModal .form-md, #enqModal .form-lg, #enqModal .modal-call-btn, .auto-offer").addClass("d-none");
    }
    if (Type == "sm") {
        $("#enqModal .form-md .micro-form-field").removeAttr("required", "");
    }
    if (Type == "md") {
        $("#enqModal .modal-head, #enqModal .form-md").removeClass("d-none");
        $("#enqModal .form-lg").addClass("d-none");
        $("#enqModal .form-md .micro-form-field").attr("required", "");
    }
    if (Type == "lg") {
        $("#enqModal .modal-head, #enqModal .form-md, #enqModal .form-lg").removeClass("d-none");
        $("#enqModal .form-md .micro-form-field").attr("required", "");
    }
    if (RedirectCookie) {
        setCookie("redirectCookie", RedirectCookie);
        if (RedirectCookie == "brochure") {
            setCookie("redirectFileCookie", RedirectFileCookie);
        }
    }
});
$(".more").click(function (e) {
    e.preventDefault();
    $(this)
        .text(function (i, t) {
            return t == "Read less" ? "Read more" : "Read less";
        })
        .prev(".more-cont")
        .slideToggle();
});
function setCookie(cname, cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
