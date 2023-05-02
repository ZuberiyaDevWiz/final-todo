import { create } from "zustand";
import { TypeUser } from "./TypeUser";
import { persist, createJSONStorage } from "zustand/middleware";

interface IUser {
  user: TypeUser | undefined;
  token: string | undefined;
  setAuth: (token: string, user: TypeUser) => void;
}

const useUser = create<IUser>()(
  persist(
    (set) => ({
      token: undefined,
      user: undefined,
      setAuth: (token, user) => set({ token, user }),
    }),

    {
      name: "login",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useUser;
