// useFilterCountries.ts
import { ChangeEvent, useState } from 'react';

export const useFilterCountries = () => {
  const [filterOption, setFilterOption] = useState<string>('all');
  const [search, setSearch] = useState<string>('');

  const handleCountries = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilterOption(event.target.value);
    console.log('Filter option:', event.target.value); // Debug
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    console.log('Search:', event.target.value); // Debug
  };

  return {
    handleSearch,
    search,
    filterOption,
    handleCountries,
    filterOptions,
  };
};

export const filterOptions: Record<string, string> = {
  default: 'all',
  capital: 'capital',
  countryName: 'name',
  currency: 'currency',
  language: 'lang',
};
