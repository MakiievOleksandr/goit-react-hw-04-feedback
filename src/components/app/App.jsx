import { useState } from 'react';
import Section from '../section/Section';
import FeedbackOptions from '../feedbackOptions/FeedbackOptions';
import Statistic from '../statistic/Statistic';

import css from './app.module.css';

export default function AppHook() {
  const options = ['good', 'neutral', 'bad'];

  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = state;

  const total = good + neutral + bad;

  const handleChange = ({ target }) => {
    const { name } = target;

    setState(prevState => {
      const value = prevState[name];
      return { ...prevState, [name]: value + 1 };
    });
  };

  const countPositiveFeedbackPercentage = () => {
    const postiveFeedbackPercentage = (good * 100) / total;
    return Math.floor(postiveFeedbackPercentage);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleChange} />
      </Section>

      {total > 0 ? (
        <Section title="Statistic">
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <h4 className={css.alterTitle}>No feedback</h4>
      )}
    </>
  );
}
