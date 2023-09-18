import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type favoriteReposType = {
  favoriteReposIds: number[];
  addFavoriteRepo: (id: number) => void;
  removeFavoriteRepo: (id: number) => void;
};
export const useFavoriteRepositories = create(
  persist<favoriteReposType>(
    (set) => ({
      favoriteReposIds: [],
      addFavoriteRepo: (id: number) => {
        set((state) => ({
          favoriteReposIds: [...state.favoriteReposIds, id],
        }));
      },
      removeFavoriteRepo: (id: number) => {
        set((state) => ({
          favoriteReposIds: state.favoriteReposIds.filter((repoId) => repoId !== id),
        }));
      },
    }),
    {
      name: 'fav-repos',
    },
  ),
);
