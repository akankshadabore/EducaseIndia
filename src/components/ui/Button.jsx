export const Button = ({ children, onClick, variant = "primary", className = "" }) => {
  const styles = {
    primary: "bg-[#6C25FF] text-white",
    secondary: "bg-[#CBC9FF] text-black",
    disabled: "bg-[#CBCBCB] text-white cursor-not-allowed"
  };

  return (
    <button
      onClick={onClick}
      className={`w-full py-3 rounded-md font-semibold transition-all ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};