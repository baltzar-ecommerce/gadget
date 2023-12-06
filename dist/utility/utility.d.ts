interface UtilityProps {
    price?: number | string | null;
    compareAtPrice?: number | string | null;
}
export declare function isOnSale({ price, compareAtPrice }: UtilityProps): boolean;
type Entity<T = any> = T extends infer R ? {
    edges: {
        node: R;
    }[];
} : {
    edges: {
        node: T;
    }[];
};
export declare function reduceEdges<T, U>(entity: Entity<T>, callback?: (node: T) => U): T[] | U[];
export declare function extractIDFromGUID(guid?: string): string | number | undefined;
export {};
