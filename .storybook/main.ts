import type { StorybookConfig } from '@storybook/react-vite'
const tsconfigPaths = require('vite-tsconfig-paths')

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-docs',
		'@storybook/addon-storysource',
		'@storybook/addon-actions',
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	typescript: {
		reactDocgen: 'react-docgen-typescript',
	},
	core: {
		builder: '@storybook/builder-vite',
	},
	
	async viteFinal(config) {
		return {
			...config,
			plugins: [...(config.plugins || []), tsconfigPaths.default()],
		}
	},
	managerHead: head => `
    ${head}
    <link rel="preload" href="/fonts/my-custom-manager-font.woff2" />
	<title>Globo Js</title>

	<meta name="description" content="React hooks library" key="desc" />

  `,
}

export default config
