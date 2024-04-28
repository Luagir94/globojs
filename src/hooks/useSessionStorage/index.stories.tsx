/* eslint-disable react-hooks/exhaustive-deps */
import type { Meta, StoryObj } from '@storybook/react'

import useSessionStorage from '.'
import Input from '@/components/Input'
import { useState, useEffect } from 'react'

export interface HookSampleProps {
	value: string
}

const HookSample = (args: HookSampleProps) => {
	const [value, setValue] = useState('')
	const [ssValue, setSsValue] = useSessionStorage('default', 'initialValue')
	const handleStorage = (value: string) => {
		setValue(value)
		setSsValue(value)
	}

	useEffect(() => {
		setValue(args.value)
		setSsValue(args.value)
	}, [args.value])

	return (
		<div className="flex flex-col items-center gap-4">
			<label htmlFor="debounceInput" className="flex flex-col gap-2 font-bold">
				Input:
				<Input
					id="debounceInput"
					type="text"
					className="w-32 h-10 p-2 font-normal border-2 border-red-600 border-solid rounded"
					value={value}
					onChange={e => handleStorage(e.target.value)}
				/>
			</label>
			<p>{ssValue}</p>
			<p>Check SessionStorage!</p>
		</div>
	)
}

const meta = {
	title: 'Hooks/useSessionStorage',
	component: HookSample,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof HookSample>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
	args: {
		value: 'value',
	},
}
