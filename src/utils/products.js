const productos = [
    //coleccionables
    {
        id: 1,
        title: "Botellas De Pociones Con Luces Aclimatadoras (Harry Potter)",
        description: "Fantástica lámpara de Harry Potter con 7 réplicas de pociones mágicas utilizadas en Hogwarts, de libros y películas de la saga. Lámpara de mesa. 7 pociones realistas con etiquetas auténticas en diferentes alturas. Luz ambiental con multiples colores, fija o en movimiento. Funciona con 3 pilas AAA (no incluidas) Longitud de la base 30 cm aproximadamente marca Wow!",
        stock: 5,
        type: "coleccionables",
        imageProduct: {
            firtsImage: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/017/593/products/hpcol05211-098a4d4153fa451f9d16715461371730-640-0.webp",
            secondImage: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/017/593/products/hpcol05231-0b0296d31268876d8016715461374017-640-0.webp"
        },
        price: 20059,
    },

    {
        id: 2,
        title: "1/144 Millennium Falcon - Star Wars: Rise Skywalker - Bandai",
        description: "Kit para armar nave Millenium Falcon, inspirada en el diseño para la película «Star Wars;  The Rise of Skywalker».Escala 1/144.Alto grado de detalle.",
        stock: 2,
        type: "coleccionables",
        imageProduct: {
            firtsImage: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/017/593/products/millenium-falcon-11-3c6c5e957ccbd7d3fd16457509210097-640-0.webp",
            secondImage: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/017/593/products/millenium-falcon-21-3d7ea5afa5c5aacad816457509208534-640-0.webp"
        },
        price: 102499,
    },

    {
        id: 3,
        title: "Sombrero Seleccionador Interactivo - Harry Potter",
        description: "¡Descubre tu casa de Hogwarts con el Sombrero Seleccionador del Mundo Mágico parlante! Con 15 frases, detalles auténticos y movimientos faciales completos, el Sombrero Seleccionador es la manera perfecta para que jóvenes brujas, magos y muggles recreen la icónica escena de la Ceremonia de Selección de primer año de Harry Potter.",
        stock: 10,
        type: "coleccionables",
        imageProduct: {
            firtsImage: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/017/593/products/778988418185_3_2500x25001-a46e1391be9e66b8d416625724178659-640-0.webp",
            secondImage: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/017/593/products/7789884181851-513f4373f5e384b6d916625724177872-640-0.webp"
        },
        price: 38490,
    },

    //perifericos
    {
        id: 4,
        title: "Mouse Inalámbrico Gamer Logitech G502 Lighstspeed",
        description: "G502 es un ícono que encabeza las listas de todas las generaciones y es el mouse elegido por los jugadores serios. Ahora, G502 se une a las filas de los ratones inalámbricos para juegos más avanzados del mundo con el lanzamiento de G502 LIGHTSPEED.",
        stock: 8,
        type: "perifericos",
        imageProduct: {
            firtsImage: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/017/593/products/910-005566-31-decf98f1757117f60015982974205597-640-0.webp",
            secondImage: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/017/593/products/910-005566-21-3cfa63aa034ed4f63f15982974205919-640-0.webp"
        },
        price: 40900,      
    },

    {
        id: 5,
        title: "Teclado Corsair K65 RGB Mini 60 Mecanico Cherry MX Speed",
        description: "El teclado mecánico para juegos CORSAIR K65 RGB MINI 60% combina rendimiento de alto nivel con portabilidad, incluye la tecnología de hiperprocesamiento AXON, interruptores de teclas mecánicos CHERRY MX Red y una capacidad de personalización excepcional en un diseño compacto.",
        stock: 7,
        type: "perifericos",
        imageProduct: {
            firtsImage: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/017/593/products/crt0000161-8c3cee58c65e4be7aa16730395371609-640-0.webp",
            secondImage: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/017/593/products/crt0000121-acb1b3b0db8aecfd1816730395372794-640-0.webp"
        },
        price: 44490,      
    },

    //juegos
    {
        id: 6,
        title: "PS5 Elden Ring",
        description: "Blande el poder del Círculo de Elden y conviértete en un señor del Círculo en las Tierras Intermedias.La Orden Dorada se rompió. En las Tierras Intermedias gobernadas por la reina Márika la Eterna, el Círculo de Elden, origen del Árbol Áureo, fue destruido.",
        stock: 13,
        type: "juegos",
        imageProduct: {
            firtsImage: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/017/593/products/55sw015011-af178d616094af667b16479551361726-640-0.webp",
        },
        price: 25999,      
    },

    {
        id: 7,
        title: "PS5 God Of War Ragnarok",
        description: "Desde Santa Monica Studio llega la secuela del aclamado por la crítica God of War (2018). Kratos y Atreus deberán viajar a cada uno de los nueve reinos en busca de respuestas para prepararse para la vaticinada batalla que acabará con el mundo. ",
        stock: 22,
        type: "juegos",
        imageProduct: {
            firtsImage: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/017/593/products/55sw01801-431387d8c14c8ec0bf16765709716911-640-0.webp"
            
        },
        price: 39999,      
    },

    //indumentaria
    {
        id: 8,
        title: "Remera Gryffindor Leon (Harry Potter)",
        description: "LICENCIA OFICIAL HARRY POTTER Characters, names and related indicia are © WBEI",
        stock: 15,
        type: "indumentaria",
        imageProduct: {
            firtsImage: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/017/593/products/remera-gryffindor1-0849acc834014055ce16464187614926-640-0.webp",
          
        },
        price: 6374,      
    },

    {
        id: 9,
        title: "Bufanda Rayada Slytherin (Harry Potter)",
        description: "LICENCIA OFICIAL HARRY POTTER Characters, names and related indicia are © tm WBEI",
        stock: 6,
        type: "indumentaria",
        imageProduct: {
            firtsImage: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/017/593/products/bufanda-slytherin-rayada1-5fb65e54bcedd5cea715629897618042-640-0.webp",
            secondImage: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/017/593/products/bufandas-hp11-50b60c65eeacc1d89a16225634951968-640-0.webp"
        },
        price: 6400,      
    },

    {
        id: 10,
        title: "Medias Hogwarts",
        description:"LICENCIA OFICIAL HARRY POTTER Characters, names and related indicia are © & tm WBEI",
        stock: 3,
        type: "indumentaria",
        imageProduct: {
            firtsImage: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/017/593/products/hp-media-hogwarts1-7ce86df6f7951e022715638547580476-1024-10241-fd5f8fe829619bae7015823086527605-640-0.webp",
            
        },
        price: 1189,      
    },
]

export default productos;
