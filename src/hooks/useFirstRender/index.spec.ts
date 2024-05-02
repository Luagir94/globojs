import { renderHook } from '@testing-library/react'
import useFirstRender from './index'

describe('useFirstRender', () => {
	test('should return true on first render', () => {
		const { result } = renderHook(() => useFirstRender())

		expect(result.current).toBe(true)
	})

	test('should return false on subsequent renders', () => {
		const { result, rerender } = renderHook(() => useFirstRender())

		expect(result.current).toBe(true)

		rerender()

		expect(result.current).toBe(false)
	})
})
