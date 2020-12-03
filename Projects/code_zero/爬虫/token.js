/*
 * @Author: aleimu
 * @Date: 2020-12-03 22:34:28
 * @Description: file content
 */
!function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
        : t(e)
}("undefined" != typeof window ? window : this, function (j, t) {
    var u = []
        , f = j.document
        , c = u.slice
        , v = u.concat
        , s = u.push
        , l = u.indexOf
        , n = {}
        , d = n.toString
        , y = n.hasOwnProperty
        , k = {}
        , e = "1.12.4"
        , C = function (e, t) {
            return new C.fn.init(e, t)
        }
        , i = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
        , r = /^-ms-/
        , o = /-([\da-z])/gi
        , a = function (e, t) {
            return t.toUpperCase()
        };
    function g(e) {
        var t = !!e && "length" in e && e.length
            , n = C.type(e);
        return "function" !== n && !C.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    C.fn = C.prototype = {
        jquery: e,
        constructor: C,
        selector: "",
        length: 0,
        toArray: function () {
            return c.call(this)
        },
        get: function (e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : c.call(this)
        },
        pushStack: function (e) {
            var t = C.merge(this.constructor(), e);
            return t.prevObject = this,
                t.context = this.context,
                t
        },
        each: function (e) {
            return C.each(this, e)
        },
        map: function (n) {
            return this.pushStack(C.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function () {
            return this.pushStack(c.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length
                , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: u.sort,
        splice: u.splice
    },
        C.extend = C.fn.extend = function () {
            var e, t, n, i, r, o, a = arguments[0] || {}, s = 1, l = arguments.length, d = !1;
            for ("boolean" == typeof a && (d = a,
                a = arguments[s] || {},
                s++),
                "object" == typeof a || C.isFunction(a) || (a = {}),
                s === l && (a = this,
                    s--); s < l; s++)
                if (null != (r = arguments[s]))
                    for (i in r)
                        e = a[i],
                            a !== (n = r[i]) && (d && n && (C.isPlainObject(n) || (t = C.isArray(n))) ? (o = t ? (t = !1,
                                e && C.isArray(e) ? e : []) : e && C.isPlainObject(e) ? e : {},
                                a[i] = C.extend(d, o, n)) : void 0 !== n && (a[i] = n));
            return a
        }
        ,
        C.extend({
            expando: "jQuery" + (e + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e)
            },
            noop: function () { },
            isFunction: function (e) {
                return "function" === C.type(e)
            },
            isArray: Array.isArray || function (e) {
                return "array" === C.type(e)
            }
            ,
            isWindow: function (e) {
                return null != e && e == e.window
            },
            isNumeric: function (e) {
                var t = e && e.toString();
                return !C.isArray(e) && 0 <= t - parseFloat(t) + 1
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            isPlainObject: function (e) {
                var t;
                if (!e || "object" !== C.type(e) || e.nodeType || C.isWindow(e))
                    return !1;
                try {
                    if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (u) {
                    return !1
                }
                if (!k.ownFirst)
                    for (t in e)
                        return y.call(e, t);
                for (t in e)
                    ;
                return void 0 === t || y.call(e, t)
            },
            type: function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[d.call(e)] || "object" : typeof e
            },
            globalEval: function (e) {
                e && C.trim(e) && (j.execScript || function (e) {
                    j.eval.call(j, e)
                }
                )(e)
            },
            camelCase: function (e) {
                return e.replace(r, "ms-").replace(o, a)
            },
            nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function (e, t) {
                var n, i = 0;
                if (g(e))
                    for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                        ;
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i]))
                            break;
                return e
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(i, "")
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (g(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)),
                    n
            },
            inArray: function (e, t, n) {
                var i;
                if (t) {
                    if (l)
                        return l.call(t, e, n);
                    for (i = t.length,
                        n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                        if (n in t && t[n] === e)
                            return n
                }
                return -1
            },
            merge: function (e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n;)
                    e[r++] = t[i++];
                if (n != n)
                    for (; void 0 !== t[i];)
                        e[r++] = t[i++];
                return e.length = r,
                    e
            },
            grep: function (e, t, n) {
                for (var i = [], r = 0, o = e.length, a = !n; r < o; r++)
                    !t(e[r], r) !== a && i.push(e[r]);
                return i
            },
            map: function (e, t, n) {
                var i, r, o = 0, a = [];
                if (g(e))
                    for (i = e.length; o < i; o++)
                        null != (r = t(e[o], o, n)) && a.push(r);
                else
                    for (o in e)
                        null != (r = t(e[o], o, n)) && a.push(r);
                return v.apply([], a)
            },
            guid: 1,
            proxy: function (e, t) {
                var n, i, r;
                return "string" == typeof t && (r = e[t],
                    t = e,
                    e = r),
                    C.isFunction(e) ? (n = c.call(arguments, 2),
                        (i = function () {
                            return e.apply(t || this, n.concat(c.call(arguments)))
                        }
                        ).guid = e.guid = e.guid || C.guid++,
                        i) : void 0
            },
            now: function () {
                return +new Date
            },
            support: k
        }),
        "function" == typeof Symbol && (C.fn[Symbol.iterator] = u[Symbol.iterator]),
        C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            n["[object " + t + "]"] = t.toLowerCase()
        });
    var p = function (n) {
        var e, f, w, o, r, v, u, y, _, l, d, S, x, a, T, g, s, c, m, j = "sizzle" + 1 * new Date, b = n.document, k = 0, i = 0, C = re(), p = re(), A = re(), h = function (e, t) {
            return e === t && (d = !0),
                0
        }, P = {}.hasOwnProperty, t = [], O = t.pop, I = t.push, E = t.push, L = t.slice, N = function (e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, V = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", D = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", F = "\\[" + D + "*(" + M + ")(?:" + D + "*([*^$|!~]?=)" + D + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + D + "*\\]", H = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)", R = new RegExp(D + "+", "g"), B = new RegExp("^" + D + "+|((?:^|[^\\\\])(?:\\\\.)*)" + D + "+$", "g"), U = new RegExp("^" + D + "*," + D + "*"), W = new RegExp("^" + D + "*([>+~]|" + D + ")" + D + "*"), z = new RegExp("=" + D + "*([^\\]'\"]*?)" + D + "*\\]", "g"), q = new RegExp(H), J = new RegExp("^" + M + "$"), $ = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + F),
            PSEUDO: new RegExp("^" + H),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + D + "*(even|odd|(([+-]|)(\\d*)n|)" + D + "*(?:([+-]|)" + D + "*(\\d+)|))" + D + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + V + ")$", "i"),
            needsContext: new RegExp("^" + D + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + D + "*((?:-\\d)?\\d*)" + D + "*\\)|)(?=[^-]|$)", "i")
        }, Q = /^(?:input|select|textarea|button)$/i, K = /^h\d$/i, X = /^[^{]+\{\s*\[native \w/, G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Y = /[+~]/, Z = /'|\\/g, ee = new RegExp("\\\\([\\da-f]{1,6}" + D + "?|(" + D + ")|.)", "ig"), te = function (e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, ne = function () {
            S()
        };
        try {
            E.apply(t = L.call(b.childNodes), b.childNodes),
                t[b.childNodes.length].nodeType
        } catch (we) {
            E = {
                apply: t.length ? function (e, t) {
                    I.apply(e, L.call(t))
                }
                    : function (e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];)
                            ;
                        e.length = n - 1
                    }
            }
        }
        function ie(e, t, n, i) {
            var r, o, a, s, l, d, c, u, p = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (n = n || [],
                "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h)
                return n;
            if (!i && ((t ? t.ownerDocument || t : b) !== x && S(t),
                t = t || x,
                T)) {
                if (11 !== h && (d = G.exec(e)))
                    if (r = d[1]) {
                        if (9 === h) {
                            if (!(a = t.getElementById(r)))
                                return n;
                            if (a.id === r)
                                return n.push(a),
                                    n
                        } else if (p && (a = p.getElementById(r)) && m(t, a) && a.id === r)
                            return n.push(a),
                                n
                    } else {
                        if (d[2])
                            return E.apply(n, t.getElementsByTagName(e)),
                                n;
                        if ((r = d[3]) && f.getElementsByClassName && t.getElementsByClassName)
                            return E.apply(n, t.getElementsByClassName(r)),
                                n
                    }
                if (f.qsa && !A[e + " "] && (!g || !g.test(e))) {
                    if (1 !== h)
                        p = t,
                            u = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(Z, "\\$&") : t.setAttribute("id", s = j),
                            o = (c = v(e)).length,
                            l = J.test(s) ? "#" + s : "[id='" + s + "']"; o--;)
                            c[o] = l + " " + fe(c[o]);
                        u = c.join(","),
                            p = Y.test(e) && pe(t.parentNode) || t
                    }
                    if (u)
                        try {
                            return E.apply(n, p.querySelectorAll(u)),
                                n
                        } catch (C) { } finally {
                            s === j && t.removeAttribute("id")
                        }
                }
            }
            return y(e.replace(B, "$1"), t, n, i)
        }
        function re() {
            var n = [];
            return function i(e, t) {
                return n.push(e + " ") > w.cacheLength && delete i[n.shift()],
                    i[e + " "] = t
            }
        }
        function oe(e) {
            return e[j] = !0,
                e
        }
        function ae(e) {
            var t = x.createElement("div");
            try {
                return !!e(t)
            } catch (f) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                    t = null
            }
        }
        function se(e, t) {
            for (var n = e.split("|"), i = n.length; i--;)
                w.attrHandle[n[i]] = t
        }
        function le(e, t) {
            var n = t && e
                , i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function ce(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function ue(a) {
            return oe(function (o) {
                return o = +o,
                    oe(function (e, t) {
                        for (var n, i = a([], e.length, o), r = i.length; r--;)
                            e[n = i[r]] && (e[n] = !(t[n] = e[n]))
                    })
            })
        }
        function pe(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in f = ie.support = {},
            r = ie.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }
            ,
            S = ie.setDocument = function (e) {
                var t, n, i = e ? e.ownerDocument || e : b;
                return i !== x && 9 === i.nodeType && i.documentElement && (a = (x = i).documentElement,
                    T = !r(x),
                    (n = x.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ne, !1) : n.attachEvent && n.attachEvent("onunload", ne)),
                    f.attributes = ae(function (e) {
                        return e.className = "i",
                            !e.getAttribute("className")
                    }),
                    f.getElementsByTagName = ae(function (e) {
                        return e.appendChild(x.createComment("")),
                            !e.getElementsByTagName("*").length
                    }),
                    f.getElementsByClassName = X.test(x.getElementsByClassName),
                    f.getById = ae(function (e) {
                        return a.appendChild(e).id = j,
                            !x.getElementsByName || !x.getElementsByName(j).length
                    }),
                    f.getById ? (w.find.ID = function (e, t) {
                        if ("undefined" != typeof t.getElementById && T) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }
                        ,
                        w.filter.ID = function (e) {
                            var t = e.replace(ee, te);
                            return function (e) {
                                return e.getAttribute("id") === t
                            }
                        }
                    ) : (delete w.find.ID,
                        w.filter.ID = function (e) {
                            var n = e.replace(ee, te);
                            return function (e) {
                                var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                return t && t.value === n
                            }
                        }
                        ),
                    w.find.TAG = f.getElementsByTagName ? function (e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : f.qsa ? t.querySelectorAll(e) : void 0
                    }
                        : function (e, t) {
                            var n, i = [], r = 0, o = t.getElementsByTagName(e);
                            if ("*" !== e)
                                return o;
                            for (; n = o[r++];)
                                1 === n.nodeType && i.push(n);
                            return i
                        }
                    ,
                    w.find.CLASS = f.getElementsByClassName && function (e, t) {
                        return "undefined" != typeof t.getElementsByClassName && T ? t.getElementsByClassName(e) : void 0
                    }
                    ,
                    s = [],
                    g = [],
                    (f.qsa = X.test(x.querySelectorAll)) && (ae(function (e) {
                        a.appendChild(e).innerHTML = "<a id='" + j + "'></a><select id='" + j + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                            e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + D + "*(?:''|\"\")"),
                            e.querySelectorAll("[selected]").length || g.push("\\[" + D + "*(?:value|" + V + ")"),
                            e.querySelectorAll("[id~=" + j + "-]").length || g.push("~="),
                            e.querySelectorAll(":checked").length || g.push(":checked"),
                            e.querySelectorAll("a#" + j + "+*").length || g.push(".#.+[+~]")
                    }),
                        ae(function (e) {
                            var t = x.createElement("input");
                            t.setAttribute("type", "hidden"),
                                e.appendChild(t).setAttribute("name", "D"),
                                e.querySelectorAll("[name=d]").length && g.push("name" + D + "*[*^$|!~]?="),
                                e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"),
                                e.querySelectorAll("*,:x"),
                                g.push(",.*:")
                        })),
                    (f.matchesSelector = X.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ae(function (e) {
                        f.disconnectedMatch = c.call(e, "div"),
                            c.call(e, "[s!='']:x"),
                            s.push("!=", H)
                    }),
                    g = g.length && new RegExp(g.join("|")),
                    s = s.length && new RegExp(s.join("|")),
                    t = X.test(a.compareDocumentPosition),
                    m = t || X.test(a.contains) ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e
                            , i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    }
                        : function (e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e)
                                        return !0;
                            return !1
                        }
                    ,
                    h = t ? function (e, t) {
                        if (e === t)
                            return d = !0,
                                0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(e) === n ? e === x || e.ownerDocument === b && m(b, e) ? -1 : t === x || t.ownerDocument === b && m(b, t) ? 1 : l ? N(l, e) - N(l, t) : 0 : 4 & n ? -1 : 1)
                    }
                        : function (e, t) {
                            if (e === t)
                                return d = !0,
                                    0;
                            var n, i = 0, r = e.parentNode, o = t.parentNode, a = [e], s = [t];
                            if (!r || !o)
                                return e === x ? -1 : t === x ? 1 : r ? -1 : o ? 1 : l ? N(l, e) - N(l, t) : 0;
                            if (r === o)
                                return le(e, t);
                            for (n = e; n = n.parentNode;)
                                a.unshift(n);
                            for (n = t; n = n.parentNode;)
                                s.unshift(n);
                            for (; a[i] === s[i];)
                                i++;
                            return i ? le(a[i], s[i]) : a[i] === b ? -1 : s[i] === b ? 1 : 0
                        }
                ),
                    x
            }
            ,
            ie.matches = function (e, t) {
                return ie(e, null, null, t)
            }
            ,
            ie.matchesSelector = function (e, t) {
                if ((e.ownerDocument || e) !== x && S(e),
                    t = t.replace(z, "='$1']"),
                    f.matchesSelector && T && !A[t + " "] && (!s || !s.test(t)) && (!g || !g.test(t)))
                    try {
                        var n = c.call(e, t);
                        if (n || f.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return n
                    } catch (o) { }
                return 0 < ie(t, x, null, [e]).length
            }
            ,
            ie.contains = function (e, t) {
                return (e.ownerDocument || e) !== x && S(e),
                    m(e, t)
            }
            ,
            ie.attr = function (e, t) {
                (e.ownerDocument || e) !== x && S(e);
                var n = w.attrHandle[t.toLowerCase()]
                    , i = n && P.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !T) : void 0;
                return void 0 !== i ? i : f.attributes || !T ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }
            ,
            ie.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            ie.uniqueSort = function (e) {
                var t, n = [], i = 0, r = 0;
                if (d = !f.detectDuplicates,
                    l = !f.sortStable && e.slice(0),
                    e.sort(h),
                    d) {
                    for (; t = e[r++];)
                        t === e[r] && (i = n.push(r));
                    for (; i--;)
                        e.splice(n[i], 1)
                }
                return l = null,
                    e
            }
            ,
            o = ie.getText = function (e) {
                var t, n = "", i = 0, r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += o(e)
                    } else if (3 === r || 4 === r)
                        return e.nodeValue
                } else
                    for (; t = e[i++];)
                        n += o(t);
                return n
            }
            ,
            (w = ie.selectors = {
                cacheLength: 50,
                createPseudo: oe,
                match: $,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(ee, te),
                            e[3] = (e[3] || e[4] || e[5] || "").replace(ee, te),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(),
                            "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]),
                                e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                                e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]),
                            e
                    },
                    PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return $.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && q.test(n) && (t = v(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                            e[2] = n.slice(0, t)),
                            e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(ee, te).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        }
                            : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                    },
                    CLASS: function (e) {
                        var t = C[e + " "];
                        return t || (t = new RegExp("(^|" + D + ")" + e + "(" + D + "|$)")) && C(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (n, i, r) {
                        return function (e) {
                            var t = ie.attr(e, n);
                            return null == t ? "!=" === i : !i || (t += "",
                                "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(R, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function (f, e, t, v, y) {
                        var g = "nth" !== f.slice(0, 3)
                            , m = "last" !== f.slice(-4)
                            , b = "of-type" === e;
                        return 1 === v && 0 === y ? function (e) {
                            return !!e.parentNode
                        }
                            : function (e, t, n) {
                                var i, r, o, a, s, l, d = g !== m ? "nextSibling" : "previousSibling", c = e.parentNode, u = b && e.nodeName.toLowerCase(), p = !n && !b, h = !1;
                                if (c) {
                                    if (g) {
                                        for (; d;) {
                                            for (a = e; a = a[d];)
                                                if (b ? a.nodeName.toLowerCase() === u : 1 === a.nodeType)
                                                    return !1;
                                            l = d = "only" === f && !l && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (l = [m ? c.firstChild : c.lastChild],
                                        m && p) {
                                        for (h = (s = (i = (r = (o = (a = c)[j] || (a[j] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[f] || [])[0] === k && i[1]) && i[2],
                                            a = s && c.childNodes[s]; a = ++s && a && a[d] || (h = s = 0) || l.pop();)
                                            if (1 === a.nodeType && ++h && a === e) {
                                                r[f] = [k, s, h];
                                                break
                                            }
                                    } else if (p && (h = s = (i = (r = (o = (a = e)[j] || (a[j] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[f] || [])[0] === k && i[1]),
                                        !1 === h)
                                        for (; (a = ++s && a && a[d] || (h = s = 0) || l.pop()) && ((b ? a.nodeName.toLowerCase() !== u : 1 !== a.nodeType) || !++h || (p && ((r = (o = a[j] || (a[j] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[f] = [k, h]),
                                            a !== e));)
                                            ;
                                    return (h -= y) === v || h % v == 0 && 0 <= h / v
                                }
                            }
                    },
                    PSEUDO: function (e, o) {
                        var t, a = w.pseudos[e] || w.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                        return a[j] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                            w.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function (e, t) {
                                for (var n, i = a(e, o), r = i.length; r--;)
                                    e[n = N(e, i[r])] = !(t[n] = i[r])
                            }) : function (e) {
                                return a(e, 0, t)
                            }
                        ) : a
                    }
                },
                pseudos: {
                    not: oe(function (e) {
                        var i = []
                            , r = []
                            , s = u(e.replace(B, "$1"));
                        return s[j] ? oe(function (e, t, n, i) {
                            for (var r, o = s(e, null, i, []), a = e.length; a--;)
                                (r = o[a]) && (e[a] = !(t[a] = r))
                        }) : function (e, t, n) {
                            return i[0] = e,
                                s(i, null, n, r),
                                i[0] = null,
                                !r.pop()
                        }
                    }),
                    has: oe(function (t) {
                        return function (e) {
                            return 0 < ie(t, e).length
                        }
                    }),
                    contains: oe(function (t) {
                        return t = t.replace(ee, te),
                            function (e) {
                                return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                            }
                    }),
                    lang: oe(function (n) {
                        return J.test(n || "") || ie.error("unsupported lang: " + n),
                            n = n.replace(ee, te).toLowerCase(),
                            function (e) {
                                var t;
                                do {
                                    if (t = T ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                        return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType); return !1
                            }
                    }),
                    target: function (e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function (e) {
                        return e === a
                    },
                    focus: function (e) {
                        return e === x.activeElement && (!x.hasFocus || x.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function (e) {
                        return !1 === e.disabled
                    },
                    disabled: function (e) {
                        return !0 === e.disabled
                    },
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                            !0 === e.selected
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !w.pseudos.empty(e)
                    },
                    header: function (e) {
                        return K.test(e.nodeName)
                    },
                    input: function (e) {
                        return Q.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ue(function () {
                        return [0]
                    }),
                    last: ue(function (e, t) {
                        return [t - 1]
                    }),
                    eq: ue(function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ue(function (e, t) {
                        for (var n = 0; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    odd: ue(function (e, t) {
                        for (var n = 1; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    lt: ue(function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; 0 <= --i;)
                            e.push(i);
                        return e
                    }),
                    gt: ue(function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;)
                            e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = w.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            w.pseudos[e] = de(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            w.pseudos[e] = ce(e);
        function he() { }
        function fe(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++)
                i += e[t].value;
            return i
        }
        function ve(s, e, t) {
            var l = e.dir
                , d = t && "parentNode" === l
                , c = i++;
            return e.first ? function (e, t, n) {
                for (; e = e[l];)
                    if (1 === e.nodeType || d)
                        return s(e, t, n)
            }
                : function (e, t, n) {
                    var i, r, o, a = [k, c];
                    if (n) {
                        for (; e = e[l];)
                            if ((1 === e.nodeType || d) && s(e, t, n))
                                return !0
                    } else
                        for (; e = e[l];)
                            if (1 === e.nodeType || d) {
                                if ((i = (r = (o = e[j] || (e[j] = {}))[e.uniqueID] || (o[e.uniqueID] = {}))[l]) && i[0] === k && i[1] === c)
                                    return a[2] = i[2];
                                if ((r[l] = a)[2] = s(e, t, n))
                                    return !0
                            }
                }
        }
        function ye(r) {
            return 1 < r.length ? function (e, t, n) {
                for (var i = r.length; i--;)
                    if (!r[i](e, t, n))
                        return !1;
                return !0
            }
                : r[0]
        }
        function ge(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, d = null != t; s < l; s++)
                (o = e[s]) && (n && !n(o, i, r) || (a.push(o),
                    d && t.push(s)));
            return a
        }
        function me(f, v, y, g, m, e) {
            return g && !g[j] && (g = me(g)),
                m && !m[j] && (m = me(m, e)),
                oe(function (e, t, n, i) {
                    var r, o, a, s = [], l = [], d = t.length, c = e || function h(e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++)
                            ie(e, t[i], n);
                        return n
                    }(v || "*", n.nodeType ? [n] : n, []), u = !f || !e && v ? c : ge(c, s, f, n, i), p = y ? m || (e ? f : d || g) ? [] : t : u;
                    if (y && y(u, p, n, i),
                        g)
                        for (r = ge(p, l),
                            g(r, [], n, i),
                            o = r.length; o--;)
                            (a = r[o]) && (p[l[o]] = !(u[l[o]] = a));
                    if (e) {
                        if (m || f) {
                            if (m) {
                                for (r = [],
                                    o = p.length; o--;)
                                    (a = p[o]) && r.push(u[o] = a);
                                m(null, p = [], r, i)
                            }
                            for (o = p.length; o--;)
                                (a = p[o]) && -1 < (r = m ? N(e, a) : s[o]) && (e[r] = !(t[r] = a))
                        }
                    } else
                        p = ge(p === t ? p.splice(d, p.length) : p),
                            m ? m(null, t, p, i) : E.apply(t, p)
                })
        }
        function be(e) {
            for (var r, t, n, i = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, l = ve(function (e) {
                return e === r
            }, a, !0), d = ve(function (e) {
                return -1 < N(r, e)
            }, a, !0), c = [function (e, t, n) {
                var i = !o && (n || t !== _) || ((r = t).nodeType ? l(e, t, n) : d(e, t, n));
                return r = null,
                    i
            }
            ]; s < i; s++)
                if (t = w.relative[e[s].type])
                    c = [ve(ye(c), t)];
                else {
                    if ((t = w.filter[e[s].type].apply(null, e[s].matches))[j]) {
                        for (n = ++s; n < i && !w.relative[e[n].type]; n++)
                            ;
                        return me(1 < s && ye(c), 1 < s && fe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(B, "$1"), t, s < n && be(e.slice(s, n)), n < i && be(e = e.slice(n)), n < i && fe(e))
                    }
                    c.push(t)
                }
            return ye(c)
        }
        return he.prototype = w.filters = w.pseudos,
            w.setFilters = new he,
            v = ie.tokenize = function (e, t) {
                var n, i, r, o, a, s, l, d = p[e + " "];
                if (d)
                    return t ? 0 : d.slice(0);
                for (a = e,
                    s = [],
                    l = w.preFilter; a;) {
                    for (o in n && !(i = U.exec(a)) || (i && (a = a.slice(i[0].length) || a),
                        s.push(r = [])),
                        n = !1,
                        (i = W.exec(a)) && (n = i.shift(),
                            r.push({
                                value: n,
                                type: i[0].replace(B, " ")
                            }),
                            a = a.slice(n.length)),
                        w.filter)
                        !(i = $[o].exec(a)) || l[o] && !(i = l[o](i)) || (n = i.shift(),
                            r.push({
                                value: n,
                                type: o,
                                matches: i
                            }),
                            a = a.slice(n.length));
                    if (!n)
                        break
                }
                return t ? a.length : a ? ie.error(e) : p(e, s).slice(0)
            }
            ,
            u = ie.compile = function (e, t) {
                var n, i = [], r = [], o = A[e + " "];
                if (!o) {
                    for (t || (t = v(e)),
                        n = t.length; n--;)
                        (o = be(t[n]))[j] ? i.push(o) : r.push(o);
                    (o = A(e, function a(y, g) {
                        var m = 0 < g.length
                            , b = 0 < y.length
                            , e = function (e, t, n, i, r) {
                                var o, a, s, l = 0, d = "0", c = e && [], u = [], p = _, h = e || b && w.find.TAG("*", r), f = k += null == p ? 1 : Math.random() || .1, v = h.length;
                                for (r && (_ = t === x || t || r); d !== v && null != (o = h[d]); d++) {
                                    if (b && o) {
                                        for (a = 0,
                                            t || o.ownerDocument === x || (S(o),
                                                n = !T); s = y[a++];)
                                            if (s(o, t || x, n)) {
                                                i.push(o);
                                                break
                                            }
                                        r && (k = f)
                                    }
                                    m && ((o = !s && o) && l--,
                                        e && c.push(o))
                                }
                                if (l += d,
                                    m && d !== l) {
                                    for (a = 0; s = g[a++];)
                                        s(c, u, t, n);
                                    if (e) {
                                        if (0 < l)
                                            for (; d--;)
                                                c[d] || u[d] || (u[d] = O.call(i));
                                        u = ge(u)
                                    }
                                    E.apply(i, u),
                                        r && !e && 0 < u.length && 1 < l + g.length && ie.uniqueSort(i)
                                }
                                return r && (k = f,
                                    _ = p),
                                    c
                            };
                        return m ? oe(e) : e
                    }(r, i))).selector = e
                }
                return o
            }
            ,
            y = ie.select = function (e, t, n, i) {
                var r, o, a, s, l, d = "function" == typeof e && e, c = !i && v(e = d.selector || e);
                if (n = n || [],
                    1 === c.length) {
                    if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && f.getById && 9 === t.nodeType && T && w.relative[o[1].type]) {
                        if (!(t = (w.find.ID(a.matches[0].replace(ee, te), t) || [])[0]))
                            return n;
                        d && (t = t.parentNode),
                            e = e.slice(o.shift().value.length)
                    }
                    for (r = $.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r],
                        !w.relative[s = a.type]);)
                        if ((l = w.find[s]) && (i = l(a.matches[0].replace(ee, te), Y.test(o[0].type) && pe(t.parentNode) || t))) {
                            if (o.splice(r, 1),
                                !(e = i.length && fe(o)))
                                return E.apply(n, i),
                                    n;
                            break
                        }
                }
                return (d || u(e, c))(i, t, !T, n, !t || Y.test(e) && pe(t.parentNode) || t),
                    n
            }
            ,
            f.sortStable = j.split("").sort(h).join("") === j,
            f.detectDuplicates = !!d,
            S(),
            f.sortDetached = ae(function (e) {
                return 1 & e.compareDocumentPosition(x.createElement("div"))
            }),
            ae(function (e) {
                return e.innerHTML = "<a href='#'></a>",
                    "#" === e.firstChild.getAttribute("href")
            }) || se("type|href|height|width", function (e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }),
            f.attributes && ae(function (e) {
                return e.innerHTML = "<input/>",
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
            }) || se("value", function (e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }),
            ae(function (e) {
                return null == e.getAttribute("disabled")
            }) || se(V, function (e, t, n) {
                var i;
                return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }),
            ie
    }(j);
    C.find = p,
        C.expr = p.selectors,
        C.expr[":"] = C.expr.pseudos,
        C.uniqueSort = C.unique = p.uniqueSort,
        C.text = p.getText,
        C.isXMLDoc = p.isXML,
        C.contains = p.contains;
    var h = function (e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (r && C(e).is(n))
                    break;
                i.push(e)
            }
        return i
    }
        , m = function (e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
        , b = C.expr.match.needsContext
        , A = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
        , w = /^.[^:#\[\.,]*$/;
    function _(e, n, i) {
        if (C.isFunction(n))
            return C.grep(e, function (e, t) {
                return !!n.call(e, t, e) !== i
            });
        if (n.nodeType)
            return C.grep(e, function (e) {
                return e === n !== i
            });
        if ("string" == typeof n) {
            if (w.test(n))
                return C.filter(n, e, i);
            n = C.filter(n, e)
        }
        return C.grep(e, function (e) {
            return -1 < C.inArray(e, n) !== i
        })
    }
    C.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType ? C.find.matchesSelector(i, e) ? [i] : [] : C.find.matches(e, C.grep(t, function (e) {
                return 1 === e.nodeType
            }))
    }
        ,
        C.fn.extend({
            find: function (e) {
                var t, n = [], i = this, r = i.length;
                if ("string" != typeof e)
                    return this.pushStack(C(e).filter(function () {
                        for (t = 0; t < r; t++)
                            if (C.contains(i[t], this))
                                return !0
                    }));
                for (t = 0; t < r; t++)
                    C.find(e, i[t], n);
                return (n = this.pushStack(1 < r ? C.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e,
                    n
            },
            filter: function (e) {
                return this.pushStack(_(this, e || [], !1))
            },
            not: function (e) {
                return this.pushStack(_(this, e || [], !0))
            },
            is: function (e) {
                return !!_(this, "string" == typeof e && b.test(e) ? C(e) : e || [], !1).length
            }
        });
    var S, x = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (C.fn.init = function (e, t, n) {
        var i, r;
        if (!e)
            return this;
        if (n = n || S,
            "string" != typeof e)
            return e.nodeType ? (this.context = this[0] = e,
                this.length = 1,
                this) : C.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(C) : (void 0 !== e.selector && (this.selector = e.selector,
                    this.context = e.context),
                    C.makeArray(e, this));
        if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : x.exec(e)) || !i[1] && t)
            return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (i[1]) {
            if (t = t instanceof C ? t[0] : t,
                C.merge(this, C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : f, !0)),
                A.test(i[1]) && C.isPlainObject(t))
                for (i in t)
                    C.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this
        }
        if ((r = f.getElementById(i[2])) && r.parentNode) {
            if (r.id !== i[2])
                return S.find(e);
            this.length = 1,
                this[0] = r
        }
        return this.context = f,
            this.selector = e,
            this
    }
    ).prototype = C.fn,
        S = C(f);
    var T = /^(?:parents|prev(?:Until|All))/
        , P = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    function O(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;)
            ;
        return e
    }
    C.fn.extend({
        has: function (e) {
            var t, n = C(e, this), i = n.length;
            return this.filter(function () {
                for (t = 0; t < i; t++)
                    if (C.contains(this, n[t]))
                        return !0
            })
        },
        closest: function (e, t) {
            for (var n, i = 0, r = this.length, o = [], a = b.test(e) || "string" != typeof e ? C(e, t || this.context) : 0; i < r; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(1 < o.length ? C.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? C.inArray(this[0], C(e)) : C.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
        C.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function (e) {
                return h(e, "parentNode")
            },
            parentsUntil: function (e, t, n) {
                return h(e, "parentNode", n)
            },
            next: function (e) {
                return O(e, "nextSibling")
            },
            prev: function (e) {
                return O(e, "previousSibling")
            },
            nextAll: function (e) {
                return h(e, "nextSibling")
            },
            prevAll: function (e) {
                return h(e, "previousSibling")
            },
            nextUntil: function (e, t, n) {
                return h(e, "nextSibling", n)
            },
            prevUntil: function (e, t, n) {
                return h(e, "previousSibling", n)
            },
            siblings: function (e) {
                return m((e.parentNode || {}).firstChild, e)
            },
            children: function (e) {
                return m(e.firstChild)
            },
            contents: function (e) {
                return C.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : C.merge([], e.childNodes)
            }
        }, function (i, r) {
            C.fn[i] = function (e, t) {
                var n = C.map(this, r, e);
                return "Until" !== i.slice(-5) && (t = e),
                    t && "string" == typeof t && (n = C.filter(t, n)),
                    1 < this.length && (P[i] || (n = C.uniqueSort(n)),
                        T.test(i) && (n = n.reverse())),
                    this.pushStack(n)
            }
        });
    var I, E, L = /\S+/g;
    function N() {
        f.addEventListener ? (f.removeEventListener("DOMContentLoaded", V),
            j.removeEventListener("load", V)) : (f.detachEvent("onreadystatechange", V),
                j.detachEvent("onload", V))
    }
    function V() {
        (f.addEventListener || "load" === j.event.type || "complete" === f.readyState) && (N(),
            C.ready())
    }
    for (E in C.Callbacks = function (i) {
        i = "string" == typeof i ? function c(e) {
            var n = {};
            return C.each(e.match(L) || [], function (e, t) {
                n[t] = !0
            }),
                n
        }(i) : C.extend({}, i);
        var r, e, t, n, o = [], a = [], s = -1, l = function () {
            for (n = i.once,
                t = r = !0; a.length; s = -1)
                for (e = a.shift(); ++s < o.length;)
                    !1 === o[s].apply(e[0], e[1]) && i.stopOnFalse && (s = o.length,
                        e = !1);
            i.memory || (e = !1),
                r = !1,
                n && (o = e ? [] : "")
        }, d = {
            add: function () {
                return o && (e && !r && (s = o.length - 1,
                    a.push(e)),
                    function n(e) {
                        C.each(e, function (e, t) {
                            C.isFunction(t) ? i.unique && d.has(t) || o.push(t) : t && t.length && "string" !== C.type(t) && n(t)
                        })
                    }(arguments),
                    e && !r && l()),
                    this
            },
            remove: function () {
                return C.each(arguments, function (e, t) {
                    for (var n; -1 < (n = C.inArray(t, o, n));)
                        o.splice(n, 1),
                            n <= s && s--
                }),
                    this
            },
            has: function (e) {
                return e ? -1 < C.inArray(e, o) : 0 < o.length
            },
            empty: function () {
                return o && (o = []),
                    this
            },
            disable: function () {
                return n = a = [],
                    o = e = "",
                    this
            },
            disabled: function () {
                return !o
            },
            lock: function () {
                return n = !0,
                    e || d.disable(),
                    this
            },
            locked: function () {
                return !!n
            },
            fireWith: function (e, t) {
                return n || (t = [e, (t = t || []).slice ? t.slice() : t],
                    a.push(t),
                    r || l()),
                    this
            },
            fire: function () {
                return d.fireWith(this, arguments),
                    this
            },
            fired: function () {
                return !!t
            }
        };
        return d
    }
        ,
        C.extend({
            Deferred: function (e) {
                var o = [["resolve", "done", C.Callbacks("once memory"), "resolved"], ["reject", "fail", C.Callbacks("once memory"), "rejected"], ["notify", "progress", C.Callbacks("memory")]]
                    , r = "pending"
                    , a = {
                        state: function () {
                            return r
                        },
                        always: function () {
                            return s.done(arguments).fail(arguments),
                                this
                        },
                        then: function () {
                            var r = arguments;
                            return C.Deferred(function (i) {
                                C.each(o, function (e, t) {
                                    var n = C.isFunction(r[e]) && r[e];
                                    s[t[1]](function () {
                                        var e = n && n.apply(this, arguments);
                                        e && C.isFunction(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this === a ? i.promise() : this, n ? [e] : arguments)
                                    })
                                }),
                                    r = null
                            }).promise()
                        },
                        promise: function (e) {
                            return null != e ? C.extend(e, a) : a
                        }
                    }
                    , s = {};
                return a.pipe = a.then,
                    C.each(o, function (e, t) {
                        var n = t[2]
                            , i = t[3];
                        a[t[1]] = n.add,
                            i && n.add(function () {
                                r = i
                            }, o[1 ^ e][2].disable, o[2][2].lock),
                            s[t[0]] = function () {
                                return s[t[0] + "With"](this === s ? a : this, arguments),
                                    this
                            }
                            ,
                            s[t[0] + "With"] = n.fireWith
                    }),
                    a.promise(s),
                    e && e.call(s, s),
                    s
            },
            when: function (e) {
                var r, t, n, i = 0, o = c.call(arguments), a = o.length, s = 1 !== a || e && C.isFunction(e.promise) ? a : 0, l = 1 === s ? e : C.Deferred(), d = function (t, n, i) {
                    return function (e) {
                        n[t] = this,
                            i[t] = 1 < arguments.length ? c.call(arguments) : e,
                            i === r ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                    }
                };
                if (1 < a)
                    for (r = new Array(a),
                        t = new Array(a),
                        n = new Array(a); i < a; i++)
                        o[i] && C.isFunction(o[i].promise) ? o[i].promise().progress(d(i, t, r)).done(d(i, n, o)).fail(l.reject) : --s;
                return s || l.resolveWith(n, o),
                    l.promise()
            }
        }),
        C.fn.ready = function (e) {
            return C.ready.promise().done(e),
                this
        }
        ,
        C.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (e) {
                e ? C.readyWait++ : C.ready(!0)
            },
            ready: function (e) {
                (!0 === e ? --C.readyWait : C.isReady) || ((C.isReady = !0) !== e && 0 < --C.readyWait || (I.resolveWith(f, [C]),
                    C.fn.triggerHandler && (C(f).triggerHandler("ready"),
                        C(f).off("ready"))))
            }
        }),
        C.ready.promise = function (e) {
            if (!I)
                if (I = C.Deferred(),
                    "complete" === f.readyState || "loading" !== f.readyState && !f.documentElement.doScroll)
                    j.setTimeout(C.ready);
                else if (f.addEventListener)
                    f.addEventListener("DOMContentLoaded", V),
                        j.addEventListener("load", V);
                else {
                    f.attachEvent("onreadystatechange", V),
                        j.attachEvent("onload", V);
                    var t = !1;
                    try {
                        t = null == j.frameElement && f.documentElement
                    } catch (c) { }
                    t && t.doScroll && function n() {
                        if (!C.isReady) {
                            try {
                                t.doScroll("left")
                            } catch (e) {
                                return j.setTimeout(n, 50)
                            }
                            N(),
                                C.ready()
                        }
                    }()
                }
            return I.promise(e)
        }
        ,
        C.ready.promise(),
        C(k))
        break;
    k.ownFirst = "0" === E,
        k.inlineBlockNeedsLayout = !1,
        C(function () {
            var e, t, n, i;
            (n = f.getElementsByTagName("body")[0]) && n.style && (t = f.createElement("div"),
                (i = f.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                n.appendChild(i).appendChild(t),
                "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
                    k.inlineBlockNeedsLayout = e = 3 === t.offsetWidth,
                    e && (n.style.zoom = 1)),
                n.removeChild(i))
        }),
        function () {
            var e = f.createElement("div");
            k.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                k.deleteExpando = !1
            }
            e = null
        }();
    var D, M = function (e) {
        var t = C.noData[(e.nodeName + " ").toLowerCase()]
            , n = +e.nodeType || 1;
        return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
    }, F = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, H = /([A-Z])/g;
    function R(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(H, "-$1").toLowerCase();
            if ("string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : F.test(n) ? C.parseJSON(n) : n)
                } catch (c) { }
                C.data(e, t, n)
            } else
                n = void 0
        }
        return n
    }
    function B(e) {
        var t;
        for (t in e)
            if (("data" !== t || !C.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function U(e, t, n, i) {
        if (M(e)) {
            var r, o, a = C.expando, s = e.nodeType, l = s ? C.cache : e, d = s ? e[a] : e[a] && a;
            if (d && l[d] && (i || l[d].data) || void 0 !== n || "string" != typeof t)
                return d || (d = s ? e[a] = u.pop() || C.guid++ : a),
                    l[d] || (l[d] = s ? {} : {
                        toJSON: C.noop
                    }),
                    "object" != typeof t && "function" != typeof t || (i ? l[d] = C.extend(l[d], t) : l[d].data = C.extend(l[d].data, t)),
                    o = l[d],
                    i || (o.data || (o.data = {}),
                        o = o.data),
                    void 0 !== n && (o[C.camelCase(t)] = n),
                    "string" == typeof t ? null == (r = o[t]) && (r = o[C.camelCase(t)]) : r = o,
                    r
        }
    }
    function W(e, t, n) {
        if (M(e)) {
            var i, r, o = e.nodeType, a = o ? C.cache : e, s = o ? e[C.expando] : C.expando;
            if (a[s]) {
                if (t && (i = n ? a[s] : a[s].data)) {
                    r = (t = C.isArray(t) ? t.concat(C.map(t, C.camelCase)) : t in i ? [t] : (t = C.camelCase(t)) in i ? [t] : t.split(" ")).length;
                    for (; r--;)
                        delete i[t[r]];
                    if (n ? !B(i) : !C.isEmptyObject(i))
                        return
                }
                (n || (delete a[s].data,
                    B(a[s]))) && (o ? C.cleanData([e], !0) : k.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
            }
        }
    }
    C.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (e) {
            return !!(e = e.nodeType ? C.cache[e[C.expando]] : e[C.expando]) && !B(e)
        },
        data: function (e, t, n) {
            return U(e, t, n)
        },
        removeData: function (e, t) {
            return W(e, t)
        },
        _data: function (e, t, n) {
            return U(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return W(e, t, !0)
        }
    }),
        C.fn.extend({
            data: function (e, t) {
                var n, i, r, o = this[0], a = o && o.attributes;
                if (void 0 !== e)
                    return "object" == typeof e ? this.each(function () {
                        C.data(this, e)
                    }) : 1 < arguments.length ? this.each(function () {
                        C.data(this, e, t)
                    }) : o ? R(o, e, C.data(o, e)) : void 0;
                if (this.length && (r = C.data(o),
                    1 === o.nodeType && !C._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;)
                        a[n] && (0 === (i = a[n].name).indexOf("data-") && R(o, i = C.camelCase(i.slice(5)), r[i]));
                    C._data(o, "parsedAttrs", !0)
                }
                return r
            },
            removeData: function (e) {
                return this.each(function () {
                    C.removeData(this, e)
                })
            }
        }),
        C.extend({
            queue: function (e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue",
                    i = C._data(e, t),
                    n && (!i || C.isArray(n) ? i = C._data(e, t, C.makeArray(n)) : i.push(n)),
                    i || []) : void 0
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = C.queue(e, t)
                    , i = n.length
                    , r = n.shift()
                    , o = C._queueHooks(e, t);
                "inprogress" === r && (r = n.shift(),
                    i--),
                    r && ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        r.call(e, function () {
                            C.dequeue(e, t)
                        }, o)),
                    !i && o && o.empty.fire()
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return C._data(e, n) || C._data(e, n, {
                    empty: C.Callbacks("once memory").add(function () {
                        C._removeData(e, t + "queue"),
                            C._removeData(e, n)
                    })
                })
            }
        }),
        C.fn.extend({
            queue: function (t, n) {
                var e = 2;
                return "string" != typeof t && (n = t,
                    t = "fx",
                    e--),
                    arguments.length < e ? C.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                        var e = C.queue(this, t, n);
                        C._queueHooks(this, t),
                            "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
                    })
            },
            dequeue: function (e) {
                return this.each(function () {
                    C.dequeue(this, e)
                })
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", [])
            },
            promise: function (e, t) {
                var n, i = 1, r = C.Deferred(), o = this, a = this.length, s = function () {
                    --i || r.resolveWith(o, [o])
                };
                for ("string" != typeof e && (t = e,
                    e = void 0),
                    e = e || "fx"; a--;)
                    (n = C._data(o[a], e + "queueHooks")) && n.empty && (i++,
                        n.empty.add(s));
                return s(),
                    r.promise(t)
            }
        }),
        k.shrinkWrapBlocks = function () {
            return null != D ? D : (D = !1,
                (t = f.getElementsByTagName("body")[0]) && t.style ? (e = f.createElement("div"),
                    (n = f.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                    t.appendChild(n).appendChild(e),
                    "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
                        e.appendChild(f.createElement("div")).style.width = "5px",
                        D = 3 !== e.offsetWidth),
                    t.removeChild(n),
                    D) : void 0);
            var e, t, n
        }
        ;
    var z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
        , q = new RegExp("^(?:([+-])=|)(" + z + ")([a-z%]*)$", "i")
        , J = ["Top", "Right", "Bottom", "Left"]
        , $ = function (e, t) {
            return e = t || e,
                "none" === C.css(e, "display") || !C.contains(e.ownerDocument, e)
        };
    function Q(e, t, n, i) {
        var r, o = 1, a = 20, s = i ? function () {
            return i.cur()
        }
            : function () {
                return C.css(e, t, "")
            }
            , l = s(), d = n && n[3] || (C.cssNumber[t] ? "" : "px"), c = (C.cssNumber[t] || "px" !== d && +l) && q.exec(C.css(e, t));
        if (c && c[3] !== d)
            for (d = d || c[3],
                n = n || [],
                c = +l || 1; c /= o = o || ".5",
                C.style(e, t, c + d),
                o !== (o = s() / l) && 1 !== o && --a;)
                ;
        return n && (c = +c || +l || 0,
            r = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
            i && (i.unit = d,
                i.start = c,
                i.end = r)),
            r
    }
    var K, X, G, Y = function (e, t, n, i, r, o, a) {
        var s = 0
            , l = e.length
            , d = null == n;
        if ("object" === C.type(n))
            for (s in r = !0,
                n)
                Y(e, t, s, n[s], !0, o, a);
        else if (void 0 !== i && (r = !0,
            C.isFunction(i) || (a = !0),
            d && (t = a ? (t.call(e, i),
                null) : (d = t,
                    function (e, t, n) {
                        return d.call(C(e), n)
                    }
                )),
            t))
            for (; s < l; s++)
                t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
        return r ? e : d ? t.call(e) : l ? t(e[0], n) : o
    }, Z = /^(?:checkbox|radio)$/i, ee = /<([\w:-]+)/, te = /^$|\/(?:java|ecma)script/i, ne = /^\s+/, ie = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    function re(e) {
        var t = ie.split("|")
            , n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;)
                n.createElement(t.pop());
        return n
    }
    K = f.createElement("div"),
        X = f.createDocumentFragment(),
        G = f.createElement("input"),
        K.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        k.leadingWhitespace = 3 === K.firstChild.nodeType,
        k.tbody = !K.getElementsByTagName("tbody").length,
        k.htmlSerialize = !!K.getElementsByTagName("link").length,
        k.html5Clone = "<:nav></:nav>" !== f.createElement("nav").cloneNode(!0).outerHTML,
        G.type = "checkbox",
        G.checked = !0,
        X.appendChild(G),
        k.appendChecked = G.checked,
        K.innerHTML = "<textarea>x</textarea>",
        k.noCloneChecked = !!K.cloneNode(!0).lastChild.defaultValue,
        X.appendChild(K),
        (G = f.createElement("input")).setAttribute("type", "radio"),
        G.setAttribute("checked", "checked"),
        G.setAttribute("name", "t"),
        K.appendChild(G),
        k.checkClone = K.cloneNode(!0).cloneNode(!0).lastChild.checked,
        k.noCloneEvent = !!K.addEventListener,
        K[C.expando] = 1,
        k.attributes = !K.getAttribute(C.expando);
    var oe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    function we(e, t) {
        var n, i, r = 0, o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [],
                n = e.childNodes || e; null != (i = n[r]); r++)
                !t || C.nodeName(i, t) ? o.push(i) : C.merge(o, we(i, t));
        return void 0 === t || t && C.nodeName(e, t) ? C.merge([e], o) : o
    }
    function ae(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++)
            C._data(n, "globalEval", !t || C._data(t[i], "globalEval"))
    }
    oe.optgroup = oe.option,
        oe.tbody = oe.tfoot = oe.colgroup = oe.caption = oe.thead,
        oe.th = oe.td;
    var se = /<|&#?\w+;/
        , le = /<tbody/i;
    function de(e) {
        Z.test(e.type) && (e.defaultChecked = e.checked)
    }
    function ce(e, t, n, i, r) {
        for (var o, a, s, l, d, c, u, p = e.length, h = re(t), f = [], v = 0; v < p; v++)
            if ((a = e[v]) || 0 === a)
                if ("object" === C.type(a))
                    C.merge(f, a.nodeType ? [a] : a);
                else if (se.test(a)) {
                    for (l = l || h.appendChild(t.createElement("div")),
                        d = (ee.exec(a) || ["", ""])[1].toLowerCase(),
                        u = oe[d] || oe._default,
                        l.innerHTML = u[1] + C.htmlPrefilter(a) + u[2],
                        o = u[0]; o--;)
                        l = l.lastChild;
                    if (!k.leadingWhitespace && ne.test(a) && f.push(t.createTextNode(ne.exec(a)[0])),
                        !k.tbody)
                        for (o = (a = "table" !== d || le.test(a) ? "<table>" !== u[1] || le.test(a) ? 0 : l : l.firstChild) && a.childNodes.length; o--;)
                            C.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c);
                    for (C.merge(f, l.childNodes),
                        l.textContent = ""; l.firstChild;)
                        l.removeChild(l.firstChild);
                    l = h.lastChild
                } else
                    f.push(t.createTextNode(a));
        for (l && h.removeChild(l),
            k.appendChecked || C.grep(we(f, "input"), de),
            v = 0; a = f[v++];)
            if (i && -1 < C.inArray(a, i))
                r && r.push(a);
            else if (s = C.contains(a.ownerDocument, a),
                l = we(h.appendChild(a), "script"),
                s && ae(l),
                n)
                for (o = 0; a = l[o++];)
                    te.test(a.type || "") && n.push(a);
        return l = null,
            h
    }
    !function () {
        var e, t, n = f.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            t = "on" + e,
                (k[e] = t in j) || (n.setAttribute(t, "t"),
                    k[e] = !1 === n.attributes[t].expando);
        n = null
    }();
    var ue = /^(?:input|select|textarea)$/i
        , pe = /^key/
        , he = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
        , fe = /^(?:focusinfocus|focusoutblur)$/
        , ve = /^([^.]*)(?:\.(.+)|)/;
    function ye() {
        return !0
    }
    function ge() {
        return !1
    }
    function me() {
        try {
            return f.activeElement
        } catch (j) { }
    }
    function be(e, t, n, i, r, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (i = i || n,
                n = void 0),
                t)
                be(e, s, n, i, t[s], o);
            return e
        }
        if (null == i && null == r ? (r = n,
            i = n = void 0) : null == r && ("string" == typeof n ? (r = i,
                i = void 0) : (r = i,
                    i = n,
                    n = void 0)),
            !1 === r)
            r = ge;
        else if (!r)
            return e;
        return 1 === o && (a = r,
            (r = function (e) {
                return C().off(e),
                    a.apply(this, arguments)
            }
            ).guid = a.guid || (a.guid = C.guid++)),
            e.each(function () {
                C.event.add(this, t, r, i, n)
            })
    }
    C.event = {
        global: {},
        add: function (e, t, n, i, r) {
            var o, a, s, l, d, c, u, p, h, f, v, y = C._data(e);
            if (y) {
                for (n.handler && (n = (l = n).handler,
                    r = l.selector),
                    n.guid || (n.guid = C.guid++),
                    (a = y.events) || (a = y.events = {}),
                    (c = y.handle) || ((c = y.handle = function (e) {
                        return void 0 === C || e && C.event.triggered === e.type ? void 0 : C.event.dispatch.apply(c.elem, arguments)
                    }
                    ).elem = e),
                    s = (t = (t || "").match(L) || [""]).length; s--;)
                    h = v = (o = ve.exec(t[s]) || [])[1],
                        f = (o[2] || "").split(".").sort(),
                        h && (d = C.event.special[h] || {},
                            h = (r ? d.delegateType : d.bindType) || h,
                            d = C.event.special[h] || {},
                            u = C.extend({
                                type: h,
                                origType: v,
                                data: i,
                                handler: n,
                                guid: n.guid,
                                selector: r,
                                needsContext: r && C.expr.match.needsContext.test(r),
                                namespace: f.join(".")
                            }, l),
                            (p = a[h]) || ((p = a[h] = []).delegateCount = 0,
                                d.setup && !1 !== d.setup.call(e, i, f, c) || (e.addEventListener ? e.addEventListener(h, c, !1) : e.attachEvent && e.attachEvent("on" + h, c))),
                            d.add && (d.add.call(e, u),
                                u.handler.guid || (u.handler.guid = n.guid)),
                            r ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                            C.event.global[h] = !0);
                e = null
            }
        },
        remove: function (e, t, n, i, r) {
            var o, a, s, l, d, c, u, p, h, f, v, y = C.hasData(e) && C._data(e);
            if (y && (c = y.events)) {
                for (d = (t = (t || "").match(L) || [""]).length; d--;)
                    if (h = v = (s = ve.exec(t[d]) || [])[1],
                        f = (s[2] || "").split(".").sort(),
                        h) {
                        for (u = C.event.special[h] || {},
                            p = c[h = (i ? u.delegateType : u.bindType) || h] || [],
                            s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            l = o = p.length; o--;)
                            a = p[o],
                                !r && v !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (p.splice(o, 1),
                                    a.selector && p.delegateCount--,
                                    u.remove && u.remove.call(e, a));
                        l && !p.length && (u.teardown && !1 !== u.teardown.call(e, f, y.handle) || C.removeEvent(e, h, y.handle),
                            delete c[h])
                    } else
                        for (h in c)
                            C.event.remove(e, h + t[d], n, i, !0);
                C.isEmptyObject(c) && (delete y.handle,
                    C._removeData(e, "events"))
            }
        },
        trigger: function (e, t, n, i) {
            var r, o, a, s, l, d, c, u = [n || f], p = y.call(e, "type") ? e.type : e, h = y.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = d = n = n || f,
                3 !== n.nodeType && 8 !== n.nodeType && !fe.test(p + C.event.triggered) && (-1 < p.indexOf(".") && (p = (h = p.split(".")).shift(),
                    h.sort()),
                    o = p.indexOf(":") < 0 && "on" + p,
                    (e = e[C.expando] ? e : new C.Event(p, "object" == typeof e && e)).isTrigger = i ? 2 : 3,
                    e.namespace = h.join("."),
                    e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    e.result = void 0,
                    e.target || (e.target = n),
                    t = null == t ? [e] : C.makeArray(t, [e]),
                    l = C.event.special[p] || {},
                    i || !l.trigger || !1 !== l.trigger.apply(n, t))) {
                if (!i && !l.noBubble && !C.isWindow(n)) {
                    for (s = l.delegateType || p,
                        fe.test(s + p) || (a = a.parentNode); a; a = a.parentNode)
                        u.push(a),
                            d = a;
                    d === (n.ownerDocument || f) && u.push(d.defaultView || d.parentWindow || j)
                }
                for (c = 0; (a = u[c++]) && !e.isPropagationStopped();)
                    e.type = 1 < c ? s : l.bindType || p,
                        (r = (C._data(a, "events") || {})[e.type] && C._data(a, "handle")) && r.apply(a, t),
                        (r = o && a[o]) && r.apply && M(a) && (e.result = r.apply(a, t),
                            !1 === e.result && e.preventDefault());
                if (e.type = p,
                    !i && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(u.pop(), t)) && M(n) && o && n[p] && !C.isWindow(n)) {
                    (d = n[o]) && (n[o] = null),
                        C.event.triggered = p;
                    try {
                        n[p]()
                    } catch (g) { }
                    C.event.triggered = void 0,
                        d && (n[o] = d)
                }
                return e.result
            }
        },
        dispatch: function (e) {
            e = C.event.fix(e);
            var t, n, i, r, o, a = [], s = c.call(arguments), l = (C._data(this, "events") || {})[e.type] || [], d = C.event.special[e.type] || {};
            if ((s[0] = e).delegateTarget = this,
                !d.preDispatch || !1 !== d.preDispatch.call(this, e)) {
                for (a = C.event.handlers.call(this, e, l),
                    t = 0; (r = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem,
                        n = 0; (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();)
                        e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o,
                            e.data = o.data,
                            void 0 !== (i = ((C.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s)) && !1 === (e.result = i) && (e.preventDefault(),
                                e.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, e),
                    e.result
            }
        },
        handlers: function (e, t) {
            var n, i, r, o, a = [], s = t.delegateCount, l = e.target;
            if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (i = [],
                            n = 0; n < s; n++)
                            void 0 === i[r = (o = t[n]).selector + " "] && (i[r] = o.needsContext ? -1 < C(r, this).index(l) : C.find(r, this, null, [l]).length),
                                i[r] && i.push(o);
                        i.length && a.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }),
                a
        },
        fix: function (e) {
            if (e[C.expando])
                return e;
            var t, n, i, r = e.type, o = e, a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = he.test(r) ? this.mouseHooks : pe.test(r) ? this.keyHooks : {}),
                i = a.props ? this.props.concat(a.props) : this.props,
                e = new C.Event(o),
                t = i.length; t--;)
                e[n = i[t]] = o[n];
            return e.target || (e.target = o.srcElement || f),
                3 === e.target.nodeType && (e.target = e.target.parentNode),
                e.metaKey = !!e.metaKey,
                a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                    e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, i, r, o = t.button, a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = (i = e.target.ownerDocument || f).documentElement,
                    n = i.body,
                    e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0),
                    e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)),
                    !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a),
                    e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                    e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== me() && this.focus)
                        try {
                            return this.focus(),
                                !1
                        } catch (j) { }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === me() && this.blur ? (this.blur(),
                        !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return C.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                        !1) : void 0
                },
                _default: function (e) {
                    return C.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n) {
            var i = C.extend(new C.Event, n, {
                type: e,
                isSimulated: !0
            });
            C.event.trigger(i, null, t),
                i.isDefaultPrevented() && n.preventDefault()
        }
    },
        C.removeEvent = f.removeEventListener ? function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }
            : function (e, t, n) {
                var i = "on" + t;
                e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null),
                    e.detachEvent(i, n))
            }
        ,
        C.Event = function (e, t) {
            return this instanceof C.Event ? (e && e.type ? (this.originalEvent = e,
                this.type = e.type,
                this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ye : ge) : this.type = e,
                t && C.extend(this, t),
                this.timeStamp = e && e.timeStamp || C.now(),
                void (this[C.expando] = !0)) : new C.Event(e, t)
        }
        ,
        C.Event.prototype = {
            constructor: C.Event,
            isDefaultPrevented: ge,
            isPropagationStopped: ge,
            isImmediatePropagationStopped: ge,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = ye,
                    e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = ye,
                    e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(),
                        e.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = ye,
                    e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
                    this.stopPropagation()
            }
        },
        C.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, r) {
            C.event.special[e] = {
                delegateType: r,
                bindType: r,
                handle: function (e) {
                    var t, n = e.relatedTarget, i = e.handleObj;
                    return n && (n === this || C.contains(this, n)) || (e.type = i.origType,
                        t = i.handler.apply(this, arguments),
                        e.type = r),
                        t
                }
            }
        }),
        k.submit || (C.event.special.submit = {
            setup: function () {
                return !C.nodeName(this, "form") && void C.event.add(this, "click._submit keypress._submit", function (e) {
                    var t = e.target
                        , n = C.nodeName(t, "input") || C.nodeName(t, "button") ? C.prop(t, "form") : void 0;
                    n && !C._data(n, "submit") && (C.event.add(n, "submit._submit", function (e) {
                        e._submitBubble = !0
                    }),
                        C._data(n, "submit", !0))
                })
            },
            postDispatch: function (e) {
                e._submitBubble && (delete e._submitBubble,
                    this.parentNode && !e.isTrigger && C.event.simulate("submit", this.parentNode, e))
            },
            teardown: function () {
                return !C.nodeName(this, "form") && void C.event.remove(this, "._submit")
            }
        }),
        k.change || (C.event.special.change = {
            setup: function () {
                return ue.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (C.event.add(this, "propertychange._change", function (e) {
                    "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
                }),
                    C.event.add(this, "click._change", function (e) {
                        this._justChanged && !e.isTrigger && (this._justChanged = !1),
                            C.event.simulate("change", this, e)
                    })),
                    !1) : void C.event.add(this, "beforeactivate._change", function (e) {
                        var t = e.target;
                        ue.test(t.nodeName) && !C._data(t, "change") && (C.event.add(t, "change._change", function (e) {
                            !this.parentNode || e.isSimulated || e.isTrigger || C.event.simulate("change", this.parentNode, e)
                        }),
                            C._data(t, "change", !0))
                    })
            },
            handle: function (e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function () {
                return C.event.remove(this, "._change"),
                    !ue.test(this.nodeName)
            }
        }),
        k.focusin || C.each({
            focus: "focusin",
            blur: "focusout"
        }, function (n, i) {
            var r = function (e) {
                C.event.simulate(i, e.target, C.event.fix(e))
            };
            C.event.special[i] = {
                setup: function () {
                    var e = this.ownerDocument || this
                        , t = C._data(e, i);
                    t || e.addEventListener(n, r, !0),
                        C._data(e, i, (t || 0) + 1)
                },
                teardown: function () {
                    var e = this.ownerDocument || this
                        , t = C._data(e, i) - 1;
                    t ? C._data(e, i, t) : (e.removeEventListener(n, r, !0),
                        C._removeData(e, i))
                }
            }
        }),
        C.fn.extend({
            on: function (e, t, n, i) {
                return be(this, e, t, n, i)
            },
            one: function (e, t, n, i) {
                return be(this, e, t, n, i, 1)
            },
            off: function (e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj)
                    return i = e.handleObj,
                        C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                        this;
                if ("object" != typeof e)
                    return !1 !== t && "function" != typeof t || (n = t,
                        t = void 0),
                        !1 === n && (n = ge),
                        this.each(function () {
                            C.event.remove(this, e, n, t)
                        });
                for (r in e)
                    this.off(r, t, e[r]);
                return this
            },
            trigger: function (e, t) {
                return this.each(function () {
                    C.event.trigger(e, t, this)
                })
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                return n ? C.event.trigger(e, t, n, !0) : void 0
            }
        });
    var _e = / jQuery\d+="(?:null|\d+)"/g
        , Se = new RegExp("<(?:" + ie + ")[\\s/>]", "i")
        , xe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
        , Te = /<script|<style|<link/i
        , je = /checked\s*(?:[^=]|=\s*.checked.)/i
        , ke = /^true\/(.*)/
        , Ce = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
        , Ae = re(f).appendChild(f.createElement("div"));
    function Pe(e, t) {
        return C.nodeName(e, "table") && C.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function Oe(e) {
        return e.type = (null !== C.find.attr(e, "type")) + "/" + e.type,
            e
    }
    function Ie(e) {
        var t = ke.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
            e
    }
    function Ee(e, t) {
        if (1 === t.nodeType && C.hasData(e)) {
            var n, i, r, o = C._data(e), a = C._data(t, o), s = o.events;
            if (s)
                for (n in delete a.handle,
                    a.events = {},
                    s)
                    for (i = 0,
                        r = s[n].length; i < r; i++)
                        C.event.add(t, n, s[n][i]);
            a.data && (a.data = C.extend({}, a.data))
        }
    }
    function Le(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(),
                !k.noCloneEvent && t[C.expando]) {
                for (i in (r = C._data(t)).events)
                    C.removeEvent(t, i, r.handle);
                t.removeAttribute(C.expando)
            }
            "script" === n && t.text !== e.text ? (Oe(t).text = e.text,
                Ie(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
                    k.html5Clone && e.innerHTML && !C.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Z.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
                        t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }
    function Ne(n, i, r, o) {
        i = v.apply([], i);
        var e, t, a, s, l, d, c = 0, u = n.length, p = u - 1, h = i[0], f = C.isFunction(h);
        if (f || 1 < u && "string" == typeof h && !k.checkClone && je.test(h))
            return n.each(function (e) {
                var t = n.eq(e);
                f && (i[0] = h.call(this, e, t.html())),
                    Ne(t, i, r, o)
            });
        if (u && (e = (d = ce(i, n[0].ownerDocument, !1, n, o)).firstChild,
            1 === d.childNodes.length && (d = e),
            e || o)) {
            for (a = (s = C.map(we(d, "script"), Oe)).length; c < u; c++)
                t = d,
                    c !== p && (t = C.clone(t, !0, !0),
                        a && C.merge(s, we(t, "script"))),
                    r.call(n[c], t, c);
            if (a)
                for (l = s[s.length - 1].ownerDocument,
                    C.map(s, Ie),
                    c = 0; c < a; c++)
                    t = s[c],
                        te.test(t.type || "") && !C._data(t, "globalEval") && C.contains(l, t) && (t.src ? C._evalUrl && C._evalUrl(t.src) : C.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Ce, "")));
            d = e = null
        }
        return n
    }
    function Ve(e, t, n) {
        for (var i, r = t ? C.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
            n || 1 !== i.nodeType || C.cleanData(we(i)),
                i.parentNode && (n && C.contains(i.ownerDocument, i) && ae(we(i, "script")),
                    i.parentNode.removeChild(i));
        return e
    }
    C.extend({
        htmlPrefilter: function (e) {
            return e.replace(xe, "<$1></$2>")
        },
        clone: function (e, t, n) {
            var i, r, o, a, s, l = C.contains(e.ownerDocument, e);
            if (k.html5Clone || C.isXMLDoc(e) || !Se.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Ae.innerHTML = e.outerHTML,
                Ae.removeChild(o = Ae.firstChild)),
                !(k.noCloneEvent && k.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                for (i = we(o),
                    s = we(e),
                    a = 0; null != (r = s[a]); ++a)
                    i[a] && Le(r, i[a]);
            if (t)
                if (n)
                    for (s = s || we(e),
                        i = i || we(o),
                        a = 0; null != (r = s[a]); a++)
                        Ee(r, i[a]);
                else
                    Ee(e, o);
            return 0 < (i = we(o, "script")).length && ae(i, !l && we(e, "script")),
                i = s = r = null,
                o
        },
        cleanData: function (e, t) {
            for (var n, i, r, o, a = 0, s = C.expando, l = C.cache, d = k.attributes, c = C.event.special; null != (n = e[a]); a++)
                if ((t || M(n)) && (o = (r = n[s]) && l[r])) {
                    if (o.events)
                        for (i in o.events)
                            c[i] ? C.event.remove(n, i) : C.removeEvent(n, i, o.handle);
                    l[r] && (delete l[r],
                        d || "undefined" == typeof n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s),
                        u.push(r))
                }
        }
    }),
        C.fn.extend({
            domManip: Ne,
            detach: function (e) {
                return Ve(this, e, !0)
            },
            remove: function (e) {
                return Ve(this, e)
            },
            text: function (e) {
                return Y(this, function (e) {
                    return void 0 === e ? C.text(this) : this.empty().append((this[0] && this[0].ownerDocument || f).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function () {
                return Ne(this, arguments, function (e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Pe(this, e).appendChild(e)
                })
            },
            prepend: function () {
                return Ne(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Pe(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function () {
                return Ne(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function () {
                return Ne(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && C.cleanData(we(e, !1)); e.firstChild;)
                        e.removeChild(e.firstChild);
                    e.options && C.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function (e, t) {
                return e = null != e && e,
                    t = null == t ? e : t,
                    this.map(function () {
                        return C.clone(this, e, t)
                    })
            },
            html: function (e) {
                return Y(this, function (e) {
                    var t = this[0] || {}
                        , n = 0
                        , i = this.length;
                    if (void 0 === e)
                        return 1 === t.nodeType ? t.innerHTML.replace(_e, "") : void 0;
                    if ("string" == typeof e && !Te.test(e) && (k.htmlSerialize || !Se.test(e)) && (k.leadingWhitespace || !ne.test(e)) && !oe[(ee.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = C.htmlPrefilter(e);
                        try {
                            for (; n < i; n++)
                                1 === (t = this[n] || {}).nodeType && (C.cleanData(we(t, !1)),
                                    t.innerHTML = e);
                            t = 0
                        } catch (c) { }
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function () {
                var n = [];
                return Ne(this, arguments, function (e) {
                    var t = this.parentNode;
                    C.inArray(this, n) < 0 && (C.cleanData(we(this)),
                        t && t.replaceChild(e, this))
                }, n)
            }
        }),
        C.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, a) {
            C.fn[e] = function (e) {
                for (var t, n = 0, i = [], r = C(e), o = r.length - 1; n <= o; n++)
                    t = n === o ? this : this.clone(!0),
                        C(r[n])[a](t),
                        s.apply(i, t.get());
                return this.pushStack(i)
            }
        });
    var De, Me = {
        HTML: "block",
        BODY: "block"
    };
    function Fe(e, t) {
        var n = C(t.createElement(e)).appendTo(t.body)
            , i = C.css(n[0], "display");
        return n.detach(),
            i
    }
    function He(e) {
        var t = f
            , n = Me[e];
        return n || ("none" !== (n = Fe(e, t)) && n || ((t = ((De = (De || C("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || De[0].contentDocument).document).write(),
            t.close(),
            n = Fe(e, t),
            De.detach()),
            Me[e] = n),
            n
    }
    var Re = /^margin/
        , Be = new RegExp("^(" + z + ")(?!px)[a-z%]+$", "i")
        , Ue = function (e, t, n, i) {
            var r, o, a = {};
            for (o in t)
                a[o] = e.style[o],
                    e.style[o] = t[o];
            for (o in r = n.apply(e, i || []),
                t)
                e.style[o] = a[o];
            return r
        }
        , We = f.documentElement;
    !function () {
        var i, r, o, a, s, l, d = f.createElement("div"), c = f.createElement("div");
        if (c.style) {
            function e() {
                var e, t, n = f.documentElement;
                n.appendChild(d),
                    c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                    i = o = l = !1,
                    r = s = !0,
                    j.getComputedStyle && (t = j.getComputedStyle(c),
                        i = "1%" !== (t || {}).top,
                        l = "2px" === (t || {}).marginLeft,
                        o = "4px" === (t || {
                            width: "4px"
                        }).width,
                        c.style.marginRight = "50%",
                        r = "4px" === (t || {
                            marginRight: "4px"
                        }).marginRight,
                        (e = c.appendChild(f.createElement("div"))).style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                        e.style.marginRight = e.style.width = "0",
                        c.style.width = "1px",
                        s = !parseFloat((j.getComputedStyle(e) || {}).marginRight),
                        c.removeChild(e)),
                    c.style.display = "none",
                    (a = 0 === c.getClientRects().length) && (c.style.display = "",
                        c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                        c.childNodes[0].style.borderCollapse = "separate",
                        (e = c.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                        (a = 0 === e[0].offsetHeight) && (e[0].style.display = "",
                            e[1].style.display = "none",
                            a = 0 === e[0].offsetHeight)),
                    n.removeChild(d)
            }
            c.style.cssText = "float:left;opacity:.5",
                k.opacity = "0.5" === c.style.opacity,
                k.cssFloat = !!c.style.cssFloat,
                c.style.backgroundClip = "content-box",
                c.cloneNode(!0).style.backgroundClip = "",
                k.clearCloneStyle = "content-box" === c.style.backgroundClip,
                (d = f.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
                c.innerHTML = "",
                d.appendChild(c),
                k.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing,
                C.extend(k, {
                    reliableHiddenOffsets: function () {
                        return null == i && e(),
                            a
                    },
                    boxSizingReliable: function () {
                        return null == i && e(),
                            o
                    },
                    pixelMarginRight: function () {
                        return null == i && e(),
                            r
                    },
                    pixelPosition: function () {
                        return null == i && e(),
                            i
                    },
                    reliableMarginRight: function () {
                        return null == i && e(),
                            s
                    },
                    reliableMarginLeft: function () {
                        return null == i && e(),
                            l
                    }
                })
        }
    }();
    var ze, qe, Je = /^(top|right|bottom|left)$/;
    function $e(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    j.getComputedStyle ? (ze = function (e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = j),
            t.getComputedStyle(e)
    }
        ,
        qe = function (e, t, n) {
            var i, r, o, a, s = e.style;
            return "" !== (a = (n = n || ze(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== a || C.contains(e.ownerDocument, e) || (a = C.style(e, t)),
                n && !k.pixelMarginRight() && Be.test(a) && Re.test(t) && (i = s.width,
                    r = s.minWidth,
                    o = s.maxWidth,
                    s.minWidth = s.maxWidth = s.width = a,
                    a = n.width,
                    s.width = i,
                    s.minWidth = r,
                    s.maxWidth = o),
                void 0 === a ? a : a + ""
        }
    ) : We.currentStyle && (ze = function (e) {
        return e.currentStyle
    }
        ,
        qe = function (e, t, n) {
            var i, r, o, a, s = e.style;
            return null == (a = (n = n || ze(e)) ? n[t] : void 0) && s && s[t] && (a = s[t]),
                Be.test(a) && !Je.test(t) && (i = s.left,
                    (o = (r = e.runtimeStyle) && r.left) && (r.left = e.currentStyle.left),
                    s.left = "fontSize" === t ? "1em" : a,
                    a = s.pixelLeft + "px",
                    s.left = i,
                    o && (r.left = o)),
                void 0 === a ? a : a + "" || "auto"
        }
    );
    var Qe = /alpha\([^)]*\)/i
        , Ke = /opacity\s*=\s*([^)]*)/i
        , Xe = /^(none|table(?!-c[ea]).+)/
        , Ge = new RegExp("^(" + z + ")(.*)$", "i")
        , Ye = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
        , Ze = {
            letterSpacing: "0",
            fontWeight: "400"
        }
        , et = ["Webkit", "O", "Moz", "ms"]
        , tt = f.createElement("div").style;
    function nt(e) {
        if (e in tt)
            return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = et.length; n--;)
            if ((e = et[n] + t) in tt)
                return e
    }
    function it(e, t) {
        for (var n, i, r, o = [], a = 0, s = e.length; a < s; a++)
            (i = e[a]).style && (o[a] = C._data(i, "olddisplay"),
                n = i.style.display,
                t ? (o[a] || "none" !== n || (i.style.display = ""),
                    "" === i.style.display && $(i) && (o[a] = C._data(i, "olddisplay", He(i.nodeName)))) : (r = $(i),
                        (n && "none" !== n || !r) && C._data(i, "olddisplay", r ? n : C.css(i, "display"))));
        for (a = 0; a < s; a++)
            (i = e[a]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
        return e
    }
    function rt(e, t, n) {
        var i = Ge.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }
    function ot(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2)
            "margin" === n && (a += C.css(e, n + J[o], !0, r)),
                i ? ("content" === n && (a -= C.css(e, "padding" + J[o], !0, r)),
                    "margin" !== n && (a -= C.css(e, "border" + J[o] + "Width", !0, r))) : (a += C.css(e, "padding" + J[o], !0, r),
                        "padding" !== n && (a += C.css(e, "border" + J[o] + "Width", !0, r)));
        return a
    }
    function at(e, t, n) {
        var i = !0
            , r = "width" === t ? e.offsetWidth : e.offsetHeight
            , o = ze(e)
            , a = k.boxSizing && "border-box" === C.css(e, "boxSizing", !1, o);
        if (r <= 0 || null == r) {
            if (((r = qe(e, t, o)) < 0 || null == r) && (r = e.style[t]),
                Be.test(r))
                return r;
            i = a && (k.boxSizingReliable() || r === e.style[t]),
                r = parseFloat(r) || 0
        }
        return r + ot(e, t, n || (a ? "border" : "content"), i, o) + "px"
    }
    function st(e, t, n, i, r) {
        return new st.prototype.init(e, t, n, i, r)
    }
    C.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = qe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": k.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = C.camelCase(t), l = e.style;
                if (t = C.cssProps[s] || (C.cssProps[s] = nt(s) || s),
                    a = C.cssHooks[t] || C.cssHooks[s],
                    void 0 === n)
                    return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t];
                if ("string" === (o = typeof n) && (r = q.exec(n)) && r[1] && (n = Q(e, t, r),
                    o = "number"),
                    null != n && n == n && ("number" === o && (n += r && r[3] || (C.cssNumber[s] ? "" : "px")),
                        k.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                        !(a && "set" in a && void 0 === (n = a.set(e, n, i)))))
                    try {
                        l[t] = n
                    } catch (d) { }
            }
        },
        css: function (e, t, n, i) {
            var r, o, a, s = C.camelCase(t);
            return t = C.cssProps[s] || (C.cssProps[s] = nt(s) || s),
                (a = C.cssHooks[t] || C.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)),
                void 0 === o && (o = qe(e, t, i)),
                "normal" === o && t in Ze && (o = Ze[t]),
                "" === n || n ? (r = parseFloat(o),
                    !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }),
        C.each(["height", "width"], function (e, r) {
            C.cssHooks[r] = {
                get: function (e, t, n) {
                    return t ? Xe.test(C.css(e, "display")) && 0 === e.offsetWidth ? Ue(e, Ye, function () {
                        return at(e, r, n)
                    }) : at(e, r, n) : void 0
                },
                set: function (e, t, n) {
                    var i = n && ze(e);
                    return rt(0, t, n ? ot(e, r, n, k.boxSizing && "border-box" === C.css(e, "boxSizing", !1, i), i) : 0)
                }
            }
        }),
        k.opacity || (C.cssHooks.opacity = {
            get: function (e, t) {
                return Ke.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function (e, t) {
                var n = e.style
                    , i = e.currentStyle
                    , r = C.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
                    , o = i && i.filter || n.filter || "";
                ((n.zoom = 1) <= t || "" === t) && "" === C.trim(o.replace(Qe, "")) && n.removeAttribute && (n.removeAttribute("filter"),
                    "" === t || i && !i.filter) || (n.filter = Qe.test(o) ? o.replace(Qe, r) : o + " " + r)
            }
        }),
        C.cssHooks.marginRight = $e(k.reliableMarginRight, function (e, t) {
            return t ? Ue(e, {
                display: "inline-block"
            }, qe, [e, "marginRight"]) : void 0
        }),
        C.cssHooks.marginLeft = $e(k.reliableMarginLeft, function (e, t) {
            return t ? (parseFloat(qe(e, "marginLeft")) || (C.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - Ue(e, {
                marginLeft: 0
            }, function () {
                return e.getBoundingClientRect().left
            }) : 0)) + "px" : void 0
        }),
        C.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (r, o) {
            C.cssHooks[r + o] = {
                expand: function (e) {
                    for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                        n[r + J[t] + o] = i[t] || i[t - 2] || i[0];
                    return n
                }
            },
                Re.test(r) || (C.cssHooks[r + o].set = rt)
        }),
        C.fn.extend({
            css: function (e, t) {
                return Y(this, function (e, t, n) {
                    var i, r, o = {}, a = 0;
                    if (C.isArray(t)) {
                        for (i = ze(e),
                            r = t.length; a < r; a++)
                            o[t[a]] = C.css(e, t[a], !1, i);
                        return o
                    }
                    return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
                }, e, t, 1 < arguments.length)
            },
            show: function () {
                return it(this, !0)
            },
            hide: function () {
                return it(this)
            },
            toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    $(this) ? C(this).show() : C(this).hide()
                })
            }
        }),
        ((C.Tween = st).prototype = {
            constructor: st,
            init: function (e, t, n, i, r, o) {
                this.elem = e,
                    this.prop = n,
                    this.easing = r || C.easing._default,
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = i,
                    this.unit = o || (C.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var e = st.propHooks[this.prop];
                return e && e.get ? e.get(this) : st.propHooks._default.get(this)
            },
            run: function (e) {
                var t, n = st.propHooks[this.prop];
                return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                    this.now = (this.end - this.start) * t + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : st.propHooks._default.set(this),
                    this
            }
        }).init.prototype = st.prototype,
        (st.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function (e) {
                    C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[C.cssProps[e.prop]] && !C.cssHooks[e.prop] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }).scrollTop = st.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        C.easing = {
            linear: function (e) {
                return e
            },
            swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        C.fx = st.prototype.init,
        C.fx.step = {};
    var lt, dt, ct, ut, pt, ht, ft, vt = /^(?:toggle|show|hide)$/, yt = /queueHooks$/;
    function gt() {
        return j.setTimeout(function () {
            lt = void 0
        }),
            lt = C.now()
    }
    function mt(e, t) {
        var n, i = {
            height: e
        }, r = 0;
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = J[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
            i
    }
    function bt(e, t, n) {
        for (var i, r = (wt.tweeners[t] || []).concat(wt.tweeners["*"]), o = 0, a = r.length; o < a; o++)
            if (i = r[o].call(n, t, e))
                return i
    }
    function wt(o, e, t) {
        var n, a, i = 0, r = wt.prefilters.length, s = C.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (a)
                return !1;
            for (var e = lt || gt(), t = Math.max(0, d.startTime + d.duration - e), n = 1 - (t / d.duration || 0), i = 0, r = d.tweens.length; i < r; i++)
                d.tweens[i].run(n);
            return s.notifyWith(o, [d, n, t]),
                n < 1 && r ? t : (s.resolveWith(o, [d]),
                    !1)
        }, d = s.promise({
            elem: o,
            props: C.extend({}, e),
            opts: C.extend(!0, {
                specialEasing: {},
                easing: C.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: lt || gt(),
            duration: t.duration,
            tweens: [],
            createTween: function (e, t) {
                var n = C.Tween(o, d.opts, e, t, d.opts.specialEasing[e] || d.opts.easing);
                return d.tweens.push(n),
                    n
            },
            stop: function (e) {
                var t = 0
                    , n = e ? d.tweens.length : 0;
                if (a)
                    return this;
                for (a = !0; t < n; t++)
                    d.tweens[t].run(1);
                return e ? (s.notifyWith(o, [d, 1, 0]),
                    s.resolveWith(o, [d, e])) : s.rejectWith(o, [d, e]),
                    this
            }
        }), c = d.props;
        for (function u(e, t) {
            var n, i, r, o, a;
            for (n in e)
                if (r = t[i = C.camelCase(n)],
                    o = e[n],
                    C.isArray(o) && (r = o[1],
                        o = e[n] = o[0]),
                    n !== i && (e[i] = o,
                        delete e[n]),
                    (a = C.cssHooks[i]) && "expand" in a)
                    for (n in o = a.expand(o),
                        delete e[i],
                        o)
                        n in e || (e[n] = o[n],
                            t[n] = r);
                else
                    t[i] = r
        }(c, d.opts.specialEasing); i < r; i++)
            if (n = wt.prefilters[i].call(d, o, c, d.opts))
                return C.isFunction(n.stop) && (C._queueHooks(d.elem, d.opts.queue).stop = C.proxy(n.stop, n)),
                    n;
        return C.map(c, bt, d),
            C.isFunction(d.opts.start) && d.opts.start.call(o, d),
            C.fx.timer(C.extend(l, {
                elem: o,
                anim: d,
                queue: d.opts.queue
            })),
            d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always)
    }
    C.Animation = C.extend(wt, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return Q(n.elem, e, q.exec(t), n),
                    n
            }
            ]
        },
        tweener: function (e, t) {
            for (var n, i = 0, r = (e = C.isFunction(e) ? (t = e,
                ["*"]) : e.match(L)).length; i < r; i++)
                n = e[i],
                    wt.tweeners[n] = wt.tweeners[n] || [],
                    wt.tweeners[n].unshift(t)
        },
        prefilters: [function vn(t, e, n) {
            var i, r, o, a, s, l, d, c = this, u = {}, p = t.style, h = t.nodeType && $(t), f = C._data(t, "fxshow");
            for (i in n.queue || (null == (s = C._queueHooks(t, "fx")).unqueued && (s.unqueued = 0,
                l = s.empty.fire,
                s.empty.fire = function () {
                    s.unqueued || l()
                }
            ),
                s.unqueued++,
                c.always(function () {
                    c.always(function () {
                        s.unqueued--,
                            C.queue(t, "fx").length || s.empty.fire()
                    })
                })),
                1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
                    "inline" === ("none" === (d = C.css(t, "display")) ? C._data(t, "olddisplay") || He(t.nodeName) : d) && "none" === C.css(t, "float") && (k.inlineBlockNeedsLayout && "inline" !== He(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
                n.overflow && (p.overflow = "hidden",
                    k.shrinkWrapBlocks() || c.always(function () {
                        p.overflow = n.overflow[0],
                            p.overflowX = n.overflow[1],
                            p.overflowY = n.overflow[2]
                    })),
                e)
                if (r = e[i],
                    vt.exec(r)) {
                    if (delete e[i],
                        o = o || "toggle" === r,
                        r === (h ? "hide" : "show")) {
                        if ("show" !== r || !f || void 0 === f[i])
                            continue;
                        h = !0
                    }
                    u[i] = f && f[i] || C.style(t, i)
                } else
                    d = void 0;
            if (C.isEmptyObject(u))
                "inline" === ("none" === d ? He(t.nodeName) : d) && (p.display = d);
            else
                for (i in f ? "hidden" in f && (h = f.hidden) : f = C._data(t, "fxshow", {}),
                    o && (f.hidden = !h),
                    h ? C(t).show() : c.done(function () {
                        C(t).hide()
                    }),
                    c.done(function () {
                        var e;
                        for (e in C._removeData(t, "fxshow"),
                            u)
                            C.style(t, e, u[e])
                    }),
                    u)
                    a = bt(h ? f[i] : 0, i, c),
                        i in f || (f[i] = a.start,
                            h && (a.end = a.start,
                                a.start = "width" === i || "height" === i ? 1 : 0))
        }
        ],
        prefilter: function (e, t) {
            t ? wt.prefilters.unshift(e) : wt.prefilters.push(e)
        }
    }),
        C.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? C.extend({}, e) : {
                complete: n || !n && t || C.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !C.isFunction(t) && t
            };
            return i.duration = C.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in C.fx.speeds ? C.fx.speeds[i.duration] : C.fx.speeds._default,
                null != i.queue && !0 !== i.queue || (i.queue = "fx"),
                i.old = i.complete,
                i.complete = function () {
                    C.isFunction(i.old) && i.old.call(this),
                        i.queue && C.dequeue(this, i.queue)
                }
                ,
                i
        }
        ,
        C.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter($).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function (t, e, n, i) {
                var r = C.isEmptyObject(t)
                    , o = C.speed(e, n, i)
                    , a = function () {
                        var e = wt(this, C.extend({}, t), o);
                        (r || C._data(this, "finish")) && e.stop(!0)
                    };
                return a.finish = a,
                    r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function (r, e, o) {
                var a = function (e) {
                    var t = e.stop;
                    delete e.stop,
                        t(o)
                };
                return "string" != typeof r && (o = e,
                    e = r,
                    r = void 0),
                    e && !1 !== r && this.queue(r || "fx", []),
                    this.each(function () {
                        var e = !0
                            , t = null != r && r + "queueHooks"
                            , n = C.timers
                            , i = C._data(this);
                        if (t)
                            i[t] && i[t].stop && a(i[t]);
                        else
                            for (t in i)
                                i[t] && i[t].stop && yt.test(t) && a(i[t]);
                        for (t = n.length; t--;)
                            n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o),
                                e = !1,
                                n.splice(t, 1));
                        !e && o || C.dequeue(this, r)
                    })
            },
            finish: function (a) {
                return !1 !== a && (a = a || "fx"),
                    this.each(function () {
                        var e, t = C._data(this), n = t[a + "queue"], i = t[a + "queueHooks"], r = C.timers, o = n ? n.length : 0;
                        for (t.finish = !0,
                            C.queue(this, a, []),
                            i && i.stop && i.stop.call(this, !0),
                            e = r.length; e--;)
                            r[e].elem === this && r[e].queue === a && (r[e].anim.stop(!0),
                                r.splice(e, 1));
                        for (e = 0; e < o; e++)
                            n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish
                    })
            }
        }),
        C.each(["toggle", "show", "hide"], function (e, i) {
            var r = C.fn[i];
            C.fn[i] = function (e, t, n) {
                return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(mt(i, !0), e, t, n)
            }
        }),
        C.each({
            slideDown: mt("show"),
            slideUp: mt("hide"),
            slideToggle: mt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, i) {
            C.fn[e] = function (e, t, n) {
                return this.animate(i, e, t, n)
            }
        }),
        C.timers = [],
        C.fx.tick = function () {
            var e, t = C.timers, n = 0;
            for (lt = C.now(); n < t.length; n++)
                (e = t[n])() || t[n] !== e || t.splice(n--, 1);
            t.length || C.fx.stop(),
                lt = void 0
        }
        ,
        C.fx.timer = function (e) {
            C.timers.push(e),
                e() ? C.fx.start() : C.timers.pop()
        }
        ,
        C.fx.interval = 13,
        C.fx.start = function () {
            dt || (dt = j.setInterval(C.fx.tick, C.fx.interval))
        }
        ,
        C.fx.stop = function () {
            j.clearInterval(dt),
                dt = null
        }
        ,
        C.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        C.fn.delay = function (i, e) {
            return i = C.fx && C.fx.speeds[i] || i,
                e = e || "fx",
                this.queue(e, function (e, t) {
                    var n = j.setTimeout(e, i);
                    t.stop = function () {
                        j.clearTimeout(n)
                    }
                })
        }
        ,
        ut = f.createElement("input"),
        pt = f.createElement("div"),
        ht = f.createElement("select"),
        ft = ht.appendChild(f.createElement("option")),
        (pt = f.createElement("div")).setAttribute("className", "t"),
        pt.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        ct = pt.getElementsByTagName("a")[0],
        ut.setAttribute("type", "checkbox"),
        pt.appendChild(ut),
        (ct = pt.getElementsByTagName("a")[0]).style.cssText = "top:1px",
        k.getSetAttribute = "t" !== pt.className,
        k.style = /top/.test(ct.getAttribute("style")),
        k.hrefNormalized = "/a" === ct.getAttribute("href"),
        k.checkOn = !!ut.value,
        k.optSelected = ft.selected,
        k.enctype = !!f.createElement("form").enctype,
        ht.disabled = !0,
        k.optDisabled = !ft.disabled,
        (ut = f.createElement("input")).setAttribute("value", ""),
        k.input = "" === ut.getAttribute("value"),
        ut.value = "t",
        ut.setAttribute("type", "radio"),
        k.radioValue = "t" === ut.value;
    var _t = /\r/g
        , St = /[\x20\t\r\n\f]+/g;
    C.fn.extend({
        val: function (n) {
            var i, e, r, t = this[0];
            return arguments.length ? (r = C.isFunction(n),
                this.each(function (e) {
                    var t;
                    1 === this.nodeType && (null == (t = r ? n.call(this, e, C(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : C.isArray(t) && (t = C.map(t, function (e) {
                        return null == e ? "" : e + ""
                    })),
                        (i = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
                })) : t ? (i = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(_t, "") : null == e ? "" : e : void 0
        }
    }),
        C.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = C.find.attr(e, "value");
                        return null != t ? t : C.trim(C.text(e)).replace(St, " ")
                    }
                },
                select: {
                    get: function (e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, a = o ? null : [], s = o ? r + 1 : i.length, l = r < 0 ? s : o ? r : 0; l < s; l++)
                            if (((n = i[l]).selected || l === r) && (k.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !C.nodeName(n.parentNode, "optgroup"))) {
                                if (t = C(n).val(),
                                    o)
                                    return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function (e, t) {
                        for (var n, i, r = e.options, o = C.makeArray(t), a = r.length; a--;)
                            if (i = r[a],
                                -1 < C.inArray(C.valHooks.option.get(i), o))
                                try {
                                    i.selected = n = !0
                                } catch (l) {
                                    i.scrollHeight
                                }
                            else
                                i.selected = !1;
                        return n || (e.selectedIndex = -1),
                            r
                    }
                }
            }
        }),
        C.each(["radio", "checkbox"], function () {
            C.valHooks[this] = {
                set: function (e, t) {
                    return C.isArray(t) ? e.checked = -1 < C.inArray(C(e).val(), t) : void 0
                }
            },
                k.checkOn || (C.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
                )
        });
    var xt, Tt, jt = C.expr.attrHandle, kt = /^(?:checked|selected)$/i, Ct = k.getSetAttribute, At = k.input;
    C.fn.extend({
        attr: function (e, t) {
            return Y(this, C.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function (e) {
            return this.each(function () {
                C.removeAttr(this, e)
            })
        }
    }),
        C.extend({
            attr: function (e, t, n) {
                var i, r, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return "undefined" == typeof e.getAttribute ? C.prop(e, t, n) : (1 === o && C.isXMLDoc(e) || (t = t.toLowerCase(),
                        r = C.attrHooks[t] || (C.expr.match.bool.test(t) ? Tt : xt)),
                        void 0 !== n ? null === n ? void C.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                            n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = C.find.attr(e, t)) ? void 0 : i)
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!k.radioValue && "radio" === t && C.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                                n && (e.value = n),
                                t
                        }
                    }
                }
            },
            removeAttr: function (e, t) {
                var n, i, r = 0, o = t && t.match(L);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++];)
                        i = C.propFix[n] || n,
                            C.expr.match.bool.test(n) ? At && Ct || !kt.test(n) ? e[i] = !1 : e[C.camelCase("default-" + n)] = e[i] = !1 : C.attr(e, n, ""),
                            e.removeAttribute(Ct ? n : i)
            }
        }),
        Tt = {
            set: function (e, t, n) {
                return !1 === t ? C.removeAttr(e, n) : At && Ct || !kt.test(n) ? e.setAttribute(!Ct && C.propFix[n] || n, n) : e[C.camelCase("default-" + n)] = e[n] = !0,
                    n
            }
        },
        C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var o = jt[t] || C.find.attr;
            At && Ct || !kt.test(t) ? jt[t] = function (e, t, n) {
                var i, r;
                return n || (r = jt[t],
                    jt[t] = i,
                    i = null != o(e, t, n) ? t.toLowerCase() : null,
                    jt[t] = r),
                    i
            }
                : jt[t] = function (e, t, n) {
                    return n ? void 0 : e[C.camelCase("default-" + t)] ? t.toLowerCase() : null
                }
        }),
        At && Ct || (C.attrHooks.value = {
            set: function (e, t, n) {
                return C.nodeName(e, "input") ? void (e.defaultValue = t) : xt && xt.set(e, t, n)
            }
        }),
        Ct || (xt = {
            set: function (e, t, n) {
                var i = e.getAttributeNode(n);
                return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)),
                    i.value = t += "",
                    "value" === n || t === e.getAttribute(n) ? t : void 0
            }
        },
            jt.id = jt.name = jt.coords = function (e, t, n) {
                var i;
                return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
            }
            ,
            C.valHooks.button = {
                get: function (e, t) {
                    var n = e.getAttributeNode(t);
                    return n && n.specified ? n.value : void 0
                },
                set: xt.set
            },
            C.attrHooks.contenteditable = {
                set: function (e, t, n) {
                    xt.set(e, "" !== t && t, n)
                }
            },
            C.each(["width", "height"], function (e, n) {
                C.attrHooks[n] = {
                    set: function (e, t) {
                        return "" === t ? (e.setAttribute(n, "auto"),
                            t) : void 0
                    }
                }
            })),
        k.style || (C.attrHooks.style = {
            get: function (e) {
                return e.style.cssText || void 0
            },
            set: function (e, t) {
                return e.style.cssText = t + ""
            }
        });
    var Pt = /^(?:input|select|textarea|button|object)$/i
        , Ot = /^(?:a|area)$/i;
    C.fn.extend({
        prop: function (e, t) {
            return Y(this, C.prop, e, t, 1 < arguments.length)
        },
        removeProp: function (e) {
            return e = C.propFix[e] || e,
                this.each(function () {
                    try {
                        this[e] = void 0,
                            delete this[e]
                    } catch (t) { }
                })
        }
    }),
        C.extend({
            prop: function (e, t, n) {
                var i, r, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return 1 === o && C.isXMLDoc(e) || (t = C.propFix[t] || t,
                        r = C.propHooks[t]),
                        void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = C.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Pt.test(e.nodeName) || Ot.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }),
        k.hrefNormalized || C.each(["href", "src"], function (e, t) {
            C.propHooks[t] = {
                get: function (e) {
                    return e.getAttribute(t, 4)
                }
            }
        }),
        k.optSelected || (C.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex),
                    null
            },
            set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex)
            }
        }),
        C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            C.propFix[this.toLowerCase()] = this
        }),
        k.enctype || (C.propFix.enctype = "encoding");
    var It = /[\t\r\n\f]/g;
    function Et(e) {
        return C.attr(e, "class") || ""
    }
    C.fn.extend({
        addClass: function (t) {
            var e, n, i, r, o, a, s, l = 0;
            if (C.isFunction(t))
                return this.each(function (e) {
                    C(this).addClass(t.call(this, e, Et(this)))
                });
            if ("string" == typeof t && t)
                for (e = t.match(L) || []; n = this[l++];)
                    if (r = Et(n),
                        i = 1 === n.nodeType && (" " + r + " ").replace(It, " ")) {
                        for (a = 0; o = e[a++];)
                            i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (s = C.trim(i)) && C.attr(n, "class", s)
                    }
            return this
        },
        removeClass: function (t) {
            var e, n, i, r, o, a, s, l = 0;
            if (C.isFunction(t))
                return this.each(function (e) {
                    C(this).removeClass(t.call(this, e, Et(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(L) || []; n = this[l++];)
                    if (r = Et(n),
                        i = 1 === n.nodeType && (" " + r + " ").replace(It, " ")) {
                        for (a = 0; o = e[a++];)
                            for (; -1 < i.indexOf(" " + o + " ");)
                                i = i.replace(" " + o + " ", " ");
                        r !== (s = C.trim(i)) && C.attr(n, "class", s)
                    }
            return this
        },
        toggleClass: function (r, t) {
            var o = typeof r;
            return "boolean" == typeof t && "string" === o ? t ? this.addClass(r) : this.removeClass(r) : C.isFunction(r) ? this.each(function (e) {
                C(this).toggleClass(r.call(this, e, Et(this), t), t)
            }) : this.each(function () {
                var e, t, n, i;
                if ("string" === o)
                    for (t = 0,
                        n = C(this),
                        i = r.match(L) || []; e = i[t++];)
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else
                    void 0 !== r && "boolean" !== o || ((e = Et(this)) && C._data(this, "__className__", e),
                        C.attr(this, "class", e || !1 === r ? "" : C._data(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + Et(n) + " ").replace(It, " ").indexOf(t))
                    return !0;
            return !1
        }
    }),
        C.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, n) {
            C.fn[n] = function (e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
            }
        }),
        C.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        });
    var Lt = j.location
        , Nt = C.now()
        , Vt = /\?/
        , Dt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    C.parseJSON = function (e) {
        if (j.JSON && j.JSON.parse)
            return j.JSON.parse(e + "");
        var r, o = null, t = C.trim(e + "");
        return t && !C.trim(t.replace(Dt, function (e, t, n, i) {
            return r && t && (o = 0),
                0 === o ? e : (r = n || t,
                    o += !i - !n,
                    "")
        })) ? Function("return " + t)() : C.error("Invalid JSON: " + e)
    }
        ,
        C.parseXML = function (e) {
            var t;
            if (!e || "string" != typeof e)
                return null;
            try {
                j.DOMParser ? t = (new j.DOMParser).parseFromString(e, "text/xml") : ((t = new j.ActiveXObject("Microsoft.XMLDOM")).async = "false",
                    t.loadXML(e))
            } catch (c) {
                t = void 0
            }
            return t && t.documentElement && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e),
                t
        }
        ;
    var Mt = /#.*$/
        , Ft = /([?&])_=[^&]*/
        , Ht = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
        , Rt = /^(?:GET|HEAD)$/
        , Bt = /^\/\//
        , Ut = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
        , Wt = {}
        , zt = {}
        , qt = "*/".concat("*")
        , Jt = Lt.href
        , $t = Ut.exec(Jt.toLowerCase()) || [];
    function Qt(o) {
        return function (e, t) {
            "string" != typeof e && (t = e,
                e = "*");
            var n, i = 0, r = e.toLowerCase().match(L) || [];
            if (C.isFunction(t))
                for (; n = r[i++];)
                    "+" === n.charAt(0) ? (n = n.slice(1) || "*",
                        (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function Kt(t, r, o, a) {
        var s = {}
            , l = t === zt;
        function d(e) {
            var i;
            return s[e] = !0,
                C.each(t[e] || [], function (e, t) {
                    var n = t(r, o, a);
                    return "string" != typeof n || l || s[n] ? l ? !(i = n) : void 0 : (r.dataTypes.unshift(n),
                        d(n),
                        !1)
                }),
                i
        }
        return d(r.dataTypes[0]) || !s["*"] && d("*")
    }
    function Xt(e, t) {
        var n, i, r = C.ajaxSettings.flatOptions || {};
        for (i in t)
            void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && C.extend(!0, e, n),
            e
    }
    C.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Jt,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test($t[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": qt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": C.parseJSON,
                "text xml": C.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? Xt(Xt(e, C.ajaxSettings), t) : Xt(C.ajaxSettings, e)
        },
        ajaxPrefilter: Qt(Wt),
        ajaxTransport: Qt(zt),
        ajax: function (e, t) {
            "object" == typeof e && (t = e,
                e = void 0),
                t = t || {};
            var n, i, p, h, f, v, y, r, g = C.ajaxSetup({}, t), m = g.context || g, b = g.context && (m.nodeType || m.jquery) ? C(m) : C.event, w = C.Deferred(), _ = C.Callbacks("once memory"), S = g.statusCode || {}, o = {}, a = {}, x = 0, s = "canceled", T = {
                readyState: 0,
                getResponseHeader: function (e) {
                    var t;
                    if (2 === x) {
                        if (!r)
                            for (r = {}; t = Ht.exec(h);)
                                r[t[1].toLowerCase()] = t[2];
                        t = r[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function () {
                    return 2 === x ? h : null
                },
                setRequestHeader: function (e, t) {
                    var n = e.toLowerCase();
                    return x || (e = a[n] = a[n] || e,
                        o[e] = t),
                        this
                },
                overrideMimeType: function (e) {
                    return x || (g.mimeType = e),
                        this
                },
                statusCode: function (e) {
                    var t;
                    if (e)
                        if (x < 2)
                            for (t in e)
                                S[t] = [S[t], e[t]];
                        else
                            T.always(e[T.status]);
                    return this
                },
                abort: function (e) {
                    var t = e || s;
                    return y && y.abort(t),
                        l(0, t),
                        this
                }
            };
            if (w.promise(T).complete = _.add,
                T.success = T.done,
                T.error = T.fail,
                g.url = ((e || g.url || Jt) + "").replace(Mt, "").replace(Bt, $t[1] + "//"),
                g.type = t.method || t.type || g.method || g.type,
                g.dataTypes = C.trim(g.dataType || "*").toLowerCase().match(L) || [""],
                null == g.crossDomain && (n = Ut.exec(g.url.toLowerCase()),
                    g.crossDomain = !(!n || n[1] === $t[1] && n[2] === $t[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === ($t[3] || ("http:" === $t[1] ? "80" : "443")))),
                g.data && g.processData && "string" != typeof g.data && (g.data = C.param(g.data, g.traditional)),
                Kt(Wt, g, t, T),
                2 === x)
                return T;
            for (i in (v = C.event && g.global) && 0 == C.active++ && C.event.trigger("ajaxStart"),
                g.type = g.type.toUpperCase(),
                g.hasContent = !Rt.test(g.type),
                p = g.url,
                g.hasContent || (g.data && (p = g.url += (Vt.test(p) ? "&" : "?") + g.data,
                    delete g.data),
                    !1 === g.cache && (g.url = Ft.test(p) ? p.replace(Ft, "$1_=" + Nt++) : p + (Vt.test(p) ? "&" : "?") + "_=" + Nt++)),
                g.ifModified && (C.lastModified[p] && T.setRequestHeader("If-Modified-Since", C.lastModified[p]),
                    C.etag[p] && T.setRequestHeader("If-None-Match", C.etag[p])),
                (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && T.setRequestHeader("Content-Type", g.contentType),
                T.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : g.accepts["*"]),
                g.headers)
                T.setRequestHeader(i, g.headers[i]);
            if (g.beforeSend && (!1 === g.beforeSend.call(m, T, g) || 2 === x))
                return T.abort();
            for (i in s = "abort",
            {
                success: 1,
                error: 1,
                complete: 1
            })
                T[i](g[i]);
            if (y = Kt(zt, g, t, T)) {
                if (T.readyState = 1,
                    v && b.trigger("ajaxSend", [T, g]),
                    2 === x)
                    return T;
                g.async && 0 < g.timeout && (f = j.setTimeout(function () {
                    T.abort("timeout")
                }, g.timeout));
                try {
                    x = 1,
                        y.send(o, l)
                } catch (A) {
                    if (!(x < 2))
                        throw A;
                    l(-1, A)
                }
            } else
                l(-1, "No Transport");
            function l(e, t, n, i) {
                var r, o, a, s, l, d = t;
                2 !== x && (x = 2,
                    f && j.clearTimeout(f),
                    y = void 0,
                    h = i || "",
                    T.readyState = 0 < e ? 4 : 0,
                    r = 200 <= e && e < 300 || 304 === e,
                    n && (s = function c(e, t, n) {
                        for (var i, r, o, a, s = e.contents, l = e.dataTypes; "*" === l[0];)
                            l.shift(),
                                void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r)
                            for (a in s)
                                if (s[a] && s[a].test(r)) {
                                    l.unshift(a);
                                    break
                                }
                        if (l[0] in n)
                            o = l[0];
                        else {
                            for (a in n) {
                                if (!l[0] || e.converters[a + " " + l[0]]) {
                                    o = a;
                                    break
                                }
                                i || (i = a)
                            }
                            o = o || i
                        }
                        return o ? (o !== l[0] && l.unshift(o),
                            n[o]) : void 0
                    }(g, T, n)),
                    s = function u(e, t, n, i) {
                        var r, o, a, s, l, d = {}, c = e.dataTypes.slice();
                        if (c[1])
                            for (a in e.converters)
                                d[a.toLowerCase()] = e.converters[a];
                        for (o = c.shift(); o;)
                            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                                !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                                l = o,
                                o = c.shift())
                                if ("*" === o)
                                    o = l;
                                else if ("*" !== l && l !== o) {
                                    if (!(a = d[l + " " + o] || d["* " + o]))
                                        for (r in d)
                                            if ((s = r.split(" "))[1] === o && (a = d[l + " " + s[0]] || d["* " + s[0]])) {
                                                !0 === a ? a = d[r] : !0 !== d[r] && (o = s[0],
                                                    c.unshift(s[1]));
                                                break
                                            }
                                    if (!0 !== a)
                                        if (a && e["throws"])
                                            t = a(t);
                                        else
                                            try {
                                                t = a(t)
                                            } catch (k) {
                                                return {
                                                    state: "parsererror",
                                                    error: a ? k : "No conversion from " + l + " to " + o
                                                }
                                            }
                                }
                        return {
                            state: "success",
                            data: t
                        }
                    }(g, s, T, r),
                    r ? (g.ifModified && ((l = T.getResponseHeader("Last-Modified")) && (C.lastModified[p] = l),
                        (l = T.getResponseHeader("etag")) && (C.etag[p] = l)),
                        204 === e || "HEAD" === g.type ? d = "nocontent" : 304 === e ? d = "notmodified" : (d = s.state,
                            o = s.data,
                            r = !(a = s.error))) : (a = d,
                                !e && d || (d = "error",
                                    e < 0 && (e = 0))),
                    T.status = e,
                    T.statusText = (t || d) + "",
                    r ? w.resolveWith(m, [o, d, T]) : w.rejectWith(m, [T, d, a]),
                    T.statusCode(S),
                    S = void 0,
                    v && b.trigger(r ? "ajaxSuccess" : "ajaxError", [T, g, r ? o : a]),
                    _.fireWith(m, [T, d]),
                    v && (b.trigger("ajaxComplete", [T, g]),
                        --C.active || C.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function (e, t, n) {
            return C.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return C.get(e, void 0, t, "script")
        }
    }),
        C.each(["get", "post"], function (e, r) {
            C[r] = function (e, t, n, i) {
                return C.isFunction(t) && (i = i || n,
                    n = t,
                    t = void 0),
                    C.ajax(C.extend({
                        url: e,
                        type: r,
                        dataType: i,
                        data: t,
                        success: n
                    }, C.isPlainObject(e) && e))
            }
        }),
        C._evalUrl = function (e) {
            return C.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                "throws": !0
            })
        }
        ,
        C.fn.extend({
            wrapAll: function (t) {
                if (C.isFunction(t))
                    return this.each(function (e) {
                        C(this).wrapAll(t.call(this, e))
                    });
                if (this[0]) {
                    var e = C(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]),
                        e.map(function () {
                            for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)
                                e = e.firstChild;
                            return e
                        }).append(this)
                }
                return this
            },
            wrapInner: function (n) {
                return C.isFunction(n) ? this.each(function (e) {
                    C(this).wrapInner(n.call(this, e))
                }) : this.each(function () {
                    var e = C(this)
                        , t = e.contents();
                    t.length ? t.wrapAll(n) : e.append(n)
                })
            },
            wrap: function (t) {
                var n = C.isFunction(t);
                return this.each(function (e) {
                    C(this).wrapAll(n ? t.call(this, e) : t)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    C.nodeName(this, "body") || C(this).replaceWith(this.childNodes)
                }).end()
            }
        }),
        C.expr.filters.hidden = function (e) {
            return k.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : function n(e) {
                if (!C.contains(e.ownerDocument || f, e))
                    return !0;
                for (; e && 1 === e.nodeType;) {
                    if ("none" === ((t = e).style && t.style.display || C.css(t, "display")) || "hidden" === e.type)
                        return !0;
                    e = e.parentNode
                }
                var t;
                return !1
            }(e)
        }
        ,
        C.expr.filters.visible = function (e) {
            return !C.expr.filters.hidden(e)
        }
        ;
    var Gt = /%20/g
        , Yt = /\[\]$/
        , Zt = /\r?\n/g
        , en = /^(?:submit|button|image|reset|file)$/i
        , tn = /^(?:input|select|textarea|keygen)/i;
    function nn(n, e, i, r) {
        var t;
        if (C.isArray(e))
            C.each(e, function (e, t) {
                i || Yt.test(n) ? r(n, t) : nn(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, r)
            });
        else if (i || "object" !== C.type(e))
            r(n, e);
        else
            for (t in e)
                nn(n + "[" + t + "]", e[t], i, r)
    }
    C.param = function (e, t) {
        var n, i = [], r = function (e, t) {
            t = C.isFunction(t) ? t() : null == t ? "" : t,
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = C.ajaxSettings && C.ajaxSettings.traditional),
            C.isArray(e) || e.jquery && !C.isPlainObject(e))
            C.each(e, function () {
                r(this.name, this.value)
            });
        else
            for (n in e)
                nn(n, e[n], t, r);
        return i.join("&").replace(Gt, "+")
    }
        ,
        C.fn.extend({
            serialize: function () {
                return C.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = C.prop(this, "elements");
                    return e ? C.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !C(this).is(":disabled") && tn.test(this.nodeName) && !en.test(e) && (this.checked || !Z.test(e))
                }).map(function (e, t) {
                    var n = C(this).val();
                    return null == n ? null : C.isArray(n) ? C.map(n, function (e) {
                        return {
                            name: t.name,
                            value: e.replace(Zt, "\r\n")
                        }
                    }) : {
                            name: t.name,
                            value: n.replace(Zt, "\r\n")
                        }
                }).get()
            }
        }),
        C.ajaxSettings.xhr = void 0 !== j.ActiveXObject ? function () {
            return this.isLocal ? ln() : 8 < f.documentMode ? sn() : /^(get|post|head|put|delete|options)$/i.test(this.type) && sn() || ln()
        }
            : sn;
    var rn = 0
        , on = {}
        , an = C.ajaxSettings.xhr();
    function sn() {
        try {
            return new j.XMLHttpRequest
        } catch (t) { }
    }
    function ln() {
        try {
            return new j.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) { }
    }
    j.attachEvent && j.attachEvent("onunload", function () {
        for (var e in on)
            on[e](void 0, !0)
    }),
        k.cors = !!an && "withCredentials" in an,
        (an = k.ajax = !!an) && C.ajaxTransport(function (l) {
            var d;
            if (!l.crossDomain || k.cors)
                return {
                    send: function (e, o) {
                        var t, a = l.xhr(), s = ++rn;
                        if (a.open(l.type, l.url, l.async, l.username, l.password),
                            l.xhrFields)
                            for (t in l.xhrFields)
                                a[t] = l.xhrFields[t];
                        for (t in l.mimeType && a.overrideMimeType && a.overrideMimeType(l.mimeType),
                            l.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                            e)
                            void 0 !== e[t] && a.setRequestHeader(t, e[t] + "");
                        a.send(l.hasContent && l.data || null),
                            d = function (e, t) {
                                var n, i, r;
                                if (d && (t || 4 === a.readyState))
                                    if (delete on[s],
                                        d = void 0,
                                        a.onreadystatechange = C.noop,
                                        t)
                                        4 !== a.readyState && a.abort();
                                    else {
                                        r = {},
                                            n = a.status,
                                            "string" == typeof a.responseText && (r.text = a.responseText);
                                        try {
                                            i = a.statusText
                                        } catch (y) {
                                            i = ""
                                        }
                                        n || !l.isLocal || l.crossDomain ? 1223 === n && (n = 204) : n = r.text ? 200 : 404
                                    }
                                r && o(n, i, r, a.getAllResponseHeaders())
                            }
                            ,
                            l.async ? 4 === a.readyState ? j.setTimeout(d) : a.onreadystatechange = on[s] = d : d()
                    },
                    abort: function () {
                        d && d(void 0, !0)
                    }
                }
        }),
        C.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function (e) {
                    return C.globalEval(e),
                        e
                }
            }
        }),
        C.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET",
                    e.global = !1)
        }),
        C.ajaxTransport("script", function (t) {
            if (t.crossDomain) {
                var i, r = f.head || C("head")[0] || f.documentElement;
                return {
                    send: function (e, n) {
                        (i = f.createElement("script")).async = !0,
                            t.scriptCharset && (i.charset = t.scriptCharset),
                            i.src = t.url,
                            i.onload = i.onreadystatechange = function (e, t) {
                                (t || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null,
                                    i.parentNode && i.parentNode.removeChild(i),
                                    i = null,
                                    t || n(200, "success"))
                            }
                            ,
                            r.insertBefore(i, r.firstChild)
                    },
                    abort: function () {
                        i && i.onload(void 0, !0)
                    }
                }
            }
        });
    var dn = []
        , cn = /(=)\?(?=&|$)|\?\?/;
    C.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = dn.pop() || C.expando + "_" + Nt++;
            return this[e] = !0,
                e
        }
    }),
        C.ajaxPrefilter("json jsonp", function (e, t, n) {
            var i, r, o, a = !1 !== e.jsonp && (cn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && cn.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = C.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                a ? e[a] = e[a].replace(cn, "$1" + i) : !1 !== e.jsonp && (e.url += (Vt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                e.converters["script json"] = function () {
                    return o || C.error(i + " was not called"),
                        o[0]
                }
                ,
                e.dataTypes[0] = "json",
                r = j[i],
                j[i] = function () {
                    o = arguments
                }
                ,
                n.always(function () {
                    void 0 === r ? C(j).removeProp(i) : j[i] = r,
                        e[i] && (e.jsonpCallback = t.jsonpCallback,
                            dn.push(i)),
                        o && C.isFunction(r) && r(o[0]),
                        o = r = void 0
                }),
                "script") : void 0
        }),
        C.parseHTML = function (e, t, n) {
            if (!e || "string" != typeof e)
                return null;
            "boolean" == typeof t && (n = t,
                t = !1),
                t = t || f;
            var i = A.exec(e)
                , r = !n && [];
            return i ? [t.createElement(i[1])] : (i = ce([e], t, r),
                r && r.length && C(r).remove(),
                C.merge([], i.childNodes))
        }
        ;
    var un = C.fn.load;
    function pn(e) {
        return C.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    C.fn.load = function (e, t, n) {
        if ("string" != typeof e && un)
            return un.apply(this, arguments);
        var i, r, o, a = this, s = e.indexOf(" ");
        return -1 < s && (i = C.trim(e.slice(s, e.length)),
            e = e.slice(0, s)),
            C.isFunction(t) ? (n = t,
                t = void 0) : t && "object" == typeof t && (r = "POST"),
            0 < a.length && C.ajax({
                url: e,
                type: r || "GET",
                dataType: "html",
                data: t
            }).done(function (e) {
                o = arguments,
                    a.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e)
            }).always(n && function (e, t) {
                a.each(function () {
                    n.apply(this, o || [e.responseText, t, e])
                })
            }
            ),
            this
    }
        ,
        C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            C.fn[t] = function (e) {
                return this.on(t, e)
            }
        }),
        C.expr.filters.animated = function (t) {
            return C.grep(C.timers, function (e) {
                return t === e.elem
            }).length
        }
        ,
        C.offset = {
            setOffset: function (e, t, n) {
                var i, r, o, a, s, l, d = C.css(e, "position"), c = C(e), u = {};
                "static" === d && (e.style.position = "relative"),
                    s = c.offset(),
                    o = C.css(e, "top"),
                    l = C.css(e, "left"),
                    r = ("absolute" === d || "fixed" === d) && -1 < C.inArray("auto", [o, l]) ? (a = (i = c.position()).top,
                        i.left) : (a = parseFloat(o) || 0,
                            parseFloat(l) || 0),
                    C.isFunction(t) && (t = t.call(e, n, C.extend({}, s))),
                    null != t.top && (u.top = t.top - s.top + a),
                    null != t.left && (u.left = t.left - s.left + r),
                    "using" in t ? t.using.call(e, u) : c.css(u)
            }
        },
        C.fn.extend({
            offset: function (t) {
                if (arguments.length)
                    return void 0 === t ? this : this.each(function (e) {
                        C.offset.setOffset(this, t, e)
                    });
                var e, n, i = {
                    top: 0,
                    left: 0
                }, r = this[0], o = r && r.ownerDocument;
                return o ? (e = o.documentElement,
                    C.contains(e, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()),
                        n = pn(o),
                    {
                        top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                        left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                    }) : i) : void 0
            },
            position: function () {
                if (this[0]) {
                    var e, t, n = {
                        top: 0,
                        left: 0
                    }, i = this[0];
                    return "fixed" === C.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(),
                        t = this.offset(),
                        C.nodeName(e[0], "html") || (n = e.offset()),
                        n.top += C.css(e[0], "borderTopWidth", !0),
                        n.left += C.css(e[0], "borderLeftWidth", !0)),
                    {
                        top: t.top - n.top - C.css(i, "marginTop", !0),
                        left: t.left - n.left - C.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && !C.nodeName(e, "html") && "static" === C.css(e, "position");)
                        e = e.offsetParent;
                    return e || We
                })
            }
        }),
        C.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (t, r) {
            var o = /Y/.test(r);
            C.fn[t] = function (e) {
                return Y(this, function (e, t, n) {
                    var i = pn(e);
                    return void 0 === n ? i ? r in i ? i[r] : i.document.documentElement[t] : e[t] : void (i ? i.scrollTo(o ? C(i).scrollLeft() : n, o ? n : C(i).scrollTop()) : e[t] = n)
                }, t, e, arguments.length, null)
            }
        }),
        C.each(["top", "left"], function (e, n) {
            C.cssHooks[n] = $e(k.pixelPosition, function (e, t) {
                return t ? (t = qe(e, n),
                    Be.test(t) ? C(e).position()[n] + "px" : t) : void 0
            })
        }),
        C.each({
            Height: "height",
            Width: "width"
        }, function (o, a) {
            C.each({
                padding: "inner" + o,
                content: a,
                "": "outer" + o
            }, function (i, e) {
                C.fn[e] = function (e, t) {
                    var n = arguments.length && (i || "boolean" != typeof e)
                        , r = i || (!0 === e || !0 === t ? "margin" : "border");
                    return Y(this, function (e, t, n) {
                        var i;
                        return C.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (i = e.documentElement,
                            Math.max(e.body["scroll" + o], i["scroll" + o], e.body["offset" + o], i["offset" + o], i["client" + o])) : void 0 === n ? C.css(e, t, r) : C.style(e, t, n, r)
                    }, a, n ? e : void 0, n, null)
                }
            })
        }),
        C.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function (e, t) {
                return this.off(e, null, t)
            },
            delegate: function (e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }),
        C.fn.size = function () {
            return this.length
        }
        ,
        C.fn.andSelf = C.fn.addBack,
        "function" == typeof define && define.amd && define("jquery", [], function () {
            return C
        });
    var hn = j.jQuery
        , fn = j.$;
    return C.noConflict = function (e) {
        return j.$ === C && (j.$ = fn),
            e && j.jQuery === C && (j.jQuery = hn),
            C
    }
        ,
        t || (j.jQuery = j.$ = C),
        C
}),
    function (e, t) {
        "object" == typeof exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Spinner = t()
    }(this, function () {
        "use strict";
        function v(e, t) {
            var n, i = document.createElement(e || "div");
            for (n in t)
                i[n] = t[n];
            return i
        }
        function y(e) {
            for (var t = 1, n = arguments.length; t < n; t++)
                e.appendChild(arguments[t]);
            return e
        }
        function i(e, t) {
            var n, i, r = e.style;
            for (t = t.charAt(0).toUpperCase() + t.slice(1),
                i = 0; i < o.length; i++)
                if (void 0 !== r[n = o[i] + t])
                    return n;
            return void 0 !== r[t] ? t : void 0
        }
        function g(e, t) {
            for (var n in t)
                e.style[i(e, n) || n] = t[n];
            return e
        }
        function t(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                    void 0 === e[i] && (e[i] = n[i])
            }
            return e
        }
        function m(e, t) {
            return "string" == typeof e ? e : e[t % e.length]
        }
        function n(e) {
            this.opts = t(e || {}, n.defaults, r)
        }
        var b, e, o = ["webkit", "Moz", "ms", "O"], w = {}, _ = (e = v("style", {
            type: "text/css"
        }),
            y(document.getElementsByTagName("head")[0], e),
            e.sheet || e.styleSheet), r = {
                lines: 12,
                length: 7,
                width: 5,
                radius: 10,
                rotate: 0,
                corners: 1,
                color: "#000",
                direction: 1,
                speed: 1,
                trail: 100,
                opacity: .25,
                fps: 20,
                zIndex: 2e9,
                className: "spinner",
                top: "50%",
                left: "50%",
                position: "absolute"
            };
        n.defaults = {},
            t(n.prototype, {
                spin: function (e) {
                    this.stop();
                    var t = this
                        , n = t.opts
                        , i = t.el = g(v(0, {
                            className: n.className
                        }), {
                            position: n.position,
                            width: 0,
                            zIndex: n.zIndex
                        });
                    if (n.radius,
                        n.length,
                        n.width,
                        g(i, {
                            left: n.left,
                            top: n.top
                        }),
                        e && e.insertBefore(i, e.firstChild || null),
                        i.setAttribute("role", "progressbar"),
                        t.lines(i, t.opts),
                        !b) {
                        var r, o = 0, a = (n.lines - 1) * (1 - n.direction) / 2, s = n.fps, l = s / n.speed, d = (1 - n.opacity) / (l * n.trail / 100), c = l / n.lines;
                        !function u() {
                            o++;
                            for (var e = 0; e < n.lines; e++)
                                r = Math.max(1 - (o + (n.lines - e) * c) % l * d, n.opacity),
                                    t.opacity(i, e * n.direction + a, r, n);
                            t.timeout = t.el && setTimeout(u, ~~(1e3 / s))
                        }()
                    }
                    return t
                },
                stop: function () {
                    var e = this.el;
                    return e && (clearTimeout(this.timeout),
                        e.parentNode && e.parentNode.removeChild(e),
                        this.el = void 0),
                        this
                },
                lines: function (e, n) {
                    function t(e, t) {
                        return g(v(), {
                            position: "absolute",
                            width: n.length + n.width + "px",
                            height: n.width + "px",
                            background: e,
                            boxShadow: t,
                            transformOrigin: "left",
                            transform: "rotate(" + ~~(360 / n.lines * r + n.rotate) + "deg) translate(" + n.radius + "px,0)",
                            borderRadius: (n.corners * n.width >> 1) + "px"
                        })
                    }
                    for (var i, r = 0, o = (n.lines - 1) * (1 - n.direction) / 2; r < n.lines; r++)
                        i = g(v(), {
                            position: "absolute",
                            top: 1 + ~(n.width / 2) + "px",
                            transform: n.hwaccel ? "translate3d(0,0,0)" : "",
                            opacity: n.opacity,
                            animation: b && (a = n.opacity,
                                s = n.trail,
                                l = o + r * n.direction,
                                d = n.lines,
                                void 0,
                                void 0,
                                void 0,
                                void 0,
                                void 0,
                                c = ["opacity", s, ~~(100 * a), l, d].join("-"),
                                u = .01 + l / d * 100,
                                p = Math.max(1 - (1 - a) / s * (100 - u), a),
                                h = b.substring(0, b.indexOf("Animation")).toLowerCase(),
                                f = h && "-" + h + "-" || "",
                                w[c] || (_.insertRule("@" + f + "keyframes " + c + "{0%{opacity:" + p + "}" + u + "%{opacity:" + a + "}" + (u + .01) + "%{opacity:1}" + (u + s) % 100 + "%{opacity:" + a + "}100%{opacity:" + p + "}}", _.cssRules.length),
                                    w[c] = 1),
                                c + " " + 1 / n.speed + "s linear infinite")
                        }),
                            n.shadow && y(i, g(t("#000", "0 0 4px #000"), {
                                top: "2px"
                            })),
                            y(e, y(i, t(m(n.color, r), "0 0 1px rgba(0,0,0,.1)")));
                    var a, s, l, d, c, u, p, h, f;
                    return e
                },
                opacity: function (e, t, n) {
                    t < e.childNodes.length && (e.childNodes[t].style.opacity = n)
                }
            });
        var a = g(v("group"), {
            behavior: "url(#default#VML)"
        });
        return !i(a, "transform") && a.adj ? function s() {
            function d(e, t) {
                return v("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', t)
            }
            _.addRule(".spin-vml", "behavior:url(#default#VML)"),
                n.prototype.lines = function (e, i) {
                    function r() {
                        return g(d("group", {
                            coordsize: a + " " + a,
                            coordorigin: -o + " " + -o
                        }), {
                            width: a,
                            height: a
                        })
                    }
                    function t(e, t, n) {
                        y(l, y(g(r(), {
                            rotation: 360 / i.lines * e + "deg",
                            left: ~~t
                        }), y(g(d("roundrect", {
                            arcsize: i.corners
                        }), {
                            width: o,
                            height: i.width,
                            left: i.radius,
                            top: -i.width >> 1,
                            filter: n
                        }), d("fill", {
                            color: m(i.color, e),
                            opacity: i.opacity
                        }), d("stroke", {
                            opacity: 0
                        }))))
                    }
                    var n, o = i.length + i.width, a = 2 * o, s = 2 * -(i.width + i.length) + "px", l = g(r(), {
                        position: "absolute",
                        top: s,
                        left: s
                    });
                    if (i.shadow)
                        for (n = 1; n <= i.lines; n++)
                            t(n, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
                    for (n = 1; n <= i.lines; n++)
                        t(n);
                    return y(e, l)
                }
                ,
                n.prototype.opacity = function (e, t, n, i) {
                    var r = e.firstChild;
                    i = i.shadow && i.lines || 0,
                        r && t + i < r.childNodes.length && (r = (r = (r = r.childNodes[t + i]) && r.firstChild) && r.firstChild) && (r.opacity = n)
                }
        }() : b = i(a, "animation"),
            n
    }),
    function (e) {
        function n(e) {
            return parseInt(e) === e
        }
        function i(e) {
            if (!n(e.length))
                return !1;
            for (var t = 0; t < e.length; t++)
                if (!n(e[t]) || e[t] < 0 || 255 < e[t])
                    return !1;
            return !0
        }
        function o(e, t) {
            if (e.buffer && ArrayBuffer.isView(e) && "Uint8Array" === e.name)
                return t && (e = e.slice ? e.slice() : Array.prototype.slice.call(e)),
                    e;
            if (Array.isArray(e)) {
                if (!i(e))
                    throw new Error("Array contains invalid value: " + e);
                return new Uint8Array(e)
            }
            if (n(e.length) && i(e))
                return new Uint8Array(e);
            throw new Error("unsupported array-like object")
        }
        function l(e) {
            return new Uint8Array(e)
        }
        function a(e, t, n, i, r) {
            null == i && null == r || (e = e.slice ? e.slice(i, r) : Array.prototype.slice.call(e, i, r)),
                t.set(e, n)
        }
        var r, t = {
            toBytes: function N(e) {
                var t = []
                    , n = 0;
                for (e = encodeURI(e); n < e.length;) {
                    var i = e.charCodeAt(n++);
                    37 === i ? (t.push(parseInt(e.substr(n, 2), 16)),
                        n += 2) : t.push(i)
                }
                return o(t)
            },
            fromBytes: function V(e) {
                for (var t = [], n = 0; n < e.length;) {
                    var i = e[n];
                    i < 128 ? (t.push(String.fromCharCode(i)),
                        n++) : 191 < i && i < 224 ? (t.push(String.fromCharCode((31 & i) << 6 | 63 & e[n + 1])),
                            n += 2) : (t.push(String.fromCharCode((15 & i) << 12 | (63 & e[n + 1]) << 6 | 63 & e[n + 2])),
                                n += 3)
                }
                return t.join("")
            }
        }, s = (r = "0123456789abcdef",
        {
            toBytes: function D(e) {
                for (var t = [], n = 0; n < e.length; n += 2)
                    t.push(parseInt(e.substr(n, 2), 16));
                return t
            },
            fromBytes: function M(e) {
                for (var t = [], n = 0; n < e.length; n++) {
                    var i = e[n];
                    t.push(r[(240 & i) >> 4] + r[15 & i])
                }
                return t.join("")
            }
        }), u = {
            16: 10,
            24: 12,
            32: 14
        }, p = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145], h = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22], d = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125], c = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986], f = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766], v = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126], y = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436], g = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890], m = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935], b = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600], w = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480], _ = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795], S = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855], x = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150], T = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];
        function j(e) {
            for (var t = [], n = 0; n < e.length; n += 4)
                t.push(e[n] << 24 | e[n + 1] << 16 | e[n + 2] << 8 | e[n + 3]);
            return t
        }
        var k = function (e) {
            if (!(this instanceof k))
                throw Error("AES must be instanitated with `new`");
            Object.defineProperty(this, "key", {
                value: o(e, !0)
            }),
                this._prepare()
        };
        k.prototype._prepare = function () {
            var e = u[this.key.length];
            if (null == e)
                throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
            this._Ke = [],
                this._Kd = [];
            for (var t = 0; t <= e; t++)
                this._Ke.push([0, 0, 0, 0]),
                    this._Kd.push([0, 0, 0, 0]);
            var n, i = 4 * (e + 1), r = this.key.length / 4, o = j(this.key);
            for (t = 0; t < r; t++)
                n = t >> 2,
                    this._Ke[n][t % 4] = o[t],
                    this._Kd[e - n][t % 4] = o[t];
            for (var a, s = 0, l = r; l < i;) {
                if (a = o[r - 1],
                    o[0] ^= h[a >> 16 & 255] << 24 ^ h[a >> 8 & 255] << 16 ^ h[255 & a] << 8 ^ h[a >> 24 & 255] ^ p[s] << 24,
                    s += 1,
                    8 != r)
                    for (t = 1; t < r; t++)
                        o[t] ^= o[t - 1];
                else {
                    for (t = 1; t < r / 2; t++)
                        o[t] ^= o[t - 1];
                    a = o[r / 2 - 1],
                        o[r / 2] ^= h[255 & a] ^ h[a >> 8 & 255] << 8 ^ h[a >> 16 & 255] << 16 ^ h[a >> 24 & 255] << 24;
                    for (t = r / 2 + 1; t < r; t++)
                        o[t] ^= o[t - 1]
                }
                for (t = 0; t < r && l < i;)
                    d = l >> 2,
                        c = l % 4,
                        this._Ke[d][c] = o[t],
                        this._Kd[e - d][c] = o[t++],
                        l++
            }
            for (var d = 1; d < e; d++)
                for (var c = 0; c < 4; c++)
                    a = this._Kd[d][c],
                        this._Kd[d][c] = _[a >> 24 & 255] ^ S[a >> 16 & 255] ^ x[a >> 8 & 255] ^ T[255 & a]
        }
            ,
            k.prototype.encrypt = function (e) {
                if (16 != e.length)
                    throw new Error("invalid plaintext size (must be 16 bytes)");
                for (var t = this._Ke.length - 1, n = [0, 0, 0, 0], i = j(e), r = 0; r < 4; r++)
                    i[r] ^= this._Ke[0][r];
                for (var o = 1; o < t; o++) {
                    for (r = 0; r < 4; r++)
                        n[r] = c[i[r] >> 24 & 255] ^ f[i[(r + 1) % 4] >> 16 & 255] ^ v[i[(r + 2) % 4] >> 8 & 255] ^ y[255 & i[(r + 3) % 4]] ^ this._Ke[o][r];
                    i = n.slice()
                }
                var a, s = l(16);
                for (r = 0; r < 4; r++)
                    a = this._Ke[t][r],
                        s[4 * r] = 255 & (h[i[r] >> 24 & 255] ^ a >> 24),
                        s[4 * r + 1] = 255 & (h[i[(r + 1) % 4] >> 16 & 255] ^ a >> 16),
                        s[4 * r + 2] = 255 & (h[i[(r + 2) % 4] >> 8 & 255] ^ a >> 8),
                        s[4 * r + 3] = 255 & (h[255 & i[(r + 3) % 4]] ^ a);
                return s
            }
            ,
            k.prototype.decrypt = function (e) {
                if (16 != e.length)
                    throw new Error("invalid ciphertext size (must be 16 bytes)");
                for (var t = this._Kd.length - 1, n = [0, 0, 0, 0], i = j(e), r = 0; r < 4; r++)
                    i[r] ^= this._Kd[0][r];
                for (var o = 1; o < t; o++) {
                    for (r = 0; r < 4; r++)
                        n[r] = g[i[r] >> 24 & 255] ^ m[i[(r + 3) % 4] >> 16 & 255] ^ b[i[(r + 2) % 4] >> 8 & 255] ^ w[255 & i[(r + 1) % 4]] ^ this._Kd[o][r];
                    i = n.slice()
                }
                var a, s = l(16);
                for (r = 0; r < 4; r++)
                    a = this._Kd[t][r],
                        s[4 * r] = 255 & (d[i[r] >> 24 & 255] ^ a >> 24),
                        s[4 * r + 1] = 255 & (d[i[(r + 3) % 4] >> 16 & 255] ^ a >> 16),
                        s[4 * r + 2] = 255 & (d[i[(r + 2) % 4] >> 8 & 255] ^ a >> 8),
                        s[4 * r + 3] = 255 & (d[255 & i[(r + 1) % 4]] ^ a);
                return s
            }
            ;
        var C = function (e) {
            if (!(this instanceof C))
                throw Error("AES must be instanitated with `new`");
            this.description = "Electronic Code Block",
                this.name = "ecb",
                this._aes = new k(e)
        };
        C.prototype.encrypt = function (e) {
            if ((e = o(e)).length % 16 != 0)
                throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
            for (var t = l(e.length), n = l(16), i = 0; i < e.length; i += 16)
                a(e, n, 0, i, i + 16),
                    a(n = this._aes.encrypt(n), t, i);
            return t
        }
            ,
            C.prototype.decrypt = function (e) {
                if ((e = o(e)).length % 16 != 0)
                    throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
                for (var t = l(e.length), n = l(16), i = 0; i < e.length; i += 16)
                    a(e, n, 0, i, i + 16),
                        a(n = this._aes.decrypt(n), t, i);
                return t
            }
            ;
        var A = function (e, t) {
            if (!(this instanceof A))
                throw Error("AES must be instanitated with `new`");
            if (this.description = "Cipher Block Chaining",
                this.name = "cbc",
                t) {
                if (16 != t.length)
                    throw new Error("invalid initialation vector size (must be 16 bytes)")
            } else
                t = l(16);
            this._lastCipherblock = o(t, !0),
                this._aes = new k(e)
        };
        A.prototype.encrypt = function (e) {
            if ((e = o(e)).length % 16 != 0)
                throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
            for (var t = l(e.length), n = l(16), i = 0; i < e.length; i += 16) {
                a(e, n, 0, i, i + 16);
                for (var r = 0; r < 16; r++)
                    n[r] ^= this._lastCipherblock[r];
                this._lastCipherblock = this._aes.encrypt(n),
                    a(this._lastCipherblock, t, i)
            }
            return t
        }
            ,
            A.prototype.decrypt = function (e) {
                if ((e = o(e)).length % 16 != 0)
                    throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
                for (var t = l(e.length), n = l(16), i = 0; i < e.length; i += 16) {
                    a(e, n, 0, i, i + 16),
                        n = this._aes.decrypt(n);
                    for (var r = 0; r < 16; r++)
                        t[i + r] = n[r] ^ this._lastCipherblock[r];
                    a(e, this._lastCipherblock, 0, i, i + 16)
                }
                return t
            }
            ;
        var P = function (e, t, n) {
            if (!(this instanceof P))
                throw Error("AES must be instanitated with `new`");
            if (this.description = "Cipher Feedback",
                this.name = "cfb",
                t) {
                if (16 != t.length)
                    throw new Error("invalid initialation vector size (must be 16 size)")
            } else
                t = l(16);
            n || (n = 1),
                this.segmentSize = n,
                this._shiftRegister = o(t, !0),
                this._aes = new k(e)
        };
        P.prototype.encrypt = function (e) {
            if (e.length % this.segmentSize != 0)
                throw new Error("invalid plaintext size (must be segmentSize bytes)");
            for (var t, n = o(e, !0), i = 0; i < n.length; i += this.segmentSize) {
                t = this._aes.encrypt(this._shiftRegister);
                for (var r = 0; r < this.segmentSize; r++)
                    n[i + r] ^= t[r];
                a(this._shiftRegister, this._shiftRegister, 0, this.segmentSize),
                    a(n, this._shiftRegister, 16 - this.segmentSize, i, i + this.segmentSize)
            }
            return n
        }
            ,
            P.prototype.decrypt = function (e) {
                if (e.length % this.segmentSize != 0)
                    throw new Error("invalid ciphertext size (must be segmentSize bytes)");
                for (var t, n = o(e, !0), i = 0; i < n.length; i += this.segmentSize) {
                    t = this._aes.encrypt(this._shiftRegister);
                    for (var r = 0; r < this.segmentSize; r++)
                        n[i + r] ^= t[r];
                    a(this._shiftRegister, this._shiftRegister, 0, this.segmentSize),
                        a(e, this._shiftRegister, 16 - this.segmentSize, i, i + this.segmentSize)
                }
                return n
            }
            ;
        var O = function (e, t) {
            if (!(this instanceof O))
                throw Error("AES must be instanitated with `new`");
            if (this.description = "Output Feedback",
                this.name = "ofb",
                t) {
                if (16 != t.length)
                    throw new Error("invalid initialation vector size (must be 16 bytes)")
            } else
                t = l(16);
            this._lastPrecipher = o(t, !0),
                this._lastPrecipherIndex = 16,
                this._aes = new k(e)
        };
        O.prototype.encrypt = function (e) {
            for (var t = o(e, !0), n = 0; n < t.length; n++)
                16 === this._lastPrecipherIndex && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher),
                    this._lastPrecipherIndex = 0),
                    t[n] ^= this._lastPrecipher[this._lastPrecipherIndex++];
            return t
        }
            ,
            O.prototype.decrypt = O.prototype.encrypt;
        var I = function (e) {
            if (!(this instanceof I))
                throw Error("Counter must be instanitated with `new`");
            0 === e || e || (e = 1),
                "number" == typeof e ? (this._counter = l(16),
                    this.setValue(e)) : this.setBytes(e)
        };
        I.prototype.setValue = function (e) {
            if ("number" != typeof e || parseInt(e) != e)
                throw new Error("invalid counter value (must be an integer)");
            for (var t = 15; 0 <= t; --t)
                this._counter[t] = e % 256,
                    e >>= 8
        }
            ,
            I.prototype.setBytes = function (e) {
                if (16 != (e = o(e, !0)).length)
                    throw new Error("invalid counter bytes size (must be 16 bytes)");
                this._counter = e
            }
            ,
            I.prototype.increment = function () {
                for (var e = 15; 0 <= e; e--) {
                    if (255 !== this._counter[e]) {
                        this._counter[e]++;
                        break
                    }
                    this._counter[e] = 0
                }
            }
            ;
        var E = function (e, t) {
            if (!(this instanceof E))
                throw Error("AES must be instanitated with `new`");
            this.description = "Counter",
                this.name = "ctr",
                t instanceof I || (t = new I(t)),
                this._counter = t,
                this._remainingCounter = null,
                this._remainingCounterIndex = 16,
                this._aes = new k(e)
        };
        E.prototype.encrypt = function (e) {
            for (var t = o(e, !0), n = 0; n < t.length; n++)
                16 === this._remainingCounterIndex && (this._remainingCounter = this._aes.encrypt(this._counter._counter),
                    this._remainingCounterIndex = 0,
                    this._counter.increment()),
                    t[n] ^= this._remainingCounter[this._remainingCounterIndex++];
            return t
        }
            ,
            E.prototype.decrypt = E.prototype.encrypt;
        var L = {
            AES: k,
            Counter: I,
            ModeOfOperation: {
                ecb: C,
                cbc: A,
                cfb: P,
                ofb: O,
                ctr: E
            },
            utils: {
                hex: s,
                utf8: t
            },
            padding: {
                pkcs7: {
                    pad: function F(e) {
                        var t = 16 - (e = o(e, !0)).length % 16
                            , n = l(e.length + t);
                        a(e, n);
                        for (var i = e.length; i < n.length; i++)
                            n[i] = t;
                        return n
                    },
                    strip: function H(e) {
                        if ((e = o(e, !0)).length < 16)
                            throw new Error("PKCS#7 invalid length");
                        var t = e[e.length - 1];
                        if (16 < t)
                            throw new Error("PKCS#7 padding byte out of range");
                        for (var n = e.length - t, i = 0; i < t; i++)
                            if (e[n + i] !== t)
                                throw new Error("PKCS#7 invalid padding byte");
                        var r = l(n);
                        return a(e, r, 0, 0, n),
                            r
                    }
                }
            },
            _arrayTest: {
                coerceArray: o,
                createArray: l,
                copyArray: a
            }
        };
        "object" == typeof module && "object" == typeof module.exports ? module.exports = L : "function" == typeof define && define.amd ? define(L) : (e.aesjs && (L._aesjs = e.aesjs),
            e.aesjs = L)
    }(this),
    function (t) {
        "use strict";
        var n, i = t.PovBase64;
        if ("undefined" != typeof module && module.exports)
            try {
                n = require("buffer").Buffer
            } catch (_) { }
        var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
            , o = function (e) {
                for (var t = {}, n = 0, i = e.length; n < i; n++)
                    t[e.charAt(n)] = n;
                return t
            }(r)
            , a = String.fromCharCode
            , s = function (e) {
                if (e.length < 2)
                    return (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? a(192 | t >>> 6) + a(128 | 63 & t) : a(224 | t >>> 12 & 15) + a(128 | t >>> 6 & 63) + a(128 | 63 & t);
                var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
                return a(240 | t >>> 18 & 7) + a(128 | t >>> 12 & 63) + a(128 | t >>> 6 & 63) + a(128 | 63 & t)
            }
            , l = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g
            , d = function (e) {
                return e.replace(l, s)
            }
            , c = function (e) {
                var t = [0, 2, 1][e.length % 3]
                    , n = e.charCodeAt(0) << 16 | (1 < e.length ? e.charCodeAt(1) : 0) << 8 | (2 < e.length ? e.charCodeAt(2) : 0);
                return [r.charAt(n >>> 18), r.charAt(n >>> 12 & 63), 2 <= t ? "=" : r.charAt(n >>> 6 & 63), 1 <= t ? "=" : r.charAt(63 & n)].join("")
            }
            , u = t.btoa ? function (e) {
                return t.btoa(e)
            }
                : function (e) {
                    return e.replace(/[\s\S]{1,3}/g, c)
                }
            , p = n ? function (e) {
                return (e.constructor === n.constructor ? e : new n(e)).toString("base64")
            }
                : function (e) {
                    return u(d(e))
                }
            , h = function (e, t) {
                return t ? p(String(e)).replace(/[+\/]/g, function (e) {
                    return "+" == e ? "-" : "_"
                }).replace(/=/g, "") : p(String(e))
            }
            , f = new RegExp(["[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}"].join("|"), "g")
            , v = function (e) {
                switch (e.length) {
                    case 4:
                        var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
                        return a(55296 + (t >>> 10)) + a(56320 + (1023 & t));
                    case 3:
                        return a((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
                    default:
                        return a((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1))
                }
            }
            , y = function (e) {
                return e.replace(f, v)
            }
            , g = function (e) {
                var t = e.length
                    , n = t % 4
                    , i = (0 < t ? o[e.charAt(0)] << 18 : 0) | (1 < t ? o[e.charAt(1)] << 12 : 0) | (2 < t ? o[e.charAt(2)] << 6 : 0) | (3 < t ? o[e.charAt(3)] : 0)
                    , r = [a(i >>> 16), a(i >>> 8 & 255), a(255 & i)];
                return r.length -= [0, 0, 2, 1][n],
                    r.join("")
            }
            , m = t.atob ? function (e) {
                return t.atob(e)
            }
                : function (e) {
                    return e.replace(/[\s\S]{1,4}/g, g)
                }
            , b = n ? function (e) {
                return (e.constructor === n.constructor ? e : new n(e, "base64")).toString()
            }
                : function (e) {
                    return y(m(e))
                }
            , e = function (e) {
                return b(String(e).replace(/[-_]/g, function (e) {
                    return "-" == e ? "+" : "/"
                }).replace(/[^A-Za-z0-9\+\/]/g, ""))
            };
        if (t.PovBase64 = {
            VERSION: "2.1.9",
            atob: m,
            btoa: u,
            fromBase64: e,
            toBase64: h,
            utob: d,
            encode: h,
            encodeURI: function (e) {
                return h(e, !0)
            },
            btou: y,
            decode: e,
            noConflict: function () {
                var e = t.PovBase64;
                return t.PovBase64 = i,
                    e
            }
        },
            "function" == typeof Object.defineProperty) {
            var w = function (e) {
                return {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            };
            t.PovBase64.extendString = function () {
                Object.defineProperty(String.prototype, "fromBase64", w(function () {
                    return e(this)
                })),
                    Object.defineProperty(String.prototype, "toBase64", w(function (e) {
                        return h(this, e)
                    })),
                    Object.defineProperty(String.prototype, "toBase64URI", w(function () {
                        return h(this, !0)
                    }))
            }
        }
        t.Meteor && (Base64 = t.PovBase64)
    }(this);
var CryptoJS = CryptoJS || function (s, e) {
    var t = {}
        , n = t.lib = {}
        , i = n.Base = function () {
            function n() { }
            return {
                extend: function (e) {
                    n.prototype = this;
                    var t = new n;
                    return e && t.mixIn(e),
                        t.$super = this,
                        t
                },
                create: function () {
                    var e = this.extend();
                    return e.init.apply(e, arguments),
                        e
                },
                init: function () { },
                mixIn: function (e) {
                    for (var t in e)
                        e.hasOwnProperty(t) && (this[t] = e[t]);
                    e.hasOwnProperty("toString") && (this.toString = e.toString)
                },
                clone: function () {
                    return this.$super.extend(this)
                }
            }
        }()
        , l = n.WordArray = i.extend({
            init: function (e, t) {
                e = this.words = e || [],
                    this.sigBytes = null != t ? t : 4 * e.length
            },
            toString: function (e) {
                return (e || o).stringify(this)
            },
            concat: function (e) {
                var t = this.words
                    , n = e.words
                    , i = this.sigBytes;
                e = e.sigBytes;
                if (this.clamp(),
                    i % 4)
                    for (var r = 0; r < e; r++)
                        t[i + r >>> 2] |= (n[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 24 - (i + r) % 4 * 8;
                else if (65535 < n.length)
                    for (r = 0; r < e; r += 4)
                        t[i + r >>> 2] = n[r >>> 2];
                else
                    t.push.apply(t, n);
                return this.sigBytes += e,
                    this
            },
            clamp: function () {
                var e = this.words
                    , t = this.sigBytes;
                e[t >>> 2] &= 4294967295 << 32 - t % 4 * 8,
                    e.length = s.ceil(t / 4)
            },
            clone: function () {
                var e = i.clone.call(this);
                return e.words = this.words.slice(0),
                    e
            },
            random: function (e) {
                for (var t = [], n = 0; n < e; n += 4)
                    t.push(4294967296 * s.random() | 0);
                return l.create(t, e)
            }
        })
        , r = t.enc = {}
        , o = r.Hex = {
            stringify: function (e) {
                for (var t = e.words, n = (e = e.sigBytes,
                    []), i = 0; i < e; i++) {
                    var r = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                    n.push((r >>> 4).toString(16)),
                        n.push((15 & r).toString(16))
                }
                return n.join("")
            },
            parse: function (e) {
                for (var t = e.length, n = [], i = 0; i < t; i += 2)
                    n[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
                return l.create(n, t / 2)
            }
        }
        , a = r.Latin1 = {
            stringify: function (e) {
                for (var t = e.words, n = (e = e.sigBytes,
                    []), i = 0; i < e; i++)
                    n.push(String.fromCharCode(t[i >>> 2] >>> 24 - i % 4 * 8 & 255));
                return n.join("")
            },
            parse: function (e) {
                for (var t = e.length, n = [], i = 0; i < t; i++)
                    n[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - i % 4 * 8;
                return l.create(n, t)
            }
        }
        , d = r.Utf8 = {
            stringify: function (e) {
                try {
                    return decodeURIComponent(escape(a.stringify(e)))
                } catch (c) {
                    throw Error("Malformed UTF-8 data")
                }
            },
            parse: function (e) {
                return a.parse(unescape(encodeURIComponent(e)))
            }
        }
        , c = n.BufferedBlockAlgorithm = i.extend({
            reset: function () {
                this._data = l.create(),
                    this._nDataBytes = 0
            },
            _append: function (e) {
                "string" == typeof e && (e = d.parse(e)),
                    this._data.concat(e),
                    this._nDataBytes += e.sigBytes
            },
            _process: function (e) {
                var t = this._data
                    , n = t.words
                    , i = t.sigBytes
                    , r = this.blockSize
                    , o = i / (4 * r);
                e = (o = e ? s.ceil(o) : s.max((0 | o) - this._minBufferSize, 0)) * r,
                    i = s.min(4 * e, i);
                if (e) {
                    for (var a = 0; a < e; a += r)
                        this._doProcessBlock(n, a);
                    a = n.splice(0, e),
                        t.sigBytes -= i
                }
                return l.create(a, i)
            },
            clone: function () {
                var e = i.clone.call(this);
                return e._data = this._data.clone(),
                    e
            },
            _minBufferSize: 0
        });
    n.Hasher = c.extend({
        init: function () {
            this.reset()
        },
        reset: function () {
            c.reset.call(this),
                this._doReset()
        },
        update: function (e) {
            return this._append(e),
                this._process(),
                this
        },
        finalize: function (e) {
            return e && this._append(e),
                this._doFinalize(),
                this._hash
        },
        clone: function () {
            var e = c.clone.call(this);
            return e._hash = this._hash.clone(),
                e
        },
        blockSize: 16,
        _createHelper: function (n) {
            return function (e, t) {
                return n.create(t).finalize(e)
            }
        },
        _createHmacHelper: function (n) {
            return function (e, t) {
                return u.HMAC.create(n, t).finalize(e)
            }
        }
    });
    var u = t.algo = {};
    return t
}(Math);
!function (t) {
    function l(e, t, n, i, r, o, a) {
        return ((e = e + (t & n | ~t & i) + r + a) << o | e >>> 32 - o) + t
    }
    function d(e, t, n, i, r, o, a) {
        return ((e = e + (t & i | n & ~i) + r + a) << o | e >>> 32 - o) + t
    }
    function c(e, t, n, i, r, o, a) {
        return ((e = e + (t ^ n ^ i) + r + a) << o | e >>> 32 - o) + t
    }
    function u(e, t, n, i, r, o, a) {
        return ((e = e + (n ^ (t | ~i)) + r + a) << o | e >>> 32 - o) + t
    }
    var e = CryptoJS
        , n = (i = e.lib).WordArray
        , i = i.Hasher
        , r = e.algo
        , p = [];
    !function () {
        for (var e = 0; e < 64; e++)
            p[e] = 4294967296 * t.abs(t.sin(e + 1)) | 0
    }(),
        r = r.MD5 = i.extend({
            _doReset: function () {
                this._hash = n.create([1732584193, 4023233417, 2562383102, 271733878])
            },
            _doProcessBlock: function (e, t) {
                for (var n = 0; n < 16; n++) {
                    var i = e[r = t + n];
                    e[r] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8)
                }
                i = (r = this._hash.words)[0];
                var r, o = r[1], a = r[2], s = r[3];
                for (n = 0; n < 64; n += 4)
                    o = n < 16 ? l(o, a = l(a, s = l(s, i = l(i, o, a, s, e[t + n], 7, p[n]), o, a, e[t + n + 1], 12, p[n + 1]), i, o, e[t + n + 2], 17, p[n + 2]), s, i, e[t + n + 3], 22, p[n + 3]) : n < 32 ? d(o, a = d(a, s = d(s, i = d(i, o, a, s, e[t + (n + 1) % 16], 5, p[n]), o, a, e[t + (n + 6) % 16], 9, p[n + 1]), i, o, e[t + (n + 11) % 16], 14, p[n + 2]), s, i, e[t + n % 16], 20, p[n + 3]) : n < 48 ? c(o, a = c(a, s = c(s, i = c(i, o, a, s, e[t + (3 * n + 5) % 16], 4, p[n]), o, a, e[t + (3 * n + 8) % 16], 11, p[n + 1]), i, o, e[t + (3 * n + 11) % 16], 16, p[n + 2]), s, i, e[t + (3 * n + 14) % 16], 23, p[n + 3]) : u(o, a = u(a, s = u(s, i = u(i, o, a, s, e[t + 3 * n % 16], 6, p[n]), o, a, e[t + (3 * n + 7) % 16], 10, p[n + 1]), i, o, e[t + (3 * n + 14) % 16], 15, p[n + 2]), s, i, e[t + (3 * n + 5) % 16], 21, p[n + 3]);
                r[0] = r[0] + i | 0,
                    r[1] = r[1] + o | 0,
                    r[2] = r[2] + a | 0,
                    r[3] = r[3] + s | 0
            },
            _doFinalize: function () {
                var e = this._data
                    , t = e.words
                    , n = 8 * this._nDataBytes
                    , i = 8 * e.sigBytes;
                for (t[i >>> 5] |= 128 << 24 - i % 32,
                    t[14 + (i + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8),
                    e.sigBytes = 4 * (t.length + 1),
                    this._process(),
                    e = this._hash.words,
                    t = 0; t < 4; t++)
                    n = e[t],
                        e[t] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8)
            }
        }),
        e.MD5 = i._createHelper(r),
        e.HmacMD5 = i._createHmacHelper(r)
}(Math);
var hexcase = 0
    , b64pad = ""
    , chrsz = 8;
function hex_sha1(e) {
    return binb2hex(core_sha1(str2binb(e), e.length * chrsz))
}
function b64_sha1(e) {
    return binb2b64(core_sha1(str2binb(e), e.length * chrsz))
}
function str_sha1(e) {
    return binb2str(core_sha1(str2binb(e), e.length * chrsz))
}
function hex_hmac_sha1(e, t) {
    return binb2hex(core_hmac_sha1(e, t))
}
function b64_hmac_sha1(e, t) {
    return binb2b64(core_hmac_sha1(e, t))
}
function str_hmac_sha1(e, t) {
    return binb2str(core_hmac_sha1(e, t))
}
function sha1_vm_test() {
    return "a9993e364706816aba3e25717850c26c9cd0d89d" == hex_sha1("abc")
}
function core_sha1(e, t) {
    e[t >> 5] |= 128 << 24 - t % 32,
        e[15 + (t + 64 >> 9 << 4)] = t;
    for (var n = Array(80), i = 1732584193, r = -271733879, o = -1732584194, a = 271733878, s = -1009589776, l = 0; l < e.length; l += 16) {
        for (var d = i, c = r, u = o, p = a, h = s, f = 0; f < 80; f++) {
            n[f] = f < 16 ? e[l + f] : rol(n[f - 3] ^ n[f - 8] ^ n[f - 14] ^ n[f - 16], 1);
            var v = safe_add(safe_add(rol(i, 5), sha1_ft(f, r, o, a)), safe_add(safe_add(s, n[f]), sha1_kt(f)));
            s = a,
                a = o,
                o = rol(r, 30),
                r = i,
                i = v
        }
        i = safe_add(i, d),
            r = safe_add(r, c),
            o = safe_add(o, u),
            a = safe_add(a, p),
            s = safe_add(s, h)
    }
    return Array(i, r, o, a, s)
}
function sha1_ft(e, t, n, i) {
    return e < 20 ? t & n | ~t & i : e < 40 ? t ^ n ^ i : e < 60 ? t & n | t & i | n & i : t ^ n ^ i
}
function sha1_kt(e) {
    return e < 20 ? 1518500249 : e < 40 ? 1859775393 : e < 60 ? -1894007588 : -899497514
}
function core_hmac_sha1(e, t) {
    var n = str2binb(e);
    16 < n.length && (n = core_sha1(n, e.length * chrsz));
    for (var i = Array(16), r = Array(16), o = 0; o < 16; o++)
        i[o] = 909522486 ^ n[o],
            r[o] = 1549556828 ^ n[o];
    var a = core_sha1(i.concat(str2binb(t)), 512 + t.length * chrsz);
    return core_sha1(r.concat(a), 672)
}
function safe_add(e, t) {
    var n = (65535 & e) + (65535 & t);
    return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
}
function rol(e, t) {
    return e << t | e >>> 32 - t
}
function str2binb(e) {
    for (var t = Array(), n = (1 << chrsz) - 1, i = 0; i < e.length * chrsz; i += chrsz)
        t[i >> 5] |= (e.charCodeAt(i / chrsz) & n) << 24 - i % 32;
    return t
}
function binb2str(e) {
    for (var t = "", n = (1 << chrsz) - 1, i = 0; i < 32 * e.length; i += chrsz)
        t += String.fromCharCode(e[i >> 5] >>> 24 - i % 32 & n);
    return t
}
function binb2hex(e) {
    for (var t = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", n = "", i = 0; i < 4 * e.length; i++)
        n += t.charAt(e[i >> 2] >> 8 * (3 - i % 4) + 4 & 15) + t.charAt(e[i >> 2] >> 8 * (3 - i % 4) & 15);
    return n
}
function binb2b64(e) {
    for (var t = "", n = 0; n < 4 * e.length; n += 3)
        for (var i = (e[n >> 2] >> 8 * (3 - n % 4) & 255) << 16 | (e[n + 1 >> 2] >> 8 * (3 - (n + 1) % 4) & 255) << 8 | e[n + 2 >> 2] >> 8 * (3 - (n + 2) % 4) & 255, r = 0; r < 4; r++)
            8 * n + 6 * r > 32 * e.length ? t += b64pad : t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i >> 6 * (3 - r) & 63);
    return t
}
"object" != typeof JSON && (JSON = {}),
    function () {
        "use strict";
        var rx_one = /^[\],:{}\s]*$/, rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, rx_four = /(?:^|:|,)(?:\s*\[)+/g, rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta, rep;
        function f(e) {
            return e < 10 ? "0" + e : e
        }
        function this_value() {
            return this.valueOf()
        }
        function quote(e) {
            return rx_escapable.lastIndex = 0,
                rx_escapable.test(e) ? '"' + e.replace(rx_escapable, function (e) {
                    var t = meta[e];
                    return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + e + '"'
        }
        function str(e, t) {
            var n, i, r, o, a, s = gap, l = t[e];
            switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(e)),
            "function" == typeof rep && (l = rep.call(t, e, l)),
            typeof l) {
                case "string":
                    return quote(l);
                case "number":
                    return isFinite(l) ? String(l) : "null";
                case "boolean":
                case "null":
                    return String(l);
                case "object":
                    if (!l)
                        return "null";
                    if (gap += indent,
                        a = [],
                        "[object Array]" === Object.prototype.toString.apply(l)) {
                        for (o = l.length,
                            n = 0; n < o; n += 1)
                            a[n] = str(n, l) || "null";
                        return r = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + s + "]" : "[" + a.join(",") + "]",
                            gap = s,
                            r
                    }
                    if (rep && "object" == typeof rep)
                        for (o = rep.length,
                            n = 0; n < o; n += 1)
                            "string" == typeof rep[n] && (r = str(i = rep[n], l)) && a.push(quote(i) + (gap ? ": " : ":") + r);
                    else
                        for (i in l)
                            Object.prototype.hasOwnProperty.call(l, i) && (r = str(i, l)) && a.push(quote(i) + (gap ? ": " : ":") + r);
                    return r = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + s + "}" : "{" + a.join(",") + "}",
                        gap = s,
                        r
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }
            ,
            Boolean.prototype.toJSON = this_value,
            Number.prototype.toJSON = this_value,
            String.prototype.toJSON = this_value),
            "function" != typeof JSON.stringify && (meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
                JSON.stringify = function (e, t, n) {
                    var i;
                    if (indent = gap = "",
                        "number" == typeof n)
                        for (i = 0; i < n; i += 1)
                            indent += " ";
                    else
                        "string" == typeof n && (indent = n);
                    if ((rep = t) && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length))
                        throw new Error("JSON.stringify");
                    return str("", {
                        "": e
                    })
                }
            ),
            "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
                var j;
                function walk(e, t) {
                    var n, i, r = e[t];
                    if (r && "object" == typeof r)
                        for (n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && ((i = walk(r, n)) !== undefined ? r[n] = i : delete r[n]);
                    return reviver.call(e, t, r)
                }
                if (text = String(text),
                    rx_dangerous.lastIndex = 0,
                    rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function (e) {
                        return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                    })),
                    rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, "")))
                    return j = eval("(" + text + ")"),
                        "function" == typeof reviver ? walk({
                            "": j
                        }, "") : j;
                throw new SyntaxError("JSON.parse")
            }
            )
    }(),
    function (S) {
        function x() { }
        function T(e) {
            C = [e]
        }
        function j(e, t, n) {
            return e && e.apply && e.apply(t.context || t, n)
        }
        function k(e) {
            return /\?/.test(e) ? "&" : "?"
        }
        function e(t) {
            function n(e) {
                w++ || (_(),
                    v && (R[g] = {
                        s: [e]
                    }),
                    u && (e = u.apply(t, [e])),
                    j(l, t, [e, V, t]),
                    j(c, t, [t, V]))
            }
            function i(e) {
                w++ || (_(),
                    v && e != D && (R[g] = e),
                    j(d, t, [t, e]),
                    j(c, t, [t, e]))
            }
            var e, r, o, a, s, l = (t = S.extend({}, U, t)).success, d = t.error, c = t.complete, u = t.dataFilter, p = t.callbackParameter, h = t.callback, f = t.cache, v = t.pageCache, y = t.charset, g = t.url, m = t.data, b = t.timeout, w = 0, _ = x;
            return F && F(function (e) {
                e.done(l).fail(d),
                    l = e.resolve,
                    d = e.reject
            }).promise(t),
                !(t.abort = function () {
                    !w++ && _()
                }
                ) === j(t.beforeSend, t, [t]) || w || (g = g || "",
                    m = m ? "string" == typeof m ? m : S.param(m, t.traditional) : "",
                    g += m ? k(g) + m : "",
                    p && (g += k(g) + encodeURIComponent(p) + "=?"),
                    !f && !v && (g += k(g) + "_" + (new Date).getTime() + "="),
                    g = g.replace(/=\?(&|$)/, "=" + h + "$1"),
                    v && (e = R[g]) ? e.s ? n(e.s[0]) : i(e) : (M[h] = T,
                        (o = S(N)[0]).id = "_jqjsp" + B++,
                        y && (o.charset = y),
                        W && W.version() < 11.6 ? (a = S(N)[0]).text = "document.getElementById('" + o.id + "')." + O + "()" : o.async = "async",
                        z && (o.htmlFor = o.id,
                            o.event = P),
                        o.onload = o[O] = o[I] = function (e) {
                            if (!o[E] || !/i/.test(o[E])) {
                                try {
                                    o[P] && o[P]()
                                } catch (x) { }
                                e = C,
                                    C = 0,
                                    e ? n(e[0]) : i("error")
                            }
                        }
                        ,
                        o.src = g,
                        _ = function (e) {
                            s && clearTimeout(s),
                                o[I] = o.onload = o[O] = null,
                                H[L](o),
                                a && H[L](a)
                        }
                        ,
                        H[A](o, r = H.firstChild),
                        a && H[A](a, r),
                        s = 0 < b && setTimeout(function () {
                            i(D)
                        }, b))),
                t
        }
        var C, A = "insertBefore", P = "onclick", O = "onerror", I = "onreadystatechange", E = "readyState", L = "removeChild", N = "<script>", V = "success", D = "timeout", M = window, F = S.Deferred, H = S("head")[0] || document.documentElement, R = {}, B = 0, U = {
            callback: "_jqjsp",
            url: location.href
        }, W = M.opera, z = !!S("<div>").html("\x3c!--[if IE]><i><![endif]--\x3e").find("i").length;
        e.setup = function (e) {
            S.extend(U, e)
        }
            ,
            S.jsonp = e
    }(jQuery);
var polyvVodBrowser = function (i) {
    i.majorVersion = 10,
        i.majorRevision = 3,
        i.userAgent = navigator.userAgent || "",
        i.httpHead = "https:" == window.location.protocol ? "https:" : "http:",
        i.isFirefox = function () {
            return /Firefox/i.test(i.userAgent)
        }
        ,
        i.isIphone = function () {
            return /iPhone/i.test(i.userAgent)
        }
        ,
        i.isIOS = function () {
            return /iPad|iPhone|iPod/i.test(i.userAgent)
        }
        ,
        i.isAndroid = function () {
            return /android/i.test(i.userAgent)
        }
        ,
        i.isWeixin = function () {
            return /micromessenger/.test(i.userAgent.toLowerCase())
        }
        ,
        i.isSafari = function () {
            return /Safari/i.test(i.userAgent)
        }
        ,
        i.isUc = function () {
            return /UCBrowser|UCWEB/i.test(i.userAgent)
        }
        ,
        i.isBaidu = function () {
            return /baidubrowser/i.test(i.userAgent)
        }
        ,
        i.isBaiduApp = function () {
            return /baiduboxapp/i.test(i.userAgent)
        }
        ,
        i.isInternalQQ = function () {
            return -1 < i.userAgent.indexOf("QQ/")
        }
        ,
        i.isQQ = function () {
            return /MQQBrowser/i.test(i.userAgent)
        }
        ,
        i.isAndroidQQ = function () {
            return i.isAndroid() && i.isQQ() && -1 === i.userAgent.indexOf("TBS")
        }
        ,
        i.isChrome = function () {
            return /Chrome/i.test(i.userAgent) && !i.isWeixin() && !i.isQQ() && !i.isInternalQQ() && !i.isUc() && !i.isBaidu() && !i.isBaiduApp()
        }
        ,
        i.isAndroidChrome = function () {
            return i.isChrome() && i.isAndroid()
        }
        ,
        i.selfBrowser = function () {
            return !(i.isWeixin() || i.isQQ() || i.isInternalQQ() || i.isUc() || i.isBaidu() || i.isBaiduApp())
        }
        ,
        i.isHuaWei = function () {
            return /HUAWEI|HONO/i.test(i.userAgent) && i.selfBrowser()
        }
        ,
        i.isSAMSUNG = function () {
            return /SM-/i.test(i.userAgent) && i.isChrome()
        }
        ,
        i.isOnePlus = function () {
            return /ONEPLUS/i.test(i.userAgent) && i.isChrome()
        }
        ,
        i.isQuark = function () {
            return /Quark/i.test(i.userAgent)
        }
        ,
        i.isMaxthon = function () {
            return /Maxthon/i.test(i.userAgent)
        }
        ,
        i.isBanBrowser = function () {
            return i.isAndroid() && (i.isAndroidQQ() || i.isUc() || i.isHuaWei() || i.isQuark())
        }
        ,
        i.isUnderAndroid6 = function () {
            return !1
        }
        ,
        i.isIE = function () {
            return !!window.ActiveXObject || "ActiveXObject" in window
        }
        ,
        i.isWinXP = function () {
            return /Windows NT 5.1|Windows Xp/i.test(i.userAgent)
        }
        ,
        i.checkQiHoo = function () {
            if (!i.isIE()) {
                var e = function r(e, t) {
                    var n = navigator.mimeTypes;
                    for (var i in n)
                        if (n[i][e] == t)
                            return !0;
                    return !1
                }("type", "application/vnd.chromium.remoting-viewer");
                return !(!function t() {
                    return 1 < navigator.userAgent.toLowerCase().indexOf("chrome")
                }() || !e)
            }
            return !1
        }
        ,
        i.iosVersion = function () {
            var e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
            return e = parseInt(e[1], 10)
        }
        ,
        i.isIEVersion = function (e) {
            var t = document.createElement("b");
            return t.innerHTML = "\x3c!--[if IE " + e + "]><i></i><![endif]--\x3e",
                1 === t.getElementsByTagName("i").length
        }
        ,
        i.determinePlayerType = function (e, t, n) {
            return e.forceHTML5 ? i.playerType.HTML : e.forceFlash ? i.playerType.FLASH : i.isSupportedHTMLDevice() && n ? i.playerType.HTML : 1 == i.isFirefox() ? null == t ? i.playerType.INSTALLER : i.playerType.FLASH : null == t && 0 == n ? i.playerType.NO_SUPPORT : null != t ? i.isFlashVersionSufficient(t) ? i.playerType.FLASH : i.playerType.INSTALLER : n ? i.playerType.HTML : i.playerType.NO_SUPPORT
        }
        ,
        i.isFlashVersionSufficient = function (e) {
            return null != e && (e.majorVersion > i.majorVersion || e.majorVersion == i.majorVersion && e.majorRevision > i.majorRevision)
        }
        ,
        i.checkHtmlSupport = function () {
            var e = document.createElement("video")
                , t = (document.createElement("canvas"),
                    !0);
            navigator.userAgent.match(new RegExp("android", "i")) || (t = !(!e.canPlayType || !e.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, "")));
            var n = !!document.createElement("canvas").getContext;
            return t && n && i.isSupportedHTMLDevice()
        }
        ,
        i.checkLowerDevice = function () {
            var e = 480 == window.screen.height;
            return 1 == window.devicePixelRatio && (e = !0),
                e
        }
        ,
        i.isSupportedHTMLDevice = function (e) {
            for (var t = ["iPad", "iPhone", "iPod", "android"], n = t.length, i = e || navigator.userAgent, r = 0; r < n; r++)
                if (i.match(new RegExp(t[r], "i")))
                    return !0;
            return !1
        }
        ,
        i.isSupportHTML5 = function () {
            return window.MediaSource = window.MediaSource || window.WebKitMediaSource,
                window.MediaSource && "function" == typeof window.MediaSource.isTypeSupported && window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')
        }
        ,
        i.checkFlashSupport = function () {
            return i.isIE() ? i.checkFlashSupportIE() : i.checkFlashSupportStandard()
        }
        ,
        i.checkFlashSupportIE = function () {
            var e;
            try {
                var t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7").GetVariable("$version");
                e = / ([0-9]+),([0-9]+),([0-9]+),/.exec(t)
            } catch (n) {
                return null
            }
            return {
                majorVersion: e[1],
                majorRevision: e[2],
                minorRevision: e[3]
            }
        }
        ,
        i.checkFlashSupportStandard = function () {
            var e, t, n, i;
            try {
                if (!("undefined" != typeof navigator.plugins && 0 < navigator.plugins.length))
                    return null;
                if (!navigator.plugins["Shockwave Flash 2.0"] && !navigator.plugins["Shockwave Flash"])
                    throw new Error;
                var r = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : ""
                    , o = navigator.plugins["Shockwave Flash" + r].description
                    , a = navigator.plugins["Shockwave Flash" + r].filename;
                if (a.match && a.toLowerCase().match(/lite/))
                    throw new Error;
                t = (e = o.split(" "))[2].split(".")[0],
                    n = e[2].split(".")[1],
                    "" == (i = e[3]) && (i = e[4]),
                    "d" == i[0] ? i = i.substring(1) : "r" == i[0] && 0 < (i = i.substring(1)).indexOf("d") && (i = i.substring(0, i.indexOf("d")))
            } catch (s) {
                return null
            }
            return {
                majorVersion: t,
                majorRevision: n,
                minorRevision: i
            }
        }
        ,
        i.isSupportPlaybackRate = function () {
            return !(!i.isIOS() || !(i.isWeixin() || i.isSafari() || i.isInternalQQ()))
        }
        ,
        i.checkVrDevice = function () {
            return !(!i.isAndroid() || !i.isChrome() && !i.isWeixin()) || !(!i.isIOS() || !i.isWeixin())
        }
}
    , polyvVodConfig = function (e) {
        e.playerType = {
            FLASH: "flash",
            HTML: "html",
            INSTALLER: "installer",
            NO_SUPPORT: "nosupport"
        },
            e.H5 = !1,
            e.FLOW_STATUS = {
                LOADING: "loading",
                TEASER: "teaser",
                PREAD: "preAd",
                PLAY: "play",
                PAUSE: "pause",
                VISITOR: "visitor",
                ENDAD: "endAd",
                OVER: "over",
                ERROR: "error"
            },
            e.eventType = {
                BAR_UP: "BAR_UP",
                BAR_DOWN: "BAR_DOWN"
            },
            e.zh_CN_Lang = {
                conofirm: "确定",
                bar: {
                    rate: "倍速",
                    line: "线路",
                    hd: ["流畅", "高清", "超清"],
                    mode: {
                        videoMode: "视频模式",
                        audioMode: "音频模式",
                        videoType: "视频",
                        audioType: "音频"
                    },
                    srt: "字幕",
                    hide: "隐藏"
                },
                ad: {
                    skip: "跳过",
                    countDown: "广告也精彩",
                    countDownSecond: "秒"
                },
                password: {
                    tip: "视频已加密，请输入密码",
                    error: "请填写正确的密码!"
                },
                replay: "重播",
                userInfo: {
                    prev: "上一步",
                    next: "下一步",
                    submit: "提交",
                    submitTip: "请把资料正确填写完整",
                    unCorrectPhone: "请填写正确的手机号码",
                    unCorrectMail: "请填写真实邮箱",
                    feedBack: "感谢您的填写!"
                },
                audioPlaying: "音频模式播放中",
                warn: {
                    validFail: "系统错误,请稍后再试!",
                    videoFail: "视频加载失败,请检查网络后刷新重试!",
                    webVideoFail: "视频暂时无法播放,请稍后刷新重试",
                    errorMsg: "很抱歉,该视频暂时无法播放",
                    errorMsg2: "请联系网站管理员",
                    error: "当前视频无法播放，请向管理员反馈",
                    error2: "视频暂时无法播放，请稍后刷新重试",
                    error3: "该视频正在审核中，请稍后再试",
                    browChange: "请切换其他浏览器观看视频 <br/>Try another browser",
                    forbidenBrow: "不支持该浏览器播放",
                    limiteWindow: "视频禁止在小窗口播放,请关闭当前标签重新打开或重启浏览器继续播放!",
                    stateAbnormal: "视频状态异常，暂时无法播放"
                },
                end1: "相关视频",
                end2: "最新视频",
                end3: "最热视频",
                end4: "编辑推荐",
                end6: "指定视频"
            },
            e.enLang = {
                conofirm: "OK",
                bar: {
                    rate: "Rate",
                    line: "Line",
                    hd: ["360P", "480P", "720P"],
                    mode: {
                        videoMode: "Video Mode",
                        audioMode: "Audio Mode",
                        videoType: "Video",
                        audioType: "Audio"
                    },
                    srt: "Subtitles",
                    hide: "Hide"
                },
                ad: {
                    skip: "Skip",
                    countDown: "Ad is also good",
                    countDownSecond: "Seconds"
                },
                password: {
                    tip: "Input access code please",
                    error: "The password you entered is incorrect!"
                },
                replay: "replay",
                userInfo: {
                    prev: "prev",
                    next: "next",
                    submit: "submit",
                    submitTip: "Please complete the information correctly.",
                    unCorrectPhone: "Please enter a valid mobile number.",
                    unCorrectMail: "Please enter a valid email address.",
                    feedBack: "Thank you for your submission!"
                },
                audioPlaying: "Playing in audio mode",
                warn: {
                    validFail: "Try again later!",
                    videoFail: "Sorry,this video is not available</br>please try again later.",
                    webVideoFail: "Sorry,this video is not available</br>please try again later.",
                    errorMsg: "The video is temporarily not available</br>please refresh later",
                    errorMsg2: "please contact the Administrators",
                    error: "The video is not available</br>please contact the Administrators",
                    error2: "The video can't be played in separate window</br>please reopen the page or relaunch your browser",
                    error3: "The video is not available</br>please contact the Administrators",
                    browChange: "Try another browser",
                    forbidenBrow: "Try another browser",
                    limiteWindow: "The video can't be played in separate window，please reopen the page or relaunch your browser",
                    stateAbnormal: "The video's state is abnormal，please try later"
                },
                end1: "Related Videos",
                end2: "What's New",
                end3: "Hot Videos",
                end4: "Editor's Choice",
                end6: "Featured Videos"
            },
            e.vidObjKeyWords = [4, 2, 1, "set", "l", "anel"],
            e.vidObjKeyWords2 = ["va", "er", "In", "t", "background", "none", "image", "clear", 6, 0, "r", "o", "P"]
    }
    , polyvPolyFill = function () {
        Array.prototype.indexOf || (Array.prototype.indexOf = function (e) {
            var t = this.length >>> 0
                , n = Number(arguments[1]) || 0;
            for ((n = n < 0 ? Math.ceil(n) : Math.floor(n)) < 0 && (n += t); n < t; n++)
                if (n in this && this[n] === e)
                    return n;
            return -1
        }
        )
    }
    , polyvVodTool = function (c) {
        c.displayVideo = function (e, t, n) {
            var i = "";
            if (!0 === e.visVideo)
                return i = n ? "visible" : "hidden",
                    void t.css("visibility", i);
            i = n ? "block" : "none",
                t.css("display", i)
        }
            ,
            c.plvPlayVideo = function (e) {
                var t = e.play();
                t !== undefined && t.then(function () { })["catch"](function (e) { })
            }
            ,
            c.getVodVideojson = function (l, d) {
                "https://" === l.httpHead && (l.secure = !0),
                    l.jsonUrl = l.secure ? l.cdnUrl[l.cdnIndex] + "/secure/" + l.vid + ".json" : l.cdnUrl[l.cdnIndex] + "/videojson/" + l.vid + ".json",
                    l.vjsonUrl && (l.jsonUrl = l.vjsonUrl),
                    l.is_review && (l.jsonUrl = l.secure ? "//v3.polyv.net/secure/" + l.vid + ".json" : "//v3.polyv.net/videojson/" + l.vid + ".json"),
                    c.getJSON(l.jsonUrl, function (e) {
                        if ("on" !== l.beta && "on" !== l.beta_test || !l.vjsonUrl) {
                            try {
                                var t = CryptoJS.MD5(l.vid) + ""
                                    , n = aesjs.utils.hex.toBytes(e.body)
                                    , i = new aesjs.ModeOfOperation.cbc(c.stringToBytes(t.substr(0, 16)), c.stringToBytes(t.substr(16, 32))).decrypt(n)
                                    , r = aesjs.utils.utf8.fromBytes(i)
                                    , o = PovBase64.decode(r)
                                    , a = {};
                                a = JSON.parse(o)
                            } catch (s) {
                                a = {
                                    error: "parse_videojson_failure"
                                }
                            }
                            l.cdnIndex = 0,
                                "function" == typeof d && d(a)
                        } else
                            "function" == typeof d && d(e)
                    }).fail(function () {
                        1 !== l.cdnIndex ? (l.cdnIndex = 1,
                            c.getVodVideojson(l, d)) : (l.cdnIndex = 0,
                                d({
                                    error: "load_videojson_failure"
                                }))
                    })
            }
            ,
            c.checkPassword = function (e, t, n, i) {
                var r = (new Date).getTime()
                    , o = t + e.vid + r + "polyvcheckpassword2"
                    , a = CryptoJS.MD5(o) + ""
                    , s = {};
                s.vid = e.vid,
                    s.ts = r,
                    s.password = a,
                    c.ajax({
                        url: "//v.polyv.net/uc/admin/checkpassword2",
                        type: "POST",
                        dataType: "jsonp",
                        data: s,
                        success: function (e) {
                            "function" == typeof n && n(e)
                        },
                        error: function () {
                            "function" == typeof i && i()
                        }
                    })
            }
            ,
            c.isVid = function (e) {
                return "string" == typeof e && (34 < e.length && (e = c.decode(e)),
                    34 === e.length && "_" + e[0] === e.slice(-2))
            }
            ,
            c.getPid = function () {
                var e = (new Date).getTime() + "" + "X" + (parseInt(1e6 * Math.random() + 1e6) + "");
                return "function" == typeof updatePid && updatePid(e),
                    e
            }
            ,
            c.getPlayer = function (e) {
                if (-1 == navigator.appName.indexOf("Microsoft"))
                    return document[e];
                var t = window[e];
                try {
                    return 0 < t.length ? t[0] : t
                } catch (n) { }
                return document[e]
            }
            ,
            c.getUrlStatus = function (t) {
                t.code = 0,
                    "" != t.src ? c.ajax({
                        url: t.src,
                        type: "GET",
                        success: function (e) {
                            t.code = 200,
                                "function" == typeof s2j_onPlayerError && s2j_onPlayerError(t)
                        },
                        error: function (e) {
                            t.code = e.status,
                                "function" == typeof s2j_onPlayerError && s2j_onPlayerError(t)
                        }
                    }) : "function" == typeof s2j_onPlayerError && s2j_onPlayerError(t)
            }
            ,
            c.decode = function (e) {
                var t, n, i, r;
                if ("abcdofghijklnmepqrstuvwxyz0123456789",
                    "lpmkenjibhuvgycftxdrzsoawq0126783459",
                    34 == e.length)
                    t = e;
                else
                    for (e = e.substr(1),
                        t = "",
                        n = 0; n < e.length; n++)
                        i = e.charAt(n),
                            t += -1 == (r = "lpmkenjibhuvgycftxdrzsoawq0126783459".indexOf(i)) ? i : "abcdofghijklnmepqrstuvwxyz0123456789".charAt(r);
                return t
            }
            ,
            c.getIosCss = function () {
                return c("<style type='text/css'>video::-webkit-media-controls-panel {display: none!important;-webkit-appearance: none;}video::--webkit-media-controls-play-button{display: none!important;-webkit-appearance: none;}video::-webkit-media-controls-start-playback-button {display: none!important;-webkit-appearance: none}</style>")
            }
            ,
            c.stringToBytes = function (e) {
                for (var t, n, i = [], r = 0; r < e.length; r++) {
                    for (t = e.charCodeAt(r),
                        n = []; n.push(255 & t),
                        t >>= 8;)
                        ;
                    i = i.concat(n.reverse())
                }
                return i
            }
            ,
            c.getSamePlayerFullExit = function () {
                var e = navigator.userAgent
                    , t = ["x5videoenterfullscreen", "x5videoexitfullscreen"]
                    , n = e.match(/TBS\/([\d\.]+)/i);
                return "micromessenger" == e.match(/MicroMessenger/i) && n && "036849" <= n[1] && n[1] < "036900" && t.reverse(),
                    t
            }
            ,
            c.updateFlowStatus = function (e) {
                c.flowStatus = e,
                    "function" == typeof updateFlow && updateFlow(e)
            }
            ,
            c.getPureDomain = function (e) {
                for (var t = e.split(","), n = [], i = 0; i < t.length; i++) {
                    var r = t[i];
                    -1 !== r.indexOf("http://") ? r = r.split("http://")[1] : -1 !== r.indexOf("https://") && (r = r.split("https://")[1]),
                        r = -1 !== r.indexOf("/") ? r.split("/")[0] : r,
                        n.push(r)
                }
                return n
            }
            ,
            c.getViewerInfo = function (e) {
                var t = e.viewerInfo || null
                    , n = {
                        viewerId: e.session_id || "",
                        viewerAvatar: "",
                        viewerName: ""
                    };
                return t ? ((n = {
                    viewerId: t.viewerId || "",
                    viewerAvatar: t.viewerAvatar || ""
                }).viewerName = t.viewerName || e.params && e.params.param2 || "",
                    n.viewerExtraInfo1 = t.viewerExtraInfo1 || e.params && e.params.param3 || "",
                    n.viewerExtraInfo2 = t.viewerExtraInfo2 || e.params && e.params.param4 || "",
                    n.viewerExtraInfo3 = t.viewerExtraInfo3 || e.params && e.params.param5 || "",
                    JSON.stringify(n)) : null
            }
            ,
            c.duplicateRemoval = function (e) {
                for (var t = [], n = e.length, i = 0; i < n; i++) {
                    for (var r = i + 1; r < n; r++)
                        e[i] === e[r] && (r = ++i);
                    t.push(e[i])
                }
                return t
            }
            ,
            c.setCookie = function (e, t, n) {
                var i = new Date;
                i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
                var r = "expires=" + i.toGMTString();
                document.cookie = e + "=" + t + "; " + r
            }
            ,
            c.getCookie = function (e) {
                for (var t = document.cookie.split(";"), n = 0; n < t.length; n++) {
                    t[n] = t[n].replace(/(^\s*)|(\s*$)/g, "");
                    var i = t[n].split("=");
                    if (e == i[0])
                        return i[1]
                }
                return null
            }
            ,
            c.delCookie = function (e) {
                var t = new Date;
                t.setTime(t.getTime() - 1e4);
                var n = c.getCookie(e);
                null != n && (document.cookie = e + "=" + n + ";expires=" + t.toGMTString())
            }
            ,
            c.delLastCookie = function () {
                var e = document.cookie.split(";")
                    , t = e[e.length - 1][0]
                    , n = new Date;
                n.setTime(n.getTime() - 1e4);
                var i = c.getCookie(t);
                null != i && (document.cookie = t + "=" + i + ";expires=" + n.toGMTString())
            }
            ,
            c.setSessionStorage = function (e, t) {
                window.sessionStorage.setItem(e, t)
            }
            ,
            c.getSessionStorage = function (e) {
                return window.sessionStorage.getItem(e) || ""
            }
            ,
            c.getLocalStorage = function (e) {
                return window.localStorage.getItem(e) || ""
            }
            ,
            c.setLocalStorage = function (e, t) {
                window.localStorage.setItem(e, t)
            }
            ,
            c.circularJsonStringify = function (e) {
                var n = []
                    , t = JSON.stringify(e, function (e, t) {
                        if ("object" == typeof t && null !== t) {
                            if (-1 !== n.indexOf(t))
                                return;
                            n.push(t)
                        }
                        return t
                    });
                return n = null,
                    t
            }
            ,
            c.startAnimate = function (e, t, n) {
                e.animate(t, n)
            }
            ,
            c.stopAnimate = function (e) {
                e.is(":animated") && e.stop(!0, !0)
            }
            ,
            c.concatUrl = function (e, t, n) {
                if (e && t) {
                    for (key in t) {
                        if (n && -1 < e.indexOf(key))
                            break;
                        var i = -1 < e.indexOf("?") ? "&" : "?";
                        e = e + i + key + "=" + t[key]
                    }
                    return e
                }
            }
    };
if (function (e) {
    function t(e) {
        this.el = e.el,
            this.options = e,
            this.settings = e.settings,
            this.timer = null,
            this.vid = null,
            this.totalDuration = 0,
            this.historyDuration = 0,
            this.history_video_duration = Number(e.history_video_duration) || 5,
            "off" === this.options.ban_history_time && this.init()
    }
    t.prototype = {
        constructor: t,
        init: function () {
            var t = this;
            window.s2j_onVodVideoPlay = function (e) {
                t.totalDuration = t.settings.j2s_getDuration(),
                    t.el.find(".continue-play").remove(),
                    t.totalDuration < 60 * t.history_video_duration || (10 <= t.historyDuration && 10 <= t.totalDuration - t.historyDuration && (t.settings.j2s_seekVideo(t.historyDuration),
                        t.showTmp(t.historyDuration)),
                        10 <= t.historyDuration && t.totalDuration - t.historyDuration < 10 && (t.historyDuration = t.totalDuration - 10,
                            t.settings.j2s_seekVideo(t.historyDuration),
                            t.showTmp(t.historyDuration)))
            }
        },
        saveCurrentDuration: function (e) {
            var t = this;
            clearTimeout(t.timer),
                t.totalDuration >= 60 * t.history_video_duration ? t.customInterval(function () {
                    polyvObject.setLocalStorage(e, t.settings.j2s_getCurrentTime())
                }, 2) : polyvObject.setLocalStorage(e, 0)
        },
        showTmp: function (e) {
            var t = null
                , n = function r(e) {
                    return '<div class="continue-play">您上次观看至 <span>' + e + "</span> ，已为您自动续播。</div>"
                }(e = this.returnTime(e));
            this.el.append(n);
            var i = this.el.find(".continue-play");
            clearTimeout(t),
                t = setTimeout(function () {
                    i.hide()
                }, 5e3)
        },
        returnTime: function (e) {
            var t = Math.floor(e / 3600)
                , n = Math.floor((e - 3600 * t) / 60)
                , i = Math.floor(e - 3600 * t - 60 * n);
            return t = t.toString().padStart(2, "0"),
                n = n.toString().padStart(2, "0"),
                i = i.toString().padStart(2, "0"),
                0 < Number(t) ? t + ":" + n + ":" + i : n + ":" + i
        },
        customInterval: function (e, t) {
            "function" != typeof e && (e = function () { }
            );
            var n = this;
            n.timer = setTimeout(function () {
                e(),
                    n.customInterval(e, t)
            }, 1e3 * t)
        },
        getHistoryDuration: function (e) {
            this.historyDuration = e
        }
    },
        window.PolyvContinuePlay = t
}(),
    function () {
        var e = function (e, t) {
            this.settings = e,
                this.optionsToFlashvars = t,
                this.init()
        };
        (e.prototype = {
            init: function () { },
            renderInstallGif: function () {
                var n = this
                    , i = this.settings;
                polyvObject(window).trigger("noSupportFlash", {
                    type: i.playerType
                }),
                    0 === i.height ? (i.width = String(i.width),
                        polyvObject.getVodVideojson(i, function (e) {
                            if (!e.error) {
                                if (i.ratio = e.ratio,
                                    -1 < i.width.indexOf("%")) {
                                    var t = 0 < window.innerWidth ? window.innerWidth : screen.width;
                                    i.height = t * (parseInt(i.width) / 100) / e.ratio
                                } else
                                    i.height = i.width / e.ratio;
                                n.makeInstallGif()
                            }
                        })) : n.makeInstallGif()
            },
            makeInstallGif: function () {
                var e = "//player.polyv.net/script/images/" + (this.settings.playerType === polyvObject.playerType.INSTALLER ? "install_flash_player.png" : "upgrade_flash_player.png")
                    , t = polyvObject("<div />");
                t.attr("id", "plInstall").css({
                    width: this.settings.width,
                    height: this.settings.height,
                    backgroundImage: "url(" + e + ")",
                    backgroundSize: "contain",
                    backgroundPosition: "50%",
                    backgroundRepeat: "no-repeat",
                    cursor: "pointer",
                    backgroundColor: "#212121"
                }),
                    this.settings.container.append(t);
                t.bind("click", function () {
                    window.open("//www.adobe.com/go/getflash/", "_blank")
                })
            },
            renderFlash: function () {
                this.initFlashvars(),
                    this.makeFlash()
            },
            initFlashvarsBak: function () {
                var e = this.settings
                    , t = e.flashvars || {};
                polyvObject.extend(t, this.optionsToFlashvars);
                var n = polyvObject.getViewerInfo(e);
                n && (t.viewerInfo = n);
                var i = ["beta_test", "beta", "flashvars", "ts", "sign", "width", "height"];
                for (var r in e.flashvarsOption = "",
                    t)
                    polyvObject.inArray(r, i) < 0 && (e.flashvarsOption += r + "=" + t[r] + "&")
            },
            initFlashvars: function () {
                var e = this.settings
                    , t = polyvObject.isSupportedHTMLDevice();
                e.flashvars || (e.flashvars = {});
                var n = polyvObject.getViewerInfo(e);
                for (var i in n && (e.flashvars.viewerInfo = n),
                    e.flashvars.vid = e.vid,
                    e.df && (e.flashvars.df = e.df),
                    e.watchStartTime && (e.flashvars.watch_start_time = e.watchStartTime),
                    e.watchEndTime && (e.flashvars.watch_end_time = e.watchEndTime),
                    e.watch_start_time && (e.flashvars.watch_start_time = e.watch_start_time),
                    e.watch_end_time && (e.flashvars.watch_end_time = e.watch_end_time),
                    e.show_rate && (e.flashvars.show_rate = e.show_rate),
                    "undefined" != typeof e.teaser_time && (e.flashvars.teaser_time = e.teaser_time),
                    "undefined" != typeof e.tail_time && (e.flashvars.tail_time = e.tail_time),
                    e.code && (e.flashvars.code = e.code),
                    e.verificationcode && (e.flashvars.verificationcode = e.verificationcode),
                    e.start && (e.flashvars.start = e.start),
                    e.end && (e.flashvars.end = e.end),
                    e.ban_ad && (1 == e.ban_ad && (e.ban_ad = "on"),
                        e.flashvars.ban_ad = e.ban_ad),
                    e.ban_ad_time && (1 == e.ban_ad_time && (e.ban_ad_time = "on"),
                        e.flashvars.ban_ad_time = e.ban_ad_time),
                    0 == e.showHd && (e.showHd = "off",
                        e.flashvars.showHd = e.showHd),
                    "off" == e.showHd && (e.flashvars.showHd = e.showHd),
                    e.ban_skin_progress && (1 == e.ban_skin_progress && (e.ban_skin_progress = "on"),
                        e.flashvars.ban_skin_progress = e.ban_skin_progress),
                    e.teaserSkip && (e.flashvars.teaserSkip = e.teaserSkip),
                    e.tailSkip && (e.flashvars.tailSkip = e.tailSkip),
                    "undefined" != typeof e.teaser_show && (e.flashvars.teaser_show = e.teaser_show),
                    "undefined" != typeof e.tail_show && (e.flashvars.tail_show = e.tail_show),
                    e.ban_skin_leftright_keyboard && (e.flashvars.ban_skin_leftright_keyboard = e.ban_skin_leftright_keyboard),
                    e.loading_bg_img && (e.flashvars.cover_img = e.loading_bg_img,
                        e.flashvars.loading_bg_img = e.loading_bg_img),
                    e.is_access_validurl && (e.flashvars.is_access_validurl = e.is_access_validurl),
                    e.verification_data && (e.flashvars.verification_data = e.verification_data),
                    e.showSrt && (0 == e.showSrt && (e.showSrt = "off"),
                        e.flashvars.showSrt = e.showSrt),
                    e.listid && (e.flashvars.listid = e.listid),
                    e.ban_ui && (1 == e.ban_ui && (e.ban_ui = "on"),
                        e.flashvars.ban_ui = e.ban_ui),
                    e.autoplay && 1 == e.autoplay && (e.flashvars.autoplay = 1),
                    e.autoplay && 0 == e.autoplay && (e.flashvars.autoplay = 0),
                    !0 === e.previewMode && (e.flashvars.isPreviewMode = "on",
                        e.flashParams && "always" !== e.flashParams.allowScriptAccess && (e.flashvars.previewMode = !0)),
                    t && (e.flashvars.banSaveSegData = "on"),
                    e.params)
                    e.flashvars[i] = e.params[i];
                if (e.session_id && (e.flashvars.session_id = e.session_id),
                    e.liveVid && (e.flashvars.liveVid = e.liveVid),
                    e.liveUid && (e.flashvars.liveUid = e.liveUid),
                    e.message && (e.flashvars.message = e.message),
                    e.vrdomain && (e.flashvars.vrMode = "on"),
                    e.useH5 && 1 == e.useH5 && polyvObject.isSupportHTML5() && (e.flashvars.skin_type = "skin_blue",
                        e.flashvars.ban_set_player = "off"),
                    !0 === e.adSkip && (e.flashvars.adSkip = "on"),
                    e.adMatter) {
                    for (var r = "[", o = 0; o < e.adMatter.length; o++)
                        r += JSON.stringify(e.adMatter[o]),
                            o != e.adMatter.length - 1 && (r += ",");
                    r += "]",
                        e.flashvars.adMatter = r
                }
                if (e.rightMenu) {
                    var a = "[";
                    for (o = 0; o < e.rightMenu.length; o++)
                        a += JSON.stringify(e.rightMenu[o]),
                            o != e.rightMenu.length - 1 && (a += ",");
                    a += "]",
                        e.flashvars.rightMenu = a
                }
                for (var i in e.teaser_url && (e.flashvars.teaser_url = e.teaser_url),
                    e.tail_url && (e.flashvars.tail_url = e.tail_url),
                    e.liveStreamName && (e.flashvars.name = e.liveStreamName),
                    e.validHead && (e.flashvars.validHead = JSON.stringify(e.validHead)),
                    !0 === e.preload && (e.flashvars.preload = "on"),
                    e.logo && (!e.logo.logo_url || -1 == e.logo.logo_url.indexOf("http") && -1 == e.logo.logo_url.indexOf("https") || (e.flashvars.logo_url = e.logo.logo_url),
                        "undefined" != typeof e.logo.logo_pos && (e.flashvars.logo_pos = e.logo.logo_pos),
                        e.logo.logo_link && (e.flashvars.logo_link = e.logo.logo_link),
                        "undefined" != typeof e.logo.logo_alpha && (e.flashvars.logo_alpha = e.logo.logo_alpha / 100),
                        e.logo.logo_width && (e.flashvars.logo_width = e.logo.logo_width),
                        e.logo.logo_height && (e.flashvars.logo_height = e.logo.logo_height),
                        e.logo.logoOffset && (e.flashvars.logoOffset = e.logo.logoOffset)),
                    e.url && (e.flashvars.url = e.url),
                    "undefined" != typeof e.skinLocation && (e.flashvars.skinLocation = e.skinLocation),
                    e.volume && (e.flashvars.volume = e.volume),
                    "undefined" != typeof e.loop && (!0 === e.loop ? e.flashvars.is_auto_replay = "on" : e.flashvars.is_auto_replay = "off"),
                    e.skin && (e.flashvars.skin_type = e.skin),
                    e.ban_set_player && (e.flashvars.ban_set_player = e.ban_set_player),
                    e.ban_history_time && "off" !== e.ban_history_time ? e.ban_history_time = "on" : e.ban_history_time = "off",
                    e.history_video_duration && (e.flashvars.history_video_duration = e.history_video_duration),
                    !1 === e.allowFullscreen && (e.flashvars.allowFullscreen = e.allowFullscreen),
                    e.playsafeUrl && (e.flashvars.playsafeUrl = e.playsafeUrl),
                    e.priorityMode && (e.flashvars.priorityMode = e.priorityMode),
                    "undefined" != typeof e.audioMode && (e.flashvars.audioMode = e.audioMode),
                    "undefined" != typeof e.speed && (e.flashvars.speed = e.speed),
                    e.is_review_player && (e.flashvars.is_review_player = e.is_review_player),
                    "zh_CN" === e.lang ? e.flashvars.language = 0 : "en" === e.lang && (e.flashvars.language = 1),
                    e.playsafe && (e.flashvars.playsafe = e.playsafe),
                    e.playsafeUrl && (e.flashvars.playsafeUrl = e.playsafeUrl),
                    e.keyboardSeekTime && (e.flashvars.keyboardSeekTime = e.keyboardSeekTime),
                    e.video_align && (e.flashvars.video_align = e.video_align),
                    "undefined" != typeof e.showAuto && (e.flashvars.showAuto = e.showAuto),
                    e.skipTeaser && (e.flashvars.skipTeaser = e.skipTeaser),
                    polyvObject.isWinXP() && polyvObject.isIEVersion(8) && (e.flashvars.is_xp_ie8 = 1),
                    e.params)
                    e.flashvars[i] = e.params[i];
                for (var s in e.playerId = e.vid + "X" + Math.floor(9999999 * Math.random()),
                    e.flashvars.playerId = e.playerId,
                    this.addFlashVars(),
                    e.flashvarsOption = "",
                    e.flashvars)
                    e.flashvarsOption = e.flashvarsOption + s + "=" + e.flashvars[s] + "&"
            },
            addFlashVars: function () {
                for (var e = this.settings, t = ["ban_seek", "ban_seek_by_limit_time"], n = 0; n < t.length; n++) {
                    var i = t[n];
                    e[i] && (e.flashvars[i] = e[i])
                }
            },
            makeFlash: function () {
                var e = this.settings;
                e.swf_link = "//player.polyv.net/videos/player.swf";
                var t = e.isBanByChrome ? 400 : e.width
                    , n = e.isBanByChrome ? 400 : e.height;
                e.playerId = e.vid + "X" + Math.floor(9999999 * Math.random()),
                    e.flashvars.playerId = e.playerId;
                var i = "";
                for (var r in e.flashvars)
                    i = i + r + "=" + e.flashvars[r] + "&";
                for (var o in e.params)
                    e.flashvars[o] = e.params[o];
                if (polyvObject.isIE()) {
                    e.flashParams.movie = e.swf_link;
                    var a = "";
                    for (var s in a += '<param name="flashvars" value="' + i + '" />',
                        e.flashParams)
                        a += '<param name="' + s + '" value="' + e.flashParams[s] + '" />';
                    var l = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="' + (e.playerId || e.vid) + '" width="' + t + '" height="' + n + '" type="application/x-shockwave-flash" class="polyvFlashObject">' + a + "</object>";
                    container.html(l)
                } else {
                    var d, c = document.createElement("object");
                    for (var u in c.type = "application/x-shockwave-flash",
                        c.data = e.swf_link,
                        c.id = e.playerId || e.vid,
                        c.width = t,
                        c.height = n,
                        c.className = "polyvFlashObject",
                        e.flashParams.flashvars = i,
                        e.flashParams)
                        (d = document.createElement("param")).name = u,
                            d.value = e.flashParams[u],
                            c.appendChild(d);
                    e.container.html(c)
                }
            },
            renderPptFlash: function () {
                return this.makePptFlash()
            },
            makePptFlash: function () {
                var n = this.settings
                    , i = {};
                return this.initFlashvars(),
                    polyvObject.getScript("//player.polyv.net/resp/vod-ppt-js/latest/vod-ppt-player.js", function () {
                        var e = polyvObject("<div/>").attr("id", n.vid).css({
                            position: "relative",
                            width: "100%",
                            height: "100%"
                        });
                        n.container.append(e);
                        var t = {
                            mainWidth: n.width,
                            mainHeight: n.height,
                            subWidth: n.subWidth || 355,
                            subHeight: n.subHeight || 200,
                            main: "undefined" != typeof n.mainScreen ? "video" === n.mainScreen ? "player" : n.mainScreen : "ppt",
                            closeSubWindow: "undefined" != typeof n.pptVisible && !n.pptVisible,
                            newUi: "undefined" == typeof n.useNewUi || n.useNewUi,
                            container: e,
                            ppt: {
                                src: "//player.polyv.net/ppt.swf",
                                vars: "ban_title=on"
                            },
                            player: {
                                src: "//player.polyv.net/videos/player.swf",
                                vars: n.flashvarsOption || ""
                            },
                            list: {
                                src: "//player.polyv.net/ppt_list.swf"
                            }
                        };
                        polyvObject.extend(i, polyvPptPlayer(t))
                    }),
                    i
            },
            startCheck: function () {
                var n = this
                    , e = this.settings;
                polyvObject.flashObject || (polyvObject.flashObject = []),
                    polyvObject.flashObject.push({
                        container: e.container,
                        playerId: "#" + e.playerId
                    }),
                    window.onPlySeed = function (e, t) {
                        polyvObject.isShowVidObjError ? n.showVidObjError() : polyvObject.hasStartCheck || "1" !== t || (polyvObject.hasStartCheck = !0,
                            n.checkVidObjectItem() ? n.showVidObjError() : n.checkFlashStyle())
                    }
            },
            checkVidObjectItem: function () {
                var e = this.settings;
                return e.keyItem = String(CryptoJS.MD5("polyv")).slice(0, 10),
                    e.valItem = String(CryptoJS.MD5("polyv")).slice(-10),
                    polyvObject.getSessionStorage(e.keyItem) === e.valItem
            },
            checkFlashStyle: function () {
                var n = this
                    , i = this.settings
                    , r = polyvObject.flashObject;
                polyvObject.checkFlashStyle = setInterval(function () {
                    for (var e = 0; e < r.length; e++) {
                        var t = polyvObject(r[e].playerId).attr("style");
                        void 0 !== t && (t = (t = t.replace(/\s+/g, "")).replace(/\;+/g, ""),
                            /visibility:visible|!important/i.test(t) && (polyvObject.setSessionStorage(i.keyItem, i.valItem),
                                clearInterval(polyvObject.checkFlashStyle),
                                polyvObject.checkFlashStyle = null,
                                n.showVidObjError()))
                    }
                }, 1e3 * (polyvObject.vidObjKeyWords[0] + 1))
            },
            showVidObjError: function () {
                var e = this.settings
                    , t = polyvObject.flashObject;
                polyvObject.isShowVidObjError = !0;
                for (var n = 0; n < t.length; n++) {
                    var i = polyvObject.vidObjKeyWords2[9].toString() + polyvObject.vidObjKeyWords[2].toString() + polyvObject.vidObjKeyWords2[8].toString()
                        , r = polyvObject.lang.warn.limiteWindow
                        , o = polyvObject("<div/>")
                        , a = polyvObject.vidObjKeyWords2[1] + polyvObject.vidObjKeyWords2[10] + polyvObject.vidObjKeyWords2[11] + polyvObject.vidObjKeyWords2[10];
                    o.addClass(a),
                        o.css({
                            color: "white",
                            "letter-spacing": "1px",
                            "text-align": "center",
                            position: "relative",
                            display: "table-cell",
                            "vertical-align": "middle"
                        });
                    var s = polyvObject("<img/>")
                        , l = e.imgPath;
                    s.attr("src", l),
                        s.css({
                            width: "80px",
                            height: "80px",
                            display: "inline"
                        });
                    var d = polyvObject("<span/>").css({
                        display: "block",
                        padding: "10px 6px 2px 6px",
                        "font-family": '"Segoe UI", "Lucida Grande", Helvetica, Arial, "Microsoft YaHei", FreeSans, Arimo, "Droid Sans", "wenquanyi micro hei", "Hiragino Sans GB", "Hiragino Sans GB W3", "FontAwesome", sans-serif'
                    });
                    d.html(decodeURIComponent(r) + "</br>#" + i),
                        o.append(s, d);
                    var c = polyvObject(t[n].playerId)
                        , u = c.attr("width")
                        , p = c.attr("height")
                        , h = c.css("position")
                        , f = a + polyvObject.vidObjKeyWords2[12] + polyvObject.vidObjKeyWords[5]
                        , v = polyvObject('<div class="' + f + '"></div>');
                    v.css({
                        width: u,
                        height: p,
                        backgroundColor: "black",
                        position: h,
                        display: "table"
                    }),
                        v.append(o),
                        t[n].container.append(v),
                        polyvObject.updateFlowStatus(polyvObject.FLOW_STATUS.ERROR),
                        c.remove()
                }
                "function" == typeof serverError && serverError()
            }
        }).constructor = e,
            window.PolyvFlash = e
    }(),
    function () {
        var e = function () { };
        (e.prototype = {
            checkDomainList: function (e, t) {
                if (t.domain || (t.domain = document.domain),
                    this.domain = t.domain,
                    0 === e.domainSwitch)
                    return !0;
                var n = !0;
                switch (e.setting_type) {
                    case 1:
                        this.blackDomain(e.disable_host) && (n = !1);
                        break;
                    case 2:
                        this.whiteDomain(e.enable_host) || (n = !1);
                        break;
                    case 3:
                        this.blackDomain(e.disable_host) && (n = !1),
                            n = !!this.whiteDomain(e.enable_host)
                }
                return n
            },
            blackDomain: function (e) {
                return this.containInHost(e)
            },
            whiteDomain: function (e) {
                for (var t = ["polyv.net", "polyv.cn"], n = 0; n < t.length; n++)
                    e += t[n] + ",";
                return this.containInHost(e)
            },
            containInHost: function (e) {
                for (var t = this.getPureDomain(e), n = 0; n < t.length; n++)
                    if (0 < t[n].length && -1 != this.domain.indexOf(t[n]))
                        return !0;
                return !1
            },
            getPureDomain: function (e) {
                for (var t = e.split(","), n = [], i = 0; i < t.length; i++) {
                    var r = t[i];
                    -1 !== r.indexOf("http://") ? r = r.split("http://")[1] : -1 !== r.indexOf("https://") && (r = r.split("https://")[1]),
                        r = -1 !== r.indexOf("/") ? r.split("/")[0] : r,
                        n.push(r)
                }
                return n
            }
        }).constructor = e,
            window.PolyvDomainList = e
    }(),
    function (e) {
        function t(e, t) {
            this.set = e,
                this.ply = t,
                this.tipsText = "视频播放失败, 请刷新重试",
                this.init()
        }
        t.prototype = {
            init: function () {
                var e = this;
                this.set.on("NETWORK_ERROR", function () {
                    e.show()
                })
            },
            show: function () {
                var e = this.set;
                this.hide();
                var t = this.ply('<div class="plv-network"/>');
                t.html(this.tipsText),
                    t.css({
                        position: "absolute",
                        bottom: "64px",
                        color: "#fff",
                        padding: "5px 10px",
                        backgroundColor: "rgba(0, 0, 0, 0.8)"
                    }),
                    e.container.append(t)
            },
            hide: function () {
                this.ply(".plv-network").remove()
            }
        },
            window.PlayNetWorkTips = t
    }(),
    function (e) {
        function t(e) {
            this.settings = e,
                this.settings.addrurl = "",
                this.settings.adNow = [],
                this.settings.nowAdType = 0,
                this.preAd = [],
                this.endAd = [],
                this.isPreAdXML = null,
                this.isEndAdxml = null,
                this.hasADInfo = !1
        }
        t.prototype = {
            constructor: t,
            makeAD: function (e, t, n) {
                if (this.settings.audioBack || this.settings.ban_subPage || polyvObject(e).css("background-image", 'url("")'),
                    polyvObject.displayVideo(this.settings, polyvObject(t), !1),
                    this.sortAdInfo(),
                    this.settings.adIndex = 0,
                    "pre" == n)
                    polyvObject.updateFlowStatus(polyvObject.FLOW_STATUS.PREAD),
                        this.preAdControl(),
                        "on" != this.settings.ban_ad_time && 1 != this.settings.ban_ad_time || this.settings.banAdTime && this.settings.banAdTime(),
                        "on" == this.settings.ban_ad || 1 == this.settings.ban_ad || 0 == this.settings.preAd.length ? polyvObject.updatePlayFacade.preAdComplete() : 0 < this.settings.preAd.length ? (this.settings.preAdTotalTime = this.getAdTotalTime(this.settings.preAd),
                            this.settings.adArr = this.settings.preAd,
                            this.settings.adDom = e,
                            this.settings.adVideo = t,
                            this.settings.adWType = "pre",
                            this.loopAd(),
                            this.settings.showAdTotalTime && this.settings.showAdTotalTime(this.settings.preAdTotalTime)) : polyvObject.updatePlayFacade.preAdComplete();
                else {
                    if (polyvObject.updateFlowStatus(polyvObject.FLOW_STATUS.ENDAD),
                        this.endAdControl(),
                        polyvObject.isEndOnce && !this.settings.ban_subPage)
                        return polyvObject(e).css("background-image", ""),
                            void polyvObject.updatePlayFacade.endAdComplete();
                    "on" != this.settings.ban_ad_time && 1 != this.settings.ban_ad_time || this.settings.banAdTime && this.settings.banAdTime(),
                        "on" == this.settings.ban_ad || 1 == this.settings.ban_ad ? polyvObject.updatePlayFacade.endAdComplete() : 0 < this.settings.endAd.length ? (this.settings.endAdTotalTime = this.getAdTotalTime(this.settings.endAd),
                            this.settings.showAdTotalTime && this.settings.showAdTotalTime(this.settings.endAdTotalTime),
                            this.settings.adArr = this.settings.endAd,
                            this.settings.adDom = e,
                            this.settings.adVideo = t,
                            this.settings.adWType = "end",
                            this.loopAd()) : polyvObject.updatePlayFacade.endAdComplete()
                }
            },
            preAdControl: function () {
                this.addADShowTime(),
                    polyvObject(".loading").css("display", "none"),
                    this.startAnimate(polyvObject(".adshow"), {
                        display: "block"
                    }, 300),
                    polyvObject(".mask").css({
                        width: "100%",
                        height: "100%"
                    })
            },
            endAdControl: function () {
                var e = this.settings
                    , t = polyvObject.FLOW_STATUS;
                e.emit && e.emit(t.ENDAD),
                    polyvObject(".logo").css("opacity", "0"),
                    this.addADShowTime()
            },
            loopAd: function () {
                var t = this.settings
                    , n = t.adArr
                    , e = t.adDom
                    , i = t.adVideo
                    , r = t.adWType
                    , o = this;
                if (!this.isAdOver(!0))
                    switch (n[t.adIndex].adtype) {
                        case 1:
                            this.sendAdShowStat(n[t.adIndex]),
                                t.nowAdType = 1,
                                polyvObject(e).css("background-image", "url(" + n[t.adIndex].matterurl + ")"),
                                polyvObject.displayVideo(t, polyvObject(i), !1),
                                t.addrurl = n[t.adIndex].addrurl,
                                t.adNow = n[t.adIndex];
                            var a = 0
                                , s = n[t.adIndex].skipenabled
                                , l = n[t.adIndex].skiptime
                                , d = n[t.adIndex].skipbutton
                                , c = !1
                                , u = new Image;
                            polyvObject(u).attr("src", n[t.adIndex].matterurl),
                                polyvObject(u).error(function () {
                                    c || (clearInterval(o.countImageTimeInterval),
                                        t.adIndex = 0,
                                        "pre" == r ? polyvObject.updatePlayFacade.preAdComplete() : polyvObject.updatePlayFacade.endAdComplete())
                                }),
                                this.stopAd(),
                                this.countImageTimeInterval = setInterval(function () {
                                    a++,
                                        "undefined" == typeof t.adSkip && (s ? 0 < l && l === a && o.addADSkip(!0, d) : o.addADSkip(!1));
                                    "pre" === r ? t.preAdTotalTime-- : t.endAdTotalTime--,
                                        t.showAdTotalTime && ("pre" === r ? t.showAdTotalTime(t.preAdTotalTime) : t.showAdTotalTime(t.endAdTotalTime)),
                                        a == n[t.adIndex].timesize && (c = !0,
                                            o.isAdOver() ? o.stopAd() : (o.stopAd(),
                                                o.playNextAd()))
                                }, 1e3);
                            break;
                        case 2:
                            this.sendAdShowStat(n[t.adIndex]),
                                t.nowAdType = 2,
                                polyvObject(e).css("background-image", 'url("")'),
                                polyvObject(i).css({
                                    width: "100%",
                                    height: "100%"
                                }),
                                polyvObject.displayVideo(t, polyvObject(i), !0),
                                i.src = n[t.adIndex].matterurl,
                                i.play(),
                                t.addrurl = n[t.adIndex].addrurl,
                                t.adNow = n[t.adIndex];
                            this.teaserErrorTimer = setInterval(function (e) {
                                null != polyvObject(i)[0].error && (clearInterval(o.teaserErrorTimer),
                                    clearInterval(o.countVideoTimeInterval),
                                    t.adIndex = 0,
                                    "pre" == r ? polyvObject.updatePlayFacade.preAdComplete() : (i.pause(),
                                        polyvObject.updatePlayFacade.endAdComplete()))
                            }, 500);
                            var p = 0;
                            s = n[t.adIndex].skipenabled,
                                l = n[t.adIndex].skiptime,
                                d = n[t.adIndex].skipbutton;
                            this.stopAd(),
                                this.countVideoTimeInterval = setInterval(function (e) {
                                    (p++,
                                        "undefined" == typeof t.adSkip && (s ? 0 < l && l === p && o.addADSkip(!0, d) : o.addADSkip(!1)),
                                        "pre" === r ? (t.preAdTotalTime--,
                                            t.showAdTotalTime && t.showAdTotalTime(t.preAdTotalTime)) : (t.endAdTotalTime--,
                                                t.showAdTotalTime && t.showAdTotalTime(t.endAdTotalTime)),
                                        p === n[t.adIndex].timesize) && (!0,
                                            o.isAdOver() ? o.stopAd() : (i.pause(),
                                                o.playNextAd()))
                                }, 1e3)
                    }
            },
            playNextAd: function () {
                var e = 0;
                this.settings.adIndex++,
                    "pre" === this.settings.adWType && (this.settings.preAdTotalTime = this.getAdTotalTime(this.settings.preAd, this.settings.adIndex),
                        e = this.settings.preAdTotalTime),
                    "end" === this.settings.adWType && (this.settings.endAdTotalTime = this.getAdTotalTime(this.settings.preAd, this.settings.adIndex),
                        e = this.settings.endAdTotalTime),
                    e = e < 0 ? 0 : e,
                    this.settings.adArr[this.settings.adIndex] && (this.settings.adArr[this.settings.adIndex].skipenabled || !1,
                        this.settings.adArr[this.settings.adIndex].skipbutton),
                    this.settings.showAdTotalTime && this.settings.showAdTotalTime(e),
                    "function" == typeof addADSkip && addADSkip(!1),
                    this.loopAd()
            },
            sendAdShowStat: function (e) {
                var t = "//stat2.polyv.net/log/gganaly.html?adid=" + e.adid + "&type=1&ran=" + Math.floor(999999999 * Math.random());
                polyvObject.ajax({
                    url: t,
                    type: "GET",
                    dataType: "jsonp",
                    success: function () { }
                })
            },
            stopAd: function () {
                clearInterval(this.countImageTimeInterval),
                    this.countImageTimeInterval = null,
                    clearInterval(this.teaserErrorTimer),
                    this.teaserErrorTimer = null,
                    clearInterval(this.countVideoTimeInterval),
                    this.countVideoTimeInterval = null
            },
            isAdOver: function (e) {
                var t = e ? this.settings.adArr.length : this.settings.adArr.length - 1
                    , n = !1;
                return this.settings.adIndex == t && (this.settings.adIndex = 0,
                    this.stopAd(),
                    "pre" === this.settings.adWType ? polyvObject.updatePlayFacade.preAdComplete() : polyvObject.updatePlayFacade.endAdComplete(),
                    n = !0),
                    n
            },
            sortAdInfo: function () {
                if (!this.hasADInfo && (this.hasADInfo = !0,
                    0 < this.settings.adList.length)) {
                    this.settings.catatree ? this.settings.catatree = this.settings.catatree.split(",") : this.settings.catatree = 1 != this.settings.cataid ? [1, this.settings.cataid] : [1];
                    for (var e = this.settings.catatree.length - 1; 0 <= e; e--) {
                        for (var t = 0; t < this.settings.adList.length; t++)
                            if (this.settings.adList[t].cataid == this.settings.catatree[e] && "2" != this.settings.adList[t].location && 3 != this.settings.adList[t].adtype && 0 < this.settings.adList[t].timesize) {
                                var n = /\.[^\.]+$/.exec(this.settings.adList[t].matterurl);
                                if (2 == this.settings.adList[t].adtype && ".mp4" != n && ".m3u8" != n)
                                    continue;
                                "1" != this.settings.adList[t].location || this.isPreAdXML ? "3" != this.settings.adList[t].location || this.isEndAdxml || this.endAd.push(this.settings.adList[t]) : this.preAd.push(this.settings.adList[t])
                            }
                        if (0 < this.preAd.length && (this.isPreAdXML = !0),
                            0 < this.endAd.length && (this.isEndAdxml = !0),
                            this.isPreAdXML && this.isEndAdxml)
                            break
                    }
                }
                return this.settings.preAd = this.preAd || [],
                    this.settings.endAd = this.endAd || [],
                    "true" == this.settings.adsetting && -1 != polyvObject.domain.indexOf(this.settings.weburl) && (this.settings.ban_ad = "on"),
                    "on" != this.settings.ban_ad && 1 != this.settings.ban_ad && 0 != this.settings.preAd.length
            },
            addADShowTime: function () {
                polyvObject('<div class="ad-show"><div class="bg-rect ad-rect"></div><div class="t ad-txt"><span style="letter-spacing:2px">' + polyvObject.lang.ad.countDown + '</span><span class="ad-time"></span><span>' + polyvObject.lang.ad.countDownSecond + "</span></div></div>").appendTo(polyvObject("#container")),
                    this.settings.adSkip && this.addADSkip(!0)
            },
            removeAd: function () {
                polyvObject(".ad-show") != undefined && polyvObject(".ad-show").remove()
            },
            addADSkip: function (e, t) {
                var n = polyvObject.lang.ad.skip
                    , i = this;
                if (t && (n = t),
                    polyvObject(".ad-skip-txt").remove(),
                    e) {
                    var r = polyvObject("<span class='ad-skip-txt'>&nbsp;&nbsp;|&nbsp;&nbsp;" + n + "</span>");
                    polyvObject(".ad-txt").append(r),
                        r.on("click", function () {
                            "undefined" == typeof i.settings.adSkip ? i.playNextAd() : (i.stopAd(),
                                i.settings.j2s_skipAd())
                        });
                    var o = polyvObject('<div class="ad_alpha"></div>');
                    polyvObject(".ad-show").append(o)
                } else
                    polyvObject(".ad-skip-txt").remove()
            },
            startAnimate: function (e, t, n) {
                e.animate(t, n)
            },
            getAdTotalTime: function (e, t) {
                for (var n = 0, i = 0; i < e.length; i++)
                    t ? t <= i && (n += parseInt(e[i].timesize)) : n += parseInt(e[i].timesize);
                return n
            }
        },
            window.PlayAdControl = t
    }(),
    function (e) {
        function t(e, t) {
            this.set = e,
                this.ply = t,
                this.type = 0,
                this.playSafeType = 0,
                this.hls = null,
                this.playsafe = "",
                this.urlTokenSrc = ""
        }
        t.prototype = {
            determinCoreType: function () {
                var e = this.set
                    , t = this.ply;
                this.type = 1;
                var n = t.isAndroid() && this.getIsPlaySafe();
                (n = !(e.url || e.useAudio || e.appId) && n) ? window.Hls ? window.Hls.isSupported() ? this.type = 2 : this.type = 1 : this.type = 0 : this.type = 1
            },
            getIsPlaySafe: function () {
                var e = this.set
                    , t = "mse" === e.webLevel && /web/i.test(e.hlsLevel)
                    , n = "mse" === e.appLevel && /app/i.test(e.hlsLevel)
                    , i = this.getPlaySafeType()
                    , r = (t || n) && 1 === e.seed && i && /hls/i.test(e.sourceType)
                    , o = 1 === e.seed && /web|open/i.test(e.hlsLevel) && e.useHls && /hls/i.test(e.sourceType);
                return r || o
            },
            playSource: function (e) {
                switch (this.determinCoreType(),
                this.type) {
                    case 1:
                        this.playVideo(e);
                        break;
                    case 2:
                        this.playHls(e);
                        break;
                    case 3:
                        break;
                    default:
                        this.loadHls(e)
                }
            },
            playVideo: function (e) {
                var t = this.set.video;
                t && (t.src = e),
                    this.set.isSendOnPlay = !1
            },
            playHls: function (e) {
                var t = this.set;
                switch (this.playSafeType) {
                    case 0:
                        t.useHls ? (this.newHls(),
                            this.setHlsSource(e)) : this.errorPlaySafe();
                        break;
                    case 1:
                        this.newHls(),
                            this.setHlsSource(e);
                        break;
                    case 2:
                        break;
                    case 3:
                        this.setSrcByUrlToken(e)
                }
            },
            newHls: function () {
                var e = this.ply
                    , n = this.set
                    , i = window.Hls
                    , r = this.set.video
                    , t = this.set.seed_const / 2
                    , o = this.set.playsafe
                    , a = {
                        minSeekHole: t,
                        playsafe: this.playsafe = o
                    };
                0 === this.playSafeType && (a = {}),
                    this.hls = new window.Hls(a);
                var s = this.hls
                    , l = 0;
                s.attachMedia(r),
                    s.on(i.Events.MANIFEST_PARSED, function () {
                        e.flowStatus && r.play()
                    }),
                    s.on(i.Events.ERROR, function (e, t) {
                        if (t.fatal)
                            switch (t.type) {
                                case i.ErrorTypes.NETWORK_ERROR:
                                    0 === r.currentTime && n.emit("M3U8_LOAD_FAIL"),
                                        1 < r.currentTime && (5 < ++l ? n.emit("NETWORK_ERROR") : s.startLoad());
                                    break;
                                case i.ErrorTypes.MEDIA_ERROR:
                            }
                    })
            },
            setHlsSource: function (e) {
                this.ply,
                    this.set;
                var t = this.hls;
                0 !== this.playSafeType && /ts|sign/i.test(e) && (e = this.removeParameter(e)),
                    t.loadSource(e)
            },
            setSrcByUrlToken: function (e) {
                var t = this.set
                    , n = this
                    , i = this.ply
                    , r = this.set.playsafeUrl
                    , o = this.set.vid;
                this.urlTokenSrc = e,
                    t.ban_ui ? i.ajax({
                        url: r,
                        data: {
                            vid: o
                        },
                        dataType: "json"
                    }).done(function (e) {
                        "string" == typeof e && "on" === t.beta_test && (e = JSON.parse(e)),
                            n.setUrlTokenSrc(e)
                    }).fail(function () {
                        n.setUrlTokenSrc({
                            code: 400
                        })
                    }) : t.frameBridge.childPost("getToken")
            },
            setUrlTokenSrc: function (e) {
                e && e.code + "" == "200" && e.data ? (this.set.playsafe = e.data,
                    this.newHls(),
                    this.setHlsSource(this.urlTokenSrc)) : this.errorPlaySafe()
            },
            loadHls: function (e) {
                var t = this
                    , n = this.ply
                    , i = this.set
                    , r = "on" === i.beta_test ? "../dist/js/hls.min.js" : n.httpHead + "//player.polyv.net/script/js/hls.min.js";
                "on" === i.beta && (r = n.httpHead + "//player.polyv.net/javascript/" + n.buildMetaData.split("+")[1] + "/js/hls.min.js"),
                    polyvObject.getScript(r, function () {
                        t.playSource(e)
                    })
            },
            errorPlaySafe: function () { },
            getPlaySafeType: function () {
                var e = this.set
                    , t = this.set.playsafe
                    , n = 0;
                return t && (n = 1),
                    t && "function" == typeof t && (n = 0),
                    this.set.playsafeUrl && (n = 3),
                    e.useHls && (n = 0),
                    this.playSafeType = n,
                    this.playSafeType
            },
            reset: function (e) {
                this.set.playsafe = e.playsafe
            },
            removeParameter: function (e) {
                return e = (e = e.replace(/(^\\?|&)ts=[^&]*(&)?/g, function (e, t, n) {
                    return "?" === t || n ? t : ""
                })).replace(/(^\\?|&)sign=[^&]*(&)?/g, function (e, t, n) {
                    return "?" === t || n ? t : ""
                })
            }
        },
            window.PlayCoreControl = t
    }(),
    function (e) {
        function t(e, t) {
            this.set = e,
                this.ply = t,
                this.isDestroying = !1,
                this.container = t(".container-main")
        }
        (t.prototype = {
            init: function () {
                this.destroy(),
                    this.createDom(),
                    this.isDestroying = !0
            },
            createDom: function () {
                switch (this.set.tailRecommendOpt) {
                    case 0:
                        this.newNormal();
                        break;
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 6:
                        this.newSpecial();
                        break;
                    case 5:
                        this.newOrigin()
                }
            },
            newNormal: function () {
                var e = this.ply
                    , t = '<div class="plv-repeat plv-repeat-normal"><span class="iconfont plv-repeat__icon"></span><p>' + this.ply.lang.replay + "</p></div>";
                this.repeat = e(t),
                    this.container.append(this.repeat),
                    this.bindEvent()
            },
            newSpecial: function () {
                this.getTailDate()
            },
            getTailDate: function () {
                var n = this
                    , e = n.ply
                    , i = n.set
                    , t = i.cdnUrl[0];
                "on" !== i.beta_test && "on" !== i.beta || (t = t.replace("player", "beta"));
                var r = t + "/rjson/" + i.vid + ".js"
                    , o = ["normal", "relateList", "newestList", "hottestList", "recommendList", "origin", "customList"];
                e.getJSON(r, function (e) {
                    if (!this.isDestroying) {
                        var t = e[o[i.tailRecommendOpt]];
                        0 !== t.length ? n.showList(t) : n.newOrigin()
                    }
                })
            },
            showList: function (e) {
                for (var t = this.set.tailRecommendOpt, n = this.ply, i = '<div class="plv-repeat plv-repeat-special"><div class="plv-repeat__top">' + n.lang["end" + t] + '</div><div class="plv-repeat__content"></div><div class="plv-repeat__bottom"><span class="iconfont plv-repeat__icon"></span><span>' + n.lang.replay + "</span></div></div>", r = e || [], o = "", a = 0; a < r.length; a++)
                    o += '<div class="plv-repeat__content__box" data-vid="' + r[a].vid + '"><div class="plv-repeat__content__box__image" data-type="content-box"><img src="' + r[a].firstImage + '"><span>' + r[a].duration + '</span></div><div class="plv-repeat__content__box__info"  data-type="content-box"><p>' + r[a].title + "</p><div>" + r[a].duration + "</div></div></div>";
                var s = n(o);
                this.repeat = n(i),
                    this.container.append(this.repeat),
                    n(".plv-repeat__content").append(s),
                    this.bindEvent()
            },
            newOrigin: function () {
                var e = this.set
                    , t = this.ply
                    , n = '<div class="plv-repeat plv-repeat-origin"><div class="plv-repeat__poster" style="background-image: url(' + e.imageUrl + ')"></div><div class="plv-repeat__play_btn plv-repeat__icon"></div></div>';
                this.repeat = t(n),
                    this.container.append(this.repeat),
                    this.bindEvent()
            },
            bindEvent: function () {
                var t = this
                    , n = this.ply;
                t.container.find(".plv-repeat__icon").on("click", function () {
                    t.replay()
                }),
                    n(".plv-repeat").on("click", "[data-vid]", function () {
                        var e = n(this).data("vid");
                        t.playNextVid(e)
                    })
            },
            replay: function () {
                this.hide(),
                    this.set.j2s_replay()
            },
            playNextVid: function (e) {
                this.hide(),
                    "function" == typeof toChangeVid && toChangeVid(e)
            },
            show: function () {
                !0 !== this.set.hideRepeat && this.init()
            },
            hide: function () {
                this.destroy()
            },
            destroy: function () {
                this.isDestroying = !0,
                    this.container.find(".plv-repeat").remove()
            }
        }).constructor = t,
            window.PlayEndControl = t
    }(),
    function (e) {
        function t(e) {
            this.settings = e,
                this.hasSrtCore = !1,
                this.srtParse = null,
                this.selectSrtShow = !1
        }
        t.prototype = {
            init: function () {
                this.destroy(),
                    0 !== this.settings.srt_list.length && !1 !== this.settings.show_srt && (this.bindEvent(),
                        this.hasSrtCore ? this.addSrt() : this.getScript())
            },
            bindEvent: function () {
                for (var e = this, t = e.settings, n = polyvObject.eventType, i = polyvObject.FLOW_STATUS, r = [[i.PLAY, function () {
                    e.selectSrtShow && e.divContainer.show()
                }
                ], [i.ENDAD, function () {
                    e.divContainer.hide()
                }
                ], [n.BAR_UP, function () {
                    window.srtShowY = "50px",
                        e.divContainer && (polyvObject.stopAnimate(e.divContainer),
                            polyvObject.startAnimate(e.divContainer, {
                                bottom: "50px"
                            }, 300))
                }
                ], [n.BAR_DOWN, function () {
                    window.srtShowY = "17px",
                        e.divContainer && (polyvObject.stopAnimate(e.divContainer),
                            polyvObject.startAnimate(e.divContainer, {
                                bottom: "17px"
                            }, 300),
                            e.srtSelected.css("display", "none"))
                }
                ]], o = 0; o < r.length; o++)
                    t.on(r[o][0], r[o][1])
            },
            addSrt: function () {
                var e = this.settings;
                this.hasSrtCore = !0,
                    this.divContainer = polyvObject('<div class="plv-srt-container" id="srtContainer">').css({
                        position: "absolute",
                        width: "100%"
                    }),
                    polyvObject("#plv_container").append(this.divContainer),
                    this.changeSrt(e.srt_index);
                var t = 0 < e.srt_list.length - 1 ? e.srt_list.length - 1 : 0;
                e.srt_list[t][0] !== polyvObject.lang.bar.hide && e.srt_list.push([polyvObject.lang.bar.hide, ""]),
                    this.showSrtBarControl()
            },
            showSrtBarControl: function () {
                var t = this
                    , n = t.settings
                    , e = 2 < n.srt_list.length
                    , i = "";
                if (i = '<div class="btnB srt-show"><div class="srt-now">' + polyvObject.lang.bar.srt + '</div><div class="select-panel srt-selected srt-SF"><div class="srt-f spanC">',
                    e)
                    for (var r = 0; r < n.srt_list.length; r++)
                        i += '<span data-v="' + r + '" class="srtSpan srt' + r + '">' + n.srt_list[r][0] + "</span>";
                i += "</div></div></div>",
                    t.srtShow = polyvObject(i),
                    t.srtShow.appendTo(polyvObject(".controls-bar")),
                    t.srtNow = polyvObject(".srt-now"),
                    t.srtSelected = polyvObject(".srt-selected"),
                    t.srtF = polyvObject(".srt-f"),
                    t.srtNow.bind("click", function () {
                        t.isSrcSShow = !t.isSrcSShow,
                            e ? (t.srtSelected.fadeToggle(200),
                                t.changeSrcStyle()) : t.toggleShow()
                    }),
                    t.srtShow.on("click", "[data-v]", function () {
                        var e = parseInt(polyvObject(this).data("v"));
                        n.srt_index !== e && (n.srt_index = e,
                            t.highLightSrc(n.srt_index),
                            t.srtSelected.css("display", "none"),
                            t.isSrcSShow = !1,
                            n.srt_index === n.srt_list.length - 1 ? t.hide() : (t.changeSrt(n.srt_index),
                                t.show()),
                            canBarDown = !0,
                            n.j2s_resumeVideo())
                    }),
                    t.highLightSrc(n.srt_index)
            },
            changeSrcStyle: function () {
                var e = this.settings;
                this.isSrcSShow ? (barUp(),
                    canBarDown = !1,
                    e.j2s_pauseVideo(),
                    maskPlay.css("width", "0"),
                    this.srtSelected.css("display", "block"),
                    this.srtShow.css("z-index", "3"),
                    this.srtNow.css("z-index", "3"),
                    this.srtF.children().css("width", parseInt(100 / e.srt_list.length) + "%")) : (maskPlay.css("width", "72px"),
                        canBarDown = !0,
                        player.j2s_resumeVideo(),
                        this.srtShow.css("z-index", "0"),
                        this.srtShow.css("z-index", "0"))
            },
            highLightSrc: function (e) {
                polyvObject(".srtSpan").css("color", "#fff"),
                    polyvObject('[data-v="' + e + '"]').css("color", "#14a2f4")
            },
            getScript: function () {
                var e = this
                    , t = "on" === this.settings.beta_test ? "../dist/js/subtitle.bundle.js" : "//player.polyv.net/script/js/subtitle.bundle.js"
                    , n = "on" === this.settings.beta_test ? "../dist/js/srtParser.js" : "//player.polyv.net/script/js/srtParser.js";
                "on" === this.settings.beta && (n = "//player.polyv.net/javascript/" + polyvObject.buildMetaData.split("+")[1] + "/js/srtParser.js"),
                    polyvObject.getScript(n, function () {
                        polyvObject.getScript(t, function () {
                            e.addSrt()
                        })
                    })
            },
            changeSrt: function (e) {
                var t = this.settings;
                t.srt_list[e] !== undefined && 0 < t.srt_list[e][1].length && (this.divContainer.html(""),
                    this.srtParse && this.srtParse.stopTimer(),
                    this.srtParse = new Srt(t.srt_list[t.srt_index][1]),
                    this.srtParse.setContainer(this.divContainer),
                    this.srtParse.startTimer())
            },
            time: function (e) {
                this.srtParse && this.srtParse.time(e)
            },
            show: function () {
                this.selectSrtShow = !0,
                    this.divContainer.show()
            },
            hide: function () {
                this.selectSrtShow = !1,
                    this.divContainer.hide()
            },
            toggleShow: function () {
                !0 === this.getSrtState() ? this.hide() : this.show()
            },
            getSrtState: function () {
                return !!this.divContainer && !this.divContainer.is(":hidden")
            },
            getSrtList: function () {
                return this.settings.srt_list
            },
            destroy: function () {
                this.divContainer && this.divContainer.remove(),
                    this.srtShow && this.srtShow.remove()
            }
        },
            window.PlaySrtControl = t
    }(),
    function (e) {
        function t(e, t) {
            this.set = e,
                this.ply = t,
                this.hasNext = !1
        }
        t.prototype = {
            init: function (e) {
                this.type = e,
                    this.hasNext = !1,
                    this.ply.updateFlowStatus(this.ply.FLOW_STATUS.TEASER),
                    this.type ? this.checkTail() : this.checkTeaser()
            },
            checkTeaser: function () {
                var e = this.set;
                if ("" !== e.teaser_url && 1 === e.teaser_show && !e.ban_teaser)
                    return this.previewUrl = e.teaser_url,
                        this.previewTime = e.teaser_time,
                        void this.showPreview();
                this.next()
            },
            checkTail: function () {
                var e = this.set;
                if (!e.isTailEndOnce)
                    return "" === e.tail_url || 1 !== e.tail_show || e.ban_tail ? void this.next() : (this.previewUrl = e.tail_url,
                        this.previewTime = e.tail_time,
                        void this.showPreview());
                this.next()
            },
            showPreview: function () {
                switch (this.checkSuffixType(this.previewUrl)) {
                    case 0:
                        this.next();
                        break;
                    case 1:
                        this.showImg(),
                            this.checkPreviewSkip();
                        break;
                    case 2:
                        this.showVideo(),
                            this.checkPreviewSkip()
                }
            },
            showImg: function () {
                var e = this
                    , t = this.set
                    , n = this.ply
                    , i = this.previewUrl
                    , r = this.previewTime
                    , o = new Image;
                n(o).attr("src", i),
                    n(o).error(function () {
                        e.next()
                    }),
                    t.polyvObjectdiv.css("background-image", "url(" + i + ")"),
                    this.clearPreviewTimeout(),
                    this.previewTimeout = setTimeout(function () {
                        e.clearPreviewTimeout(),
                            e.next()
                    }, 1e3 * r)
            },
            showVideo: function () {
                var e = this.set
                    , t = this.ply
                    , n = this
                    , i = this.previewTime;
                e.polyvObjectdiv.css("background-image", 'url("")');
                var r = e.video
                    , o = t(r);
                if (r.poster = "",
                    r.src = this.previewUrl,
                    t.plvPlayVideo(r),
                    o.css({
                        width: "100%",
                        height: "100%"
                    }),
                    t.displayVideo(e, o, !0),
                    this.previewErrorMonitor(),
                    !i && 0 !== i)
                    return this.endFun = function () {
                        n.next(),
                            n.clearVideoListener()
                    }
                        ,
                        void r.addEventListener("ended", this.endFun);
                this.clearPreviewTimeout(),
                    this.previewTimeout = setTimeout(function () {
                        n.clearPreviewTimeout(),
                            n.next()
                    }, 1e3 * i)
            },
            previewErrorMonitor: function () {
                var e = this
                    , t = this.set.video;
                this.clearErrorInterval(),
                    this.previewErrorInterval = setInterval(function () {
                        null != t.error && e.next()
                    }, 500)
            },
            checkPreviewSkip: function () {
                !this.type && this.set.teaserSkip && this.showSkipButton(),
                    this.type && this.set.tailSkip && this.showSkipButton()
            },
            showSkipButton: function () {
                var t = this
                    , e = this.set
                    , n = this.ply;
                this.skipBtn = n('<div class="teaser-skip"><div class="bg-rect teaser-rect"></div><div class="t teaser-txt">跳过</div></div>'),
                    this.skipBtn.appendTo(e.container),
                    this.skipBtn.bind("click", function (e) {
                        t.next()
                    })
            },
            clearVideoListener: function () {
                this.set.video.removeEventListener("ended", this.endFun)
            },
            clearPreviewTimeout: function () {
                clearTimeout(this.previewTimeout),
                    this.previewTimeout = null
            },
            clearErrorInterval: function () {
                clearInterval(this.previewErrorInterval),
                    this.previewErrorInterval = null
            },
            checkSuffixType: function (e) {
                var t = /\.[^\.]+$/.exec(e);
                return /.png|.jpg|.jpeg|.gif/i.test(t) ? 1 : /.mp4/i.test(t) ? 2 : 0
            },
            destroy: function () {
                this.clearErrorInterval(),
                    this.clearPreviewTimeout(),
                    this.clearVideoListener(),
                    this.skipBtn && this.skipBtn.remove()
            },
            reset: function (e) {
                var t = this.set;
                t.teaser_show = !1 === e.skipTeaser ? 1 : 0,
                    t.tail_show = !1 === e.skipTail ? 1 : 0,
                    t.isTailEndOnce = !1
            },
            next: function () {
                this.hasNext || (this.hasNext = !0,
                    this.destroy(),
                    this.type ? (this.set.isTailEndOnce = !0,
                        this.ply.updatePlayFacade.tailComplete()) : this.ply.updatePlayFacade.teaserComplete())
            }
        },
            window.PlayTeaserControl = t
    }(),
    function (e) {
        function t(e, t) {
            this.set = e,
                this.ply = t
        }
        t.prototype = {
            startErrorMonitor: function () {
                var e = this
                    , t = this.set;
                t.video;
                t.on("M3U8_LOAD_FAIL", function () {
                    e.videoError()
                })
            },
            videoError: function () {
                this.disableCurrent(),
                    this.getRest()
            },
            disableCurrent: function () {
                var e = this.set
                    , t = (this.set.video,
                        e.playNum);
                switch (e.sourceType) {
                    case "hlsIndex":
                        e.enable_switch.hlsIndex[1] = !1;
                        break;
                    case "hls":
                        e.enable_switch.hls[t][1] = !1;
                        break;
                    case "mp4":
                        e.enable_switch.mp4[t][1] = !1;
                        break;
                    case "hlsIndex_15x":
                        e.enable_switch.hlsIndex_15x[1] = !1;
                        break;
                    case "hls_15x":
                        e.enable_switch.hls_15x[t][1] = !1;
                        break;
                    case "source_url":
                        e.enable_switch.source_url[1] = !1;
                        break;
                    case "convert_url":
                        e.enable_switch.convert_url[1] = !1
                }
                "function" == typeof disableHdSelect && disableHdSelect(t)
            },
            getRest: function () {
                var t = this
                    , n = t.set;
                n.arrangeVideoSrc(function (e) {
                    1 == n.previewMode && (e = ""),
                        "" != e ? (n.ts && n.sign ? (n.video = video,
                            n.sendMsg()) : (n.setVideoSrc(e),
                                polyvObject.plvPlayVideo(video)),
                            "function" == typeof showHD && "on" == n.showHd && showHD(n.playNum, n.fileSize)) : t.sendErrorQos()
                })
            },
            sendErrorQos: function () {
                var e = this.set
                    , t = this.ply
                    , n = e.video
                    , i = 0;
                if (n.error && n.error.code && (i = n.error.code),
                    !e.hasSendError) {
                    e.hasSendError = !0;
                    var r = {};
                    r.pid = e.pid,
                        r.uid = e.uid,
                        r.vid = e.vid,
                        r.error = "load_video_failure",
                        r.type = "error",
                        r.errorType = i,
                        r.href = t.href,
                        e.sendQos(r),
                        1 == e.seed && (e.ts || e.sign) ? e.showErrorBg(t.lang.warn.webVideoFail) : e.showErrorBg(t.lang.warn.videoFail)
                }
            },
            stopErrorMonitor: function () {
                this.videoErrorInterval && (clearInterval(this.videoErrorInterval),
                    this.videoErrorInterval = null)
            }
        },
            window.PlayVideoControl = t
    }(),
    function (e) {
        function t(e, t) {
            this.set = e,
                this.ply = t
        }
        t.prototype = {
            getData: function () {
                var e = this.set
                    , t = this.ply
                    , n = {
                        pid: e.pid,
                        uid: e.uid,
                        vid: e.vid
                    };
                return t.extend(n, e.params),
                    e.session_id && (n.session_id = PovBase64.encodeURI(e.session_id)),
                    n
            },
            send: function (e) {
                var t = this.ply
                    , n = this.set;
                switch (e) {
                    case "load_videojson_failure":
                    case "parse_videojson_failure":
                        n.errorCode = "003";
                        var i = t.extend({
                            error: e,
                            type: "error",
                            href: t.href,
                            request_uri: n.jsonUrl,
                            response_code: 0
                        }, this.getData());
                        this.qosSend(i);
                        var r = {
                            name: "__onXmlError",
                            src: n.jsonUrl
                        };
                        this.triggerEvent(r)
                }
            },
            qosSend: function (e) {
                var t = this.ply
                    , n = this.set;
                t.ajax({
                    url: n.httpHead + "prtas.videocc.net/qos",
                    type: "GET",
                    data: e
                })
            },
            triggerEvent: function (e) {
                this.ply.getUrlStatus(e)
            }
        },
            window.PlayQosMonitor = t
    }(),
    function (e) {
        function t(e, t) {
            this.set = e,
                this.ply = t
        }
        t.prototype = {
            parentAdd: function (e) {
                var t = this.set;
                e.data.vid === t.vid && this[e.data.message] && this[e.data.message](e)
            },
            parentPost: function (e, t, n) {
                var i = this.set.idName
                    , r = this.set.postMessageDomain
                    , o = document.getElementById(i);
                n || (p1 = 0),
                    null != o && o != undefined && o.contentWindow.postMessage({
                        value: e,
                        vid: t,
                        param: n
                    }, r)
            },
            childAdd: function (e) {
                var t = this.set;
                e.data.vid === t.vid && this[e.data.value] && this[e.data.value](e)
            },
            childPost: function (e, t) {
                var n = this.set
                    , i = this.ply.href;
                parent.postMessage({
                    message: e,
                    value: t,
                    vid: n.vid
                }, i)
            },
            getToken: function (e) {
                var t = this
                    , n = this.ply
                    , i = this.set.playsafeUrl
                    , r = this.set.vid;
                n.ajax({
                    url: i,
                    data: {
                        vid: r
                    },
                    dataType: "json"
                }).done(function (e) {
                    "string" == typeof e && "on" === set.beta_test && (e = JSON.parse(e)),
                        t.parentPost("setPlaySafeUrlToken", r, e)
                }).fail(function (e) {
                    t.parentPost("setPlaySafeUrlToken", r, {
                        code: 400
                    })
                })
            },
            setPlaySafeUrlToken: function (e) {
                var t = this.set;
                t.playCore && t.playCore.setUrlTokenSrc(e.data.param)
            }
        },
            window.PlayFrameBridge = t
    }(),
    window.polyvObject_init)
    polyvplayer_object = jQuery.noConflict(!0),
        polyvObject.fn.videoPlayer = function (e) {
            polyvplayer_object(this).videoPlayer(e)
        }
        ,
        polyvObject.fn.previewPlayer = function (e) {
            polyvplayer_object(this).previewPlayer(e)
        }
        ,
        polyvObject.fn.createPurePlayer = function (e) {
            polyvplayer_object(this).createPurePlayer(e)
        }
        ;
else {
    var polyvObject = jQuery.noConflict(!0);
    window.polyvObject_init = !0
}
!function (q) {
    q.version = "1.27.0",
        q.buildMetaData = "+20201118",
        polyvPolyFill(),
        polyvVodConfig(q),
        polyvVodBrowser(q),
        polyvVodTool(q),
        createPreviewPlayer = function (e) {
            return e.previewMode = !0,
                createShowPlayer(e, this)
        }
        ,
        createShowPlayer = function (d, e) {
            if (e || (e = this),
                q.h5Script = "//player.polyv.net/script/player.js",
                !0 === d.beta && (q.h5Script = "//player.polyv.net/javascript/" + q.buildMetaData.split("+")[1] + "/player.js"),
                q.checkQiHoo() && d.ban360 && (d.forceHTML5 = !0,
                    d.banBrowser = !0),
                d.forceFlash)
                return d.vid && d.previewMode && (d.vid = q.decode(d.vid)),
                    privateCreate(e, d);
            if (q.isSupportedHTMLDevice() || d.forceHTML5) {
                d.frameTimeStamp = (new Date).getTime() + Math.floor(9999999 * Math.random()),
                    d.vrdomain && (d.vrFN = !0),
                    "function" == typeof s2j_setEncBrowser && (d.isBro = s2j_setEncBrowser());
                var t = "http://";
                "https:" == window.location.protocol && (t = "https://"),
                    d.url && (d.vid = "");
                var n = window.location.host + "_hd"
                    , i = q.getCookie(n);
                i && (d.df = parseInt(i) + 1),
                    d.localCurrentTime = q.getCookie(d.vid);
                var r = window.location.href
                    , o = (document.domain,
                        JSON.stringify(d))
                    , a = t + "player.polyv.net"
                    , c = "polyvPlayer" + d.vid
                    , u = d.vid
                    , p = 0
                    , h = 0
                    , f = 0
                    , v = ""
                    , s = 3
                    , y = ""
                    , g = "video"
                    , m = "loading"
                    , b = d
                    , w = null
                    , _ = !0;
                b.idName = c,
                    b.postMessageDomain = a,
                    b.httpHead = t,
                    b.cdnIndex = 0,
                    b.cdnUrl = ["//player.polyv.net", "//static.polyv.net"],
                    d.slot && (s = d.slot),
                    34 < u.length && (u = q.decode(u)),
                    "function" == typeof s2j_callOnBarrageUrl && (v = s2j_callOnBarrageUrl());
                var l = q('<div id="container' + b.vid + '"></div>');
                q(l).css("height", b.height),
                    q(l).css("width", b.width),
                    q(l).css("position", "relative");
                var S = "href=" + r + "&settings=" + PovBase64.encodeURI(o)
                    , x = t + "player.polyv.net/script/view" + s + ".html?" + encodeURIComponent(S);
                b.vrdomain && (x = t + b.vrdomain + "/script/view" + s + ".html?" + encodeURIComponent(S),
                    a = t + b.vrdomain,
                    b.postMessageDomain = a),
                    "on" == d.beta_test && (a = location.origin,
                        b.postMessageDomain = a,
                        x = "../dist/view" + s + ".html?" + encodeURIComponent(S)),
                    "on" == d.beta && (x = t + "player.polyv.net/javascript/" + q.buildMetaData.split("+")[1] + "/view" + s + ".html?" + encodeURIComponent(S),
                        b.vrdomain && (x = t + b.vrdomain + "/javascript/" + q.buildMetaData.split("+")[1] + "/view" + s + ".html?" + encodeURIComponent(S)));
                var T = document.createElement("iframe");
                T.setAttribute("name", "polyvPlayer"),
                    T.setAttribute("id", c),
                    T.setAttribute("frameborder", "0"),
                    T.setAttribute("src", x),
                    T.setAttribute("allowfullscreen", ""),
                    T.setAttribute("mozallowfullscreen", ""),
                    T.setAttribute("webkitallowfullscreen", ""),
                    T.style.overflow = "hidden",
                    T.style.width = "100%",
                    T.style.height = "100%",
                    T.style.left = 0,
                    T.style.top = 0,
                    T.style.position = "absolute",
                    T.style["z-index"] = 999;
                var j = q(T);
                q(e).append(l),
                    l.append(j),
                    0 == b.height && q.getVodVideojson(d, function (e) {
                        if (!e.error) {
                            b.ratio = e.ratio,
                                b.ratio;
                            var t = parseInt(q(l).css("width")) / b.ratio;
                            b.height = t,
                                q(l).css("height", t),
                                (b.listid || b.flashvars && b.flashvars.listid) && (b.showVideoList != undefined && "on" != b.showVideoList || q("iframe").css("height", b.height + 95))
                        }
                    }),
                    d.vid && b.previewMode && (u = d.vid = q.decode(d.vid)),
                    b.j2s_getDuration = function () {
                        return p
                    }
                    ,
                    b.j2s_getCurrentTime = function () {
                        return h
                    }
                    ,
                    b.getCurrentMode = function () {
                        return g
                    }
                    ,
                    b.j2s_resumeVideo = function () {
                        P("j2s_resumeVideo", u)
                    }
                    ,
                    b.j2s_changePlayStatus = function () {
                        P("j2s_changePlayStatus", u)
                    }
                    ,
                    b.j2s_getVideoStatus = function () {
                        return m
                    }
                    ,
                    b.j2s_playVideo = function () {
                        P("j2s_playVideo", u)
                    }
                    ,
                    b.j2s_pauseVideo = function () {
                        P("j2s_pauseVideo", u)
                    }
                    ,
                    b.j2s_seekVideo = function (e) {
                        P("j2s_seekVideo", u, e)
                    }
                    ,
                    b.j2s_stopVideo = function () {
                        P("j2s_stopVideo", u)
                    }
                    ,
                    b.j2s_hideVideo = function () {
                        P("j2s_hideVideo", u)
                    }
                    ,
                    b.j2s_showVideo = function () {
                        P("j2s_showVideo", u)
                    }
                    ,
                    b.j2s_stayInVideoTime = function () {
                        return f
                    }
                    ,
                    b.j2s_realPlayVideoTime = function () {
                        return f
                    }
                    ,
                    b.j2s_realPlayStatus = function () {
                        return b.j2s_stayInVideoStatus()
                    }
                    ,
                    b.j2s_stayInVideoStatus = function () {
                        var e = (new Date).getTime()
                            , t = f
                            , n = CryptoJS.MD5(u) + ""
                            , i = hex_sha1(y + u + t + e + n.substring(0, 8));
                        return JSON.stringify({
                            pid: y,
                            vid: u,
                            playduration: t,
                            timestamp: e,
                            sign: i
                        })
                    }
                    ,
                    b.j2s_switch = function (e) {
                        P("j2s_switch", u, e)
                    }
                    ,
                    b.switchBitrate = function (e) {
                        P("j2s_switch", u, e)
                    }
                    ,
                    b.j2s_showBarrage = function () {
                        P("j2s_showBarrage", u)
                    }
                    ,
                    b.j2s_hideBarrage = function () {
                        P("j2s_hideBarrage", u)
                    }
                    ,
                    b.j2s_addBarrageMessage = function (e) {
                        P("j2s_addBarrageMessage", u, e)
                    }
                    ,
                    b.j2s_reloadBarrageData = function () {
                        P("j2s_reloadBarrageData", u)
                    }
                    ,
                    b.j2s_toggleHighSpeed = function (e) {
                        P("j2s_toggleHighSpeed", u, e)
                    }
                    ,
                    b.switchMMode = function (e) {
                        P("switchMMode", u, e)
                    }
                    ,
                    b.changeVid = function (e, t, n, i, r, o) {
                        var a = {};
                        "object" == typeof e ? (a = e).vid = a.vid || "" : q.isVid(e) ? (a.vid = e,
                            a.watchStartTime = t || 0,
                            a.autoplay = n || "on",
                            a.ts = i || 0,
                            a.sign = r || 0) : a = JSON.parse(e),
                            34 < a.vid.length && (a.vid = q.decode(a.vid)),
                            a.watchStartTime || (a.watchStartTime = 0),
                            a.watchEndTime || (a.watchEndTime = 0),
                            a.autoplay || (a.autoplay = "on"),
                            a.ts && a.sign || (a.ts = a.sign = 0),
                            a.localCurrentTime = q.getCookie(a.vid),
                            _ = !1,
                            P("changeVid", u, JSON.stringify(a)),
                            b.s2j_changeVid && b.s2j_changeVid(),
                            "function" == typeof s2j_changeVid && s2j_changeVid(u, a.vid),
                            a.vid != u && (u = a.vid || "",
                                b.vid = u)
                    }
                    ,
                    b.changeParam = function (e, t, n, i) {
                        P("changeParam", u, '{"p1":"' + e + '","p2":"' + t + '","p3":"' + n + '","p4":"' + i + '"}')
                    }
                    ,
                    b.changeStatistics = function (e, t, n, i, r) {
                        var o = {
                            sid: e,
                            p1: t,
                            p2: n,
                            p3: i,
                            p4: r
                        };
                        P("changeStatistics", u, JSON.stringify(o))
                    }
                    ,
                    b.changeRepeat = function (e) {
                        P("changeRepeat", u, e)
                    }
                    ,
                    b.changeCode = function (e) {
                        P("changeCode", u, e)
                    }
                    ,
                    b.j2s_setVolume = function (e) {
                        P("j2s_setVolume", u, e)
                    }
                    ,
                    b.j2s_removeVideo = function () {
                        q(e).empty()
                    }
                    ,
                    b.j2s_removeEventListener = function () {
                        window.removeEventListener("message", C),
                            w && clearInterval(w)
                    }
                    ,
                    b.destroy = function () {
                        b.j2s_removeVideo(),
                            b.j2s_removeEventListener()
                    }
                    ,
                    b.changeLiveStreamName = function (e) {
                        P("changeLiveStreamName", u, e)
                    }
                    ,
                    b.setMode = function (e) {
                        P("setMode", u, e)
                    }
                    ,
                    b.setMessage = function (e) {
                        P("setMessage", u, e)
                    }
                    ,
                    b.s2j_playCompletely = function () {
                        P("s2j_playCompletely", u)
                    }
                    ,
                    b.on = function (e, t) {
                        this.handles || (this.handles = {}),
                            this.handles[e] || (this.handles[e] = []),
                            this.handles[e].push(t)
                    }
                    ,
                    b.emit = function (e) {
                        if (this.handles && this.handles[e])
                            for (var t = 0; t < this.handles[e].length; t++)
                                this.handles[e][t].call(this, arguments[1])
                    }
                    ,
                    b.closeEvents = function (e) {
                        var t = this.handles;
                        this.eventArray || (this.eventArray = []),
                            this.eventArray.push(e),
                            this.eventArray = q.duplicateRemoval(this.eventArray);
                        for (var n = 0; n < t.length; n++)
                            e === t[n] && t.splice(n, 1)
                    }
                    ,
                    b.cleanEvents = function () {
                        this.handles && (this.handles = null)
                    }
                    ;
                q(l).css("position");
                var k = new window.PlayFrameBridge(d, q)
                    , C = function (e) {
                        !function (e) {
                            if (e.data.vid === u) {
                                var t = e.data
                                    , n = t.message;
                                if (b.eventArray && 0 < b.eventArray.length)
                                    for (var i = 0; i < b.eventArray.length; i++)
                                        n !== b.eventArray[i] && b.emit(n, t);
                                else
                                    b.emit(n, t);
                                switch (e.data.message) {
                                    case "s2j_onPlayerInitOver":
                                        p = parseInt(e.data.duration),
                                            b.s2j_onPlayerInitOver && b.s2j_onPlayerInitOver(),
                                            "function" == typeof s2j_onPlayerInitOver && s2j_onPlayerInitOver(u);
                                        break;
                                    case "s2j_onPlayStart":
                                        _ = !0,
                                            p = parseInt(e.data.duration),
                                            b.s2j_onPlayStart && (!0,
                                                b.s2j_onPlayStart()),
                                            "function" == typeof s2j_onPlayStart && s2j_onPlayStart(u),
                                            w && clearInterval(w),
                                            w = setInterval(function () {
                                                _ && 10 < h && (!b.ban_history_time || "off" === b.ban_history_time) && q.setCookie(u, h, 365)
                                            }, 2e3);
                                        break;
                                    case "s2j_onVodVideoPlay":
                                        b.s2j_onVodVideoPlay && b.s2j_onVodVideoPlay(),
                                            "function" == typeof s2j_onVodVideoPlay && s2j_onVodVideoPlay(u);
                                        break;
                                    case "s2j_onVideoPlay":
                                        b.s2j_onVideoPlay && b.s2j_onVideoPlay(),
                                            "function" == typeof s2j_onVideoPlay && s2j_onVideoPlay(u);
                                        break;
                                    case "s2j_onVideoPause":
                                        q.updateFlowStatus(q.FLOW_STATUS.PAUSE),
                                            b.s2j_onVideoPause && b.s2j_onVideoPause(),
                                            "function" == typeof s2j_onVideoPause && s2j_onVideoPause(u);
                                        break;
                                    case "s2j_onPlayOver":
                                        b.s2j_onPlayOver && b.s2j_onPlayOver(),
                                            "function" == typeof s2j_onPlayOver && (s2j_onPlayOver(u),
                                                clearInterval(w),
                                                q.delCookie(u));
                                        break;
                                    case "s2j_playCompletely":
                                        b.s2j_playCompletely && b.s2j_playCompletely(),
                                            "function" == typeof s2j_playCompletely && s2j_playCompletely(u);
                                    case "s2j_onSwitchHd":
                                        var r = e.data.hdNum + 1;
                                        b.s2j_onSwitchHd && b.s2j_onSwitchHd(r),
                                            "function" == typeof s2j_onSwitchHd && s2j_onSwitchHd(u, r);
                                        break;
                                    case "s2j_onSwitch":
                                        var o = (r = e.data.hdNum) + 1;
                                        q.setCookie(window.location.host + "_hd", r),
                                            b.s2j_onSwitch && b.s2j_onSwitch(o),
                                            "function" == typeof s2j_onSwitch && s2j_onSwitch(u, o);
                                        break;
                                    case "s2j_onRateChange":
                                        var a = e.data.rate;
                                        b.s2j_onRateChange && b.s2j_onRateChange(a),
                                            "function" == typeof s2j_onRateChange && s2j_onRateChange(u, a);
                                        break;
                                    case "s2j_onOverPlay":
                                        var s = e.data.type
                                            , l = e.data.sec;
                                        b.s2j_onOverPlay && b.s2j_onOverPlay(s, l),
                                            "function" == typeof s2j_onOverPlay && s2j_onOverPlay(u, s, l);
                                        break;
                                    case "s2j_onPlayerError":
                                        b.s2j_onPlayerError && b.s2j_onPlayerError(e.data.config),
                                            "function" == typeof s2j_onPlayerError && s2j_onPlayerError(u, e.data.config);
                                        break;
                                    case "s2j_onBrowserChange":
                                        b.s2j_onBrowserChange && b.s2j_onBrowserChange(e.data.config),
                                            "function" == typeof s2j_onBrowserChange && s2j_onBrowserChange(u, e.data.config);
                                        break;
                                    case "renderParam":
                                        h = e.data.cur,
                                            f = e.data.stay,
                                            m = e.data.status;
                                        break;
                                    case "s2j_changeVideoId":
                                        u = e.data.id,
                                            b.vid = u;
                                        break;
                                    case "s2j_onInnerChangeVid":
                                        b.changeVid(e.data.toChangeVid);
                                        break;
                                    case "s2j_onVideoCanPlay":
                                        b.s2j_onVideoCanPlay && b.s2j_onVideoCanPlay(),
                                            "function" == typeof s2j_onVideoCanPlay && s2j_onVideoCanPlay(u);
                                        break;
                                    case "s2j_onVideoSeek":
                                        b.s2j_onJsVideoSeek && b.s2j_onJsVideoSeek(e.data.time, e.data.time),
                                            "function" == typeof s2j_onJsVideoSeek && s2j_onJsVideoSeek(e.data.time, e.data.time, u);
                                        break;
                                    case "canToggleSpeed":
                                        "function" == typeof canToggleSpeed && canToggleSpeed(e.data.boo);
                                        break;
                                    case "documentReady":
                                        document.getElementById(c).addEventListener("touchend", function (e) {
                                            P("touchEnd", u)
                                        }, !1),
                                            "" != v && P("j2s_openDanmu", u, v);
                                        break;
                                    case "normalScreen":
                                        b.s2j_onNormalScreen && b.s2j_onNormalScreen(),
                                            "function" == typeof s2j_onNormalScreen && s2j_onNormalScreen(u);
                                        break;
                                    case "fullScreen":
                                        b.s2j_onFullScreen && b.s2j_onFullScreen(),
                                            "function" == typeof s2j_onFullScreen && s2j_onFullScreen(u);
                                        break;
                                    case "x5Full":
                                        b.x5VideoFull && b.x5VideoFull(),
                                            "function" == typeof x5VideoFull && x5VideoFull(u);
                                        break;
                                    case "x5Exit":
                                        b.x5VideoExit && b.x5VideoExit(),
                                            "function" == typeof x5VideoExit && x5VideoExit(u);
                                        break;
                                    case "updateLiveStatus":
                                        b.s2j_onApiStatus && b.s2j_onApiStatus(e.data.status),
                                            "function" == typeof s2j_onApiStatus && s2j_onApiStatus(e.data.status);
                                        break;
                                    case "logoHref":
                                        window.open(e.data.href, "_blank");
                                        break;
                                    case "initMode":
                                        g = e.data.mode;
                                        break;
                                    case "onChangeMode":
                                        b.onChangeMode && (b.onChangeMode(u, g, e.data.mode),
                                            g = e.data.mode),
                                            "function" == typeof onChangeMode && (onChangeMode(u, g, e.data.mode),
                                                g = e.data.mode);
                                        break;
                                    case "updatePid":
                                        y = e.data.pid;
                                        break;
                                    case "onConfirmFrameTS":
                                        e.data.ts && e.data.ts === d.frameTimeStamp && P("confirmFrameTS", u)
                                }
                            }
                        }(e),
                            k.parentAdd(e)
                    };
                window.addEventListener("message", C, !1),
                    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
                        setTimeout(function () {
                            P("adjust", u)
                        }, 50)
                    }, !1);
                var A = document.getElementById(c);
                function P(e, t, n) {
                    n || (n = 0),
                        null != A && A != undefined && A.contentWindow.postMessage({
                            value: e,
                            vid: t,
                            param1: n
                        }, a)
                }
                return b
            }
            if (1 != d.forceH5 || !q.isSupportHTML5() || q.isMaxthon())
                return d.vid && d.previewMode && (d.vid = q.decode(d.vid)),
                    privateCreate(e, d);
            var O = {
                on: function () { }
            };
            return d.h5PlayerObj = O,
                window.polyvPlayer ? q.createH5Player(e, d) : (q.getScript(q.h5Script, function () {
                    q.extend(O, q.createH5Player(e, d))
                }),
                    O)
        }
        ,
        createPlayer = function (e) {
            return e.ban_subPage && (e.ban_ui = !0),
                !0 === e.preview && (e.previewMode = !0),
                1 == e.ban_ui || "on" == e.ban_ui ? (e.hidecontrol = "true",
                    q.isIOS() && q("head").append(q.getIosCss()),
                    34 < e.vid.length && (e.vid = q.decode(e.vid)),
                    privateCreate(this, e)) : createShowPlayer(e, this)
        }
        ,
        privateCreate = function (l, d) {
            d.vid = d.vid || "",
                d.vid = d.vid.replace(/\s+/g, "");
            var n, i, s = "http://";
            "https:" == window.location.protocol && (s = "https://");
            var v = {
                container: l,
                flashParams: {
                    allowScriptAccess: "always",
                    allowFullScreen: "true",
                    quality: "high",
                    bgcolor: "#ffffff",
                    allowFullScreen: "true",
                    wmode: "transparent"
                },
                playerWidth: "1.0",
                allowfullscreen: "true",
                domain: "player.polyv.net",
                allowscriptaccess: "always",
                wmode: "Transparent",
                loading_bg_img: "",
                df: 0,
                flashvars: {},
                params: {},
                start: -1,
                end: -1,
                autoplay: !1,
                is_auto_replay: "off",
                width: 600,
                height: 480,
                stay_duration: 0,
                ts: "",
                sign: "",
                imgPath: "//player.polyv.net/script/images/icon.png",
                videoClass: "plvideo",
                isChangeLine: !1,
                httpHead: s,
                cdnIndex: 0,
                cdnUrl: [s + "player.polyv.net", s + "static.polyv.net"],
                playsinline: !0,
                useH5Page: !1,
                j2s_getCurrentTime: function () {
                    return 0
                },
                j2s_getDuration: function () {
                    return 0
                },
                j2s_resumeVideo: function () { },
                j2s_pauseVideo: function () { },
                j2s_stopVideo: function () { },
                j2s_seekVideo: function () { },
                j2s_getVideo: function () { },
                j2s_stayInVideoTime: function () {
                    return 0
                },
                changeVid: function (e) {
                    var t = e;
                    "string" == typeof e && (t = {
                        vid: e
                    }),
                        q.updatePlayFacade.initChangeVideo(t),
                        "function" == typeof changeVidExcute && changeVidExcute()
                }
            };
            v.frameBridge = new window.PlayFrameBridge(v, q);
            var e = JSON.parse(q.circularJsonStringify(d));
            function o(e, t) {
                var n = t.width
                    , i = t.height;
                t.isBanByChrome && (i = n = 400);
                var r = "";
                for (var o in t.flashvars)
                    r = r + o + "=" + t.flashvars[o] + "&";
                if (q.isIE()) {
                    t.flashParams.movie = t.swf_link;
                    var a = "";
                    for (var s in a += "<param name='flashvars' value='" + r + "' />",
                        t.flashParams)
                        a += '<param name="' + s + '" value="' + t.flashParams[s] + '" />';
                    var l = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="' + (t.playerId || t.vid) + '" width="' + n + '" height="' + i + '" type="application/x-shockwave-flash" class="polyvFlashObject">' + a + "</object>";
                    e.html(l)
                } else {
                    var d, c = document.createElement("object");
                    for (var u in c.type = "application/x-shockwave-flash",
                        c.data = t.swf_link,
                        c.id = t.playerId || t.vid,
                        c.width = n,
                        c.height = i,
                        c.className = "polyvFlashObject",
                        t.flashParams.flashvars = r,
                        t.flashParams)
                        (d = document.createElement("param")).name = u,
                            d.value = t.flashParams[u],
                            c.appendChild(d);
                    e.html(c)
                }
                t.s2j_onJsInitOver = !1,
                    q["setH" + t.vid] = function () {
                        t.s2j_onJsInitOver = !0,
                            (t.isBanByChrome || t.heightInitZero) && (t.forceHeight && "undefined" != t.forceHeight && (t.height = t.forceHeight),
                                q.getPlayer(t.playerId || t.vid).setAttribute("height", t.height),
                                q.getPlayer(t.playerId || t.vid).setAttribute("width", t.width))
                    }
                    ,
                    window.s2j_onJsInitOver = function (e) {
                        q["setH" + e] && q["setH" + e]()
                    }
            }
            q.makeFlashPlayer = function (e, t) {
                t.swf_link = "//player.polyv.net/videos/player.swf",
                    q.Flash.initFlashvars(),
                    function r(e, t) {
                        var n = String(t.width)
                            , i = String(t.height);
                        "%" == n.charAt(n.length - 1) && (n = e.width() * (n.split("%")[0] / 100));
                        "%" == i.charAt(i.length - 1) && (i = e.height() * (i.split("%")[0] / 100));
                        (parseInt(n) < 400 || parseInt(i) < 400 && 1 != i) && (t.isBanByChrome = !0)
                    }(e, t),
                    o(e, t),
                    window.initFlash = function (e) {
                        q["init" + e] = !0,
                            t.hasPlayer = !0
                    }
                    ,
                    function n() {
                        q["checkInit" + v.vid] = void setTimeout(function () {
                            q["init" + v.vid] || q.isShowVidObjError || (v.swf_link = "//player.polyv.net/videos/player.swf",
                                o(l, v),
                                setTimeout(function () {
                                    q["init" + v.vid]
                                }, 2e4),
                                "function" == typeof reCreateFlash && reCreateFlash(v.vid))
                        }, 2e4)
                    }(),
                    q.Flash.startCheck()
            }
                ,
                q.renderFlash = function (e, t) {
                    0 == t.height ? (t.heightInitZero = !0,
                        t.height = 1,
                        q.makeFlashPlayer(e, t),
                        function n() {
                            v.width = String(v.width),
                                q.getVodVideojson(v, function (e) {
                                    if (!e.error) {
                                        if (v.ratio = e.ratio,
                                            "%" == v.width.charAt(v.width.length - 1)) {
                                            var t = 0 < window.innerWidth ? window.innerWidth : screen.width;
                                            v.height = t * (parseInt(v.width) / 100) / e.ratio
                                        } else
                                            v.height = v.width / e.ratio;
                                        v.s2j_onJsInitOver ? q(q.getPlayer(v.playerId || v.vid)).attr("height", parseInt(v.height)) : v.forceHeight = v.height
                                    }
                                })
                        }()) : q.makeFlashPlayer(e, t)
                }
                ,
                q.lang = {},
                q.extend(q.lang, q.zh_CN_Lang),
                q.Flash = new PolyvFlash(v, e),
                q.updatePlayFacade = {
                    initVideoJson: function () {
                        cdnIndex = 0,
                            v.pid = q.getPid(),
                            v.uid = v.vid.substr(0, 10),
                            v.code || (v.code = ""),
                            function t() {
                                if (v.url) {
                                    var e = {
                                        validUrl2_backup: "",
                                        teaser_time: "",
                                        hlsLevel: "open",
                                        fullmp4: "0",
                                        setting_type: 0,
                                        timeoutflow: "false",
                                        disable_host: "",
                                        openDanmu: 0,
                                        validUrl2: "",
                                        preload: "false",
                                        outflow: "false",
                                        enable_host: "",
                                        weburl: "",
                                        previewDuration: 180,
                                        adMatter: [],
                                        hls302: "1",
                                        protect_mode: 0,
                                        validUrl: "",
                                        validUrl_backup: "",
                                        currentLine: "",
                                        player: {
                                            teaser_url: "",
                                            logo_location: "",
                                            logo_show: 0,
                                            skinid: "skin_os",
                                            zColor: "#d415a4",
                                            logoloca: 0,
                                            teaser_show: 0,
                                            pColor: "#51c9d6",
                                            teaser_time: "0",
                                            nav_alpha: 100,
                                            logo_diaph: 100,
                                            skincolor: "#031408",
                                            logo_url: ""
                                        },
                                        my_br: 1,
                                        videolink: "",
                                        keepsource: "0",
                                        mp4: [],
                                        playauth: "",
                                        resolution: ["480x270", "640x360"],
                                        usepassword: "false",
                                        interactive_video: "false",
                                        title: "",
                                        hlsIndex2: "",
                                        cdn_types: "ab,ws,kw",
                                        cataid: 1,
                                        first_image_b: "",
                                        videokeyframes: [],
                                        out_br: "256,512",
                                        teaser_url: "",
                                        swf_link: "",
                                        status: 60,
                                        seed: 0,
                                        teaser_show: 0,
                                        hls: [],
                                        hlsIndex: "",
                                        hls2: [],
                                        df_num: 0,
                                        duration: 0,
                                        seed_const: 0,
                                        filesize: [],
                                        first_image: "",
                                        ratio: 1.7777777910232544,
                                        catatree: "1",
                                        timestamp: 1542356668e3,
                                        keepsource: "1"
                                    };
                                    e.play_source_url = v.url,
                                        setTimeout(function () {
                                            b(e)
                                        }, 200)
                                } else
                                    q.getVodVideojson(v, function (e) {
                                        b(e)
                                    })
                            }()
                    },
                    initChangeVideo: function (e) {
                        e.autoplay || (e.autoplay = "on"),
                            "off" === e.autoplay ? v.stopAutoAfterChange = !0 : v.stopAutoAfterChange = !1,
                            q.flowStatus != q.FLOW_STATUS.PREAD && q.flowStatus != q.FLOW_STATUS.ENDAD || q.playAdControl.stopAd(),
                            v.isChangeVid = !0,
                            e.url ? (v.url = e.url,
                                v.vid = "") : (v.vid = e.vid,
                                    v.uid = e.vid.substr(0, 10),
                                    v.url = ""),
                            v.watchStartTimeRecord = e.watchStartTime,
                            v.watchEndTime = 0 < e.watchEndTime ? e.watchEndTime : 0,
                            v.hasValided = !1,
                            v.validUrl2Used = !1,
                            v.hasSortVideo = !1,
                            v.ban_ad = !0,
                            v.vjsonUrl = e.jsonUrl,
                            v.teaser && v.teaser.reset(e),
                            v.playCore && v.playCore.reset(e),
                            e.ts && e.sign && (v.ts = e.ts,
                                v.sign = e.sign),
                            q(".plv_container").empty(),
                            q(".mediaModePanel").remove(),
                            q(".audioRPanel").remove(),
                            "video" == v.media ? v.priorityMode = "video" : "audio" == v.meida && (v.priorityMode = "audio"),
                            this.initVideoJson(),
                            "off" == v.isClickPlayButton && q("#playbutton").remove(),
                            q(l).css("display", "block"),
                            q(".error").css("display", "none")
                    },
                    changeVidStep: {
                        playVideo: function () {
                            v.isChangeVid ? (v.adList = [],
                                0 < v.validUrl2.length && "on" == v.is_access_validurl ? M() : v.isChangeVid ? q.updatePlayFacade.initPassword() : j(void 0, q(v.video)[0])) : function e(a) {
                                    return a.each(function () {
                                        var e = q(this)
                                            , t = v.first_image;
                                        0 < v.loading_bg_img.length && (t = v.loading_bg_img);
                                        var n = v ? v.cover_display : ""
                                            , i = document.createElement("div");
                                        i.setAttribute("id", "plv_container");
                                        var r = q(i);
                                        r.css({
                                            position: "relative",
                                            "background-size": 100 * v.playerWidth + "%",
                                            "background-repeat": "no-repeat",
                                            "background-position": "center",
                                            "text-align": "left",
                                            width: v.width,
                                            height: v.height
                                        }),
                                            n && ("scaleAspectFit" === n ? r.css("background-size", "contain") : "scaleToFill" === n && r.css("background-size", "100% 100%")),
                                            q(this).empty(),
                                            this.appendChild(i);
                                        var o = document.createElement(v.media);
                                        if (i.appendChild(o),
                                            q.displayVideo(v, q(v.media), !1),
                                            v.polyvObjectdiv = r,
                                            v.div = i,
                                            v.polyvObjectthis = e,
                                            v.o = a,
                                            v.outdate) {
                                            switch (v.status) {
                                                case 50:
                                                    v.errorCode = "009";
                                                    break;
                                                case 51:
                                                    v.errorCode = "005";
                                                    break;
                                                case 10:
                                                case 20:
                                                    v.errorCode = "010";
                                                    break;
                                                case 48:
                                                    v.errorCode = "048";
                                                    break;
                                                default:
                                                    v.errorCode || (v.errorCode = "000"),
                                                        v.status < 0 && (v.errorCode = "004")
                                            }
                                            z()
                                        } else
                                            v.changeBrowser ? (z(q.lang.warn.browChange),
                                                "function" == typeof s2j_onBrowserChange && s2j_onBrowserChange()) : (v.imageUrl = t,
                                                    q.updatePlayFacade.startVlidurl())
                                    })
                                }(l)
                        },
                        initData: function () {
                            v.isChangeVid && (v.isChangeVid = !1,
                                v.hasSendLoadingStat = !1,
                                v.hasSendSecondBuffer = !1,
                                v.hasSendError = !1,
                                0 <= v.watchStartTimeRecord && (v.watchStartTime = v.watchStartTimeRecord,
                                    v.watchStartTimeRecord = 0),
                                "function" == typeof initChangeVid && initChangeVid({
                                    vid: v.vid
                                }))
                        },
                        valided: function () {
                            v.hasValided || (v.hasValided = !0,
                                q.updatePlayFacade.initPassword())
                        }
                    },
                    startVlidurl: function () {
                        0 < v.validUrl2.length && "on" == v.is_access_validurl ? M() : this.initPassword()
                    },
                    initPassword: function () {
                        "true" === v.usepassword && !v.banpassword && v.pword ? q.checkPassword(v, q.decode(v.pword), function () {
                            v.usepassword = "false",
                                F()
                        }, function () {
                            F()
                        }) : F()
                    },
                    passworded: function (e) {
                        e ? (v.passwordTyping = !1,
                            "function" == typeof addPassword && addPassword(!1),
                            v.autoplay = !0,
                            v.isChangeVid ? j(void 0, q(v.video)[0]) : this.startPlay()) : "function" == typeof addPasswordTips && addPasswordTips(decodeURIComponent(q.lang.password.error))
                    },
                    startPlay: function () {
                        !function s(n, e) {
                            video = q(v.media)[0];
                            var t = q(v.media);
                            v.playsinline && (t.attr("webkit-playsinline", ""),
                                t.attr("playsinline", ""),
                                t.attr("x5-playsinline", ""),
                                t.attr("controlslist", "nodownload"));
                            v.useH5Page && t.removeAttr("x5-playsinline");
                            v.loop && t.attr("loop", "");
                            q.displayVideo(v, t, !1),
                                t.css("width", "0"),
                                t.css("height", "0"),
                                v.video_align && t.css("object-position", v.video_align);
                            v.polyvObjectvideo = t,
                                v.video = video,
                                v.isPreAd = q.playAdControl.sortAdInfo(),
                                !0 !== v.preload || 0 != v.teaser_show && !0 !== v.ban_teaser || v.isPreAd ? t.attr("autoplay", "autoplay") : (t.attr("preload", "auto"),
                                    A(),
                                    v.hasSortVideo = !0,
                                    P(function (e) {
                                        m(e)
                                    }),
                                    v.hasNewUi || k());
                            if (v.autoplay || v.hidePlayBtn)
                                q.updatePlayFacade.startUserInfo(),
                                    "function" == typeof s2j_onPlayerInitOver && "off" == v.hasSendInitOver && (v.hasSendInitOver = "on",
                                        s2j_onPlayerInitOver()),
                                    1 != v.ban_ui && "on" != v.ban_ui || q("#plv_container").css("background-color", "#212121");
                            else {
                                if (0 < q("#plv_container img").length && !v.ban_subPage)
                                    return;
                                v.vrdomain && (v.useVr = !0);
                                var i = v.httpHead + "player.polyv.net/script/images/button-play.png";
                                v.buttonImageUrl = i,
                                    v.useVr && q.checkVrDevice() && (!function a() {
                                        if (!v.hasLoadVrJs) {
                                            v.hasLoadVrJs = !0;
                                            var e = "//player.polyv.net/script/js/panoramic.min.js";
                                            "on" != v.beta_test && "on" != v.beta || (e = "./js/panoramic.min.js"),
                                                q.getScript(e, function () {
                                                    q("#playbutton").css("display", "block"),
                                                        "function" == typeof setVrReady && setVrReady(),
                                                        v.loadedVrJs = !0
                                                }).fail(function (e, t, n) { })
                                        }
                                    }(),
                                        i = "//player.polyv.net/script/images/360.png",
                                        "on" != v.beta_test && "on" != v.beta || (i = "./images/360.png"),
                                        "function" == typeof setVrMode && setVrMode()),
                                    d.buttonImgUrl && (i = d.buttonImgUrl);
                                var r = q('<img id="playbutton">');
                                r.attr("src", i),
                                    r.css("display", "none"),
                                    r.appendTo(n),
                                    r.one("load", function () {
                                        if (0 == parseInt(v.height)) {
                                            var e = parseInt(n.css("width")) / v.ratio;
                                            v.height = e,
                                                n.parent().css("height", e),
                                                n.css("height", e)
                                        }
                                        parseInt(n.css("width"));
                                        if (v.useVr && q.checkVrDevice() ? (r.css({
                                            display: "none",
                                            maxHeight: "70%",
                                            right: 0,
                                            left: 0,
                                            bottom: 0,
                                            top: 0,
                                            margin: "auto",
                                            position: "absolute"
                                        }),
                                            v.loadedVrJs && r.css("display", "block")) : r.css({
                                                left: "50%",
                                                top: "50%",
                                                width: "80px",
                                                height: "80px",
                                                marginLeft: "-40px",
                                                marginTop: "-40px",
                                                position: "absolute",
                                                opacity: .8,
                                                display: "block"
                                            }),
                                            1 == v.ban_ui || "on" == v.ban_ui) {
                                            var t = (parseInt(n.css("height")) - 72) / 2;
                                            r.css("position", "relative"),
                                                r.css("top", t + "px"),
                                                r.css("margin-top", 0)
                                        }
                                        "function" == typeof s2j_onPlayerInitOver && "off" == v.hasSendInitOver && (v.hasSendInitOver = "on",
                                            s2j_onPlayerInitOver()),
                                            n.bind("click", function () {
                                                r.remove(),
                                                    q.plvPlayVideo(video),
                                                    video.pause(),
                                                    v.isClickPlayButton = "on",
                                                    q.updatePlayFacade.startUserInfo(),
                                                    n.unbind("click"),
                                                    "function" == typeof s2j_onPlayBtnClick && (s2j_onPlayBtnClick(),
                                                        0 < v.title.length && "function" == typeof changeTitle && changeTitle(v.title))
                                            })
                                    })
                            }
                            v.j2s_startPlay = function () {
                                q.plvPlayVideo(video),
                                    video.pause(),
                                    v.isClickPlayButton = "on",
                                    q.updatePlayFacade.startUserInfo(),
                                    v.polyvObjectdiv.unbind("click"),
                                    "function" == typeof s2j_onPlayBtnClick && (s2j_onPlayBtnClick(),
                                        0 < v.title.length && "function" == typeof changeTitle && changeTitle(v.title))
                            }
                                ,
                                v.j2s_pauseVideo = function () {
                                    v.video.pause(),
                                        q.updateFlowStatus(q.FLOW_STATUS.PAUSE)
                                }
                                ,
                                v.j2s_resumeVideo = function () {
                                    v.firstToPlayTime || (v.firstToPlayTime = Date.now()),
                                        !v.banOverPlay || video.currentTime < v.previewlong ? v.j2s_playVideo() : v.isResumeing || (v.validStatusValue = 5,
                                            v.isResumeing = !0,
                                            M()),
                                        !0 === v.useMute && v.video && (v.video.mute = !1)
                                }
                                ,
                                v.j2s_changePlayStatus = function (e) {
                                    ("loading" === e || "pause" === e || "over" === e) && v.j2s_playVideo(),
                                        "play" === e && v.j2s_pauseVideo()
                                }
                                ,
                                v.j2s_playVideo = function () {
                                    v.video.src ? q.plvPlayVideo(v.video) : n.click(),
                                        q.displayVideo(v, v.polyvObjectvideo, !0),
                                        q.updateFlowStatus(q.FLOW_STATUS.PLAY),
                                        v.emit && v.emit(q.FLOW_STATUS.PLAY),
                                        q.playAdControl.removeAd()
                                }
                                ,
                                v.j2s_seekVideo = function (e) {
                                    if ("audio" == v.media) {
                                        var t = e;
                                        if (null != v.video && null != v.video.seekable)
                                            try {
                                                if (0 != v.video.seekable.length) {
                                                    v.video.seekable.start(v.video.seekable.length - 1);
                                                    var n = v.video.seekable.end(v.video.seekable.length - 1)
                                                } else {
                                                    v.video.seekable.start(0);
                                                    var n = v.video.seekable.end(0)
                                                }
                                                n < t && (t = n)
                                            } catch (i) {
                                                return
                                            }
                                        v.video.src && (v.video.currentTime = t)
                                    } else
                                        v.video.src && (v.video.currentTime = e)
                                }
                                ,
                                v.j2s_stopVideo = function () {
                                    v.video.pause(),
                                        v.video.currentTime = 0,
                                        (q.flowStatus == q.FLOW_STATUS.PLAY || q.FLOW_STATUS.PAUSE) && q.updatePlayFacade.onEnd()
                                }
                                ,
                                v.j2s_hideVideo = function () {
                                    q.displayVideo(v, q(v.video), !1)
                                }
                                ,
                                v.j2s_showVideo = function () {
                                    q.displayVideo(v, q(v.video), !0)
                                }
                                ,
                                v.changeCode = function (e) {
                                    v.code = e
                                }
                                ,
                                v.changeValidHead = function (e) {
                                    v.validHead = e
                                }
                                ,
                                v.j2s_setVolume = function (e) {
                                    e = 1 < (e = (e = parseFloat(e)) < 0 ? 0 : e) ? 1 : e,
                                        v.video.volume = e
                                }
                                ,
                                v.j2s_switchHd = function (e) {
                                    v.isSwitching || (v.playNum = e,
                                        v.banHdSelect ? q.updatePlayFacade.onSwitchHd() : I(v.video, e))
                                }
                                ,
                                v.changeLine = function (e) {
                                    v.cdn = e,
                                        I(video, v.playNum)
                                }
                                ,
                                v.changeRate = function (e) {
                                    isCompletePlay = !1,
                                        v.recordPlaybackRate = e,
                                        v.video.playbackRate = e
                                }
                                ,
                                v.changeVrMode = function (e) {
                                    try {
                                        vrFuc.changeMode(e)
                                    } catch (t) { }
                                }
                                ,
                                v.updateVrSize = function () {
                                    try {
                                        vrFuc.windowResize()
                                    } catch (e) { }
                                }
                                ,
                                v.updateVrOri = function (e) {
                                    try {
                                        vrFuc.isFullScreen = e
                                    } catch (t) { }
                                }
                                ,
                                v.j2s_removeVideo = function () {
                                    q(l).empty()
                                }
                                ,
                                v.j2s_switch = function (e) {
                                    e -= 1,
                                        v.banHdSelect ? (v.validStatusValue = 4,
                                            v.isSwitching = !0,
                                            M()) : v.j2s_switchHd(e)
                                }
                                ,
                                v.switchBitrate = function (e) {
                                    v.j2s_switch(e)
                                }
                                ,
                                v.j2s_toggleHighSpeed = function (e) {
                                    q.flowStatus != q.FLOW_STATUS.PLAY && q.flowStatus != q.FLOW_STATUS.PAUSE || (v.playbackrate = e ? 1.5 : 1,
                                        v.j2s_switch(v.playNum + 1))
                                }
                                ,
                                v.j2s_replay = function () {
                                    v.ts && v.sign ? L() : P(function (e) {
                                        m(e),
                                            v.j2s_seekVideo(0),
                                            v.j2s_playVideo(),
                                            v.recordPlaybackRate && (v.video.playbackRate = v.recordPlaybackRate)
                                    }),
                                        v.isSendOnPlay = !1,
                                        v.j2s_seekVideo(0),
                                        v.j2s_playVideo(),
                                        q.updatePlayFacade.onPlayStart()
                                }
                                ,
                                v.j2s_adHop = function () {
                                    -1 == v.addrurl.indexOf("http://") && -1 == v.addrurl.indexOf("https://") || (window.open(v.addrurl),
                                        function n(e) {
                                            var t = "//stat2.polyv.net/log/gganaly.html?adid=" + e.adid + "&type=0&ran=" + Math.floor(999999999 * Math.random());
                                            q.ajax({
                                                url: t,
                                                type: "GET",
                                                success: function () { }
                                            })
                                        }(v.adNow))
                                }
                                ,
                                v.j2s_skipAd = function () {
                                    q.flowStatus == q.FLOW_STATUS.ENDAD ? q.updatePlayFacade.endAdComplete() : q.updatePlayFacade.preAdComplete()
                                }
                                ,
                                v.playNext = function () {
                                    if (1 < v.videoList.length) {
                                        v.playNextIndex++,
                                            v.playNextIndex = v.playNextIndex > v.videoList.length - 1 ? v.videoList.length - 1 : v.playNextIndex;
                                        var e = v.videoList[v.playNextIndex];
                                        if (e == undefined || e == v.vid || e.substr(0, 10) != v.vid.substr(0, 10))
                                            return;
                                        "function" == typeof changeVideoId && changeVideoId(e),
                                            v.changeVid(e, 0)
                                    }
                                }
                                ,
                                v.j2s_showBarrage = function () {
                                    q.startDanmu && q.cmManager.startTimer()
                                }
                                ,
                                v.j2s_hideBarrage = function () {
                                    q.startDanmu && q.cmManager.stopTimer()
                                }
                                ,
                                v.j2s_addBarrageMessage = function (e) {
                                    var t = q.parseJSON(e);
                                    for (var n in t) {
                                        var i = {};
                                        i.text = t[n].msg,
                                            i.stime = 0,
                                            i.mode = 1,
                                            i.size = 14,
                                            i.color = 255,
                                            i.data = t[n].timestamp,
                                            q.cmManager.insert(i)
                                    }
                                }
                                ,
                                v.changeParam = function (e, t, n, i) {
                                    e && "undefined" != e && (v.params.param1 = e),
                                        t && "undefined" != t && (v.params.param2 = t),
                                        n && "undefined" != n && (v.params.param3 = n),
                                        i && "undefined" != i && (v.params.param4 = i)
                                }
                                ,
                                v.changeStatistics = function (e, t, n, i, r) {
                                    e && "undefined" != e && (v.session_id = e),
                                        v.changeParam(t, n, i, r)
                                }
                                ,
                                v.setMode = function (e) {
                                    if (e)
                                        if (v.useAudio && 1 == v.useAudio) {
                                            if ("audio" == e)
                                                return !1
                                        } else if ("video" == e)
                                            return !1;
                                    if ("off" == v.isClickPlayButton && q("#playbutton").remove(),
                                        q.flowStatus == q.FLOW_STATUS.PREAD)
                                        return !1;
                                    var t = {
                                        auto: v.video.autoplay,
                                        post: v.video.poster,
                                        pre: v.video.preload,
                                        con: v.video.controls,
                                        src: ""
                                    };
                                    return 0 < v.video.currentTime && !v.isChangeVid && (v.watch_start_time = v.video.currentTime,
                                        v.isAudioModeSwitch = !0),
                                        v.useAudio && 1 == v.useAudio ? (v.useAudio = !1,
                                            v.media = "video",
                                            q("audio").remove(),
                                            "function" == typeof showAudioRotate && showAudioRotate(!1),
                                            U("video", q("#audio"), t)) : (v.useAudio = !0,
                                                U(v.media = "audio", q(v.video), t)),
                                        !0
                                }
                                ,
                                v.switchMMode = function (e) {
                                    if (e)
                                        if (v.useAudio && 1 == v.useAudio) {
                                            if ("audio" == e)
                                                return !1
                                        } else if ("video" == e)
                                            return !1;
                                    if ("off" == v.isClickPlayButton && q("#playbutton").remove(),
                                        q.flowStatus == q.FLOW_STATUS.PREAD)
                                        return !1;
                                    var t = {
                                        videosrc: v.video.src,
                                        auto: v.video.autoplay,
                                        post: v.video.poster,
                                        pre: v.video.preload,
                                        con: v.video.controls,
                                        src: v.video.src
                                    };
                                    return v.useAudio && 1 == v.useAudio ? (v.useAudio = !1,
                                        B("video", q("#audio"), t),
                                        0 < !v.first_image.length && (v.video.poster = "")) : (v.useAudio = !0,
                                            B("audio", q(v.video), t)),
                                        !0
                                }
                                ,
                                v.j2s_reloadBarrageData = function () {
                                    q.startDanmu && q.ajax({
                                        url: q.danmuUrl,
                                        type: "GET",
                                        dataType: "text",
                                        success: function (e) {
                                            q.cmManager.load(PolyvParser(e))
                                        },
                                        error: function (e, t, n) { }
                                    })
                                }
                                ,
                                v.j2s_hideSrt = function () {
                                    v.srt && v.srt.hide()
                                }
                                ,
                                v.j2s_showSrt = function () {
                                    v.srt && v.srt.show()
                                }
                                ,
                                v.j2s_changeSrt = function (e) {
                                    v.srt_index = e,
                                        v.srt && v.srt.changeSrt(e)
                                }
                                ,
                                v.j2s_getSrtState = function () {
                                    return !!v.srt && v.srt.getSrtState()
                                }
                                ,
                                v.j2s_getSrtList = function () {
                                    return v.srt ? v.srt.getSrtList() : []
                                }
                                ,
                                v.j2s_getCurrentTime = function () {
                                    return Math.floor(v.video.currentTime)
                                }
                                ,
                                v.j2s_stayInVideoTime = function () {
                                    return v.stay_duration
                                }
                                ,
                                v.j2s_getDuration = function () {
                                    return v.video.duration
                                }
                                ,
                                q.cmManager,
                                q.startDanmu = !1,
                                q.haveDanmu = !1,
                                q.danmuUrl = "",
                                v.j2s_openDanmu = function (e) {
                                    q.haveDanmu = !0,
                                        q.danmuUrl = e
                                }
                                ,
                                v.j2s_getVideo = function () {
                                    return v.video
                                }
                                ,
                                R();
                            var o = 0;
                            v.isCounting = !1;
                            setInterval(function () {
                                q.flowStatus == q.FLOW_STATUS.PLAY && (video.paused || (video.currentTime != o ? v.isCounting || q.updatePlayFacade.startCountTimer() : q.updatePlayFacade.stopCountTimer(),
                                    o = video.currentTime))
                            }, 500)
                        }(v.polyvObjectdiv, v.div),
                            function i(e, t, n) {
                                v.autoplay || t.css("background-image", "url(" + n + ")");
                                "%" == v.width.toString().charAt(v.width.length - 1) && (e.width(v.width),
                                    e.height(v.height));
                                "on" != v.ban_skin_progress && 1 != v.ban_skin_progress || "function" == typeof banSkinProgress && banSkinProgress();
                                v.useVr && q.checkVrDevice() && t.css("background-image", "url('')")
                            }(v.polyvObjectthis, v.polyvObjectdiv, v.imageUrl)
                    },
                    startPreAd: function (e, t) {
                        q.playAdControl.makeAD(e, t, "pre")
                    },
                    startUserInfo: function () {
                        v.banAUserInfo || !q.isAndroid() || !v.userInfoRecord || T("autokey" + v.userInfoRecord.autokey) && !v.forceUserInfo || !v.hasUserInfoRecord || v.banVisitorInfo || v.visitorPass ? this.startPreAd(v.div, v.video) : S()
                    },
                    preAdComplete: function () {
                        v.preadComplete || (v.video && v.video.pause(),
                            q.displayVideo(v, q(v.video), !1),
                            q(v.o).css("background-image", ""),
                            v.preadComplete = !0,
                            q.playAdControl.removeAd()),
                            _(0)
                    },
                    teaserComplete: function () {
                        q(v.polyvObjectdiv).css("background-image", 'url("")'),
                            q.displayVideo(v, q(v.video), !0),
                            j(v.o, v.video)
                    },
                    videoComplete: function () {
                        1 < v.videoList.length && v.playNextIndex < v.videoList.length - 1 ? v.playNext() : (q.displayVideo(v, q(v.video), !1),
                            _(1))
                    },
                    tailComplete: function () {
                        q.playAdControl.makeAD(v.div, v.video, "end")
                    },
                    endAdComplete: function () {
                        v.video.pause(),
                            q.displayVideo(v, q(v.video), !1),
                            v.audioBack || v.ban_subPage || q(v.div).css("background-image", ""),
                            q.isEndOnce = !0,
                            q.updateFlowStatus(q.FLOW_STATUS.OVER),
                            q.playAdControl.removeAd(),
                            v.over || (v.over = new window.PlayEndControl(v, q)),
                            v.over.show()
                    },
                    onPlayStart: function () {
                        "function" == typeof s2j_onPlayStart && s2j_onPlayStart(v.vid),
                            "function" == typeof s2j_onVideoPlay && s2j_onVideoPlay(v.vid),
                            v.s2j_onPlayStart && v.s2j_onPlayStart()
                    },
                    onPlay: function () {
                        v.audioBack || v.polyvObjectdiv.css({
                            "background-image": "",
                            "background-color": "#212121"
                        }),
                            v.s2j_onVideoPlay && v.s2j_onVideoPlay(),
                            "function" == typeof s2j_onVideoPlay && s2j_onVideoPlay(v.vid),
                            q.haveDanmu && (q.haveDanmu = !1,
                                function e() {
                                    q.getScript("js/CommentCoreLibrary.min.js", function () {
                                        var e = q('<div id="CmContainer"><div>');
                                        q("#container").append(e),
                                            q(e).css("top", 0),
                                            q(e).css("position", "absolute"),
                                            q(e).css("overflow", "hidden"),
                                            q(e).css("width", "100%"),
                                            q(e).css("height", "100%"),
                                            q.cmManager = new CommentManager(e[0]),
                                            q.ajax({
                                                url: q.danmuUrl,
                                                type: "GET",
                                                dataType: "text",
                                                success: function (e) {
                                                    q.cmManager.init(),
                                                        q.cmManager.load(PolyvParser(e)),
                                                        q.cmManager.startTimer(),
                                                        q.startDanmu = !0
                                                },
                                                error: function (e, t, n) { }
                                            })
                                    })
                                }()),
                            q.startDanmu && q.cmManager.startTimer(),
                            !q.hasSetRecordTime && 1 < q.recordTime && !q.isAndroid() && (q.hasSetRecordTime = !0,
                                video.currentTime = q.recordTime)
                    },
                    onEnd: function () {
                        q.updatePlayFacade.stopCountTimer(),
                            v.s2j_onPlayOver && v.s2j_onPlayOver(),
                            "function" == typeof s2j_onPlayOver && s2j_onPlayOver(v.vid),
                            q.updatePlayFacade.videoComplete(),
                            q.startDanmu && q.cmManager.clear()
                    },
                    onSwitchHd: function () {
                        v.s2j_onSwitchHd && v.s2j_onSwitchHd(v.playNum),
                            "function" == typeof s2j_onSwitchHd && s2j_onSwitchHd(v.playNum)
                    },
                    onOverPlay: function () {
                        v.s2j_onOverPlay && v.s2j_onOverPlay(v.overPlayType, v.overPlaySec),
                            "function" == typeof s2j_onOverPlay && s2j_onOverPlay(v.overPlayType, v.overPlaySec)
                    },
                    startCountTimer: function () {
                        v.isCounting = !0,
                            i && clearInterval(i),
                            i = setInterval(function () {
                                !function e() {
                                    v.stay_duration++
                                }()
                            }, 1e3),
                            n && clearInterval(n);
                        var e = !0
                            , t = v.reportFreq || 10;
                        t = t < 1 ? 10 : t,
                            n = setInterval(function () {
                                v.isSendLiveStat ? function s() {
                                    var e = (new Date).getTime()
                                        , t = (Math.floor(q(v.video)[0].currentTime),
                                            v.pid)
                                        , n = v.stay_duration
                                        , i = "rtas.net" + t + v.liveVid + "0" + n
                                        , r = CryptoJS.MD5(i) + ""
                                        , o = {
                                            pid: t,
                                            uid: v.liveUid,
                                            cid: v.liveVid,
                                            flow: 0,
                                            pd: n,
                                            sd: n,
                                            ts: e,
                                            sign: r
                                        };
                                    for (var a in v.params)
                                        o[a] = v.params[a];
                                    v.session_id && (o.session_id = W(v.session_id));
                                    q.ajax({
                                        type: "GET",
                                        url: "//rtas.videocc.net/v1/view",
                                        data: o,
                                        success: function (e) { }
                                    })
                                }() : (!function d(e) {
                                    if (!v.vid)
                                        return;
                                    var t = (new Date).getTime()
                                        , n = Math.floor(q(v.video)[0].currentTime)
                                        , i = v.pid
                                        , r = v.stay_duration
                                        , o = "rtas.net" + i + v.vid + "0" + r + n
                                        , a = CryptoJS.MD5(o) + ""
                                        , s = {
                                            pid: i,
                                            uid: v.vid.substring(0, 10),
                                            vid: v.vid,
                                            flow: 0,
                                            pd: r,
                                            sd: r,
                                            cts: n,
                                            ts: t,
                                            sign: a,
                                            duration: v.duration,
                                            cataid: v.cataid,
                                            pn: "MobileHTML5",
                                            pv: q.buildMetaData.split("+")[1],
                                            href: W(q.href)
                                        };
                                    for (var l in v.params)
                                        s[l] = W(v.params[l]);
                                    v.viewerInfo && v.viewerInfo.viewerName && (s.param2 = W(v.viewerInfo.viewerName));
                                    v.viewerInfo && v.viewerInfo.viewerExtraInfo1 && (s.param3 = W(v.viewerInfo.viewerExtraInfo1));
                                    v.viewerInfo && v.viewerInfo.viewerExtraInfo2 && (s.param4 = W(v.viewerInfo.viewerExtraInfo2));
                                    v.viewerInfo && v.viewerInfo.viewerExtraInfo3 && (s.param5 = W(v.viewerInfo.viewerExtraInfo3));
                                    v.viewerInfo && v.viewerInfo.viewerId ? s.sid = W(v.viewerInfo.viewerId) : v.session_id && (s.sid = W(v.session_id));
                                    e && v.viewerInfo && v.viewerInfo.viewerAvatar && (s.viewerAvatar = W(v.viewerInfo.viewerAvatar));
                                    e && (s.ute = "bop");
                                    v.appId && (s.appId = v.appId);
                                    q.ajax({
                                        type: "GET",
                                        url: v.httpHead + "prtas.videocc.net/v2/view",
                                        data: s,
                                        success: function (e) { }
                                    })
                                }(e),
                                    e = !1)
                            }, 1e3 * t)
                    },
                    stopCountTimer: function () {
                        clearInterval(i),
                            clearInterval(n),
                            v.isCounting = !1
                    }
                },
                v.isClickPlayButton = "off",
                v.hasSendInitOver = "off",
                v.showHd = "on",
                v.showRate = "on",
                v.media = "video",
                v.on = function (e, t) {
                    this.handles || (this.handles = {}),
                        this.handles[e] || (this.handles[e] = []),
                        this.handles[e].push(t)
                }
                ,
                v.emit = function (e) {
                    if (this.handles && this.handles[e])
                        for (var t = 0; t < this.handles[e].length; t++)
                            this.handles[e][t].call(this, arguments[1])
                }
                ,
                v.closeEvents = function (e) {
                    var t = this.handles;
                    this.eventArray || (this.eventArray = []),
                        this.eventArray.push(e),
                        this.eventArray = q.duplicateRemoval(this.eventArray);
                    for (var n = 0; n < t.length; n++)
                        e === t[n] && t.splice(n, 1)
                }
                ,
                v.cleanEvents = function () {
                    this.handles && (this.handles = null)
                }
                ,
                d.audioBack && (d.useAudio = !0),
                d.useAudio && (v.media = "audio"),
                d.h5Config && d.h5Config.useHls && (v.useHls = !0),
                d.h5Config && d.h5Config.useH5Page && (v.useH5Page = !0),
                d && q.extend(v, d),
                v.vid || (v.vid = "");
            var c = q.checkLowerDevice()
                , t = q.checkFlashSupport()
                , r = q.checkHtmlSupport()
                , a = v.playerType = q.determinePlayerType(v, t, r);
            if (a != q.playerType.NO_SUPPORT && a != q.playerType.INSTALLER) {
                if (a == q.playerType.FLASH)
                    return v.pptEnable ? q.Flash.renderPptFlash() : (q.renderFlash(l, v),
                        v.s2j_onPlayStart && (s2j_onPlayStart = v.s2j_onPlayStart),
                        v.s2j_onPlayOver && (s2j_onPlayOver = v.s2j_onPlayOver),
                        v.s2j_onVideoPlay && (s2j_onVideoPlay = v.s2j_onVideoPlay),
                        v.s2j_onVideoPause && (s2j_onVideoPause = v.s2j_onVideoPause),
                        v.s2j_onPlayerInitOver && (s2j_onPlayerInitOver = v.s2j_onPlayerInitOver),
                        v.s2j_focusComment && (s2j_focusComment = v.s2j_focusComment),
                        v.s2j_onSwitchHd && (s2j_onSwitchHd = v.s2j_onSwitchHd),
                        s2j_getPreviewMode = function () {
                            if (1 == v.previewMode)
                                return 1
                        }
                        ,
                        window["s2j_getPreviewMode_" + v.playerId] = function () {
                            return 1 == v.previewMode ? 1 : 0
                        }
                        ,
                        s2j_onChangeHTML5Player = function (e) {
                            var t = v;
                            try {
                                var n = v.flashplayer.j2s_getCurrentTime();
                                0 < n && (t.watchStartTime = n,
                                    t.autoplay = !0),
                                    t.volume = v.flashplayer.getVolume() / 100
                            } catch (i) { }
                            window.polyvPlayer ? q["toHTML5" + e] ? v.H5 = q["toHTML5" + e](t) : (v.H5 = q.createH5Player(l, t),
                                v.flashplayer.trigger("changeH5Success", v.H5),
                                v.flashplayer.cleanEvents()) : q.getScript(q.h5Script, function () {
                                    v.H5 = q.createH5Player(l, t),
                                        v.flashplayer.trigger("changeH5Success", v.H5),
                                        v.flashplayer.cleanEvents()
                                })
                        }
                        ,
                        v.flashplayer = q.getPlayer(v.playerId || v.vid),
                        v.flashplayer.on = function (e, t) {
                            this.handles || (this.handles = {}),
                                this.handles[e] || (this.handles[e] = []),
                                this.handles[e].push(t)
                        }
                        ,
                        v.flashplayer.emit = function (e) {
                            if (this.handles && this.handles[e])
                                for (var t = 0; t < this.handles[e].length; t++)
                                    this.handles[e][t].call(this, arguments[1])
                        }
                        ,
                        v.flashplayer.closeEvents = function (e) {
                            var t = this.handles;
                            this.eventArray || (this.eventArray = []),
                                this.eventArray.push(e),
                                this.eventArray = q.duplicateRemoval(this.eventArray);
                            for (var n = 0; n < t.length; n++)
                                e === t[n] && t.splice(n, 1)
                        }
                        ,
                        v.flashplayer.cleanEvents = function () {
                            this.handles && (this.handles = null)
                        }
                        ,
                        v.flashplayer.trigger = function (e, t) {
                            if (-1 === q.inArray(e, ["onfirstFrame", "onbufferChange", "ontime", "onaccuracyTime", "testTrigger"]))
                                if (this.eventArray && 0 < this.eventArray.length)
                                    for (var n = 0; n < this.eventArray.length; n++)
                                        e !== this.eventArray[n] && v.flashplayer.emit(e, t);
                                else
                                    v.flashplayer.emit(e, t)
                        }
                        ,
                        v.flashplayer);
                if ("on" !== v.beta_test && "on" !== v.beta || v.jsonUrl && (v.vjsonUrl = v.jsonUrl),
                    v.route = ["ws", "kw"],
                    v.mp4route = ["mpv.videocc.net", "freeovp.videocc.net"],
                    v.cdn || (v.cdn = 0),
                    "undefined" != typeof v.showLine && !0 !== v.showLine || (v.showLine = "on"),
                    v.autoplay) {
                    var u = navigator.userAgent
                        , p = u.match(/Chrome\/([\d.]+)/) || u.match(/CriOS\/([\d.]+)/)
                        , h = !p && u.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/) || u.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
                    (q.isIOS() && (-1 != u.indexOf("Safari") || -1 != u.indexOf("MQQBrowser")) || -1 != u.indexOf("baidubrowser") || -1 != u.indexOf("UCBrowser")) && (v.autoplay = !1),
                        q.isIOS() && q.isWeixin() && "6.5" < u.split("MicroMessenger")[1].split(" ")[0].substr(1) && (v.autoplay = !1),
                        !q.isAndroid() || -1 == u.indexOf("Chrome") || p && h || (v.autoplay = !1)
                }
                if (v.audioControl && (v.autoplay = !0),
                    v.message && (v.pword = v.message),
                    v.is_review_player && (-1 < q.href.indexOf("my.polyv.net") || -1 < q.href.indexOf("apollo.polyv.net")) && (v.is_review = !0),
                    v.statistics) {
                    v.statistics.session_id && (v.session_id = v.statistics.session_id);
                    for (var f = ["param1", "param2", "param3", "param4", "param5"], y = 0; y < f.length; y++) {
                        var g = f[y];
                        v.statistics[g] && (v.params[g] = v.statistics[g])
                    }
                }
                return q.updatePlayFacade.initVideoJson(),
                    q.continuePlay = new PolyvContinuePlay({
                        settings: v,
                        el: q(".container-main"),
                        ban_history_time: v.ban_history_time || "off",
                        history_video_duration: v.history_video_duration || 5
                    }),
                    q.continuePlay.getHistoryDuration(v.localCurrentTime),
                    q.playAdControl = new PlayAdControl(v),
                    v.qosMonitor = new PlayQosMonitor(v, q),
                    v.liveStreamName && (N(),
                        setInterval(function () {
                            N()
                        }, 6e3)),
                    v.setMessage = function (e) {
                        v.pword = e
                    }
                    ,
                    v.changeLiveStreamName = function (e) {
                        v.liveStreamName = e
                    }
                    ,
                    v.j2s_checkPassword = function (e) {
                        q.checkPassword(v, e, function (e) {
                            "1" == e ? q.updatePlayFacade.passworded(!0) : q.updatePlayFacade.passworded(!1)
                        }, function () {
                            q.updatePlayFacade.passworded(!1)
                        })
                    }
                    ,
                    v.videoList = [],
                    v.playNextIndex = 0,
                    v.getList = function (e) {
                        var t = "//static.polyv.net/pxml/" + e + ".xml";
                        q.ajax({
                            type: "GET",
                            url: t,
                            success: function (e) {
                                q(e).find("videodoc").each(function (e) {
                                    var t = q(this).children("vid").text();
                                    v.videoList.push(t)
                                }),
                                    0 == v.videoList.length && "function" == typeof hideNext && hideNext()
                            },
                            error: function () {
                                "function" == typeof hideNext && hideNext()
                            }
                        })
                    }
                    ,
                    v.setMsg = function (e) {
                        e && E(v.video)
                    }
                    ,
                    document.addEventListener("visibilitychange", function () {
                        if (document.hidden)
                            ;
                        else {
                            if (!q.isIOS() || !q.isWeixin())
                                return;
                            q.flowStatus == q.FLOW_STATUS.PLAY && 1 === v.seed && /web/i.test(v.hlsLevel) && /hls/i.test(v.sourceType) && I(v.video, v.playNum)
                        }
                    }),
                    v
            }
            function m(e) {
                v.playCore || (v.playCore = new window.PlayCoreControl(v, q)),
                    v.playCore.playSource(e)
            }
            function b(t) {
                if (t.error) {
                    n = t.error;
                    v.qosMonitor.send(n),
                        z()
                } else {
                    var e = !0;
                    if (v.errorCode = "",
                        "false" == t.outflow && "false" == t.timeoutflow ? e = !1 : ("true" == t.outflow && (v.errorCode = "002"),
                            "true" == t.timeoutflow && (v.errorCode = "001")),
                        t.hash,
                        v.playerError = t.playerError,
                        v.playerError && v.playerError.code && "0" !== v.playerError.code) {
                        v.errorCode = v.playerError.code + "";
                        var n = /^(en|zh_CN)$/.test(v.lang) ? v.lang : "zh_CN";
                        return void z(v.playerError.tips[n] ? v.playerError.tips[n] + "</br>#" + v.errorCode : "")
                    }
                    (new window.PolyvDomainList).checkDomainList(t, q) || (e = !0,
                        v.domainWhiteBlackError = !0,
                        v.errorCode = "006"),
                        v.outdate = e,
                        v.title = t.title,
                        v.hlsLevel = t.hlsLevel,
                        v.webLevel = t.webLevel,
                        v.appLevel = t.appLevel,
                        t.player || (t.player = {}),
                        t.player && (v.zColor = t.player.zColor,
                            v.skincolor = t.player.skincolor,
                            v.pColor = t.player.pColor),
                        v.videolink = t.videolink,
                        v.my_br = t.my_br,
                        v.flv = t.flv,
                        v.mp4 = t.mp4;
                    for (var i = 0; i < t.mp4.length; i++)
                        if (-1 < t.mp4[i].indexOf("cuplayer")) {
                            W("");
                            v.showLine = "off";
                            break
                        }
                    if (v.hls = t.hls,
                        v.seed_const = t.seed_const,
                        v.hlsLevel = t.hlsLevel,
                        v.df_num = t.df_num,
                        v.hlsIndex = t.hlsIndex,
                        v.hls2 = t.hls2,
                        v.hlsIndex2 = t.hlsIndex2,
                        v.hlsIndex_15x = t.hls_15x_Index,
                        v.hls_15x = t.hls_15x,
                        v.playbackrate = 1,
                        v.duration = t.duration,
                        v.reportFreq = t.reportFreq,
                        "undefined" == typeof v.teaser_show && (v.teaser_show = t.teaser_show || t.player.teaser_show),
                        v.teaser_url = v.teaser_url || t.teaser_url || t.player.teaser_url,
                        "undefined" == typeof v.teaser_time && (v.teaser_time = t.teaser_time || t.player.teaser_time),
                        "undefined" == typeof v.tail_show && (v.tail_show = t.tail_show || t.player.tail_show),
                        v.tail_url = v.tail_url || t.tail_url || t.player.tail_url,
                        "undefined" == typeof v.tail_time && (v.tail_time = t.tail_time || t.player.tail_time),
                        "undefined" != typeof t.tailRecommendOpt ? v.tailRecommendOpt = t.tailRecommendOpt : v.tailRecommendOpt = 5,
                        v.languageSetting = t.player.languageSetting || 1,
                        v.adList = t.adMatter.reverse(),
                        v.catatree = t.catatree,
                        v.cataid = t.cataid,
                        v.adMatter) {
                        v.catatree = "1",
                            v.cataid = 1,
                            v.adList = v.adMatter;
                        for (i = 0; i < v.adList.length; i++)
                            v.adList[i].cataid = 1
                    }
                    if (v.adsetting = "true" == t.adsetting ? "true" : "false",
                        v.weburl = t.weburl,
                        v.logo && (!v.logo.logo_url || -1 == v.logo.logo_url.indexOf("http") && -1 == v.logo.logo_url.indexOf("https") || (t.player.logo_url = v.logo.logo_url),
                            "undefined" != typeof v.logo.logo_pos && (t.player.logoloca = v.logo.logo_pos),
                            v.logo.logo_link && (t.player.logo_location = v.logo.logo_link),
                            "undefined" != typeof v.logo.logo_alpha && (t.player.logo_diaph = v.logo.logo_alpha),
                            v.logo.logo_width && (v.logo_width = v.logo.logo_width),
                            v.logo.logo_height && (v.logo_height = v.logo.logo_height),
                            v.logo.logoOffset && ("string" != typeof v.logo.logoOffset ? t.player.logoOffset = v.logo.logoOffset.join(",") : t.player.logoOffset = v.logo.logoOffset)),
                        v.logoloca = t.player.logoloca,
                        v.logo_url = t.player.logo_url,
                        v.logo_location = t.player.logo_location,
                        v.logo_diaph = t.player.logo_diaph,
                        v.logoOffset = [],
                        v.changeLogoOffset = !1,
                        t.player.logoOffset && (v.logoOffset = t.player.logoOffset.split(","),
                            v.changeLogoOffset = 0 < v.logoOffset[0] || 0 < v.logoOffset[1]),
                        v.fileSize = t.filesize,
                        v.validUrl2 = t.validUrl2,
                        v.validUrl2Backup = t.validUrl2_backup,
                        "N" === t.playauth && (v.validUrl2 = ""),
                        v.cdn_types = t.cdn_types,
                        v.cdnTypeArr = [],
                        v.cdn_types && (v.cdnTypeArr = v.cdn_types.split(","),
                            v.route = v.cdnTypeArr),
                        t.currentLine && v.cdn_types) {
                        var r = !1;
                        for (i = 0; i < v.cdnTypeArr.length; i++)
                            if (v.cdnTypeArr[i] === t.currentLine) {
                                r = !0,
                                    v.cdnTypeArr.splice(i, 1);
                                break
                            }
                        r && v.cdnTypeArr.unshift(t.currentLine),
                            v.route = v.cdnTypeArr,
                            0 === t.seed && (v.cdnTypeArr = ["ws", "kw"])
                    }
                    if (v.hls302 = t.hls302,
                        "1" === v.hls302 && (v.hlsIndex = v.hlsIndex2,
                            v.hls = v.hls2),
                        v.play_source_url = t.play_source_url,
                        v.keepsource = t.keepsource,
                        v.convertHls = t.convertHls,
                        v.convertHlsUrl = t.convertHlsUrl,
                        "1" === v.keepsource ? (v.useKeepSource = !0,
                            v.seed = 1,
                            v.mp4 = [],
                            v.hlsIndex = "",
                            v.showHd = "off",
                            v.showLine = "off",
                            -1 < v.play_source_url.indexOf(".mp3") ? (v.forceAudioRotate = !0,
                                v.media = "audio",
                                "undefined" == typeof v.useAudio && (v.useAudio = !0)) : (v.forceAudioRotate = !1,
                                    v.media = "video"),
                            v.setMode && v.setMode(v.media)) : !(v.useKeepSource = !1) === v.forceAudioRotate && (v.forceAudioRotate = !1,
                                v.media = "video",
                                v.setMode && v.setMode(v.media)),
                        "undefined" != typeof t.permit_questionnaire ? v.userInfoRecord = 1 === t.permit_questionnaire ? t.userInfoRecord : null : v.userInfoRecord = t.userInfoRecord,
                        v.hasUserInfoRecord = !1,
                        v.userInfoRecord && 0 < v.userInfoRecord.fields.length) {
                        v.hasUserInfoRecord = !0;
                        var o = String(v.userInfoRecord.time).split(":");
                        v.userInfoShowTime = 60 * parseInt(o[0]) + parseInt(o[1]),
                            -1 == String(v.userInfoRecord.time).indexOf(":") && (v.userInfoShowTime = parseInt(v.userInfoRecord.time))
                    }
                    for (var a in v.verification_data && (v.validUrl2 = v.verification_data),
                        v.srt_list = [],
                        t.video_srt) {
                        var s = [];
                        s.push(a);
                        var l = t.video_srt[a];
                        l = -1 < l.indexOf("http:") ? l.replace("http:", "") : l.replace("https:", ""),
                            s.push(l),
                            v.srt_list.push(s)
                    }
                    if (v.srt_list.reverse(),
                        v.srt_index = 0,
                        v.show_srt = !0,
                        "off" != v.showSrt && 0 != v.showSrt || (v.show_srt = !1),
                        "undefined" == typeof v.preload && "true" == t.preload && (v.preload = !0),
                        v.skinColor && "function" == typeof changeSkinColor && changeSkinColor(v.skinColor),
                        "off" != v.is_access_validurl ? v.is_access_validurl = "on" : v.is_access_validurl = "off",
                        1 == v.showHd && (v.showHd = "on"),
                        v.liveVid && v.liveUid && (v.isSendLiveStat = !0,
                            v.outdate = !1),
                        "undefined" != typeof v.start && "undefined" != typeof v.end && v.start > v.end && (v.start = -1,
                            v.end = -1),
                        t.aac_link ? v.aac_link = t.aac_link : v.aac_link = null,
                        w(v.aac_link),
                        v.j2s_getDuration = function () {
                            return v.duration
                        }
                        ,
                        v.j2s_getJsonDuration = function () {
                            if (1 == v.previewMode)
                                return v.previewlong = v.previewlong > t.duration ? t.duration : v.previewlong,
                                    v.previewlong;
                            if (0 < v.start || 0 < v.end) {
                                var e = t.duration;
                                return 0 < v.start && 0 < v.end ? v.end > v.start && (e = v.end - v.start) : 0 < v.start ? e = t.duration - v.start : 0 < v.end && v.end <= t.duration && (e = v.end),
                                    e
                            }
                            return t.duration
                        }
                        ,
                        v.first_image = t.first_image,
                        v.imageUrl = v.first_image,
                        v.seed = t.seed,
                        v.ratio = t.ratio,
                        v.swf_link = t.swf_link,
                        v.status = t.status,
                        v.usepassword = t.usepassword,
                        v.previewlong = t.previewDuration,
                        t.previewDuration || (v.previewlong = 180),
                        v.isChangeVid && v.previewMode && 0 === v.seed && 0 === v.watchEndTime && (v.watchEndTime = v.previewlong),
                        t.currentLine && "kw" == t.currentLine && (v.cdn = 1),
                        v.firstToPlayTime = 0,
                        q.isEndOnce = !1,
                        v.changeBrowser = !(1 != v.seed || !q.isFirefox()),
                        v.isSetForceHLS || (v.isSetForceHLS = !0,
                            v.forceHLS && (v.setForceHLS = !0)),
                        "1" === t.fullmp4 ? v.forceHLS = !0 : v.setForceHLS ? v.forceHLS = !0 : v.forceHLS = !1,
                        v.banHuaWei && (1 == v.seed || v.forceHLS) && q.isHuaWei() && (v.changeBrowser = !0),
                        v.banSAMSUNG && (1 == v.seed || v.forceHLS) && q.isSAMSUNG() && (v.changeBrowser = !0),
                        v.banOnePlus && 1 == v.seed && "web" === v.hlsLevel && q.isOnePlus() && (v.changeBrowser = !0),
                        v.forceHLS && q.isFirefox() && (v.changeBrowser = !0),
                        "web" === v.hlsLevel && 1 === v.seed && q.isAndroidQQ() && (v.changeBrowser = !0),
                        (1 == v.seed || v.forceHLS) && v.isBro && q.isBanBrowser() && (v.changeBrowser = !0),
                        v.banBrowser && (v.changeBrowser = !0),
                        v.is_review && (t.status = 60),
                        t.status < 60) {
                        v.outdate = !0;
                        var d = {
                            name: "__onVxmlStatusError",
                            src: ""
                        };
                        q.getUrlStatus(d)
                    }
                    if ("function" == typeof canToggleSpeed && (v.hlsIndex_15x || v.hls_15x ? canToggleSpeed(!0) : canToggleSpeed(!1)),
                        "function" == typeof setRatio && setRatio(v.ratio),
                        e) {
                        d = {
                            src: ""
                        };
                        v.domainWhiteBlackError && (d.name = "__onDomainWhiteBlackCheckError"),
                            "true" == t.outflow && (d.name = "__onUserWebSiteOutFlow"),
                            "true" == t.timeoutflow && (d.name = "__onUserWebSiteTimeOut"),
                            q.getUrlStatus(d)
                    }
                    var c = 1;
                    c = 2 === v.languageSetting ? 2 : 1,
                        v.lang && (c = "en" === v.lang ? 2 : 1),
                        2 === c ? q.extend(q.lang, q.enLang) : q.extend(q.lang, q.zh_CN_Lang),
                        q.updatePlayFacade.changeVidStep.playVideo()
                }
            }
            function w(e) {
                e && !1 !== v.audioMode ? (v.aac_switch = !0,
                    v.isChangeVid && "audio" != v.media && "audio" === v.priorityMode && (v.setMode("audio"),
                        v.media = "audio"),
                    "audio" === v.priorityMode && (v.useAudio = !0,
                        v.media = "audio")) : (v.aac_switch = !1,
                            v.isChangeVid && ("video" == v.media || v.forceAudioRotate || (v.setMode("video"),
                                v.media = "video"))),
                    "function" == typeof changeBtnRight && changeBtnRight()
            }
            function _(e) {
                v.teaser || (v.teaser = new window.PlayTeaserControl(v, q)),
                    v.teaser.init(e)
            }
            function S() {
                if (!v.hasVisitor) {
                    var d = !1;
                    q.updateFlowStatus(q.FLOW_STATUS.VISITOR),
                        v.hasVisitor = !0;
                    var c = q("<form />");
                    c.addClass("visitor"),
                        c.css({
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            top: 0,
                            zIndex: 2,
                            color: "white"
                        }),
                        q(".container-main").append(c);
                    var u = q("<div />").addClass("formContainer")
                        , p = q("<div />").addClass("formTip").css("z-index", -1)
                        , e = q("<div />").addClass("inputContainer");
                    q("<div />").addClass("btn-submit").html("提交");
                    c.append(u, p),
                        u.append(e);
                    for (var h = v.userInfoRecord.fields, t = 0; t < h.length; t++) {
                        var n = q("<div />").addClass("form-group fg_" + t)
                            , i = q("<div />").addClass("form-child")
                            , r = q("<div />").html(h[t].name + "  ").css({
                                width: "100%"
                            })
                            , o = q("<div />").addClass("btn-visitor-pre").html(q.lang.userInfo.prev);
                        if (t == h.length - 1)
                            var a = q("<div />").addClass("btn-visitor-next btn-submit").html(q.lang.userInfo.submit);
                        else
                            a = q("<div />").addClass("btn-visitor-next").html(q.lang.userInfo.next);
                        if ("area" == h[t].type)
                            var s = q("<textarea />").addClass("input-vistor u_" + t).css({
                                "overflow-y": "auto",
                                width: "100%",
                                height: "100px"
                            });
                        else {
                            s = q("<input />").addClass("input-vistor u_" + t).css({
                                width: "100%",
                                height: "40px",
                                "font-size": "14px"
                            });
                            var l = x(h[t].name);
                            "" != l && s.attr("type", l)
                        }
                        h[t].msg && "" != h[t].msg && s.attr("placeholder", h[t].msg),
                            n.appendTo(e),
                            n.append(i),
                            n.append(o, a),
                            i.append(r, s)
                    }
                    q(".fg_0").css("display", "block"),
                        v.userInfoIndex = 0,
                        q(".btn-visitor-pre").bind("click", function () {
                            v.userInfoIndex--,
                                v.userInfoIndex < 0 && (v.userInfoIndex = 0),
                                f()
                        }),
                        q(".btn-visitor-next").bind("click", function () {
                            v.userInfoIndex++,
                                v.userInfoIndex > v.userInfoRecord.fields.length - 1 && (v.userInfoIndex = v.userInfoRecord.fields.length - 1),
                                f()
                        });
                    var f = function () {
                        0 == v.userInfoIndex ? (q(".btn-visitor-pre").css("background-color", "#abaaab"),
                            q(".btn-submit").css("display", "none")) : v.userInfoIndex == v.userInfoRecord.fields.length - 1 ? (q(".btn-visitor-pre").css("background-color", "#138ad0"),
                                q(".btn-submit").css("display", "inline-block")) : (q(".btn-visitor-pre").css("background-color", "#138ad0"),
                                    q(".btn-submit").css("display", "none"));
                        for (var e = 0; e < v.userInfoRecord.fields.length; e++)
                            e == v.userInfoIndex ? q(".fg_" + e).css("display", "block") : q(".fg_" + e).css("display", "none")
                    };
                    q(".btn-submit").bind("click", function () {
                        for (var e = q.lang.userInfo.feedBack, t = !0, n = !0, i = !0, r = 0; r < h.length; r++) {
                            var o = q(".u_" + r)[0];
                            if ("" == o.value) {
                                e = q.lang.userInfo.submitTip,
                                    t = !1;
                                break
                            }
                            if (!v.banRegexp && "tel" == x(h[r].name)) {
                                if (!/^0?1((3[0-9]{1})|(4[0-9]{1})|(5[0-9]{1})|(8[0-9]{1})){1}[0-9]{8}$/.test(o.value)) {
                                    e = q.lang.userInfo.unCorrectPhone,
                                        n = !1;
                                    break
                                }
                            }
                            if (!v.banRegexp && "email" == x(h[r].name)) {
                                if (!/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(o.value)) {
                                    e = q.lang.userInfo.unCorrectMail,
                                        i = !1;
                                    break
                                }
                            }
                            v.userInfoRecord.fields[r].value = o.value,
                                v.userInfoRecord.fields[r].type = "input"
                        }
                        if (t && n && i) {
                            u.css("display", "none");
                            var a = {
                                vid: v.vid,
                                id: String(v.userInfoRecord.qid),
                                userhref: String(q.href),
                                autokey: String(v.userInfoRecord.autokey),
                                title: String(v.userInfoRecord.title),
                                time: v.userInfoShowTime,
                                img: String(v.userInfoRecord.imagelink),
                                link: String(v.userInfoRecord.link),
                                field: v.userInfoRecord.fields
                            }
                                , s = {
                                    data: JSON.stringify(a)
                                };
                            q.ajax({
                                type: "POST",
                                url: "//v.polyv.net/uc/quserInfoRecord/addInfo",
                                data: s
                            }),
                                p.html(decodeURIComponent(e)).addClass("visitorTips"),
                                d = !0,
                                function l(e, t) {
                                    q.isWeixin() ? (q.setCookie(e, t, 365),
                                        q.getCookie(e) || (q.delLastCookie(),
                                            q.setCookie(e, t, 365))) : localStorage[e] = t
                                }("autokey" + v.userInfoRecord.autokey, !0)
                        } else
                            p.html(decodeURIComponent(e)).addClass("visitorTips").css("z-index", 2);
                        p.bind("webkitAnimationEnd", function () {
                            p.removeClass("visitorTips").css("z-index", -1),
                                d && (c.remove(),
                                    v.visitorPass = !0,
                                    v.j2s_resumeVideo(),
                                    q.isAndroid() && q.updatePlayFacade.startPreAd(v.div, v.video))
                        })
                    })
                }
            }
            function x(e) {
                var t = "";
                return (-1 < e.indexOf("电话") || -1 < e.indexOf("手机") || -1 < e.indexOf("phone")) && (t = "tel"),
                    (-1 < e.indexOf("邮箱") || -1 < e.indexOf("mail")) && (t = "email"),
                    t
            }
            function T(e) {
                return q.isWeixin() ? q.getCookie(e) : localStorage[e]
            }
            function j(e, r) {
                !function s() {
                    if (1 <= v.logoloca && (-1 != v.logo_url.indexOf("http") || -1 != v.logo_url.indexOf("https"))) {
                        var e = {
                            logoloca: v.logoloca,
                            logoUrl: v.logo_url,
                            logoLocation: v.logo_location,
                            logoDiaph: v.logo_diaph,
                            logoWidth: v.logo_width,
                            logoHeight: v.logo_height
                        };
                        "function" == typeof addLogo && addLogo(!0, e, v.changeLogoOffset, v.logoOffset)
                    } else
                        "function" == typeof addLogo && addLogo(!1)
                }(),
                    v.playVideoControl || (v.videoControl = new window.PlayVideoControl(v, q)),
                    v.videoControl && (v.arrangeVideoSrc = P,
                        v.sendMsg = L,
                        v.setVideoSrc = m,
                        v.showErrorBg = z,
                        v.sendQos = V,
                        v.videoControl.startErrorMonitor()),
                    q.updateFlowStatus(q.FLOW_STATUS.PLAY),
                    v.emit && v.emit(q.FLOW_STATUS.PLAY),
                    q.playAdControl.removeAd(),
                    q.isStartPlay = !0;
                var t = new Date;
                v.firstToPlayTime = t.getTime();
                var o = q(r)
                    , n = v.first_image;
                v.flashvars.loading_bg_img && (n = v.flashvars.loading_bg_img),
                    0 < v.loading_bg_img.length && (n = v.loading_bg_img),
                    A(),
                    r.preload = "auto",
                    "true" != v.hidecontrol || (v.hidecontrol,
                        undefined);
                var i = v.flashvars.ban_seek_by_limit_time;
                i && "on" == i && r.hasAttribute("controls") && r.removeAttribute("controls"),
                    r.id = v.vid,
                    !0 === v.useMute && (r.mute = !0),
                    v.stay_duration = 0,
                    !1 !== v.poster && (r.poster = n,
                        /http|https/.test(v.poster) && (q(".loading").css("z-index", 0),
                            r.poster = v.poster)),
                    o.css({
                        "background-size": 100 * v.playerWidth + "%",
                        "background-repeat": "no-repeat",
                        "background-position": "center",
                        width: v.width,
                        height: v.height
                    }),
                    q(e).css("background-image", ""),
                    q.displayVideo(v, o, !0),
                    v.audioBack && (v.polyvObjectdiv.css({
                        background: 'url("//player.polyv.net/script/images/icon-audio.png") center center /cover no-repeat'
                    }),
                        v.beta && v.polyvObjectdiv.css({
                            background: 'url("./images/icon-audio.png") center center /cover no-repeat'
                        }));
                var a = !1;
                v.isChangeVid && (a = v.isChangeVid);
                P(function (e) {
                    (!0 !== v.preload || 0 != v.teaser_show && !0 !== v.ban_teaser || v.isPreAd) && m(e),
                        a && m(e),
                        a && v.recordPlaybackRate && 1 !== v.recordPlaybackRate && (r.playbackRate = v.recordPlaybackRate,
                            "function" == typeof hightLightRate && hightLightRate(q.optionsArr.indexOf(v.recordPlaybackRate))),
                        "audio" == v.video && r.load(),
                        q.plvPlayVideo(r),
                        v.stopAutoAfterChange && r.pause()
                });
                clearInterval(v.videoErrorTimer),
                    v.videoErrorTimer = setInterval(function (e) {
                        if (null != o[0].error) {
                            switch (v.sourceType) {
                                case "hlsIndex":
                                    v.enable_switch.hlsIndex[1] = !1;
                                    break;
                                case "hls":
                                    for (var t = 0; t < v.enable_switch.hls.length; t++)
                                        -1 != r.src.indexOf(v.enable_switch.hls[t][0]) && (v.enable_switch.hls[t][1] = !1);
                                    break;
                                case "mp4":
                                    for (var n = 0; n < v.enable_switch.mp4.length; n++)
                                        -1 != r.src.indexOf(v.enable_switch.mp4[n][0]) && (v.enable_switch.mp4[n][1] = !1);
                                    break;
                                case "hlsIndex_15x":
                                    v.enable_switch.hlsIndex_15x[1] = !1;
                                    break;
                                case "hls_15x":
                                    for (var i = 0; i < v.enable_switch.hls_15x.length; i++)
                                        -1 != r.src.indexOf(v.enable_switch.hls_15x[i][0]) && (v.enable_switch.hls_15x[i][1] = !1);
                                    break;
                                case "source_url":
                                    v.enable_switch.source_url[1] = !1;
                                    break;
                                case "convert_url":
                                    v.enable_switch.convert_url[1] = !1
                            }
                            "function" == typeof disableHdSelect && disableHdSelect(v.playNum);
                            P(function (e) {
                                if (1 == v.previewMode && (e = ""),
                                    "" == e) {
                                    if (!v.hasSendError && null != o[0].error) {
                                        v.hasSendError = !0;
                                        var t = {};
                                        t.pid = v.pid,
                                            t.uid = v.uid,
                                            t.vid = v.vid,
                                            t.error = "load_video_failure",
                                            t.type = "error",
                                            t.errorType = o[0].error.code,
                                            t.href = q.href,
                                            V(t),
                                            clearInterval(v.videoErrorTimer),
                                            1 == v.seed && (v.ts || v.sign) ? z(q.lang.warn.webVideoFail) : z(q.lang.warn.videoFail);
                                        var n = {
                                            name: "__onStreamPlayFaild"
                                        };
                                        n.src = v.video.src,
                                            n.code = o[0].error.code,
                                            q.getUrlStatus(n)
                                    }
                                } else
                                    v.ts && v.sign ? (v.video = r,
                                        L()) : (m(e),
                                            q.plvPlayVideo(r)),
                                        "function" == typeof showHD && "on" == v.showHd && showHD(v.playNum, v.fileSize)
                            })
                        }
                    }, 1e3),
                    C(),
                    function l() {
                        "function" == typeof showAudioSwitch && (!0 === v.aac_switch ? (showAudioSwitch(!0, v.media),
                            v.hideAudioMode && "function" == typeof hideAudioSwitchBtn && hideAudioSwitchBtn()) : showAudioSwitch(!1))
                    }(),
                    k()
            }
            function k() {
                v.hasNewUi = !0,
                    "function" == typeof showHD && ("on" == v.showHd ? showHD(v.playNum, v.fileSize) : hideHD()),
                    "function" == typeof showLine && ("on" == v.showLine ? showLine(!1, v.cdnTypeArr) : showLine(!0)),
                    "function" == typeof showRate && !1 !== v.speed && "on" == v.showRate && showRate(!1),
                    "on" != v.ban_ui && 1 != v.ban_ui || "function" == typeof hideUI && hideUI(),
                    v.isWaiting = !1,
                    v.seeking = !1,
                    function e() {
                        v.srt || (v.srt = new window.PlaySrtControl(v)),
                            v.srt.init()
                    }(),
                    q.updatePlayFacade.changeVidStep.initData(),
                    v.useVr && q.checkVrDevice() && (q.isIOS() && (1 == v.seed || v.forceHLS) && vrFuc.isIosWechat(),
                        1 == v.seed && vrFuc.init(),
                        q(video).attr({
                            "x5-video-player-type": "h5",
                            "x5-video-player-fullscreen": "true",
                            "x5-video-orientation": "landscape"
                        })),
                    q.isAndroid() && q.isWeixin() && ("h5" == v.x5VideoType && (q(video).attr({
                        "x5-video-player-type": "h5",
                        "x5-video-player-fullscreen": "true",
                        "x5-video-orientation": "portrait"
                    }),
                        v.x5LandScape && q(video).attr({
                            "x5-video-orientation": "landscape"
                        }),
                        video.style["object-position"] = "50% 0px",
                        video.style["background-color"] = "white"),
                        v.useH5Page && q(video).attr({
                            "x5-video-player-type": "h5-page"
                        }))
            }
            function C(e) {
                e || (e = !1);
                var t = v.loading_bg_img || v.first_image;
                "function" == typeof showAudioRotate && (!0 === v.aac_switch && "audio" === v.media || v.forceAudioRotate ? showAudioRotate(!0, t, e) : showAudioRotate(!1))
            }
            function A() {
                if (!0 !== v.hasSortVideo) {
                    for (var e = 0; e < v.fileSize.length; e++)
                        v.fileSize[e] = 1;
                    if (null != v.show_rate)
                        switch (String(v.show_rate)) {
                            case "1":
                                v.fileSize[1] = 0,
                                    v.fileSize[2] = 0,
                                    v.df_num = 1;
                                break;
                            case "2":
                                v.fileSize[2] = 0,
                                    v.df_num = 2
                        }
                    "true" != v.forceHightDf && 1 != v.forceHightDf || (v.df = v.df_num),
                        v.enable_switch = {
                            hlsIndex: [],
                            hls: [],
                            mp4: [],
                            hlsIndex_15x: [],
                            hls_15x: [],
                            source_url: [],
                            convert_url: []
                        },
                        v.enable_switch.hlsIndex = [v.hlsIndex, !0],
                        v.enable_switch.hlsIndex_15x = [v.hlsIndex_15x, !0],
                        v.enable_switch.source_url = [v.play_source_url, !0],
                        v.enable_switch.convert_url = [v.convertHlsUrl, !0],
                        v.ts && v.sign && (v.enable_switch.hlsIndex = ["", !1]);
                    for (var t = 0; t < v.fileSize.length; t++)
                        0 != v.fileSize[t] ? (v.hlstest && (v.hls[t] = v.hls[t].replace("hls", "hlstest")),
                            v.enable_switch.hls.push([v.hls[t], !0]),
                            v.enable_switch.mp4.push([v.mp4[t], !0]),
                            v.hls_15x && v.enable_switch.hls_15x.push([v.hls_15x[t], !0])) : (v.hlstest && (v.hls[t] = v.hls[t].replace("hls", "hlstest")),
                                v.enable_switch.hls.push([v.hls[t], !1]),
                                v.enable_switch.mp4.push([v.mp4[t], !1]),
                                v.hls_15x && v.enable_switch.hls_15x.push([v.hls_15x[t], !1]))
                }
            }
            function P(e, t) {
                var n = "";
                function i(e, t) {
                    e.indexOf("cuplayer") < 0 || "" === e ? t(e = q.concatUrl(e, {
                        pid: v.pid
                    }, !0)) : function n(l, d) {
                        var e = l.split("?")[0].replace(/^http(s)?:\/\/(.*?)\//, "");
                        v.tokenUrl = s + "player.polyv.net/token2/" + e + ".json?" + Math.floor(999999999 * Math.random()),
                            q.getJSON(v.tokenUrl, function (e) {
                                if (200 != e.status)
                                    return l = q.concatUrl(l, {
                                        pid: v.pid
                                    }, !0),
                                        void d(l);
                                var t = v.vid.substring(0, 16);
                                t = function s(e) {
                                    for (var t, n, i = [], r = 0; r < e.length; r++) {
                                        for (t = e.charCodeAt(r),
                                            n = []; n.push(255 & t),
                                            t >>= 8;)
                                            ;
                                        i = i.concat(n.reverse())
                                    }
                                    return i
                                }(t);
                                var n = aesjs.utils.hex.toBytes(e.result)
                                    , i = new aesjs.ModeOfOperation.cbc(t, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
                                    , r = i.decrypt(n)
                                    , o = aesjs.utils.utf8.fromBytes(r)
                                    , a = PovBase64.decode(o)
                                    , e = JSON.parse(a);
                                l = q.concatUrl(l, e),
                                    l = q.concatUrl(l, {
                                        pid: v.pid
                                    }, !0),
                                    d(l)
                            }).fail(function () {
                                l = q.concatUrl(l, {
                                    pid: v.pid
                                }, !0),
                                    d(l)
                            })
                    }(e, t)
                }
                if (v.playNum = 0,
                    v.df = v.df > v.df_num ? v.df_num : v.df,
                    v.useKeepSource) {
                    if (v.enable_switch.source_url[1])
                        return n = O(n = v.enable_switch.source_url[0]),
                            v.sourceType = "source_url",
                            void i(n, e)
                } else if (v.convertHls)
                    v.enable_switch.convert_url[1] && (n = O(n = v.enable_switch.convert_url[0]),
                        v.sourceType = "convert_url");
                else {
                    if (v.aac_link && !1 !== v.audioMode && "audio" == v.media)
                        return n = O(n = v.aac_link),
                            v.sourceType = "aac_url",
                            void i(n, e);
                    if (1.5 == v.playbackrate && (v.hlsIndex_15x || v.hls_15x) && "" == n)
                        if (0 == v.df && v.enable_switch.hlsIndex_15x[1])
                            n = v.enable_switch.hlsIndex_15x[0],
                                v.sourceType = "hlsIndex_15x";
                        else if (v.df = 0 == v.df ? 1 : v.df,
                            v.enable_switch.hls_15x[v.df - 1][1])
                            n = v.enable_switch.hls_15x[v.df - 1][0],
                                v.sourceType = "hls_15x",
                                v.playNum = v.df - 1;
                        else
                            for (var r = 0; r < v.df_num; r++)
                                if (v.enable_switch.hls_15x[r][1]) {
                                    n = v.enable_switch.hls_15x[r][0],
                                        v.sourceType = "hls_15x",
                                        v.playNum = r;
                                    break
                                }
                    if ((1 == v.seed || v.forceHLS) && "" == n)
                        if (0 == v.df && v.enable_switch.hlsIndex[1])
                            n = v.enable_switch.hlsIndex[0],
                                v.sourceType = "hlsIndex";
                        else if (v.df = 0 == v.df ? v.my_br : v.df,
                            v.enable_switch.hls[v.df - 1] != undefined && v.enable_switch.hls[v.df - 1][1])
                            n = v.enable_switch.hls[v.df - 1][0],
                                v.sourceType = "hls",
                                v.playNum = v.df - 1;
                        else
                            for (var o = 0; o < v.df_num; o++)
                                if (v.enable_switch.hls[o][1]) {
                                    n = v.enable_switch.hls[o][0],
                                        v.sourceType = "hls",
                                        v.playNum = o;
                                    break
                                }
                    if ("" != n && !v.useKeepSource) {
                        if (1 == v.previewMode) {
                            var a = v.vid.substring(0, 32);
                            n = n.replace(a, "p_" + a)
                        }
                        "" != v.ts && "" != v.sign && (n = n + "?ts=" + v.ts + "&sign=" + v.sign),
                            v.appId && (n = -1 != n.indexOf("?") ? n + "&appId=" + v.appId : n + "?appId=" + v.appId),
                            v.audit && (n = -1 != n.indexOf("?") ? n + "&audit=" + v.audit : n + "?audit=" + v.audit),
                            n = -1 != n.indexOf("?") ? n + "&pid=" + v.pid : n + "?pid=" + v.pid,
                            v.cdn > v.route.length - 1 && (v.cdn = v.route.length - 1),
                            v.isChangeLine && (n = -1 != n.indexOf("?") ? n + "&route=" + v.route[v.cdn] : n + "?route=" + v.route[v.cdn]),
                            t && (n = -1 != n.indexOf("?") ? n + "&ran=" + Math.floor(999999999 * Math.random()) : n + "?ran=" + Math.floor(999999999 * Math.random()))
                    }
                    if (0 == v.seed && "" == n) {
                        if (v.sourceType = "mp4",
                            v.df = 0 == v.df ? v.my_br : v.df,
                            v.enable_switch.mp4[v.df - 1] != undefined && v.enable_switch.mp4[v.df - 1][1])
                            n = v.enable_switch.mp4[v.df - 1][0],
                                v.playNum = v.df - 1;
                        else
                            for (r = 0; r < v.df_num; r++)
                                if (v.enable_switch.mp4[r][1]) {
                                    n = v.enable_switch.mp4[r][0],
                                        v.playNum = r;
                                    break
                                }
                        return c && (v.enable_switch.mp4[0][1] ? (n = v.enable_switch.mp4[0][0],
                            v.playNum = 0) : n = ""),
                            v.cdn > v.mp4route.length - 1 && (v.cdn = v.mp4route.length - 1),
                            "" != n && 0 != v.cdn && (n = n.replace(v.mp4[0].split("/")[2], v.mp4route[v.cdn])),
                            v.appId && (n = -1 != n.indexOf("?") ? n + "&appId=" + v.appId : n + "?appId=" + v.appId),
                            void i(n, e)
                    }
                    v.useVr && q.checkVrDevice() && -1 != n.indexOf(".m3u8") && (n = n.replace(n.split("/")[2], v.vrdomain))
                }
                return e(n),
                    n
            }
            function O(e) {
                return "" != v.ts && "" != v.sign && (e = e + "?ts=" + v.ts + "&sign=" + v.sign),
                    v.appId && (e = -1 != e.indexOf("?") ? e + "&appId=" + v.appId : e + "?appId=" + v.appId),
                    e = -1 != e.indexOf("?") ? e + "&pid=" + v.pid : e + "?pid=" + v.pid
            }
            function I(t, e) {
                if (v.poster || q("video").removeAttr("poster"),
                    q.recordTime = t.currentTime,
                    v.df = e + 1,
                    v.ts && v.sign)
                    v.video = t,
                        L();
                else
                    P(function (e) {
                        q.hasSetRecordTime = !1,
                            m(e),
                            q.plvPlayVideo(t),
                            v.recordPlaybackRate && 1 !== v.recordPlaybackRate && (t.playbackRate = v.recordPlaybackRate)
                    });
                "function" == typeof highLightHd && highLightHd(v.playNum)
            }
            function E(t) {
                var e = (new Date).getTime()
                    , n = v.vid + e + "polyv"
                    , i = CryptoJS.MD5(n)
                    , r = "";
                r = v.hlstest ? s + "hlstest.videocc.net/event/switch_bitrate?sign=" + i + "&ts=" + e + "&vid=" + v.vid + "&mt=" + v.ts + "&ms=" + v.sign : s + "hls.videocc.net/event/switch_bitrate?sign=" + i + "&ts=" + e + "&vid=" + v.vid + "&mt=" + v.ts + "&ms=" + v.sign,
                    q.ajax({
                        url: r,
                        dataType: "text",
                        success: function (e) {
                            if ("success" == e)
                                P(function (e) {
                                    q.hasSetRecordTime = !1,
                                        m(e),
                                        q.plvPlayVideo(t),
                                        v.recordPlaybackRate && 1 !== v.recordPlaybackRate && (t.playbackRate = v.recordPlaybackRate)
                                })
                        },
                        error: function () { }
                    })
            }
            function L() {
                v.inFrame ? "function" == typeof sendPostMessage && sendPostMessage("onConfirmFrameTS", {
                    ts: v.frameTimeStamp
                }) : v.setMsg(!0)
            }
            function N() {
                var e = "";
                e = -1 < s.indexOf("https") ? "https://api.polyv.net/live/live_status/query?stream=" + v.liveStreamName : "http://api.live.polyv.net/live_status/query?stream=" + v.liveStreamName,
                    q.ajax({
                        url: e,
                        type: "GET",
                        dataType: "jsonp",
                        success: function (e) {
                            e && "function" == typeof updateLiveStatus && updateLiveStatus(e)
                        }
                    })
            }
            function V(e) {
                if (e.vid) {
                    for (var t in v.params)
                        e[t] = v.params[t];
                    v.session_id && (e.session_id = W(v.session_id)),
                        (v.liveVid || v.liveUid) && (e.vid = v.liveUid + v.liveVid + "");
                    new D(e)
                }
            }
            function D(e) {
                var t, n = 0, i = function (e) {
                    q.ajax({
                        type: "GET",
                        url: v.httpHead + "prtas.videocc.net/qos",
                        data: e,
                        success: function () {
                            clearTimeout(t)
                        },
                        error: function () {
                            ++n < 4 && (t = setTimeout(function () {
                                i(e)
                            }, 5e3))
                        }
                    })
                };
                i(e)
            }
            function M() {
                !function i() {
                    -1 == v.validUrl2.indexOf("http:") && -1 == v.validUrl2.indexOf("https:") && "//" != v.validUrl2.substring(0, 2) && ("/" == v.validUrl2.substring(0, 1) ? v.validUrl2 = s + q.domain + v.validUrl2 : v.validUrl2 = s + q.domain + "/" + v.validUrl2);
                    v.validMessage = q.lang.warn.validFail;
                    var e = new Date;
                    v.validUrl2Time = e.getTime() + Math.floor(1e5 * Math.random());
                    var t = {};
                    t.vid = v.vid;
                    t.code = v.code;
                    t.t = v.validUrl2Time;
                    -1 < v.validUrl2.indexOf("?") ? v.validUrl2Sign = v.validUrl2 + "&vid=" + v.vid + "&code=" + v.code + "&t=" + v.validUrl2Time : v.validUrl2Sign = v.validUrl2 + "?vid=" + v.vid + "&code=" + v.code + "&t=" + v.validUrl2Time;
                    var n = {
                        url: v.validUrl2Sign,
                        dataType: "jsonp",
                        success: function (r) {
                            q.extend(t, r);
                            var o = "//v3.polyv.net/uc/services/get/player/sign";
                            q.ajax({
                                url: o,
                                dataType: "jsonp",
                                data: t,
                                success: function (e) {
                                    if (e.sign || e.sign2) {
                                        var t = q.decode(PovBase64.decode(e.sign))
                                            , n = "";
                                        if (e.sign2 && (n = q.decode(PovBase64.decode(e.sign2))),
                                            t == r.sign || n == r.sign) {
                                            switch (r.msg && (v.validMessage = encodeURIComponent(r.msg)),
                                            String(r.status)) {
                                                case "1":
                                                    v.banHdSelect || v.banOverPlay ? (v.banHdSelect = !1,
                                                        v.banOverPlay = !1,
                                                        4 == v.validStatusValue ? (I(video, v.playNum),
                                                            "function" == typeof showLoading && showLoading()) : 5 == v.validStatusValue && v.j2s_resumeVideo()) : q.updatePlayFacade.changeVidStep.valided();
                                                    break;
                                                case "4":
                                                case "5":
                                                    v.banHdSelect ? q.updatePlayFacade.onSwitchHd() : (v.banHdSelect = !0,
                                                        q.updatePlayFacade.changeVidStep.valided()),
                                                        v.isSwitching = !1,
                                                        "5" == String(r.status) && (v.banOverPlay ? q.updatePlayFacade.onOverPlay() : (v.banOverPlay = !0,
                                                            q.updatePlayFacade.changeVidStep.valided()));
                                                    break;
                                                default:
                                                    v.errorCode = "013.06",
                                                        z(v.validMessage);
                                                    var i = {
                                                        src: "",
                                                        name: "__onVerificationBan"
                                                    };
                                                    q.getUrlStatus(i)
                                            }
                                            v.isSwitching = !1,
                                                v.isResumeing = !1
                                        } else {
                                            v.errorCode = "013.05",
                                                z(q.lang.warn.validFail);
                                            var i = {};
                                            i.src = o,
                                                i.name = "__onVerificationSignError",
                                                q.getUrlStatus(i)
                                        }
                                    } else {
                                        v.errorCode = "013.04",
                                            z(q.lang.warn.validFail);
                                        var i = {
                                            src: "",
                                            sign: !1,
                                            name: "__onVerificationSignError"
                                        };
                                        q.getUrlStatus(i)
                                    }
                                },
                                error: function () {
                                    v.errorCode = "013.03",
                                        z(q.lang.warn.validFail);
                                    var e = {};
                                    e.src = o,
                                        e.name = "__onVerificationSignError",
                                        q.getUrlStatus(e)
                                }
                            })
                        },
                        error: function () {
                            if (!v.validUrl2Used && 0 < v.validUrl2Backup.length)
                                v.validUrl2Used = !0,
                                    v.validUrl2 = v.validUrl2Backup,
                                    i();
                            else {
                                v.errorCode = "013.02",
                                    z(q.lang.warn.validFail);
                                var e = {};
                                e.src = v.validUrl2,
                                    e.name = "__onVerificationError",
                                    q.getUrlStatus(e)
                            }
                        }
                    };
                    v.validHead ? (n.headers = v.validHead,
                        q.ajax(n)) : (n.callbackParameter = "callback",
                            q.jsonp(n))
                }()
            }
            function F() {
                v.isChangeVid ? "true" != v.usepassword || 1 == v.banpassword ? v.passwordTyping ? (v.isStartPlay || (v.ban_teaser = !0,
                    q.updatePlayFacade.startPlay()),
                    "function" == typeof addPassword && addPassword(!1)) : _(0) : (v.j2s_pauseVideo(),
                        H()) : "true" != v.usepassword || 1 == v.banpassword ? q.updatePlayFacade.startPlay() : H()
            }
            function H() {
                v.passwordTyping = !0,
                    "function" == typeof s2j_onPlayerInitOver && "off" == v.hasSendInitOver && (v.hasSendInitOver = "on",
                        s2j_onPlayerInitOver()),
                    "function" == typeof addPassword && addPassword(!0)
            }
            function R() {
                v.video.addEventListener("canplay", function () {
                    "function" == typeof s2j_onVideoCanPlay && s2j_onVideoCanPlay(),
                        v.s2j_onVideoCanPlay && v.s2j_onVideoCanPlay()
                }),
                    v.video.addEventListener("playing", function () {
                        var e = !1;
                        if (q.flowStatus == q.FLOW_STATUS.PLAY) {
                            if (q.updatePlayFacade.startCountTimer(),
                                0 < v.firstToPlayTime && !v.hasSendLoadingStat) {
                                var t = new Date;
                                v.hasSendLoadingStat = !0;
                                var n = {};
                                n.pid = v.pid,
                                    n.uid = v.uid,
                                    n.vid = v.vid,
                                    n.time = t.getTime() - v.firstToPlayTime,
                                    n.type = "loading",
                                    n.href = q.href,
                                    n.pn = "MobileVodHTML5",
                                    n.pv = q.buildMetaData.split("+")[1] + "_VM",
                                    V(n),
                                    1 == v.previewMode && ("function" != typeof changeDuration || "hlsIndex" != v.sourceType && "hls" != v.sourceType || ("NaN" != video.duration && video.duration != Infinity && 1 < video.duration && (v.previewlong = video.duration,
                                        delete v.watchEndTime),
                                        changeDuration())),
                                    (0 < v.start || 0 < v.end) && (changeDuration(),
                                        0 < v.start && changeDuration(v.start)),
                                    0 < v.title.length && "function" == typeof changeTitle && changeTitle(v.title),
                                    q.updatePlayFacade.onPlayStart(),
                                    q.updatePlayFacade.onPlay(),
                                    e = !0,
                                    "undefined" != typeof vrFuc && vrFuc.start()
                            }
                            v.url && "function" == typeof s2j_onUrlPlay && (v.duration = v.video.duration,
                                s2j_onUrlPlay(v.duration)),
                                "off" == v.isClickPlayButton && q("#playbutton").remove(),
                                q(v.video).css("width", "100%")
                        } else
                            q.flowStatus == q.FLOW_STATUS.OVER && v.j2s_replay();
                        e || q.updatePlayFacade.onPlay(),
                            "function" == typeof showBuffering && showBuffering(!1),
                            v.isWaiting = !1,
                            v.over && v.over.destroy()
                    }),
                    v.video.addEventListener("pause", function () {
                        q.updatePlayFacade.stopCountTimer(),
                            v.s2j_onVideoPause && v.s2j_onVideoPause(),
                            "function" == typeof s2j_onVideoPause && s2j_onVideoPause(v.vid),
                            q.startDanmu && q.cmManager.stopTimer()
                    });
                var n = 0;
                v.watchStartTime = "undefined" == typeof v.watchStartTime ? v.flashvars.watchStartTime : v.watchStartTime,
                    v.watchStartTime || (v.watchStartTime = v.watch_start_time,
                        v.isAudioModeSwitch && (v.watch_start_time = 0,
                            v.isAudioModeSwitch = !1)),
                    v.video.addEventListener("ended", function () {
                        q.flowStatus == q.FLOW_STATUS.PREAD ? v.adIndex == v.preAd.length - 1 && q.updatePlayFacade.preAdComplete() : q.flowStatus !== q.FLOW_STATUS.PLAY && q.flowStatus !== q.FLOW_STATUS.PAUSE || q.updatePlayFacade.onEnd()
                    }),
                    v.video.addEventListener("loadedmetadata", function () { }),
                    v.watchEndTime = "undefined" == typeof v.watchEndTime ? v.flashvars.watchEndTime : v.watchEndTime,
                    v.watchEndTime || (v.watchEndTime = v.watch_end_time),
                    v.previewMode && (v.watchEndTime = v.previewlong);
                var i = -1
                    , r = !1;
                v.video.addEventListener("timeupdate", function () {
                    var e, t;
                    n = v.video.currentTime,
                        e = n,
                        t = v.video.duration,
                        e <= 5 && (isCompletePlay = !0,
                            r = !1),
                        t - e <= 5 && isCompletePlay && !r && (r = !0,
                            v.s2j_playCompletely && v.s2j_playCompletely()),
                        v.watchEndTime && v.video.currentTime > v.watchEndTime && v.j2s_stopVideo(),
                        0 < v.end && v.video.currentTime > v.end && v.j2s_stopVideo(),
                        q.flowStatus != q.FLOW_STATUS.PLAY && q.flowStatus != q.FLOW_STATUS.PAUSE && q.flowStatus != q.FLOW_STATUS.VISITOR || (v.s2j_onTimeUpdate && v.s2j_onTimeUpdate(),
                            0 < v.start && v.video.currentTime < v.start - .5 && .1 <= v.video.currentTime && (v.video.currentTime = v.start),
                            !v.isSendOnPlay && .5 < v.video.currentTime && (v.isSendOnPlay = !0,
                                "function" == typeof s2j_onVodVideoPlay && s2j_onVodVideoPlay(),
                                v.s2j_onVodVideoPlay && v.s2j_onVodVideoPlay()),
                            q.startDanmu && q.cmManager.time(Math.floor(1e3 * v.polyvObjectvideo[0].currentTime)),
                            v.watchStartTime && 0 != v.watchStartTime && .1 <= v.video.currentTime && (v.video.currentTime = v.watchStartTime,
                                v.watchStartTime = 0),
                            v.srt && v.srt.time(v.polyvObjectvideo[0].currentTime),
                            v.banOverPlay && video.currentTime >= v.previewlong && 1e3 <= (new Date).getTime() - i && (i = (new Date).getTime(),
                                v.j2s_pauseVideo(),
                                v.overPlayType = "play",
                                v.overPlaySec = 0,
                                q.updatePlayFacade.onOverPlay()),
                            q.isIOS() && v.userInfoRecord && (!T("autokey" + v.userInfoRecord.autokey) || v.forceUserInfo) && v.hasUserInfoRecord && !v.banVisitorInfo && !v.visitorPass && v.video.currentTime > v.userInfoShowTime && (v.video.pause(),
                                S())),
                        !q.hasSetRecordTime && 1 < q.recordTime && .2 < n && q.isAndroid() && (q.hasSetRecordTime = !0,
                            video.currentTime = q.recordTime)
                }),
                    v.video.addEventListener("seeking", function () {
                        isCompletePlay = !1,
                            v.seeking = !0,
                            v.s2j_onVideoSeeking && v.s2j_onVideoSeeking(),
                            q.startDanmu && q.cmManager.clear()
                    }),
                    v.video.addEventListener("seeked", function () {
                        v.seeking = !1,
                            q.isUnderAndroid6() && E(v.video),
                            v.s2j_onVideoSeeked && v.s2j_onVideoSeeked()
                    }),
                    v.video.addEventListener("progress", function () {
                        v.s2j_onProgressUpdate && v.s2j_onProgressUpdate()
                    }),
                    v.video.addEventListener("waiting", function () {
                        v.recordWaitingTime = v.video.currentTime;
                        var e = new Date;
                        v.recordWaitingMTime = e.getTime(),
                            !v.isWaiting && !v.seeking && 0 < v.video.currentTime && (v.waitingTimer && clearInterval(v.waitingTimer),
                                v.waitingTimer = setInterval(function () {
                                    !function r(e) {
                                        if (e.currentTime > v.recordWaitingTime && !v.hasSendSecondBuffer) {
                                            v.hasSendSecondBuffer = !0;
                                            var t = new Date
                                                , n = t.getTime() - v.recordWaitingMTime
                                                , i = {};
                                            i.pid = v.pid,
                                                i.uid = v.uid,
                                                i.vid = v.vid,
                                                i.time = n,
                                                i.type = "buffer",
                                                i.href = q.href,
                                                i.domain = q.domain,
                                                V(i),
                                                clearInterval(v.waitingTimer)
                                        }
                                    }(v.video)
                                }, 500),
                                "function" == typeof showBuffering && showBuffering(!0)),
                            "function" == typeof onbuffer && onbuffer()
                    });
                var e = q.getSamePlayerFullExit();
                v.video.addEventListener(e[0], function () {
                    v.video.style["object-position"] = "50% 0px",
                        "function" == typeof x5Full && x5Full()
                }),
                    v.video.addEventListener(e[1], function () {
                        v.video.style["object-position"] = "50% 50%",
                            "function" == typeof x5Exit && x5Exit()
                    })
            }
            function B(e, t, n) {
                A();
                P(function (e) {
                    n.src = e
                });
                "" == n.poster && (n.poster = v.first_image),
                    t.remove(),
                    function r(e, t) {
                        var n;
                        if ("video" == e)
                            n = v.video = document.createElement("video"),
                                v.newVideo = !0,
                                v.polyvObjectvideo = polyvObjectvideo = q(n),
                                polyvObjectvideo.css({
                                    height: "100%"
                                }),
                                q.displayVideo(v, polyvObjectvideo, !1),
                                q("#plv_container").append(polyvObjectvideo),
                                polyvObjectvideo.slideDown(300);
                        else {
                            n = v.video = document.createElement("audio"),
                                v.polyvObjectvideo = polyvObjectvideo = q(n);
                            var i = q("<div />");
                            i.css({
                                background: 'url("//live.polyv.cn/assets/wimages/audio-bg.png") no-repeat',
                                "background-size": "cover",
                                "background-position": "center center",
                                width: "100%",
                                height: "100%"
                            }).attr("id", "audio"),
                                i.append(v.polyvObjectvideo),
                                i.css("display", "none"),
                                q("#plv_container").append(i),
                                i.slideDown(300)
                        }
                        polyvObjectvideo.attr("webkit-playsinline", ""),
                            polyvObjectvideo.attr("playsinline", ""),
                            polyvObjectvideo.attr("x-webkit-airplay", "true"),
                            polyvObjectvideo.attr("controlslist", "nodownload"),
                            polyvObjectvideo.attr("id", v.vid),
                            polyvObjectvideo.css("width", "100%"),
                            polyvObjectvideo.css("height", "100%"),
                            v.loop && polyvObjectvideo.attr("loop", "");
                        "audio" == e && polyvObjectvideo.css({
                            width: 0,
                            height: 0
                        });
                        n.autoplay = t.auto,
                            n.poster = t.post,
                            n.preload = t.pre,
                            n.controls = t.con,
                            m(t.src),
                            v.autoplay || n.pause();
                        v.openDanMu || 1 != v.hasControl || ("video" == e ? (unbindControlsTouch(q(".plvideo")),
                            unbindControlsTouch(polyvObjectvideo),
                            bindControlsTouch(polyvObjectvideo, !1)) : (unbindControlsTouch(q(".plvideo")),
                                bindControlsTouch(q(".plvideo"), !1)));
                        R(),
                            "function" == typeof switchMedia && switchMedia()
                    }(e, n)
            }
            function U(e, t, n) {
                function i() {
                    "" == n.poster && (n.poster = v.first_image),
                        t.remove(),
                        function r(e, t) {
                            var n;
                            if ("video" == e)
                                n = v.video = document.createElement("video"),
                                    v.newVideo = !0,
                                    v.polyvObjectvideo = polyvObjectvideo = q(n),
                                    polyvObjectvideo.css({
                                        height: "100%"
                                    }),
                                    q("#plv_container").empty(),
                                    q("#plv_container").append(polyvObjectvideo),
                                    polyvObjectvideo.slideDown(300);
                            else {
                                n = v.video = document.createElement("audio"),
                                    v.polyvObjectvideo = polyvObjectvideo = q(n);
                                var i = q("<div />");
                                i.css({
                                    width: "100%",
                                    height: "100%"
                                }).attr("id", "audio"),
                                    i.append(v.polyvObjectvideo),
                                    q("#plv_container").empty(),
                                    q("#plv_container").append(i),
                                    C(!0)
                            }
                            polyvObjectvideo.attr("webkit-playsinline", ""),
                                polyvObjectvideo.attr("playsinline", ""),
                                polyvObjectvideo.attr("x-webkit-airplay", "true"),
                                polyvObjectvideo.attr("id", v.vid),
                                polyvObjectvideo.css("width", "100%"),
                                polyvObjectvideo.css("height", "100%"),
                                v.loop && polyvObjectvideo.attr("loop", "");
                            "audio" == e && polyvObjectvideo.css({
                                width: 0,
                                height: 0
                            });
                            n.autoplay = t.auto,
                                n.poster = t.post,
                                n.preload = t.pre,
                                n.controls = t.con,
                                v.isChangeVid && (n.poster = "");
                            m(t.src),
                                v.autoplay || n.pause();
                            v.openDanMu || 1 != v.hasControl || ("video" == e ? (unbindControlsTouch(q(".plvideo")),
                                unbindControlsTouch(polyvObjectvideo),
                                bindControlsTouch(polyvObjectvideo, !1)) : (unbindControlsTouch(q(".plvideo")),
                                    bindControlsTouch(q(".plvideo"), !1)));
                            R(),
                                "function" == typeof switchMedia && switchMedia()
                        }(e, n)
                }
                if ("" == n.src) {
                    A();
                    var r = !1;
                    if (q.isAndroid() && (r = !0),
                        v.ts && v.sign)
                        L(),
                            i();
                    else
                        P(function (e) {
                            n.src = e,
                                i()
                        }, r)
                } else
                    i()
            }
            function W(e) {
                return PovBase64.encodeURI(e)
            }
            function z(e) {
                var t = q("#plv_container").attr("style");
                v.ban_subPage ? l.children("#plv_container").remove() : q("#plv_container").remove();
                var n = q("<div/>");
                n.addClass("error"),
                    n.css({
                        color: "white",
                        "letter-spacing": "1px"
                    });
                var i = q("<img/>")
                    , r = "//player.polyv.net/script/images/icon.png";
                if ("on" != d.beta_test && "on" != d.beta || (r = "./images/icon.png"),
                    i.attr("src", r),
                    i.css({
                        width: "80px",
                        height: "80px"
                    }),
                    e) {
                    (o = q("<span/>").css({
                        display: "block",
                        padding: "10px 6px 2px 6px"
                    })).html(decodeURIComponent(e)),
                        -1 < v.errorCode.indexOf("013") && o.html(decodeURIComponent(e) + "</br>#" + v.errorCode),
                        n.append(i, o)
                } else {
                    var o = q("<span/>").css({
                        display: "block",
                        padding: "10px 6px 2px 6px"
                    });
                    "001" == v.errorCode || "002" == v.errorCode || "004" == v.errorCode || "005" == v.errorCode || "006" == v.errorCode ? o.html(decodeURIComponent(q.lang.warn.error) + "</br>#" + v.errorCode) : "009" == v.errorCode || "010" == v.errorCode ? o.html(decodeURIComponent(q.lang.warn.error3) + "</br>#" + v.errorCode) : "048" == v.errorCode ? o.html(decodeURIComponent(q.lang.warn.stateAbnormal) + "</br>#" + v.errorCode) : o.html(decodeURIComponent(q.lang.warn.error2) + "</br>#" + v.errorCode);
                    var a = q("<span/>").css({
                        display: "block",
                        fontSize: "13px",
                        padding: "6px"
                    });
                    n.append(i, o, a)
                }
                if (v.ban_subPage) {
                    var s = q("<div />").attr("style", t);
                    s.css({
                        display: "table",
                        backgroundColor: "#212121"
                    }),
                        s.append(n),
                        l.append(s),
                        n.css({
                            display: "table-cell",
                            "text-align": "center",
                            "vertical-align": "middle",
                            "font-family": "微软雅黑"
                        }),
                        n.find("p").attr("style", "font-size:14px !important")
                } else
                    l.append(n),
                        l.css("display", "table");
                q.updateFlowStatus(q.FLOW_STATUS.ERROR)
            }
            q.Flash.renderInstallGif()
        }
        ,
        q.fn.previewPlayer = createPreviewPlayer,
        q.fn.videoPlayer = createPlayer,
        q.fn.showPlayer = createShowPlayer,
        q.fn.createPurePlayer = function (e) {
            if (q.isIOS() && q("head").append(q.getIosCss()),
                34 < e.vid.length && (e.vid = q.decode(e.vid)),
                self != top)
                return e.inFrame = !0,
                    privateCreate(this, e)
        }
        ,
        q.createH5Player = function (e, t, n) {
            return 0 == t.height && (t.height = parseInt(9 * e.width() / 16)),
                e.children().remove(),
                polyvPlayer({
                    wrap: e[0],
                    width: t.width,
                    height: t.height,
                    vid: t.vid,
                    autoplay: t.autoplay,
                    playsafe: t.playsafe,
                    options: t
                })
        }
}(polyvObject);
