const mongoose = require("mongoose");
const Schema = mongoose.Schema

const listSchema = new Schema({
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
}, {timestamps: true})

const List = mongoose.model("List", listSchema)

module.exports = List;