import { expect } from 'chai'
import pkg52weeks from './index'

describe('Class52weeks', () => {
  context('pkg52weeks()', () => {
    it('pkg52weeks should be a function', () =>
      expect(pkg52weeks).to.be.a('function'))

    it('pkg52weeks(1) should be equal an array', () =>
      expect(pkg52weeks(1)).to.be.an('array'))

    it('pkg52weeks() to an array and is empty', () =>
      expect(pkg52weeks()).to.be.an('array').that.is.empty)

    it('pkg52weeks(\'\') to an array and is empty', () =>
      expect(pkg52weeks('')).to.be.an('array').that.is.empty)

    it('pkg52weeks(-20) to an array and is empty', () =>
      expect(pkg52weeks(-20)).to.be.an('array').that.is.empty)

    it('pkg52weeks(\'Hello World\') to an array and is empty', () =>
      expect(pkg52weeks('Hello World')).to.be.an('array').that.is.empty)

    it('pkg52weeks(undefined) to an array and is empty', () =>
      expect(pkg52weeks(undefined)).to.be.an('array').that.is.empty)

    it('pkg52weeks(false) to an array and is empty', () =>
      expect(pkg52weeks(false)).to.be.an('array').that.is.empty)

    it('pkg52weeks(1)[0] to include "{ deposit: 1, total: 1, week: \'01\' }"', () =>
      expect(pkg52weeks(1)[0]).to.include({ deposit: 1, total: 1, week: '01' }))

    it('pkg52weeks(1)[1] to include "{ deposit: 2, total: 3, week: \'02\' }"', () =>
      expect(pkg52weeks(1)[1]).to.include({ deposit: 2, total: 3, week: '02' }))

    it('pkg52weeks(1)[2] to include "{ deposit: 3, total: 6, week: \'03\' }"', () =>
      expect(pkg52weeks(1)[2]).to.include({ deposit: 3, total: 6, week: '03' }))

    it('pkg52weeks(1)[3] to include "{ deposit: 4, total: 10, week: \'04\' }"', () =>
      expect(pkg52weeks(1)[3]).to.include({ deposit: 4, total: 10, week: '04' }))
  })
})
