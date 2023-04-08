import { FC, ButtonHTMLAttributes } from 'react';
import clx from '../../../utils/clx';

interface props extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    colorfill?: string;
}

const Button: FC<props> = ({ text, colorfill, onClick }) => (
    <div>
        <button
            className={clx(
                ' px-4 py-2 rounded-md border-2 border-black',
                colorfill === 'primary'
                    ? 'bg-black text-white'
                    : colorfill === 'secondary'
                    ? 'bg-yellow-400 text-black'
                    : ''
            )}
            onClick={onClick}
        >
            {text}
        </button>
    </div>
);

export default Button;
