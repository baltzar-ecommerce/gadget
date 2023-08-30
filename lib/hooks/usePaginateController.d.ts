interface Parameters {
    perPage?: number;
    start?: number;
}
interface Cursor {
    first?: number;
    last?: number;
    after?: any;
    before?: any;
}
type Controller = (cursor: Cursor) => any;
export declare function usePaginateController(controller: Controller, parameters?: Parameters): any[];
export {};
