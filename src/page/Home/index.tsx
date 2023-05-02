import Sidebar from "../common/Sidebar";
import TaskCard from "../common/TaskCard";
import Tabs from "./Tabs";

const Home = () => (
  <section className="flex ">
    <Sidebar />
    <div className="w-full space-y-6 p-5">
      <Tabs />
      <TaskCard />
    </div>
  </section>
);

export default Home;
