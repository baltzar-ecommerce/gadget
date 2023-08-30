import { ReactNode } from 'react';
type ShowToastCallback = (params: {
    error?: string;
    message?: string;
}) => void;
export declare function useToast(): (string | number | boolean | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | Iterable<ReactNode> | ShowToastCallback | null | undefined)[];
export {};
