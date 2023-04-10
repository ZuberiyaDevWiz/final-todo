import { FC, useState } from 'react';
import Button from '../common/Button';
import { MdDelete } from 'react-icons/md';
import useList from '../store/useList';

const TaskCard: FC = () => {
    const [isComplete, setIsComplete] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const { taskList, setTaskList } = useList((state) => state);

    return (
        <div className="h-fit w-[30vw] rounded-xl p-4 ring-1 ring-gray-200">
            <div className="flex justify-between items-center ">
                <h1 className=" font-semibold text-lg ">{taskList.title}</h1>
                <div>
                    <button onClick={() => alert('Do you really want to delete the task?')}>
                        <MdDelete className="text-red-500 rounded-full text-3xl bg-gray-300 p-1" />
                    </button>
                </div>
            </div>
            <div className="pt-4">
                <p className="line-clamp-4 text-[#707070]">{taskList.desc}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between w-full space-x-4">
                <Button
                    text={isComplete ? 'Mark as Completed' : 'Completed'}
                    icon="complete"
                    colorfill={!isComplete ? 'primary' : ''}
                    onClick={() => setIsComplete(!isComplete)}
                    className="!w-1/2"
                />
                <Button
                    text={isPending ? 'Pending' : 'In-Progress'}
                    icon="in-progress"
                    colorfill={!isPending ? 'primary' : ''}
                    onClick={() => setIsPending(!isPending)}
                    className="!w-1/2"
                />
            </div>
        </div>
    );
};

export default TaskCard;
