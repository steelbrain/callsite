'use babel'

const extractionRegex = /at (.*?) \((.*?):(\d+):(\d+)\)/

export function capture() {
  const toReturn = []
  const stack = new Error().stack.split('\n')

  stack.shift()
  stack.forEach(function(entry) {
    const matches = extractionRegex.exec(entry)
    if (matches !== null) {
      toReturn.push({
        function: matches[1],
        file: matches[2],
        line: matches[3],
        col: matches[4]
      })
    }
  })

  return toReturn
}
