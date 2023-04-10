import { useState } from 'react';
import Sidebar from '../common/Sidebar';
import TaskCard from './TaskCard';
import Tabs from './Tabs';

const Home = () => {
    const [temp, setTemp] = useState(false);
    return (
        <section className="flex ">
            <Sidebar />
            <div className="w-full space-y-6 p-5">
                {}
                <Tabs />
                {temp ? <TaskCard /> : ''}

                {/* <TaskCard /> */}
            </div>
        </section>
    );
};

export default Home;
