import React, { ComponentPropsWithoutRef, forwardRef } from 'react';

type OwnTypographyProps = {
    'data-testid'?: string;
}

type OtherNativeSpanProps = Omit<ComponentPropsWithoutRef<'button'>, keyof OwnTypographyProps> 


export type TypographyProps = OtherNativeSpanProps & OwnTypographyProps

export const Typography = forwardRef<HTMLSpanElement, TypographyProps>((props, ref) => {
    return <span {...props} ref={ref} />
})

Typography.displayName = 'Typography';
