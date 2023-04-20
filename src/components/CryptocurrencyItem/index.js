// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyItem} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = currencyItem

  return (
    <li className="list-item">
      <div className="logo-container">
        <img src={currencyLogo} className="logo" alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="value-container">
        <p className="value">{usdValue}</p>
        <p className="value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
