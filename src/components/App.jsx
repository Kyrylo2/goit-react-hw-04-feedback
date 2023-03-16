import React from 'react';
import Feedback from '../components/Feedback';

const App = ({ good = 0, bad = 0, neutral = 0 }) => {
  return (
    <Feedback initialGood={good} initialBad={bad} initialNeutral={neutral} />
  );
};

export default App;
