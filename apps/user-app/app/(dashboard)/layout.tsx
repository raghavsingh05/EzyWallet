"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import SpinningWheel from '../../components/SpinningWheel';
import { SidebarItem } from '../components/SidebarItem';

function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <div className="flex">
            <div className="w-72 border-r border-slate-300 min-h-screen mr-4 pt-16">
                <div>
                    <SidebarItem href={"/dashboard"} icon={<HomeIcon />} title="Home" />
                    <SidebarItem href={"/transfer"} icon={<TransferIcon />} title="Transfer" />
                    <SidebarItem href={"/transactions"} icon={<TransactionsIcon />} title="Transactions" />
                    <SidebarItem href={"/p2ptransfer"} icon={<P2pIcon />} title="P2P Transfer" />
                </div>
            </div>
            <div className="flex-grow relative">
                {isLoading ? (
                    <div className="absolute inset-0 flex items-center justify-center w-full h-full">
                        <div className="flex items-center justify-center w-full h-full">
                            <SpinningWheel />
                        </div>
                    </div>
                ) : (
                    children
                )}
            </div>
        </div>
    );
}

export default DashboardLayout;

function HomeIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
}

function TransferIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
}

function TransactionsIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
}

function P2pIcon(){
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
  </svg>
}
