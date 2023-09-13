import { useEffect, useState } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
}

export function useFetch<T>(url: string): FetchState<T> {
  const [fetchState, setFetchState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<T> = await axios.get(url);
        setFetchState({ data: response.data, loading: false, error: null });
      } catch (error) {
        setFetchState({ data: null, loading: false, error: null });
      }
    };

    fetchData();
  }, [url]);

  return fetchState;
}