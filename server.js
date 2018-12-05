var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var app = express();
var knex = require('./db/knex');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


// app.get('/todos', function(req, res) {
//   knex.select('select * from todos')
//     .then(function(todos) {
//       res.send(todos.rows);
//     })
// })

app.post('/todos', function(req, res) {
  knex('todos').insert({
    title: 'go play guitar outside',
  })
  .then(function() {
    knex.select().from('todos')
      .then(function(todos) {
        res.send(todos)
      })
  })
})


//get one todo
// app.get('/todos', function(req, res) {
//   knex.raw('select * from todos where id = 1').then(function(todo) {
//     res.send(todo.rows)
//   })
// })


// get todos
// app.get('/todos', function(req, res) {
//   knex.select().from('todos').then(function(todos) {
//     res.send(todos)
//   })
// })

//get all todo rows
app.get('/todos', function(req, res) {
  knex.raw('select * from todos').then(function(todos) {
    res.send(todos.rows)
  })
})


app.listen(port, function() {
  console.log('listening on port: ', port) 
})