import { useState } from 'react'

/**
 * Custom hook that provides a boolean toggle state and a function to toggle the state.
 *
 * @returns An object containing the toggle state and the toggle function.
 */
const useToggle = () => {
	const [toggle, setToggle] = useState(false)

	const handleToggle = () => {
		setToggle(!toggle)
	}

	return { toggle, handleToggle }
}

export default useToggle
