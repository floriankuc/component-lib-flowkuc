import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		primaryColor: string;
		secondaryColor: string;
		button: {
			color: string;
		};
		mixins: {
			link: FlattenSimpleInterpolation;
		};
	}

	export function createGlobalStyle(strings: TemplateStringsArray, ...interpolations: SimpleInterpolation[]): React.ComponentClass;
}
