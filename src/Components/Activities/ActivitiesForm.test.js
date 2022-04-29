import React from 'react';
import ReactDOM from 'react-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ActivitiesForm from './ActivitiesForm';

const handleSubmit = jest.fn()
const user = userEvent.setup()

// Render Test
test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ActivitiesForm/>, div)
});

// Test form submit
test('form submit without any data inform by user', () => {
    const { container } = render(<ActivitiesForm onSubmit={handleSubmit}/>)
    const title = container.querySelector(`input[name='name']`)
    const image = container.querySelector(`input[name='image']`)
    
    fireEvent.change(title, {target: {value: ''}})
    expect(title.value).toBe(String)
    fireEvent.change(image, {target: {value: ''}})
    expect(image.value).toBe(File)
    user.click(screen.getByRole('button', {name: "Enviar"}))

    throw new Error ('info on fields was empty')
})

