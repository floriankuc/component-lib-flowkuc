module.exports = {
	rootDir: '../',
	preset: 'ts-jest',
	verbose: true,
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['./setupTests.ts'],
	transform: {
		'.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
		'^.+\\.svg$': 'jest-svg-transformer',
		'^.+\\.js?$': 'ts-jest',
	},
	moduleNameMapper: {
		'^.+\\.(css|less|woff|woff2)$': '<rootDir>/config/stub.js',
	},
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.json',
		},
	},
	modulePathIgnorePatterns: ['.yalc'],
};
