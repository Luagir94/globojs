export const parameters = {
	headers: ['Name', 'Type', 'Description'],
	data: [
		['key', 'string', 'The key to store the value in the LocalStorage.'],
		['initalValue', 'string', 'The initial value to store in local storage.'],
	],
}

export const returns = {
	headers: ['Name', 'Type', 'Description'],
	data: [
		['lsValue', 'string', 'The value stored in LocalStorage.'],
		['setValue', '`(value: string) => void`', 'A function to set the value in LocalStorage.'],
	],
}
