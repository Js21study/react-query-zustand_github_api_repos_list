import './App.css';
import { Card } from './components/Card';
import { useFetchRepositories } from './hooks/useRepos';
import { useFavoriteRepositories } from './store/favoritePepos';

function App() {
  const { favoriteReposIds } = useFavoriteRepositories();
  const { data, isLoading } = useFetchRepositories('Js21study');

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(data);

  return (
    <>
      {data?.map((repo) => (
        <Card key={repo.id} repo={repo} isFavorite={favoriteReposIds.includes(repo.id)} />
      ))}
    </>
  );
}

export default App;
