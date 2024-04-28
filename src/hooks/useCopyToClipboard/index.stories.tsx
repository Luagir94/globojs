import type { Meta, StoryObj } from '@storybook/react'
import useCopyToClipboard from '.'
import Button from '@/components/Button'

const HookSample = () => {
	const { copy } = useCopyToClipboard()
	const handleCopy = () => {
		copy('Globo🎈')
		alert('Copied to clipboard!')
	}

	return (
		<Button onClick={handleCopy} className="font-bold">
			{' '}
			Copy Globo🎈
		</Button>
	)
}

const meta = {
	title: 'Hooks/useCopyToClipboard',
	component: HookSample,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof HookSample>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}
