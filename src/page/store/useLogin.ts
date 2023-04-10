import { create } from 'zustand';
import { z } from 'zod';

const LoginSchema = z.object({
    email: z.string().email('Invalid email'),
    password: z
        .string()
        .min(6, 'Password must be at least 6 characters')
        .max(20, 'Password must be at most 20 characters'),
});

type TypeLogin = z.infer<typeof LoginSchema>;

interface Props {
    userLogin: TypeLogin;
    setUserLogin: (userLogin: TypeLogin) => void;
}

const defaultLogin = {
    email: '',
    password: '',
};

const useLogin = create<Props>()((set) => ({
    userLogin: defaultLogin,
    setUserLogin: (userLogin) => {
        set({
            userLogin: userLogin,
        });
    },
}));

export default useLogin;
