import Image from "next/image";
import logoImage from "../assets/images/tbimg.png"
import MenuIcon from "../assets/icons/menu.svg"
export const Navbar = () => {
  return <div className="bg-black"> 
  <div className="sm:px-8 px-4">
    <div className="py-2 flex items-center justify-between">
          <Image src={logoImage} alt="logo"className="sm:h-20 h-16 w-auto relative" />
      <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center sm:hidden">
      <MenuIcon className="text-white" />
      </div>
      <nav className="gap-10 items-center hidden sm:flex">
        <a href="/" className="text-opacity-80 text-white hover:text-opacity-100 transition"> Home </a>
        <a href="#features" className="text-opacity-80 text-white hover:text-opacity-100 transition"> Features </a>
        <a href="#faq" className="text-opacity-80 text-white hover:text-opacity-100 transition"> Help </a>
        <a href="#contact" className="text-opacity-80 text-white hover:text-opacity-100 transition"> Contact </a>
        <button className="bg-white border-white border py-2 px-4 rounded-lg">  Get started</button>
      </nav>
    </div>
  </div>
  </div>;
};
