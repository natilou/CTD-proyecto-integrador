import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import Login from '.';


describe("Test Login", () => {
    it("should render container", () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
            
        )
        expect(screen.getByTestId("login-container")).toBeInTheDocument();
    })

    it("should render title", () => {
        render(
             <BrowserRouter>
                <Login />
            </BrowserRouter>
        )
        expect(screen.getByTestId("login-title")).toBeInTheDocument();
    })

    it("should render row", () => {
        render(
              <BrowserRouter>
                <Login />
            </BrowserRouter>
        )
        expect(screen.getByTestId("login-row")).toBeInTheDocument();
    })

    it("should render email label", () => {
        render(
              <BrowserRouter>
                <Login />
            </BrowserRouter>
        )
        expect(screen.getByTestId("login-email-label")).toBeInTheDocument();
    })

    it("should render email input", () => {
        render(
              <BrowserRouter>
                <Login />
            </BrowserRouter>
        )
        expect(screen.getByTestId("login-email-input")).toBeInTheDocument();
    })

    it("should render password label", () => {
        render(
              <BrowserRouter>
                <Login />
            </BrowserRouter>
        )
        expect(screen.getByTestId("login-password-label")).toBeInTheDocument();
    })

    it("should render password input", () => {
        render(
              <BrowserRouter>
                <Login />
            </BrowserRouter>
        )
        expect(screen.getByTestId("login-password-input")).toBeInTheDocument();
    })

    it("should render btn", () => {
        render(
              <BrowserRouter>
                <Login />
            </BrowserRouter>
        )
        expect(screen.getByTestId("login-btn")).toBeInTheDocument();
    })

    it("should render login alternative", () => {
        render(
              <BrowserRouter>
                <Login />
            </BrowserRouter>
        )
        expect(screen.getByTestId("login-alternative")).toBeInTheDocument();
    })

    it("should render register link", () => {
        render(
              <BrowserRouter>
                <Login />
            </BrowserRouter>
        )
        expect(screen.getByTestId("register-link")).toBeInTheDocument();
    })
});