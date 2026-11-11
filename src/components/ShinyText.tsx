import React from 'react';

interface ShinyTextProps {
  text: string;
  className?: string;
}

export const ShinyText: React.FC<ShinyTextProps> = ({ text, className = '' }) => {
  return (
    <span
      className={`inline-block select-none animate-shiny bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(110deg, #64CEFB 0%, #64CEFB 35%, #ffffff 50%, #64CEFB 65%, #64CEFB 100%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
