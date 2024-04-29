import { useState } from 'react'

const useToggle = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return { toggle, handleToggle }
}

export default useToggle