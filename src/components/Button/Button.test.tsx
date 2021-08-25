import { Button } from '.';
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Button renders', () => {
	test('A first test', () => {
		render(<Button />);
	});
});
