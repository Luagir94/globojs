import { render, fireEvent } from '@testing-library/react'
import React,{ useRef } from 'react'
import useClickOutside from './'

describe('useClickOutside', () => {
	test('callback is called when clicking outside the ref element', () => {
		const callback = jest.fn()
		const Component = () => {
			const ref = useRef(null)
			useClickOutside(ref, callback)

			return (
				<div>
					<div ref={ref}>Click outside me</div>
					<div>Click inside me</div>
				</div>
			)
		}

		const { getByText } = render(<Component />)
		const divElement = getByText('Click inside me')

		fireEvent.mouseDown(divElement)

		expect(callback).toHaveBeenCalled()
	})

	test('callback is not called when clicking inside the ref element', () => {
		const callback = jest.fn()
		const Component = () => {
			const ref = useRef(null)
			useClickOutside(ref, callback)

			return (
				<div>
					<div ref={ref}>Click inside me</div>
				</div>
			)
		}

		const { getByText } = render(<Component />)
		const divElement = getByText('Click inside me')

		fireEvent.mouseDown(divElement)

		expect(callback).not.toHaveBeenCalled()
	})
})
