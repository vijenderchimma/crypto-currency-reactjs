// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrencyList extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getCurrencyData()
  }

  getCurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(eachCurrencyItem => ({
      id: eachCurrencyItem.id,
      currencyLogo: eachCurrencyItem.currency_logo,
      currencyName: eachCurrencyItem.currency_name,
      euroValue: eachCurrencyItem.euro_value,
      usdValue: eachCurrencyItem.usd_value,
    }))
    this.setState({currencyList: updatedData, isLoading: false})
  }

  render() {
    const {currencyList, isLoading} = this.state
    return (
      <div className="crypto-coin-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div>
            <div className="type-head-container">
              <h1 className="coin-type">Coin Type</h1>
              <div className="coin-text-container">
                <h1 className="coin-text">USD</h1>
                <h1 className="coin-text">EURO</h1>
              </div>
            </div>
            <ul className="currency-list-container">
              {currencyList.map(eachCurrencyItem => (
                <CryptocurrencyItem
                  currencyItem={eachCurrencyItem}
                  key={eachCurrencyItem.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrencyList
