import { useEffect, useState } from 'react'

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0
    })
    
    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== 'undefined') {
                setScreenSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                })
            }
        }
    
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize)
        }
    
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize)
            }
        }
    }, [])
    
    return screenSize
}

export default useScreenSize