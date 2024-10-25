"use client";
import { Card } from "@repo/ui/card";
import { useMemo } from 'react';
import Image from 'next/image';

// Add this type definition
type Transaction = {
  otherParty: {
    name: string;
    avatar: string;
    phoneNumber?: string;
  };
  type: 'SENT' | 'RECEIVED';
  amount: number;
  time: Date;
};

export const RecentP2PTransactions = ({
    transactions
}: {
    transactions: Transaction[]
}) => {
    const sortedTransactions = useMemo(() => {
        return [...transactions].sort((a, b) => b.time.getTime() - a.time.getTime());
    }, [transactions]);

    if (!sortedTransactions.length) {
        return (
            <Card title="Recent P2P Transactions">
                <div className="text-center pb-8 pt-8">
                    No Transactions
                </div>
            </Card>
        );
    }

    const transactionsToShow = sortedTransactions.slice(0, 4);

    return (
        <Card title="Recent P2P Transactions">
            <div className="pt-2">
                {transactionsToShow.map((t, index) => (
                    <div key={index} className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <Image
                                src={t.otherParty.avatar}
                                alt={t.otherParty.name}
                                width={55}
                                height={55}
                                className="rounded-full mr-3"
                            />
                            <div>
                                <div className="font-medium">
                                    {t.otherParty.name.toUpperCase()}
                                </div>
                                <div className="text-slate-600 text-xs">
                                    {t.type === 'SENT' ? 'Paid' : 'Received'}
                                </div>
                                <div className="text-slate-500 text-xs">
                                    {t.time.toLocaleString('en-IN', { 
                                        day: 'numeric', 
                                        month: 'short', 
                                        year: 'numeric', 
                                        hour: '2-digit', 
                                        minute: '2-digit'
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className={`font-semibold ${t.type === 'SENT' ? 'text-red-500' : 'text-green-500'}`}>
                            {t.type === 'SENT' ? '-' : '+'} ₹{(t.amount / 100).toFixed(2)}
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};
