import { z } from 'zod';
import { create } from 'zustand';

const registerSchema = z
    .object({
        email: z.string().email('Invalid email'),
        username: z
            .string()
            .min(3, 'Username must be at least 3 characters')
            .max(20, 'Username must be at most 20 characters'),
        password: z
            .string()
            .min(6, 'Password must be at least 6 characters')
            .max(20, 'Password must be at most 20 characters'),
    })
    .strict();
type TypeRegister = z.infer<typeof registerSchema>;

interface Props {
    user: TypeRegister;
    setUser: (user: TypeRegister) => void;
}

const defaultRegister = {
    email: '',
    username: '',
    password: '',
};

const useRegister = create<Props>()((set) => ({
    user: defaultRegister,
    setUser: (user) => {
        set({
            user: user,
        });
    },
}));

export default useRegister;
