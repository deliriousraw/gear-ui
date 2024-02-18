import React, { ComponentPropsWithoutRef, forwardRef } from 'react';

import styles from './Button.module.scss';

type OwnButtonProps = {
  'data-testid'?: string;
};

type OtherNativeButtonProps = Omit<ComponentPropsWithoutRef<'button'>, keyof OwnButtonProps>;

export type ButtonProps = OtherNativeButtonProps & OwnButtonProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return <button {...props} ref={ref} className={styles.root} />;
});

Button.displayName = 'Button';
