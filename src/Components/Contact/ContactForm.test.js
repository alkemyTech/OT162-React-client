import React from "react";
import ContactForm from './ContactForm'
import { render, fireEvent, waitForElement, screen , waitFor, waitForDomChange} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom/extend-expect"
import user from "@testing-library/user-event";


describe( "ContactForm", () => {
    const onSubmit = jest.fn();
    // // let component = render(<ContactForm onSubmit={onSubmit} />);
    beforeEach(() => {
        onSubmit.mockClear();        
        render(<ContactForm onSubmit={onSubmit} />);
    })

    // it("onSubmit is called when all field are valid", async () => {
    //     // const name = screen.getByPlaceholderText("Nombre");
    //     const email = screen.getByPlaceholderText("Email");
    //     // const phone = screen.getByPlaceholderText("Teléfono");
    //     // const message = screen.getByPlaceholderText("Escribe tu mensaje...");
        
    //      await act( async ()=>{
    //          await fireEvent.change(email, "123");
    //          await fireEvent.blur(email);            
    //         })       
    //         expect(screen.getByText('El email no es válido')).toBeInTheDocument();    
    // })   
    test('Testing valid inputs' , async () => {
        const onSubmit = jest.fn();
        onSubmit.mockClear();        
        render(<ContactForm onSubmit={onSubmit} />);        
        // const user = userEvent.setup()

        await act(async ()=>{
            await user.type(screen.getByLabelText(/nombre/i), 'Juan')
            await user.type(screen.getByLabelText(/email/i), 'alo@alo.com')
            user.tab()
            await user.type(screen.getByLabelText(/teléfono/i), '123321123')    
            await user.click(screen.getByText('Submit'))
        })
        // expect(screen.getByText('El email no es válido')).toBeInTheDocument();

        await waitForElement(() =>
            expect(onSubmit).toHaveBeenCalledWith({
            email: 'alo@alo.com',
            nombre: 'Juan',
            teléfono: '123321123',
            }),
        )
    })
 }
) 