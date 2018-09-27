const levenshteinMatch = require('../../')
const path = require('path')
const fs = require('fs')
const prepare = () => {
  const strings = fs.readFileSync(path.join(__dirname, 'data.txt'), { encoding: 'utf8' }).split(/\r?\n/g)
  const arr = [1,2,3,4,5]
  const genRandomString = () => {
    let str = arr.map(() => {
      return strings[Math.floor(Math.random() * strings.length)]
    }).join(' ')
    return str
  }

  let options = arr.map(genRandomString)
  let string = options[0] + ' abc'
  return [string, options]
}

test('matches', () => {
  let args = prepare()
  let matches = levenshteinMatch(...args)
  console.log(matches)
  expect(matches[0].string).toMatch(args[1][0])
})
