function Bw(e, t) {
	for (var r = 0; r < t.length; r++) {
		const n = t[r];
		if (typeof n != 'string' && !Array.isArray(n)) {
			for (const o in n)
				if (o !== 'default' && !(o in e)) {
					const i = Object.getOwnPropertyDescriptor(n, o);
					i &&
						Object.defineProperty(
							e,
							o,
							i.get ? i : { enumerable: !0, get: () => n[o] }
						);
				}
		}
	}
	return Object.freeze(
		Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
	);
}
(function () {
	const t = document.createElement('link').relList;
	if (t && t.supports && t.supports('modulepreload')) return;
	for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
	new MutationObserver((o) => {
		for (const i of o)
			if (i.type === 'childList')
				for (const a of i.addedNodes)
					a.tagName === 'LINK' && a.rel === 'modulepreload' && n(a);
	}).observe(document, { childList: !0, subtree: !0 });
	function r(o) {
		const i = {};
		return (
			o.integrity && (i.integrity = o.integrity),
			o.referrerpolicy && (i.referrerPolicy = o.referrerpolicy),
			o.crossorigin === 'use-credentials'
				? (i.credentials = 'include')
				: o.crossorigin === 'anonymous'
				? (i.credentials = 'omit')
				: (i.credentials = 'same-origin'),
			i
		);
	}
	function n(o) {
		if (o.ep) return;
		o.ep = !0;
		const i = r(o);
		fetch(o.href, i);
	}
})();
var ei =
	typeof globalThis < 'u'
		? globalThis
		: typeof window < 'u'
		? window
		: typeof global < 'u'
		? global
		: typeof self < 'u'
		? self
		: {};
function Pf(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
		? e.default
		: e;
}
var Ai = {},
	Dw = {
		get exports() {
			return Ai;
		},
		set exports(e) {
			Ai = e;
		}
	},
	_l = {},
	C = {},
	Fw = {
		get exports() {
			return C;
		},
		set exports(e) {
			C = e;
		}
	},
	G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var la = Symbol.for('react.element'),
	Nw = Symbol.for('react.portal'),
	Vw = Symbol.for('react.fragment'),
	jw = Symbol.for('react.strict_mode'),
	Uw = Symbol.for('react.profiler'),
	Ww = Symbol.for('react.provider'),
	Hw = Symbol.for('react.context'),
	Gw = Symbol.for('react.forward_ref'),
	qw = Symbol.for('react.suspense'),
	Kw = Symbol.for('react.memo'),
	Yw = Symbol.for('react.lazy'),
	Nh = Symbol.iterator;
function Xw(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (Nh && e[Nh]) || e['@@iterator']),
		  typeof e == 'function' ? e : null);
}
var Rv = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {}
	},
	Av = Object.assign,
	zv = {};
function Ao(e, t, r) {
	(this.props = e),
		(this.context = t),
		(this.refs = zv),
		(this.updater = r || Rv);
}
Ao.prototype.isReactComponent = {};
Ao.prototype.setState = function (e, t) {
	if (typeof e != 'object' && typeof e != 'function' && e != null)
		throw Error(
			'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
		);
	this.updater.enqueueSetState(this, e, t, 'setState');
};
Ao.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Mv() {}
Mv.prototype = Ao.prototype;
function $f(e, t, r) {
	(this.props = e),
		(this.context = t),
		(this.refs = zv),
		(this.updater = r || Rv);
}
var Rf = ($f.prototype = new Mv());
Rf.constructor = $f;
Av(Rf, Ao.prototype);
Rf.isPureReactComponent = !0;
var Vh = Array.isArray,
	Lv = Object.prototype.hasOwnProperty,
	Af = { current: null },
	Ov = { key: !0, ref: !0, __self: !0, __source: !0 };
function Iv(e, t, r) {
	var n,
		o = {},
		i = null,
		a = null;
	if (t != null)
		for (n in (t.ref !== void 0 && (a = t.ref),
		t.key !== void 0 && (i = '' + t.key),
		t))
			Lv.call(t, n) && !Ov.hasOwnProperty(n) && (o[n] = t[n]);
	var s = arguments.length - 2;
	if (s === 1) o.children = r;
	else if (1 < s) {
		for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
		o.children = l;
	}
	if (e && e.defaultProps)
		for (n in ((s = e.defaultProps), s)) o[n] === void 0 && (o[n] = s[n]);
	return {
		$$typeof: la,
		type: e,
		key: i,
		ref: a,
		props: o,
		_owner: Af.current
	};
}
function Qw(e, t) {
	return {
		$$typeof: la,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner
	};
}
function zf(e) {
	return typeof e == 'object' && e !== null && e.$$typeof === la;
}
function Zw(e) {
	var t = { '=': '=0', ':': '=2' };
	return (
		'$' +
		e.replace(/[=:]/g, function (r) {
			return t[r];
		})
	);
}
var jh = /\/+/g;
function zu(e, t) {
	return typeof e == 'object' && e !== null && e.key != null
		? Zw('' + e.key)
		: t.toString(36);
}
function ss(e, t, r, n, o) {
	var i = typeof e;
	(i === 'undefined' || i === 'boolean') && (e = null);
	var a = !1;
	if (e === null) a = !0;
	else
		switch (i) {
			case 'string':
			case 'number':
				a = !0;
				break;
			case 'object':
				switch (e.$$typeof) {
					case la:
					case Nw:
						a = !0;
				}
		}
	if (a)
		return (
			(a = e),
			(o = o(a)),
			(e = n === '' ? '.' + zu(a, 0) : n),
			Vh(o)
				? ((r = ''),
				  e != null && (r = e.replace(jh, '$&/') + '/'),
				  ss(o, t, r, '', function (u) {
						return u;
				  }))
				: o != null &&
				  (zf(o) &&
						(o = Qw(
							o,
							r +
								(!o.key || (a && a.key === o.key)
									? ''
									: ('' + o.key).replace(jh, '$&/') + '/') +
								e
						)),
				  t.push(o)),
			1
		);
	if (((a = 0), (n = n === '' ? '.' : n + ':'), Vh(e)))
		for (var s = 0; s < e.length; s++) {
			i = e[s];
			var l = n + zu(i, s);
			a += ss(i, t, r, l, o);
		}
	else if (((l = Xw(e)), typeof l == 'function'))
		for (e = l.call(e), s = 0; !(i = e.next()).done; )
			(i = i.value), (l = n + zu(i, s++)), (a += ss(i, t, r, l, o));
	else if (i === 'object')
		throw (
			((t = String(e)),
			Error(
				'Objects are not valid as a React child (found: ' +
					(t === '[object Object]'
						? 'object with keys {' + Object.keys(e).join(', ') + '}'
						: t) +
					'). If you meant to render a collection of children, use an array instead.'
			))
		);
	return a;
}
function Aa(e, t, r) {
	if (e == null) return e;
	var n = [],
		o = 0;
	return (
		ss(e, n, '', '', function (i) {
			return t.call(r, i, o++);
		}),
		n
	);
}
function Jw(e) {
	if (e._status === -1) {
		var t = e._result;
		(t = t()),
			t.then(
				function (r) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 1), (e._result = r));
				},
				function (r) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 2), (e._result = r));
				}
			),
			e._status === -1 && ((e._status = 0), (e._result = t));
	}
	if (e._status === 1) return e._result.default;
	throw e._result;
}
var Ze = { current: null },
	ls = { transition: null },
	ek = {
		ReactCurrentDispatcher: Ze,
		ReactCurrentBatchConfig: ls,
		ReactCurrentOwner: Af
	};
G.Children = {
	map: Aa,
	forEach: function (e, t, r) {
		Aa(
			e,
			function () {
				t.apply(this, arguments);
			},
			r
		);
	},
	count: function (e) {
		var t = 0;
		return (
			Aa(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			Aa(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!zf(e))
			throw Error(
				'React.Children.only expected to receive a single React element child.'
			);
		return e;
	}
};
G.Component = Ao;
G.Fragment = Vw;
G.Profiler = Uw;
G.PureComponent = $f;
G.StrictMode = jw;
G.Suspense = qw;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ek;
G.cloneElement = function (e, t, r) {
	if (e == null)
		throw Error(
			'React.cloneElement(...): The argument must be a React element, but you passed ' +
				e +
				'.'
		);
	var n = Av({}, e.props),
		o = e.key,
		i = e.ref,
		a = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((i = t.ref), (a = Af.current)),
			t.key !== void 0 && (o = '' + t.key),
			e.type && e.type.defaultProps)
		)
			var s = e.type.defaultProps;
		for (l in t)
			Lv.call(t, l) &&
				!Ov.hasOwnProperty(l) &&
				(n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
	}
	var l = arguments.length - 2;
	if (l === 1) n.children = r;
	else if (1 < l) {
		s = Array(l);
		for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
		n.children = s;
	}
	return { $$typeof: la, type: e.type, key: o, ref: i, props: n, _owner: a };
};
G.createContext = function (e) {
	return (
		(e = {
			$$typeof: Hw,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null
		}),
		(e.Provider = { $$typeof: Ww, _context: e }),
		(e.Consumer = e)
	);
};
G.createElement = Iv;
G.createFactory = function (e) {
	var t = Iv.bind(null, e);
	return (t.type = e), t;
};
G.createRef = function () {
	return { current: null };
};
G.forwardRef = function (e) {
	return { $$typeof: Gw, render: e };
};
G.isValidElement = zf;
G.lazy = function (e) {
	return { $$typeof: Yw, _payload: { _status: -1, _result: e }, _init: Jw };
};
G.memo = function (e, t) {
	return { $$typeof: Kw, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function (e) {
	var t = ls.transition;
	ls.transition = {};
	try {
		e();
	} finally {
		ls.transition = t;
	}
};
G.unstable_act = function () {
	throw Error('act(...) is not supported in production builds of React.');
};
G.useCallback = function (e, t) {
	return Ze.current.useCallback(e, t);
};
G.useContext = function (e) {
	return Ze.current.useContext(e);
};
G.useDebugValue = function () {};
G.useDeferredValue = function (e) {
	return Ze.current.useDeferredValue(e);
};
G.useEffect = function (e, t) {
	return Ze.current.useEffect(e, t);
};
G.useId = function () {
	return Ze.current.useId();
};
G.useImperativeHandle = function (e, t, r) {
	return Ze.current.useImperativeHandle(e, t, r);
};
G.useInsertionEffect = function (e, t) {
	return Ze.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function (e, t) {
	return Ze.current.useLayoutEffect(e, t);
};
G.useMemo = function (e, t) {
	return Ze.current.useMemo(e, t);
};
G.useReducer = function (e, t, r) {
	return Ze.current.useReducer(e, t, r);
};
G.useRef = function (e) {
	return Ze.current.useRef(e);
};
G.useState = function (e) {
	return Ze.current.useState(e);
};
G.useSyncExternalStore = function (e, t, r) {
	return Ze.current.useSyncExternalStore(e, t, r);
};
G.useTransition = function () {
	return Ze.current.useTransition();
};
G.version = '18.2.0';
(function (e) {
	e.exports = G;
})(Fw);
const nt = Pf(C),
	Uh = Bw({ __proto__: null, default: nt }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tk = C,
	rk = Symbol.for('react.element'),
	nk = Symbol.for('react.fragment'),
	ok = Object.prototype.hasOwnProperty,
	ik = tk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	ak = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bv(e, t, r) {
	var n,
		o = {},
		i = null,
		a = null;
	r !== void 0 && (i = '' + r),
		t.key !== void 0 && (i = '' + t.key),
		t.ref !== void 0 && (a = t.ref);
	for (n in t) ok.call(t, n) && !ak.hasOwnProperty(n) && (o[n] = t[n]);
	if (e && e.defaultProps)
		for (n in ((t = e.defaultProps), t)) o[n] === void 0 && (o[n] = t[n]);
	return {
		$$typeof: rk,
		type: e,
		key: i,
		ref: a,
		props: o,
		_owner: ik.current
	};
}
_l.Fragment = nk;
_l.jsx = Bv;
_l.jsxs = Bv;
(function (e) {
	e.exports = _l;
})(Dw);
const Dv = Ai.Fragment,
	A = Ai.jsx,
	be = Ai.jsxs;
var Qc = {},
	zi = {},
	sk = {
		get exports() {
			return zi;
		},
		set exports(e) {
			zi = e;
		}
	},
	St = {},
	Zc = {},
	lk = {
		get exports() {
			return Zc;
		},
		set exports(e) {
			Zc = e;
		}
	},
	Fv = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t(L, O) {
		var j = L.length;
		L.push(O);
		e: for (; 0 < j; ) {
			var re = (j - 1) >>> 1,
				se = L[re];
			if (0 < o(se, O)) (L[re] = O), (L[j] = se), (j = re);
			else break e;
		}
	}
	function r(L) {
		return L.length === 0 ? null : L[0];
	}
	function n(L) {
		if (L.length === 0) return null;
		var O = L[0],
			j = L.pop();
		if (j !== O) {
			L[0] = j;
			e: for (var re = 0, se = L.length, Z = se >>> 1; re < Z; ) {
				var Ut = 2 * (re + 1) - 1,
					Io = L[Ut],
					ct = Ut + 1,
					an = L[ct];
				if (0 > o(Io, j))
					ct < se && 0 > o(an, Io)
						? ((L[re] = an), (L[ct] = j), (re = ct))
						: ((L[re] = Io), (L[Ut] = j), (re = Ut));
				else if (ct < se && 0 > o(an, j)) (L[re] = an), (L[ct] = j), (re = ct);
				else break e;
			}
		}
		return O;
	}
	function o(L, O) {
		var j = L.sortIndex - O.sortIndex;
		return j !== 0 ? j : L.id - O.id;
	}
	if (typeof performance == 'object' && typeof performance.now == 'function') {
		var i = performance;
		e.unstable_now = function () {
			return i.now();
		};
	} else {
		var a = Date,
			s = a.now();
		e.unstable_now = function () {
			return a.now() - s;
		};
	}
	var l = [],
		u = [],
		c = 1,
		d = null,
		f = 3,
		p = !1,
		v = !1,
		b = !1,
		k = typeof setTimeout == 'function' ? setTimeout : null,
		h = typeof clearTimeout == 'function' ? clearTimeout : null,
		m = typeof setImmediate < 'u' ? setImmediate : null;
	typeof navigator < 'u' &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function g(L) {
		for (var O = r(u); O !== null; ) {
			if (O.callback === null) n(u);
			else if (O.startTime <= L)
				n(u), (O.sortIndex = O.expirationTime), t(l, O);
			else break;
			O = r(u);
		}
	}
	function S(L) {
		if (((b = !1), g(L), !v))
			if (r(l) !== null) (v = !0), K(P);
			else {
				var O = r(u);
				O !== null && Te(S, O.startTime - L);
			}
	}
	function P(L, O) {
		(v = !1), b && ((b = !1), h(I), (I = -1)), (p = !0);
		var j = f;
		try {
			for (
				g(O), d = r(l);
				d !== null && (!(d.expirationTime > O) || (L && !M()));

			) {
				var re = d.callback;
				if (typeof re == 'function') {
					(d.callback = null), (f = d.priorityLevel);
					var se = re(d.expirationTime <= O);
					(O = e.unstable_now()),
						typeof se == 'function' ? (d.callback = se) : d === r(l) && n(l),
						g(O);
				} else n(l);
				d = r(l);
			}
			if (d !== null) var Z = !0;
			else {
				var Ut = r(u);
				Ut !== null && Te(S, Ut.startTime - O), (Z = !1);
			}
			return Z;
		} finally {
			(d = null), (f = j), (p = !1);
		}
	}
	var R = !1,
		$ = null,
		I = -1,
		E = 5,
		T = -1;
	function M() {
		return !(e.unstable_now() - T < E);
	}
	function N() {
		if ($ !== null) {
			var L = e.unstable_now();
			T = L;
			var O = !0;
			try {
				O = $(!0, L);
			} finally {
				O ? B() : ((R = !1), ($ = null));
			}
		} else R = !1;
	}
	var B;
	if (typeof m == 'function')
		B = function () {
			m(N);
		};
	else if (typeof MessageChannel < 'u') {
		var H = new MessageChannel(),
			V = H.port2;
		(H.port1.onmessage = N),
			(B = function () {
				V.postMessage(null);
			});
	} else
		B = function () {
			k(N, 0);
		};
	function K(L) {
		($ = L), R || ((R = !0), B());
	}
	function Te(L, O) {
		I = k(function () {
			L(e.unstable_now());
		}, O);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (L) {
			L.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			v || p || ((v = !0), K(P));
		}),
		(e.unstable_forceFrameRate = function (L) {
			0 > L || 125 < L
				? console.error(
						'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
				  )
				: (E = 0 < L ? Math.floor(1e3 / L) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return f;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return r(l);
		}),
		(e.unstable_next = function (L) {
			switch (f) {
				case 1:
				case 2:
				case 3:
					var O = 3;
					break;
				default:
					O = f;
			}
			var j = f;
			f = O;
			try {
				return L();
			} finally {
				f = j;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (L, O) {
			switch (L) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					L = 3;
			}
			var j = f;
			f = L;
			try {
				return O();
			} finally {
				f = j;
			}
		}),
		(e.unstable_scheduleCallback = function (L, O, j) {
			var re = e.unstable_now();
			switch (
				(typeof j == 'object' && j !== null
					? ((j = j.delay), (j = typeof j == 'number' && 0 < j ? re + j : re))
					: (j = re),
				L)
			) {
				case 1:
					var se = -1;
					break;
				case 2:
					se = 250;
					break;
				case 5:
					se = 1073741823;
					break;
				case 4:
					se = 1e4;
					break;
				default:
					se = 5e3;
			}
			return (
				(se = j + se),
				(L = {
					id: c++,
					callback: O,
					priorityLevel: L,
					startTime: j,
					expirationTime: se,
					sortIndex: -1
				}),
				j > re
					? ((L.sortIndex = j),
					  t(u, L),
					  r(l) === null &&
							L === r(u) &&
							(b ? (h(I), (I = -1)) : (b = !0), Te(S, j - re)))
					: ((L.sortIndex = se), t(l, L), v || p || ((v = !0), K(P))),
				L
			);
		}),
		(e.unstable_shouldYield = M),
		(e.unstable_wrapCallback = function (L) {
			var O = f;
			return function () {
				var j = f;
				f = O;
				try {
					return L.apply(this, arguments);
				} finally {
					f = j;
				}
			};
		});
})(Fv);
(function (e) {
	e.exports = Fv;
})(lk);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nv = C,
	yt = Zc;
function z(e) {
	for (
		var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, r = 1;
		r < arguments.length;
		r++
	)
		t += '&args[]=' + encodeURIComponent(arguments[r]);
	return (
		'Minified React error #' +
		e +
		'; visit ' +
		t +
		' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
	);
}
var Vv = new Set(),
	Mi = {};
function zn(e, t) {
	So(e, t), So(e + 'Capture', t);
}
function So(e, t) {
	for (Mi[e] = t, e = 0; e < t.length; e++) Vv.add(t[e]);
}
var Sr = !(
		typeof window > 'u' ||
		typeof window.document > 'u' ||
		typeof window.document.createElement > 'u'
	),
	Jc = Object.prototype.hasOwnProperty,
	uk =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Wh = {},
	Hh = {};
function ck(e) {
	return Jc.call(Hh, e)
		? !0
		: Jc.call(Wh, e)
		? !1
		: uk.test(e)
		? (Hh[e] = !0)
		: ((Wh[e] = !0), !1);
}
function dk(e, t, r, n) {
	if (r !== null && r.type === 0) return !1;
	switch (typeof t) {
		case 'function':
		case 'symbol':
			return !0;
		case 'boolean':
			return n
				? !1
				: r !== null
				? !r.acceptsBooleans
				: ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
		default:
			return !1;
	}
}
function fk(e, t, r, n) {
	if (t === null || typeof t > 'u' || dk(e, t, r, n)) return !0;
	if (n) return !1;
	if (r !== null)
		switch (r.type) {
			case 3:
				return !t;
			case 4:
				return t === !1;
			case 5:
				return isNaN(t);
			case 6:
				return isNaN(t) || 1 > t;
		}
	return !1;
}
function Je(e, t, r, n, o, i, a) {
	(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = n),
		(this.attributeNamespace = o),
		(this.mustUseProperty = r),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = i),
		(this.removeEmptyString = a);
}
var Ne = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
	.split(' ')
	.forEach(function (e) {
		Ne[e] = new Je(e, 0, !1, e, null, !1, !1);
	});
[
	['acceptCharset', 'accept-charset'],
	['className', 'class'],
	['htmlFor', 'for'],
	['httpEquiv', 'http-equiv']
].forEach(function (e) {
	var t = e[0];
	Ne[t] = new Je(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
	Ne[e] = new Je(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
	'autoReverse',
	'externalResourcesRequired',
	'focusable',
	'preserveAlpha'
].forEach(function (e) {
	Ne[e] = new Je(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
	.split(' ')
	.forEach(function (e) {
		Ne[e] = new Je(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
	Ne[e] = new Je(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
	Ne[e] = new Je(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
	Ne[e] = new Je(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
	Ne[e] = new Je(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Mf = /[\-:]([a-z])/g;
function Lf(e) {
	return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(Mf, Lf);
		Ne[t] = new Je(t, 1, !1, e, null, !1, !1);
	});
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(Mf, Lf);
		Ne[t] = new Je(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
	});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
	var t = e.replace(Mf, Lf);
	Ne[t] = new Je(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
	Ne[e] = new Je(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ne.xlinkHref = new Je(
	'xlinkHref',
	1,
	!1,
	'xlink:href',
	'http://www.w3.org/1999/xlink',
	!0,
	!1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
	Ne[e] = new Je(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Of(e, t, r, n) {
	var o = Ne.hasOwnProperty(t) ? Ne[t] : null;
	(o !== null
		? o.type !== 0
		: n ||
		  !(2 < t.length) ||
		  (t[0] !== 'o' && t[0] !== 'O') ||
		  (t[1] !== 'n' && t[1] !== 'N')) &&
		(fk(t, r, o, n) && (r = null),
		n || o === null
			? ck(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
			: o.mustUseProperty
			? (e[o.propertyName] = r === null ? (o.type === 3 ? !1 : '') : r)
			: ((t = o.attributeName),
			  (n = o.attributeNamespace),
			  r === null
					? e.removeAttribute(t)
					: ((o = o.type),
					  (r = o === 3 || (o === 4 && r === !0) ? '' : '' + r),
					  n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var _r = Nv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	za = Symbol.for('react.element'),
	Wn = Symbol.for('react.portal'),
	Hn = Symbol.for('react.fragment'),
	If = Symbol.for('react.strict_mode'),
	ed = Symbol.for('react.profiler'),
	jv = Symbol.for('react.provider'),
	Uv = Symbol.for('react.context'),
	Bf = Symbol.for('react.forward_ref'),
	td = Symbol.for('react.suspense'),
	rd = Symbol.for('react.suspense_list'),
	Df = Symbol.for('react.memo'),
	Ar = Symbol.for('react.lazy'),
	Wv = Symbol.for('react.offscreen'),
	Gh = Symbol.iterator;
function Vo(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (Gh && e[Gh]) || e['@@iterator']),
		  typeof e == 'function' ? e : null);
}
var we = Object.assign,
	Mu;
function ti(e) {
	if (Mu === void 0)
		try {
			throw Error();
		} catch (r) {
			var t = r.stack.trim().match(/\n( *(at )?)/);
			Mu = (t && t[1]) || '';
		}
	return (
		`
` +
		Mu +
		e
	);
}
var Lu = !1;
function Ou(e, t) {
	if (!e || Lu) return '';
	Lu = !0;
	var r = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (
				((t = function () {
					throw Error();
				}),
				Object.defineProperty(t.prototype, 'props', {
					set: function () {
						throw Error();
					}
				}),
				typeof Reflect == 'object' && Reflect.construct)
			) {
				try {
					Reflect.construct(t, []);
				} catch (u) {
					var n = u;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (u) {
					n = u;
				}
				e.call(t.prototype);
			}
		else {
			try {
				throw Error();
			} catch (u) {
				n = u;
			}
			e();
		}
	} catch (u) {
		if (u && n && typeof u.stack == 'string') {
			for (
				var o = u.stack.split(`
`),
					i = n.stack.split(`
`),
					a = o.length - 1,
					s = i.length - 1;
				1 <= a && 0 <= s && o[a] !== i[s];

			)
				s--;
			for (; 1 <= a && 0 <= s; a--, s--)
				if (o[a] !== i[s]) {
					if (a !== 1 || s !== 1)
						do
							if ((a--, s--, 0 > s || o[a] !== i[s])) {
								var l =
									`
` + o[a].replace(' at new ', ' at ');
								return (
									e.displayName &&
										l.includes('<anonymous>') &&
										(l = l.replace('<anonymous>', e.displayName)),
									l
								);
							}
						while (1 <= a && 0 <= s);
					break;
				}
		}
	} finally {
		(Lu = !1), (Error.prepareStackTrace = r);
	}
	return (e = e ? e.displayName || e.name : '') ? ti(e) : '';
}
function pk(e) {
	switch (e.tag) {
		case 5:
			return ti(e.type);
		case 16:
			return ti('Lazy');
		case 13:
			return ti('Suspense');
		case 19:
			return ti('SuspenseList');
		case 0:
		case 2:
		case 15:
			return (e = Ou(e.type, !1)), e;
		case 11:
			return (e = Ou(e.type.render, !1)), e;
		case 1:
			return (e = Ou(e.type, !0)), e;
		default:
			return '';
	}
}
function nd(e) {
	if (e == null) return null;
	if (typeof e == 'function') return e.displayName || e.name || null;
	if (typeof e == 'string') return e;
	switch (e) {
		case Hn:
			return 'Fragment';
		case Wn:
			return 'Portal';
		case ed:
			return 'Profiler';
		case If:
			return 'StrictMode';
		case td:
			return 'Suspense';
		case rd:
			return 'SuspenseList';
	}
	if (typeof e == 'object')
		switch (e.$$typeof) {
			case Uv:
				return (e.displayName || 'Context') + '.Consumer';
			case jv:
				return (e._context.displayName || 'Context') + '.Provider';
			case Bf:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ''),
						(e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
					e
				);
			case Df:
				return (
					(t = e.displayName || null), t !== null ? t : nd(e.type) || 'Memo'
				);
			case Ar:
				(t = e._payload), (e = e._init);
				try {
					return nd(e(t));
				} catch {}
		}
	return null;
}
function hk(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return 'Cache';
		case 9:
			return (t.displayName || 'Context') + '.Consumer';
		case 10:
			return (t._context.displayName || 'Context') + '.Provider';
		case 18:
			return 'DehydratedFragment';
		case 11:
			return (
				(e = t.render),
				(e = e.displayName || e.name || ''),
				t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
			);
		case 7:
			return 'Fragment';
		case 5:
			return t;
		case 4:
			return 'Portal';
		case 3:
			return 'Root';
		case 6:
			return 'Text';
		case 16:
			return nd(t);
		case 8:
			return t === If ? 'StrictMode' : 'Mode';
		case 22:
			return 'Offscreen';
		case 12:
			return 'Profiler';
		case 21:
			return 'Scope';
		case 13:
			return 'Suspense';
		case 19:
			return 'SuspenseList';
		case 25:
			return 'TracingMarker';
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == 'function') return t.displayName || t.name || null;
			if (typeof t == 'string') return t;
	}
	return null;
}
function Xr(e) {
	switch (typeof e) {
		case 'boolean':
		case 'number':
		case 'string':
		case 'undefined':
			return e;
		case 'object':
			return e;
		default:
			return '';
	}
}
function Hv(e) {
	var t = e.type;
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === 'input' &&
		(t === 'checkbox' || t === 'radio')
	);
}
function mk(e) {
	var t = Hv(e) ? 'checked' : 'value',
		r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		n = '' + e[t];
	if (
		!e.hasOwnProperty(t) &&
		typeof r < 'u' &&
		typeof r.get == 'function' &&
		typeof r.set == 'function'
	) {
		var o = r.get,
			i = r.set;
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return o.call(this);
				},
				set: function (a) {
					(n = '' + a), i.call(this, a);
				}
			}),
			Object.defineProperty(e, t, { enumerable: r.enumerable }),
			{
				getValue: function () {
					return n;
				},
				setValue: function (a) {
					n = '' + a;
				},
				stopTracking: function () {
					(e._valueTracker = null), delete e[t];
				}
			}
		);
	}
}
function Ma(e) {
	e._valueTracker || (e._valueTracker = mk(e));
}
function Gv(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var r = t.getValue(),
		n = '';
	return (
		e && (n = Hv(e) ? (e.checked ? 'true' : 'false') : e.value),
		(e = n),
		e !== r ? (t.setValue(e), !0) : !1
	);
}
function Ms(e) {
	if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
		return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function od(e, t) {
	var r = t.checked;
	return we({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: r ?? e._wrapperState.initialChecked
	});
}
function qh(e, t) {
	var r = t.defaultValue == null ? '' : t.defaultValue,
		n = t.checked != null ? t.checked : t.defaultChecked;
	(r = Xr(t.value != null ? t.value : r)),
		(e._wrapperState = {
			initialChecked: n,
			initialValue: r,
			controlled:
				t.type === 'checkbox' || t.type === 'radio'
					? t.checked != null
					: t.value != null
		});
}
function qv(e, t) {
	(t = t.checked), t != null && Of(e, 'checked', t, !1);
}
function id(e, t) {
	qv(e, t);
	var r = Xr(t.value),
		n = t.type;
	if (r != null)
		n === 'number'
			? ((r === 0 && e.value === '') || e.value != r) && (e.value = '' + r)
			: e.value !== '' + r && (e.value = '' + r);
	else if (n === 'submit' || n === 'reset') {
		e.removeAttribute('value');
		return;
	}
	t.hasOwnProperty('value')
		? ad(e, t.type, r)
		: t.hasOwnProperty('defaultValue') && ad(e, t.type, Xr(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked);
}
function Kh(e, t, r) {
	if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
		var n = t.type;
		if (
			!(
				(n !== 'submit' && n !== 'reset') ||
				(t.value !== void 0 && t.value !== null)
			)
		)
			return;
		(t = '' + e._wrapperState.initialValue),
			r || t === e.value || (e.value = t),
			(e.defaultValue = t);
	}
	(r = e.name),
		r !== '' && (e.name = ''),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		r !== '' && (e.name = r);
}
function ad(e, t, r) {
	(t !== 'number' || Ms(e.ownerDocument) !== e) &&
		(r == null
			? (e.defaultValue = '' + e._wrapperState.initialValue)
			: e.defaultValue !== '' + r && (e.defaultValue = '' + r));
}
var ri = Array.isArray;
function io(e, t, r, n) {
	if (((e = e.options), t)) {
		t = {};
		for (var o = 0; o < r.length; o++) t['$' + r[o]] = !0;
		for (r = 0; r < e.length; r++)
			(o = t.hasOwnProperty('$' + e[r].value)),
				e[r].selected !== o && (e[r].selected = o),
				o && n && (e[r].defaultSelected = !0);
	} else {
		for (r = '' + Xr(r), t = null, o = 0; o < e.length; o++) {
			if (e[o].value === r) {
				(e[o].selected = !0), n && (e[o].defaultSelected = !0);
				return;
			}
			t !== null || e[o].disabled || (t = e[o]);
		}
		t !== null && (t.selected = !0);
	}
}
function sd(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
	return we({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: '' + e._wrapperState.initialValue
	});
}
function Yh(e, t) {
	var r = t.value;
	if (r == null) {
		if (((r = t.children), (t = t.defaultValue), r != null)) {
			if (t != null) throw Error(z(92));
			if (ri(r)) {
				if (1 < r.length) throw Error(z(93));
				r = r[0];
			}
			t = r;
		}
		t == null && (t = ''), (r = t);
	}
	e._wrapperState = { initialValue: Xr(r) };
}
function Kv(e, t) {
	var r = Xr(t.value),
		n = Xr(t.defaultValue);
	r != null &&
		((r = '' + r),
		r !== e.value && (e.value = r),
		t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
		n != null && (e.defaultValue = '' + n);
}
function Xh(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Yv(e) {
	switch (e) {
		case 'svg':
			return 'http://www.w3.org/2000/svg';
		case 'math':
			return 'http://www.w3.org/1998/Math/MathML';
		default:
			return 'http://www.w3.org/1999/xhtml';
	}
}
function ld(e, t) {
	return e == null || e === 'http://www.w3.org/1999/xhtml'
		? Yv(t)
		: e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
		? 'http://www.w3.org/1999/xhtml'
		: e;
}
var La,
	Xv = (function (e) {
		return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
			? function (t, r, n, o) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, r, n, o);
					});
			  }
			: e;
	})(function (e, t) {
		if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
			e.innerHTML = t;
		else {
			for (
				La = La || document.createElement('div'),
					La.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
					t = La.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function Li(e, t) {
	if (t) {
		var r = e.firstChild;
		if (r && r === e.lastChild && r.nodeType === 3) {
			r.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var ui = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0
	},
	gk = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(ui).forEach(function (e) {
	gk.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ui[t] = ui[e]);
	});
});
function Qv(e, t, r) {
	return t == null || typeof t == 'boolean' || t === ''
		? ''
		: r || typeof t != 'number' || t === 0 || (ui.hasOwnProperty(e) && ui[e])
		? ('' + t).trim()
		: t + 'px';
}
function Zv(e, t) {
	e = e.style;
	for (var r in t)
		if (t.hasOwnProperty(r)) {
			var n = r.indexOf('--') === 0,
				o = Qv(r, t[r], n);
			r === 'float' && (r = 'cssFloat'), n ? e.setProperty(r, o) : (e[r] = o);
		}
}
var vk = we(
	{ menuitem: !0 },
	{
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0
	}
);
function ud(e, t) {
	if (t) {
		if (vk[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(z(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(z(60));
			if (
				typeof t.dangerouslySetInnerHTML != 'object' ||
				!('__html' in t.dangerouslySetInnerHTML)
			)
				throw Error(z(61));
		}
		if (t.style != null && typeof t.style != 'object') throw Error(z(62));
	}
}
function cd(e, t) {
	if (e.indexOf('-') === -1) return typeof t.is == 'string';
	switch (e) {
		case 'annotation-xml':
		case 'color-profile':
		case 'font-face':
		case 'font-face-src':
		case 'font-face-uri':
		case 'font-face-format':
		case 'font-face-name':
		case 'missing-glyph':
			return !1;
		default:
			return !0;
	}
}
var dd = null;
function Ff(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var fd = null,
	ao = null,
	so = null;
function Qh(e) {
	if ((e = da(e))) {
		if (typeof fd != 'function') throw Error(z(280));
		var t = e.stateNode;
		t && ((t = Rl(t)), fd(e.stateNode, e.type, t));
	}
}
function Jv(e) {
	ao ? (so ? so.push(e) : (so = [e])) : (ao = e);
}
function ey() {
	if (ao) {
		var e = ao,
			t = so;
		if (((so = ao = null), Qh(e), t)) for (e = 0; e < t.length; e++) Qh(t[e]);
	}
}
function ty(e, t) {
	return e(t);
}
function ry() {}
var Iu = !1;
function ny(e, t, r) {
	if (Iu) return e(t, r);
	Iu = !0;
	try {
		return ty(e, t, r);
	} finally {
		(Iu = !1), (ao !== null || so !== null) && (ry(), ey());
	}
}
function Oi(e, t) {
	var r = e.stateNode;
	if (r === null) return null;
	var n = Rl(r);
	if (n === null) return null;
	r = n[t];
	e: switch (t) {
		case 'onClick':
		case 'onClickCapture':
		case 'onDoubleClick':
		case 'onDoubleClickCapture':
		case 'onMouseDown':
		case 'onMouseDownCapture':
		case 'onMouseMove':
		case 'onMouseMoveCapture':
		case 'onMouseUp':
		case 'onMouseUpCapture':
		case 'onMouseEnter':
			(n = !n.disabled) ||
				((e = e.type),
				(n = !(
					e === 'button' ||
					e === 'input' ||
					e === 'select' ||
					e === 'textarea'
				))),
				(e = !n);
			break e;
		default:
			e = !1;
	}
	if (e) return null;
	if (r && typeof r != 'function') throw Error(z(231, t, typeof r));
	return r;
}
var pd = !1;
if (Sr)
	try {
		var jo = {};
		Object.defineProperty(jo, 'passive', {
			get: function () {
				pd = !0;
			}
		}),
			window.addEventListener('test', jo, jo),
			window.removeEventListener('test', jo, jo);
	} catch {
		pd = !1;
	}
function yk(e, t, r, n, o, i, a, s, l) {
	var u = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(r, u);
	} catch (c) {
		this.onError(c);
	}
}
var ci = !1,
	Ls = null,
	Os = !1,
	hd = null,
	bk = {
		onError: function (e) {
			(ci = !0), (Ls = e);
		}
	};
function Sk(e, t, r, n, o, i, a, s, l) {
	(ci = !1), (Ls = null), yk.apply(bk, arguments);
}
function xk(e, t, r, n, o, i, a, s, l) {
	if ((Sk.apply(this, arguments), ci)) {
		if (ci) {
			var u = Ls;
			(ci = !1), (Ls = null);
		} else throw Error(z(198));
		Os || ((Os = !0), (hd = u));
	}
}
function Mn(e) {
	var t = e,
		r = e;
	if (e.alternate) for (; t.return; ) t = t.return;
	else {
		e = t;
		do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
		while (e);
	}
	return t.tag === 3 ? r : null;
}
function oy(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if (
			(t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
			t !== null)
		)
			return t.dehydrated;
	}
	return null;
}
function Zh(e) {
	if (Mn(e) !== e) throw Error(z(188));
}
function wk(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = Mn(e)), t === null)) throw Error(z(188));
		return t !== e ? null : e;
	}
	for (var r = e, n = t; ; ) {
		var o = r.return;
		if (o === null) break;
		var i = o.alternate;
		if (i === null) {
			if (((n = o.return), n !== null)) {
				r = n;
				continue;
			}
			break;
		}
		if (o.child === i.child) {
			for (i = o.child; i; ) {
				if (i === r) return Zh(o), e;
				if (i === n) return Zh(o), t;
				i = i.sibling;
			}
			throw Error(z(188));
		}
		if (r.return !== n.return) (r = o), (n = i);
		else {
			for (var a = !1, s = o.child; s; ) {
				if (s === r) {
					(a = !0), (r = o), (n = i);
					break;
				}
				if (s === n) {
					(a = !0), (n = o), (r = i);
					break;
				}
				s = s.sibling;
			}
			if (!a) {
				for (s = i.child; s; ) {
					if (s === r) {
						(a = !0), (r = i), (n = o);
						break;
					}
					if (s === n) {
						(a = !0), (n = i), (r = o);
						break;
					}
					s = s.sibling;
				}
				if (!a) throw Error(z(189));
			}
		}
		if (r.alternate !== n) throw Error(z(190));
	}
	if (r.tag !== 3) throw Error(z(188));
	return r.stateNode.current === r ? e : t;
}
function iy(e) {
	return (e = wk(e)), e !== null ? ay(e) : null;
}
function ay(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = ay(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var sy = yt.unstable_scheduleCallback,
	Jh = yt.unstable_cancelCallback,
	kk = yt.unstable_shouldYield,
	Ck = yt.unstable_requestPaint,
	_e = yt.unstable_now,
	_k = yt.unstable_getCurrentPriorityLevel,
	Nf = yt.unstable_ImmediatePriority,
	ly = yt.unstable_UserBlockingPriority,
	Is = yt.unstable_NormalPriority,
	Tk = yt.unstable_LowPriority,
	uy = yt.unstable_IdlePriority,
	Tl = null,
	er = null;
function Ek(e) {
	if (er && typeof er.onCommitFiberRoot == 'function')
		try {
			er.onCommitFiberRoot(Tl, e, void 0, (e.current.flags & 128) === 128);
		} catch {}
}
var Nt = Math.clz32 ? Math.clz32 : Rk,
	Pk = Math.log,
	$k = Math.LN2;
function Rk(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((Pk(e) / $k) | 0)) | 0;
}
var Oa = 64,
	Ia = 4194304;
function ni(e) {
	switch (e & -e) {
		case 1:
			return 1;
		case 2:
			return 2;
		case 4:
			return 4;
		case 8:
			return 8;
		case 16:
			return 16;
		case 32:
			return 32;
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return e;
	}
}
function Bs(e, t) {
	var r = e.pendingLanes;
	if (r === 0) return 0;
	var n = 0,
		o = e.suspendedLanes,
		i = e.pingedLanes,
		a = r & 268435455;
	if (a !== 0) {
		var s = a & ~o;
		s !== 0 ? (n = ni(s)) : ((i &= a), i !== 0 && (n = ni(i)));
	} else (a = r & ~o), a !== 0 ? (n = ni(a)) : i !== 0 && (n = ni(i));
	if (n === 0) return 0;
	if (
		t !== 0 &&
		t !== n &&
		!(t & o) &&
		((o = n & -n), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
	)
		return t;
	if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= n; 0 < t; )
			(r = 31 - Nt(t)), (o = 1 << r), (n |= e[r]), (t &= ~o);
	return n;
}
function Ak(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250;
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1;
	}
}
function zk(e, t) {
	for (
		var r = e.suspendedLanes,
			n = e.pingedLanes,
			o = e.expirationTimes,
			i = e.pendingLanes;
		0 < i;

	) {
		var a = 31 - Nt(i),
			s = 1 << a,
			l = o[a];
		l === -1
			? (!(s & r) || s & n) && (o[a] = Ak(s, t))
			: l <= t && (e.expiredLanes |= s),
			(i &= ~s);
	}
}
function md(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	);
}
function cy() {
	var e = Oa;
	return (Oa <<= 1), !(Oa & 4194240) && (Oa = 64), e;
}
function Bu(e) {
	for (var t = [], r = 0; 31 > r; r++) t.push(e);
	return t;
}
function ua(e, t, r) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - Nt(t)),
		(e[t] = r);
}
function Mk(e, t) {
	var r = e.pendingLanes & ~t;
	(e.pendingLanes = t),
		(e.suspendedLanes = 0),
		(e.pingedLanes = 0),
		(e.expiredLanes &= t),
		(e.mutableReadLanes &= t),
		(e.entangledLanes &= t),
		(t = e.entanglements);
	var n = e.eventTimes;
	for (e = e.expirationTimes; 0 < r; ) {
		var o = 31 - Nt(r),
			i = 1 << o;
		(t[o] = 0), (n[o] = -1), (e[o] = -1), (r &= ~i);
	}
}
function Vf(e, t) {
	var r = (e.entangledLanes |= t);
	for (e = e.entanglements; r; ) {
		var n = 31 - Nt(r),
			o = 1 << n;
		(o & t) | (e[n] & t) && (e[n] |= t), (r &= ~o);
	}
}
var ie = 0;
function dy(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var fy,
	jf,
	py,
	hy,
	my,
	gd = !1,
	Ba = [],
	Vr = null,
	jr = null,
	Ur = null,
	Ii = new Map(),
	Bi = new Map(),
	Lr = [],
	Lk =
		'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
			' '
		);
function em(e, t) {
	switch (e) {
		case 'focusin':
		case 'focusout':
			Vr = null;
			break;
		case 'dragenter':
		case 'dragleave':
			jr = null;
			break;
		case 'mouseover':
		case 'mouseout':
			Ur = null;
			break;
		case 'pointerover':
		case 'pointerout':
			Ii.delete(t.pointerId);
			break;
		case 'gotpointercapture':
		case 'lostpointercapture':
			Bi.delete(t.pointerId);
	}
}
function Uo(e, t, r, n, o, i) {
	return e === null || e.nativeEvent !== i
		? ((e = {
				blockedOn: t,
				domEventName: r,
				eventSystemFlags: n,
				nativeEvent: i,
				targetContainers: [o]
		  }),
		  t !== null && ((t = da(t)), t !== null && jf(t)),
		  e)
		: ((e.eventSystemFlags |= n),
		  (t = e.targetContainers),
		  o !== null && t.indexOf(o) === -1 && t.push(o),
		  e);
}
function Ok(e, t, r, n, o) {
	switch (t) {
		case 'focusin':
			return (Vr = Uo(Vr, e, t, r, n, o)), !0;
		case 'dragenter':
			return (jr = Uo(jr, e, t, r, n, o)), !0;
		case 'mouseover':
			return (Ur = Uo(Ur, e, t, r, n, o)), !0;
		case 'pointerover':
			var i = o.pointerId;
			return Ii.set(i, Uo(Ii.get(i) || null, e, t, r, n, o)), !0;
		case 'gotpointercapture':
			return (
				(i = o.pointerId), Bi.set(i, Uo(Bi.get(i) || null, e, t, r, n, o)), !0
			);
	}
	return !1;
}
function gy(e) {
	var t = vn(e.target);
	if (t !== null) {
		var r = Mn(t);
		if (r !== null) {
			if (((t = r.tag), t === 13)) {
				if (((t = oy(r)), t !== null)) {
					(e.blockedOn = t),
						my(e.priority, function () {
							py(r);
						});
					return;
				}
			} else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
				return;
			}
		}
	}
	e.blockedOn = null;
}
function us(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var r = vd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (r === null) {
			r = e.nativeEvent;
			var n = new r.constructor(r.type, r);
			(dd = n), r.target.dispatchEvent(n), (dd = null);
		} else return (t = da(r)), t !== null && jf(t), (e.blockedOn = r), !1;
		t.shift();
	}
	return !0;
}
function tm(e, t, r) {
	us(e) && r.delete(t);
}
function Ik() {
	(gd = !1),
		Vr !== null && us(Vr) && (Vr = null),
		jr !== null && us(jr) && (jr = null),
		Ur !== null && us(Ur) && (Ur = null),
		Ii.forEach(tm),
		Bi.forEach(tm);
}
function Wo(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		gd ||
			((gd = !0),
			yt.unstable_scheduleCallback(yt.unstable_NormalPriority, Ik)));
}
function Di(e) {
	function t(o) {
		return Wo(o, e);
	}
	if (0 < Ba.length) {
		Wo(Ba[0], e);
		for (var r = 1; r < Ba.length; r++) {
			var n = Ba[r];
			n.blockedOn === e && (n.blockedOn = null);
		}
	}
	for (
		Vr !== null && Wo(Vr, e),
			jr !== null && Wo(jr, e),
			Ur !== null && Wo(Ur, e),
			Ii.forEach(t),
			Bi.forEach(t),
			r = 0;
		r < Lr.length;
		r++
	)
		(n = Lr[r]), n.blockedOn === e && (n.blockedOn = null);
	for (; 0 < Lr.length && ((r = Lr[0]), r.blockedOn === null); )
		gy(r), r.blockedOn === null && Lr.shift();
}
var lo = _r.ReactCurrentBatchConfig,
	Ds = !0;
function Bk(e, t, r, n) {
	var o = ie,
		i = lo.transition;
	lo.transition = null;
	try {
		(ie = 1), Uf(e, t, r, n);
	} finally {
		(ie = o), (lo.transition = i);
	}
}
function Dk(e, t, r, n) {
	var o = ie,
		i = lo.transition;
	lo.transition = null;
	try {
		(ie = 4), Uf(e, t, r, n);
	} finally {
		(ie = o), (lo.transition = i);
	}
}
function Uf(e, t, r, n) {
	if (Ds) {
		var o = vd(e, t, r, n);
		if (o === null) qu(e, t, n, Fs, r), em(e, n);
		else if (Ok(o, e, t, r, n)) n.stopPropagation();
		else if ((em(e, n), t & 4 && -1 < Lk.indexOf(e))) {
			for (; o !== null; ) {
				var i = da(o);
				if (
					(i !== null && fy(i),
					(i = vd(e, t, r, n)),
					i === null && qu(e, t, n, Fs, r),
					i === o)
				)
					break;
				o = i;
			}
			o !== null && n.stopPropagation();
		} else qu(e, t, n, null, r);
	}
}
var Fs = null;
function vd(e, t, r, n) {
	if (((Fs = null), (e = Ff(n)), (e = vn(e)), e !== null))
		if (((t = Mn(e)), t === null)) e = null;
		else if (((r = t.tag), r === 13)) {
			if (((e = oy(t)), e !== null)) return e;
			e = null;
		} else if (r === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (Fs = e), null;
}
function vy(e) {
	switch (e) {
		case 'cancel':
		case 'click':
		case 'close':
		case 'contextmenu':
		case 'copy':
		case 'cut':
		case 'auxclick':
		case 'dblclick':
		case 'dragend':
		case 'dragstart':
		case 'drop':
		case 'focusin':
		case 'focusout':
		case 'input':
		case 'invalid':
		case 'keydown':
		case 'keypress':
		case 'keyup':
		case 'mousedown':
		case 'mouseup':
		case 'paste':
		case 'pause':
		case 'play':
		case 'pointercancel':
		case 'pointerdown':
		case 'pointerup':
		case 'ratechange':
		case 'reset':
		case 'resize':
		case 'seeked':
		case 'submit':
		case 'touchcancel':
		case 'touchend':
		case 'touchstart':
		case 'volumechange':
		case 'change':
		case 'selectionchange':
		case 'textInput':
		case 'compositionstart':
		case 'compositionend':
		case 'compositionupdate':
		case 'beforeblur':
		case 'afterblur':
		case 'beforeinput':
		case 'blur':
		case 'fullscreenchange':
		case 'focus':
		case 'hashchange':
		case 'popstate':
		case 'select':
		case 'selectstart':
			return 1;
		case 'drag':
		case 'dragenter':
		case 'dragexit':
		case 'dragleave':
		case 'dragover':
		case 'mousemove':
		case 'mouseout':
		case 'mouseover':
		case 'pointermove':
		case 'pointerout':
		case 'pointerover':
		case 'scroll':
		case 'toggle':
		case 'touchmove':
		case 'wheel':
		case 'mouseenter':
		case 'mouseleave':
		case 'pointerenter':
		case 'pointerleave':
			return 4;
		case 'message':
			switch (_k()) {
				case Nf:
					return 1;
				case ly:
					return 4;
				case Is:
				case Tk:
					return 16;
				case uy:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var Br = null,
	Wf = null,
	cs = null;
function yy() {
	if (cs) return cs;
	var e,
		t = Wf,
		r = t.length,
		n,
		o = 'value' in Br ? Br.value : Br.textContent,
		i = o.length;
	for (e = 0; e < r && t[e] === o[e]; e++);
	var a = r - e;
	for (n = 1; n <= a && t[r - n] === o[i - n]; n++);
	return (cs = o.slice(e, 1 < n ? 1 - n : void 0));
}
function ds(e) {
	var t = e.keyCode;
	return (
		'charCode' in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function Da() {
	return !0;
}
function rm() {
	return !1;
}
function xt(e) {
	function t(r, n, o, i, a) {
		(this._reactName = r),
			(this._targetInst = o),
			(this.type = n),
			(this.nativeEvent = i),
			(this.target = a),
			(this.currentTarget = null);
		for (var s in e)
			e.hasOwnProperty(s) && ((r = e[s]), (this[s] = r ? r(i) : i[s]));
		return (
			(this.isDefaultPrevented = (
				i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
			)
				? Da
				: rm),
			(this.isPropagationStopped = rm),
			this
		);
	}
	return (
		we(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var r = this.nativeEvent;
				r &&
					(r.preventDefault
						? r.preventDefault()
						: typeof r.returnValue != 'unknown' && (r.returnValue = !1),
					(this.isDefaultPrevented = Da));
			},
			stopPropagation: function () {
				var r = this.nativeEvent;
				r &&
					(r.stopPropagation
						? r.stopPropagation()
						: typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
					(this.isPropagationStopped = Da));
			},
			persist: function () {},
			isPersistent: Da
		}),
		t
	);
}
var zo = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	},
	Hf = xt(zo),
	ca = we({}, zo, { view: 0, detail: 0 }),
	Fk = xt(ca),
	Du,
	Fu,
	Ho,
	El = we({}, ca, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: Gf,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0
				? e.fromElement === e.srcElement
					? e.toElement
					: e.fromElement
				: e.relatedTarget;
		},
		movementX: function (e) {
			return 'movementX' in e
				? e.movementX
				: (e !== Ho &&
						(Ho && e.type === 'mousemove'
							? ((Du = e.screenX - Ho.screenX), (Fu = e.screenY - Ho.screenY))
							: (Fu = Du = 0),
						(Ho = e)),
				  Du);
		},
		movementY: function (e) {
			return 'movementY' in e ? e.movementY : Fu;
		}
	}),
	nm = xt(El),
	Nk = we({}, El, { dataTransfer: 0 }),
	Vk = xt(Nk),
	jk = we({}, ca, { relatedTarget: 0 }),
	Nu = xt(jk),
	Uk = we({}, zo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Wk = xt(Uk),
	Hk = we({}, zo, {
		clipboardData: function (e) {
			return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
		}
	}),
	Gk = xt(Hk),
	qk = we({}, zo, { data: 0 }),
	om = xt(qk),
	Kk = {
		Esc: 'Escape',
		Spacebar: ' ',
		Left: 'ArrowLeft',
		Up: 'ArrowUp',
		Right: 'ArrowRight',
		Down: 'ArrowDown',
		Del: 'Delete',
		Win: 'OS',
		Menu: 'ContextMenu',
		Apps: 'ContextMenu',
		Scroll: 'ScrollLock',
		MozPrintableKey: 'Unidentified'
	},
	Yk = {
		8: 'Backspace',
		9: 'Tab',
		12: 'Clear',
		13: 'Enter',
		16: 'Shift',
		17: 'Control',
		18: 'Alt',
		19: 'Pause',
		20: 'CapsLock',
		27: 'Escape',
		32: ' ',
		33: 'PageUp',
		34: 'PageDown',
		35: 'End',
		36: 'Home',
		37: 'ArrowLeft',
		38: 'ArrowUp',
		39: 'ArrowRight',
		40: 'ArrowDown',
		45: 'Insert',
		46: 'Delete',
		112: 'F1',
		113: 'F2',
		114: 'F3',
		115: 'F4',
		116: 'F5',
		117: 'F6',
		118: 'F7',
		119: 'F8',
		120: 'F9',
		121: 'F10',
		122: 'F11',
		123: 'F12',
		144: 'NumLock',
		145: 'ScrollLock',
		224: 'Meta'
	},
	Xk = {
		Alt: 'altKey',
		Control: 'ctrlKey',
		Meta: 'metaKey',
		Shift: 'shiftKey'
	};
function Qk(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = Xk[e]) ? !!t[e] : !1;
}
function Gf() {
	return Qk;
}
var Zk = we({}, ca, {
		key: function (e) {
			if (e.key) {
				var t = Kk[e.key] || e.key;
				if (t !== 'Unidentified') return t;
			}
			return e.type === 'keypress'
				? ((e = ds(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
				: e.type === 'keydown' || e.type === 'keyup'
				? Yk[e.keyCode] || 'Unidentified'
				: '';
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Gf,
		charCode: function (e) {
			return e.type === 'keypress' ? ds(e) : 0;
		},
		keyCode: function (e) {
			return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === 'keypress'
				? ds(e)
				: e.type === 'keydown' || e.type === 'keyup'
				? e.keyCode
				: 0;
		}
	}),
	Jk = xt(Zk),
	e2 = we({}, El, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	}),
	im = xt(e2),
	t2 = we({}, ca, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Gf
	}),
	r2 = xt(t2),
	n2 = we({}, zo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	o2 = xt(n2),
	i2 = we({}, El, {
		deltaX: function (e) {
			return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function (e) {
			return 'deltaY' in e
				? e.deltaY
				: 'wheelDeltaY' in e
				? -e.wheelDeltaY
				: 'wheelDelta' in e
				? -e.wheelDelta
				: 0;
		},
		deltaZ: 0,
		deltaMode: 0
	}),
	a2 = xt(i2),
	s2 = [9, 13, 27, 32],
	qf = Sr && 'CompositionEvent' in window,
	di = null;
Sr && 'documentMode' in document && (di = document.documentMode);
var l2 = Sr && 'TextEvent' in window && !di,
	by = Sr && (!qf || (di && 8 < di && 11 >= di)),
	am = String.fromCharCode(32),
	sm = !1;
function Sy(e, t) {
	switch (e) {
		case 'keyup':
			return s2.indexOf(t.keyCode) !== -1;
		case 'keydown':
			return t.keyCode !== 229;
		case 'keypress':
		case 'mousedown':
		case 'focusout':
			return !0;
		default:
			return !1;
	}
}
function xy(e) {
	return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Gn = !1;
function u2(e, t) {
	switch (e) {
		case 'compositionend':
			return xy(t);
		case 'keypress':
			return t.which !== 32 ? null : ((sm = !0), am);
		case 'textInput':
			return (e = t.data), e === am && sm ? null : e;
		default:
			return null;
	}
}
function c2(e, t) {
	if (Gn)
		return e === 'compositionend' || (!qf && Sy(e, t))
			? ((e = yy()), (cs = Wf = Br = null), (Gn = !1), e)
			: null;
	switch (e) {
		case 'paste':
			return null;
		case 'keypress':
			if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which);
			}
			return null;
		case 'compositionend':
			return by && t.locale !== 'ko' ? null : t.data;
		default:
			return null;
	}
}
var d2 = {
	color: !0,
	date: !0,
	datetime: !0,
	'datetime-local': !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0
};
function lm(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === 'input' ? !!d2[e.type] : t === 'textarea';
}
function wy(e, t, r, n) {
	Jv(n),
		(t = Ns(t, 'onChange')),
		0 < t.length &&
			((r = new Hf('onChange', 'change', null, r, n)),
			e.push({ event: r, listeners: t }));
}
var fi = null,
	Fi = null;
function f2(e) {
	My(e, 0);
}
function Pl(e) {
	var t = Yn(e);
	if (Gv(t)) return e;
}
function p2(e, t) {
	if (e === 'change') return t;
}
var ky = !1;
if (Sr) {
	var Vu;
	if (Sr) {
		var ju = 'oninput' in document;
		if (!ju) {
			var um = document.createElement('div');
			um.setAttribute('oninput', 'return;'),
				(ju = typeof um.oninput == 'function');
		}
		Vu = ju;
	} else Vu = !1;
	ky = Vu && (!document.documentMode || 9 < document.documentMode);
}
function cm() {
	fi && (fi.detachEvent('onpropertychange', Cy), (Fi = fi = null));
}
function Cy(e) {
	if (e.propertyName === 'value' && Pl(Fi)) {
		var t = [];
		wy(t, Fi, e, Ff(e)), ny(f2, t);
	}
}
function h2(e, t, r) {
	e === 'focusin'
		? (cm(), (fi = t), (Fi = r), fi.attachEvent('onpropertychange', Cy))
		: e === 'focusout' && cm();
}
function m2(e) {
	if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
		return Pl(Fi);
}
function g2(e, t) {
	if (e === 'click') return Pl(t);
}
function v2(e, t) {
	if (e === 'input' || e === 'change') return Pl(t);
}
function y2(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var jt = typeof Object.is == 'function' ? Object.is : y2;
function Ni(e, t) {
	if (jt(e, t)) return !0;
	if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
		return !1;
	var r = Object.keys(e),
		n = Object.keys(t);
	if (r.length !== n.length) return !1;
	for (n = 0; n < r.length; n++) {
		var o = r[n];
		if (!Jc.call(t, o) || !jt(e[o], t[o])) return !1;
	}
	return !0;
}
function dm(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function fm(e, t) {
	var r = dm(e);
	e = 0;
	for (var n; r; ) {
		if (r.nodeType === 3) {
			if (((n = e + r.textContent.length), e <= t && n >= t))
				return { node: r, offset: t - e };
			e = n;
		}
		e: {
			for (; r; ) {
				if (r.nextSibling) {
					r = r.nextSibling;
					break e;
				}
				r = r.parentNode;
			}
			r = void 0;
		}
		r = dm(r);
	}
}
function _y(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? _y(e, t.parentNode)
			: 'contains' in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1;
}
function Ty() {
	for (var e = window, t = Ms(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var r = typeof t.contentWindow.location.href == 'string';
		} catch {
			r = !1;
		}
		if (r) e = t.contentWindow;
		else break;
		t = Ms(e.document);
	}
	return t;
}
function Kf(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return (
		t &&
		((t === 'input' &&
			(e.type === 'text' ||
				e.type === 'search' ||
				e.type === 'tel' ||
				e.type === 'url' ||
				e.type === 'password')) ||
			t === 'textarea' ||
			e.contentEditable === 'true')
	);
}
function b2(e) {
	var t = Ty(),
		r = e.focusedElem,
		n = e.selectionRange;
	if (
		t !== r &&
		r &&
		r.ownerDocument &&
		_y(r.ownerDocument.documentElement, r)
	) {
		if (n !== null && Kf(r)) {
			if (
				((t = n.start),
				(e = n.end),
				e === void 0 && (e = t),
				'selectionStart' in r)
			)
				(r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
			else if (
				((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
				e.getSelection)
			) {
				e = e.getSelection();
				var o = r.textContent.length,
					i = Math.min(n.start, o);
				(n = n.end === void 0 ? i : Math.min(n.end, o)),
					!e.extend && i > n && ((o = n), (n = i), (i = o)),
					(o = fm(r, i));
				var a = fm(r, n);
				o &&
					a &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== o.node ||
						e.anchorOffset !== o.offset ||
						e.focusNode !== a.node ||
						e.focusOffset !== a.offset) &&
					((t = t.createRange()),
					t.setStart(o.node, o.offset),
					e.removeAllRanges(),
					i > n
						? (e.addRange(t), e.extend(a.node, a.offset))
						: (t.setEnd(a.node, a.offset), e.addRange(t)));
			}
		}
		for (t = [], e = r; (e = e.parentNode); )
			e.nodeType === 1 &&
				t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
		for (typeof r.focus == 'function' && r.focus(), r = 0; r < t.length; r++)
			(e = t[r]),
				(e.element.scrollLeft = e.left),
				(e.element.scrollTop = e.top);
	}
}
var S2 = Sr && 'documentMode' in document && 11 >= document.documentMode,
	qn = null,
	yd = null,
	pi = null,
	bd = !1;
function pm(e, t, r) {
	var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
	bd ||
		qn == null ||
		qn !== Ms(n) ||
		((n = qn),
		'selectionStart' in n && Kf(n)
			? (n = { start: n.selectionStart, end: n.selectionEnd })
			: ((n = (
					(n.ownerDocument && n.ownerDocument.defaultView) ||
					window
			  ).getSelection()),
			  (n = {
					anchorNode: n.anchorNode,
					anchorOffset: n.anchorOffset,
					focusNode: n.focusNode,
					focusOffset: n.focusOffset
			  })),
		(pi && Ni(pi, n)) ||
			((pi = n),
			(n = Ns(yd, 'onSelect')),
			0 < n.length &&
				((t = new Hf('onSelect', 'select', null, t, r)),
				e.push({ event: t, listeners: n }),
				(t.target = qn))));
}
function Fa(e, t) {
	var r = {};
	return (
		(r[e.toLowerCase()] = t.toLowerCase()),
		(r['Webkit' + e] = 'webkit' + t),
		(r['Moz' + e] = 'moz' + t),
		r
	);
}
var Kn = {
		animationend: Fa('Animation', 'AnimationEnd'),
		animationiteration: Fa('Animation', 'AnimationIteration'),
		animationstart: Fa('Animation', 'AnimationStart'),
		transitionend: Fa('Transition', 'TransitionEnd')
	},
	Uu = {},
	Ey = {};
Sr &&
	((Ey = document.createElement('div').style),
	'AnimationEvent' in window ||
		(delete Kn.animationend.animation,
		delete Kn.animationiteration.animation,
		delete Kn.animationstart.animation),
	'TransitionEvent' in window || delete Kn.transitionend.transition);
function $l(e) {
	if (Uu[e]) return Uu[e];
	if (!Kn[e]) return e;
	var t = Kn[e],
		r;
	for (r in t) if (t.hasOwnProperty(r) && r in Ey) return (Uu[e] = t[r]);
	return e;
}
var Py = $l('animationend'),
	$y = $l('animationiteration'),
	Ry = $l('animationstart'),
	Ay = $l('transitionend'),
	zy = new Map(),
	hm =
		'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
			' '
		);
function en(e, t) {
	zy.set(e, t), zn(t, [e]);
}
for (var Wu = 0; Wu < hm.length; Wu++) {
	var Hu = hm[Wu],
		x2 = Hu.toLowerCase(),
		w2 = Hu[0].toUpperCase() + Hu.slice(1);
	en(x2, 'on' + w2);
}
en(Py, 'onAnimationEnd');
en($y, 'onAnimationIteration');
en(Ry, 'onAnimationStart');
en('dblclick', 'onDoubleClick');
en('focusin', 'onFocus');
en('focusout', 'onBlur');
en(Ay, 'onTransitionEnd');
So('onMouseEnter', ['mouseout', 'mouseover']);
So('onMouseLeave', ['mouseout', 'mouseover']);
So('onPointerEnter', ['pointerout', 'pointerover']);
So('onPointerLeave', ['pointerout', 'pointerover']);
zn(
	'onChange',
	'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
zn(
	'onSelect',
	'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
		' '
	)
);
zn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
zn(
	'onCompositionEnd',
	'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
zn(
	'onCompositionStart',
	'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
zn(
	'onCompositionUpdate',
	'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var oi =
		'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
			' '
		),
	k2 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(oi));
function mm(e, t, r) {
	var n = e.type || 'unknown-event';
	(e.currentTarget = r), xk(n, t, void 0, e), (e.currentTarget = null);
}
function My(e, t) {
	t = (t & 4) !== 0;
	for (var r = 0; r < e.length; r++) {
		var n = e[r],
			o = n.event;
		n = n.listeners;
		e: {
			var i = void 0;
			if (t)
				for (var a = n.length - 1; 0 <= a; a--) {
					var s = n[a],
						l = s.instance,
						u = s.currentTarget;
					if (((s = s.listener), l !== i && o.isPropagationStopped())) break e;
					mm(o, s, u), (i = l);
				}
			else
				for (a = 0; a < n.length; a++) {
					if (
						((s = n[a]),
						(l = s.instance),
						(u = s.currentTarget),
						(s = s.listener),
						l !== i && o.isPropagationStopped())
					)
						break e;
					mm(o, s, u), (i = l);
				}
		}
	}
	if (Os) throw ((e = hd), (Os = !1), (hd = null), e);
}
function fe(e, t) {
	var r = t[Cd];
	r === void 0 && (r = t[Cd] = new Set());
	var n = e + '__bubble';
	r.has(n) || (Ly(t, e, 2, !1), r.add(n));
}
function Gu(e, t, r) {
	var n = 0;
	t && (n |= 4), Ly(r, e, n, t);
}
var Na = '_reactListening' + Math.random().toString(36).slice(2);
function Vi(e) {
	if (!e[Na]) {
		(e[Na] = !0),
			Vv.forEach(function (r) {
				r !== 'selectionchange' && (k2.has(r) || Gu(r, !1, e), Gu(r, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[Na] || ((t[Na] = !0), Gu('selectionchange', !1, t));
	}
}
function Ly(e, t, r, n) {
	switch (vy(t)) {
		case 1:
			var o = Bk;
			break;
		case 4:
			o = Dk;
			break;
		default:
			o = Uf;
	}
	(r = o.bind(null, t, r, e)),
		(o = void 0),
		!pd ||
			(t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
			(o = !0),
		n
			? o !== void 0
				? e.addEventListener(t, r, { capture: !0, passive: o })
				: e.addEventListener(t, r, !0)
			: o !== void 0
			? e.addEventListener(t, r, { passive: o })
			: e.addEventListener(t, r, !1);
}
function qu(e, t, r, n, o) {
	var i = n;
	if (!(t & 1) && !(t & 2) && n !== null)
		e: for (;;) {
			if (n === null) return;
			var a = n.tag;
			if (a === 3 || a === 4) {
				var s = n.stateNode.containerInfo;
				if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
				if (a === 4)
					for (a = n.return; a !== null; ) {
						var l = a.tag;
						if (
							(l === 3 || l === 4) &&
							((l = a.stateNode.containerInfo),
							l === o || (l.nodeType === 8 && l.parentNode === o))
						)
							return;
						a = a.return;
					}
				for (; s !== null; ) {
					if (((a = vn(s)), a === null)) return;
					if (((l = a.tag), l === 5 || l === 6)) {
						n = i = a;
						continue e;
					}
					s = s.parentNode;
				}
			}
			n = n.return;
		}
	ny(function () {
		var u = i,
			c = Ff(r),
			d = [];
		e: {
			var f = zy.get(e);
			if (f !== void 0) {
				var p = Hf,
					v = e;
				switch (e) {
					case 'keypress':
						if (ds(r) === 0) break e;
					case 'keydown':
					case 'keyup':
						p = Jk;
						break;
					case 'focusin':
						(v = 'focus'), (p = Nu);
						break;
					case 'focusout':
						(v = 'blur'), (p = Nu);
						break;
					case 'beforeblur':
					case 'afterblur':
						p = Nu;
						break;
					case 'click':
						if (r.button === 2) break e;
					case 'auxclick':
					case 'dblclick':
					case 'mousedown':
					case 'mousemove':
					case 'mouseup':
					case 'mouseout':
					case 'mouseover':
					case 'contextmenu':
						p = nm;
						break;
					case 'drag':
					case 'dragend':
					case 'dragenter':
					case 'dragexit':
					case 'dragleave':
					case 'dragover':
					case 'dragstart':
					case 'drop':
						p = Vk;
						break;
					case 'touchcancel':
					case 'touchend':
					case 'touchmove':
					case 'touchstart':
						p = r2;
						break;
					case Py:
					case $y:
					case Ry:
						p = Wk;
						break;
					case Ay:
						p = o2;
						break;
					case 'scroll':
						p = Fk;
						break;
					case 'wheel':
						p = a2;
						break;
					case 'copy':
					case 'cut':
					case 'paste':
						p = Gk;
						break;
					case 'gotpointercapture':
					case 'lostpointercapture':
					case 'pointercancel':
					case 'pointerdown':
					case 'pointermove':
					case 'pointerout':
					case 'pointerover':
					case 'pointerup':
						p = im;
				}
				var b = (t & 4) !== 0,
					k = !b && e === 'scroll',
					h = b ? (f !== null ? f + 'Capture' : null) : f;
				b = [];
				for (var m = u, g; m !== null; ) {
					g = m;
					var S = g.stateNode;
					if (
						(g.tag === 5 &&
							S !== null &&
							((g = S),
							h !== null && ((S = Oi(m, h)), S != null && b.push(ji(m, S, g)))),
						k)
					)
						break;
					m = m.return;
				}
				0 < b.length &&
					((f = new p(f, v, null, r, c)), d.push({ event: f, listeners: b }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((f = e === 'mouseover' || e === 'pointerover'),
					(p = e === 'mouseout' || e === 'pointerout'),
					f &&
						r !== dd &&
						(v = r.relatedTarget || r.fromElement) &&
						(vn(v) || v[xr]))
				)
					break e;
				if (
					(p || f) &&
					((f =
						c.window === c
							? c
							: (f = c.ownerDocument)
							? f.defaultView || f.parentWindow
							: window),
					p
						? ((v = r.relatedTarget || r.toElement),
						  (p = u),
						  (v = v ? vn(v) : null),
						  v !== null &&
								((k = Mn(v)), v !== k || (v.tag !== 5 && v.tag !== 6)) &&
								(v = null))
						: ((p = null), (v = u)),
					p !== v)
				) {
					if (
						((b = nm),
						(S = 'onMouseLeave'),
						(h = 'onMouseEnter'),
						(m = 'mouse'),
						(e === 'pointerout' || e === 'pointerover') &&
							((b = im),
							(S = 'onPointerLeave'),
							(h = 'onPointerEnter'),
							(m = 'pointer')),
						(k = p == null ? f : Yn(p)),
						(g = v == null ? f : Yn(v)),
						(f = new b(S, m + 'leave', p, r, c)),
						(f.target = k),
						(f.relatedTarget = g),
						(S = null),
						vn(c) === u &&
							((b = new b(h, m + 'enter', v, r, c)),
							(b.target = g),
							(b.relatedTarget = k),
							(S = b)),
						(k = S),
						p && v)
					)
						t: {
							for (b = p, h = v, m = 0, g = b; g; g = Dn(g)) m++;
							for (g = 0, S = h; S; S = Dn(S)) g++;
							for (; 0 < m - g; ) (b = Dn(b)), m--;
							for (; 0 < g - m; ) (h = Dn(h)), g--;
							for (; m--; ) {
								if (b === h || (h !== null && b === h.alternate)) break t;
								(b = Dn(b)), (h = Dn(h));
							}
							b = null;
						}
					else b = null;
					p !== null && gm(d, f, p, b, !1),
						v !== null && k !== null && gm(d, k, v, b, !0);
				}
			}
			e: {
				if (
					((f = u ? Yn(u) : window),
					(p = f.nodeName && f.nodeName.toLowerCase()),
					p === 'select' || (p === 'input' && f.type === 'file'))
				)
					var P = p2;
				else if (lm(f))
					if (ky) P = v2;
					else {
						P = m2;
						var R = h2;
					}
				else
					(p = f.nodeName) &&
						p.toLowerCase() === 'input' &&
						(f.type === 'checkbox' || f.type === 'radio') &&
						(P = g2);
				if (P && (P = P(e, u))) {
					wy(d, P, r, c);
					break e;
				}
				R && R(e, f, u),
					e === 'focusout' &&
						(R = f._wrapperState) &&
						R.controlled &&
						f.type === 'number' &&
						ad(f, 'number', f.value);
			}
			switch (((R = u ? Yn(u) : window), e)) {
				case 'focusin':
					(lm(R) || R.contentEditable === 'true') &&
						((qn = R), (yd = u), (pi = null));
					break;
				case 'focusout':
					pi = yd = qn = null;
					break;
				case 'mousedown':
					bd = !0;
					break;
				case 'contextmenu':
				case 'mouseup':
				case 'dragend':
					(bd = !1), pm(d, r, c);
					break;
				case 'selectionchange':
					if (S2) break;
				case 'keydown':
				case 'keyup':
					pm(d, r, c);
			}
			var $;
			if (qf)
				e: {
					switch (e) {
						case 'compositionstart':
							var I = 'onCompositionStart';
							break e;
						case 'compositionend':
							I = 'onCompositionEnd';
							break e;
						case 'compositionupdate':
							I = 'onCompositionUpdate';
							break e;
					}
					I = void 0;
				}
			else
				Gn
					? Sy(e, r) && (I = 'onCompositionEnd')
					: e === 'keydown' && r.keyCode === 229 && (I = 'onCompositionStart');
			I &&
				(by &&
					r.locale !== 'ko' &&
					(Gn || I !== 'onCompositionStart'
						? I === 'onCompositionEnd' && Gn && ($ = yy())
						: ((Br = c),
						  (Wf = 'value' in Br ? Br.value : Br.textContent),
						  (Gn = !0))),
				(R = Ns(u, I)),
				0 < R.length &&
					((I = new om(I, e, null, r, c)),
					d.push({ event: I, listeners: R }),
					$ ? (I.data = $) : (($ = xy(r)), $ !== null && (I.data = $)))),
				($ = l2 ? u2(e, r) : c2(e, r)) &&
					((u = Ns(u, 'onBeforeInput')),
					0 < u.length &&
						((c = new om('onBeforeInput', 'beforeinput', null, r, c)),
						d.push({ event: c, listeners: u }),
						(c.data = $)));
		}
		My(d, t);
	});
}
function ji(e, t, r) {
	return { instance: e, listener: t, currentTarget: r };
}
function Ns(e, t) {
	for (var r = t + 'Capture', n = []; e !== null; ) {
		var o = e,
			i = o.stateNode;
		o.tag === 5 &&
			i !== null &&
			((o = i),
			(i = Oi(e, r)),
			i != null && n.unshift(ji(e, i, o)),
			(i = Oi(e, t)),
			i != null && n.push(ji(e, i, o))),
			(e = e.return);
	}
	return n;
}
function Dn(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function gm(e, t, r, n, o) {
	for (var i = t._reactName, a = []; r !== null && r !== n; ) {
		var s = r,
			l = s.alternate,
			u = s.stateNode;
		if (l !== null && l === n) break;
		s.tag === 5 &&
			u !== null &&
			((s = u),
			o
				? ((l = Oi(r, i)), l != null && a.unshift(ji(r, l, s)))
				: o || ((l = Oi(r, i)), l != null && a.push(ji(r, l, s)))),
			(r = r.return);
	}
	a.length !== 0 && e.push({ event: t, listeners: a });
}
var C2 = /\r\n?/g,
	_2 = /\u0000|\uFFFD/g;
function vm(e) {
	return (typeof e == 'string' ? e : '' + e)
		.replace(
			C2,
			`
`
		)
		.replace(_2, '');
}
function Va(e, t, r) {
	if (((t = vm(t)), vm(e) !== t && r)) throw Error(z(425));
}
function Vs() {}
var Sd = null,
	xd = null;
function wd(e, t) {
	return (
		e === 'textarea' ||
		e === 'noscript' ||
		typeof t.children == 'string' ||
		typeof t.children == 'number' ||
		(typeof t.dangerouslySetInnerHTML == 'object' &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	);
}
var kd = typeof setTimeout == 'function' ? setTimeout : void 0,
	T2 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
	ym = typeof Promise == 'function' ? Promise : void 0,
	E2 =
		typeof queueMicrotask == 'function'
			? queueMicrotask
			: typeof ym < 'u'
			? function (e) {
					return ym.resolve(null).then(e).catch(P2);
			  }
			: kd;
function P2(e) {
	setTimeout(function () {
		throw e;
	});
}
function Ku(e, t) {
	var r = t,
		n = 0;
	do {
		var o = r.nextSibling;
		if ((e.removeChild(r), o && o.nodeType === 8))
			if (((r = o.data), r === '/$')) {
				if (n === 0) {
					e.removeChild(o), Di(t);
					return;
				}
				n--;
			} else (r !== '$' && r !== '$?' && r !== '$!') || n++;
		r = o;
	} while (r);
	Di(t);
}
function Wr(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
			if (t === '/$') return null;
		}
	}
	return e;
}
function bm(e) {
	e = e.previousSibling;
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var r = e.data;
			if (r === '$' || r === '$!' || r === '$?') {
				if (t === 0) return e;
				t--;
			} else r === '/$' && t++;
		}
		e = e.previousSibling;
	}
	return null;
}
var Mo = Math.random().toString(36).slice(2),
	Qt = '__reactFiber$' + Mo,
	Ui = '__reactProps$' + Mo,
	xr = '__reactContainer$' + Mo,
	Cd = '__reactEvents$' + Mo,
	$2 = '__reactListeners$' + Mo,
	R2 = '__reactHandles$' + Mo;
function vn(e) {
	var t = e[Qt];
	if (t) return t;
	for (var r = e.parentNode; r; ) {
		if ((t = r[xr] || r[Qt])) {
			if (
				((r = t.alternate),
				t.child !== null || (r !== null && r.child !== null))
			)
				for (e = bm(e); e !== null; ) {
					if ((r = e[Qt])) return r;
					e = bm(e);
				}
			return t;
		}
		(e = r), (r = e.parentNode);
	}
	return null;
}
function da(e) {
	return (
		(e = e[Qt] || e[xr]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	);
}
function Yn(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(z(33));
}
function Rl(e) {
	return e[Ui] || null;
}
var _d = [],
	Xn = -1;
function tn(e) {
	return { current: e };
}
function he(e) {
	0 > Xn || ((e.current = _d[Xn]), (_d[Xn] = null), Xn--);
}
function de(e, t) {
	Xn++, (_d[Xn] = e.current), (e.current = t);
}
var Qr = {},
	He = tn(Qr),
	ot = tn(!1),
	En = Qr;
function xo(e, t) {
	var r = e.type.contextTypes;
	if (!r) return Qr;
	var n = e.stateNode;
	if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
		return n.__reactInternalMemoizedMaskedChildContext;
	var o = {},
		i;
	for (i in r) o[i] = t[i];
	return (
		n &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = o)),
		o
	);
}
function it(e) {
	return (e = e.childContextTypes), e != null;
}
function js() {
	he(ot), he(He);
}
function Sm(e, t, r) {
	if (He.current !== Qr) throw Error(z(168));
	de(He, t), de(ot, r);
}
function Oy(e, t, r) {
	var n = e.stateNode;
	if (((t = t.childContextTypes), typeof n.getChildContext != 'function'))
		return r;
	n = n.getChildContext();
	for (var o in n) if (!(o in t)) throw Error(z(108, hk(e) || 'Unknown', o));
	return we({}, r, n);
}
function Us(e) {
	return (
		(e =
			((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Qr),
		(En = He.current),
		de(He, e),
		de(ot, ot.current),
		!0
	);
}
function xm(e, t, r) {
	var n = e.stateNode;
	if (!n) throw Error(z(169));
	r
		? ((e = Oy(e, t, En)),
		  (n.__reactInternalMemoizedMergedChildContext = e),
		  he(ot),
		  he(He),
		  de(He, e))
		: he(ot),
		de(ot, r);
}
var pr = null,
	Al = !1,
	Yu = !1;
function Iy(e) {
	pr === null ? (pr = [e]) : pr.push(e);
}
function A2(e) {
	(Al = !0), Iy(e);
}
function rn() {
	if (!Yu && pr !== null) {
		Yu = !0;
		var e = 0,
			t = ie;
		try {
			var r = pr;
			for (ie = 1; e < r.length; e++) {
				var n = r[e];
				do n = n(!0);
				while (n !== null);
			}
			(pr = null), (Al = !1);
		} catch (o) {
			throw (pr !== null && (pr = pr.slice(e + 1)), sy(Nf, rn), o);
		} finally {
			(ie = t), (Yu = !1);
		}
	}
	return null;
}
var Qn = [],
	Zn = 0,
	Ws = null,
	Hs = 0,
	_t = [],
	Tt = 0,
	Pn = null,
	mr = 1,
	gr = '';
function fn(e, t) {
	(Qn[Zn++] = Hs), (Qn[Zn++] = Ws), (Ws = e), (Hs = t);
}
function By(e, t, r) {
	(_t[Tt++] = mr), (_t[Tt++] = gr), (_t[Tt++] = Pn), (Pn = e);
	var n = mr;
	e = gr;
	var o = 32 - Nt(n) - 1;
	(n &= ~(1 << o)), (r += 1);
	var i = 32 - Nt(t) + o;
	if (30 < i) {
		var a = o - (o % 5);
		(i = (n & ((1 << a) - 1)).toString(32)),
			(n >>= a),
			(o -= a),
			(mr = (1 << (32 - Nt(t) + o)) | (r << o) | n),
			(gr = i + e);
	} else (mr = (1 << i) | (r << o) | n), (gr = e);
}
function Yf(e) {
	e.return !== null && (fn(e, 1), By(e, 1, 0));
}
function Xf(e) {
	for (; e === Ws; )
		(Ws = Qn[--Zn]), (Qn[Zn] = null), (Hs = Qn[--Zn]), (Qn[Zn] = null);
	for (; e === Pn; )
		(Pn = _t[--Tt]),
			(_t[Tt] = null),
			(gr = _t[--Tt]),
			(_t[Tt] = null),
			(mr = _t[--Tt]),
			(_t[Tt] = null);
}
var mt = null,
	ht = null,
	ye = !1,
	Dt = null;
function Dy(e, t) {
	var r = Et(5, null, null, 0);
	(r.elementType = 'DELETED'),
		(r.stateNode = t),
		(r.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function wm(e, t) {
	switch (e.tag) {
		case 5:
			var r = e.type;
			return (
				(t =
					t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (mt = e), (ht = Wr(t.firstChild)), !0)
					: !1
			);
		case 6:
			return (
				(t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (mt = e), (ht = null), !0) : !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((r = Pn !== null ? { id: mr, overflow: gr } : null),
					  (e.memoizedState = {
							dehydrated: t,
							treeContext: r,
							retryLane: 1073741824
					  }),
					  (r = Et(18, null, null, 0)),
					  (r.stateNode = t),
					  (r.return = e),
					  (e.child = r),
					  (mt = e),
					  (ht = null),
					  !0)
					: !1
			);
		default:
			return !1;
	}
}
function Td(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ed(e) {
	if (ye) {
		var t = ht;
		if (t) {
			var r = t;
			if (!wm(e, t)) {
				if (Td(e)) throw Error(z(418));
				t = Wr(r.nextSibling);
				var n = mt;
				t && wm(e, t)
					? Dy(n, r)
					: ((e.flags = (e.flags & -4097) | 2), (ye = !1), (mt = e));
			}
		} else {
			if (Td(e)) throw Error(z(418));
			(e.flags = (e.flags & -4097) | 2), (ye = !1), (mt = e);
		}
	}
}
function km(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
		e = e.return;
	mt = e;
}
function ja(e) {
	if (e !== mt) return !1;
	if (!ye) return km(e), (ye = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== 'head' && t !== 'body' && !wd(e.type, e.memoizedProps))),
		t && (t = ht))
	) {
		if (Td(e)) throw (Fy(), Error(z(418)));
		for (; t; ) Dy(e, t), (t = Wr(t.nextSibling));
	}
	if ((km(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(z(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var r = e.data;
					if (r === '/$') {
						if (t === 0) {
							ht = Wr(e.nextSibling);
							break e;
						}
						t--;
					} else (r !== '$' && r !== '$!' && r !== '$?') || t++;
				}
				e = e.nextSibling;
			}
			ht = null;
		}
	} else ht = mt ? Wr(e.stateNode.nextSibling) : null;
	return !0;
}
function Fy() {
	for (var e = ht; e; ) e = Wr(e.nextSibling);
}
function wo() {
	(ht = mt = null), (ye = !1);
}
function Qf(e) {
	Dt === null ? (Dt = [e]) : Dt.push(e);
}
var z2 = _r.ReactCurrentBatchConfig;
function It(e, t) {
	if (e && e.defaultProps) {
		(t = we({}, t)), (e = e.defaultProps);
		for (var r in e) t[r] === void 0 && (t[r] = e[r]);
		return t;
	}
	return t;
}
var Gs = tn(null),
	qs = null,
	Jn = null,
	Zf = null;
function Jf() {
	Zf = Jn = qs = null;
}
function ep(e) {
	var t = Gs.current;
	he(Gs), (e._currentValue = t);
}
function Pd(e, t, r) {
	for (; e !== null; ) {
		var n = e.alternate;
		if (
			((e.childLanes & t) !== t
				? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
				: n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
			e === r)
		)
			break;
		e = e.return;
	}
}
function uo(e, t) {
	(qs = e),
		(Zf = Jn = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (rt = !0), (e.firstContext = null));
}
function Rt(e) {
	var t = e._currentValue;
	if (Zf !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), Jn === null)) {
			if (qs === null) throw Error(z(308));
			(Jn = e), (qs.dependencies = { lanes: 0, firstContext: e });
		} else Jn = Jn.next = e;
	return t;
}
var yn = null;
function tp(e) {
	yn === null ? (yn = [e]) : yn.push(e);
}
function Ny(e, t, r, n) {
	var o = t.interleaved;
	return (
		o === null ? ((r.next = r), tp(t)) : ((r.next = o.next), (o.next = r)),
		(t.interleaved = r),
		wr(e, n)
	);
}
function wr(e, t) {
	e.lanes |= t;
	var r = e.alternate;
	for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
		(e.childLanes |= t),
			(r = e.alternate),
			r !== null && (r.childLanes |= t),
			(r = e),
			(e = e.return);
	return r.tag === 3 ? r.stateNode : null;
}
var zr = !1;
function rp(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null
	};
}
function Vy(e, t) {
	(e = e.updateQueue),
		t.updateQueue === e &&
			(t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects
			});
}
function yr(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null
	};
}
function Hr(e, t, r) {
	var n = e.updateQueue;
	if (n === null) return null;
	if (((n = n.shared), Q & 2)) {
		var o = n.pending;
		return (
			o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
			(n.pending = t),
			wr(e, r)
		);
	}
	return (
		(o = n.interleaved),
		o === null ? ((t.next = t), tp(n)) : ((t.next = o.next), (o.next = t)),
		(n.interleaved = t),
		wr(e, r)
	);
}
function fs(e, t, r) {
	if (
		((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
	) {
		var n = t.lanes;
		(n &= e.pendingLanes), (r |= n), (t.lanes = r), Vf(e, r);
	}
}
function Cm(e, t) {
	var r = e.updateQueue,
		n = e.alternate;
	if (n !== null && ((n = n.updateQueue), r === n)) {
		var o = null,
			i = null;
		if (((r = r.firstBaseUpdate), r !== null)) {
			do {
				var a = {
					eventTime: r.eventTime,
					lane: r.lane,
					tag: r.tag,
					payload: r.payload,
					callback: r.callback,
					next: null
				};
				i === null ? (o = i = a) : (i = i.next = a), (r = r.next);
			} while (r !== null);
			i === null ? (o = i = t) : (i = i.next = t);
		} else o = i = t;
		(r = {
			baseState: n.baseState,
			firstBaseUpdate: o,
			lastBaseUpdate: i,
			shared: n.shared,
			effects: n.effects
		}),
			(e.updateQueue = r);
		return;
	}
	(e = r.lastBaseUpdate),
		e === null ? (r.firstBaseUpdate = t) : (e.next = t),
		(r.lastBaseUpdate = t);
}
function Ks(e, t, r, n) {
	var o = e.updateQueue;
	zr = !1;
	var i = o.firstBaseUpdate,
		a = o.lastBaseUpdate,
		s = o.shared.pending;
	if (s !== null) {
		o.shared.pending = null;
		var l = s,
			u = l.next;
		(l.next = null), a === null ? (i = u) : (a.next = u), (a = l);
		var c = e.alternate;
		c !== null &&
			((c = c.updateQueue),
			(s = c.lastBaseUpdate),
			s !== a &&
				(s === null ? (c.firstBaseUpdate = u) : (s.next = u),
				(c.lastBaseUpdate = l)));
	}
	if (i !== null) {
		var d = o.baseState;
		(a = 0), (c = u = l = null), (s = i);
		do {
			var f = s.lane,
				p = s.eventTime;
			if ((n & f) === f) {
				c !== null &&
					(c = c.next =
						{
							eventTime: p,
							lane: 0,
							tag: s.tag,
							payload: s.payload,
							callback: s.callback,
							next: null
						});
				e: {
					var v = e,
						b = s;
					switch (((f = t), (p = r), b.tag)) {
						case 1:
							if (((v = b.payload), typeof v == 'function')) {
								d = v.call(p, d, f);
								break e;
							}
							d = v;
							break e;
						case 3:
							v.flags = (v.flags & -65537) | 128;
						case 0:
							if (
								((v = b.payload),
								(f = typeof v == 'function' ? v.call(p, d, f) : v),
								f == null)
							)
								break e;
							d = we({}, d, f);
							break e;
						case 2:
							zr = !0;
					}
				}
				s.callback !== null &&
					s.lane !== 0 &&
					((e.flags |= 64),
					(f = o.effects),
					f === null ? (o.effects = [s]) : f.push(s));
			} else
				(p = {
					eventTime: p,
					lane: f,
					tag: s.tag,
					payload: s.payload,
					callback: s.callback,
					next: null
				}),
					c === null ? ((u = c = p), (l = d)) : (c = c.next = p),
					(a |= f);
			if (((s = s.next), s === null)) {
				if (((s = o.shared.pending), s === null)) break;
				(f = s),
					(s = f.next),
					(f.next = null),
					(o.lastBaseUpdate = f),
					(o.shared.pending = null);
			}
		} while (1);
		if (
			(c === null && (l = d),
			(o.baseState = l),
			(o.firstBaseUpdate = u),
			(o.lastBaseUpdate = c),
			(t = o.shared.interleaved),
			t !== null)
		) {
			o = t;
			do (a |= o.lane), (o = o.next);
			while (o !== t);
		} else i === null && (o.shared.lanes = 0);
		(Rn |= a), (e.lanes = a), (e.memoizedState = d);
	}
}
function _m(e, t, r) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var n = e[t],
				o = n.callback;
			if (o !== null) {
				if (((n.callback = null), (n = r), typeof o != 'function'))
					throw Error(z(191, o));
				o.call(n);
			}
		}
}
var jy = new Nv.Component().refs;
function $d(e, t, r, n) {
	(t = e.memoizedState),
		(r = r(n, t)),
		(r = r == null ? t : we({}, t, r)),
		(e.memoizedState = r),
		e.lanes === 0 && (e.updateQueue.baseState = r);
}
var zl = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? Mn(e) === e : !1;
	},
	enqueueSetState: function (e, t, r) {
		e = e._reactInternals;
		var n = Xe(),
			o = qr(e),
			i = yr(n, o);
		(i.payload = t),
			r != null && (i.callback = r),
			(t = Hr(e, i, o)),
			t !== null && (Vt(t, e, o, n), fs(t, e, o));
	},
	enqueueReplaceState: function (e, t, r) {
		e = e._reactInternals;
		var n = Xe(),
			o = qr(e),
			i = yr(n, o);
		(i.tag = 1),
			(i.payload = t),
			r != null && (i.callback = r),
			(t = Hr(e, i, o)),
			t !== null && (Vt(t, e, o, n), fs(t, e, o));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var r = Xe(),
			n = qr(e),
			o = yr(r, n);
		(o.tag = 2),
			t != null && (o.callback = t),
			(t = Hr(e, o, n)),
			t !== null && (Vt(t, e, n, r), fs(t, e, n));
	}
};
function Tm(e, t, r, n, o, i, a) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == 'function'
			? e.shouldComponentUpdate(n, i, a)
			: t.prototype && t.prototype.isPureReactComponent
			? !Ni(r, n) || !Ni(o, i)
			: !0
	);
}
function Uy(e, t, r) {
	var n = !1,
		o = Qr,
		i = t.contextType;
	return (
		typeof i == 'object' && i !== null
			? (i = Rt(i))
			: ((o = it(t) ? En : He.current),
			  (n = t.contextTypes),
			  (i = (n = n != null) ? xo(e, o) : Qr)),
		(t = new t(r, i)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = zl),
		(e.stateNode = t),
		(t._reactInternals = e),
		n &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = o),
			(e.__reactInternalMemoizedMaskedChildContext = i)),
		t
	);
}
function Em(e, t, r, n) {
	(e = t.state),
		typeof t.componentWillReceiveProps == 'function' &&
			t.componentWillReceiveProps(r, n),
		typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
			t.UNSAFE_componentWillReceiveProps(r, n),
		t.state !== e && zl.enqueueReplaceState(t, t.state, null);
}
function Rd(e, t, r, n) {
	var o = e.stateNode;
	(o.props = r), (o.state = e.memoizedState), (o.refs = jy), rp(e);
	var i = t.contextType;
	typeof i == 'object' && i !== null
		? (o.context = Rt(i))
		: ((i = it(t) ? En : He.current), (o.context = xo(e, i))),
		(o.state = e.memoizedState),
		(i = t.getDerivedStateFromProps),
		typeof i == 'function' && ($d(e, t, i, r), (o.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == 'function' ||
			typeof o.getSnapshotBeforeUpdate == 'function' ||
			(typeof o.UNSAFE_componentWillMount != 'function' &&
				typeof o.componentWillMount != 'function') ||
			((t = o.state),
			typeof o.componentWillMount == 'function' && o.componentWillMount(),
			typeof o.UNSAFE_componentWillMount == 'function' &&
				o.UNSAFE_componentWillMount(),
			t !== o.state && zl.enqueueReplaceState(o, o.state, null),
			Ks(e, r, o, n),
			(o.state = e.memoizedState)),
		typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Go(e, t, r) {
	if (
		((e = r.ref), e !== null && typeof e != 'function' && typeof e != 'object')
	) {
		if (r._owner) {
			if (((r = r._owner), r)) {
				if (r.tag !== 1) throw Error(z(309));
				var n = r.stateNode;
			}
			if (!n) throw Error(z(147, e));
			var o = n,
				i = '' + e;
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == 'function' &&
				t.ref._stringRef === i
				? t.ref
				: ((t = function (a) {
						var s = o.refs;
						s === jy && (s = o.refs = {}),
							a === null ? delete s[i] : (s[i] = a);
				  }),
				  (t._stringRef = i),
				  t);
		}
		if (typeof e != 'string') throw Error(z(284));
		if (!r._owner) throw Error(z(290, e));
	}
	return e;
}
function Ua(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			z(
				31,
				e === '[object Object]'
					? 'object with keys {' + Object.keys(t).join(', ') + '}'
					: e
			)
		))
	);
}
function Pm(e) {
	var t = e._init;
	return t(e._payload);
}
function Wy(e) {
	function t(h, m) {
		if (e) {
			var g = h.deletions;
			g === null ? ((h.deletions = [m]), (h.flags |= 16)) : g.push(m);
		}
	}
	function r(h, m) {
		if (!e) return null;
		for (; m !== null; ) t(h, m), (m = m.sibling);
		return null;
	}
	function n(h, m) {
		for (h = new Map(); m !== null; )
			m.key !== null ? h.set(m.key, m) : h.set(m.index, m), (m = m.sibling);
		return h;
	}
	function o(h, m) {
		return (h = Kr(h, m)), (h.index = 0), (h.sibling = null), h;
	}
	function i(h, m, g) {
		return (
			(h.index = g),
			e
				? ((g = h.alternate),
				  g !== null
						? ((g = g.index), g < m ? ((h.flags |= 2), m) : g)
						: ((h.flags |= 2), m))
				: ((h.flags |= 1048576), m)
		);
	}
	function a(h) {
		return e && h.alternate === null && (h.flags |= 2), h;
	}
	function s(h, m, g, S) {
		return m === null || m.tag !== 6
			? ((m = rc(g, h.mode, S)), (m.return = h), m)
			: ((m = o(m, g)), (m.return = h), m);
	}
	function l(h, m, g, S) {
		var P = g.type;
		return P === Hn
			? c(h, m, g.props.children, S, g.key)
			: m !== null &&
			  (m.elementType === P ||
					(typeof P == 'object' &&
						P !== null &&
						P.$$typeof === Ar &&
						Pm(P) === m.type))
			? ((S = o(m, g.props)), (S.ref = Go(h, m, g)), (S.return = h), S)
			: ((S = ys(g.type, g.key, g.props, null, h.mode, S)),
			  (S.ref = Go(h, m, g)),
			  (S.return = h),
			  S);
	}
	function u(h, m, g, S) {
		return m === null ||
			m.tag !== 4 ||
			m.stateNode.containerInfo !== g.containerInfo ||
			m.stateNode.implementation !== g.implementation
			? ((m = nc(g, h.mode, S)), (m.return = h), m)
			: ((m = o(m, g.children || [])), (m.return = h), m);
	}
	function c(h, m, g, S, P) {
		return m === null || m.tag !== 7
			? ((m = kn(g, h.mode, S, P)), (m.return = h), m)
			: ((m = o(m, g)), (m.return = h), m);
	}
	function d(h, m, g) {
		if ((typeof m == 'string' && m !== '') || typeof m == 'number')
			return (m = rc('' + m, h.mode, g)), (m.return = h), m;
		if (typeof m == 'object' && m !== null) {
			switch (m.$$typeof) {
				case za:
					return (
						(g = ys(m.type, m.key, m.props, null, h.mode, g)),
						(g.ref = Go(h, null, m)),
						(g.return = h),
						g
					);
				case Wn:
					return (m = nc(m, h.mode, g)), (m.return = h), m;
				case Ar:
					var S = m._init;
					return d(h, S(m._payload), g);
			}
			if (ri(m) || Vo(m))
				return (m = kn(m, h.mode, g, null)), (m.return = h), m;
			Ua(h, m);
		}
		return null;
	}
	function f(h, m, g, S) {
		var P = m !== null ? m.key : null;
		if ((typeof g == 'string' && g !== '') || typeof g == 'number')
			return P !== null ? null : s(h, m, '' + g, S);
		if (typeof g == 'object' && g !== null) {
			switch (g.$$typeof) {
				case za:
					return g.key === P ? l(h, m, g, S) : null;
				case Wn:
					return g.key === P ? u(h, m, g, S) : null;
				case Ar:
					return (P = g._init), f(h, m, P(g._payload), S);
			}
			if (ri(g) || Vo(g)) return P !== null ? null : c(h, m, g, S, null);
			Ua(h, g);
		}
		return null;
	}
	function p(h, m, g, S, P) {
		if ((typeof S == 'string' && S !== '') || typeof S == 'number')
			return (h = h.get(g) || null), s(m, h, '' + S, P);
		if (typeof S == 'object' && S !== null) {
			switch (S.$$typeof) {
				case za:
					return (h = h.get(S.key === null ? g : S.key) || null), l(m, h, S, P);
				case Wn:
					return (h = h.get(S.key === null ? g : S.key) || null), u(m, h, S, P);
				case Ar:
					var R = S._init;
					return p(h, m, g, R(S._payload), P);
			}
			if (ri(S) || Vo(S)) return (h = h.get(g) || null), c(m, h, S, P, null);
			Ua(m, S);
		}
		return null;
	}
	function v(h, m, g, S) {
		for (
			var P = null, R = null, $ = m, I = (m = 0), E = null;
			$ !== null && I < g.length;
			I++
		) {
			$.index > I ? ((E = $), ($ = null)) : (E = $.sibling);
			var T = f(h, $, g[I], S);
			if (T === null) {
				$ === null && ($ = E);
				break;
			}
			e && $ && T.alternate === null && t(h, $),
				(m = i(T, m, I)),
				R === null ? (P = T) : (R.sibling = T),
				(R = T),
				($ = E);
		}
		if (I === g.length) return r(h, $), ye && fn(h, I), P;
		if ($ === null) {
			for (; I < g.length; I++)
				($ = d(h, g[I], S)),
					$ !== null &&
						((m = i($, m, I)), R === null ? (P = $) : (R.sibling = $), (R = $));
			return ye && fn(h, I), P;
		}
		for ($ = n(h, $); I < g.length; I++)
			(E = p($, h, I, g[I], S)),
				E !== null &&
					(e && E.alternate !== null && $.delete(E.key === null ? I : E.key),
					(m = i(E, m, I)),
					R === null ? (P = E) : (R.sibling = E),
					(R = E));
		return (
			e &&
				$.forEach(function (M) {
					return t(h, M);
				}),
			ye && fn(h, I),
			P
		);
	}
	function b(h, m, g, S) {
		var P = Vo(g);
		if (typeof P != 'function') throw Error(z(150));
		if (((g = P.call(g)), g == null)) throw Error(z(151));
		for (
			var R = (P = null), $ = m, I = (m = 0), E = null, T = g.next();
			$ !== null && !T.done;
			I++, T = g.next()
		) {
			$.index > I ? ((E = $), ($ = null)) : (E = $.sibling);
			var M = f(h, $, T.value, S);
			if (M === null) {
				$ === null && ($ = E);
				break;
			}
			e && $ && M.alternate === null && t(h, $),
				(m = i(M, m, I)),
				R === null ? (P = M) : (R.sibling = M),
				(R = M),
				($ = E);
		}
		if (T.done) return r(h, $), ye && fn(h, I), P;
		if ($ === null) {
			for (; !T.done; I++, T = g.next())
				(T = d(h, T.value, S)),
					T !== null &&
						((m = i(T, m, I)), R === null ? (P = T) : (R.sibling = T), (R = T));
			return ye && fn(h, I), P;
		}
		for ($ = n(h, $); !T.done; I++, T = g.next())
			(T = p($, h, I, T.value, S)),
				T !== null &&
					(e && T.alternate !== null && $.delete(T.key === null ? I : T.key),
					(m = i(T, m, I)),
					R === null ? (P = T) : (R.sibling = T),
					(R = T));
		return (
			e &&
				$.forEach(function (N) {
					return t(h, N);
				}),
			ye && fn(h, I),
			P
		);
	}
	function k(h, m, g, S) {
		if (
			(typeof g == 'object' &&
				g !== null &&
				g.type === Hn &&
				g.key === null &&
				(g = g.props.children),
			typeof g == 'object' && g !== null)
		) {
			switch (g.$$typeof) {
				case za:
					e: {
						for (var P = g.key, R = m; R !== null; ) {
							if (R.key === P) {
								if (((P = g.type), P === Hn)) {
									if (R.tag === 7) {
										r(h, R.sibling),
											(m = o(R, g.props.children)),
											(m.return = h),
											(h = m);
										break e;
									}
								} else if (
									R.elementType === P ||
									(typeof P == 'object' &&
										P !== null &&
										P.$$typeof === Ar &&
										Pm(P) === R.type)
								) {
									r(h, R.sibling),
										(m = o(R, g.props)),
										(m.ref = Go(h, R, g)),
										(m.return = h),
										(h = m);
									break e;
								}
								r(h, R);
								break;
							} else t(h, R);
							R = R.sibling;
						}
						g.type === Hn
							? ((m = kn(g.props.children, h.mode, S, g.key)),
							  (m.return = h),
							  (h = m))
							: ((S = ys(g.type, g.key, g.props, null, h.mode, S)),
							  (S.ref = Go(h, m, g)),
							  (S.return = h),
							  (h = S));
					}
					return a(h);
				case Wn:
					e: {
						for (R = g.key; m !== null; ) {
							if (m.key === R)
								if (
									m.tag === 4 &&
									m.stateNode.containerInfo === g.containerInfo &&
									m.stateNode.implementation === g.implementation
								) {
									r(h, m.sibling),
										(m = o(m, g.children || [])),
										(m.return = h),
										(h = m);
									break e;
								} else {
									r(h, m);
									break;
								}
							else t(h, m);
							m = m.sibling;
						}
						(m = nc(g, h.mode, S)), (m.return = h), (h = m);
					}
					return a(h);
				case Ar:
					return (R = g._init), k(h, m, R(g._payload), S);
			}
			if (ri(g)) return v(h, m, g, S);
			if (Vo(g)) return b(h, m, g, S);
			Ua(h, g);
		}
		return (typeof g == 'string' && g !== '') || typeof g == 'number'
			? ((g = '' + g),
			  m !== null && m.tag === 6
					? (r(h, m.sibling), (m = o(m, g)), (m.return = h), (h = m))
					: (r(h, m), (m = rc(g, h.mode, S)), (m.return = h), (h = m)),
			  a(h))
			: r(h, m);
	}
	return k;
}
var ko = Wy(!0),
	Hy = Wy(!1),
	fa = {},
	tr = tn(fa),
	Wi = tn(fa),
	Hi = tn(fa);
function bn(e) {
	if (e === fa) throw Error(z(174));
	return e;
}
function np(e, t) {
	switch ((de(Hi, t), de(Wi, e), de(tr, fa), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : ld(null, '');
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = ld(t, e));
	}
	he(tr), de(tr, t);
}
function Co() {
	he(tr), he(Wi), he(Hi);
}
function Gy(e) {
	bn(Hi.current);
	var t = bn(tr.current),
		r = ld(t, e.type);
	t !== r && (de(Wi, e), de(tr, r));
}
function op(e) {
	Wi.current === e && (he(tr), he(Wi));
}
var Se = tn(0);
function Ys(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var r = t.memoizedState;
			if (
				r !== null &&
				((r = r.dehydrated), r === null || r.data === '$?' || r.data === '$!')
			)
				return t;
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t;
		} else if (t.child !== null) {
			(t.child.return = t), (t = t.child);
			continue;
		}
		if (t === e) break;
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null;
			t = t.return;
		}
		(t.sibling.return = t.return), (t = t.sibling);
	}
	return null;
}
var Xu = [];
function ip() {
	for (var e = 0; e < Xu.length; e++)
		Xu[e]._workInProgressVersionPrimary = null;
	Xu.length = 0;
}
var ps = _r.ReactCurrentDispatcher,
	Qu = _r.ReactCurrentBatchConfig,
	$n = 0,
	xe = null,
	Re = null,
	Me = null,
	Xs = !1,
	hi = !1,
	Gi = 0,
	M2 = 0;
function Ve() {
	throw Error(z(321));
}
function ap(e, t) {
	if (t === null) return !1;
	for (var r = 0; r < t.length && r < e.length; r++)
		if (!jt(e[r], t[r])) return !1;
	return !0;
}
function sp(e, t, r, n, o, i) {
	if (
		(($n = i),
		(xe = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(ps.current = e === null || e.memoizedState === null ? B2 : D2),
		(e = r(n, o)),
		hi)
	) {
		i = 0;
		do {
			if (((hi = !1), (Gi = 0), 25 <= i)) throw Error(z(301));
			(i += 1),
				(Me = Re = null),
				(t.updateQueue = null),
				(ps.current = F2),
				(e = r(n, o));
		} while (hi);
	}
	if (
		((ps.current = Qs),
		(t = Re !== null && Re.next !== null),
		($n = 0),
		(Me = Re = xe = null),
		(Xs = !1),
		t)
	)
		throw Error(z(300));
	return e;
}
function lp() {
	var e = Gi !== 0;
	return (Gi = 0), e;
}
function Gt() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null
	};
	return Me === null ? (xe.memoizedState = Me = e) : (Me = Me.next = e), Me;
}
function At() {
	if (Re === null) {
		var e = xe.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = Re.next;
	var t = Me === null ? xe.memoizedState : Me.next;
	if (t !== null) (Me = t), (Re = e);
	else {
		if (e === null) throw Error(z(310));
		(Re = e),
			(e = {
				memoizedState: Re.memoizedState,
				baseState: Re.baseState,
				baseQueue: Re.baseQueue,
				queue: Re.queue,
				next: null
			}),
			Me === null ? (xe.memoizedState = Me = e) : (Me = Me.next = e);
	}
	return Me;
}
function qi(e, t) {
	return typeof t == 'function' ? t(e) : t;
}
function Zu(e) {
	var t = At(),
		r = t.queue;
	if (r === null) throw Error(z(311));
	r.lastRenderedReducer = e;
	var n = Re,
		o = n.baseQueue,
		i = r.pending;
	if (i !== null) {
		if (o !== null) {
			var a = o.next;
			(o.next = i.next), (i.next = a);
		}
		(n.baseQueue = o = i), (r.pending = null);
	}
	if (o !== null) {
		(i = o.next), (n = n.baseState);
		var s = (a = null),
			l = null,
			u = i;
		do {
			var c = u.lane;
			if (($n & c) === c)
				l !== null &&
					(l = l.next =
						{
							lane: 0,
							action: u.action,
							hasEagerState: u.hasEagerState,
							eagerState: u.eagerState,
							next: null
						}),
					(n = u.hasEagerState ? u.eagerState : e(n, u.action));
			else {
				var d = {
					lane: c,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				};
				l === null ? ((s = l = d), (a = n)) : (l = l.next = d),
					(xe.lanes |= c),
					(Rn |= c);
			}
			u = u.next;
		} while (u !== null && u !== i);
		l === null ? (a = n) : (l.next = s),
			jt(n, t.memoizedState) || (rt = !0),
			(t.memoizedState = n),
			(t.baseState = a),
			(t.baseQueue = l),
			(r.lastRenderedState = n);
	}
	if (((e = r.interleaved), e !== null)) {
		o = e;
		do (i = o.lane), (xe.lanes |= i), (Rn |= i), (o = o.next);
		while (o !== e);
	} else o === null && (r.lanes = 0);
	return [t.memoizedState, r.dispatch];
}
function Ju(e) {
	var t = At(),
		r = t.queue;
	if (r === null) throw Error(z(311));
	r.lastRenderedReducer = e;
	var n = r.dispatch,
		o = r.pending,
		i = t.memoizedState;
	if (o !== null) {
		r.pending = null;
		var a = (o = o.next);
		do (i = e(i, a.action)), (a = a.next);
		while (a !== o);
		jt(i, t.memoizedState) || (rt = !0),
			(t.memoizedState = i),
			t.baseQueue === null && (t.baseState = i),
			(r.lastRenderedState = i);
	}
	return [i, n];
}
function qy() {}
function Ky(e, t) {
	var r = xe,
		n = At(),
		o = t(),
		i = !jt(n.memoizedState, o);
	if (
		(i && ((n.memoizedState = o), (rt = !0)),
		(n = n.queue),
		up(Qy.bind(null, r, n, e), [e]),
		n.getSnapshot !== t || i || (Me !== null && Me.memoizedState.tag & 1))
	) {
		if (
			((r.flags |= 2048),
			Ki(9, Xy.bind(null, r, n, o, t), void 0, null),
			Le === null)
		)
			throw Error(z(349));
		$n & 30 || Yy(r, t, o);
	}
	return o;
}
function Yy(e, t, r) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: r }),
		(t = xe.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (xe.updateQueue = t),
			  (t.stores = [e]))
			: ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function Xy(e, t, r, n) {
	(t.value = r), (t.getSnapshot = n), Zy(t) && Jy(e);
}
function Qy(e, t, r) {
	return r(function () {
		Zy(t) && Jy(e);
	});
}
function Zy(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var r = t();
		return !jt(e, r);
	} catch {
		return !0;
	}
}
function Jy(e) {
	var t = wr(e, 1);
	t !== null && Vt(t, e, 1, -1);
}
function $m(e) {
	var t = Gt();
	return (
		typeof e == 'function' && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: qi,
			lastRenderedState: e
		}),
		(t.queue = e),
		(e = e.dispatch = I2.bind(null, xe, e)),
		[t.memoizedState, e]
	);
}
function Ki(e, t, r, n) {
	return (
		(e = { tag: e, create: t, destroy: r, deps: n, next: null }),
		(t = xe.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (xe.updateQueue = t),
			  (t.lastEffect = e.next = e))
			: ((r = t.lastEffect),
			  r === null
					? (t.lastEffect = e.next = e)
					: ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
		e
	);
}
function e1() {
	return At().memoizedState;
}
function hs(e, t, r, n) {
	var o = Gt();
	(xe.flags |= e),
		(o.memoizedState = Ki(1 | t, r, void 0, n === void 0 ? null : n));
}
function Ml(e, t, r, n) {
	var o = At();
	n = n === void 0 ? null : n;
	var i = void 0;
	if (Re !== null) {
		var a = Re.memoizedState;
		if (((i = a.destroy), n !== null && ap(n, a.deps))) {
			o.memoizedState = Ki(t, r, i, n);
			return;
		}
	}
	(xe.flags |= e), (o.memoizedState = Ki(1 | t, r, i, n));
}
function Rm(e, t) {
	return hs(8390656, 8, e, t);
}
function up(e, t) {
	return Ml(2048, 8, e, t);
}
function t1(e, t) {
	return Ml(4, 2, e, t);
}
function r1(e, t) {
	return Ml(4, 4, e, t);
}
function n1(e, t) {
	if (typeof t == 'function')
		return (
			(e = e()),
			t(e),
			function () {
				t(null);
			}
		);
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function () {
				t.current = null;
			}
		);
}
function o1(e, t, r) {
	return (
		(r = r != null ? r.concat([e]) : null), Ml(4, 4, n1.bind(null, t, e), r)
	);
}
function cp() {}
function i1(e, t) {
	var r = At();
	t = t === void 0 ? null : t;
	var n = r.memoizedState;
	return n !== null && t !== null && ap(t, n[1])
		? n[0]
		: ((r.memoizedState = [e, t]), e);
}
function a1(e, t) {
	var r = At();
	t = t === void 0 ? null : t;
	var n = r.memoizedState;
	return n !== null && t !== null && ap(t, n[1])
		? n[0]
		: ((e = e()), (r.memoizedState = [e, t]), e);
}
function s1(e, t, r) {
	return $n & 21
		? (jt(r, t) || ((r = cy()), (xe.lanes |= r), (Rn |= r), (e.baseState = !0)),
		  t)
		: (e.baseState && ((e.baseState = !1), (rt = !0)), (e.memoizedState = r));
}
function L2(e, t) {
	var r = ie;
	(ie = r !== 0 && 4 > r ? r : 4), e(!0);
	var n = Qu.transition;
	Qu.transition = {};
	try {
		e(!1), t();
	} finally {
		(ie = r), (Qu.transition = n);
	}
}
function l1() {
	return At().memoizedState;
}
function O2(e, t, r) {
	var n = qr(e);
	if (
		((r = {
			lane: n,
			action: r,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}),
		u1(e))
	)
		c1(t, r);
	else if (((r = Ny(e, t, r, n)), r !== null)) {
		var o = Xe();
		Vt(r, e, n, o), d1(r, t, n);
	}
}
function I2(e, t, r) {
	var n = qr(e),
		o = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
	if (u1(e)) c1(t, o);
	else {
		var i = e.alternate;
		if (
			e.lanes === 0 &&
			(i === null || i.lanes === 0) &&
			((i = t.lastRenderedReducer), i !== null)
		)
			try {
				var a = t.lastRenderedState,
					s = i(a, r);
				if (((o.hasEagerState = !0), (o.eagerState = s), jt(s, a))) {
					var l = t.interleaved;
					l === null
						? ((o.next = o), tp(t))
						: ((o.next = l.next), (l.next = o)),
						(t.interleaved = o);
					return;
				}
			} catch {
			} finally {
			}
		(r = Ny(e, t, o, n)),
			r !== null && ((o = Xe()), Vt(r, e, n, o), d1(r, t, n));
	}
}
function u1(e) {
	var t = e.alternate;
	return e === xe || (t !== null && t === xe);
}
function c1(e, t) {
	hi = Xs = !0;
	var r = e.pending;
	r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
		(e.pending = t);
}
function d1(e, t, r) {
	if (r & 4194240) {
		var n = t.lanes;
		(n &= e.pendingLanes), (r |= n), (t.lanes = r), Vf(e, r);
	}
}
var Qs = {
		readContext: Rt,
		useCallback: Ve,
		useContext: Ve,
		useEffect: Ve,
		useImperativeHandle: Ve,
		useInsertionEffect: Ve,
		useLayoutEffect: Ve,
		useMemo: Ve,
		useReducer: Ve,
		useRef: Ve,
		useState: Ve,
		useDebugValue: Ve,
		useDeferredValue: Ve,
		useTransition: Ve,
		useMutableSource: Ve,
		useSyncExternalStore: Ve,
		useId: Ve,
		unstable_isNewReconciler: !1
	},
	B2 = {
		readContext: Rt,
		useCallback: function (e, t) {
			return (Gt().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: Rt,
		useEffect: Rm,
		useImperativeHandle: function (e, t, r) {
			return (
				(r = r != null ? r.concat([e]) : null),
				hs(4194308, 4, n1.bind(null, t, e), r)
			);
		},
		useLayoutEffect: function (e, t) {
			return hs(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return hs(4, 2, e, t);
		},
		useMemo: function (e, t) {
			var r = Gt();
			return (
				(t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
			);
		},
		useReducer: function (e, t, r) {
			var n = Gt();
			return (
				(t = r !== void 0 ? r(t) : t),
				(n.memoizedState = n.baseState = t),
				(e = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: t
				}),
				(n.queue = e),
				(e = e.dispatch = O2.bind(null, xe, e)),
				[n.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = Gt();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: $m,
		useDebugValue: cp,
		useDeferredValue: function (e) {
			return (Gt().memoizedState = e);
		},
		useTransition: function () {
			var e = $m(!1),
				t = e[0];
			return (e = L2.bind(null, e[1])), (Gt().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, r) {
			var n = xe,
				o = Gt();
			if (ye) {
				if (r === void 0) throw Error(z(407));
				r = r();
			} else {
				if (((r = t()), Le === null)) throw Error(z(349));
				$n & 30 || Yy(n, t, r);
			}
			o.memoizedState = r;
			var i = { value: r, getSnapshot: t };
			return (
				(o.queue = i),
				Rm(Qy.bind(null, n, i, e), [e]),
				(n.flags |= 2048),
				Ki(9, Xy.bind(null, n, i, r, t), void 0, null),
				r
			);
		},
		useId: function () {
			var e = Gt(),
				t = Le.identifierPrefix;
			if (ye) {
				var r = gr,
					n = mr;
				(r = (n & ~(1 << (32 - Nt(n) - 1))).toString(32) + r),
					(t = ':' + t + 'R' + r),
					(r = Gi++),
					0 < r && (t += 'H' + r.toString(32)),
					(t += ':');
			} else (r = M2++), (t = ':' + t + 'r' + r.toString(32) + ':');
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1
	},
	D2 = {
		readContext: Rt,
		useCallback: i1,
		useContext: Rt,
		useEffect: up,
		useImperativeHandle: o1,
		useInsertionEffect: t1,
		useLayoutEffect: r1,
		useMemo: a1,
		useReducer: Zu,
		useRef: e1,
		useState: function () {
			return Zu(qi);
		},
		useDebugValue: cp,
		useDeferredValue: function (e) {
			var t = At();
			return s1(t, Re.memoizedState, e);
		},
		useTransition: function () {
			var e = Zu(qi)[0],
				t = At().memoizedState;
			return [e, t];
		},
		useMutableSource: qy,
		useSyncExternalStore: Ky,
		useId: l1,
		unstable_isNewReconciler: !1
	},
	F2 = {
		readContext: Rt,
		useCallback: i1,
		useContext: Rt,
		useEffect: up,
		useImperativeHandle: o1,
		useInsertionEffect: t1,
		useLayoutEffect: r1,
		useMemo: a1,
		useReducer: Ju,
		useRef: e1,
		useState: function () {
			return Ju(qi);
		},
		useDebugValue: cp,
		useDeferredValue: function (e) {
			var t = At();
			return Re === null ? (t.memoizedState = e) : s1(t, Re.memoizedState, e);
		},
		useTransition: function () {
			var e = Ju(qi)[0],
				t = At().memoizedState;
			return [e, t];
		},
		useMutableSource: qy,
		useSyncExternalStore: Ky,
		useId: l1,
		unstable_isNewReconciler: !1
	};
function _o(e, t) {
	try {
		var r = '',
			n = t;
		do (r += pk(n)), (n = n.return);
		while (n);
		var o = r;
	} catch (i) {
		o =
			`
Error generating stack: ` +
			i.message +
			`
` +
			i.stack;
	}
	return { value: e, source: t, stack: o, digest: null };
}
function ec(e, t, r) {
	return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function Ad(e, t) {
	try {
		console.error(t.value);
	} catch (r) {
		setTimeout(function () {
			throw r;
		});
	}
}
var N2 = typeof WeakMap == 'function' ? WeakMap : Map;
function f1(e, t, r) {
	(r = yr(-1, r)), (r.tag = 3), (r.payload = { element: null });
	var n = t.value;
	return (
		(r.callback = function () {
			Js || ((Js = !0), (Vd = n)), Ad(e, t);
		}),
		r
	);
}
function p1(e, t, r) {
	(r = yr(-1, r)), (r.tag = 3);
	var n = e.type.getDerivedStateFromError;
	if (typeof n == 'function') {
		var o = t.value;
		(r.payload = function () {
			return n(o);
		}),
			(r.callback = function () {
				Ad(e, t);
			});
	}
	var i = e.stateNode;
	return (
		i !== null &&
			typeof i.componentDidCatch == 'function' &&
			(r.callback = function () {
				Ad(e, t),
					typeof n != 'function' &&
						(Gr === null ? (Gr = new Set([this])) : Gr.add(this));
				var a = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: a !== null ? a : ''
				});
			}),
		r
	);
}
function Am(e, t, r) {
	var n = e.pingCache;
	if (n === null) {
		n = e.pingCache = new N2();
		var o = new Set();
		n.set(t, o);
	} else (o = n.get(t)), o === void 0 && ((o = new Set()), n.set(t, o));
	o.has(r) || (o.add(r), (e = eC.bind(null, e, t, r)), t.then(e, e));
}
function zm(e) {
	do {
		var t;
		if (
			((t = e.tag === 13) &&
				((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
			t)
		)
			return e;
		e = e.return;
	} while (e !== null);
	return null;
}
function Mm(e, t, r, n, o) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = o), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
				  (r.flags |= 131072),
				  (r.flags &= -52805),
				  r.tag === 1 &&
						(r.alternate === null
							? (r.tag = 17)
							: ((t = yr(-1, 1)), (t.tag = 2), Hr(r, t, 1))),
				  (r.lanes |= 1)),
		  e);
}
var V2 = _r.ReactCurrentOwner,
	rt = !1;
function Ke(e, t, r, n) {
	t.child = e === null ? Hy(t, null, r, n) : ko(t, e.child, r, n);
}
function Lm(e, t, r, n, o) {
	r = r.render;
	var i = t.ref;
	return (
		uo(t, o),
		(n = sp(e, t, r, n, i, o)),
		(r = lp()),
		e !== null && !rt
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~o),
			  kr(e, t, o))
			: (ye && r && Yf(t), (t.flags |= 1), Ke(e, t, n, o), t.child)
	);
}
function Om(e, t, r, n, o) {
	if (e === null) {
		var i = r.type;
		return typeof i == 'function' &&
			!yp(i) &&
			i.defaultProps === void 0 &&
			r.compare === null &&
			r.defaultProps === void 0
			? ((t.tag = 15), (t.type = i), h1(e, t, i, n, o))
			: ((e = ys(r.type, null, n, t, t.mode, o)),
			  (e.ref = t.ref),
			  (e.return = t),
			  (t.child = e));
	}
	if (((i = e.child), !(e.lanes & o))) {
		var a = i.memoizedProps;
		if (
			((r = r.compare), (r = r !== null ? r : Ni), r(a, n) && e.ref === t.ref)
		)
			return kr(e, t, o);
	}
	return (
		(t.flags |= 1),
		(e = Kr(i, n)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	);
}
function h1(e, t, r, n, o) {
	if (e !== null) {
		var i = e.memoizedProps;
		if (Ni(i, n) && e.ref === t.ref)
			if (((rt = !1), (t.pendingProps = n = i), (e.lanes & o) !== 0))
				e.flags & 131072 && (rt = !0);
			else return (t.lanes = e.lanes), kr(e, t, o);
	}
	return zd(e, t, r, n, o);
}
function m1(e, t, r) {
	var n = t.pendingProps,
		o = n.children,
		i = e !== null ? e.memoizedState : null;
	if (n.mode === 'hidden')
		if (!(t.mode & 1))
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				de(to, pt),
				(pt |= r);
		else {
			if (!(r & 1073741824))
				return (
					(e = i !== null ? i.baseLanes | r : r),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = {
						baseLanes: e,
						cachePool: null,
						transitions: null
					}),
					(t.updateQueue = null),
					de(to, pt),
					(pt |= e),
					null
				);
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(n = i !== null ? i.baseLanes : r),
				de(to, pt),
				(pt |= n);
		}
	else
		i !== null ? ((n = i.baseLanes | r), (t.memoizedState = null)) : (n = r),
			de(to, pt),
			(pt |= n);
	return Ke(e, t, o, r), t.child;
}
function g1(e, t) {
	var r = t.ref;
	((e === null && r !== null) || (e !== null && e.ref !== r)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function zd(e, t, r, n, o) {
	var i = it(r) ? En : He.current;
	return (
		(i = xo(t, i)),
		uo(t, o),
		(r = sp(e, t, r, n, i, o)),
		(n = lp()),
		e !== null && !rt
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~o),
			  kr(e, t, o))
			: (ye && n && Yf(t), (t.flags |= 1), Ke(e, t, r, o), t.child)
	);
}
function Im(e, t, r, n, o) {
	if (it(r)) {
		var i = !0;
		Us(t);
	} else i = !1;
	if ((uo(t, o), t.stateNode === null))
		ms(e, t), Uy(t, r, n), Rd(t, r, n, o), (n = !0);
	else if (e === null) {
		var a = t.stateNode,
			s = t.memoizedProps;
		a.props = s;
		var l = a.context,
			u = r.contextType;
		typeof u == 'object' && u !== null
			? (u = Rt(u))
			: ((u = it(r) ? En : He.current), (u = xo(t, u)));
		var c = r.getDerivedStateFromProps,
			d =
				typeof c == 'function' ||
				typeof a.getSnapshotBeforeUpdate == 'function';
		d ||
			(typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof a.componentWillReceiveProps != 'function') ||
			((s !== n || l !== u) && Em(t, a, n, u)),
			(zr = !1);
		var f = t.memoizedState;
		(a.state = f),
			Ks(t, n, a, o),
			(l = t.memoizedState),
			s !== n || f !== l || ot.current || zr
				? (typeof c == 'function' && ($d(t, r, c, n), (l = t.memoizedState)),
				  (s = zr || Tm(t, r, s, n, f, l, u))
						? (d ||
								(typeof a.UNSAFE_componentWillMount != 'function' &&
									typeof a.componentWillMount != 'function') ||
								(typeof a.componentWillMount == 'function' &&
									a.componentWillMount(),
								typeof a.UNSAFE_componentWillMount == 'function' &&
									a.UNSAFE_componentWillMount()),
						  typeof a.componentDidMount == 'function' && (t.flags |= 4194308))
						: (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
						  (t.memoizedProps = n),
						  (t.memoizedState = l)),
				  (a.props = n),
				  (a.state = l),
				  (a.context = u),
				  (n = s))
				: (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
				  (n = !1));
	} else {
		(a = t.stateNode),
			Vy(e, t),
			(s = t.memoizedProps),
			(u = t.type === t.elementType ? s : It(t.type, s)),
			(a.props = u),
			(d = t.pendingProps),
			(f = a.context),
			(l = r.contextType),
			typeof l == 'object' && l !== null
				? (l = Rt(l))
				: ((l = it(r) ? En : He.current), (l = xo(t, l)));
		var p = r.getDerivedStateFromProps;
		(c =
			typeof p == 'function' ||
			typeof a.getSnapshotBeforeUpdate == 'function') ||
			(typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof a.componentWillReceiveProps != 'function') ||
			((s !== d || f !== l) && Em(t, a, n, l)),
			(zr = !1),
			(f = t.memoizedState),
			(a.state = f),
			Ks(t, n, a, o);
		var v = t.memoizedState;
		s !== d || f !== v || ot.current || zr
			? (typeof p == 'function' && ($d(t, r, p, n), (v = t.memoizedState)),
			  (u = zr || Tm(t, r, u, n, f, v, l) || !1)
					? (c ||
							(typeof a.UNSAFE_componentWillUpdate != 'function' &&
								typeof a.componentWillUpdate != 'function') ||
							(typeof a.componentWillUpdate == 'function' &&
								a.componentWillUpdate(n, v, l),
							typeof a.UNSAFE_componentWillUpdate == 'function' &&
								a.UNSAFE_componentWillUpdate(n, v, l)),
					  typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
					  typeof a.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
					: (typeof a.componentDidUpdate != 'function' ||
							(s === e.memoizedProps && f === e.memoizedState) ||
							(t.flags |= 4),
					  typeof a.getSnapshotBeforeUpdate != 'function' ||
							(s === e.memoizedProps && f === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = n),
					  (t.memoizedState = v)),
			  (a.props = n),
			  (a.state = v),
			  (a.context = l),
			  (n = u))
			: (typeof a.componentDidUpdate != 'function' ||
					(s === e.memoizedProps && f === e.memoizedState) ||
					(t.flags |= 4),
			  typeof a.getSnapshotBeforeUpdate != 'function' ||
					(s === e.memoizedProps && f === e.memoizedState) ||
					(t.flags |= 1024),
			  (n = !1));
	}
	return Md(e, t, r, n, i, o);
}
function Md(e, t, r, n, o, i) {
	g1(e, t);
	var a = (t.flags & 128) !== 0;
	if (!n && !a) return o && xm(t, r, !1), kr(e, t, i);
	(n = t.stateNode), (V2.current = t);
	var s =
		a && typeof r.getDerivedStateFromError != 'function' ? null : n.render();
	return (
		(t.flags |= 1),
		e !== null && a
			? ((t.child = ko(t, e.child, null, i)), (t.child = ko(t, null, s, i)))
			: Ke(e, t, s, i),
		(t.memoizedState = n.state),
		o && xm(t, r, !0),
		t.child
	);
}
function v1(e) {
	var t = e.stateNode;
	t.pendingContext
		? Sm(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && Sm(e, t.context, !1),
		np(e, t.containerInfo);
}
function Bm(e, t, r, n, o) {
	return wo(), Qf(o), (t.flags |= 256), Ke(e, t, r, n), t.child;
}
var Ld = { dehydrated: null, treeContext: null, retryLane: 0 };
function Od(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function y1(e, t, r) {
	var n = t.pendingProps,
		o = Se.current,
		i = !1,
		a = (t.flags & 128) !== 0,
		s;
	if (
		((s = a) ||
			(s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
		s
			? ((i = !0), (t.flags &= -129))
			: (e === null || e.memoizedState !== null) && (o |= 1),
		de(Se, o & 1),
		e === null)
	)
		return (
			Ed(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1
						? e.data === '$!'
							? (t.lanes = 8)
							: (t.lanes = 1073741824)
						: (t.lanes = 1),
				  null)
				: ((a = n.children),
				  (e = n.fallback),
				  i
						? ((n = t.mode),
						  (i = t.child),
						  (a = { mode: 'hidden', children: a }),
						  !(n & 1) && i !== null
								? ((i.childLanes = 0), (i.pendingProps = a))
								: (i = Il(a, n, 0, null)),
						  (e = kn(e, n, r, null)),
						  (i.return = t),
						  (e.return = t),
						  (i.sibling = e),
						  (t.child = i),
						  (t.child.memoizedState = Od(r)),
						  (t.memoizedState = Ld),
						  e)
						: dp(t, a))
		);
	if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
		return j2(e, t, a, n, s, o, r);
	if (i) {
		(i = n.fallback), (a = t.mode), (o = e.child), (s = o.sibling);
		var l = { mode: 'hidden', children: n.children };
		return (
			!(a & 1) && t.child !== o
				? ((n = t.child),
				  (n.childLanes = 0),
				  (n.pendingProps = l),
				  (t.deletions = null))
				: ((n = Kr(o, l)), (n.subtreeFlags = o.subtreeFlags & 14680064)),
			s !== null ? (i = Kr(s, i)) : ((i = kn(i, a, r, null)), (i.flags |= 2)),
			(i.return = t),
			(n.return = t),
			(n.sibling = i),
			(t.child = n),
			(n = i),
			(i = t.child),
			(a = e.child.memoizedState),
			(a =
				a === null
					? Od(r)
					: {
							baseLanes: a.baseLanes | r,
							cachePool: null,
							transitions: a.transitions
					  }),
			(i.memoizedState = a),
			(i.childLanes = e.childLanes & ~r),
			(t.memoizedState = Ld),
			n
		);
	}
	return (
		(i = e.child),
		(e = i.sibling),
		(n = Kr(i, { mode: 'visible', children: n.children })),
		!(t.mode & 1) && (n.lanes = r),
		(n.return = t),
		(n.sibling = null),
		e !== null &&
			((r = t.deletions),
			r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
		(t.child = n),
		(t.memoizedState = null),
		n
	);
}
function dp(e, t) {
	return (
		(t = Il({ mode: 'visible', children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	);
}
function Wa(e, t, r, n) {
	return (
		n !== null && Qf(n),
		ko(t, e.child, null, r),
		(e = dp(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function j2(e, t, r, n, o, i, a) {
	if (r)
		return t.flags & 256
			? ((t.flags &= -257), (n = ec(Error(z(422)))), Wa(e, t, a, n))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((i = n.fallback),
			  (o = t.mode),
			  (n = Il({ mode: 'visible', children: n.children }, o, 0, null)),
			  (i = kn(i, o, a, null)),
			  (i.flags |= 2),
			  (n.return = t),
			  (i.return = t),
			  (n.sibling = i),
			  (t.child = n),
			  t.mode & 1 && ko(t, e.child, null, a),
			  (t.child.memoizedState = Od(a)),
			  (t.memoizedState = Ld),
			  i);
	if (!(t.mode & 1)) return Wa(e, t, a, null);
	if (o.data === '$!') {
		if (((n = o.nextSibling && o.nextSibling.dataset), n)) var s = n.dgst;
		return (n = s), (i = Error(z(419))), (n = ec(i, n, void 0)), Wa(e, t, a, n);
	}
	if (((s = (a & e.childLanes) !== 0), rt || s)) {
		if (((n = Le), n !== null)) {
			switch (a & -a) {
				case 4:
					o = 2;
					break;
				case 16:
					o = 8;
					break;
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					o = 32;
					break;
				case 536870912:
					o = 268435456;
					break;
				default:
					o = 0;
			}
			(o = o & (n.suspendedLanes | a) ? 0 : o),
				o !== 0 &&
					o !== i.retryLane &&
					((i.retryLane = o), wr(e, o), Vt(n, e, o, -1));
		}
		return vp(), (n = ec(Error(z(421)))), Wa(e, t, a, n);
	}
	return o.data === '$?'
		? ((t.flags |= 128),
		  (t.child = e.child),
		  (t = tC.bind(null, e)),
		  (o._reactRetry = t),
		  null)
		: ((e = i.treeContext),
		  (ht = Wr(o.nextSibling)),
		  (mt = t),
		  (ye = !0),
		  (Dt = null),
		  e !== null &&
				((_t[Tt++] = mr),
				(_t[Tt++] = gr),
				(_t[Tt++] = Pn),
				(mr = e.id),
				(gr = e.overflow),
				(Pn = t)),
		  (t = dp(t, n.children)),
		  (t.flags |= 4096),
		  t);
}
function Dm(e, t, r) {
	e.lanes |= t;
	var n = e.alternate;
	n !== null && (n.lanes |= t), Pd(e.return, t, r);
}
function tc(e, t, r, n, o) {
	var i = e.memoizedState;
	i === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: n,
				tail: r,
				tailMode: o
		  })
		: ((i.isBackwards = t),
		  (i.rendering = null),
		  (i.renderingStartTime = 0),
		  (i.last = n),
		  (i.tail = r),
		  (i.tailMode = o));
}
function b1(e, t, r) {
	var n = t.pendingProps,
		o = n.revealOrder,
		i = n.tail;
	if ((Ke(e, t, n.children, r), (n = Se.current), n & 2))
		(n = (n & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && Dm(e, r, t);
				else if (e.tag === 19) Dm(e, r, t);
				else if (e.child !== null) {
					(e.child.return = e), (e = e.child);
					continue;
				}
				if (e === t) break e;
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e;
					e = e.return;
				}
				(e.sibling.return = e.return), (e = e.sibling);
			}
		n &= 1;
	}
	if ((de(Se, n), !(t.mode & 1))) t.memoizedState = null;
	else
		switch (o) {
			case 'forwards':
				for (r = t.child, o = null; r !== null; )
					(e = r.alternate),
						e !== null && Ys(e) === null && (o = r),
						(r = r.sibling);
				(r = o),
					r === null
						? ((o = t.child), (t.child = null))
						: ((o = r.sibling), (r.sibling = null)),
					tc(t, !1, o, r, i);
				break;
			case 'backwards':
				for (r = null, o = t.child, t.child = null; o !== null; ) {
					if (((e = o.alternate), e !== null && Ys(e) === null)) {
						t.child = o;
						break;
					}
					(e = o.sibling), (o.sibling = r), (r = o), (o = e);
				}
				tc(t, !0, r, null, i);
				break;
			case 'together':
				tc(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function ms(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function kr(e, t, r) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(Rn |= t.lanes),
		!(r & t.childLanes))
	)
		return null;
	if (e !== null && t.child !== e.child) throw Error(z(153));
	if (t.child !== null) {
		for (
			e = t.child, r = Kr(e, e.pendingProps), t.child = r, r.return = t;
			e.sibling !== null;

		)
			(e = e.sibling), (r = r.sibling = Kr(e, e.pendingProps)), (r.return = t);
		r.sibling = null;
	}
	return t.child;
}
function U2(e, t, r) {
	switch (t.tag) {
		case 3:
			v1(t), wo();
			break;
		case 5:
			Gy(t);
			break;
		case 1:
			it(t.type) && Us(t);
			break;
		case 4:
			np(t, t.stateNode.containerInfo);
			break;
		case 10:
			var n = t.type._context,
				o = t.memoizedProps.value;
			de(Gs, n._currentValue), (n._currentValue = o);
			break;
		case 13:
			if (((n = t.memoizedState), n !== null))
				return n.dehydrated !== null
					? (de(Se, Se.current & 1), (t.flags |= 128), null)
					: r & t.child.childLanes
					? y1(e, t, r)
					: (de(Se, Se.current & 1),
					  (e = kr(e, t, r)),
					  e !== null ? e.sibling : null);
			de(Se, Se.current & 1);
			break;
		case 19:
			if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
				if (n) return b1(e, t, r);
				t.flags |= 128;
			}
			if (
				((o = t.memoizedState),
				o !== null &&
					((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
				de(Se, Se.current),
				n)
			)
				break;
			return null;
		case 22:
		case 23:
			return (t.lanes = 0), m1(e, t, r);
	}
	return kr(e, t, r);
}
var S1, Id, x1, w1;
S1 = function (e, t) {
	for (var r = t.child; r !== null; ) {
		if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
		else if (r.tag !== 4 && r.child !== null) {
			(r.child.return = r), (r = r.child);
			continue;
		}
		if (r === t) break;
		for (; r.sibling === null; ) {
			if (r.return === null || r.return === t) return;
			r = r.return;
		}
		(r.sibling.return = r.return), (r = r.sibling);
	}
};
Id = function () {};
x1 = function (e, t, r, n) {
	var o = e.memoizedProps;
	if (o !== n) {
		(e = t.stateNode), bn(tr.current);
		var i = null;
		switch (r) {
			case 'input':
				(o = od(e, o)), (n = od(e, n)), (i = []);
				break;
			case 'select':
				(o = we({}, o, { value: void 0 })),
					(n = we({}, n, { value: void 0 })),
					(i = []);
				break;
			case 'textarea':
				(o = sd(e, o)), (n = sd(e, n)), (i = []);
				break;
			default:
				typeof o.onClick != 'function' &&
					typeof n.onClick == 'function' &&
					(e.onclick = Vs);
		}
		ud(r, n);
		var a;
		r = null;
		for (u in o)
			if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
				if (u === 'style') {
					var s = o[u];
					for (a in s) s.hasOwnProperty(a) && (r || (r = {}), (r[a] = ''));
				} else
					u !== 'dangerouslySetInnerHTML' &&
						u !== 'children' &&
						u !== 'suppressContentEditableWarning' &&
						u !== 'suppressHydrationWarning' &&
						u !== 'autoFocus' &&
						(Mi.hasOwnProperty(u)
							? i || (i = [])
							: (i = i || []).push(u, null));
		for (u in n) {
			var l = n[u];
			if (
				((s = o != null ? o[u] : void 0),
				n.hasOwnProperty(u) && l !== s && (l != null || s != null))
			)
				if (u === 'style')
					if (s) {
						for (a in s)
							!s.hasOwnProperty(a) ||
								(l && l.hasOwnProperty(a)) ||
								(r || (r = {}), (r[a] = ''));
						for (a in l)
							l.hasOwnProperty(a) &&
								s[a] !== l[a] &&
								(r || (r = {}), (r[a] = l[a]));
					} else r || (i || (i = []), i.push(u, r)), (r = l);
				else
					u === 'dangerouslySetInnerHTML'
						? ((l = l ? l.__html : void 0),
						  (s = s ? s.__html : void 0),
						  l != null && s !== l && (i = i || []).push(u, l))
						: u === 'children'
						? (typeof l != 'string' && typeof l != 'number') ||
						  (i = i || []).push(u, '' + l)
						: u !== 'suppressContentEditableWarning' &&
						  u !== 'suppressHydrationWarning' &&
						  (Mi.hasOwnProperty(u)
								? (l != null && u === 'onScroll' && fe('scroll', e),
								  i || s === l || (i = []))
								: (i = i || []).push(u, l));
		}
		r && (i = i || []).push('style', r);
		var u = i;
		(t.updateQueue = u) && (t.flags |= 4);
	}
};
w1 = function (e, t, r, n) {
	r !== n && (t.flags |= 4);
};
function qo(e, t) {
	if (!ye)
		switch (e.tailMode) {
			case 'hidden':
				t = e.tail;
				for (var r = null; t !== null; )
					t.alternate !== null && (r = t), (t = t.sibling);
				r === null ? (e.tail = null) : (r.sibling = null);
				break;
			case 'collapsed':
				r = e.tail;
				for (var n = null; r !== null; )
					r.alternate !== null && (n = r), (r = r.sibling);
				n === null
					? t || e.tail === null
						? (e.tail = null)
						: (e.tail.sibling = null)
					: (n.sibling = null);
		}
}
function je(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		r = 0,
		n = 0;
	if (t)
		for (var o = e.child; o !== null; )
			(r |= o.lanes | o.childLanes),
				(n |= o.subtreeFlags & 14680064),
				(n |= o.flags & 14680064),
				(o.return = e),
				(o = o.sibling);
	else
		for (o = e.child; o !== null; )
			(r |= o.lanes | o.childLanes),
				(n |= o.subtreeFlags),
				(n |= o.flags),
				(o.return = e),
				(o = o.sibling);
	return (e.subtreeFlags |= n), (e.childLanes = r), t;
}
function W2(e, t, r) {
	var n = t.pendingProps;
	switch ((Xf(t), t.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return je(t), null;
		case 1:
			return it(t.type) && js(), je(t), null;
		case 3:
			return (
				(n = t.stateNode),
				Co(),
				he(ot),
				he(He),
				ip(),
				n.pendingContext &&
					((n.context = n.pendingContext), (n.pendingContext = null)),
				(e === null || e.child === null) &&
					(ja(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024), Dt !== null && (Wd(Dt), (Dt = null)))),
				Id(e, t),
				je(t),
				null
			);
		case 5:
			op(t);
			var o = bn(Hi.current);
			if (((r = t.type), e !== null && t.stateNode != null))
				x1(e, t, r, n, o),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!n) {
					if (t.stateNode === null) throw Error(z(166));
					return je(t), null;
				}
				if (((e = bn(tr.current)), ja(t))) {
					(n = t.stateNode), (r = t.type);
					var i = t.memoizedProps;
					switch (((n[Qt] = t), (n[Ui] = i), (e = (t.mode & 1) !== 0), r)) {
						case 'dialog':
							fe('cancel', n), fe('close', n);
							break;
						case 'iframe':
						case 'object':
						case 'embed':
							fe('load', n);
							break;
						case 'video':
						case 'audio':
							for (o = 0; o < oi.length; o++) fe(oi[o], n);
							break;
						case 'source':
							fe('error', n);
							break;
						case 'img':
						case 'image':
						case 'link':
							fe('error', n), fe('load', n);
							break;
						case 'details':
							fe('toggle', n);
							break;
						case 'input':
							qh(n, i), fe('invalid', n);
							break;
						case 'select':
							(n._wrapperState = { wasMultiple: !!i.multiple }),
								fe('invalid', n);
							break;
						case 'textarea':
							Yh(n, i), fe('invalid', n);
					}
					ud(r, i), (o = null);
					for (var a in i)
						if (i.hasOwnProperty(a)) {
							var s = i[a];
							a === 'children'
								? typeof s == 'string'
									? n.textContent !== s &&
									  (i.suppressHydrationWarning !== !0 &&
											Va(n.textContent, s, e),
									  (o = ['children', s]))
									: typeof s == 'number' &&
									  n.textContent !== '' + s &&
									  (i.suppressHydrationWarning !== !0 &&
											Va(n.textContent, s, e),
									  (o = ['children', '' + s]))
								: Mi.hasOwnProperty(a) &&
								  s != null &&
								  a === 'onScroll' &&
								  fe('scroll', n);
						}
					switch (r) {
						case 'input':
							Ma(n), Kh(n, i, !0);
							break;
						case 'textarea':
							Ma(n), Xh(n);
							break;
						case 'select':
						case 'option':
							break;
						default:
							typeof i.onClick == 'function' && (n.onclick = Vs);
					}
					(n = o), (t.updateQueue = n), n !== null && (t.flags |= 4);
				} else {
					(a = o.nodeType === 9 ? o : o.ownerDocument),
						e === 'http://www.w3.org/1999/xhtml' && (e = Yv(r)),
						e === 'http://www.w3.org/1999/xhtml'
							? r === 'script'
								? ((e = a.createElement('div')),
								  (e.innerHTML = '<script></script>'),
								  (e = e.removeChild(e.firstChild)))
								: typeof n.is == 'string'
								? (e = a.createElement(r, { is: n.is }))
								: ((e = a.createElement(r)),
								  r === 'select' &&
										((a = e),
										n.multiple
											? (a.multiple = !0)
											: n.size && (a.size = n.size)))
							: (e = a.createElementNS(e, r)),
						(e[Qt] = t),
						(e[Ui] = n),
						S1(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((a = cd(r, n)), r)) {
							case 'dialog':
								fe('cancel', e), fe('close', e), (o = n);
								break;
							case 'iframe':
							case 'object':
							case 'embed':
								fe('load', e), (o = n);
								break;
							case 'video':
							case 'audio':
								for (o = 0; o < oi.length; o++) fe(oi[o], e);
								o = n;
								break;
							case 'source':
								fe('error', e), (o = n);
								break;
							case 'img':
							case 'image':
							case 'link':
								fe('error', e), fe('load', e), (o = n);
								break;
							case 'details':
								fe('toggle', e), (o = n);
								break;
							case 'input':
								qh(e, n), (o = od(e, n)), fe('invalid', e);
								break;
							case 'option':
								o = n;
								break;
							case 'select':
								(e._wrapperState = { wasMultiple: !!n.multiple }),
									(o = we({}, n, { value: void 0 })),
									fe('invalid', e);
								break;
							case 'textarea':
								Yh(e, n), (o = sd(e, n)), fe('invalid', e);
								break;
							default:
								o = n;
						}
						ud(r, o), (s = o);
						for (i in s)
							if (s.hasOwnProperty(i)) {
								var l = s[i];
								i === 'style'
									? Zv(e, l)
									: i === 'dangerouslySetInnerHTML'
									? ((l = l ? l.__html : void 0), l != null && Xv(e, l))
									: i === 'children'
									? typeof l == 'string'
										? (r !== 'textarea' || l !== '') && Li(e, l)
										: typeof l == 'number' && Li(e, '' + l)
									: i !== 'suppressContentEditableWarning' &&
									  i !== 'suppressHydrationWarning' &&
									  i !== 'autoFocus' &&
									  (Mi.hasOwnProperty(i)
											? l != null && i === 'onScroll' && fe('scroll', e)
											: l != null && Of(e, i, l, a));
							}
						switch (r) {
							case 'input':
								Ma(e), Kh(e, n, !1);
								break;
							case 'textarea':
								Ma(e), Xh(e);
								break;
							case 'option':
								n.value != null && e.setAttribute('value', '' + Xr(n.value));
								break;
							case 'select':
								(e.multiple = !!n.multiple),
									(i = n.value),
									i != null
										? io(e, !!n.multiple, i, !1)
										: n.defaultValue != null &&
										  io(e, !!n.multiple, n.defaultValue, !0);
								break;
							default:
								typeof o.onClick == 'function' && (e.onclick = Vs);
						}
						switch (r) {
							case 'button':
							case 'input':
							case 'select':
							case 'textarea':
								n = !!n.autoFocus;
								break e;
							case 'img':
								n = !0;
								break e;
							default:
								n = !1;
						}
					}
					n && (t.flags |= 4);
				}
				t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
			}
			return je(t), null;
		case 6:
			if (e && t.stateNode != null) w1(e, t, e.memoizedProps, n);
			else {
				if (typeof n != 'string' && t.stateNode === null) throw Error(z(166));
				if (((r = bn(Hi.current)), bn(tr.current), ja(t))) {
					if (
						((n = t.stateNode),
						(r = t.memoizedProps),
						(n[Qt] = t),
						(i = n.nodeValue !== r) && ((e = mt), e !== null))
					)
						switch (e.tag) {
							case 3:
								Va(n.nodeValue, r, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 &&
									Va(n.nodeValue, r, (e.mode & 1) !== 0);
						}
					i && (t.flags |= 4);
				} else
					(n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
						(n[Qt] = t),
						(t.stateNode = n);
			}
			return je(t), null;
		case 13:
			if (
				(he(Se),
				(n = t.memoizedState),
				e === null ||
					(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if (ye && ht !== null && t.mode & 1 && !(t.flags & 128))
					Fy(), wo(), (t.flags |= 98560), (i = !1);
				else if (((i = ja(t)), n !== null && n.dehydrated !== null)) {
					if (e === null) {
						if (!i) throw Error(z(318));
						if (
							((i = t.memoizedState),
							(i = i !== null ? i.dehydrated : null),
							!i)
						)
							throw Error(z(317));
						i[Qt] = t;
					} else
						wo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
					je(t), (i = !1);
				} else Dt !== null && (Wd(Dt), (Dt = null)), (i = !0);
				if (!i) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = r), t)
				: ((n = n !== null),
				  n !== (e !== null && e.memoizedState !== null) &&
						n &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || Se.current & 1 ? Ae === 0 && (Ae = 3) : vp())),
				  t.updateQueue !== null && (t.flags |= 4),
				  je(t),
				  null);
		case 4:
			return (
				Co(), Id(e, t), e === null && Vi(t.stateNode.containerInfo), je(t), null
			);
		case 10:
			return ep(t.type._context), je(t), null;
		case 17:
			return it(t.type) && js(), je(t), null;
		case 19:
			if ((he(Se), (i = t.memoizedState), i === null)) return je(t), null;
			if (((n = (t.flags & 128) !== 0), (a = i.rendering), a === null))
				if (n) qo(i, !1);
				else {
					if (Ae !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((a = Ys(e)), a !== null)) {
								for (
									t.flags |= 128,
										qo(i, !1),
										n = a.updateQueue,
										n !== null && ((t.updateQueue = n), (t.flags |= 4)),
										t.subtreeFlags = 0,
										n = r,
										r = t.child;
									r !== null;

								)
									(i = r),
										(e = n),
										(i.flags &= 14680066),
										(a = i.alternate),
										a === null
											? ((i.childLanes = 0),
											  (i.lanes = e),
											  (i.child = null),
											  (i.subtreeFlags = 0),
											  (i.memoizedProps = null),
											  (i.memoizedState = null),
											  (i.updateQueue = null),
											  (i.dependencies = null),
											  (i.stateNode = null))
											: ((i.childLanes = a.childLanes),
											  (i.lanes = a.lanes),
											  (i.child = a.child),
											  (i.subtreeFlags = 0),
											  (i.deletions = null),
											  (i.memoizedProps = a.memoizedProps),
											  (i.memoizedState = a.memoizedState),
											  (i.updateQueue = a.updateQueue),
											  (i.type = a.type),
											  (e = a.dependencies),
											  (i.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext: e.firstContext
														  })),
										(r = r.sibling);
								return de(Se, (Se.current & 1) | 2), t.child;
							}
							e = e.sibling;
						}
					i.tail !== null &&
						_e() > To &&
						((t.flags |= 128), (n = !0), qo(i, !1), (t.lanes = 4194304));
				}
			else {
				if (!n)
					if (((e = Ys(a)), e !== null)) {
						if (
							((t.flags |= 128),
							(n = !0),
							(r = e.updateQueue),
							r !== null && ((t.updateQueue = r), (t.flags |= 4)),
							qo(i, !0),
							i.tail === null && i.tailMode === 'hidden' && !a.alternate && !ye)
						)
							return je(t), null;
					} else
						2 * _e() - i.renderingStartTime > To &&
							r !== 1073741824 &&
							((t.flags |= 128), (n = !0), qo(i, !1), (t.lanes = 4194304));
				i.isBackwards
					? ((a.sibling = t.child), (t.child = a))
					: ((r = i.last),
					  r !== null ? (r.sibling = a) : (t.child = a),
					  (i.last = a));
			}
			return i.tail !== null
				? ((t = i.tail),
				  (i.rendering = t),
				  (i.tail = t.sibling),
				  (i.renderingStartTime = _e()),
				  (t.sibling = null),
				  (r = Se.current),
				  de(Se, n ? (r & 1) | 2 : r & 1),
				  t)
				: (je(t), null);
		case 22:
		case 23:
			return (
				gp(),
				(n = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
				n && t.mode & 1
					? pt & 1073741824 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: je(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(z(156, t.tag));
}
function H2(e, t) {
	switch ((Xf(t), t.tag)) {
		case 1:
			return (
				it(t.type) && js(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				Co(),
				he(ot),
				he(He),
				ip(),
				(e = t.flags),
				e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 5:
			return op(t), null;
		case 13:
			if (
				(he(Se), (e = t.memoizedState), e !== null && e.dehydrated !== null)
			) {
				if (t.alternate === null) throw Error(z(340));
				wo();
			}
			return (
				(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 19:
			return he(Se), null;
		case 4:
			return Co(), null;
		case 10:
			return ep(t.type._context), null;
		case 22:
		case 23:
			return gp(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var Ha = !1,
	We = !1,
	G2 = typeof WeakSet == 'function' ? WeakSet : Set,
	F = null;
function eo(e, t) {
	var r = e.ref;
	if (r !== null)
		if (typeof r == 'function')
			try {
				r(null);
			} catch (n) {
				ke(e, t, n);
			}
		else r.current = null;
}
function Bd(e, t, r) {
	try {
		r();
	} catch (n) {
		ke(e, t, n);
	}
}
var Fm = !1;
function q2(e, t) {
	if (((Sd = Ds), (e = Ty()), Kf(e))) {
		if ('selectionStart' in e)
			var r = { start: e.selectionStart, end: e.selectionEnd };
		else
			e: {
				r = ((r = e.ownerDocument) && r.defaultView) || window;
				var n = r.getSelection && r.getSelection();
				if (n && n.rangeCount !== 0) {
					r = n.anchorNode;
					var o = n.anchorOffset,
						i = n.focusNode;
					n = n.focusOffset;
					try {
						r.nodeType, i.nodeType;
					} catch {
						r = null;
						break e;
					}
					var a = 0,
						s = -1,
						l = -1,
						u = 0,
						c = 0,
						d = e,
						f = null;
					t: for (;;) {
						for (
							var p;
							d !== r || (o !== 0 && d.nodeType !== 3) || (s = a + o),
								d !== i || (n !== 0 && d.nodeType !== 3) || (l = a + n),
								d.nodeType === 3 && (a += d.nodeValue.length),
								(p = d.firstChild) !== null;

						)
							(f = d), (d = p);
						for (;;) {
							if (d === e) break t;
							if (
								(f === r && ++u === o && (s = a),
								f === i && ++c === n && (l = a),
								(p = d.nextSibling) !== null)
							)
								break;
							(d = f), (f = d.parentNode);
						}
						d = p;
					}
					r = s === -1 || l === -1 ? null : { start: s, end: l };
				} else r = null;
			}
		r = r || { start: 0, end: 0 };
	} else r = null;
	for (xd = { focusedElem: e, selectionRange: r }, Ds = !1, F = t; F !== null; )
		if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
			(e.return = t), (F = e);
		else
			for (; F !== null; ) {
				t = F;
				try {
					var v = t.alternate;
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (v !== null) {
									var b = v.memoizedProps,
										k = v.memoizedState,
										h = t.stateNode,
										m = h.getSnapshotBeforeUpdate(
											t.elementType === t.type ? b : It(t.type, b),
											k
										);
									h.__reactInternalSnapshotBeforeUpdate = m;
								}
								break;
							case 3:
								var g = t.stateNode.containerInfo;
								g.nodeType === 1
									? (g.textContent = '')
									: g.nodeType === 9 &&
									  g.documentElement &&
									  g.removeChild(g.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(z(163));
						}
				} catch (S) {
					ke(t, t.return, S);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (F = e);
					break;
				}
				F = t.return;
			}
	return (v = Fm), (Fm = !1), v;
}
function mi(e, t, r) {
	var n = t.updateQueue;
	if (((n = n !== null ? n.lastEffect : null), n !== null)) {
		var o = (n = n.next);
		do {
			if ((o.tag & e) === e) {
				var i = o.destroy;
				(o.destroy = void 0), i !== void 0 && Bd(t, r, i);
			}
			o = o.next;
		} while (o !== n);
	}
}
function Ll(e, t) {
	if (
		((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
	) {
		var r = (t = t.next);
		do {
			if ((r.tag & e) === e) {
				var n = r.create;
				r.destroy = n();
			}
			r = r.next;
		} while (r !== t);
	}
}
function Dd(e) {
	var t = e.ref;
	if (t !== null) {
		var r = e.stateNode;
		switch (e.tag) {
			case 5:
				e = r;
				break;
			default:
				e = r;
		}
		typeof t == 'function' ? t(e) : (t.current = e);
	}
}
function k1(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), k1(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[Qt], delete t[Ui], delete t[Cd], delete t[$2], delete t[R2])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function C1(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Nm(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || C1(e.return)) return null;
			e = e.return;
		}
		for (
			e.sibling.return = e.return, e = e.sibling;
			e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

		) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			(e.child.return = e), (e = e.child);
		}
		if (!(e.flags & 2)) return e.stateNode;
	}
}
function Fd(e, t, r) {
	var n = e.tag;
	if (n === 5 || n === 6)
		(e = e.stateNode),
			t
				? r.nodeType === 8
					? r.parentNode.insertBefore(e, t)
					: r.insertBefore(e, t)
				: (r.nodeType === 8
						? ((t = r.parentNode), t.insertBefore(e, r))
						: ((t = r), t.appendChild(e)),
				  (r = r._reactRootContainer),
				  r != null || t.onclick !== null || (t.onclick = Vs));
	else if (n !== 4 && ((e = e.child), e !== null))
		for (Fd(e, t, r), e = e.sibling; e !== null; ) Fd(e, t, r), (e = e.sibling);
}
function Nd(e, t, r) {
	var n = e.tag;
	if (n === 5 || n === 6)
		(e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
	else if (n !== 4 && ((e = e.child), e !== null))
		for (Nd(e, t, r), e = e.sibling; e !== null; ) Nd(e, t, r), (e = e.sibling);
}
var Be = null,
	Bt = !1;
function Tr(e, t, r) {
	for (r = r.child; r !== null; ) _1(e, t, r), (r = r.sibling);
}
function _1(e, t, r) {
	if (er && typeof er.onCommitFiberUnmount == 'function')
		try {
			er.onCommitFiberUnmount(Tl, r);
		} catch {}
	switch (r.tag) {
		case 5:
			We || eo(r, t);
		case 6:
			var n = Be,
				o = Bt;
			(Be = null),
				Tr(e, t, r),
				(Be = n),
				(Bt = o),
				Be !== null &&
					(Bt
						? ((e = Be),
						  (r = r.stateNode),
						  e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
						: Be.removeChild(r.stateNode));
			break;
		case 18:
			Be !== null &&
				(Bt
					? ((e = Be),
					  (r = r.stateNode),
					  e.nodeType === 8
							? Ku(e.parentNode, r)
							: e.nodeType === 1 && Ku(e, r),
					  Di(e))
					: Ku(Be, r.stateNode));
			break;
		case 4:
			(n = Be),
				(o = Bt),
				(Be = r.stateNode.containerInfo),
				(Bt = !0),
				Tr(e, t, r),
				(Be = n),
				(Bt = o);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!We &&
				((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
			) {
				o = n = n.next;
				do {
					var i = o,
						a = i.destroy;
					(i = i.tag),
						a !== void 0 && (i & 2 || i & 4) && Bd(r, t, a),
						(o = o.next);
				} while (o !== n);
			}
			Tr(e, t, r);
			break;
		case 1:
			if (
				!We &&
				(eo(r, t),
				(n = r.stateNode),
				typeof n.componentWillUnmount == 'function')
			)
				try {
					(n.props = r.memoizedProps),
						(n.state = r.memoizedState),
						n.componentWillUnmount();
				} catch (s) {
					ke(r, t, s);
				}
			Tr(e, t, r);
			break;
		case 21:
			Tr(e, t, r);
			break;
		case 22:
			r.mode & 1
				? ((We = (n = We) || r.memoizedState !== null), Tr(e, t, r), (We = n))
				: Tr(e, t, r);
			break;
		default:
			Tr(e, t, r);
	}
}
function Vm(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var r = e.stateNode;
		r === null && (r = e.stateNode = new G2()),
			t.forEach(function (n) {
				var o = rC.bind(null, e, n);
				r.has(n) || (r.add(n), n.then(o, o));
			});
	}
}
function zt(e, t) {
	var r = t.deletions;
	if (r !== null)
		for (var n = 0; n < r.length; n++) {
			var o = r[n];
			try {
				var i = e,
					a = t,
					s = a;
				e: for (; s !== null; ) {
					switch (s.tag) {
						case 5:
							(Be = s.stateNode), (Bt = !1);
							break e;
						case 3:
							(Be = s.stateNode.containerInfo), (Bt = !0);
							break e;
						case 4:
							(Be = s.stateNode.containerInfo), (Bt = !0);
							break e;
					}
					s = s.return;
				}
				if (Be === null) throw Error(z(160));
				_1(i, a, o), (Be = null), (Bt = !1);
				var l = o.alternate;
				l !== null && (l.return = null), (o.return = null);
			} catch (u) {
				ke(o, t, u);
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) T1(t, e), (t = t.sibling);
}
function T1(e, t) {
	var r = e.alternate,
		n = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((zt(t, e), Wt(e), n & 4)) {
				try {
					mi(3, e, e.return), Ll(3, e);
				} catch (b) {
					ke(e, e.return, b);
				}
				try {
					mi(5, e, e.return);
				} catch (b) {
					ke(e, e.return, b);
				}
			}
			break;
		case 1:
			zt(t, e), Wt(e), n & 512 && r !== null && eo(r, r.return);
			break;
		case 5:
			if (
				(zt(t, e),
				Wt(e),
				n & 512 && r !== null && eo(r, r.return),
				e.flags & 32)
			) {
				var o = e.stateNode;
				try {
					Li(o, '');
				} catch (b) {
					ke(e, e.return, b);
				}
			}
			if (n & 4 && ((o = e.stateNode), o != null)) {
				var i = e.memoizedProps,
					a = r !== null ? r.memoizedProps : i,
					s = e.type,
					l = e.updateQueue;
				if (((e.updateQueue = null), l !== null))
					try {
						s === 'input' && i.type === 'radio' && i.name != null && qv(o, i),
							cd(s, a);
						var u = cd(s, i);
						for (a = 0; a < l.length; a += 2) {
							var c = l[a],
								d = l[a + 1];
							c === 'style'
								? Zv(o, d)
								: c === 'dangerouslySetInnerHTML'
								? Xv(o, d)
								: c === 'children'
								? Li(o, d)
								: Of(o, c, d, u);
						}
						switch (s) {
							case 'input':
								id(o, i);
								break;
							case 'textarea':
								Kv(o, i);
								break;
							case 'select':
								var f = o._wrapperState.wasMultiple;
								o._wrapperState.wasMultiple = !!i.multiple;
								var p = i.value;
								p != null
									? io(o, !!i.multiple, p, !1)
									: f !== !!i.multiple &&
									  (i.defaultValue != null
											? io(o, !!i.multiple, i.defaultValue, !0)
											: io(o, !!i.multiple, i.multiple ? [] : '', !1));
						}
						o[Ui] = i;
					} catch (b) {
						ke(e, e.return, b);
					}
			}
			break;
		case 6:
			if ((zt(t, e), Wt(e), n & 4)) {
				if (e.stateNode === null) throw Error(z(162));
				(o = e.stateNode), (i = e.memoizedProps);
				try {
					o.nodeValue = i;
				} catch (b) {
					ke(e, e.return, b);
				}
			}
			break;
		case 3:
			if (
				(zt(t, e), Wt(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
			)
				try {
					Di(t.containerInfo);
				} catch (b) {
					ke(e, e.return, b);
				}
			break;
		case 4:
			zt(t, e), Wt(e);
			break;
		case 13:
			zt(t, e),
				Wt(e),
				(o = e.child),
				o.flags & 8192 &&
					((i = o.memoizedState !== null),
					(o.stateNode.isHidden = i),
					!i ||
						(o.alternate !== null && o.alternate.memoizedState !== null) ||
						(hp = _e())),
				n & 4 && Vm(e);
			break;
		case 22:
			if (
				((c = r !== null && r.memoizedState !== null),
				e.mode & 1 ? ((We = (u = We) || c), zt(t, e), (We = u)) : zt(t, e),
				Wt(e),
				n & 8192)
			) {
				if (
					((u = e.memoizedState !== null),
					(e.stateNode.isHidden = u) && !c && e.mode & 1)
				)
					for (F = e, c = e.child; c !== null; ) {
						for (d = F = c; F !== null; ) {
							switch (((f = F), (p = f.child), f.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									mi(4, f, f.return);
									break;
								case 1:
									eo(f, f.return);
									var v = f.stateNode;
									if (typeof v.componentWillUnmount == 'function') {
										(n = f), (r = f.return);
										try {
											(t = n),
												(v.props = t.memoizedProps),
												(v.state = t.memoizedState),
												v.componentWillUnmount();
										} catch (b) {
											ke(n, r, b);
										}
									}
									break;
								case 5:
									eo(f, f.return);
									break;
								case 22:
									if (f.memoizedState !== null) {
										Um(d);
										continue;
									}
							}
							p !== null ? ((p.return = f), (F = p)) : Um(d);
						}
						c = c.sibling;
					}
				e: for (c = null, d = e; ; ) {
					if (d.tag === 5) {
						if (c === null) {
							c = d;
							try {
								(o = d.stateNode),
									u
										? ((i = o.style),
										  typeof i.setProperty == 'function'
												? i.setProperty('display', 'none', 'important')
												: (i.display = 'none'))
										: ((s = d.stateNode),
										  (l = d.memoizedProps.style),
										  (a =
												l != null && l.hasOwnProperty('display')
													? l.display
													: null),
										  (s.style.display = Qv('display', a)));
							} catch (b) {
								ke(e, e.return, b);
							}
						}
					} else if (d.tag === 6) {
						if (c === null)
							try {
								d.stateNode.nodeValue = u ? '' : d.memoizedProps;
							} catch (b) {
								ke(e, e.return, b);
							}
					} else if (
						((d.tag !== 22 && d.tag !== 23) ||
							d.memoizedState === null ||
							d === e) &&
						d.child !== null
					) {
						(d.child.return = d), (d = d.child);
						continue;
					}
					if (d === e) break e;
					for (; d.sibling === null; ) {
						if (d.return === null || d.return === e) break e;
						c === d && (c = null), (d = d.return);
					}
					c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
				}
			}
			break;
		case 19:
			zt(t, e), Wt(e), n & 4 && Vm(e);
			break;
		case 21:
			break;
		default:
			zt(t, e), Wt(e);
	}
}
function Wt(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var r = e.return; r !== null; ) {
					if (C1(r)) {
						var n = r;
						break e;
					}
					r = r.return;
				}
				throw Error(z(160));
			}
			switch (n.tag) {
				case 5:
					var o = n.stateNode;
					n.flags & 32 && (Li(o, ''), (n.flags &= -33));
					var i = Nm(e);
					Nd(e, i, o);
					break;
				case 3:
				case 4:
					var a = n.stateNode.containerInfo,
						s = Nm(e);
					Fd(e, s, a);
					break;
				default:
					throw Error(z(161));
			}
		} catch (l) {
			ke(e, e.return, l);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function K2(e, t, r) {
	(F = e), E1(e);
}
function E1(e, t, r) {
	for (var n = (e.mode & 1) !== 0; F !== null; ) {
		var o = F,
			i = o.child;
		if (o.tag === 22 && n) {
			var a = o.memoizedState !== null || Ha;
			if (!a) {
				var s = o.alternate,
					l = (s !== null && s.memoizedState !== null) || We;
				s = Ha;
				var u = We;
				if (((Ha = a), (We = l) && !u))
					for (F = o; F !== null; )
						(a = F),
							(l = a.child),
							a.tag === 22 && a.memoizedState !== null
								? Wm(o)
								: l !== null
								? ((l.return = a), (F = l))
								: Wm(o);
				for (; i !== null; ) (F = i), E1(i), (i = i.sibling);
				(F = o), (Ha = s), (We = u);
			}
			jm(e);
		} else
			o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (F = i)) : jm(e);
	}
}
function jm(e) {
	for (; F !== null; ) {
		var t = F;
		if (t.flags & 8772) {
			var r = t.alternate;
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							We || Ll(5, t);
							break;
						case 1:
							var n = t.stateNode;
							if (t.flags & 4 && !We)
								if (r === null) n.componentDidMount();
								else {
									var o =
										t.elementType === t.type
											? r.memoizedProps
											: It(t.type, r.memoizedProps);
									n.componentDidUpdate(
										o,
										r.memoizedState,
										n.__reactInternalSnapshotBeforeUpdate
									);
								}
							var i = t.updateQueue;
							i !== null && _m(t, i, n);
							break;
						case 3:
							var a = t.updateQueue;
							if (a !== null) {
								if (((r = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											r = t.child.stateNode;
											break;
										case 1:
											r = t.child.stateNode;
									}
								_m(t, a, r);
							}
							break;
						case 5:
							var s = t.stateNode;
							if (r === null && t.flags & 4) {
								r = s;
								var l = t.memoizedProps;
								switch (t.type) {
									case 'button':
									case 'input':
									case 'select':
									case 'textarea':
										l.autoFocus && r.focus();
										break;
									case 'img':
										l.src && (r.src = l.src);
								}
							}
							break;
						case 6:
							break;
						case 4:
							break;
						case 12:
							break;
						case 13:
							if (t.memoizedState === null) {
								var u = t.alternate;
								if (u !== null) {
									var c = u.memoizedState;
									if (c !== null) {
										var d = c.dehydrated;
										d !== null && Di(d);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break;
						default:
							throw Error(z(163));
					}
				We || (t.flags & 512 && Dd(t));
			} catch (f) {
				ke(t, t.return, f);
			}
		}
		if (t === e) {
			F = null;
			break;
		}
		if (((r = t.sibling), r !== null)) {
			(r.return = t.return), (F = r);
			break;
		}
		F = t.return;
	}
}
function Um(e) {
	for (; F !== null; ) {
		var t = F;
		if (t === e) {
			F = null;
			break;
		}
		var r = t.sibling;
		if (r !== null) {
			(r.return = t.return), (F = r);
			break;
		}
		F = t.return;
	}
}
function Wm(e) {
	for (; F !== null; ) {
		var t = F;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var r = t.return;
					try {
						Ll(4, t);
					} catch (l) {
						ke(t, r, l);
					}
					break;
				case 1:
					var n = t.stateNode;
					if (typeof n.componentDidMount == 'function') {
						var o = t.return;
						try {
							n.componentDidMount();
						} catch (l) {
							ke(t, o, l);
						}
					}
					var i = t.return;
					try {
						Dd(t);
					} catch (l) {
						ke(t, i, l);
					}
					break;
				case 5:
					var a = t.return;
					try {
						Dd(t);
					} catch (l) {
						ke(t, a, l);
					}
			}
		} catch (l) {
			ke(t, t.return, l);
		}
		if (t === e) {
			F = null;
			break;
		}
		var s = t.sibling;
		if (s !== null) {
			(s.return = t.return), (F = s);
			break;
		}
		F = t.return;
	}
}
var Y2 = Math.ceil,
	Zs = _r.ReactCurrentDispatcher,
	fp = _r.ReactCurrentOwner,
	Pt = _r.ReactCurrentBatchConfig,
	Q = 0,
	Le = null,
	Pe = null,
	Fe = 0,
	pt = 0,
	to = tn(0),
	Ae = 0,
	Yi = null,
	Rn = 0,
	Ol = 0,
	pp = 0,
	gi = null,
	et = null,
	hp = 0,
	To = 1 / 0,
	fr = null,
	Js = !1,
	Vd = null,
	Gr = null,
	Ga = !1,
	Dr = null,
	el = 0,
	vi = 0,
	jd = null,
	gs = -1,
	vs = 0;
function Xe() {
	return Q & 6 ? _e() : gs !== -1 ? gs : (gs = _e());
}
function qr(e) {
	return e.mode & 1
		? Q & 2 && Fe !== 0
			? Fe & -Fe
			: z2.transition !== null
			? (vs === 0 && (vs = cy()), vs)
			: ((e = ie),
			  e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : vy(e.type))),
			  e)
		: 1;
}
function Vt(e, t, r, n) {
	if (50 < vi) throw ((vi = 0), (jd = null), Error(z(185)));
	ua(e, r, n),
		(!(Q & 2) || e !== Le) &&
			(e === Le && (!(Q & 2) && (Ol |= r), Ae === 4 && Or(e, Fe)),
			at(e, n),
			r === 1 && Q === 0 && !(t.mode & 1) && ((To = _e() + 500), Al && rn()));
}
function at(e, t) {
	var r = e.callbackNode;
	zk(e, t);
	var n = Bs(e, e === Le ? Fe : 0);
	if (n === 0)
		r !== null && Jh(r), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = n & -n), e.callbackPriority !== t)) {
		if ((r != null && Jh(r), t === 1))
			e.tag === 0 ? A2(Hm.bind(null, e)) : Iy(Hm.bind(null, e)),
				E2(function () {
					!(Q & 6) && rn();
				}),
				(r = null);
		else {
			switch (dy(n)) {
				case 1:
					r = Nf;
					break;
				case 4:
					r = ly;
					break;
				case 16:
					r = Is;
					break;
				case 536870912:
					r = uy;
					break;
				default:
					r = Is;
			}
			r = O1(r, P1.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = r);
	}
}
function P1(e, t) {
	if (((gs = -1), (vs = 0), Q & 6)) throw Error(z(327));
	var r = e.callbackNode;
	if (co() && e.callbackNode !== r) return null;
	var n = Bs(e, e === Le ? Fe : 0);
	if (n === 0) return null;
	if (n & 30 || n & e.expiredLanes || t) t = tl(e, n);
	else {
		t = n;
		var o = Q;
		Q |= 2;
		var i = R1();
		(Le !== e || Fe !== t) && ((fr = null), (To = _e() + 500), wn(e, t));
		do
			try {
				Z2();
				break;
			} catch (s) {
				$1(e, s);
			}
		while (1);
		Jf(),
			(Zs.current = i),
			(Q = o),
			Pe !== null ? (t = 0) : ((Le = null), (Fe = 0), (t = Ae));
	}
	if (t !== 0) {
		if (
			(t === 2 && ((o = md(e)), o !== 0 && ((n = o), (t = Ud(e, o)))), t === 1)
		)
			throw ((r = Yi), wn(e, 0), Or(e, n), at(e, _e()), r);
		if (t === 6) Or(e, n);
		else {
			if (
				((o = e.current.alternate),
				!(n & 30) &&
					!X2(o) &&
					((t = tl(e, n)),
					t === 2 && ((i = md(e)), i !== 0 && ((n = i), (t = Ud(e, i)))),
					t === 1))
			)
				throw ((r = Yi), wn(e, 0), Or(e, n), at(e, _e()), r);
			switch (((e.finishedWork = o), (e.finishedLanes = n), t)) {
				case 0:
				case 1:
					throw Error(z(345));
				case 2:
					pn(e, et, fr);
					break;
				case 3:
					if (
						(Or(e, n), (n & 130023424) === n && ((t = hp + 500 - _e()), 10 < t))
					) {
						if (Bs(e, 0) !== 0) break;
						if (((o = e.suspendedLanes), (o & n) !== n)) {
							Xe(), (e.pingedLanes |= e.suspendedLanes & o);
							break;
						}
						e.timeoutHandle = kd(pn.bind(null, e, et, fr), t);
						break;
					}
					pn(e, et, fr);
					break;
				case 4:
					if ((Or(e, n), (n & 4194240) === n)) break;
					for (t = e.eventTimes, o = -1; 0 < n; ) {
						var a = 31 - Nt(n);
						(i = 1 << a), (a = t[a]), a > o && (o = a), (n &= ~i);
					}
					if (
						((n = o),
						(n = _e() - n),
						(n =
							(120 > n
								? 120
								: 480 > n
								? 480
								: 1080 > n
								? 1080
								: 1920 > n
								? 1920
								: 3e3 > n
								? 3e3
								: 4320 > n
								? 4320
								: 1960 * Y2(n / 1960)) - n),
						10 < n)
					) {
						e.timeoutHandle = kd(pn.bind(null, e, et, fr), n);
						break;
					}
					pn(e, et, fr);
					break;
				case 5:
					pn(e, et, fr);
					break;
				default:
					throw Error(z(329));
			}
		}
	}
	return at(e, _e()), e.callbackNode === r ? P1.bind(null, e) : null;
}
function Ud(e, t) {
	var r = gi;
	return (
		e.current.memoizedState.isDehydrated && (wn(e, t).flags |= 256),
		(e = tl(e, t)),
		e !== 2 && ((t = et), (et = r), t !== null && Wd(t)),
		e
	);
}
function Wd(e) {
	et === null ? (et = e) : et.push.apply(et, e);
}
function X2(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var r = t.updateQueue;
			if (r !== null && ((r = r.stores), r !== null))
				for (var n = 0; n < r.length; n++) {
					var o = r[n],
						i = o.getSnapshot;
					o = o.value;
					try {
						if (!jt(i(), o)) return !1;
					} catch {
						return !1;
					}
				}
		}
		if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
			(r.return = t), (t = r);
		else {
			if (t === e) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
	}
	return !0;
}
function Or(e, t) {
	for (
		t &= ~pp,
			t &= ~Ol,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;

	) {
		var r = 31 - Nt(t),
			n = 1 << r;
		(e[r] = -1), (t &= ~n);
	}
}
function Hm(e) {
	if (Q & 6) throw Error(z(327));
	co();
	var t = Bs(e, 0);
	if (!(t & 1)) return at(e, _e()), null;
	var r = tl(e, t);
	if (e.tag !== 0 && r === 2) {
		var n = md(e);
		n !== 0 && ((t = n), (r = Ud(e, n)));
	}
	if (r === 1) throw ((r = Yi), wn(e, 0), Or(e, t), at(e, _e()), r);
	if (r === 6) throw Error(z(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		pn(e, et, fr),
		at(e, _e()),
		null
	);
}
function mp(e, t) {
	var r = Q;
	Q |= 1;
	try {
		return e(t);
	} finally {
		(Q = r), Q === 0 && ((To = _e() + 500), Al && rn());
	}
}
function An(e) {
	Dr !== null && Dr.tag === 0 && !(Q & 6) && co();
	var t = Q;
	Q |= 1;
	var r = Pt.transition,
		n = ie;
	try {
		if (((Pt.transition = null), (ie = 1), e)) return e();
	} finally {
		(ie = n), (Pt.transition = r), (Q = t), !(Q & 6) && rn();
	}
}
function gp() {
	(pt = to.current), he(to);
}
function wn(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var r = e.timeoutHandle;
	if ((r !== -1 && ((e.timeoutHandle = -1), T2(r)), Pe !== null))
		for (r = Pe.return; r !== null; ) {
			var n = r;
			switch ((Xf(n), n.tag)) {
				case 1:
					(n = n.type.childContextTypes), n != null && js();
					break;
				case 3:
					Co(), he(ot), he(He), ip();
					break;
				case 5:
					op(n);
					break;
				case 4:
					Co();
					break;
				case 13:
					he(Se);
					break;
				case 19:
					he(Se);
					break;
				case 10:
					ep(n.type._context);
					break;
				case 22:
				case 23:
					gp();
			}
			r = r.return;
		}
	if (
		((Le = e),
		(Pe = e = Kr(e.current, null)),
		(Fe = pt = t),
		(Ae = 0),
		(Yi = null),
		(pp = Ol = Rn = 0),
		(et = gi = null),
		yn !== null)
	) {
		for (t = 0; t < yn.length; t++)
			if (((r = yn[t]), (n = r.interleaved), n !== null)) {
				r.interleaved = null;
				var o = n.next,
					i = r.pending;
				if (i !== null) {
					var a = i.next;
					(i.next = o), (n.next = a);
				}
				r.pending = n;
			}
		yn = null;
	}
	return e;
}
function $1(e, t) {
	do {
		var r = Pe;
		try {
			if ((Jf(), (ps.current = Qs), Xs)) {
				for (var n = xe.memoizedState; n !== null; ) {
					var o = n.queue;
					o !== null && (o.pending = null), (n = n.next);
				}
				Xs = !1;
			}
			if (
				(($n = 0),
				(Me = Re = xe = null),
				(hi = !1),
				(Gi = 0),
				(fp.current = null),
				r === null || r.return === null)
			) {
				(Ae = 1), (Yi = t), (Pe = null);
				break;
			}
			e: {
				var i = e,
					a = r.return,
					s = r,
					l = t;
				if (
					((t = Fe),
					(s.flags |= 32768),
					l !== null && typeof l == 'object' && typeof l.then == 'function')
				) {
					var u = l,
						c = s,
						d = c.tag;
					if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
						var f = c.alternate;
						f
							? ((c.updateQueue = f.updateQueue),
							  (c.memoizedState = f.memoizedState),
							  (c.lanes = f.lanes))
							: ((c.updateQueue = null), (c.memoizedState = null));
					}
					var p = zm(a);
					if (p !== null) {
						(p.flags &= -257),
							Mm(p, a, s, i, t),
							p.mode & 1 && Am(i, u, t),
							(t = p),
							(l = u);
						var v = t.updateQueue;
						if (v === null) {
							var b = new Set();
							b.add(l), (t.updateQueue = b);
						} else v.add(l);
						break e;
					} else {
						if (!(t & 1)) {
							Am(i, u, t), vp();
							break e;
						}
						l = Error(z(426));
					}
				} else if (ye && s.mode & 1) {
					var k = zm(a);
					if (k !== null) {
						!(k.flags & 65536) && (k.flags |= 256),
							Mm(k, a, s, i, t),
							Qf(_o(l, s));
						break e;
					}
				}
				(i = l = _o(l, s)),
					Ae !== 4 && (Ae = 2),
					gi === null ? (gi = [i]) : gi.push(i),
					(i = a);
				do {
					switch (i.tag) {
						case 3:
							(i.flags |= 65536), (t &= -t), (i.lanes |= t);
							var h = f1(i, l, t);
							Cm(i, h);
							break e;
						case 1:
							s = l;
							var m = i.type,
								g = i.stateNode;
							if (
								!(i.flags & 128) &&
								(typeof m.getDerivedStateFromError == 'function' ||
									(g !== null &&
										typeof g.componentDidCatch == 'function' &&
										(Gr === null || !Gr.has(g))))
							) {
								(i.flags |= 65536), (t &= -t), (i.lanes |= t);
								var S = p1(i, s, t);
								Cm(i, S);
								break e;
							}
					}
					i = i.return;
				} while (i !== null);
			}
			z1(r);
		} catch (P) {
			(t = P), Pe === r && r !== null && (Pe = r = r.return);
			continue;
		}
		break;
	} while (1);
}
function R1() {
	var e = Zs.current;
	return (Zs.current = Qs), e === null ? Qs : e;
}
function vp() {
	(Ae === 0 || Ae === 3 || Ae === 2) && (Ae = 4),
		Le === null || (!(Rn & 268435455) && !(Ol & 268435455)) || Or(Le, Fe);
}
function tl(e, t) {
	var r = Q;
	Q |= 2;
	var n = R1();
	(Le !== e || Fe !== t) && ((fr = null), wn(e, t));
	do
		try {
			Q2();
			break;
		} catch (o) {
			$1(e, o);
		}
	while (1);
	if ((Jf(), (Q = r), (Zs.current = n), Pe !== null)) throw Error(z(261));
	return (Le = null), (Fe = 0), Ae;
}
function Q2() {
	for (; Pe !== null; ) A1(Pe);
}
function Z2() {
	for (; Pe !== null && !kk(); ) A1(Pe);
}
function A1(e) {
	var t = L1(e.alternate, e, pt);
	(e.memoizedProps = e.pendingProps),
		t === null ? z1(e) : (Pe = t),
		(fp.current = null);
}
function z1(e) {
	var t = e;
	do {
		var r = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((r = H2(r, t)), r !== null)) {
				(r.flags &= 32767), (Pe = r);
				return;
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(Ae = 6), (Pe = null);
				return;
			}
		} else if (((r = W2(r, t, pt)), r !== null)) {
			Pe = r;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			Pe = t;
			return;
		}
		Pe = t = e;
	} while (t !== null);
	Ae === 0 && (Ae = 5);
}
function pn(e, t, r) {
	var n = ie,
		o = Pt.transition;
	try {
		(Pt.transition = null), (ie = 1), J2(e, t, r, n);
	} finally {
		(Pt.transition = o), (ie = n);
	}
	return null;
}
function J2(e, t, r, n) {
	do co();
	while (Dr !== null);
	if (Q & 6) throw Error(z(327));
	r = e.finishedWork;
	var o = e.finishedLanes;
	if (r === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
		throw Error(z(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var i = r.lanes | r.childLanes;
	if (
		(Mk(e, i),
		e === Le && ((Pe = Le = null), (Fe = 0)),
		(!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
			Ga ||
			((Ga = !0),
			O1(Is, function () {
				return co(), null;
			})),
		(i = (r.flags & 15990) !== 0),
		r.subtreeFlags & 15990 || i)
	) {
		(i = Pt.transition), (Pt.transition = null);
		var a = ie;
		ie = 1;
		var s = Q;
		(Q |= 4),
			(fp.current = null),
			q2(e, r),
			T1(r, e),
			b2(xd),
			(Ds = !!Sd),
			(xd = Sd = null),
			(e.current = r),
			K2(r),
			Ck(),
			(Q = s),
			(ie = a),
			(Pt.transition = i);
	} else e.current = r;
	if (
		(Ga && ((Ga = !1), (Dr = e), (el = o)),
		(i = e.pendingLanes),
		i === 0 && (Gr = null),
		Ek(r.stateNode),
		at(e, _e()),
		t !== null)
	)
		for (n = e.onRecoverableError, r = 0; r < t.length; r++)
			(o = t[r]), n(o.value, { componentStack: o.stack, digest: o.digest });
	if (Js) throw ((Js = !1), (e = Vd), (Vd = null), e);
	return (
		el & 1 && e.tag !== 0 && co(),
		(i = e.pendingLanes),
		i & 1 ? (e === jd ? vi++ : ((vi = 0), (jd = e))) : (vi = 0),
		rn(),
		null
	);
}
function co() {
	if (Dr !== null) {
		var e = dy(el),
			t = Pt.transition,
			r = ie;
		try {
			if (((Pt.transition = null), (ie = 16 > e ? 16 : e), Dr === null))
				var n = !1;
			else {
				if (((e = Dr), (Dr = null), (el = 0), Q & 6)) throw Error(z(331));
				var o = Q;
				for (Q |= 4, F = e.current; F !== null; ) {
					var i = F,
						a = i.child;
					if (F.flags & 16) {
						var s = i.deletions;
						if (s !== null) {
							for (var l = 0; l < s.length; l++) {
								var u = s[l];
								for (F = u; F !== null; ) {
									var c = F;
									switch (c.tag) {
										case 0:
										case 11:
										case 15:
											mi(8, c, i);
									}
									var d = c.child;
									if (d !== null) (d.return = c), (F = d);
									else
										for (; F !== null; ) {
											c = F;
											var f = c.sibling,
												p = c.return;
											if ((k1(c), c === u)) {
												F = null;
												break;
											}
											if (f !== null) {
												(f.return = p), (F = f);
												break;
											}
											F = p;
										}
								}
							}
							var v = i.alternate;
							if (v !== null) {
								var b = v.child;
								if (b !== null) {
									v.child = null;
									do {
										var k = b.sibling;
										(b.sibling = null), (b = k);
									} while (b !== null);
								}
							}
							F = i;
						}
					}
					if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (F = a);
					else
						e: for (; F !== null; ) {
							if (((i = F), i.flags & 2048))
								switch (i.tag) {
									case 0:
									case 11:
									case 15:
										mi(9, i, i.return);
								}
							var h = i.sibling;
							if (h !== null) {
								(h.return = i.return), (F = h);
								break e;
							}
							F = i.return;
						}
				}
				var m = e.current;
				for (F = m; F !== null; ) {
					a = F;
					var g = a.child;
					if (a.subtreeFlags & 2064 && g !== null) (g.return = a), (F = g);
					else
						e: for (a = m; F !== null; ) {
							if (((s = F), s.flags & 2048))
								try {
									switch (s.tag) {
										case 0:
										case 11:
										case 15:
											Ll(9, s);
									}
								} catch (P) {
									ke(s, s.return, P);
								}
							if (s === a) {
								F = null;
								break e;
							}
							var S = s.sibling;
							if (S !== null) {
								(S.return = s.return), (F = S);
								break e;
							}
							F = s.return;
						}
				}
				if (
					((Q = o), rn(), er && typeof er.onPostCommitFiberRoot == 'function')
				)
					try {
						er.onPostCommitFiberRoot(Tl, e);
					} catch {}
				n = !0;
			}
			return n;
		} finally {
			(ie = r), (Pt.transition = t);
		}
	}
	return !1;
}
function Gm(e, t, r) {
	(t = _o(r, t)),
		(t = f1(e, t, 1)),
		(e = Hr(e, t, 1)),
		(t = Xe()),
		e !== null && (ua(e, 1, t), at(e, t));
}
function ke(e, t, r) {
	if (e.tag === 3) Gm(e, e, r);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				Gm(t, e, r);
				break;
			} else if (t.tag === 1) {
				var n = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == 'function' ||
					(typeof n.componentDidCatch == 'function' &&
						(Gr === null || !Gr.has(n)))
				) {
					(e = _o(r, e)),
						(e = p1(t, e, 1)),
						(t = Hr(t, e, 1)),
						(e = Xe()),
						t !== null && (ua(t, 1, e), at(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function eC(e, t, r) {
	var n = e.pingCache;
	n !== null && n.delete(t),
		(t = Xe()),
		(e.pingedLanes |= e.suspendedLanes & r),
		Le === e &&
			(Fe & r) === r &&
			(Ae === 4 || (Ae === 3 && (Fe & 130023424) === Fe && 500 > _e() - hp)
				? wn(e, 0)
				: (pp |= r)),
		at(e, t);
}
function M1(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = Ia), (Ia <<= 1), !(Ia & 130023424) && (Ia = 4194304))
			: (t = 1));
	var r = Xe();
	(e = wr(e, t)), e !== null && (ua(e, t, r), at(e, r));
}
function tC(e) {
	var t = e.memoizedState,
		r = 0;
	t !== null && (r = t.retryLane), M1(e, r);
}
function rC(e, t) {
	var r = 0;
	switch (e.tag) {
		case 13:
			var n = e.stateNode,
				o = e.memoizedState;
			o !== null && (r = o.retryLane);
			break;
		case 19:
			n = e.stateNode;
			break;
		default:
			throw Error(z(314));
	}
	n !== null && n.delete(t), M1(e, r);
}
var L1;
L1 = function (e, t, r) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || ot.current) rt = !0;
		else {
			if (!(e.lanes & r) && !(t.flags & 128)) return (rt = !1), U2(e, t, r);
			rt = !!(e.flags & 131072);
		}
	else (rt = !1), ye && t.flags & 1048576 && By(t, Hs, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var n = t.type;
			ms(e, t), (e = t.pendingProps);
			var o = xo(t, He.current);
			uo(t, r), (o = sp(null, t, n, e, o, r));
			var i = lp();
			return (
				(t.flags |= 1),
				typeof o == 'object' &&
				o !== null &&
				typeof o.render == 'function' &&
				o.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  it(n) ? ((i = !0), Us(t)) : (i = !1),
					  (t.memoizedState =
							o.state !== null && o.state !== void 0 ? o.state : null),
					  rp(t),
					  (o.updater = zl),
					  (t.stateNode = o),
					  (o._reactInternals = t),
					  Rd(t, n, e, r),
					  (t = Md(null, t, n, !0, i, r)))
					: ((t.tag = 0), ye && i && Yf(t), Ke(null, t, o, r), (t = t.child)),
				t
			);
		case 16:
			n = t.elementType;
			e: {
				switch (
					(ms(e, t),
					(e = t.pendingProps),
					(o = n._init),
					(n = o(n._payload)),
					(t.type = n),
					(o = t.tag = oC(n)),
					(e = It(n, e)),
					o)
				) {
					case 0:
						t = zd(null, t, n, e, r);
						break e;
					case 1:
						t = Im(null, t, n, e, r);
						break e;
					case 11:
						t = Lm(null, t, n, e, r);
						break e;
					case 14:
						t = Om(null, t, n, It(n.type, e), r);
						break e;
				}
				throw Error(z(306, n, ''));
			}
			return t;
		case 0:
			return (
				(n = t.type),
				(o = t.pendingProps),
				(o = t.elementType === n ? o : It(n, o)),
				zd(e, t, n, o, r)
			);
		case 1:
			return (
				(n = t.type),
				(o = t.pendingProps),
				(o = t.elementType === n ? o : It(n, o)),
				Im(e, t, n, o, r)
			);
		case 3:
			e: {
				if ((v1(t), e === null)) throw Error(z(387));
				(n = t.pendingProps),
					(i = t.memoizedState),
					(o = i.element),
					Vy(e, t),
					Ks(t, n, null, r);
				var a = t.memoizedState;
				if (((n = a.element), i.isDehydrated))
					if (
						((i = {
							element: n,
							isDehydrated: !1,
							cache: a.cache,
							pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
							transitions: a.transitions
						}),
						(t.updateQueue.baseState = i),
						(t.memoizedState = i),
						t.flags & 256)
					) {
						(o = _o(Error(z(423)), t)), (t = Bm(e, t, n, r, o));
						break e;
					} else if (n !== o) {
						(o = _o(Error(z(424)), t)), (t = Bm(e, t, n, r, o));
						break e;
					} else
						for (
							ht = Wr(t.stateNode.containerInfo.firstChild),
								mt = t,
								ye = !0,
								Dt = null,
								r = Hy(t, null, n, r),
								t.child = r;
							r;

						)
							(r.flags = (r.flags & -3) | 4096), (r = r.sibling);
				else {
					if ((wo(), n === o)) {
						t = kr(e, t, r);
						break e;
					}
					Ke(e, t, n, r);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				Gy(t),
				e === null && Ed(t),
				(n = t.type),
				(o = t.pendingProps),
				(i = e !== null ? e.memoizedProps : null),
				(a = o.children),
				wd(n, o) ? (a = null) : i !== null && wd(n, i) && (t.flags |= 32),
				g1(e, t),
				Ke(e, t, a, r),
				t.child
			);
		case 6:
			return e === null && Ed(t), null;
		case 13:
			return y1(e, t, r);
		case 4:
			return (
				np(t, t.stateNode.containerInfo),
				(n = t.pendingProps),
				e === null ? (t.child = ko(t, null, n, r)) : Ke(e, t, n, r),
				t.child
			);
		case 11:
			return (
				(n = t.type),
				(o = t.pendingProps),
				(o = t.elementType === n ? o : It(n, o)),
				Lm(e, t, n, o, r)
			);
		case 7:
			return Ke(e, t, t.pendingProps, r), t.child;
		case 8:
			return Ke(e, t, t.pendingProps.children, r), t.child;
		case 12:
			return Ke(e, t, t.pendingProps.children, r), t.child;
		case 10:
			e: {
				if (
					((n = t.type._context),
					(o = t.pendingProps),
					(i = t.memoizedProps),
					(a = o.value),
					de(Gs, n._currentValue),
					(n._currentValue = a),
					i !== null)
				)
					if (jt(i.value, a)) {
						if (i.children === o.children && !ot.current) {
							t = kr(e, t, r);
							break e;
						}
					} else
						for (i = t.child, i !== null && (i.return = t); i !== null; ) {
							var s = i.dependencies;
							if (s !== null) {
								a = i.child;
								for (var l = s.firstContext; l !== null; ) {
									if (l.context === n) {
										if (i.tag === 1) {
											(l = yr(-1, r & -r)), (l.tag = 2);
											var u = i.updateQueue;
											if (u !== null) {
												u = u.shared;
												var c = u.pending;
												c === null
													? (l.next = l)
													: ((l.next = c.next), (c.next = l)),
													(u.pending = l);
											}
										}
										(i.lanes |= r),
											(l = i.alternate),
											l !== null && (l.lanes |= r),
											Pd(i.return, r, t),
											(s.lanes |= r);
										break;
									}
									l = l.next;
								}
							} else if (i.tag === 10) a = i.type === t.type ? null : i.child;
							else if (i.tag === 18) {
								if (((a = i.return), a === null)) throw Error(z(341));
								(a.lanes |= r),
									(s = a.alternate),
									s !== null && (s.lanes |= r),
									Pd(a, r, t),
									(a = i.sibling);
							} else a = i.child;
							if (a !== null) a.return = i;
							else
								for (a = i; a !== null; ) {
									if (a === t) {
										a = null;
										break;
									}
									if (((i = a.sibling), i !== null)) {
										(i.return = a.return), (a = i);
										break;
									}
									a = a.return;
								}
							i = a;
						}
				Ke(e, t, o.children, r), (t = t.child);
			}
			return t;
		case 9:
			return (
				(o = t.type),
				(n = t.pendingProps.children),
				uo(t, r),
				(o = Rt(o)),
				(n = n(o)),
				(t.flags |= 1),
				Ke(e, t, n, r),
				t.child
			);
		case 14:
			return (
				(n = t.type),
				(o = It(n, t.pendingProps)),
				(o = It(n.type, o)),
				Om(e, t, n, o, r)
			);
		case 15:
			return h1(e, t, t.type, t.pendingProps, r);
		case 17:
			return (
				(n = t.type),
				(o = t.pendingProps),
				(o = t.elementType === n ? o : It(n, o)),
				ms(e, t),
				(t.tag = 1),
				it(n) ? ((e = !0), Us(t)) : (e = !1),
				uo(t, r),
				Uy(t, n, o),
				Rd(t, n, o, r),
				Md(null, t, n, !0, e, r)
			);
		case 19:
			return b1(e, t, r);
		case 22:
			return m1(e, t, r);
	}
	throw Error(z(156, t.tag));
};
function O1(e, t) {
	return sy(e, t);
}
function nC(e, t, r, n) {
	(this.tag = e),
		(this.key = r),
		(this.sibling =
			this.child =
			this.return =
			this.stateNode =
			this.type =
			this.elementType =
				null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = t),
		(this.dependencies =
			this.memoizedState =
			this.updateQueue =
			this.memoizedProps =
				null),
		(this.mode = n),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null);
}
function Et(e, t, r, n) {
	return new nC(e, t, r, n);
}
function yp(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function oC(e) {
	if (typeof e == 'function') return yp(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === Bf)) return 11;
		if (e === Df) return 14;
	}
	return 2;
}
function Kr(e, t) {
	var r = e.alternate;
	return (
		r === null
			? ((r = Et(e.tag, t, e.key, e.mode)),
			  (r.elementType = e.elementType),
			  (r.type = e.type),
			  (r.stateNode = e.stateNode),
			  (r.alternate = e),
			  (e.alternate = r))
			: ((r.pendingProps = t),
			  (r.type = e.type),
			  (r.flags = 0),
			  (r.subtreeFlags = 0),
			  (r.deletions = null)),
		(r.flags = e.flags & 14680064),
		(r.childLanes = e.childLanes),
		(r.lanes = e.lanes),
		(r.child = e.child),
		(r.memoizedProps = e.memoizedProps),
		(r.memoizedState = e.memoizedState),
		(r.updateQueue = e.updateQueue),
		(t = e.dependencies),
		(r.dependencies =
			t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
		(r.sibling = e.sibling),
		(r.index = e.index),
		(r.ref = e.ref),
		r
	);
}
function ys(e, t, r, n, o, i) {
	var a = 2;
	if (((n = e), typeof e == 'function')) yp(e) && (a = 1);
	else if (typeof e == 'string') a = 5;
	else
		e: switch (e) {
			case Hn:
				return kn(r.children, o, i, t);
			case If:
				(a = 8), (o |= 8);
				break;
			case ed:
				return (
					(e = Et(12, r, t, o | 2)), (e.elementType = ed), (e.lanes = i), e
				);
			case td:
				return (e = Et(13, r, t, o)), (e.elementType = td), (e.lanes = i), e;
			case rd:
				return (e = Et(19, r, t, o)), (e.elementType = rd), (e.lanes = i), e;
			case Wv:
				return Il(r, o, i, t);
			default:
				if (typeof e == 'object' && e !== null)
					switch (e.$$typeof) {
						case jv:
							a = 10;
							break e;
						case Uv:
							a = 9;
							break e;
						case Bf:
							a = 11;
							break e;
						case Df:
							a = 14;
							break e;
						case Ar:
							(a = 16), (n = null);
							break e;
					}
				throw Error(z(130, e == null ? e : typeof e, ''));
		}
	return (
		(t = Et(a, r, t, o)), (t.elementType = e), (t.type = n), (t.lanes = i), t
	);
}
function kn(e, t, r, n) {
	return (e = Et(7, e, n, t)), (e.lanes = r), e;
}
function Il(e, t, r, n) {
	return (
		(e = Et(22, e, n, t)),
		(e.elementType = Wv),
		(e.lanes = r),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function rc(e, t, r) {
	return (e = Et(6, e, null, t)), (e.lanes = r), e;
}
function nc(e, t, r) {
	return (
		(t = Et(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = r),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}),
		t
	);
}
function iC(e, t, r, n, o) {
	(this.tag = t),
		(this.containerInfo = e),
		(this.finishedWork =
			this.pingCache =
			this.current =
			this.pendingChildren =
				null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = Bu(0)),
		(this.expirationTimes = Bu(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = Bu(0)),
		(this.identifierPrefix = n),
		(this.onRecoverableError = o),
		(this.mutableSourceEagerHydrationData = null);
}
function bp(e, t, r, n, o, i, a, s, l) {
	return (
		(e = new iC(e, t, r, s, l)),
		t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
		(i = Et(3, null, null, t)),
		(e.current = i),
		(i.stateNode = e),
		(i.memoizedState = {
			element: n,
			isDehydrated: r,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null
		}),
		rp(i),
		e
	);
}
function aC(e, t, r) {
	var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: Wn,
		key: n == null ? null : '' + n,
		children: e,
		containerInfo: t,
		implementation: r
	};
}
function I1(e) {
	if (!e) return Qr;
	e = e._reactInternals;
	e: {
		if (Mn(e) !== e || e.tag !== 1) throw Error(z(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (it(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			t = t.return;
		} while (t !== null);
		throw Error(z(171));
	}
	if (e.tag === 1) {
		var r = e.type;
		if (it(r)) return Oy(e, r, t);
	}
	return t;
}
function B1(e, t, r, n, o, i, a, s, l) {
	return (
		(e = bp(r, n, !0, e, o, i, a, s, l)),
		(e.context = I1(null)),
		(r = e.current),
		(n = Xe()),
		(o = qr(r)),
		(i = yr(n, o)),
		(i.callback = t ?? null),
		Hr(r, i, o),
		(e.current.lanes = o),
		ua(e, o, n),
		at(e, n),
		e
	);
}
function Bl(e, t, r, n) {
	var o = t.current,
		i = Xe(),
		a = qr(o);
	return (
		(r = I1(r)),
		t.context === null ? (t.context = r) : (t.pendingContext = r),
		(t = yr(i, a)),
		(t.payload = { element: e }),
		(n = n === void 0 ? null : n),
		n !== null && (t.callback = n),
		(e = Hr(o, t, a)),
		e !== null && (Vt(e, o, a, i), fs(e, o, a)),
		a
	);
}
function rl(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function qm(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var r = e.retryLane;
		e.retryLane = r !== 0 && r < t ? r : t;
	}
}
function Sp(e, t) {
	qm(e, t), (e = e.alternate) && qm(e, t);
}
function sC() {
	return null;
}
var D1 =
	typeof reportError == 'function'
		? reportError
		: function (e) {
				console.error(e);
		  };
function xp(e) {
	this._internalRoot = e;
}
Dl.prototype.render = xp.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(z(409));
	Bl(e, t, null, null);
};
Dl.prototype.unmount = xp.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		An(function () {
			Bl(null, e, null, null);
		}),
			(t[xr] = null);
	}
};
function Dl(e) {
	this._internalRoot = e;
}
Dl.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = hy();
		e = { blockedOn: null, target: e, priority: t };
		for (var r = 0; r < Lr.length && t !== 0 && t < Lr[r].priority; r++);
		Lr.splice(r, 0, e), r === 0 && gy(e);
	}
};
function wp(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Fl(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
	);
}
function Km() {}
function lC(e, t, r, n, o) {
	if (o) {
		if (typeof n == 'function') {
			var i = n;
			n = function () {
				var u = rl(a);
				i.call(u);
			};
		}
		var a = B1(t, n, e, 0, null, !1, !1, '', Km);
		return (
			(e._reactRootContainer = a),
			(e[xr] = a.current),
			Vi(e.nodeType === 8 ? e.parentNode : e),
			An(),
			a
		);
	}
	for (; (o = e.lastChild); ) e.removeChild(o);
	if (typeof n == 'function') {
		var s = n;
		n = function () {
			var u = rl(l);
			s.call(u);
		};
	}
	var l = bp(e, 0, !1, null, null, !1, !1, '', Km);
	return (
		(e._reactRootContainer = l),
		(e[xr] = l.current),
		Vi(e.nodeType === 8 ? e.parentNode : e),
		An(function () {
			Bl(t, l, r, n);
		}),
		l
	);
}
function Nl(e, t, r, n, o) {
	var i = r._reactRootContainer;
	if (i) {
		var a = i;
		if (typeof o == 'function') {
			var s = o;
			o = function () {
				var l = rl(a);
				s.call(l);
			};
		}
		Bl(t, a, e, o);
	} else a = lC(r, t, e, o, n);
	return rl(a);
}
fy = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var r = ni(t.pendingLanes);
				r !== 0 &&
					(Vf(t, r | 1), at(t, _e()), !(Q & 6) && ((To = _e() + 500), rn()));
			}
			break;
		case 13:
			An(function () {
				var n = wr(e, 1);
				if (n !== null) {
					var o = Xe();
					Vt(n, e, 1, o);
				}
			}),
				Sp(e, 1);
	}
};
jf = function (e) {
	if (e.tag === 13) {
		var t = wr(e, 134217728);
		if (t !== null) {
			var r = Xe();
			Vt(t, e, 134217728, r);
		}
		Sp(e, 134217728);
	}
};
py = function (e) {
	if (e.tag === 13) {
		var t = qr(e),
			r = wr(e, t);
		if (r !== null) {
			var n = Xe();
			Vt(r, e, t, n);
		}
		Sp(e, t);
	}
};
hy = function () {
	return ie;
};
my = function (e, t) {
	var r = ie;
	try {
		return (ie = e), t();
	} finally {
		ie = r;
	}
};
fd = function (e, t, r) {
	switch (t) {
		case 'input':
			if ((id(e, r), (t = r.name), r.type === 'radio' && t != null)) {
				for (r = e; r.parentNode; ) r = r.parentNode;
				for (
					r = r.querySelectorAll(
						'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
					),
						t = 0;
					t < r.length;
					t++
				) {
					var n = r[t];
					if (n !== e && n.form === e.form) {
						var o = Rl(n);
						if (!o) throw Error(z(90));
						Gv(n), id(n, o);
					}
				}
			}
			break;
		case 'textarea':
			Kv(e, r);
			break;
		case 'select':
			(t = r.value), t != null && io(e, !!r.multiple, t, !1);
	}
};
ty = mp;
ry = An;
var uC = { usingClientEntryPoint: !1, Events: [da, Yn, Rl, Jv, ey, mp] },
	Ko = {
		findFiberByHostInstance: vn,
		bundleType: 0,
		version: '18.2.0',
		rendererPackageName: 'react-dom'
	},
	cC = {
		bundleType: Ko.bundleType,
		version: Ko.version,
		rendererPackageName: Ko.rendererPackageName,
		rendererConfig: Ko.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: _r.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = iy(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: Ko.findFiberByHostInstance || sC,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: '18.2.0-next-9e3b772b8-20220608'
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
	var qa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!qa.isDisabled && qa.supportsFiber)
		try {
			(Tl = qa.inject(cC)), (er = qa);
		} catch {}
}
St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uC;
St.createPortal = function (e, t) {
	var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!wp(t)) throw Error(z(200));
	return aC(e, t, null, r);
};
St.createRoot = function (e, t) {
	if (!wp(e)) throw Error(z(299));
	var r = !1,
		n = '',
		o = D1;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (r = !0),
			t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
		(t = bp(e, 1, !1, null, null, r, !1, n, o)),
		(e[xr] = t.current),
		Vi(e.nodeType === 8 ? e.parentNode : e),
		new xp(t)
	);
};
St.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == 'function'
			? Error(z(188))
			: ((e = Object.keys(e).join(',')), Error(z(268, e)));
	return (e = iy(t)), (e = e === null ? null : e.stateNode), e;
};
St.flushSync = function (e) {
	return An(e);
};
St.hydrate = function (e, t, r) {
	if (!Fl(t)) throw Error(z(200));
	return Nl(null, e, t, !0, r);
};
St.hydrateRoot = function (e, t, r) {
	if (!wp(e)) throw Error(z(405));
	var n = (r != null && r.hydratedSources) || null,
		o = !1,
		i = '',
		a = D1;
	if (
		(r != null &&
			(r.unstable_strictMode === !0 && (o = !0),
			r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
			r.onRecoverableError !== void 0 && (a = r.onRecoverableError)),
		(t = B1(t, null, e, 1, r ?? null, o, !1, i, a)),
		(e[xr] = t.current),
		Vi(e),
		n)
	)
		for (e = 0; e < n.length; e++)
			(r = n[e]),
				(o = r._getVersion),
				(o = o(r._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [r, o])
					: t.mutableSourceEagerHydrationData.push(r, o);
	return new Dl(t);
};
St.render = function (e, t, r) {
	if (!Fl(t)) throw Error(z(200));
	return Nl(null, e, t, !1, r);
};
St.unmountComponentAtNode = function (e) {
	if (!Fl(e)) throw Error(z(40));
	return e._reactRootContainer
		? (An(function () {
				Nl(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[xr] = null);
				});
		  }),
		  !0)
		: !1;
};
St.unstable_batchedUpdates = mp;
St.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
	if (!Fl(r)) throw Error(z(200));
	if (e == null || e._reactInternals === void 0) throw Error(z(38));
	return Nl(e, t, r, !1, n);
};
St.version = '18.2.0-next-9e3b772b8-20220608';
(function (e) {
	function t() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
			} catch (r) {
				console.error(r);
			}
	}
	t(), (e.exports = St);
})(sk);
var Ym = zi;
(Qc.createRoot = Ym.createRoot), (Qc.hydrateRoot = Ym.hydrateRoot);
var Hd = {},
	dC = {
		get exports() {
			return Hd;
		},
		set exports(e) {
			Hd = e;
		}
	},
	nl = {},
	fC = {
		get exports() {
			return nl;
		},
		set exports(e) {
			nl = e;
		}
	},
	F1 = function (t, r) {
		return function () {
			for (var o = new Array(arguments.length), i = 0; i < o.length; i++)
				o[i] = arguments[i];
			return t.apply(r, o);
		};
	},
	pC = F1,
	nn = Object.prototype.toString;
function kp(e) {
	return Array.isArray(e);
}
function Gd(e) {
	return typeof e > 'u';
}
function hC(e) {
	return (
		e !== null &&
		!Gd(e) &&
		e.constructor !== null &&
		!Gd(e.constructor) &&
		typeof e.constructor.isBuffer == 'function' &&
		e.constructor.isBuffer(e)
	);
}
function N1(e) {
	return nn.call(e) === '[object ArrayBuffer]';
}
function mC(e) {
	return nn.call(e) === '[object FormData]';
}
function gC(e) {
	var t;
	return (
		typeof ArrayBuffer < 'u' && ArrayBuffer.isView
			? (t = ArrayBuffer.isView(e))
			: (t = e && e.buffer && N1(e.buffer)),
		t
	);
}
function vC(e) {
	return typeof e == 'string';
}
function yC(e) {
	return typeof e == 'number';
}
function V1(e) {
	return e !== null && typeof e == 'object';
}
function bs(e) {
	if (nn.call(e) !== '[object Object]') return !1;
	var t = Object.getPrototypeOf(e);
	return t === null || t === Object.prototype;
}
function bC(e) {
	return nn.call(e) === '[object Date]';
}
function SC(e) {
	return nn.call(e) === '[object File]';
}
function xC(e) {
	return nn.call(e) === '[object Blob]';
}
function j1(e) {
	return nn.call(e) === '[object Function]';
}
function wC(e) {
	return V1(e) && j1(e.pipe);
}
function kC(e) {
	return nn.call(e) === '[object URLSearchParams]';
}
function CC(e) {
	return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, '');
}
function _C() {
	return typeof navigator < 'u' &&
		(navigator.product === 'ReactNative' ||
			navigator.product === 'NativeScript' ||
			navigator.product === 'NS')
		? !1
		: typeof window < 'u' && typeof document < 'u';
}
function Cp(e, t) {
	if (!(e === null || typeof e > 'u'))
		if ((typeof e != 'object' && (e = [e]), kp(e)))
			for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
		else
			for (var o in e)
				Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e);
}
function qd() {
	var e = {};
	function t(o, i) {
		bs(e[i]) && bs(o)
			? (e[i] = qd(e[i], o))
			: bs(o)
			? (e[i] = qd({}, o))
			: kp(o)
			? (e[i] = o.slice())
			: (e[i] = o);
	}
	for (var r = 0, n = arguments.length; r < n; r++) Cp(arguments[r], t);
	return e;
}
function TC(e, t, r) {
	return (
		Cp(t, function (o, i) {
			r && typeof o == 'function' ? (e[i] = pC(o, r)) : (e[i] = o);
		}),
		e
	);
}
function EC(e) {
	return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
var ut = {
		isArray: kp,
		isArrayBuffer: N1,
		isBuffer: hC,
		isFormData: mC,
		isArrayBufferView: gC,
		isString: vC,
		isNumber: yC,
		isObject: V1,
		isPlainObject: bs,
		isUndefined: Gd,
		isDate: bC,
		isFile: SC,
		isBlob: xC,
		isFunction: j1,
		isStream: wC,
		isURLSearchParams: kC,
		isStandardBrowserEnv: _C,
		forEach: Cp,
		merge: qd,
		extend: TC,
		trim: CC,
		stripBOM: EC
	},
	Fn = ut;
function Xm(e) {
	return encodeURIComponent(e)
		.replace(/%3A/gi, ':')
		.replace(/%24/g, '$')
		.replace(/%2C/gi, ',')
		.replace(/%20/g, '+')
		.replace(/%5B/gi, '[')
		.replace(/%5D/gi, ']');
}
var U1 = function (t, r, n) {
		if (!r) return t;
		var o;
		if (n) o = n(r);
		else if (Fn.isURLSearchParams(r)) o = r.toString();
		else {
			var i = [];
			Fn.forEach(r, function (l, u) {
				l === null ||
					typeof l > 'u' ||
					(Fn.isArray(l) ? (u = u + '[]') : (l = [l]),
					Fn.forEach(l, function (d) {
						Fn.isDate(d)
							? (d = d.toISOString())
							: Fn.isObject(d) && (d = JSON.stringify(d)),
							i.push(Xm(u) + '=' + Xm(d));
					}));
			}),
				(o = i.join('&'));
		}
		if (o) {
			var a = t.indexOf('#');
			a !== -1 && (t = t.slice(0, a)),
				(t += (t.indexOf('?') === -1 ? '?' : '&') + o);
		}
		return t;
	},
	PC = ut;
function Vl() {
	this.handlers = [];
}
Vl.prototype.use = function (t, r, n) {
	return (
		this.handlers.push({
			fulfilled: t,
			rejected: r,
			synchronous: n ? n.synchronous : !1,
			runWhen: n ? n.runWhen : null
		}),
		this.handlers.length - 1
	);
};
Vl.prototype.eject = function (t) {
	this.handlers[t] && (this.handlers[t] = null);
};
Vl.prototype.forEach = function (t) {
	PC.forEach(this.handlers, function (n) {
		n !== null && t(n);
	});
};
var $C = Vl,
	RC = ut,
	AC = function (t, r) {
		RC.forEach(t, function (o, i) {
			i !== r &&
				i.toUpperCase() === r.toUpperCase() &&
				((t[r] = o), delete t[i]);
		});
	},
	W1 = function (t, r, n, o, i) {
		return (
			(t.config = r),
			n && (t.code = n),
			(t.request = o),
			(t.response = i),
			(t.isAxiosError = !0),
			(t.toJSON = function () {
				return {
					message: this.message,
					name: this.name,
					description: this.description,
					number: this.number,
					fileName: this.fileName,
					lineNumber: this.lineNumber,
					columnNumber: this.columnNumber,
					stack: this.stack,
					config: this.config,
					code: this.code,
					status:
						this.response && this.response.status ? this.response.status : null
				};
			}),
			t
		);
	},
	oc,
	Qm;
function H1() {
	if (Qm) return oc;
	Qm = 1;
	var e = W1;
	return (
		(oc = function (r, n, o, i, a) {
			var s = new Error(r);
			return e(s, n, o, i, a);
		}),
		oc
	);
}
var ic, Zm;
function zC() {
	if (Zm) return ic;
	Zm = 1;
	var e = H1();
	return (
		(ic = function (r, n, o) {
			var i = o.config.validateStatus;
			!o.status || !i || i(o.status)
				? r(o)
				: n(
						e(
							'Request failed with status code ' + o.status,
							o.config,
							null,
							o.request,
							o
						)
				  );
		}),
		ic
	);
}
var ac, Jm;
function MC() {
	if (Jm) return ac;
	Jm = 1;
	var e = ut;
	return (
		(ac = e.isStandardBrowserEnv()
			? (function () {
					return {
						write: function (n, o, i, a, s, l) {
							var u = [];
							u.push(n + '=' + encodeURIComponent(o)),
								e.isNumber(i) && u.push('expires=' + new Date(i).toGMTString()),
								e.isString(a) && u.push('path=' + a),
								e.isString(s) && u.push('domain=' + s),
								l === !0 && u.push('secure'),
								(document.cookie = u.join('; '));
						},
						read: function (n) {
							var o = document.cookie.match(
								new RegExp('(^|;\\s*)(' + n + ')=([^;]*)')
							);
							return o ? decodeURIComponent(o[3]) : null;
						},
						remove: function (n) {
							this.write(n, '', Date.now() - 864e5);
						}
					};
			  })()
			: (function () {
					return {
						write: function () {},
						read: function () {
							return null;
						},
						remove: function () {}
					};
			  })()),
		ac
	);
}
var sc, e0;
function LC() {
	return (
		e0 ||
			((e0 = 1),
			(sc = function (t) {
				return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
			})),
		sc
	);
}
var lc, t0;
function OC() {
	return (
		t0 ||
			((t0 = 1),
			(lc = function (t, r) {
				return r ? t.replace(/\/+$/, '') + '/' + r.replace(/^\/+/, '') : t;
			})),
		lc
	);
}
var uc, r0;
function IC() {
	if (r0) return uc;
	r0 = 1;
	var e = LC(),
		t = OC();
	return (
		(uc = function (n, o) {
			return n && !e(o) ? t(n, o) : o;
		}),
		uc
	);
}
var cc, n0;
function BC() {
	if (n0) return cc;
	n0 = 1;
	var e = ut,
		t = [
			'age',
			'authorization',
			'content-length',
			'content-type',
			'etag',
			'expires',
			'from',
			'host',
			'if-modified-since',
			'if-unmodified-since',
			'last-modified',
			'location',
			'max-forwards',
			'proxy-authorization',
			'referer',
			'retry-after',
			'user-agent'
		];
	return (
		(cc = function (n) {
			var o = {},
				i,
				a,
				s;
			return (
				n &&
					e.forEach(
						n.split(`
`),
						function (u) {
							if (
								((s = u.indexOf(':')),
								(i = e.trim(u.substr(0, s)).toLowerCase()),
								(a = e.trim(u.substr(s + 1))),
								i)
							) {
								if (o[i] && t.indexOf(i) >= 0) return;
								i === 'set-cookie'
									? (o[i] = (o[i] ? o[i] : []).concat([a]))
									: (o[i] = o[i] ? o[i] + ', ' + a : a);
							}
						}
					),
				o
			);
		}),
		cc
	);
}
var dc, o0;
function DC() {
	if (o0) return dc;
	o0 = 1;
	var e = ut;
	return (
		(dc = e.isStandardBrowserEnv()
			? (function () {
					var r = /(msie|trident)/i.test(navigator.userAgent),
						n = document.createElement('a'),
						o;
					function i(a) {
						var s = a;
						return (
							r && (n.setAttribute('href', s), (s = n.href)),
							n.setAttribute('href', s),
							{
								href: n.href,
								protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
								host: n.host,
								search: n.search ? n.search.replace(/^\?/, '') : '',
								hash: n.hash ? n.hash.replace(/^#/, '') : '',
								hostname: n.hostname,
								port: n.port,
								pathname:
									n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname
							}
						);
					}
					return (
						(o = i(window.location.href)),
						function (s) {
							var l = e.isString(s) ? i(s) : s;
							return l.protocol === o.protocol && l.host === o.host;
						}
					);
			  })()
			: (function () {
					return function () {
						return !0;
					};
			  })()),
		dc
	);
}
var fc, i0;
function jl() {
	if (i0) return fc;
	i0 = 1;
	function e(t) {
		this.message = t;
	}
	return (
		(e.prototype.toString = function () {
			return 'Cancel' + (this.message ? ': ' + this.message : '');
		}),
		(e.prototype.__CANCEL__ = !0),
		(fc = e),
		fc
	);
}
var pc, a0;
function s0() {
	if (a0) return pc;
	a0 = 1;
	var e = ut,
		t = zC(),
		r = MC(),
		n = U1,
		o = IC(),
		i = BC(),
		a = DC(),
		s = H1(),
		l = Ul(),
		u = jl();
	return (
		(pc = function (d) {
			return new Promise(function (p, v) {
				var b = d.data,
					k = d.headers,
					h = d.responseType,
					m;
				function g() {
					d.cancelToken && d.cancelToken.unsubscribe(m),
						d.signal && d.signal.removeEventListener('abort', m);
				}
				e.isFormData(b) && delete k['Content-Type'];
				var S = new XMLHttpRequest();
				if (d.auth) {
					var P = d.auth.username || '',
						R = d.auth.password
							? unescape(encodeURIComponent(d.auth.password))
							: '';
					k.Authorization = 'Basic ' + btoa(P + ':' + R);
				}
				var $ = o(d.baseURL, d.url);
				S.open(d.method.toUpperCase(), n($, d.params, d.paramsSerializer), !0),
					(S.timeout = d.timeout);
				function I() {
					if (S) {
						var T =
								'getAllResponseHeaders' in S
									? i(S.getAllResponseHeaders())
									: null,
							M =
								!h || h === 'text' || h === 'json'
									? S.responseText
									: S.response,
							N = {
								data: M,
								status: S.status,
								statusText: S.statusText,
								headers: T,
								config: d,
								request: S
							};
						t(
							function (H) {
								p(H), g();
							},
							function (H) {
								v(H), g();
							},
							N
						),
							(S = null);
					}
				}
				if (
					('onloadend' in S
						? (S.onloadend = I)
						: (S.onreadystatechange = function () {
								!S ||
									S.readyState !== 4 ||
									(S.status === 0 &&
										!(S.responseURL && S.responseURL.indexOf('file:') === 0)) ||
									setTimeout(I);
						  }),
					(S.onabort = function () {
						S && (v(s('Request aborted', d, 'ECONNABORTED', S)), (S = null));
					}),
					(S.onerror = function () {
						v(s('Network Error', d, null, S)), (S = null);
					}),
					(S.ontimeout = function () {
						var M = d.timeout
								? 'timeout of ' + d.timeout + 'ms exceeded'
								: 'timeout exceeded',
							N = d.transitional || l.transitional;
						d.timeoutErrorMessage && (M = d.timeoutErrorMessage),
							v(
								s(M, d, N.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED', S)
							),
							(S = null);
					}),
					e.isStandardBrowserEnv())
				) {
					var E =
						(d.withCredentials || a($)) && d.xsrfCookieName
							? r.read(d.xsrfCookieName)
							: void 0;
					E && (k[d.xsrfHeaderName] = E);
				}
				'setRequestHeader' in S &&
					e.forEach(k, function (M, N) {
						typeof b > 'u' && N.toLowerCase() === 'content-type'
							? delete k[N]
							: S.setRequestHeader(N, M);
					}),
					e.isUndefined(d.withCredentials) ||
						(S.withCredentials = !!d.withCredentials),
					h && h !== 'json' && (S.responseType = d.responseType),
					typeof d.onDownloadProgress == 'function' &&
						S.addEventListener('progress', d.onDownloadProgress),
					typeof d.onUploadProgress == 'function' &&
						S.upload &&
						S.upload.addEventListener('progress', d.onUploadProgress),
					(d.cancelToken || d.signal) &&
						((m = function (T) {
							S &&
								(v(!T || (T && T.type) ? new u('canceled') : T),
								S.abort(),
								(S = null));
						}),
						d.cancelToken && d.cancelToken.subscribe(m),
						d.signal &&
							(d.signal.aborted ? m() : d.signal.addEventListener('abort', m))),
					b || (b = null),
					S.send(b);
			});
		}),
		pc
	);
}
var hc, l0;
function Ul() {
	if (l0) return hc;
	l0 = 1;
	var e = ut,
		t = AC,
		r = W1,
		n = { 'Content-Type': 'application/x-www-form-urlencoded' };
	function o(l, u) {
		!e.isUndefined(l) &&
			e.isUndefined(l['Content-Type']) &&
			(l['Content-Type'] = u);
	}
	function i() {
		var l;
		return (
			(typeof XMLHttpRequest < 'u' ||
				(typeof process < 'u' &&
					Object.prototype.toString.call(process) === '[object process]')) &&
				(l = s0()),
			l
		);
	}
	function a(l, u, c) {
		if (e.isString(l))
			try {
				return (u || JSON.parse)(l), e.trim(l);
			} catch (d) {
				if (d.name !== 'SyntaxError') throw d;
			}
		return (c || JSON.stringify)(l);
	}
	var s = {
		transitional: {
			silentJSONParsing: !0,
			forcedJSONParsing: !0,
			clarifyTimeoutError: !1
		},
		adapter: i(),
		transformRequest: [
			function (u, c) {
				return (
					t(c, 'Accept'),
					t(c, 'Content-Type'),
					e.isFormData(u) ||
					e.isArrayBuffer(u) ||
					e.isBuffer(u) ||
					e.isStream(u) ||
					e.isFile(u) ||
					e.isBlob(u)
						? u
						: e.isArrayBufferView(u)
						? u.buffer
						: e.isURLSearchParams(u)
						? (o(c, 'application/x-www-form-urlencoded;charset=utf-8'),
						  u.toString())
						: e.isObject(u) || (c && c['Content-Type'] === 'application/json')
						? (o(c, 'application/json'), a(u))
						: u
				);
			}
		],
		transformResponse: [
			function (u) {
				var c = this.transitional || s.transitional,
					d = c && c.silentJSONParsing,
					f = c && c.forcedJSONParsing,
					p = !d && this.responseType === 'json';
				if (p || (f && e.isString(u) && u.length))
					try {
						return JSON.parse(u);
					} catch (v) {
						if (p)
							throw v.name === 'SyntaxError' ? r(v, this, 'E_JSON_PARSE') : v;
					}
				return u;
			}
		],
		timeout: 0,
		xsrfCookieName: 'XSRF-TOKEN',
		xsrfHeaderName: 'X-XSRF-TOKEN',
		maxContentLength: -1,
		maxBodyLength: -1,
		validateStatus: function (u) {
			return u >= 200 && u < 300;
		},
		headers: { common: { Accept: 'application/json, text/plain, */*' } }
	};
	return (
		e.forEach(['delete', 'get', 'head'], function (u) {
			s.headers[u] = {};
		}),
		e.forEach(['post', 'put', 'patch'], function (u) {
			s.headers[u] = e.merge(n);
		}),
		(hc = s),
		hc
	);
}
var FC = ut,
	NC = Ul(),
	VC = function (t, r, n) {
		var o = this || NC;
		return (
			FC.forEach(n, function (a) {
				t = a.call(o, t, r);
			}),
			t
		);
	},
	mc,
	u0;
function G1() {
	return (
		u0 ||
			((u0 = 1),
			(mc = function (t) {
				return !!(t && t.__CANCEL__);
			})),
		mc
	);
}
var c0 = ut,
	gc = VC,
	jC = G1(),
	UC = Ul(),
	WC = jl();
function vc(e) {
	if (
		(e.cancelToken && e.cancelToken.throwIfRequested(),
		e.signal && e.signal.aborted)
	)
		throw new WC('canceled');
}
var HC = function (t) {
		vc(t),
			(t.headers = t.headers || {}),
			(t.data = gc.call(t, t.data, t.headers, t.transformRequest)),
			(t.headers = c0.merge(
				t.headers.common || {},
				t.headers[t.method] || {},
				t.headers
			)),
			c0.forEach(
				['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
				function (o) {
					delete t.headers[o];
				}
			);
		var r = t.adapter || UC.adapter;
		return r(t).then(
			function (o) {
				return (
					vc(t),
					(o.data = gc.call(t, o.data, o.headers, t.transformResponse)),
					o
				);
			},
			function (o) {
				return (
					jC(o) ||
						(vc(t),
						o &&
							o.response &&
							(o.response.data = gc.call(
								t,
								o.response.data,
								o.response.headers,
								t.transformResponse
							))),
					Promise.reject(o)
				);
			}
		);
	},
	ft = ut,
	q1 = function (t, r) {
		r = r || {};
		var n = {};
		function o(c, d) {
			return ft.isPlainObject(c) && ft.isPlainObject(d)
				? ft.merge(c, d)
				: ft.isPlainObject(d)
				? ft.merge({}, d)
				: ft.isArray(d)
				? d.slice()
				: d;
		}
		function i(c) {
			if (ft.isUndefined(r[c])) {
				if (!ft.isUndefined(t[c])) return o(void 0, t[c]);
			} else return o(t[c], r[c]);
		}
		function a(c) {
			if (!ft.isUndefined(r[c])) return o(void 0, r[c]);
		}
		function s(c) {
			if (ft.isUndefined(r[c])) {
				if (!ft.isUndefined(t[c])) return o(void 0, t[c]);
			} else return o(void 0, r[c]);
		}
		function l(c) {
			if (c in r) return o(t[c], r[c]);
			if (c in t) return o(void 0, t[c]);
		}
		var u = {
			url: a,
			method: a,
			data: a,
			baseURL: s,
			transformRequest: s,
			transformResponse: s,
			paramsSerializer: s,
			timeout: s,
			timeoutMessage: s,
			withCredentials: s,
			adapter: s,
			responseType: s,
			xsrfCookieName: s,
			xsrfHeaderName: s,
			onUploadProgress: s,
			onDownloadProgress: s,
			decompress: s,
			maxContentLength: s,
			maxBodyLength: s,
			transport: s,
			httpAgent: s,
			httpsAgent: s,
			cancelToken: s,
			socketPath: s,
			responseEncoding: s,
			validateStatus: l
		};
		return (
			ft.forEach(Object.keys(t).concat(Object.keys(r)), function (d) {
				var f = u[d] || i,
					p = f(d);
				(ft.isUndefined(p) && f !== l) || (n[d] = p);
			}),
			n
		);
	},
	yc,
	d0;
function K1() {
	return d0 || ((d0 = 1), (yc = { version: '0.26.0' })), yc;
}
var GC = K1().version,
	_p = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
	function (e, t) {
		_p[e] = function (n) {
			return typeof n === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
		};
	}
);
var f0 = {};
_p.transitional = function (t, r, n) {
	function o(i, a) {
		return (
			'[Axios v' +
			GC +
			"] Transitional option '" +
			i +
			"'" +
			a +
			(n ? '. ' + n : '')
		);
	}
	return function (i, a, s) {
		if (t === !1)
			throw new Error(o(a, ' has been removed' + (r ? ' in ' + r : '')));
		return (
			r &&
				!f0[a] &&
				((f0[a] = !0),
				console.warn(
					o(
						a,
						' has been deprecated since v' +
							r +
							' and will be removed in the near future'
					)
				)),
			t ? t(i, a, s) : !0
		);
	};
};
function qC(e, t, r) {
	if (typeof e != 'object') throw new TypeError('options must be an object');
	for (var n = Object.keys(e), o = n.length; o-- > 0; ) {
		var i = n[o],
			a = t[i];
		if (a) {
			var s = e[i],
				l = s === void 0 || a(s, i, e);
			if (l !== !0) throw new TypeError('option ' + i + ' must be ' + l);
			continue;
		}
		if (r !== !0) throw Error('Unknown option ' + i);
	}
}
var KC = { assertOptions: qC, validators: _p },
	Y1 = ut,
	YC = U1,
	p0 = $C,
	h0 = HC,
	Wl = q1,
	X1 = KC,
	Nn = X1.validators;
function pa(e) {
	(this.defaults = e),
		(this.interceptors = { request: new p0(), response: new p0() });
}
pa.prototype.request = function (t, r) {
	typeof t == 'string' ? ((r = r || {}), (r.url = t)) : (r = t || {}),
		(r = Wl(this.defaults, r)),
		r.method
			? (r.method = r.method.toLowerCase())
			: this.defaults.method
			? (r.method = this.defaults.method.toLowerCase())
			: (r.method = 'get');
	var n = r.transitional;
	n !== void 0 &&
		X1.assertOptions(
			n,
			{
				silentJSONParsing: Nn.transitional(Nn.boolean),
				forcedJSONParsing: Nn.transitional(Nn.boolean),
				clarifyTimeoutError: Nn.transitional(Nn.boolean)
			},
			!1
		);
	var o = [],
		i = !0;
	this.interceptors.request.forEach(function (p) {
		(typeof p.runWhen == 'function' && p.runWhen(r) === !1) ||
			((i = i && p.synchronous), o.unshift(p.fulfilled, p.rejected));
	});
	var a = [];
	this.interceptors.response.forEach(function (p) {
		a.push(p.fulfilled, p.rejected);
	});
	var s;
	if (!i) {
		var l = [h0, void 0];
		for (
			Array.prototype.unshift.apply(l, o),
				l = l.concat(a),
				s = Promise.resolve(r);
			l.length;

		)
			s = s.then(l.shift(), l.shift());
		return s;
	}
	for (var u = r; o.length; ) {
		var c = o.shift(),
			d = o.shift();
		try {
			u = c(u);
		} catch (f) {
			d(f);
			break;
		}
	}
	try {
		s = h0(u);
	} catch (f) {
		return Promise.reject(f);
	}
	for (; a.length; ) s = s.then(a.shift(), a.shift());
	return s;
};
pa.prototype.getUri = function (t) {
	return (
		(t = Wl(this.defaults, t)),
		YC(t.url, t.params, t.paramsSerializer).replace(/^\?/, '')
	);
};
Y1.forEach(['delete', 'get', 'head', 'options'], function (t) {
	pa.prototype[t] = function (r, n) {
		return this.request(
			Wl(n || {}, { method: t, url: r, data: (n || {}).data })
		);
	};
});
Y1.forEach(['post', 'put', 'patch'], function (t) {
	pa.prototype[t] = function (r, n, o) {
		return this.request(Wl(o || {}, { method: t, url: r, data: n }));
	};
});
var XC = pa,
	bc,
	m0;
function QC() {
	if (m0) return bc;
	m0 = 1;
	var e = jl();
	function t(r) {
		if (typeof r != 'function')
			throw new TypeError('executor must be a function.');
		var n;
		this.promise = new Promise(function (a) {
			n = a;
		});
		var o = this;
		this.promise.then(function (i) {
			if (o._listeners) {
				var a,
					s = o._listeners.length;
				for (a = 0; a < s; a++) o._listeners[a](i);
				o._listeners = null;
			}
		}),
			(this.promise.then = function (i) {
				var a,
					s = new Promise(function (l) {
						o.subscribe(l), (a = l);
					}).then(i);
				return (
					(s.cancel = function () {
						o.unsubscribe(a);
					}),
					s
				);
			}),
			r(function (a) {
				o.reason || ((o.reason = new e(a)), n(o.reason));
			});
	}
	return (
		(t.prototype.throwIfRequested = function () {
			if (this.reason) throw this.reason;
		}),
		(t.prototype.subscribe = function (n) {
			if (this.reason) {
				n(this.reason);
				return;
			}
			this._listeners ? this._listeners.push(n) : (this._listeners = [n]);
		}),
		(t.prototype.unsubscribe = function (n) {
			if (this._listeners) {
				var o = this._listeners.indexOf(n);
				o !== -1 && this._listeners.splice(o, 1);
			}
		}),
		(t.source = function () {
			var n,
				o = new t(function (a) {
					n = a;
				});
			return { token: o, cancel: n };
		}),
		(bc = t),
		bc
	);
}
var Sc, g0;
function ZC() {
	return (
		g0 ||
			((g0 = 1),
			(Sc = function (t) {
				return function (n) {
					return t.apply(null, n);
				};
			})),
		Sc
	);
}
var xc, v0;
function JC() {
	if (v0) return xc;
	v0 = 1;
	var e = ut;
	return (
		(xc = function (r) {
			return e.isObject(r) && r.isAxiosError === !0;
		}),
		xc
	);
}
var y0 = ut,
	e_ = F1,
	Ss = XC,
	t_ = q1,
	r_ = Ul();
function Q1(e) {
	var t = new Ss(e),
		r = e_(Ss.prototype.request, t);
	return (
		y0.extend(r, Ss.prototype, t),
		y0.extend(r, t),
		(r.create = function (o) {
			return Q1(t_(e, o));
		}),
		r
	);
}
var ar = Q1(r_);
ar.Axios = Ss;
ar.Cancel = jl();
ar.CancelToken = QC();
ar.isCancel = G1();
ar.VERSION = K1().version;
ar.all = function (t) {
	return Promise.all(t);
};
ar.spread = ZC();
ar.isAxiosError = JC();
fC.exports = ar;
nl.default = ar;
(function (e) {
	e.exports = nl;
})(dC);
const n_ = Pf(Hd);
function o_(e) {
	if (e.sheet) return e.sheet;
	for (var t = 0; t < document.styleSheets.length; t++)
		if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function i_(e) {
	var t = document.createElement('style');
	return (
		t.setAttribute('data-emotion', e.key),
		e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
		t.appendChild(document.createTextNode('')),
		t.setAttribute('data-s', ''),
		t
	);
}
var a_ = (function () {
		function e(r) {
			var n = this;
			(this._insertTag = function (o) {
				var i;
				n.tags.length === 0
					? n.insertionPoint
						? (i = n.insertionPoint.nextSibling)
						: n.prepend
						? (i = n.container.firstChild)
						: (i = n.before)
					: (i = n.tags[n.tags.length - 1].nextSibling),
					n.container.insertBefore(o, i),
					n.tags.push(o);
			}),
				(this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy),
				(this.tags = []),
				(this.ctr = 0),
				(this.nonce = r.nonce),
				(this.key = r.key),
				(this.container = r.container),
				(this.prepend = r.prepend),
				(this.insertionPoint = r.insertionPoint),
				(this.before = null);
		}
		var t = e.prototype;
		return (
			(t.hydrate = function (n) {
				n.forEach(this._insertTag);
			}),
			(t.insert = function (n) {
				this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
					this._insertTag(i_(this));
				var o = this.tags[this.tags.length - 1];
				if (this.isSpeedy) {
					var i = o_(o);
					try {
						i.insertRule(n, i.cssRules.length);
					} catch {}
				} else o.appendChild(document.createTextNode(n));
				this.ctr++;
			}),
			(t.flush = function () {
				this.tags.forEach(function (n) {
					return n.parentNode && n.parentNode.removeChild(n);
				}),
					(this.tags = []),
					(this.ctr = 0);
			}),
			e
		);
	})(),
	Ue = '-ms-',
	ol = '-moz-',
	ee = '-webkit-',
	Z1 = 'comm',
	Tp = 'rule',
	Ep = 'decl',
	s_ = '@import',
	J1 = '@keyframes',
	l_ = Math.abs,
	Hl = String.fromCharCode,
	u_ = Object.assign;
function c_(e, t) {
	return De(e, 0) ^ 45
		? (((((((t << 2) ^ De(e, 0)) << 2) ^ De(e, 1)) << 2) ^ De(e, 2)) << 2) ^
				De(e, 3)
		: 0;
}
function eb(e) {
	return e.trim();
}
function d_(e, t) {
	return (e = t.exec(e)) ? e[0] : e;
}
function ne(e, t, r) {
	return e.replace(t, r);
}
function Kd(e, t) {
	return e.indexOf(t);
}
function De(e, t) {
	return e.charCodeAt(t) | 0;
}
function Xi(e, t, r) {
	return e.slice(t, r);
}
function Yt(e) {
	return e.length;
}
function Pp(e) {
	return e.length;
}
function Ka(e, t) {
	return t.push(e), e;
}
function f_(e, t) {
	return e.map(t).join('');
}
var Gl = 1,
	Eo = 1,
	tb = 0,
	lt = 0,
	Ee = 0,
	Lo = '';
function ql(e, t, r, n, o, i, a) {
	return {
		value: e,
		root: t,
		parent: r,
		type: n,
		props: o,
		children: i,
		line: Gl,
		column: Eo,
		length: a,
		return: ''
	};
}
function Yo(e, t) {
	return u_(ql('', null, null, '', null, null, 0), e, { length: -e.length }, t);
}
function p_() {
	return Ee;
}
function h_() {
	return (
		(Ee = lt > 0 ? De(Lo, --lt) : 0), Eo--, Ee === 10 && ((Eo = 1), Gl--), Ee
	);
}
function gt() {
	return (
		(Ee = lt < tb ? De(Lo, lt++) : 0), Eo++, Ee === 10 && ((Eo = 1), Gl++), Ee
	);
}
function rr() {
	return De(Lo, lt);
}
function xs() {
	return lt;
}
function ha(e, t) {
	return Xi(Lo, e, t);
}
function Qi(e) {
	switch (e) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32:
			return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125:
			return 4;
		case 58:
			return 3;
		case 34:
		case 39:
		case 40:
		case 91:
			return 2;
		case 41:
		case 93:
			return 1;
	}
	return 0;
}
function rb(e) {
	return (Gl = Eo = 1), (tb = Yt((Lo = e))), (lt = 0), [];
}
function nb(e) {
	return (Lo = ''), e;
}
function ws(e) {
	return eb(ha(lt - 1, Yd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function m_(e) {
	for (; (Ee = rr()) && Ee < 33; ) gt();
	return Qi(e) > 2 || Qi(Ee) > 3 ? '' : ' ';
}
function g_(e, t) {
	for (
		;
		--t &&
		gt() &&
		!(Ee < 48 || Ee > 102 || (Ee > 57 && Ee < 65) || (Ee > 70 && Ee < 97));

	);
	return ha(e, xs() + (t < 6 && rr() == 32 && gt() == 32));
}
function Yd(e) {
	for (; gt(); )
		switch (Ee) {
			case e:
				return lt;
			case 34:
			case 39:
				e !== 34 && e !== 39 && Yd(Ee);
				break;
			case 40:
				e === 41 && Yd(e);
				break;
			case 92:
				gt();
				break;
		}
	return lt;
}
function v_(e, t) {
	for (; gt() && e + Ee !== 47 + 10; )
		if (e + Ee === 42 + 42 && rr() === 47) break;
	return '/*' + ha(t, lt - 1) + '*' + Hl(e === 47 ? e : gt());
}
function y_(e) {
	for (; !Qi(rr()); ) gt();
	return ha(e, lt);
}
function b_(e) {
	return nb(ks('', null, null, null, [''], (e = rb(e)), 0, [0], e));
}
function ks(e, t, r, n, o, i, a, s, l) {
	for (
		var u = 0,
			c = 0,
			d = a,
			f = 0,
			p = 0,
			v = 0,
			b = 1,
			k = 1,
			h = 1,
			m = 0,
			g = '',
			S = o,
			P = i,
			R = n,
			$ = g;
		k;

	)
		switch (((v = m), (m = gt()))) {
			case 40:
				if (v != 108 && De($, d - 1) == 58) {
					Kd(($ += ne(ws(m), '&', '&\f')), '&\f') != -1 && (h = -1);
					break;
				}
			case 34:
			case 39:
			case 91:
				$ += ws(m);
				break;
			case 9:
			case 10:
			case 13:
			case 32:
				$ += m_(v);
				break;
			case 92:
				$ += g_(xs() - 1, 7);
				continue;
			case 47:
				switch (rr()) {
					case 42:
					case 47:
						Ka(S_(v_(gt(), xs()), t, r), l);
						break;
					default:
						$ += '/';
				}
				break;
			case 123 * b:
				s[u++] = Yt($) * h;
			case 125 * b:
			case 59:
			case 0:
				switch (m) {
					case 0:
					case 125:
						k = 0;
					case 59 + c:
						p > 0 &&
							Yt($) - d &&
							Ka(
								p > 32
									? S0($ + ';', n, r, d - 1)
									: S0(ne($, ' ', '') + ';', n, r, d - 2),
								l
							);
						break;
					case 59:
						$ += ';';
					default:
						if (
							(Ka((R = b0($, t, r, u, c, o, s, g, (S = []), (P = []), d)), i),
							m === 123)
						)
							if (c === 0) ks($, t, R, R, S, i, d, s, P);
							else
								switch (f === 99 && De($, 3) === 110 ? 100 : f) {
									case 100:
									case 109:
									case 115:
										ks(
											e,
											R,
											R,
											n && Ka(b0(e, R, R, 0, 0, o, s, g, o, (S = []), d), P),
											o,
											P,
											d,
											s,
											n ? S : P
										);
										break;
									default:
										ks($, R, R, R, [''], P, 0, s, P);
								}
				}
				(u = c = p = 0), (b = h = 1), (g = $ = ''), (d = a);
				break;
			case 58:
				(d = 1 + Yt($)), (p = v);
			default:
				if (b < 1) {
					if (m == 123) --b;
					else if (m == 125 && b++ == 0 && h_() == 125) continue;
				}
				switch ((($ += Hl(m)), m * b)) {
					case 38:
						h = c > 0 ? 1 : (($ += '\f'), -1);
						break;
					case 44:
						(s[u++] = (Yt($) - 1) * h), (h = 1);
						break;
					case 64:
						rr() === 45 && ($ += ws(gt())),
							(f = rr()),
							(c = d = Yt((g = $ += y_(xs())))),
							m++;
						break;
					case 45:
						v === 45 && Yt($) == 2 && (b = 0);
				}
		}
	return i;
}
function b0(e, t, r, n, o, i, a, s, l, u, c) {
	for (
		var d = o - 1, f = o === 0 ? i : [''], p = Pp(f), v = 0, b = 0, k = 0;
		v < n;
		++v
	)
		for (var h = 0, m = Xi(e, d + 1, (d = l_((b = a[v])))), g = e; h < p; ++h)
			(g = eb(b > 0 ? f[h] + ' ' + m : ne(m, /&\f/g, f[h]))) && (l[k++] = g);
	return ql(e, t, r, o === 0 ? Tp : s, l, u, c);
}
function S_(e, t, r) {
	return ql(e, t, r, Z1, Hl(p_()), Xi(e, 2, -2), 0);
}
function S0(e, t, r, n) {
	return ql(e, t, r, Ep, Xi(e, 0, n), Xi(e, n + 1, -1), n);
}
function fo(e, t) {
	for (var r = '', n = Pp(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || '';
	return r;
}
function x_(e, t, r, n) {
	switch (e.type) {
		case s_:
		case Ep:
			return (e.return = e.return || e.value);
		case Z1:
			return '';
		case J1:
			return (e.return = e.value + '{' + fo(e.children, n) + '}');
		case Tp:
			e.value = e.props.join(',');
	}
	return Yt((r = fo(e.children, n)))
		? (e.return = e.value + '{' + r + '}')
		: '';
}
function w_(e) {
	var t = Pp(e);
	return function (r, n, o, i) {
		for (var a = '', s = 0; s < t; s++) a += e[s](r, n, o, i) || '';
		return a;
	};
}
function k_(e) {
	return function (t) {
		t.root || ((t = t.return) && e(t));
	};
}
var x0 = function (t) {
	var r = new WeakMap();
	return function (n) {
		if (r.has(n)) return r.get(n);
		var o = t(n);
		return r.set(n, o), o;
	};
};
function ob(e) {
	var t = Object.create(null);
	return function (r) {
		return t[r] === void 0 && (t[r] = e(r)), t[r];
	};
}
var C_ = function (t, r, n) {
		for (
			var o = 0, i = 0;
			(o = i), (i = rr()), o === 38 && i === 12 && (r[n] = 1), !Qi(i);

		)
			gt();
		return ha(t, lt);
	},
	__ = function (t, r) {
		var n = -1,
			o = 44;
		do
			switch (Qi(o)) {
				case 0:
					o === 38 && rr() === 12 && (r[n] = 1), (t[n] += C_(lt - 1, r, n));
					break;
				case 2:
					t[n] += ws(o);
					break;
				case 4:
					if (o === 44) {
						(t[++n] = rr() === 58 ? '&\f' : ''), (r[n] = t[n].length);
						break;
					}
				default:
					t[n] += Hl(o);
			}
		while ((o = gt()));
		return t;
	},
	T_ = function (t, r) {
		return nb(__(rb(t), r));
	},
	w0 = new WeakMap(),
	E_ = function (t) {
		if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
			for (
				var r = t.value,
					n = t.parent,
					o = t.column === n.column && t.line === n.line;
				n.type !== 'rule';

			)
				if (((n = n.parent), !n)) return;
			if (
				!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !w0.get(n)) &&
				!o
			) {
				w0.set(t, !0);
				for (
					var i = [], a = T_(r, i), s = n.props, l = 0, u = 0;
					l < a.length;
					l++
				)
					for (var c = 0; c < s.length; c++, u++)
						t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + ' ' + a[l];
			}
		}
	},
	P_ = function (t) {
		if (t.type === 'decl') {
			var r = t.value;
			r.charCodeAt(0) === 108 &&
				r.charCodeAt(2) === 98 &&
				((t.return = ''), (t.value = ''));
		}
	};
function ib(e, t) {
	switch (c_(e, t)) {
		case 5103:
			return ee + 'print-' + e + e;
		case 5737:
		case 4201:
		case 3177:
		case 3433:
		case 1641:
		case 4457:
		case 2921:
		case 5572:
		case 6356:
		case 5844:
		case 3191:
		case 6645:
		case 3005:
		case 6391:
		case 5879:
		case 5623:
		case 6135:
		case 4599:
		case 4855:
		case 4215:
		case 6389:
		case 5109:
		case 5365:
		case 5621:
		case 3829:
			return ee + e + e;
		case 5349:
		case 4246:
		case 4810:
		case 6968:
		case 2756:
			return ee + e + ol + e + Ue + e + e;
		case 6828:
		case 4268:
			return ee + e + Ue + e + e;
		case 6165:
			return ee + e + Ue + 'flex-' + e + e;
		case 5187:
			return (
				ee + e + ne(e, /(\w+).+(:[^]+)/, ee + 'box-$1$2' + Ue + 'flex-$1$2') + e
			);
		case 5443:
			return ee + e + Ue + 'flex-item-' + ne(e, /flex-|-self/, '') + e;
		case 4675:
			return (
				ee +
				e +
				Ue +
				'flex-line-pack' +
				ne(e, /align-content|flex-|-self/, '') +
				e
			);
		case 5548:
			return ee + e + Ue + ne(e, 'shrink', 'negative') + e;
		case 5292:
			return ee + e + Ue + ne(e, 'basis', 'preferred-size') + e;
		case 6060:
			return (
				ee +
				'box-' +
				ne(e, '-grow', '') +
				ee +
				e +
				Ue +
				ne(e, 'grow', 'positive') +
				e
			);
		case 4554:
			return ee + ne(e, /([^-])(transform)/g, '$1' + ee + '$2') + e;
		case 6187:
			return (
				ne(
					ne(ne(e, /(zoom-|grab)/, ee + '$1'), /(image-set)/, ee + '$1'),
					e,
					''
				) + e
			);
		case 5495:
		case 3959:
			return ne(e, /(image-set\([^]*)/, ee + '$1$`$1');
		case 4968:
			return (
				ne(
					ne(e, /(.+:)(flex-)?(.*)/, ee + 'box-pack:$3' + Ue + 'flex-pack:$3'),
					/s.+-b[^;]+/,
					'justify'
				) +
				ee +
				e +
				e
			);
		case 4095:
		case 3583:
		case 4068:
		case 2532:
			return ne(e, /(.+)-inline(.+)/, ee + '$1$2') + e;
		case 8116:
		case 7059:
		case 5753:
		case 5535:
		case 5445:
		case 5701:
		case 4933:
		case 4677:
		case 5533:
		case 5789:
		case 5021:
		case 4765:
			if (Yt(e) - 1 - t > 6)
				switch (De(e, t + 1)) {
					case 109:
						if (De(e, t + 4) !== 45) break;
					case 102:
						return (
							ne(
								e,
								/(.+:)(.+)-([^]+)/,
								'$1' +
									ee +
									'$2-$3$1' +
									ol +
									(De(e, t + 3) == 108 ? '$3' : '$2-$3')
							) + e
						);
					case 115:
						return ~Kd(e, 'stretch')
							? ib(ne(e, 'stretch', 'fill-available'), t) + e
							: e;
				}
			break;
		case 4949:
			if (De(e, t + 1) !== 115) break;
		case 6444:
			switch (De(e, Yt(e) - 3 - (~Kd(e, '!important') && 10))) {
				case 107:
					return ne(e, ':', ':' + ee) + e;
				case 101:
					return (
						ne(
							e,
							/(.+:)([^;!]+)(;|!.+)?/,
							'$1' +
								ee +
								(De(e, 14) === 45 ? 'inline-' : '') +
								'box$3$1' +
								ee +
								'$2$3$1' +
								Ue +
								'$2box$3'
						) + e
					);
			}
			break;
		case 5936:
			switch (De(e, t + 11)) {
				case 114:
					return ee + e + Ue + ne(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
				case 108:
					return ee + e + Ue + ne(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
				case 45:
					return ee + e + Ue + ne(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
			}
			return ee + e + Ue + e + e;
	}
	return e;
}
var $_ = function (t, r, n, o) {
		if (t.length > -1 && !t.return)
			switch (t.type) {
				case Ep:
					t.return = ib(t.value, t.length);
					break;
				case J1:
					return fo([Yo(t, { value: ne(t.value, '@', '@' + ee) })], o);
				case Tp:
					if (t.length)
						return f_(t.props, function (i) {
							switch (d_(i, /(::plac\w+|:read-\w+)/)) {
								case ':read-only':
								case ':read-write':
									return fo(
										[Yo(t, { props: [ne(i, /:(read-\w+)/, ':' + ol + '$1')] })],
										o
									);
								case '::placeholder':
									return fo(
										[
											Yo(t, {
												props: [ne(i, /:(plac\w+)/, ':' + ee + 'input-$1')]
											}),
											Yo(t, { props: [ne(i, /:(plac\w+)/, ':' + ol + '$1')] }),
											Yo(t, { props: [ne(i, /:(plac\w+)/, Ue + 'input-$1')] })
										],
										o
									);
							}
							return '';
						});
			}
	},
	R_ = [$_],
	A_ = function (t) {
		var r = t.key;
		if (r === 'css') {
			var n = document.querySelectorAll('style[data-emotion]:not([data-s])');
			Array.prototype.forEach.call(n, function (b) {
				var k = b.getAttribute('data-emotion');
				k.indexOf(' ') !== -1 &&
					(document.head.appendChild(b), b.setAttribute('data-s', ''));
			});
		}
		var o = t.stylisPlugins || R_,
			i = {},
			a,
			s = [];
		(a = t.container || document.head),
			Array.prototype.forEach.call(
				document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
				function (b) {
					for (
						var k = b.getAttribute('data-emotion').split(' '), h = 1;
						h < k.length;
						h++
					)
						i[k[h]] = !0;
					s.push(b);
				}
			);
		var l,
			u = [E_, P_];
		{
			var c,
				d = [
					x_,
					k_(function (b) {
						c.insert(b);
					})
				],
				f = w_(u.concat(o, d)),
				p = function (k) {
					return fo(b_(k), f);
				};
			l = function (k, h, m, g) {
				(c = m),
					p(k ? k + '{' + h.styles + '}' : h.styles),
					g && (v.inserted[h.name] = !0);
			};
		}
		var v = {
			key: r,
			sheet: new a_({
				key: r,
				container: a,
				nonce: t.nonce,
				speedy: t.speedy,
				prepend: t.prepend,
				insertionPoint: t.insertionPoint
			}),
			nonce: t.nonce,
			inserted: i,
			registered: {},
			insert: l
		};
		return v.sheet.hydrate(s), v;
	};
function il() {
	return (
		(il = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r)
							Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
					}
					return e;
			  }),
		il.apply(this, arguments)
	);
}
var Xd = {},
	z_ = {
		get exports() {
			return Xd;
		},
		set exports(e) {
			Xd = e;
		}
	},
	ae = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oe = typeof Symbol == 'function' && Symbol.for,
	$p = Oe ? Symbol.for('react.element') : 60103,
	Rp = Oe ? Symbol.for('react.portal') : 60106,
	Kl = Oe ? Symbol.for('react.fragment') : 60107,
	Yl = Oe ? Symbol.for('react.strict_mode') : 60108,
	Xl = Oe ? Symbol.for('react.profiler') : 60114,
	Ql = Oe ? Symbol.for('react.provider') : 60109,
	Zl = Oe ? Symbol.for('react.context') : 60110,
	Ap = Oe ? Symbol.for('react.async_mode') : 60111,
	Jl = Oe ? Symbol.for('react.concurrent_mode') : 60111,
	eu = Oe ? Symbol.for('react.forward_ref') : 60112,
	tu = Oe ? Symbol.for('react.suspense') : 60113,
	M_ = Oe ? Symbol.for('react.suspense_list') : 60120,
	ru = Oe ? Symbol.for('react.memo') : 60115,
	nu = Oe ? Symbol.for('react.lazy') : 60116,
	L_ = Oe ? Symbol.for('react.block') : 60121,
	O_ = Oe ? Symbol.for('react.fundamental') : 60117,
	I_ = Oe ? Symbol.for('react.responder') : 60118,
	B_ = Oe ? Symbol.for('react.scope') : 60119;
function wt(e) {
	if (typeof e == 'object' && e !== null) {
		var t = e.$$typeof;
		switch (t) {
			case $p:
				switch (((e = e.type), e)) {
					case Ap:
					case Jl:
					case Kl:
					case Xl:
					case Yl:
					case tu:
						return e;
					default:
						switch (((e = e && e.$$typeof), e)) {
							case Zl:
							case eu:
							case nu:
							case ru:
							case Ql:
								return e;
							default:
								return t;
						}
				}
			case Rp:
				return t;
		}
	}
}
function ab(e) {
	return wt(e) === Jl;
}
ae.AsyncMode = Ap;
ae.ConcurrentMode = Jl;
ae.ContextConsumer = Zl;
ae.ContextProvider = Ql;
ae.Element = $p;
ae.ForwardRef = eu;
ae.Fragment = Kl;
ae.Lazy = nu;
ae.Memo = ru;
ae.Portal = Rp;
ae.Profiler = Xl;
ae.StrictMode = Yl;
ae.Suspense = tu;
ae.isAsyncMode = function (e) {
	return ab(e) || wt(e) === Ap;
};
ae.isConcurrentMode = ab;
ae.isContextConsumer = function (e) {
	return wt(e) === Zl;
};
ae.isContextProvider = function (e) {
	return wt(e) === Ql;
};
ae.isElement = function (e) {
	return typeof e == 'object' && e !== null && e.$$typeof === $p;
};
ae.isForwardRef = function (e) {
	return wt(e) === eu;
};
ae.isFragment = function (e) {
	return wt(e) === Kl;
};
ae.isLazy = function (e) {
	return wt(e) === nu;
};
ae.isMemo = function (e) {
	return wt(e) === ru;
};
ae.isPortal = function (e) {
	return wt(e) === Rp;
};
ae.isProfiler = function (e) {
	return wt(e) === Xl;
};
ae.isStrictMode = function (e) {
	return wt(e) === Yl;
};
ae.isSuspense = function (e) {
	return wt(e) === tu;
};
ae.isValidElementType = function (e) {
	return (
		typeof e == 'string' ||
		typeof e == 'function' ||
		e === Kl ||
		e === Jl ||
		e === Xl ||
		e === Yl ||
		e === tu ||
		e === M_ ||
		(typeof e == 'object' &&
			e !== null &&
			(e.$$typeof === nu ||
				e.$$typeof === ru ||
				e.$$typeof === Ql ||
				e.$$typeof === Zl ||
				e.$$typeof === eu ||
				e.$$typeof === O_ ||
				e.$$typeof === I_ ||
				e.$$typeof === B_ ||
				e.$$typeof === L_))
	);
};
ae.typeOf = wt;
(function (e) {
	e.exports = ae;
})(z_);
var sb = Xd,
	D_ = {
		$$typeof: !0,
		render: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0
	},
	F_ = {
		$$typeof: !0,
		compare: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0,
		type: !0
	},
	lb = {};
lb[sb.ForwardRef] = D_;
lb[sb.Memo] = F_;
var N_ = !0;
function V_(e, t, r) {
	var n = '';
	return (
		r.split(' ').forEach(function (o) {
			e[o] !== void 0 ? t.push(e[o] + ';') : (n += o + ' ');
		}),
		n
	);
}
var ub = function (t, r, n) {
		var o = t.key + '-' + r.name;
		(n === !1 || N_ === !1) &&
			t.registered[o] === void 0 &&
			(t.registered[o] = r.styles);
	},
	cb = function (t, r, n) {
		ub(t, r, n);
		var o = t.key + '-' + r.name;
		if (t.inserted[r.name] === void 0) {
			var i = r;
			do t.insert(r === i ? '.' + o : '', i, t.sheet, !0), (i = i.next);
			while (i !== void 0);
		}
	};
function j_(e) {
	for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
		(r =
			(e.charCodeAt(n) & 255) |
			((e.charCodeAt(++n) & 255) << 8) |
			((e.charCodeAt(++n) & 255) << 16) |
			((e.charCodeAt(++n) & 255) << 24)),
			(r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
			(r ^= r >>> 24),
			(t =
				((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
				((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
	switch (o) {
		case 3:
			t ^= (e.charCodeAt(n + 2) & 255) << 16;
		case 2:
			t ^= (e.charCodeAt(n + 1) & 255) << 8;
		case 1:
			(t ^= e.charCodeAt(n) & 255),
				(t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
	}
	return (
		(t ^= t >>> 13),
		(t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
		((t ^ (t >>> 15)) >>> 0).toString(36)
	);
}
var U_ = {
		animationIterationCount: 1,
		borderImageOutset: 1,
		borderImageSlice: 1,
		borderImageWidth: 1,
		boxFlex: 1,
		boxFlexGroup: 1,
		boxOrdinalGroup: 1,
		columnCount: 1,
		columns: 1,
		flex: 1,
		flexGrow: 1,
		flexPositive: 1,
		flexShrink: 1,
		flexNegative: 1,
		flexOrder: 1,
		gridRow: 1,
		gridRowEnd: 1,
		gridRowSpan: 1,
		gridRowStart: 1,
		gridColumn: 1,
		gridColumnEnd: 1,
		gridColumnSpan: 1,
		gridColumnStart: 1,
		msGridRow: 1,
		msGridRowSpan: 1,
		msGridColumn: 1,
		msGridColumnSpan: 1,
		fontWeight: 1,
		lineHeight: 1,
		opacity: 1,
		order: 1,
		orphans: 1,
		tabSize: 1,
		widows: 1,
		zIndex: 1,
		zoom: 1,
		WebkitLineClamp: 1,
		fillOpacity: 1,
		floodOpacity: 1,
		stopOpacity: 1,
		strokeDasharray: 1,
		strokeDashoffset: 1,
		strokeMiterlimit: 1,
		strokeOpacity: 1,
		strokeWidth: 1
	},
	W_ = /[A-Z]|^ms/g,
	H_ = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
	db = function (t) {
		return t.charCodeAt(1) === 45;
	},
	k0 = function (t) {
		return t != null && typeof t != 'boolean';
	},
	wc = ob(function (e) {
		return db(e) ? e : e.replace(W_, '-$&').toLowerCase();
	}),
	C0 = function (t, r) {
		switch (t) {
			case 'animation':
			case 'animationName':
				if (typeof r == 'string')
					return r.replace(H_, function (n, o, i) {
						return (Xt = { name: o, styles: i, next: Xt }), o;
					});
		}
		return U_[t] !== 1 && !db(t) && typeof r == 'number' && r !== 0
			? r + 'px'
			: r;
	};
function Zi(e, t, r) {
	if (r == null) return '';
	if (r.__emotion_styles !== void 0) return r;
	switch (typeof r) {
		case 'boolean':
			return '';
		case 'object': {
			if (r.anim === 1)
				return (Xt = { name: r.name, styles: r.styles, next: Xt }), r.name;
			if (r.styles !== void 0) {
				var n = r.next;
				if (n !== void 0)
					for (; n !== void 0; )
						(Xt = { name: n.name, styles: n.styles, next: Xt }), (n = n.next);
				var o = r.styles + ';';
				return o;
			}
			return G_(e, t, r);
		}
		case 'function': {
			if (e !== void 0) {
				var i = Xt,
					a = r(e);
				return (Xt = i), Zi(e, t, a);
			}
			break;
		}
	}
	if (t == null) return r;
	var s = t[r];
	return s !== void 0 ? s : r;
}
function G_(e, t, r) {
	var n = '';
	if (Array.isArray(r))
		for (var o = 0; o < r.length; o++) n += Zi(e, t, r[o]) + ';';
	else
		for (var i in r) {
			var a = r[i];
			if (typeof a != 'object')
				t != null && t[a] !== void 0
					? (n += i + '{' + t[a] + '}')
					: k0(a) && (n += wc(i) + ':' + C0(i, a) + ';');
			else if (
				Array.isArray(a) &&
				typeof a[0] == 'string' &&
				(t == null || t[a[0]] === void 0)
			)
				for (var s = 0; s < a.length; s++)
					k0(a[s]) && (n += wc(i) + ':' + C0(i, a[s]) + ';');
			else {
				var l = Zi(e, t, a);
				switch (i) {
					case 'animation':
					case 'animationName': {
						n += wc(i) + ':' + l + ';';
						break;
					}
					default:
						n += i + '{' + l + '}';
				}
			}
		}
	return n;
}
var _0 = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
	Xt,
	zp = function (t, r, n) {
		if (
			t.length === 1 &&
			typeof t[0] == 'object' &&
			t[0] !== null &&
			t[0].styles !== void 0
		)
			return t[0];
		var o = !0,
			i = '';
		Xt = void 0;
		var a = t[0];
		a == null || a.raw === void 0
			? ((o = !1), (i += Zi(n, r, a)))
			: (i += a[0]);
		for (var s = 1; s < t.length; s++) (i += Zi(n, r, t[s])), o && (i += a[s]);
		_0.lastIndex = 0;
		for (var l = '', u; (u = _0.exec(i)) !== null; ) l += '-' + u[1];
		var c = j_(i) + l;
		return { name: c, styles: i, next: Xt };
	},
	q_ = function (t) {
		return t();
	},
	fb = Uh['useInsertionEffect'] ? Uh['useInsertionEffect'] : !1,
	K_ = fb || q_,
	T0 = fb || C.useLayoutEffect,
	pb = C.createContext(typeof HTMLElement < 'u' ? A_({ key: 'css' }) : null);
pb.Provider;
var hb = function (t) {
		return C.forwardRef(function (r, n) {
			var o = C.useContext(pb);
			return t(r, o, n);
		});
	},
	Ji = C.createContext({}),
	Y_ = function (t, r) {
		if (typeof r == 'function') {
			var n = r(t);
			return n;
		}
		return il({}, t, r);
	},
	X_ = x0(function (e) {
		return x0(function (t) {
			return Y_(e, t);
		});
	}),
	Q_ = function (t) {
		var r = C.useContext(Ji);
		return (
			t.theme !== r && (r = X_(r)(t.theme)),
			C.createElement(Ji.Provider, { value: r }, t.children)
		);
	},
	ou = hb(function (e, t) {
		var r = e.styles,
			n = zp([r], void 0, C.useContext(Ji)),
			o = C.useRef();
		return (
			T0(
				function () {
					var i = t.key + '-global',
						a = new t.sheet.constructor({
							key: i,
							nonce: t.sheet.nonce,
							container: t.sheet.container,
							speedy: t.sheet.isSpeedy
						}),
						s = !1,
						l = document.querySelector(
							'style[data-emotion="' + i + ' ' + n.name + '"]'
						);
					return (
						t.sheet.tags.length && (a.before = t.sheet.tags[0]),
						l !== null &&
							((s = !0), l.setAttribute('data-emotion', i), a.hydrate([l])),
						(o.current = [a, s]),
						function () {
							a.flush();
						}
					);
				},
				[t]
			),
			T0(
				function () {
					var i = o.current,
						a = i[0],
						s = i[1];
					if (s) {
						i[1] = !1;
						return;
					}
					if ((n.next !== void 0 && cb(t, n.next, !0), a.tags.length)) {
						var l = a.tags[a.tags.length - 1].nextElementSibling;
						(a.before = l), a.flush();
					}
					t.insert('', n, a, !1);
				},
				[t, n.name]
			),
			null
		);
	});
function Z_() {
	for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
		t[r] = arguments[r];
	return zp(t);
}
var J_ = function () {
		var t = Z_.apply(void 0, arguments),
			r = 'animation-' + t.name;
		return {
			name: r,
			styles: '@keyframes ' + r + '{' + t.styles + '}',
			anim: 1,
			toString: function () {
				return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
			}
		};
	},
	mb = `
  :root {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root {
      --chakra-vh: 100dvh;
    }
  }
`,
	eT = () => A(ou, { styles: mb }),
	tT = () =>
		A(ou, {
			styles: `
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        font-feature-settings: 'kern';
      }

      *,
      *::before,
      *::after {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
      }

      main {
        display: block;
      }

      hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      pre,
      code,
      kbd,
      samp {
        font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      b,
      strong {
        font-weight: bold;
      }

      small {
        font-size: 80%;
      }

      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      sub {
        bottom: -0.25em;
      }

      sup {
        top: -0.5em;
      }

      img {
        border-style: none;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      button,
      input {
        overflow: visible;
      }

      button,
      select {
        text-transform: none;
      }

      button::-moz-focus-inner,
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }

      fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      progress {
        vertical-align: baseline;
      }

      textarea {
        overflow: auto;
      }

      [type="checkbox"],
      [type="radio"] {
        box-sizing: border-box;
        padding: 0;
      }

      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      input[type="number"] {
        -moz-appearance: textfield;
      }

      [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      details {
        display: block;
      }

      summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      body,
      blockquote,
      dl,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hr,
      figure,
      p,
      pre {
        margin: 0;
      }

      button {
        background: transparent;
        padding: 0;
      }

      fieldset {
        margin: 0;
        padding: 0;
      }

      ol,
      ul {
        margin: 0;
        padding: 0;
      }

      textarea {
        resize: vertical;
      }

      button,
      [role="button"] {
        cursor: pointer;
      }

      button::-moz-focus-inner {
        border: 0 !important;
      }

      table {
        border-collapse: collapse;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: inherit;
        font-weight: inherit;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      img,
      svg,
      video,
      canvas,
      audio,
      iframe,
      embed,
      object {
        display: block;
      }

      img,
      video {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible] :focus:not([data-focus-visible-added]):not([data-focus-visible-disabled]) {
        outline: none;
        box-shadow: none;
      }

      select::-ms-expand {
        display: none;
      }

      ${mb}
    `
		});
function rT(e, t) {
	return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function ma(e = {}) {
	const {
			name: t,
			strict: r = !0,
			hookName: n = 'useContext',
			providerName: o = 'Provider',
			errorMessage: i
		} = e,
		a = C.createContext(void 0);
	a.displayName = t;
	function s() {
		var l;
		const u = C.useContext(a);
		if (!u && r) {
			const c = new Error(i ?? rT(n, o));
			throw (
				((c.name = 'ContextError'),
				(l = Error.captureStackTrace) == null || l.call(Error, c, s),
				c)
			);
		}
		return u;
	}
	return [a.Provider, s, a];
}
var [nT, oT] = ma({ strict: !1, name: 'PortalManagerContext' });
function gb(e) {
	const { children: t, zIndex: r } = e;
	return A(nT, { value: { zIndex: r }, children: t });
}
gb.displayName = 'PortalManager';
var al = Boolean(globalThis == null ? void 0 : globalThis.document)
		? C.useLayoutEffect
		: C.useEffect,
	[vb, iT] = ma({ strict: !1, name: 'PortalContext' }),
	Mp = 'chakra-portal',
	aT = '.chakra-portal',
	sT = (e) =>
		A('div', {
			className: 'chakra-portal-zIndex',
			style: {
				position: 'absolute',
				zIndex: e.zIndex,
				top: 0,
				left: 0,
				right: 0
			},
			children: e.children
		}),
	lT = (e) => {
		const { appendToParentPortal: t, children: r } = e,
			[n, o] = C.useState(null),
			i = C.useRef(null),
			[, a] = C.useState({});
		C.useEffect(() => a({}), []);
		const s = iT(),
			l = oT();
		al(() => {
			if (!n) return;
			const c = n.ownerDocument,
				d = t ? s ?? c.body : c.body;
			if (!d) return;
			(i.current = c.createElement('div')),
				(i.current.className = Mp),
				d.appendChild(i.current),
				a({});
			const f = i.current;
			return () => {
				d.contains(f) && d.removeChild(f);
			};
		}, [n]);
		const u =
			l != null && l.zIndex
				? A(sT, { zIndex: l == null ? void 0 : l.zIndex, children: r })
				: r;
		return i.current
			? zi.createPortal(A(vb, { value: i.current, children: u }), i.current)
			: A('span', {
					ref: (c) => {
						c && o(c);
					}
			  });
	},
	uT = (e) => {
		const { children: t, containerRef: r, appendToParentPortal: n } = e,
			o = r.current,
			i = o ?? (typeof window < 'u' ? document.body : void 0),
			a = C.useMemo(() => {
				const l = o == null ? void 0 : o.ownerDocument.createElement('div');
				return l && (l.className = Mp), l;
			}, [o]),
			[, s] = C.useState({});
		return (
			al(() => s({}), []),
			al(() => {
				if (!(!a || !i))
					return (
						i.appendChild(a),
						() => {
							i.removeChild(a);
						}
					);
			}, [a, i]),
			i && a
				? zi.createPortal(A(vb, { value: n ? a : null, children: t }), a)
				: null
		);
	};
function iu(e) {
	const t = { appendToParentPortal: !0, ...e },
		{ containerRef: r, ...n } = t;
	return r ? A(uT, { containerRef: r, ...n }) : A(lT, { ...n });
}
iu.className = Mp;
iu.selector = aT;
iu.displayName = 'Portal';
function cT() {
	const e = C.useContext(Ji);
	if (!e)
		throw Error(
			'useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`'
		);
	return e;
}
var Lp = C.createContext({});
Lp.displayName = 'ColorModeContext';
function Op() {
	const e = C.useContext(Lp);
	if (e === void 0)
		throw new Error('useColorMode must be used within a ColorModeProvider');
	return e;
}
var Ya = { light: 'chakra-ui-light', dark: 'chakra-ui-dark' };
function dT(e = {}) {
	const { preventTransition: t = !0 } = e,
		r = {
			setDataset: (n) => {
				const o = t ? r.preventTransition() : void 0;
				(document.documentElement.dataset.theme = n),
					(document.documentElement.style.colorScheme = n),
					o == null || o();
			},
			setClassName(n) {
				document.body.classList.add(n ? Ya.dark : Ya.light),
					document.body.classList.remove(n ? Ya.light : Ya.dark);
			},
			query() {
				return window.matchMedia('(prefers-color-scheme: dark)');
			},
			getSystemTheme(n) {
				var o;
				return ((o = r.query().matches) != null ? o : n === 'dark')
					? 'dark'
					: 'light';
			},
			addListener(n) {
				const o = r.query(),
					i = (a) => {
						n(a.matches ? 'dark' : 'light');
					};
				return (
					typeof o.addListener == 'function'
						? o.addListener(i)
						: o.addEventListener('change', i),
					() => {
						typeof o.removeListener == 'function'
							? o.removeListener(i)
							: o.removeEventListener('change', i);
					}
				);
			},
			preventTransition() {
				const n = document.createElement('style');
				return (
					n.appendChild(
						document.createTextNode(
							'*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
						)
					),
					document.head.appendChild(n),
					() => {
						window.getComputedStyle(document.body),
							requestAnimationFrame(() => {
								requestAnimationFrame(() => {
									document.head.removeChild(n);
								});
							});
					}
				);
			}
		};
	return r;
}
var fT = 'chakra-ui-color-mode';
function pT(e) {
	return {
		ssr: !1,
		type: 'localStorage',
		get(t) {
			if (!(globalThis != null && globalThis.document)) return t;
			let r;
			try {
				r = localStorage.getItem(e) || t;
			} catch {}
			return r || t;
		},
		set(t) {
			try {
				localStorage.setItem(e, t);
			} catch {}
		}
	};
}
var hT = pT(fT),
	E0 = () => {};
function P0(e, t) {
	return e.type === 'cookie' && e.ssr ? e.get(t) : t;
}
function yb(e) {
	const {
			value: t,
			children: r,
			options: {
				useSystemColorMode: n,
				initialColorMode: o,
				disableTransitionOnChange: i
			} = {},
			colorModeManager: a = hT
		} = e,
		s = o === 'dark' ? 'dark' : 'light',
		[l, u] = C.useState(() => P0(a, s)),
		[c, d] = C.useState(() => P0(a)),
		{
			getSystemTheme: f,
			setClassName: p,
			setDataset: v,
			addListener: b
		} = C.useMemo(() => dT({ preventTransition: i }), [i]),
		k = o === 'system' && !l ? c : l,
		h = C.useCallback(
			(S) => {
				const P = S === 'system' ? f() : S;
				u(P), p(P === 'dark'), v(P), a.set(P);
			},
			[a, f, p, v]
		);
	al(() => {
		o === 'system' && d(f());
	}, []),
		C.useEffect(() => {
			const S = a.get();
			if (S) {
				h(S);
				return;
			}
			if (o === 'system') {
				h('system');
				return;
			}
			h(s);
		}, [a, s, o, h]);
	const m = C.useCallback(() => {
		h(k === 'dark' ? 'light' : 'dark');
	}, [k, h]);
	C.useEffect(() => {
		if (n) return b(h);
	}, [n, b, h]);
	const g = C.useMemo(
		() => ({
			colorMode: t ?? k,
			toggleColorMode: t ? E0 : m,
			setColorMode: t ? E0 : h,
			forced: t !== void 0
		}),
		[k, m, h, t]
	);
	return A(Lp.Provider, { value: g, children: r });
}
yb.displayName = 'ColorModeProvider';
function mT() {
	const e = Op(),
		t = cT();
	return { ...e, theme: t };
}
var sr = (...e) => e.filter(Boolean).join(' ');
function $t(e) {
	const t = typeof e;
	return e != null && (t === 'object' || t === 'function') && !Array.isArray(e);
}
function Fr(e, ...t) {
	return gT(e) ? e(...t) : e;
}
var gT = (e) => typeof e == 'function',
	$0 = (e) => (e ? '' : void 0),
	sl = {},
	vT = {
		get exports() {
			return sl;
		},
		set exports(e) {
			sl = e;
		}
	};
(function (e, t) {
	var r = 200,
		n = '__lodash_hash_undefined__',
		o = 800,
		i = 16,
		a = 9007199254740991,
		s = '[object Arguments]',
		l = '[object Array]',
		u = '[object AsyncFunction]',
		c = '[object Boolean]',
		d = '[object Date]',
		f = '[object Error]',
		p = '[object Function]',
		v = '[object GeneratorFunction]',
		b = '[object Map]',
		k = '[object Number]',
		h = '[object Null]',
		m = '[object Object]',
		g = '[object Proxy]',
		S = '[object RegExp]',
		P = '[object Set]',
		R = '[object String]',
		$ = '[object Undefined]',
		I = '[object WeakMap]',
		E = '[object ArrayBuffer]',
		T = '[object DataView]',
		M = '[object Float32Array]',
		N = '[object Float64Array]',
		B = '[object Int8Array]',
		H = '[object Int16Array]',
		V = '[object Int32Array]',
		K = '[object Uint8Array]',
		Te = '[object Uint8ClampedArray]',
		L = '[object Uint16Array]',
		O = '[object Uint32Array]',
		j = /[\\^$.*+?()[\]{}|]/g,
		re = /^\[object .+?Constructor\]$/,
		se = /^(?:0|[1-9]\d*)$/,
		Z = {};
	(Z[M] = Z[N] = Z[B] = Z[H] = Z[V] = Z[K] = Z[Te] = Z[L] = Z[O] = !0),
		(Z[s] =
			Z[l] =
			Z[E] =
			Z[c] =
			Z[T] =
			Z[d] =
			Z[f] =
			Z[p] =
			Z[b] =
			Z[k] =
			Z[m] =
			Z[S] =
			Z[P] =
			Z[R] =
			Z[I] =
				!1);
	var Ut = typeof ei == 'object' && ei && ei.Object === Object && ei,
		Io = typeof self == 'object' && self && self.Object === Object && self,
		ct = Ut || Io || Function('return this')(),
		an = t && !t.nodeType && t,
		Bo = an && !0 && e && !e.nodeType && e,
		yh = Bo && Bo.exports === an,
		Su = yh && Ut.process,
		bh = (function () {
			try {
				var y = Bo && Bo.require && Bo.require('util').types;
				return y || (Su && Su.binding && Su.binding('util'));
			} catch {}
		})(),
		Sh = bh && bh.isTypedArray;
	function Cx(y, x, _) {
		switch (_.length) {
			case 0:
				return y.call(x);
			case 1:
				return y.call(x, _[0]);
			case 2:
				return y.call(x, _[0], _[1]);
			case 3:
				return y.call(x, _[0], _[1], _[2]);
		}
		return y.apply(x, _);
	}
	function _x(y, x) {
		for (var _ = -1, D = Array(y); ++_ < y; ) D[_] = x(_);
		return D;
	}
	function Tx(y) {
		return function (x) {
			return y(x);
		};
	}
	function Ex(y, x) {
		return y == null ? void 0 : y[x];
	}
	function Px(y, x) {
		return function (_) {
			return y(x(_));
		};
	}
	var $x = Array.prototype,
		Rx = Function.prototype,
		ka = Object.prototype,
		xu = ct['__core-js_shared__'],
		Ca = Rx.toString,
		lr = ka.hasOwnProperty,
		xh = (function () {
			var y = /[^.]+$/.exec((xu && xu.keys && xu.keys.IE_PROTO) || '');
			return y ? 'Symbol(src)_1.' + y : '';
		})(),
		wh = ka.toString,
		Ax = Ca.call(Object),
		zx = RegExp(
			'^' +
				Ca.call(lr)
					.replace(j, '\\$&')
					.replace(
						/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
						'$1.*?'
					) +
				'$'
		),
		_a = yh ? ct.Buffer : void 0,
		kh = ct.Symbol,
		Ch = ct.Uint8Array,
		_h = _a ? _a.allocUnsafe : void 0,
		Th = Px(Object.getPrototypeOf, Object),
		Eh = Object.create,
		Mx = ka.propertyIsEnumerable,
		Lx = $x.splice,
		sn = kh ? kh.toStringTag : void 0,
		Ta = (function () {
			try {
				var y = Cu(Object, 'defineProperty');
				return y({}, '', {}), y;
			} catch {}
		})(),
		Ox = _a ? _a.isBuffer : void 0,
		Ph = Math.max,
		Ix = Date.now,
		$h = Cu(ct, 'Map'),
		Do = Cu(Object, 'create'),
		Bx = (function () {
			function y() {}
			return function (x) {
				if (!un(x)) return {};
				if (Eh) return Eh(x);
				y.prototype = x;
				var _ = new y();
				return (y.prototype = void 0), _;
			};
		})();
	function ln(y) {
		var x = -1,
			_ = y == null ? 0 : y.length;
		for (this.clear(); ++x < _; ) {
			var D = y[x];
			this.set(D[0], D[1]);
		}
	}
	function Dx() {
		(this.__data__ = Do ? Do(null) : {}), (this.size = 0);
	}
	function Fx(y) {
		var x = this.has(y) && delete this.__data__[y];
		return (this.size -= x ? 1 : 0), x;
	}
	function Nx(y) {
		var x = this.__data__;
		if (Do) {
			var _ = x[y];
			return _ === n ? void 0 : _;
		}
		return lr.call(x, y) ? x[y] : void 0;
	}
	function Vx(y) {
		var x = this.__data__;
		return Do ? x[y] !== void 0 : lr.call(x, y);
	}
	function jx(y, x) {
		var _ = this.__data__;
		return (
			(this.size += this.has(y) ? 0 : 1),
			(_[y] = Do && x === void 0 ? n : x),
			this
		);
	}
	(ln.prototype.clear = Dx),
		(ln.prototype.delete = Fx),
		(ln.prototype.get = Nx),
		(ln.prototype.has = Vx),
		(ln.prototype.set = jx);
	function ur(y) {
		var x = -1,
			_ = y == null ? 0 : y.length;
		for (this.clear(); ++x < _; ) {
			var D = y[x];
			this.set(D[0], D[1]);
		}
	}
	function Ux() {
		(this.__data__ = []), (this.size = 0);
	}
	function Wx(y) {
		var x = this.__data__,
			_ = Ea(x, y);
		if (_ < 0) return !1;
		var D = x.length - 1;
		return _ == D ? x.pop() : Lx.call(x, _, 1), --this.size, !0;
	}
	function Hx(y) {
		var x = this.__data__,
			_ = Ea(x, y);
		return _ < 0 ? void 0 : x[_][1];
	}
	function Gx(y) {
		return Ea(this.__data__, y) > -1;
	}
	function qx(y, x) {
		var _ = this.__data__,
			D = Ea(_, y);
		return D < 0 ? (++this.size, _.push([y, x])) : (_[D][1] = x), this;
	}
	(ur.prototype.clear = Ux),
		(ur.prototype.delete = Wx),
		(ur.prototype.get = Hx),
		(ur.prototype.has = Gx),
		(ur.prototype.set = qx);
	function In(y) {
		var x = -1,
			_ = y == null ? 0 : y.length;
		for (this.clear(); ++x < _; ) {
			var D = y[x];
			this.set(D[0], D[1]);
		}
	}
	function Kx() {
		(this.size = 0),
			(this.__data__ = {
				hash: new ln(),
				map: new ($h || ur)(),
				string: new ln()
			});
	}
	function Yx(y) {
		var x = $a(this, y).delete(y);
		return (this.size -= x ? 1 : 0), x;
	}
	function Xx(y) {
		return $a(this, y).get(y);
	}
	function Qx(y) {
		return $a(this, y).has(y);
	}
	function Zx(y, x) {
		var _ = $a(this, y),
			D = _.size;
		return _.set(y, x), (this.size += _.size == D ? 0 : 1), this;
	}
	(In.prototype.clear = Kx),
		(In.prototype.delete = Yx),
		(In.prototype.get = Xx),
		(In.prototype.has = Qx),
		(In.prototype.set = Zx);
	function Bn(y) {
		var x = (this.__data__ = new ur(y));
		this.size = x.size;
	}
	function Jx() {
		(this.__data__ = new ur()), (this.size = 0);
	}
	function ew(y) {
		var x = this.__data__,
			_ = x.delete(y);
		return (this.size = x.size), _;
	}
	function tw(y) {
		return this.__data__.get(y);
	}
	function rw(y) {
		return this.__data__.has(y);
	}
	function nw(y, x) {
		var _ = this.__data__;
		if (_ instanceof ur) {
			var D = _.__data__;
			if (!$h || D.length < r - 1)
				return D.push([y, x]), (this.size = ++_.size), this;
			_ = this.__data__ = new In(D);
		}
		return _.set(y, x), (this.size = _.size), this;
	}
	(Bn.prototype.clear = Jx),
		(Bn.prototype.delete = ew),
		(Bn.prototype.get = tw),
		(Bn.prototype.has = rw),
		(Bn.prototype.set = nw);
	function ow(y, x) {
		var _ = Eu(y),
			D = !_ && Tu(y),
			Y = !_ && !D && Lh(y),
			ue = !_ && !D && !Y && Ih(y),
			ge = _ || D || Y || ue,
			q = ge ? _x(y.length, String) : [],
			ve = q.length;
		for (var kt in y)
			(x || lr.call(y, kt)) &&
				!(
					ge &&
					(kt == 'length' ||
						(Y && (kt == 'offset' || kt == 'parent')) ||
						(ue &&
							(kt == 'buffer' || kt == 'byteLength' || kt == 'byteOffset')) ||
						zh(kt, ve))
				) &&
				q.push(kt);
		return q;
	}
	function wu(y, x, _) {
		((_ !== void 0 && !Ra(y[x], _)) || (_ === void 0 && !(x in y))) &&
			ku(y, x, _);
	}
	function iw(y, x, _) {
		var D = y[x];
		(!(lr.call(y, x) && Ra(D, _)) || (_ === void 0 && !(x in y))) &&
			ku(y, x, _);
	}
	function Ea(y, x) {
		for (var _ = y.length; _--; ) if (Ra(y[_][0], x)) return _;
		return -1;
	}
	function ku(y, x, _) {
		x == '__proto__' && Ta
			? Ta(y, x, { configurable: !0, enumerable: !0, value: _, writable: !0 })
			: (y[x] = _);
	}
	var aw = bw();
	function Pa(y) {
		return y == null
			? y === void 0
				? $
				: h
			: sn && sn in Object(y)
			? Sw(y)
			: Tw(y);
	}
	function Rh(y) {
		return Fo(y) && Pa(y) == s;
	}
	function sw(y) {
		if (!un(y) || Cw(y)) return !1;
		var x = $u(y) ? zx : re;
		return x.test(Rw(y));
	}
	function lw(y) {
		return Fo(y) && Oh(y.length) && !!Z[Pa(y)];
	}
	function uw(y) {
		if (!un(y)) return _w(y);
		var x = Mh(y),
			_ = [];
		for (var D in y) (D == 'constructor' && (x || !lr.call(y, D))) || _.push(D);
		return _;
	}
	function Ah(y, x, _, D, Y) {
		y !== x &&
			aw(
				x,
				function (ue, ge) {
					if ((Y || (Y = new Bn()), un(ue))) cw(y, x, ge, _, Ah, D, Y);
					else {
						var q = D ? D(_u(y, ge), ue, ge + '', y, x, Y) : void 0;
						q === void 0 && (q = ue), wu(y, ge, q);
					}
				},
				Bh
			);
	}
	function cw(y, x, _, D, Y, ue, ge) {
		var q = _u(y, _),
			ve = _u(x, _),
			kt = ge.get(ve);
		if (kt) {
			wu(y, _, kt);
			return;
		}
		var dt = ue ? ue(q, ve, _ + '', y, x, ge) : void 0,
			No = dt === void 0;
		if (No) {
			var Ru = Eu(ve),
				Au = !Ru && Lh(ve),
				Fh = !Ru && !Au && Ih(ve);
			(dt = ve),
				Ru || Au || Fh
					? Eu(q)
						? (dt = q)
						: Aw(q)
						? (dt = gw(q))
						: Au
						? ((No = !1), (dt = pw(ve, !0)))
						: Fh
						? ((No = !1), (dt = mw(ve, !0)))
						: (dt = [])
					: zw(ve) || Tu(ve)
					? ((dt = q),
					  Tu(q) ? (dt = Mw(q)) : (!un(q) || $u(q)) && (dt = xw(ve)))
					: (No = !1);
		}
		No && (ge.set(ve, dt), Y(dt, ve, D, ue, ge), ge.delete(ve)), wu(y, _, dt);
	}
	function dw(y, x) {
		return Pw(Ew(y, x, Dh), y + '');
	}
	var fw = Ta
		? function (y, x) {
				return Ta(y, 'toString', {
					configurable: !0,
					enumerable: !1,
					value: Ow(x),
					writable: !0
				});
		  }
		: Dh;
	function pw(y, x) {
		if (x) return y.slice();
		var _ = y.length,
			D = _h ? _h(_) : new y.constructor(_);
		return y.copy(D), D;
	}
	function hw(y) {
		var x = new y.constructor(y.byteLength);
		return new Ch(x).set(new Ch(y)), x;
	}
	function mw(y, x) {
		var _ = x ? hw(y.buffer) : y.buffer;
		return new y.constructor(_, y.byteOffset, y.length);
	}
	function gw(y, x) {
		var _ = -1,
			D = y.length;
		for (x || (x = Array(D)); ++_ < D; ) x[_] = y[_];
		return x;
	}
	function vw(y, x, _, D) {
		var Y = !_;
		_ || (_ = {});
		for (var ue = -1, ge = x.length; ++ue < ge; ) {
			var q = x[ue],
				ve = D ? D(_[q], y[q], q, _, y) : void 0;
			ve === void 0 && (ve = y[q]), Y ? ku(_, q, ve) : iw(_, q, ve);
		}
		return _;
	}
	function yw(y) {
		return dw(function (x, _) {
			var D = -1,
				Y = _.length,
				ue = Y > 1 ? _[Y - 1] : void 0,
				ge = Y > 2 ? _[2] : void 0;
			for (
				ue = y.length > 3 && typeof ue == 'function' ? (Y--, ue) : void 0,
					ge && ww(_[0], _[1], ge) && ((ue = Y < 3 ? void 0 : ue), (Y = 1)),
					x = Object(x);
				++D < Y;

			) {
				var q = _[D];
				q && y(x, q, D, ue);
			}
			return x;
		});
	}
	function bw(y) {
		return function (x, _, D) {
			for (var Y = -1, ue = Object(x), ge = D(x), q = ge.length; q--; ) {
				var ve = ge[y ? q : ++Y];
				if (_(ue[ve], ve, ue) === !1) break;
			}
			return x;
		};
	}
	function $a(y, x) {
		var _ = y.__data__;
		return kw(x) ? _[typeof x == 'string' ? 'string' : 'hash'] : _.map;
	}
	function Cu(y, x) {
		var _ = Ex(y, x);
		return sw(_) ? _ : void 0;
	}
	function Sw(y) {
		var x = lr.call(y, sn),
			_ = y[sn];
		try {
			y[sn] = void 0;
			var D = !0;
		} catch {}
		var Y = wh.call(y);
		return D && (x ? (y[sn] = _) : delete y[sn]), Y;
	}
	function xw(y) {
		return typeof y.constructor == 'function' && !Mh(y) ? Bx(Th(y)) : {};
	}
	function zh(y, x) {
		var _ = typeof y;
		return (
			(x = x ?? a),
			!!x &&
				(_ == 'number' || (_ != 'symbol' && se.test(y))) &&
				y > -1 &&
				y % 1 == 0 &&
				y < x
		);
	}
	function ww(y, x, _) {
		if (!un(_)) return !1;
		var D = typeof x;
		return (D == 'number' ? Pu(_) && zh(x, _.length) : D == 'string' && x in _)
			? Ra(_[x], y)
			: !1;
	}
	function kw(y) {
		var x = typeof y;
		return x == 'string' || x == 'number' || x == 'symbol' || x == 'boolean'
			? y !== '__proto__'
			: y === null;
	}
	function Cw(y) {
		return !!xh && xh in y;
	}
	function Mh(y) {
		var x = y && y.constructor,
			_ = (typeof x == 'function' && x.prototype) || ka;
		return y === _;
	}
	function _w(y) {
		var x = [];
		if (y != null) for (var _ in Object(y)) x.push(_);
		return x;
	}
	function Tw(y) {
		return wh.call(y);
	}
	function Ew(y, x, _) {
		return (
			(x = Ph(x === void 0 ? y.length - 1 : x, 0)),
			function () {
				for (
					var D = arguments, Y = -1, ue = Ph(D.length - x, 0), ge = Array(ue);
					++Y < ue;

				)
					ge[Y] = D[x + Y];
				Y = -1;
				for (var q = Array(x + 1); ++Y < x; ) q[Y] = D[Y];
				return (q[x] = _(ge)), Cx(y, this, q);
			}
		);
	}
	function _u(y, x) {
		if (!(x === 'constructor' && typeof y[x] == 'function') && x != '__proto__')
			return y[x];
	}
	var Pw = $w(fw);
	function $w(y) {
		var x = 0,
			_ = 0;
		return function () {
			var D = Ix(),
				Y = i - (D - _);
			if (((_ = D), Y > 0)) {
				if (++x >= o) return arguments[0];
			} else x = 0;
			return y.apply(void 0, arguments);
		};
	}
	function Rw(y) {
		if (y != null) {
			try {
				return Ca.call(y);
			} catch {}
			try {
				return y + '';
			} catch {}
		}
		return '';
	}
	function Ra(y, x) {
		return y === x || (y !== y && x !== x);
	}
	var Tu = Rh(
			(function () {
				return arguments;
			})()
		)
			? Rh
			: function (y) {
					return Fo(y) && lr.call(y, 'callee') && !Mx.call(y, 'callee');
			  },
		Eu = Array.isArray;
	function Pu(y) {
		return y != null && Oh(y.length) && !$u(y);
	}
	function Aw(y) {
		return Fo(y) && Pu(y);
	}
	var Lh = Ox || Iw;
	function $u(y) {
		if (!un(y)) return !1;
		var x = Pa(y);
		return x == p || x == v || x == u || x == g;
	}
	function Oh(y) {
		return typeof y == 'number' && y > -1 && y % 1 == 0 && y <= a;
	}
	function un(y) {
		var x = typeof y;
		return y != null && (x == 'object' || x == 'function');
	}
	function Fo(y) {
		return y != null && typeof y == 'object';
	}
	function zw(y) {
		if (!Fo(y) || Pa(y) != m) return !1;
		var x = Th(y);
		if (x === null) return !0;
		var _ = lr.call(x, 'constructor') && x.constructor;
		return typeof _ == 'function' && _ instanceof _ && Ca.call(_) == Ax;
	}
	var Ih = Sh ? Tx(Sh) : lw;
	function Mw(y) {
		return vw(y, Bh(y));
	}
	function Bh(y) {
		return Pu(y) ? ow(y, !0) : uw(y);
	}
	var Lw = yw(function (y, x, _, D) {
		Ah(y, x, _, D);
	});
	function Ow(y) {
		return function () {
			return y;
		};
	}
	function Dh(y) {
		return y;
	}
	function Iw() {
		return !1;
	}
	e.exports = Lw;
})(vT, sl);
const Zt = sl;
var yT = (e) => /!(important)?$/.test(e),
	R0 = (e) =>
		typeof e == 'string' ? e.replace(/!(important)?$/, '').trim() : e,
	bT = (e, t) => (r) => {
		const n = String(t),
			o = yT(n),
			i = R0(n),
			a = e ? `${e}.${i}` : i;
		let s = $t(r.__cssMap) && a in r.__cssMap ? r.__cssMap[a].varRef : t;
		return (s = R0(s)), o ? `${s} !important` : s;
	};
function ea(e) {
	const { scale: t, transform: r, compose: n } = e;
	return (i, a) => {
		var s;
		const l = bT(t, i)(a);
		let u = (s = r == null ? void 0 : r(l, a)) != null ? s : l;
		return n && (u = n(u, a)), u;
	};
}
var Xa =
	(...e) =>
	(t) =>
		e.reduce((r, n) => n(r), t);
function Mt(e, t) {
	return (r) => {
		const n = { property: r, scale: e };
		return (n.transform = ea({ scale: e, transform: t })), n;
	};
}
var ST =
	({ rtl: e, ltr: t }) =>
	(r) =>
		r.direction === 'rtl' ? e : t;
function xT(e) {
	const { property: t, scale: r, transform: n } = e;
	return {
		scale: r,
		property: ST(t),
		transform: r ? ea({ scale: r, compose: n }) : n
	};
}
var bb = [
	'rotate(var(--chakra-rotate, 0))',
	'scaleX(var(--chakra-scale-x, 1))',
	'scaleY(var(--chakra-scale-y, 1))',
	'skewX(var(--chakra-skew-x, 0))',
	'skewY(var(--chakra-skew-y, 0))'
];
function wT() {
	return [
		'translateX(var(--chakra-translate-x, 0))',
		'translateY(var(--chakra-translate-y, 0))',
		...bb
	].join(' ');
}
function kT() {
	return [
		'translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)',
		...bb
	].join(' ');
}
var CT = {
		'--chakra-blur': 'var(--chakra-empty,/*!*/ /*!*/)',
		'--chakra-brightness': 'var(--chakra-empty,/*!*/ /*!*/)',
		'--chakra-contrast': 'var(--chakra-empty,/*!*/ /*!*/)',
		'--chakra-grayscale': 'var(--chakra-empty,/*!*/ /*!*/)',
		'--chakra-hue-rotate': 'var(--chakra-empty,/*!*/ /*!*/)',
		'--chakra-invert': 'var(--chakra-empty,/*!*/ /*!*/)',
		'--chakra-saturate': 'var(--chakra-empty,/*!*/ /*!*/)',
		'--chakra-sepia': 'var(--chakra-empty,/*!*/ /*!*/)',
		'--chakra-drop-shadow': 'var(--chakra-empty,/*!*/ /*!*/)',
		filter: [
			'var(--chakra-blur)',
			'var(--chakra-brightness)',
			'var(--chakra-contrast)',
			'var(--chakra-grayscale)',
			'var(--chakra-hue-rotate)',
			'var(--chakra-invert)',
			'var(--chakra-saturate)',
			'var(--chakra-sepia)',
			'var(--chakra-drop-shadow)'
		].join(' ')
	},
	_T = {
		backdropFilter: [
			'var(--chakra-backdrop-blur)',
			'var(--chakra-backdrop-brightness)',
			'var(--chakra-backdrop-contrast)',
			'var(--chakra-backdrop-grayscale)',
			'var(--chakra-backdrop-hue-rotate)',
			'var(--chakra-backdrop-invert)',
			'var(--chakra-backdrop-opacity)',
			'var(--chakra-backdrop-saturate)',
			'var(--chakra-backdrop-sepia)'
		].join(' '),
		'--chakra-backdrop-blur': 'var(--chakra-empty,/*!*/ /*!*/)',
		'--chakra-backdrop-brightness': 'var(--chakra-empty,/*!*/ /*!*/)',
		'--chakra-backdrop-contrast': 'var(--chakra-empty,/*!*/ /*!*/)',
		'--chakra-backdrop-grayscale': 'var(--chakra-empty,/*!*/ /*!*/)',
		'--chakra-backdrop-hue-rotate': 'var(--chakra-empty,/*!*/ /*!*/)',
		'--chakra-backdrop-invert': 'var(--chakra-empty,/*!*/ /*!*/)',
		'--chakra-backdrop-opacity': 'var(--chakra-empty,/*!*/ /*!*/)',
		'--chakra-backdrop-saturate': 'var(--chakra-empty,/*!*/ /*!*/)',
		'--chakra-backdrop-sepia': 'var(--chakra-empty,/*!*/ /*!*/)'
	};
function TT(e) {
	return {
		'--chakra-ring-offset-shadow':
			'var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)',
		'--chakra-ring-shadow':
			'var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)',
		'--chakra-ring-width': e,
		boxShadow: [
			'var(--chakra-ring-offset-shadow)',
			'var(--chakra-ring-shadow)',
			'var(--chakra-shadow, 0 0 #0000)'
		].join(', ')
	};
}
var ET = {
		'row-reverse': {
			space: '--chakra-space-x-reverse',
			divide: '--chakra-divide-x-reverse'
		},
		'column-reverse': {
			space: '--chakra-space-y-reverse',
			divide: '--chakra-divide-y-reverse'
		}
	},
	Sb = '& > :not(style) ~ :not(style)',
	PT = {
		[Sb]: {
			marginInlineStart:
				'calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))',
			marginInlineEnd:
				'calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))'
		}
	},
	$T = {
		[Sb]: {
			marginTop:
				'calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))',
			marginBottom:
				'calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))'
		}
	},
	Qd = {
		'to-t': 'to top',
		'to-tr': 'to top right',
		'to-r': 'to right',
		'to-br': 'to bottom right',
		'to-b': 'to bottom',
		'to-bl': 'to bottom left',
		'to-l': 'to left',
		'to-tl': 'to top left'
	},
	RT = new Set(Object.values(Qd)),
	xb = new Set([
		'none',
		'-moz-initial',
		'inherit',
		'initial',
		'revert',
		'unset'
	]),
	AT = (e) => e.trim();
function zT(e, t) {
	var r, n;
	if (e == null || xb.has(e)) return e;
	const o = /(?<type>^[a-z-A-Z]+)\((?<values>(.*))\)/g,
		{ type: i, values: a } =
			(n = (r = o.exec(e)) == null ? void 0 : r.groups) != null ? n : {};
	if (!i || !a) return e;
	const s = i.includes('-gradient') ? i : `${i}-gradient`,
		[l, ...u] = a.split(',').map(AT).filter(Boolean);
	if ((u == null ? void 0 : u.length) === 0) return e;
	const c = l in Qd ? Qd[l] : l;
	u.unshift(c);
	const d = u.map((f) => {
		if (RT.has(f)) return f;
		const p = f.indexOf(' '),
			[v, b] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f],
			k = wb(b) ? b : b && b.split(' '),
			h = `colors.${v}`,
			m = h in t.__cssMap ? t.__cssMap[h].varRef : v;
		return k ? [m, ...(Array.isArray(k) ? k : [k])].join(' ') : m;
	});
	return `${s}(${d.join(', ')})`;
}
var wb = (e) => typeof e == 'string' && e.includes('(') && e.includes(')'),
	MT = (e, t) => zT(e, t ?? {});
function LT(e) {
	return /^var\(--.+\)$/.test(e);
}
var OT = (e) => {
		const t = parseFloat(e.toString()),
			r = e.toString().replace(String(t), '');
		return { unitless: !r, value: t, unit: r };
	},
	Ht = (e) => (t) => `${e}(${t})`,
	X = {
		filter(e) {
			return e !== 'auto' ? e : CT;
		},
		backdropFilter(e) {
			return e !== 'auto' ? e : _T;
		},
		ring(e) {
			return TT(X.px(e));
		},
		bgClip(e) {
			return e === 'text'
				? { color: 'transparent', backgroundClip: 'text' }
				: { backgroundClip: e };
		},
		transform(e) {
			return e === 'auto' ? wT() : e === 'auto-gpu' ? kT() : e;
		},
		vh(e) {
			return e === '$100vh' ? 'var(--chakra-vh)' : e;
		},
		px(e) {
			if (e == null) return e;
			const { unitless: t } = OT(e);
			return t || typeof e == 'number' ? `${e}px` : e;
		},
		fraction(e) {
			return typeof e != 'number' || e > 1 ? e : `${e * 100}%`;
		},
		float(e, t) {
			const r = { left: 'right', right: 'left' };
			return t.direction === 'rtl' ? r[e] : e;
		},
		degree(e) {
			if (LT(e) || e == null) return e;
			const t = typeof e == 'string' && !e.endsWith('deg');
			return typeof e == 'number' || t ? `${e}deg` : e;
		},
		gradient: MT,
		blur: Ht('blur'),
		opacity: Ht('opacity'),
		brightness: Ht('brightness'),
		contrast: Ht('contrast'),
		dropShadow: Ht('drop-shadow'),
		grayscale: Ht('grayscale'),
		hueRotate: Ht('hue-rotate'),
		invert: Ht('invert'),
		saturate: Ht('saturate'),
		sepia: Ht('sepia'),
		bgImage(e) {
			return e == null || wb(e) || xb.has(e) ? e : `url(${e})`;
		},
		outline(e) {
			const t = String(e) === '0' || String(e) === 'none';
			return e !== null && t
				? { outline: '2px solid transparent', outlineOffset: '2px' }
				: { outline: e };
		},
		flexDirection(e) {
			var t;
			const { space: r, divide: n } = (t = ET[e]) != null ? t : {},
				o = { flexDirection: e };
			return r && (o[r] = 1), n && (o[n] = 1), o;
		}
	},
	w = {
		borderWidths: Mt('borderWidths'),
		borderStyles: Mt('borderStyles'),
		colors: Mt('colors'),
		borders: Mt('borders'),
		radii: Mt('radii', X.px),
		space: Mt('space', Xa(X.vh, X.px)),
		spaceT: Mt('space', Xa(X.vh, X.px)),
		degreeT(e) {
			return { property: e, transform: X.degree };
		},
		prop(e, t, r) {
			return {
				property: e,
				scale: t,
				...(t && { transform: ea({ scale: t, transform: r }) })
			};
		},
		propT(e, t) {
			return { property: e, transform: t };
		},
		sizes: Mt('sizes', Xa(X.vh, X.px)),
		sizesT: Mt('sizes', Xa(X.vh, X.fraction)),
		shadows: Mt('shadows'),
		logical: xT,
		blur: Mt('blur', X.blur)
	},
	Cs = {
		background: w.colors('background'),
		backgroundColor: w.colors('backgroundColor'),
		backgroundImage: w.propT('backgroundImage', X.bgImage),
		backgroundSize: !0,
		backgroundPosition: !0,
		backgroundRepeat: !0,
		backgroundAttachment: !0,
		backgroundClip: { transform: X.bgClip },
		bgSize: w.prop('backgroundSize'),
		bgPosition: w.prop('backgroundPosition'),
		bg: w.colors('background'),
		bgColor: w.colors('backgroundColor'),
		bgPos: w.prop('backgroundPosition'),
		bgRepeat: w.prop('backgroundRepeat'),
		bgAttachment: w.prop('backgroundAttachment'),
		bgGradient: w.propT('backgroundImage', X.gradient),
		bgClip: { transform: X.bgClip }
	};
Object.assign(Cs, { bgImage: Cs.backgroundImage, bgImg: Cs.backgroundImage });
var J = {
	border: w.borders('border'),
	borderWidth: w.borderWidths('borderWidth'),
	borderStyle: w.borderStyles('borderStyle'),
	borderColor: w.colors('borderColor'),
	borderRadius: w.radii('borderRadius'),
	borderTop: w.borders('borderTop'),
	borderBlockStart: w.borders('borderBlockStart'),
	borderTopLeftRadius: w.radii('borderTopLeftRadius'),
	borderStartStartRadius: w.logical({
		scale: 'radii',
		property: { ltr: 'borderTopLeftRadius', rtl: 'borderTopRightRadius' }
	}),
	borderEndStartRadius: w.logical({
		scale: 'radii',
		property: { ltr: 'borderBottomLeftRadius', rtl: 'borderBottomRightRadius' }
	}),
	borderTopRightRadius: w.radii('borderTopRightRadius'),
	borderStartEndRadius: w.logical({
		scale: 'radii',
		property: { ltr: 'borderTopRightRadius', rtl: 'borderTopLeftRadius' }
	}),
	borderEndEndRadius: w.logical({
		scale: 'radii',
		property: { ltr: 'borderBottomRightRadius', rtl: 'borderBottomLeftRadius' }
	}),
	borderRight: w.borders('borderRight'),
	borderInlineEnd: w.borders('borderInlineEnd'),
	borderBottom: w.borders('borderBottom'),
	borderBlockEnd: w.borders('borderBlockEnd'),
	borderBottomLeftRadius: w.radii('borderBottomLeftRadius'),
	borderBottomRightRadius: w.radii('borderBottomRightRadius'),
	borderLeft: w.borders('borderLeft'),
	borderInlineStart: { property: 'borderInlineStart', scale: 'borders' },
	borderInlineStartRadius: w.logical({
		scale: 'radii',
		property: {
			ltr: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
			rtl: ['borderTopRightRadius', 'borderBottomRightRadius']
		}
	}),
	borderInlineEndRadius: w.logical({
		scale: 'radii',
		property: {
			ltr: ['borderTopRightRadius', 'borderBottomRightRadius'],
			rtl: ['borderTopLeftRadius', 'borderBottomLeftRadius']
		}
	}),
	borderX: w.borders(['borderLeft', 'borderRight']),
	borderInline: w.borders('borderInline'),
	borderY: w.borders(['borderTop', 'borderBottom']),
	borderBlock: w.borders('borderBlock'),
	borderTopWidth: w.borderWidths('borderTopWidth'),
	borderBlockStartWidth: w.borderWidths('borderBlockStartWidth'),
	borderTopColor: w.colors('borderTopColor'),
	borderBlockStartColor: w.colors('borderBlockStartColor'),
	borderTopStyle: w.borderStyles('borderTopStyle'),
	borderBlockStartStyle: w.borderStyles('borderBlockStartStyle'),
	borderBottomWidth: w.borderWidths('borderBottomWidth'),
	borderBlockEndWidth: w.borderWidths('borderBlockEndWidth'),
	borderBottomColor: w.colors('borderBottomColor'),
	borderBlockEndColor: w.colors('borderBlockEndColor'),
	borderBottomStyle: w.borderStyles('borderBottomStyle'),
	borderBlockEndStyle: w.borderStyles('borderBlockEndStyle'),
	borderLeftWidth: w.borderWidths('borderLeftWidth'),
	borderInlineStartWidth: w.borderWidths('borderInlineStartWidth'),
	borderLeftColor: w.colors('borderLeftColor'),
	borderInlineStartColor: w.colors('borderInlineStartColor'),
	borderLeftStyle: w.borderStyles('borderLeftStyle'),
	borderInlineStartStyle: w.borderStyles('borderInlineStartStyle'),
	borderRightWidth: w.borderWidths('borderRightWidth'),
	borderInlineEndWidth: w.borderWidths('borderInlineEndWidth'),
	borderRightColor: w.colors('borderRightColor'),
	borderInlineEndColor: w.colors('borderInlineEndColor'),
	borderRightStyle: w.borderStyles('borderRightStyle'),
	borderInlineEndStyle: w.borderStyles('borderInlineEndStyle'),
	borderTopRadius: w.radii(['borderTopLeftRadius', 'borderTopRightRadius']),
	borderBottomRadius: w.radii([
		'borderBottomLeftRadius',
		'borderBottomRightRadius'
	]),
	borderLeftRadius: w.radii(['borderTopLeftRadius', 'borderBottomLeftRadius']),
	borderRightRadius: w.radii([
		'borderTopRightRadius',
		'borderBottomRightRadius'
	])
};
Object.assign(J, {
	rounded: J.borderRadius,
	roundedTop: J.borderTopRadius,
	roundedTopLeft: J.borderTopLeftRadius,
	roundedTopRight: J.borderTopRightRadius,
	roundedTopStart: J.borderStartStartRadius,
	roundedTopEnd: J.borderStartEndRadius,
	roundedBottom: J.borderBottomRadius,
	roundedBottomLeft: J.borderBottomLeftRadius,
	roundedBottomRight: J.borderBottomRightRadius,
	roundedBottomStart: J.borderEndStartRadius,
	roundedBottomEnd: J.borderEndEndRadius,
	roundedLeft: J.borderLeftRadius,
	roundedRight: J.borderRightRadius,
	roundedStart: J.borderInlineStartRadius,
	roundedEnd: J.borderInlineEndRadius,
	borderStart: J.borderInlineStart,
	borderEnd: J.borderInlineEnd,
	borderTopStartRadius: J.borderStartStartRadius,
	borderTopEndRadius: J.borderStartEndRadius,
	borderBottomStartRadius: J.borderEndStartRadius,
	borderBottomEndRadius: J.borderEndEndRadius,
	borderStartRadius: J.borderInlineStartRadius,
	borderEndRadius: J.borderInlineEndRadius,
	borderStartWidth: J.borderInlineStartWidth,
	borderEndWidth: J.borderInlineEndWidth,
	borderStartColor: J.borderInlineStartColor,
	borderEndColor: J.borderInlineEndColor,
	borderStartStyle: J.borderInlineStartStyle,
	borderEndStyle: J.borderInlineEndStyle
});
var IT = {
		color: w.colors('color'),
		textColor: w.colors('color'),
		fill: w.colors('fill'),
		stroke: w.colors('stroke')
	},
	Zd = {
		boxShadow: w.shadows('boxShadow'),
		mixBlendMode: !0,
		blendMode: w.prop('mixBlendMode'),
		backgroundBlendMode: !0,
		bgBlendMode: w.prop('backgroundBlendMode'),
		opacity: !0
	};
Object.assign(Zd, { shadow: Zd.boxShadow });
var BT = {
		filter: { transform: X.filter },
		blur: w.blur('--chakra-blur'),
		brightness: w.propT('--chakra-brightness', X.brightness),
		contrast: w.propT('--chakra-contrast', X.contrast),
		hueRotate: w.degreeT('--chakra-hue-rotate'),
		invert: w.propT('--chakra-invert', X.invert),
		saturate: w.propT('--chakra-saturate', X.saturate),
		dropShadow: w.propT('--chakra-drop-shadow', X.dropShadow),
		backdropFilter: { transform: X.backdropFilter },
		backdropBlur: w.blur('--chakra-backdrop-blur'),
		backdropBrightness: w.propT('--chakra-backdrop-brightness', X.brightness),
		backdropContrast: w.propT('--chakra-backdrop-contrast', X.contrast),
		backdropHueRotate: w.degreeT('--chakra-backdrop-hue-rotate'),
		backdropInvert: w.propT('--chakra-backdrop-invert', X.invert),
		backdropSaturate: w.propT('--chakra-backdrop-saturate', X.saturate)
	},
	ll = {
		alignItems: !0,
		alignContent: !0,
		justifyItems: !0,
		justifyContent: !0,
		flexWrap: !0,
		flexDirection: { transform: X.flexDirection },
		experimental_spaceX: {
			static: PT,
			transform: ea({
				scale: 'space',
				transform: (e) => (e !== null ? { '--chakra-space-x': e } : null)
			})
		},
		experimental_spaceY: {
			static: $T,
			transform: ea({
				scale: 'space',
				transform: (e) => (e != null ? { '--chakra-space-y': e } : null)
			})
		},
		flex: !0,
		flexFlow: !0,
		flexGrow: !0,
		flexShrink: !0,
		flexBasis: w.sizes('flexBasis'),
		justifySelf: !0,
		alignSelf: !0,
		order: !0,
		placeItems: !0,
		placeContent: !0,
		placeSelf: !0,
		gap: w.space('gap'),
		rowGap: w.space('rowGap'),
		columnGap: w.space('columnGap')
	};
Object.assign(ll, { flexDir: ll.flexDirection });
var kb = {
		gridGap: w.space('gridGap'),
		gridColumnGap: w.space('gridColumnGap'),
		gridRowGap: w.space('gridRowGap'),
		gridColumn: !0,
		gridRow: !0,
		gridAutoFlow: !0,
		gridAutoColumns: !0,
		gridColumnStart: !0,
		gridColumnEnd: !0,
		gridRowStart: !0,
		gridRowEnd: !0,
		gridAutoRows: !0,
		gridTemplate: !0,
		gridTemplateColumns: !0,
		gridTemplateRows: !0,
		gridTemplateAreas: !0,
		gridArea: !0
	},
	DT = {
		appearance: !0,
		cursor: !0,
		resize: !0,
		userSelect: !0,
		pointerEvents: !0,
		outline: { transform: X.outline },
		outlineOffset: !0,
		outlineColor: w.colors('outlineColor')
	},
	Ct = {
		width: w.sizesT('width'),
		inlineSize: w.sizesT('inlineSize'),
		height: w.sizes('height'),
		blockSize: w.sizes('blockSize'),
		boxSize: w.sizes(['width', 'height']),
		minWidth: w.sizes('minWidth'),
		minInlineSize: w.sizes('minInlineSize'),
		minHeight: w.sizes('minHeight'),
		minBlockSize: w.sizes('minBlockSize'),
		maxWidth: w.sizes('maxWidth'),
		maxInlineSize: w.sizes('maxInlineSize'),
		maxHeight: w.sizes('maxHeight'),
		maxBlockSize: w.sizes('maxBlockSize'),
		overflow: !0,
		overflowX: !0,
		overflowY: !0,
		overscrollBehavior: !0,
		overscrollBehaviorX: !0,
		overscrollBehaviorY: !0,
		display: !0,
		verticalAlign: !0,
		boxSizing: !0,
		boxDecorationBreak: !0,
		float: w.propT('float', X.float),
		objectFit: !0,
		objectPosition: !0,
		visibility: !0,
		isolation: !0
	};
Object.assign(Ct, {
	w: Ct.width,
	h: Ct.height,
	minW: Ct.minWidth,
	maxW: Ct.maxWidth,
	minH: Ct.minHeight,
	maxH: Ct.maxHeight,
	overscroll: Ct.overscrollBehavior,
	overscrollX: Ct.overscrollBehaviorX,
	overscrollY: Ct.overscrollBehaviorY
});
var FT = {
	listStyleType: !0,
	listStylePosition: !0,
	listStylePos: w.prop('listStylePosition'),
	listStyleImage: !0,
	listStyleImg: w.prop('listStyleImage')
};
function NT(e, t, r, n) {
	const o = typeof t == 'string' ? t.split('.') : [t];
	for (n = 0; n < o.length && e; n += 1) e = e[o[n]];
	return e === void 0 ? r : e;
}
var VT = (e) => {
		const t = new WeakMap();
		return (n, o, i, a) => {
			if (typeof n > 'u') return e(n, o, i);
			t.has(n) || t.set(n, new Map());
			const s = t.get(n);
			if (s.has(o)) return s.get(o);
			const l = e(n, o, i, a);
			return s.set(o, l), l;
		};
	},
	jT = VT(NT),
	UT = {
		border: '0px',
		clip: 'rect(0, 0, 0, 0)',
		width: '1px',
		height: '1px',
		margin: '-1px',
		padding: '0px',
		overflow: 'hidden',
		whiteSpace: 'nowrap',
		position: 'absolute'
	},
	WT = {
		position: 'static',
		width: 'auto',
		height: 'auto',
		clip: 'auto',
		padding: '0',
		margin: '0',
		overflow: 'visible',
		whiteSpace: 'normal'
	},
	kc = (e, t, r) => {
		const n = {},
			o = jT(e, t, {});
		for (const i in o) (i in r && r[i] != null) || (n[i] = o[i]);
		return n;
	},
	HT = {
		srOnly: {
			transform(e) {
				return e === !0 ? UT : e === 'focusable' ? WT : {};
			}
		},
		layerStyle: {
			processResult: !0,
			transform: (e, t, r) => kc(t, `layerStyles.${e}`, r)
		},
		textStyle: {
			processResult: !0,
			transform: (e, t, r) => kc(t, `textStyles.${e}`, r)
		},
		apply: { processResult: !0, transform: (e, t, r) => kc(t, e, r) }
	},
	yi = {
		position: !0,
		pos: w.prop('position'),
		zIndex: w.prop('zIndex', 'zIndices'),
		inset: w.spaceT('inset'),
		insetX: w.spaceT(['left', 'right']),
		insetInline: w.spaceT('insetInline'),
		insetY: w.spaceT(['top', 'bottom']),
		insetBlock: w.spaceT('insetBlock'),
		top: w.spaceT('top'),
		insetBlockStart: w.spaceT('insetBlockStart'),
		bottom: w.spaceT('bottom'),
		insetBlockEnd: w.spaceT('insetBlockEnd'),
		left: w.spaceT('left'),
		insetInlineStart: w.logical({
			scale: 'space',
			property: { ltr: 'left', rtl: 'right' }
		}),
		right: w.spaceT('right'),
		insetInlineEnd: w.logical({
			scale: 'space',
			property: { ltr: 'right', rtl: 'left' }
		})
	};
Object.assign(yi, {
	insetStart: yi.insetInlineStart,
	insetEnd: yi.insetInlineEnd
});
var GT = {
		ring: { transform: X.ring },
		ringColor: w.colors('--chakra-ring-color'),
		ringOffset: w.prop('--chakra-ring-offset-width'),
		ringOffsetColor: w.colors('--chakra-ring-offset-color'),
		ringInset: w.prop('--chakra-ring-inset')
	},
	pe = {
		margin: w.spaceT('margin'),
		marginTop: w.spaceT('marginTop'),
		marginBlockStart: w.spaceT('marginBlockStart'),
		marginRight: w.spaceT('marginRight'),
		marginInlineEnd: w.spaceT('marginInlineEnd'),
		marginBottom: w.spaceT('marginBottom'),
		marginBlockEnd: w.spaceT('marginBlockEnd'),
		marginLeft: w.spaceT('marginLeft'),
		marginInlineStart: w.spaceT('marginInlineStart'),
		marginX: w.spaceT(['marginInlineStart', 'marginInlineEnd']),
		marginInline: w.spaceT('marginInline'),
		marginY: w.spaceT(['marginTop', 'marginBottom']),
		marginBlock: w.spaceT('marginBlock'),
		padding: w.space('padding'),
		paddingTop: w.space('paddingTop'),
		paddingBlockStart: w.space('paddingBlockStart'),
		paddingRight: w.space('paddingRight'),
		paddingBottom: w.space('paddingBottom'),
		paddingBlockEnd: w.space('paddingBlockEnd'),
		paddingLeft: w.space('paddingLeft'),
		paddingInlineStart: w.space('paddingInlineStart'),
		paddingInlineEnd: w.space('paddingInlineEnd'),
		paddingX: w.space(['paddingInlineStart', 'paddingInlineEnd']),
		paddingInline: w.space('paddingInline'),
		paddingY: w.space(['paddingTop', 'paddingBottom']),
		paddingBlock: w.space('paddingBlock')
	};
Object.assign(pe, {
	m: pe.margin,
	mt: pe.marginTop,
	mr: pe.marginRight,
	me: pe.marginInlineEnd,
	marginEnd: pe.marginInlineEnd,
	mb: pe.marginBottom,
	ml: pe.marginLeft,
	ms: pe.marginInlineStart,
	marginStart: pe.marginInlineStart,
	mx: pe.marginX,
	my: pe.marginY,
	p: pe.padding,
	pt: pe.paddingTop,
	py: pe.paddingY,
	px: pe.paddingX,
	pb: pe.paddingBottom,
	pl: pe.paddingLeft,
	ps: pe.paddingInlineStart,
	paddingStart: pe.paddingInlineStart,
	pr: pe.paddingRight,
	pe: pe.paddingInlineEnd,
	paddingEnd: pe.paddingInlineEnd
});
var qT = {
		textDecorationColor: w.colors('textDecorationColor'),
		textDecoration: !0,
		textDecor: { property: 'textDecoration' },
		textDecorationLine: !0,
		textDecorationStyle: !0,
		textDecorationThickness: !0,
		textUnderlineOffset: !0,
		textShadow: w.shadows('textShadow')
	},
	KT = {
		clipPath: !0,
		transform: w.propT('transform', X.transform),
		transformOrigin: !0,
		translateX: w.spaceT('--chakra-translate-x'),
		translateY: w.spaceT('--chakra-translate-y'),
		skewX: w.degreeT('--chakra-skew-x'),
		skewY: w.degreeT('--chakra-skew-y'),
		scaleX: w.prop('--chakra-scale-x'),
		scaleY: w.prop('--chakra-scale-y'),
		scale: w.prop(['--chakra-scale-x', '--chakra-scale-y']),
		rotate: w.degreeT('--chakra-rotate')
	},
	YT = {
		transition: !0,
		transitionDelay: !0,
		animation: !0,
		willChange: !0,
		transitionDuration: w.prop('transitionDuration', 'transition.duration'),
		transitionProperty: w.prop('transitionProperty', 'transition.property'),
		transitionTimingFunction: w.prop(
			'transitionTimingFunction',
			'transition.easing'
		)
	},
	XT = {
		fontFamily: w.prop('fontFamily', 'fonts'),
		fontSize: w.prop('fontSize', 'fontSizes', X.px),
		fontWeight: w.prop('fontWeight', 'fontWeights'),
		lineHeight: w.prop('lineHeight', 'lineHeights'),
		letterSpacing: w.prop('letterSpacing', 'letterSpacings'),
		textAlign: !0,
		fontStyle: !0,
		textIndent: !0,
		wordBreak: !0,
		overflowWrap: !0,
		textOverflow: !0,
		textTransform: !0,
		whiteSpace: !0,
		isTruncated: {
			transform(e) {
				if (e === !0)
					return {
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						whiteSpace: 'nowrap'
					};
			}
		},
		noOfLines: {
			static: {
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				display: '-webkit-box',
				WebkitBoxOrient: 'vertical',
				WebkitLineClamp: 'var(--chakra-line-clamp)'
			},
			property: '--chakra-line-clamp'
		}
	},
	QT = {
		scrollBehavior: !0,
		scrollSnapAlign: !0,
		scrollSnapStop: !0,
		scrollSnapType: !0,
		scrollMargin: w.spaceT('scrollMargin'),
		scrollMarginTop: w.spaceT('scrollMarginTop'),
		scrollMarginBottom: w.spaceT('scrollMarginBottom'),
		scrollMarginLeft: w.spaceT('scrollMarginLeft'),
		scrollMarginRight: w.spaceT('scrollMarginRight'),
		scrollMarginX: w.spaceT(['scrollMarginLeft', 'scrollMarginRight']),
		scrollMarginY: w.spaceT(['scrollMarginTop', 'scrollMarginBottom']),
		scrollPadding: w.spaceT('scrollPadding'),
		scrollPaddingTop: w.spaceT('scrollPaddingTop'),
		scrollPaddingBottom: w.spaceT('scrollPaddingBottom'),
		scrollPaddingLeft: w.spaceT('scrollPaddingLeft'),
		scrollPaddingRight: w.spaceT('scrollPaddingRight'),
		scrollPaddingX: w.spaceT(['scrollPaddingLeft', 'scrollPaddingRight']),
		scrollPaddingY: w.spaceT(['scrollPaddingTop', 'scrollPaddingBottom'])
	};
function Cb(e) {
	return $t(e) && e.reference ? e.reference : String(e);
}
var au = (e, ...t) => t.map(Cb).join(` ${e} `).replace(/calc/g, ''),
	A0 = (...e) => `calc(${au('+', ...e)})`,
	z0 = (...e) => `calc(${au('-', ...e)})`,
	Jd = (...e) => `calc(${au('*', ...e)})`,
	M0 = (...e) => `calc(${au('/', ...e)})`,
	L0 = (e) => {
		const t = Cb(e);
		return t != null && !Number.isNaN(parseFloat(t))
			? String(t).startsWith('-')
				? String(t).slice(1)
				: `-${t}`
			: Jd(t, -1);
	},
	mn = Object.assign(
		(e) => ({
			add: (...t) => mn(A0(e, ...t)),
			subtract: (...t) => mn(z0(e, ...t)),
			multiply: (...t) => mn(Jd(e, ...t)),
			divide: (...t) => mn(M0(e, ...t)),
			negate: () => mn(L0(e)),
			toString: () => e.toString()
		}),
		{ add: A0, subtract: z0, multiply: Jd, divide: M0, negate: L0 }
	);
function ZT(e, t = '-') {
	return e.replace(/\s+/g, t);
}
function JT(e) {
	const t = ZT(e.toString());
	return tE(eE(t));
}
function eE(e) {
	return e.includes('\\.')
		? e
		: !Number.isInteger(parseFloat(e.toString()))
		? e.replace('.', '\\.')
		: e;
}
function tE(e) {
	return e.replace(/[!-,/:-@[-^`{-~]/g, '\\$&');
}
function rE(e, t = '') {
	return [t, e].filter(Boolean).join('-');
}
function nE(e, t) {
	return `var(${e}${t ? `, ${t}` : ''})`;
}
function oE(e, t = '') {
	return JT(`--${rE(e, t)}`);
}
function le(e, t, r) {
	const n = oE(e, r);
	return { variable: n, reference: nE(n, t) };
}
function iE(e) {
	const t = e == null ? 0 : e.length;
	return t ? e[t - 1] : void 0;
}
function aE(e) {
	const t = parseFloat(e.toString()),
		r = e.toString().replace(String(t), '');
	return { unitless: !r, value: t, unit: r };
}
function ef(e) {
	if (e == null) return e;
	const { unitless: t } = aE(e);
	return t || typeof e == 'number' ? `${e}px` : e;
}
var _b = (e, t) => (parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1),
	Ip = (e) => Object.fromEntries(Object.entries(e).sort(_b));
function O0(e) {
	const t = Ip(e);
	return Object.assign(Object.values(t), t);
}
function sE(e) {
	const t = Object.keys(Ip(e));
	return new Set(t);
}
var I0 = 0.02;
function B0(e) {
	var t;
	if (!e) return e;
	e = (t = ef(e)) != null ? t : e;
	const r = e.endsWith('px') ? -I0 : -(I0 / 16);
	return typeof e == 'number'
		? `${e + r}`
		: e.replace(/(\d+\.?\d*)/u, (n) => `${parseFloat(n) + r}`);
}
function ii(e, t) {
	const r = ['@media screen'];
	return (
		e && r.push('and', `(min-width: ${ef(e)})`),
		t && r.push('and', `(max-width: ${ef(t)})`),
		r.join(' ')
	);
}
function lE(e) {
	var t;
	if (!e) return null;
	e.base = (t = e.base) != null ? t : '0px';
	const r = O0(e),
		n = Object.entries(e)
			.sort(_b)
			.map(([a, s], l, u) => {
				var c;
				let [, d] = (c = u[l + 1]) != null ? c : [];
				return (
					(d = parseFloat(d) > 0 ? B0(d) : void 0),
					{
						_minW: B0(s),
						breakpoint: a,
						minW: s,
						maxW: d,
						maxWQuery: ii(null, d),
						minWQuery: ii(s),
						minMaxQuery: ii(s, d)
					}
				);
			}),
		o = sE(e),
		i = Array.from(o.values());
	return {
		keys: o,
		normalized: r,
		isResponsive(a) {
			const s = Object.keys(a);
			return s.length > 0 && s.every((l) => o.has(l));
		},
		asObject: Ip(e),
		asArray: O0(e),
		details: n,
		media: [null, ...r.map((a) => ii(a)).slice(1)],
		toArrayValue(a) {
			if (!$t(a)) throw new Error('toArrayValue: value must be an object');
			const s = i.map((l) => {
				var u;
				return (u = a[l]) != null ? u : null;
			});
			for (; iE(s) === null; ) s.pop();
			return s;
		},
		toObjectValue(a) {
			if (!Array.isArray(a))
				throw new Error('toObjectValue: value must be an array');
			return a.reduce((s, l, u) => {
				const c = i[u];
				return c != null && l != null && (s[c] = l), s;
			}, {});
		}
	};
}
var Ie = {
		hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
		focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
		focusVisible: (e, t) => `${e}:focus-visible ${t}`,
		focusWithin: (e, t) => `${e}:focus-within ${t}`,
		active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
		disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
		invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
		checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
		indeterminate: (e, t) =>
			`${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
		readOnly: (e, t) =>
			`${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
		expanded: (e, t) =>
			`${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
		placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`
	},
	Er = (e) => Tb((t) => e(t, '&'), '[role=group]', '[data-group]', '.group'),
	cr = (e) => Tb((t) => e(t, '~ &'), '[data-peer]', '.peer'),
	Tb = (e, ...t) => t.map(e).join(', '),
	su = {
		_hover: '&:hover, &[data-hover]',
		_active: '&:active, &[data-active]',
		_focus: '&:focus, &[data-focus]',
		_highlighted: '&[data-highlighted]',
		_focusWithin: '&:focus-within',
		_focusVisible: '&:focus-visible, &[data-focus-visible]',
		_disabled:
			'&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]',
		_readOnly: '&[aria-readonly=true], &[readonly], &[data-readonly]',
		_before: '&::before',
		_after: '&::after',
		_empty: '&:empty',
		_expanded: '&[aria-expanded=true], &[data-expanded]',
		_checked: '&[aria-checked=true], &[data-checked]',
		_grabbed: '&[aria-grabbed=true], &[data-grabbed]',
		_pressed: '&[aria-pressed=true], &[data-pressed]',
		_invalid: '&[aria-invalid=true], &[data-invalid]',
		_valid: '&[data-valid], &[data-state=valid]',
		_loading: '&[data-loading], &[aria-busy=true]',
		_selected: '&[aria-selected=true], &[data-selected]',
		_hidden: '&[hidden], &[data-hidden]',
		_autofill: '&:-webkit-autofill',
		_even: '&:nth-of-type(even)',
		_odd: '&:nth-of-type(odd)',
		_first: '&:first-of-type',
		_last: '&:last-of-type',
		_notFirst: '&:not(:first-of-type)',
		_notLast: '&:not(:last-of-type)',
		_visited: '&:visited',
		_activeLink: '&[aria-current=page]',
		_activeStep: '&[aria-current=step]',
		_indeterminate:
			'&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]',
		_groupHover: Er(Ie.hover),
		_peerHover: cr(Ie.hover),
		_groupFocus: Er(Ie.focus),
		_peerFocus: cr(Ie.focus),
		_groupFocusVisible: Er(Ie.focusVisible),
		_peerFocusVisible: cr(Ie.focusVisible),
		_groupActive: Er(Ie.active),
		_peerActive: cr(Ie.active),
		_groupDisabled: Er(Ie.disabled),
		_peerDisabled: cr(Ie.disabled),
		_groupInvalid: Er(Ie.invalid),
		_peerInvalid: cr(Ie.invalid),
		_groupChecked: Er(Ie.checked),
		_peerChecked: cr(Ie.checked),
		_groupFocusWithin: Er(Ie.focusWithin),
		_peerFocusWithin: cr(Ie.focusWithin),
		_peerPlaceholderShown: cr(Ie.placeholderShown),
		_placeholder: '&::placeholder',
		_placeholderShown: '&:placeholder-shown',
		_fullScreen: '&:fullscreen',
		_selection: '&::selection',
		_rtl: '[dir=rtl] &, &[dir=rtl]',
		_ltr: '[dir=ltr] &, &[dir=ltr]',
		_mediaDark: '@media (prefers-color-scheme: dark)',
		_mediaReduceMotion: '@media (prefers-reduced-motion: reduce)',
		_dark:
			'.chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]',
		_light:
			'.chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]'
	},
	uE = Object.keys(su);
function D0(e, t) {
	return le(String(e).replace(/\./g, '-'), void 0, t);
}
function cE(e, t) {
	let r = {};
	const n = {};
	for (const [o, i] of Object.entries(e)) {
		const { isSemantic: a, value: s } = i,
			{ variable: l, reference: u } = D0(
				o,
				t == null ? void 0 : t.cssVarPrefix
			);
		if (!a) {
			if (o.startsWith('space')) {
				const f = o.split('.'),
					[p, ...v] = f,
					b = `${p}.-${v.join('.')}`,
					k = mn.negate(s),
					h = mn.negate(u);
				n[b] = { value: k, var: l, varRef: h };
			}
			(r[l] = s), (n[o] = { value: s, var: l, varRef: u });
			continue;
		}
		const c = (f) => {
				const v = [String(o).split('.')[0], f].join('.');
				if (!e[v]) return f;
				const { reference: k } = D0(v, t == null ? void 0 : t.cssVarPrefix);
				return k;
			},
			d = $t(s) ? s : { default: s };
		(r = Zt(
			r,
			Object.entries(d).reduce((f, [p, v]) => {
				var b, k;
				const h = c(v);
				if (p === 'default') return (f[l] = h), f;
				const m = (k = (b = su) == null ? void 0 : b[p]) != null ? k : p;
				return (f[m] = { [l]: h }), f;
			}, {})
		)),
			(n[o] = { value: u, var: l, varRef: u });
	}
	return { cssVars: r, cssMap: n };
}
function dE(e, t = []) {
	const r = Object.assign({}, e);
	for (const n of t) n in r && delete r[n];
	return r;
}
function fE(e, t) {
	const r = {};
	for (const n of t) n in e && (r[n] = e[n]);
	return r;
}
var pE = [
	'colors',
	'borders',
	'borderWidths',
	'borderStyles',
	'fonts',
	'fontSizes',
	'fontWeights',
	'letterSpacings',
	'lineHeights',
	'radii',
	'space',
	'shadows',
	'sizes',
	'zIndices',
	'transition',
	'blur'
];
function hE(e) {
	return fE(e, pE);
}
function mE(e) {
	return e.semanticTokens;
}
function gE(e) {
	const { __cssMap: t, __cssVars: r, __breakpoints: n, ...o } = e;
	return o;
}
function vE({ tokens: e, semanticTokens: t }) {
	var r, n;
	const o = Object.entries((r = tf(e)) != null ? r : {}).map(([a, s]) => [
			a,
			{ isSemantic: !1, value: s }
		]),
		i = Object.entries((n = tf(t, 1)) != null ? n : {}).map(([a, s]) => [
			a,
			{ isSemantic: !0, value: s }
		]);
	return Object.fromEntries([...o, ...i]);
}
function tf(e, t = 1 / 0) {
	return (!$t(e) && !Array.isArray(e)) || !t
		? e
		: Object.entries(e).reduce(
				(r, [n, o]) => (
					$t(o) || Array.isArray(o)
						? Object.entries(tf(o, t - 1)).forEach(([i, a]) => {
								r[`${n}.${i}`] = a;
						  })
						: (r[n] = o),
					r
				),
				{}
		  );
}
function yE(e) {
	var t;
	const r = gE(e),
		n = hE(r),
		o = mE(r),
		i = vE({ tokens: n, semanticTokens: o }),
		a = (t = r.config) == null ? void 0 : t.cssVarPrefix,
		{ cssMap: s, cssVars: l } = cE(i, { cssVarPrefix: a });
	return (
		Object.assign(r, {
			__cssVars: {
				...{
					'--chakra-ring-inset': 'var(--chakra-empty,/*!*/ /*!*/)',
					'--chakra-ring-offset-width': '0px',
					'--chakra-ring-offset-color': '#fff',
					'--chakra-ring-color': 'rgba(66, 153, 225, 0.6)',
					'--chakra-ring-offset-shadow': '0 0 #0000',
					'--chakra-ring-shadow': '0 0 #0000',
					'--chakra-space-x-reverse': '0',
					'--chakra-space-y-reverse': '0'
				},
				...l
			},
			__cssMap: s,
			__breakpoints: lE(r.breakpoints)
		}),
		r
	);
}
var Bp = Zt(
	{},
	Cs,
	J,
	IT,
	ll,
	Ct,
	BT,
	GT,
	DT,
	kb,
	HT,
	yi,
	Zd,
	pe,
	QT,
	XT,
	qT,
	KT,
	FT,
	YT
);
Object.assign({}, pe, Ct, ll, kb, yi);
var bE = [...Object.keys(Bp), ...uE],
	SE = { ...Bp, ...su },
	xE = (e) => e in SE,
	wE = (e) => (t) => {
		if (!t.__breakpoints) return e;
		const { isResponsive: r, toArrayValue: n, media: o } = t.__breakpoints,
			i = {};
		for (const a in e) {
			let s = Fr(e[a], t);
			if (s == null) continue;
			if (((s = $t(s) && r(s) ? n(s) : s), !Array.isArray(s))) {
				i[a] = s;
				continue;
			}
			const l = s.slice(0, o.length).length;
			for (let u = 0; u < l; u += 1) {
				const c = o == null ? void 0 : o[u];
				if (!c) {
					i[a] = s[u];
					continue;
				}
				(i[c] = i[c] || {}), s[u] != null && (i[c][a] = s[u]);
			}
		}
		return i;
	};
function kE(e) {
	const t = [];
	let r = '',
		n = !1;
	for (let o = 0; o < e.length; o++) {
		const i = e[o];
		i === '('
			? ((n = !0), (r += i))
			: i === ')'
			? ((n = !1), (r += i))
			: i === ',' && !n
			? (t.push(r), (r = ''))
			: (r += i);
	}
	return (r = r.trim()), r && t.push(r), t;
}
function CE(e) {
	return /^var\(--.+\)$/.test(e);
}
var _E = (e, t) => e.startsWith('--') && typeof t == 'string' && !CE(t),
	TE = (e, t) => {
		var r, n;
		if (t == null) return t;
		const o = (l) => {
				var u, c;
				return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null
					? void 0
					: c.varRef;
			},
			i = (l) => {
				var u;
				return (u = o(l)) != null ? u : l;
			},
			[a, s] = kE(t);
		return (t = (n = (r = o(a)) != null ? r : i(s)) != null ? n : i(t)), t;
	};
function EE(e) {
	const { configs: t = {}, pseudos: r = {}, theme: n } = e,
		o = (i, a = !1) => {
			var s, l, u;
			const c = Fr(i, n),
				d = wE(c)(n);
			let f = {};
			for (let p in d) {
				const v = d[p];
				let b = Fr(v, n);
				p in r && (p = r[p]), _E(p, b) && (b = TE(n, b));
				let k = t[p];
				if ((k === !0 && (k = { property: p }), $t(b))) {
					(f[p] = (s = f[p]) != null ? s : {}), (f[p] = Zt({}, f[p], o(b, !0)));
					continue;
				}
				let h =
					(u =
						(l = k == null ? void 0 : k.transform) == null
							? void 0
							: l.call(k, b, n, c)) != null
						? u
						: b;
				h = k != null && k.processResult ? o(h, !0) : h;
				const m = Fr(k == null ? void 0 : k.property, n);
				if (!a && k != null && k.static) {
					const g = Fr(k.static, n);
					f = Zt({}, f, g);
				}
				if (m && Array.isArray(m)) {
					for (const g of m) f[g] = h;
					continue;
				}
				if (m) {
					m === '&' && $t(h) ? (f = Zt({}, f, h)) : (f[m] = h);
					continue;
				}
				if ($t(h)) {
					f = Zt({}, f, h);
					continue;
				}
				f[p] = h;
			}
			return f;
		};
	return o;
}
var Eb = (e) => (t) => EE({ theme: t, pseudos: su, configs: Bp })(e);
function me(e) {
	return {
		definePartsStyle(t) {
			return t;
		},
		defineMultiStyleConfig(t) {
			return { parts: e, ...t };
		}
	};
}
function PE(e, t) {
	if (Array.isArray(e)) return e;
	if ($t(e)) return t(e);
	if (e != null) return [e];
}
function $E(e, t) {
	for (let r = t + 1; r < e.length; r++) if (e[r] != null) return r;
	return -1;
}
function RE(e) {
	const t = e.__breakpoints;
	return function (n, o, i, a) {
		var s, l;
		if (!t) return;
		const u = {},
			c = PE(i, t.toArrayValue);
		if (!c) return u;
		const d = c.length,
			f = d === 1,
			p = !!n.parts;
		for (let v = 0; v < d; v++) {
			const b = t.details[v],
				k = t.details[$E(c, v)],
				h = ii(b.minW, k == null ? void 0 : k._minW),
				m = Fr((s = n[o]) == null ? void 0 : s[c[v]], a);
			if (m) {
				if (p) {
					(l = n.parts) == null ||
						l.forEach((g) => {
							Zt(u, { [g]: f ? m[g] : { [h]: m[g] } });
						});
					continue;
				}
				if (!p) {
					f ? Zt(u, m) : (u[h] = m);
					continue;
				}
				u[h] = m;
			}
		}
		return u;
	};
}
function AE(e) {
	return (t) => {
		var r;
		const { variant: n, size: o, theme: i } = t,
			a = RE(i);
		return Zt(
			{},
			Fr((r = e.baseStyle) != null ? r : {}, t),
			a(e, 'sizes', o, t),
			a(e, 'variants', n, t)
		);
	};
}
function ga(e) {
	return dE(e, ['styleConfig', 'size', 'variant', 'colorScheme']);
}
var zE = {
		hide: -1,
		auto: 'auto',
		base: 0,
		docked: 10,
		dropdown: 1e3,
		sticky: 1100,
		banner: 1200,
		overlay: 1300,
		modal: 1400,
		popover: 1500,
		skipLink: 1600,
		toast: 1700,
		tooltip: 1800
	},
	ME = zE,
	LE = {
		base: '0em',
		sm: '30em',
		md: '48em',
		lg: '62em',
		xl: '80em',
		'2xl': '96em'
	},
	OE = LE,
	IE = {
		transparent: 'transparent',
		current: 'currentColor',
		black: '#000000',
		white: '#FFFFFF',
		whiteAlpha: {
			50: 'rgba(255, 255, 255, 0.04)',
			100: 'rgba(255, 255, 255, 0.06)',
			200: 'rgba(255, 255, 255, 0.08)',
			300: 'rgba(255, 255, 255, 0.16)',
			400: 'rgba(255, 255, 255, 0.24)',
			500: 'rgba(255, 255, 255, 0.36)',
			600: 'rgba(255, 255, 255, 0.48)',
			700: 'rgba(255, 255, 255, 0.64)',
			800: 'rgba(255, 255, 255, 0.80)',
			900: 'rgba(255, 255, 255, 0.92)'
		},
		blackAlpha: {
			50: 'rgba(0, 0, 0, 0.04)',
			100: 'rgba(0, 0, 0, 0.06)',
			200: 'rgba(0, 0, 0, 0.08)',
			300: 'rgba(0, 0, 0, 0.16)',
			400: 'rgba(0, 0, 0, 0.24)',
			500: 'rgba(0, 0, 0, 0.36)',
			600: 'rgba(0, 0, 0, 0.48)',
			700: 'rgba(0, 0, 0, 0.64)',
			800: 'rgba(0, 0, 0, 0.80)',
			900: 'rgba(0, 0, 0, 0.92)'
		},
		gray: {
			50: '#F7FAFC',
			100: '#EDF2F7',
			200: '#E2E8F0',
			300: '#CBD5E0',
			400: '#A0AEC0',
			500: '#718096',
			600: '#4A5568',
			700: '#2D3748',
			800: '#1A202C',
			900: '#171923'
		},
		red: {
			50: '#FFF5F5',
			100: '#FED7D7',
			200: '#FEB2B2',
			300: '#FC8181',
			400: '#F56565',
			500: '#E53E3E',
			600: '#C53030',
			700: '#9B2C2C',
			800: '#822727',
			900: '#63171B'
		},
		orange: {
			50: '#FFFAF0',
			100: '#FEEBC8',
			200: '#FBD38D',
			300: '#F6AD55',
			400: '#ED8936',
			500: '#DD6B20',
			600: '#C05621',
			700: '#9C4221',
			800: '#7B341E',
			900: '#652B19'
		},
		yellow: {
			50: '#FFFFF0',
			100: '#FEFCBF',
			200: '#FAF089',
			300: '#F6E05E',
			400: '#ECC94B',
			500: '#D69E2E',
			600: '#B7791F',
			700: '#975A16',
			800: '#744210',
			900: '#5F370E'
		},
		green: {
			50: '#F0FFF4',
			100: '#C6F6D5',
			200: '#9AE6B4',
			300: '#68D391',
			400: '#48BB78',
			500: '#38A169',
			600: '#2F855A',
			700: '#276749',
			800: '#22543D',
			900: '#1C4532'
		},
		teal: {
			50: '#E6FFFA',
			100: '#B2F5EA',
			200: '#81E6D9',
			300: '#4FD1C5',
			400: '#38B2AC',
			500: '#319795',
			600: '#2C7A7B',
			700: '#285E61',
			800: '#234E52',
			900: '#1D4044'
		},
		blue: {
			50: '#ebf8ff',
			100: '#bee3f8',
			200: '#90cdf4',
			300: '#63b3ed',
			400: '#4299e1',
			500: '#3182ce',
			600: '#2b6cb0',
			700: '#2c5282',
			800: '#2a4365',
			900: '#1A365D'
		},
		cyan: {
			50: '#EDFDFD',
			100: '#C4F1F9',
			200: '#9DECF9',
			300: '#76E4F7',
			400: '#0BC5EA',
			500: '#00B5D8',
			600: '#00A3C4',
			700: '#0987A0',
			800: '#086F83',
			900: '#065666'
		},
		purple: {
			50: '#FAF5FF',
			100: '#E9D8FD',
			200: '#D6BCFA',
			300: '#B794F4',
			400: '#9F7AEA',
			500: '#805AD5',
			600: '#6B46C1',
			700: '#553C9A',
			800: '#44337A',
			900: '#322659'
		},
		pink: {
			50: '#FFF5F7',
			100: '#FED7E2',
			200: '#FBB6CE',
			300: '#F687B3',
			400: '#ED64A6',
			500: '#D53F8C',
			600: '#B83280',
			700: '#97266D',
			800: '#702459',
			900: '#521B41'
		},
		linkedin: {
			50: '#E8F4F9',
			100: '#CFEDFB',
			200: '#9BDAF3',
			300: '#68C7EC',
			400: '#34B3E4',
			500: '#00A0DC',
			600: '#008CC9',
			700: '#0077B5',
			800: '#005E93',
			900: '#004471'
		},
		facebook: {
			50: '#E8F4F9',
			100: '#D9DEE9',
			200: '#B7C2DA',
			300: '#6482C0',
			400: '#4267B2',
			500: '#385898',
			600: '#314E89',
			700: '#29487D',
			800: '#223B67',
			900: '#1E355B'
		},
		messenger: {
			50: '#D0E6FF',
			100: '#B9DAFF',
			200: '#A2CDFF',
			300: '#7AB8FF',
			400: '#2E90FF',
			500: '#0078FF',
			600: '#0063D1',
			700: '#0052AC',
			800: '#003C7E',
			900: '#002C5C'
		},
		whatsapp: {
			50: '#dffeec',
			100: '#b9f5d0',
			200: '#90edb3',
			300: '#65e495',
			400: '#3cdd78',
			500: '#22c35e',
			600: '#179848',
			700: '#0c6c33',
			800: '#01421c',
			900: '#001803'
		},
		twitter: {
			50: '#E5F4FD',
			100: '#C8E9FB',
			200: '#A8DCFA',
			300: '#83CDF7',
			400: '#57BBF5',
			500: '#1DA1F2',
			600: '#1A94DA',
			700: '#1681BF',
			800: '#136B9E',
			900: '#0D4D71'
		},
		telegram: {
			50: '#E3F2F9',
			100: '#C5E4F3',
			200: '#A2D4EC',
			300: '#7AC1E4',
			400: '#47A9DA',
			500: '#0088CC',
			600: '#007AB8',
			700: '#006BA1',
			800: '#005885',
			900: '#003F5E'
		}
	},
	BE = IE,
	DE = {
		none: '0',
		sm: '0.125rem',
		base: '0.25rem',
		md: '0.375rem',
		lg: '0.5rem',
		xl: '0.75rem',
		'2xl': '1rem',
		'3xl': '1.5rem',
		full: '9999px'
	},
	FE = DE,
	NE = {
		xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
		sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
		base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
		md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
		lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
		xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
		'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
		outline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
		inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
		none: 'none',
		'dark-lg':
			'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px'
	},
	VE = NE,
	jE = {
		common:
			'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
		colors: 'background-color, border-color, color, fill, stroke',
		dimensions: 'width, height',
		position: 'left, right, top, bottom',
		background: 'background-color, background-image, background-position'
	},
	UE = {
		'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
		'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
		'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
	},
	WE = {
		'ultra-fast': '50ms',
		faster: '100ms',
		fast: '150ms',
		normal: '200ms',
		slow: '300ms',
		slower: '400ms',
		'ultra-slow': '500ms'
	},
	HE = { property: jE, easing: UE, duration: WE },
	GE = HE,
	qE = {
		none: 0,
		sm: '4px',
		base: '8px',
		md: '12px',
		lg: '16px',
		xl: '24px',
		'2xl': '40px',
		'3xl': '64px'
	},
	KE = qE,
	YE = {
		none: 0,
		'1px': '1px solid',
		'2px': '2px solid',
		'4px': '4px solid',
		'8px': '8px solid'
	},
	XE = YE,
	QE = {
		letterSpacings: {
			tighter: '-0.05em',
			tight: '-0.025em',
			normal: '0',
			wide: '0.025em',
			wider: '0.05em',
			widest: '0.1em'
		},
		lineHeights: {
			normal: 'normal',
			none: 1,
			shorter: 1.25,
			short: 1.375,
			base: 1.5,
			tall: 1.625,
			taller: '2',
			3: '.75rem',
			4: '1rem',
			5: '1.25rem',
			6: '1.5rem',
			7: '1.75rem',
			8: '2rem',
			9: '2.25rem',
			10: '2.5rem'
		},
		fontWeights: {
			hairline: 100,
			thin: 200,
			light: 300,
			normal: 400,
			medium: 500,
			semibold: 600,
			bold: 700,
			extrabold: 800,
			black: 900
		},
		fonts: {
			heading:
				'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
			body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
			mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
		},
		fontSizes: {
			'3xs': '0.45rem',
			'2xs': '0.625rem',
			xs: '0.75rem',
			sm: '0.875rem',
			md: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '3.75rem',
			'7xl': '4.5rem',
			'8xl': '6rem',
			'9xl': '8rem'
		}
	},
	Pb = QE,
	$b = {
		px: '1px',
		0.5: '0.125rem',
		1: '0.25rem',
		1.5: '0.375rem',
		2: '0.5rem',
		2.5: '0.625rem',
		3: '0.75rem',
		3.5: '0.875rem',
		4: '1rem',
		5: '1.25rem',
		6: '1.5rem',
		7: '1.75rem',
		8: '2rem',
		9: '2.25rem',
		10: '2.5rem',
		12: '3rem',
		14: '3.5rem',
		16: '4rem',
		20: '5rem',
		24: '6rem',
		28: '7rem',
		32: '8rem',
		36: '9rem',
		40: '10rem',
		44: '11rem',
		48: '12rem',
		52: '13rem',
		56: '14rem',
		60: '15rem',
		64: '16rem',
		72: '18rem',
		80: '20rem',
		96: '24rem'
	},
	ZE = {
		max: 'max-content',
		min: 'min-content',
		full: '100%',
		'3xs': '14rem',
		'2xs': '16rem',
		xs: '20rem',
		sm: '24rem',
		md: '28rem',
		lg: '32rem',
		xl: '36rem',
		'2xl': '42rem',
		'3xl': '48rem',
		'4xl': '56rem',
		'5xl': '64rem',
		'6xl': '72rem',
		'7xl': '80rem',
		'8xl': '90rem',
		prose: '60ch'
	},
	JE = { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
	eP = { ...$b, ...ZE, container: JE },
	Rb = eP,
	Ab = {
		breakpoints: OE,
		zIndices: ME,
		radii: FE,
		blur: KE,
		colors: BE,
		...Pb,
		sizes: Rb,
		shadows: VE,
		space: $b,
		borders: XE,
		transition: GE
	};
function oe(e, t = {}) {
	let r = !1;
	function n() {
		if (!r) {
			r = !0;
			return;
		}
		throw new Error(
			'[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?'
		);
	}
	function o(...c) {
		n();
		for (const d of c) t[d] = l(d);
		return oe(e, t);
	}
	function i(...c) {
		for (const d of c) d in t || (t[d] = l(d));
		return oe(e, t);
	}
	function a() {
		return Object.fromEntries(
			Object.entries(t).map(([d, f]) => [d, f.selector])
		);
	}
	function s() {
		return Object.fromEntries(
			Object.entries(t).map(([d, f]) => [d, f.className])
		);
	}
	function l(c) {
		const p = `chakra-${(['container', 'root'].includes(c ?? '') ? [e] : [e, c])
			.filter(Boolean)
			.join('__')}`;
		return { className: p, selector: `.${p}`, toString: () => c };
	}
	return {
		parts: o,
		toPart: l,
		extend: i,
		selectors: a,
		classnames: s,
		get keys() {
			return Object.keys(t);
		},
		__type: {}
	};
}
var tP = oe('accordion')
		.parts('root', 'container', 'button', 'panel')
		.extend('icon'),
	rP = oe('alert')
		.parts('title', 'description', 'container')
		.extend('icon', 'spinner'),
	nP = oe('avatar')
		.parts('label', 'badge', 'container')
		.extend('excessLabel', 'group'),
	oP = oe('breadcrumb').parts('link', 'item', 'container').extend('separator');
oe('button').parts();
var iP = oe('checkbox').parts('control', 'icon', 'container').extend('label');
oe('progress').parts('track', 'filledTrack').extend('label');
var aP = oe('drawer')
		.parts('overlay', 'dialogContainer', 'dialog')
		.extend('header', 'closeButton', 'body', 'footer'),
	sP = oe('editable').parts('preview', 'input', 'textarea'),
	lP = oe('form').parts('container', 'requiredIndicator', 'helperText'),
	uP = oe('formError').parts('text', 'icon'),
	cP = oe('input').parts('addon', 'field', 'element'),
	dP = oe('list').parts('container', 'item', 'icon'),
	fP = oe('menu')
		.parts('button', 'list', 'item')
		.extend('groupTitle', 'command', 'divider'),
	pP = oe('modal')
		.parts('overlay', 'dialogContainer', 'dialog')
		.extend('header', 'closeButton', 'body', 'footer'),
	hP = oe('numberinput').parts('root', 'field', 'stepperGroup', 'stepper');
oe('pininput').parts('field');
var mP = oe('popover')
		.parts('content', 'header', 'body', 'footer')
		.extend('popper', 'arrow', 'closeButton'),
	gP = oe('progress').parts('label', 'filledTrack', 'track'),
	vP = oe('radio').parts('container', 'control', 'label'),
	yP = oe('select').parts('field', 'icon'),
	bP = oe('slider').parts('container', 'track', 'thumb', 'filledTrack', 'mark'),
	SP = oe('stat').parts('container', 'label', 'helpText', 'number', 'icon'),
	xP = oe('switch').parts('container', 'track', 'thumb'),
	wP = oe('table').parts(
		'table',
		'thead',
		'tbody',
		'tr',
		'th',
		'td',
		'tfoot',
		'caption'
	),
	kP = oe('tabs').parts(
		'root',
		'tab',
		'tablist',
		'tabpanel',
		'tabpanels',
		'indicator'
	),
	CP = oe('tag').parts('container', 'label', 'closeButton'),
	_P = oe('card').parts('container', 'header', 'body', 'footer');
function Sn(e, t, r) {
	return Math.min(Math.max(e, r), t);
}
class TP extends Error {
	constructor(t) {
		super(`Failed to parse color: "${t}"`);
	}
}
var ai = TP;
function Dp(e) {
	if (typeof e != 'string') throw new ai(e);
	if (e.trim().toLowerCase() === 'transparent') return [0, 0, 0, 0];
	let t = e.trim();
	t = LP.test(e) ? $P(e) : e;
	const r = RP.exec(t);
	if (r) {
		const a = Array.from(r).slice(1);
		return [
			...a.slice(0, 3).map((s) => parseInt(ta(s, 2), 16)),
			parseInt(ta(a[3] || 'f', 2), 16) / 255
		];
	}
	const n = AP.exec(t);
	if (n) {
		const a = Array.from(n).slice(1);
		return [
			...a.slice(0, 3).map((s) => parseInt(s, 16)),
			parseInt(a[3] || 'ff', 16) / 255
		];
	}
	const o = zP.exec(t);
	if (o) {
		const a = Array.from(o).slice(1);
		return [
			...a.slice(0, 3).map((s) => parseInt(s, 10)),
			parseFloat(a[3] || '1')
		];
	}
	const i = MP.exec(t);
	if (i) {
		const [a, s, l, u] = Array.from(i).slice(1).map(parseFloat);
		if (Sn(0, 100, s) !== s) throw new ai(e);
		if (Sn(0, 100, l) !== l) throw new ai(e);
		return [...OP(a, s, l), u || 1];
	}
	throw new ai(e);
}
function EP(e) {
	let t = 5381,
		r = e.length;
	for (; r; ) t = (t * 33) ^ e.charCodeAt(--r);
	return (t >>> 0) % 2341;
}
const F0 = (e) => parseInt(e.replace(/_/g, ''), 36),
	PP =
		'1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm'
			.split(' ')
			.reduce((e, t) => {
				const r = F0(t.substring(0, 3)),
					n = F0(t.substring(3)).toString(16);
				let o = '';
				for (let i = 0; i < 6 - n.length; i++) o += '0';
				return (e[r] = `${o}${n}`), e;
			}, {});
function $P(e) {
	const t = e.toLowerCase().trim(),
		r = PP[EP(t)];
	if (!r) throw new ai(e);
	return `#${r}`;
}
const ta = (e, t) =>
		Array.from(Array(t))
			.map(() => e)
			.join(''),
	RP = new RegExp(`^#${ta('([a-f0-9])', 3)}([a-f0-9])?$`, 'i'),
	AP = new RegExp(`^#${ta('([a-f0-9]{2})', 3)}([a-f0-9]{2})?$`, 'i'),
	zP = new RegExp(
		`^rgba?\\(\\s*(\\d+)\\s*${ta(
			',\\s*(\\d+)\\s*',
			2
		)}(?:,\\s*([\\d.]+))?\\s*\\)$`,
		'i'
	),
	MP =
		/^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
	LP = /^[a-z]+$/i,
	N0 = (e) => Math.round(e * 255),
	OP = (e, t, r) => {
		let n = r / 100;
		if (t === 0) return [n, n, n].map(N0);
		const o = (((e % 360) + 360) % 360) / 60,
			i = (1 - Math.abs(2 * n - 1)) * (t / 100),
			a = i * (1 - Math.abs((o % 2) - 1));
		let s = 0,
			l = 0,
			u = 0;
		o >= 0 && o < 1
			? ((s = i), (l = a))
			: o >= 1 && o < 2
			? ((s = a), (l = i))
			: o >= 2 && o < 3
			? ((l = i), (u = a))
			: o >= 3 && o < 4
			? ((l = a), (u = i))
			: o >= 4 && o < 5
			? ((s = a), (u = i))
			: o >= 5 && o < 6 && ((s = i), (u = a));
		const c = n - i / 2,
			d = s + c,
			f = l + c,
			p = u + c;
		return [d, f, p].map(N0);
	};
function IP(e, t, r, n) {
	return `rgba(${Sn(0, 255, e).toFixed()}, ${Sn(0, 255, t).toFixed()}, ${Sn(
		0,
		255,
		r
	).toFixed()}, ${parseFloat(Sn(0, 1, n).toFixed(3))})`;
}
function BP(e, t) {
	const [r, n, o, i] = Dp(e);
	return IP(r, n, o, i - t);
}
function DP(e) {
	const [t, r, n, o] = Dp(e);
	let i = (a) => {
		const s = Sn(0, 255, a).toString(16);
		return s.length === 1 ? `0${s}` : s;
	};
	return `#${i(t)}${i(r)}${i(n)}${o < 1 ? i(Math.round(o * 255)) : ''}`;
}
function FP(e, t, r, n, o) {
	for (t = t.split ? t.split('.') : t, n = 0; n < t.length; n++)
		e = e ? e[t[n]] : o;
	return e === o ? r : e;
}
var NP = (e) => Object.keys(e).length === 0,
	Ye = (e, t, r) => {
		const n = FP(e, `colors.${t}`, t);
		try {
			return DP(n), n;
		} catch {
			return r ?? '#000000';
		}
	},
	VP = (e) => {
		const [t, r, n] = Dp(e);
		return (t * 299 + r * 587 + n * 114) / 1e3;
	},
	jP = (e) => (t) => {
		const r = Ye(t, e);
		return VP(r) < 128 ? 'dark' : 'light';
	},
	UP = (e) => (t) => jP(e)(t) === 'dark',
	Po = (e, t) => (r) => {
		const n = Ye(r, e);
		return BP(n, 1 - t);
	};
function V0(e = '1rem', t = 'rgba(255, 255, 255, 0.15)') {
	return {
		backgroundImage: `linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,
		backgroundSize: `${e} ${e}`
	};
}
var WP = () =>
	`#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padEnd(6, '0')}`;
function HP(e) {
	const t = WP();
	return !e || NP(e)
		? t
		: e.string && e.colors
		? qP(e.string, e.colors)
		: e.string && !e.colors
		? GP(e.string)
		: e.colors && !e.string
		? KP(e.colors)
		: t;
}
function GP(e) {
	let t = 0;
	if (e.length === 0) return t.toString();
	for (let n = 0; n < e.length; n += 1)
		(t = e.charCodeAt(n) + ((t << 5) - t)), (t = t & t);
	let r = '#';
	for (let n = 0; n < 3; n += 1) {
		const o = (t >> (n * 8)) & 255;
		r += `00${o.toString(16)}`.substr(-2);
	}
	return r;
}
function qP(e, t) {
	let r = 0;
	if (e.length === 0) return t[0];
	for (let n = 0; n < e.length; n += 1)
		(r = e.charCodeAt(n) + ((r << 5) - r)), (r = r & r);
	return (r = ((r % t.length) + t.length) % t.length), t[r];
}
function KP(e) {
	return e[Math.floor(Math.random() * e.length)];
}
function U(e, t) {
	return (r) => (r.colorMode === 'dark' ? t : e);
}
function Fp(e) {
	const { orientation: t, vertical: r, horizontal: n } = e;
	return t ? (t === 'vertical' ? r : n) : {};
}
function zb(e) {
	return $t(e) && e.reference ? e.reference : String(e);
}
var lu = (e, ...t) => t.map(zb).join(` ${e} `).replace(/calc/g, ''),
	j0 = (...e) => `calc(${lu('+', ...e)})`,
	U0 = (...e) => `calc(${lu('-', ...e)})`,
	rf = (...e) => `calc(${lu('*', ...e)})`,
	W0 = (...e) => `calc(${lu('/', ...e)})`,
	H0 = (e) => {
		const t = zb(e);
		return t != null && !Number.isNaN(parseFloat(t))
			? String(t).startsWith('-')
				? String(t).slice(1)
				: `-${t}`
			: rf(t, -1);
	},
	hr = Object.assign(
		(e) => ({
			add: (...t) => hr(j0(e, ...t)),
			subtract: (...t) => hr(U0(e, ...t)),
			multiply: (...t) => hr(rf(e, ...t)),
			divide: (...t) => hr(W0(e, ...t)),
			negate: () => hr(H0(e)),
			toString: () => e.toString()
		}),
		{ add: j0, subtract: U0, multiply: rf, divide: W0, negate: H0 }
	);
function YP(e) {
	return !Number.isInteger(parseFloat(e.toString()));
}
function XP(e, t = '-') {
	return e.replace(/\s+/g, t);
}
function Mb(e) {
	const t = XP(e.toString());
	return t.includes('\\.') ? e : YP(e) ? t.replace('.', '\\.') : e;
}
function QP(e, t = '') {
	return [t, Mb(e)].filter(Boolean).join('-');
}
function ZP(e, t) {
	return `var(${Mb(e)}${t ? `, ${t}` : ''})`;
}
function JP(e, t = '') {
	return `--${QP(e, t)}`;
}
function ze(e, t) {
	const r = JP(e, t == null ? void 0 : t.prefix);
	return { variable: r, reference: ZP(r, e5(t == null ? void 0 : t.fallback)) };
}
function e5(e) {
	return typeof e == 'string' ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: t5, definePartsStyle: _s } = me(xP.keys),
	bi = ze('switch-track-width'),
	Cn = ze('switch-track-height'),
	Cc = ze('switch-track-diff'),
	r5 = hr.subtract(bi, Cn),
	nf = ze('switch-thumb-x'),
	Xo = ze('switch-bg'),
	n5 = (e) => {
		const { colorScheme: t } = e;
		return {
			borderRadius: 'full',
			p: '0.5',
			width: [bi.reference],
			height: [Cn.reference],
			transitionProperty: 'common',
			transitionDuration: 'fast',
			[Xo.variable]: 'colors.gray.300',
			_dark: { [Xo.variable]: 'colors.whiteAlpha.400' },
			_focusVisible: { boxShadow: 'outline' },
			_disabled: { opacity: 0.4, cursor: 'not-allowed' },
			_checked: {
				[Xo.variable]: `colors.${t}.500`,
				_dark: { [Xo.variable]: `colors.${t}.200` }
			},
			bg: Xo.reference
		};
	},
	o5 = {
		bg: 'white',
		transitionProperty: 'transform',
		transitionDuration: 'normal',
		borderRadius: 'inherit',
		width: [Cn.reference],
		height: [Cn.reference],
		_checked: { transform: `translateX(${nf.reference})` }
	},
	i5 = _s((e) => ({
		container: {
			[Cc.variable]: r5,
			[nf.variable]: Cc.reference,
			_rtl: { [nf.variable]: hr(Cc).negate().toString() }
		},
		track: n5(e),
		thumb: o5
	})),
	a5 = {
		sm: _s({
			container: { [bi.variable]: '1.375rem', [Cn.variable]: 'sizes.3' }
		}),
		md: _s({
			container: { [bi.variable]: '1.875rem', [Cn.variable]: 'sizes.4' }
		}),
		lg: _s({
			container: { [bi.variable]: '2.875rem', [Cn.variable]: 'sizes.6' }
		})
	},
	s5 = t5({
		baseStyle: i5,
		sizes: a5,
		defaultProps: { size: 'md', colorScheme: 'blue' }
	}),
	{ defineMultiStyleConfig: l5, definePartsStyle: po } = me(wP.keys),
	u5 = po({
		table: {
			fontVariantNumeric: 'lining-nums tabular-nums',
			borderCollapse: 'collapse',
			width: 'full'
		},
		th: {
			fontFamily: 'heading',
			fontWeight: 'bold',
			textTransform: 'uppercase',
			letterSpacing: 'wider',
			textAlign: 'start'
		},
		td: { textAlign: 'start' },
		caption: {
			mt: 4,
			fontFamily: 'heading',
			textAlign: 'center',
			fontWeight: 'medium'
		}
	}),
	ul = { '&[data-is-numeric=true]': { textAlign: 'end' } },
	c5 = po((e) => {
		const { colorScheme: t } = e;
		return {
			th: {
				color: U('gray.600', 'gray.400')(e),
				borderBottom: '1px',
				borderColor: U(`${t}.100`, `${t}.700`)(e),
				...ul
			},
			td: {
				borderBottom: '1px',
				borderColor: U(`${t}.100`, `${t}.700`)(e),
				...ul
			},
			caption: { color: U('gray.600', 'gray.100')(e) },
			tfoot: { tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } } }
		};
	}),
	d5 = po((e) => {
		const { colorScheme: t } = e;
		return {
			th: {
				color: U('gray.600', 'gray.400')(e),
				borderBottom: '1px',
				borderColor: U(`${t}.100`, `${t}.700`)(e),
				...ul
			},
			td: {
				borderBottom: '1px',
				borderColor: U(`${t}.100`, `${t}.700`)(e),
				...ul
			},
			caption: { color: U('gray.600', 'gray.100')(e) },
			tbody: {
				tr: {
					'&:nth-of-type(odd)': {
						'th, td': {
							borderBottomWidth: '1px',
							borderColor: U(`${t}.100`, `${t}.700`)(e)
						},
						td: { background: U(`${t}.100`, `${t}.700`)(e) }
					}
				}
			},
			tfoot: { tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } } }
		};
	}),
	f5 = { simple: c5, striped: d5, unstyled: {} },
	p5 = {
		sm: po({
			th: { px: '4', py: '1', lineHeight: '4', fontSize: 'xs' },
			td: { px: '4', py: '2', fontSize: 'sm', lineHeight: '4' },
			caption: { px: '4', py: '2', fontSize: 'xs' }
		}),
		md: po({
			th: { px: '6', py: '3', lineHeight: '4', fontSize: 'xs' },
			td: { px: '6', py: '4', lineHeight: '5' },
			caption: { px: '6', py: '2', fontSize: 'sm' }
		}),
		lg: po({
			th: { px: '8', py: '4', lineHeight: '5', fontSize: 'sm' },
			td: { px: '8', py: '5', lineHeight: '6' },
			caption: { px: '6', py: '2', fontSize: 'md' }
		})
	},
	h5 = l5({
		baseStyle: u5,
		variants: f5,
		sizes: p5,
		defaultProps: { variant: 'simple', size: 'md', colorScheme: 'gray' }
	}),
	tt = le('tabs-color'),
	Ft = le('tabs-bg'),
	Qa = le('tabs-border-color'),
	{ defineMultiStyleConfig: m5, definePartsStyle: nr } = me(kP.keys),
	g5 = (e) => {
		const { orientation: t } = e;
		return { display: t === 'vertical' ? 'flex' : 'block' };
	},
	v5 = (e) => {
		const { isFitted: t } = e;
		return {
			flex: t ? 1 : void 0,
			transitionProperty: 'common',
			transitionDuration: 'normal',
			_focusVisible: { zIndex: 1, boxShadow: 'outline' },
			_disabled: { cursor: 'not-allowed', opacity: 0.4 }
		};
	},
	y5 = (e) => {
		const { align: t = 'start', orientation: r } = e;
		return {
			justifyContent: {
				end: 'flex-end',
				center: 'center',
				start: 'flex-start'
			}[t],
			flexDirection: r === 'vertical' ? 'column' : 'row'
		};
	},
	b5 = { p: 4 },
	S5 = nr((e) => ({ root: g5(e), tab: v5(e), tablist: y5(e), tabpanel: b5 })),
	x5 = {
		sm: nr({ tab: { py: 1, px: 4, fontSize: 'sm' } }),
		md: nr({ tab: { fontSize: 'md', py: 2, px: 4 } }),
		lg: nr({ tab: { fontSize: 'lg', py: 3, px: 4 } })
	},
	w5 = nr((e) => {
		const { colorScheme: t, orientation: r } = e,
			n = r === 'vertical',
			o = r === 'vertical' ? 'borderStart' : 'borderBottom',
			i = n ? 'marginStart' : 'marginBottom';
		return {
			tablist: { [o]: '2px solid', borderColor: 'inherit' },
			tab: {
				[o]: '2px solid',
				borderColor: 'transparent',
				[i]: '-2px',
				_selected: {
					[tt.variable]: `colors.${t}.600`,
					_dark: { [tt.variable]: `colors.${t}.300` },
					borderColor: 'currentColor'
				},
				_active: {
					[Ft.variable]: 'colors.gray.200',
					_dark: { [Ft.variable]: 'colors.whiteAlpha.300' }
				},
				_disabled: { _active: { bg: 'none' } },
				color: tt.reference,
				bg: Ft.reference
			}
		};
	}),
	k5 = nr((e) => {
		const { colorScheme: t } = e;
		return {
			tab: {
				borderTopRadius: 'md',
				border: '1px solid',
				borderColor: 'transparent',
				mb: '-1px',
				[Qa.variable]: 'transparent',
				_selected: {
					[tt.variable]: `colors.${t}.600`,
					[Qa.variable]: 'colors.white',
					_dark: {
						[tt.variable]: `colors.${t}.300`,
						[Qa.variable]: 'colors.gray.800'
					},
					borderColor: 'inherit',
					borderBottomColor: Qa.reference
				},
				color: tt.reference
			},
			tablist: { mb: '-1px', borderBottom: '1px solid', borderColor: 'inherit' }
		};
	}),
	C5 = nr((e) => {
		const { colorScheme: t } = e;
		return {
			tab: {
				border: '1px solid',
				borderColor: 'inherit',
				[Ft.variable]: 'colors.gray.50',
				_dark: { [Ft.variable]: 'colors.whiteAlpha.50' },
				mb: '-1px',
				_notLast: { marginEnd: '-1px' },
				_selected: {
					[Ft.variable]: 'colors.white',
					[tt.variable]: `colors.${t}.600`,
					_dark: {
						[Ft.variable]: 'colors.gray.800',
						[tt.variable]: `colors.${t}.300`
					},
					borderColor: 'inherit',
					borderTopColor: 'currentColor',
					borderBottomColor: 'transparent'
				},
				color: tt.reference,
				bg: Ft.reference
			},
			tablist: { mb: '-1px', borderBottom: '1px solid', borderColor: 'inherit' }
		};
	}),
	_5 = nr((e) => {
		const { colorScheme: t, theme: r } = e;
		return {
			tab: {
				borderRadius: 'full',
				fontWeight: 'semibold',
				color: 'gray.600',
				_selected: { color: Ye(r, `${t}.700`), bg: Ye(r, `${t}.100`) }
			}
		};
	}),
	T5 = nr((e) => {
		const { colorScheme: t } = e;
		return {
			tab: {
				borderRadius: 'full',
				fontWeight: 'semibold',
				[tt.variable]: 'colors.gray.600',
				_dark: { [tt.variable]: 'inherit' },
				_selected: {
					[tt.variable]: 'colors.white',
					[Ft.variable]: `colors.${t}.600`,
					_dark: {
						[tt.variable]: 'colors.gray.800',
						[Ft.variable]: `colors.${t}.300`
					}
				},
				color: tt.reference,
				bg: Ft.reference
			}
		};
	}),
	E5 = nr({}),
	P5 = {
		line: w5,
		enclosed: k5,
		'enclosed-colored': C5,
		'soft-rounded': _5,
		'solid-rounded': T5,
		unstyled: E5
	},
	$5 = m5({
		baseStyle: S5,
		sizes: x5,
		variants: P5,
		defaultProps: { size: 'md', variant: 'line', colorScheme: 'blue' }
	}),
	R5 = {
		px: 1,
		textTransform: 'uppercase',
		fontSize: 'xs',
		borderRadius: 'sm',
		fontWeight: 'bold'
	},
	ho = le('badge-bg'),
	Jt = le('badge-color'),
	A5 = (e) => {
		const { colorScheme: t, theme: r } = e,
			n = Po(`${t}.500`, 0.6)(r);
		return {
			[ho.variable]: `colors.${t}.500`,
			[Jt.variable]: 'colors.white',
			_dark: { [ho.variable]: n, [Jt.variable]: 'colors.whiteAlpha.800' },
			bg: ho.reference,
			color: Jt.reference
		};
	},
	z5 = (e) => {
		const { colorScheme: t, theme: r } = e,
			n = Po(`${t}.200`, 0.16)(r);
		return {
			[ho.variable]: `colors.${t}.100`,
			[Jt.variable]: `colors.${t}.800`,
			_dark: { [ho.variable]: n, [Jt.variable]: `colors.${t}.200` },
			bg: ho.reference,
			color: Jt.reference
		};
	},
	M5 = (e) => {
		const { colorScheme: t, theme: r } = e,
			n = Po(`${t}.200`, 0.8)(r);
		return {
			[Jt.variable]: `colors.${t}.500`,
			_dark: { [Jt.variable]: n },
			color: Jt.reference,
			boxShadow: `inset 0 0 0px 1px ${Jt.reference}`
		};
	},
	L5 = { solid: A5, subtle: z5, outline: M5 },
	Si = {
		baseStyle: R5,
		variants: L5,
		defaultProps: { variant: 'subtle', colorScheme: 'gray' }
	},
	{ defineMultiStyleConfig: O5, definePartsStyle: _n } = me(CP.keys),
	I5 = {
		fontWeight: 'medium',
		lineHeight: 1.2,
		outline: 0,
		borderRadius: 'md',
		_focusVisible: { boxShadow: 'outline' }
	},
	B5 = { lineHeight: 1.2, overflow: 'visible' },
	D5 = {
		fontSize: 'lg',
		w: '5',
		h: '5',
		transitionProperty: 'common',
		transitionDuration: 'normal',
		borderRadius: 'full',
		marginStart: '1.5',
		marginEnd: '-1',
		opacity: 0.5,
		_disabled: { opacity: 0.4 },
		_focusVisible: { boxShadow: 'outline', bg: 'rgba(0, 0, 0, 0.14)' },
		_hover: { opacity: 0.8 },
		_active: { opacity: 1 }
	},
	F5 = _n({ container: I5, label: B5, closeButton: D5 }),
	N5 = {
		sm: _n({
			container: { minH: '5', minW: '5', fontSize: 'xs', px: '2' },
			closeButton: { marginEnd: '-2px', marginStart: '0.35rem' }
		}),
		md: _n({ container: { minH: '6', minW: '6', fontSize: 'sm', px: '2' } }),
		lg: _n({ container: { minH: '8', minW: '8', fontSize: 'md', px: '3' } })
	},
	V5 = {
		subtle: _n((e) => {
			var t;
			return { container: (t = Si.variants) == null ? void 0 : t.subtle(e) };
		}),
		solid: _n((e) => {
			var t;
			return { container: (t = Si.variants) == null ? void 0 : t.solid(e) };
		}),
		outline: _n((e) => {
			var t;
			return { container: (t = Si.variants) == null ? void 0 : t.outline(e) };
		})
	},
	j5 = O5({
		variants: V5,
		baseStyle: F5,
		sizes: N5,
		defaultProps: { size: 'md', variant: 'subtle', colorScheme: 'gray' }
	}),
	{ definePartsStyle: vr, defineMultiStyleConfig: U5 } = me(cP.keys),
	W5 = vr({
		field: {
			width: '100%',
			minWidth: 0,
			outline: 0,
			position: 'relative',
			appearance: 'none',
			transitionProperty: 'common',
			transitionDuration: 'normal',
			_disabled: { opacity: 0.4, cursor: 'not-allowed' }
		}
	}),
	Pr = {
		lg: { fontSize: 'lg', px: '4', h: '12', borderRadius: 'md' },
		md: { fontSize: 'md', px: '4', h: '10', borderRadius: 'md' },
		sm: { fontSize: 'sm', px: '3', h: '8', borderRadius: 'sm' },
		xs: { fontSize: 'xs', px: '2', h: '6', borderRadius: 'sm' }
	},
	H5 = {
		lg: vr({ field: Pr.lg, addon: Pr.lg }),
		md: vr({ field: Pr.md, addon: Pr.md }),
		sm: vr({ field: Pr.sm, addon: Pr.sm }),
		xs: vr({ field: Pr.xs, addon: Pr.xs })
	};
function Np(e) {
	const { focusBorderColor: t, errorBorderColor: r } = e;
	return {
		focusBorderColor: t || U('blue.500', 'blue.300')(e),
		errorBorderColor: r || U('red.500', 'red.300')(e)
	};
}
var G5 = vr((e) => {
		const { theme: t } = e,
			{ focusBorderColor: r, errorBorderColor: n } = Np(e);
		return {
			field: {
				border: '1px solid',
				borderColor: 'inherit',
				bg: 'inherit',
				_hover: { borderColor: U('gray.300', 'whiteAlpha.400')(e) },
				_readOnly: { boxShadow: 'none !important', userSelect: 'all' },
				_invalid: { borderColor: Ye(t, n), boxShadow: `0 0 0 1px ${Ye(t, n)}` },
				_focusVisible: {
					zIndex: 1,
					borderColor: Ye(t, r),
					boxShadow: `0 0 0 1px ${Ye(t, r)}`
				}
			},
			addon: {
				border: '1px solid',
				borderColor: U('inherit', 'whiteAlpha.50')(e),
				bg: U('gray.100', 'whiteAlpha.300')(e)
			}
		};
	}),
	q5 = vr((e) => {
		const { theme: t } = e,
			{ focusBorderColor: r, errorBorderColor: n } = Np(e);
		return {
			field: {
				border: '2px solid',
				borderColor: 'transparent',
				bg: U('gray.100', 'whiteAlpha.50')(e),
				_hover: { bg: U('gray.200', 'whiteAlpha.100')(e) },
				_readOnly: { boxShadow: 'none !important', userSelect: 'all' },
				_invalid: { borderColor: Ye(t, n) },
				_focusVisible: { bg: 'transparent', borderColor: Ye(t, r) }
			},
			addon: {
				border: '2px solid',
				borderColor: 'transparent',
				bg: U('gray.100', 'whiteAlpha.50')(e)
			}
		};
	}),
	K5 = vr((e) => {
		const { theme: t } = e,
			{ focusBorderColor: r, errorBorderColor: n } = Np(e);
		return {
			field: {
				borderBottom: '1px solid',
				borderColor: 'inherit',
				borderRadius: '0',
				px: '0',
				bg: 'transparent',
				_readOnly: { boxShadow: 'none !important', userSelect: 'all' },
				_invalid: {
					borderColor: Ye(t, n),
					boxShadow: `0px 1px 0px 0px ${Ye(t, n)}`
				},
				_focusVisible: {
					borderColor: Ye(t, r),
					boxShadow: `0px 1px 0px 0px ${Ye(t, r)}`
				}
			},
			addon: {
				borderBottom: '2px solid',
				borderColor: 'inherit',
				borderRadius: '0',
				px: '0',
				bg: 'transparent'
			}
		};
	}),
	Y5 = vr({
		field: { bg: 'transparent', px: '0', height: 'auto' },
		addon: { bg: 'transparent', px: '0', height: 'auto' }
	}),
	X5 = { outline: G5, filled: q5, flushed: K5, unstyled: Y5 },
	te = U5({
		baseStyle: W5,
		sizes: H5,
		variants: X5,
		defaultProps: { size: 'md', variant: 'outline' }
	}),
	G0,
	Q5 = {
		...((G0 = te.baseStyle) == null ? void 0 : G0.field),
		paddingY: '2',
		minHeight: '20',
		lineHeight: 'short',
		verticalAlign: 'top'
	},
	q0,
	K0,
	Z5 = {
		outline: (e) => {
			var t, r;
			return (r = (t = te.variants) == null ? void 0 : t.outline(e).field) !=
				null
				? r
				: {};
		},
		flushed: (e) => {
			var t, r;
			return (r = (t = te.variants) == null ? void 0 : t.flushed(e).field) !=
				null
				? r
				: {};
		},
		filled: (e) => {
			var t, r;
			return (r = (t = te.variants) == null ? void 0 : t.filled(e).field) !=
				null
				? r
				: {};
		},
		unstyled:
			(K0 = (q0 = te.variants) == null ? void 0 : q0.unstyled.field) != null
				? K0
				: {}
	},
	Y0,
	X0,
	Q0,
	Z0,
	J0,
	eg,
	tg,
	rg,
	J5 = {
		xs: (X0 = (Y0 = te.sizes) == null ? void 0 : Y0.xs.field) != null ? X0 : {},
		sm: (Z0 = (Q0 = te.sizes) == null ? void 0 : Q0.sm.field) != null ? Z0 : {},
		md: (eg = (J0 = te.sizes) == null ? void 0 : J0.md.field) != null ? eg : {},
		lg: (rg = (tg = te.sizes) == null ? void 0 : tg.lg.field) != null ? rg : {}
	},
	e3 = {
		baseStyle: Q5,
		sizes: J5,
		variants: Z5,
		defaultProps: { size: 'md', variant: 'outline' }
	},
	Za = ze('tooltip-bg'),
	_c = ze('tooltip-fg'),
	t3 = ze('popper-arrow-bg'),
	r3 = {
		bg: Za.reference,
		color: _c.reference,
		[Za.variable]: 'colors.gray.700',
		[_c.variable]: 'colors.whiteAlpha.900',
		_dark: {
			[Za.variable]: 'colors.gray.300',
			[_c.variable]: 'colors.gray.900'
		},
		[t3.variable]: Za.reference,
		px: '2',
		py: '0.5',
		borderRadius: 'sm',
		fontWeight: 'medium',
		fontSize: 'sm',
		boxShadow: 'md',
		maxW: 'xs',
		zIndex: 'tooltip'
	},
	n3 = { baseStyle: r3 },
	{ defineMultiStyleConfig: o3, definePartsStyle: si } = me(gP.keys),
	i3 = (e) => {
		const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: o } = e,
			i = U(V0(), V0('1rem', 'rgba(0,0,0,0.1)'))(e),
			a = U(`${t}.500`, `${t}.200`)(e),
			s = `linear-gradient(
    to right,
    transparent 0%,
    ${Ye(r, a)} 50%,
    transparent 100%
  )`;
		return { ...(!n && o && i), ...(n ? { bgImage: s } : { bgColor: a }) };
	},
	a3 = {
		lineHeight: '1',
		fontSize: '0.25em',
		fontWeight: 'bold',
		color: 'white'
	},
	s3 = (e) => ({ bg: U('gray.100', 'whiteAlpha.300')(e) }),
	l3 = (e) => ({
		transitionProperty: 'common',
		transitionDuration: 'slow',
		...i3(e)
	}),
	u3 = si((e) => ({ label: a3, filledTrack: l3(e), track: s3(e) })),
	c3 = {
		xs: si({ track: { h: '1' } }),
		sm: si({ track: { h: '2' } }),
		md: si({ track: { h: '3' } }),
		lg: si({ track: { h: '4' } })
	},
	d3 = o3({
		sizes: c3,
		baseStyle: u3,
		defaultProps: { size: 'md', colorScheme: 'blue' }
	}),
	f3 = (e) => typeof e == 'function';
function Qe(e, ...t) {
	return f3(e) ? e(...t) : e;
}
var { definePartsStyle: Ts, defineMultiStyleConfig: p3 } = me(iP.keys),
	xi = le('checkbox-size'),
	h3 = (e) => {
		const { colorScheme: t } = e;
		return {
			w: xi.reference,
			h: xi.reference,
			transitionProperty: 'box-shadow',
			transitionDuration: 'normal',
			border: '2px solid',
			borderRadius: 'sm',
			borderColor: 'inherit',
			color: 'white',
			_checked: {
				bg: U(`${t}.500`, `${t}.200`)(e),
				borderColor: U(`${t}.500`, `${t}.200`)(e),
				color: U('white', 'gray.900')(e),
				_hover: {
					bg: U(`${t}.600`, `${t}.300`)(e),
					borderColor: U(`${t}.600`, `${t}.300`)(e)
				},
				_disabled: {
					borderColor: U('gray.200', 'transparent')(e),
					bg: U('gray.200', 'whiteAlpha.300')(e),
					color: U('gray.500', 'whiteAlpha.500')(e)
				}
			},
			_indeterminate: {
				bg: U(`${t}.500`, `${t}.200`)(e),
				borderColor: U(`${t}.500`, `${t}.200`)(e),
				color: U('white', 'gray.900')(e)
			},
			_disabled: {
				bg: U('gray.100', 'whiteAlpha.100')(e),
				borderColor: U('gray.100', 'transparent')(e)
			},
			_focusVisible: { boxShadow: 'outline' },
			_invalid: { borderColor: U('red.500', 'red.300')(e) }
		};
	},
	m3 = { _disabled: { cursor: 'not-allowed' } },
	g3 = { userSelect: 'none', _disabled: { opacity: 0.4 } },
	v3 = { transitionProperty: 'transform', transitionDuration: 'normal' },
	y3 = Ts((e) => ({ icon: v3, container: m3, control: Qe(h3, e), label: g3 })),
	b3 = {
		sm: Ts({
			control: { [xi.variable]: 'sizes.3' },
			label: { fontSize: 'sm' },
			icon: { fontSize: '3xs' }
		}),
		md: Ts({
			control: { [xi.variable]: 'sizes.4' },
			label: { fontSize: 'md' },
			icon: { fontSize: '2xs' }
		}),
		lg: Ts({
			control: { [xi.variable]: 'sizes.5' },
			label: { fontSize: 'lg' },
			icon: { fontSize: '2xs' }
		})
	},
	cl = p3({
		baseStyle: y3,
		sizes: b3,
		defaultProps: { size: 'md', colorScheme: 'blue' }
	}),
	{ defineMultiStyleConfig: S3, definePartsStyle: Es } = me(vP.keys),
	x3 = (e) => {
		var t;
		const r = (t = Qe(cl.baseStyle, e)) == null ? void 0 : t.control;
		return {
			...r,
			borderRadius: 'full',
			_checked: {
				...(r == null ? void 0 : r._checked),
				_before: {
					content: '""',
					display: 'inline-block',
					pos: 'relative',
					w: '50%',
					h: '50%',
					borderRadius: '50%',
					bg: 'currentColor'
				}
			}
		};
	},
	w3 = Es((e) => {
		var t, r, n, o;
		return {
			label: (r = (t = cl).baseStyle) == null ? void 0 : r.call(t, e).label,
			container:
				(o = (n = cl).baseStyle) == null ? void 0 : o.call(n, e).container,
			control: x3(e)
		};
	}),
	k3 = {
		md: Es({ control: { w: '4', h: '4' }, label: { fontSize: 'md' } }),
		lg: Es({ control: { w: '5', h: '5' }, label: { fontSize: 'lg' } }),
		sm: Es({ control: { width: '3', height: '3' }, label: { fontSize: 'sm' } })
	},
	C3 = S3({
		baseStyle: w3,
		sizes: k3,
		defaultProps: { size: 'md', colorScheme: 'blue' }
	}),
	{ defineMultiStyleConfig: _3, definePartsStyle: T3 } = me(yP.keys),
	Ja = le('select-bg'),
	ng,
	E3 = {
		...((ng = te.baseStyle) == null ? void 0 : ng.field),
		appearance: 'none',
		paddingBottom: '1px',
		lineHeight: 'normal',
		bg: Ja.reference,
		[Ja.variable]: 'colors.white',
		_dark: { [Ja.variable]: 'colors.gray.700' },
		'> option, > optgroup': { bg: Ja.reference }
	},
	P3 = {
		width: '6',
		height: '100%',
		insetEnd: '2',
		position: 'relative',
		color: 'currentColor',
		fontSize: 'xl',
		_disabled: { opacity: 0.5 }
	},
	$3 = T3({ field: E3, icon: P3 }),
	es = { paddingInlineEnd: '8' },
	og,
	ig,
	ag,
	sg,
	lg,
	ug,
	cg,
	dg,
	R3 = {
		lg: {
			...((og = te.sizes) == null ? void 0 : og.lg),
			field: { ...((ig = te.sizes) == null ? void 0 : ig.lg.field), ...es }
		},
		md: {
			...((ag = te.sizes) == null ? void 0 : ag.md),
			field: { ...((sg = te.sizes) == null ? void 0 : sg.md.field), ...es }
		},
		sm: {
			...((lg = te.sizes) == null ? void 0 : lg.sm),
			field: { ...((ug = te.sizes) == null ? void 0 : ug.sm.field), ...es }
		},
		xs: {
			...((cg = te.sizes) == null ? void 0 : cg.xs),
			field: { ...((dg = te.sizes) == null ? void 0 : dg.xs.field), ...es },
			icon: { insetEnd: '1' }
		}
	},
	A3 = _3({
		baseStyle: $3,
		sizes: R3,
		variants: te.variants,
		defaultProps: te.defaultProps
	}),
	Tc = le('skeleton-start-color'),
	Ec = le('skeleton-end-color'),
	z3 = {
		[Tc.variable]: 'colors.gray.100',
		[Ec.variable]: 'colors.gray.400',
		_dark: {
			[Tc.variable]: 'colors.gray.800',
			[Ec.variable]: 'colors.gray.600'
		},
		background: Tc.reference,
		borderColor: Ec.reference,
		opacity: 0.7,
		borderRadius: 'sm'
	},
	M3 = { baseStyle: z3 },
	Pc = le('skip-link-bg'),
	L3 = {
		borderRadius: 'md',
		fontWeight: 'semibold',
		_focusVisible: {
			boxShadow: 'outline',
			padding: '4',
			position: 'fixed',
			top: '6',
			insetStart: '6',
			[Pc.variable]: 'colors.white',
			_dark: { [Pc.variable]: 'colors.gray.700' },
			bg: Pc.reference
		}
	},
	O3 = { baseStyle: L3 },
	{ defineMultiStyleConfig: I3, definePartsStyle: uu } = me(bP.keys),
	ra = le('slider-thumb-size'),
	na = le('slider-track-size'),
	Ir = le('slider-bg'),
	B3 = (e) => {
		const { orientation: t } = e;
		return {
			display: 'inline-block',
			position: 'relative',
			cursor: 'pointer',
			_disabled: { opacity: 0.6, cursor: 'default', pointerEvents: 'none' },
			...Fp({
				orientation: t,
				vertical: { h: '100%' },
				horizontal: { w: '100%' }
			})
		};
	},
	D3 = (e) => ({
		...Fp({
			orientation: e.orientation,
			horizontal: { h: na.reference },
			vertical: { w: na.reference }
		}),
		overflow: 'hidden',
		borderRadius: 'sm',
		[Ir.variable]: 'colors.gray.200',
		_dark: { [Ir.variable]: 'colors.whiteAlpha.200' },
		_disabled: {
			[Ir.variable]: 'colors.gray.300',
			_dark: { [Ir.variable]: 'colors.whiteAlpha.300' }
		},
		bg: Ir.reference
	}),
	F3 = (e) => {
		const { orientation: t } = e;
		return {
			...Fp({
				orientation: t,
				vertical: {
					left: '50%',
					transform: 'translateX(-50%)',
					_active: { transform: 'translateX(-50%) scale(1.15)' }
				},
				horizontal: {
					top: '50%',
					transform: 'translateY(-50%)',
					_active: { transform: 'translateY(-50%) scale(1.15)' }
				}
			}),
			w: ra.reference,
			h: ra.reference,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			position: 'absolute',
			outline: 0,
			zIndex: 1,
			borderRadius: 'full',
			bg: 'white',
			boxShadow: 'base',
			border: '1px solid',
			borderColor: 'transparent',
			transitionProperty: 'transform',
			transitionDuration: 'normal',
			_focusVisible: { boxShadow: 'outline' },
			_disabled: { bg: 'gray.300' }
		};
	},
	N3 = (e) => {
		const { colorScheme: t } = e;
		return {
			width: 'inherit',
			height: 'inherit',
			[Ir.variable]: `colors.${t}.500`,
			_dark: { [Ir.variable]: `colors.${t}.200` },
			bg: Ir.reference
		};
	},
	V3 = uu((e) => ({
		container: B3(e),
		track: D3(e),
		thumb: F3(e),
		filledTrack: N3(e)
	})),
	j3 = uu({
		container: { [ra.variable]: 'sizes.4', [na.variable]: 'sizes.1' }
	}),
	U3 = uu({
		container: { [ra.variable]: 'sizes.3.5', [na.variable]: 'sizes.1' }
	}),
	W3 = uu({
		container: { [ra.variable]: 'sizes.2.5', [na.variable]: 'sizes.0.5' }
	}),
	H3 = { lg: j3, md: U3, sm: W3 },
	G3 = I3({
		baseStyle: V3,
		sizes: H3,
		defaultProps: { size: 'md', colorScheme: 'blue' }
	}),
	gn = ze('spinner-size'),
	q3 = { width: [gn.reference], height: [gn.reference] },
	K3 = {
		xs: { [gn.variable]: 'sizes.3' },
		sm: { [gn.variable]: 'sizes.4' },
		md: { [gn.variable]: 'sizes.6' },
		lg: { [gn.variable]: 'sizes.8' },
		xl: { [gn.variable]: 'sizes.12' }
	},
	Y3 = { baseStyle: q3, sizes: K3, defaultProps: { size: 'md' } },
	{ defineMultiStyleConfig: X3, definePartsStyle: Lb } = me(SP.keys),
	Q3 = { fontWeight: 'medium' },
	Z3 = { opacity: 0.8, marginBottom: '2' },
	J3 = { verticalAlign: 'baseline', fontWeight: 'semibold' },
	e$ = { marginEnd: 1, w: '3.5', h: '3.5', verticalAlign: 'middle' },
	t$ = Lb({ container: {}, label: Q3, helpText: Z3, number: J3, icon: e$ }),
	r$ = {
		md: Lb({
			label: { fontSize: 'sm' },
			helpText: { fontSize: 'sm' },
			number: { fontSize: '2xl' }
		})
	},
	n$ = X3({ baseStyle: t$, sizes: r$, defaultProps: { size: 'md' } }),
	$c = le('kbd-bg'),
	o$ = {
		[$c.variable]: 'colors.gray.100',
		_dark: { [$c.variable]: 'colors.whiteAlpha.100' },
		bg: $c.reference,
		borderRadius: 'md',
		borderWidth: '1px',
		borderBottomWidth: '3px',
		fontSize: '0.8em',
		fontWeight: 'bold',
		lineHeight: 'normal',
		px: '0.4em',
		whiteSpace: 'nowrap'
	},
	i$ = { baseStyle: o$ },
	a$ = {
		transitionProperty: 'common',
		transitionDuration: 'fast',
		transitionTimingFunction: 'ease-out',
		cursor: 'pointer',
		textDecoration: 'none',
		outline: 'none',
		color: 'inherit',
		_hover: { textDecoration: 'underline' },
		_focusVisible: { boxShadow: 'outline' }
	},
	s$ = { baseStyle: a$ },
	{ defineMultiStyleConfig: l$, definePartsStyle: u$ } = me(dP.keys),
	c$ = { marginEnd: '2', display: 'inline', verticalAlign: 'text-bottom' },
	d$ = u$({ icon: c$ }),
	f$ = l$({ baseStyle: d$ }),
	{ defineMultiStyleConfig: p$, definePartsStyle: h$ } = me(fP.keys),
	Kt = le('menu-bg'),
	Rc = le('menu-shadow'),
	m$ = {
		[Kt.variable]: '#fff',
		[Rc.variable]: 'shadows.sm',
		_dark: {
			[Kt.variable]: 'colors.gray.700',
			[Rc.variable]: 'shadows.dark-lg'
		},
		color: 'inherit',
		minW: '3xs',
		py: '2',
		zIndex: 1,
		borderRadius: 'md',
		borderWidth: '1px',
		bg: Kt.reference,
		boxShadow: Rc.reference
	},
	g$ = {
		py: '1.5',
		px: '3',
		transitionProperty: 'background',
		transitionDuration: 'ultra-fast',
		transitionTimingFunction: 'ease-in',
		_focus: {
			[Kt.variable]: 'colors.gray.100',
			_dark: { [Kt.variable]: 'colors.whiteAlpha.100' }
		},
		_active: {
			[Kt.variable]: 'colors.gray.200',
			_dark: { [Kt.variable]: 'colors.whiteAlpha.200' }
		},
		_expanded: {
			[Kt.variable]: 'colors.gray.100',
			_dark: { [Kt.variable]: 'colors.whiteAlpha.100' }
		},
		_disabled: { opacity: 0.4, cursor: 'not-allowed' },
		bg: Kt.reference
	},
	v$ = { mx: 4, my: 2, fontWeight: 'semibold', fontSize: 'sm' },
	y$ = { opacity: 0.6 },
	b$ = {
		border: 0,
		borderBottom: '1px solid',
		borderColor: 'inherit',
		my: '2',
		opacity: 0.6
	},
	S$ = { transitionProperty: 'common', transitionDuration: 'normal' },
	x$ = h$({
		button: S$,
		list: m$,
		item: g$,
		groupTitle: v$,
		command: y$,
		divider: b$
	}),
	w$ = p$({ baseStyle: x$ }),
	{ defineMultiStyleConfig: k$, definePartsStyle: of } = me(pP.keys),
	C$ = { bg: 'blackAlpha.600', zIndex: 'modal' },
	_$ = (e) => {
		const { isCentered: t, scrollBehavior: r } = e;
		return {
			display: 'flex',
			zIndex: 'modal',
			justifyContent: 'center',
			alignItems: t ? 'center' : 'flex-start',
			overflow: r === 'inside' ? 'hidden' : 'auto',
			overscrollBehaviorY: 'none'
		};
	},
	T$ = (e) => {
		const { scrollBehavior: t } = e;
		return {
			borderRadius: 'md',
			bg: U('white', 'gray.700')(e),
			color: 'inherit',
			my: '16',
			zIndex: 'modal',
			maxH: t === 'inside' ? 'calc(100% - 7.5rem)' : void 0,
			boxShadow: U('lg', 'dark-lg')(e)
		};
	},
	E$ = { px: '6', py: '4', fontSize: 'xl', fontWeight: 'semibold' },
	P$ = { position: 'absolute', top: '2', insetEnd: '3' },
	$$ = (e) => {
		const { scrollBehavior: t } = e;
		return {
			px: '6',
			py: '2',
			flex: '1',
			overflow: t === 'inside' ? 'auto' : void 0
		};
	},
	R$ = { px: '6', py: '4' },
	A$ = of((e) => ({
		overlay: C$,
		dialogContainer: Qe(_$, e),
		dialog: Qe(T$, e),
		header: E$,
		closeButton: P$,
		body: Qe($$, e),
		footer: R$
	}));
function Lt(e) {
	return of(
		e === 'full'
			? {
					dialog: { maxW: '100vw', minH: '$100vh', my: '0', borderRadius: '0' }
			  }
			: { dialog: { maxW: e } }
	);
}
var z$ = {
		xs: Lt('xs'),
		sm: Lt('sm'),
		md: Lt('md'),
		lg: Lt('lg'),
		xl: Lt('xl'),
		'2xl': Lt('2xl'),
		'3xl': Lt('3xl'),
		'4xl': Lt('4xl'),
		'5xl': Lt('5xl'),
		'6xl': Lt('6xl'),
		full: Lt('full')
	},
	M$ = k$({ baseStyle: A$, sizes: z$, defaultProps: { size: 'md' } }),
	{ defineMultiStyleConfig: L$, definePartsStyle: Ob } = me(hP.keys),
	Vp = ze('number-input-stepper-width'),
	Ib = ze('number-input-input-padding'),
	O$ = hr(Vp).add('0.5rem').toString(),
	Ac = ze('number-input-bg'),
	zc = ze('number-input-color'),
	Mc = ze('number-input-border-color'),
	I$ = { [Vp.variable]: 'sizes.6', [Ib.variable]: O$ },
	B$ = (e) => {
		var t, r;
		return (r = (t = Qe(te.baseStyle, e)) == null ? void 0 : t.field) != null
			? r
			: {};
	},
	D$ = { width: Vp.reference },
	F$ = {
		borderStart: '1px solid',
		borderStartColor: Mc.reference,
		color: zc.reference,
		bg: Ac.reference,
		[zc.variable]: 'colors.chakra-body-text',
		[Mc.variable]: 'colors.chakra-border-color',
		_dark: {
			[zc.variable]: 'colors.whiteAlpha.800',
			[Mc.variable]: 'colors.whiteAlpha.300'
		},
		_active: {
			[Ac.variable]: 'colors.gray.200',
			_dark: { [Ac.variable]: 'colors.whiteAlpha.300' }
		},
		_disabled: { opacity: 0.4, cursor: 'not-allowed' }
	},
	N$ = Ob((e) => {
		var t;
		return {
			root: I$,
			field: (t = Qe(B$, e)) != null ? t : {},
			stepperGroup: D$,
			stepper: F$
		};
	});
function ts(e) {
	var t, r, n;
	const o = (t = te.sizes) == null ? void 0 : t[e],
		i = { lg: 'md', md: 'md', sm: 'sm', xs: 'sm' },
		a = (n = (r = o.field) == null ? void 0 : r.fontSize) != null ? n : 'md',
		s = Pb.fontSizes[a];
	return Ob({
		field: { ...o.field, paddingInlineEnd: Ib.reference, verticalAlign: 'top' },
		stepper: {
			fontSize: hr(s).multiply(0.75).toString(),
			_first: { borderTopEndRadius: i[e] },
			_last: { borderBottomEndRadius: i[e], mt: '-1px', borderTopWidth: 1 }
		}
	});
}
var V$ = { xs: ts('xs'), sm: ts('sm'), md: ts('md'), lg: ts('lg') },
	j$ = L$({
		baseStyle: N$,
		sizes: V$,
		variants: te.variants,
		defaultProps: te.defaultProps
	}),
	fg,
	U$ = {
		...((fg = te.baseStyle) == null ? void 0 : fg.field),
		textAlign: 'center'
	},
	W$ = {
		lg: { fontSize: 'lg', w: 12, h: 12, borderRadius: 'md' },
		md: { fontSize: 'md', w: 10, h: 10, borderRadius: 'md' },
		sm: { fontSize: 'sm', w: 8, h: 8, borderRadius: 'sm' },
		xs: { fontSize: 'xs', w: 6, h: 6, borderRadius: 'sm' }
	},
	pg,
	hg,
	H$ = {
		outline: (e) => {
			var t, r, n;
			return (n =
				(r = Qe((t = te.variants) == null ? void 0 : t.outline, e)) == null
					? void 0
					: r.field) != null
				? n
				: {};
		},
		flushed: (e) => {
			var t, r, n;
			return (n =
				(r = Qe((t = te.variants) == null ? void 0 : t.flushed, e)) == null
					? void 0
					: r.field) != null
				? n
				: {};
		},
		filled: (e) => {
			var t, r, n;
			return (n =
				(r = Qe((t = te.variants) == null ? void 0 : t.filled, e)) == null
					? void 0
					: r.field) != null
				? n
				: {};
		},
		unstyled:
			(hg = (pg = te.variants) == null ? void 0 : pg.unstyled.field) != null
				? hg
				: {}
	},
	G$ = {
		baseStyle: U$,
		sizes: W$,
		variants: H$,
		defaultProps: te.defaultProps
	},
	{ defineMultiStyleConfig: q$, definePartsStyle: K$ } = me(mP.keys),
	rs = ze('popper-bg'),
	Y$ = ze('popper-arrow-bg'),
	mg = ze('popper-arrow-shadow-color'),
	X$ = { zIndex: 10 },
	Q$ = {
		[rs.variable]: 'colors.white',
		bg: rs.reference,
		[Y$.variable]: rs.reference,
		[mg.variable]: 'colors.gray.200',
		_dark: {
			[rs.variable]: 'colors.gray.700',
			[mg.variable]: 'colors.whiteAlpha.300'
		},
		width: 'xs',
		border: '1px solid',
		borderColor: 'inherit',
		borderRadius: 'md',
		boxShadow: 'sm',
		zIndex: 'inherit',
		_focusVisible: { outline: 0, boxShadow: 'outline' }
	},
	Z$ = { px: 3, py: 2, borderBottomWidth: '1px' },
	J$ = { px: 3, py: 2 },
	e4 = { px: 3, py: 2, borderTopWidth: '1px' },
	t4 = {
		position: 'absolute',
		borderRadius: 'md',
		top: 1,
		insetEnd: 2,
		padding: 2
	},
	r4 = K$({
		popper: X$,
		content: Q$,
		header: Z$,
		body: J$,
		footer: e4,
		closeButton: t4
	}),
	n4 = q$({ baseStyle: r4 }),
	{ definePartsStyle: af, defineMultiStyleConfig: o4 } = me(aP.keys),
	Lc = le('drawer-bg'),
	Oc = le('drawer-box-shadow');
function Vn(e) {
	return af(
		e === 'full'
			? { dialog: { maxW: '100vw', h: '100vh' } }
			: { dialog: { maxW: e } }
	);
}
var i4 = { bg: 'blackAlpha.600', zIndex: 'overlay' },
	a4 = { display: 'flex', zIndex: 'modal', justifyContent: 'center' },
	s4 = (e) => {
		const { isFullHeight: t } = e;
		return {
			...(t && { height: '100vh' }),
			zIndex: 'modal',
			maxH: '100vh',
			color: 'inherit',
			[Lc.variable]: 'colors.white',
			[Oc.variable]: 'shadows.lg',
			_dark: {
				[Lc.variable]: 'colors.gray.700',
				[Oc.variable]: 'shadows.dark-lg'
			},
			bg: Lc.reference,
			boxShadow: Oc.reference
		};
	},
	l4 = { px: '6', py: '4', fontSize: 'xl', fontWeight: 'semibold' },
	u4 = { position: 'absolute', top: '2', insetEnd: '3' },
	c4 = { px: '6', py: '2', flex: '1', overflow: 'auto' },
	d4 = { px: '6', py: '4' },
	f4 = af((e) => ({
		overlay: i4,
		dialogContainer: a4,
		dialog: Qe(s4, e),
		header: l4,
		closeButton: u4,
		body: c4,
		footer: d4
	})),
	p4 = {
		xs: Vn('xs'),
		sm: Vn('md'),
		md: Vn('lg'),
		lg: Vn('2xl'),
		xl: Vn('4xl'),
		full: Vn('full')
	},
	h4 = o4({ baseStyle: f4, sizes: p4, defaultProps: { size: 'xs' } }),
	{ definePartsStyle: m4, defineMultiStyleConfig: g4 } = me(sP.keys),
	v4 = {
		borderRadius: 'md',
		py: '1',
		transitionProperty: 'common',
		transitionDuration: 'normal'
	},
	y4 = {
		borderRadius: 'md',
		py: '1',
		transitionProperty: 'common',
		transitionDuration: 'normal',
		width: 'full',
		_focusVisible: { boxShadow: 'outline' },
		_placeholder: { opacity: 0.6 }
	},
	b4 = {
		borderRadius: 'md',
		py: '1',
		transitionProperty: 'common',
		transitionDuration: 'normal',
		width: 'full',
		_focusVisible: { boxShadow: 'outline' },
		_placeholder: { opacity: 0.6 }
	},
	S4 = m4({ preview: v4, input: y4, textarea: b4 }),
	x4 = g4({ baseStyle: S4 }),
	{ definePartsStyle: w4, defineMultiStyleConfig: k4 } = me(lP.keys),
	mo = le('form-control-color'),
	C4 = {
		marginStart: '1',
		[mo.variable]: 'colors.red.500',
		_dark: { [mo.variable]: 'colors.red.300' },
		color: mo.reference
	},
	_4 = {
		mt: '2',
		[mo.variable]: 'colors.gray.600',
		_dark: { [mo.variable]: 'colors.whiteAlpha.600' },
		color: mo.reference,
		lineHeight: 'normal',
		fontSize: 'sm'
	},
	T4 = w4({
		container: { width: '100%', position: 'relative' },
		requiredIndicator: C4,
		helperText: _4
	}),
	E4 = k4({ baseStyle: T4 }),
	{ definePartsStyle: P4, defineMultiStyleConfig: $4 } = me(uP.keys),
	go = le('form-error-color'),
	R4 = {
		[go.variable]: 'colors.red.500',
		_dark: { [go.variable]: 'colors.red.300' },
		color: go.reference,
		mt: '2',
		fontSize: 'sm',
		lineHeight: 'normal'
	},
	A4 = {
		marginEnd: '0.5em',
		[go.variable]: 'colors.red.500',
		_dark: { [go.variable]: 'colors.red.300' },
		color: go.reference
	},
	z4 = P4({ text: R4, icon: A4 }),
	M4 = $4({ baseStyle: z4 }),
	L4 = {
		fontSize: 'md',
		marginEnd: '3',
		mb: '2',
		fontWeight: 'medium',
		transitionProperty: 'common',
		transitionDuration: 'normal',
		opacity: 1,
		_disabled: { opacity: 0.4 }
	},
	O4 = { baseStyle: L4 },
	I4 = { fontFamily: 'heading', fontWeight: 'bold' },
	B4 = {
		'4xl': { fontSize: ['6xl', null, '7xl'], lineHeight: 1 },
		'3xl': { fontSize: ['5xl', null, '6xl'], lineHeight: 1 },
		'2xl': { fontSize: ['4xl', null, '5xl'], lineHeight: [1.2, null, 1] },
		xl: { fontSize: ['3xl', null, '4xl'], lineHeight: [1.33, null, 1.2] },
		lg: { fontSize: ['2xl', null, '3xl'], lineHeight: [1.33, null, 1.2] },
		md: { fontSize: 'xl', lineHeight: 1.2 },
		sm: { fontSize: 'md', lineHeight: 1.2 },
		xs: { fontSize: 'sm', lineHeight: 1.2 }
	},
	D4 = { baseStyle: I4, sizes: B4, defaultProps: { size: 'xl' } },
	{ defineMultiStyleConfig: F4, definePartsStyle: N4 } = me(oP.keys),
	V4 = {
		transitionProperty: 'common',
		transitionDuration: 'fast',
		transitionTimingFunction: 'ease-out',
		cursor: 'pointer',
		textDecoration: 'none',
		outline: 'none',
		color: 'inherit',
		_hover: { textDecoration: 'underline' },
		_focusVisible: { boxShadow: 'outline' }
	},
	j4 = N4({ link: V4 }),
	U4 = F4({ baseStyle: j4 }),
	W4 = {
		lineHeight: '1.2',
		borderRadius: 'md',
		fontWeight: 'semibold',
		transitionProperty: 'common',
		transitionDuration: 'normal',
		_focusVisible: { boxShadow: 'outline' },
		_disabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
		_hover: { _disabled: { bg: 'initial' } }
	},
	Bb = (e) => {
		const { colorScheme: t, theme: r } = e;
		if (t === 'gray')
			return {
				color: U('inherit', 'whiteAlpha.900')(e),
				_hover: { bg: U('gray.100', 'whiteAlpha.200')(e) },
				_active: { bg: U('gray.200', 'whiteAlpha.300')(e) }
			};
		const n = Po(`${t}.200`, 0.12)(r),
			o = Po(`${t}.200`, 0.24)(r);
		return {
			color: U(`${t}.600`, `${t}.200`)(e),
			bg: 'transparent',
			_hover: { bg: U(`${t}.50`, n)(e) },
			_active: { bg: U(`${t}.100`, o)(e) }
		};
	},
	H4 = (e) => {
		const { colorScheme: t } = e,
			r = U('gray.200', 'whiteAlpha.300')(e);
		return {
			border: '1px solid',
			borderColor: t === 'gray' ? r : 'currentColor',
			'.chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)':
				{ marginEnd: '-1px' },
			'.chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)':
				{ marginBottom: '-1px' },
			...Qe(Bb, e)
		};
	},
	G4 = {
		yellow: {
			bg: 'yellow.400',
			color: 'black',
			hoverBg: 'yellow.500',
			activeBg: 'yellow.600'
		},
		cyan: {
			bg: 'cyan.400',
			color: 'black',
			hoverBg: 'cyan.500',
			activeBg: 'cyan.600'
		}
	},
	q4 = (e) => {
		var t;
		const { colorScheme: r } = e;
		if (r === 'gray') {
			const l = U('gray.100', 'whiteAlpha.200')(e);
			return {
				bg: l,
				_hover: {
					bg: U('gray.200', 'whiteAlpha.300')(e),
					_disabled: { bg: l }
				},
				_active: { bg: U('gray.300', 'whiteAlpha.400')(e) }
			};
		}
		const {
				bg: n = `${r}.500`,
				color: o = 'white',
				hoverBg: i = `${r}.600`,
				activeBg: a = `${r}.700`
			} = (t = G4[r]) != null ? t : {},
			s = U(n, `${r}.200`)(e);
		return {
			bg: s,
			color: U(o, 'gray.800')(e),
			_hover: { bg: U(i, `${r}.300`)(e), _disabled: { bg: s } },
			_active: { bg: U(a, `${r}.400`)(e) }
		};
	},
	K4 = (e) => {
		const { colorScheme: t } = e;
		return {
			padding: 0,
			height: 'auto',
			lineHeight: 'normal',
			verticalAlign: 'baseline',
			color: U(`${t}.500`, `${t}.200`)(e),
			_hover: {
				textDecoration: 'underline',
				_disabled: { textDecoration: 'none' }
			},
			_active: { color: U(`${t}.700`, `${t}.500`)(e) }
		};
	},
	Y4 = {
		bg: 'none',
		color: 'inherit',
		display: 'inline',
		lineHeight: 'inherit',
		m: '0',
		p: '0'
	},
	X4 = { ghost: Bb, outline: H4, solid: q4, link: K4, unstyled: Y4 },
	Q4 = {
		lg: { h: '12', minW: '12', fontSize: 'lg', px: '6' },
		md: { h: '10', minW: '10', fontSize: 'md', px: '4' },
		sm: { h: '8', minW: '8', fontSize: 'sm', px: '3' },
		xs: { h: '6', minW: '6', fontSize: 'xs', px: '2' }
	},
	Z4 = {
		baseStyle: W4,
		variants: X4,
		sizes: Q4,
		defaultProps: { variant: 'solid', size: 'md', colorScheme: 'gray' }
	},
	{ definePartsStyle: Tn, defineMultiStyleConfig: J4 } = me(_P.keys),
	dl = le('card-bg'),
	vo = le('card-padding'),
	eR = Tn({
		container: {
			[dl.variable]: 'chakra-body-bg',
			backgroundColor: dl.reference,
			color: 'chakra-body-text'
		},
		body: { padding: vo.reference, flex: '1 1 0%' },
		header: { padding: vo.reference },
		footer: { padding: vo.reference }
	}),
	tR = {
		sm: Tn({ container: { borderRadius: 'base', [vo.variable]: 'space.3' } }),
		md: Tn({ container: { borderRadius: 'md', [vo.variable]: 'space.5' } }),
		lg: Tn({ container: { borderRadius: 'xl', [vo.variable]: 'space.7' } })
	},
	rR = {
		elevated: Tn({
			container: {
				boxShadow: 'base',
				_dark: { [dl.variable]: 'colors.gray.700' }
			}
		}),
		outline: Tn({
			container: { borderWidth: '1px', borderColor: 'chakra-border-color' }
		}),
		filled: Tn({ container: { [dl.variable]: 'colors.chakra-subtle-bg' } }),
		unstyled: {
			body: { padding: 0 },
			header: { padding: 0 },
			footer: { padding: 0 }
		}
	},
	nR = J4({
		baseStyle: eR,
		variants: rR,
		sizes: tR,
		defaultProps: { variant: 'elevated', size: 'md' }
	}),
	wi = ze('close-button-size'),
	Qo = ze('close-button-bg'),
	oR = {
		w: [wi.reference],
		h: [wi.reference],
		borderRadius: 'md',
		transitionProperty: 'common',
		transitionDuration: 'normal',
		_disabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
		_hover: {
			[Qo.variable]: 'colors.blackAlpha.100',
			_dark: { [Qo.variable]: 'colors.whiteAlpha.100' }
		},
		_active: {
			[Qo.variable]: 'colors.blackAlpha.200',
			_dark: { [Qo.variable]: 'colors.whiteAlpha.200' }
		},
		_focusVisible: { boxShadow: 'outline' },
		bg: Qo.reference
	},
	iR = {
		lg: { [wi.variable]: 'sizes.10', fontSize: 'md' },
		md: { [wi.variable]: 'sizes.8', fontSize: 'xs' },
		sm: { [wi.variable]: 'sizes.6', fontSize: '2xs' }
	},
	aR = { baseStyle: oR, sizes: iR, defaultProps: { size: 'md' } },
	{ variants: sR, defaultProps: lR } = Si,
	uR = { fontFamily: 'mono', fontSize: 'sm', px: '0.2em', borderRadius: 'sm' },
	cR = { baseStyle: uR, variants: sR, defaultProps: lR },
	dR = { w: '100%', mx: 'auto', maxW: 'prose', px: '4' },
	fR = { baseStyle: dR },
	pR = { opacity: 0.6, borderColor: 'inherit' },
	hR = { borderStyle: 'solid' },
	mR = { borderStyle: 'dashed' },
	gR = { solid: hR, dashed: mR },
	vR = { baseStyle: pR, variants: gR, defaultProps: { variant: 'solid' } },
	{ definePartsStyle: yR, defineMultiStyleConfig: bR } = me(tP.keys),
	SR = {
		borderTopWidth: '1px',
		borderColor: 'inherit',
		_last: { borderBottomWidth: '1px' }
	},
	xR = {
		transitionProperty: 'common',
		transitionDuration: 'normal',
		fontSize: 'md',
		_focusVisible: { boxShadow: 'outline' },
		_hover: { bg: 'blackAlpha.50' },
		_disabled: { opacity: 0.4, cursor: 'not-allowed' },
		px: '4',
		py: '2'
	},
	wR = { pt: '2', px: '4', pb: '5' },
	kR = { fontSize: '1.25em' },
	CR = yR({ container: SR, button: xR, panel: wR, icon: kR }),
	_R = bR({ baseStyle: CR }),
	{ definePartsStyle: va, defineMultiStyleConfig: TR } = me(rP.keys),
	vt = le('alert-fg'),
	Cr = le('alert-bg'),
	ER = va({
		container: { bg: Cr.reference, px: '4', py: '3' },
		title: { fontWeight: 'bold', lineHeight: '6', marginEnd: '2' },
		description: { lineHeight: '6' },
		icon: {
			color: vt.reference,
			flexShrink: 0,
			marginEnd: '3',
			w: '5',
			h: '6'
		},
		spinner: {
			color: vt.reference,
			flexShrink: 0,
			marginEnd: '3',
			w: '5',
			h: '5'
		}
	});
function jp(e) {
	const { theme: t, colorScheme: r } = e,
		n = Po(`${r}.200`, 0.16)(t);
	return { light: `colors.${r}.100`, dark: n };
}
var PR = va((e) => {
		const { colorScheme: t } = e,
			r = jp(e);
		return {
			container: {
				[vt.variable]: `colors.${t}.500`,
				[Cr.variable]: r.light,
				_dark: { [vt.variable]: `colors.${t}.200`, [Cr.variable]: r.dark }
			}
		};
	}),
	$R = va((e) => {
		const { colorScheme: t } = e,
			r = jp(e);
		return {
			container: {
				[vt.variable]: `colors.${t}.500`,
				[Cr.variable]: r.light,
				_dark: { [vt.variable]: `colors.${t}.200`, [Cr.variable]: r.dark },
				paddingStart: '3',
				borderStartWidth: '4px',
				borderStartColor: vt.reference
			}
		};
	}),
	RR = va((e) => {
		const { colorScheme: t } = e,
			r = jp(e);
		return {
			container: {
				[vt.variable]: `colors.${t}.500`,
				[Cr.variable]: r.light,
				_dark: { [vt.variable]: `colors.${t}.200`, [Cr.variable]: r.dark },
				pt: '2',
				borderTopWidth: '4px',
				borderTopColor: vt.reference
			}
		};
	}),
	AR = va((e) => {
		const { colorScheme: t } = e;
		return {
			container: {
				[vt.variable]: 'colors.white',
				[Cr.variable]: `colors.${t}.500`,
				_dark: {
					[vt.variable]: 'colors.gray.900',
					[Cr.variable]: `colors.${t}.200`
				},
				color: vt.reference
			}
		};
	}),
	zR = { subtle: PR, 'left-accent': $R, 'top-accent': RR, solid: AR },
	MR = TR({
		baseStyle: ER,
		variants: zR,
		defaultProps: { variant: 'subtle', colorScheme: 'blue' }
	}),
	{ definePartsStyle: Db, defineMultiStyleConfig: LR } = me(nP.keys),
	yo = le('avatar-border-color'),
	Ic = le('avatar-bg'),
	OR = {
		borderRadius: 'full',
		border: '0.2em solid',
		[yo.variable]: 'white',
		_dark: { [yo.variable]: 'colors.gray.800' },
		borderColor: yo.reference
	},
	IR = {
		[Ic.variable]: 'colors.gray.200',
		_dark: { [Ic.variable]: 'colors.whiteAlpha.400' },
		bgColor: Ic.reference
	},
	gg = le('avatar-background'),
	BR = (e) => {
		const { name: t, theme: r } = e,
			n = t ? HP({ string: t }) : 'colors.gray.400',
			o = UP(n)(r);
		let i = 'white';
		return (
			o || (i = 'gray.800'),
			{
				bg: gg.reference,
				'&:not([data-loaded])': { [gg.variable]: n },
				color: i,
				[yo.variable]: 'colors.white',
				_dark: { [yo.variable]: 'colors.gray.800' },
				borderColor: yo.reference,
				verticalAlign: 'top'
			}
		);
	},
	DR = Db((e) => ({
		badge: Qe(OR, e),
		excessLabel: Qe(IR, e),
		container: Qe(BR, e)
	}));
function $r(e) {
	const t = e !== '100%' ? Rb[e] : void 0;
	return Db({
		container: { width: e, height: e, fontSize: `calc(${t ?? e} / 2.5)` },
		excessLabel: { width: e, height: e },
		label: {
			fontSize: `calc(${t ?? e} / 2.5)`,
			lineHeight: e !== '100%' ? t ?? e : void 0
		}
	});
}
var FR = {
		'2xs': $r(4),
		xs: $r(6),
		sm: $r(8),
		md: $r(12),
		lg: $r(16),
		xl: $r(24),
		'2xl': $r(32),
		full: $r('100%')
	},
	NR = LR({ baseStyle: DR, sizes: FR, defaultProps: { size: 'md' } }),
	VR = {
		Accordion: _R,
		Alert: MR,
		Avatar: NR,
		Badge: Si,
		Breadcrumb: U4,
		Button: Z4,
		Checkbox: cl,
		CloseButton: aR,
		Code: cR,
		Container: fR,
		Divider: vR,
		Drawer: h4,
		Editable: x4,
		Form: E4,
		FormError: M4,
		FormLabel: O4,
		Heading: D4,
		Input: te,
		Kbd: i$,
		Link: s$,
		List: f$,
		Menu: w$,
		Modal: M$,
		NumberInput: j$,
		PinInput: G$,
		Popover: n4,
		Progress: d3,
		Radio: C3,
		Select: A3,
		Skeleton: M3,
		SkipLink: O3,
		Slider: G3,
		Spinner: Y3,
		Stat: n$,
		Switch: s5,
		Table: h5,
		Tabs: $5,
		Tag: j5,
		Textarea: e3,
		Tooltip: n3,
		Card: nR
	},
	Fb = {
		colors: {
			'chakra-body-text': { _light: 'gray.800', _dark: 'whiteAlpha.900' },
			'chakra-body-bg': { _light: 'white', _dark: 'gray.800' },
			'chakra-border-color': { _light: 'gray.200', _dark: 'whiteAlpha.300' },
			'chakra-subtle-bg': { _light: 'gray.100', _dark: 'gray.700' },
			'chakra-placeholder-color': {
				_light: 'gray.500',
				_dark: 'whiteAlpha.400'
			}
		}
	},
	Nb = {
		global: {
			body: {
				fontFamily: 'body',
				color: 'chakra-body-text',
				bg: 'chakra-body-bg',
				transitionProperty: 'background-color',
				transitionDuration: 'normal',
				lineHeight: 'base'
			},
			'*::placeholder': { color: 'chakra-placeholder-color' },
			'*, *::before, &::after': {
				borderColor: 'chakra-border-color',
				wordWrap: 'break-word'
			}
		}
	},
	Vb = 'ltr',
	jb = {
		useSystemColorMode: !1,
		initialColorMode: 'light',
		cssVarPrefix: 'chakra'
	},
	jR = {
		semanticTokens: Fb,
		direction: Vb,
		...Ab,
		components: VR,
		styles: Nb,
		config: jb
	};
({ ...Ab });
function UR(e, t) {
	const r = {};
	return (
		Object.keys(e).forEach((n) => {
			t.includes(n) || (r[n] = e[n]);
		}),
		r
	);
}
function WR(e, t, r, n) {
	const o = typeof t == 'string' ? t.split('.') : [t];
	for (n = 0; n < o.length && e; n += 1) e = e[o[n]];
	return e === void 0 ? r : e;
}
var HR = (e) => {
		const t = new WeakMap();
		return (n, o, i, a) => {
			if (typeof n > 'u') return e(n, o, i);
			t.has(n) || t.set(n, new Map());
			const s = t.get(n);
			if (s.has(o)) return s.get(o);
			const l = e(n, o, i, a);
			return s.set(o, l), l;
		};
	},
	Ub = HR(WR);
function Wb(e, t) {
	const r = {};
	return (
		Object.keys(e).forEach((n) => {
			const o = e[n];
			t(o, n, e) && (r[n] = o);
		}),
		r
	);
}
var Hb = (e) => Wb(e, (t) => t != null);
function GR(e) {
	return typeof e == 'function';
}
function Gb(e, ...t) {
	return GR(e) ? e(...t) : e;
}
var qR = typeof Element < 'u',
	KR = typeof Map == 'function',
	YR = typeof Set == 'function',
	XR = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView;
function Ps(e, t) {
	if (e === t) return !0;
	if (e && t && typeof e == 'object' && typeof t == 'object') {
		if (e.constructor !== t.constructor) return !1;
		var r, n, o;
		if (Array.isArray(e)) {
			if (((r = e.length), r != t.length)) return !1;
			for (n = r; n-- !== 0; ) if (!Ps(e[n], t[n])) return !1;
			return !0;
		}
		var i;
		if (KR && e instanceof Map && t instanceof Map) {
			if (e.size !== t.size) return !1;
			for (i = e.entries(); !(n = i.next()).done; )
				if (!t.has(n.value[0])) return !1;
			for (i = e.entries(); !(n = i.next()).done; )
				if (!Ps(n.value[1], t.get(n.value[0]))) return !1;
			return !0;
		}
		if (YR && e instanceof Set && t instanceof Set) {
			if (e.size !== t.size) return !1;
			for (i = e.entries(); !(n = i.next()).done; )
				if (!t.has(n.value[0])) return !1;
			return !0;
		}
		if (XR && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
			if (((r = e.length), r != t.length)) return !1;
			for (n = r; n-- !== 0; ) if (e[n] !== t[n]) return !1;
			return !0;
		}
		if (e.constructor === RegExp)
			return e.source === t.source && e.flags === t.flags;
		if (e.valueOf !== Object.prototype.valueOf)
			return e.valueOf() === t.valueOf();
		if (e.toString !== Object.prototype.toString)
			return e.toString() === t.toString();
		if (((o = Object.keys(e)), (r = o.length), r !== Object.keys(t).length))
			return !1;
		for (n = r; n-- !== 0; )
			if (!Object.prototype.hasOwnProperty.call(t, o[n])) return !1;
		if (qR && e instanceof Element) return !1;
		for (n = r; n-- !== 0; )
			if (
				!(
					(o[n] === '_owner' || o[n] === '__v' || o[n] === '__o') &&
					e.$$typeof
				) &&
				!Ps(e[o[n]], t[o[n]])
			)
				return !1;
		return !0;
	}
	return e !== e && t !== t;
}
var QR = function (t, r) {
	try {
		return Ps(t, r);
	} catch (n) {
		if ((n.message || '').match(/stack|recursion/i))
			return console.warn('react-fast-compare cannot handle circular refs'), !1;
		throw n;
	}
};
function qb(e, t = {}) {
	var r;
	const { styleConfig: n, ...o } = t,
		{ theme: i, colorMode: a } = mT(),
		s = e ? Ub(i, `components.${e}`) : void 0,
		l = n || s,
		u = Zt(
			{ theme: i, colorMode: a },
			(r = l == null ? void 0 : l.defaultProps) != null ? r : {},
			Hb(UR(o, ['children']))
		),
		c = C.useRef({});
	if (l) {
		const f = AE(l)(u);
		QR(c.current, f) || (c.current = f);
	}
	return c.current;
}
function ya(e, t = {}) {
	return qb(e, t);
}
function ZR(e, t = {}) {
	return qb(e, t);
}
var JR = new Set([
		...bE,
		'textStyle',
		'layerStyle',
		'apply',
		'noOfLines',
		'focusBorderColor',
		'errorBorderColor',
		'as',
		'__css',
		'css',
		'sx'
	]),
	eA = new Set(['htmlWidth', 'htmlHeight', 'htmlSize']);
function tA(e) {
	return eA.has(e) || !JR.has(e);
}
var rA =
		/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
	nA = ob(function (e) {
		return (
			rA.test(e) ||
			(e.charCodeAt(0) === 111 &&
				e.charCodeAt(1) === 110 &&
				e.charCodeAt(2) < 91)
		);
	}),
	oA = nA,
	iA = function (t) {
		return t !== 'theme';
	},
	vg = function (t) {
		return typeof t == 'string' && t.charCodeAt(0) > 96 ? oA : iA;
	},
	yg = function (t, r, n) {
		var o;
		if (r) {
			var i = r.shouldForwardProp;
			o =
				t.__emotion_forwardProp && i
					? function (a) {
							return t.__emotion_forwardProp(a) && i(a);
					  }
					: i;
		}
		return typeof o != 'function' && n && (o = t.__emotion_forwardProp), o;
	},
	aA = function (t) {
		var r = t.cache,
			n = t.serialized,
			o = t.isStringTag;
		return (
			ub(r, n, o),
			K_(function () {
				return cb(r, n, o);
			}),
			null
		);
	},
	sA = function e(t, r) {
		var n = t.__emotion_real === t,
			o = (n && t.__emotion_base) || t,
			i,
			a;
		r !== void 0 && ((i = r.label), (a = r.target));
		var s = yg(t, r, n),
			l = s || vg(o),
			u = !l('as');
		return function () {
			var c = arguments,
				d =
					n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
			if (
				(i !== void 0 && d.push('label:' + i + ';'),
				c[0] == null || c[0].raw === void 0)
			)
				d.push.apply(d, c);
			else {
				d.push(c[0][0]);
				for (var f = c.length, p = 1; p < f; p++) d.push(c[p], c[0][p]);
			}
			var v = hb(function (b, k, h) {
				var m = (u && b.as) || o,
					g = '',
					S = [],
					P = b;
				if (b.theme == null) {
					P = {};
					for (var R in b) P[R] = b[R];
					P.theme = C.useContext(Ji);
				}
				typeof b.className == 'string'
					? (g = V_(k.registered, S, b.className))
					: b.className != null && (g = b.className + ' ');
				var $ = zp(d.concat(S), k.registered, P);
				(g += k.key + '-' + $.name), a !== void 0 && (g += ' ' + a);
				var I = u && s === void 0 ? vg(m) : l,
					E = {};
				for (var T in b) (u && T === 'as') || (I(T) && (E[T] = b[T]));
				return (
					(E.className = g),
					(E.ref = h),
					C.createElement(
						C.Fragment,
						null,
						C.createElement(aA, {
							cache: k,
							serialized: $,
							isStringTag: typeof m == 'string'
						}),
						C.createElement(m, E)
					)
				);
			});
			return (
				(v.displayName =
					i !== void 0
						? i
						: 'Styled(' +
						  (typeof o == 'string'
								? o
								: o.displayName || o.name || 'Component') +
						  ')'),
				(v.defaultProps = t.defaultProps),
				(v.__emotion_real = v),
				(v.__emotion_base = o),
				(v.__emotion_styles = d),
				(v.__emotion_forwardProp = s),
				Object.defineProperty(v, 'toString', {
					value: function () {
						return '.' + a;
					}
				}),
				(v.withComponent = function (b, k) {
					return e(b, il({}, r, k, { shouldForwardProp: yg(v, k, !0) })).apply(
						void 0,
						d
					);
				}),
				v
			);
		};
	},
	lA = [
		'a',
		'abbr',
		'address',
		'area',
		'article',
		'aside',
		'audio',
		'b',
		'base',
		'bdi',
		'bdo',
		'big',
		'blockquote',
		'body',
		'br',
		'button',
		'canvas',
		'caption',
		'cite',
		'code',
		'col',
		'colgroup',
		'data',
		'datalist',
		'dd',
		'del',
		'details',
		'dfn',
		'dialog',
		'div',
		'dl',
		'dt',
		'em',
		'embed',
		'fieldset',
		'figcaption',
		'figure',
		'footer',
		'form',
		'h1',
		'h2',
		'h3',
		'h4',
		'h5',
		'h6',
		'head',
		'header',
		'hgroup',
		'hr',
		'html',
		'i',
		'iframe',
		'img',
		'input',
		'ins',
		'kbd',
		'keygen',
		'label',
		'legend',
		'li',
		'link',
		'main',
		'map',
		'mark',
		'marquee',
		'menu',
		'menuitem',
		'meta',
		'meter',
		'nav',
		'noscript',
		'object',
		'ol',
		'optgroup',
		'option',
		'output',
		'p',
		'param',
		'picture',
		'pre',
		'progress',
		'q',
		'rp',
		'rt',
		'ruby',
		's',
		'samp',
		'script',
		'section',
		'select',
		'small',
		'source',
		'span',
		'strong',
		'style',
		'sub',
		'summary',
		'sup',
		'table',
		'tbody',
		'td',
		'textarea',
		'tfoot',
		'th',
		'thead',
		'time',
		'title',
		'tr',
		'track',
		'u',
		'ul',
		'var',
		'video',
		'wbr',
		'circle',
		'clipPath',
		'defs',
		'ellipse',
		'foreignObject',
		'g',
		'image',
		'line',
		'linearGradient',
		'mask',
		'path',
		'pattern',
		'polygon',
		'polyline',
		'radialGradient',
		'rect',
		'stop',
		'svg',
		'text',
		'tspan'
	],
	fl = sA.bind();
lA.forEach(function (e) {
	fl[e] = fl(e);
});
var bg,
	uA = (bg = fl.default) != null ? bg : fl,
	cA =
		({ baseStyle: e }) =>
		(t) => {
			const { theme: r, css: n, __css: o, sx: i, ...a } = t,
				s = Wb(a, (d, f) => xE(f)),
				l = Gb(e, t),
				u = Object.assign({}, o, l, Hb(s), i),
				c = Eb(u)(t.theme);
			return n ? [c, n] : c;
		};
function Bc(e, t) {
	const { baseStyle: r, ...n } = t ?? {};
	n.shouldForwardProp || (n.shouldForwardProp = tA);
	const o = cA({ baseStyle: r }),
		i = uA(e, n)(o);
	return nt.forwardRef(function (l, u) {
		const { colorMode: c, forced: d } = Op();
		return nt.createElement(i, { ref: u, 'data-theme': d ? c : void 0, ...l });
	});
}
function dA() {
	const e = new Map();
	return new Proxy(Bc, {
		apply(t, r, n) {
			return Bc(...n);
		},
		get(t, r) {
			return e.has(r) || e.set(r, Bc(r)), e.get(r);
		}
	});
}
var Ge = dA();
function on(e) {
	return C.forwardRef(e);
}
function fA(e = {}) {
	const {
			strict: t = !0,
			errorMessage:
				r = 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider',
			name: n
		} = e,
		o = C.createContext(void 0);
	o.displayName = n;
	function i() {
		var a;
		const s = C.useContext(o);
		if (!s && t) {
			const l = new Error(r);
			throw (
				((l.name = 'ContextError'),
				(a = Error.captureStackTrace) == null || a.call(Error, l, i),
				l)
			);
		}
		return s;
	}
	return [o.Provider, i, o];
}
function pA(e) {
	const { cssVarsRoot: t, theme: r, children: n } = e,
		o = C.useMemo(() => yE(r), [r]);
	return be(Q_, { theme: o, children: [A(hA, { root: t }), n] });
}
function hA({ root: e = ':host, :root' }) {
	const t = [e, '[data-theme]'].join(',');
	return A(ou, { styles: (r) => ({ [t]: r.__cssVars }) });
}
fA({
	name: 'StylesContext',
	errorMessage:
		'useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` '
});
function mA() {
	const { colorMode: e } = Op();
	return A(ou, {
		styles: (t) => {
			const r = Ub(t, 'styles.global'),
				n = Gb(r, { theme: t, colorMode: e });
			return n ? Eb(n)(t) : void 0;
		}
	});
}
var gA = {
		body: { classList: { add() {}, remove() {} } },
		addEventListener() {},
		removeEventListener() {},
		activeElement: { blur() {}, nodeName: '' },
		querySelector() {
			return null;
		},
		querySelectorAll() {
			return [];
		},
		getElementById() {
			return null;
		},
		createEvent() {
			return { initEvent() {} };
		},
		createElement() {
			return {
				children: [],
				childNodes: [],
				style: {},
				setAttribute() {},
				getElementsByTagName() {
					return [];
				}
			};
		}
	},
	Kb = gA,
	jn = () => {},
	vA = {
		document: Kb,
		navigator: { userAgent: '' },
		CustomEvent: function () {
			return this;
		},
		addEventListener: jn,
		removeEventListener: jn,
		getComputedStyle() {
			return {
				getPropertyValue() {
					return '';
				}
			};
		},
		matchMedia() {
			return { matches: !1, addListener: jn, removeListener: jn };
		},
		requestAnimationFrame(e) {
			return typeof setTimeout > 'u' ? (e(), null) : setTimeout(e, 0);
		},
		cancelAnimationFrame(e) {
			typeof setTimeout > 'u' || clearTimeout(e);
		},
		setTimeout: () => 0,
		clearTimeout: jn,
		setInterval: () => 0,
		clearInterval: jn
	},
	yA = vA,
	bA = { window: yA, document: Kb },
	Yb = typeof window < 'u' ? { window, document } : bA,
	Xb = C.createContext(Yb);
Xb.displayName = 'EnvironmentContext';
function Qb(e) {
	const { children: t, environment: r } = e,
		[n, o] = C.useState(null),
		[i, a] = C.useState(!1);
	C.useEffect(() => a(!0), []);
	const s = C.useMemo(() => {
		if (r) return r;
		const l = n == null ? void 0 : n.ownerDocument,
			u = n == null ? void 0 : n.ownerDocument.defaultView;
		return l ? { document: l, window: u } : Yb;
	}, [n, r]);
	return be(Xb.Provider, {
		value: s,
		children: [
			t,
			!r &&
				i &&
				A('span', {
					id: '__chakra_env',
					hidden: !0,
					ref: (l) => {
						C.startTransition(() => {
							l && o(l);
						});
					}
				})
		]
	});
}
Qb.displayName = 'EnvironmentProvider';
var SA = (e) => {
		const {
				children: t,
				colorModeManager: r,
				portalZIndex: n,
				resetCSS: o = !0,
				theme: i = {},
				environment: a,
				cssVarsRoot: s
			} = e,
			l = A(Qb, { environment: a, children: t });
		return A(pA, {
			theme: i,
			cssVarsRoot: s,
			children: be(yb, {
				colorModeManager: r,
				options: i.config,
				children: [
					o ? A(tT, {}) : A(eT, {}),
					A(mA, {}),
					n ? A(gb, { zIndex: n, children: l }) : l
				]
			})
		});
	},
	xA = (e, t) => e.find((r) => r.id === t);
function Sg(e, t) {
	const r = Zb(e, t),
		n = r ? e[r].findIndex((o) => o.id === t) : -1;
	return { position: r, index: n };
}
function Zb(e, t) {
	for (const [r, n] of Object.entries(e)) if (xA(n, t)) return r;
}
function wA(e) {
	const t = e.includes('right'),
		r = e.includes('left');
	let n = 'center';
	return (
		t && (n = 'flex-end'),
		r && (n = 'flex-start'),
		{ display: 'flex', flexDirection: 'column', alignItems: n }
	);
}
function kA(e) {
	const r = e === 'top' || e === 'bottom' ? '0 auto' : void 0,
		n = e.includes('top') ? 'env(safe-area-inset-top, 0px)' : void 0,
		o = e.includes('bottom') ? 'env(safe-area-inset-bottom, 0px)' : void 0,
		i = e.includes('left') ? void 0 : 'env(safe-area-inset-right, 0px)',
		a = e.includes('right') ? void 0 : 'env(safe-area-inset-left, 0px)';
	return {
		position: 'fixed',
		zIndex: 5500,
		pointerEvents: 'none',
		display: 'flex',
		flexDirection: 'column',
		margin: r,
		top: n,
		bottom: o,
		right: i,
		left: a
	};
}
var xg = {
		path: be('g', {
			stroke: 'currentColor',
			strokeWidth: '1.5',
			children: [
				A('path', {
					strokeLinecap: 'round',
					fill: 'none',
					d: 'M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25'
				}),
				A('path', {
					fill: 'currentColor',
					strokeLinecap: 'round',
					d: 'M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0'
				}),
				A('circle', {
					fill: 'none',
					strokeMiterlimit: '10',
					cx: '12',
					cy: '12',
					r: '11.25'
				})
			]
		}),
		viewBox: '0 0 24 24'
	},
	ba = on((e, t) => {
		const {
				as: r,
				viewBox: n,
				color: o = 'currentColor',
				focusable: i = !1,
				children: a,
				className: s,
				__css: l,
				...u
			} = e,
			c = sr('chakra-icon', s),
			d = ya('Icon', e),
			f = {
				w: '1em',
				h: '1em',
				display: 'inline-block',
				lineHeight: '1em',
				flexShrink: 0,
				color: o,
				...l,
				...d
			},
			p = { ref: t, focusable: i, className: c, __css: f },
			v = n ?? xg.viewBox;
		if (r && typeof r != 'string') return A(Ge.svg, { as: r, ...p, ...u });
		const b = a ?? xg.path;
		return A(Ge.svg, {
			verticalAlign: 'middle',
			viewBox: v,
			...p,
			...u,
			children: b
		});
	});
ba.displayName = 'Icon';
function CA(e) {
	return A(ba, {
		viewBox: '0 0 24 24',
		...e,
		children: A('path', {
			fill: 'currentColor',
			d: 'M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z'
		})
	});
}
function _A(e) {
	return A(ba, {
		viewBox: '0 0 24 24',
		...e,
		children: A('path', {
			fill: 'currentColor',
			d: 'M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z'
		})
	});
}
function wg(e) {
	return A(ba, {
		viewBox: '0 0 24 24',
		...e,
		children: A('path', {
			fill: 'currentColor',
			d: 'M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z'
		})
	});
}
var TA = J_({
		'0%': { transform: 'rotate(0deg)' },
		'100%': { transform: 'rotate(360deg)' }
	}),
	cu = on((e, t) => {
		const r = ya('Spinner', e),
			{
				label: n = 'Loading...',
				thickness: o = '2px',
				speed: i = '0.45s',
				emptyColor: a = 'transparent',
				className: s,
				...l
			} = ga(e),
			u = sr('chakra-spinner', s),
			c = {
				display: 'inline-block',
				borderColor: 'currentColor',
				borderStyle: 'solid',
				borderRadius: '99999px',
				borderWidth: o,
				borderBottomColor: a,
				borderLeftColor: a,
				animation: `${TA} ${i} linear infinite`,
				...r
			};
		return A(Ge.div, {
			ref: t,
			__css: c,
			className: u,
			...l,
			children: n && A(Ge.span, { srOnly: !0, children: n })
		});
	});
cu.displayName = 'Spinner';
var [EA, PA] = ma({
		name: 'AlertContext',
		hookName: 'useAlertContext',
		providerName: '<Alert />'
	}),
	[$A, Up] = ma({
		name: 'AlertStylesContext',
		hookName: 'useAlertStyles',
		providerName: '<Alert />'
	}),
	Jb = {
		info: { icon: _A, colorScheme: 'blue' },
		warning: { icon: wg, colorScheme: 'orange' },
		success: { icon: CA, colorScheme: 'green' },
		error: { icon: wg, colorScheme: 'red' },
		loading: { icon: cu, colorScheme: 'blue' }
	};
function RA(e) {
	return Jb[e].colorScheme;
}
function AA(e) {
	return Jb[e].icon;
}
var eS = on(function (t, r) {
	const o = { display: 'inline', ...Up().description };
	return A(Ge.div, {
		ref: r,
		...t,
		className: sr('chakra-alert__desc', t.className),
		__css: o
	});
});
eS.displayName = 'AlertDescription';
function tS(e) {
	const { status: t } = PA(),
		r = AA(t),
		n = Up(),
		o = t === 'loading' ? n.spinner : n.icon;
	return A(Ge.span, {
		display: 'inherit',
		...e,
		className: sr('chakra-alert__icon', e.className),
		__css: o,
		children: e.children || A(r, { h: '100%', w: '100%' })
	});
}
tS.displayName = 'AlertIcon';
var rS = on(function (t, r) {
	const n = Up();
	return A(Ge.div, {
		ref: r,
		...t,
		className: sr('chakra-alert__title', t.className),
		__css: n.title
	});
});
rS.displayName = 'AlertTitle';
var nS = on(function (t, r) {
	var n;
	const { status: o = 'info', addRole: i = !0, ...a } = ga(t),
		s = (n = t.colorScheme) != null ? n : RA(o),
		l = ZR('Alert', { ...t, colorScheme: s }),
		u = {
			width: '100%',
			display: 'flex',
			alignItems: 'center',
			position: 'relative',
			overflow: 'hidden',
			...l.container
		};
	return A(EA, {
		value: { status: o },
		children: A($A, {
			value: l,
			children: A(Ge.div, {
				role: i ? 'alert' : void 0,
				ref: r,
				...a,
				className: sr('chakra-alert', t.className),
				__css: u
			})
		})
	});
});
nS.displayName = 'Alert';
function zA(e) {
	return A(ba, {
		focusable: 'false',
		'aria-hidden': !0,
		...e,
		children: A('path', {
			fill: 'currentColor',
			d: 'M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z'
		})
	});
}
var oS = on(function (t, r) {
	const n = ya('CloseButton', t),
		{ children: o, isDisabled: i, __css: a, ...s } = ga(t),
		l = {
			outline: 0,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			flexShrink: 0
		};
	return A(Ge.button, {
		type: 'button',
		'aria-label': 'Close',
		ref: r,
		disabled: i,
		__css: { ...l, ...n, ...a },
		...s,
		children: o || A(zA, { width: '1em', height: '1em' })
	});
});
oS.displayName = 'CloseButton';
var MA = {
		top: [],
		'top-left': [],
		'top-right': [],
		'bottom-left': [],
		bottom: [],
		'bottom-right': []
	},
	ki = LA(MA);
function LA(e) {
	let t = e;
	const r = new Set(),
		n = (o) => {
			(t = o(t)), r.forEach((i) => i());
		};
	return {
		getState: () => t,
		subscribe: (o) => (
			r.add(o),
			() => {
				n(() => e), r.delete(o);
			}
		),
		removeToast: (o, i) => {
			n((a) => ({ ...a, [i]: a[i].filter((s) => s.id != o) }));
		},
		notify: (o, i) => {
			const a = OA(o, i),
				{ position: s, id: l } = a;
			return (
				n((u) => {
					var c, d;
					const p = s.includes('top')
						? [a, ...((c = u[s]) != null ? c : [])]
						: [...((d = u[s]) != null ? d : []), a];
					return { ...u, [s]: p };
				}),
				l
			);
		},
		update: (o, i) => {
			o &&
				n((a) => {
					const s = { ...a },
						{ position: l, index: u } = Sg(s, o);
					return (
						l && u !== -1 && (s[l][u] = { ...s[l][u], ...i, message: BA(i) }), s
					);
				});
		},
		closeAll: ({ positions: o } = {}) => {
			n((i) =>
				(
					o ?? [
						'bottom',
						'bottom-right',
						'bottom-left',
						'top',
						'top-left',
						'top-right'
					]
				).reduce(
					(l, u) => ((l[u] = i[u].map((c) => ({ ...c, requestClose: !0 }))), l),
					{ ...i }
				)
			);
		},
		close: (o) => {
			n((i) => {
				const a = Zb(i, o);
				return a
					? {
							...i,
							[a]: i[a].map((s) => (s.id == o ? { ...s, requestClose: !0 } : s))
					  }
					: i;
			});
		},
		isActive: (o) => Boolean(Sg(ki.getState(), o).position)
	};
}
var kg = 0;
function OA(e, t = {}) {
	var r, n;
	kg += 1;
	const o = (r = t.id) != null ? r : kg,
		i = (n = t.position) != null ? n : 'bottom';
	return {
		id: o,
		message: e,
		position: i,
		duration: t.duration,
		onCloseComplete: t.onCloseComplete,
		onRequestRemove: () => ki.removeToast(String(o), i),
		status: t.status,
		requestClose: !1,
		containerStyle: t.containerStyle
	};
}
var IA = (e) => {
	const {
			status: t,
			variant: r = 'solid',
			id: n,
			title: o,
			isClosable: i,
			onClose: a,
			description: s,
			icon: l
		} = e,
		u = n
			? {
					root: `toast-${n}`,
					title: `toast-${n}-title`,
					description: `toast-${n}-description`
			  }
			: void 0;
	return be(nS, {
		addRole: !1,
		status: t,
		variant: r,
		id: u == null ? void 0 : u.root,
		alignItems: 'start',
		borderRadius: 'md',
		boxShadow: 'lg',
		paddingEnd: 8,
		textAlign: 'start',
		width: 'auto',
		children: [
			A(tS, { children: l }),
			be(Ge.div, {
				flex: '1',
				maxWidth: '100%',
				children: [
					o && A(rS, { id: u == null ? void 0 : u.title, children: o }),
					s &&
						A(eS, {
							id: u == null ? void 0 : u.description,
							display: 'block',
							children: s
						})
				]
			}),
			i &&
				A(oS, {
					size: 'sm',
					onClick: a,
					position: 'absolute',
					insetEnd: 1,
					top: 1
				})
		]
	});
};
function BA(e = {}) {
	const { render: t, toastComponent: r = IA } = e;
	return (o) =>
		typeof t == 'function' ? t({ ...o, ...e }) : A(r, { ...o, ...e });
}
function DA(e, t = []) {
	const r = C.useRef(e);
	return (
		C.useEffect(() => {
			r.current = e;
		}),
		C.useCallback((...n) => {
			var o;
			return (o = r.current) == null ? void 0 : o.call(r, ...n);
		}, t)
	);
}
function FA(e, t) {
	const r = DA(e);
	C.useEffect(() => {
		if (t == null) return;
		let n = null;
		return (
			(n = window.setTimeout(() => {
				r();
			}, t)),
			() => {
				n && window.clearTimeout(n);
			}
		);
	}, [t, r]);
}
function Cg(e, t) {
	const r = C.useRef(!1),
		n = C.useRef(!1);
	C.useEffect(() => {
		if (r.current && n.current) return e();
		n.current = !0;
	}, t),
		C.useEffect(
			() => (
				(r.current = !0),
				() => {
					r.current = !1;
				}
			),
			[]
		);
}
const Wp = C.createContext({
		transformPagePoint: (e) => e,
		isStatic: !1,
		reducedMotion: 'never'
	}),
	du = C.createContext({});
function NA() {
	return C.useContext(du).visualElement;
}
const Oo = C.createContext(null),
	fu = typeof document < 'u',
	Ci = fu ? C.useLayoutEffect : C.useEffect,
	iS = C.createContext({ strict: !1 });
function VA(e, t, r, n) {
	const o = NA(),
		i = C.useContext(iS),
		a = C.useContext(Oo),
		s = C.useContext(Wp).reducedMotion,
		l = C.useRef();
	(n = n || i.renderer),
		!l.current &&
			n &&
			(l.current = n(e, {
				visualState: t,
				parent: o,
				props: r,
				presenceId: a ? a.id : void 0,
				blockInitialAnimation: a ? a.initial === !1 : !1,
				reducedMotionConfig: s
			}));
	const u = l.current;
	return (
		Ci(() => {
			u && u.render();
		}),
		Ci(() => {
			u && u.animationState && u.animationState.animateChanges();
		}),
		Ci(() => () => u && u.notify('Unmount'), []),
		u
	);
}
function ro(e) {
	return (
		typeof e == 'object' && Object.prototype.hasOwnProperty.call(e, 'current')
	);
}
function jA(e, t, r) {
	return C.useCallback(
		(n) => {
			n && e.mount && e.mount(n),
				t && (n ? t.mount(n) : t.unmount()),
				r && (typeof r == 'function' ? r(n) : ro(r) && (r.current = n));
		},
		[t]
	);
}
function oa(e) {
	return typeof e == 'string' || Array.isArray(e);
}
function pu(e) {
	return typeof e == 'object' && typeof e.start == 'function';
}
const UA = [
	'initial',
	'animate',
	'exit',
	'whileHover',
	'whileDrag',
	'whileTap',
	'whileFocus',
	'whileInView'
];
function hu(e) {
	return pu(e.animate) || UA.some((t) => oa(e[t]));
}
function aS(e) {
	return Boolean(hu(e) || e.variants);
}
function WA(e, t) {
	if (hu(e)) {
		const { initial: r, animate: n } = e;
		return {
			initial: r === !1 || oa(r) ? r : void 0,
			animate: oa(n) ? n : void 0
		};
	}
	return e.inherit !== !1 ? t : {};
}
function HA(e) {
	const { initial: t, animate: r } = WA(e, C.useContext(du));
	return C.useMemo(() => ({ initial: t, animate: r }), [_g(t), _g(r)]);
}
function _g(e) {
	return Array.isArray(e) ? e.join(' ') : e;
}
const dr = (e) => ({ isEnabled: (t) => e.some((r) => !!t[r]) }),
	ia = {
		measureLayout: dr(['layout', 'layoutId', 'drag']),
		animation: dr([
			'animate',
			'exit',
			'variants',
			'whileHover',
			'whileTap',
			'whileFocus',
			'whileDrag',
			'whileInView'
		]),
		exit: dr(['exit']),
		drag: dr(['drag', 'dragControls']),
		focus: dr(['whileFocus']),
		hover: dr(['whileHover', 'onHoverStart', 'onHoverEnd']),
		tap: dr(['whileTap', 'onTap', 'onTapStart', 'onTapCancel']),
		pan: dr(['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd']),
		inView: dr(['whileInView', 'onViewportEnter', 'onViewportLeave'])
	};
function GA(e) {
	for (const t in e)
		t === 'projectionNodeConstructor'
			? (ia.projectionNodeConstructor = e[t])
			: (ia[t].Component = e[t]);
}
function mu(e) {
	const t = C.useRef(null);
	return t.current === null && (t.current = e()), t.current;
}
const _i = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
let qA = 1;
function KA() {
	return mu(() => {
		if (_i.hasEverUpdated) return qA++;
	});
}
const Hp = C.createContext({});
class YA extends nt.Component {
	getSnapshotBeforeUpdate() {
		const { visualElement: t, props: r } = this.props;
		return t && t.setProps(r), null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
}
const sS = C.createContext({}),
	XA = Symbol.for('motionComponentSymbol');
function QA({
	preloadedFeatures: e,
	createVisualElement: t,
	projectionNodeConstructor: r,
	useRender: n,
	useVisualState: o,
	Component: i
}) {
	e && GA(e);
	function a(l, u) {
		const c = { ...C.useContext(Wp), ...l, layoutId: ZA(l) },
			{ isStatic: d } = c;
		let f = null;
		const p = HA(l),
			v = d ? void 0 : KA(),
			b = o(l, d);
		if (!d && fu) {
			p.visualElement = VA(i, b, c, t);
			const k = C.useContext(iS).strict,
				h = C.useContext(sS);
			p.visualElement &&
				(f = p.visualElement.loadFeatures(
					c,
					k,
					e,
					v,
					r || ia.projectionNodeConstructor,
					h
				));
		}
		return C.createElement(
			YA,
			{ visualElement: p.visualElement, props: c },
			f,
			C.createElement(
				du.Provider,
				{ value: p },
				n(i, l, v, jA(b, p.visualElement, u), b, d, p.visualElement)
			)
		);
	}
	const s = C.forwardRef(a);
	return (s[XA] = i), s;
}
function ZA({ layoutId: e }) {
	const t = C.useContext(Hp).id;
	return t && e !== void 0 ? t + '-' + e : e;
}
function JA(e) {
	function t(n, o = {}) {
		return QA(e(n, o));
	}
	if (typeof Proxy > 'u') return t;
	const r = new Map();
	return new Proxy(t, {
		get: (n, o) => (r.has(o) || r.set(o, t(o)), r.get(o))
	});
}
const ez = [
	'animate',
	'circle',
	'defs',
	'desc',
	'ellipse',
	'g',
	'image',
	'line',
	'filter',
	'marker',
	'mask',
	'metadata',
	'path',
	'pattern',
	'polygon',
	'polyline',
	'rect',
	'stop',
	'switch',
	'symbol',
	'svg',
	'text',
	'tspan',
	'use',
	'view'
];
function Gp(e) {
	return typeof e != 'string' || e.includes('-')
		? !1
		: !!(ez.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const pl = {};
function tz(e) {
	Object.assign(pl, e);
}
const hl = [
		'transformPerspective',
		'x',
		'y',
		'z',
		'translateX',
		'translateY',
		'translateZ',
		'scale',
		'scaleX',
		'scaleY',
		'rotate',
		'rotateX',
		'rotateY',
		'rotateZ',
		'skew',
		'skewX',
		'skewY'
	],
	Ln = new Set(hl);
function lS(e, { layout: t, layoutId: r }) {
	return (
		Ln.has(e) ||
		e.startsWith('origin') ||
		((t || r !== void 0) && (!!pl[e] || e === 'opacity'))
	);
}
const ir = (e) => !!(e != null && e.getVelocity),
	rz = {
		x: 'translateX',
		y: 'translateY',
		z: 'translateZ',
		transformPerspective: 'perspective'
	},
	nz = (e, t) => hl.indexOf(e) - hl.indexOf(t);
function oz(
	{ transform: e, transformKeys: t },
	{ enableHardwareAcceleration: r = !0, allowTransformNone: n = !0 },
	o,
	i
) {
	let a = '';
	t.sort(nz);
	for (const s of t) a += `${rz[s] || s}(${e[s]}) `;
	return (
		r && !e.z && (a += 'translateZ(0)'),
		(a = a.trim()),
		i ? (a = i(e, o ? '' : a)) : n && o && (a = 'none'),
		a
	);
}
function uS(e) {
	return e.startsWith('--');
}
const iz = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e),
	$o = (e, t, r) => Math.min(Math.max(r, e), t),
	On = {
		test: (e) => typeof e == 'number',
		parse: parseFloat,
		transform: (e) => e
	},
	Ti = { ...On, transform: (e) => $o(0, 1, e) },
	ns = { ...On, default: 1 },
	Ei = (e) => Math.round(e * 1e5) / 1e5,
	aa = /(-)?([\d]*\.?[\d])+/g,
	sf =
		/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
	az =
		/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Sa(e) {
	return typeof e == 'string';
}
const xa = (e) => ({
		test: (t) => Sa(t) && t.endsWith(e) && t.split(' ').length === 1,
		parse: parseFloat,
		transform: (t) => `${t}${e}`
	}),
	Rr = xa('deg'),
	or = xa('%'),
	W = xa('px'),
	sz = xa('vh'),
	lz = xa('vw'),
	Tg = {
		...or,
		parse: (e) => or.parse(e) / 100,
		transform: (e) => or.transform(e * 100)
	},
	Eg = { ...On, transform: Math.round },
	cS = {
		borderWidth: W,
		borderTopWidth: W,
		borderRightWidth: W,
		borderBottomWidth: W,
		borderLeftWidth: W,
		borderRadius: W,
		radius: W,
		borderTopLeftRadius: W,
		borderTopRightRadius: W,
		borderBottomRightRadius: W,
		borderBottomLeftRadius: W,
		width: W,
		maxWidth: W,
		height: W,
		maxHeight: W,
		size: W,
		top: W,
		right: W,
		bottom: W,
		left: W,
		padding: W,
		paddingTop: W,
		paddingRight: W,
		paddingBottom: W,
		paddingLeft: W,
		margin: W,
		marginTop: W,
		marginRight: W,
		marginBottom: W,
		marginLeft: W,
		rotate: Rr,
		rotateX: Rr,
		rotateY: Rr,
		rotateZ: Rr,
		scale: ns,
		scaleX: ns,
		scaleY: ns,
		scaleZ: ns,
		skew: Rr,
		skewX: Rr,
		skewY: Rr,
		distance: W,
		translateX: W,
		translateY: W,
		translateZ: W,
		x: W,
		y: W,
		z: W,
		perspective: W,
		transformPerspective: W,
		opacity: Ti,
		originX: Tg,
		originY: Tg,
		originZ: W,
		zIndex: Eg,
		fillOpacity: Ti,
		strokeOpacity: Ti,
		numOctaves: Eg
	};
function qp(e, t, r, n) {
	const {
		style: o,
		vars: i,
		transform: a,
		transformKeys: s,
		transformOrigin: l
	} = e;
	s.length = 0;
	let u = !1,
		c = !1,
		d = !0;
	for (const f in t) {
		const p = t[f];
		if (uS(f)) {
			i[f] = p;
			continue;
		}
		const v = cS[f],
			b = iz(p, v);
		if (Ln.has(f)) {
			if (((u = !0), (a[f] = b), s.push(f), !d)) continue;
			p !== (v.default || 0) && (d = !1);
		} else f.startsWith('origin') ? ((c = !0), (l[f] = b)) : (o[f] = b);
	}
	if (
		(t.transform ||
			(u || n
				? (o.transform = oz(e, r, d, n))
				: o.transform && (o.transform = 'none')),
		c)
	) {
		const { originX: f = '50%', originY: p = '50%', originZ: v = 0 } = l;
		o.transformOrigin = `${f} ${p} ${v}`;
	}
}
const Kp = () => ({
	style: {},
	transform: {},
	transformKeys: [],
	transformOrigin: {},
	vars: {}
});
function dS(e, t, r) {
	for (const n in t) !ir(t[n]) && !lS(n, r) && (e[n] = t[n]);
}
function uz({ transformTemplate: e }, t, r) {
	return C.useMemo(() => {
		const n = Kp();
		return (
			qp(n, t, { enableHardwareAcceleration: !r }, e),
			Object.assign({}, n.vars, n.style)
		);
	}, [t]);
}
function cz(e, t, r) {
	const n = e.style || {},
		o = {};
	return (
		dS(o, n, e),
		Object.assign(o, uz(e, t, r)),
		e.transformValues ? e.transformValues(o) : o
	);
}
function dz(e, t, r) {
	const n = {},
		o = cz(e, t, r);
	return (
		e.drag &&
			e.dragListener !== !1 &&
			((n.draggable = !1),
			(o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = 'none'),
			(o.touchAction =
				e.drag === !0 ? 'none' : `pan-${e.drag === 'x' ? 'y' : 'x'}`)),
		(n.style = o),
		n
	);
}
const fz = [
		'animate',
		'exit',
		'variants',
		'whileHover',
		'whileTap',
		'whileFocus',
		'whileDrag',
		'whileInView'
	],
	pz = ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
	hz = ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
	mz = ['whileInView', 'onViewportEnter', 'onViewportLeave', 'viewport'],
	gz = new Set([
		'initial',
		'style',
		'values',
		'variants',
		'transition',
		'transformTemplate',
		'transformValues',
		'custom',
		'inherit',
		'layout',
		'layoutId',
		'layoutDependency',
		'onLayoutAnimationStart',
		'onLayoutAnimationComplete',
		'onLayoutMeasure',
		'onBeforeLayoutMeasure',
		'onAnimationStart',
		'onAnimationComplete',
		'onUpdate',
		'onDragStart',
		'onDrag',
		'onDragEnd',
		'onMeasureDragConstraints',
		'onDirectionLock',
		'onDragTransitionEnd',
		'drag',
		'dragControls',
		'dragListener',
		'dragConstraints',
		'dragDirectionLock',
		'dragSnapToOrigin',
		'_dragX',
		'_dragY',
		'dragElastic',
		'dragMomentum',
		'dragPropagation',
		'dragTransition',
		'onHoverStart',
		'onHoverEnd',
		'layoutScroll',
		...mz,
		...pz,
		...fz,
		...hz
	]);
function ml(e) {
	return gz.has(e);
}
let fS = (e) => !ml(e);
function vz(e) {
	e && (fS = (t) => (t.startsWith('on') ? !ml(t) : e(t)));
}
try {
	vz(require('@emotion/is-prop-valid').default);
} catch {}
function yz(e, t, r) {
	const n = {};
	for (const o in e)
		(fS(o) ||
			(r === !0 && ml(o)) ||
			(!t && !ml(o)) ||
			(e.draggable && o.startsWith('onDrag'))) &&
			(n[o] = e[o]);
	return n;
}
function Pg(e, t, r) {
	return typeof e == 'string' ? e : W.transform(t + r * e);
}
function bz(e, t, r) {
	const n = Pg(t, e.x, e.width),
		o = Pg(r, e.y, e.height);
	return `${n} ${o}`;
}
const Sz = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
	xz = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
function wz(e, t, r = 1, n = 0, o = !0) {
	e.pathLength = 1;
	const i = o ? Sz : xz;
	e[i.offset] = W.transform(-n);
	const a = W.transform(t),
		s = W.transform(r);
	e[i.array] = `${a} ${s}`;
}
function Yp(
	e,
	{
		attrX: t,
		attrY: r,
		originX: n,
		originY: o,
		pathLength: i,
		pathSpacing: a = 1,
		pathOffset: s = 0,
		...l
	},
	u,
	c,
	d
) {
	if ((qp(e, l, u, d), c)) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return;
	}
	(e.attrs = e.style), (e.style = {});
	const { attrs: f, style: p, dimensions: v } = e;
	f.transform && (v && (p.transform = f.transform), delete f.transform),
		v &&
			(n !== void 0 || o !== void 0 || p.transform) &&
			(p.transformOrigin = bz(
				v,
				n !== void 0 ? n : 0.5,
				o !== void 0 ? o : 0.5
			)),
		t !== void 0 && (f.x = t),
		r !== void 0 && (f.y = r),
		i !== void 0 && wz(f, i, a, s, !1);
}
const pS = () => ({ ...Kp(), attrs: {} }),
	Xp = (e) => typeof e == 'string' && e.toLowerCase() === 'svg';
function kz(e, t, r, n) {
	const o = C.useMemo(() => {
		const i = pS();
		return (
			Yp(i, t, { enableHardwareAcceleration: !1 }, Xp(n), e.transformTemplate),
			{ ...i.attrs, style: { ...i.style } }
		);
	}, [t]);
	if (e.style) {
		const i = {};
		dS(i, e.style, e), (o.style = { ...i, ...o.style });
	}
	return o;
}
function Cz(e = !1) {
	return (r, n, o, i, { latestValues: a }, s) => {
		const u = (Gp(r) ? kz : dz)(n, a, s, r),
			d = { ...yz(n, typeof r == 'string', e), ...u, ref: i };
		return o && (d['data-projection-id'] = o), C.createElement(r, d);
	};
}
const Qp = (e) => e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
function hS(e, { style: t, vars: r }, n, o) {
	Object.assign(e.style, t, o && o.getProjectionStyles(n));
	for (const i in r) e.style.setProperty(i, r[i]);
}
const mS = new Set([
	'baseFrequency',
	'diffuseConstant',
	'kernelMatrix',
	'kernelUnitLength',
	'keySplines',
	'keyTimes',
	'limitingConeAngle',
	'markerHeight',
	'markerWidth',
	'numOctaves',
	'targetX',
	'targetY',
	'surfaceScale',
	'specularConstant',
	'specularExponent',
	'stdDeviation',
	'tableValues',
	'viewBox',
	'gradientTransform',
	'pathLength',
	'startOffset',
	'textLength',
	'lengthAdjust'
]);
function gS(e, t, r, n) {
	hS(e, t, void 0, n);
	for (const o in t.attrs) e.setAttribute(mS.has(o) ? o : Qp(o), t.attrs[o]);
}
function Zp(e) {
	const { style: t } = e,
		r = {};
	for (const n in t) (ir(t[n]) || lS(n, e)) && (r[n] = t[n]);
	return r;
}
function vS(e) {
	const t = Zp(e);
	for (const r in e)
		if (ir(e[r])) {
			const n = r === 'x' || r === 'y' ? 'attr' + r.toUpperCase() : r;
			t[n] = e[r];
		}
	return t;
}
function Jp(e, t, r, n = {}, o = {}) {
	return (
		typeof t == 'function' && (t = t(r !== void 0 ? r : e.custom, n, o)),
		typeof t == 'string' && (t = e.variants && e.variants[t]),
		typeof t == 'function' && (t = t(r !== void 0 ? r : e.custom, n, o)),
		t
	);
}
const gl = (e) => Array.isArray(e),
	_z = (e) => Boolean(e && typeof e == 'object' && e.mix && e.toValue),
	Tz = (e) => (gl(e) ? e[e.length - 1] || 0 : e);
function $s(e) {
	const t = ir(e) ? e.get() : e;
	return _z(t) ? t.toValue() : t;
}
function Ez(
	{ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r },
	n,
	o,
	i
) {
	const a = { latestValues: Pz(n, o, i, e), renderState: t() };
	return r && (a.mount = (s) => r(n, s, a)), a;
}
const yS = (e) => (t, r) => {
	const n = C.useContext(du),
		o = C.useContext(Oo),
		i = () => Ez(e, t, n, o);
	return r ? i() : mu(i);
};
function Pz(e, t, r, n) {
	const o = {},
		i = n(e);
	for (const f in i) o[f] = $s(i[f]);
	let { initial: a, animate: s } = e;
	const l = hu(e),
		u = aS(e);
	t &&
		u &&
		!l &&
		e.inherit !== !1 &&
		(a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
	let c = r ? r.initial === !1 : !1;
	c = c || a === !1;
	const d = c ? s : a;
	return (
		d &&
			typeof d != 'boolean' &&
			!pu(d) &&
			(Array.isArray(d) ? d : [d]).forEach((p) => {
				const v = Jp(e, p);
				if (!v) return;
				const { transitionEnd: b, transition: k, ...h } = v;
				for (const m in h) {
					let g = h[m];
					if (Array.isArray(g)) {
						const S = c ? g.length - 1 : 0;
						g = g[S];
					}
					g !== null && (o[m] = g);
				}
				for (const m in b) o[m] = b[m];
			}),
		o
	);
}
const $z = {
		useVisualState: yS({
			scrapeMotionValuesFromProps: vS,
			createRenderState: pS,
			onMount: (e, t, { renderState: r, latestValues: n }) => {
				try {
					r.dimensions =
						typeof t.getBBox == 'function'
							? t.getBBox()
							: t.getBoundingClientRect();
				} catch {
					r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
				}
				Yp(
					r,
					n,
					{ enableHardwareAcceleration: !1 },
					Xp(t.tagName),
					e.transformTemplate
				),
					gS(t, r);
			}
		})
	},
	Rz = {
		useVisualState: yS({
			scrapeMotionValuesFromProps: Zp,
			createRenderState: Kp
		})
	};
function Az(e, { forwardMotionProps: t = !1 }, r, n, o) {
	return {
		...(Gp(e) ? $z : Rz),
		preloadedFeatures: r,
		useRender: Cz(t),
		createVisualElement: n,
		projectionNodeConstructor: o,
		Component: e
	};
}
var ce;
(function (e) {
	(e.Animate = 'animate'),
		(e.Hover = 'whileHover'),
		(e.Tap = 'whileTap'),
		(e.Drag = 'whileDrag'),
		(e.Focus = 'whileFocus'),
		(e.InView = 'whileInView'),
		(e.Exit = 'exit');
})(ce || (ce = {}));
function gu(e, t, r, n = { passive: !0 }) {
	return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
function lf(e, t, r, n) {
	C.useEffect(() => {
		const o = e.current;
		if (r && o) return gu(o, t, r, n);
	}, [e, t, r, n]);
}
function zz({ whileFocus: e, visualElement: t }) {
	const { animationState: r } = t,
		n = () => {
			r && r.setActive(ce.Focus, !0);
		},
		o = () => {
			r && r.setActive(ce.Focus, !1);
		};
	lf(t, 'focus', e ? n : void 0), lf(t, 'blur', e ? o : void 0);
}
const Rs = (e) => e.isPrimary !== !1;
function eh(e, t = 'page') {
	return { point: { x: e[t + 'X'], y: e[t + 'Y'] } };
}
const bS = (e, t = !1) => {
	const r = (n) => e(n, eh(n));
	return t ? (n) => Rs(n) && r(n) : r;
};
function bo(e, t, r, n) {
	return gu(e, t, bS(r, t === 'pointerdown'), n);
}
function vl(e, t, r, n) {
	return lf(e, t, r && bS(r, t === 'pointerdown'), n);
}
function SS(e) {
	let t = null;
	return () => {
		const r = () => {
			t = null;
		};
		return t === null ? ((t = e), r) : !1;
	};
}
const $g = SS('dragHorizontal'),
	Rg = SS('dragVertical');
function xS(e) {
	let t = !1;
	if (e === 'y') t = Rg();
	else if (e === 'x') t = $g();
	else {
		const r = $g(),
			n = Rg();
		r && n
			? (t = () => {
					r(), n();
			  })
			: (r && r(), n && n());
	}
	return t;
}
function wS() {
	const e = xS(!0);
	return e ? (e(), !1) : !0;
}
function Mz(e) {
	return e.type !== 'pen' && e.type !== 'touch';
}
function Ag(e, t, r) {
	return (n, o) => {
		!Mz(n) ||
			wS() ||
			(e.animationState && e.animationState.setActive(ce.Hover, t),
			r && r(n, o));
	};
}
function Lz({
	onHoverStart: e,
	onHoverEnd: t,
	whileHover: r,
	visualElement: n
}) {
	vl(n, 'pointerenter', e || r ? Ag(n, !0, e) : void 0, { passive: !e }),
		vl(n, 'pointerleave', t || r ? Ag(n, !1, t) : void 0, { passive: !t });
}
const kS = (e, t) => (t ? (e === t ? !0 : kS(e, t.parentElement)) : !1);
function th(e) {
	return C.useEffect(() => () => e(), []);
}
const Oz = (e, t) => (r) => t(e(r)),
	vu = (...e) => e.reduce(Oz);
function Iz({
	onTap: e,
	onTapStart: t,
	onTapCancel: r,
	whileTap: n,
	visualElement: o
}) {
	const i = e || t || r || n,
		a = C.useRef(!1),
		s = C.useRef(null),
		l = { passive: !(t || e || r || p) };
	function u() {
		s.current && s.current(), (s.current = null);
	}
	function c() {
		return (
			u(),
			(a.current = !1),
			o.animationState && o.animationState.setActive(ce.Tap, !1),
			!wS()
		);
	}
	function d(v, b) {
		c() && (kS(o.current, v.target) ? e && e(v, b) : r && r(v, b));
	}
	function f(v, b) {
		c() && r && r(v, b);
	}
	function p(v, b) {
		u(),
			!a.current &&
				((a.current = !0),
				(s.current = vu(
					bo(window, 'pointerup', d, l),
					bo(window, 'pointercancel', f, l)
				)),
				o.animationState && o.animationState.setActive(ce.Tap, !0),
				t && t(v, b));
	}
	vl(o, 'pointerdown', i ? p : void 0, l), th(u);
}
const Bz = 'production',
	CS = typeof process > 'u' || process.env === void 0 ? Bz : 'production',
	zg = new Set();
function _S(e, t, r) {
	e || zg.has(t) || (console.warn(t), r && console.warn(r), zg.add(t));
}
const uf = new WeakMap(),
	Dc = new WeakMap(),
	Dz = (e) => {
		const t = uf.get(e.target);
		t && t(e);
	},
	Fz = (e) => {
		e.forEach(Dz);
	};
function Nz({ root: e, ...t }) {
	const r = e || document;
	Dc.has(r) || Dc.set(r, {});
	const n = Dc.get(r),
		o = JSON.stringify(t);
	return n[o] || (n[o] = new IntersectionObserver(Fz, { root: e, ...t })), n[o];
}
function Vz(e, t, r) {
	const n = Nz(t);
	return (
		uf.set(e, r),
		n.observe(e),
		() => {
			uf.delete(e), n.unobserve(e);
		}
	);
}
function jz({
	visualElement: e,
	whileInView: t,
	onViewportEnter: r,
	onViewportLeave: n,
	viewport: o = {}
}) {
	const i = C.useRef({ hasEnteredView: !1, isInView: !1 });
	let a = Boolean(t || r || n);
	o.once && i.current.hasEnteredView && (a = !1),
		(typeof IntersectionObserver > 'u' ? Hz : Wz)(a, i.current, e, o);
}
const Uz = { some: 0, all: 1 };
function Wz(e, t, r, { root: n, margin: o, amount: i = 'some', once: a }) {
	C.useEffect(() => {
		if (!e || !r.current) return;
		const s = {
				root: n == null ? void 0 : n.current,
				rootMargin: o,
				threshold: typeof i == 'number' ? i : Uz[i]
			},
			l = (u) => {
				const { isIntersecting: c } = u;
				if (t.isInView === c || ((t.isInView = c), a && !c && t.hasEnteredView))
					return;
				c && (t.hasEnteredView = !0),
					r.animationState && r.animationState.setActive(ce.InView, c);
				const d = r.getProps(),
					f = c ? d.onViewportEnter : d.onViewportLeave;
				f && f(u);
			};
		return Vz(r.current, s, l);
	}, [e, n, o, i]);
}
function Hz(e, t, r, { fallback: n = !0 }) {
	C.useEffect(() => {
		!e ||
			!n ||
			(CS !== 'production' &&
				_S(
					!1,
					'IntersectionObserver not available on this device. whileInView animations will trigger on mount.'
				),
			requestAnimationFrame(() => {
				t.hasEnteredView = !0;
				const { onViewportEnter: o } = r.getProps();
				o && o(null),
					r.animationState && r.animationState.setActive(ce.InView, !0);
			}));
	}, [e]);
}
const Nr = (e) => (t) => (e(t), null),
	Gz = { inView: Nr(jz), tap: Nr(Iz), focus: Nr(zz), hover: Nr(Lz) };
function TS() {
	const e = C.useContext(Oo);
	if (e === null) return [!0, null];
	const { isPresent: t, onExitComplete: r, register: n } = e,
		o = C.useId();
	return C.useEffect(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0];
}
function qz() {
	return Kz(C.useContext(Oo));
}
function Kz(e) {
	return e === null ? !0 : e.isPresent;
}
function ES(e, t) {
	if (!Array.isArray(t)) return !1;
	const r = t.length;
	if (r !== e.length) return !1;
	for (let n = 0; n < r; n++) if (t[n] !== e[n]) return !1;
	return !0;
}
const Yz = (e) => /^\-?\d*\.?\d+$/.test(e),
	Xz = (e) => /^0[^.\s]+$/.test(e),
	br = { delta: 0, timestamp: 0 },
	PS = (1 / 60) * 1e3,
	Qz = typeof performance < 'u' ? () => performance.now() : () => Date.now(),
	$S =
		typeof window < 'u'
			? (e) => window.requestAnimationFrame(e)
			: (e) => setTimeout(() => e(Qz()), PS);
function Zz(e) {
	let t = [],
		r = [],
		n = 0,
		o = !1,
		i = !1;
	const a = new WeakSet(),
		s = {
			schedule: (l, u = !1, c = !1) => {
				const d = c && o,
					f = d ? t : r;
				return (
					u && a.add(l),
					f.indexOf(l) === -1 && (f.push(l), d && o && (n = t.length)),
					l
				);
			},
			cancel: (l) => {
				const u = r.indexOf(l);
				u !== -1 && r.splice(u, 1), a.delete(l);
			},
			process: (l) => {
				if (o) {
					i = !0;
					return;
				}
				if (((o = !0), ([t, r] = [r, t]), (r.length = 0), (n = t.length), n))
					for (let u = 0; u < n; u++) {
						const c = t[u];
						c(l), a.has(c) && (s.schedule(c), e());
					}
				(o = !1), i && ((i = !1), s.process(l));
			}
		};
	return s;
}
const Jz = 40;
let cf = !0,
	sa = !1,
	df = !1;
const wa = ['read', 'update', 'preRender', 'render', 'postRender'],
	yu = wa.reduce((e, t) => ((e[t] = Zz(() => (sa = !0))), e), {}),
	st = wa.reduce((e, t) => {
		const r = yu[t];
		return (e[t] = (n, o = !1, i = !1) => (sa || t6(), r.schedule(n, o, i))), e;
	}, {}),
	Zr = wa.reduce((e, t) => ((e[t] = yu[t].cancel), e), {}),
	Fc = wa.reduce((e, t) => ((e[t] = () => yu[t].process(br)), e), {}),
	e6 = (e) => yu[e].process(br),
	RS = (e) => {
		(sa = !1),
			(br.delta = cf ? PS : Math.max(Math.min(e - br.timestamp, Jz), 1)),
			(br.timestamp = e),
			(df = !0),
			wa.forEach(e6),
			(df = !1),
			sa && ((cf = !1), $S(RS));
	},
	t6 = () => {
		(sa = !0), (cf = !0), df || $S(RS);
	};
function rh(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function nh(e, t) {
	const r = e.indexOf(t);
	r > -1 && e.splice(r, 1);
}
class oh {
	constructor() {
		this.subscriptions = [];
	}
	add(t) {
		return rh(this.subscriptions, t), () => nh(this.subscriptions, t);
	}
	notify(t, r, n) {
		const o = this.subscriptions.length;
		if (o)
			if (o === 1) this.subscriptions[0](t, r, n);
			else
				for (let i = 0; i < o; i++) {
					const a = this.subscriptions[i];
					a && a(t, r, n);
				}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
}
function ih(e, t) {
	return t ? e * (1e3 / t) : 0;
}
const r6 = (e) => !isNaN(parseFloat(e));
class n6 {
	constructor(t, r = {}) {
		(this.version = '8.0.2'),
			(this.timeDelta = 0),
			(this.lastUpdated = 0),
			(this.canTrackVelocity = !1),
			(this.events = {}),
			(this.updateAndNotify = (n, o = !0) => {
				(this.prev = this.current), (this.current = n);
				const { delta: i, timestamp: a } = br;
				this.lastUpdated !== a &&
					((this.timeDelta = i),
					(this.lastUpdated = a),
					st.postRender(this.scheduleVelocityCheck)),
					this.prev !== this.current &&
						this.events.change &&
						this.events.change.notify(this.current),
					this.events.velocityChange &&
						this.events.velocityChange.notify(this.getVelocity()),
					o &&
						this.events.renderRequest &&
						this.events.renderRequest.notify(this.current);
			}),
			(this.scheduleVelocityCheck = () => st.postRender(this.velocityCheck)),
			(this.velocityCheck = ({ timestamp: n }) => {
				n !== this.lastUpdated &&
					((this.prev = this.current),
					this.events.velocityChange &&
						this.events.velocityChange.notify(this.getVelocity()));
			}),
			(this.hasAnimated = !1),
			(this.prev = this.current = t),
			(this.canTrackVelocity = r6(this.current)),
			(this.owner = r.owner);
	}
	onChange(t) {
		return this.on('change', t);
	}
	on(t, r) {
		return this.events[t] || (this.events[t] = new oh()), this.events[t].add(r);
	}
	clearListeners() {
		for (const t in this.events) this.events[t].clear();
	}
	attach(t) {
		this.passiveEffect = t;
	}
	set(t, r = !0) {
		!r || !this.passiveEffect
			? this.updateAndNotify(t, r)
			: this.passiveEffect(t, this.updateAndNotify);
	}
	setWithVelocity(t, r, n) {
		this.set(r), (this.prev = t), (this.timeDelta = n);
	}
	get() {
		return this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		return this.canTrackVelocity
			? ih(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
			: 0;
	}
	start(t) {
		return (
			this.stop(),
			new Promise((r) => {
				(this.hasAnimated = !0),
					(this.stopAnimation = t(r)),
					this.events.animationStart && this.events.animationStart.notify();
			}).then(() => {
				this.events.animationComplete && this.events.animationComplete.notify(),
					this.clearAnimation();
			})
		);
	}
	stop() {
		this.stopAnimation &&
			(this.stopAnimation(),
			this.events.animationCancel && this.events.animationCancel.notify()),
			this.clearAnimation();
	}
	isAnimating() {
		return !!this.stopAnimation;
	}
	clearAnimation() {
		this.stopAnimation = null;
	}
	destroy() {
		this.clearListeners(), this.stop();
	}
}
function Ro(e, t) {
	return new n6(e, t);
}
const ah = (e, t) => (r) =>
		Boolean(
			(Sa(r) && az.test(r) && r.startsWith(e)) ||
				(t && Object.prototype.hasOwnProperty.call(r, t))
		),
	AS = (e, t, r) => (n) => {
		if (!Sa(n)) return n;
		const [o, i, a, s] = n.match(aa);
		return {
			[e]: parseFloat(o),
			[t]: parseFloat(i),
			[r]: parseFloat(a),
			alpha: s !== void 0 ? parseFloat(s) : 1
		};
	},
	o6 = (e) => $o(0, 255, e),
	Nc = { ...On, transform: (e) => Math.round(o6(e)) },
	xn = {
		test: ah('rgb', 'red'),
		parse: AS('red', 'green', 'blue'),
		transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) =>
			'rgba(' +
			Nc.transform(e) +
			', ' +
			Nc.transform(t) +
			', ' +
			Nc.transform(r) +
			', ' +
			Ei(Ti.transform(n)) +
			')'
	};
function i6(e) {
	let t = '',
		r = '',
		n = '',
		o = '';
	return (
		e.length > 5
			? ((t = e.substring(1, 3)),
			  (r = e.substring(3, 5)),
			  (n = e.substring(5, 7)),
			  (o = e.substring(7, 9)))
			: ((t = e.substring(1, 2)),
			  (r = e.substring(2, 3)),
			  (n = e.substring(3, 4)),
			  (o = e.substring(4, 5)),
			  (t += t),
			  (r += r),
			  (n += n),
			  (o += o)),
		{
			red: parseInt(t, 16),
			green: parseInt(r, 16),
			blue: parseInt(n, 16),
			alpha: o ? parseInt(o, 16) / 255 : 1
		}
	);
}
const ff = { test: ah('#'), parse: i6, transform: xn.transform },
	no = {
		test: ah('hsl', 'hue'),
		parse: AS('hue', 'saturation', 'lightness'),
		transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) =>
			'hsla(' +
			Math.round(e) +
			', ' +
			or.transform(Ei(t)) +
			', ' +
			or.transform(Ei(r)) +
			', ' +
			Ei(Ti.transform(n)) +
			')'
	},
	qe = {
		test: (e) => xn.test(e) || ff.test(e) || no.test(e),
		parse: (e) =>
			xn.test(e) ? xn.parse(e) : no.test(e) ? no.parse(e) : ff.parse(e),
		transform: (e) =>
			Sa(e) ? e : e.hasOwnProperty('red') ? xn.transform(e) : no.transform(e)
	},
	zS = '${c}',
	MS = '${n}';
function a6(e) {
	var t, r;
	return (
		isNaN(e) &&
		Sa(e) &&
		(((t = e.match(aa)) === null || t === void 0 ? void 0 : t.length) || 0) +
			(((r = e.match(sf)) === null || r === void 0 ? void 0 : r.length) || 0) >
			0
	);
}
function yl(e) {
	typeof e == 'number' && (e = `${e}`);
	const t = [];
	let r = 0,
		n = 0;
	const o = e.match(sf);
	o && ((r = o.length), (e = e.replace(sf, zS)), t.push(...o.map(qe.parse)));
	const i = e.match(aa);
	return (
		i && ((n = i.length), (e = e.replace(aa, MS)), t.push(...i.map(On.parse))),
		{ values: t, numColors: r, numNumbers: n, tokenised: e }
	);
}
function LS(e) {
	return yl(e).values;
}
function OS(e) {
	const { values: t, numColors: r, tokenised: n } = yl(e),
		o = t.length;
	return (i) => {
		let a = n;
		for (let s = 0; s < o; s++)
			a = a.replace(s < r ? zS : MS, s < r ? qe.transform(i[s]) : Ei(i[s]));
		return a;
	};
}
const s6 = (e) => (typeof e == 'number' ? 0 : e);
function l6(e) {
	const t = LS(e);
	return OS(e)(t.map(s6));
}
const Jr = {
		test: a6,
		parse: LS,
		createTransformer: OS,
		getAnimatableNone: l6
	},
	u6 = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function c6(e) {
	const [t, r] = e.slice(0, -1).split('(');
	if (t === 'drop-shadow') return e;
	const [n] = r.match(aa) || [];
	if (!n) return e;
	const o = r.replace(n, '');
	let i = u6.has(t) ? 1 : 0;
	return n !== r && (i *= 100), t + '(' + i + o + ')';
}
const d6 = /([a-z-]*)\(.*?\)/g,
	pf = {
		...Jr,
		getAnimatableNone: (e) => {
			const t = e.match(d6);
			return t ? t.map(c6).join(' ') : e;
		}
	},
	f6 = {
		...cS,
		color: qe,
		backgroundColor: qe,
		outlineColor: qe,
		fill: qe,
		stroke: qe,
		borderColor: qe,
		borderTopColor: qe,
		borderRightColor: qe,
		borderBottomColor: qe,
		borderLeftColor: qe,
		filter: pf,
		WebkitFilter: pf
	},
	sh = (e) => f6[e];
function lh(e, t) {
	var r;
	let n = sh(e);
	return (
		n !== pf && (n = Jr),
		(r = n.getAnimatableNone) === null || r === void 0 ? void 0 : r.call(n, t)
	);
}
const IS = (e) => (t) => t.test(e),
	p6 = { test: (e) => e === 'auto', parse: (e) => e },
	BS = [On, W, or, Rr, lz, sz, p6],
	Zo = (e) => BS.find(IS(e)),
	h6 = [...BS, qe, Jr],
	m6 = (e) => h6.find(IS(e));
function g6(e) {
	const t = {};
	return e.values.forEach((r, n) => (t[n] = r.get())), t;
}
function v6(e) {
	const t = {};
	return e.values.forEach((r, n) => (t[n] = r.getVelocity())), t;
}
function bu(e, t, r) {
	const n = e.getProps();
	return Jp(n, t, r !== void 0 ? r : n.custom, g6(e), v6(e));
}
function y6(e, t, r) {
	e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, Ro(r));
}
function b6(e, t) {
	const r = bu(e, t);
	let {
		transitionEnd: n = {},
		transition: o = {},
		...i
	} = r ? e.makeTargetAnimatable(r, !1) : {};
	i = { ...i, ...n };
	for (const a in i) {
		const s = Tz(i[a]);
		y6(e, a, s);
	}
}
function S6(e, t, r) {
	var n, o;
	const i = Object.keys(t).filter((s) => !e.hasValue(s)),
		a = i.length;
	if (a)
		for (let s = 0; s < a; s++) {
			const l = i[s],
				u = t[l];
			let c = null;
			Array.isArray(u) && (c = u[0]),
				c === null &&
					(c =
						(o = (n = r[l]) !== null && n !== void 0 ? n : e.readValue(l)) !==
							null && o !== void 0
							? o
							: t[l]),
				c != null &&
					(typeof c == 'string' && (Yz(c) || Xz(c))
						? (c = parseFloat(c))
						: !m6(c) && Jr.test(u) && (c = lh(l, u)),
					e.addValue(l, Ro(c, { owner: e })),
					r[l] === void 0 && (r[l] = c),
					c !== null && e.setBaseTarget(l, c));
		}
}
function x6(e, t) {
	return t ? (t[e] || t.default || t).from : void 0;
}
function w6(e, t, r) {
	var n;
	const o = {};
	for (const i in e) {
		const a = x6(i, t);
		o[i] =
			a !== void 0
				? a
				: (n = r.getValue(i)) === null || n === void 0
				? void 0
				: n.get();
	}
	return o;
}
function bl(e) {
	return Boolean(ir(e) && e.add);
}
const k6 = (e, t) => `${e}: ${t}`;
function C6(e, t) {
	const { MotionAppearAnimations: r } = window,
		n = k6(e, Ln.has(t) ? 'transform' : t),
		o = r && r.get(n);
	return o
		? (st.render(() => {
				try {
					o.cancel(), r.delete(n);
				} catch {}
		  }),
		  o.currentTime || 0)
		: 0;
}
const _6 = 'framerAppearId',
	T6 = 'data-' + Qp(_6);
var E6 = function () {},
	Sl = function () {};
const As = (e) => e * 1e3,
	P6 = { current: !1 },
	uh = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
	ch = (e) => (t) => 1 - e(1 - t),
	dh = (e) => e * e,
	$6 = ch(dh),
	fh = uh(dh),
	Ce = (e, t, r) => -r * e + r * t + e;
function Vc(e, t, r) {
	return (
		r < 0 && (r += 1),
		r > 1 && (r -= 1),
		r < 1 / 6
			? e + (t - e) * 6 * r
			: r < 1 / 2
			? t
			: r < 2 / 3
			? e + (t - e) * (2 / 3 - r) * 6
			: e
	);
}
function R6({ hue: e, saturation: t, lightness: r, alpha: n }) {
	(e /= 360), (t /= 100), (r /= 100);
	let o = 0,
		i = 0,
		a = 0;
	if (!t) o = i = a = r;
	else {
		const s = r < 0.5 ? r * (1 + t) : r + t - r * t,
			l = 2 * r - s;
		(o = Vc(l, s, e + 1 / 3)), (i = Vc(l, s, e)), (a = Vc(l, s, e - 1 / 3));
	}
	return {
		red: Math.round(o * 255),
		green: Math.round(i * 255),
		blue: Math.round(a * 255),
		alpha: n
	};
}
const jc = (e, t, r) => {
		const n = e * e;
		return Math.sqrt(Math.max(0, r * (t * t - n) + n));
	},
	A6 = [ff, xn, no],
	z6 = (e) => A6.find((t) => t.test(e));
function Mg(e) {
	const t = z6(e);
	let r = t.parse(e);
	return t === no && (r = R6(r)), r;
}
const DS = (e, t) => {
	const r = Mg(e),
		n = Mg(t),
		o = { ...r };
	return (i) => (
		(o.red = jc(r.red, n.red, i)),
		(o.green = jc(r.green, n.green, i)),
		(o.blue = jc(r.blue, n.blue, i)),
		(o.alpha = Ce(r.alpha, n.alpha, i)),
		xn.transform(o)
	);
};
function FS(e, t) {
	return typeof e == 'number'
		? (r) => Ce(e, t, r)
		: qe.test(e)
		? DS(e, t)
		: VS(e, t);
}
const NS = (e, t) => {
		const r = [...e],
			n = r.length,
			o = e.map((i, a) => FS(i, t[a]));
		return (i) => {
			for (let a = 0; a < n; a++) r[a] = o[a](i);
			return r;
		};
	},
	M6 = (e, t) => {
		const r = { ...e, ...t },
			n = {};
		for (const o in r)
			e[o] !== void 0 && t[o] !== void 0 && (n[o] = FS(e[o], t[o]));
		return (o) => {
			for (const i in n) r[i] = n[i](o);
			return r;
		};
	},
	VS = (e, t) => {
		const r = Jr.createTransformer(t),
			n = yl(e),
			o = yl(t);
		return n.numColors === o.numColors && n.numNumbers >= o.numNumbers
			? vu(NS(n.values, o.values), r)
			: (a) => `${a > 0 ? t : e}`;
	},
	xl = (e, t, r) => {
		const n = t - e;
		return n === 0 ? 1 : (r - e) / n;
	},
	Lg = (e, t) => (r) => Ce(e, t, r);
function L6(e) {
	return typeof e == 'number'
		? Lg
		: typeof e == 'string'
		? qe.test(e)
			? DS
			: VS
		: Array.isArray(e)
		? NS
		: typeof e == 'object'
		? M6
		: Lg;
}
function O6(e, t, r) {
	const n = [],
		o = r || L6(e[0]),
		i = e.length - 1;
	for (let a = 0; a < i; a++) {
		let s = o(e[a], e[a + 1]);
		if (t) {
			const l = Array.isArray(t) ? t[a] : t;
			s = vu(l, s);
		}
		n.push(s);
	}
	return n;
}
function jS(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
	const i = e.length;
	Sl(i === t.length),
		Sl(!n || !Array.isArray(n) || n.length === i - 1),
		e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
	const a = O6(t, n, o),
		s = a.length,
		l = (u) => {
			let c = 0;
			if (s > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
			const d = xl(e[c], e[c + 1], u);
			return a[c](d);
		};
	return r ? (u) => l($o(e[0], e[i - 1], u)) : l;
}
const ph = (e) => e,
	US = (e, t, r) =>
		(((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e,
	I6 = 1e-7,
	B6 = 12;
function D6(e, t, r, n, o) {
	let i,
		a,
		s = 0;
	do (a = t + (r - t) / 2), (i = US(a, n, o) - e), i > 0 ? (r = a) : (t = a);
	while (Math.abs(i) > I6 && ++s < B6);
	return a;
}
function WS(e, t, r, n) {
	if (e === t && r === n) return ph;
	const o = (i) => D6(i, 0, 1, e, r);
	return (i) => (i === 0 || i === 1 ? i : US(o(i), t, n));
}
const HS = (e) => 1 - Math.sin(Math.acos(e)),
	hh = ch(HS),
	F6 = uh(hh),
	GS = WS(0.33, 1.53, 0.69, 0.99),
	mh = ch(GS),
	N6 = uh(mh),
	V6 = (e) =>
		(e *= 2) < 1 ? 0.5 * mh(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
	j6 = {
		linear: ph,
		easeIn: dh,
		easeInOut: fh,
		easeOut: $6,
		circIn: HS,
		circInOut: F6,
		circOut: hh,
		backIn: mh,
		backInOut: N6,
		backOut: GS,
		anticipate: V6
	},
	Og = (e) => {
		if (Array.isArray(e)) {
			Sl(e.length === 4);
			const [t, r, n, o] = e;
			return WS(t, r, n, o);
		} else if (typeof e == 'string') return j6[e];
		return e;
	},
	U6 = (e) => Array.isArray(e) && typeof e[0] != 'number';
function W6(e, t) {
	return e.map(() => t || fh).splice(0, e.length - 1);
}
function H6(e) {
	const t = e.length;
	return e.map((r, n) => (n !== 0 ? n / (t - 1) : 0));
}
function G6(e, t) {
	return e.map((r) => r * t);
}
function wl({ keyframes: e, ease: t = fh, times: r, duration: n = 300 }) {
	e = [...e];
	const o = wl[0],
		i = U6(t) ? t.map(Og) : Og(t),
		a = { done: !1, value: o },
		s = G6(r && r.length === wl.length ? r : H6(e), n);
	function l() {
		return jS(s, e, { ease: Array.isArray(i) ? i : W6(e, i) });
	}
	let u = l();
	return {
		next: (c) => ((a.value = u(c)), (a.done = c >= n), a),
		flipTarget: () => {
			e.reverse(), (u = l());
		}
	};
}
const Uc = 0.001,
	q6 = 0.01,
	Ig = 10,
	K6 = 0.05,
	Y6 = 1;
function X6({
	duration: e = 800,
	bounce: t = 0.25,
	velocity: r = 0,
	mass: n = 1
}) {
	let o, i;
	E6(e <= Ig * 1e3);
	let a = 1 - t;
	(a = $o(K6, Y6, a)),
		(e = $o(q6, Ig, e / 1e3)),
		a < 1
			? ((o = (u) => {
					const c = u * a,
						d = c * e,
						f = c - r,
						p = hf(u, a),
						v = Math.exp(-d);
					return Uc - (f / p) * v;
			  }),
			  (i = (u) => {
					const d = u * a * e,
						f = d * r + r,
						p = Math.pow(a, 2) * Math.pow(u, 2) * e,
						v = Math.exp(-d),
						b = hf(Math.pow(u, 2), a);
					return ((-o(u) + Uc > 0 ? -1 : 1) * ((f - p) * v)) / b;
			  }))
			: ((o = (u) => {
					const c = Math.exp(-u * e),
						d = (u - r) * e + 1;
					return -Uc + c * d;
			  }),
			  (i = (u) => {
					const c = Math.exp(-u * e),
						d = (r - u) * (e * e);
					return c * d;
			  }));
	const s = 5 / e,
		l = Z6(o, i, s);
	if (((e = e * 1e3), isNaN(l)))
		return { stiffness: 100, damping: 10, duration: e };
	{
		const u = Math.pow(l, 2) * n;
		return { stiffness: u, damping: a * 2 * Math.sqrt(n * u), duration: e };
	}
}
const Q6 = 12;
function Z6(e, t, r) {
	let n = r;
	for (let o = 1; o < Q6; o++) n = n - e(n) / t(n);
	return n;
}
function hf(e, t) {
	return e * Math.sqrt(1 - t * t);
}
const J6 = ['duration', 'bounce'],
	eM = ['stiffness', 'damping', 'mass'];
function Bg(e, t) {
	return t.some((r) => e[r] !== void 0);
}
function tM(e) {
	let t = {
		velocity: 0,
		stiffness: 100,
		damping: 10,
		mass: 1,
		isResolvedFromDuration: !1,
		...e
	};
	if (!Bg(e, eM) && Bg(e, J6)) {
		const r = X6(e);
		(t = { ...t, ...r, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
	}
	return t;
}
const rM = 5;
function qS({ keyframes: e, restSpeed: t = 2, restDelta: r = 0.01, ...n }) {
	let o = e[0],
		i = e[e.length - 1];
	const a = { done: !1, value: o },
		{
			stiffness: s,
			damping: l,
			mass: u,
			velocity: c,
			duration: d,
			isResolvedFromDuration: f
		} = tM(n);
	let p = nM,
		v = c ? -(c / 1e3) : 0;
	const b = l / (2 * Math.sqrt(s * u));
	function k() {
		const h = i - o,
			m = Math.sqrt(s / u) / 1e3;
		if ((r === void 0 && (r = Math.min(Math.abs(i - o) / 100, 0.4)), b < 1)) {
			const g = hf(m, b);
			p = (S) => {
				const P = Math.exp(-b * m * S);
				return (
					i -
					P * (((v + b * m * h) / g) * Math.sin(g * S) + h * Math.cos(g * S))
				);
			};
		} else if (b === 1) p = (g) => i - Math.exp(-m * g) * (h + (v + m * h) * g);
		else {
			const g = m * Math.sqrt(b * b - 1);
			p = (S) => {
				const P = Math.exp(-b * m * S),
					R = Math.min(g * S, 300);
				return (
					i - (P * ((v + b * m * h) * Math.sinh(R) + g * h * Math.cosh(R))) / g
				);
			};
		}
	}
	return (
		k(),
		{
			next: (h) => {
				const m = p(h);
				if (f) a.done = h >= d;
				else {
					let g = v;
					if (h !== 0)
						if (b < 1) {
							const R = Math.max(0, h - rM);
							g = ih(m - p(R), h - R);
						} else g = 0;
					const S = Math.abs(g) <= t,
						P = Math.abs(i - m) <= r;
					a.done = S && P;
				}
				return (a.value = a.done ? i : m), a;
			},
			flipTarget: () => {
				(v = -v), ([o, i] = [i, o]), k();
			}
		}
	);
}
qS.needsInterpolation = (e, t) => typeof e == 'string' || typeof t == 'string';
const nM = (e) => 0;
function oM({
	keyframes: e = [0],
	velocity: t = 0,
	power: r = 0.8,
	timeConstant: n = 350,
	restDelta: o = 0.5,
	modifyTarget: i
}) {
	const a = e[0],
		s = { done: !1, value: a };
	let l = r * t;
	const u = a + l,
		c = i === void 0 ? u : i(u);
	return (
		c !== u && (l = c - a),
		{
			next: (d) => {
				const f = -l * Math.exp(-d / n);
				return (s.done = !(f > o || f < -o)), (s.value = s.done ? c : c + f), s;
			},
			flipTarget: () => {}
		}
	);
}
const iM = { decay: oM, keyframes: wl, tween: wl, spring: qS };
function KS(e, t, r = 0) {
	return e - t - r;
}
function aM(e, t = 0, r = 0, n = !0) {
	return n ? KS(t + -e, t, r) : t - (e - t) + r;
}
function sM(e, t, r, n) {
	return n ? e >= t + r : e <= -r;
}
const lM = (e) => {
	const t = ({ delta: r }) => e(r);
	return { start: () => st.update(t, !0), stop: () => Zr.update(t) };
};
function kl({
	duration: e,
	driver: t = lM,
	elapsed: r = 0,
	repeat: n = 0,
	repeatType: o = 'loop',
	repeatDelay: i = 0,
	keyframes: a,
	autoplay: s = !0,
	onPlay: l,
	onStop: u,
	onComplete: c,
	onRepeat: d,
	onUpdate: f,
	type: p = 'keyframes',
	...v
}) {
	var b, k;
	let h,
		m = 0,
		g = e,
		S,
		P = !1,
		R = !0,
		$;
	const I = iM[a.length > 2 ? 'keyframes' : p],
		E = a[0],
		T = a[a.length - 1];
	!((k = (b = I).needsInterpolation) === null || k === void 0) &&
		k.call(b, E, T) &&
		(($ = jS([0, 100], [E, T], { clamp: !1 })), (a = [0, 100]));
	const M = I({ ...v, duration: e, keyframes: a });
	function N() {
		m++,
			o === 'reverse'
				? ((R = m % 2 === 0), (r = aM(r, g, i, R)))
				: ((r = KS(r, g, i)), o === 'mirror' && M.flipTarget()),
			(P = !1),
			d && d();
	}
	function B() {
		h.stop(), c && c();
	}
	function H(K) {
		if ((R || (K = -K), (r += K), !P)) {
			const Te = M.next(Math.max(0, r));
			(S = Te.value), $ && (S = $(S)), (P = R ? Te.done : r <= 0);
		}
		f && f(S),
			P &&
				(m === 0 && (g = g !== void 0 ? g : r),
				m < n ? sM(r, g, i, R) && N() : B());
	}
	function V() {
		l && l(), (h = t(H)), h.start();
	}
	return (
		s && V(),
		{
			stop: () => {
				u && u(), h.stop();
			},
			sample: (K) => M.next(Math.max(0, K))
		}
	);
}
function uM(e) {
	return !e || Array.isArray(e) || (typeof e == 'string' && YS[e]);
}
const li = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`,
	YS = {
		linear: 'linear',
		ease: 'ease',
		easeIn: 'ease-in',
		easeOut: 'ease-out',
		easeInOut: 'ease-in-out',
		circIn: li([0, 0.65, 0.55, 1]),
		circOut: li([0.55, 0, 1, 0.45]),
		backIn: li([0.31, 0.01, 0.66, -0.59]),
		backOut: li([0.33, 1.53, 0.69, 0.99])
	};
function cM(e) {
	if (e) return Array.isArray(e) ? li(e) : YS[e];
}
function dM(
	e,
	t,
	r,
	{
		delay: n = 0,
		duration: o,
		repeat: i = 0,
		repeatType: a = 'loop',
		ease: s,
		times: l
	} = {}
) {
	return e.animate(
		{ [t]: r, offset: l },
		{
			delay: n,
			duration: o,
			easing: cM(s),
			fill: 'both',
			iterations: i + 1,
			direction: a === 'reverse' ? 'alternate' : 'normal'
		}
	);
}
const os = 10;
function fM(e, t, { onUpdate: r, onComplete: n, ...o }) {
	let { keyframes: i, duration: a = 300, elapsed: s = 0, ease: l } = o;
	if (o.type === 'spring' || !uM(o.ease)) {
		const c = kl(o);
		let d = { done: !1, value: i[0] };
		const f = [];
		let p = 0;
		for (; !d.done; ) (d = c.sample(p)), f.push(d.value), (p += os);
		(i = f), (a = p - os), (l = 'linear');
	}
	const u = dM(e.owner.current, t, i, {
		...o,
		delay: -s,
		duration: a,
		ease: l
	});
	return (
		(u.onfinish = () => {
			e.set(i[i.length - 1]), n && n();
		}),
		() => {
			const { currentTime: c } = u;
			if (c) {
				const d = kl(o);
				e.setWithVelocity(d.sample(c - os).value, d.sample(c).value, os);
			}
			st.update(() => u.cancel());
		}
	);
}
function XS(e, t) {
	const r = performance.now(),
		n = ({ timestamp: o }) => {
			const i = o - r;
			i >= t && (Zr.read(n), e(i - t));
		};
	return st.read(n, !0), () => Zr.read(n);
}
function pM({ keyframes: e, elapsed: t, onUpdate: r, onComplete: n }) {
	const o = () => (r && r(e[e.length - 1]), n && n(), () => {});
	return t ? XS(o, -t) : o();
}
function hM({
	keyframes: e,
	velocity: t = 0,
	min: r,
	max: n,
	power: o = 0.8,
	timeConstant: i = 750,
	bounceStiffness: a = 500,
	bounceDamping: s = 10,
	restDelta: l = 1,
	modifyTarget: u,
	driver: c,
	onUpdate: d,
	onComplete: f,
	onStop: p
}) {
	const v = e[0];
	let b;
	function k(S) {
		return (r !== void 0 && S < r) || (n !== void 0 && S > n);
	}
	function h(S) {
		return r === void 0
			? n
			: n === void 0 || Math.abs(r - S) < Math.abs(n - S)
			? r
			: n;
	}
	function m(S) {
		b == null || b.stop(),
			(b = kl({
				keyframes: [0, 1],
				velocity: 0,
				...S,
				driver: c,
				onUpdate: (P) => {
					var R;
					d == null || d(P),
						(R = S.onUpdate) === null || R === void 0 || R.call(S, P);
				},
				onComplete: f,
				onStop: p
			}));
	}
	function g(S) {
		m({ type: 'spring', stiffness: a, damping: s, restDelta: l, ...S });
	}
	if (k(v)) g({ velocity: t, keyframes: [v, h(v)] });
	else {
		let S = o * t + v;
		typeof u < 'u' && (S = u(S));
		const P = h(S),
			R = P === r ? -1 : 1;
		let $, I;
		const E = (T) => {
			($ = I),
				(I = T),
				(t = ih(T - $, br.delta)),
				((R === 1 && T > P) || (R === -1 && T < P)) &&
					g({ keyframes: [T, P], velocity: t });
		};
		m({
			type: 'decay',
			keyframes: [v, 0],
			velocity: t,
			timeConstant: i,
			power: o,
			restDelta: l,
			modifyTarget: u,
			onUpdate: k(S) ? E : void 0
		});
	}
	return { stop: () => (b == null ? void 0 : b.stop()) };
}
const cn = () => ({
		type: 'spring',
		stiffness: 500,
		damping: 25,
		restSpeed: 10
	}),
	is = (e) => ({
		type: 'spring',
		stiffness: 550,
		damping: e === 0 ? 2 * Math.sqrt(550) : 30,
		restSpeed: 10
	}),
	Wc = () => ({ type: 'keyframes', ease: 'linear', duration: 0.3 }),
	mM = { type: 'keyframes', duration: 0.8 },
	Dg = {
		x: cn,
		y: cn,
		z: cn,
		rotate: cn,
		rotateX: cn,
		rotateY: cn,
		rotateZ: cn,
		scaleX: is,
		scaleY: is,
		scale: is,
		opacity: Wc,
		backgroundColor: Wc,
		color: Wc,
		default: is
	},
	gM = (e, { keyframes: t }) =>
		t.length > 2 ? mM : (Dg[e] || Dg.default)(t[1]),
	mf = (e, t) =>
		e === 'zIndex'
			? !1
			: !!(
					typeof t == 'number' ||
					Array.isArray(t) ||
					(typeof t == 'string' && Jr.test(t) && !t.startsWith('url('))
			  );
function vM({
	when: e,
	delay: t,
	delayChildren: r,
	staggerChildren: n,
	staggerDirection: o,
	repeat: i,
	repeatType: a,
	repeatDelay: s,
	from: l,
	elapsed: u,
	...c
}) {
	return !!Object.keys(c).length;
}
function Fg(e) {
	return (
		e === 0 ||
		(typeof e == 'string' && parseFloat(e) === 0 && e.indexOf(' ') === -1)
	);
}
function Ng(e) {
	return typeof e == 'number' ? 0 : lh('', e);
}
function QS(e, t) {
	return e[t] || e.default || e;
}
function yM(e, t, r, n) {
	const o = mf(t, r);
	let i = n.from !== void 0 ? n.from : e.get();
	return (
		i === 'none' && o && typeof r == 'string'
			? (i = lh(t, r))
			: Fg(i) && typeof r == 'string'
			? (i = Ng(r))
			: !Array.isArray(r) && Fg(r) && typeof i == 'string' && (r = Ng(i)),
		Array.isArray(r) ? (r[0] === null && (r[0] = i), r) : [i, r]
	);
}
const Vg = {
		waapi: () => Object.hasOwnProperty.call(Element.prototype, 'animate')
	},
	Hc = {},
	ZS = {};
for (const e in Vg)
	ZS[e] = () => (Hc[e] === void 0 && (Hc[e] = Vg[e]()), Hc[e]);
const bM = new Set(['opacity']),
	gh =
		(e, t, r, n = {}) =>
		(o) => {
			const i = QS(n, e) || {},
				a = i.delay || n.delay || 0;
			let { elapsed: s = 0 } = n;
			s = s - As(a);
			const l = yM(t, e, r, i),
				u = l[0],
				c = l[l.length - 1],
				d = mf(e, u),
				f = mf(e, c);
			let p = {
				keyframes: l,
				velocity: t.getVelocity(),
				...i,
				elapsed: s,
				onUpdate: (h) => {
					t.set(h), i.onUpdate && i.onUpdate(h);
				},
				onComplete: () => {
					o(), i.onComplete && i.onComplete();
				}
			};
			if (!d || !f || P6.current || i.type === !1) return pM(p);
			if (i.type === 'inertia') {
				const h = hM(p);
				return () => h.stop();
			}
			vM(i) || (p = { ...p, ...gM(e, p) }),
				p.duration && (p.duration = As(p.duration)),
				p.repeatDelay && (p.repeatDelay = As(p.repeatDelay));
			const v = t.owner,
				b = v && v.current;
			if (
				ZS.waapi() &&
				bM.has(e) &&
				!p.repeatDelay &&
				p.repeatType !== 'mirror' &&
				p.damping !== 0 &&
				v &&
				b instanceof HTMLElement &&
				!v.getProps().onUpdate
			)
				return fM(t, e, p);
			{
				const h = kl(p);
				return () => h.stop();
			}
		};
function SM(e, t, r = {}) {
	e.notify('AnimationStart', t);
	let n;
	if (Array.isArray(t)) {
		const o = t.map((i) => gf(e, i, r));
		n = Promise.all(o);
	} else if (typeof t == 'string') n = gf(e, t, r);
	else {
		const o = typeof t == 'function' ? bu(e, t, r.custom) : t;
		n = JS(e, o, r);
	}
	return n.then(() => e.notify('AnimationComplete', t));
}
function gf(e, t, r = {}) {
	var n;
	const o = bu(e, t, r.custom);
	let { transition: i = e.getDefaultTransition() || {} } = o || {};
	r.transitionOverride && (i = r.transitionOverride);
	const a = o ? () => JS(e, o, r) : () => Promise.resolve(),
		s =
			!((n = e.variantChildren) === null || n === void 0) && n.size
				? (u = 0) => {
						const {
							delayChildren: c = 0,
							staggerChildren: d,
							staggerDirection: f
						} = i;
						return xM(e, t, c + u, d, f, r);
				  }
				: () => Promise.resolve(),
		{ when: l } = i;
	if (l) {
		const [u, c] = l === 'beforeChildren' ? [a, s] : [s, a];
		return u().then(c);
	} else return Promise.all([a(), s(r.delay)]);
}
function JS(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
	var i;
	let {
		transition: a = e.getDefaultTransition(),
		transitionEnd: s,
		...l
	} = e.makeTargetAnimatable(t);
	const u = e.getValue('willChange');
	n && (a = n);
	const c = [],
		d =
			o &&
			((i = e.animationState) === null || i === void 0
				? void 0
				: i.getState()[o]);
	for (const f in l) {
		const p = e.getValue(f),
			v = l[f];
		if (!p || v === void 0 || (d && kM(d, f))) continue;
		let b = { delay: r, elapsed: 0, ...a };
		if (
			(e.shouldReduceMotion && Ln.has(f) && (b = { ...b, type: !1, delay: 0 }),
			!p.hasAnimated)
		) {
			const h = e.getProps()[T6];
			h && (b.elapsed = C6(h, f));
		}
		let k = p.start(gh(f, p, v, b));
		bl(u) && (u.add(f), (k = k.then(() => u.remove(f)))), c.push(k);
	}
	return Promise.all(c).then(() => {
		s && b6(e, s);
	});
}
function xM(e, t, r = 0, n = 0, o = 1, i) {
	const a = [],
		s = (e.variantChildren.size - 1) * n,
		l = o === 1 ? (u = 0) => u * n : (u = 0) => s - u * n;
	return (
		Array.from(e.variantChildren)
			.sort(wM)
			.forEach((u, c) => {
				a.push(
					gf(u, t, { ...i, delay: r + l(c) }).then(() =>
						u.notify('AnimationComplete', t)
					)
				);
			}),
		Promise.all(a)
	);
}
function wM(e, t) {
	return e.sortNodePosition(t);
}
function kM({ protectedKeys: e, needsAnimating: t }, r) {
	const n = e.hasOwnProperty(r) && t[r] !== !0;
	return (t[r] = !1), n;
}
const vh = [
		ce.Animate,
		ce.InView,
		ce.Focus,
		ce.Hover,
		ce.Tap,
		ce.Drag,
		ce.Exit
	],
	CM = [...vh].reverse(),
	_M = vh.length;
function TM(e) {
	return (t) =>
		Promise.all(t.map(({ animation: r, options: n }) => SM(e, r, n)));
}
function EM(e) {
	let t = TM(e);
	const r = $M();
	let n = !0;
	const o = (l, u) => {
		const c = bu(e, u);
		if (c) {
			const { transition: d, transitionEnd: f, ...p } = c;
			l = { ...l, ...p, ...f };
		}
		return l;
	};
	function i(l) {
		t = l(e);
	}
	function a(l, u) {
		const c = e.getProps(),
			d = e.getVariantContext(!0) || {},
			f = [],
			p = new Set();
		let v = {},
			b = 1 / 0;
		for (let h = 0; h < _M; h++) {
			const m = CM[h],
				g = r[m],
				S = c[m] !== void 0 ? c[m] : d[m],
				P = oa(S),
				R = m === u ? g.isActive : null;
			R === !1 && (b = h);
			let $ = S === d[m] && S !== c[m] && P;
			if (
				($ && n && e.manuallyAnimateOnMount && ($ = !1),
				(g.protectedKeys = { ...v }),
				(!g.isActive && R === null) ||
					(!S && !g.prevProp) ||
					pu(S) ||
					typeof S == 'boolean')
			)
				continue;
			const I = PM(g.prevProp, S);
			let E = I || (m === u && g.isActive && !$ && P) || (h > b && P);
			const T = Array.isArray(S) ? S : [S];
			let M = T.reduce(o, {});
			R === !1 && (M = {});
			const { prevResolvedValues: N = {} } = g,
				B = { ...N, ...M },
				H = (V) => {
					(E = !0), p.delete(V), (g.needsAnimating[V] = !0);
				};
			for (const V in B) {
				const K = M[V],
					Te = N[V];
				v.hasOwnProperty(V) ||
					(K !== Te
						? gl(K) && gl(Te)
							? !ES(K, Te) || I
								? H(V)
								: (g.protectedKeys[V] = !0)
							: K !== void 0
							? H(V)
							: p.add(V)
						: K !== void 0 && p.has(V)
						? H(V)
						: (g.protectedKeys[V] = !0));
			}
			(g.prevProp = S),
				(g.prevResolvedValues = M),
				g.isActive && (v = { ...v, ...M }),
				n && e.blockInitialAnimation && (E = !1),
				E &&
					!$ &&
					f.push(
						...T.map((V) => ({ animation: V, options: { type: m, ...l } }))
					);
		}
		if (p.size) {
			const h = {};
			p.forEach((m) => {
				const g = e.getBaseTarget(m);
				g !== void 0 && (h[m] = g);
			}),
				f.push({ animation: h });
		}
		let k = Boolean(f.length);
		return (
			n && c.initial === !1 && !e.manuallyAnimateOnMount && (k = !1),
			(n = !1),
			k ? t(f) : Promise.resolve()
		);
	}
	function s(l, u, c) {
		var d;
		if (r[l].isActive === u) return Promise.resolve();
		(d = e.variantChildren) === null ||
			d === void 0 ||
			d.forEach((p) => {
				var v;
				return (v = p.animationState) === null || v === void 0
					? void 0
					: v.setActive(l, u);
			}),
			(r[l].isActive = u);
		const f = a(c, l);
		for (const p in r) r[p].protectedKeys = {};
		return f;
	}
	return {
		animateChanges: a,
		setActive: s,
		setAnimateFunction: i,
		getState: () => r
	};
}
function PM(e, t) {
	return typeof t == 'string' ? t !== e : Array.isArray(t) ? !ES(t, e) : !1;
}
function dn(e = !1) {
	return {
		isActive: e,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	};
}
function $M() {
	return {
		[ce.Animate]: dn(!0),
		[ce.InView]: dn(),
		[ce.Hover]: dn(),
		[ce.Tap]: dn(),
		[ce.Drag]: dn(),
		[ce.Focus]: dn(),
		[ce.Exit]: dn()
	};
}
const RM = {
		animation: Nr(({ visualElement: e, animate: t }) => {
			e.animationState || (e.animationState = EM(e)),
				pu(t) && C.useEffect(() => t.subscribe(e), [t]);
		}),
		exit: Nr((e) => {
			const { custom: t, visualElement: r } = e,
				[n, o] = TS(),
				i = C.useContext(Oo);
			C.useEffect(() => {
				r.isPresent = n;
				const a =
					r.animationState &&
					r.animationState.setActive(ce.Exit, !n, {
						custom: (i && i.custom) || t
					});
				a && !n && a.then(o);
			}, [n]);
		})
	},
	jg = (e, t) => Math.abs(e - t);
function AM(e, t) {
	const r = jg(e.x, t.x),
		n = jg(e.y, t.y);
	return Math.sqrt(r ** 2 + n ** 2);
}
class ex {
	constructor(t, r, { transformPagePoint: n } = {}) {
		if (
			((this.startEvent = null),
			(this.lastMoveEvent = null),
			(this.lastMoveEventInfo = null),
			(this.handlers = {}),
			(this.updatePoint = () => {
				if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
				const u = qc(this.lastMoveEventInfo, this.history),
					c = this.startEvent !== null,
					d = AM(u.offset, { x: 0, y: 0 }) >= 3;
				if (!c && !d) return;
				const { point: f } = u,
					{ timestamp: p } = br;
				this.history.push({ ...f, timestamp: p });
				const { onStart: v, onMove: b } = this.handlers;
				c ||
					(v && v(this.lastMoveEvent, u),
					(this.startEvent = this.lastMoveEvent)),
					b && b(this.lastMoveEvent, u);
			}),
			(this.handlePointerMove = (u, c) => {
				Rs(u) &&
					((this.lastMoveEvent = u),
					(this.lastMoveEventInfo = Gc(c, this.transformPagePoint)),
					st.update(this.updatePoint, !0));
			}),
			(this.handlePointerUp = (u, c) => {
				if (!Rs(u)) return;
				this.end();
				const { onEnd: d, onSessionEnd: f } = this.handlers,
					p = qc(Gc(c, this.transformPagePoint), this.history);
				this.startEvent && d && d(u, p), f && f(u, p);
			}),
			!Rs(t))
		)
			return;
		(this.handlers = r), (this.transformPagePoint = n);
		const o = eh(t),
			i = Gc(o, this.transformPagePoint),
			{ point: a } = i,
			{ timestamp: s } = br;
		this.history = [{ ...a, timestamp: s }];
		const { onSessionStart: l } = r;
		l && l(t, qc(i, this.history)),
			(this.removeListeners = vu(
				bo(window, 'pointermove', this.handlePointerMove),
				bo(window, 'pointerup', this.handlePointerUp),
				bo(window, 'pointercancel', this.handlePointerUp)
			));
	}
	updateHandlers(t) {
		this.handlers = t;
	}
	end() {
		this.removeListeners && this.removeListeners(), Zr.update(this.updatePoint);
	}
}
function Gc(e, t) {
	return t ? { point: t(e.point) } : e;
}
function Ug(e, t) {
	return { x: e.x - t.x, y: e.y - t.y };
}
function qc({ point: e }, t) {
	return {
		point: e,
		delta: Ug(e, tx(t)),
		offset: Ug(e, zM(t)),
		velocity: MM(t, 0.1)
	};
}
function zM(e) {
	return e[0];
}
function tx(e) {
	return e[e.length - 1];
}
function MM(e, t) {
	if (e.length < 2) return { x: 0, y: 0 };
	let r = e.length - 1,
		n = null;
	const o = tx(e);
	for (; r >= 0 && ((n = e[r]), !(o.timestamp - n.timestamp > As(t))); ) r--;
	if (!n) return { x: 0, y: 0 };
	const i = (o.timestamp - n.timestamp) / 1e3;
	if (i === 0) return { x: 0, y: 0 };
	const a = { x: (o.x - n.x) / i, y: (o.y - n.y) / i };
	return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function bt(e) {
	return e.max - e.min;
}
function vf(e, t = 0, r = 0.01) {
	return Math.abs(e - t) <= r;
}
function Wg(e, t, r, n = 0.5) {
	(e.origin = n),
		(e.originPoint = Ce(t.min, t.max, e.origin)),
		(e.scale = bt(r) / bt(t)),
		(vf(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
		(e.translate = Ce(r.min, r.max, e.origin) - e.originPoint),
		(vf(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Pi(e, t, r, n) {
	Wg(e.x, t.x, r.x, n == null ? void 0 : n.originX),
		Wg(e.y, t.y, r.y, n == null ? void 0 : n.originY);
}
function Hg(e, t, r) {
	(e.min = r.min + t.min), (e.max = e.min + bt(t));
}
function LM(e, t, r) {
	Hg(e.x, t.x, r.x), Hg(e.y, t.y, r.y);
}
function Gg(e, t, r) {
	(e.min = t.min - r.min), (e.max = e.min + bt(t));
}
function $i(e, t, r) {
	Gg(e.x, t.x, r.x), Gg(e.y, t.y, r.y);
}
function OM(e, { min: t, max: r }, n) {
	return (
		t !== void 0 && e < t
			? (e = n ? Ce(t, e, n.min) : Math.max(e, t))
			: r !== void 0 && e > r && (e = n ? Ce(r, e, n.max) : Math.min(e, r)),
		e
	);
}
function qg(e, t, r) {
	return {
		min: t !== void 0 ? e.min + t : void 0,
		max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
	};
}
function IM(e, { top: t, left: r, bottom: n, right: o }) {
	return { x: qg(e.x, r, o), y: qg(e.y, t, n) };
}
function Kg(e, t) {
	let r = t.min - e.min,
		n = t.max - e.max;
	return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function BM(e, t) {
	return { x: Kg(e.x, t.x), y: Kg(e.y, t.y) };
}
function DM(e, t) {
	let r = 0.5;
	const n = bt(e),
		o = bt(t);
	return (
		o > n
			? (r = xl(t.min, t.max - n, e.min))
			: n > o && (r = xl(e.min, e.max - o, t.min)),
		$o(0, 1, r)
	);
}
function FM(e, t) {
	const r = {};
	return (
		t.min !== void 0 && (r.min = t.min - e.min),
		t.max !== void 0 && (r.max = t.max - e.min),
		r
	);
}
const yf = 0.35;
function NM(e = yf) {
	return (
		e === !1 ? (e = 0) : e === !0 && (e = yf),
		{ x: Yg(e, 'left', 'right'), y: Yg(e, 'top', 'bottom') }
	);
}
function Yg(e, t, r) {
	return { min: Xg(e, t), max: Xg(e, r) };
}
function Xg(e, t) {
	return typeof e == 'number' ? e : e[t] || 0;
}
const Qg = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
	Ri = () => ({ x: Qg(), y: Qg() }),
	Zg = () => ({ min: 0, max: 0 }),
	$e = () => ({ x: Zg(), y: Zg() });
function qt(e) {
	return [e('x'), e('y')];
}
function rx({ top: e, left: t, right: r, bottom: n }) {
	return { x: { min: t, max: r }, y: { min: e, max: n } };
}
function VM({ x: e, y: t }) {
	return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function jM(e, t) {
	if (!t) return e;
	const r = t({ x: e.left, y: e.top }),
		n = t({ x: e.right, y: e.bottom });
	return { top: r.y, left: r.x, bottom: n.y, right: n.x };
}
function Kc(e) {
	return e === void 0 || e === 1;
}
function bf({ scale: e, scaleX: t, scaleY: r }) {
	return !Kc(e) || !Kc(t) || !Kc(r);
}
function hn(e) {
	return bf(e) || nx(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function nx(e) {
	return Jg(e.x) || Jg(e.y);
}
function Jg(e) {
	return e && e !== '0%';
}
function Cl(e, t, r) {
	const n = e - r,
		o = t * n;
	return r + o;
}
function ev(e, t, r, n, o) {
	return o !== void 0 && (e = Cl(e, o, n)), Cl(e, r, n) + t;
}
function Sf(e, t = 0, r = 1, n, o) {
	(e.min = ev(e.min, t, r, n, o)), (e.max = ev(e.max, t, r, n, o));
}
function ox(e, { x: t, y: r }) {
	Sf(e.x, t.translate, t.scale, t.originPoint),
		Sf(e.y, r.translate, r.scale, r.originPoint);
}
function UM(e, t, r, n = !1) {
	var o, i;
	const a = r.length;
	if (!a) return;
	t.x = t.y = 1;
	let s, l;
	for (let u = 0; u < a; u++)
		(s = r[u]),
			(l = s.projectionDelta),
			((i = (o = s.instance) === null || o === void 0 ? void 0 : o.style) ===
				null || i === void 0
				? void 0
				: i.display) !== 'contents' &&
				(n &&
					s.options.layoutScroll &&
					s.scroll &&
					s !== s.root &&
					oo(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
				l && ((t.x *= l.x.scale), (t.y *= l.y.scale), ox(e, l)),
				n && hn(s.latestValues) && oo(e, s.latestValues));
	(t.x = tv(t.x)), (t.y = tv(t.y));
}
function tv(e) {
	return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
		? e
		: 1;
}
function Mr(e, t) {
	(e.min = e.min + t), (e.max = e.max + t);
}
function rv(e, t, [r, n, o]) {
	const i = t[o] !== void 0 ? t[o] : 0.5,
		a = Ce(e.min, e.max, i);
	Sf(e, t[r], t[n], a, t.scale);
}
const WM = ['x', 'scaleX', 'originX'],
	HM = ['y', 'scaleY', 'originY'];
function oo(e, t) {
	rv(e.x, t, WM), rv(e.y, t, HM);
}
function ix(e, t) {
	return rx(jM(e.getBoundingClientRect(), t));
}
function GM(e, t, r) {
	const n = ix(e, r),
		{ scroll: o } = t;
	return o && (Mr(n.x, o.offset.x), Mr(n.y, o.offset.y)), n;
}
const qM = new WeakMap();
class KM {
	constructor(t) {
		(this.openGlobalLock = null),
			(this.isDragging = !1),
			(this.currentDirection = null),
			(this.originPoint = { x: 0, y: 0 }),
			(this.constraints = !1),
			(this.hasMutatedConstraints = !1),
			(this.elastic = $e()),
			(this.visualElement = t);
	}
	start(t, { snapToCursor: r = !1 } = {}) {
		if (this.visualElement.isPresent === !1) return;
		const n = (s) => {
				this.stopAnimation(), r && this.snapToCursor(eh(s, 'page').point);
			},
			o = (s, l) => {
				var u;
				const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps();
				(c &&
					!d &&
					(this.openGlobalLock && this.openGlobalLock(),
					(this.openGlobalLock = xS(c)),
					!this.openGlobalLock)) ||
					((this.isDragging = !0),
					(this.currentDirection = null),
					this.resolveConstraints(),
					this.visualElement.projection &&
						((this.visualElement.projection.isAnimationBlocked = !0),
						(this.visualElement.projection.target = void 0)),
					qt((p) => {
						var v, b;
						let k = this.getAxisMotionValue(p).get() || 0;
						if (or.test(k)) {
							const h =
								(b =
									(v = this.visualElement.projection) === null || v === void 0
										? void 0
										: v.layout) === null || b === void 0
									? void 0
									: b.layoutBox[p];
							h && (k = bt(h) * (parseFloat(k) / 100));
						}
						this.originPoint[p] = k;
					}),
					f == null || f(s, l),
					(u = this.visualElement.animationState) === null ||
						u === void 0 ||
						u.setActive(ce.Drag, !0));
			},
			i = (s, l) => {
				const {
					dragPropagation: u,
					dragDirectionLock: c,
					onDirectionLock: d,
					onDrag: f
				} = this.getProps();
				if (!u && !this.openGlobalLock) return;
				const { offset: p } = l;
				if (c && this.currentDirection === null) {
					(this.currentDirection = YM(p)),
						this.currentDirection !== null &&
							(d == null || d(this.currentDirection));
					return;
				}
				this.updateAxis('x', l.point, p),
					this.updateAxis('y', l.point, p),
					this.visualElement.render(),
					f == null || f(s, l);
			},
			a = (s, l) => this.stop(s, l);
		this.panSession = new ex(
			t,
			{ onSessionStart: n, onStart: o, onMove: i, onSessionEnd: a },
			{ transformPagePoint: this.visualElement.getTransformPagePoint() }
		);
	}
	stop(t, r) {
		const n = this.isDragging;
		if ((this.cancel(), !n)) return;
		const { velocity: o } = r;
		this.startAnimation(o);
		const { onDragEnd: i } = this.getProps();
		i == null || i(t, r);
	}
	cancel() {
		var t, r;
		(this.isDragging = !1),
			this.visualElement.projection &&
				(this.visualElement.projection.isAnimationBlocked = !1),
			(t = this.panSession) === null || t === void 0 || t.end(),
			(this.panSession = void 0);
		const { dragPropagation: n } = this.getProps();
		!n &&
			this.openGlobalLock &&
			(this.openGlobalLock(), (this.openGlobalLock = null)),
			(r = this.visualElement.animationState) === null ||
				r === void 0 ||
				r.setActive(ce.Drag, !1);
	}
	updateAxis(t, r, n) {
		const { drag: o } = this.getProps();
		if (!n || !as(t, o, this.currentDirection)) return;
		const i = this.getAxisMotionValue(t);
		let a = this.originPoint[t] + n[t];
		this.constraints &&
			this.constraints[t] &&
			(a = OM(a, this.constraints[t], this.elastic[t])),
			i.set(a);
	}
	resolveConstraints() {
		const { dragConstraints: t, dragElastic: r } = this.getProps(),
			{ layout: n } = this.visualElement.projection || {},
			o = this.constraints;
		t && ro(t)
			? this.constraints || (this.constraints = this.resolveRefConstraints())
			: t && n
			? (this.constraints = IM(n.layoutBox, t))
			: (this.constraints = !1),
			(this.elastic = NM(r)),
			o !== this.constraints &&
				n &&
				this.constraints &&
				!this.hasMutatedConstraints &&
				qt((i) => {
					this.getAxisMotionValue(i) &&
						(this.constraints[i] = FM(n.layoutBox[i], this.constraints[i]));
				});
	}
	resolveRefConstraints() {
		const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
		if (!t || !ro(t)) return !1;
		const n = t.current,
			{ projection: o } = this.visualElement;
		if (!o || !o.layout) return !1;
		const i = GM(n, o.root, this.visualElement.getTransformPagePoint());
		let a = BM(o.layout.layoutBox, i);
		if (r) {
			const s = r(VM(a));
			(this.hasMutatedConstraints = !!s), s && (a = rx(s));
		}
		return a;
	}
	startAnimation(t) {
		const {
				drag: r,
				dragMomentum: n,
				dragElastic: o,
				dragTransition: i,
				dragSnapToOrigin: a,
				onDragTransitionEnd: s
			} = this.getProps(),
			l = this.constraints || {},
			u = qt((c) => {
				if (!as(c, r, this.currentDirection)) return;
				let d = (l == null ? void 0 : l[c]) || {};
				a && (d = { min: 0, max: 0 });
				const f = o ? 200 : 1e6,
					p = o ? 40 : 1e7,
					v = {
						type: 'inertia',
						velocity: n ? t[c] : 0,
						bounceStiffness: f,
						bounceDamping: p,
						timeConstant: 750,
						restDelta: 1,
						restSpeed: 10,
						...i,
						...d
					};
				return this.startAxisValueAnimation(c, v);
			});
		return Promise.all(u).then(s);
	}
	startAxisValueAnimation(t, r) {
		const n = this.getAxisMotionValue(t);
		return n.start(gh(t, n, 0, r));
	}
	stopAnimation() {
		qt((t) => this.getAxisMotionValue(t).stop());
	}
	getAxisMotionValue(t) {
		var r;
		const n = '_drag' + t.toUpperCase(),
			o = this.visualElement.getProps()[n];
		return (
			o ||
			this.visualElement.getValue(
				t,
				((r = this.visualElement.getProps().initial) === null || r === void 0
					? void 0
					: r[t]) || 0
			)
		);
	}
	snapToCursor(t) {
		qt((r) => {
			const { drag: n } = this.getProps();
			if (!as(r, n, this.currentDirection)) return;
			const { projection: o } = this.visualElement,
				i = this.getAxisMotionValue(r);
			if (o && o.layout) {
				const { min: a, max: s } = o.layout.layoutBox[r];
				i.set(t[r] - Ce(a, s, 0.5));
			}
		});
	}
	scalePositionWithinConstraints() {
		var t;
		if (!this.visualElement.current) return;
		const { drag: r, dragConstraints: n } = this.getProps(),
			{ projection: o } = this.visualElement;
		if (!ro(n) || !o || !this.constraints) return;
		this.stopAnimation();
		const i = { x: 0, y: 0 };
		qt((s) => {
			const l = this.getAxisMotionValue(s);
			if (l) {
				const u = l.get();
				i[s] = DM({ min: u, max: u }, this.constraints[s]);
			}
		});
		const { transformTemplate: a } = this.visualElement.getProps();
		(this.visualElement.current.style.transform = a ? a({}, '') : 'none'),
			(t = o.root) === null || t === void 0 || t.updateScroll(),
			o.updateLayout(),
			this.resolveConstraints(),
			qt((s) => {
				if (!as(s, r, null)) return;
				const l = this.getAxisMotionValue(s),
					{ min: u, max: c } = this.constraints[s];
				l.set(Ce(u, c, i[s]));
			});
	}
	addListeners() {
		var t;
		if (!this.visualElement.current) return;
		qM.set(this.visualElement, this);
		const r = this.visualElement.current,
			n = bo(r, 'pointerdown', (u) => {
				const { drag: c, dragListener: d = !0 } = this.getProps();
				c && d && this.start(u);
			}),
			o = () => {
				const { dragConstraints: u } = this.getProps();
				ro(u) && (this.constraints = this.resolveRefConstraints());
			},
			{ projection: i } = this.visualElement,
			a = i.addEventListener('measure', o);
		i &&
			!i.layout &&
			((t = i.root) === null || t === void 0 || t.updateScroll(),
			i.updateLayout()),
			o();
		const s = gu(window, 'resize', () => this.scalePositionWithinConstraints()),
			l = i.addEventListener(
				'didUpdate',
				({ delta: u, hasLayoutChanged: c }) => {
					this.isDragging &&
						c &&
						(qt((d) => {
							const f = this.getAxisMotionValue(d);
							f &&
								((this.originPoint[d] += u[d].translate),
								f.set(f.get() + u[d].translate));
						}),
						this.visualElement.render());
				}
			);
		return () => {
			s(), n(), a(), l == null || l();
		};
	}
	getProps() {
		const t = this.visualElement.getProps(),
			{
				drag: r = !1,
				dragDirectionLock: n = !1,
				dragPropagation: o = !1,
				dragConstraints: i = !1,
				dragElastic: a = yf,
				dragMomentum: s = !0
			} = t;
		return {
			...t,
			drag: r,
			dragDirectionLock: n,
			dragPropagation: o,
			dragConstraints: i,
			dragElastic: a,
			dragMomentum: s
		};
	}
}
function as(e, t, r) {
	return (t === !0 || t === e) && (r === null || r === e);
}
function YM(e, t = 10) {
	let r = null;
	return Math.abs(e.y) > t ? (r = 'y') : Math.abs(e.x) > t && (r = 'x'), r;
}
function XM(e) {
	const { dragControls: t, visualElement: r } = e,
		n = mu(() => new KM(r));
	C.useEffect(() => t && t.subscribe(n), [n, t]),
		C.useEffect(() => n.addListeners(), [n]);
}
function QM({
	onPan: e,
	onPanStart: t,
	onPanEnd: r,
	onPanSessionStart: n,
	visualElement: o
}) {
	const i = e || t || r || n,
		a = C.useRef(null),
		{ transformPagePoint: s } = C.useContext(Wp),
		l = {
			onSessionStart: n,
			onStart: t,
			onMove: e,
			onEnd: (c, d) => {
				(a.current = null), r && r(c, d);
			}
		};
	C.useEffect(() => {
		a.current !== null && a.current.updateHandlers(l);
	});
	function u(c) {
		a.current = new ex(c, l, { transformPagePoint: s });
	}
	vl(o, 'pointerdown', i && u), th(() => a.current && a.current.end());
}
const ZM = { pan: Nr(QM), drag: Nr(XM) };
function xf(e) {
	return typeof e == 'string' && e.startsWith('var(--');
}
const ax = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function JM(e) {
	const t = ax.exec(e);
	if (!t) return [,];
	const [, r, n] = t;
	return [r, n];
}
function wf(e, t, r = 1) {
	const [n, o] = JM(e);
	if (!n) return;
	const i = window.getComputedStyle(t).getPropertyValue(n);
	return i ? i.trim() : xf(o) ? wf(o, t, r + 1) : o;
}
function eL(e, { ...t }, r) {
	const n = e.current;
	if (!(n instanceof Element)) return { target: t, transitionEnd: r };
	r && (r = { ...r }),
		e.values.forEach((o) => {
			const i = o.get();
			if (!xf(i)) return;
			const a = wf(i, n);
			a && o.set(a);
		});
	for (const o in t) {
		const i = t[o];
		if (!xf(i)) continue;
		const a = wf(i, n);
		a && ((t[o] = a), r && r[o] === void 0 && (r[o] = i));
	}
	return { target: t, transitionEnd: r };
}
const tL = new Set([
		'width',
		'height',
		'top',
		'left',
		'right',
		'bottom',
		'x',
		'y'
	]),
	sx = (e) => tL.has(e),
	rL = (e) => Object.keys(e).some(sx),
	lx = (e, t) => {
		e.set(t, !1), e.set(t);
	},
	nv = (e) => e === On || e === W;
var ov;
(function (e) {
	(e.width = 'width'),
		(e.height = 'height'),
		(e.left = 'left'),
		(e.right = 'right'),
		(e.top = 'top'),
		(e.bottom = 'bottom');
})(ov || (ov = {}));
const iv = (e, t) => parseFloat(e.split(', ')[t]),
	av =
		(e, t) =>
		(r, { transform: n }) => {
			if (n === 'none' || !n) return 0;
			const o = n.match(/^matrix3d\((.+)\)$/);
			if (o) return iv(o[1], t);
			{
				const i = n.match(/^matrix\((.+)\)$/);
				return i ? iv(i[1], e) : 0;
			}
		},
	nL = new Set(['x', 'y', 'z']),
	oL = hl.filter((e) => !nL.has(e));
function iL(e) {
	const t = [];
	return (
		oL.forEach((r) => {
			const n = e.getValue(r);
			n !== void 0 &&
				(t.push([r, n.get()]), n.set(r.startsWith('scale') ? 1 : 0));
		}),
		t.length && e.render(),
		t
	);
}
const sv = {
		width: ({ x: e }, { paddingLeft: t = '0', paddingRight: r = '0' }) =>
			e.max - e.min - parseFloat(t) - parseFloat(r),
		height: ({ y: e }, { paddingTop: t = '0', paddingBottom: r = '0' }) =>
			e.max - e.min - parseFloat(t) - parseFloat(r),
		top: (e, { top: t }) => parseFloat(t),
		left: (e, { left: t }) => parseFloat(t),
		bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
		right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
		x: av(4, 13),
		y: av(5, 14)
	},
	aL = (e, t, r) => {
		const n = t.measureViewportBox(),
			o = t.current,
			i = getComputedStyle(o),
			{ display: a } = i,
			s = {};
		a === 'none' && t.setStaticValue('display', e.display || 'block'),
			r.forEach((u) => {
				s[u] = sv[u](n, i);
			}),
			t.render();
		const l = t.measureViewportBox();
		return (
			r.forEach((u) => {
				const c = t.getValue(u);
				lx(c, s[u]), (e[u] = sv[u](l, i));
			}),
			e
		);
	},
	sL = (e, t, r = {}, n = {}) => {
		(t = { ...t }), (n = { ...n });
		const o = Object.keys(t).filter(sx);
		let i = [],
			a = !1;
		const s = [];
		if (
			(o.forEach((l) => {
				const u = e.getValue(l);
				if (!e.hasValue(l)) return;
				let c = r[l],
					d = Zo(c);
				const f = t[l];
				let p;
				if (gl(f)) {
					const v = f.length,
						b = f[0] === null ? 1 : 0;
					(c = f[b]), (d = Zo(c));
					for (let k = b; k < v; k++) p ? Sl(Zo(f[k]) === p) : (p = Zo(f[k]));
				} else p = Zo(f);
				if (d !== p)
					if (nv(d) && nv(p)) {
						const v = u.get();
						typeof v == 'string' && u.set(parseFloat(v)),
							typeof f == 'string'
								? (t[l] = parseFloat(f))
								: Array.isArray(f) && p === W && (t[l] = f.map(parseFloat));
					} else
						d != null &&
						d.transform &&
						p != null &&
						p.transform &&
						(c === 0 || f === 0)
							? c === 0
								? u.set(p.transform(c))
								: (t[l] = d.transform(f))
							: (a || ((i = iL(e)), (a = !0)),
							  s.push(l),
							  (n[l] = n[l] !== void 0 ? n[l] : t[l]),
							  lx(u, f));
			}),
			s.length)
		) {
			const l = s.indexOf('height') >= 0 ? window.pageYOffset : null,
				u = aL(t, e, s);
			return (
				i.length &&
					i.forEach(([c, d]) => {
						e.getValue(c).set(d);
					}),
				e.render(),
				fu && l !== null && window.scrollTo({ top: l }),
				{ target: u, transitionEnd: n }
			);
		} else return { target: t, transitionEnd: n };
	};
function lL(e, t, r, n) {
	return rL(t) ? sL(e, t, r, n) : { target: t, transitionEnd: n };
}
const uL = (e, t, r, n) => {
		const o = eL(e, t, n);
		return (t = o.target), (n = o.transitionEnd), lL(e, t, r, n);
	},
	kf = { current: null },
	ux = { current: !1 };
function cL() {
	if (((ux.current = !0), !!fu))
		if (window.matchMedia) {
			const e = window.matchMedia('(prefers-reduced-motion)'),
				t = () => (kf.current = e.matches);
			e.addListener(t), t();
		} else kf.current = !1;
}
function dL(e, t, r) {
	const { willChange: n } = t;
	for (const o in t) {
		const i = t[o],
			a = r[o];
		if (ir(i)) e.addValue(o, i), bl(n) && n.add(o);
		else if (ir(a)) e.addValue(o, Ro(i, { owner: e })), bl(n) && n.remove(o);
		else if (a !== i)
			if (e.hasValue(o)) {
				const s = e.getValue(o);
				!s.hasAnimated && s.set(i);
			} else {
				const s = e.getStaticValue(o);
				e.addValue(o, Ro(s !== void 0 ? s : i));
			}
	}
	for (const o in r) t[o] === void 0 && e.removeValue(o);
	return t;
}
const cx = Object.keys(ia),
	fL = cx.length,
	lv = [
		'AnimationStart',
		'AnimationComplete',
		'Update',
		'Unmount',
		'BeforeLayoutMeasure',
		'LayoutMeasure',
		'LayoutAnimationStart',
		'LayoutAnimationComplete'
	];
class pL {
	constructor(
		{ parent: t, props: r, reducedMotionConfig: n, visualState: o },
		i = {}
	) {
		(this.current = null),
			(this.children = new Set()),
			(this.isVariantNode = !1),
			(this.isControllingVariants = !1),
			(this.shouldReduceMotion = null),
			(this.values = new Map()),
			(this.isPresent = !0),
			(this.valueSubscriptions = new Map()),
			(this.prevMotionValues = {}),
			(this.events = {}),
			(this.propEventSubscriptions = {}),
			(this.notifyUpdate = () => this.notify('Update', this.latestValues)),
			(this.render = () => {
				this.current &&
					(this.triggerBuild(),
					this.renderInstance(
						this.current,
						this.renderState,
						this.props.style,
						this.projection
					));
			}),
			(this.scheduleRender = () => st.render(this.render, !1, !0));
		const { latestValues: a, renderState: s } = o;
		(this.latestValues = a),
			(this.baseTarget = { ...a }),
			(this.initialValues = r.initial ? { ...a } : {}),
			(this.renderState = s),
			(this.parent = t),
			(this.props = r),
			(this.depth = t ? t.depth + 1 : 0),
			(this.reducedMotionConfig = n),
			(this.options = i),
			(this.isControllingVariants = hu(r)),
			(this.isVariantNode = aS(r)),
			this.isVariantNode && (this.variantChildren = new Set()),
			(this.manuallyAnimateOnMount = Boolean(t && t.current));
		const { willChange: l, ...u } = this.scrapeMotionValuesFromProps(r);
		for (const c in u) {
			const d = u[c];
			a[c] !== void 0 && ir(d) && (d.set(a[c], !1), bl(l) && l.add(c));
		}
	}
	scrapeMotionValuesFromProps(t) {
		return {};
	}
	mount(t) {
		var r;
		(this.current = t),
			this.projection && this.projection.mount(t),
			this.parent &&
				this.isVariantNode &&
				!this.isControllingVariants &&
				(this.removeFromVariantTree =
					(r = this.parent) === null || r === void 0
						? void 0
						: r.addVariantChild(this)),
			this.values.forEach((n, o) => this.bindToMotionValue(o, n)),
			ux.current || cL(),
			(this.shouldReduceMotion =
				this.reducedMotionConfig === 'never'
					? !1
					: this.reducedMotionConfig === 'always'
					? !0
					: kf.current),
			this.parent && this.parent.children.add(this),
			this.setProps(this.props);
	}
	unmount() {
		var t, r, n;
		(t = this.projection) === null || t === void 0 || t.unmount(),
			Zr.update(this.notifyUpdate),
			Zr.render(this.render),
			this.valueSubscriptions.forEach((o) => o()),
			(r = this.removeFromVariantTree) === null || r === void 0 || r.call(this),
			(n = this.parent) === null || n === void 0 || n.children.delete(this);
		for (const o in this.events) this.events[o].clear();
		this.current = null;
	}
	bindToMotionValue(t, r) {
		const n = Ln.has(t),
			o = r.on('change', (a) => {
				(this.latestValues[t] = a),
					this.props.onUpdate && st.update(this.notifyUpdate, !1, !0),
					n && this.projection && (this.projection.isTransformDirty = !0);
			}),
			i = r.on('renderRequest', this.scheduleRender);
		this.valueSubscriptions.set(t, () => {
			o(), i();
		});
	}
	sortNodePosition(t) {
		return !this.current ||
			!this.sortInstanceNodePosition ||
			this.type !== t.type
			? 0
			: this.sortInstanceNodePosition(this.current, t.current);
	}
	loadFeatures(t, r, n, o, i, a) {
		const s = [];
		for (let l = 0; l < fL; l++) {
			const u = cx[l],
				{ isEnabled: c, Component: d } = ia[u];
			c(t) &&
				d &&
				s.push(C.createElement(d, { key: u, ...t, visualElement: this }));
		}
		if (!this.projection && i) {
			this.projection = new i(
				o,
				this.latestValues,
				this.parent && this.parent.projection
			);
			const {
				layoutId: l,
				layout: u,
				drag: c,
				dragConstraints: d,
				layoutScroll: f
			} = t;
			this.projection.setOptions({
				layoutId: l,
				layout: u,
				alwaysMeasureLayout: Boolean(c) || (d && ro(d)),
				visualElement: this,
				scheduleRender: () => this.scheduleRender(),
				animationType: typeof u == 'string' ? u : 'both',
				initialPromotionConfig: a,
				layoutScroll: f
			});
		}
		return s;
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.options, this.props);
	}
	measureViewportBox() {
		return this.current
			? this.measureInstanceViewportBox(this.current, this.props)
			: $e();
	}
	getStaticValue(t) {
		return this.latestValues[t];
	}
	setStaticValue(t, r) {
		this.latestValues[t] = r;
	}
	makeTargetAnimatable(t, r = !0) {
		return this.makeTargetAnimatableFromInstance(t, this.props, r);
	}
	setProps(t) {
		(t.transformTemplate || this.props.transformTemplate) &&
			this.scheduleRender(),
			(this.props = t);
		for (let r = 0; r < lv.length; r++) {
			const n = lv[r];
			this.propEventSubscriptions[n] &&
				(this.propEventSubscriptions[n](),
				delete this.propEventSubscriptions[n]);
			const o = t['on' + n];
			o && (this.propEventSubscriptions[n] = this.on(n, o));
		}
		this.prevMotionValues = dL(
			this,
			this.scrapeMotionValuesFromProps(t),
			this.prevMotionValues
		);
	}
	getProps() {
		return this.props;
	}
	getVariant(t) {
		var r;
		return (r = this.props.variants) === null || r === void 0 ? void 0 : r[t];
	}
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	getClosestVariantNode() {
		var t;
		return this.isVariantNode
			? this
			: (t = this.parent) === null || t === void 0
			? void 0
			: t.getClosestVariantNode();
	}
	getVariantContext(t = !1) {
		var r, n;
		if (t)
			return (r = this.parent) === null || r === void 0
				? void 0
				: r.getVariantContext();
		if (!this.isControllingVariants) {
			const i =
				((n = this.parent) === null || n === void 0
					? void 0
					: n.getVariantContext()) || {};
			return (
				this.props.initial !== void 0 && (i.initial = this.props.initial), i
			);
		}
		const o = {};
		for (let i = 0; i < hL; i++) {
			const a = dx[i],
				s = this.props[a];
			(oa(s) || s === !1) && (o[a] = s);
		}
		return o;
	}
	addVariantChild(t) {
		var r;
		const n = this.getClosestVariantNode();
		if (n)
			return (
				(r = n.variantChildren) === null || r === void 0 || r.add(t),
				() => n.variantChildren.delete(t)
			);
	}
	addValue(t, r) {
		this.hasValue(t) && this.removeValue(t),
			this.values.set(t, r),
			(this.latestValues[t] = r.get()),
			this.bindToMotionValue(t, r);
	}
	removeValue(t) {
		var r;
		this.values.delete(t),
			(r = this.valueSubscriptions.get(t)) === null || r === void 0 || r(),
			this.valueSubscriptions.delete(t),
			delete this.latestValues[t],
			this.removeValueFromRenderState(t, this.renderState);
	}
	hasValue(t) {
		return this.values.has(t);
	}
	getValue(t, r) {
		if (this.props.values && this.props.values[t]) return this.props.values[t];
		let n = this.values.get(t);
		return (
			n === void 0 &&
				r !== void 0 &&
				((n = Ro(r, { owner: this })), this.addValue(t, n)),
			n
		);
	}
	readValue(t) {
		return this.latestValues[t] !== void 0 || !this.current
			? this.latestValues[t]
			: this.readValueFromInstance(this.current, t, this.options);
	}
	setBaseTarget(t, r) {
		this.baseTarget[t] = r;
	}
	getBaseTarget(t) {
		var r;
		const { initial: n } = this.props,
			o =
				typeof n == 'string' || typeof n == 'object'
					? (r = Jp(this.props, n)) === null || r === void 0
						? void 0
						: r[t]
					: void 0;
		if (n && o !== void 0) return o;
		const i = this.getBaseTargetFromProps(this.props, t);
		return i !== void 0 && !ir(i)
			? i
			: this.initialValues[t] !== void 0 && o === void 0
			? void 0
			: this.baseTarget[t];
	}
	on(t, r) {
		return this.events[t] || (this.events[t] = new oh()), this.events[t].add(r);
	}
	notify(t, ...r) {
		var n;
		(n = this.events[t]) === null || n === void 0 || n.notify(...r);
	}
}
const dx = ['initial', ...vh],
	hL = dx.length;
class fx extends pL {
	sortInstanceNodePosition(t, r) {
		return t.compareDocumentPosition(r) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(t, r) {
		var n;
		return (n = t.style) === null || n === void 0 ? void 0 : n[r];
	}
	removeValueFromRenderState(t, { vars: r, style: n }) {
		delete r[t], delete n[t];
	}
	makeTargetAnimatableFromInstance(
		{ transition: t, transitionEnd: r, ...n },
		{ transformValues: o },
		i
	) {
		let a = w6(n, t || {}, this);
		if ((o && (r && (r = o(r)), n && (n = o(n)), a && (a = o(a))), i)) {
			S6(this, n, a);
			const s = uL(this, n, a, r);
			(r = s.transitionEnd), (n = s.target);
		}
		return { transition: t, transitionEnd: r, ...n };
	}
}
function mL(e) {
	return window.getComputedStyle(e);
}
class gL extends fx {
	readValueFromInstance(t, r) {
		if (Ln.has(r)) {
			const n = sh(r);
			return (n && n.default) || 0;
		} else {
			const n = mL(t),
				o = (uS(r) ? n.getPropertyValue(r) : n[r]) || 0;
			return typeof o == 'string' ? o.trim() : o;
		}
	}
	measureInstanceViewportBox(t, { transformPagePoint: r }) {
		return ix(t, r);
	}
	build(t, r, n, o) {
		qp(t, r, n, o.transformTemplate);
	}
	scrapeMotionValuesFromProps(t) {
		return Zp(t);
	}
	renderInstance(t, r, n, o) {
		hS(t, r, n, o);
	}
}
class vL extends fx {
	constructor() {
		super(...arguments), (this.isSVGTag = !1);
	}
	getBaseTargetFromProps(t, r) {
		return t[r];
	}
	readValueFromInstance(t, r) {
		var n;
		return Ln.has(r)
			? ((n = sh(r)) === null || n === void 0 ? void 0 : n.default) || 0
			: ((r = mS.has(r) ? r : Qp(r)), t.getAttribute(r));
	}
	measureInstanceViewportBox() {
		return $e();
	}
	scrapeMotionValuesFromProps(t) {
		return vS(t);
	}
	build(t, r, n, o) {
		Yp(t, r, n, this.isSVGTag, o.transformTemplate);
	}
	renderInstance(t, r, n, o) {
		gS(t, r, n, o);
	}
	mount(t) {
		(this.isSVGTag = Xp(t.tagName)), super.mount(t);
	}
}
const yL = (e, t) =>
	Gp(e)
		? new vL(t, { enableHardwareAcceleration: !1 })
		: new gL(t, { enableHardwareAcceleration: !0 });
function uv(e, t) {
	return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Jo = {
		correct: (e, t) => {
			if (!t.target) return e;
			if (typeof e == 'string')
				if (W.test(e)) e = parseFloat(e);
				else return e;
			const r = uv(e, t.target.x),
				n = uv(e, t.target.y);
			return `${r}% ${n}%`;
		}
	},
	cv = '_$css',
	bL = {
		correct: (e, { treeScale: t, projectionDelta: r }) => {
			const n = e,
				o = e.includes('var('),
				i = [];
			o && (e = e.replace(ax, (p) => (i.push(p), cv)));
			const a = Jr.parse(e);
			if (a.length > 5) return n;
			const s = Jr.createTransformer(e),
				l = typeof a[0] != 'number' ? 1 : 0,
				u = r.x.scale * t.x,
				c = r.y.scale * t.y;
			(a[0 + l] /= u), (a[1 + l] /= c);
			const d = Ce(u, c, 0.5);
			typeof a[2 + l] == 'number' && (a[2 + l] /= d),
				typeof a[3 + l] == 'number' && (a[3 + l] /= d);
			let f = s(a);
			if (o) {
				let p = 0;
				f = f.replace(cv, () => {
					const v = i[p];
					return p++, v;
				});
			}
			return f;
		}
	};
class SL extends nt.Component {
	componentDidMount() {
		const {
				visualElement: t,
				layoutGroup: r,
				switchLayoutGroup: n,
				layoutId: o
			} = this.props,
			{ projection: i } = t;
		tz(wL),
			i &&
				(r.group && r.group.add(i),
				n && n.register && o && n.register(i),
				i.root.didUpdate(),
				i.addEventListener('animationComplete', () => {
					this.safeToRemove();
				}),
				i.setOptions({
					...i.options,
					onExitComplete: () => this.safeToRemove()
				})),
			(_i.hasEverUpdated = !0);
	}
	getSnapshotBeforeUpdate(t) {
		const {
				layoutDependency: r,
				visualElement: n,
				drag: o,
				isPresent: i
			} = this.props,
			a = n.projection;
		return (
			a &&
				((a.isPresent = i),
				o || t.layoutDependency !== r || r === void 0
					? a.willUpdate()
					: this.safeToRemove(),
				t.isPresent !== i &&
					(i
						? a.promote()
						: a.relegate() ||
						  st.postRender(() => {
								var s;
								(!((s = a.getStack()) === null || s === void 0) &&
									s.members.length) ||
									this.safeToRemove();
						  }))),
			null
		);
	}
	componentDidUpdate() {
		const { projection: t } = this.props.visualElement;
		t &&
			(t.root.didUpdate(),
			!t.currentAnimation && t.isLead() && this.safeToRemove());
	}
	componentWillUnmount() {
		const {
				visualElement: t,
				layoutGroup: r,
				switchLayoutGroup: n
			} = this.props,
			{ projection: o } = t;
		o &&
			(o.scheduleCheckAfterUnmount(),
			r != null && r.group && r.group.remove(o),
			n != null && n.deregister && n.deregister(o));
	}
	safeToRemove() {
		const { safeToRemove: t } = this.props;
		t == null || t();
	}
	render() {
		return null;
	}
}
function xL(e) {
	const [t, r] = TS(),
		n = C.useContext(Hp);
	return nt.createElement(SL, {
		...e,
		layoutGroup: n,
		switchLayoutGroup: C.useContext(sS),
		isPresent: t,
		safeToRemove: r
	});
}
const wL = {
		borderRadius: {
			...Jo,
			applyTo: [
				'borderTopLeftRadius',
				'borderTopRightRadius',
				'borderBottomLeftRadius',
				'borderBottomRightRadius'
			]
		},
		borderTopLeftRadius: Jo,
		borderTopRightRadius: Jo,
		borderBottomLeftRadius: Jo,
		borderBottomRightRadius: Jo,
		boxShadow: bL
	},
	kL = { measureLayout: xL };
function CL(e, t, r = {}) {
	const n = ir(e) ? e : Ro(e);
	return (
		n.start(gh('', n, t, r)),
		{ stop: () => n.stop(), isAnimating: () => n.isAnimating() }
	);
}
const px = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
	_L = px.length,
	dv = (e) => (typeof e == 'string' ? parseFloat(e) : e),
	fv = (e) => typeof e == 'number' || W.test(e);
function TL(e, t, r, n, o, i) {
	o
		? ((e.opacity = Ce(0, r.opacity !== void 0 ? r.opacity : 1, EL(n))),
		  (e.opacityExit = Ce(t.opacity !== void 0 ? t.opacity : 1, 0, PL(n))))
		: i &&
		  (e.opacity = Ce(
				t.opacity !== void 0 ? t.opacity : 1,
				r.opacity !== void 0 ? r.opacity : 1,
				n
		  ));
	for (let a = 0; a < _L; a++) {
		const s = `border${px[a]}Radius`;
		let l = pv(t, s),
			u = pv(r, s);
		if (l === void 0 && u === void 0) continue;
		l || (l = 0),
			u || (u = 0),
			l === 0 || u === 0 || fv(l) === fv(u)
				? ((e[s] = Math.max(Ce(dv(l), dv(u), n), 0)),
				  (or.test(u) || or.test(l)) && (e[s] += '%'))
				: (e[s] = u);
	}
	(t.rotate || r.rotate) && (e.rotate = Ce(t.rotate || 0, r.rotate || 0, n));
}
function pv(e, t) {
	return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const EL = hx(0, 0.5, hh),
	PL = hx(0.5, 0.95, ph);
function hx(e, t, r) {
	return (n) => (n < e ? 0 : n > t ? 1 : r(xl(e, t, n)));
}
function hv(e, t) {
	(e.min = t.min), (e.max = t.max);
}
function Ot(e, t) {
	hv(e.x, t.x), hv(e.y, t.y);
}
function mv(e, t, r, n, o) {
	return (
		(e -= t), (e = Cl(e, 1 / r, n)), o !== void 0 && (e = Cl(e, 1 / o, n)), e
	);
}
function $L(e, t = 0, r = 1, n = 0.5, o, i = e, a = e) {
	if (
		(or.test(t) &&
			((t = parseFloat(t)), (t = Ce(a.min, a.max, t / 100) - a.min)),
		typeof t != 'number')
	)
		return;
	let s = Ce(i.min, i.max, n);
	e === i && (s -= t),
		(e.min = mv(e.min, t, r, s, o)),
		(e.max = mv(e.max, t, r, s, o));
}
function gv(e, t, [r, n, o], i, a) {
	$L(e, t[r], t[n], t[o], t.scale, i, a);
}
const RL = ['x', 'scaleX', 'originX'],
	AL = ['y', 'scaleY', 'originY'];
function vv(e, t, r, n) {
	gv(e.x, t, RL, r == null ? void 0 : r.x, n == null ? void 0 : n.x),
		gv(e.y, t, AL, r == null ? void 0 : r.y, n == null ? void 0 : n.y);
}
function yv(e) {
	return e.translate === 0 && e.scale === 1;
}
function mx(e) {
	return yv(e.x) && yv(e.y);
}
function gx(e, t) {
	return (
		e.x.min === t.x.min &&
		e.x.max === t.x.max &&
		e.y.min === t.y.min &&
		e.y.max === t.y.max
	);
}
function bv(e) {
	return bt(e.x) / bt(e.y);
}
class zL {
	constructor() {
		this.members = [];
	}
	add(t) {
		rh(this.members, t), t.scheduleRender();
	}
	remove(t) {
		if (
			(nh(this.members, t),
			t === this.prevLead && (this.prevLead = void 0),
			t === this.lead)
		) {
			const r = this.members[this.members.length - 1];
			r && this.promote(r);
		}
	}
	relegate(t) {
		const r = this.members.findIndex((o) => t === o);
		if (r === 0) return !1;
		let n;
		for (let o = r; o >= 0; o--) {
			const i = this.members[o];
			if (i.isPresent !== !1) {
				n = i;
				break;
			}
		}
		return n ? (this.promote(n), !0) : !1;
	}
	promote(t, r) {
		var n;
		const o = this.lead;
		if (t !== o && ((this.prevLead = o), (this.lead = t), t.show(), o)) {
			o.instance && o.scheduleRender(),
				t.scheduleRender(),
				(t.resumeFrom = o),
				r && (t.resumeFrom.preserveOpacity = !0),
				o.snapshot &&
					((t.snapshot = o.snapshot),
					(t.snapshot.latestValues = o.animationValues || o.latestValues)),
				!((n = t.root) === null || n === void 0) &&
					n.isUpdating &&
					(t.isLayoutDirty = !0);
			const { crossfade: i } = t.options;
			i === !1 && o.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((t) => {
			var r, n, o, i, a;
			(n = (r = t.options).onExitComplete) === null ||
				n === void 0 ||
				n.call(r),
				(a =
					(o = t.resumingFrom) === null || o === void 0
						? void 0
						: (i = o.options).onExitComplete) === null ||
					a === void 0 ||
					a.call(i);
		});
	}
	scheduleRender() {
		this.members.forEach((t) => {
			t.instance && t.scheduleRender(!1);
		});
	}
	removeLeadSnapshot() {
		this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
	}
}
function Sv(e, t, r) {
	let n = '';
	const o = e.x.translate / t.x,
		i = e.y.translate / t.y;
	if (
		((o || i) && (n = `translate3d(${o}px, ${i}px, 0) `),
		(t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `),
		r)
	) {
		const { rotate: l, rotateX: u, rotateY: c } = r;
		l && (n += `rotate(${l}deg) `),
			u && (n += `rotateX(${u}deg) `),
			c && (n += `rotateY(${c}deg) `);
	}
	const a = e.x.scale * t.x,
		s = e.y.scale * t.y;
	return (a !== 1 || s !== 1) && (n += `scale(${a}, ${s})`), n || 'none';
}
const ML = (e, t) => e.depth - t.depth;
class LL {
	constructor() {
		(this.children = []), (this.isDirty = !1);
	}
	add(t) {
		rh(this.children, t), (this.isDirty = !0);
	}
	remove(t) {
		nh(this.children, t), (this.isDirty = !0);
	}
	forEach(t) {
		this.isDirty && this.children.sort(ML),
			(this.isDirty = !1),
			this.children.forEach(t);
	}
}
const xv = ['', 'X', 'Y', 'Z'],
	wv = 1e3;
let OL = 0;
function vx({
	attachResizeListener: e,
	defaultParent: t,
	measureScroll: r,
	checkIsScrollRoot: n,
	resetTransform: o
}) {
	return class {
		constructor(a, s = {}, l = t == null ? void 0 : t()) {
			(this.id = OL++),
				(this.animationId = 0),
				(this.children = new Set()),
				(this.options = {}),
				(this.isTreeAnimating = !1),
				(this.isAnimationBlocked = !1),
				(this.isLayoutDirty = !1),
				(this.isTransformDirty = !1),
				(this.isProjectionDirty = !1),
				(this.updateManuallyBlocked = !1),
				(this.updateBlockedByResize = !1),
				(this.isUpdating = !1),
				(this.isSVG = !1),
				(this.needsReset = !1),
				(this.shouldResetTransform = !1),
				(this.treeScale = { x: 1, y: 1 }),
				(this.eventHandlers = new Map()),
				(this.potentialNodes = new Map()),
				(this.checkUpdateFailed = () => {
					this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
				}),
				(this.updateProjection = () => {
					this.nodes.forEach(DL),
						this.nodes.forEach(VL),
						this.nodes.forEach(jL);
				}),
				(this.hasProjected = !1),
				(this.isVisible = !0),
				(this.animationProgress = 0),
				(this.sharedNodes = new Map()),
				(this.elementId = a),
				(this.latestValues = s),
				(this.root = l ? l.root || l : this),
				(this.path = l ? [...l.path, l] : []),
				(this.parent = l),
				(this.depth = l ? l.depth + 1 : 0),
				a && this.root.registerPotentialNode(a, this);
			for (let u = 0; u < this.path.length; u++)
				this.path[u].shouldResetTransform = !0;
			this.root === this && (this.nodes = new LL());
		}
		addEventListener(a, s) {
			return (
				this.eventHandlers.has(a) || this.eventHandlers.set(a, new oh()),
				this.eventHandlers.get(a).add(s)
			);
		}
		notifyListeners(a, ...s) {
			const l = this.eventHandlers.get(a);
			l == null || l.notify(...s);
		}
		hasListeners(a) {
			return this.eventHandlers.has(a);
		}
		registerPotentialNode(a, s) {
			this.potentialNodes.set(a, s);
		}
		mount(a, s = !1) {
			var l;
			if (this.instance) return;
			(this.isSVG = a instanceof SVGElement && a.tagName !== 'svg'),
				(this.instance = a);
			const { layoutId: u, layout: c, visualElement: d } = this.options;
			if (
				(d && !d.current && d.mount(a),
				this.root.nodes.add(this),
				(l = this.parent) === null || l === void 0 || l.children.add(this),
				this.elementId && this.root.potentialNodes.delete(this.elementId),
				s && (c || u) && (this.isLayoutDirty = !0),
				e)
			) {
				let f;
				const p = () => (this.root.updateBlockedByResize = !1);
				e(a, () => {
					(this.root.updateBlockedByResize = !0),
						f && f(),
						(f = XS(p, 250)),
						_i.hasAnimatedSinceResize &&
							((_i.hasAnimatedSinceResize = !1), this.nodes.forEach(Cv));
				});
			}
			u && this.root.registerSharedNode(u, this),
				this.options.animate !== !1 &&
					d &&
					(u || c) &&
					this.addEventListener(
						'didUpdate',
						({
							delta: f,
							hasLayoutChanged: p,
							hasRelativeTargetChanged: v,
							layout: b
						}) => {
							var k, h, m, g, S;
							if (this.isTreeAnimationBlocked()) {
								(this.target = void 0), (this.relativeTarget = void 0);
								return;
							}
							const P =
									(h =
										(k = this.options.transition) !== null && k !== void 0
											? k
											: d.getDefaultTransition()) !== null && h !== void 0
										? h
										: qL,
								{ onLayoutAnimationStart: R, onLayoutAnimationComplete: $ } =
									d.getProps(),
								I = !this.targetLayout || !gx(this.targetLayout, b) || v,
								E = !p && v;
							if (
								(!((m = this.resumeFrom) === null || m === void 0) &&
									m.instance) ||
								E ||
								(p && (I || !this.currentAnimation))
							) {
								this.resumeFrom &&
									((this.resumingFrom = this.resumeFrom),
									(this.resumingFrom.resumingFrom = void 0)),
									this.setAnimationOrigin(f, E);
								const T = { ...QS(P, 'layout'), onPlay: R, onComplete: $ };
								d.shouldReduceMotion && ((T.delay = 0), (T.type = !1)),
									this.startAnimation(T);
							} else
								!p && this.animationProgress === 0 && Cv(this),
									this.isLead() &&
										((S = (g = this.options).onExitComplete) === null ||
											S === void 0 ||
											S.call(g));
							this.targetLayout = b;
						}
					);
		}
		unmount() {
			var a, s;
			this.options.layoutId && this.willUpdate(),
				this.root.nodes.remove(this),
				(a = this.getStack()) === null || a === void 0 || a.remove(this),
				(s = this.parent) === null || s === void 0 || s.children.delete(this),
				(this.instance = void 0),
				Zr.preRender(this.updateProjection);
		}
		blockUpdate() {
			this.updateManuallyBlocked = !0;
		}
		unblockUpdate() {
			this.updateManuallyBlocked = !1;
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize;
		}
		isTreeAnimationBlocked() {
			var a;
			return (
				this.isAnimationBlocked ||
				((a = this.parent) === null || a === void 0
					? void 0
					: a.isTreeAnimationBlocked()) ||
				!1
			);
		}
		startUpdate() {
			var a;
			this.isUpdateBlocked() ||
				((this.isUpdating = !0),
				(a = this.nodes) === null || a === void 0 || a.forEach(UL),
				this.animationId++);
		}
		willUpdate(a = !0) {
			var s, l, u;
			if (this.root.isUpdateBlocked()) {
				(l = (s = this.options).onExitComplete) === null ||
					l === void 0 ||
					l.call(s);
				return;
			}
			if (
				(!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
			)
				return;
			this.isLayoutDirty = !0;
			for (let p = 0; p < this.path.length; p++) {
				const v = this.path[p];
				(v.shouldResetTransform = !0), v.updateScroll('snapshot');
			}
			const { layoutId: c, layout: d } = this.options;
			if (c === void 0 && !d) return;
			const f =
				(u = this.options.visualElement) === null || u === void 0
					? void 0
					: u.getProps().transformTemplate;
			(this.prevTransformTemplateValue =
				f == null ? void 0 : f(this.latestValues, '')),
				this.updateSnapshot(),
				a && this.notifyListeners('willUpdate');
		}
		didUpdate() {
			if (this.isUpdateBlocked()) {
				this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(kv);
				return;
			}
			this.isUpdating &&
				((this.isUpdating = !1),
				this.potentialNodes.size &&
					(this.potentialNodes.forEach(KL), this.potentialNodes.clear()),
				this.nodes.forEach(NL),
				this.nodes.forEach(IL),
				this.nodes.forEach(BL),
				this.clearAllSnapshots(),
				Fc.update(),
				Fc.preRender(),
				Fc.render());
		}
		clearAllSnapshots() {
			this.nodes.forEach(FL), this.sharedNodes.forEach(WL);
		}
		scheduleUpdateProjection() {
			st.preRender(this.updateProjection, !1, !0);
		}
		scheduleCheckAfterUnmount() {
			st.postRender(() => {
				this.isLayoutDirty
					? this.root.didUpdate()
					: this.root.checkUpdateFailed();
			});
		}
		updateSnapshot() {
			this.snapshot || !this.instance || (this.snapshot = this.measure());
		}
		updateLayout() {
			var a;
			if (
				!this.instance ||
				(this.updateScroll(),
				!(this.options.alwaysMeasureLayout && this.isLead()) &&
					!this.isLayoutDirty)
			)
				return;
			if (this.resumeFrom && !this.resumeFrom.instance)
				for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
			const s = this.layout;
			(this.layout = this.measure(!1)),
				(this.layoutCorrected = $e()),
				(this.isLayoutDirty = !1),
				(this.projectionDelta = void 0),
				this.notifyListeners('measure', this.layout.layoutBox),
				(a = this.options.visualElement) === null ||
					a === void 0 ||
					a.notify(
						'LayoutMeasure',
						this.layout.layoutBox,
						s == null ? void 0 : s.layoutBox
					);
		}
		updateScroll(a = 'measure') {
			let s = Boolean(this.options.layoutScroll && this.instance);
			this.scroll &&
				this.scroll.animationId === this.root.animationId &&
				this.scroll.phase === a &&
				(s = !1),
				s &&
					(this.scroll = {
						animationId: this.root.animationId,
						phase: a,
						isRoot: n(this.instance),
						offset: r(this.instance)
					});
		}
		resetTransform() {
			var a;
			if (!o) return;
			const s = this.isLayoutDirty || this.shouldResetTransform,
				l = this.projectionDelta && !mx(this.projectionDelta),
				u =
					(a = this.options.visualElement) === null || a === void 0
						? void 0
						: a.getProps().transformTemplate,
				c = u == null ? void 0 : u(this.latestValues, ''),
				d = c !== this.prevTransformTemplateValue;
			s &&
				(l || hn(this.latestValues) || d) &&
				(o(this.instance, c),
				(this.shouldResetTransform = !1),
				this.scheduleRender());
		}
		measure(a = !0) {
			const s = this.measurePageBox();
			let l = this.removeElementScroll(s);
			return (
				a && (l = this.removeTransform(l)),
				YL(l),
				{
					animationId: this.root.animationId,
					measuredBox: s,
					layoutBox: l,
					latestValues: {},
					source: this.id
				}
			);
		}
		measurePageBox() {
			const { visualElement: a } = this.options;
			if (!a) return $e();
			const s = a.measureViewportBox(),
				{ scroll: l } = this.root;
			return l && (Mr(s.x, l.offset.x), Mr(s.y, l.offset.y)), s;
		}
		removeElementScroll(a) {
			const s = $e();
			Ot(s, a);
			for (let l = 0; l < this.path.length; l++) {
				const u = this.path[l],
					{ scroll: c, options: d } = u;
				if (u !== this.root && c && d.layoutScroll) {
					if (c.isRoot) {
						Ot(s, a);
						const { scroll: f } = this.root;
						f && (Mr(s.x, -f.offset.x), Mr(s.y, -f.offset.y));
					}
					Mr(s.x, c.offset.x), Mr(s.y, c.offset.y);
				}
			}
			return s;
		}
		applyTransform(a, s = !1) {
			const l = $e();
			Ot(l, a);
			for (let u = 0; u < this.path.length; u++) {
				const c = this.path[u];
				!s &&
					c.options.layoutScroll &&
					c.scroll &&
					c !== c.root &&
					oo(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
					hn(c.latestValues) && oo(l, c.latestValues);
			}
			return hn(this.latestValues) && oo(l, this.latestValues), l;
		}
		removeTransform(a) {
			var s;
			const l = $e();
			Ot(l, a);
			for (let u = 0; u < this.path.length; u++) {
				const c = this.path[u];
				if (!c.instance || !hn(c.latestValues)) continue;
				bf(c.latestValues) && c.updateSnapshot();
				const d = $e(),
					f = c.measurePageBox();
				Ot(d, f),
					vv(
						l,
						c.latestValues,
						(s = c.snapshot) === null || s === void 0 ? void 0 : s.layoutBox,
						d
					);
			}
			return hn(this.latestValues) && vv(l, this.latestValues), l;
		}
		setTargetDelta(a) {
			(this.targetDelta = a),
				(this.isProjectionDirty = !0),
				this.root.scheduleUpdateProjection();
		}
		setOptions(a) {
			this.options = {
				...this.options,
				...a,
				crossfade: a.crossfade !== void 0 ? a.crossfade : !0
			};
		}
		clearMeasurements() {
			(this.scroll = void 0),
				(this.layout = void 0),
				(this.snapshot = void 0),
				(this.prevTransformTemplateValue = void 0),
				(this.targetDelta = void 0),
				(this.target = void 0),
				(this.isLayoutDirty = !1);
		}
		resolveTargetDelta() {
			var a;
			const s = this.getLead();
			if (
				(this.isProjectionDirty ||
					(this.isProjectionDirty = s.isProjectionDirty),
				this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty),
				!this.isProjectionDirty && !this.attemptToResolveRelativeTarget)
			)
				return;
			const { layout: l, layoutId: u } = this.options;
			if (!(!this.layout || !(l || u))) {
				if (!this.targetDelta && !this.relativeTarget) {
					const c = this.getClosestProjectingParent();
					c && c.layout
						? ((this.relativeParent = c),
						  (this.relativeTarget = $e()),
						  (this.relativeTargetOrigin = $e()),
						  $i(
								this.relativeTargetOrigin,
								this.layout.layoutBox,
								c.layout.layoutBox
						  ),
						  Ot(this.relativeTarget, this.relativeTargetOrigin))
						: (this.relativeParent = this.relativeTarget = void 0);
				}
				if (
					!(!this.relativeTarget && !this.targetDelta) &&
					(this.target ||
						((this.target = $e()), (this.targetWithTransforms = $e())),
					this.relativeTarget &&
					this.relativeTargetOrigin &&
					!((a = this.relativeParent) === null || a === void 0) &&
					a.target
						? LM(this.target, this.relativeTarget, this.relativeParent.target)
						: this.targetDelta
						? (Boolean(this.resumingFrom)
								? (this.target = this.applyTransform(this.layout.layoutBox))
								: Ot(this.target, this.layout.layoutBox),
						  ox(this.target, this.targetDelta))
						: Ot(this.target, this.layout.layoutBox),
					this.attemptToResolveRelativeTarget)
				) {
					this.attemptToResolveRelativeTarget = !1;
					const c = this.getClosestProjectingParent();
					c &&
					Boolean(c.resumingFrom) === Boolean(this.resumingFrom) &&
					!c.options.layoutScroll &&
					c.target
						? ((this.relativeParent = c),
						  (this.relativeTarget = $e()),
						  (this.relativeTargetOrigin = $e()),
						  $i(this.relativeTargetOrigin, this.target, c.target),
						  Ot(this.relativeTarget, this.relativeTargetOrigin))
						: (this.relativeParent = this.relativeTarget = void 0);
				}
			}
		}
		getClosestProjectingParent() {
			if (
				!(
					!this.parent ||
					bf(this.parent.latestValues) ||
					nx(this.parent.latestValues)
				)
			)
				return (this.parent.relativeTarget || this.parent.targetDelta) &&
					this.parent.layout
					? this.parent
					: this.parent.getClosestProjectingParent();
		}
		calcProjection() {
			var a;
			const { isProjectionDirty: s, isTransformDirty: l } = this;
			this.isProjectionDirty = this.isTransformDirty = !1;
			const u = this.getLead(),
				c = Boolean(this.resumingFrom) || this !== u;
			let d = !0;
			if ((s && (d = !1), c && l && (d = !1), d)) return;
			const { layout: f, layoutId: p } = this.options;
			if (
				((this.isTreeAnimating = Boolean(
					((a = this.parent) === null || a === void 0
						? void 0
						: a.isTreeAnimating) ||
						this.currentAnimation ||
						this.pendingAnimation
				)),
				this.isTreeAnimating ||
					(this.targetDelta = this.relativeTarget = void 0),
				!this.layout || !(f || p))
			)
				return;
			Ot(this.layoutCorrected, this.layout.layoutBox),
				UM(this.layoutCorrected, this.treeScale, this.path, c);
			const { target: v } = u;
			if (!v) return;
			this.projectionDelta ||
				((this.projectionDelta = Ri()),
				(this.projectionDeltaWithTransform = Ri()));
			const b = this.treeScale.x,
				k = this.treeScale.y,
				h = this.projectionTransform;
			Pi(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
				(this.projectionTransform = Sv(this.projectionDelta, this.treeScale)),
				(this.projectionTransform !== h ||
					this.treeScale.x !== b ||
					this.treeScale.y !== k) &&
					((this.hasProjected = !0),
					this.scheduleRender(),
					this.notifyListeners('projectionUpdate', v));
		}
		hide() {
			this.isVisible = !1;
		}
		show() {
			this.isVisible = !0;
		}
		scheduleRender(a = !0) {
			var s, l, u;
			(l = (s = this.options).scheduleRender) === null ||
				l === void 0 ||
				l.call(s),
				a &&
					((u = this.getStack()) === null ||
						u === void 0 ||
						u.scheduleRender()),
				this.resumingFrom &&
					!this.resumingFrom.instance &&
					(this.resumingFrom = void 0);
		}
		setAnimationOrigin(a, s = !1) {
			var l, u;
			const c = this.snapshot,
				d = (c == null ? void 0 : c.latestValues) || {},
				f = { ...this.latestValues },
				p = Ri();
			(this.relativeTarget = this.relativeTargetOrigin = void 0),
				(this.attemptToResolveRelativeTarget = !s);
			const v = $e(),
				b =
					(c == null ? void 0 : c.source) !==
					((l = this.layout) === null || l === void 0 ? void 0 : l.source),
				k =
					(((u = this.getStack()) === null || u === void 0
						? void 0
						: u.members.length) || 0) <= 1,
				h = Boolean(
					b && !k && this.options.crossfade === !0 && !this.path.some(GL)
				);
			(this.animationProgress = 0),
				(this.mixTargetDelta = (m) => {
					var g;
					const S = m / 1e3;
					_v(p.x, a.x, S),
						_v(p.y, a.y, S),
						this.setTargetDelta(p),
						this.relativeTarget &&
							this.relativeTargetOrigin &&
							this.layout &&
							!((g = this.relativeParent) === null || g === void 0) &&
							g.layout &&
							($i(
								v,
								this.layout.layoutBox,
								this.relativeParent.layout.layoutBox
							),
							HL(this.relativeTarget, this.relativeTargetOrigin, v, S)),
						b &&
							((this.animationValues = f),
							TL(f, d, this.latestValues, S, h, k)),
						this.root.scheduleUpdateProjection(),
						this.scheduleRender(),
						(this.animationProgress = S);
				}),
				this.mixTargetDelta(0);
		}
		startAnimation(a) {
			var s, l;
			this.notifyListeners('animationStart'),
				(s = this.currentAnimation) === null || s === void 0 || s.stop(),
				this.resumingFrom &&
					((l = this.resumingFrom.currentAnimation) === null ||
						l === void 0 ||
						l.stop()),
				this.pendingAnimation &&
					(Zr.update(this.pendingAnimation), (this.pendingAnimation = void 0)),
				(this.pendingAnimation = st.update(() => {
					(_i.hasAnimatedSinceResize = !0),
						(this.currentAnimation = CL(0, wv, {
							...a,
							onUpdate: (u) => {
								var c;
								this.mixTargetDelta(u),
									(c = a.onUpdate) === null || c === void 0 || c.call(a, u);
							},
							onComplete: () => {
								var u;
								(u = a.onComplete) === null || u === void 0 || u.call(a),
									this.completeAnimation();
							}
						})),
						this.resumingFrom &&
							(this.resumingFrom.currentAnimation = this.currentAnimation),
						(this.pendingAnimation = void 0);
				}));
		}
		completeAnimation() {
			var a;
			this.resumingFrom &&
				((this.resumingFrom.currentAnimation = void 0),
				(this.resumingFrom.preserveOpacity = void 0)),
				(a = this.getStack()) === null ||
					a === void 0 ||
					a.exitAnimationComplete(),
				(this.resumingFrom =
					this.currentAnimation =
					this.animationValues =
						void 0),
				this.notifyListeners('animationComplete');
		}
		finishAnimation() {
			var a;
			this.currentAnimation &&
				((a = this.mixTargetDelta) === null || a === void 0 || a.call(this, wv),
				this.currentAnimation.stop()),
				this.completeAnimation();
		}
		applyTransformsToTarget() {
			const a = this.getLead();
			let {
				targetWithTransforms: s,
				target: l,
				layout: u,
				latestValues: c
			} = a;
			if (!(!s || !l || !u)) {
				if (
					this !== a &&
					this.layout &&
					u &&
					yx(this.options.animationType, this.layout.layoutBox, u.layoutBox)
				) {
					l = this.target || $e();
					const d = bt(this.layout.layoutBox.x);
					(l.x.min = a.target.x.min), (l.x.max = l.x.min + d);
					const f = bt(this.layout.layoutBox.y);
					(l.y.min = a.target.y.min), (l.y.max = l.y.min + f);
				}
				Ot(s, l),
					oo(s, c),
					Pi(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
			}
		}
		registerSharedNode(a, s) {
			var l, u, c;
			this.sharedNodes.has(a) || this.sharedNodes.set(a, new zL()),
				this.sharedNodes.get(a).add(s),
				s.promote({
					transition:
						(l = s.options.initialPromotionConfig) === null || l === void 0
							? void 0
							: l.transition,
					preserveFollowOpacity:
						(c =
							(u = s.options.initialPromotionConfig) === null || u === void 0
								? void 0
								: u.shouldPreserveFollowOpacity) === null || c === void 0
							? void 0
							: c.call(u, s)
				});
		}
		isLead() {
			const a = this.getStack();
			return a ? a.lead === this : !0;
		}
		getLead() {
			var a;
			const { layoutId: s } = this.options;
			return s
				? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) ||
						this
				: this;
		}
		getPrevLead() {
			var a;
			const { layoutId: s } = this.options;
			return s
				? (a = this.getStack()) === null || a === void 0
					? void 0
					: a.prevLead
				: void 0;
		}
		getStack() {
			const { layoutId: a } = this.options;
			if (a) return this.root.sharedNodes.get(a);
		}
		promote({ needsReset: a, transition: s, preserveFollowOpacity: l } = {}) {
			const u = this.getStack();
			u && u.promote(this, l),
				a && ((this.projectionDelta = void 0), (this.needsReset = !0)),
				s && this.setOptions({ transition: s });
		}
		relegate() {
			const a = this.getStack();
			return a ? a.relegate(this) : !1;
		}
		resetRotation() {
			const { visualElement: a } = this.options;
			if (!a) return;
			let s = !1;
			const { latestValues: l } = a;
			if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (s = !0), !s))
				return;
			const u = {};
			for (let c = 0; c < xv.length; c++) {
				const d = 'rotate' + xv[c];
				l[d] && ((u[d] = l[d]), a.setStaticValue(d, 0));
			}
			a == null || a.render();
			for (const c in u) a.setStaticValue(c, u[c]);
			a.scheduleRender();
		}
		getProjectionStyles(a = {}) {
			var s, l, u;
			const c = {};
			if (!this.instance || this.isSVG) return c;
			if (this.isVisible) c.visibility = '';
			else return { visibility: 'hidden' };
			const d =
				(s = this.options.visualElement) === null || s === void 0
					? void 0
					: s.getProps().transformTemplate;
			if (this.needsReset)
				return (
					(this.needsReset = !1),
					(c.opacity = ''),
					(c.pointerEvents = $s(a.pointerEvents) || ''),
					(c.transform = d ? d(this.latestValues, '') : 'none'),
					c
				);
			const f = this.getLead();
			if (!this.projectionDelta || !this.layout || !f.target) {
				const k = {};
				return (
					this.options.layoutId &&
						((k.opacity =
							this.latestValues.opacity !== void 0
								? this.latestValues.opacity
								: 1),
						(k.pointerEvents = $s(a.pointerEvents) || '')),
					this.hasProjected &&
						!hn(this.latestValues) &&
						((k.transform = d ? d({}, '') : 'none'), (this.hasProjected = !1)),
					k
				);
			}
			const p = f.animationValues || f.latestValues;
			this.applyTransformsToTarget(),
				(c.transform = Sv(
					this.projectionDeltaWithTransform,
					this.treeScale,
					p
				)),
				d && (c.transform = d(p, c.transform));
			const { x: v, y: b } = this.projectionDelta;
			(c.transformOrigin = `${v.origin * 100}% ${b.origin * 100}% 0`),
				f.animationValues
					? (c.opacity =
							f === this
								? (u =
										(l = p.opacity) !== null && l !== void 0
											? l
											: this.latestValues.opacity) !== null && u !== void 0
									? u
									: 1
								: this.preserveOpacity
								? this.latestValues.opacity
								: p.opacityExit)
					: (c.opacity =
							f === this
								? p.opacity !== void 0
									? p.opacity
									: ''
								: p.opacityExit !== void 0
								? p.opacityExit
								: 0);
			for (const k in pl) {
				if (p[k] === void 0) continue;
				const { correct: h, applyTo: m } = pl[k],
					g = h(p[k], f);
				if (m) {
					const S = m.length;
					for (let P = 0; P < S; P++) c[m[P]] = g;
				} else c[k] = g;
			}
			return (
				this.options.layoutId &&
					(c.pointerEvents = f === this ? $s(a.pointerEvents) || '' : 'none'),
				c
			);
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((a) => {
				var s;
				return (s = a.currentAnimation) === null || s === void 0
					? void 0
					: s.stop();
			}),
				this.root.nodes.forEach(kv),
				this.root.sharedNodes.clear();
		}
	};
}
function IL(e) {
	e.updateLayout();
}
function BL(e) {
	var t, r, n;
	const o =
		((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
		e.snapshot;
	if (e.isLead() && e.layout && o && e.hasListeners('didUpdate')) {
		const { layoutBox: i, measuredBox: a } = e.layout,
			{ animationType: s } = e.options,
			l = o.source !== e.layout.source;
		s === 'size'
			? qt((p) => {
					const v = l ? o.measuredBox[p] : o.layoutBox[p],
						b = bt(v);
					(v.min = i[p].min), (v.max = v.min + b);
			  })
			: yx(s, o.layoutBox, i) &&
			  qt((p) => {
					const v = l ? o.measuredBox[p] : o.layoutBox[p],
						b = bt(i[p]);
					v.max = v.min + b;
			  });
		const u = Ri();
		Pi(u, i, o.layoutBox);
		const c = Ri();
		l ? Pi(c, e.applyTransform(a, !0), o.measuredBox) : Pi(c, i, o.layoutBox);
		const d = !mx(u);
		let f = !1;
		if (!e.resumeFrom) {
			const p = e.getClosestProjectingParent();
			if (p && !p.resumeFrom) {
				const { snapshot: v, layout: b } = p;
				if (v && b) {
					const k = $e();
					$i(k, o.layoutBox, v.layoutBox);
					const h = $e();
					$i(h, i, b.layoutBox), gx(k, h) || (f = !0);
				}
			}
		}
		e.notifyListeners('didUpdate', {
			layout: i,
			snapshot: o,
			delta: c,
			layoutDelta: u,
			hasLayoutChanged: d,
			hasRelativeTargetChanged: f
		});
	} else
		e.isLead() &&
			((n = (r = e.options).onExitComplete) === null ||
				n === void 0 ||
				n.call(r));
	e.options.transition = void 0;
}
function DL(e) {
	e.isProjectionDirty ||
		(e.isProjectionDirty = Boolean(e.parent && e.parent.isProjectionDirty)),
		e.isTransformDirty ||
			(e.isTransformDirty = Boolean(e.parent && e.parent.isTransformDirty));
}
function FL(e) {
	e.clearSnapshot();
}
function kv(e) {
	e.clearMeasurements();
}
function NL(e) {
	const { visualElement: t } = e.options;
	t != null &&
		t.getProps().onBeforeLayoutMeasure &&
		t.notify('BeforeLayoutMeasure'),
		e.resetTransform();
}
function Cv(e) {
	e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0);
}
function VL(e) {
	e.resolveTargetDelta();
}
function jL(e) {
	e.calcProjection();
}
function UL(e) {
	e.resetRotation();
}
function WL(e) {
	e.removeLeadSnapshot();
}
function _v(e, t, r) {
	(e.translate = Ce(t.translate, 0, r)),
		(e.scale = Ce(t.scale, 1, r)),
		(e.origin = t.origin),
		(e.originPoint = t.originPoint);
}
function Tv(e, t, r, n) {
	(e.min = Ce(t.min, r.min, n)), (e.max = Ce(t.max, r.max, n));
}
function HL(e, t, r, n) {
	Tv(e.x, t.x, r.x, n), Tv(e.y, t.y, r.y, n);
}
function GL(e) {
	return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const qL = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
function KL(e, t) {
	let r = e.root;
	for (let i = e.path.length - 1; i >= 0; i--)
		if (Boolean(e.path[i].instance)) {
			r = e.path[i];
			break;
		}
	const o = (r && r !== e.root ? r.instance : document).querySelector(
		`[data-projection-id="${t}"]`
	);
	o && e.mount(o, !0);
}
function Ev(e) {
	(e.min = Math.round(e.min)), (e.max = Math.round(e.max));
}
function YL(e) {
	Ev(e.x), Ev(e.y);
}
function yx(e, t, r) {
	return (
		e === 'position' || (e === 'preserve-aspect' && !vf(bv(t), bv(r), 0.2))
	);
}
const XL = vx({
		attachResizeListener: (e, t) => gu(e, 'resize', t),
		measureScroll: () => ({
			x: document.documentElement.scrollLeft || document.body.scrollLeft,
			y: document.documentElement.scrollTop || document.body.scrollTop
		}),
		checkIsScrollRoot: () => !0
	}),
	Yc = { current: void 0 },
	QL = vx({
		measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
		defaultParent: () => {
			if (!Yc.current) {
				const e = new XL(0, {});
				e.mount(window), e.setOptions({ layoutScroll: !0 }), (Yc.current = e);
			}
			return Yc.current;
		},
		resetTransform: (e, t) => {
			e.style.transform = t !== void 0 ? t : 'none';
		},
		checkIsScrollRoot: (e) =>
			Boolean(window.getComputedStyle(e).position === 'fixed')
	}),
	ZL = { ...RM, ...Gz, ...ZM, ...kL },
	JL = JA((e, t) => Az(e, t, ZL, yL, QL));
function bx() {
	const e = C.useRef(!1);
	return (
		Ci(
			() => (
				(e.current = !0),
				() => {
					e.current = !1;
				}
			),
			[]
		),
		e
	);
}
function eO() {
	const e = bx(),
		[t, r] = C.useState(0),
		n = C.useCallback(() => {
			e.current && r(t + 1);
		}, [t]);
	return [C.useCallback(() => st.postRender(n), [n]), t];
}
class tO extends C.Component {
	getSnapshotBeforeUpdate(t) {
		const r = this.props.childRef.current;
		if (r && t.isPresent && !this.props.isPresent) {
			const n = this.props.sizeRef.current;
			(n.height = r.offsetHeight || 0),
				(n.width = r.offsetWidth || 0),
				(n.top = r.offsetTop),
				(n.left = r.offsetLeft);
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
}
function rO({ children: e, isPresent: t }) {
	const r = C.useId(),
		n = C.useRef(null),
		o = C.useRef({ width: 0, height: 0, top: 0, left: 0 });
	return (
		C.useInsertionEffect(() => {
			const { width: i, height: a, top: s, left: l } = o.current;
			if (t || !n.current || !i || !a) return;
			n.current.dataset.motionPopId = r;
			const u = document.createElement('style');
			return (
				document.head.appendChild(u),
				u.sheet &&
					u.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${a}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `),
				() => {
					document.head.removeChild(u);
				}
			);
		}, [t]),
		C.createElement(
			tO,
			{ isPresent: t, childRef: n, sizeRef: o },
			C.cloneElement(e, { ref: n })
		)
	);
}
const Xc = ({
	children: e,
	initial: t,
	isPresent: r,
	onExitComplete: n,
	custom: o,
	presenceAffectsLayout: i,
	mode: a
}) => {
	const s = mu(nO),
		l = C.useId(),
		u = C.useMemo(
			() => ({
				id: l,
				initial: t,
				isPresent: r,
				custom: o,
				onExitComplete: (c) => {
					s.set(c, !0);
					for (const d of s.values()) if (!d) return;
					n && n();
				},
				register: (c) => (s.set(c, !1), () => s.delete(c))
			}),
			i ? void 0 : [r]
		);
	return (
		C.useMemo(() => {
			s.forEach((c, d) => s.set(d, !1));
		}, [r]),
		C.useEffect(() => {
			!r && !s.size && n && n();
		}, [r]),
		a === 'popLayout' && (e = C.createElement(rO, { isPresent: r }, e)),
		C.createElement(Oo.Provider, { value: u }, e)
	);
};
function nO() {
	return new Map();
}
const Un = (e) => e.key || '';
function oO(e, t) {
	e.forEach((r) => {
		const n = Un(r);
		t.set(n, r);
	});
}
function iO(e) {
	const t = [];
	return (
		C.Children.forEach(e, (r) => {
			C.isValidElement(r) && t.push(r);
		}),
		t
	);
}
const aO = ({
	children: e,
	custom: t,
	initial: r = !0,
	onExitComplete: n,
	exitBeforeEnter: o,
	presenceAffectsLayout: i = !0,
	mode: a = 'sync'
}) => {
	o && ((a = 'wait'), _S(!1, "Replace exitBeforeEnter with mode='wait'"));
	let [s] = eO();
	const l = C.useContext(Hp).forceRender;
	l && (s = l);
	const u = bx(),
		c = iO(e);
	let d = c;
	const f = new Set(),
		p = C.useRef(d),
		v = C.useRef(new Map()).current,
		b = C.useRef(!0);
	if (
		(Ci(() => {
			(b.current = !1), oO(c, v), (p.current = d);
		}),
		th(() => {
			(b.current = !0), v.clear(), f.clear();
		}),
		b.current)
	)
		return C.createElement(
			C.Fragment,
			null,
			d.map((g) =>
				C.createElement(
					Xc,
					{
						key: Un(g),
						isPresent: !0,
						initial: r ? void 0 : !1,
						presenceAffectsLayout: i,
						mode: a
					},
					g
				)
			)
		);
	d = [...d];
	const k = p.current.map(Un),
		h = c.map(Un),
		m = k.length;
	for (let g = 0; g < m; g++) {
		const S = k[g];
		h.indexOf(S) === -1 && f.add(S);
	}
	return (
		a === 'wait' && f.size && (d = []),
		f.forEach((g) => {
			if (h.indexOf(g) !== -1) return;
			const S = v.get(g);
			if (!S) return;
			const P = k.indexOf(g),
				R = () => {
					v.delete(g), f.delete(g);
					const $ = p.current.findIndex((I) => I.key === g);
					if ((p.current.splice($, 1), !f.size)) {
						if (((p.current = c), u.current === !1)) return;
						s(), n && n();
					}
				};
			d.splice(
				P,
				0,
				C.createElement(
					Xc,
					{
						key: Un(S),
						isPresent: !1,
						onExitComplete: R,
						custom: t,
						presenceAffectsLayout: i,
						mode: a
					},
					S
				)
			);
		}),
		(d = d.map((g) => {
			const S = g.key;
			return f.has(S)
				? g
				: C.createElement(
						Xc,
						{ key: Un(g), isPresent: !0, presenceAffectsLayout: i, mode: a },
						g
				  );
		})),
		CS !== 'production' &&
			a === 'wait' &&
			d.length > 1 &&
			console.warn(
				`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`
			),
		C.createElement(
			C.Fragment,
			null,
			f.size ? d : d.map((g) => C.cloneElement(g))
		)
	);
};
var sO = {
		initial: (e) => {
			const { position: t } = e,
				r = ['top', 'bottom'].includes(t) ? 'y' : 'x';
			let n = ['top-right', 'bottom-right'].includes(t) ? 1 : -1;
			return t === 'bottom' && (n = 1), { opacity: 0, [r]: n * 24 };
		},
		animate: {
			opacity: 1,
			y: 0,
			x: 0,
			scale: 1,
			transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
		},
		exit: {
			opacity: 0,
			scale: 0.85,
			transition: { duration: 0.2, ease: [0.4, 0, 1, 1] }
		}
	},
	Sx = C.memo((e) => {
		const {
				id: t,
				message: r,
				onCloseComplete: n,
				onRequestRemove: o,
				requestClose: i = !1,
				position: a = 'bottom',
				duration: s = 5e3,
				containerStyle: l,
				motionVariants: u = sO,
				toastSpacing: c = '0.5rem'
			} = e,
			[d, f] = C.useState(s),
			p = qz();
		Cg(() => {
			p || n == null || n();
		}, [p]),
			Cg(() => {
				f(s);
			}, [s]);
		const v = () => f(null),
			b = () => f(s),
			k = () => {
				p && o();
			};
		C.useEffect(() => {
			p && i && o();
		}, [p, i, o]),
			FA(k, d);
		const h = C.useMemo(
				() => ({
					pointerEvents: 'auto',
					maxWidth: 560,
					minWidth: 300,
					margin: c,
					...l
				}),
				[l, c]
			),
			m = C.useMemo(() => wA(a), [a]);
		return A(JL.li, {
			layout: !0,
			className: 'chakra-toast',
			variants: u,
			initial: 'initial',
			animate: 'animate',
			exit: 'exit',
			onHoverStart: v,
			onHoverEnd: b,
			custom: { position: a },
			style: m,
			children: A(Ge.div, {
				role: 'status',
				'aria-atomic': 'true',
				className: 'chakra-toast__inner',
				__css: h,
				children: Fr(r, { id: t, onClose: k })
			})
		});
	});
Sx.displayName = 'ToastComponent';
var lO = (e) => {
		const t = C.useSyncExternalStore(ki.subscribe, ki.getState, ki.getState),
			{ children: r, motionVariants: n, component: o = Sx, portalProps: i } = e,
			s = Object.keys(t).map((l) => {
				const u = t[l];
				return A(
					'ul',
					{
						role: 'region',
						'aria-live': 'polite',
						id: `chakra-toast-manager-${l}`,
						style: kA(l),
						children: A(aO, {
							initial: !1,
							children: u.map((c) => A(o, { motionVariants: n, ...c }, c.id))
						})
					},
					l
				);
			});
		return be(Dv, { children: [r, A(iu, { ...i, children: s })] });
	},
	uO = (e) =>
		function ({ children: r, theme: n = e, toastOptions: o, ...i }) {
			return be(SA, { theme: n, ...i, children: [r, A(lO, { ...o })] });
		},
	cO = uO(jR);
function dO(e, t) {
	if (e != null) {
		if (typeof e == 'function') {
			e(t);
			return;
		}
		try {
			e.current = t;
		} catch {
			throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
		}
	}
}
function fO(...e) {
	return (t) => {
		e.forEach((r) => {
			dO(r, t);
		});
	};
}
function pO(...e) {
	return C.useMemo(() => fO(...e), e);
}
var [_O, hO] = ma({ strict: !1, name: 'ButtonGroupContext' });
function mO(e) {
	const [t, r] = C.useState(!e);
	return {
		ref: C.useCallback((i) => {
			i && r(i.tagName === 'BUTTON');
		}, []),
		type: t ? 'button' : void 0
	};
}
function Cf(e) {
	const { children: t, className: r, ...n } = e,
		o = C.isValidElement(t)
			? C.cloneElement(t, { 'aria-hidden': !0, focusable: !1 })
			: t,
		i = sr('chakra-button__icon', r);
	return A(Ge.span, {
		display: 'inline-flex',
		alignSelf: 'center',
		flexShrink: 0,
		...n,
		className: i,
		children: o
	});
}
Cf.displayName = 'ButtonIcon';
function _f(e) {
	const {
			label: t,
			placement: r,
			spacing: n = '0.5rem',
			children: o = A(cu, {
				color: 'currentColor',
				width: '1em',
				height: '1em'
			}),
			className: i,
			__css: a,
			...s
		} = e,
		l = sr('chakra-button__spinner', i),
		u = r === 'start' ? 'marginEnd' : 'marginStart',
		c = C.useMemo(
			() => ({
				display: 'flex',
				alignItems: 'center',
				position: t ? 'relative' : 'absolute',
				[u]: t ? n : 0,
				fontSize: '1em',
				lineHeight: 'normal',
				...a
			}),
			[a, t, u, n]
		);
	return A(Ge.div, { className: l, ...s, __css: c, children: o });
}
_f.displayName = 'ButtonSpinner';
var Tf = on((e, t) => {
	const r = hO(),
		n = ya('Button', { ...r, ...e }),
		{
			isDisabled: o = r == null ? void 0 : r.isDisabled,
			isLoading: i,
			isActive: a,
			children: s,
			leftIcon: l,
			rightIcon: u,
			loadingText: c,
			iconSpacing: d = '0.5rem',
			type: f,
			spinner: p,
			spinnerPlacement: v = 'start',
			className: b,
			as: k,
			...h
		} = ga(e),
		m = C.useMemo(() => {
			const R = { ...(n == null ? void 0 : n._focus), zIndex: 1 };
			return {
				display: 'inline-flex',
				appearance: 'none',
				alignItems: 'center',
				justifyContent: 'center',
				userSelect: 'none',
				position: 'relative',
				whiteSpace: 'nowrap',
				verticalAlign: 'middle',
				outline: 'none',
				...n,
				...(!!r && { _focus: R })
			};
		}, [n, r]),
		{ ref: g, type: S } = mO(k),
		P = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s };
	return be(Ge.button, {
		disabled: o || i,
		ref: pO(t, g),
		as: k,
		type: f ?? S,
		'data-active': $0(a),
		'data-loading': $0(i),
		__css: m,
		className: sr('chakra-button', b),
		...h,
		children: [
			i &&
				v === 'start' &&
				A(_f, {
					className: 'chakra-button__spinner--start',
					label: c,
					placement: 'start',
					spacing: d,
					children: p
				}),
			i
				? c || A(Ge.span, { opacity: 0, children: A(Pv, { ...P }) })
				: A(Pv, { ...P }),
			i &&
				v === 'end' &&
				A(_f, {
					className: 'chakra-button__spinner--end',
					label: c,
					placement: 'end',
					spacing: d,
					children: p
				})
		]
	});
});
Tf.displayName = 'Button';
function Pv(e) {
	const { leftIcon: t, rightIcon: r, children: n, iconSpacing: o } = e;
	return be(Dv, {
		children: [
			t && A(Cf, { marginEnd: o, children: t }),
			n,
			r && A(Cf, { marginStart: o, children: r })
		]
	});
}
var zs = on(function (t, r) {
	const {
			borderLeftWidth: n,
			borderBottomWidth: o,
			borderTopWidth: i,
			borderRightWidth: a,
			borderWidth: s,
			borderStyle: l,
			borderColor: u,
			...c
		} = ya('Divider', t),
		{ className: d, orientation: f = 'horizontal', __css: p, ...v } = ga(t),
		b = {
			vertical: { borderLeftWidth: n || a || s || '1px', height: '100%' },
			horizontal: { borderBottomWidth: o || i || s || '1px', width: '100%' }
		};
	return A(Ge.hr, {
		ref: r,
		'aria-orientation': f,
		...v,
		__css: { ...c, border: '0', borderColor: u, borderStyle: l, ...b[f], ...p },
		className: sr('chakra-divider', d)
	});
});
zs.displayName = 'Divider';
var xx = {
		color: void 0,
		size: void 0,
		className: void 0,
		style: void 0,
		attr: void 0
	},
	$v = nt.createContext && nt.createContext(xx),
	Yr =
		(globalThis && globalThis.__assign) ||
		function () {
			return (
				(Yr =
					Object.assign ||
					function (e) {
						for (var t, r = 1, n = arguments.length; r < n; r++) {
							t = arguments[r];
							for (var o in t)
								Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						}
						return e;
					}),
				Yr.apply(this, arguments)
			);
		},
	gO =
		(globalThis && globalThis.__rest) ||
		function (e, t) {
			var r = {};
			for (var n in e)
				Object.prototype.hasOwnProperty.call(e, n) &&
					t.indexOf(n) < 0 &&
					(r[n] = e[n]);
			if (e != null && typeof Object.getOwnPropertySymbols == 'function')
				for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
					t.indexOf(n[o]) < 0 &&
						Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
						(r[n[o]] = e[n[o]]);
			return r;
		};
function wx(e) {
	return (
		e &&
		e.map(function (t, r) {
			return nt.createElement(t.tag, Yr({ key: r }, t.attr), wx(t.child));
		})
	);
}
function kx(e) {
	return function (t) {
		return nt.createElement(vO, Yr({ attr: Yr({}, e.attr) }, t), wx(e.child));
	};
}
function vO(e) {
	var t = function (r) {
		var n = e.attr,
			o = e.size,
			i = e.title,
			a = gO(e, ['attr', 'size', 'title']),
			s = o || r.size || '1em',
			l;
		return (
			r.className && (l = r.className),
			e.className && (l = (l ? l + ' ' : '') + e.className),
			nt.createElement(
				'svg',
				Yr(
					{ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
					r.attr,
					n,
					a,
					{
						className: l,
						style: Yr(Yr({ color: e.color || r.color }, r.style), e.style),
						height: s,
						width: s,
						xmlns: 'http://www.w3.org/2000/svg'
					}
				),
				i && nt.createElement('title', null, i),
				e.children
			)
		);
	};
	return $v !== void 0
		? nt.createElement($v.Consumer, null, function (r) {
				return t(r);
		  })
		: t(xx);
}
function yO(e) {
	return kx({
		tag: 'svg',
		attr: { viewBox: '0 0 24 24' },
		child: [
			{ tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0z' } },
			{
				tag: 'path',
				attr: {
					d: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z'
				}
			}
		]
	})(e);
}
function bO(e) {
	return kx({
		tag: 'svg',
		attr: { viewBox: '0 0 496 512' },
		child: [
			{
				tag: 'path',
				attr: {
					d: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
				}
			}
		]
	})(e);
}
var Ef = {},
	SO = {
		get exports() {
			return Ef;
		},
		set exports(e) {
			Ef = e;
		}
	};
(function (e, t) {
	(function (r, n) {
		e.exports = n();
	})(typeof self < 'u' ? self : ei, function () {
		return (function (r) {
			var n = {};
			function o(i) {
				if (n[i]) return n[i].exports;
				var a = (n[i] = { i, l: !1, exports: {} });
				return r[i].call(a.exports, a, a.exports, o), (a.l = !0), a.exports;
			}
			return (
				(o.m = r),
				(o.c = n),
				(o.d = function (i, a, s) {
					o.o(i, a) || Object.defineProperty(i, a, { enumerable: !0, get: s });
				}),
				(o.r = function (i) {
					typeof Symbol < 'u' &&
						Symbol.toStringTag &&
						Object.defineProperty(i, Symbol.toStringTag, { value: 'Module' }),
						Object.defineProperty(i, '__esModule', { value: !0 });
				}),
				(o.t = function (i, a) {
					if (
						(1 & a && (i = o(i)),
						8 & a || (4 & a && typeof i == 'object' && i && i.__esModule))
					)
						return i;
					var s = Object.create(null);
					if (
						(o.r(s),
						Object.defineProperty(s, 'default', { enumerable: !0, value: i }),
						2 & a && typeof i != 'string')
					)
						for (var l in i)
							o.d(
								s,
								l,
								function (u) {
									return i[u];
								}.bind(null, l)
							);
					return s;
				}),
				(o.n = function (i) {
					var a =
						i && i.__esModule
							? function () {
									return i.default;
							  }
							: function () {
									return i;
							  };
					return o.d(a, 'a', a), a;
				}),
				(o.o = function (i, a) {
					return Object.prototype.hasOwnProperty.call(i, a);
				}),
				(o.p = ''),
				o((o.s = 0))
			);
		})([
			function (r, n, o) {
				Object.defineProperty(n, '__esModule', { value: !0 });
				var i = o(1),
					a = /["'&<>]/,
					s = function (d) {
						var f = a.exec(d);
						if (f !== null) {
							var p,
								v = '',
								b = void 0,
								k = 0;
							for (b = f.index; b < d.length; b++) {
								switch (d.charCodeAt(b)) {
									case 34:
										p = '&quot;';
										break;
									case 38:
										p = '&amp;';
										break;
									case 39:
										p = '&#39;';
										break;
									case 60:
										p = '&lt;';
										break;
									case 62:
										p = '&gt;';
										break;
									default:
										continue;
								}
								k !== b && (v += d.substring(k, b)), (k = b + 1), (v += p);
							}
							return k !== b ? v + d.substring(k, b) : v;
						}
						return d;
					},
					l = (function () {
						function d(f) {
							(this.buffer = []),
								(this.indentString = f),
								(this.objects = []),
								(this._printSelectionEndAtNewLine = !1);
						}
						return (
							(d.prototype.checkCircular = function (f) {
								for (var p = 0, v = this.objects; p < v.length; p++)
									if (f === v[p])
										throw new Error(
											'Cannot pretty print object with circular reference'
										);
								this.objects.push(f);
							}),
							(d.prototype.print = function (f) {
								this.buffer.push(f);
							}),
							(d.prototype.newLine = function () {
								this._printSelectionEndAtNewLine
									? (this.printSelectionEnd(),
									  (this._printSelectionEndAtNewLine = !1))
									: this.buffer.push('<br>');
							}),
							(d.prototype.space = function () {
								this.buffer.push('&nbsp;');
							}),
							(d.prototype.indent = function (f) {
								if (f > 0) {
									for (var p = '', v = 0; v < f; v++) p += this.indentString;
									this.buffer.push(p);
								}
							}),
							(d.prototype.printKey = function (f) {
								this.buffer.push('"'),
									this.buffer.push(
										'<span class="json-key">' + s(f) + '</span>'
									),
									this.buffer.push('"');
							}),
							(d.prototype.printString = function (f) {
								this.buffer.push('"'),
									this.buffer.push(
										'<span class="json-string">' + s(f) + '</span>'
									),
									this.buffer.push('"');
							}),
							(d.prototype.printBoolean = function (f) {
								this.buffer.push('<span class="json-boolean">' + f + '</span>');
							}),
							(d.prototype.printNumber = function (f) {
								this.buffer.push('<span class="json-number">' + f + '</span>');
							}),
							(d.prototype.printSelectionStart = function () {
								this.buffer.push('</div>'),
									this.buffer.push('<div class="json-pretty json-selected">');
							}),
							(d.prototype.printSelectionEnd = function () {
								this.buffer.push('</div>'),
									this.buffer.push('<div class="json-pretty">');
							}),
							Object.defineProperty(d.prototype, 'printSelectionEndAtNewLine', {
								set: function (f) {
									this._printSelectionEndAtNewLine = f;
								},
								enumerable: !0,
								configurable: !0
							}),
							(d.prototype.toString = function () {
								return this.buffer.join('');
							}),
							d
						);
					})(),
					u = function (d, f, p, v, b) {
						f.checkCircular(d), f.print('{'), f.newLine();
						for (var k = Object.keys(d), h = 0; h < k.length; h++) {
							var m = k[h],
								g = d[m];
							switch (
								(v === g && f.printSelectionStart(),
								f.indent(p + 1),
								f.printKey(m),
								f.print(':'),
								f.space(),
								typeof g)
							) {
								case 'number':
									f.printNumber(g);
									break;
								case 'boolean':
									f.printBoolean(g);
									break;
								case 'string':
									f.printString(g);
									break;
								case 'object':
									g === null
										? f.print('null')
										: Array.isArray(g)
										? c(g, f, p + 1, v)
										: u(g, f, p + 1, v);
									break;
								case 'undefined':
									f.print('undefined');
									break;
								default:
									throw new Error("Don''t know what to do with " + typeof g);
							}
							h < k.length - 1 && f.print(','), f.newLine();
						}
						f.indent(p),
							f.print('}'),
							v === d && (f.printSelectionEndAtNewLine = !0);
					},
					c = function (d, f, p, v, b) {
						f.checkCircular(d), f.print('['), f.newLine();
						for (var k = 0; k < d.length; k++) {
							var h = d[k];
							switch (
								(v === h && f.printSelectionStart(), f.indent(p + 1), typeof h)
							) {
								case 'number':
									f.printNumber(h);
									break;
								case 'boolean':
									f.printBoolean(h);
									break;
								case 'string':
									f.printString(h);
									break;
								case 'object':
									h == null ? f.print('null') : u(h, f, p + 1, v);
									break;
								case 'undefined':
									f.print('undefined');
									break;
								default:
									throw new Error("Don''t know what to do with " + typeof h);
							}
							k < d.length - 1 && f.print(','), f.newLine();
						}
						f.indent(p),
							f.print(']'),
							v === d && (f.printSelectionEndAtNewLine = !0);
					};
				n.default = function (d, f, p) {
					if (typeof d !== void 0 && d != null) {
						var v = i.__assign({ indent: '&nbsp;&nbsp;' }, p),
							b = new l(v.indent);
						return (
							d === f
								? b.print('<div class="json-pretty json-selected">')
								: b.print('<div class="json-pretty">'),
							Array.isArray(d) ? c(d, b, 0, f) : u(d, b, 0, f),
							b.print('</div>'),
							b.toString()
						);
					}
					return '';
				};
			},
			function (r, n, o) {
				o.r(n),
					o.d(n, '__extends', function () {
						return a;
					}),
					o.d(n, '__assign', function () {
						return s;
					}),
					o.d(n, '__rest', function () {
						return l;
					}),
					o.d(n, '__decorate', function () {
						return u;
					}),
					o.d(n, '__param', function () {
						return c;
					}),
					o.d(n, '__metadata', function () {
						return d;
					}),
					o.d(n, '__awaiter', function () {
						return f;
					}),
					o.d(n, '__generator', function () {
						return p;
					}),
					o.d(n, '__exportStar', function () {
						return v;
					}),
					o.d(n, '__values', function () {
						return b;
					}),
					o.d(n, '__read', function () {
						return k;
					}),
					o.d(n, '__spread', function () {
						return h;
					}),
					o.d(n, '__await', function () {
						return m;
					}),
					o.d(n, '__asyncGenerator', function () {
						return g;
					}),
					o.d(n, '__asyncDelegator', function () {
						return S;
					}),
					o.d(n, '__asyncValues', function () {
						return P;
					}),
					o.d(n, '__makeTemplateObject', function () {
						return R;
					}),
					o.d(n, '__importStar', function () {
						return $;
					}),
					o.d(n, '__importDefault', function () {
						return I;
					});
				/*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0

	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.

	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */ var i =
					Object.setPrototypeOf ||
					({ __proto__: [] } instanceof Array &&
						function (E, T) {
							E.__proto__ = T;
						}) ||
					function (E, T) {
						for (var M in T) T.hasOwnProperty(M) && (E[M] = T[M]);
					};
				function a(E, T) {
					function M() {
						this.constructor = E;
					}
					i(E, T),
						(E.prototype =
							T === null
								? Object.create(T)
								: ((M.prototype = T.prototype), new M()));
				}
				var s =
					Object.assign ||
					function (E) {
						for (var T, M = 1, N = arguments.length; M < N; M++)
							for (var B in (T = arguments[M]))
								Object.prototype.hasOwnProperty.call(T, B) && (E[B] = T[B]);
						return E;
					};
				function l(E, T) {
					var M = {};
					for (var N in E)
						Object.prototype.hasOwnProperty.call(E, N) &&
							T.indexOf(N) < 0 &&
							(M[N] = E[N]);
					if (E != null && typeof Object.getOwnPropertySymbols == 'function') {
						var B = 0;
						for (N = Object.getOwnPropertySymbols(E); B < N.length; B++)
							T.indexOf(N[B]) < 0 && (M[N[B]] = E[N[B]]);
					}
					return M;
				}
				function u(E, T, M, N) {
					var B,
						H = arguments.length,
						V =
							H < 3
								? T
								: N === null
								? (N = Object.getOwnPropertyDescriptor(T, M))
								: N;
					if (
						typeof Reflect == 'object' &&
						typeof Reflect.decorate == 'function'
					)
						V = Reflect.decorate(E, T, M, N);
					else
						for (var K = E.length - 1; K >= 0; K--)
							(B = E[K]) &&
								(V = (H < 3 ? B(V) : H > 3 ? B(T, M, V) : B(T, M)) || V);
					return H > 3 && V && Object.defineProperty(T, M, V), V;
				}
				function c(E, T) {
					return function (M, N) {
						T(M, N, E);
					};
				}
				function d(E, T) {
					if (
						typeof Reflect == 'object' &&
						typeof Reflect.metadata == 'function'
					)
						return Reflect.metadata(E, T);
				}
				function f(E, T, M, N) {
					return new (M || (M = Promise))(function (B, H) {
						function V(L) {
							try {
								Te(N.next(L));
							} catch (O) {
								H(O);
							}
						}
						function K(L) {
							try {
								Te(N.throw(L));
							} catch (O) {
								H(O);
							}
						}
						function Te(L) {
							L.done
								? B(L.value)
								: new M(function (O) {
										O(L.value);
								  }).then(V, K);
						}
						Te((N = N.apply(E, T || [])).next());
					});
				}
				function p(E, T) {
					var M,
						N,
						B,
						H,
						V = {
							label: 0,
							sent: function () {
								if (1 & B[0]) throw B[1];
								return B[1];
							},
							trys: [],
							ops: []
						};
					return (
						(H = { next: K(0), throw: K(1), return: K(2) }),
						typeof Symbol == 'function' &&
							(H[Symbol.iterator] = function () {
								return this;
							}),
						H
					);
					function K(Te) {
						return function (L) {
							return (function (O) {
								if (M) throw new TypeError('Generator is already executing.');
								for (; V; )
									try {
										if (
											((M = 1),
											N &&
												(B =
													N[2 & O[0] ? 'return' : O[0] ? 'throw' : 'next']) &&
												!(B = B.call(N, O[1])).done)
										)
											return B;
										switch (((N = 0), B && (O = [0, B.value]), O[0])) {
											case 0:
											case 1:
												B = O;
												break;
											case 4:
												return V.label++, { value: O[1], done: !1 };
											case 5:
												V.label++, (N = O[1]), (O = [0]);
												continue;
											case 7:
												(O = V.ops.pop()), V.trys.pop();
												continue;
											default:
												if (
													!(B = (B = V.trys).length > 0 && B[B.length - 1]) &&
													(O[0] === 6 || O[0] === 2)
												) {
													V = 0;
													continue;
												}
												if (
													O[0] === 3 &&
													(!B || (O[1] > B[0] && O[1] < B[3]))
												) {
													V.label = O[1];
													break;
												}
												if (O[0] === 6 && V.label < B[1]) {
													(V.label = B[1]), (B = O);
													break;
												}
												if (B && V.label < B[2]) {
													(V.label = B[2]), V.ops.push(O);
													break;
												}
												B[2] && V.ops.pop(), V.trys.pop();
												continue;
										}
										O = T.call(E, V);
									} catch (j) {
										(O = [6, j]), (N = 0);
									} finally {
										M = B = 0;
									}
								if (5 & O[0]) throw O[1];
								return { value: O[0] ? O[1] : void 0, done: !0 };
							})([Te, L]);
						};
					}
				}
				function v(E, T) {
					for (var M in E) T.hasOwnProperty(M) || (T[M] = E[M]);
				}
				function b(E) {
					var T = typeof Symbol == 'function' && E[Symbol.iterator],
						M = 0;
					return T
						? T.call(E)
						: {
								next: function () {
									return (
										E && M >= E.length && (E = void 0),
										{ value: E && E[M++], done: !E }
									);
								}
						  };
				}
				function k(E, T) {
					var M = typeof Symbol == 'function' && E[Symbol.iterator];
					if (!M) return E;
					var N,
						B,
						H = M.call(E),
						V = [];
					try {
						for (; (T === void 0 || T-- > 0) && !(N = H.next()).done; )
							V.push(N.value);
					} catch (K) {
						B = { error: K };
					} finally {
						try {
							N && !N.done && (M = H.return) && M.call(H);
						} finally {
							if (B) throw B.error;
						}
					}
					return V;
				}
				function h() {
					for (var E = [], T = 0; T < arguments.length; T++)
						E = E.concat(k(arguments[T]));
					return E;
				}
				function m(E) {
					return this instanceof m ? ((this.v = E), this) : new m(E);
				}
				function g(E, T, M) {
					if (!Symbol.asyncIterator)
						throw new TypeError('Symbol.asyncIterator is not defined.');
					var N,
						B = M.apply(E, T || []),
						H = [];
					return (
						(N = {}),
						V('next'),
						V('throw'),
						V('return'),
						(N[Symbol.asyncIterator] = function () {
							return this;
						}),
						N
					);
					function V(j) {
						B[j] &&
							(N[j] = function (re) {
								return new Promise(function (se, Z) {
									H.push([j, re, se, Z]) > 1 || K(j, re);
								});
							});
					}
					function K(j, re) {
						try {
							(function (se) {
								se.value instanceof m
									? Promise.resolve(se.value.v).then(Te, L)
									: O(H[0][2], se);
							})(B[j](re));
						} catch (se) {
							O(H[0][3], se);
						}
					}
					function Te(j) {
						K('next', j);
					}
					function L(j) {
						K('throw', j);
					}
					function O(j, re) {
						j(re), H.shift(), H.length && K(H[0][0], H[0][1]);
					}
				}
				function S(E) {
					var T, M;
					return (
						(T = {}),
						N('next'),
						N('throw', function (B) {
							throw B;
						}),
						N('return'),
						(T[Symbol.iterator] = function () {
							return this;
						}),
						T
					);
					function N(B, H) {
						E[B] &&
							(T[B] = function (V) {
								return (M = !M)
									? { value: m(E[B](V)), done: B === 'return' }
									: H
									? H(V)
									: V;
							});
					}
				}
				function P(E) {
					if (!Symbol.asyncIterator)
						throw new TypeError('Symbol.asyncIterator is not defined.');
					var T = E[Symbol.asyncIterator];
					return T ? T.call(E) : b(E);
				}
				function R(E, T) {
					return (
						Object.defineProperty
							? Object.defineProperty(E, 'raw', { value: T })
							: (E.raw = T),
						E
					);
				}
				function $(E) {
					if (E && E.__esModule) return E;
					var T = {};
					if (E != null)
						for (var M in E) Object.hasOwnProperty.call(E, M) && (T[M] = E[M]);
					return (T.default = E), T;
				}
				function I(E) {
					return E && E.__esModule ? E : { default: E };
				}
			}
		]);
	});
})(SO);
const xO = Pf(Ef),
	wO = '' + new URL('nature_icon-844bb14e.svg', import.meta.url).href;
function kO() {
	const [e, t] = C.useState(''),
		r = 'https://aire-api-lh35.onrender.com/api/trails',
		o = xO([
			{
				_id: '63af2433d7f128a61ca7186e',
				trailName: 'Emerald Lake Trail',
				description:
					"Enjoy this 3.2-mile out-and-back trail near Estes Park, Colorado. Generally considered an easy route, it takes an average of 1 h 39 min to complete. This is a very popular area for hiking and snowshoeing, so you'll likely encounter other people while exploring. The best times to visit this trail are June through October. You'll need to leave pups at home — dogs aren't allowed on this trail.",
				trailheadCoordinates: '40.31195,-105.64567',
				length: 3.2,
				elevationGain: 698,
				routeType: 'Out & Back',
				difficulty: 'Easy',
				image:
					'https://s27363.pcdn.co/wp-content/uploads/2020/09/Nymph-Dream-and-Emerald-Lake-Hike.jpg.optimal.jpg'
			}
		]),
		i = C.useCallback(async () => {
			await n_
				.get(r)
				.then((a) => a.data)
				.then((a) => t(a))
				.catch((a) => console.error(a));
		}, [r]);
	return (
		C.useEffect(() => {
			i();
		}, [i]),
		A(cO, {
			children: be('div', {
				className: 'App',
				children: [
					be('header', {
						children: [
							A('img', { className: 'logo', src: wO, alt: '' }),
							A('h1', { className: 'title', children: 'aire' })
						]
					}),
					A('div', {
						className: 'headline',
						children: A('p', {
							children: 'aire is a free API for hiking trails.'
						})
					}),
					be('div', {
						className: 'usage-container',
						children: [
							A('h1', { children: 'Usage' }),
							A('p', { children: 'Retrieve all trails' }),
							A('code', { children: 'GET /api/trails' })
						]
					}),
					A(zs, {}),
					be('div', {
						className: 'response-container',
						children: [
							A('h1', { children: 'Sample Response' }),
							A('pre', {
								children: A('code', {
									children: A('div', { dangerouslySetInnerHTML: { __html: o } })
								})
							})
						]
					}),
					A(zs, {}),
					be('div', {
						className: 'sample-container',
						children: [
							A('h4', {
								className: 'sample-title',
								children: 'Sample created with response'
							}),
							e.length > 1
								? be('div', {
										className: 'trail-card',
										children: [
											A('img', {
												className: 'trail-img',
												src: e[0].image,
												alt: ''
											}),
											A('h4', {
												className: 'trail-title',
												children: e[0].trailName
											}),
											be('div', {
												className: 'trail-info',
												children: [
													be('p', {
														className: 'trail-difficulty',
														children: [
															'Difficulty: ',
															A('span', { children: e[0].difficulty })
														]
													}),
													be('p', {
														className: 'trail-length',
														children: [
															'Length: ',
															be('span', { children: [e[0].length, 'mi'] })
														]
													}),
													be('p', {
														className: 'trail-type',
														children: [
															'Route: ',
															A('span', { children: e[0].routeType })
														]
													}),
													be('p', {
														className: 'trail-elevation',
														children: [
															'Elevation Gain: ',
															be('span', {
																children: [e[0].elevationGain, 'ft']
															})
														]
													})
												]
											}),
											A('div', {}),
											A('article', {
												className: 'trail-description',
												children: e[0].description
											}),
											A(Tf, {
												colorScheme: 'green',
												variant: 'ghost',
												rightIcon: A(yO, {}),
												children: A('a', {
													href: `https://www.google.com/maps/place/${e[0].trailheadCoordinates}`,
													target: '_blank',
													children: 'Trailhead'
												})
											})
										]
								  })
								: A('div', {
										className: 'spinner',
										children: A(cu, { size: 'xl' })
								  })
						]
					}),
					A(zs, {}),
					A('footer', {
						children: A(Tf, {
							colorScheme: 'teal',
							rightIcon: A(bO, {}),
							children: A('a', {
								href: 'https://github.com/mahiv87/aire-api',
								target: '_blank',
								children: 'GitHub'
							})
						})
					})
				]
			})
		})
	);
}
Qc.createRoot(document.getElementById('root')).render(
	A(nt.StrictMode, { children: A(kO, {}) })
);
