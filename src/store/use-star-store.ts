import { create } from "zustand";

interface StarStore {
    stars: number;
    setStars: (count: number) => void;
}

export const useStarStore = create<StarStore>((set) => ({
    stars: 0,
    setStars: (count) => set({ stars: count })
}));
