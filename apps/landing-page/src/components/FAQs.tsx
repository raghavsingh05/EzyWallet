'use client'
import React from 'react';
import PlusIcon from '../assets/icons/plus.svg'
import MinusIcon from '../assets/icons/minus.svg'
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  {
    question: "What is EzyWallet?",
    answer:
      "EzyWallet is a digital wallet that allows you to easily add money from your bank and spend it among your peers.",
  },
  {
    question: "How can I add money to my EzyWallet account?",
    answer:
      "You can add money to your EzyWallet account directly from your bank using secure payment methods.",
  },
  {
    question: "Can I transfer money to others using EzyWallet?",
    answer:
      "Yes, EzyWallet allows you to send money to your peers instantly, making transactions hassle-free.",
  },
  {
    question: "How can I view my transaction history?",
    answer:
      "EzyWallet keeps a detailed transaction history, allowing you to view all your previous transactions for easy tracking and management.",
  },
];

const AccordionItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className='py-7 border-b border-white/30'  onClick={() => setIsOpen(!isOpen)}>
      <div className='flex items-center '>
        <span className='flex-1 text-lg font-bold'> {question} </span>
        {isOpen ? <MinusIcon />: <PlusIcon />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
          initial={{
            opacity:0,
            height:0,
            marginTop:0
          }}
          animate={{
            opacity:1,
            height:"auto",
            marginTop:'16px'
          }}
          exit={{
            opacity:0,
            height:0,
            marginTop:0
          }}
          >{answer}</motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export const FAQs = () => {
  return (
    <div id='faq' className="bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] sm:py-24">
      <div className="container">
        <h2 className='text-center text-5xl font-bold tracking-tighter sm:text-6xl sm:max-w-[648px] mx-auto'>Frequently asked questions</h2>
        <div className='mt-12 max-w-[648px] mx-auto cursor-pointer'>
          {items.map(({ question, answer }) => (
            <AccordionItem question={question} answer={answer} key={question}/>
          ))}
        </div>
      </div>

    </div>
  );
};
