const constructorMethod = (app) => {
  app.use('*', (req, res) => {
    res.status(404).json({error: 'nothing here'})
  })
}

module.exports = constructorMethod