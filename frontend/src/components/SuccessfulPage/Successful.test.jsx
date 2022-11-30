import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import SuccessfulBooking from '.';


describe("Test Successful Page", () => {
    it("should render container", () => {
        render(
            <BrowserRouter>
                <SuccessfulBooking />
            </BrowserRouter>
            
        )
        expect(screen.getByTestId("successful-container")).toBeInTheDocument();
    })

    it("should render message container", () => {
        render(
            <BrowserRouter>
                <SuccessfulBooking />
            </BrowserRouter>
            
        )
        expect(screen.getByTestId("message-container")).toBeInTheDocument();
    })

    it("should render icon", () => {
        render(
            <BrowserRouter>
                <SuccessfulBooking />
            </BrowserRouter>
            
        )
        expect(screen.getByTestId("check-icon")).toBeInTheDocument();
    })

    it("should render message title", () => {
        render(
            <BrowserRouter>
                <SuccessfulBooking />
            </BrowserRouter>
            
        )
        expect(screen.getByTestId("message-title")).toBeInTheDocument();
    })

    it("should render second message title", () => {
        render(
            <BrowserRouter>
                <SuccessfulBooking />
            </BrowserRouter>
            
        )
        expect(screen.getByTestId("second-message-title")).toBeInTheDocument();
    })

    it("should render btn", () => {
        render(
            <BrowserRouter>
                <SuccessfulBooking />
            </BrowserRouter>
            
        )
        expect(screen.getByTestId("btn-successful")).toBeInTheDocument();
    })
})