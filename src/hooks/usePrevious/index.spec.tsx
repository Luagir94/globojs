import { renderHook } from '@testing-library/react'
import usePrevious from './index'
import { act } from 'react'
describe('usePrevious', () => {
	test('usePrevious returns the previous value', () => {
		const { result, rerender } = renderHook(value => usePrevious(value), {
			initialProps: 0,
		})

		expect(result.current).toBeUndefined()

		act(() => {
			rerender(1)
		})

		expect(result.current).toBe(0)

		act(() => {
			rerender(2)
		})

		expect(result.current).toBe(1)
	})
})
