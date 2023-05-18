import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, clickFeedback }) => (
  <div className={style.feedback}>
    <p className={style.feedbackTitle}>Please leave feedback</p>
    {options.map(option => (
      <button
        key={option}
        type="button"
        className={style.feedbackItem}
        value={option}
        onClick={clickFeedback}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  clickFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
