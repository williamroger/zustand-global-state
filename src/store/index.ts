import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

type Store = {
  counter: number;
  user: {
    username: string;
  };
};

type Actions = {
  increment: () => void;
  updateUsername: (username: string) => void;
};

export const useStore = create<Store & Actions>()(
  devtools(
    persist(
      (set) => ({
        counter: 0,
        user: {
          username: "",
        },
        updateUsername: (username: string) =>
          set(
            () => ({
              user: { username },
            }),
            false,
            "updateUsername",
          ),
        increment: () =>
          set(
            (prevState) => ({ counter: prevState.counter + 1 }),
            false,
            "increment",
          ),
      }),
      {
        name: "@zustand-storage", // unique name for the storage
      },
    ),
    {
      name: "ZustandStore",
      enabled: import.meta.env.DEV,
      anonymousActionType: "ZustandAction",
    },
  ),
);
