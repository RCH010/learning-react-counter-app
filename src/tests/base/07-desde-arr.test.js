import '@testing-library/jest-dom'
import { retornaArreglo } from '../../base/07-deses-arr'

describe('07 Tests Desestrucutacion', () => {
    test('should retornaArreglo return an array', () => {
        expect(retornaArreglo()).toEqual(['ABC', 123]);
        
    })
})
