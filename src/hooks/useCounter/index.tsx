import { useState } from 'react'
/**
 * Custom hook for managing a counter.
 * @component
 * @param initialValue - The initial value of the counter. Default is 0.
 * @param hasNegatives - Determines whether negative values are allowed. Default is false.
 * @returns An object containing the counter value and functions to manipulate it.
 */
const useCounter = (initialValue = 0, hasNegatives = false) => {
	const [counter, setCounter] = useState(initialValue)

	/**
	 * Increments the counter by a specified value.
	 *
	 * @memberOf useCounter
	 * @param value - The value to increment the counter by. Default is 1.
	 */
	const increment = (value = 1) => {
		setCounter(current => current + value)
	}

	/**
	 * Decrements the counter by a specified value.
	 *
	 * @memberOf useCounter
	 * @param value - The value to decrement the counter by. Default is 1.
	 */
	const decrement = (value = 1) => {
		if (!hasNegatives && counter - value < 0) {
			return
		}
		setCounter(current => current - value)
	}

	/**
	 * @memberOf useCounter
	 * Resets the counter to its initial value.
	 */
	const reset = () => {
		setCounter(initialValue)
	}

	/**
	 * Sets the counter to a specified value.
	 *
	 * @memberOf useCounter
	 * @param value - The value to set the counter to.
	 */
	const setValue = (value: number) => {
		setCounter(value)
	}

	return {
		value: counter,
		increment,
		decrement,
		reset,
		setValue,
	}
}

export default useCounter
