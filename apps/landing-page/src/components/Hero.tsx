import Image from 'next/image';
import ArrowIcon from '../assets/icons/arrow-w.svg'
import cursorImage from '../assets/images/cursor.png'
import messageImage from '../assets/images/message.png'


export const Hero = () => {
  return <div className="text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
    <div className='absolute h-[375px] w-[750px] sm:w-[1536px] sm:-[768px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 broder-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px) top-[calc(100%-120px)] lg:w-[2400px] lg:h-[1200px]'>
    </div>
    <div className="container relative">
      <div className="flex items-center justify-center">
      <a href="#" className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30">
        <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text">Beta Verson is here</span>
        <span className='inline-flex items-center gap-1'>
          <span>Read More</span>
          <ArrowIcon />
        </span>
      </a>
      </div>
      <div className='flex justify-center mt-8'>
        <div className='inline-flex relative'>
          <h1 className='text-7xl sm:text-8xl font-bold tracking-tighter text-center  inline-flex'> Payments made easy<br /> with EzyWallet</h1>
          <Image src={cursorImage} height="200" width="200" alt='cursor image' className='absolute right-[800px] top-[80px] hidden sm:inline' />
          <Image src={messageImage} height="200" width="200" alt='cursor image' className='absolute top-[100px] left-[798px] hidden sm:inline' />
        </div>
      </div>
      <div className='flex justify-center'>
        <p className='text-center text-xl mt-8 max-w-xl'>
          Celebrate the joy of accomplishment with an app designed to track your prgress, motivate your efforts and celebrate your successes.
        </p>
      </div>
        <div className='flex justify-center mt-8'>
          <button className='bg-white text-black py-3 px-5 rounded-lg font-medium'> Get for free</button>
        </div>
    </div>
    
  </div>
};
