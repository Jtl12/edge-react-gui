//@flow
import {connect} from 'react-redux'
import LinkedComponent
  from '../../modules/UI/components/CryptoExchangeRate/CryptoExchangeRate'
// import * as actions from '../../actions/indexActions'

export const mapStateToProps = (state: any, ownProps: any) => {
  const fromCurrencyCode = state.cryptoExchange.fromCurrencyCode
  const exchangeRate = state.cryptoExchange.exchangeRate
  const toCurrencyCode = state.cryptoExchange.toCurrencyCode
  const exchangeRateString = '1 '+fromCurrencyCode + ' = '+ exchangeRate +' '+ toCurrencyCode

  return {
    style: ownProps.style,
    exchangeRate: exchangeRateString
  }
}

/* export const mapDispatchToProps = (dispatch) => ({
  // nextScreen: () => dispatch(actions.nextScreen())
})*/

export default connect(mapStateToProps, null)(LinkedComponent)
