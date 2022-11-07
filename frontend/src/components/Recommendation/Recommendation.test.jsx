import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Recommendation from '.';
import { BrowserRouter } from 'react-router-dom';


const dataMock = [
    
    {
        "name": "Huinid",
        "category": "Hotels",
        "score": "9.3",
        "label_score": "Very good",
        "description": "Located in Buenos Aires, a 10-minute walk from The Obelisk of Buenos Aires, Huinid Obelisco Hotel provides accommodations with a fitness center, private parking and a bar. Featuring family rooms, this property also provides guests with a sun terrace. The property has a 24-hour front desk, a shuttle service, a business center and free WiFi throughout the property.The hotel will provide guests with air-conditioned rooms with a desk, a safety deposit box, a flat-screen TV and a private bathroom with a bidet. All guest rooms feature a closet.",
        "url_location": "https://www.google.com/maps/place/Huinid+Obelisco+Hotel/@-34.6052281,-58.389083,17z/data=!3m1!4b1!4m8!3m7!1s0x95bccacf3fd8bd0d:0x82dce18d925298a2!5m2!4m1!1i2!8m2!3d-34.6052213!4d-58.3868949",
        "distance": "100",
        "city": "Buenos Aires",
        "url_image":"https://res.cloudinary.com/dbdrkxooj/image/upload/v1666303628/DH-PI/inner-space-1026452_640_2_qejya3.png"
    }, 
    {
        "name": "Diplomatic",
        "category": "Hotels",
        "score": "9.3",
        "label_score": "Very good",
        "description": "An outdoor swimming pool, gym facilities and a sauna room can be enjoyed in this 5-star hotel in downtown Mendoza. It is surrounded by restaurants, wine shops and stores. It offers a restaurant with Mediterranean dishes. WiFi access is free and a buffet breakfast is included.Rooms at DiplomaticHotel have luxury French furniture, dark wood floors, white linens and panoramic views of the city or Andes Mountains. The bathrooms are stocked with bathroom amenities and a hairdryer. Each room also has a work desk and 32” LCD cable TV.Guests can enjoy Pilates and massage sessions at the health club.El Plumerillo Airport is a 10-minute drive. Free private parking is included and car rental can be arranged directly with the hotel.Couples in particular like the location – they rated it 9.6 for a two-person trip.",
        "url_location": "https://www.google.com/maps/place/Diplomatic+Hotel/@-32.8892959,-68.8517381,17z/data=!3m1!4b1!4m8!3m7!1s0x967e090489def92b:0x89f0a84aa8829689!5m2!4m1!1i2!8m2!3d-32.8892959!4d-68.8495494",
        "distance": "200", 
        "city": "Mendoza",
        "url_image":"https://res.cloudinary.com/dbdrkxooj/image/upload/v1666377109/DH-PI/inner-space-1026452_640_2_ozvna9.png"
    },
    {
        "name": "Sheraton",
        "category": "Hotels",
        "score": "9",
        "label_score": "Very good",
        "description": "This contemporary 5-star hotel with a swimming pool and gym, offers a central location in Cordoba´s city center. It features scenic views of the city and surrounding Sierra Mountain Ranges.The tastefully decorated rooms are spacious and boast views of the city. The private bathrooms are equipped with a bathtub and shower.Guests of Sheraton Cordoba Hotel can enjoy dining in La Pampa Restaurant, which uses seasonal ingredients to create its regional and international dishes. The cocktail bar also offers light snacks, refreshing drinks and live piano music.For convenience, Sheraton Cordoba provides a business center with a range of services including fax, photocopying and scanning facilities. In addition, free Wi-Fi is available throughout the hotel. ",
        "url_location": "https://www.google.com/maps/place/Sheraton+C%C3%B3rdoba+Hotel/@-31.4138689,-64.2047814,17z/data=!3m1!4b1!4m5!3m4!1s0x9432988230ccf0db:0x7e6b903e35ad6ad2!8m2!3d-31.4138689!4d-64.2025927",
        "distance": "500", 
        "city": "Cordoba",
        "url_image":"https://res.cloudinary.com/dbdrkxooj/image/upload/v1666377109/DH-PI/inner-space-1026452_640_2_ozvna9.png"
    },
]


describe("Test Recommendation", () => {
    it("should render container", () => {
        render(
            <BrowserRouter>
                <Recommendation dataLodging={dataMock} />
            </BrowserRouter>
            
        )
        expect(screen.getByTestId("recommendation-container")).toBeInTheDocument();
    })
});