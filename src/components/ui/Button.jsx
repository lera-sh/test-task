const Button = ({ children, className = '', ...props }) => {
  const baseStyles = "flex justify-center rounded-md items-center text-white hover:opacity-70 duration-300 max-laptop:text-xxs";

  return (
    <button className={`${baseStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button
