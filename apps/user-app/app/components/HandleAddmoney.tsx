"use server"
import { createOnRampTransaction } from "../lib/actions/createOnrampTransactions"
import prisma from "@repo/db/client";

export async function handleAddMoney(amount: number | string, provider: string, redirectUrl: string) {
    if (amount && provider && redirectUrl) {
        try {
            const token = Math.random().toString();
            await createOnRampTransaction(Number(amount) * 100, provider, token);

            const onRampTransaction = await prisma.onRampTransaction.findUnique({
                where: {
                    token: token
                }
            });

            if (onRampTransaction) {
                const userId = onRampTransaction.userId;
                const paymentData = {
                    token: token,
                    user_identifier: userId,
                    amount: onRampTransaction.amount
                };

                const response = await fetch(redirectUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(paymentData),
                });

                if (response.ok) {
                    return { success: true, message: "Money has been added successfully. Thank you!" };
                } else {
                    return { success: false, message: "Something went wrong with the backend. Please try again." };
                }
            } else {
                console.log("Problem occurred while creating the transaction.");
                return { success: false, message: "Please fill in all the information correctly." };
            }
        } catch (error) {
            console.error("Error:", error);
            return { success: false, message: "An error occurred. Please try again." };
        }
    } else {
        return { success: false, message: "Please fill in all the information correctly." };
    }
}
