import { useState } from 'react'

/**
 * Custom hook for managing a value in session storage.
 * @param key - The key to use for storing the value in session storage.
 * @param initialValue - The initial value to use if no value is found in session storage.
 * @returns An array containing the stored value and a function to update the stored value.
 */
const useSessionStorage = (key: string, initialValue: string) => {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = window.sessionStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			console.error(error);
			return initialValue;
		}
	});

	/**
	 * Function to update the stored value.
	 * @param value - The new value to store in session storage.
	 */
	const setValue = (value: string | ((val: string) => string)) => {
		try {
			const valueToStore = value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
			window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			console.error(error);
		}
	};

	return [storedValue, setValue];
};

export default useSessionStorage
