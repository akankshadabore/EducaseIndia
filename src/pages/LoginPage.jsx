import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (!registeredUser) {
      toast.error("Access Denied: No account found. Please sign up first.", {
        style: { borderRadius: '8px', background: '#333', color: '#fff' }
      });
      return;
    }

    if (registeredUser.email === credentials.email && registeredUser.password === credentials.password) {
      login(registeredUser);
      toast.success("Login Successful! Redirecting...");
      navigate('/profile');
    } else {
      toast.error("Invalid credentials. Please verify your details.");
    }
  };

  const isFormEmpty = !credentials.email || !credentials.password;

  return (
    <div className="flex flex-col w-full max-w-90 h-screen-full min-h-190 p-6 bg-[#F7F8F9] overflow-hidden border border-gray-200 mx-auto">
      <div className="mt-4 mb-8">
        <h1 className="text-3xl font-bold text-[#1D2226] mb-2 leading-tight">Signin to your <br /> PopX account</h1>
        <p className="text-[#6E6E6E] text-lg w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      </div>
      <form onSubmit={handleLogin} className="space-y-2">
        <Input label="Email Address" name="email" type="email" placeholder="Enter email address" value={credentials.email} onChange={handleChange} />
        <Input label="Password" name="password" type="password" placeholder="Enter password" value={credentials.password} onChange={handleChange} />
        <div className="pt-4">
          <Button type="submit" variant={isFormEmpty ? "disabled" : "primary"}>Login</Button>
        </div>
      </form>
    </div>
  );
};