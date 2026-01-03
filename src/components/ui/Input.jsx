import { useState, useEffect } from 'react';
export const Input = ({ label, type = "text", placeholder, value, onChange, name, required }) => {
  const [strengthMessage, setStrengthMessage] = useState("");
  const [msgColor, setMsgColor] = useState("");
  useEffect(() => {
    if (name !== 'password') return;
    const timer = setTimeout(() => {
      const len = value.length;
      if (len === 0) {
        setStrengthMessage("");
        setMsgColor("");
      } else if (len < 3) {
        setStrengthMessage("Week Password");
        setMsgColor("text-red-500");
      } else if (len <= 5) {
        setStrengthMessage("Medium Password");
        setMsgColor("text-orange-500");
      } else if (len > 5 && len <= 8) {
        setStrengthMessage("Strong Password");
        setMsgColor("text-green-500");
      } else {
        setStrengthMessage("Very Strong Password");
        setMsgColor("text-green-700");
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [value, name]);
  const handleInputChange = (e) => {
    let val = e.target.value;
    if (name === 'phone') val = val.replace(/[^0-9]/g, '');
    if (name === 'name') val = val.replace(/[^a-zA-Z\s]/g, '');
    if (name === 'email') val = val.replace(/\s/g, '');
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
        className="w-full border border-gray-300 text-sm rounded-md px-4 py-3 outline-none bg-transparent text-gray-800 transition-all focus:border-[#6C25FF]"
      />
      <label className="absolute left-3 -top-2.5 bg-[#F7F8F9] px-1 text-[#6C25FF] text-xs font-light">
        {label}{required && <span className="text-red-500">*</span>}
      </label>
      {name === 'password' && strengthMessage && (
        <p className={`text-[10px] mt-1 ml-1 font-bold ${msgColor} italic`}>
          {strengthMessage}
        </p>
      )}
    </div>
  );
};

