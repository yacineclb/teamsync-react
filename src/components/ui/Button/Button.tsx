import { defaultButtonSize, defaultButtonVariant } from './Button.constants';
import { ButtonProps } from './Button.types';

export default function Button({
  onClick,
  children,
  disabled = false,
  size = defaultButtonSize,
  variant = defaultButtonVariant,
}: ButtonProps) {
  const computeStyle = () => {
    if (disabled) {
      return 'cursor-not-allowed text-gray-400 hover:text-gray-400 bg-gray-700 hover:bg-gray-700';
    }

    let classnames = 'cursor-pointer';

    classnames +=
      variant === 'primary'
        ? ' bg-[#4096ff] hover:bg-[#4096ff]/80 outline outline-[#4096ff] outline-[#4096ff]/80t'
        : ' bg-black hover:bg-black/80 hover:outline-black/80 outline outline-black';

    classnames += size === 'small' ? ' text-sm' : size === 'medium' ? ' text-md' : ' text-lg';

    return classnames;
  };

  return (
    <button className={`rounded ${computeStyle()} text-white font-semibold px-4 py-2`} onClick={onClick}>
      {children}
    </button>
  );
}
