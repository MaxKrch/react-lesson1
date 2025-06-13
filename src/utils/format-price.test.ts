import formatPrice from './format-price'

describe(`Util: FormatPrice`, () => {
  const currency = `£`

  it(`should return correctly price, when passed price without decimal`, () => {
    const price = 125
    const expectedPrice = `£125.00`

    const receivedPrice = formatPrice(price, currency)

    expect(receivedPrice).toBe(expectedPrice)
  })

  it(`should return correctly price, when passed price with 1 decimal`, () => {
    const price = 120.1
    const expectedPrice = `£120.10`

    const receivedPrice = formatPrice(price, currency)

    expect(receivedPrice).toBe(expectedPrice)
  })

  it(`should return correctly price, when passed price with 2 decimal`, () => {
    const price = 12.05
    const expectedPrice = `£12.05`

    const receivedPrice = formatPrice(price, currency)

    expect(receivedPrice).toBe(expectedPrice)
  })

  it(`should return correctly price, when passed price with 2+ decimal`, () => {
    const price = 25.251
    const expectedPrice = `£25.25`

    const receivedPrice = formatPrice(price, currency)

    expect(receivedPrice).toBe(expectedPrice)
  })
})
