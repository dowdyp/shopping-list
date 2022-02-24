const mongoose = require("mongoose");
const Schema = mongoose.Schema

const listSchema = new Schema({
    user: {
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
    }
}, {timestamps: true})

const List = mongoose.model("Lists", listSchema)

module.exports = List;