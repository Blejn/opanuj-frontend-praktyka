interface InputProps {
  title: string;
  name: string;
  setName: (name: string) => void;
}
export const Input = ({ title, name, setName }: InputProps) => {
  return (
    <label className="flex flex-col">
      {title}
      <input
        className="border h-7 mt-1 indent-2"
        type="text"
        placeholder="Rick Sanchez..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </label>
  );
};
