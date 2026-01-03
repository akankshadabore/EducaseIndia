import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({
      name: "", 
      email: credentials.email,
      phone: "9876543210",
      company: "PopX Inc"
    });
    navigate('/profile');
  };

  const isFormEmpty = !credentials.email || !credentials.password;

  return (
    <div className="flex flex-col min-h-screen p-6 bg-white max-w-md mx-auto">
      <div className="mt-4 mb-8">
        <h1 className="text-3xl font-bold text-[#1D2226] mb-2 leading-tight">
          Signin to your <br /> PopX account
        </h1>
        <p className="text-[#6E6E6E] text-lg w-3/4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <form onSubmit={handleLogin} className="space-y-2">
        <Input 
          label="Email Address" 
          name="email"
          type="email"
          placeholder="Enter email address"
          value={credentials.email}
          onChange={handleChange}
        />
        
        <Input 
          label="Password" 
          name="password"
          type="password"
          placeholder="Enter password"
          value={credentials.password}
          onChange={handleChange}
        />

        <div className="pt-4">
          <Button 
            type="submit"
            variant={isFormEmpty ? "disabled" : "primary"}
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};