import {Box, HorizontalGrid, LegacyCard} from "@shopify/polaris";
import {ReactNode, useMemo} from 'react'

type Size = 'oneThird' | 'oneHalf' | 'twoThirds'

export interface Column {
    component: ReactNode,
    size?: Size,
    bg?: any
    flush?: boolean
}

export interface TwoColumnCardProps {
    left: Column,
    right: Column
}

/**
 *
 * @param {Column} column
 */
function useInitComponent(column: Column) {

    return useMemo(() => {

        let _column = column || {}

        return {
            component: _column.component || null,
            size: _column.size || 'oneHalf',
            bg: _column.bg,
            flush: _column.flush || false
        }

    }, [column])

}

/**
 *
 * @param {TwoColumnCardProps} props
 * @constructor
 */
export default function TwoColumnCard(props: TwoColumnCardProps) {

    const {left, right} = props

    const {component: leftComponent, size: leftSize, bg: leftBg, flush: leftFlush} = useInitComponent(left)
    const {component: rightComponent, size: rightSize, bg: rightBg, flush: rightFlush} = useInitComponent(right)

    return <LegacyCard subdued>
        <HorizontalGrid columns={[leftSize, rightSize]}>
            <Box
                minHeight={'100%'}
                borderRadiusStartStart={'2'}
                borderRadiusEndStart={'2'}
                background={leftBg || 'bg-subdued'}
                padding={leftFlush ? undefined : '4'}>
                {leftComponent}
            </Box>
            <Box
                background={rightBg || 'bg'}
                borderColor={'border-subdued'}
                borderInlineStartWidth={'1'}
                borderRadiusStartEnd={'2'}
                borderRadiusEndEnd={'2'}
                padding={rightFlush ? undefined : '4'}>
                {rightComponent}
            </Box>
        </HorizontalGrid>
    </LegacyCard>

}