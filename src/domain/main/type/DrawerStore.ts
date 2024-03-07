import { create } from "zustand";

type DrawerStoreType = {
  isDrawerOpen: boolean;
  switchDrawerOpen: () => void;
};

export const useDrawerStore = create<DrawerStoreType>((set, get) => ({
  isDrawerOpen: false,
  switchDrawerOpen: () => {
    set({ isDrawerOpen: !get().isDrawerOpen });
  },
}));
