interface SearchTitleProps {
  name: string;
}
function SearchTitle({ name }: SearchTitleProps) {
  return <h1 className="text-2xl">Wyszukiwarka postaci{name}</h1>;
}

export default SearchTitle;
