import useSWR from 'swr';
import fetcher from '../utils/fetcher';

const useTasks = () => {
  const { data, error } = useSWR(process.env.REACT_APP_API, fetcher);

  return {
    data,
    isLoading: !error && !data,
    hasError: error,
  };
};

export default useTasks;
