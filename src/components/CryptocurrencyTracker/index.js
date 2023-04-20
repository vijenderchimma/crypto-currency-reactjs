// Write your code here
import CryprocurrencyList from '../CryptocurrenciesList'
import './index.css'

const CryptoCurrencyTracker = () => (
  <div className="app-container">
    <div className="crypto-content-container">
      <h1 className="crypto-heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        className="image"
        alt="cryptocurrency"
      />
      <CryprocurrencyList />
    </div>
  </div>
)

export default CryptoCurrencyTracker
