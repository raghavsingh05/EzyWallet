"use client";
import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/textinput";
import { useState } from "react";
import { p2pTransfer } from "../lib/actions/p2pTransfer";
import { useRouter } from 'next/navigation';
import { Button } from "@repo/ui/buttonProps";

export function SendCard() {
    const [number, setNumber] = useState("");
    const [amount, setAmount] = useState("");
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSendMoney = async () => {
        setIsLoading(true);
        const result = await p2pTransfer(number, Number(amount) * 100);
        setMessage(result?.message || '');
        setIsLoading(false);
        router.refresh();
        if (result) {
            setMessage(result.message);
            setTimeout(() => {
                setMessage('');
            }, 3000);
        }
    };

    return <div className="h-[90vh]">
        <Card title="Send Money">
            <div className="min-w-72 pt-2">
                <TextInput placeholder={"Number"} label="Number" onChange={(value) => {
                    setNumber(value)
                }} />
                <TextInput placeholder={"Amount"} label="Amount" onChange={(value) => {
                    setAmount(value)
                }} />
                <div className="pt-4 flex justify-center">
                    <Button 
                        onClick={handleSendMoney}
                        isLoading={isLoading}
                        variant="primary"
                        size="medium"
                    >
                        Send
                    </Button>
                    {message && (
                        <div className="fixed bottom-4 right-4 bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg transition-opacity duration-300 ease-in-out z-50">
                        <p className="text-center">{message}</p>
                        </div>
                    )}
                </div>
            </div>
        </Card >
    </div>
}
