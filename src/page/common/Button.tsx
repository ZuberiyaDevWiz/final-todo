import { FC, ButtonHTMLAttributes } from 'react';
import clx from '../../../utils/clx';
import { AiOutlineCheck, AiFillDelete } from 'react-icons/ai';
import { BsHourglassSplit } from 'react-icons/bs';

interface props extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    colorfill?: string;
    icon?: string;
}

const Button: FC<props> = ({ text, colorfill, icon, onClick }) => (
    <div className="w-full">
        <button
            className={clx(
                'py-2 w-full rounded-md border-2 border-black',
                colorfill === 'primary'
                    ? 'bg-black text-white'
                    : colorfill === 'secondary'
                    ? 'bg-yellow-400 text-black'
                    : colorfill === 'danger'
                    ? 'bg-red-500'
                    : ''
            )}
            onClick={onClick}
        >
            <div className="flex space-x-2 text-center justify-center items-center">
                <div>
                    {icon === 'complete' ? (
                        <AiOutlineCheck />
                    ) : icon === 'in-progress' ? (
                        <BsHourglassSplit />
                    ) : icon === 'delete' ? (
                        <AiFillDelete className=" text-2xl" />
                    ) : (
                        ''
                    )}
                </div>
                <p className="font-semibold "> {text} </p>
            </div>
        </button>
    </div>
);

export default Button;
