import { renderHook } from '@testing-library/react'
import { act } from 'react'
import useScreenSize from './index'

describe('useScreenSize', () => {
	let originalWindow: Window & typeof globalThis
	const realWindow = global.window
	const originalWidth = window.innerWidth
	const originalHeight = window.innerHeight

	afterEach(() => {
		// Restaura los valores originales después de cada prueba
		global.window = realWindow
		window.innerWidth = originalWidth
		window.innerHeight = originalHeight
	})

	afterAll(() => {
		global.window = originalWindow
	})

	test('should return the initial screen size', () => {
		const { result } = renderHook(() => useScreenSize())

		expect(result.current).toEqual({ width: 1024, height: 768 })
	})

	test('should update the screen size on window resize', () => {
		const { result, rerender } = renderHook(() => useScreenSize())

		act(() => {
			global.window.innerWidth = 800
			global.window.innerHeight = 600
			window.dispatchEvent(new Event('resize'))
		})

		rerender()

		expect(result.current).toEqual({ width: 800, height: 600 })
	})

	test('should remove event listener on unmount', () => {
		const removeEventListenerMock = jest.fn()
		global.window.removeEventListener = removeEventListenerMock

		const { unmount } = renderHook(() => useScreenSize())

		unmount()

		expect(global.window.removeEventListener).toHaveBeenCalledTimes(1)
		expect(global.window.removeEventListener).toHaveBeenCalledWith(
			'resize',
			expect.any(Function),
		)
	})
})
