import css from "./Options.module.css";

function Options({ type, onClick }) {
  return (
    <button className={css.btn} onClick={() => onClick(type)}>
      {type}
    </button>
  );
}

export default Options;
