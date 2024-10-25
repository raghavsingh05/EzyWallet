"use client";

import React, { useState, useEffect } from 'react';
import SpinningWheel from './SpinningWheel';

interface LoadingWrapperProps {
  children: React.ReactNode;
}

const LoadingWrapper: React.FC<LoadingWrapperProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Yahan par hum loading ko simulate kar rahe hain
    // Aap ise apne actual loading logic se replace kar sakte hain
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? <SpinningWheel /> : children}
    </>
  );
};

export default LoadingWrapper;
