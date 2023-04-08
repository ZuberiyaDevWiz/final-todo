import { FC, useState } from 'react';
import { GiCancel } from 'react-icons/gi';

interface props {
    heading: string;
    isShow: boolean;
    setIsShow?: () => void;
}

const Modal: FC<props> = ({ heading, isShow, setIsShow }) => (
    <div>
        {isShow ? (
            <section className=" bg-red-500 rounded-md">
                <div className="shadow-lg mx-auto">
                    <div className="flex justify-between">
                        <h1>{heading}</h1>
                        <GiCancel />
                        {/* <input type="text" />
                <textarea /> */}
                    </div>
                </div>
            </section>
        ) : (
            ''
        )}
    </div>
);

export default Modal;
