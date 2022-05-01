import React from 'react';
import "@testing-library/jest-dom";
import {render, fireEvent, waitFor, screen, wait, getByTestId} from '@testing-library/react'
import HomeForm from "./HomeForm";
import userEvent from "@testing-library/user-event";
import { MemoryRouter as Router } from 'react-router-dom';

jest.setTimeout(20000);

describe('Submit HomeForm test', () => {
    let component
    beforeEach(() => {
        component = render(
            <Router>
                <HomeForm/>
            </Router>
        )
    })

    test('Component renders', () => {
        component.getByText('Texto de bienvenida');
    })
    
    test('Successfully HTTP request', async () => {
        userEvent.type(component.getByTestId("welcomeValidation"), "ONG - SOMOS MÁS!!!!!");
        userEvent.type(component.getByTestId("photo1Validation"), "https://ongapi.alkemy.org/storage/VTUOm9uqgU.jpeg");
        userEvent.type(component.getByTestId("photoName1Validation"), "Hospital");
        userEvent.type(component.getByTestId("photo2Validation"), "https://ongapi.alkemy.org/storage/hIsSphyI4p.jpeg");
        userEvent.type(component.getByTestId("photoName2Validation"), "Museo");
        userEvent.type(component.getByTestId("photo3Validation"), "https://ongapi.alkemy.org/storage/HULlbUxo5P.jpeg");
        userEvent.type(component.getByTestId("photoName3Validation"), "Amistad");
        const button = component.getByText('Enviar');
        fireEvent.click(button)
        await wait(() => {
            const success = component.getByText('Formulario enviado con exito');
            expect(success).toBeInTheDocument();
        });
    })

    test('Incorrect submit', async () => {
        userEvent.type(component.getByTestId("welcomeValidation"), "Pocos caracteres");
        userEvent.type(component.getByTestId("photo1Validation"), "https://ongapi.alkemy.org/storage/VTUOm9uqgU.jpeg");
        userEvent.type(component.getByTestId("photoName1Validation"), "Hospital");
        userEvent.type(component.getByTestId("photo2Validation"), "Algo distinto a una url");
        userEvent.type(component.getByTestId("photoName2Validation"), "Museo");
        userEvent.type(component.getByTestId("photo3Validation"), "https://ongapi.alkemy.org/storage/HULlbUxo5P.jpeg");
        userEvent.type(component.getByTestId("photoName3Validation"), "");
        const button = component.getByText('Enviar');
        fireEvent.click(button)
        await wait(() => {
            const welcomeError = component.queryByText('Debe contener al menos 20 caracteres');
            const emailError = component.queryByText('Debes introducir un link valido');
            const error = component.queryByText('Este campo es obligatorio');
            expect(emailError && welcomeError && error).toBeInTheDocument();
        });
    })
})
