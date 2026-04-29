import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm rounded-full bg-yellow-500 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed ";

  const styles = {
    primary: base + "px-3.5 py-2.5 md:px-4.5 md:py-3.5",
    secondary:
      "inline-block text-sm rounded-full font-semibold tracking-wide text-stone-400 uppercase transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:ring-2 focus:ring-stone-200 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed border-2 border-stone-300 px-3.5 py-2 md:px-4.5 md:py-3",
    small:
      base +
      "px-3 py-2 md:px-5 md:py-2.5 text-xs disabled:cursor-not-allowed disabled:bg-stone-200 disabled:text-stone-500",
    round: base + "px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
