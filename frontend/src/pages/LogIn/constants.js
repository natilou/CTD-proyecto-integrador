export const passwordValidLength = 6;

// TODO: delete this object, after implementing user registration with the backend
export let usersRegistered = [
    {   
        id: 1,
        name: "viajero",
        lastName: "grupo10",
        email: "viajero@mail.com",
        password: "1234567",
        roleId: 1
    },
    {
        email: "grupo10@mail.com",
        username: "grupo10",
        password: "1234567"
    },
]


const mockProduct = { 
    id: 3,
    title: "Diplomatic", 
    category: {
        description: "Hostel",
        id: 2,
        title: "Hostels",
        urlImage: "https://nomadsworld.com/wp-content/uploads/2018/11/nomads-st-kilda-dorm-room.jpg"
    }, 
    address: "Belgrano 1400", 
    city: {
        country: { 
            id: 1, 
            name: "Argentina" 
        },
        id: 3,
        name: "Mendoza",
    }, 
    description: "Este hotel de 5 estrellas está situado en el centro de Mendoza y cuenta con pileta al aire libre, gimnasio y sauna. Está rodeado de restaurantes, bodegas y tiendas. Alberga un restaurante de cocina mediterránea. La conexión WiFi es gratuita y el desayuno buffet está incluido.Las habitaciones del DiplomaticHotel tienen muebles franceses de lujo, suelo de madera oscura, ropa de cama blanca y vistas panorámicas a la ciudad o a los Andes. El baño incluye artículos de aseo y secador de pelo. También incluyen escritorio y TV LCD de 32 pulgadas con canales por cable.En el club de salud hay sesiones de masaje y de pilates.El aeropuerto El Plumerillo se encuentra a 10 minutos en auto. El hotel ofrece estacionamiento privado gratuito y servicio de alquiler de autos.",
    coverImage: "https://s3-group-10-c6.s3.us-east-2.amazonaws.com/1-1-portada.jpg",
    bookings: [
        {
            initialHour: "00:00:00",
            initialDate: "2022-11-18",
            endDate: "2022-11-20"
        },
        {
            initialHour: "00:00:00",
            initialDate: "2022-12-10",
            endDate: "2022-12-20"
        },
        {
            initialHour: "00:00:00",
            initialDate: "2023-01-05",
            endDate: "2022-01-15"
        },
    ]
}