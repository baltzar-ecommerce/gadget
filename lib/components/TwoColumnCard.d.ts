import { ReactNode } from 'react';
type Size = 'oneThird' | 'oneHalf' | 'twoThirds';
export interface Column {
    component: ReactNode;
    size?: Size;
    bg?: any;
    flush?: boolean;
}
export interface TwoColumnCardProps {
    left: Column;
    right: Column;
}
/**
 *
 * @param {TwoColumnCardProps} props
 * @constructor
 */
export default function TwoColumnCard(props: TwoColumnCardProps): import("react/jsx-runtime").JSX.Element;
export {};
