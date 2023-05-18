import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = event => {
    switch (event.target.value) {
      case 'Good':
        setGood(good + 1);
        break;

      case 'Neutral':
        setNeutral(neutral + 1);
        break;

      case 'Bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    let totalFeedback = 0;
    // const { good, neutral, bad } = this.state;
    totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    // const { good } = this.state;
    const totalFeedback = countTotalFeedback();
    let percentage =
      totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
    return percentage;
  };

  // render() {
  //   const { good, neutral, bad } = this.state;
  const options = ['Good', 'Neutral', 'Bad'];
  return (
    <div>
      <section title="Please, leave feedback!">
        <FeedbackOptions
          options={options}
          clickFeedback={addFeedback}
        ></FeedbackOptions>
      </section>
      <section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistics>
      </section>
    </div>
  );
}
export default App;
