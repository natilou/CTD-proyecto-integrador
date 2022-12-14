// import React from 'react';
// import { fireEvent, render, screen } from '@testing-library/react';
// import { BrowserRouter } from "react-router-dom";
// import '@testing-library/jest-dom';
// import BookingDetail from '.';

// const user = {
//     id: 1,
// };
// const product = {
//     title: "Hunid",
//     address: "Libertad 500",
//     city: {
//         id: 1,
//         name: "Bariloche",
//         country: {
//             id: 1,
//             name: "Argentina",
//         }
//     },
//     category: {
//         id: 1,
//         title: "Hoteles"
//     }
// };
// const productImages = [{url: "url", title: "img"}];
// const start = "2023/01/01";
// const end = "2023/01/15";


// describe("Test BookingDetail", () => {

//     it("should render container", () => {
//         render(
//             <BrowserRouter>
//                 <BookingDetail 
//                 user={user}
//                 product={product}
//                 productImages={productImages}
//                 start={start}
//                 end={end}
//                 />
//             </BrowserRouter>
//         )
//         expect(screen.getByTestId("booking-detail-container")).toBeInTheDocument();
//     })

//     it("should render title", () => {
//         render(
//             <BrowserRouter>
//                 <BookingDetail 
//                 user={user}
//                 product={product}
//                 productImages={productImages}
//                 start={start}
//                 end={end}
//                 />
//             </BrowserRouter>
//         )
//         expect(screen.getByTestId("booking-detail-title")).toBeInTheDocument();
//         expect(screen.getByTestId("booking-detail-title")).toHaveTextContext("Detalles de la reserva");
//     })

//     it("should render img", () => {
//         render(
//             <BrowserRouter>
//                 <BookingDetail 
//                 user={user}
//                 product={product}
//                 productImages={productImages}
//                 start={start}
//                 end={end}
//                 />
//             </BrowserRouter>
//         )
//         expect(screen.getByTestId("booking-detail-img")).toBeInTheDocument();
//     })

//     it("should render sub-container", () => {
//         render(
//             <BrowserRouter>
//                 <BookingDetail 
//                 user={user}
//                 product={product}
//                 productImages={productImages}
//                 start={start}
//                 end={end}
//                 />
//             </BrowserRouter>
//         )
//         expect(screen.getByTestId("booking-detail-sub-container")).toBeInTheDocument();
//     })

//     it("should render category", () => {
//         render(
//             <BrowserRouter>
//                 <BookingDetail 
//                 user={user}
//                 product={product}
//                 productImages={productImages}
//                 start={start}
//                 end={end}
//                 />
//             </BrowserRouter>
//         )
        
//         expect(screen.getByTestId('booking-detail-category')).toBeInTheDocument();;
//         expect(screen.getByTestId('booking-detail-category')).toHaveTextContext(product.category.name);
//     })

//     it("should render product title", () => {
//         render(
//             <BrowserRouter>
//                 <BookingDetail 
//                 user={user}
//                 product={product}
//                 productImages={productImages}
//                 start={start}
//                 end={end}
//                 />
//             </BrowserRouter>
//         )
//         expect(screen.getByTestId("booking-detail-product")).toBeInTheDocument();
//         expect(screen.getByTestId('booking-detail-product')).toHaveTextContext(product.title);
//     })

//     it("should render stars", () => {
//         render(
//             <BrowserRouter>
//                 <BookingDetail 
//                 user={user}
//                 product={product}
//                 productImages={productImages}
//                 start={start}
//                 end={end}
//                 />
//             </BrowserRouter>
//         )
//         expect(screen.getByTestId("booking-detail-icon-star-container")).toBeInTheDocument();
//         expect(screen.getByTestId("booking-detail-icon-star-container").length).toBe(4);
//     })

//     it("should render location container", () => {
//         render(
//             <BrowserRouter>
//                 <BookingDetail 
//                 user={user}
//                 product={product}
//                 productImages={productImages}
//                 start={start}
//                 end={end}
//                 />
//             </BrowserRouter>
//         )
//         expect(screen.getByTestId("booking-detail-location")).toBeInTheDocument();
//     })

//     it("should render location container sub", () => {
//         render(
//             <BrowserRouter>
//                 <BookingDetail 
//                 user={user}
//                 product={product}
//                 productImages={productImages}
//                 start={start}
//                 end={end}
//                 />
//             </BrowserRouter>
//         )
//         expect(screen.getByTestId("booking-detail-location-sub")).toBeInTheDocument();
//     })

//     it("should render location img", () => {
//         render(
//             <BrowserRouter>
//                 <BookingDetail 
//                 user={user}
//                 product={product}
//                 productImages={productImages}
//                 start={start}
//                 end={end}
//                 />
//             </BrowserRouter>
//         )
//         expect(screen.getByTestId("booking-detail-location-img")).toBeInTheDocument();
//     })

//     it("should render product address", () => {
//         render(
//                <BrowserRouter>
//                 <BookingDetail 
//                 user={user}
//                 product={product}
//                 productImages={productImages}
//                 start={start}
//                 end={end}
//                 />
//             </BrowserRouter>
//         )
//         expect(screen.getByTestId("booking-detail-address")).toBeInTheDocument();
//         expect(screen.getByTestId("booking-detail-address")).toHaveTextContext(product.address);

//     })

//     it("should render product location", () => {
//         render(
//                <BrowserRouter>
//                 <BookingDetail 
//                 user={user}
//                 product={product}
//                 productImages={productImages}
//                 start={start}
//                 end={end}
//                 />
//             </BrowserRouter>
//         )
//         expect(screen.getByTestId("booking-detail-city")).toBeInTheDocument();
//         expect(screen.getByTestId("booking-detail-city")).toHaveTextContext(`Ciudad de ${product.city.name}, ${product.city.country.name}`)
//     })
// });