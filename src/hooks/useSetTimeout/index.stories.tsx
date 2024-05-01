import type { Meta, StoryObj } from '@storybook/react'
import useSetTimeout from '.'
import Button from '@/components/Button'

interface HookSampleProps {
	miliseconds: number
	callback: () => void | Promise<void>
}

const HookSample = (args: HookSampleProps) => {
	const { isDone } = useSetTimeout(args.miliseconds, args.callback)
	return <Button>{isDone ? 'Done' : 'Not done'}</Button>
}

const meta = {
	title: 'Hooks/useSetTimeout',
	component: HookSample,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof HookSample>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
	args: {
		miliseconds: 3000,
		callback: () => console.log('Done!'),
	},
}
