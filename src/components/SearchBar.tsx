import { Box, Icon, InlineStack, Popover, TextField } from "@shopify/polaris";
import { SearchMinor } from "@shopify/polaris-icons";
import { ReactNode } from 'react'

interface Props {
    value: string
    onChange: (id: string) => void
    onClose: () => void
    results?: ReactNode
    placeholder?: string
    hideBorder?: boolean
    asTopBar?: boolean
}

export function SearchBar({ value, onChange, onClose, results, placeholder, hideBorder, asTopBar }: Props) {

    const field = <TextField
        label={'Search'}
        labelHidden
        autoComplete={'off'}
        value={value}
        onChange={onChange}
        onClearButtonClick={onClose}
        clearButton
        placeholder={placeholder || 'Search'}
        prefix={<Icon source={SearchMinor} />}
        variant={hideBorder || asTopBar ? 'borderless' : undefined}
    />

    const popOver = results ? <Popover
        autofocusTarget={'none'}
        active={value?.length > 0}
        activator={field}
        onClose={onClose}
        fullWidth
    >{results}</Popover> : field

    if (asTopBar) {
        return <Box
            background={'bg'}
            paddingInlineStart={'500'}
            paddingInlineEnd={'500'}
            paddingBlockStart={'200'}
            paddingBlockEnd={'200'}
            borderStyle={'solid'}
            borderColor={'border-secondary'}
            borderBlockEndWidth={'100'}
        >
            <InlineStack align={'center'}>
                <Box width={'100%'} maxWidth={'41.375rem'}>{popOver}</Box>
            </InlineStack>
        </Box>
    }

    return popOver

}