import { useContext } from 'react'
import W3PocketStateContext from './W3PocketStateContext'

function useW3Pocket () {
  return useContext(W3PocketStateContext)
}

export default useW3Pocket
