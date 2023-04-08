import { useState } from 'react';
import Sidebar from '../common/Sidebar';
import clx from '../../../utils/clx';

const Tabs = () => {
    const [list, setList] = useState<'all-tasks' | 'completed' | 'in-progress' | 'pending'>(
        'all-tasks'
    );

    return (
        <section className="w-full">
            <div className="p-5">
                <h1 className="font-semibold text-2xl pb-3">Welcome, User!</h1>
                <div className="flex border-2 rounded-md">
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
            </div>
        </section>
    );
};

export default Tabs;
