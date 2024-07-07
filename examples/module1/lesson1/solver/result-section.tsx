import React, { memo } from 'react';

interface ResultSectionProps {
  numC: number | string;
}

const ResultSection = ({ numC }: ResultSectionProps) => {
  return <div>Result: {numC}</div>;
};

export default memo(ResultSection);
