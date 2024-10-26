"use client"
import { Card } from "@repo/ui/card"
import { Select } from "@repo/ui/select"
import { TextInput } from "@repo/ui/textinput"
import { useState } from "react"
import { handleAddMoney } from "./HandleAddmoney"
import { useRouter } from 'next/navigation'
import { Button, ButtonProps } from "@repo/ui/buttonProps"

export const AddMoney = () => {
    const SUPPORTED_BANKS = [
        {
            name: "HDFC Bank",
            redirectUrl: "http://localhost:3003/hdfcWebhook"
        },
        {
            name: "Axis Bank",
            redirectUrl: "http://localhost:3003/axisWebhook"
        }
    ];
    const [amount, setAmount] = useState(""); 
    const [isValid, setIsValid] = useState(true);
    const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl);
    const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || "");
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleAmountChange = (value: string) => {
        if (/^[0-9]*$/.test(value)) {
            setIsValid(true);
            setAmount(value);
        } else {
            setIsValid(false);
        }
    };

    const handleAddMoneyClick = async () => {
        setIsLoading(true);
        const result = await handleAddMoney(amount, provider || "", redirectUrl || "");
        setMessage(result.message);
        setIsLoading(false);
        if (result.success) {
            // Refresh the page
            router.refresh();
            
            // Optional: Remove the message after a short delay
            setTimeout(() => setMessage(''), 3000);
        }
    };

    return (
        <Card title="Add Money">
            <div className="w-full">
                <TextInput
                    label={"Amount"}
                    placeholder={"Amount"}
                    // @ts-ignore
                    value={amount}
                    onChange={handleAmountChange}
                />
                {!isValid && (
                    <div className="text-red-500 text-sm">Invalid input: Only numbers are allowed</div>
                )}

                <div className="py-4 text-left">Bank</div>

                <Select
                    onSelect={(value) => {
                        setRedirectUrl(SUPPORTED_BANKS.find(x => x.name === value)?.redirectUrl || "");
                        setProvider(SUPPORTED_BANKS.find(x => x.name === value)?.name || "");
                    }}
                    options={SUPPORTED_BANKS.map(x => ({
                        key: x.name,
                        value: x.name
                    }))}
                />

                <div className="flex justify-center pt-4">
                    <Button 
                        onClick={handleAddMoneyClick} 
                        isLoading={isLoading}
                        variant="primary"
                        size="medium"
                    >
                        Add Money
                    </Button>
                </div>
                {message && (
                    <div className="fixed bottom-4 right-4 bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg transition-opacity duration-300 ease-in-out z-50">
                        <p className="text-center">{message}</p>
                    </div>
                )}
            </div>
        </Card>
    );
};
