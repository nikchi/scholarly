const pageRoute = require('./page')

const constructorMethod = (app) => {
  app.use('/', pageRoute)
  app.use('*', (req, res) => {
    res.status(404).json({error: 'nothing here'})
  })
}

module.exports = constructorMethod