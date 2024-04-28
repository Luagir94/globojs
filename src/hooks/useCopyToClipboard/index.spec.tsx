import { renderHook, act } from '@testing-library/react'
import useCopyToClipboard from './'

describe('useCopyToClipboard', () => {
	const writeText = jest.fn()

	Object.assign(navigator, {
		clipboard: {
			writeText,
		},
	})

	test('should copy text to clipboard', async () => {
		const { result } = renderHook(() => useCopyToClipboard())
		const text = 'Hello, world!'
		await act(async () => {
			await result.current.copy(text)
		})
		expect(writeText).toHaveBeenCalledWith(text)
	})
})
