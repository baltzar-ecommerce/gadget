/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 905:
/***/ ((module) => {

module.exports = require("@shopify/polaris");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var exports = {};
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
__webpack_unused_export__ = void 0;
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
__webpack_unused_export__ = usePaginateController;

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var exports = __webpack_exports__;

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

})();

var __webpack_export_target__ = this;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;