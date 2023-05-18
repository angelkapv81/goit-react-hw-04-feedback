import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>
  total !== 0 ? (
    <div className={style.statisticsBox}>
      <div className={style.statisticsList}>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
      </div>
      <p className={style.statisticsTitle}>
        Positive feedback: {positivePercentage}%
      </p>
    </div>
  ) : (
    <p className={style.statisticsTitle}>No feedback given</p>
  );

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
