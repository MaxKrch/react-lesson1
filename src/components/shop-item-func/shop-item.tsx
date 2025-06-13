import { memo } from 'react'
import formatPrice from '../../utils/format-price'
import { type ShopItemProps } from './shop-item.type'

function ShopItem(props: ShopItemProps) {
  const { brand, title, description, descriptionFull, price, currency } = props

  return (
    <div className="main-content">
      <h2>{brand}</h2>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <div className="description">{descriptionFull}</div>
      <div className="highlight-window mobile">
        <div className="highlight-overlay"></div>
      </div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{formatPrice(price, currency)}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  )
}

export default memo(ShopItem)
