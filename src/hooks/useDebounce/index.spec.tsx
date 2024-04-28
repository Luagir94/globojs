import { renderHook } from '@testing-library/react'
import useDebounce from './'
import { act } from 'react'
describe('useDebounce', () => {
	beforeEach(() => {
		jest.useFakeTimers()
	})

	afterEach(() => {
		jest.clearAllTimers()
		jest.useRealTimers()
	})
	test('should return the initial value', () => {
		const { result } = renderHook(() => useDebounce('initial', 500))

		expect(result.current).toBe('initial')
	})

	test('should update the debounced value after the delay', () => {
		const { result, rerender } = renderHook(
			({ value, delay }) => useDebounce(value, delay),
			{
				initialProps: { value: 'initial', delay: 500 },
			},
		)

		expect(result.current).toBe('initial')

		act(() => {
			rerender({ value: 'updated', delay: 500 })
		})

		expect(result.current).toBe('initial')

		act(() => {
			jest.runAllTimers()
		})

		expect(result.current).toBe('updated')

		jest.useRealTimers()
	})
})
