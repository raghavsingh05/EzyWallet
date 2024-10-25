"use client"
import { Button } from "@repo/ui/button"
import { Card } from "@repo/ui/card"
import { Select } from "@repo/ui/select"
import { TextInput } from "@repo/ui/textinput"
import { useState } from "react"
import { createOnRampTransaction } from "../lib/actions/createOnrampTransactions"

const SUPPORTED_BANKS = [
    {
        name: "HDFC Bank",
        redirectUrl: "https://netbanking.hdfcbank.com"
    },
    {
        name: "Axis Bank",
        redirectUrl: "https://netbanking.axisbank.com"  // Fixed URL typo
    }
];

export const AddMoney = () => {
    const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl);
    const [amount, setAmount] = useState("");  // Store amount as string initially
    const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || "");
    const [isValid, setIsValid] = useState(true);  // Validation state

    const handleAmountChange = (value: string) => {
        if (/^[0-9]*$/.test(value)) {
            setIsValid(true);
            setAmount(value);
        } else {
            setIsValid(false);
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
                        onClick={async () => {
                            if (amount && isValid) {
                                await createOnRampTransaction(Number(amount) * 100, provider);
                                window.location.href = redirectUrl || "";
                            } else {
                                alert("Please enter a valid amount.");
                            }
                        }}
                    >
                        Add Money
                    </Button>
                </div>
            </div>
        </Card>
    );
};
