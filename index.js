'use strict'

class Class52weeks {
  constructor (deposit) {
    this._deposit = deposit
    this._totalWeeks = [...Array(52)]
    this._bankDeposits = []
  }

  run () {
    const firstDeposit = parseInt(this._deposit)

    if (firstDeposit <= 0 || isNaN(firstDeposit)) {
      return this._bankDeposits
    }

    this.bank(firstDeposit)

    return this._bankDeposits
  }

  bank () {
    let deposited = this._deposit
    let deposit = 0
    let week

    this._bankDeposits = this._totalWeeks
      .map((v, i) => {
        deposit = (i === 0) ? this._deposit : this._deposit + (this._deposit * i)
        deposited = (i === 0) ? deposited : deposited + deposit
        week = (i + 1)

        return {
          deposit: deposit,
          total: deposited,
          week: `${week < 10 ? `0${week}` : week}`
        }
      })
  }
}

module.exports = (firstDeposit = 0) =>
  new Class52weeks(firstDeposit).run()
