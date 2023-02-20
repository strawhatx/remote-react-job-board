import create from "zustand";

export const useModalStore = create((set) => ({
  isMobileDrawerOpen: false,

  setIsMobileDrawerOpen: (value = false) => set({ isMobileDrawerOpen: value }),
}));
