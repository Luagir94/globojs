import { useState, useEffect, useRef } from 'react'
/**
 * Custom hook that sets up an interval and executes a callback function repeatedly at a specified time interval.
 *
 * @param initialTime - The time interval (in milliseconds) at which the callback function should be executed.
 * @param callback - The callback function to be executed repeatedly.
 * @returns An object containing the number of cycles and a function to clear the interval.
 */
const useSetInterval = (
	initialTime: number,
	callback: (() => unknown) | (() => Promise<unknown>),
) => {
	const [cicles, setCicles] = useState(0)
	const intervalId = useRef<NodeJS.Timeout | null>(null)

	const clear = () => {
		if (intervalId.current) {
			clearInterval(intervalId.current)
		}
		setCicles(0)
	}

	useEffect(() => {
		return () => {
			if (intervalId.current) {
				clearInterval(intervalId.current)
			}
		}
	}, [])

	useEffect(() => {
		setCicles(0)

		if (intervalId.current) {
			clearInterval(intervalId.current)
		}

		intervalId.current = setInterval(() => {
			callback()
			setCicles(prev => prev + 1)
		}, initialTime)

		return () => {
			if (intervalId.current) {
				clearInterval(intervalId.current)
			}
		}
	}, [callback, initialTime])

	return { cicles, clear }
}

export default useSetInterval
