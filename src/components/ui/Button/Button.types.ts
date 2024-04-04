import { BaseProps } from '../../../utils/types';
import { ButtonSizes, ButtonVariants } from './Button.constants';

export type ButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: (typeof ButtonVariants)[number];
    size?: (typeof ButtonSizes)[number];
    block?: boolean;
    disabled?: boolean;
  };
