import { useEffect, useState, RefObject } from 'react'

/**
 * Custom hook that tracks whether an element is being hovered over.
 * 
 * @param ref - The ref object that points to the element to track.
 * @returns A boolean value indicating whether the element is being hovered over.
 */
const useHover = (ref: RefObject<HTMLElement>) => {
	const [isHovered, setIsHovered] = useState(false)

	const on = () => setIsHovered(true)
	const off = () => setIsHovered(false)

	useEffect(() => {
		const element = ref.current
		if (element) {
			element.addEventListener('mouseenter', on)
			element.addEventListener('mouseleave', off)
		}
		return () => {
			if (element) {
				element.removeEventListener('mouseenter', on)
				element.removeEventListener('mouseleave', off)
			}
		}
	}, [ref])

	return isHovered
}

export default useHover
