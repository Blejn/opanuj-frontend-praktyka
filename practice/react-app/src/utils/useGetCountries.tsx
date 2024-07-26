// useGetCountries.ts
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Country } from '../types/Country';

export const useGetCountries = (
  filterOption: string,
  search: string,
  filterOptions: Record<string, string>
) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const url =
      search && filterOption && filterOption !== filterOptions['default']
        ? `${filterOption}/${search}`
        : filterOptions['default'];

    console.log('Fetching data from URL:', url); // Debug

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/${url}?status=true&fields=name,capital,currencies,population,flag,flags`
        );

        setCountries(response.data);
        setError(null);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filterOption, search, filterOptions]); // Zaktualizowane zależności

  return { countries, error, loading };
};
