export type ComponentChildren = JSX.Element | JSX.Element[] | string | string[];

export interface ComponentAttributes {
    className?: string;
    children?: ComponentChildren;
}
