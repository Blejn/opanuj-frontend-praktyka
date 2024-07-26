import { useGetCountries } from '../utils/useGetCountries';
import { Country } from '../types/Country';

interface CountriesProps {
  search: string;
  filterOption: string;
  filterOptions: Record<string, string>;
}

export const Countries = ({
  search,
  filterOption,
  filterOptions,
}: CountriesProps) => {
  const { countries, error, loading } = useGetCountries(
    filterOption,
    search,
    filterOptions
  );

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <ol className="grid grid-cols-1 gap-4 list-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {countries.map((country: Country) => (
        <li key={country.name.common} className="flex flex-col items-center">
          <h3>{country.name.common}</h3>
          <img src={country.flags.png} alt={country.name.common} />
        </li>
      ))}
    </ol>
  );
};
