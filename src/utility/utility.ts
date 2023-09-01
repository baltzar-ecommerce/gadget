import {unformat} from "accounting";

interface Entity {
    edges?: { node: any }[]
}

interface UtilityProps {
    price?: number | string | null
    compareAtPrice?: number | string | null
}

export function isOnSale({price, compareAtPrice}: UtilityProps) {

    if (!compareAtPrice || !price) {
        return false
    }

    return unformat(compareAtPrice + '') > unformat(price + '')
}

export function reduceEdges(entity: Entity, callback: Function | undefined = undefined) {

    if (!entity?.edges?.length) {
        return []
    }

    return entity.edges.map(({node}) => {

        if (!!callback) {
            return callback(node)
        }

        return node;
    })

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