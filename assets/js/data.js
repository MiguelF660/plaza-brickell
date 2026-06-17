/* ============================================================================
   Plaza Brickell Collection — Capa de datos (data-driven)
   ----------------------------------------------------------------------------
   TODO el contenido de la web vive aquí. Para añadir/editar apartamentos,
   cambiar textos o reordenar fotos basta con tocar este archivo.
   (En Fase 2 este mismo modelo lo editará Marga desde un panel.)
   ============================================================================ */

window.SITE = {
  brand: "Plaza Brickell Collection",
  brandShort: "Plaza Brickell",
  logoSub: "Luxury stays & investments",
  // Contacto
  whatsapp: "17869428278",            // sin '+', para wa.me
  phoneDisplay: "+1 (786) 942-8278",
  email: "Info@margarivera.com",
  emailHref: "mailto:Info@margarivera.com",
  domain: "margarivera.com",
  instagram: "",                       // pendiente si Marga la tiene
  host: {
    name: "Marga Rivera",
    photo: "assets/img/brand/marga.jpg",
  },
  tagline: {
    es: "Vive Brickell como un local. Estancias de lujo en el corazón de Miami.",
    en: "Live Brickell like a local. Luxury stays in the heart of Miami.",
  },
  heroKicker: {
    es: "The Plaza on Brickell · Miami",
    en: "The Plaza on Brickell · Miami",
  },
};

/* Diccionario de servicios (claves reutilizables + etiqueta bilingüe + icono) */
window.AMENITIES = {
  pool:    { es: "Piscinas estilo resort", en: "Resort-style pools",      icon: "🏊" },
  gym:     { es: "Gimnasio equipado",      en: "Fully equipped gym",      icon: "🏋️" },
  wifi:    { es: "Wifi",                    en: "Wi-Fi",                   icon: "📶" },
  ac:      { es: "Aire acondicionado",     en: "Central A/C",             icon: "❄️" },
  laundry: { es: "Lavadora y secadora",    en: "In-unit washer & dryer",  icon: "🧺" },
  kitchen: { es: "Cocina totalmente equipada", en: "Fully equipped kitchen", icon: "🍳" },
  parking: { es: "Parking privado incluido", en: "Private parking included", icon: "🚗" },
  security:{ es: "Seguridad 24 horas",     en: "24-hour security",        icon: "🛡️" },
  linens:  { es: "Ropa de cama y toallas premium", en: "Premium linens & towels", icon: "🛏️" },
  balcony: { es: "Balcón con vistas",      en: "Balcony with views",      icon: "🌇" },
};

/* Textos compartidos: la zona y el edificio */
window.PLACES = {
  brickell: {
    title: { es: "Brickell", en: "Brickell" },
    body: {
      es: "Bienvenido a Brickell, el corazón financiero y cosmopolita de Miami. Conocido como el «Manhattan del Sur», combina modernos rascacielos, restaurantes de primer nivel, cafeterías, rooftop bars, tiendas exclusivas y una vibrante vida urbana, todo a pocos pasos de la Bahía de Biscayne. Desde aquí podrás caminar hasta Brickell City Centre, Mary Brickell Village, supermercados, parques frente al mar y la mejor gastronomía de la ciudad. Su ubicación privilegiada da acceso fácil a Downtown Miami, Wynwood, Miami Beach, Coconut Grove, Key Biscayne y al Aeropuerto Internacional de Miami.",
      en: "Welcome to Brickell, the financial and cosmopolitan heart of Miami. Known as the “Manhattan of the South”, it blends sleek skyscrapers, top-tier restaurants, cafés, rooftop bars, exclusive shops and vibrant city life — all steps from Biscayne Bay. From here you can walk to Brickell City Centre, Mary Brickell Village, supermarkets, waterfront parks and the city's best dining. Its prime location offers easy access to Downtown Miami, Wynwood, Miami Beach, Coconut Grove, Key Biscayne and Miami International Airport.",
    },
  },
  plaza: {
    title: { es: "The Plaza on Brickell", en: "The Plaza on Brickell" },
    body: {
      es: "Una de las comunidades residenciales más reconocidas y mejor ubicadas de Brickell: dos elegantes torres frente a la Bahía de Biscayne, con amenidades pensadas para disfrutar el estilo de vida de Miami. Dos espectaculares piscinas estilo resort, gimnasio totalmente equipado, salas de negocios, áreas sociales y seguridad las 24 horas. Todo a un paso de restaurantes, cafeterías, supermercados y entretenimiento, manteniendo la tranquilidad de una comunidad de primer nivel.",
      en: "One of the most recognized and best-located residential communities in Brickell: two elegant towers right on Biscayne Bay, with amenities designed for the Miami lifestyle. Two spectacular resort-style pools, a fully equipped gym, business lounges, social areas and 24-hour security. Everything steps from restaurants, cafés, supermarkets and entertainment, while keeping the calm of a first-class community.",
    },
  },
  host: {
    title: { es: "Tu anfitriona", en: "Your host" },
    body: {
      es: "Soy Marga Rivera. Vivo Brickell todos los días y te ayudo a vivirlo como un local. Mis apartamentos en The Plaza on Brickell están cuidados al detalle, con una limpieza impecable y todo lo necesario para que te sientas como en casa desde el primer minuto. Escríbeme y te ayudo a elegir el apartamento perfecto para tu estancia.",
      en: "I'm Marga Rivera. I live Brickell every day and I help you experience it like a local. My apartments at The Plaza on Brickell are cared for down to the last detail, with impeccable cleaning and everything you need to feel at home from the very first minute. Message me and I'll help you pick the perfect apartment for your stay.",
    },
  },
};

/* ----------------------------------------------------------------------------
   APARTAMENTOS
   - `photos` es el nº de fotos; los archivos están en
     assets/img/apartments/<id>/01.jpg, 02.jpg ...  (01 = portada)
   - `airbnb` = enlace de reserva real (de momento la reserva pasa por Airbnb).
---------------------------------------------------------------------------- */
window.APARTMENTS = [
  {
    id: "5509",
    nickname: "A Lighthouse in the City",
    headline: { es: "Penthouse con vistas al mar", en: "Penthouse with ocean views" },
    type:  { es: "Penthouse · 4 hab · 2,5 baños", en: "Penthouse · 4 bed · 2.5 bath" },
    beds: 4, baths: 2.5, parking: 1,
    view:  { es: "Mar, bahía y skyline", en: "Ocean, bay & skyline" },
    tower: "950 Brickell Bay Dr, Miami, FL 33131",
    photos: 25,
    airbnb: "https://www.airbnb.co.uk/rooms/4118349",
    short: {
      es: "Amanece rodeado de Miami: océano, bahía, el río y las luces del skyline desde una misma residencia.",
      en: "Wake up surrounded by Miami: ocean, bay, the river and the skyline lights from a single residence.",
    },
    description: {
      es: "Despierta rodeado por Miami. Desde sus balcones panorámicos contemplarás el amanecer sobre el océano, los barcos en la bahía, la entrada del Miami River y las luces del skyline de Brickell, todo desde una misma residencia: una experiencia visual que muy pocas propiedades en Miami pueden ofrecer. Este amplio apartamento de 4 habitaciones y 2,5 baños es ideal para familias, grupos de amigos, ejecutivos o estancias prolongadas. Sus generosos espacios permiten convivir cómodamente manteniendo áreas privadas para descansar. Cocina totalmente equipada, lavadora y secadora dentro de la unidad, aire acondicionado central, ropa de cama premium y todos los utensilios necesarios. Incluye una plaza de estacionamiento privada. Como huésped tendrás acceso a las exclusivas amenidades de The Plaza on Brickell: piscinas estilo resort, gimnasio, áreas sociales y seguridad 24 horas, a pocos pasos de restaurantes, tiendas y entretenimiento.",
      en: "Wake up surrounded by Miami. From its panoramic balconies you'll watch the sunrise over the ocean, the boats on the bay, the mouth of the Miami River and the lights of the Brickell skyline — all from a single residence: a visual experience very few properties in Miami can offer. This spacious 4-bedroom, 2.5-bathroom apartment is ideal for families, groups of friends, executives or extended stays. Its generous interiors let everyone share comfortably while keeping private areas to rest. Fully equipped kitchen, in-unit washer and dryer, central A/C, premium linens and every utensil you need. A private parking space is included. As a guest you'll enjoy The Plaza on Brickell's exclusive amenities: resort-style pools, gym, social areas and 24-hour security, steps from restaurants, shops and entertainment.",
    },
    amenities: ["pool","gym","wifi","ac","laundry","kitchen","parking","security","linens","balcony"],
  },
  {
    id: "3204",
    nickname: "In the Sun & Fun Capital of the World",
    headline: { es: "Vistas a la bahía y al skyline", en: "Bay & skyline views" },
    type:  { es: "2 hab · 2 baños", en: "2 bed · 2 bath" },
    beds: 2, baths: 2, parking: 1,
    view:  { es: "Bahía de Biscayne y skyline", en: "Biscayne Bay & skyline" },
    tower: "950 Brickell Bay Dr, Miami, FL 33131",
    photos: 18,
    airbnb: "https://www.airbnb.com/rooms/4156216",
    short: {
      es: "Elegante apartamento de 2 habitaciones con luz natural y espectaculares vistas a la bahía y al skyline de Miami.",
      en: "Elegant 2-bedroom apartment with natural light and spectacular views of the bay and the Miami skyline.",
    },
    description: {
      es: "Bienvenido a tu hogar en el corazón de Brickell. Este elegante apartamento de 2 habitaciones y 2 baños combina comodidad, ubicación y estilo de vida. Amplios espacios, abundante luz natural y espectaculares vistas a la Bahía de Biscayne y al skyline de Miami crean el ambiente ideal tanto para viajes de negocios como para vacaciones en familia. Cuenta con cocina totalmente equipada, electrodomésticos modernos, lavadora y secadora dentro de la unidad, aire acondicionado central, ropa de cama de alta calidad, toallas suaves, vajilla y todo lo necesario para sentirte como en casa desde el primer día. Incluye plaza de estacionamiento privada. Lo que realmente distingue a esta residencia es nuestro compromiso con la limpieza: nuestro equipo profesional la prepara con los más altos estándares. Relájate junto a las piscinas estilo resort y vive la experiencia Brickell desde una de las mejores ubicaciones de Miami.",
      en: "Welcome to your home in the heart of Brickell. This elegant 2-bedroom, 2-bathroom apartment blends comfort, location and lifestyle. Spacious rooms, abundant natural light and spectacular views of Biscayne Bay and the Miami skyline create the ideal setting for both business trips and family vacations. It features a fully equipped kitchen, modern appliances, in-unit washer and dryer, central A/C, high-quality linens, soft towels, dishware and everything to feel at home from day one. A private parking space is included. What truly sets this residence apart is our commitment to cleanliness: our professional team prepares it to the highest standards. Relax by the resort-style pools and live the Brickell experience from one of Miami's best locations.",
    },
    amenities: ["pool","gym","wifi","ac","laundry","kitchen","parking","security","linens","balcony"],
  },
  {
    id: "3405",
    nickname: "Rumba & Salsa only at Miami's Brickell",
    headline: { es: "Vistas urbanas al skyline", en: "Urban skyline views" },
    type:  { es: "Apartamento en The Plaza · vistas urbanas", en: "Apartment at The Plaza · city views" },
    beds: null, baths: null, parking: 1,
    view:  { es: "Vistas urbanas / skyline (sin mar)", en: "Urban / skyline views (no ocean)" },
    tower: "951 Brickell Ave, Miami, FL 33131",
    photos: 7,
    airbnb: "https://www.airbnb.co.uk/rooms/4118440",
    proPhotosPending: true,
    short: {
      es: "Funcional y bien ubicado, con vistas abiertas al vibrante skyline de Brickell en la segunda torre de The Plaza.",
      en: "Functional and well located, with open views of Brickell's vibrant skyline in The Plaza's second tower.",
    },
    description: {
      es: "Disfruta de una estancia excepcional en este apartamento de The Plaza on Brickell, en la segunda torre del complejo (las dos torres comparten las piscinas). Diseñado para la comodidad y la funcionalidad, ofrece vistas abiertas al vibrante skyline de Brickell y una auténtica experiencia de estilo de vida en el centro de la ciudad. Incluye plaza de estacionamiento privada, acceso a amenidades de primer nivel y una ubicación inmejorable. Como huésped disfrutarás de piscinas estilo resort, gimnasio, seguridad 24 horas y áreas comunes cuidadas. Ya viajes por negocios, vacaciones o una estancia prolongada, esta residencia combina ubicación, confort y vistas urbanas inolvidables para que vivas Miami como un verdadero local.",
      en: "Enjoy an exceptional stay in this apartment at The Plaza on Brickell, in the complex's second tower (both towers share the pools). Designed for comfort and functionality, it offers open views of Brickell's vibrant skyline and a true Downtown lifestyle. It includes a private parking space, access to first-class amenities and an unbeatable location. As a guest you'll enjoy resort-style pools, a gym, 24-hour security and well-kept common areas. Whether you travel for business, vacation or an extended stay, this residence combines location, comfort and unforgettable city views so you can live Miami like a true local.",
    },
    amenities: ["pool","gym","wifi","ac","kitchen","parking","security","balcony"],
  },
];
