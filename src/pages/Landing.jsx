import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const LandingPage = () => {
  const navigate = useNavigate();

  const circles = [
    { id: 6, top: '12%', left: '15%' },
    { id: 1, top: '25%', left: '38%' },
    { id: 2, top: '32%', left: '42%' },
    { id: 3, top: '41%', left: '58%' },
    { id: 4, top: '48%', left: '73%' },
    { id: 5, top: '58%', left: '87%' },
  ];

  return (
    <div className="relative flex flex-col justify-end min-h-screen p-6 bg-[#F7F8F9] max-w-md mx-auto overflow-hidden border border-gray-100 shadow-lg">
      
      <div className="absolute inset-0 pointer-events-none">
        {circles.map((circle) => (
          <div
            key={circle.id}
            style={{ 
              top: circle.top, 
              left: circle.left,
              transform: 'translate(-50%, -50%)' 
            }}
            className="absolute w-8 h-8 bg-[#E8B94B] hover:bg-[#2f82e6] rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-sm">
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
        <Button onClick={() => navigate('/signup')}>
          Create Account
        </Button>
        <Button variant="secondary" onClick={() => navigate('/login')}>
          Already Registered? Login
        </Button>
      </div>
      
    </div>
  );
};