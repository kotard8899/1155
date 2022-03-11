import { useCallback, useEffect } from 'react'
import useW3Pocket from './useW3Pocket'
import { Button } from '@/components/Button'

function W3PocketConnectButton () {
  const w3Pocket = useW3Pocket()

  const requestAccounts = useCallback(async () => {
    try {
      await w3Pocket.provider.request({ method: 'eth_requestAccounts' })
    } catch (e) {

    }
  }, [w3Pocket.provider])

  if (!w3Pocket.isMetaMaskInstalled) {
    return (
      <Button
        href="https://metamask.io/download.html"
        target="_blank"
      >
        Install MetaMask
      </Button>
    )
  } else {
    if (w3Pocket.accounts.length > 0) {
      const account = `${w3Pocket.accounts[0].slice(0, 5)}...${w3Pocket.accounts[0].slice(-4)}`
      return <Button>{account}</Button>
    }
    return <Button onClick={requestAccounts}>Connect</Button>
  }
}

export default W3PocketConnectButton
