/**
 * This is your server file
 */

// Add all your require statements here
const { todos, createTodo } = require("./todos")
const express = require('express')
const cors = require('cors')
console.log(todos)

// Your port of choice here
const PORT = 3000;

// Create your app (server) here
const app = express()
// Add middleware here
app.use(express.json())
app.use(cors())
// Add express routes here
app.get('/todos',function(req,res){
    res.status(200).json(todos)
})

app.post('/todos',function(req,res){
    let todoObject = createTodo(req.body.description)
    todos.push(todoObject)
    res.status(201).json(todoObject)
})

app.put("/todos/:todoid",function(req,res){
    let id = parseInt(req.params.todoid)
    let findTodo = todos.find(todo => 
        todo.id === id
    )
    findTodo.completed = true
    res.status(200).json(findTodo)
})

app.delete("/todos/:id",function(req,res){
    let ID = parseInt(req.params.id)
    let findTodoIndex = todos.findIndex(todo => todo.id === ID)
    console.log(findTodoIndex)
    todos.splice(findTodoIndex,1)
    res.status(204).end()
})
// Add server listen call here
app.listen(PORT)