import { useState, useRef, useMemo } from 'react';
import { useAuth } from '../context/AuthContext';

export const ProfilePage = () => {
  const { user } = useAuth();
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

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
    <div className="bg-[#F7F8F9] min-h-screen max-w-md mx-auto flex flex-col font-sans">
      <div className="bg-white p-5 border-b border-gray-200">
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
              className="absolute bottom-1 right-1 bg-[#6C25FF] p-1.5 rounded-full border-2 border-white hover:bg-[#5a1ee0] transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
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
      <div className="grow border-t border-dashed border-gray-300 mt-120 bg-[#F7F8F9]"></div>
    </div>
  );
};
