import axios from "axios";
import { useState } from "react";
import useUser from "../../store/useUser";

const Login = () => {
  const { setAuth } = useUser();
  const [login, setLogin] = useState<{
    username: string;
    password: string;
  }>({
    username: "",
    password: "",
  });

  return (
    <div className="space-y-6">
      <h1 className="text-center  text-xl font-bold">Login</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .post(`http://localhost:4000/api/auth/login`, {
              username: login.username,
              password: login.password,
            })
            .then((res) => {
              const { token, user } = res.data.data;
              setAuth(token, user);
            });
        }}
      >
        <div className="flex flex-col space-y-4 w-[30%] mx-auto">
          <input
            type="number"
            placeholder="Enter you mobile number"
            className="border-[1px] border-black py-2 px-2 rounded-md"
            value={login.username}
            onChange={(e) => setLogin({ ...login, username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Enter you password"
            className="border-[1px] border-black py-2 px-2 rounded-md"
            value={login.password}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
          <button
            type="submit"
            className="bg-black py-2 text-white font-bold rounded"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
