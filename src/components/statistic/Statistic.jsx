import PropTypes from 'prop-types';

import css from './statistic.module.css';

function Statistic({ ...props }) {
  const items = Object.keys(props);
  const values = Object.values(props);

  const elem = items.map((item, index) => {
    return (
      <p key={index}>
        {item}: {values[index]}
      </p>
    );
  });
  const positive = (
    <p
      key={elem.length - 1}
      className={props.positivePercentage < 50 ? css.negative : css.positive}
    >
      Positive feedback:{' '}
      {props.positivePercentage === 0 ? 0 : `${props.positivePercentage}%`}
    </p>
  );

  elem.splice(elem.length - 1, 1, positive);

  return <div className={css.statsWraper}>{elem}</div>;
}

export default Statistic;

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
