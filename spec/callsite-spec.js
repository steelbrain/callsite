/* eslint-disable global-require,import/no-dynamic-require */

import test from 'ava'
import path from 'path'

test('works with spaces', function(t) {
  const fixturePath = path.join(__dirname, 'fix tures', 'test.js')
  const stack = require(fixturePath)

  t.is(stack[0].file, fixturePath)
  t.is(stack[0].line, 1)
})

test('works without spaces', function(t) {
  const fixturePath = path.join(__dirname, 'fixtures', 'test.js')
  const stack = require(fixturePath)

  t.is(stack[0].file, fixturePath)
  t.is(stack[0].line, 1)
})
