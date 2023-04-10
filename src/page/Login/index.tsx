import { useRouter } from 'next/router';
import Button from '../common/Button';
import Input from '../common/Input';
import useLogin from '../store/useLogin';
import axios from 'axios';
import Link from 'next/link';

const Login = () => {
    const { userLogin, setUserLogin } = useLogin((state) => state);
    const { push } = useRouter();
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                axios
                    .post('http://localhost:4000/api/auth/login', {
                        email: userLogin.email,
                        password: userLogin.password,
                    })
                    .then(() => {
                        alert('Logged in successfully.!');
                        push('/home');
                    })
                    .catch(() => alert('Something went wrong.!'));
            }}
        >
            <div className="w-[30%] mx-auto space-y-4 py-4">
                <Input
                    label="Enter Your Email"
                    placeholder="Enter Email.."
                    value={userLogin.email}
                    onChange={(e) =>
                        setUserLogin({
                            ...userLogin,
                            email: e.target.value,
                        })
                    }
                />
                <Input
                    label="Enter Password"
                    placeholder="Enter Password.."
                    value={userLogin.password}
                    onChange={(e) =>
                        setUserLogin({
                            ...userLogin,
                            password: e.target.value,
                        })
                    }
                />
                <Button type="submit" text="Submit" colorfill="primary" />
                <Link href="/register">Don't have an account? SignUp</Link>
            </div>
        </form>
    );
};

export default Login;
