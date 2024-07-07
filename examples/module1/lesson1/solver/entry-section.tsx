import React, { memo } from 'react';

interface EntrySectionProps {
  numA: number;
  numB: number;
  setNumA: (num: number) => void;
  setNumB: (num: number) => void;
}

export const EntrySection = ({
  numA,
  numB,
  setNumA,
  setNumB,
}: EntrySectionProps) => {
  return (
    <div className="grid grid-cols-2 gap-x-4">
      <input
        type="number"
        className="rounded-md shadow-md p-4"
        value={numA}
        onChange={(e) => setNumA(parseFloat(e.target.value))}
      />
      <input
        type="number"
        className="rounded-md shadow-md p-4"
        value={numB}
        onChange={(e) => setNumB(parseFloat(e.target.value))}
      />
    </div>
  );
};
