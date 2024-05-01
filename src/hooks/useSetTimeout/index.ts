import { useEffect, useState, useRef } from 'react'

/**
 * Custom hook that sets a timeout and executes a callback function after the specified time has elapsed.
 * @param initialTime - The initial time in milliseconds before the callback is executed.
 * @param callback - The callback function to be executed after the specified time has elapsed.
 * @returns An object containing the `isDone` flag and a `clear` function to cancel the timeout.
 */
const useSetTimeout = (
	initialTime: number,
	callback: (() => unknown) | (() => Promise<unknown>),
) => {
	const [isDone, setIsDone] = useState(false)
	const timerId = useRef<NodeJS.Timeout | null>(null)

	useEffect(() => {
		setIsDone(false)
		timerId.current = setTimeout(() => {
			callback()
			setIsDone(true)
		}, initialTime)

		return () => {
			if (timerId.current) {
				clearTimeout(timerId.current)
			}
		}
	}, [callback, initialTime])

	const clear = () => {
		if (timerId.current) {
			clearTimeout(timerId.current)
		}
		setIsDone(true)
	}

	return {
		isDone,
		clear,
	}
}

export default useSetTimeout
