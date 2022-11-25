import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormFilter from '.';


describe("Test FormFilter", () => {
    it("should render formfilter container", () => {
        render(
            <FormFilter />
        )
        expect(screen.getByTestId("formfilter-container")).toBeInTheDocument();
    })

    it("should render title", () => {
        render(
            <FormFilter />
        )
        expect(screen.getByTestId("formfilter-title")).toBeInTheDocument();
    })

    it("should render container form", () => {
        render(
             <FormFilter />
        )
        expect(screen.getByTestId("formfilter-container-form")).toBeInTheDocument();
    })

    it("should render selector", () => {
        render(
             <FormFilter />
        )
        expect(screen.getByTestId("formfilter-selector")).toBeInTheDocument();
    })

    it("should render calendar subcontainer", () => {
        render(
             <FormFilter />
        )
        expect(screen.getByTestId("formfilter-calendar-subcontainer")).toBeInTheDocument();
    })

    it("should render calendar container", () => {
        render(
             <FormFilter />
        )
        expect(screen.getByTestId("formfilter-calendar-container")).toBeInTheDocument();
    })

    it("should render btn", () => {
        render(
             <FormFilter />
        )
        expect(screen.getByTestId("formfilter-btn")).toBeInTheDocument();
    })

    it("should render btn container", () => {
        render(
             <FormFilter />
        )
        expect(screen.getByTestId("formfilter-btn-container")).toBeInTheDocument();
    })
});