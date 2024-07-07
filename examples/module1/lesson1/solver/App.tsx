import { useState } from 'react';
import { ActivitiesSection } from './activities-section';
import { functionalities } from './functions';
import ResultSection from './result-section';
import { EntrySection } from './entry-section';

const App = () => {
  const [numA, setNumA] = useState<number>(0);
  const [numB, setNumB] = useState<number>(0);
  const [numC, setNumC] = useState<number | string>(0);
  return (
    <div>
      <EntrySection
        numA={numA}
        numB={numB}
        setNumA={setNumA}
        setNumB={setNumB}
      />
      <ActivitiesSection
        numA={numA}
        numB={numB}
        setNumC={setNumC}
        functionalities={functionalities}
      />
      <ResultSection numC={numC} />
    </div>
  );
};

export default App;
