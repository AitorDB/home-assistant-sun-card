import { CSSResult } from 'lit'

import cardStyles from '../../src/cardStyles'

describe('cardStyles', () => {
  it('returns a CSSResult', () => {
    expect(cardStyles).toBeInstanceOf(CSSResult)
  })
})
