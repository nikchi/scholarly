const scholar = require('google-scholar')

let exportedMethods = {
  testScholar (req, res) {
    return scholar.search('meat')
    .then (resultsObj => {
      return resultsObj.count
    })
  },
  getBoth (queryOne, queryTwo) {
    return scholar.search(queryOne)
    .then (resultsq1 => {
      return scholar.search(queryTwo)
      .then (resultsq2 => {
        return [resultsq1.count, resultsq2.count]
      })  
    })
  }
}
module.exports = exportedMethods