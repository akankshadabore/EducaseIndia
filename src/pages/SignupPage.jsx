import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';

export const SignupPage = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    email: '', 
    password: '', 
    company: '', 
    isAgency: 'yes' 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
    navigate('/profile');
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-[#F7F8F9] min-h-screen border border-gray-100 shadow-sm flex flex-col">
      
      <div className="flex items-start gap-4 mb-8 mt-4">
        <h1 className="text-3xl font-bold text-[#1D2226] leading-tight">
          Create your <br/> PopX account
        </h1>
        <div className="mt-2 ml-0 w-7 h-7 bg-[#E8B94B] rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0 shadow-sm">
          1
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col grow">
        <div className="space-y-1">
          <Input 
            label="Full Name" 
            name="name"
            type='text'
            placeholder="Enter Your Name"
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
          <Input 
            label="Phone number" 
            name="phone" 
            type="tel"
            placeholder="Enter Your Fhone Number"
            value={formData.phone} 
            onChange={handleChange} 
            required 
          />
          <Input 
            label="Email address" 
            name="email" 
            type="email"
            placeholder="Enter Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          <Input 
            label="Password" 
            name="password" 
            type="password"
            placeholder="Enter Your Password"
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
          <Input 
            label="Company name" 
            name="company"
            placeholder="Enter Your Company Name"
            value={formData.company} 
            onChange={handleChange} 
          />
        </div>
        
        <div className="mb-10">
          <p className="mb-3 text-sm font-medium">Are you an Agency?<span className="text-red-500">*</span></p>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input 
                type="radio" 
                name="isAgency" 
                value="yes" 
                checked={formData.isAgency === 'yes'}
                onChange={handleChange}
                className="accent-[#6C25FF] h-5 w-5" 
              /> 
              <span className="text-sm font-medium">Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <input 
                type="radio" 
                name="isAgency" 
                value="no" 
                checked={formData.isAgency === 'no'}
                onChange={handleChange}
                className="accent-[#6C25FF] h-5 w-5" 
              /> 
              <span className="text-sm font-medium">No</span>
            </label>
          </div>
        </div>
        
        <div className="mt-auto pb-4">
          <Button type="submit" className="bg-[#6C25FF] hover:bg-[#5a1ee0] py-3.5">
            Create Account
          </Button>
        </div>
      </form>
    </div>
  );
};
