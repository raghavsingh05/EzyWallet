
import express from "express";
import db from "@repo/db/client"
const app = express();

app.post("/hdfcWebhook",(req, res) => {
    const paymentInformation ={
        token:req.body.token,
        userId:req.body.user_identifier,
        amount:req.body.amount
    }
})

//balances
// onRampTransactions

