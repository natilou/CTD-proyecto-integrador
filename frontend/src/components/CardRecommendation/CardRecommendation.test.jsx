import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardRecommendation from '.';
import { BrowserRouter } from 'react-router-dom';

const dataLodging = {
    id: 1,
    title: "Hunid",
    category: {
        id: 1, 
        title: "Hotels",
        urlImage: "https://res.cloudinary.com/dbdrkxooj/image/upload/v1666303628/DH-PI/inner-space-1026452_640_2_qejya3.png",
    },
    address: "Sarmiendo y Uruguay",
    city: "Buenos Aires",
    
    description: "Located in Buenos Aires, a 10-minute walk from The Obelisk of Buenos Aires, Huinid Obelisco Hotel provides accommodations with a fitness center, private parking and a bar. Featuring family rooms, this property also provides guests with a sun terrace. The property has a 24-hour front desk, a shuttle service, a business center and free WiFi throughout the property.The hotel will provide guests with air-conditioned rooms with a desk, a safety deposit box, a flat-screen TV and a private bathroom with a bidet. All guest rooms feature a closet."
}


describe("Test CardRecommendation", () => {
    
    it("should render container", () => {
        render(
             <BrowserRouter>
                <CardRecommendation dataLodging={dataLodging} />
            </BrowserRouter>
        )
        expect(screen.getByTestId("cardrecommendation-container")).toBeInTheDocument();
    })

    it("should render figure", () => {
        render(
             <BrowserRouter>
                <CardRecommendation dataLodging={dataLodging} />
            </BrowserRouter>
        )
        expect(screen.getByTestId("cardrecommendation-figure")).toBeInTheDocument();
    })

    it("should render img", () => {
        render(
              <BrowserRouter>
                <CardRecommendation dataLodging={dataLodging} />
            </BrowserRouter>
        )
        expect(screen.getByTestId("cardrecommendation-img")).toBeInTheDocument();
    })

    it("should render description container", () => {
        render(
              <BrowserRouter>
                <CardRecommendation dataLodging={dataLodging} />
            </BrowserRouter>
        )
        expect(screen.getByTestId("cardrecommendation-description-container")).toBeInTheDocument();
    })

    it("should render score", () => {
        render(
              <BrowserRouter>
                <CardRecommendation dataLodging={dataLodging} />
            </BrowserRouter>
        )
        expect(screen.getByTestId("cardrecommendation-score")).toBeInTheDocument();
    })

    it("should render star container", () => {
        render(
              <BrowserRouter>
                <CardRecommendation dataLodging={dataLodging} />
            </BrowserRouter>
        )
        expect(screen.getByTestId("cardrecommendation-container-star")).toBeInTheDocument();
    })

    it("should render ul", () => {
        render(
              <BrowserRouter>
                <CardRecommendation dataLodging={dataLodging} />
            </BrowserRouter>
        )
        expect(screen.getByTestId("cardrecommendation-ul")).toBeInTheDocument();
    })

    it("should render title", () => {
        render(
              <BrowserRouter>
                <CardRecommendation dataLodging={dataLodging} />
            </BrowserRouter>
        )
        expect(screen.getByTestId("cardrecommendation-title")).toBeInTheDocument();
    })

    it("should render score number", () => {
        render(
              <BrowserRouter>
                <CardRecommendation dataLodging={dataLodging} />
            </BrowserRouter>
        )
        expect(screen.getByTestId("cardrecommendation-score-number")).toBeInTheDocument();
    })

    it("should render score description", () => {
        render(
              <BrowserRouter>
                <CardRecommendation dataLodging={dataLodging} />
            </BrowserRouter>
        )
        expect(screen.getByTestId("cardrecommendation-score-p")).toBeInTheDocument();
    })

    it("should render location", () => {
        render(
              <BrowserRouter>
                <CardRecommendation dataLodging={dataLodging} />
            </BrowserRouter>
        )
        expect(screen.getByTestId("cardrecommendation-location")).toBeInTheDocument();
    })

    it("should render location icon", () => {
        render(
              <BrowserRouter>
                <CardRecommendation dataLodging={dataLodging} />
            </BrowserRouter>
        )
        expect(screen.getByTestId("cardrecommendation-location-icon")).toBeInTheDocument();
    })

    it("should render location address", () => {
        render(
              <BrowserRouter>
                <CardRecommendation dataLodging={dataLodging} />
            </BrowserRouter>
        )
        expect(screen.getByTestId("cardrecommendation-location-address")).toBeInTheDocument();
    })

    it("should render location link", () => {
        render(
              <BrowserRouter>
                <CardRecommendation dataLodging={dataLodging} />
            </BrowserRouter>
        )
        expect(screen.getByTestId("cardrecommendation-location-link")).toBeInTheDocument();
    })

    it("should render icons container", () => {
        render(
              <BrowserRouter>
                <CardRecommendation dataLodging={dataLodging} />
            </BrowserRouter>
        )
        expect(screen.getByTestId("cardrecommendation-icons")).toBeInTheDocument();
    })

    it("should render wifi icon", () => {
        render(
              <BrowserRouter>
                <CardRecommendation dataLodging={dataLodging} />
            </BrowserRouter>
        )
        expect(screen.getByTestId("cardrecommendation-wifi")).toBeInTheDocument();
    })

    it("should render nado icon", () => {
        render(
              <BrowserRouter>
                <CardRecommendation dataLodging={dataLodging} />
            </BrowserRouter>
        )
        expect(screen.getByTestId("cardrecommendation-nado")).toBeInTheDocument();
    })

    it("should render description", () => {
        render(
              <BrowserRouter>
                <CardRecommendation dataLodging={dataLodging} />
            </BrowserRouter>
        )
        expect(screen.getByTestId("cardrecommendation-description")).toBeInTheDocument();
    })

    it("should render btn", () => {
        render(
            <BrowserRouter>
                <CardRecommendation dataLodging={dataLodging} />
            </BrowserRouter>
        )
        expect(screen.getByTestId("cardrecommendation-btn")).toBeInTheDocument();
    })

    it("should render link", () => {
        render(
            <BrowserRouter>
                <CardRecommendation dataLodging={dataLodging} />
            </BrowserRouter>
        )
        expect(screen.getByTestId("cardrecommendation-link-url")).toBeInTheDocument();
    })
});