import { create } from 'zustand';
import { z } from 'zod';

const listSchema = z.object({
    userId: z.string(),
    title: z
        .string()
        .min(10, 'title must be atleast 10 characters long')
        .max(30, 'title must be at most 30 characters long'),
    desc: z.string().min(50),
});

export type TypeList = z.infer<typeof listSchema>;

const defaultList: TypeList = {
    userId: '',
    title: '',
    desc: '',
};

interface Props {
    taskList: TypeList;

    setTaskList: (list: TypeList) => void;
}

const useList = create<Props>()((set) => ({
    taskList: defaultList,

    setTaskList: (taskList) => {
        set({
            taskList,
        });
    },
}));

export default useList;
