const mongoose = require("mongoose");
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    lists: {
        type: Map,
        requied: false
    }
}, {timestamps: true})

const User = mongoose.model("Users", userSchema)

module.exports = User;