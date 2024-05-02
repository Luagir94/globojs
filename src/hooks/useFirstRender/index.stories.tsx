import type { Meta, StoryObj } from '@storybook/react'

import useCounter from '../useCounter'
import Button from '@/components/Button'
import useFirstRender from '.'

const HookSample: React.FC = () => {
	const { value, increment } = useCounter(0)
	const isFirstRender = useFirstRender()

	return (
		<div className="flex flex-col items-center gap-4">
			<Button onClick={() => increment()}>Rerender</Button>

			<p>Number of renders {value}</p>
			<p>Is first render: {isFirstRender ? 'true' : 'false'}</p>
		</div>
	)
}

const meta: Meta<typeof HookSample> = {
	title: 'Hooks/useFirstRender',
	component: HookSample,
	parameters: {
		layout: 'centered',
	},
}

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}
