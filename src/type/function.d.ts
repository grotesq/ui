declare type Predicate<TInput = any> = (x: TInput) => boolean;

declare type ValueFormatter<T = any> = (x: T) => string;
declare type NumberFormatter = ValueFormatter<number>;

declare type OnChangeCallback<T = any> = (x: T) => void;
declare type OnPressCallback = () => void;

declare type Validator<T = any> = (x: T) => string | null;
