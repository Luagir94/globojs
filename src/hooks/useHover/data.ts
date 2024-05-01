export const parameters = {
	headers: ['Name', 'Type', 'Description'],
	data: [
		[
			'ref',
			'`React.MutableRefObject<HTMLElement>`',
			'The reference to the element you want to detect hover on.',
		],
		[
			'handler',
			'`() => void`',
			'The function to call when a click outside is detected.',
		],
	],
}

export const returns = {
	headers: ['Name', 'Type', 'Description'],
	data: [['isHovered', 'boolean', 'Whether the element is currently hovered.']],
}
