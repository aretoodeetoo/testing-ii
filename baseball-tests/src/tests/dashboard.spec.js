import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from '../components/Dashboard';

describe('<Dashboard />', () => {
    it('has a ball button', () => {
        const { getByText } = render(<Dashboard />);
        const ballButton = getByText(/ball/i);
        expect(ballButton).toBeInTheDocument();      
    });

    it('has a strike button', () => {
        const { getByTestId } = render(<Dashboard />);
        const strikeButton = getByTestId('strike-button');
        expect(strikeButton).toHaveTextContent(/strike/i);      
    });

    it('has a foul button', () => {
        const { getByTestId } = render(<Dashboard />);
        const foulButton = getByTestId('foul-button');
        expect(foulButton).toHaveTextContent(/foul/i);      
    });

    it('has a hit button', () => {
        const { getByTestId } = render(<Dashboard />);
        const hitButton = getByTestId('hit-button');
        expect(hitButton).toHaveTextContent(/hit/i);      
    });

    it('checks if buttons are fired', () => {
        const { getByTestId } = render(<Dashboard />);

        const strikeButton = getByTestId('strike-button');
        const foulButton = getByTestId('foul-button');
        const hitButton = getByTestId('hit-button');
        const ballButton = getByTestId('ball-button');

        fireEvent.click(strikeButton);
        fireEvent.click(foulButton);
        fireEvent.click(hitButton);
        fireEvent.click(ballButton);

    })
}
);

// Dashboard Tests
// Buttons update state