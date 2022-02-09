import "@testing-library/jest-dom";
import {getHeroeById, getHeroesByOwner} from '../../base/08-imp-exp';
import heroes from "../../data/heroes";

describe('Tests 08-impo-exp', () => {
    test('should return hero by id', () => {
        const id = 1;
        const heroeTest = getHeroeById(id);

        const heroeData = heroes.find(heroe => heroe.id === id);
        expect(heroeTest).toEqual(heroeData);
    })
    test('should return undefined by id not exist', () => {
        const id = 11;
        const heroeTest = getHeroeById(id);

        expect(heroeTest).toBe(undefined);
    })
    test('should getHeroesByOwner return DC Heroes', () => {
        const owner = 'DC';
        const DCHeroes = heroes.filter(heroe => heroe.owner === owner);

        const DCHeroesTest = getHeroesByOwner(owner);
        expect(DCHeroesTest).toEqual(DCHeroes);
    })
    test('should getHeroesByOwner return Marvel Heroes', () => {
        const owner = 'Marvel';

        const DCHeroesTest = getHeroesByOwner(owner);
        expect(DCHeroesTest.length).toBe(2);
    })
    test('should return undefined if not exists owner', () => {
        const owner = 'Disney';
        const HeroesTest = getHeroesByOwner(owner);
        
        expect(HeroesTest.length).toBe(0);
    })
    
})
