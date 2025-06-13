const formatPrice = (price: number = 0, currency: string = ''): string => {
  const priceArray = String(price).split('.')
  const decimal = priceArray[1] ?? ''
  let formatedPrice = `${currency}${priceArray[0]}.`

  switch (decimal.length) {
    case 0:
      formatedPrice += '00'
      break

    case 1:
      formatedPrice += `${decimal}0`
      break

    case 2:
      formatedPrice += decimal
      break

    default:
      formatedPrice += decimal.slice(0, 2)
  }

  return formatedPrice
}

export default formatPrice
