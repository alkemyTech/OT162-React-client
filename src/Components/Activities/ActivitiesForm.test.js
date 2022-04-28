import React from 'react';
import ReactDOM from 'react-dom'
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ActivitiesForm from './ActivitiesForm';

// Render Test
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ActivitiesForm/>, div)
});

// Test form submit
test('form submit', () => {
    const handleSubmit = jest.fn()
    render(<ActivitiesForm onSubmit={handleSubmit}/>)
    const user = userEvent.setup()

    user.type(screen.getByLabelText("Titulo de la actividad", {exact: false}))
    // user.type(screen.getByTestId('descriptionField', {exact: false}))
    user.click(screen.getByRole('button', {name: "Enviar"}))

    waitFor(() => 
        expect(handleSubmit).toHaveBeenCalledWith({
            image: null,
            name: null,
        }))
})
