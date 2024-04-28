import { useEffect, useState, useRef } from 'react'

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

	return isDone
}

export default useSetTimeout
