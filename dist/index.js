(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("baltzar-gadget", [], factory);
	else if(typeof exports === 'object')
		exports["baltzar-gadget"] = factory();
	else
		root["baltzar-gadget"] = factory();
})((() => {
            if (typeof self !== 'undefined') {
                return self;
            } else if (typeof window !== 'undefined') {
                return window;
            } else if (typeof global !== 'undefined') {
                return global;
            } else {
                return Function('return this')();
            }
        })(), () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 842:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmptyState = void 0;
const jsx_runtime_1 = __webpack_require__(997);
const polaris_1 = __webpack_require__(905);
function EmptyState({ children, ...props }) {
    return (0, jsx_runtime_1.jsx)(polaris_1.Box, { padding: '5', ...props, children: (0, jsx_runtime_1.jsx)(polaris_1.Text, { as: 'h2', variant: 'headingMd', children: children }) });
}
exports.EmptyState = EmptyState;


/***/ }),

/***/ 263:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SearchBar = void 0;
const jsx_runtime_1 = __webpack_require__(997);
const polaris_1 = __webpack_require__(905);
const polaris_icons_1 = __webpack_require__(864);
function SearchBar({ value, onChange, onClose, results, placeholder, hideBorder, asTopBar }) {
    const field = (0, jsx_runtime_1.jsx)(polaris_1.TextField, { label: 'Search', labelHidden: true, autoComplete: 'off', value: value, onChange: onChange, onClearButtonClick: onClose, clearButton: true, placeholder: placeholder || 'Search', prefix: (0, jsx_runtime_1.jsx)(polaris_1.Icon, { source: polaris_icons_1.SearchMinor }), borderless: hideBorder || asTopBar });
    const popOver = results ? (0, jsx_runtime_1.jsx)(polaris_1.Popover, { autofocusTarget: 'none', active: value?.length > 0, activator: field, onClose: onClose, fullWidth: true, children: results }) : field;
    if (asTopBar) {
        return (0, jsx_runtime_1.jsx)(polaris_1.Box, { background: 'bg', paddingInlineStart: '5', paddingInlineEnd: '5', paddingBlockStart: '2', paddingBlockEnd: '2', borderStyle: 'solid', borderColor: 'border-subdued', borderBlockEndWidth: '1', children: (0, jsx_runtime_1.jsx)(polaris_1.HorizontalStack, { align: 'center', children: (0, jsx_runtime_1.jsx)(polaris_1.Box, { width: '100%', maxWidth: '41.375rem', children: popOver }) }) });
    }
    return popOver;
}
exports.SearchBar = SearchBar;


/***/ }),

/***/ 806:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TwoColumnCard = void 0;
const jsx_runtime_1 = __webpack_require__(997);
const polaris_1 = __webpack_require__(905);
const react_1 = __webpack_require__(689);
function useInitComponent(column) {
    return (0, react_1.useMemo)(() => {
        let _column = column || {};
        return {
            component: _column.component || null,
            size: _column.size || 'oneHalf',
            bg: _column.bg,
            flush: _column.flush || false
        };
    }, [column]);
}
function TwoColumnCard(props) {
    const { left, right } = props;
    const { component: leftComponent, size: leftSize, bg: leftBg, flush: leftFlush } = useInitComponent(left);
    const { component: rightComponent, size: rightSize, bg: rightBg, flush: rightFlush } = useInitComponent(right);
    return (0, jsx_runtime_1.jsx)(polaris_1.LegacyCard, { subdued: true, children: (0, jsx_runtime_1.jsxs)(polaris_1.HorizontalGrid, { columns: [leftSize, rightSize], children: [(0, jsx_runtime_1.jsx)(polaris_1.Box, { minHeight: '100%', borderRadiusStartStart: '2', borderRadiusEndStart: '2', background: leftBg || 'bg-subdued', padding: leftFlush ? undefined : '4', children: leftComponent }), (0, jsx_runtime_1.jsx)(polaris_1.Box, { background: rightBg || 'bg', borderColor: 'border-subdued', borderInlineStartWidth: '1', borderRadiusStartEnd: '2', borderRadiusEndEnd: '2', padding: rightFlush ? undefined : '4', children: rightComponent })] }) });
}
exports.TwoColumnCard = TwoColumnCard;


/***/ }),

/***/ 821:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useMoment = void 0;
const moment_1 = __importDefault(__webpack_require__(245));
function useMoment() {
    moment_1.default.updateLocale('en', {
        calendar: {
            sameDay: 'HH:mm',
            nextDay: '[Tomorrow at] HH:mm',
            nextWeek: 'dddd',
            lastDay: '[Yesterday at] HH:mm',
            lastWeek: '[Last] dddd',
            sameElse: 'MMM DD YYYY'
        }
    });
}
exports.useMoment = useMoment;


/***/ }),

/***/ 92:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.usePaginateController = void 0;
const react_1 = __webpack_require__(689);
function usePaginateController(generator, parameters = {}) {
    const { perPage } = (0, react_1.useMemo)(() => {
        const extracted = {};
        extracted.perPage = parameters.perPage || 50;
        // TODO offset based pagination not available yet.
        //extracted.offset = parameters.start ? parameters.start * extracted.perPage : undefined
        return extracted;
    }, [parameters]);
    const [cursor, setCursor] = (0, react_1.useState)({ first: perPage });
    // using Gadget React hooks to fetch records of inventoryTransferReceipt
    const paginatedHook = generator(cursor);
    const [{ data }] = paginatedHook;
    const getNextPage = (0, react_1.useCallback)(() => {
        // use first + after to page forwards
        setCursor({ first: perPage, after: data.endCursor });
    }, [data, perPage]);
    const getPreviousPage = (0, react_1.useCallback)(() => {
        // use last + before to page backwards
        setCursor({ last: perPage, before: data.startCursor });
    }, [data, perPage]);
    return [
        paginatedHook,
        {
            hasNext: data?.hasNextPage,
            hasPrevious: data?.hasPreviousPage,
            onNext: getNextPage,
            onPrevious: getPreviousPage
        }
    ];
}
exports.usePaginateController = usePaginateController;


/***/ }),

/***/ 592:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useToast = void 0;
const jsx_runtime_1 = __webpack_require__(997);
const react_1 = __webpack_require__(689);
const polaris_1 = __webpack_require__(905);
function useToast() {
    const [toast, setToast] = (0, react_1.useState)(null);
    const showToast = (0, react_1.useCallback)(({ message, error }) => {
        setToast((0, jsx_runtime_1.jsx)(polaris_1.Toast, { error: !!error, content: error ? error : message + '', onDismiss: () => setToast(null) }));
    }, []);
    return [toast, showToast];
}
exports.useToast = useToast;


/***/ }),

/***/ 629:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(806), exports);
__exportStar(__webpack_require__(263), exports);
__exportStar(__webpack_require__(842), exports);
__exportStar(__webpack_require__(92), exports);
__exportStar(__webpack_require__(821), exports);
__exportStar(__webpack_require__(592), exports);
__exportStar(__webpack_require__(559), exports);


/***/ }),

/***/ 559:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.extractIDFromGUID = exports.reduceEdges = exports.isOnSale = void 0;
const accounting_1 = __webpack_require__(126);
function isOnSale({ price, compareAtPrice }) {
    if (!compareAtPrice || !price) {
        return false;
    }
    return (0, accounting_1.unformat)(compareAtPrice + '') > (0, accounting_1.unformat)(price + '');
}
exports.isOnSale = isOnSale;
function reduceEdges(entity, callback = undefined) {
    if (!entity?.edges?.length) {
        return [];
    }
    return entity.edges.map(({ node }) => {
        if (!!callback) {
            return callback(node);
        }
        return node;
    });
}
exports.reduceEdges = reduceEdges;
function extractIDFromGUID(guid) {
    if (!guid) {
        return guid;
    }
    const parts = guid.split('/');
    const id = parts.pop();
    if (!id) {
        return guid;
    }
    return parseInt(id);
}
exports.extractIDFromGUID = extractIDFromGUID;


/***/ }),

/***/ 905:
/***/ ((module) => {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ 864:
/***/ ((module) => {

module.exports = require("@shopify/polaris-icons");

/***/ }),

/***/ 126:
/***/ ((module) => {

module.exports = require("accounting");

/***/ }),

/***/ 245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(629);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});