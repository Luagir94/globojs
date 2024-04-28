import { useEffect, useState, RefObject } from 'react'

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
