import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './app';
import './app.css';

it('renders', () => {
    render(<App />);
    expect(screen.getByText('My cat profile')).toBeVisible();
});
