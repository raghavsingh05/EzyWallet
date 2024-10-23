import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { AllTransactions } from "../../components/AllTransactions";

enum TransactionStatus {
    Success = 'SUCCESS',
    Failure = 'FAILURE',
    Processing = 'PROCESSING',
    Pending = 'PENDING',
    Cancelled = 'CANCELLED',
}

// Helper function to map string to TransactionStatus
function mapStatus(status: string): TransactionStatus {
    switch (status.toUpperCase()) {
        case 'SUCCESS':
            return TransactionStatus.Success;
        case 'FAILURE':
            return TransactionStatus.Failure;
        case 'PROCESSING':
            return TransactionStatus.Processing;
        case 'PENDING':
            return TransactionStatus.Pending;
        case 'CANCELLED':
            return TransactionStatus.Cancelled;
        default:
            throw new Error(`Unknown status: ${status}`);
    }
}

async function getTransactionsForUser() {
    const session = await getServerSession(authOptions);
    const userId = Number(session?.user?.id);

    // Fetch OnRamp transactions
    const onRampTransactions = await prisma.onRampTransaction.findMany({
        where: {
            userId
        }
    });

    // Fetch P2P transfers with usernames for both sender and receiver
    const p2pTransfers = await prisma.p2pTransfer.findMany({
        where: {
            OR: [
                { fromUserId: userId },
                { toUserId: userId }
            ]
        },
        include: {
            fromUser: { select: { name: true } },
            toUser: { select: { name: true } }
        }
    });

    // Normalize both transactions to have common fields
    const normalizedOnRamp = onRampTransactions.map(t => ({
        time: new Date(t.startTime),
        amount: t.amount,
        status: mapStatus(t.status),
        provider: t.provider,
        type: 'onRamp'
    }));

    const normalizedP2P = p2pTransfers.map(t => ({
        time: new Date(t.timestamp),
        amount: t.amount,
        status: t.fromUserId === userId 
            ? `Sent to ${t.toUser.name}`
            : `Received from ${t.fromUser.name}`,
        provider: t.fromUserId === userId
            ? `Sent to ${t.toUser.name}`
            : `Received from ${t.fromUser.name}`,
        type: 'p2p'
    }));

    const allTransactions = [...normalizedOnRamp, ...normalizedP2P].sort((a, b) => b.time.getTime() - a.time.getTime());

    return allTransactions;
}

export default async function Page() {
    const transactions = await getTransactionsForUser();

    return (
        <div className="w-full">
            <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold pl-4">
                Transactions
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 p-4 mr-7">
                <div className="w-full">
                    <AllTransactions transactions={transactions} />
                </div>
            </div>
        </div>
    );
}
