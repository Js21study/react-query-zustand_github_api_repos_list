import { QueryFunctionContext, useQuery } from 'react-query';
import api from '../api/github';
import { IRepo } from '../@types/IRepo';

async function fetchRepos(ctx: QueryFunctionContext) {
  const [_, githubUser] = ctx.queryKey;
  const { data } = await api.get<IRepo[]>(`/users/${githubUser}/repos`);
  return data;
}

export function useFetchRepositories(githubUser: string) {
  return useQuery({ queryFn: fetchRepos, queryKey: ['repos', githubUser] });
}
