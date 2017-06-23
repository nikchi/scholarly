
const express = require('express')
const exphbs = require('express-handlebars')
const Handlebars = require('handlebars')
const bodyParser = require('body-parser')
const configRoutes = require('./routes')
const path = require('path')

const app = express()
const expressStatic = express.static(path.join(__dirname, '/public'))


app.use('/public', expressStatic)
app.use(bodyParser.json())

const rewriteUnsupportedBrowserMethods = (req, res, next) => {
  // If the user posts to the server with a property called _method, rewrite the request's method
  // To be that method; so if they post _method=PUT you can now allow browsers to POST to a route that gets
  // rewritten in this middleware to a PUT route
  if (req.body && req.body._method) {
    req.method = req.body._method
    delete req.body._method
  }

  // let the next middleware run:
  next()
}
app.use(bodyParser.urlencoded({ extended: true }))
app.use(rewriteUnsupportedBrowserMethods)

// render engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// configure express routes
configRoutes(app)

// start server
app.listen(3000)