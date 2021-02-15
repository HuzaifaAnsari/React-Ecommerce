const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const { request, response } = require("express");
const stripe = require('stripe')('sk_test_51IJbHpJeDirWYcnm20A0aWF5mx4GiPjYB3TLx6CemWBzFAoDvCgvibuaT3ZMEm3DdWbIJ3wriBW2bAp62TzP9Dzz00327E9sCg')

// API

// APP config

const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API Routes
app.get("/", (request, response) => response.status(200).send("hello World"));

app.post('/payments/create', async(request,response)=> {
    const total=request.query.total;

    console.log("Payment Request Recived", total);
    const  paymentIntent = await stripe.paymentIntents.create({
        amount:total, //subunites of currency
        currency:"usd"
    })
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
// Listen Command

exports.api=functions.https.onRequest(app);

// End point
