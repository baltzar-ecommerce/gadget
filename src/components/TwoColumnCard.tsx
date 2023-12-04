import { Card, InlineGrid } from '@shopify/polaris'
import { ReactNode, useMemo } from 'react'

type Size = 'oneThird' | 'oneHalf' | 'twoThirds'

interface CardColumn {
    component: ReactNode,
    size?: Size,
}

interface TwoColumnCardProps {
    left: CardColumn,
    right: CardColumn
}

function useInitComponent(column: CardColumn) {

    return useMemo(() => {

        let _column = column || {}

        return {
            component: _column.component || null,
            size: _column.size || 'oneHalf',
        }

    }, [column])

}

export function TwoColumnCard(props: TwoColumnCardProps) {

    const { left, right } = props

    const { component: leftComponent, size: leftSize } = useInitComponent(left)
    const { component: rightComponent, size: rightSize } = useInitComponent(right)

    return <Card background="bg-surface-secondary" padding={'0'}>
        <InlineGrid columns={[leftSize, rightSize]}>
            {leftComponent}
            {rightComponent}
        </InlineGrid>
    </Card>
}
