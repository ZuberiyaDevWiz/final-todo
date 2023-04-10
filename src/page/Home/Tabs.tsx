import { useState, FC } from 'react';
import axios from 'axios';
import clx from '../../../utils/clx';
import Modal from '../common/Modal';
import Button from '../common/Button';
import Input from '../common/Input';
import useList from '../store/useList';

const Tabs: FC = () => {
    const [isShow, setIsShow] = useState(false);
    const { taskList, setTaskList } = useList((state) => state);
    const [list, setList] = useState<'all-tasks' | 'completed' | 'in-progress' | 'pending'>(
        'all-tasks'
    );

    return (
        <section className="">
            <div className="flex justify-between items-center pb-3">
                <h1 className="font-semibold text-2xl">Welcome, User!</h1>
                <div className="w-40">
                    <Button
                        text="+ Add New Task"
                        colorfill="primary"
                        onClick={() => setIsShow(!isShow)}
                    />
                </div>
            </div>
            <div className="flex w-fit border-2 rounded-md">
                <button
                    onClick={() => setList('all-tasks')}
                    className={clx(
                        'px-4 rounded-l-md text-sm py-2 font-semibold ring-1 ring-gray-400',
                        list === 'all-tasks' ? 'bg-black text-white' : ''
                    )}
                >
                    All Tasks
                </button>
                <button
                    onClick={() => setList('completed')}
                    className={clx(
                        'px-4  text-sm py-2 font-semibold ring-1 ring-gray-400',
                        list === 'completed' ? 'bg-black text-white' : ''
                    )}
                >
                    Completed
                </button>
                <button
                    onClick={() => setList('in-progress')}
                    className={clx(
                        'px-4  text-sm py-2 font-semibold ring-1 ring-gray-400',
                        list === 'in-progress' ? 'bg-black text-white' : ''
                    )}
                >
                    In-Progress
                </button>
                <button
                    onClick={() => setList('pending')}
                    className={clx(
                        'px-4 rounded-r-md text-sm py-2 font-semibold ring-1 ring-gray-400 ',
                        list === 'pending' ? 'bg-black text-white' : ''
                    )}
                >
                    Pending
                </button>
            </div>
            {isShow && (
                <>
                    <Modal heading="Add Your Task" isShow={isShow} setIsShow={setIsShow}>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                axios
                                    .post('http://localhost:4000/api/test/list', {
                                        userId: '64327bfc3de40170f66a591a',
                                        title: taskList.title,
                                        desc: taskList.desc,
                                    })
                                    .then(() => {
                                        alert('Task Created.!');

                                        setIsShow(false);
                                    })
                                    .catch(() => alert('something went wrong'));
                            }}
                        >
                            <div className="flex flex-col space-y-6 py-4">
                                <Input
                                    label="Enter Title"
                                    type="text"
                                    placeholder="Enter Title.."
                                    value={taskList.title}
                                    onChange={(e) =>
                                        setTaskList({
                                            ...taskList,
                                            title: e.target.value,
                                        })
                                    }
                                />
                                <textarea
                                    className="border-2 border-black px-2 rounded-md py-2"
                                    placeholder="Enter Description.."
                                    value={taskList.desc}
                                    onChange={(e) =>
                                        setTaskList({
                                            ...taskList,
                                            desc: e.target.value,
                                        })
                                    }
                                />
                                <Button text="Submit" colorfill="primary" />
                            </div>
                        </form>
                    </Modal>
                </>
            )}
        </section>
    );
};

export default Tabs;
