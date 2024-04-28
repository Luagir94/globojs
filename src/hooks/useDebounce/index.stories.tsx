import type { Meta, StoryObj } from '@storybook/react'
import useDebounce from '.'
import Input from '@/components/Input'
import { useState } from 'react'

interface HookSampleProps {
	miliseconds: number
}

const HookSample: React.FC<HookSampleProps> = args => {
	const [text, setText] = useState<string>('Globo')
	const debouncedValue = useDebounce(text, args.miliseconds)
	return (
		<div className="flex flex-col items-center gap-4">
			<label htmlFor="debounceInput" className="flex flex-col gap-2 font-bold">
				Input:
				<Input
					id="debounceInput"
					type="text"
					className="w-32 h-10 p-2 font-normal border-2 border-red-600 border-solid rounded"
					value={text}
					onChange={e => setText(e.target.value)}
				/>
			</label>
			<label
				htmlFor="debounceOutput"
				className="flex flex-col gap-2 font-bold "
			>
				Output:
				<Input
					type="text"
					className="w-32 h-10 p-2 font-normal border-2 border-red-600 border-solid rounded"
					value={debouncedValue}
				/>
			</label>
		</div>
	)
}

const meta: Meta<typeof HookSample> = {
	title: 'Hooks/useDebounce',
	component: HookSample,
	parameters: {
		layout: 'centered',
	},
}

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
	args: {
		miliseconds: 500,
	},
}
