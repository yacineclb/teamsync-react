import { ForwardedRef, forwardRef } from 'react';
import { InputProps } from './Input.types';

const Input = forwardRef(({ className, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <div className="flex flex-col gap-2">
      <input className={`border px-2 py-2 ${className}`} ref={ref} {...props} />
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
