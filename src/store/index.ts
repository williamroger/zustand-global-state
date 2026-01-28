import { create } from "zustand";

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

export const useStore = create<Store & Actions>()((set) => ({
  counter: 0,
  user: {
    username: "",
  },
  updateUsername: (username: string) =>
    set(() => ({
      user: { username },
    })),
  increment: () => set((prevState) => ({ counter: prevState.counter + 1 })),
}));
