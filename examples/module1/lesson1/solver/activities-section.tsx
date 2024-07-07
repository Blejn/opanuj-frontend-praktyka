interface ActivitiesSectionProps {
  numA: number;
  numB: number;
  setNumC: (value: number | string) => void;
  functionalities: {
    function: (a: number, b: number) => number;
    mark: string;
  }[];
}

export const ActivitiesSection = ({
  numA,
  numB,
  setNumC,
  functionalities,
}: ActivitiesSectionProps) => {
  const doWork = (func: (a: number, b: number) => number) => {
    setNumC(func(numA, numB));
  };
  return (
    <div className="grid grid-cols-4 gap-x-4 my-4">
      {functionalities.map((func) => {
        return (
          <button
            key={func.mark}
            className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
            onClick={() => doWork(func.function)}
          >
            {func.mark}
          </button>
        );
      })}
    </div>
  );
};
