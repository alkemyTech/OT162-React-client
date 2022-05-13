import React from "react";
import ContactForm from './ContactForm'
import { render, fireEvent, waitForElement, screen , waitFor, waitForDomChange, wait} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom/extend-expect"
import userEvent from "@testing-library/user-event";


describe( "ContactForm", () => {
    let component
    beforeEach(() => {
        const onSubmit = jest.fn();
        onSubmit.mockClear();        
        component = render(<ContactForm onSubmit={onSubmit} />);
    })
    // test('Contacto creado / Petición válida', async () => {
    //     const name = screen.getByLabelText(/nombre/i)
    //     const email = screen.getByLabelText(/email/i)
    //     const phone = screen.getByLabelText(/teléfono/i)
    //     const message = screen.getByLabelText(/mensaje/i)

    //     await userEvent.type(name, 'Juan')
    //     await userEvent.type(email, 'alo@alo.com')          
    //     await userEvent.type(phone, '123321123')    
    //     await userEvent.type(message, 'asdasdsadasdsa')    

    //     const button = component.getByText('Submit');
    //     fireEvent.click(button)
    //     await wait(() => {
    //         const creado = component.getByText('Contact created');
    //         expect(creado).toBeInTheDocument();
    //     });
    // }, 30000)

    test('Contacto No creado / Petición Inválida', async () => {
        const name = screen.getByLabelText(/nombre/i)
        const email = screen.getByLabelText(/email/i)
        const phone = screen.getByLabelText(/teléfono/i)
        const message = screen.getByLabelText(/mensaje/i)

        await userEvent.type(name, 'Juan')
        await userEvent.type(email, 'alo@alo.com')          
        await userEvent.type(phone, '123321123')    
        await userEvent.type(message, 'asdasdsadasdsa')    

        const button = component.getByText('Submit');
        fireEvent.click(button)
        await wait(() => {
            const error = component.getByText('An error occurred while creating the contact.');
            expect(error).toBeInTheDocument();
        });
    }, 30000)
   
 }
)   