import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from '../components/Display';

describe('<Display />', () => {
    it('displays ball count', () => {
        const { getByText } = render(<Display />);
        const text = getByText(/balls/i);
        expect(text).toBeInTheDocument();
    });

    it('displays strike count', () => {
        const { getByText } = render(<Display />);
        const text = getByText(/strikes/i);
        expect(text).toBeInTheDocument();
    });

    it('receives counted props', () => {
        const { getByTestId, rerender } = render(<Display strikes={2} />);
        expect(getByTestId('strike-display').textContent).toBe('2');

        rerender(<Display strikes={2} />);
        expect(getByTestId('strike-display').textContent).toBe('2');
    })

    }
);

// Display Tests

// Displays count of balls and strikes
// Resets balls and strikes to 0 upon 3 strikes or 4 balls
// Resets to 0 upon any hit