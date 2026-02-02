import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type Store = {
  counter: number;
  user: {
    name: string;
    email: string;
    username: string;
    address: {
      street: string;
      city: string;
      country: string;
    };
  };
};

type Actions = {
  increment: () => void;
  updateUsername: (username: string) => void;
};

export const useStore = create<Store & Actions>()(
  devtools(
    immer((set) => ({
      counter: 0,
      user: {
        username: "@william",
        name: "William Roger",
        email: "william@email.com",
        address: {
          street: "123 Main St",
          city: "Metropolis",
          country: "Freedonia",
        },
      },
      updateUsername: (username: string) =>
        set((prevState) => {
          prevState.user.username = username;
        }),
      increment: () =>
        set((prevState) => {
          prevState.counter += 1;
        }),
    })),
    {
      name: "ZustandStore",
      enabled: import.meta.env.DEV,
      anonymousActionType: "ZustandAction",
    },
  ),
);
