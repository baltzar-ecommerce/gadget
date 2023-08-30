"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const polaris_1 = require("@shopify/polaris");
const react_1 = require("react");
/**
 *
 * @param {Column} column
 */
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
/**
 *
 * @param {TwoColumnCardProps} props
 * @constructor
 */
function TwoColumnCard(props) {
    const { left, right } = props;
    const { component: leftComponent, size: leftSize, bg: leftBg, flush: leftFlush } = useInitComponent(left);
    const { component: rightComponent, size: rightSize, bg: rightBg, flush: rightFlush } = useInitComponent(right);
    return (0, jsx_runtime_1.jsx)(polaris_1.LegacyCard, { subdued: true, children: (0, jsx_runtime_1.jsxs)(polaris_1.HorizontalGrid, { columns: [leftSize, rightSize], children: [(0, jsx_runtime_1.jsx)(polaris_1.Box, { minHeight: '100%', borderRadiusStartStart: '2', borderRadiusEndStart: '2', background: leftBg || 'bg-subdued', padding: leftFlush ? undefined : '4', children: leftComponent }), (0, jsx_runtime_1.jsx)(polaris_1.Box, { background: rightBg || 'bg', borderColor: 'border-subdued', borderInlineStartWidth: '1', borderRadiusStartEnd: '2', borderRadiusEndEnd: '2', padding: rightFlush ? undefined : '4', children: rightComponent })] }) });
}
exports.default = TwoColumnCard;
