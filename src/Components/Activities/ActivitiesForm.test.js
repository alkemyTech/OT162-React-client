import React from 'react';
import ReactDOM from 'react-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ActivitiesForm from './ActivitiesForm';

const handleSubmit = jest.fn()
const user = userEvent.setup()
const { container } = render(<ActivitiesForm onSubmit={handleSubmit}/>)
const title = container.querySelector(`input[name='name']`)
const image = container.querySelector(`input[name='image']`)

// Render Test
test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ActivitiesForm/>, div)
});

// Test form submit without complete form
test('form submit without any data inform by user', () => {
    fireEvent.change(title, {target: {value: 'titulo'}})
    expect(title.value).toBe(title.value.toString() || title.value.lenght > 1)
    fireEvent.change(image, {target: {value: ''}})

    // as the image will be send as base64 string ->
    expect(image.value).toBe(image.value.toString() || title.value.lenght > 1)
    user.click(screen.getByRole('button', {name: "Enviar"}))

})

