import { useEffect, useRef } from 'react'

/**
 * Returns the previous value of the provided value.
 * @template T The type of the value.
 * @param {T} value The current value.
 * @returns {T | undefined} The previous value.
 */
const usePrevious = <T>(value: T) => {
	const ref = useRef<T>()

	useEffect(() => {
		ref.current = value
	}, [value])

	return ref.current
}

export default usePrevious
