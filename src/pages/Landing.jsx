import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const LandingPage = () => {
  const navigate = useNavigate();

 const circles = [
    { id: 6, top: '18%', left: '33%' },
    { id: 1, top: '25%', left: '44%' },
    { id: 2, top: '30%', left: '46%' },
    { id: 3, top: '34%', left: '54%' },
    { id: 4, top: '38%', left: '61%' },
    { id: 5, top: '42%', left: '68%' },
  ];

  return (
    <div className="relative w-full sm:max-w-90 h-screen-full  h-screen sm:min-h-190  flex flex-col justify-end p-6 bg-[#F7F8F9] mx-auto overflow-hidden border border-gray-200">
      <div className="absolute inset-0 pointer-events-none">
        {circles.map((circle) => (
          <div
            key={circle.id}
            style={{ 
              top: circle.top, 
              left: circle.left,
              transform: 'translate(-50%, -50%)' 
            }}
            className="absolute w-6 h-6 bg-[#e4aa21] hover:bg-[#2f82e6] transition-all duration-300 cursor-pointer pointer-events-auto
             rounded-full flex items-center justify-center text-white font-normal text-xs shadow-sm">
            {circle.id}
          </div>
        ))}
      </div>

      <div className="relative z-10 mb-10">
        <h1 className="text-3xl font-bold text-[#1D2226] mb-2">Welcome to PopX</h1>
        <p className="text-[#6E6E6E] text-lg leading-tight">
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
        </p>
      </div>

      <div className="relative z-10 space-y-3 mb-10">
        <Button onClick={() => navigate('/signup')}>Create Account</Button>
        <Button variant="secondary" onClick={() => navigate('/login')}>Already Registered? Login</Button>
      </div>
    </div>
  );
};