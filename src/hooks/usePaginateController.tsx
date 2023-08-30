import {useCallback, useMemo, useState} from 'react'

interface Parameters {
    perPage?: number,
    start?: number
}

interface Cursor {
    first?: number
    last?: number
    after?: any
    before?: any
}

type Controller = (cursor: Cursor) => any

export default function usePaginateController(controller: Controller, parameters: Parameters = {}) {

    const {perPage} = useMemo(() => {

        const extracted: Parameters = {}
        extracted.perPage           = parameters.perPage || 50
        // TODO offset based pagination not available yet.
        //extracted.offset = parameters.start ? parameters.start * extracted.perPage : undefined
        return extracted

    }, [parameters])

    const [cursor, setCursor] = useState<Cursor>({first: perPage})

    // using Gadget React hooks to fetch records of inventoryTransferReceipt
    const paginatedHook = controller(cursor)
    const [{data}]      = paginatedHook

    const getNextPage = useCallback(() => {
        // use first + after to page forwards
        setCursor({first: perPage, after: data.endCursor})

    }, [data, perPage])

    const getPreviousPage = useCallback(() => {
        // use last + before to page backwards
        setCursor({last: perPage, before: data.startCursor})
    }, [data, perPage])

    return [
        paginatedHook,
        {
            hasNext:     data?.hasNextPage,
            hasPrevious: data?.hasPreviousPage,
            onNext:      getNextPage,
            onPrevious:  getPreviousPage
        }
    ]

}


