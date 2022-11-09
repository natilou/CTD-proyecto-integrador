import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Gallery from '.';


const imagesMock = [
    {
        title: "img",
        url: "https://discord.com/channels/@me/1031731018224369734/1039706358599143575"
    },
    {
        title: "img",
        url: "https://discord.com/channels/@me/1031731018224369734/1039706358599143575"
    },
    {
        title: "img",
        url: "https://discord.com/channels/@me/1031731018224369734/1039706358599143575"
    },
    {
        title: "img",
        url: "https://discord.com/channels/@me/1031731018224369734/1039706358599143575"
    },
    {
        title: "img",
        url: "https://discord.com/channels/@me/1031731018224369734/1039706358599143575"
    },
    {
        title: "img",
        url: "https://discord.com/channels/@me/1031731018224369734/1039706358599143575"
    }
]



describe("Test Gallery", () => {
    it("should render container", () => {
        render(
            <Gallery images={imagesMock} />
        )
        expect(screen.getByTestId("gallery-container")).toBeInTheDocument();
    })

    it("should render main images container", () => {
        render(
            <Gallery images={imagesMock} />
        )
        expect(screen.getByTestId("main-images-container")).toBeInTheDocument();
    })

    it("should render main image container", () => {
        render(
             <Gallery images={imagesMock} />
        )
        expect(screen.getByTestId("main-image-container")).toBeInTheDocument();
    })

    it("should render main image", () => {
        render(
             <Gallery images={imagesMock} />
        )
        expect(screen.getByTestId("gallery-img")).toBeInTheDocument();
    })

    it("should render secondary images container", () => {
        render(
             <Gallery images={imagesMock} />
        )
        expect(screen.getByTestId("secondary-imgs-container")).toBeInTheDocument();
    })

    it("should render secondary image container", () => {
        render(
             <Gallery images={imagesMock} />
        )
        expect(screen.getByTestId("secondary-img-container")).toBeInTheDocument();
    })

    it("should render secondary img 1", () => {
        render(
             <Gallery images={imagesMock} />
        )
        expect(screen.getByTestId("secondary-img-1")).toBeInTheDocument();
    })

    it("should render btn secondary img 2", () => {
        render(
             <Gallery images={imagesMock} />
        )
        expect(screen.getByTestId("secondary-img-2")).toBeInTheDocument();
    })

    it("should render secondary image container 2", () => {
        render(
             <Gallery images={imagesMock}  />
        )
        expect(screen.getByTestId("secondary-imgs-container-2")).toBeInTheDocument();
    })

    it("should render secondary img 3", () => {
        render(
             <Gallery images={imagesMock} />
        )
        expect(screen.getByTestId("secondary-img-3")).toBeInTheDocument();
    })

    it("should render btn secondary img 3", () => {
        render(
             <Gallery images={imagesMock} />
        )
        expect(screen.getByTestId("secondary-img-4")).toBeInTheDocument();
    })

    it("should render btn container", () => {
        render(
             <Gallery images={imagesMock} />
        )
        expect(screen.getByTestId("btn-container")).toBeInTheDocument();
    })

    it("should render btn", () => {
        render(
             <Gallery images={imagesMock} />
        )
        expect(screen.getByTestId("gallery-btn")).toBeInTheDocument();
    })
});