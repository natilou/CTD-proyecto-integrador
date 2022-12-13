import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import BookingAction from '.';

const id = 1;

describe("Test BookingAction", () => {

    it("should render container", () => {
        render(
            <BrowserRouter>
                <BookingAction 
                id={id}
                />
            </BrowserRouter>
        )
        expect(screen.getByTestId("booking-action-container")).toBeInTheDocument();
    })

    it("should render sub-container", () => {
        render(
            <BrowserRouter>
                <BookingAction 
                id={id}
                />
            </BrowserRouter>
        )
        expect(screen.getByTestId("booking-action-sub-container")).toBeInTheDocument();
    })

    it("should render message", () => {
        render(
            <BrowserRouter>
                <BookingAction 
                id={id}
                />
            </BrowserRouter>
        )
        expect(screen.getByTestId("booking-action-message")).toBeInTheDocument();
    })

    it("should render btn", () => {
        render(
            <BrowserRouter>
                <BookingAction 
                id={id}
                />
            </BrowserRouter>
        )
        expect(screen.getByTestId("btn-booking-action")).toBeInTheDocument();
    })

    it("should render alert to log in", () => {
        render(
            <BrowserRouter>
                <BookingAction 
                id={id}
                />
            </BrowserRouter>
        )
        
        const btn = screen.getByTestId('btn-booking-action');
        fireEvent.click(btn);
        expect(screen.getByRole("dialog")).toBeInTheDocument();
        expect(screen.getByRole("dialog")).toHaveTextContext("Debes iniciar sesión para realizar una reserva")
    })

    it("should render row", () => {
        render(
            <BrowserRouter>
                <BookingAction 
                id={id}
                />
            </BrowserRouter>
        )
        expect(screen.getByTestId("avatar-row")).toBeInTheDocument();
    })

    it("should render container 2", () => {
        render(
            <BrowserRouter>
                <BookingAction 
                id={id}
                />
            </BrowserRouter>
        )
        expect(screen.getByTestId("avatar-container-2")).toBeInTheDocument();
    })

    it("should render greeting container", () => {
        render(
            <BrowserRouter>
                <BookingAction 
                id={id}
                />
            </BrowserRouter>
        )
        expect(screen.getByTestId("avatar-greeting-container")).toBeInTheDocument();
    })

    it("should render button", () => {
        render(
            <BrowserRouter>
                <BookingAction 
                id={id}
                />
            </BrowserRouter>
        )
        expect(screen.getByTestId("avatar-btn")).toBeInTheDocument();
    })

    it("should appear an alert when click the X button asking to close session", () => {
        render(
            <BrowserRouter>
                <BookingAction 
                id={id}
                />
            </BrowserRouter>
        )
        const btn = screen.getByRole("closeSession");
        fireEvent.click(btn)
        expect(screen.getByRole("dialog")).toBeInTheDocument();
        expect(screen.getByRole("dialog")).toHaveTextContext("¿Deseas cerrar sesión?")
    })

    it("should close session when click confirm button", () => {
        render(
            <BrowserRouter>
                <BookingAction 
                id={id}
                />
            </BrowserRouter>
        )
        const btn = screen.getByText("Si");
        fireEvent.click(btn)
        expect(screen.queryByRole("closeSession")).not.toBeInTheDocument();
    })

    it("should render alert to continue navigating when don't close session", () => {
        render(
            <BrowserRouter>
                <BookingAction 
                id={id}
                />
            </BrowserRouter>
        )
        const btn = screen.getByText("No");
        fireEvent.click(btn)
        expect(screen.getByRole("dialog")).toBeInTheDocument();
        expect(screen.getByRole("dialog")).toHaveTextContext("Sigue navegando!")
    })
});