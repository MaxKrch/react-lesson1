const currency = ['£'] as const

type ShopItemProps = {
  brand: string
  title: string
  description: string
  descriptionFull: string
  price: number
  currency: (typeof currency)[number]
}

export { type ShopItemProps }
