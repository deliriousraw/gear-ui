declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
}

declare module '*.mdx' {
    const mdx: any;
    export default mdx;
}
  

declare module '*.svg' {
    const content: string;
    export default content;
}
  
declare type Properties<T> = keyof T;
declare type Values<T> = T[Properties<T>];