// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoField title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoField/i);
    expect(titleElement).toBeInTheDocument();
});
