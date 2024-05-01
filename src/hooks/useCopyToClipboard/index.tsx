/**
 * Custom hook to copy text to the clipboard.
 * @returns An object with a `copy` function that can be used to copy text to the clipboard.
 */
const useCopyToClipboard = () => {
	const copy = async (text: string) => {
		await navigator.clipboard.writeText(text);
	};

	return { copy };
};

export default useCopyToClipboard
