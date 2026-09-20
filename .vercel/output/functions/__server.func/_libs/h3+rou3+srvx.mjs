import "node:http";
import { PassThrough, Readable } from "node:stream";
import "node:stream/promises";
import "node:https";
import "node:http2";
//#region node_modules/rou3/dist/index.mjs
var NullProtoObj = /* @__PURE__ */ (() => {
	const e = function() {};
	return e.prototype = Object.create(null), Object.freeze(e.prototype), e;
})();
/**
* Create a new router context.
*/
function createRouter() {
	return {
		root: { key: "" },
		static: new NullProtoObj()
	};
}
function expandGroupDelimiters(path) {
	let i = 0;
	let depth = 0;
	for (; i < path.length; i++) {
		const c = path.charCodeAt(i);
		if (c === 92) {
			i++;
			continue;
		}
		if (c === 40) {
			depth++;
			continue;
		}
		if (c === 41 && depth > 0) {
			depth--;
			continue;
		}
		if (c === 123 && depth === 0) break;
	}
	if (i >= path.length) return;
	let j = i + 1;
	depth = 0;
	for (; j < path.length; j++) {
		const c = path.charCodeAt(j);
		if (c === 92) {
			j++;
			continue;
		}
		if (c === 40) {
			depth++;
			continue;
		}
		if (c === 41 && depth > 0) {
			depth--;
			continue;
		}
		if (c === 125 && depth === 0) break;
	}
	if (j >= path.length) return;
	const mod = path[j + 1];
	const hasMod = mod === "?" || mod === "+" || mod === "*";
	const pre = path.slice(0, i);
	const body = path.slice(i + 1, j);
	const suf = path.slice(j + (hasMod ? 2 : 1));
	if (!hasMod) return [pre + body + suf];
	if (mod === "?") return [pre + body + suf, pre + suf];
	if (body.includes("/")) throw new Error("unsupported group repetition across segments");
	return [`${pre}(?:${body})${mod}${suf}`];
}
var UNNAMED_GROUP_PREFIX = "__rou3_unnamed_";
var _unnamedGroupPrefixLength = 15;
function hasSegmentWildcard(segment) {
	let depth = 0;
	for (let i = 0; i < segment.length; i++) {
		const ch = segment.charCodeAt(i);
		if (ch === 92) {
			i++;
			continue;
		}
		if (ch === 40) {
			depth++;
			continue;
		}
		if (ch === 41 && depth > 0) {
			depth--;
			continue;
		}
		if (ch === 42 && depth === 0) return true;
	}
	return false;
}
function replaceSegmentWildcards(segment, unnamedStart, toGroupKey = toUnnamedGroupKey) {
	let depth = 0;
	let nextIndex = unnamedStart;
	let replaced = "";
	for (let i = 0; i < segment.length; i++) {
		const ch = segment.charCodeAt(i);
		if (ch === 92) {
			replaced += segment[i];
			if (i + 1 < segment.length) replaced += segment[++i];
			continue;
		}
		if (ch === 40) {
			depth++;
			replaced += segment[i];
			continue;
		}
		if (ch === 41 && depth > 0) {
			depth--;
			replaced += segment[i];
			continue;
		}
		if (ch === 42 && depth === 0) {
			replaced += `(?<${toGroupKey(nextIndex++)}>[^/]*)`;
			continue;
		}
		replaced += segment[i];
	}
	return [replaced, nextIndex];
}
function toUnnamedGroupKey(index) {
	return `${UNNAMED_GROUP_PREFIX}${index}`;
}
function normalizeUnnamedGroupKey(key) {
	return key.startsWith("__rou3_unnamed_") ? key.slice(_unnamedGroupPrefixLength) : key;
}
function encodeEscapes(path) {
	return path.replace(/\\:/g, "�A").replace(/\\\(/g, "�B").replace(/\\\)/g, "�C").replace(/\\\{/g, "�D").replace(/\\\}/g, "�E");
}
function decodeEscaped(segment) {
	return segment.replace(/\uFFFD([A-E])/g, (_, c) => c === "A" ? ":" : c === "B" ? "(" : c === "C" ? ")" : c === "D" ? "{" : "}");
}
function expandModifiers(segments) {
	for (let i = 0; i < segments.length; i++) {
		const m = segments[i].match(/^(.*:[\w-]+(?:\([^)]*\))?)([?+*])$/);
		if (!m) continue;
		const pre = segments.slice(0, i);
		const suf = segments.slice(i + 1);
		if (m[2] === "?") return ["/" + pre.concat(m[1]).concat(suf).join("/"), "/" + pre.concat(suf).join("/")];
		const name = m[1].match(/:([\w-]+)/)?.[1] || "_";
		const wc = "/" + [
			...pre,
			`**:${name}`,
			...suf
		].join("/");
		const without = "/" + [...pre, ...suf].join("/");
		return m[2] === "+" ? [wc] : [wc, without];
	}
}
function normalizePath(path) {
	if (!path.includes("/.")) return path;
	const r = [];
	for (const s of path.split("/")) if (s === ".") continue;
	else if (s === ".." && r.length > 1) r.pop();
	else r.push(s);
	return r.join("/") || "/";
}
function splitPath(path) {
	const [_, ...s] = path.split("/");
	return s[s.length - 1] === "" ? s.slice(0, -1) : s;
}
function getMatchParams(segments, paramsMap) {
	const params = new NullProtoObj();
	for (const [index, name] of paramsMap) {
		const segment = index < 0 ? segments.slice(-(index + 1)).join("/") : segments[index];
		if (typeof name === "string") params[name] = segment;
		else {
			const match = segment.match(name);
			if (match) for (const key in match.groups) params[normalizeUnnamedGroupKey(key)] = match.groups[key];
		}
	}
	return params;
}
/**
* Add a route to the router context.
*/
function addRoute(ctx, method = "", path, data) {
	method = method.toUpperCase();
	if (path.charCodeAt(0) !== 47) path = `/${path}`;
	const groupExpanded = expandGroupDelimiters(path);
	if (groupExpanded) {
		for (const expandedPath of groupExpanded) addRoute(ctx, method, expandedPath, data);
		return;
	}
	path = encodeEscapes(path);
	const segments = splitPath(path);
	const expanded = expandModifiers(segments);
	if (expanded) {
		for (const p of expanded) addRoute(ctx, method, p, data);
		return;
	}
	let node = ctx.root;
	let _unnamedParamIndex = 0;
	const paramsMap = [];
	const paramsRegexp = [];
	for (let i = 0; i < segments.length; i++) {
		let segment = segments[i];
		if (segment.startsWith("**")) {
			if (!node.wildcard) node.wildcard = { key: "**" };
			node = node.wildcard;
			paramsMap.push([
				-(i + 1),
				segment.split(":")[1] || "_",
				segment.length === 2
			]);
			break;
		}
		if (segment === "*" || segment.includes(":") || segment.includes("(") || hasSegmentWildcard(segment)) {
			if (!node.param) node.param = { key: "*" };
			node = node.param;
			if (segment === "*") paramsMap.push([
				i,
				String(_unnamedParamIndex++),
				true
			]);
			else if (segment.includes(":", 1) || segment.includes("(") || hasSegmentWildcard(segment) || !/^:[\w-]+$/.test(segment)) {
				const [regexp, nextIndex] = getParamRegexp(segment, _unnamedParamIndex);
				_unnamedParamIndex = nextIndex;
				paramsRegexp[i] = regexp;
				node.hasRegexParam = true;
				paramsMap.push([
					i,
					regexp,
					false
				]);
			} else paramsMap.push([
				i,
				segment.slice(1),
				false
			]);
			continue;
		}
		if (segment === "\\*") segment = segments[i] = "*";
		else if (segment === "\\*\\*") segment = segments[i] = "**";
		segment = segments[i] = decodeEscaped(segment);
		const child = node.static?.[segment];
		if (child) node = child;
		else {
			const staticNode = { key: segment };
			if (!node.static) node.static = new NullProtoObj();
			node.static[segment] = staticNode;
			node = staticNode;
		}
	}
	const hasParams = paramsMap.length > 0;
	if (!node.methods) node.methods = new NullProtoObj();
	node.methods[method] ??= [];
	node.methods[method].push({
		data: data || null,
		paramsRegexp,
		paramsMap: hasParams ? paramsMap : void 0
	});
	if (!hasParams) ctx.static["/" + segments.join("/")] = node;
}
function getParamRegexp(segment, unnamedStart = 0) {
	let _i = unnamedStart;
	let _s = "", _d = 0;
	for (let j = 0; j < segment.length; j++) {
		const c = segment.charCodeAt(j);
		if (c === 40) _d++;
		else if (c === 41 && _d > 0) _d--;
		else if (c === 92 && _d === 0 && j + 1 < segment.length) {
			const n = segment[j + 1];
			if (n !== ":" && n !== "(" && n !== "*" && n !== "\\") {
				_s += "￾" + n;
				j++;
				continue;
			}
		}
		_s += segment[j];
	}
	[_s, _i] = replaceSegmentWildcards(_s, _i);
	const regex = _s.replace(/:([\w-]+)(?:\(([^)]*)\))?/g, (_, id, p) => `(?<${id}>${p || "[^/]+"})`).replace(/\((?![?<])/g, () => `(?<${toUnnamedGroupKey(_i++)}>`).replace(/\./g, "\\.").replace(/\uFFFE(.)/g, (_, c) => /[.*+?^${}()|[\]\\]/.test(c) ? `\\${c}` : c);
	return [new RegExp(`^${regex}$`), _i];
}
/**
* Find a route by path.
*/
function findRoute(ctx, method = "", path, opts) {
	if (opts?.normalize) path = normalizePath(path);
	if (path.charCodeAt(path.length - 1) === 47) path = path.slice(0, -1);
	const staticNode = ctx.static[path];
	if (staticNode && staticNode.methods) {
		const staticMatch = staticNode.methods[method] || staticNode.methods[""];
		if (staticMatch !== void 0) return staticMatch[0];
	}
	const segments = splitPath(path);
	const match = _lookupTree(ctx.root, method, segments, 0)?.[0];
	if (match === void 0) return;
	if (opts?.params === false) return match;
	return {
		data: match.data,
		params: match.paramsMap ? getMatchParams(segments, match.paramsMap) : void 0
	};
}
function _lookupTree(node, method, segments, index) {
	if (index === segments.length) {
		if (node.methods) {
			const match = node.methods[method] || node.methods[""];
			if (match) return match;
		}
		if (node.param && node.param.methods) {
			const match = node.param.methods[method] || node.param.methods[""];
			if (match) {
				const pMap = match[0].paramsMap;
				if (pMap?.[pMap?.length - 1]?.[2]) return match;
			}
		}
		if (node.wildcard && node.wildcard.methods) {
			const match = node.wildcard.methods[method] || node.wildcard.methods[""];
			if (match) {
				const pMap = match[0].paramsMap;
				if (pMap?.[pMap?.length - 1]?.[2]) return match;
			}
		}
		return;
	}
	const segment = segments[index];
	if (node.static) {
		const staticChild = node.static[segment];
		if (staticChild) {
			const match = _lookupTree(staticChild, method, segments, index + 1);
			if (match) return match;
		}
	}
	if (node.param) {
		const match = _lookupTree(node.param, method, segments, index + 1);
		if (match) {
			if (node.param.hasRegexParam) {
				const exactMatch = match.find((m) => m.paramsRegexp[index]?.test(segment)) || match.find((m) => !m.paramsRegexp[index]);
				return exactMatch ? [exactMatch] : void 0;
			}
			return match;
		}
	}
	if (node.wildcard && node.wildcard.methods) return node.wildcard.methods[method] || node.wildcard.methods[""];
}
/**
* Remove a route from the router context.
*/
function removeRoute(ctx, method, path) {
	const groupExpanded = expandGroupDelimiters(path);
	if (groupExpanded) {
		for (const expandedPath of groupExpanded) removeRoute(ctx, method, expandedPath);
		return;
	}
	path = encodeEscapes(path);
	const segments = splitPath(path);
	const modExpanded = expandModifiers(segments);
	if (modExpanded) {
		for (const expandedPath of modExpanded) removeRoute(ctx, method, expandedPath);
		return;
	}
	_remove(ctx.root, method || "", segments, 0);
}
function _remove(node, method, segments, index) {
	if (index === segments.length) {
		if (node.methods && method in node.methods) {
			delete node.methods[method];
			if (Object.keys(node.methods).length === 0) node.methods = void 0;
		}
		return;
	}
	const segment = segments[index];
	if (segment.startsWith("**")) {
		if (node.wildcard) {
			_remove(node.wildcard, method, segments, index + 1);
			if (_isEmptyNode(node.wildcard)) node.wildcard = void 0;
		}
		return;
	}
	if (_isParamSegment(segment)) {
		if (node.param) {
			_remove(node.param, method, segments, index + 1);
			if (_isEmptyNode(node.param)) node.param = void 0;
		}
		return;
	}
	const decodedSegment = decodeEscaped(segment);
	const childNode = node.static?.[decodedSegment];
	if (childNode) {
		_remove(childNode, method, segments, index + 1);
		if (_isEmptyNode(childNode)) {
			delete node.static[decodedSegment];
			if (Object.keys(node.static).length === 0) node.static = void 0;
		}
	}
}
function _isParamSegment(segment) {
	return segment === "*" || segment.includes(":") || segment.includes("(") || hasSegmentWildcard(segment);
}
function _isEmptyNode(node) {
	return node.methods === void 0 && node.static === void 0 && node.param === void 0 && node.wildcard === void 0;
}
function _findAll(node, method, segments, index, matches = []) {
	const segment = segments[index];
	if (node.wildcard && node.wildcard.methods) {
		const match = node.wildcard.methods[method] || node.wildcard.methods[""];
		if (match) matches.push(...match);
	}
	if (node.param) {
		_findAll(node.param, method, segments, index + 1, matches);
		if (index === segments.length && node.param.methods) {
			const match = node.param.methods[method] || node.param.methods[""];
			if (match) {
				const pMap = match[0].paramsMap;
				if (pMap?.[pMap?.length - 1]?.[2]) matches.push(...match);
			}
		}
	}
	const staticChild = node.static?.[segment];
	if (staticChild) _findAll(staticChild, method, segments, index + 1, matches);
	if (index === segments.length && node.methods) {
		const match = node.methods[method] || node.methods[""];
		if (match) matches.push(...match);
	}
	return matches;
}
var _P = "￾";
function replaceEscapesOutsideGroups(segment) {
	let r = "", d = 0;
	for (let i = 0; i < segment.length; i++) {
		const c = segment.charCodeAt(i);
		if (c === 40) d++;
		else if (c === 41 && d > 0) d--;
		else if (c === 92 && d === 0 && i + 1 < segment.length) {
			const n = segment[i + 1];
			if (n !== ":" && n !== "(" && n !== "*" && n !== "\\") {
				r += _P + n;
				i++;
				continue;
			}
		}
		r += segment[i];
	}
	return r;
}
function resolveEscapePlaceholders(str) {
	return str.replace(/\uFFFE(.)/g, (_, c) => /[.*+?^${}()|[\]\\]/.test(c) ? `\\${c}` : c);
}
function routeToRegExp(route = "/") {
	const groupExpanded = expandGroupDelimiters(route);
	if (groupExpanded) {
		const sources = groupExpanded.map((expandedRoute) => routeToRegExp(expandedRoute).source.slice(1, -1));
		return new RegExp(`^(?:${sources.join("|")})$`);
	}
	return _routeToRegExp(route);
}
function _routeToRegExp(route) {
	const reSegments = [];
	let idCtr = 0;
	for (const segment of route.split("/")) {
		if (!segment) continue;
		if (segment === "*") reSegments.push(`(?<${toRegExpUnnamedKey(idCtr++)}>[^/]*)`);
		else if (segment.startsWith("**")) reSegments.push(segment === "**" ? "?(?<_>.*)" : `?(?<${segment.slice(3)}>.+)`);
		else if (segment.includes(":") || /(^|[^\\])\(/.test(segment) || hasSegmentWildcard(segment)) {
			const modMatch = segment.match(/^(.*:[\w-]+(?:\([^)]*\))?)([?+*])$/);
			if (modMatch) {
				const [, base, mod] = modMatch;
				const name = base.match(/:([\w-]+)/)?.[1] || `_${idCtr++}`;
				if (mod === "?") {
					const inner = base.replace(/:([\w-]+)(?:\(([^)]*)\))?/g, (_, id, pattern) => `(?<${id}>${pattern || "[^/]+"})`).replace(/\./g, "\\.");
					if (reSegments.length > 0) {
						const prevQ = reSegments.pop();
						reSegments.push(`${prevQ}(?:/${inner})?`);
					} else reSegments.push(`?${inner}?`);
					continue;
				}
				const pattern = base.match(/:(\w+)(?:\(([^)]*)\))?/)?.[2];
				if (reSegments.length > 0) {
					const prevMod = reSegments.pop();
					if (pattern) {
						const repeated = `${pattern}(?:/${pattern})*`;
						reSegments.push(mod === "+" ? `${prevMod}/(?<${name}>${repeated})` : `${prevMod}(?:/(?<${name}>${repeated}))?`);
					} else reSegments.push(mod === "+" ? `${prevMod}/(?<${name}>.+)` : `${prevMod}(?:/(?<${name}>.*))?`);
				} else if (pattern) {
					const repeated = `${pattern}(?:/${pattern})*`;
					reSegments.push(mod === "+" ? `?(?<${name}>${repeated})` : `?(?<${name}>${repeated})?`);
				} else reSegments.push(mod === "+" ? `?(?<${name}>.+)` : `?(?<${name}>.*)`);
				continue;
			}
			let dynamicSegment = replaceEscapesOutsideGroups(segment);
			[dynamicSegment, idCtr] = replaceSegmentWildcards(dynamicSegment, idCtr, toRegExpUnnamedKey);
			reSegments.push(resolveEscapePlaceholders(dynamicSegment.replace(/:([\w-]+)(?:\(([^)]*)\))?/g, (_, id, pattern) => `(?<${id}>${pattern || "[^/]+"})`).replace(/(^|[^\\])\((?![?<])/g, (_, p) => `${p}(?<${toRegExpUnnamedKey(idCtr++)}>`).replace(/\./g, "\\.")));
		} else reSegments.push(segment.replace(/\\(.)/g, "$1").replace(/[.*+?^${}()|[\]]/g, "\\$&"));
	}
	return new RegExp(`^/${reSegments.join("/")}/?$`);
}
function toRegExpUnnamedKey(index) {
	return `_${index}`;
}
//#endregion
//#region node_modules/srvx/dist/_chunks/_url.mjs
function lazyInherit(target, source, sourceKey) {
	for (const key of [...Object.getOwnPropertyNames(source), ...Object.getOwnPropertySymbols(source)]) {
		if (key === "constructor") continue;
		const targetDesc = Object.getOwnPropertyDescriptor(target, key);
		const desc = Object.getOwnPropertyDescriptor(source, key);
		let modified = false;
		if (desc.get) {
			modified = true;
			desc.get = targetDesc?.get || function() {
				return this[sourceKey][key];
			};
		}
		if (desc.set) {
			modified = true;
			desc.set = targetDesc?.set || function(value) {
				this[sourceKey][key] = value;
			};
		}
		if (!targetDesc?.value && typeof desc.value === "function") {
			modified = true;
			desc.value = function(...args) {
				return this[sourceKey][key](...args);
			};
		}
		if (modified) Object.defineProperty(target, key, desc);
	}
}
var _needsNormRE = /(?:(?:^|\/)(?:\.|\.\.|%2e|%2e\.|\.%2e|%2e%2e)(?:\/|$))|[\\^\x80-\uffff]/i;
var FastURL = /* @__PURE__ */ (() => {
	const NativeURL = globalThis.URL;
	const FastURL = class URL {
		#url;
		#href;
		#protocol;
		#host;
		#pathname;
		#search;
		#searchParams;
		#pos;
		constructor(url) {
			if (typeof url === "string") if (url[0] === "/") this.#href = url;
			else this.#url = new NativeURL(url);
			else if (_needsNormRE.test(url.pathname)) this.#url = new NativeURL(`${url.protocol || "http:"}//${url.host || "localhost"}${url.pathname}${url.search || ""}`);
			else {
				this.#protocol = url.protocol;
				this.#host = url.host;
				this.#pathname = url.pathname;
				this.#search = url.search;
			}
		}
		static [Symbol.hasInstance](val) {
			return val instanceof NativeURL;
		}
		get _url() {
			if (this.#url) return this.#url;
			this.#url = new NativeURL(this.href);
			this.#href = void 0;
			this.#protocol = void 0;
			this.#host = void 0;
			this.#pathname = void 0;
			this.#search = void 0;
			this.#searchParams = void 0;
			this.#pos = void 0;
			return this.#url;
		}
		get href() {
			if (this.#url) return this.#url.href;
			if (!this.#href) this.#href = `${this.#protocol || "http:"}//${this.#host || "localhost"}${this.#pathname || "/"}${this.#search || ""}`;
			return this.#href;
		}
		#getPos() {
			if (!this.#pos) {
				const url = this.href;
				const protoIndex = url.indexOf("://");
				const pathnameIndex = protoIndex === -1 ? -1 : url.indexOf("/", protoIndex + 4);
				const qIndex = pathnameIndex === -1 ? -1 : url.indexOf("?", pathnameIndex);
				this.#pos = [
					protoIndex,
					pathnameIndex,
					qIndex
				];
			}
			return this.#pos;
		}
		get pathname() {
			if (this.#url) return this.#url.pathname;
			if (this.#pathname === void 0) {
				const [, pathnameIndex, queryIndex] = this.#getPos();
				if (pathnameIndex === -1) return this._url.pathname;
				this.#pathname = this.href.slice(pathnameIndex, queryIndex === -1 ? void 0 : queryIndex);
			}
			return this.#pathname;
		}
		get search() {
			if (this.#url) return this.#url.search;
			if (this.#search === void 0) {
				const [, pathnameIndex, queryIndex] = this.#getPos();
				if (pathnameIndex === -1) return this._url.search;
				const url = this.href;
				this.#search = queryIndex === -1 || queryIndex === url.length - 1 ? "" : url.slice(queryIndex);
			}
			return this.#search;
		}
		get searchParams() {
			if (this.#url) return this.#url.searchParams;
			if (!this.#searchParams) this.#searchParams = new URLSearchParams(this.search);
			return this.#searchParams;
		}
		get protocol() {
			if (this.#url) return this.#url.protocol;
			if (this.#protocol === void 0) {
				const [protocolIndex] = this.#getPos();
				if (protocolIndex === -1) return this._url.protocol;
				const url = this.href;
				this.#protocol = url.slice(0, protocolIndex + 1);
			}
			return this.#protocol;
		}
		toString() {
			return this.href;
		}
		toJSON() {
			return this.href;
		}
	};
	lazyInherit(FastURL.prototype, NativeURL.prototype, "_url");
	Object.setPrototypeOf(FastURL.prototype, NativeURL.prototype);
	Object.setPrototypeOf(FastURL, NativeURL);
	return FastURL;
})();
function callMiddleware$1(request, fetchHandler, middleware, index) {
	if (index === middleware.length) return fetchHandler(request);
	return middleware[index](request, () => callMiddleware$1(request, fetchHandler, middleware, index + 1));
}
var NodeResponse = /* @__PURE__ */ (() => {
	const NativeResponse = globalThis.Response;
	const STATUS_CODES = globalThis.process?.getBuiltinModule?.("node:http")?.STATUS_CODES || {};
	class NodeResponse {
		#body;
		#init;
		#headers;
		#response;
		constructor(body, init) {
			this.#body = body;
			this.#init = init;
		}
		static [Symbol.hasInstance](val) {
			return val instanceof NativeResponse;
		}
		get status() {
			return this.#response?.status || this.#init?.status || 200;
		}
		get statusText() {
			return this.#response?.statusText || this.#init?.statusText || STATUS_CODES[this.status] || "";
		}
		get headers() {
			if (this.#response) return this.#response.headers;
			if (this.#headers) return this.#headers;
			const initHeaders = this.#init?.headers;
			return this.#headers = initHeaders instanceof Headers ? initHeaders : new Headers(initHeaders);
		}
		get ok() {
			if (this.#response) return this.#response.ok;
			const status = this.status;
			return status >= 200 && status < 300;
		}
		get _response() {
			if (this.#response) return this.#response;
			let body = this.#body;
			if (body && typeof body.pipe === "function" && !(body instanceof Readable)) {
				const stream = new PassThrough();
				body.pipe(stream);
				const abort = body.abort;
				if (abort) stream.once("close", () => abort());
				body = stream;
			}
			this.#response = new NativeResponse(body, this.#headers ? {
				...this.#init,
				headers: this.#headers
			} : this.#init);
			this.#init = void 0;
			this.#headers = void 0;
			this.#body = void 0;
			return this.#response;
		}
		_toNodeResponse() {
			const status = this.status;
			const statusText = this.statusText;
			let body;
			let contentType;
			let contentLength;
			if (this.#response) body = this.#response.body;
			else if (this.#body) if (this.#body instanceof ReadableStream) body = this.#body;
			else if (typeof this.#body === "string") {
				body = this.#body;
				contentType = "text/plain; charset=UTF-8";
				contentLength = Buffer.byteLength(this.#body);
			} else if (this.#body instanceof ArrayBuffer) {
				body = Buffer.from(this.#body);
				contentLength = this.#body.byteLength;
			} else if (this.#body instanceof Uint8Array) {
				body = this.#body;
				contentLength = this.#body.byteLength;
			} else if (this.#body instanceof DataView) {
				body = Buffer.from(this.#body.buffer);
				contentLength = this.#body.byteLength;
			} else if (this.#body instanceof Blob) {
				body = this.#body.stream();
				contentType = this.#body.type;
				contentLength = this.#body.size;
			} else if (typeof this.#body.pipe === "function") body = this.#body;
			else body = this._response.body;
			const headers = [];
			const initHeaders = this.#init?.headers;
			const headerEntries = this.#response?.headers || this.#headers || (initHeaders ? Array.isArray(initHeaders) ? initHeaders : initHeaders?.entries ? initHeaders.entries() : Object.entries(initHeaders).map(([k, v]) => [k.toLowerCase(), v]) : void 0);
			let hasContentTypeHeader;
			let hasContentLength;
			if (headerEntries) for (const [key, value] of headerEntries) {
				if (Array.isArray(value)) for (const v of value) headers.push([key, v]);
				else headers.push([key, value]);
				if (key === "content-type") hasContentTypeHeader = true;
				else if (key === "content-length") hasContentLength = true;
			}
			if (contentType && !hasContentTypeHeader) headers.push(["content-type", contentType]);
			if (contentLength && !hasContentLength) headers.push(["content-length", String(contentLength)]);
			this.#init = void 0;
			this.#headers = void 0;
			this.#response = void 0;
			this.#body = void 0;
			return {
				status,
				statusText,
				headers,
				body
			};
		}
	}
	lazyInherit(NodeResponse.prototype, NativeResponse.prototype, "_response");
	Object.setPrototypeOf(NodeResponse, NativeResponse);
	Object.setPrototypeOf(NodeResponse.prototype, NativeResponse.prototype);
	return NodeResponse;
})();
function decodePathname(pathname) {
	return decodeURI(pathname.includes("%25") ? pathname.replace(/%25/g, "%2525") : pathname);
}
var kEventNS = "h3.internal.event.";
var kEventRes = /* @__PURE__ */ Symbol.for(`${kEventNS}res`);
var kEventResHeaders = /* @__PURE__ */ Symbol.for(`${kEventNS}res.headers`);
var kEventResErrHeaders = /* @__PURE__ */ Symbol.for(`${kEventNS}res.err.headers`);
var H3Event = class {
	app;
	req;
	url;
	context;
	static __is_event__ = true;
	constructor(req, context, app) {
		this.context = context || req.context || new NullProtoObj();
		this.req = req;
		this.app = app;
		const _url = req._url;
		const url = _url && _url instanceof URL ? _url : new FastURL(req.url);
		if (url.pathname.includes("%")) url.pathname = decodePathname(url.pathname);
		this.url = url;
	}
	get res() {
		return this[kEventRes] ||= new H3EventResponse();
	}
	get runtime() {
		return this.req.runtime;
	}
	waitUntil(promise) {
		this.req.waitUntil?.(promise);
	}
	toString() {
		return `[${this.req.method}] ${this.req.url}`;
	}
	toJSON() {
		return this.toString();
	}
	get node() {
		return this.req.runtime?.node;
	}
	get headers() {
		return this.req.headers;
	}
	get path() {
		return this.url.pathname + this.url.search;
	}
	get method() {
		return this.req.method;
	}
};
var H3EventResponse = class {
	status;
	statusText;
	get headers() {
		return this[kEventResHeaders] ||= new Headers();
	}
	get errHeaders() {
		return this[kEventResErrHeaders] ||= new Headers();
	}
};
var DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
	return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
	if (!statusCode) return defaultStatusCode;
	if (typeof statusCode === "string") statusCode = +statusCode;
	if (statusCode < 100 || statusCode > 599) return defaultStatusCode;
	return statusCode;
}
var HTTPError = class HTTPError extends Error {
	get name() {
		return "HTTPError";
	}
	status;
	statusText;
	headers;
	cause;
	data;
	body;
	unhandled;
	static isError(input) {
		return input instanceof Error && input?.name === "HTTPError";
	}
	static status(status, statusText, details) {
		return new HTTPError({
			...details,
			statusText,
			status
		});
	}
	constructor(arg1, arg2) {
		let messageInput;
		let details;
		if (typeof arg1 === "string") {
			messageInput = arg1;
			details = arg2;
		} else details = arg1;
		const status = sanitizeStatusCode(details?.status || details?.statusCode || (details?.cause)?.status || (details?.cause)?.statusCode, 500);
		const statusText = sanitizeStatusMessage(details?.statusText || details?.statusMessage || (details?.cause)?.statusText || (details?.cause)?.statusMessage);
		const message = messageInput || details?.message || (details?.cause)?.message || details?.statusText || details?.statusMessage || [
			"HTTPError",
			status,
			statusText
		].filter(Boolean).join(" ");
		super(message, { cause: details });
		this.cause = details;
		this.status = status;
		this.statusText = statusText || void 0;
		const rawHeaders = details?.headers || (details?.cause)?.headers;
		this.headers = rawHeaders ? new Headers(rawHeaders) : void 0;
		this.unhandled = details?.unhandled ?? (details?.cause)?.unhandled ?? void 0;
		this.data = details?.data;
		this.body = details?.body;
	}
	get statusCode() {
		return this.status;
	}
	get statusMessage() {
		return this.statusText;
	}
	toJSON() {
		const unhandled = this.unhandled;
		return {
			status: this.status,
			statusText: this.statusText,
			unhandled,
			message: unhandled ? "HTTPError" : this.message,
			data: unhandled ? void 0 : this.data,
			...unhandled ? void 0 : this.body
		};
	}
};
function isJSONSerializable(value, _type) {
	if (value === null || value === void 0) return true;
	if (_type !== "object") return _type === "boolean" || _type === "number" || _type === "string";
	if (typeof value.toJSON === "function") return true;
	if (Array.isArray(value)) return true;
	if (typeof value.pipe === "function" || typeof value.pipeTo === "function") return false;
	if (value instanceof NullProtoObj) return true;
	const proto = Object.getPrototypeOf(value);
	return proto === Object.prototype || proto === null;
}
var kNotFound = /* @__PURE__ */ Symbol.for("h3.notFound");
var kHandled = /* @__PURE__ */ Symbol.for("h3.handled");
function toResponse(val, event, config = {}) {
	if (typeof val?.then === "function") return val.then((resolvedVal) => toResponse(resolvedVal, event, config), (r) => toResponse(typeof r === "number" ? new HTTPError({ status: r }) : r, event, config));
	const response = prepareResponse(val, event, config);
	if (typeof response?.then === "function") return toResponse(response, event, config);
	const { onResponse } = config;
	return onResponse ? Promise.resolve(onResponse(response, event)).then(() => response) : response;
}
var HTTPResponse = class {
	#headers;
	#init;
	body;
	constructor(body, init) {
		this.body = body;
		this.#init = init;
	}
	get status() {
		return this.#init?.status || 200;
	}
	get statusText() {
		return this.#init?.statusText || "OK";
	}
	get headers() {
		return this.#headers ||= new Headers(this.#init?.headers);
	}
};
function prepareResponse(val, event, config, nested) {
	if (val === kHandled) return new NodeResponse(null);
	if (val === kNotFound) val = new HTTPError({
		status: 404,
		message: `Cannot find any route matching [${event.req.method}] ${event.url}`
	});
	if (val && val instanceof Error) {
		const isHTTPError = HTTPError.isError(val);
		const error = isHTTPError ? val : new HTTPError(val);
		if (!isHTTPError) {
			error.unhandled = true;
			if (val?.stack) error.stack = val.stack;
		}
		if (error.unhandled && !config.silent) console.error(error);
		const { onError } = config;
		const errHeaders = event[kEventRes]?.[kEventResErrHeaders];
		return onError && !nested ? Promise.resolve(onError(error, event)).catch((error) => error).then((newVal) => prepareResponse(newVal ?? val, event, config, true)) : errorResponse(error, config.debug, errHeaders);
	}
	const preparedRes = event[kEventRes];
	const preparedHeaders = preparedRes?.[kEventResHeaders];
	event[kEventRes] = void 0;
	if (!(val instanceof Response)) {
		const res = prepareResponseBody(val, event, config);
		const status = res.status || preparedRes?.status;
		return new NodeResponse(nullBody(event.req.method, status) ? null : res.body, {
			status,
			statusText: res.statusText || preparedRes?.statusText,
			headers: res.headers && preparedHeaders ? mergeHeaders$1(res.headers, preparedHeaders) : res.headers || preparedHeaders
		});
	}
	if (!preparedHeaders || nested || !val.ok) return val;
	try {
		mergeHeaders$1(val.headers, preparedHeaders, val.headers);
		return val;
	} catch {
		return new NodeResponse(nullBody(event.req.method, val.status) ? null : val.body, {
			status: val.status,
			statusText: val.statusText,
			headers: mergeHeaders$1(val.headers, preparedHeaders)
		});
	}
}
function mergeHeaders$1(base, overrides, target = new Headers(base)) {
	for (const [name, value] of overrides) if (name === "set-cookie") target.append(name, value);
	else target.set(name, value);
	return target;
}
var frozen = (name) => (...args) => {
	throw new Error(`Headers are frozen (${name} ${args.join(", ")})`);
};
var FrozenHeaders = class extends Headers {
	set = frozen("set");
	append = frozen("append");
	delete = frozen("delete");
};
var emptyHeaders = /* @__PURE__ */ new FrozenHeaders({ "content-length": "0" });
var jsonHeaders = /* @__PURE__ */ new FrozenHeaders({ "content-type": "application/json;charset=UTF-8" });
function prepareResponseBody(val, event, config) {
	if (val === null || val === void 0) return {
		body: "",
		headers: emptyHeaders
	};
	const valType = typeof val;
	if (valType === "string") return { body: val };
	if (val instanceof Uint8Array) {
		event.res.headers.set("content-length", val.byteLength.toString());
		return { body: val };
	}
	if (val instanceof HTTPResponse || val?.constructor?.name === "HTTPResponse") return val;
	if (isJSONSerializable(val, valType)) return {
		body: JSON.stringify(val, void 0, config.debug ? 2 : void 0),
		headers: jsonHeaders
	};
	if (valType === "bigint") return {
		body: val.toString(),
		headers: jsonHeaders
	};
	if (val instanceof Blob) {
		const headers = new Headers({
			"content-type": val.type,
			"content-length": val.size.toString()
		});
		let filename = val.name;
		if (filename) {
			filename = encodeURIComponent(filename);
			headers.set("content-disposition", `filename="${filename}"; filename*=UTF-8''${filename}`);
		}
		return {
			body: val.stream(),
			headers
		};
	}
	if (valType === "symbol") return { body: val.toString() };
	if (valType === "function") return { body: `${val.name}()` };
	return { body: val };
}
function nullBody(method, status) {
	return method === "HEAD" || status === 100 || status === 101 || status === 102 || status === 204 || status === 205 || status === 304;
}
function errorResponse(error, debug, errHeaders) {
	let headers = error.headers ? mergeHeaders$1(jsonHeaders, error.headers) : new Headers(jsonHeaders);
	if (errHeaders) headers = mergeHeaders$1(headers, errHeaders);
	return new NodeResponse(JSON.stringify({
		...error.toJSON(),
		stack: debug && error.stack ? error.stack.split("\n").map((l) => l.trim()) : void 0
	}, void 0, debug ? 2 : void 0), {
		status: error.status,
		statusText: error.statusText,
		headers
	});
}
function callMiddleware(event, middleware, handler, index = 0) {
	if (index === middleware.length) return handler(event);
	const fn = middleware[index];
	let nextCalled;
	let nextResult;
	const next = () => {
		if (nextCalled) return nextResult;
		nextCalled = true;
		nextResult = callMiddleware(event, middleware, handler, index + 1);
		return nextResult;
	};
	const ret = fn(event, next);
	return isUnhandledResponse(ret) ? next() : typeof ret?.then === "function" ? ret.then((resolved) => isUnhandledResponse(resolved) ? next() : resolved) : ret;
}
function isUnhandledResponse(val) {
	return val === void 0 || val === kNotFound;
}
function toMiddleware(input) {
	let h = input.handler || input;
	let isFunction = typeof h === "function";
	if (!isFunction && typeof input?.fetch === "function") {
		isFunction = true;
		h = function _fetchHandler(event) {
			return input.fetch(event.req);
		};
	}
	if (!isFunction) return function noopMiddleware(event, next) {
		return next();
	};
	if (h.length === 2) return h;
	return function _middlewareHandler(event, next) {
		const res = h(event);
		return typeof res?.then === "function" ? res.then((r) => {
			return is404(r) ? next() : r;
		}) : is404(res) ? next() : res;
	};
}
function is404(val) {
	return isUnhandledResponse(val) || val?.status === 404 && val instanceof Response;
}
new Set([
	"body",
	"text",
	"formData",
	"arrayBuffer"
]);
function getEventContext(event) {
	if (event.context) return event.context;
	event.req.context ??= {};
	return event.req.context;
}
function toRequest(input, options) {
	if (typeof input === "string") {
		let url = input;
		if (url[0] === "/") {
			const headers = options?.headers ? new Headers(options.headers) : void 0;
			const host = headers?.get("host") || "localhost";
			url = `${headers?.get("x-forwarded-proto") === "https" ? "https" : "http"}://${host}${url}`;
		}
		return new Request(url, options);
	} else if (options || input instanceof URL) return new Request(input, options);
	return input;
}
function defineHandler(input) {
	if (typeof input === "function") return handlerWithFetch(input);
	const handler = input.handler || (input.fetch ? function _fetchHandler(event) {
		return input.fetch(event.req);
	} : NoHandler);
	return Object.assign(handlerWithFetch(input.middleware?.length ? function _handlerMiddleware(event) {
		return callMiddleware(event, input.middleware, handler);
	} : handler), input);
}
function handlerWithFetch(handler) {
	if ("fetch" in handler) return handler;
	return Object.assign(handler, { fetch: (req) => {
		if (typeof req === "string") req = new URL(req, "http://_");
		if (req instanceof URL) req = new Request(req);
		const event = new H3Event(req);
		try {
			return Promise.resolve(toResponse(handler(event), event));
		} catch (error) {
			return Promise.resolve(toResponse(error, event));
		}
	} });
}
function defineLazyEventHandler(loader) {
	let handler;
	let promise;
	return defineHandler(function lazyHandler(event) {
		return handler ? handler(event) : (promise ??= Promise.resolve(loader()).then(function resolveLazyHandler(r) {
			handler = toEventHandler(r) || toEventHandler(r.default);
			if (typeof handler !== "function") throw new TypeError("Invalid lazy handler", { cause: { resolved: r } });
			return handler;
		})).then((r) => r(event));
	});
}
function toEventHandler(handler) {
	if (typeof handler === "function") return handler;
	if (typeof handler?.handler === "function" && handler.constructor?.["~h3"]) return handler.handler;
	if (typeof handler?.fetch === "function") return function _fetchHandler(event) {
		return handler.fetch(event.req);
	};
}
var NoHandler = () => kNotFound;
var H3Core = class {
	static "~h3" = true;
	config;
	"~middleware";
	"~routes" = [];
	constructor(config = {}) {
		this["~middleware"] = [];
		this.config = config;
		this.fetch = this.fetch.bind(this);
		this.handler = this.handler.bind(this);
	}
	fetch(request) {
		return this["~request"](request);
	}
	handler(event) {
		const route = this["~findRoute"](event);
		if (route) {
			event.context.params = route.params;
			event.context.matchedRoute = route.data;
		}
		const routeHandler = route?.data.handler || NoHandler;
		const middleware = this["~getMiddleware"](event, route);
		return middleware.length > 0 ? callMiddleware(event, middleware, routeHandler) : routeHandler(event);
	}
	"~request"(request, context) {
		const event = new H3Event(request, context, this);
		let handlerRes;
		try {
			if (this.config.onRequest) {
				const hookRes = this.config.onRequest(event);
				handlerRes = typeof hookRes?.then === "function" ? hookRes.then(() => this.handler(event)) : this.handler(event);
			} else handlerRes = this.handler(event);
		} catch (error) {
			handlerRes = Promise.reject(error);
		}
		return toResponse(handlerRes, event, this.config);
	}
	"~findRoute"(_event) {}
	"~addRoute"(_route) {
		this["~routes"].push(_route);
	}
	"~getMiddleware"(_event, route) {
		const routeMiddleware = route?.data.middleware;
		const globalMiddleware = this["~middleware"];
		return routeMiddleware ? [...globalMiddleware, ...routeMiddleware] : globalMiddleware;
	}
};
var textEncoder = /* @__PURE__ */ new TextEncoder();
var textDecoder = /* @__PURE__ */ new TextDecoder();
var base64Code = [
	65,
	66,
	67,
	68,
	69,
	70,
	71,
	72,
	73,
	74,
	75,
	76,
	77,
	78,
	79,
	80,
	81,
	82,
	83,
	84,
	85,
	86,
	87,
	88,
	89,
	90,
	97,
	98,
	99,
	100,
	101,
	102,
	103,
	104,
	105,
	106,
	107,
	108,
	109,
	110,
	111,
	112,
	113,
	114,
	115,
	116,
	117,
	118,
	119,
	120,
	121,
	122,
	48,
	49,
	50,
	51,
	52,
	53,
	54,
	55,
	56,
	57,
	45,
	95
];
function base64Encode(data) {
	const buff = validateBinaryLike(data);
	if (globalThis.Buffer) return globalThis.Buffer.from(buff).toString("base64url");
	const bytes = [];
	let i;
	const len = buff.length;
	for (i = 2; i < len; i += 3) bytes.push(base64Code[buff[i - 2] >> 2], base64Code[(buff[i - 2] & 3) << 4 | buff[i - 1] >> 4], base64Code[(buff[i - 1] & 15) << 2 | buff[i] >> 6], base64Code[buff[i] & 63]);
	if (i === len + 1) bytes.push(base64Code[buff[i - 2] >> 2], base64Code[(buff[i - 2] & 3) << 4]);
	if (i === len) bytes.push(base64Code[buff[i - 2] >> 2], base64Code[(buff[i - 2] & 3) << 4 | buff[i - 1] >> 4], base64Code[(buff[i - 1] & 15) << 2]);
	return String.fromCharCode(...bytes);
}
function base64Decode(b64Url) {
	if (globalThis.Buffer) return new Uint8Array(globalThis.Buffer.from(b64Url, "base64url"));
	const b64 = b64Url.replace(/-/g, "+").replace(/_/g, "/");
	const binString = atob(b64);
	const size = binString.length;
	const bytes = new Uint8Array(size);
	for (let i = 0; i < size; i++) bytes[i] = binString.charCodeAt(i);
	return bytes;
}
function validateBinaryLike(source) {
	if (typeof source === "string") return textEncoder.encode(source);
	else if (source instanceof Uint8Array) return source;
	else if (source instanceof ArrayBuffer) return new Uint8Array(source);
	throw new TypeError(`The input must be a Uint8Array, a string, or an ArrayBuffer.`);
}
function redirect(location, status = 302, statusText) {
	return new HTTPResponse(`<html><head><meta http-equiv="refresh" content="0; url=${location.replace(/[&"<>]/g, (c) => ({
		"&": "&amp;",
		"\"": "&quot;",
		"<": "&lt;",
		">": "&gt;"
	})[c])}" /></head></html>`, {
		status,
		statusText: statusText || (status === 301 ? "Moved Permanently" : "Found"),
		headers: {
			"content-type": "text/html; charset=utf-8",
			location
		}
	});
}
var PayloadMethods = new Set([
	"PATCH",
	"POST",
	"PUT",
	"DELETE"
]);
var ignoredHeaders = new Set([
	"transfer-encoding",
	"connection",
	"keep-alive",
	"upgrade",
	"expect",
	"host",
	"accept"
]);
function rewriteCookieProperty(header, map, property) {
	const _map = typeof map === "string" ? { "*": map } : map;
	return header.replace(new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"), (match, prefix, previousValue) => {
		let newValue;
		if (previousValue in _map) newValue = _map[previousValue];
		else if ("*" in _map) newValue = _map["*"];
		else return match;
		return newValue ? prefix + newValue : "";
	});
}
function mergeHeaders(defaults, ...inputs) {
	const _inputs = inputs.filter(Boolean);
	if (_inputs.length === 0) return defaults;
	const merged = new Headers(defaults);
	for (const input of _inputs) {
		const entries = Array.isArray(input) ? input : typeof input.entries === "function" ? input.entries() : Object.entries(input);
		for (const [key, value] of entries) if (value !== void 0) merged.set(key, value);
	}
	return merged;
}
async function proxyRequest(event, target, opts = {}) {
	const requestBody = PayloadMethods.has(event.req.method) ? event.req.body : void 0;
	const method = opts.fetchOptions?.method || event.req.method;
	const fetchHeaders = mergeHeaders(getProxyRequestHeaders(event, {
		host: target.startsWith("/"),
		forwardHeaders: opts.forwardHeaders,
		filterHeaders: opts.filterHeaders
	}), opts.fetchOptions?.headers, opts.headers);
	return proxy(event, target, {
		...opts,
		fetchOptions: {
			method,
			body: requestBody,
			duplex: requestBody ? "half" : void 0,
			...opts.fetchOptions,
			headers: fetchHeaders
		}
	});
}
async function proxy(event, target, opts = {}) {
	const fetchOptions = {
		headers: opts.headers,
		...opts.fetchOptions
	};
	let response;
	try {
		response = target[0] === "/" ? await event.app.fetch(createSubRequest(event, target, fetchOptions)) : await fetch(target, fetchOptions);
	} catch (error) {
		throw new HTTPError({
			status: 502,
			cause: error
		});
	}
	const headers = new Headers();
	const cookies = [];
	for (const [key, value] of response.headers.entries()) {
		if (key === "content-encoding" || key === "content-length" || key === "transfer-encoding") continue;
		if (key === "set-cookie") {
			cookies.push(value);
			continue;
		}
		headers.append(key, value);
	}
	if (cookies.length > 0) {
		const _cookies = cookies.map((cookie) => {
			if (opts.cookieDomainRewrite) cookie = rewriteCookieProperty(cookie, opts.cookieDomainRewrite, "domain");
			if (opts.cookiePathRewrite) cookie = rewriteCookieProperty(cookie, opts.cookiePathRewrite, "path");
			return cookie;
		});
		for (const cookie of _cookies) headers.append("set-cookie", cookie);
	}
	if (opts.onResponse) await opts.onResponse(event, response);
	return new HTTPResponse(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers
	});
}
function getProxyRequestHeaders(event, opts) {
	const headers = new NullProtoObj();
	for (const [name, value] of event.req.headers.entries()) {
		if (opts?.filterHeaders?.includes(name)) continue;
		if (opts?.forwardHeaders?.includes(name)) {
			headers[name] = value;
			continue;
		}
		if (!ignoredHeaders.has(name) || name === "host" && opts?.host) {
			headers[name] = value;
			continue;
		}
	}
	return headers;
}
function createSubRequest(event, path, init) {
	const url = new URL(path, event.url);
	const req = new Request(url, init);
	req.runtime = event.req.runtime;
	req.waitUntil = event.req.waitUntil;
	req.ip = event.req.ip;
	return req;
}
var COOKIE_MAX_AGE_LIMIT = 3456e4;
function endIndex(str, min, len) {
	const index = str.indexOf(";", min);
	return index === -1 ? len : index;
}
function eqIndex(str, min, max) {
	const index = str.indexOf("=", min);
	return index < max ? index : -1;
}
function valueSlice(str, min, max) {
	if (min === max) return "";
	let start = min;
	let end = max;
	do {
		const code = str.charCodeAt(start);
		if (code !== 32 && code !== 9) break;
	} while (++start < end);
	while (end > start) {
		const code = str.charCodeAt(end - 1);
		if (code !== 32 && code !== 9) break;
		end--;
	}
	return str.slice(start, end);
}
var NullObject = /* @__PURE__ */ (() => {
	const C = function() {};
	C.prototype = Object.create(null);
	return C;
})();
function parse(str, options) {
	const obj = new NullObject();
	const len = str.length;
	if (len < 2) return obj;
	const dec = options?.decode || decode;
	const allowMultiple = options?.allowMultiple || false;
	let index = 0;
	do {
		const eqIdx = eqIndex(str, index, len);
		if (eqIdx === -1) break;
		const endIdx = endIndex(str, index, len);
		if (eqIdx > endIdx) {
			index = str.lastIndexOf(";", eqIdx - 1) + 1;
			continue;
		}
		const key = valueSlice(str, index, eqIdx);
		if (options?.filter && !options.filter(key)) {
			index = endIdx + 1;
			continue;
		}
		const val = dec(valueSlice(str, eqIdx + 1, endIdx));
		if (allowMultiple) {
			const existing = obj[key];
			if (existing === void 0) obj[key] = val;
			else if (Array.isArray(existing)) existing.push(val);
			else obj[key] = [existing, val];
		} else if (obj[key] === void 0) obj[key] = val;
		index = endIdx + 1;
	} while (index < len);
	return obj;
}
function decode(str) {
	if (!str.includes("%")) return str;
	try {
		return decodeURIComponent(str);
	} catch {
		return str;
	}
}
var cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
var cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
var domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
var pathValueRegExp = /^[\u0020-\u003A\u003C-\u007E]*$/;
var __toString = Object.prototype.toString;
function serialize(_a0, _a1, _a2) {
	const isObj = typeof _a0 === "object" && _a0 !== null;
	const options = isObj ? _a1 : _a2;
	const stringify = options?.stringify || JSON.stringify;
	const cookie = isObj ? _a0 : {
		..._a2,
		name: _a0,
		value: _a1 == void 0 ? "" : typeof _a1 === "string" ? _a1 : stringify(_a1)
	};
	const enc = options?.encode || encodeURIComponent;
	if (!cookieNameRegExp.test(cookie.name)) throw new TypeError(`argument name is invalid: ${cookie.name}`);
	const value = cookie.value ? enc(cookie.value) : "";
	if (!cookieValueRegExp.test(value)) throw new TypeError(`argument val is invalid: ${cookie.value}`);
	if (!cookie.secure) {
		if (cookie.partitioned) throw new TypeError(`Partitioned cookies must have the Secure attribute`);
		if (cookie.sameSite && String(cookie.sameSite).toLowerCase() === "none") throw new TypeError(`SameSite=None cookies must have the Secure attribute`);
		if (cookie.name.length > 9 && cookie.name.charCodeAt(0) === 95 && cookie.name.charCodeAt(1) === 95) {
			const nameLower = cookie.name.toLowerCase();
			if (nameLower.startsWith("__secure-") || nameLower.startsWith("__host-")) throw new TypeError(`${cookie.name} cookies must have the Secure attribute`);
		}
	}
	if (cookie.name.length > 7 && cookie.name.charCodeAt(0) === 95 && cookie.name.charCodeAt(1) === 95 && cookie.name.toLowerCase().startsWith("__host-")) {
		if (cookie.path !== "/") throw new TypeError(`__Host- cookies must have Path=/`);
		if (cookie.domain) throw new TypeError(`__Host- cookies must not have a Domain attribute`);
	}
	let str = cookie.name + "=" + value;
	if (cookie.maxAge !== void 0) {
		if (!Number.isInteger(cookie.maxAge)) throw new TypeError(`option maxAge is invalid: ${cookie.maxAge}`);
		str += "; Max-Age=" + Math.max(0, Math.min(cookie.maxAge, COOKIE_MAX_AGE_LIMIT));
	}
	if (cookie.domain) {
		if (!domainValueRegExp.test(cookie.domain)) throw new TypeError(`option domain is invalid: ${cookie.domain}`);
		str += "; Domain=" + cookie.domain;
	}
	if (cookie.path) {
		if (!pathValueRegExp.test(cookie.path)) throw new TypeError(`option path is invalid: ${cookie.path}`);
		str += "; Path=" + cookie.path;
	}
	if (cookie.expires) {
		if (!isDate(cookie.expires) || !Number.isFinite(cookie.expires.valueOf())) throw new TypeError(`option expires is invalid: ${cookie.expires}`);
		str += "; Expires=" + cookie.expires.toUTCString();
	}
	if (cookie.httpOnly) str += "; HttpOnly";
	if (cookie.secure) str += "; Secure";
	if (cookie.partitioned) str += "; Partitioned";
	if (cookie.priority) switch (typeof cookie.priority === "string" ? cookie.priority.toLowerCase() : void 0) {
		case "low":
			str += "; Priority=Low";
			break;
		case "medium":
			str += "; Priority=Medium";
			break;
		case "high":
			str += "; Priority=High";
			break;
		default: throw new TypeError(`option priority is invalid: ${cookie.priority}`);
	}
	if (cookie.sameSite) switch (typeof cookie.sameSite === "string" ? cookie.sameSite.toLowerCase() : cookie.sameSite) {
		case true:
		case "strict":
			str += "; SameSite=Strict";
			break;
		case "lax":
			str += "; SameSite=Lax";
			break;
		case "none":
			str += "; SameSite=None";
			break;
		default: throw new TypeError(`option sameSite is invalid: ${cookie.sameSite}`);
	}
	return str;
}
function isDate(val) {
	return __toString.call(val) === "[object Date]";
}
var maxAgeRegExp = /^-?\d+$/;
var _nullProto = /* @__PURE__ */ Object.getPrototypeOf({});
function parseSetCookie(str, options) {
	const len = str.length;
	let _endIdx = len;
	let eqIdx = -1;
	for (let i = 0; i < len; i++) {
		const c = str.charCodeAt(i);
		if (c === 59) {
			_endIdx = i;
			break;
		}
		if (c === 61 && eqIdx === -1) eqIdx = i;
	}
	if (eqIdx >= _endIdx) eqIdx = -1;
	const name = eqIdx === -1 ? "" : _trim(str, 0, eqIdx);
	if (name && name in _nullProto) return void 0;
	let value = eqIdx === -1 ? _trim(str, 0, _endIdx) : _trim(str, eqIdx + 1, _endIdx);
	if (!name && !value) return void 0;
	if (name.length + value.length > 4096) return void 0;
	if (options?.decode !== false) value = _decode(value, options?.decode);
	const setCookie = {
		name,
		value
	};
	let index = _endIdx + 1;
	while (index < len) {
		let endIdx = len;
		let attrEqIdx = -1;
		for (let i = index; i < len; i++) {
			const c = str.charCodeAt(i);
			if (c === 59) {
				endIdx = i;
				break;
			}
			if (c === 61 && attrEqIdx === -1) attrEqIdx = i;
		}
		if (attrEqIdx >= endIdx) attrEqIdx = -1;
		const attr = attrEqIdx === -1 ? _trim(str, index, endIdx) : _trim(str, index, attrEqIdx);
		const val = attrEqIdx === -1 ? void 0 : _trim(str, attrEqIdx + 1, endIdx);
		if (val === void 0 || val.length <= 1024) switch (attr.toLowerCase()) {
			case "httponly":
				setCookie.httpOnly = true;
				break;
			case "secure":
				setCookie.secure = true;
				break;
			case "partitioned":
				setCookie.partitioned = true;
				break;
			case "domain":
				if (val) setCookie.domain = (val.charCodeAt(0) === 46 ? val.slice(1) : val).toLowerCase();
				break;
			case "path":
				setCookie.path = val;
				break;
			case "max-age":
				if (val && maxAgeRegExp.test(val)) setCookie.maxAge = Math.min(Number(val), COOKIE_MAX_AGE_LIMIT);
				break;
			case "expires": {
				if (!val) break;
				const date = new Date(val);
				if (Number.isFinite(date.valueOf())) {
					const maxDate = new Date(Date.now() + COOKIE_MAX_AGE_LIMIT * 1e3);
					setCookie.expires = date > maxDate ? maxDate : date;
				}
				break;
			}
			case "priority": {
				if (!val) break;
				const priority = val.toLowerCase();
				if (priority === "low" || priority === "medium" || priority === "high") setCookie.priority = priority;
				break;
			}
			case "samesite": {
				if (!val) break;
				const sameSite = val.toLowerCase();
				if (sameSite === "lax" || sameSite === "strict" || sameSite === "none") setCookie.sameSite = sameSite;
				else setCookie.sameSite = "lax";
				break;
			}
			default: {
				const attrLower = attr.toLowerCase();
				if (attrLower && !(attrLower in _nullProto)) setCookie[attrLower] = val;
			}
		}
		index = endIdx + 1;
	}
	return setCookie;
}
function _trim(str, start, end) {
	if (start === end) return "";
	let s = start;
	let e = end;
	while (s < e && (str.charCodeAt(s) === 32 || str.charCodeAt(s) === 9)) s++;
	while (e > s && (str.charCodeAt(e - 1) === 32 || str.charCodeAt(e - 1) === 9)) e--;
	return str.slice(s, e);
}
function _decode(value, decode) {
	if (!decode && !value.includes("%")) return value;
	try {
		return (decode || decodeURIComponent)(value);
	} catch {
		return value;
	}
}
var CHUNKED_COOKIE = "__chunked__";
var CHUNKS_MAX_LENGTH = 4e3;
function parseCookies(event) {
	return parse(event.req.headers.get("cookie") || "");
}
function getCookie(event, name) {
	return parseCookies(event)[name];
}
function setCookie(event, name, value, options) {
	const { encode, stringify, ...attrs } = options ?? {};
	const newCookie = serialize({
		name,
		value,
		path: "/",
		...attrs
	}, {
		encode,
		stringify
	});
	const currentCookies = event.res.headers.getSetCookie();
	if (currentCookies.length === 0) {
		event.res.headers.set("set-cookie", newCookie);
		return;
	}
	const newCookieKey = _getDistinctCookieKey(name, options || {});
	event.res.headers.delete("set-cookie");
	for (const cookie of currentCookies) {
		const parsed = parseSetCookie(cookie);
		if (!parsed) continue;
		if (_getDistinctCookieKey(cookie.split("=")?.[0], parsed) === newCookieKey) continue;
		event.res.headers.append("set-cookie", cookie);
	}
	event.res.headers.append("set-cookie", newCookie);
}
function deleteCookie(event, name, serializeOptions) {
	setCookie(event, name, "", {
		...serializeOptions,
		maxAge: 0
	});
}
function getChunkedCookie(event, name) {
	const mainCookie = getCookie(event, name);
	if (!mainCookie || !mainCookie.startsWith(CHUNKED_COOKIE)) return mainCookie;
	const chunksCount = getChunkedCookieCount(mainCookie);
	if (chunksCount === 0) return;
	const chunks = [];
	for (let i = 1; i <= chunksCount; i++) {
		const chunk = getCookie(event, chunkCookieName(name, i));
		if (!chunk) return;
		chunks.push(chunk);
	}
	return chunks.join("");
}
function setChunkedCookie(event, name, value, options) {
	const chunkMaxLength = options?.chunkMaxLength || CHUNKS_MAX_LENGTH;
	const chunkCount = Math.ceil(value.length / chunkMaxLength);
	const previousCookie = getCookie(event, name);
	if (previousCookie?.startsWith(CHUNKED_COOKIE)) {
		const previousChunkCount = getChunkedCookieCount(previousCookie);
		if (previousChunkCount > chunkCount) for (let i = chunkCount; i <= previousChunkCount; i++) deleteCookie(event, chunkCookieName(name, i), options);
	}
	if (chunkCount <= 1) {
		setCookie(event, name, value, options);
		return;
	}
	setCookie(event, name, `${CHUNKED_COOKIE}${chunkCount}`, options);
	for (let i = 1; i <= chunkCount; i++) {
		const start = (i - 1) * chunkMaxLength;
		const end = start + chunkMaxLength;
		const chunkValue = value.slice(start, end);
		setCookie(event, chunkCookieName(name, i), chunkValue, options);
	}
}
function _getDistinctCookieKey(name, options) {
	return [
		name,
		options.domain || "",
		options.path || "/"
	].join(";");
}
var MAX_CHUNKED_COOKIE_COUNT = 100;
function getChunkedCookieCount(cookie) {
	if (!cookie?.startsWith(CHUNKED_COOKIE)) return NaN;
	const count = Number.parseInt(cookie.slice(11));
	if (Number.isNaN(count) || count < 0 || count > MAX_CHUNKED_COOKIE_COUNT) return NaN;
	return count;
}
function chunkCookieName(name, chunkNumber) {
	return `${name}.${chunkNumber}`;
}
function handleCacheHeaders(event, opts) {
	const cacheControls = ["public", ...opts.cacheControls || []];
	let cacheMatched = false;
	if (opts.maxAge !== void 0) cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
	if (opts.modifiedTime) {
		const modifiedTime = new Date(opts.modifiedTime);
		modifiedTime.setMilliseconds(0);
		const ifModifiedSince = event.req.headers.get("if-modified-since");
		event.res.headers.set("last-modified", modifiedTime.toUTCString());
		if (ifModifiedSince && new Date(ifModifiedSince) >= modifiedTime) cacheMatched = true;
	}
	if (opts.etag) {
		event.res.headers.set("etag", opts.etag);
		if (event.req.headers.get("if-none-match") === opts.etag) cacheMatched = true;
	}
	event.res.headers.set("cache-control", cacheControls.join(", "));
	if (cacheMatched) {
		event.res.status = 304;
		return true;
	}
	return false;
}
var defaults = /* @__PURE__ */ Object.freeze({
	ttl: 0,
	timestampSkewSec: 60,
	localtimeOffsetMsec: 0,
	encryption: /* @__PURE__ */ Object.freeze({
		saltBits: 256,
		algorithm: "aes-256-cbc",
		iterations: 1,
		minPasswordlength: 32
	}),
	integrity: /* @__PURE__ */ Object.freeze({
		saltBits: 256,
		algorithm: "sha256",
		iterations: 1,
		minPasswordlength: 32
	})
});
var algorithms = /* @__PURE__ */ Object.freeze({
	"aes-128-ctr": /* @__PURE__ */ Object.freeze({
		keyBits: 128,
		ivBits: 128,
		name: "AES-CTR"
	}),
	"aes-256-cbc": /* @__PURE__ */ Object.freeze({
		keyBits: 256,
		ivBits: 128,
		name: "AES-CBC"
	}),
	sha256: /* @__PURE__ */ Object.freeze({
		keyBits: 256,
		ivBits: 128,
		name: "SHA-256"
	})
});
var macPrefix = "Fe26.2";
async function seal(object, password, opts) {
	const now = Date.now() + (opts.localtimeOffsetMsec || 0);
	if (!password) throw new Error("Empty password");
	const { id = "", encryption, integrity } = normalizePassword(password);
	if (id && !/^\w+$/.test(id)) throw new Error("Invalid password id");
	const { encrypted, key } = await encrypt(encryption, opts.encryption, JSON.stringify(object));
	const encryptedB64 = base64Encode(encrypted);
	const iv = base64Encode(key.iv);
	const expiration = opts.ttl ? now + opts.ttl : "";
	const macBaseString = `${macPrefix}*${id}*${key.salt}*${iv}*${encryptedB64}*${expiration}`;
	const mac = await hmacWithPassword(integrity, opts.integrity, macBaseString);
	return `${macBaseString}*${mac.salt}*${mac.digest}`;
}
async function unseal(sealed, password, opts) {
	const now = Date.now() + (opts.localtimeOffsetMsec || 0);
	if (!password) throw new Error("Empty password");
	const parts = sealed.split("*");
	if (parts.length !== 8) throw new Error("Incorrect number of sealed components");
	const [prefix, passwordId, encryptionSalt, encryptionIv, encryptedB64, expiration, hmacSalt, hmac] = parts;
	const macBaseString = `${prefix}*${passwordId}*${encryptionSalt}*${encryptionIv}*${encryptedB64}*${expiration}`;
	if ("Fe26.2" !== prefix) throw new Error("Wrong mac prefix");
	if (expiration) {
		if (!/^\d+$/.test(expiration)) throw new Error("Invalid expiration");
		if (Number.parseInt(expiration, 10) <= now - opts.timestampSkewSec * 1e3) throw new Error("Expired seal");
	}
	let pass = "";
	const _passwordId = passwordId || "default";
	if (typeof password === "string" || password instanceof Uint8Array) pass = password;
	else if (_passwordId in password) pass = password[_passwordId];
	else throw new Error(`Cannot find password: ${_passwordId}`);
	pass = normalizePassword(pass);
	if (!fixedTimeComparison((await hmacWithPassword(pass.integrity, {
		...opts.integrity,
		salt: hmacSalt
	}, macBaseString)).digest, hmac)) throw new Error("Bad hmac value");
	const encrypted = base64Decode(encryptedB64);
	const decryptOptions = {
		...opts.encryption,
		salt: encryptionSalt,
		iv: base64Decode(encryptionIv)
	};
	const decrypted = await decrypt(pass.encryption, decryptOptions, encrypted);
	return decrypted ? JSON.parse(decrypted) : null;
}
async function hmacWithPassword(password, options, data) {
	const key = await generateKey(password, {
		...options,
		hmac: true
	});
	const textBuffer = textEncoder.encode(data);
	const signed = await crypto.subtle.sign({ name: "HMAC" }, key.key, textBuffer);
	return {
		digest: base64Encode(new Uint8Array(signed)),
		salt: key.salt
	};
}
async function generateKey(password, options) {
	if (!password?.length) throw new Error("Empty password");
	if (options == null || typeof options !== "object") throw new Error("Bad options");
	if (!(options.algorithm in algorithms)) throw new Error(`Unknown algorithm: ${options.algorithm}`);
	const algorithm = algorithms[options.algorithm];
	let resultKey;
	let resultSalt;
	let resultIV;
	const hmac = options.hmac ?? false;
	const id = hmac ? {
		name: "HMAC",
		hash: algorithm.name
	} : { name: algorithm.name };
	const usage = hmac ? ["sign", "verify"] : ["encrypt", "decrypt"];
	if (typeof password === "string") {
		if (password.length < options.minPasswordlength) throw new Error(`Password string too short (min ${options.minPasswordlength} characters required)`);
		let { salt = "" } = options;
		if (!salt) {
			const { saltBits = 0 } = options;
			if (!saltBits) throw new Error("Missing salt and saltBits options");
			const randomSalt = randomBits(saltBits);
			salt = [...new Uint8Array(randomSalt)].map((x) => x.toString(16).padStart(2, "0")).join("");
		}
		const derivedKey = await pbkdf2(password, salt, options.iterations, algorithm.keyBits / 8, "SHA-1");
		resultKey = await crypto.subtle.importKey("raw", derivedKey, id, false, usage);
		resultSalt = salt;
	} else {
		if (password.length < algorithm.keyBits / 8) throw new Error("Key buffer (password) too small");
		resultKey = await crypto.subtle.importKey("raw", password, id, false, usage);
		resultSalt = "";
	}
	if (options.iv) resultIV = options.iv;
	else if ("ivBits" in algorithm) resultIV = randomBits(algorithm.ivBits);
	else throw new Error("Missing IV");
	return {
		key: resultKey,
		salt: resultSalt,
		iv: resultIV
	};
}
async function pbkdf2(password, salt, iterations, keyLength, hash) {
	const passwordBuffer = textEncoder.encode(password);
	const importedKey = await crypto.subtle.importKey("raw", passwordBuffer, { name: "PBKDF2" }, false, ["deriveBits"]);
	const params = {
		name: "PBKDF2",
		hash,
		salt: textEncoder.encode(salt),
		iterations
	};
	return await crypto.subtle.deriveBits(params, importedKey, keyLength * 8);
}
async function encrypt(password, options, data) {
	const key = await generateKey(password, options);
	const encrypted = await crypto.subtle.encrypt(...getEncryptParams(options.algorithm, key, data));
	return {
		encrypted: new Uint8Array(encrypted),
		key
	};
}
async function decrypt(password, options, data) {
	const key = await generateKey(password, options);
	const decrypted = await crypto.subtle.decrypt(...getEncryptParams(options.algorithm, key, data));
	return textDecoder.decode(decrypted);
}
function getEncryptParams(algorithm, key, data) {
	return [
		algorithm === "aes-128-ctr" ? {
			name: "AES-CTR",
			counter: key.iv,
			length: 128
		} : {
			name: "AES-CBC",
			iv: key.iv
		},
		key.key,
		typeof data === "string" ? textEncoder.encode(data) : data
	];
}
function fixedTimeComparison(a, b) {
	let mismatch = a.length === b.length ? 0 : 1;
	if (mismatch) b = a;
	for (let i = 0; i < a.length; i += 1) mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
	return mismatch === 0;
}
function normalizePassword(password) {
	if (typeof password === "string" || password instanceof Uint8Array) return {
		encryption: password,
		integrity: password
	};
	if ("secret" in password) return {
		id: password.id,
		encryption: password.secret,
		integrity: password.secret
	};
	return {
		id: password.id,
		encryption: password.encryption,
		integrity: password.integrity
	};
}
function randomBits(bits) {
	if (bits < 1) throw new Error("Invalid random bits count");
	return randomBytes(Math.ceil(bits / 8));
}
function randomBytes(size) {
	const bytes = new Uint8Array(size);
	crypto.getRandomValues(bytes);
	return bytes;
}
var kGetSession = /* @__PURE__ */ Symbol.for("h3.internal.session.promise");
var DEFAULT_SESSION_COOKIE = {
	path: "/",
	secure: true,
	httpOnly: true
};
async function getSession(event, config) {
	const sessionName = config.name || "h3";
	const context = getEventContext(event);
	if (!context.sessions) context.sessions = new NullProtoObj();
	const existingSession = context.sessions[sessionName];
	if (existingSession) return existingSession[kGetSession] || existingSession;
	const session = {
		id: "",
		createdAt: 0,
		data: new NullProtoObj()
	};
	context.sessions[sessionName] = session;
	let sealedSession;
	if (config.sessionHeader !== false) {
		const headerName = typeof config.sessionHeader === "string" ? config.sessionHeader.toLowerCase() : `x-${sessionName.toLowerCase()}-session`;
		const headerValue = event.req.headers.get(headerName);
		if (typeof headerValue === "string") sealedSession = headerValue;
	}
	if (!sealedSession) sealedSession = getChunkedCookie(event, sessionName);
	if (sealedSession) {
		const promise = unsealSession(event, config, sealedSession).catch(() => {}).then((unsealed) => {
			Object.assign(session, unsealed);
			delete context.sessions[sessionName][kGetSession];
			return session;
		});
		context.sessions[sessionName][kGetSession] = promise;
		await promise;
	}
	if (!session.id) {
		session.id = config.generateId?.() ?? (config.crypto || crypto).randomUUID();
		session.createdAt = Date.now();
		await updateSession(event, config);
	}
	return session;
}
async function updateSession(event, config, update) {
	const sessionName = config.name || "h3";
	const session = getEventContext(event).sessions?.[sessionName] || await getSession(event, config);
	if (typeof update === "function") update = update(session.data);
	if (update) Object.assign(session.data, update);
	if (config.cookie !== false && event.res) setChunkedCookie(event, sessionName, await sealSession(event, config), {
		...DEFAULT_SESSION_COOKIE,
		expires: config.maxAge ? new Date(session.createdAt + config.maxAge * 1e3) : void 0,
		...config.cookie
	});
	return session;
}
async function sealSession(event, config) {
	const sessionName = config.name || "h3";
	return await seal(getEventContext(event).sessions?.[sessionName] || await getSession(event, config), config.password, {
		...defaults,
		ttl: config.maxAge ? config.maxAge * 1e3 : 0,
		...config.seal
	});
}
async function unsealSession(_event, config, sealed) {
	const unsealed = await unseal(sealed, config.password, {
		...defaults,
		ttl: config.maxAge ? config.maxAge * 1e3 : 0,
		...config.seal
	});
	if (config.maxAge) {
		if (Date.now() - (unsealed.createdAt || Number.NEGATIVE_INFINITY) > config.maxAge * 1e3) throw new Error("Session expired!");
	}
	return unsealed;
}
var _textEncoder = /* @__PURE__ */ new TextEncoder();
function timingSafeEqual(a, b) {
	const aBuf = _textEncoder.encode(a);
	const bBuf = _textEncoder.encode(b);
	const aLen = aBuf.length;
	const bLen = bBuf.length;
	const len = Math.max(aLen, bLen);
	let result = aLen === bLen ? 0 : 1;
	for (let i = 0; i < len; i++) result |= (aBuf[i % aLen] ?? 0) ^ (bBuf[i % bLen] ?? 0);
	return result === 0;
}
function randomJitter() {
	const randomBuffer = new Uint32Array(1);
	crypto.getRandomValues(randomBuffer);
	const jitter = randomBuffer[0] % 100;
	return new Promise((resolve) => setTimeout(resolve, jitter));
}
async function requireBasicAuth(event, opts) {
	if (!opts.validate && !opts.password) throw new HTTPError({
		message: "Either 'password' or 'validate' option must be provided",
		status: 500
	});
	const authHeader = event.req.headers.get("authorization");
	if (!authHeader) throw authFailed(event);
	const [authType, b64auth] = authHeader.split(" ");
	if (!b64auth || authType.toLowerCase() !== "basic") throw authFailed(event, opts?.realm);
	let authDecoded;
	try {
		authDecoded = atob(b64auth);
	} catch {
		throw authFailed(event, opts?.realm);
	}
	const colonIndex = authDecoded.indexOf(":");
	const username = authDecoded.slice(0, colonIndex);
	const password = authDecoded.slice(colonIndex + 1);
	if (!username || !password) throw authFailed(event, opts?.realm);
	if (opts.username && !timingSafeEqual(username, opts.username) || opts.password && !timingSafeEqual(password, opts.password) || opts.validate && !await opts.validate(username, password)) {
		await randomJitter();
		throw authFailed(event, opts?.realm);
	}
	const context = getEventContext(event);
	context.basicAuth = {
		username,
		password,
		realm: opts.realm
	};
	return true;
}
function authFailed(event, realm = "") {
	return new HTTPError({
		status: 401,
		statusText: "Authentication required",
		headers: { "www-authenticate": `Basic realm=${JSON.stringify(realm)}` }
	});
}
function toNodeHandler$1(app) {
	if (toNodeHandler$1._isWarned !== true) {
		console.warn(`[h3] "toNodeHandler" export from h3 is deprecated. Please import "toNodeHandler" from "h3/node".`);
		toNodeHandler$1._isWarned = true;
	}
	return (toNodeHandler$1._toNodeHandler ??= () => {
		return globalThis.process.getBuiltinModule("node:module").createRequire(import.meta.url)("srvx/node").toNodeHandler;
	})()(app.fetch);
}
//#endregion
export { findRoute as _, defineLazyEventHandler as a, redirect as c, toRequest as d, toResponse as f, createRouter as g, addRoute as h, defineHandler as i, requireBasicAuth as l, NullProtoObj as m, HTTPError as n, handleCacheHeaders as o, NodeResponse as p, callMiddleware as r, proxyRequest as s, H3Core as t, toMiddleware as u, removeRoute as v, routeToRegExp as y };
