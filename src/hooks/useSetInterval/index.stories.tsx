import type { Meta, StoryObj } from '@storybook/react'

import Button from '@/components/Button'
import useSetInterval from '.'

interface HookSampleProps {
	miliseconds: number
	callback: () => void | Promise<void>
}

const HookSample = (args: HookSampleProps) => {
	const cicles = useSetInterval(args.miliseconds, args.callback)

	return (
			<Button className="font-bold">Cicles: {cicles}</Button>
	)
}

const meta = {
	title: 'Hooks/useSetInterval',
	component: HookSample,
	parameters: {
		layout: 'centered',
	},

} satisfies Meta<typeof HookSample>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
	args: {
		miliseconds: 1000,
		callback: () => console.log('Done!'),
	},
}
