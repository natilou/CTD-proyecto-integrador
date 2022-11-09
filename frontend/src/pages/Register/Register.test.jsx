import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import Register from '.';


describe("Test Login form", () => {
    it("should render container", () => {
        render(
            <BrowserRouter>
               <Register />
            </BrowserRouter>
            
        )
        expect(screen.getByTestId("register-container")).toBeInTheDocument();
    })

    it("should render title", () => {
        render(
             <BrowserRouter>
               <Register />
            </BrowserRouter>
        )
        expect(screen.getByTestId("register-title")).toBeInTheDocument();
    })

    it("should render row container 1", () => {
        render(
              <BrowserRouter>
               <Register />
            </BrowserRouter>
        )
        expect(screen.getByTestId("register-row-container-1")).toBeInTheDocument();
    })

    it("should render col container 1", () => {
        render(
              <BrowserRouter>
               <Register />
            </BrowserRouter>
        )
        expect(screen.getByTestId("register-col-container-1")).toBeInTheDocument();
    })

    it("should render row container 2", () => {
        render(
              <BrowserRouter>
               <Register />
            </BrowserRouter>
        )
        expect(screen.getByTestId("register-row-container-2")).toBeInTheDocument();
    })

    it("should render col container 2", () => {
        render(
              <BrowserRouter>
               <Register />
            </BrowserRouter>
        )
        expect(screen.getByTestId("register-col-container-2")).toBeInTheDocument();
    })

    it("should render col 1", () => {
        render(
              <BrowserRouter>
               <Register />
            </BrowserRouter>
        )
        expect(screen.getByTestId("register-col-1")).toBeInTheDocument();
    })

    it("should render row container 3", () => {
        render(
              <BrowserRouter>
               <Register />
            </BrowserRouter>
        )
        expect(screen.getByTestId("register-row-container-3")).toBeInTheDocument();
    })

    it("should render row container 4", () => {
        render(
              <BrowserRouter>
               <Register />
            </BrowserRouter>
        )
        expect(screen.getByTestId("register-row-container-4")).toBeInTheDocument();
    })

    it("should render row 1", () => {
        render(
              <BrowserRouter>
               <Register />
            </BrowserRouter>
        )
        expect(screen.getByTestId("register-row-1")).toBeInTheDocument();
    })

    it("should render row 2", () => {
        render(
              <BrowserRouter>
               <Register />
            </BrowserRouter>
        )
        expect(screen.getByTestId("register-row-2")).toBeInTheDocument();
    })

    it("should render row 3", () => {
        render(
              <BrowserRouter>
               <Register />
            </BrowserRouter>
        )
        expect(screen.getByTestId("register-row-3")).toBeInTheDocument();
    })

    it("should render name label", () => {
        render(
              <BrowserRouter>
               <Register />
            </BrowserRouter>
        )
        expect(screen.getByTestId("register-name-label")).toBeInTheDocument();
    })

    it("should render name input", () => {
        render(
              <BrowserRouter>
               <Register />
            </BrowserRouter>
        )
        expect(screen.getByTestId("register-name-input")).toBeInTheDocument();
    })

    it("should render lastname label", () => {
        render(
              <BrowserRouter>
               <Register />
            </BrowserRouter>
        )
        expect(screen.getByTestId("register-lastname-label")).toBeInTheDocument();
    })

    it("should render lastname input", () => {
        render(
              <BrowserRouter>
               <Register />
            </BrowserRouter>
        )
        expect(screen.getByTestId("register-lastname-input")).toBeInTheDocument();
    })

    it("should render email label", () => {
        render(
              <BrowserRouter>
               <Register />
            </BrowserRouter>
        )
        expect(screen.getByTestId("register-email-label")).toBeInTheDocument();
    })

    it("should render email input", () => {
        render(
              <BrowserRouter>
               <Register />
            </BrowserRouter>
        )
        expect(screen.getByTestId("register-email-input")).toBeInTheDocument();
    })

    it("should render password label", () => {
        render(
              <BrowserRouter>
               <Register />
            </BrowserRouter>
        )
        expect(screen.getByTestId("register-password-label")).toBeInTheDocument();
    })

    it("should render password input", () => {
        render(
              <BrowserRouter>
               <Register />
            </BrowserRouter>
        )
        expect(screen.getByTestId("register-password-input")).toBeInTheDocument();
    })

    it("should render btn", () => {
        render(
              <BrowserRouter>
               <Register />
            </BrowserRouter>
        )
        expect(screen.getByTestId("register-btn")).toBeInTheDocument();
    })

    it("should render register alternative", () => {
        render(
              <BrowserRouter>
               <Register />
            </BrowserRouter>
        )
        expect(screen.getByTestId("register-alternative")).toBeInTheDocument();
    })

    it("should render link link", () => {
        render(
              <BrowserRouter>
               <Register />
            </BrowserRouter>
        )
        expect(screen.getByTestId("login-link")).toBeInTheDocument();
    })
});