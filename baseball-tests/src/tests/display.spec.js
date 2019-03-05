import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from '../components/Display';
import Dashboard from '../components/Dashboard';

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

    // it('should show count number', () => {
    //     const strikes = [{
    //         count: 0
    //     }]
    //     const { getAllByTestId } = render(<Display strikes={strikes}/>);

    //     const strikeCheck = getAllByTestId('strike-display').map(c => c.textContent);
    //     const strikeList = strikes.map(s => s.count);

    //     expect(strikeCheck).toEqual(strikeList);
    // })

    }
);

// Display Tests

// Displays count of balls and strikes
// Resets balls and strikes to 0 upon 3 strikes or 4 balls
// Resets to 0 upon any hit