import { useState } from 'react'

/**
 * Custom hook that provides a state value stored in the browser's local storage.
 * @param key - The key used to store the value in local storage.
 * @param initialValue - The initial value to use if no value is found in local storage.
 * @returns A tuple containing the stored value and a function to update the value.
 */
const useLocalStorage = (key: string, initialValue: string) => {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = window.localStorage.getItem(key)
			return item ? JSON.parse(item) : initialValue
		} catch (error) {
			console.error(error)
			return initialValue
		}
	})

	const setValue = (value: string | ((val: string) => string)) => {
		try {
			const valueToStore =
				value instanceof Function ? value(storedValue) : value
			setStoredValue(valueToStore)
			window.localStorage.setItem(key, JSON.stringify(valueToStore))
		} catch (error) {
			console.error(error)
		}
	}

	return [storedValue, setValue]
}

export default useLocalStorage
