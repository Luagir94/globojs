import type { Meta, StoryObj } from '@storybook/react'
import useToggle from '.'
import Button from '@/components/Button'



const HookSample = () => {
	const {toggle, handleToggle } = useToggle()
	return <Button onClick={handleToggle}>{JSON.stringify(toggle)}</Button>
}

const meta = {
	title: 'Hooks/useToggle',
	component: HookSample,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof HookSample>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {

}
