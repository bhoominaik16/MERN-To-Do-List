
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const TodoModel = require('./models/Todos')

dotenv.config();

const app = express()
app.use(cors())
app.use(express.json()) 

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Error Connecting to MongoDB", err))

app.get('/gettodo', ((req, res) => {
    TodoModel.find({doing: false, done:false})
        .then(result => res.json(result))
        .catch(err => res.json(err))
}))

app.get('/getongoing', (req, res) => {
    TodoModel.find({doing : true, done:false})
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

app.get('/getdone', (req, res) => {
    TodoModel.find({done : true, doing:false})
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

app.put('/updateOngoing/:id', ((req, res) => {
    const {id} = req.params;
    TodoModel.findByIdAndUpdate({_id : id}, {doing: true})
        .then(result => res.json(result))
        .catch(err => res.json(err))
}))

app.put('/updateDone/:id', ((req, res) => {
    const {id} = req.params;
    TodoModel.findByIdAndUpdate({_id : id}, {doing:false, done: true})
        .then(result => res.json(result))
        .catch(err => res.json(err))
}))

app.post('/add', ((req, res) => {
    const task = req.body.task; 
    TodoModel.create({
        task: task
    }).then(result => res.json(result))
    .catch(err => res.json(err))
}))

app.delete('/delete/:id', ((req, res) => {
    const {id} = req.params;
    TodoModel.findByIdAndDelete({_id : id})
        .then(result => res.json(result))
        .catch(err => res.json(err))
}))

app.listen(3001, () => {
    console.log("Server is Running")
})