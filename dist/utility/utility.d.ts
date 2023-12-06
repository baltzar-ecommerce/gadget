interface UtilityProps {
    price?: number | string | null;
    compareAtPrice?: number | string | null;
}
export declare function isOnSale({ price, compareAtPrice }: UtilityProps): boolean;
type Entity<T = any> = {
    edges: {
        node: T;
    }[];
};
export declare function reduceEdges<T>(entity: Entity<T>): T[];
export declare function extractIDFromGUID(guid?: string): string | number | undefined;
export {};
