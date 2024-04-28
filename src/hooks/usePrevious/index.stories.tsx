import type { Meta, StoryObj } from '@storybook/react'
import Input from '@/components/Input'
import { SetStateAction, useState } from 'react'
import usePrevious from '.'

interface HookSampleProps {
	miliseconds: number
}

const HookSample: React.FC<HookSampleProps> = () => {
	const [text, setText] = useState<string>('Globo')
	const prevValue = usePrevious(text)
	return (
		<div className="flex flex-col items-center gap-4">
			<label htmlFor="debounceInput" className="flex flex-col gap-2 font-bold">
				Value:
				<Input
					id="debounceInput"
					type="text"
					className="w-32 h-10 p-2 font-normal border-2 border-red-600 border-solid rounded"
					value={text}
					onChange={(e: { target: { value: SetStateAction<string> } }) =>
						setText(e.target.value)
					}
				/>
			</label>
			<label
				htmlFor="debounceOutput"
				className="flex flex-col gap-2 font-bold "
			>
				Previous Value:
				<Input
					type="text"
					className="w-32 h-10 p-2 font-normal border-2 border-red-600 border-solid rounded"
					value={prevValue}
				/>
			</label>
		</div>
	)
}

const meta: Meta<typeof HookSample> = {
	title: 'Hooks/usePrevious',
	component: HookSample,
	parameters: {
		layout: 'centered',
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}
