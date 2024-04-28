import { renderHook } from '@testing-library/react'
import useSetTimeout from './'
import { act } from 'react'

describe('useSetTimeout', () => {
	beforeEach(() => {
		jest.useFakeTimers()
	})

	afterEach(() => {
		jest.clearAllTimers()
		jest.useRealTimers()
	})

	test('should call the callback after the specified time', () => {
		const callback = jest.fn()
		renderHook(() => useSetTimeout(1000, callback))

		expect(callback).not.toHaveBeenCalled()

		act(() => {
			jest.advanceTimersByTime(1000)
		})

		expect(callback).toHaveBeenCalledTimes(1)
	})

	test('should set isDone to true after the specified time', () => {
		const callback = jest.fn()
		const { result } = renderHook(() => useSetTimeout(1000, callback))

		expect(result.current).toBe(false)

		act(() => {
			jest.advanceTimersByTime(1000)
		})

		expect(result.current).toBe(true)
	})

	test('should clear timeout on unmount', () => {
		const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout')

		const callback = jest.fn()
		const { unmount } = renderHook(() => useSetTimeout(1000, callback))

		expect(clearTimeoutSpy).not.toHaveBeenCalled()

		unmount()

		expect(clearTimeoutSpy).toHaveBeenCalledTimes(1)
	})
})
