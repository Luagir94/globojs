import { RefObject, useEffect } from 'react'

/**
 * Custom hook that detects clicks outside of a specified element.
 * 
 * @param ref - The ref object that points to the element to detect clicks outside of.
 * @param callback - The callback function to be called when a click outside of the element is detected.
 */
const useClickOutside = (
	ref: RefObject<HTMLElement>,
	callback: (event: MouseEvent) => unknown,
) => {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				callback(event)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [ref, callback])
}

export default useClickOutside
