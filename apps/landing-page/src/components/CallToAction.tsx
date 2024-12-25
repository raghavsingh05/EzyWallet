'use client';
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import Image from 'next/image';
import emojiStarImage from '../assets/images/emojistar.png'
import helixImage from '../assets/images/helix2.png'
import { useScroll, useTransform, motion } from 'framer-motion';

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end']
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [120, -40])
  const [email, setEmail] = useState(''); // Local state for email input
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!email) {
      alert('Please enter an email address.');
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          from_email: email, // Sending the user's email
          to_email: 'raghavnandini47336@gmail.com',
          message: 'User requested access through the CTA.', // Optional message
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );

      alert('Thank you! Your email has been sent successfully.');
      setEmail(''); // Reset the email field
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id='contact' className="bg-black text-white sm:py-24 py-[72px] text-center">
      <div className="container max-w-xl relative"  ref={containerRef}>
      <motion.div style={{translateY}}>
          <Image src={helixImage} alt='' className='absolute top-6 left-[calc(100%+36px)] hidden sm:inline' />
        </motion.div>
        <motion.div style={{translateY}}>
          <Image src={emojiStarImage} alt='' className='absolute -top-[120px] right-[calc(100%-2px)] hidden sm:inline' />
        </motion.div>
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">Get Early Access to EzyWallet</h2>
        <p className="text-xl text-white/70 mt-5">Join now to be the first to experience EzyWallet! Enter your email to get instant access to all features and start managing your finances with ease.</p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={handleChange}
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
          />
          <button
            type="submit"
            className="bg-white text-black h-12 rounded-lg px-5"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Get access'}
          </button>
        </form>
      </div>
    </div>
  );
};
