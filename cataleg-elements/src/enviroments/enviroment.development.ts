export const environment = {
    production: false,
    apiUrl: 'http://localhost:4301',
    apiDelay: 600
}

// Separar la configuració de l'API permet canviar fàcilment 
// entre mock local i API real sense modificar el codi dels serveis.