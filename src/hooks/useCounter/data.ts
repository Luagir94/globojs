export const parameters = {
	headers: ['Name', 'Type', 'Description'],
	data: [
		['initialValue', 'number', 'The initial value of the counter.'],
		['hasNegatives', 'boolean', 'If true, allows negative values.'],
	],
}

export const returns = {
	headers: ['Name', 'Type', 'Description'],
	data: [
		['value', 'number', 'The current value of the counter.'],
		['increment', '`() => void`', 'A function to increment the counter.'],
		['decrement', '`() => void`', 'A function to decrement the counter.'],
		[
			'reset',
			'`() => void`',
			'A function to reset the counter to its initial value.',
		],
		[
			'setValue',
			'`(value: number) => void`',
			'A function to set the counter to a specific value.',
		],
	],
}
