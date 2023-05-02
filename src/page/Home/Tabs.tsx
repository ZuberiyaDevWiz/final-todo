import { useState } from "react";

import clx from "../../../utils/clx";
import Button from "../common/Button";
import Modal from "../common/Modal";

const Tabs = () => {
  const [isShow, setIsShow] = useState(false);
  const [list, setList] = useState<
    "all-tasks" | "completed" | "in-progress" | "pending"
  >("all-tasks");

  return (
    <section className="">
      <div className="flex justify-between items-center pb-3">
        <h1 className="font-semibold text-2xl">Welcome, User!</h1>
        <Button text="+ Add New Task" onClick={() => setIsShow(!isShow)} />
      </div>
      <div className="flex w-fit border-2 rounded-md">
        <button
          type="button"
          onClick={() => setList("all-tasks")}
          className={clx(
            "px-4 rounded-l-md text-sm py-2 font-semibold ring-1 ring-gray-400",
            list === "all-tasks" ? "bg-black text-white" : ""
          )}
        >
          All Tasks
        </button>
        <button
          type="button"
          onClick={() => setList("completed")}
          className={clx(
            "px-4  text-sm py-2 font-semibold ring-1 ring-gray-400",
            list === "completed" ? "bg-black text-white" : ""
          )}
        >
          Completed
        </button>
        <button
          type="button"
          onClick={() => setList("in-progress")}
          className={clx(
            "px-4  text-sm py-2 font-semibold ring-1 ring-gray-400",
            list === "in-progress" ? "bg-black text-white" : ""
          )}
        >
          In-Progress
        </button>
        <button
          type="button"
          onClick={() => setList("pending")}
          className={clx(
            "px-4 rounded-r-md text-sm py-2 font-semibold ring-1 ring-gray-400 ",
            list === "pending" ? "bg-black text-white" : ""
          )}
        >
          Pending
        </button>
      </div>
      {isShow && (
        <Modal heading="Add Your Todo" isShow={isShow} setIsShow={setIsShow} />
      )}
    </section>
  );
};

export default Tabs;
