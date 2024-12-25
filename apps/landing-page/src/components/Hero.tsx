'use client'
import Image from 'next/image';
import ArrowIcon from '../assets/icons/arrow-w.svg'
import cursorImage from '../assets/images/cursor.png'
import messageImage from '../assets/images/message.png'
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export const Hero = () => {
  const router = useRouter();

  const handleGetStartedClick = () => {
    // Redirect to the login page of your dashboard app (running on port 3001)
    router.push('http://localhost:3001'); // Replace with actual login page URL if deployed
  };
  return <div id='about' className="text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
    <div className='absolute h-[375px] w-[750px] sm:w-[1536px] sm:-[768px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 broder-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px) top-[calc(100%-120px)] lg:w-[2800px] lg:h-[1200px]'>
    </div>
    <div className="container relative">
      <div className="flex items-center justify-center">
        <Link href="http://localhost:3001" passHref className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30">
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text">
              Beta Version is here
            </span>
            <span className='inline-flex items-center gap-1'>
              <span>Explore Now</span>
              <ArrowIcon />
            </span>
        </Link>

      </div>
      <div className='flex justify-center mt-8'>
        <div className='inline-flex relative'>
          <h1 className='text-7xl sm:text-8xl font-bold tracking-tighter text-center  inline-flex'> Payments made easy<br /> with EzyWallet</h1>
          <motion.div className='absolute right-[800px] top-[80px] hidden sm:inline'
            drag
            dragSnapToOrigin
          >
            <Image src={cursorImage} height="200" width="200" alt='cursor image' className='max-w-none' draggable="false" />
          </motion.div>
          <motion.div className='absolute top-[100px] left-[798px] hidden sm:inline'
            drag
            dragSnapToOrigin
          >
            <Image src={messageImage} height="200" width="200" alt='cursor image' className='max-w-none' draggable="false" />
          </motion.div>
        </div>
      </div>
      <div className='flex justify-center'>
        <p className='text-center text-xl mt-8 max-w-xl'>
          Seamlessly add funds from your bank and send money to friends with just a few taps. EzyWallet makes peer-to-peer transactions simple, fast, and secure.
        </p>
      </div>
    </div>

  </div>
};
