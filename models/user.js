const mongoose = require("mongoose");
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    lists: {
        type: [{
            owner: {
                type: String,
            },
            listName: {
                type: String, 
            },
            items: {
                type: Array, 
            },
            listTotal: {
                type: Number,
            },
            numberOfItems: {
                type: Number, 
            },
            shareUrl: {
                type: String, 
            }
        }],
        default: [{listName: "New List"}],
    },
}, {timestamps: true})

const User = mongoose.model("User", userSchema)

module.exports = User;