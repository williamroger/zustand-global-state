import type { StoreSlice } from "../Store";

type UserStore = {
  data: {
    name: string;
    email: string;
    username: string;
  };
};

type UserActions = {
  updateUsername: (username: string) => void;
};

export type UserSlice = UserStore & UserActions;

export const createUserSlice: StoreSlice<UserSlice> = (set) => ({
  data: {
    username: "@william",
    name: "William Roger",
    email: "william@email.com",
  },
  updateUsername: (username: string) =>
    set((prevState) => {
      prevState.user.data.username = username;
    }),
});
