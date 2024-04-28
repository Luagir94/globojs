import type { Meta, StoryObj } from '@storybook/react'
import { useRef } from 'react'
import useHover from '.'
import Button from '@/components/Button'

const HookSample = () => {
	const ref = useRef<HTMLButtonElement>(null)
	const isHovered = useHover(ref)
	return (
		<Button ref={ref} className="w-40 font-bold">
			{isHovered ? "It's hovered🎈" : 'Hover!'}
		</Button>
	)
}

const meta = {
	title: 'Hooks/useHover',
	component: HookSample,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof HookSample>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}
