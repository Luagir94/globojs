import { renderHook, act } from '@testing-library/react'
import useSetInterval from './index'

describe('useSetInterval', () => {
	beforeEach(() => {
		jest.useFakeTimers()
	})

	afterEach(() => {
		jest.clearAllTimers()
		jest.useRealTimers()
	})

	test('should increment cicles after each interval', () => {
		const callback = jest.fn()
		const { result } = renderHook(() => useSetInterval(1000, callback))

		expect(result.current).toBe(0)

		act(() => {
			jest.advanceTimersByTime(1000)
		})

		expect(result.current).toBe(1)
		expect(callback).toHaveBeenCalledTimes(1)

		act(() => {
			jest.advanceTimersByTime(1000)
		})

		expect(result.current).toBe(2)
		expect(callback).toHaveBeenCalledTimes(2)
	})

	test('should clear interval on unmount', () => {
		const clearIntervalSpy = jest.spyOn(global, 'clearInterval')

		const callback = jest.fn()
		const { unmount } = renderHook(() => useSetInterval(1000, callback))

		expect(clearIntervalSpy).not.toHaveBeenCalled()

		unmount()

		expect(clearIntervalSpy).toHaveBeenCalledTimes(2)
	})

	test('should clear timeout on unmount', () => {
		const clearIntervalSpy = jest.spyOn(global, 'clearInterval')

		const callback = jest.fn()
		const { unmount } = renderHook(() => useSetInterval(1000, callback))

		expect(clearIntervalSpy).not.toHaveBeenCalled()

		unmount()

		expect(clearIntervalSpy).toHaveBeenCalledTimes(2)
	})
})
