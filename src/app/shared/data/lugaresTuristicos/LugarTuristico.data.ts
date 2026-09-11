import { lugarTuristico } from "./LugarTuristico.interface";

export const LUGARES_TURISTICOS: lugarTuristico[] = [
    {
        id: 1,
        imagen: `assets/LUGARES/PAKCHA/catarata_pakcha-paul.jpeg`,
        titleH3: "Catarata",
        titleH1: "Pakcha",
        descripcion: "Una impresionante caída de agua rodeada de vegetación y senderos naturales.",
        routerLink: "/lugares/CatarataPaccha",
        fraseTurista: "¡Wow! Este lugar sí que me deja sin palabras...",
        estadoTurista: 'sorprendido',
        lugar: {
            hero: {
                imagen: 'assets/LUGARES/PAKCHA/catarata_pakcha-paul.jpeg',
                titulo_1: 'Catarata',
                titulo_2: 'Pakcha',
                descripcion: `
                    Uno de los paisajes naturales más impresionantes
                    de Huaranchal, rodeado de vegetación,
                    senderos ecológicos y vistas espectaculares.
                    `
            },
            galeria: [
                { foto: 'assets/LUGARES/PAKCHA/PAKCHA_07.jpeg', titulo: 'Noche en Chillín', categoria: 'paisajes', favorita: true },
                { foto: 'assets/LUGARES/PAKCHA/PAKCHA_02.jpeg', titulo: 'Zona Lounge', categoria: 'interiores', favorita: false },
                { foto: 'assets/LUGARES/PAKCHA/PAKCHA_15.jpeg', titulo: 'Terraza', categoria: 'exteriores', favorita: false },
                { foto: 'assets/LUGARES/PAKCHA/PAKCHA_03.jpeg', titulo: 'Atardecer', categoria: 'paisajes', favorita: true, ubicacion: 'Mirador' },
                { foto: 'assets/LUGARES/PAKCHA/PAKCHA_11.jpeg', titulo: 'Habitación Matrimonial', categoria: 'interiores', favorita: false },
                { foto: 'assets/LUGARES/PAKCHA/PACKCHA_01.jpeg', titulo: 'Vista Principal', categoria: 'exteriores', favorita: true, ubicacion: 'Chillín, Perú' },
                { foto: 'assets/LUGARES/PAKCHA/PAKCHA_09.jpeg', titulo: 'Sendero', categoria: 'paisajes', favorita: false },
                { foto: 'assets/LUGARES/PAKCHA/PAKCHA_06.jpeg', titulo: 'Piscina', categoria: 'exteriores', favorita: false },
                { foto: 'assets/LUGARES/PAKCHA/PAKCHA_08.jpeg', titulo: 'Comedor', categoria: 'interiores', favorita: false },
                { foto: 'assets/LUGARES/PAKCHA/PAKCHA_12.jpeg', titulo: 'Vista Panorámica', categoria: 'paisajes', favorita: false },
                { foto: 'assets/LUGARES/PAKCHA/PAKCHA_05.jpeg', titulo: 'Jardín Central', categoria: 'exteriores', favorita: true },
                { foto: 'assets/LUGARES/PAKCHA/PAKCHA_16.jpeg', titulo: 'Habitación Matrimonial', categoria: 'interiores', favorita: false },
                { foto: 'assets/LUGARES/PAKCHA/PAKCHA_17.jpeg', titulo: 'Vista Panorámica', categoria: 'paisajes', favorita: false },
                { foto: 'assets/LUGARES/PAKCHA/PAKCHA_10.jpeg', titulo: 'Terraza', categoria: 'exteriores', favorita: false },
                { foto: 'assets/LUGARES/PAKCHA/PAKCHA_04.jpeg', titulo: 'Área Común', categoria: 'interiores', favorita: false },
                { foto: 'assets/LUGARES/PAKCHA/PAKCHA_14.jpeg', titulo: 'Sendero', categoria: 'paisajes', favorita: false },
                { foto: 'assets/LUGARES/PAKCHA/PAKCHA_13.jpeg', titulo: 'Vista Principal', categoria: 'exteriores', favorita: true, ubicacion: 'Chillín, Perú' },
            ],
            historia: {
                imagen: 'assets/LUGARES/PAKCHA/PAKCHA_08.jpeg',
                lugar: 'Catarata Pakcha',
                descripcion: 'Uno de los paisajes más impresionantes de Huaranchal, rodeado de vegetación, senderos naturales y vistas únicas del Valle Alto Chicama.',
                titulo: 'Un símbolo natural de Huaranchal',
                historia: [
                    {
                        p: `
                            Su nombre viene por los sectores que se denominan los limones a eso se debe su nombre, 
                            pero tambien se denomina catarata la Paccha y otros que también  está a continuación del sector los limones.
                            `
                    },
                    {
                        p: `
                            Es entonces es que unos lo llaman catarata los limones y otros lo llaman catarata la Paccha.
                            
                            `
                    },
                    {
                        p: `
                            Es un lugar turístico del distrito de Huaranchal que está ubicado en el rio del sector la Paccha a 35 minutos de Huaranchal, 
                            tiene una altura de 40 m. sus aguas critalinas que hace muchos años perforó el cerro para dar la majestuosa catarata. 
                            En el tiempo de invierno se puede ver como mayor belleza por el caudal de sus aguas cristalinas que baja de las alturas de Carranday.
                            `
                    },
                    {
                        p: `
                            Un aproximado de mil visitantes al año y cada año van aumentando su visita gracias a su publicidad 
                            que se va genernado a través de revistas y medio de comunicación.
                            
                            `
                    },
                ],
                significado: `Pakcha significa cascada o caída de agua en lengua quechua.`,
                ubicacion: `
                    Distrito de Huaranchal,
                    provincia de Otuzco,
                    región La Libertad.`
            },
            souvenirs: [
                {
                    imagen: 'assets/LUGARES/CHILLIN/SOUVENIRS/SOUVENIR_CHILLIN_1.png',
                    titulo: 'Imán de Refrigerador',
                    descripcion: 'Lleva contigo un recuerdo de la Catarata Pakcha y de los paisajes naturales de Huaranchal.',

                    lugar: 'Huaranchal',
                    turistico: 'Pakcha',
                    tipo: 'Recuerdo'
                },
                {
                    imagen: 'assets/LUGARES/CHILLIN/SOUVENIRS/SOUVENIR_CHILLIN_3.png',
                    titulo: 'Taza decorativa',
                    descripcion: 'Lleva contigo un recuerdo de la Catarata Pakcha y de los paisajes naturales de Huaranchal.',

                    lugar: 'Huaranchal',
                    turistico: 'Pakcha',
                    tipo: 'Recuerdo'
                }
            ]

        }
    },
    {
        id: 2,
        imagen: `assets/LUGARES/BANIOS_TERMALES/TERMALES_01.jpeg`,
        titleH3: "Baños",
        titleH1: "Termales",
        descripcion: "Espacios ideales para relajarse y disfrutar de aguas naturales.",
        routerLink: "/lugares/BaniosTermales",
        fraseTurista: "Esto sí es vida... relax total 😌",
        estadoTurista: 'relajado',
        lugar: {
            hero: {
                imagen: 'assets/LUGARES/BANIOS_TERMALES/termales_08.jpeg',
                titulo_1: 'Baños',
                titulo_2: 'Termales',
                descripcion: `
                    Uno de los paisajes naturales más impresionantes
                    de Huaranchal, rodeado de vegetación,
                    senderos ecológicos y vistas espectaculares.
                    `
            },
            galeria: [
                { foto: 'assets/LUGARES/BANIOS_TERMALES/termales_05.jpeg', titulo: 'Vista Principal', categoria: 'exteriores', favorita: true, ubicacion: 'Chillín, Perú' },
                { foto: 'assets/LUGARES/BANIOS_TERMALES/termales_07.jpeg', titulo: 'Atardecer', categoria: 'paisajes', favorita: true, ubicacion: 'Mirador' },
                { foto: 'assets/LUGARES/BANIOS_TERMALES/termales_06.jpeg', titulo: 'Zona Lounge', categoria: 'interiores', favorita: false },
                { foto: 'assets/LUGARES/BANIOS_TERMALES/termales_09.jpeg', titulo: 'Jardín Central', categoria: 'exteriores', favorita: true },
                { foto: 'assets/LUGARES/BANIOS_TERMALES/termales_12.jpeg', titulo: 'Jardín Central', categoria: 'exteriores', favorita: true },
                { foto: 'assets/LUGARES/BANIOS_TERMALES/termales_08.jpeg', titulo: 'Área Común', categoria: 'interiores', favorita: false },
                { foto: 'assets/LUGARES/BANIOS_TERMALES/termales_10.jpeg', titulo: 'Piscina', categoria: 'exteriores', favorita: false },
                { foto: 'assets/LUGARES/BANIOS_TERMALES/termales_11.jpeg', titulo: 'Área Común', categoria: 'interiores', favorita: false },
                { foto: 'assets/LUGARES/BANIOS_TERMALES/termales_13.jpeg', titulo: 'Piscina', categoria: 'exteriores', favorita: false },
            ],
            historia: {
                imagen: 'assets/LUGARES/BANIOS_TERMALES/termales_02.jpeg',
                lugar: 'Baños Termales',
                descripcion: 'Uno de los paisajes más impresionantes de Huaranchal, rodeado de vegetación, senderos naturales y vistas únicas del Valle Alto Chicama.',
                titulo: 'Un símbolo natural de Huaranchal',

                historia: [
                    {
                        p: `
                            Ubicado a 1900 msnm, entre imponentes cerros y a un costado del río Huaranchalino, 
                            este espacio se encuentra rodeado de abundante vegetación y árboles frutales. 
                            Se sitúa en el sector La Tranca Vieja, dentro del distrito de Huaranchal, 
                            provincia de Otuzco, a solo 30 minutos del pueblo.
                            `
                    },
                    {
                        p: `
                            Consiste en una fuente o manantial de aguas termales que emanan a una temperatura de 70 °C. 
                            Sus aguas son ricas en minerales como fierro y azufre, 
                            lo que las convierte en una alternativa altamente saludable para el tratamiento, 
                            alivio y curación de diversas dolencias.
                            `
                    },
                    {
                        p: `
                            Estas aguas termales son aprovechadas por los habitantes locales y 
                            reciben a más de 3000 visitantes durante las Fiestas Patronales del 24 de junio. 
                            Asimismo, en vacaciones de medio año son muy concurridas por estudiantes de Lima y Trujillo, 
                            así como por familias que acuden a disfrutar de su excelente clima.
                            `
                    },
                ],

                significado: `Pakcha significa cascada o caída de agua en lengua quechua.`,

                ubicacion: `
                    Distrito de Huaranchal,
                    provincia de Otuzco,
                    región La Libertad.
                    `
            },
            souvenirs: [
                {
                    imagen: 'assets/LUGARES/PAKCHA/souvenir_pakcha_01.png',
                    titulo: 'Imán de Refrigerador',
                    descripcion: 'Lleva contigo un recuerdo de la Catarata Pakcha y de los paisajes naturales de Huaranchal.',
                    lugar: 'Huaranchal',
                    turistico: 'Pakcha',
                    tipo: 'Recuerdo'
                },
                {
                    imagen: 'assets/LUGARES/PAKCHA/souvenir_pakcha_01.png',
                    titulo: 'Taza decorativa',
                    descripcion: 'Lleva contigo un recuerdo de la Catarata Pakcha y de los paisajes naturales de Huaranchal.',
                    lugar: 'Huaranchal',
                    turistico: 'Pakcha',
                    tipo: 'Recuerdo'
                }
            ]
        }
    },
    {
        id: 3,
        imagen: `assets/LUGARES/CHILLIN/Chillin.jpeg`,
        titleH3: "Mirador",
        titleH1: "Chillin",
        descripcion: "Espacios ideales para relajarse y disfrutar de aguas naturales.",
        routerLink: "/lugares/Chillin",
        fraseTurista: "Desde aquí todo el valle se ve increíble...",
        estadoTurista: 'feliz',
        lugar: {
            hero: {
                imagen: 'assets/LUGARES/CHILLIN/chillin-03.jpeg',
                titulo_1: 'Mirador',
                titulo_2: 'el Chillin',
                descripcion: `
                    Uno de los paisajes naturales más impresionantes
                    de Huaranchal, rodeado de vegetación,
                    senderos ecológicos y vistas espectaculares.
                    `
            },
            galeria: [
                { foto: 'assets/LUGARES/CHILLIN/chillin-03.jpeg', titulo: 'Vista Principal', categoria: 'exteriores', favorita: true, ubicacion: 'Chillín, Perú' },
                { foto: 'assets/LUGARES/CHILLIN/chillin-02.jpeg', titulo: 'Zona Lounge', categoria: 'interiores', favorita: false },
                { foto: 'assets/LUGARES/CHILLIN/chillin-06.jpeg', titulo: 'Atardecer', categoria: 'paisajes', favorita: true, ubicacion: 'Mirador' },
                { foto: 'assets/LUGARES/CHILLIN/chillin-05.jpeg', titulo: 'Área Común', categoria: 'interiores', favorita: false },
                { foto: 'assets/LUGARES/CHILLIN/chillin-04.jpeg', titulo: 'Jardín Central', categoria: 'exteriores', favorita: true },
                { foto: 'assets/LUGARES/CHILLIN/chillin-07.jpeg', titulo: 'Piscina', categoria: 'exteriores', favorita: false },
                { foto: 'assets/LUGARES/CHILLIN/chillin-08.jpeg', titulo: 'Noche en Chillín', categoria: 'paisajes', favorita: true },
                { foto: 'assets/LUGARES/CHILLIN/chillin-09.jpeg', titulo: 'Comedor', categoria: 'interiores', favorita: false },
                { foto: 'assets/LUGARES/CHILLIN/chillin-10.jpeg', titulo: 'Sendero', categoria: 'paisajes', favorita: false },
                { foto: 'assets/LUGARES/CHILLIN/chillin-11.jpeg', titulo: 'Terraza', categoria: 'exteriores', favorita: false },
                { foto: 'assets/LUGARES/CHILLIN/chillin-12.jpeg', titulo: 'Habitación Matrimonial', categoria: 'interiores', favorita: false },
                { foto: 'assets/LUGARES/CHILLIN/chillin-13.jpeg', titulo: 'Vista Panorámica', categoria: 'paisajes', favorita: false },
                { foto: 'assets/LUGARES/CHILLIN/chillin-14.jpeg', titulo: 'Vista Principal', categoria: 'exteriores', favorita: true, ubicacion: 'Chillín, Perú' },
                { foto: 'assets/LUGARES/CHILLIN/chillin-15.jpeg', titulo: 'Zona Lounge', categoria: 'interiores', favorita: false },
                { foto: 'assets/LUGARES/CHILLIN/chillin-16.jpeg', titulo: 'Atardecer', categoria: 'paisajes', favorita: true, ubicacion: 'Mirador' },
                { foto: 'assets/LUGARES/CHILLIN/chillin-17.jpeg', titulo: 'Área Común', categoria: 'interiores', favorita: false },
                { foto: 'assets/LUGARES/CHILLIN/chillin-18.jpeg', titulo: 'Jardín Central', categoria: 'exteriores', favorita: true },
                { foto: 'assets/LUGARES/CHILLIN/chillin-19.jpeg', titulo: 'Piscina', categoria: 'exteriores', favorita: false },
                { foto: 'assets/LUGARES/CHILLIN/chillin-20.jpeg', titulo: 'Noche en Chillín', categoria: 'paisajes', favorita: true },
                { foto: 'assets/LUGARES/CHILLIN/chillin-21.jpeg', titulo: 'Comedor', categoria: 'interiores', favorita: false },
                { foto: 'assets/LUGARES/CHILLIN/chillin-22.jpeg', titulo: 'Sendero', categoria: 'paisajes', favorita: false },
                { foto: 'assets/LUGARES/CHILLIN/chillin-23.jpeg', titulo: 'Terraza', categoria: 'exteriores', favorita: false }
            ],
            historia: {
                imagen: 'assets/LUGARES/CHILLIN/chillin-07.jpeg',
                lugar: 'Mirador el Chillin',
                descripcion: 'Uno de los paisajes más impresionantes de Huaranchal, rodeado de vegetación, senderos naturales y vistas únicas del Valle Alto Chicama.',
                titulo: 'Un símbolo natural de Huaranchal',
                historia: [
                    {
                        p: `
                            El Cerro Chillín es un importante lugar turístico del distrito de Huaranchal, 
                            ubicado al oeste de la capital distrital. Su nombre tiene origen en una planta 
                            conocida por los pobladores como "chillín", cuyo nombre proviene del quechua. 
                            Esta planta crecía abundantemente en la zona y era aprovechada tradicionalmente 
                            por los habitantes para elaborar lazos y sogas utilizados para amarrar a sus animales.
                            `
                    },
                    {
                        p: `
                            Estas sogas tenían una particularidad: eran utilizadas principalmente durante 
                            la época en que no había lluvias. Cuando llegaba la temporada de precipitaciones, 
                            las sogas se mojaban y terminaban deteriorándose, por lo que su uso estaba condicionado 
                            a las características del clima de la zona. Esta práctica forma parte de los conocimientos 
                            y costumbres tradicionales que se han transmitido entre los pobladores de Huaranchal.
                            `
                    },
                    {
                        p: `
                            Con el paso de los años, el Cerro Chillín también se ha convertido en un lugar 
                            de encuentro y celebración para la comunidad. Durante los meses de abril y mayo, 
                            numerosas personas visitan este lugar con motivo de la celebración del Día del Trabajador, 
                            una festividad que se mantiene como una tradición de muchos años y que está acompañada 
                            por la devoción a la Santísima Cruz del Chillín.
                            `
                    },
                    {
                        p: `
                            Además de su importancia cultural y tradicional, el Cerro Chillín destaca por sus 
                            impresionantes paisajes. Desde sus alturas se puede apreciar una hermosa vista del 
                            distrito de Huaranchal, así como de sus caseríos aledaños y de algunas localidades 
                            pertenecientes a otros distritos. Esta ubicación privilegiada convierte al Chillín 
                            en uno de los miradores naturales más representativos de la zona.
                            `
                    },
                    {
                        p: `
                            La experiencia de visitar el Cerro Chillín comienza desde el recorrido hacia el 
                            recientemente inaugurado mirador. El acceso permite disfrutar progresivamente del 
                            paisaje y descubrir nuevos espacios naturales. Desde este punto, el recorrido continúa 
                            ascendiendo hasta llegar al propio cerro, donde la belleza del entorno y la tranquilidad 
                            del lugar hacen que la experiencia sea aún más especial.
                            `
                    },
                    {
                        p: `
                            Cada primero de mayo, el Cerro Chillín cobra especial importancia con la celebración 
                            del Día del Trabajador. Los pobladores suelen subir desde la madrugada o incluso desde 
                            la noche anterior para acampar en el lugar y participar de las actividades tradicionales. 
                            De manera similar, el caserío El Jacinto, ubicado en el camino hacia el cerro, también 
                            celebra su propia fiesta patronal durante estas fechas.
                            `
                    },
                    {
                        p: `
                            Durante estas celebraciones se realiza el tradicional evento denominado "Florecer", 
                            en el que los habitantes se reúnen al amanecer para disfrutar de la música, compartir 
                            en comunidad y contemplar las espectaculares vistas desde las alturas. Esta celebración 
                            representa una muestra de la identidad, las costumbres y la devoción de los pobladores 
                            hacia este importante lugar.
                            `
                    },
                    {
                        p: `
                            El Cerro Chillín reúne naturaleza, tradición, historia y cultura en un mismo espacio. 
                            Su origen ligado a las costumbres de los pobladores, sus celebraciones tradicionales 
                            y sus impresionantes paisajes lo convierten en un lugar representativo de Huaranchal. 
                            Visitarlo permite conocer no solo la belleza natural del distrito, sino también parte 
                            de las tradiciones que forman parte de su identidad.
                            `
                    }
                ],
                significado: `Mirador El Chillin.`,
                ubicacion: `
                    Distrito de Huaranchal,
                    provincia de Otuzco,
                    región La Libertad.`
            },
            souvenirs: [
                {
                    imagen: 'assets/LUGARES/CHILLIN/SOUVENIRS/SOUVENIR_CHILLIN_1.png',
                    titulo: 'Imán de Refrigerador',
                    descripcion: 'Lleva contigo un recuerdo de la Catarata Pakcha y de los paisajes naturales de Huaranchal.',

                    lugar: 'Huaranchal',
                    turistico: 'Pakcha',
                    tipo: 'Recuerdo'
                },
                {
                    imagen: 'assets/LUGARES/CHILLIN/SOUVENIRS/SOUVENIR_CHILLIN_3.png',
                    titulo: 'Llavero Cruz del Chillin',
                    descripcion: 'Lleva contigo un recuerdo de la Cruz del Chillin, uno de los lugares representativos de Huaranchal, como símbolo de fe, tradición y conexión con este hermoso destino.',

                    lugar: 'Huaranchal',
                    turistico: 'Chillin',
                    tipo: 'Recuerdo'
                },
                {
                    imagen: 'assets/LUGARES/CHILLIN/SOUVENIRS/SOUVENIR_CHILLIN_4.png',
                    titulo: 'Adorno decorativo de madera',
                    descripcion: 'Lleva a casa un recuerdo del Chillin con este adorno de madera, inspirado en sus hermosos paisajes y pensado para decorar cualquier espacio con un toque especial de Huaranchal.',

                    lugar: 'Huaranchal',
                    turistico: 'Chillin',
                    tipo: 'Recuerdo'
                },
                {
                    imagen: 'assets/LUGARES/CHILLIN/SOUVENIRS/SOUVENIR_CHILLIN_5.png',
                    titulo: 'Señal decorativa de madera',
                    descripcion: 'Lleva contigo un recuerdo del Chillin con esta decoración de madera, formada por pequeñas señalizaciones con frases representativas que evocan sus paisajes, tradición y encanto natural.',

                    lugar: 'Huaranchal',
                    turistico: 'Chillin',
                    tipo: 'Recuerdo'
                }
            ]
        }
    }
]