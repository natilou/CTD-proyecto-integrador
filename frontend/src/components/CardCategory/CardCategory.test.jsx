import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardCategory from '.';



const data = {
    title: "Hunid",
    url_image: "https://res.cloudinary.com/dbdrkxooj/image/upload/v1666303628/DH-PI/inner-space-1026452_640_2_qejya3.png",
    amount: 8500,
}

describe("Test cardCategory", () => {
    it("should render cardcategory container", () => {
        render(
            <CardCategory 
            data={data}
            />
        )
        expect(screen.getByTestId("cardcategory-container")).toBeInTheDocument();
    })

    it("should render cardcategory image container", () => {
        render(
            <CardCategory 
            data={data}
            />
        )
        expect(screen.getByTestId("cardcategory-img-container")).toBeInTheDocument();
    })

    it("should render image", () => {
        render(
             <CardCategory 
            data={data}
            />
        )
        expect(screen.getByTestId("cardcategory-img")).toBeInTheDocument();
    })

    it("should render cardcategory title", () => {
        render(
             <CardCategory 
            data={data}
            />
        )
        expect(screen.getByTestId("cardcategory-title")).toBeInTheDocument();
    })

    it("should render cardcategory amount", () => {
        render(
             <CardCategory 
            data={data}
            />
        )
        expect(screen.getByTestId("cardcategory-amount")).toBeInTheDocument();
    })
});