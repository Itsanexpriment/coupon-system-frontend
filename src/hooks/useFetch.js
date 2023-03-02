import axios from '../api/axios';
import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch(error => setError(error))
      .finally(() => setIsLoading(false))
  },
    [url]
  )

  return { data, isLoading, error };
}

export default useFetch;