import { Card } from "@repo/ui/card";

export const BalancCard = ({amount, locked}:{
    amount:number;
    locked:number;
}) =>{
    return <Card title={"Balance"}>
        <div className="flex justify-between border-b border-slate-300 pb-2">
            <div>
                Unlocked Balance
            </div>
            <div>
                {amount/100} INR
            </div>
        </div>
        <div className="flex justify-between border-b border-slate-300 py-2">
            <div>
                Total Balance
            </div>
            <div>
                {(locked + amount)/100} INR
            </div>
        </div>
    </Card>
}