import { css } from 'styled-components';
import Montserrat400_1 from './montserrat-v18-latin-400.woff';
import Montserrat400_2 from './montserrat-v18-latin-400.woff2';
import Montserrat500_1 from './montserrat-v18-latin-500.woff';
import Montserrat500_2 from './montserrat-v18-latin-500.woff2';
import Montserrat600_1 from './montserrat-v18-latin-600.woff';
import Montserrat600_2 from './montserrat-v18-latin-600.woff2';
import Montserrat700_1 from './montserrat-v18-latin-700.woff';
import Montserrat700_2 from './montserrat-v18-latin-700.woff2';
import Montserrat800_1 from './montserrat-v18-latin-800.woff';
import Montserrat800_2 from './montserrat-v18-latin-800.woff2';
import Montserrat900_1 from './montserrat-v18-latin-900.woff';
import Montserrat900_2 from './montserrat-v18-latin-900.woff2';

const montserratNormal = {
	400: [Montserrat400_1, Montserrat400_2],
	500: [Montserrat500_1, Montserrat500_2],
};

const montserratBold = {
	600: [Montserrat600_1, Montserrat600_2],
	700: [Montserrat700_1, Montserrat700_2],
};

const montserratHeavy = {
	800: [Montserrat800_1, Montserrat800_2],
	900: [Montserrat900_1, Montserrat900_2],
};

const montserrat = {
	name: 'Montserrat',
	normal: montserratNormal,
	bold: montserratBold,
	heavy: montserratHeavy,
};

const createFontFace = (family, style = 'normal') => {
	let styles = '';

	for (const [weight, formats] of Object.entries(family[style])) {
		const woff = formats[0];
		const woff2 = formats[1];

		styles += `
			  @font-face {
			    font-family: '${family.name}';
			    src: url(${woff2}) format('woff2'),
			        url(${woff}) format('woff');
			    font-weight: ${weight};
			    font-style: ${style};
			    font-display: auto;
			  }
			`;
	}

	return styles;
};

const montserratNormalStyles = createFontFace(montserrat);

export const fonts = css`
	${montserratNormalStyles}
`;
