import { render, screen } from '@testing-library/react'
import ShopItem from './shop-item'
import type { ShopItemProps } from './shop-item.type'
import formatPrice from '../../utils/format-price'

describe(`Component: ShopItem func`, () => {
  let item: ShopItemProps

  beforeEach(() => {
    item = {
      brand: 'Tiger of Sweden',
      title: 'Leonard coat',
      description: 'Minimalistic coat in cotton-blend',
      descriptionFull:
        "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
      price: 399,
      currency: '£',
    }
  })
  it(`should render correctly`, () => {
    const firstExpectedText = item.brand
    const secondExpectedText = item.title
    const thirdExpectedText = item.description
    const fourthExpectedText = item.descriptionFull

    render(<ShopItem {...item} />)

    expect(screen.getByText(firstExpectedText)).toBeInTheDocument()
    expect(screen.getByText(secondExpectedText)).toBeInTheDocument()
    expect(screen.getByText(thirdExpectedText)).toBeInTheDocument()
    expect(screen.getByText(fourthExpectedText)).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it(`should render price correctly`, () => {
    const expectedPrice = formatPrice(item.price, item.currency)

    render(<ShopItem {...item} />)

    expect(screen.getByText(expectedPrice)).toBeInTheDocument()
  })
})
