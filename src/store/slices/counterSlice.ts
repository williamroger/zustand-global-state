import type { StoreSlice } from "../Store";

type CounterStore = {
  value: number;
};

type CounterActions = {
  increment: () => void;
};

export type CounterSlice = CounterStore & CounterActions;

export const createCounterSlice: StoreSlice<CounterSlice> = (set) => ({
  value: 0,
  increment: () =>
    set((prevState) => {
      prevState.counter.value += 1;
    }),
});
