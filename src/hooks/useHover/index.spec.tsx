import { render, fireEvent } from '@testing-library/react'
import useHover from './'
import { useRef } from 'react'

describe('useHover', () => {
	const Component = () => {
		const ref = useRef(null)
		const isHovered = useHover(ref)

		return <div ref={ref}>{isHovered ? 'Hovered' : 'Not hovered'}</div>
	}
	test('useHover changes state when hovered', () => {
		const { getByText } = render(<Component />)
		const divElement = getByText('Not hovered')

		fireEvent.mouseEnter(divElement)

		expect(getByText('Hovered')).toBeTruthy()
	})

	test('useHover changes state when unhovered', () => {
		const { getByText } = render(<Component />)
		const divElement = getByText('Not hovered')

		fireEvent.mouseEnter(divElement)

		fireEvent.mouseLeave(divElement)

		expect(getByText('Not hovered')).toBeTruthy()
	})
})
