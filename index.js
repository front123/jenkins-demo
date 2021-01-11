const ejs = require('ejs')
const path = require('path')
const express = require('express')

const app = express()
var router = express.Router()

app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

router.get('/', function(req, res, next){
  res.render('index.html', {content: 'Welcome to my app!'})
})
app.use('/app', router)
// http://host:port/app  -> index.html

// app.get('/', function(req, res){
//   res.send('Welcome to my app!')
// })

const port = 18080
app.listen(port, () => console.log('App listen on ', port))



// console.log(__dirname);