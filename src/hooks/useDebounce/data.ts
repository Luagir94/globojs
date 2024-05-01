export const parameters = {
	headers: ['Name', 'Type', 'Description'],
	data: [
		[
			'ref',
			'`React.MutableRefObject<HTMLElement>`',
			'The reference to the element you want to detect clicks outside of.',
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
	data: [['default', 'string', 'The debounced value.']],
}
