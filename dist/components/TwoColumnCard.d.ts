import { ReactNode } from 'react';
type Size = 'oneThird' | 'oneHalf' | 'twoThirds';
interface CardColumn {
    component: ReactNode;
    size?: Size;
}
interface TwoColumnCardProps {
    left: CardColumn;
    right: CardColumn;
}
export declare function TwoColumnCard(props: TwoColumnCardProps): import("react/jsx-runtime").JSX.Element;
export {};
