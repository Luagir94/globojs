export const parameters = {
	headers: ['Name', 'Type', 'Description'],
	data: [
		['miliseconds', 'number', 'The delay in milliseconds.'],
		['callback', '`() => void`', 'The function to clear timeout.'],
	],
}

export const returns = {
	headers: ['Name', 'Type', 'Description'],

	data: [
		['clear', '() => void', 'The function to clear the interval.'],
		['isDone', 'boolean', 'If the timeout has been cleared.'],
	],
}
