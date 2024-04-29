import type { Preview } from '@storybook/react'
import '../styles.css'
const preview: Preview = {
	parameters: {
		parameters: {
			layout: 'centered',
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		options: {
			storySort: {
				order: ['Introduction', 'Installation', 'CHANGELOG', 'Hooks'],
			},
		},
	},
}

export default preview
