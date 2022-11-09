import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '.';
import { BrowserRouter } from 'react-router-dom';


const showLogout = true;
const showLogin = true;
const showLine = true;

describe("Test Header", () => {
    it("should render container", () => {
        render(
            <BrowserRouter>
                <Header showLogout={showLogout} showLogin={showLogin} showLine={showLine}/>
            </BrowserRouter>
        )    
        expect(screen.getByTestId("header-container")).toBeInTheDocument();
    })

    it("should render container logo", () => {
        render(
             <BrowserRouter>
                 <Header showLogout={showLogout} showLogin={showLogin} showLine={showLine}/>
            </BrowserRouter>
        )
        expect(screen.getByTestId("header-container-logo")).toBeInTheDocument();
    })

    it("should render logo link", () => {
        render(
              <BrowserRouter>
                 <Header showLogout={showLogout} showLogin={showLogin} showLine={showLine}/>
            </BrowserRouter>
        )
        expect(screen.getByTestId("header-container-logo-link")).toBeInTheDocument();
    })

    it("should render logo", () => {
        render(
              <BrowserRouter>
                 <Header showLogout={showLogout} showLogin={showLogin} showLine={showLine}/>
            </BrowserRouter>
        )
        expect(screen.getByTestId("header-logo")).toBeInTheDocument();
    })

    it("should render icon", () => {
        render(
              <BrowserRouter>
                 <Header showLogout={showLogout} showLogin={showLogin} showLine={showLine}/>
            </BrowserRouter>
        )
        expect(screen.getByTestId("header-icon")).toBeInTheDocument();
    })

    it("should render buttons", () => {
        render(
              <BrowserRouter>
                 <Header showLogout={showLogout} showLogin={showLogin} showLine={showLine}/>
            </BrowserRouter>
        )
        expect(screen.getByTestId("header-buttons")).toBeInTheDocument();
    })

    it("should render btn register", () => {
        render(
              <BrowserRouter>
                 <Header showLogout={showLogout} showLogin={showLogin} showLine={showLine}/>
            </BrowserRouter>
        )
        expect(screen.getByTestId("header-btn-register")).toBeInTheDocument();
    })

    it("should render btn login", () => {
        render(
              <BrowserRouter>
                 <Header showLogout={showLogout} showLogin={showLogin} showLine={showLine}/>
            </BrowserRouter>
        )
        expect(screen.getByTestId("header-btn-login")).toBeInTheDocument();
    })
});