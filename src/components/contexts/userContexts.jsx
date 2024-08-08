import create from "zustand";

const useUserStore = create((set) => ({
  currentUser: null, // Estado inicial
  loading: false,
  error: null,
  setCurrentUser: (user) => set({ currentUser: user, loading: false }),
  clearCurrentUser: () => set({ currentUser: null, loading: false }),
  setLoading: (isLoading) => set({ loading: isLoading }),
  setError: (error) => set({ error }),
}));
export default useUserStore;
