/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import isDocker from '../../lib/is-docker'
import chai = require('chai')
const expect = chai.expect

describe('isDocker', () => {
  it('returns a boolean value', () => {
    const result = isDocker()
    expect(typeof result).to.equal('boolean')
  })

  it('returns the cached result on subsequent calls', () => {
    const firstResult = isDocker()
    const secondResult = isDocker()
    expect(firstResult).to.equal(secondResult)
  })
})
