import React from 'react';

export const BrandLogo = ({ variant = 'light', className = '' }) => {
  const isLight = variant === 'light';
  return (
    <a href="#home" className={`inline-flex items-center gap-3 group ${className}`}>
      <div className="relative w-11 h-11 flex items-center justify-center">
        <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M32 10C26.5 18 24 25 24 31C24 37.5 27.5 42 32 45C36.5 42 40 37.5 40 31C40 25 37.5 18 32 10Z"
            stroke="#D4B584"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 29C17 26 11 28 8 33C13 38 20 40 28 43"
            stroke="#D4B584"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40 29C47 26 53 28 56 33C51 38 44 40 36 43"
            stroke="#D4B584"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 43C20 47 26 49 32 49C38 49 44 47 50 43"
            stroke="#E6C792"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="32" cy="27" r="2.2" fill="#E6C792" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-serif-luxury text-2xl font-semibold tracking-wide ${isLight ? 'text-white' : 'text-[#0D1117]'}`}>
          Bharti
        </span>
        <span className="text-[10px] tracking-[0.34em] uppercase font-medium text-[#D4B584] mt-1">
          LUXURY HOTEL
        </span>
      </div>
    </a>
  );
};

export const WaveTransition = ({ topColor = '#0D1117', bottomColor = '#F6F4F0', flip = false }) => {
  return (
    <div style={{ backgroundColor: topColor }} className="wave-divider select-none pointer-events-none">
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className={flip ? 'scale-x-[-1]' : ''}
      >
        <path
          d="M0,24 C360,84 1080,-24 1440,36 L1440,80 L0,80 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
};
