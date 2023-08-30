import {Box, BoxProps, Text} from '@shopify/polaris'

interface Props extends BoxProps {
    children: string,
}

export function EmptyState({children, ...props}: Props) {
    return <Box padding={'5'} {...props}><Text as={'h2'} variant={'headingMd'}>{children}</Text></Box>
}
