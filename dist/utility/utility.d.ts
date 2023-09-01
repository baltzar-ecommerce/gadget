interface Entity {
    edges?: {
        node: any;
    }[];
}
interface UtilityProps {
    price?: number | string | null;
    compareAtPrice?: number | string | null;
}
export declare function isOnSale({ price, compareAtPrice }: UtilityProps): boolean;
export declare function reduceEdges(entity: Entity, callback?: Function | undefined): any[];
export declare function extractIDFromGUID(guid?: string): string | number | undefined;
export {};
