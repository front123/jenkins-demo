const express = require('express')
const app = express()


app.get('/', function(req, res){
  res.send('Welcome to my app!')
})

const port = 18080
app.listen(port, () => console.log('App listen on ', port))