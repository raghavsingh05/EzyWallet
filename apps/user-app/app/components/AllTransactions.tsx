"use client";
import { Card } from "@repo/ui/card";
import { useMemo } from 'react';

enum TransactionStatus {
    Success = 'SUCCESS',
    Failure = 'FAILURE',
    Processing = 'PROCESSING',
    Pending = 'PENDING',
    Cancelled = 'CANCELLED',
}

type TransactionType = 'SENT' | 'RECEIVED' | string;

export const AllTransactions = ({
    transactions
}: {
    transactions: {
        time: Date,
        amount: number,
        status: TransactionStatus | string,
        provider: string,
        type: TransactionType
    }[]
}) => {
    const sortedTransactions = useMemo(() => {
        return [...transactions].sort((a, b) => b.time.getTime() - a.time.getTime());
    }, [transactions]);

    if (!sortedTransactions.length) {
        return (
            <div className="w-4/5 mx-auto">
                <Card title="Transactions">
                    <div className="text-center pb-8 pt-8">
                        No transactions
                    </div>
                </Card>
            </div>
        );
    }

    const getStatusMessage = (status: TransactionStatus | string, provider: string) => {
        switch (status) {
            case TransactionStatus.Success:
                return `Added from ${provider} to wallet`;
            case TransactionStatus.Failure:
                return 'Transaction failed';
            case TransactionStatus.Processing:
                return 'Transaction processing';
            default:
                return status;
        }
    };

    return (
        <div className="w-4/5 mx-auto">
            <Card title="All Transactions">
                <div className="pt-2">
                    {sortedTransactions.map((t, index) => {
                        const isSent = t.status.toLowerCase().includes('sent');
                        const isReceived = t.status.toLowerCase().includes('received');
                        const isFailed = t.status.toUpperCase() === TransactionStatus.Failure;
                        const isSuccess = t.status.toUpperCase() === TransactionStatus.Success;
                        
                        return (
                            <div key={index} className="flex justify-between">
                                <div>
                                    <div className="">
                                        {getStatusMessage(t.status, t.provider)}
                                    </div>
                                    <div className="text-slate-600 text-xs my-2">
                                        {t.time.toLocaleDateString()}
                                    </div>
                                </div>
                                <div className={`flex flex-col justify-center font-semibold ${
                                    isSent ? 'text-red-500' : 
                                    isReceived || isSuccess ? 'text-green-500' :
                                    t.status.toUpperCase() === TransactionStatus.Processing ? 'text-yellow-500' :
                                    isFailed ? 'text-red-500' :
                                    'text-gray-500' // default color for other statuses
                                }`}>
                                    {isFailed ? '' : isSent ? '- ' : (isReceived || isSuccess) ? '+ ' : ''}
                                    ₹ {(t.amount / 100).toFixed(2)}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Card>
        </div>
    );
};
