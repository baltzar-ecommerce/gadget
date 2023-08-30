"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function usePaginateController(controller, parameters = {}) {
    const { perPage } = (0, react_1.useMemo)(() => {
        const extracted = {};
        extracted.perPage = parameters.perPage || 50;
        // TODO offset based pagination not available yet.
        //extracted.offset = parameters.start ? parameters.start * extracted.perPage : undefined
        return extracted;
    }, [parameters]);
    const [cursor, setCursor] = (0, react_1.useState)({ first: perPage });
    // using Gadget React hooks to fetch records of inventoryTransferReceipt
    const paginatedHook = controller(cursor);
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
exports.default = usePaginateController;
