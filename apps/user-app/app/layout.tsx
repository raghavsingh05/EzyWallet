import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../provider";
import { AppbarClient } from "./components/AppbarClient";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EZYWallet",
  description: "An online wallet for all your transactions",
};

// Theek hai, ab hum layout.tsx ko server component ke roop mein rakhenge aur loading logic ko ek alag client component mein shift karenge.

import LoadingWrapper from "../components/LoadingWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <div className="min-w-screen min-h-screen bg-[#f0f8f6]">
            <NextTopLoader />
            <AppbarClient />
            <LoadingWrapper>
              {children}
            </LoadingWrapper>
          </div>
        </body>
      </Providers>
    </html>
  );
}

// Ab aapko ek naya component banana hoga jise hum LoadingWrapper keh rahe hain.
// Iss component mein aap loading logic aur SpinningWheel ko implement kar sakte hain.
// Yaad rakhein ki iss naye component ke file ke shuruat mein "use client" directive add karna hoga.
