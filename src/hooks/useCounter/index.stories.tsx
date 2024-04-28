import type { Meta, StoryObj } from '@storybook/react'
import useCounter from '.'
import Button from '@/components/Button'

interface HookSampleProps {
	initialValue: number
	hasNegatives: boolean
}

const HookSample: React.FC<HookSampleProps> = args => {
	const { value, increment, decrement, reset, setValue } = useCounter(
		args.initialValue,
		args.hasNegatives,
	)
	return (
		<div className="flex items-center gap-4">
			<Button onClick={() => reset()} className="w-20 font-bold">
				Reset
			</Button>
			<Button onClick={() => decrement()} className="w-10 font-bold">
				-1
			</Button>
			<p className="w-4 font-bold text-center">{value}</p>
			<Button onClick={() => increment()} className="w-10 font-bold">
				+1
			</Button>
			<Button onClick={() => setValue(73)} className="w-20 font-bold">
				Set 73
			</Button>
		</div>
	)
}

const meta = {
	title: 'Hooks/useCounter',
	component: HookSample,
	parameters: {
		layout: 'centered',
	}
} satisfies Meta<typeof HookSample>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
	args: {
		initialValue: 0,
		hasNegatives: false,
	},
}
