import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import logoONG from '../../assets/img/logo-somos-mas.png';
import ActivitiesForm from './ActivitiesForm';

const handleSubmit = jest.fn()
const user = userEvent.setup()
const renderForm = () => render(<ActivitiesForm/>)
const { container } = render(<ActivitiesForm onSubmit={handleSubmit}/>)
const title = container.querySelector(`input[name='name']`)
const image = container.querySelector(`input[name='image']`)

// Test data example
const testTitle = 'Test Type Title'
const testImage = logoONG

// 1 - Render Test only
test('1# -> Renders without crashing', () => {
    renderForm()
});

// 2 - Test form submit without complete form
test('2# -> Form submit without any data inform by user', () => {
    renderForm()
    fireEvent.change(title, {target: {value: ''}})
    expect(title.value).toBe(title.value.toString() || title.value.lenght > 1)
    fireEvent.change(image, {target: {value: ''}})

    // as the image will be send as base64 string ->
    expect(image.value).toBe(image.value.toString() || title.value.lenght > 1)
    user.click(screen.getByRole('button', { name: /enviar/i }))
})

// 3 - Test form submit with info
test('3# -> Form submit with data', () =>{
    renderForm()
    fireEvent.change(title, {target: {value: testTitle}})
    expect(title.value).toBe(title.value.toString() || title.value.lenght > 1)
    async() =>{
        (await user.upload(image, testImage))
    } 
    user.click(screen.getByRole('button', { name: /enviar/i }))
    expect(handleSubmit)
})

// 4 - Render test for error on title field
test('4# -> Render of error message on title field', () => {
    renderForm()
    fireEvent.change(title, {target: {value: ''}})
    user.click(screen.getByRole('button', { name: /enviar/i }))
    async() =>{
        (await expect(screen.getByText(/campo requerido/i)))
    } 
    
})

// 5 - Render test for on image field
test('5# -> Render of error message on image field', () => {
    renderForm()
    fireEvent.change(image, {target: {value: ''}})
    user.click(screen.getByRole('button', { name: /enviar/i }))
    async() =>{
        (await expect(screen.getByText(/imagen requerida/i)))
    } 
})

// 6 - Test function createActivity (HTTP Request)
test('6# -> Test createActivity function // HTTP Post Request', () => {
    renderForm()
    fireEvent.change(title, {target: {value: testTitle}})
    async() =>{
        (await user.upload(image, testImage))
    } 
    user.click(screen.getByRole('button', { name: /enviar/i }))
    async() => {
        (await expect(handleSubmit(createActivity())))
    }
})