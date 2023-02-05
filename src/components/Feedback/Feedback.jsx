import { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from '../Notification';
import Section from './Section';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const FeedbackDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export default function Feedback({ props }) {
  const { good: goodProps, bad: badProps, neutral: neutralProps } = props;

  const [good, setGood] = useState(goodProps);
  const [bad, setBad] = useState(badProps);
  const [neutral, setNeutral] = useState(neutralProps);

  const handleCount = e => {
    switch (e.target.innerText) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
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

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

  return (
    <FeedbackDiv>
      <Section title="Plese leave a feedback">
        <FeedbackOptions
          options={['good', 'bad', 'neutral']}
          onLeaveFeedback={handleCount}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <>
            <button type="button" onClick={clearState}>
              Clear Stat
            </button>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </FeedbackDiv>
  );
}

Feedback.propTypes = {
  props: PropTypes.object,
};
