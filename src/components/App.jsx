import React, { useState } from 'react';
import Feedback from './feedback/Feedback';
import Statistics from './feedback/Statistics';
import Section from './feedback/Section';
import Notification from './feedback/Notification';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onBtnClick = option => {
    setFeedback(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((total, value) => total + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const total = countTotalFeedback();
    return total > 0 ? Math.round((good * 100) / total) : 0;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <Feedback options={Object.keys(feedback)} leaveFeedback={onBtnClick} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            {...feedback}
            total={countTotalFeedback()}
            positive={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

export default App;
