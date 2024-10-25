import React from 'react';
import Image from 'next/image';

const SpinningWheel: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="relative w-16 h-16">
        <Image
          src="/spinner.png"
          alt="Loading spinner"
          width={64}
          height={64}
          className="animate-spin"
        />
      </div>
    </div>
  );
};

export default SpinningWheel;