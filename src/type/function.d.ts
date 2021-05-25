declare type ValueFormatter<T = any> = (x: T) => string;
declare type NumberFormatter = ValueFormatter<number>;
declare const DefaultFormatter: ValueFormatter<any> = (x: any) => `${x ? x : ''}`;

declare type OnChangeCallback<T = any> = (x: T) => void;
declare type OnPressCallback = () => void;
