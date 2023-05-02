import { FC, useState } from "react";
import { GiCancel } from "react-icons/gi";
import Button from "./Button";

interface props {
  heading: string;
  isShow: boolean;
  setIsShow: (isShow: boolean) => void;
}

const Modal: FC<props> = ({ heading, isShow, setIsShow }) => (
  <div>
    {isShow && (
      <div className="fixed top-0 left-0 z-[70] flex h-screen w-screen min-w-[50vw] items-center justify-center bg-black bg-opacity-50">
        <section className=" bg-gray-200 mx-auto  w-[40%] p-5 rounded-md">
          <div className="">
            <div className="flex justify-between items-center">
              <h1>{heading}</h1>
              <GiCancel onClick={() => setIsShow(false)} />
            </div>
            <div className="flex flex-col space-y-6 py-4">
              <input
                type="text"
                className="border-2 border-black rounded-md px-2 py-2"
                placeholder="Enter Title.."
              />
              <textarea
                className="border-2 border-black px-2 rounded-md py-2"
                placeholder="Enter Description.."
              />
              <Button text="Submit" />
            </div>
          </div>
        </section>
      </div>
    )}
  </div>
);

export default Modal;
