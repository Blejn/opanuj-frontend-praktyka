import React, { ChangeEvent } from 'react';

interface SelectProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}

export const Select = ({ value, onChange, children }: SelectProps) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-indigo-300"
    >
      {children}
    </select>
  );
};
