export const Input = ({ label, type = "text", placeholder, value, onChange, name, required }) => {
  
  const handleInputChange = (e) => {
    let val = e.target.value;
    if (name === 'phone') {
      val = val.replace(/[^0-9]/g, ''); 
    }
    onChange({ target: { name, value: val } });
  };

  return (
    <div className="relative mb-5">
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleInputChange}
        required={required}
        placeholder={placeholder}
        className="w-full border border-gray-300 text-sm rounded-md px-4 py-3 outline-none bg-transparent text-gray-800"
      />
      <label className="absolute left-3 -top-2.5 bg-[#F7F8F9] px-1 text-[#6C25FF] text-xs font-light">
        {label}{required && <span className="text-red-500">*</span>}
      </label>
    </div>
  );
};