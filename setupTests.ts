import '@testing-library/jest-dom/extend-expect';

Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: jest.fn().mockImplementation((query) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: jest.fn(),
		removeListener: jest.fn(),
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn(),
	})),
});

export const applyMediaQuery = (queryToMatch: string): void => {
	window.matchMedia = jest.fn().mockImplementation((query: string) => {
		return {
			matches: query === queryToMatch,
			media: '',
			onchange: null,
			addListener: jest.fn(),
			removeListener: jest.fn(),
		};
	});
};

export const injectCSSInJSStyles = (): (() => void) => {
	const insertRule = window.CSSStyleSheet.prototype.insertRule;

	window.CSSStyleSheet.prototype.insertRule = function (rule: string, index: number): number {
		const styleElement = document.createElement('style');
		const textNode = document.createTextNode(rule);

		styleElement.appendChild(textNode);
		document.head.appendChild(styleElement);

		return insertRule.bind(this)(rule, index);
	};
	const applyJSSRules = (): void => {
		window.CSSStyleSheet.prototype.insertRule = insertRule;
		// eslint-disable-next-line
		document.head.innerHTML = document.head.innerHTML;
	};

	return applyJSSRules;
};
