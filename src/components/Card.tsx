import React from 'react';
import { IRepo } from '../@types/IRepo';
import { useFavoriteRepositories } from '../store/favoritePepos';

type CartType = {
  repo: IRepo;
  isFavorite: boolean;
};
export const Card: React.FC<CartType> = ({ repo, isFavorite }) => {
  const addFavoriteRepo = useFavoriteRepositories((state) => state.addFavoriteRepo);
  const removeFavoriteRepo = useFavoriteRepositories((state) => state.removeFavoriteRepo);

  function onClickBtn() {
    isFavorite ? removeFavoriteRepo(repo.id) : addFavoriteRepo(repo.id);
  }
  return (
    <div>
      <br />
      <h1>{repo.name}</h1>
      <button className={isFavorite ? 'isFavBtn' : ''} onClick={() => onClickBtn()}>
        {isFavorite ? 'dislike' : 'like'}
      </button>
      <hr />
    </div>
  );
};
