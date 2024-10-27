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
        return <Card title="Recent Transfers">
            <div className="text-center pb-8 pt-8">
                No Recent transfers
            </div>
        </Card>
    }
    return <Card title="Recent Transfers">
        <div className="pt-2 ">
            {transactions.slice().reverse().slice(0, 4).map((t, index) => (
                <div key={index} className="flex justify-between">
                    <div>
                        <div>
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
                    <div className={`flex flex-col justify-center ${
                        t.status.toUpperCase() === TransactionStatus.Success ? 'text-green-500' :
                        t.status.toUpperCase() === TransactionStatus.Failure ? 'text-red-500' :
                        t.status.toUpperCase() === TransactionStatus.Processing ? 'text-yellow-500' :
                        t.status.toUpperCase() === TransactionStatus.Pending ? 'text-blue-500' :
                        t.status.toUpperCase() === TransactionStatus.Cancelled ? 'text-gray-500' :
                        'text-gray-500'
                    }`}>
                        {t.status.toUpperCase() === TransactionStatus.Success ? '+ ' : ''}Rs {t.amount / 100}
                    </div>
                </div>
            ))}
        </div>
    </Card>
}