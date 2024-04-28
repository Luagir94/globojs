import { useState, useEffect, useRef } from 'react'

const useSetInterval = (
	initialTime: number,
	callback: (() => unknown) | (() => Promise<unknown>),
) => {
	const [cicles, setCicles] = useState(0)
	const intervalId = useRef<NodeJS.Timeout | null>(null)

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

	return cicles
}

export default useSetInterval
