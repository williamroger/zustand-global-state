import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

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
  persist(
    (set) => ({
      counter: 0,
      user: {
        username: "",
      },
      updateUsername: (username: string) =>
        set(() => ({
          user: { username },
        })),
      increment: () => set((prevState) => ({ counter: prevState.counter + 1 })),
    }),
    {
      name: "@zustand-storage", // unique name for the storage
    },
  ),
);
