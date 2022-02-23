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
        type: Array,
        requied: true,
        default: []
    }
}, {timestamps: true})

const User = mongoose.model("Users", userSchema)

module.exports = User;