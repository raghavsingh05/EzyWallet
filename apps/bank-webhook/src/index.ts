import express from "express";
import db from "@repo/db/client";
const app = express();

app.use(express.json())

app.post("/hdfcWebhook", async (req, res) => {
    //TODO: Add zod validation here?
    //TODO: HDFC bank should ideally send us a secret so we know this is sent by them
    const paymentInformation: {
        token: string;
        userId: string;
        amount: string
    } = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    };

    try {
        console.log("Payment information received:", paymentInformation);

        const result = await db.$transaction(async (prisma) => {
            const updatedBalance = await prisma.balance.updateMany({
                where: {
                    userId: Number(paymentInformation.userId)
                },
                data: {
                    amount: {
                        increment: Number(paymentInformation.amount)
                    }
                }
            });

            const updatedTransaction = await prisma.onRampTransaction.updateMany({
                where: {
                    token: paymentInformation.token
                }, 
                data: {
                    status: "Success",
                }
            });

            console.log("Balance update result:", updatedBalance);
            console.log("Transaction update result:", updatedTransaction);

            return { updatedBalance, updatedTransaction };
        });

        console.log("Transaction result:", result);

        if (result.updatedBalance.count === 0) {
            console.error("Balance update failed. User ID not found:", paymentInformation.userId);
            throw new Error("Balance update failed. User ID not found.");
        }

        res.json({
            message: "Captured",
            updatedRecords: result
        });
    } catch(e) {
        console.error("Error processing webhook:", e);
        res.status(411).json({
            message: "Error while processing webhook",
            error: e instanceof Error ? e.message : String(e)
        });
    }
});

app.post("/axisWebhook", async (req, res) => {
    //TODO: Add zod validation here?
    //TODO: Axis bank should ideally send us a secret so we know this is sent by them
    const paymentInformation: {
        token: string;
        userId: string;
        amount: string
    } = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    };

    try {
        console.log("Payment information received:", paymentInformation);

        const result = await db.$transaction(async (prisma) => {
            const updatedBalance = await prisma.balance.updateMany({
                where: {
                    userId: Number(paymentInformation.userId)
                },
                data: {
                    amount: {
                        increment: Number(paymentInformation.amount)
                    }
                }
            });

            const updatedTransaction = await prisma.onRampTransaction.updateMany({
                where: {
                    token: paymentInformation.token
                }, 
                data: {
                    status: "Success",
                }
            });

            console.log("Balance update result:", updatedBalance);
            console.log("Transaction update result:", updatedTransaction);

            return { updatedBalance, updatedTransaction };
        });

        console.log("Transaction result:", result);

        if (result.updatedBalance.count === 0) {
            console.error("Balance update failed. User ID not found:", paymentInformation.userId);
            throw new Error("Balance update failed. User ID not found.");
        }

        res.json({
            message: "Captured",
            updatedRecords: result
        });
    } catch(e) {
        console.error("Error processing webhook:", e);
        res.status(411).json({
            message: "Error while processing webhook",
            error: e instanceof Error ? e.message : String(e)
        });
    }
});

app.listen(3003);