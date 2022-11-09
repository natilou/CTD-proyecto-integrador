import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Product from '.';
import { BrowserRouter } from 'react-router-dom';


describe("Test Product", () => {
    it("should render container", () => {
        render(
            <BrowserRouter>
                <Product />
            </BrowserRouter>
            
            
        )
        expect(screen.getByTestId("product-container")).toBeInTheDocument();
    })

    it("should render header", () => {
        render(
       
            <BrowserRouter>
                <Product />
            </BrowserRouter>
            
        )
        expect(screen.getByTestId("product-header")).toBeInTheDocument();
    })

    it("should render title container", () => {
        render(
       
            <BrowserRouter>
                <Product />
            </BrowserRouter>
            
        )
        expect(screen.getByTestId("product-title-container")).toBeInTheDocument();
    })

    it("should render title", () => {
        render(
       
            <BrowserRouter>
                <Product />
            </BrowserRouter>
            
        )
        expect(screen.getByTestId("product-title")).toBeInTheDocument();
    })

    it("should render id", () => {
        render(
       
            <BrowserRouter>
                <Product />
            </BrowserRouter>
            
        )
        expect(screen.getByTestId("product-id")).toBeInTheDocument();
    })

    it("should render icon back", () => {
        render(
       
            <BrowserRouter>
                <Product />
            </BrowserRouter>
            
        )
        expect(screen.getByTestId("product-icon-back")).toBeInTheDocument();
    })

    it("should render img logo", () => {
        render(
       
            <BrowserRouter>
                <Product />
            </BrowserRouter>
            
        )
        expect(screen.getByTestId("product-img")).toBeInTheDocument();
    })

    it("should render location header", () => {
        render(
       
            <BrowserRouter>
                <Product />
            </BrowserRouter>
            
        )
        expect(screen.getByTestId("product-location-header")).toBeInTheDocument();
    })

    it("should render lodging", () => {
        render(
       
            <BrowserRouter>
                <Product />
            </BrowserRouter>
            
        )
        expect(screen.getByTestId("product-lodging")).toBeInTheDocument();
    })

    it("should render product icon", () => {
        render(
       
            <BrowserRouter>
                <Product />
            </BrowserRouter>
            
        )
        expect(screen.getByTestId("product-icon")).toBeInTheDocument();
    })

    it("should render product city", () => {
        render(
       
            <BrowserRouter>
                <Product />
            </BrowserRouter>
            
        )
        expect(screen.getByTestId("product-city")).toBeInTheDocument();
    })

    it("should render product distance", () => {
        render(
       
            <BrowserRouter>
                <Product />
            </BrowserRouter>
            
        )
        expect(screen.getByTestId("product-distance")).toBeInTheDocument();
    })

    it("should render gallery", () => {
        render(
       
            <BrowserRouter>
                <Product />
            </BrowserRouter>
            
        )
        expect(screen.getByTestId("product-gallery")).toBeInTheDocument();
    })
});