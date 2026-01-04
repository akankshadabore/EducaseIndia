import { useEffect, useState, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { IoCamera } from "react-icons/io5";

export const ProfilePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (!user || !user.email) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user || !user.email) {
    return null; 
  }

  const displayName = useMemo(() => {
    if (user?.name?.trim()) return user.name.trim();
    if (user?.email?.includes('@')) return user.email.split('@')[0];
    return 'User';
  }, [user?.name, user?.email]);

  const firstInitial = displayName.charAt(0).toUpperCase();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="bg-[#F7F8F9] h-screen sm:min-h-190 w-full sm:max-w-90 mx-auto flex flex-col font-sans overflow-hidden border border-gray-200">
      <div className="bg-white p-5 shadow-xs">
        <h2 className="text-xl font-medium text-[#1D2226]">Account Settings</h2>
      </div>
      <div className="p-5 border-b border-dashed border-gray-300">
        <div className="flex items-center gap-5 mb-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center border-2 border-white shadow-sm">
              {profileImage ? (
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-4xl font-bold text-[#6C25FF]">
                  {firstInitial}
                </span>
              )}
            </div>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleImageChange} 
              accept="image/*" 
              className="hidden" 
            />
            <button 
              onClick={triggerFileInput}
              className="absolute bottom-1 right-1 bg-[#6C25FF] p-1.5 rounded-full border-2 border-white hover:bg-[#5a1ee0] transition-colors flex items-center justify-center"
            >
              <IoCamera className="w-3.5 h-3.5 text-white" />
            </button>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-lg text-[#1D2226] leading-tight">
              {displayName}
            </h3>
            <p className="text-sm text-[#1D2226] opacity-80">
              {user?.email || 'No email set'}
            </p>
          </div>
        </div>
        <p className="text-[15px] text-[#1D2226] leading-relaxed opacity-90">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
      <div className="grow border-t border-dashed border-gray-300 mt-140 sm:mt-110 bg-[#F7F8F9]"></div>
    </div>
  );
};