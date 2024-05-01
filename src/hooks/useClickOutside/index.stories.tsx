import type { Meta, StoryObj } from '@storybook/react'
import useClickOutside from '.'
import React, { useRef, useState } from 'react'
import Button from '@/components/Button';

const HookSample = () => {
	const ref = useRef<HTMLButtonElement>(null)
	const [clicksOutside, setClicksOutside] = useState(0)
	const callback = () => {
		setClicksOutside(prev => prev + 1)
	}
	useClickOutside(ref, callback)

	return (
		<>
			<Button ref={ref} className="font-bold">
				Click outside!
			</Button>

			<p>Clicks outside: {clicksOutside}</p>
		</>
	)
}

const meta = {
	title: 'Hooks/useClickOutside',
	component: HookSample,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof HookSample>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}
