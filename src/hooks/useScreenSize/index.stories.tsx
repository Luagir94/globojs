import type { Meta, StoryObj } from '@storybook/react'

import useScreensize from '.'



const HookSample: React.FC = () => {
    const { height, width } =useScreensize()
	return (
		<div className="flex flex-col items-center gap-4">
            <p>
                Height: {height}
            </p>
            <p>
                Width: {width}
            </p>
		</div>
	)
}

const meta: Meta<typeof HookSample> = {
	title: 'Hooks/useScreensize',
	component: HookSample,
	parameters: {
		layout: 'centered',
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}
