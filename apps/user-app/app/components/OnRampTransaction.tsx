import { Card } from "@repo/ui/card";

enum TransactionStatus {
    Success = 'SUCCESS',
    Failure = 'FAILURE',
    Processing = 'PROCESSING',
    Pending = 'PENDING',
    Cancelled = 'CANCELLED',  // Include all statuses present in DB
}

export const OnRampTransactions = ({
    transactions
}: {
    transactions: {
        time: Date,
        amount: number,
        status: TransactionStatus,
        provider: string
    }[]
}) => {
    if (!transactions.length) {
        return <Card title="Recent Transactions">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>
    }
    return <Card title="Recent Transactions">
        <div className="pt-2 ">
            {transactions.slice().reverse().map((t, index) => (  // Reverse the transactions array
                <div key={index} className="flex justify-between">
                    <div>
                        <div className="">
                            {/* Handle all statuses from the database */}
                            {t.status.toUpperCase() === TransactionStatus.Success
                                ? "Received"
                                : t.status.toUpperCase() === TransactionStatus.Failure
                                    ? "Failed"
                                    : t.status.toUpperCase() === TransactionStatus.Processing
                                        ? "Processing"
                                        : t.status.toUpperCase() === TransactionStatus.Pending
                                            ? "Pending"
                                            : t.status.toUpperCase() === TransactionStatus.Cancelled
                                                ? "Cancelled"
                                                : `Unknown Status: ${t.status}`
                            }
                        </div>
                        <div className="text-slate-600 text-xs my-2">
                            {t.time.toDateString()}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        + Rs {t.amount / 100}
                    </div>
                </div>
            ))}
        </div>
    </Card>
}