import Link from 'next/link';
import Button from '../common/Button';
import Input from '../common/Input';
import useRegister from '../store/useRegister';
import axios from 'axios';

const Register = () => {
    const { user, setUser } = useRegister((state) => state);
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                axios
                    .post('http://localhost:4000/api/auth/register', {
                        email: user.email,
                        username: user.username,
                        password: user.password,
                    })
                    .then(() => alert('Registered successfully.!'))
                    .catch(() => alert('Something went wrong.!'));
            }}
        >
            <div className="w-[30%] mx-auto space-y-4 py-4">
                <Input
                    label="Enter Your Name"
                    placeholder="Enter Name.."
                    value={user.username}
                    onChange={(e) =>
                        setUser({
                            ...user,
                            username: e.target.value,
                        })
                    }
                />
                <Input
                    label="Enter Your Email"
                    placeholder="Enter Email.."
                    value={user.email}
                    onChange={(e) =>
                        setUser({
                            ...user,
                            email: e.target.value,
                        })
                    }
                />
                <Input
                    label="Enter Password"
                    placeholder="Enter Password.."
                    value={user.password}
                    onChange={(e) =>
                        setUser({
                            ...user,
                            password: e.target.value,
                        })
                    }
                />
                <Button type="submit" text="Submit" colorfill="primary" />
                <Link href="/login">Already have an account? sign in</Link>
            </div>
        </form>
    );
};

export default Register;
