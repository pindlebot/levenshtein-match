const levenshtein = require('fast-levenshtein')

module.exports = (string, items) => {
  return items.map(item => ({
    score: levenshtein.get(string, item),
    string: item 
  })).sort((a, b) => a.score - b.score)
}