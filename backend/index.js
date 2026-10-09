import express from 'express';
import mongoose from 'mongoose';
const app = express();
const PORT = 8080;

import User  from './models/user.js';
import Review from './models/review.js';
import Listing from './models/listing.js';

function main() {
    mongoose.connect('mongodb://127.0.0.1:27017/air-bnb');
}
main();
app.get("/", (req, res) => {
    res.json({
        sucess: 1,
        message: "This is Homepage",
    });
});

app.get("/initDb", async (req, res) => {
    let demoUser = new User({
        email: "demouser@gmail.com",
    })
    let demoReview = new Review({
        rating: 3,
        author: demoUser,
    })
    let demoListing = new Listing({
        title: "FirstListing",
        description: "noDesc",
        price: 5000,
        location: "Nashik",
        country: "India",
        reviews: [demoReview,],
        owner: demoUser,
    })
    try {
        await demoUser.save();
        await demoReview.save();
        await demoListing.save();
        res.json({
            sucess:1,
            message : msg,
        })
    } catch (error) {
        res.json({
            sucess: 0,
            message: error,
        })   
    }
})

app.get("/login", (req, res) => {
    res.json({
        sucess: 1,
        message: "This is Homepage",
    });
});

app.listen(PORT, () => {
    console.log("->", `http://localhost:${PORT}`);
});