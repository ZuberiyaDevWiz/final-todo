import { FC } from 'react';
import { GiCancel } from 'react-icons/gi';

const Modal: FC<{ heading: string }> = ({ heading }) => (
    <div className="shadow-lg w-[50%] justify-center items-center">
        <div className="flex justify-between">
            <h1>{heading}</h1>
            <GiCancel />
            <input type="text" />
            <textarea />
        </div>
    </div>
);

export default Modal;
