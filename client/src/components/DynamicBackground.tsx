import { useEffect, useState } from 'react';

const DynamicBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setWindowHeight(window.innerHeight);
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate scroll progress (0 to 1)
  const scrollProgress = Math.min(scrollY / (document.documentElement.scrollHeight - windowHeight), 1);
  
  // Create dynamic gradient stops based on scroll
  const gradientStops = [
    // Top section - deep black with subtle red glow
    {
      position: Math.max(0, 20 - scrollProgress * 50),
      color: 'rgba(139, 0, 0, 0.3)', // Dark red
      size: 40 + scrollProgress * 20
    },
    // Middle section - shifting red accent
    {
      position: 50 + Math.sin(scrollProgress * Math.PI) * 20,
      color: 'rgba(220, 38, 38, 0.2)', // Brighter red
      size: 30 + scrollProgress * 15
    },
    // Bottom section - warm red glow
    {
      position: Math.min(100, 80 + scrollProgress * 30),
      color: 'rgba(185, 28, 28, 0.25)', // Medium red
      size: 35 + scrollProgress * 25
    },
    // Floating accent - moves with scroll
    {
      position: 30 + scrollProgress * 40,
      color: 'rgba(239, 68, 68, 0.15)', // Light red
      size: 20 + Math.sin(scrollProgress * Math.PI * 2) * 10
    }
  ];

  const backgroundStyle = {
    background: `
      radial-gradient(ellipse ${gradientStops[0].size}% ${gradientStops[0].size}% at 20% ${gradientStops[0].position}%, ${gradientStops[0].color} 0%, transparent 70%),
      radial-gradient(ellipse ${gradientStops[1].size}% ${gradientStops[1].size}% at 80% ${gradientStops[1].position}%, ${gradientStops[1].color} 0%, transparent 70%),
      radial-gradient(ellipse ${gradientStops[2].size}% ${gradientStops[2].size}% at 40% ${gradientStops[2].position}%, ${gradientStops[2].color} 0%, transparent 70%),
      radial-gradient(ellipse ${gradientStops[3].size}% ${gradientStops[3].size}% at 70% ${gradientStops[3].position}%, ${gradientStops[3].color} 0%, transparent 70%),
      linear-gradient(180deg, 
        rgb(0, 0, 0) 0%, 
        rgb(10, 5, 5) ${20 + scrollProgress * 30}%, 
        rgb(15, 8, 8) ${50 + scrollProgress * 20}%, 
        rgb(8, 3, 3) ${80 + scrollProgress * 10}%, 
        rgb(0, 0, 0) 100%
      )
    `,
    transition: 'background 0.1s ease-out'
  };

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0"
      style={backgroundStyle}
    />
  );
};

export default DynamicBackground;