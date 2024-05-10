import css from "./Feedback.module.css";

const Feedback = ({ feedback: { good, neutral, bad }, total, positive }) => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <p>Good: {good}</p>
      </li>
      <li className={css.item}>
        <p>Neutral: {neutral}</p>
      </li>
      <li className={css.item}>
        <p>Bad: {bad}</p>
      </li>
      <li className={css.item}>
        <p>Total: {total}</p>
      </li>
      <li className={css.item}>
        <p>Positive: {positive}%</p>
      </li>
    </ul>
  );
};

export default Feedback;
