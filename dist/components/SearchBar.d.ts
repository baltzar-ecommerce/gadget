import { ReactNode } from 'react';
interface Props {
    value: string;
    onChange: (id: string) => void;
    onClose: () => void;
    results?: ReactNode;
    placeholder?: string;
    hideBorder?: boolean;
    asTopBar?: boolean;
}
export declare function SearchBar({ value, onChange, onClose, results, placeholder, hideBorder, asTopBar }: Props): import("react/jsx-runtime").JSX.Element;
export {};
