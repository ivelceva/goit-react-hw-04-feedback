import React from 'react';
import PropTypes from 'prop-types';
import css from './Feedback.module.css';

const Feedback = ({ options, leaveFeedback }) => {
  return (
    <div className={css.container}>
      {options.map(option => (
        <div className={css.btnContainer} key={option}>
          <button
            className={css.feedbackBtn}
            onClick={() => leaveFeedback(option)}
          >
            {option}
          </button>
        </div>
      ))}
    </div>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  leaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;











