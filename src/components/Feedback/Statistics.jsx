import React from 'react';
// import Section from './Section';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const FeedbackBodyDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {/* <Section title="Statistics" /> */}
      <FeedbackBodyDiv>
        <div>Good: {good}</div>
        <div>Neutral: {neutral}</div>
        <div>Bad: {bad}</div>

        {total > 0 ? (
          <>
            <div>Total: {total}</div>
            <div>
              Percentage:{' '}
              {positivePercentage !== Infinity ? positivePercentage : 0}%
            </div>
          </>
        ) : (
          ''
        )}
      </FeedbackBodyDiv>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  neutral: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bad: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  positivePercentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Statistics;
