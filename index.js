const levenshtein = require('fast-levenshtein')

module.exports = (left, strings) => {
  return strings.map(maybeString => {
    let right = typeof maybeString === 'string'
      ? maybeString
      : (typeof maybeString === 'object' && maybeString.string)
        ?  maybeString.string
        : Object.values(maybeString).find(str => typeof str === 'string')

    if (typeof right !== 'string') {
      throw new Error('invalid second argument')
    }

    let score = levenshtein.get(left, right)

    return {
      score: score,
      string: maybeString
    }
  }).sort((a, b) => a.score - b.score)
}