import Sidebar from '../common/Sidebar';
import TaskCard from '../common/TaskCard';
import Tabs from './Tabs';

const Home = () => (
    <section className="flex ">
        <Sidebar />
        <div className="w-full">
            <Tabs />
            <TaskCard />
        </div>
    </section>
);

export default Home;
