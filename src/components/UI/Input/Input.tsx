import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import { ValidationError } from '../ValidationError/ValidationError';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  className?: string;
  icon?: string | ReactNode;
  iconClassName?: string;
  containerClassName?: string;
  iconAction?: () => void;
}

const styles = {
  container: 'w-full',
  inputWrapper: 'flex flex-col relative',
  input:
    'p-[12px_20px] border-[1px] border-black border-solid rounded-[100px] font-manrope text-base font-normal disabled:border-gray_disabled',
  invalid: 'border-red',
  withIcon: 'p-[14px_52px_14px_20px]',
  icon: 'flex items-center justify-center absolute top-[15px] right-[20px] max-w-[20px] max-h-[20px] transition-transform',
};

export const Input = forwardRef<HTMLInputElement, IInput>(
  ({ error, className, icon, iconClassName, containerClassName, iconAction, ...props }, ref) => {
    return (
      <div className={clsx(styles.container, containerClassName)}>
        <div className={styles.inputWrapper}>
          <input
            ref={ref}
            className={clsx(styles.input, className, {
              [styles.invalid]: error,
              [styles.withIcon]: icon,
            })}
            {...props}
          />
          {icon && (
            <div className={clsx(styles.icon, iconClassName)} onClick={iconAction}>
              {icon}
            </div>
          )}
        </div>
        <ValidationError error={error as string} />
      </div>
    );
  },
);

Input.displayName = 'Input';
