import "./style.scss";

const Button = ({ disabled, check, children }) => {
  return (
    <button
      className="button"
      disabled={disabled}
      onClick={check}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
