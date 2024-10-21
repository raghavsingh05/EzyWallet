"use client";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { TextInput } from "@repo/ui/textinput";
import { useState } from "react";

export function SendCard() {
    const [number, setNumber] = useState("");
    const [amount, setAmount] = useState("");

    return <div className="h-[90vh]">
            <Center>
                <Card title="Send">
                    <div className="min-w-72 pt-2">
                        <TextInput
                            placeholder={"Number"}
                            label="Number"
                            value={number}  // Add value prop to control the input
                            onChange={(value: string) => setNumber(value)}  // Corrected onChange prop
                        />
                    </div>
                    <div className="min-w-72 pt-2">
                        <TextInput
                            placeholder={"Amount"}
                            label="Amount"
                            value={amount}
                            onChange={(value: string) => setAmount(value)}  
                        />
                        <div className="pt-4 flex justify-center">
                        <Button onClick={() => {

                        }}>Send</Button>
                        </div>
                    </div>
                </Card>
            </Center>
        </div>
}
