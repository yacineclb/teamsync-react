import { FieldError } from 'react-hook-form';
import { BaseProps } from '../../../utils/types';

export type InputProps = BaseProps &
  React.InputHTMLAttributes<HTMLInputElement> & {
    disabled?: boolean;
    error: FieldError | undefined;
  };
