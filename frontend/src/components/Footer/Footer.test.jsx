import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '.';


describe("Test footer", () => {
    it("should render footer container", () => {
        render(
            <Footer />
        )
        expect(screen.getByTestId("footer-container")).toBeInTheDocument();
    })

    it("should render copyright", () => {
        render(
            <Footer />
        )
        expect(screen.getByTestId("copyright")).toBeInTheDocument();
    })

    it("should render icons container", () => {
        render(
             <Footer />
        )
        expect(screen.getByTestId("footer-icons-container")).toBeInTheDocument();
    })

    it("should render facebook icon", () => {
        render(
             <Footer />
        )
        expect(screen.getByTestId("footer-icon-facebook")).toBeInTheDocument();
    })

    it("should render twitter icon", () => {
        render(
             <Footer />
        )
        expect(screen.getByTestId("footer-icon-twitter")).toBeInTheDocument();
    })

    it("should render linkedin icon", () => {
        render(
             <Footer />
        )
        expect(screen.getByTestId("footer-icon-linkedin")).toBeInTheDocument();
    })

    it("should render instagram icon", () => {
        render(
             <Footer />
        )
        expect(screen.getByTestId("footer-icon-instagram")).toBeInTheDocument();
    })
});