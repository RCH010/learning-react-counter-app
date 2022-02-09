import { getHeroeByIdAsync } from "../../base/09-promesas"
import '@testing-library/jest-dom'
import heroes from "../../data/heroes";

describe('09 Promesas', () => {
    
    test('should return getHeroeByIdAsync - promess', (done) => {
        const id = 1;
        getHeroeByIdAsync(id).then(hero => {
            expect(hero).toBe(heroes[0]);
            done();
        }) 
    })
    
    test('should obtain error id getHeroeByIdAsync hero doesnt exists', (done) => {
        const id = -1;
        getHeroeByIdAsync(id).catch(err => {
            expect(err).toBe('No se pudo encontrar el héroe');
            done();
        })
    })
    
})
