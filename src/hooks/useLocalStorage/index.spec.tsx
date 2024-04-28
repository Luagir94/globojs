import { renderHook } from '@testing-library/react'
import useLocalStorage from './'
import { act } from 'react'
describe('useLocalStorage', () => {
	beforeEach(() => {
		Object.defineProperty(window, 'localStorage', {
			value: {
				getItem: jest.fn(),
				setItem: jest.fn(),
			},
			writable: true,
		})
	})

	test('should initialize with the initial value if no stored value exists', () => {
		const { result } = renderHook(() =>
			useLocalStorage('testKey', 'initialValue'),
		)

		expect(result.current[0]).toBe('initialValue')
	})

	test('should initialize with the stored value if it exists', () => {
		const storedValue = 'storedValue'
		;(window.localStorage.getItem as jest.Mock).mockReturnValueOnce(
			JSON.stringify(storedValue),
		)

		const { result } = renderHook(() =>
			useLocalStorage('testKey', 'initialValue'),
		)

		expect(result.current[0]).toBe(storedValue)
	})

	test('should update the stored value when setValue is called', () => {
		const { result } = renderHook(() =>
			useLocalStorage('testKey', 'initialValue'),
		)

		const newValue = 'newValue'
		act(() => {
			result.current[1](newValue)
		})

		expect(result.current[0]).toBe(newValue)
		expect(window.localStorage.setItem).toHaveBeenCalledWith(
			'testKey',
			JSON.stringify(newValue),
		)
	})

	test('should update the stored value using a function when setValue is called', () => {
		const { result } = renderHook(() =>
			useLocalStorage('testKey', 'initialValue'),
		)

		const updateFunction = (prevValue: string) => prevValue.toUpperCase()
		act(() => {
			result.current[1](updateFunction)
		})

		expect(result.current[0]).toBe('INITIALVALUE')
		expect(window.localStorage.setItem).toHaveBeenCalledWith(
			'testKey',
			JSON.stringify('INITIALVALUE'),
		)
	})

	test('should catch and log errors when getting value from localStorage', () => {
		const consoleErrorSpy = jest.spyOn(console, 'error')
		window.localStorage.getItem = jest.fn(() => {
			throw new Error('localStorage error')
		})

		renderHook(() => useLocalStorage('testKey', 'initialValue'))

		expect(consoleErrorSpy).toHaveBeenCalledWith(
			new Error('localStorage error'),
		)
	})

	test('should catch and log errors when setting value to localStorage', () => {
		const consoleErrorSpy = jest.spyOn(console, 'error')
		window.localStorage.setItem = jest.fn(() => {
			throw new Error('localStorage error')
		})

		const { result } = renderHook(() =>
			useLocalStorage('testKey', 'initialValue'),
		)

		act(() => {
			result.current[1]('newValue')
		})

		expect(consoleErrorSpy).toHaveBeenCalledWith(
			new Error('localStorage error'),
		)
	})
})
