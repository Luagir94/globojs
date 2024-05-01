export const parameters = {
	headers: ['Name', 'Type', 'Description'],
	data: [
		[
			'miliseconds',
			'number',
			'The delay in milliseconds between each call of the handler.',
		],
		['callback', '`() => void`', 'The function to call at each interval.'],
	],
}

export const returns = {
	headers: ['Name', 'Type', 'Description'],

	data: [
		['clear', '() => void', 'The function to clear the interval.'],
		['cicles', 'number', 'The number of cicles that have passed.'],
	],
}
