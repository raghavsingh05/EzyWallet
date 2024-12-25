"use client";
import Image from "next/image";
import appScreen from "../assets/images/productscreen.png";
import { ContainerScroll } from "../components/Container-scroll-animation";
export const ProductShowcase = () => {
  return (
    <div className="bg-black -mt-10  text-white bg-gradient-to-b from-black to-[#5D2CA8]">
      <div className="flex flex-col overflow-hidden container">
        <ContainerScroll
          titleComponent={
            <>
              <h2 className="text-5xl sm:text-6xl font-bold text-white tracking-tighter">
                Intuitive interface <br />
              </h2>
              <div className="max-w-2xl mx-auto">
                <p className="pt-4 pb-12 text-xl text-white/70">Navigate with ease using EzyWallet’s intuitive dashboard. Our sleek design allows you to manage your balance, track transactions, and explore features effortlessly.</p>
              </div>
            </>
          }
        >
          <Image
            src={appScreen}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </div>
  );
};
