import { renderHook } from '@testing-library/react'
import useSessionStorage from './'
import { act } from 'react'
describe('useSessionStorage', () => {
	beforeEach(() => {
		Object.defineProperty(window, 'sessionStorage', {
			value: {
				getItem: jest.fn(),
				setItem: jest.fn(),
			},
			writable: true,
		})
	})

	test('should initialize with the initial value if no stored value exists', () => {
		const { result } = renderHook(() =>
			useSessionStorage('testKey', 'initialValue'),
		)

		expect(result.current[0]).toBe('initialValue')
	})

	test('should initialize with the stored value if it exists', () => {
		const storedValue = 'storedValue'
		;(window.sessionStorage.getItem as jest.Mock).mockReturnValueOnce(
			JSON.stringify(storedValue),
		)

		const { result } = renderHook(() =>
			useSessionStorage('testKey', 'initialValue'),
		)

		expect(result.current[0]).toBe(storedValue)
	})

	test('should update the stored value when setValue is called', () => {
		const { result } = renderHook(() =>
			useSessionStorage('testKey', 'initialValue'),
		)

		const newValue = 'newValue'
		act(() => {
			result.current[1](newValue)
		})

		expect(result.current[0]).toBe(newValue)
		expect(window.sessionStorage.setItem).toHaveBeenCalledWith(
			'testKey',
			JSON.stringify(newValue),
		)
	})

	test('should update the stored value using a function when setValue is called', () => {
		const { result } = renderHook(() =>
			useSessionStorage('testKey', 'initialValue'),
		)

		const updateFunction = (prevValue: string) => prevValue.toUpperCase()
		act(() => {
			result.current[1](updateFunction)
		})

		expect(result.current[0]).toBe('INITIALVALUE')
		expect(window.sessionStorage.setItem).toHaveBeenCalledWith(
			'testKey',
			JSON.stringify('INITIALVALUE'),
		)
	})

	test('should catch and log errors when getting value from sessionStorage', () => {
		const consoleErrorSpy = jest.spyOn(console, 'error')
		window.sessionStorage.getItem = jest.fn(() => {
			throw new Error('sessionStorage error')
		})

		renderHook(() => useSessionStorage('testKey', 'initialValue'))

		expect(consoleErrorSpy).toHaveBeenCalledWith(
			new Error('sessionStorage error'),
		)
	})

	test('should catch and log errors when setting value to sessionStorage', () => {
		const consoleErrorSpy = jest.spyOn(console, 'error')
		window.sessionStorage.setItem = jest.fn(() => {
			throw new Error('sessionStorage error')
		})

		const { result } = renderHook(() =>
			useSessionStorage('testKey', 'initialValue'),
		)

		act(() => {
			result.current[1]('newValue')
		})

		expect(consoleErrorSpy).toHaveBeenCalledWith(
			new Error('sessionStorage error'),
		)
	})
})
