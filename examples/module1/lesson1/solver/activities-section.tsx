import { functionalities } from './functions';
import { Operation } from './types';

interface ActivitiesSectionProps {
  numA: number;
  numB: number;
  setNumC: (value: number | string) => void;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

export const ActivitiesSection = ({
  numA,
  numB,
  setNumC,
  setError,
}: ActivitiesSectionProps) => {
  const calculate = (operation: Operation) => {
    if (operation === Operation.DIVIDE && numB === 0) {
      setError('Please do not devide by zero');
    } else {
      setError('');
      setNumC(functionalities[operation].func(numA, numB));
    }
  };

  return (
    <div className="grid grid-cols-4 gap-x-4 my-4">
      {Object.entries(functionalities).map(([operation, { mark }]) => {
        return (
          <button
            key={mark}
            className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
            onClick={() => calculate(operation as Operation)}
          >
            {mark}
          </button>
        );
      })}
    </div>
  );
};
