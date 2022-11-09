import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import Home from '.';


describe("Test Home", () => {
    
    it("should render container", () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
            
            
        )
        expect(screen.getByTestId("home-container")).toBeInTheDocument();
    })

    it("should render title", () => {
        render(
             <BrowserRouter>
                <Home />
            </BrowserRouter>
        )
        expect(screen.getByTestId("home-title")).toBeInTheDocument();
    })

    it("should render title 2", () => {
        render(
              <BrowserRouter>
                <Home />
            </BrowserRouter>
        )
        expect(screen.getByTestId("home-title-2")).toBeInTheDocument();
    })

});