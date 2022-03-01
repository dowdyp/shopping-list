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
    lists: [{
        owner: {
            type: String,
            required: true
        },
        listName: {
            type: String, 
            default: "New List"
        },
        items: {
            type: Array, 
            required: false,
            default: []
        },
        listTotal: {
            type: Number,
            default: 0
        },
        numberOfItems: {
            type: Number, 
            default: 0
        },
        shareUrl: {
            type: String, 
            required: false,
        }
    }]
}, {timestamps: true})

const User = mongoose.model("User", userSchema)

module.exports = User;