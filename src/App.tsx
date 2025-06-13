import './App.css'
import ShopItemFunc from './components/shop-item-func/shop-item'
import ShopItemClass from './components/shop-item-class/shop-item'
import type { ShopItemProps } from './components/shop-item-func/shop-item.type'
import Calendar from './components/calendar/calendar'

const shopItem: ShopItemProps = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull:
    "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
  price: 399,
  currency: '£',
}

function App() {
  return (
    <div className="container">
      <div className="container-shop-item">
        <div className="background-element"></div>
        <div className="highlight-window">
          <div className="highlight-overlay"></div>
        </div>
        <div className="window">
          <ShopItemFunc {...shopItem} />
        </div>
      </div>
      <div className="container-shop-item">
        <div className="background-element"></div>
        <div className="highlight-window">
          <div className="highlight-overlay"></div>
        </div>
        <div className="window">
          <ShopItemClass {...shopItem} />
        </div>
      </div>
      <div className="container-calendar">
        <Calendar date={new Date()} />
      </div>
    </div>
  )
}

export default App
