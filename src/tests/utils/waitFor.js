import { waitFor as _waitFor } from '@testing-library/react'

export const waitFor = (callback, options) => {
  const mergedOptions = () => {
    const ovOptions = { ...origOptions }
    ovOptions.timeout = 10000
    return ovOptions
  }

  return _waitFor(callback, mergedOptions())
}