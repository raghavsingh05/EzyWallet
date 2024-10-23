import { SendCard } from "../../components/SendCard";

export default async function () {
    return <div className="w-full">
    <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold pl-4">
        Transactions
    </div>
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 p-4 mr-7">
        <div className="w-full">
        <SendCard />
        </div>
    </div>
</div>
}