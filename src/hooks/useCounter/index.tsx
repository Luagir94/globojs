import { useState } from 'react'
const useCounter = (initialValue = 0, hasNegatives = false) => {
	const [counter, setCounter] = useState(initialValue)

	const increment = (value = 1) => {
		setCounter(current => current + value)
	}

	const decrement = (value = 1) => {
		if (!hasNegatives && counter - value < 0) {
			return
		}
		setCounter(current => current - value)
	}

	const reset = () => {
		setCounter(initialValue)
	}

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
