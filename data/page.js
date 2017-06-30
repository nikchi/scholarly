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
        let winner = resultsq1.count > resultsq2.count ? queryOne : queryTwo 
        return [winner]
      })  
    })
  }
}
module.exports = exportedMethods