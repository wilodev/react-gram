import { useState } from 'react'

export function useLocalStorage (key, initalValue) {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initalValue
    } catch (e) {
      return initalValue
    }
  })

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (e) {
      console.error(e)
    }
  }
  return [storedValue, setLocalStorage]
}
