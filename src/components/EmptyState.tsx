import {Box, Text} from "@shopify/polaris";

export function EmptyState({children, ...props}) {
    return <Box padding={'5'} {...props}><Text as={'h2'} variant={'headingMd'}>{children}</Text></Box>
}
