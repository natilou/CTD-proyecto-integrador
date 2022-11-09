import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AvatarView from '.';


const userName = "viajero";


describe("Test avatar", () => {
    it("should render avatar container", () => {
        render(
            <AvatarView 
            userName={userName}
            />
        )
        expect(screen.getByTestId("avatar-container")).toBeInTheDocument();
    })

    it("should render username", () => {
        render(
            <AvatarView 
            userName={userName}
            />
        )
        expect(screen.getByTestId("username")).toBeInTheDocument();
    })

    it("should render username initials", () => {
        render(
            <AvatarView 
            userName={userName}
            />
        )
        expect(screen.getByTestId("initials")).toBeInTheDocument();
    })

    it("should render greeting", () => {
        render(
            <AvatarView 
            userName={userName}
            />
        )
        expect(screen.getByTestId("greeting")).toBeInTheDocument();
    })

    it("should render close-session button", () => {
        render(
            <AvatarView 
            userName={userName}
            />
        )
        expect(screen.getByTestId("close-session")).toBeInTheDocument();
    })

    it("should render row", () => {
        render(
            <AvatarView 
            userName={userName}
            />
        )
        expect(screen.getByTestId("avatar-row")).toBeInTheDocument();
    })

    it("should render container 2", () => {
        render(
            <AvatarView 
            userName={userName}
            />
        )
        expect(screen.getByTestId("avatar-container-2")).toBeInTheDocument();
    })

    it("should render greeting container", () => {
        render(
            <AvatarView 
            userName={userName}
            />
        )
        expect(screen.getByTestId("avatar-greeting-container")).toBeInTheDocument();
    })

    it("should render button", () => {
        render(
            <AvatarView 
            userName={userName}
            />
        )
        expect(screen.getByTestId("avatar-btn")).toBeInTheDocument();
    })
});