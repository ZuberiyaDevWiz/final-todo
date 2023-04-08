import { AiOutlineHome, AiOutlineProject } from 'react-icons/ai';
import { MdOutlineTask } from 'react-icons/md';
import { FiCheckSquare, FiUser } from 'react-icons/fi';
import Link from 'next/link';

const Sidebar = () => {
    const SidebarArr = [
        {
            step: 'Home',
            icon: <AiOutlineHome />,
        },
        {
            step: 'Tasks',
            icon: <MdOutlineTask />,
        },
        {
            step: 'Projects',
            icon: <AiOutlineProject />,
        },
        {
            step: 'Upcoming',
            icon: <FiCheckSquare />,
        },
        {
            step: 'Users',
            icon: <FiUser />,
        },
    ];

    return (
        <div className="bg-gray-100 w-fit px-4 pr-10 rounded-md h-screen  py-5 space-y-6">
            {SidebarArr.map((x) => (
                <div className="flex space-x-7 font-semibold items-center ">
                    <p className="text-2xl">{x.icon}</p>
                    <Link href="/" className="hover:scale-105">
                        {x.step}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
