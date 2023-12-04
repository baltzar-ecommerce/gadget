import { Box, BoxProps, Text } from '@shopify/polaris'

interface Props extends BoxProps {
    children: string | string[],
}

export function EmptyState({ children, ...props }: Props) {
    return <Box padding={'500'} {...props}><Text as={'h2'} variant={'headingMd'}>{children}</Text></Box>
}
