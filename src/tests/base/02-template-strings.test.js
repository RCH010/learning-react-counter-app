import '@testing-library/jest-dom'
import {getSaludo} from '../../base/02-template-string'

describe('02-Template-Strings', () => {
    test('should getSaludo return Hola name', () => {
        const nombres = ['Raúl', '', 'Lilia'];
        nombres.forEach((nombre) => {
            expect(getSaludo(nombre)).toBe(`Hola ${nombre}`);
        })
    })
    test('should getSaludo return Hola Carlos, when undefined', () => {
        expect(getSaludo()).toBe('Hola Carlos');
    })
})
