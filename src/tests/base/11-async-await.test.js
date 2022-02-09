import '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await';

describe('11-async-await', () => {
    test('should getImagen return url`s image', async() => {
        const url = await getImagen();
        expect(url.includes('https://')).toBe(true);
    })
    
})
