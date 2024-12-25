import { Feature } from "./Feature";

const features = [
  {
    title: "Add Funds from Your Bank",
    description:
      "With EzyWallet, you can easily link your bank account and add funds in just a few clicks. No more hassle, transfer money directly into your wallet.",
  },
  {
    title: "Instant Transfers",
    description:
      "Send money to your friends or peers instantly, with no delays. Whether it’s splitting bills or sending a gift, EzyWallet makes transfers fast and effortless.",
  },
  {
    title: "Transaction History",
    description:
      "Stay on top of your finances with detailed transaction records. View all your payments, transfers, and balances in one place.",
  }
];
const subfeatures = [
  {
    title: "Secure Transactions",
    description:
      "Your security is our top priority. EzyWallet uses advanced encryption and authentication measures to ensure that every transaction is safe and secure.",
  },
  {
    title: "Seamless Integration",
    description:
      "Enjoy a smooth experience by easily linking your bank account and other financial tools to EzyWallet. Get started quickly with minimal setup.",
  },
  {
    title: "User-Friendly Interface",
    description:
      "Designed for everyone, EzyWallet’s simple and intuitive interface ensures a seamless experience. Whether you’re a tech expert or just getting started.",
  }
];

export const Features = () => {
  return (
    <div id='features' className="bg-black text-white py-[72px] sm:py-24 px-10">
      <div className="container">
        <h2 className='text-center font-bold text-5xl sm:text-6xl tracking-tighter'>Everything you need</h2>
        <div className='max-w-2xl mx-auto'>
          <p className='text-center mt-5 text-xl text-white/70'>Everything you need to manage your finances effortlessly. With EzyWallet, enjoy seamless transactions, secure payments, and complete control over your money, all in one place.</p>
        </div>
        <div className='mt-16 flex flex-col sm:flex-row gap-4'>
          {features.map(({title, description}) =>(
            <Feature title={title} description={description} key={title} />
          ))}
        </div>
        <div className='mt-4 flex flex-col sm:flex-row gap-4'>
          {subfeatures.map(({title, description}) =>(
            <Feature title={title} description={description} key={title} />
          ))}
        </div>
      </div>
    </div>
  );
};
