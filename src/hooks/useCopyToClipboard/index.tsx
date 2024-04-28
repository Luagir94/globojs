const useCopyToClipboard = () => {
	const copy = async (text: string) => {
		await navigator.clipboard.writeText(text)
	}

	return { copy }
}

export default useCopyToClipboard
