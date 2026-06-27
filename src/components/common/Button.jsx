const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="w-full rounded-lg bg-black py-3 font-semibold text-white hover:bg-gray-800 transition"
    >
      {children}
    </button>
  );
};

export default Button;