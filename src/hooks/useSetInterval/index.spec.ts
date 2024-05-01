import { renderHook } from '@testing-library/react'
import useSetInterval from './index'
import { act } from 'react'

describe('useSetInterval', () => {
	beforeEach(() => {
		jest.useFakeTimers({
			legacyFakeTimers: true,
		})
	})

	afterEach(() => {
		jest.clearAllTimers()
		jest.useRealTimers()
	})

	test('should increment cicles after each interval', () => {
		const callback = jest.fn()
		const { result } = renderHook(() => useSetInterval(1000, callback))

		expect(result.current.cicles).toBe(0)

		act(() => {
			jest.advanceTimersByTime(1000)
		})

		expect(result.current.cicles).toBe(1)
		expect(callback).toHaveBeenCalledTimes(1)

		act(() => {
			jest.advanceTimersByTime(1000)
		})

		expect(result.current.cicles).toBe(2)
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

	test('should clear interval on clear call', () => {
		const clearIntervalSpy = jest.spyOn(global, 'clearInterval')

		const callback = jest.fn()
		const { result } = renderHook(() => useSetInterval(1000, callback))

		expect(clearIntervalSpy).not.toHaveBeenCalled()

		act(() => {
			result.current.clear()
		})

		expect(clearIntervalSpy).toHaveBeenCalledTimes(1)
	})
})
