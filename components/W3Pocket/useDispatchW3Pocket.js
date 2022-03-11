import { useContext } from 'react'
import W3PocketDispatchContext from './W3PocketDispatchContext'

function useDispatchW3Pocket () {
  return useContext(W3PocketDispatchContext)
}

export default useDispatchW3Pocket
