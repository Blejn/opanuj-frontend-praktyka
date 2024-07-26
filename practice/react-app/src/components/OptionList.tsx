import { Option } from './Option';

interface OptionsListProps {
  options: Record<string, string>;
}

export const OptionList = ({ options }: OptionsListProps) => {
  return (
    <>
      {Object.entries(options).map(([key, value]) => (
        <Option key={key} value={value} />
      ))}
    </>
  );
};
