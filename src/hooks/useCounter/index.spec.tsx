import { renderHook } from '@testing-library/react'
import useCounter from './'
import { act } from 'react'
describe('useCounter', () => {
	test('should initialize counter with default value', () => {
		const { result } = renderHook(() => useCounter())
		expect(result.current.value).toBe(0)
	})

	test('should initialize counter with provided value', () => {
		const { result } = renderHook(() => useCounter(10))
		expect(result.current.value).toBe(10)
	})

	test('should increment counter by 1', () => {
		const { result } = renderHook(() => useCounter())
		act(() => {
			result.current.increment()
		})
		expect(result.current.value).toBe(1)
	})

	test('should increment counter by provided value', () => {
		const { result } = renderHook(() => useCounter())
		act(() => {
			result.current.increment(5)
		})
		expect(result.current.value).toBe(5)
	})

	test('should decrement counter by 1', () => {
		const { result } = renderHook(() => useCounter(10))
		act(() => {
			result.current.decrement()
		})
		expect(result.current.value).toBe(9)
	})

	test('should decrement counter by provided value', () => {
		const { result } = renderHook(() => useCounter(10))
		act(() => {
			result.current.decrement(5)
		})
		expect(result.current.value).toBe(5)
	})

	test('should not decrement counter below 0 when hasNegatives is false', () => {
		const { result } = renderHook(() => useCounter(0, false))
		act(() => {
			result.current.decrement()
		})
		expect(result.current.value).toBe(0)
	})

	test('should reset counter to initial value', () => {
		const { result } = renderHook(() => useCounter(10))
		act(() => {
			result.current.increment()
			result.current.reset()
		})
		expect(result.current.value).toBe(10)
	})

	test('should set counter to provided value', () => {
		const { result } = renderHook(() => useCounter())
		act(() => {
			result.current.setValue(5)
		})
		expect(result.current.value).toBe(5)
	})
})
