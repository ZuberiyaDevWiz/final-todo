import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [register, setRegister] = useState<{
    email: string;
    userName: string;
    phoneNumber: string;
    password: string;
    rePassword: string;
  }>({
    email: "",
    userName: "",
    phoneNumber: "",
    password: "",
    rePassword: "",
  });

  return (
    <div className="space-y-6">
      <h1 className="text-center  text-xl font-bold">Register</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios.post(`http://localhost:4000/api/auth/register`, {
            email: register.email,
            userName: register.userName,
            phoneNumber: register.phoneNumber,
            password: register.password,
            rePassword: register.rePassword,
          });
        }}
      >
        <div className="flex flex-col space-y-4 w-[30%] mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="border-[1px] border-black py-2 px-2 rounded-md"
            value={register.email}
            onChange={(e) =>
              setRegister({ ...register, email: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Enter your name"
            className="border-[1px] border-black py-2 px-2 rounded-md"
            value={register.userName}
            onChange={(e) =>
              setRegister({ ...register, userName: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Enter your mobile number"
            className="border-[1px] border-black py-2 px-2 rounded-md"
            value={register.phoneNumber}
            onChange={(e) =>
              setRegister({ ...register, phoneNumber: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Enter new password"
            className="border-[1px] border-black py-2 px-2 rounded-md"
            value={register.password}
            onChange={(e) =>
              setRegister({ ...register, password: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Re-enter your password"
            className="border-[1px] border-black py-2 px-2 rounded-md"
            value={register.rePassword}
            onChange={(e) =>
              setRegister({ ...register, rePassword: e.target.value })
            }
          />
          <button
            type="submit"
            className="bg-black py-2 text-white font-bold rounded"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
