import { create } from "zustand";

type AuthState = {
  token: string | null;
  userId: string | null;
  login: (userId: string, token: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem("token"),
  userId: localStorage.getItem("userId"),
  login: (userId, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    set({ userId, token });
  },
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    set({ token: null, userId: null });
  },
}));
