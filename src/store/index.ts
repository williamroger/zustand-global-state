import { create } from "zustand";

export const useStore = create((set) => ({
  counter: 0,
  increment: () => set((prevState) => ({ counter: prevState.counter + 1 })),
}));
