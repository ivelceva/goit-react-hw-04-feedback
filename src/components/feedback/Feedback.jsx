import React from 'react';
import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export const Feedback = ({ options, leaveFeedback }) => {
  return (
    <div className={css.container}>
      {options.map(option => (
        <div className={css.btnContainer}>
          <button className={css.feedbackBtn} key={option} onClick={() => leaveFeedback(option)}>
            {option}
          </button>
        </div>
      ))}
    </div>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  leaveFeedback: PropTypes.func.isRequired,
};





