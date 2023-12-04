import {Box, InlineGrid, Card} from '@shopify/polaris'
import {ReactNode, useMemo} from 'react'

type Size = 'oneThird' | 'oneHalf' | 'twoThirds'

interface CardColumn {
    component: ReactNode,
    size?: Size,
    bg?: any
    flush?: boolean
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
            size:      _column.size || 'oneHalf',
            bg:        _column.bg,
            flush:     _column.flush || false
        }

    }, [column])

}

export function TwoColumnCard(props: TwoColumnCardProps) {

    const {left, right} = props

    const {component: leftComponent, size: leftSize, bg: leftBg, flush: leftFlush}     = useInitComponent(left)
    const {component: rightComponent, size: rightSize, bg: rightBg, flush: rightFlush} = useInitComponent(right)

    return <Card  background="bg-surface-secondary">
        <InlineGrid columns={[leftSize, rightSize]}>
            <Box
                minHeight={'100%'}
                borderStartStartRadius={'200'}
                borderEndStartRadius={'200'}
                background={leftBg || 'bg-surface-secondary'}
                padding={leftFlush ? undefined : '400'}>
                {leftComponent}
            </Box>
            <Box
                background={rightBg || 'bg'}
                borderColor={'border-secondary'}
                borderInlineStartWidth={'100'}
                borderStartEndRadius={'200'}
                borderEndEndRadius={'200'}
                padding={rightFlush ? undefined : '400'}>
                {rightComponent}
            </Box>
        </InlineGrid>
    </Card>
}
