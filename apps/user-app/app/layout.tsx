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
            {children}
          </div>
        </body>
      </Providers>
    </html>
  );
}
