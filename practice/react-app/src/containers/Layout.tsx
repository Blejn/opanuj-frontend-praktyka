// Layout.tsx
import React from 'react';
import { Input } from '../components/Input';
import { useFilterCountries } from '../utils/useFilterCountries';
import { Select } from '../components/Select';
import { OptionList } from '../components/OptionList';
import { Countries } from '../components/Countries';

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { handleSearch, search, filterOption, handleCountries, filterOptions } =
    useFilterCountries();

  return (
    <div className="max-w-5xl mx-auto p-4 bg-white shadow-md rounded-md">
      <form>
        <Select value={filterOption} onChange={handleCountries}>
          <OptionList options={filterOptions} />
        </Select>
        <Input
          name="Wyszukiwanie"
          label="Wyszukiwanie"
          onChange={handleSearch}
          value={search}
        />
      </form>

      <Countries
        search={search}
        filterOption={filterOption}
        filterOptions={filterOptions}
      />
      {children}
    </div>
  );
};
