import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import AvatarView from '.';


const userName = "viajero"; 

describe("Test avatar", () => {

    it("should render avatar container", () => {
        render(
            <BrowserRouter>
                 <AvatarView 
                userName={userName}
                />
            </BrowserRouter>
        )
        expect(screen.getByTestId("avatar-container")).toBeInTheDocument();
    })

    it("should render username", () => {
        render(
            <BrowserRouter>
                 <AvatarView 
                userName={userName}
                />
            </BrowserRouter>
        )
        expect(screen.getByTestId("username")).toBeInTheDocument();
    })

    it("should render username initials", () => {
        render(
            <BrowserRouter>
                 <AvatarView 
                userName={userName}
                />
            </BrowserRouter>
        )
        expect(screen.getByTestId("initials")).toBeInTheDocument();
    })

    it("should render greeting", () => {
        render(
            <BrowserRouter>
                 <AvatarView 
                userName={userName}
                />
            </BrowserRouter>
        )
        expect(screen.getByTestId("greeting")).toBeInTheDocument();
    })

    it("should render close-session button", () => {
        render(
            <BrowserRouter>
                 <AvatarView 
                userName={userName}
                />
            </BrowserRouter>
        )
        expect(screen.getByTestId("close-session")).toBeInTheDocument();
    })

    it("should render row", () => {
        render(
            <BrowserRouter>
                 <AvatarView 
                userName={userName}
                />
            </BrowserRouter>
        )
        expect(screen.getByTestId("avatar-row")).toBeInTheDocument();
    })

    it("should render container 2", () => {
        render(
            <BrowserRouter>
                 <AvatarView 
                userName={userName}
                />
            </BrowserRouter>
        )
        expect(screen.getByTestId("avatar-container-2")).toBeInTheDocument();
    })

    it("should render greeting container", () => {
        render(
            <BrowserRouter>
                 <AvatarView 
                userName={userName}
                />
            </BrowserRouter>
        )
        expect(screen.getByTestId("avatar-greeting-container")).toBeInTheDocument();
    })

    it("should render button", () => {
        render(
            <BrowserRouter>
                 <AvatarView 
                userName={userName}
                />
            </BrowserRouter>
        )
        expect(screen.getByTestId("avatar-btn")).toBeInTheDocument();
    })

    it("should appear an alert when click the X button asking to close session", () => {
        render(
            <BrowserRouter>
                 <AvatarView 
                userName={userName}
                />
            </BrowserRouter>
        )
        const btn = screen.getByRole("closeSession");
        fireEvent.click(btn)
        expect(screen.getByRole("dialog")).toBeInTheDocument();
    })

    it("should close session when click confirm button", () => {
        render(
            <BrowserRouter>
                 <AvatarView 
                userName={userName}
                />
            </BrowserRouter>
        )
        const element = document.querySelector("swal2-confirm swal2-styled");
        expect(element).toBeInTheDocument();
    })

    // it("should render alert to continue navigating when don't close session", () => {
    //     render(
    //         <BrowserRouter>
    //              <AvatarView 
    //             userName={userName}
    //             />
    //         </BrowserRouter>
    //     )
    //     const btn = screen.getByText("No");
    //     fireEvent.click(btn)
    //     expect(screen.getByRole("dialog")).toBeInTheDocument();
    //     expect(screen.getByRole("dialog")).toHaveTextContext("Sigue navegando!")
    // })
});