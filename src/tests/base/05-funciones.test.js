import '@testing-library/jest-dom'
import {getUsuarioActivo, getUser} from '../../base/05-funciones'

describe('05-funciones.test.js', () => {
    test('should getUser return an object', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        
        expect(getUser()).toEqual(userTest)
    })
    
    test('should getUsuarioActivo return object', () => {
        const nombres = ['Raúl', 'LILIA', ''];
        let userTest = {
            uid: 'ABC567',
            username: ''
        };
        nombres.forEach(nombre => {
            userTest.username = nombre;
            expect(getUsuarioActivo(nombre)).toEqual(userTest);
        })
    })
    
})
