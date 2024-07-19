import { GenderFilter } from './GenderFilter';
import { Input } from './Input';
import { SortBy } from './SortBy';

type SearchFormProps = {
  name: string;
  setName: (name: string) => void;
  gender: string;
  setGender: (gender: string) => void;
  sortOption: string;
  setSortOption: (sortOption: string) => void;
};

function SearchForm({
  name,
  setName,
  gender,
  setGender,
  sortOption,
  setSortOption,
}: SearchFormProps) {
  return (
    <form className="space-x-4 flex items-end justify-center">
      <Input name={name} setName={setName} title="name" />
      <GenderFilter gender={gender} setGender={setGender} />

      <SortBy sortOption={sortOption} setSortOption={setSortOption} />
    </form>
  );
}

export default SearchForm;
