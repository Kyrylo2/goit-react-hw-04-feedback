import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const FeedbackButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackButtons onClick={onLeaveFeedback}>
      {options.map((elem, index) => {
        return (
          <button type="button" key={index}>
            {elem}
          </button>
        );
      })}
    </FeedbackButtons>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
