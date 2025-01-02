import './Button.scss';
/* eslint-disable react/prop-types */
const Button = ({ children, variant = 'primary', onClick, icon }) => {
  return (
    <button
      className={`button ${variant}`}
      onClick={onClick}
    >
      <span>{children}</span>
      {icon && <img src={icon} alt="icon" className="button-icon" />}
    </button>
  );
};

export default Button;
