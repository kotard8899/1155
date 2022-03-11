import { useEffect, useReducer } from 'react'
import W3PocketReducer from './W3PocketReducer'
import W3PocketInitialState from './W3PocketInitialState'
import W3PocketStateContext from './W3PocketStateContext'
import W3PocketDispatchContext from './W3PocketDispatchContext'

function W3PocketContextProvider ({ children }) {
  const [state, dispatch] = useReducer(W3PocketReducer, W3PocketInitialState)

  // 偵測是否有安裝MetaMask
  // https://docs.metamask.io/guide/mobile-best-practices.html#the-provider-window-ethereum
  useEffect(() => {
    function handleEthereum () {
      dispatch({
        type: 'DETECT_METAMASK_INSTALLED',
        payload: window.ethereum,
      })
    }

    if (window.ethereum) {
      handleEthereum()
    } else {
      window.addEventListener('ethereum#initialized', handleEthereum, { once: true })

      setTimeout(handleEthereum, 3000)
    }
  }, [])

  // 事件處理
  useEffect(() => {
    function handleChainChanged (chainId) {
      dispatch({
        type: 'UPDATE_CHAIN_ID',
        payload: chainId,
      })
    }

    function handleAccountsChanged (accounts) {
      dispatch({
        type: 'UPDATE_ACCOUNTS',
        payload: accounts,
      })
    }

    if (state.provider) {
      state.provider.on('chainChanged', handleChainChanged)
      state.provider.on('accountsChanged', handleAccountsChanged)
    }

    return () => {
      if (state.provider) {
        state.provider.removeListener('chainChanged', handleChainChanged)
        state.provider.removeListener('accountsChanged', handleAccountsChanged)
      }
    }
  }, [state.provider])

  // web3.js
  useEffect(() => {
    if (state.provider) {
      dispatch({
        type: 'UPDATE_WEB3_PROVIDER',
        payload: state.provider,
      })
    }
  }, [state.provider])

  // 偵測目前的chain id
  useEffect(() => {
    (async () => {
      if (state.provider) {
        const chainId = await state.provider.request({ method: 'eth_chainId' })

        dispatch({
          type: 'UPDATE_CHAIN_ID',
          payload: chainId,
        })
      }
    })()
  }, [state.provider])

  // 偵測目前的accounts
  useEffect(() => {
    (async () => {
      if (state.provider) {
        const accounts = await state.provider.request({ method: 'eth_accounts' })

        dispatch({
          type: 'UPDATE_ACCOUNTS',
          payload: accounts,
        })
      }
    })()
  }, [state.provider])

  return (
    <W3PocketDispatchContext.Provider value={dispatch}>
      <W3PocketStateContext.Provider value={state}>
        {children}
      </W3PocketStateContext.Provider>
    </W3PocketDispatchContext.Provider>
  )
}

export default W3PocketContextProvider
