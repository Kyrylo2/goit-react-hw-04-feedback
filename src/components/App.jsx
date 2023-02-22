import React from 'react';
import Feedback from '../components/Feedback';

const App = ({ good = 0, bad = 0, neutral = 0 }) => {
  return <Feedback props={{ good, bad, neutral }} />;
};

export default App;
