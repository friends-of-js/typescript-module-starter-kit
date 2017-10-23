import { expect } from 'chai'
// You can use your package name as path if you add your package name to tsconfig path mappings.
import { Test } from 'typescript-module-starter-kit'

describe('Test class', () => {
  it('should create instance', () => {
    expect(new Test()).to.be.instanceOf(Test)
  })
})
