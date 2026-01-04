import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

export const SignupPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', password: '', company: '', isAgency: 'yes' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('registeredUser', JSON.stringify(formData));
    login(formData);
    toast.success("Account created! Welcome to PopX.");
    navigate('/profile');
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-[#F7F8F9] min-h-screen flex flex-col">
      <div className="flex items-start gap-4 mb-8 mt-4">
        <h1 className="text-3xl font-bold text-[#1D2226] leading-tight">Create your <br/> PopX account</h1>
        <div className="mt-2 w-7 h-7 bg-[#E8B94B] hover:bg-[#2f82e6] rounded-full flex items-center justify-center text-white font-semibold text-sm">1</div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col grow">
        <div className="space-y-1">
          <Input label="Full Name" name="name" type='text' placeholder="Enter Your Name" value={formData.name} onChange={handleChange} required />
          <Input label="Phone number" name="phone" placeholder="Enter Your Fhone Number" value={formData.phone} onChange={handleChange} required />
          <Input label="Email address" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} required />
          <Input label="Password" name="password" type="password" showStrength={true} placeholder="Enter Your Password" value={formData.password} onChange={handleChange} required />
          <Input label="Company name" name="company" placeholder="Enter Your Company Name" value={formData.company} onChange={handleChange} />
        </div>
        <div className="mb-10 pt-4">
          <p className="mb-3 text-sm font-medium">Are you an Agency?<span className="text-red-500">*</span></p>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="isAgency" value="yes" checked={formData.isAgency === 'yes'} onChange={handleChange} className="accent-[#6C25FF] h-5 w-5" /> Yes
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="isAgency" value="no" checked={formData.isAgency === 'no'} onChange={handleChange} className="accent-[#6C25FF] h-5 w-5" /> No
            </label>
          </div>
        </div>
        <div className="mt-auto pb-4">
          <Button type="submit">Create Account</Button>
        </div>
      </form>
    </div>
  );
};