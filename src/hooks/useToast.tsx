import {ReactNode, useCallback, useState} from 'react'
import {Toast} from '@shopify/polaris'

type ShowToastCallback = (params: { error?: string, message?: string }) => void

export function useToast() {

    const [toast, setToast] = useState<ReactNode>(null)

    const showToast = useCallback<ShowToastCallback>(({message, error}) => {
        setToast(<Toast
            error={!!error}
            content={error ? error : message + ''}
            onDismiss={() => setToast(null)}
        />)
    }, [])

    return [toast, showToast]
}
