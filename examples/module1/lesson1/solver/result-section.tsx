interface ResultSectionProps {
  numC: number | string;
  error: string;
}

export const ResultSection = ({ numC, error }: ResultSectionProps) => {
  return (
    <div>
      Result: {numC}
      {error && <div>{error}</div>}
    </div>
  );
};
