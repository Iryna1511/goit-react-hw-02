import css from "./Options.module.css";

function Options({ handleFeedback, handleReset, total }) {
  return (
    <>
      <button
        type="button"
        className={css.btn}
        onClick={() => handleFeedback("good")}
      >
        Good
      </button>
      <button
        type="button"
        className={css.btn}
        onClick={() => handleFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        type="button"
        className={css.btn}
        onClick={() => handleFeedback("bad")}
      >
        Bad
      </button>
      {total !== 0 && (
        <button className={css.btn} type="button" onClick={handleReset}>
          Reset
        </button>
      )}
    </>
  );
}

export default Options;
