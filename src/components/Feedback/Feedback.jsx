import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from '../Notification';
import Section from './Section';

const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export default function Feedback({
  good: initialGood,
  bad: initialBad,
  neutral: initialNeutral,
}) {
  const [good, setGood] = useState(initialGood);
  const [bad, setBad] = useState(initialBad);
  const [neutral, setNeutral] = useState(initialNeutral);

  const handleCount = option => {
    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      default:
        return;
    }
  };

  const clearState = () => {
    setGood(0);
    setBad(0);
    setNeutral(0);
  };

  const total = good + bad + neutral;

  const positivePercentage = Math.round((good / total) * 100);

  return (
    <FeedbackContainer>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={['good', 'bad', 'neutral']}
          onLeaveFeedback={handleCount}
        />
      </Section>

      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback yet" />
        ) : (
          <>
            <button type="button" onClick={clearState}>
              Clear Stats
            </button>
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={total}
              positivePercentage={positivePercentage}
            />
          </>
        )}
      </Section>
    </FeedbackContainer>
  );
}

Feedback.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
};
