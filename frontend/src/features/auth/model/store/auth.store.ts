import { create } from "zustand";

type AuthState = {
  isLoggedIn: boolean;
  userId: string | null;
  login: (userId: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  userId: null,
  login: (userId: string) => set({ isLoggedIn: true, userId }),
  logout: () => set({ isLoggedIn: false, userId: null }),
}));
