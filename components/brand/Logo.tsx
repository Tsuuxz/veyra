import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'white' | 'minimal';
  showText?: boolean;
  className?: string;
}

export default function Logo({ 
  size = 'md', 
  variant = 'default',
  showText = true,
  className = '' 
}: LogoProps) {
  const sizeClasses = {
    sm: 'h-7',
    md: 'h-9',
    lg: 'h-12'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const iconSize = {
    sm: 28,
    md: 36,
    lg: 48
  };

  const getIconColor = () => {
    switch (variant) {
      case 'white':
        return '#FAFAFA';
      case 'minimal':
        return '#14DEDA';
      default:
        return '#14DEDA';
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case 'white':
        return 'text-white';
      case 'minimal':
        return 'text-cyan';
      default:
        return 'text-white';
    }
  };

  return (
    <Link 
      href="/" 
      className={`inline-flex items-center gap-2.5 group ${className}`}
      aria-label="VEYRA"
    >
      {/* Icon */}
      <div className="relative">
        <svg
          width={iconSize[size]}
          height={iconSize[size]}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105"
        >
          {/* Background Square with Gradient */}
          <defs>
            <linearGradient id="veyra-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#14DEDA', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#55F3EC', stopOpacity: 1 }} />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Main Square */}
          <rect
            x="2"
            y="2"
            width="36"
            height="36"
            rx="8"
            fill="url(#veyra-gradient)"
            className="transition-all duration-300 group-hover:opacity-90"
          />
          
          {/* V Letter - Modern Geometric */}
          <path
            d="M12 12 L20 28 L28 12"
            stroke="#050707"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="transition-all duration-300"
          />
          
          {/* Accent Dot */}
          <circle
            cx="20"
            cy="30"
            r="2"
            fill="#050707"
            className="transition-all duration-300 group-hover:r-2.5"
          />
        </svg>
        
        {/* Glow Effect on Hover */}
        <div 
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle at center, rgba(20, 222, 218, 0.3) 0%, transparent 70%)',
            filter: 'blur(8px)',
            zIndex: -1
          }}
        />
      </div>

      {/* Text */}
      {showText && (
        <span 
          className={`font-bold tracking-tight ${textSizeClasses[size]} ${getTextColor()} transition-colors duration-300`}
        >
          VEYRA
        </span>
      )}
    </Link>
  );
}
