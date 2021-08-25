module.exports = {
	rootDir: '../',
	preset: 'ts-jest',
	verbose: true,
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['./setupTests.ts'],
	transform: {
		'.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
		'^.+\\.svg$': 'jest-svg-transformer',
	},
	moduleNameMapper: {
		'^.+\\.(css|less)$': '<rootDir>/config/stub.js',
	},
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.json',
		},
	},
	modulePathIgnorePatterns: ['.yalc'],
};
