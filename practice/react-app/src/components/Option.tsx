interface OptionProps {
  key: string;
  value: string;
}

export const Option = ({ value }: OptionProps) => {
  return (
    <option key={value} value={value} className="text-gray-700">
      {value}
    </option>
  );
};
