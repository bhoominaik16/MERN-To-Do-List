const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    task:String,
    doing: {
        type : Boolean,
        default : false
    },
    done: {
        type : Boolean,
        default : false
    }
})

const TodoModel = new mongoose.model("todos", TodoSchema)
module.exports = TodoModel