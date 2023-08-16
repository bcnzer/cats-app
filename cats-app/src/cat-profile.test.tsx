import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CatProfile } from './cat-profile';

it('displays no cat image when no cat is chosen', () => {
    render(<CatProfile cat={''} />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
});

describe.each([
    ['garfield', 'garfield.png'],
    ['sylvester', 'sylvester.png'],
    ['grumpy-cat', 'grumpy-cat.jpg'],
])('displays the chosen cat', (cat, src) => {
    it('displays the chosen cat', () => {
        render(<CatProfile cat={cat} />);
        const catImageEl = screen.getByRole('img');
        expect(catImageEl).toHaveAttribute('src', src);
        expect(catImageEl).toBeVisible();
    });
});

it('has an input for entering food', () => {
    render(<CatProfile />);
    const inputEl = screen.getByTestId('food-input');
    expect(inputEl).toBeVisible();
});

describe('when adding a food', () => {
    it('appears in the foods list', () => {
        render(<CatProfile />);
        const inputEl = screen.getByTestId('food-input');
        const addBtnEl = screen.getByRole('button', { name: 'Add food' });
        userEvent.type(inputEl, 'bikkies');
        userEvent.click(addBtnEl);
        expect(inputEl).toHaveDisplayValue('');
        expect(screen.getByText('bikkies')).toBeVisible();
    });

    it('does not add empty items to the list', () => {
        render(<CatProfile />);
        const addBtnEl = screen.getByRole('button', { name: 'Add food' });
        const originalFoodItems = screen.queryAllByRole('listitem');
        userEvent.click(addBtnEl);
        const foodItems = screen.queryAllByRole('listitem');
        expect(foodItems).toMatchObject(originalFoodItems);
    });
});