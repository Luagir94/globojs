/* eslint-disable react-hooks/exhaustive-deps */
import type { Meta, StoryObj } from '@storybook/react'
import { useState, useEffect } from 'react'

import Input from '@/components/Input'
import useLocalStorage from '.'

export interface HookSampleProps {
	value: string
}

const HookSample = (args: HookSampleProps) => {
	const [value, setValue] = useState('')
	const [lsValue, setLsValue] = useLocalStorage('default', 'initialValue')
	const handleStorage = (value: string) => {
		setValue(value)
		setLsValue(value)
	}

	useEffect(() => {
		setValue(args.value)
		setLsValue(args.value)
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
			<p>{lsValue}</p>
			<p>Check Localstorage!</p>
		</div>
	)
}

const meta = {
	title: 'Hooks/useLocalStorage',
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
