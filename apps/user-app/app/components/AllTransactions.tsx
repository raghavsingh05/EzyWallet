"use client";
import { Card } from "@repo/ui/card";

enum TransactionStatus {
    Success = 'SUCCESS',
    Failure = 'FAILURE',
    Processing = 'PROCESSING',
    Pending = 'PENDING',
    Cancelled = 'CANCELLED',  // Include all statuses present in DB
}

export const AllTransactions = ({
    transactions
}: {
    transactions: {
        time: Date,
        amount: number,
        status: TransactionStatus | string,  // Allow both TransactionStatus and custom strings
        provider: string  // Include provider info for onRamp transactions
    }[]
}) => {

    if (!transactions.length) {
        return (
            <Card title="Transactions">
                <div className="text-center pb-8 pt-8">
                    No Transactions
                </div>
            </Card>
        );
    }

    return (
        <Card title="All Transactions">
            <div className="pt-2">
                {transactions.slice().map((t, index) => (
                    <div key={index} className="flex justify-between">
                        <div>
                        <div className="">
                                {t.status === TransactionStatus.Success
                                    ? `Money added from ${t.provider}`
                                    : t.status === TransactionStatus.Failure
                                        ? 'Failed Transaction' 
                                        : t.status === TransactionStatus.Processing
                                            ? 'Processing Transaction' 
                                            : t.status 
                                }
                            </div>
                            <div className="text-slate-600 text-xs my-2">
                                {t.time.toDateString()}  {/* Format the date */}
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                        ₹{t.amount / 100}  {/* Show amount */}
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};
