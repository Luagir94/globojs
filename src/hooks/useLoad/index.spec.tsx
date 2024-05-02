import { renderHook } from '@testing-library/react'
import useLoad from './index';

describe('useLoad hook', () => {
    it('should initially return load as false and provide a toggleLoad function', () => {
        const { result } = renderHook(() => useLoad(false));
        const [isLoading, toggleLoad] = result.current;

        expect(isLoading).toBe(false);
        expect(typeof toggleLoad).toBe('function');
    });
    it('should initially return load as true and provide a toggleLoad function', () => {
        const { result } = renderHook(() => useLoad(true))
        const [load, toggleLoad] = result.current;
        expect(load).toBe(true)
        expect(typeof toggleLoad).toBe('function');
    })

    it('should return true when a false state is switched with toggleLoad', () => {
        const { result } = renderHook(() => useLoad(false))
        const [load, toggleLoad] = result.current;
        toggleLoad

        setTimeout(() => { expect(load).toBe(true) }, 2000)
    })


    it('should return false when a true state is switched with toggleLoad', () => {
        const { result } = renderHook(() => useLoad(true))
        const [load, toggleLoad] = result.current;
        toggleLoad

        setTimeout(() => { expect(load).toBe(false) }, 2000)
    })
});