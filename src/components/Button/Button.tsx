import React, { ComponentPropsWithoutRef, forwardRef } from 'react';

type OwnButtonProps = {
    'data-testid'?: string;
}

type OtherNativeButtonProps = Omit<ComponentPropsWithoutRef<'button'>, keyof OwnButtonProps> 


export type ButtonProps = OtherNativeButtonProps & OwnButtonProps

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    return <button {...props} ref={ref} />
})

Button.displayName = 'Button';

export default Button