import Web3 from 'web3'

function W3PocketReducer (state, action) {
  switch (action.type) {
    case 'DETECT_METAMASK_INSTALLED':
      return {
        ...state,
        isMetaMaskInstalled: !!action.payload?.isMetaMask,
        provider: undefined === action.payload ? null : action.payload,
      }
    case 'UPDATE_WEB3_PROVIDER':
      return {
        ...state,
        web3Provider: new Web3(action.payload),
      }
    case 'UPDATE_CHAIN_ID':
      return {
        ...state,
        chainId: action.payload,
        networkId: parseInt(action.payload, 16),
      }
    case 'UPDATE_ACCOUNTS':
      return {
        ...state,
        accounts: action.payload,
      }
    default:
      throw new Error()
  }
}

export default W3PocketReducer
