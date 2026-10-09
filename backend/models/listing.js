import mongoose from 'mongoose'
const Schema = mongoose.Schema;

let listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default : "https://unsplash.com/photos/light-pink-peony-flower-against-a-dark-background-rgmZp3Fgjxc",
        set: (v) => 
            v === "" ? " https://unsplash.com/photos/light-pink-peony-flower-against-a-dark-background-rgmZp3Fgjxc" : v
    },
    price : Number,
    location : String,
    country : String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

let Listing = mongoose.model("Listing", listingSchema);
export default Listing;