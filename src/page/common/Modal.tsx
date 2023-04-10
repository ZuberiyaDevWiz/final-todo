import { FC, ReactNode } from 'react';
import { GiCancel } from 'react-icons/gi';
import Button from './Button';

interface props {
    heading: string;
    isShow: boolean;
    children: ReactNode;
    setIsShow: (isShow: boolean) => void;
}

const Modal: FC<props> = ({ heading, isShow, setIsShow, children }) => (
    <div>
        {isShow && (
            <div className="fixed top-0 left-0 z-[70] flex h-screen w-screen min-w-[50vw] items-center justify-center bg-black bg-opacity-50">
                <section className=" bg-gray-200   w-[40%] p-5 rounded-md">
                    <div className="flex justify-between items-center">
                        <h1>{heading}</h1>
                        <GiCancel onClick={() => setIsShow(false)} />
                    </div>
                    <div>{children}</div>
                </section>
            </div>
        )}
    </div>
);

export default Modal;
