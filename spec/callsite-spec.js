describe('sb-callsite', function() {
  const Path = require('path')

  it('works', function() {

    const fixturePath = Path.join(__dirname, 'fixtures', 'test.js')
    const stack = require(fixturePath)

    expect(stack[0].file).toBe(fixturePath)
    expect(stack[0].line).toBe(1)
    expect(stack[0].col).toBe(97)

  })
})
