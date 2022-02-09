// el .test.js es lo que se buscara a probar
// el nombre de archivo no es importante como tal
//

describe('Pruebas en el archivo demo.test.js', () => {
    
    test('should be equals strings', () => {
        // 1. inicialización
        const mensaje = 'Hola Mundo.';
    
        // 2. estimulo
        const mensaje2 = 'Hola Mundo.';
    
        // 4. Observar comportamiendo
        expect(mensaje2).toBe(mensaje);
    })
})


