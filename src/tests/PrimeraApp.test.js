import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp/>', () => {
    test('should show message "msg"', () => {
        const saludo =  'Hola Mundo';
        const wrapper = render(<PrimeraApp saludo={saludo}/>);
        expect(wrapper.getByText(saludo)).toBeInTheDocument();
    })

    //  AHORA CON ENZYME
    test('should show <PrimeraApp /> correctly', () => {
        const saludo =  'Hola Mundo';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should show subtitutle send thorugh props', (done) => {
        const saludo =  'Hola Mundo';
        const subtitulo = 'Prueba de Subtitulo';
        const wrapper = shallow(
        <PrimeraApp 
            saludo = {saludo}
            subtitulo = {subtitulo}
        />);
        expect(wrapper).toMatchSnapshot();
        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo)
        done();
    })
    
})
// enzyme, es más facil para hacer estas pruebas