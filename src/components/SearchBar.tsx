import {Box, HorizontalStack, Icon, Popover, TextField} from "@shopify/polaris";
import {SearchMinor} from "@shopify/polaris-icons";

export function SearchBar({value, onChange, onClose, results, placeholder, hideBorder, asTopBar}) {


    const field = <TextField
        label={'Search'}
        labelHidden
        autoComplete={'off'}
        value={value}
        onChange={onChange}
        onClearButtonClick={onClose}
        clearButton
        placeholder={placeholder || 'Search'}
        prefix={<Icon source={SearchMinor}/>}
        borderless={hideBorder || asTopBar}
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
            paddingInlineStart={'5'}
            paddingInlineEnd={'5'}
            paddingBlockStart={'2'}
            paddingBlockEnd={'2'}
            borderStyle={'solid'}
            borderColor={'border-subdued'}
            borderBlockEndWidth={'1'}
        >
            <HorizontalStack align={'center'}>
                <Box width={'100%'} maxWidth={'41.375rem'}>{popOver}</Box>
            </HorizontalStack>
        </Box>
    }

    return popOver

}