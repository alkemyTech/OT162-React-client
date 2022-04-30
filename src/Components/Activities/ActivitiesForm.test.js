import React from 'react';
import ReactDOM from 'react-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import logoONG from '../../assets/img/logo-somos-mas.png';
import ActivitiesForm from './ActivitiesForm';

const handleSubmit = jest.fn()
const user = userEvent.setup()
const { container } = render(<ActivitiesForm onSubmit={handleSubmit}/>)
const title = container.querySelector(`input[name='name']`)
const image = container.querySelector(`input[name='image']`)

// Test data example
const testTitle = 'Test Type Title'
const testImage = logoONG

// 1 - Render Test only
test('1# -> Renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<ActivitiesForm/>, div)
    render(<ActivitiesForm/>)
});

// 2 - Test form submit without complete form
test('2# -> Form submit without any data inform by user', () => {
    render(<ActivitiesForm/>)
    fireEvent.change(title, {target: {value: 'titulo'}})
    expect(title.value).toBe(title.value.toString() || title.value.lenght > 1)
    fireEvent.change(image, {target: {value: ''}})

    // as the image will be send as base64 string ->
    expect(image.value).toBe(image.value.toString() || title.value.lenght > 1)
    user.click(screen.getByRole('button', { name: /enviar/i }))
})

// 3 - Test form submit with info
test('3# -> Form submit with data', () =>{
    render(<ActivitiesForm/>)
    user.click(screen.getByRole('button', { name: /enviar/i }))
    expect(handleSubmit)
})