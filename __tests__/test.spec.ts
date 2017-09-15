import {cleanObject} from '../src/index'

describe('clean object',()=> {
  it('primitive object', () => {
    const src = {
      undefinedTest: undefined,
      keep: true,
      nullTest: null,
      '0': true
    }
    const expected = {
      keep: true,
      '0': true
    }
    expect(cleanObject(src)).toEqual(expected)
  })

  it('nested object', () => {
    const src = {
      undefinedTest: undefined,
      keep: true,
      nullTest: null,
      '0': undefined,
      nested: {
        undefinedTest: undefined,
        keep: true,
        nullTest: null,
        '0': true
      }
    }
    const expected = {
      keep: true,
      nested: {
        keep: true,
        '0': true
      }
    }
    expect(cleanObject(src)).toEqual(expected)
  })
})
