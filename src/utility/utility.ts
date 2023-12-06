import { unformat } from "accounting";

interface UtilityProps {
    price?: number | string | null
    compareAtPrice?: number | string | null
}

export function isOnSale({ price, compareAtPrice }: UtilityProps) {

    if (!compareAtPrice || !price) {
        return false
    }

    return unformat(compareAtPrice + '') > unformat(price + '')
}

type Entity<T = any> = T extends infer R ? { edges: { node: R }[] } : { edges: { node: T }[] }

export function reduceEdges<T>(entity: Entity<T>) {

    if (!entity?.edges.length) {
        return [] as T[]
    }

    return entity.edges.map(({ node }) => node) as T[]

}


export function extractIDFromGUID(guid?: string) {

    if (!guid) {
        return guid
    }

    const parts = guid.split('/')
    const id = parts.pop()

    if (!id) {
        return guid
    }

    return parseInt(id)
}