import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Menu from '.';
import { BrowserRouter } from 'react-router-dom';


const close = jest.fn();
const showLogin = true;
const showLogout = true;
const showLine = true;
const user = null;


describe("Test Menu", () => {
    it("should render container", () => {
        render(
            <BrowserRouter>
                <Menu 
                close={close} showLogin={showLogin} showLogout={showLogout} showLine={showLine} user={user}
                />
            </BrowserRouter>
            
        )
        expect(screen.getByTestId("menu-container")).toBeInTheDocument();
    })

    it("should render section", () => {
        render(
             <BrowserRouter>
                <Menu 
                close={close} showLogin={showLogin} showLogout={showLogout} showLine={showLine} user={user}
                />
            </BrowserRouter>
        )
        expect(screen.getByTestId("menu-section")).toBeInTheDocument();
    })

    it("should render btn", () => {
        render(
             <BrowserRouter>
                <Menu 
                close={close} showLogin={showLogin} showLogout={showLogout} showLine={showLine} user={user}
                />
            </BrowserRouter>
        )
        expect(screen.getByTestId("menu-btn")).toBeInTheDocument();
    })

    it("should render btn content", () => {
        render(
             <BrowserRouter>
                <Menu 
                close={close} showLogin={showLogin} showLogout={showLogout} showLine={showLine} user={user}
                />
            </BrowserRouter>
        )
        expect(screen.getByTestId("menu-btn-content")).toBeInTheDocument();
    })

    it("should render login-register section", () => {
        render(
             <BrowserRouter>
                <Menu 
                close={close} showLogin={showLogin} showLogout={showLogout} showLine={showLine} user={user}
                />
            </BrowserRouter>
        )
        expect(screen.getByTestId("menu-login-register")).toBeInTheDocument();
    })

    it("should render footer", () => {
        render(
             <BrowserRouter>
                <Menu 
                close={close} showLogin={showLogin} showLogout={showLogout} showLine={showLine} user={user}
                />
            </BrowserRouter>
        )
        expect(screen.getByTestId("menu-footer")).toBeInTheDocument();
    })

    it("should render instagram link", () => {
        render(
             <BrowserRouter>
                <Menu 
                close={close} showLogin={showLogin} showLogout={showLogout} showLine={showLine} user={user}
                />
            </BrowserRouter>
        )
        expect(screen.getByTestId("menu-instagram-link")).toBeInTheDocument();
    })

    it("should render instagram logo", () => {
        render(
             <BrowserRouter>
                <Menu 
                close={close} showLogin={showLogin} showLogout={showLogout} showLine={showLine} user={user}
                />
            </BrowserRouter>
        )
        expect(screen.getByTestId("menu-instagram-logo")).toBeInTheDocument();
    })

    it("should render twitter link", () => {
        render(
             <BrowserRouter>
                <Menu 
                close={close} showLogin={showLogin} showLogout={showLogout} showLine={showLine} user={user}
                />
            </BrowserRouter>
        )
        expect(screen.getByTestId("menu-twitter-link")).toBeInTheDocument();
    })

    it("should render twitter logo", () => {
        render(
             <BrowserRouter>
                <Menu 
                close={close} showLogin={showLogin} showLogout={showLogout} showLine={showLine} user={user}
                />
            </BrowserRouter>
        )
        expect(screen.getByTestId("menu-twitter-logo")).toBeInTheDocument();
    })

    it("should render linkedin link", () => {
        render(
             <BrowserRouter>
                <Menu 
                close={close} showLogin={showLogin} showLogout={showLogout} showLine={showLine} user={user}
                />
            </BrowserRouter>
        )
        expect(screen.getByTestId("menu-linkedin-link")).toBeInTheDocument();
    })

    it("should render linkedin logo", () => {
        render(
             <BrowserRouter>
                <Menu 
                close={close} showLogin={showLogin} showLogout={showLogout} showLine={showLine} user={user}
                />
            </BrowserRouter>
        )
        expect(screen.getByTestId("menu-linkedin-logo")).toBeInTheDocument();
    })

    it("should render facebook link", () => {
        render(
             <BrowserRouter>
                <Menu 
                close={close} showLogin={showLogin} showLogout={showLogout} showLine={showLine} user={user}
                />
            </BrowserRouter>
        )
        expect(screen.getByTestId("menu-facebook-link")).toBeInTheDocument();
    })

    it("should render facebook logo", () => {
        render(
             <BrowserRouter>
                <Menu 
                close={close} showLogin={showLogin} showLogout={showLogout} showLine={showLine} user={user}
                />
            </BrowserRouter>
        )
        expect(screen.getByTestId("menu-facebook-logo")).toBeInTheDocument();
    })
});