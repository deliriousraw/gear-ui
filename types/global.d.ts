declare type Properties<T> = keyof T;
declare type Values<T> = T[Properties<T>];