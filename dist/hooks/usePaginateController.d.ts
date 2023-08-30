interface HookParameters {
    perPage?: number;
    start?: number;
}
interface Cursor {
    first?: number;
    last?: number;
    after?: any;
    before?: any;
}
type HookGenerator = (cursor: Cursor) => any;
export declare function usePaginateController(generator: HookGenerator, parameters?: HookParameters): any[];
export {};
