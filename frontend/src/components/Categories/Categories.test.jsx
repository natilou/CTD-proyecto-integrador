import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Categories from '.';


const dataMock = [
    {
        "id":1,
        "title":"Hoteles",
        "url_image":"https://res.cloudinary.com/dbdrkxooj/image/upload/v1666303628/DH-PI/inner-space-1026452_640_2_qejya3.png",
        "amount":807203
    },
    {
        "id":2,
        "title":"Departamentos",
        "url_image":"https://res.cloudinary.com/dbdrkxooj/image/upload/v1666303628/DH-PI/inner-space-1026452_640_2_qejya3.png",
        "amount":807203
    },
    {
        "id":3,
        "title":"Hostels",
        "url_image":"https://res.cloudinary.com/dbdrkxooj/image/upload/v1666303628/DH-PI/inner-space-1026452_640_2_qejya3.png",
        "amount":807203
    },
    {
        "id":4,
        "title":"Bed and Breakfast",
        "url_image":"https://res.cloudinary.com/dbdrkxooj/image/upload/v1666303628/DH-PI/inner-space-1026452_640_2_qejya3.png",
        "amount":807203
    }
]


describe("Test Categories", () => {
    it("should render container", () => {
        render(
            <Categories data={dataMock}
            />
        )
        expect(screen.getByTestId("categories-container")).toBeInTheDocument();
    })
});