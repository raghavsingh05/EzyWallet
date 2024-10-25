import { SendCard } from "../../components/SendCard";
import { RecentP2PTransactions } from "../../components/RecentP2PTransations";
import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { Transaction } from "../../../types/transactions";

const fetchTransactions = async (): Promise<Transaction[]> => {
  const session = await getServerSession(authOptions);
  const userId = Number(session?.user?.id);

  const p2pTransfers = await prisma.p2pTransfer.findMany({
    where: {
      OR: [
        { fromUserId: userId },
        { toUserId: userId }
      ]
    },
    include: {
      fromUser: { select: { name: true } },
      toUser: { select: { name: true} }
    },
    orderBy: {
      timestamp: 'desc'
    }
  });

  const normalizedTransactions: Transaction[] = p2pTransfers.map(t => ({
    time: new Date(t.timestamp),
    amount: t.amount,
    type: t.fromUserId === userId ? 'SENT' : 'RECEIVED',
    otherParty: {
      name: t.fromUserId === userId ? t.toUser.name ?? '' : t.fromUser.name ?? '', 
      avatar: "/avatar.png",
    }
  }));

  return normalizedTransactions;
};

export default async function P2PTransferPage() {
    const transactions: Transaction[] = await fetchTransactions();

    return <div className="w-full">
        <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold pl-4">
            P2P Transfer
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 p-4 mr-7">
            <div className="w-full">
                <SendCard />
            </div>
            <div className="w-full">
                <RecentP2PTransactions 
                    transactions={transactions} 
                />
            </div>
        </div>
    </div>
}
